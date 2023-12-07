const express = require("express")

const app = express()

const port = 3002

let products = [
    {id: 1, title: 'iphone 13', price: 1099},
    {id: 2, title: 'iphone 14', price: 1299},
    {id: 3, title: 'iphone 15', price: 2099}
]

app.get('/', (req, res) => {
    res.send('welcome to the express server')
})

app.get('/products', (req, res) => {
    res.send({
        products,
    })
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = products.find((product) => product.id === id)

    res.send({
        product,
    })
})

app.listen(port, () => {
    console.log(`server is runing at ${port}`);
})
