const express = require("express");

const app = express();

const port = 3002;

let products = [
  { id: 1, title: "iphone 13", price: 1099 },
  { id: 2, title: "iphone 14", price: 1299 },
  { id: 3, title: "iphone 15", price: 2099 },
];

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    products,
  });
});

app.get("/products/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) {
      res.status(404).send({ message: `no product found with this id ${id}`});
    }
    res.send({
      product,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
