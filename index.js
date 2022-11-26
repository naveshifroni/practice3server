import express from 'express'
import { products } from './products/products.js';
import cors from 'cors'
import { v4 } from 'uuid';



const app = express();
app.use(cors());
app.use(express.json());




app.get('/products', (req, res) => {
    /* res.json(movies) */
    res.json(products)
})

app.post('/products', (req, res) => {
    //לקבל מידע מהלקוח ולשמור בשרת
    const product = req.body
    product.id = v4()
    products.push(product)

    res.json({
        message: "Product Saved!"
    })
})

app.listen(3000)