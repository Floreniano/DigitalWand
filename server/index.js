const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dataCatalog = require('./data/catalog.json');
const dataUsers = require('./data/users.json');
const dataSuccessfulAuth = require('./data/successfulAuth.json');
const dataNoSuccessfulAuth = require('./data/noSuccessfulAuth.json');

app.get('/api/catalog', (req, res) => {
  // console.log(fs.readFileSync('./catalog.json', 'utf8'));
  res.status(200).json(dataCatalog);
});

app.get('/api/catalog/:id', (req, res) => {
  res.status(200).json(dataCatalog[0].data[req.params.id - 1]);
});

app.get('/api/users', (req, res) => {
  res.status(200).json(dataUsers);
});

app.get('/api/test', (req, res) => {
  res.status(200).json(dataSuccessfulAuth);
});

app.post(
  '/api/users',
  [
    check('password', 'Пароль может содержать только латинские буквы алфавита и цифры')
      .matches(/^[a-zA-Z0-9_ ]*$/)
      .isLength({ min: 6 })
      .withMessage('Минимальная длина пароля 6 символов'),
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      const { number, password } = req.body;
      for (let i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].phone === number && dataUsers[i].password === password) {
          return res
            .status(200)
            .json(dataSuccessfulAuth.find((item) => item.data.user.phone === dataUsers[i].phone));
        }
      }
      if (!errors.isEmpty()) {
        return res.status(200).json(errors.array());
      }
      return res.status(200).json(dataNoSuccessfulAuth);
    } catch (e) {
      return res.status(500).json([{ msg: 'Ошибка 500' }]);
    }
  },
);

app.put('/api/catalog/:id', (req, res) => {
  const dataCard = dataCatalog[0].data.find((item) => item.id === req.body.cardId);
  dataCard.rating = req.body.ratingValue;
  res.status(200).json({
    status: 200,
    msg: '',
    data: {
      edited: req.params.id, // ID отредактированного пользователя
    },
  });
});

app.put('/api/user/:id', (req, res) => {
  const data = dataSuccessfulAuth.find(
    (dataUser) => dataUser.data.user.id === Number(req.params.id),
  );
  const dataUser = data.data.user;
  const dataAuth = dataUsers.find((item) => item.phone === req.body.prevPhone);

  const modifiedData = req.body;

  dataAuth.phone = modifiedData.phone;
  dataUser.phone = modifiedData.phone;
  dataUser.name = modifiedData.name;
  dataUser.address = modifiedData.address;
  dataUser.email = modifiedData.email;
  res.status(200).json({
    status: 200,
    msg: '',
    data: {
      edited: req.params.id, // ID отредактированного пользователя
    },
  });
});

const port = 5000;

/* eslint-disable no-console */
app.listen(port, () => console.log(`Server started on port ${port}`));
