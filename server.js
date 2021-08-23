const express = require('express');

const app = express();

const catalog = [
  {
    status: 200,
    errorMessage: '',
    data: [
      {
        id: 1,
        name: 'Product 1',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 9',
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
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
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
        name: 'Product 2',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
        rating: 3,
        price: 700,
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
        id: 4,
        name: 'Product 2',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 25',
        rating: 3,
        price: 800,
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
    ],
  },
];

const products = [
  {
    status: 200,
    errorMessage: '',
    data: {
      id: 1,
      name: 'Product 1',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. S 9',
      rating: 5,
      price: 999,
      images: [
        {
          id: 1,
          url: 'https://picsum.photos/200',
        },
        {
          id: 2,
          url: 'https://picsum.photos/201',
        },
      ],
      mainImage: 1,
    },
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

app.get('/api/catalog', (req, res) => {
  res.status(200).json(catalog);
});

app.get('/api/product', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

const port = 5000;

/* eslint-disable no-console */
app.listen(port, () => console.log(`Server started on port ${port}`));
