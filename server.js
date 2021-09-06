const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();

const catalog = [
  {
    status: 200,
    errorMessage: '',
    data: [
      {
        id: 1,
        name: 'Product 1',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 9',
        rating: 5,
        price: 500,
        images: [
          {
            id: 1,
            url: 'https://picsum.photos/200',
          },
          {
            id: 2,
            url: 'https://picsum.photos/200',
          },
        ],
        mainImage: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
        rating: 3,
        price: 1500,
        images: [
          {
            id: 3,
            url: 'https://picsum.photos/200',
          },
          {
            id: 4,
            url: 'https://picsum.photos/200',
          },
        ],
        mainImage: 4,
      },
      {
        id: 3,
        name: 'Product 3',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
        rating: 3,
        price: 700,
        images: [
          {
            id: 5,
            url: 'https://picsum.photos/200',
          },
          {
            id: 6,
            url: 'https://picsum.photos/200',
          },
        ],
        mainImage: 6,
      },
      {
        id: 4,
        name: 'Product 4',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
        rating: 3,
        price: 800,
        images: [
          {
            id: 7,
            url: 'https://picsum.photos/200',
          },
          {
            id: 8,
            url: 'https://picsum.photos/200',
          },
        ],
        mainImage: 8,
      },
    ],
  },
];

const users = [
  {
    phone: '79999999999',
    password: 'qwerty',
  },
  {
    phone: '79999999998',
    password: 'qwert',
  },
];

const successfulAuth = [
  {
    status: 200,
    msg: '',
    data: {
      auth: true,
      user: {
        id: 1,
        phone: '79999999999',
        email: 'mail1@mailbox.com',
        name: 'Bob',
        address: 'Russia, Very-long street',
        sale: 10,
      },
    },
  },
  {
    status: 200,
    msg: '',
    data: {
      auth: true,
      user: {
        id: 2,
        phone: '79999999998',
        email: 'mail2@mailbox.com',
        name: 'Bob',
        address: 'Russia, Very-long street',
        sale: 10,
      },
    },
  },
];

const noSuccessfulAuth = [
  {
    status: 200,
    msg: 'Неверный номер телефона или пароль.',
    data: {
      auth: false,
    },
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/catalog', (req, res) => {
  res.status(200).json(catalog);
});

app.get('/api/catalog/:id', (req, res) => {
  res.status(200).json(catalog[0].data[req.params.id - 1]);
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/api/test', (req, res) => {
  res.status(200).json(successfulAuth);
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
      for (let i = 0; i < users.length; i++) {
        if (users[i].phone === number && users[i].password === password) {
          return res
            .status(200)
            .json(successfulAuth.find((data) => data.data.user.phone === users[i].phone));
        }
      }
      if (!errors.isEmpty()) {
        return res.status(200).json(errors.array());
      }
      return res.status(200).json(noSuccessfulAuth);
    } catch (e) {
      return res.status(500).json([{ msg: 'Ошибка 500' }]);
    }
  },
);

app.put('/api/catalog/:id', (req, res) => {
  const dataCard = catalog[0].data.find((item) => item.id === req.body.cardId);
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
  const data = successfulAuth.find((dataUser) => dataUser.data.user.id === Number(req.params.id));
  const dataUser = data.data.user;
  const dataAuth = users.find((item) => item.phone === req.body.prevPhone);

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
