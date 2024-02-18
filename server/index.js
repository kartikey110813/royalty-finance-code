const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const env = require('dotenv')
const cors = require('cors')

env.config();

const app = express()
 
var Publishable_Key = process.env.PUBLISHABLE_KEY
var Secret_Key = process.env.SECRET_KEY
 
const stripe = require('stripe')(Secret_Key)
 
const port = process.env.PORT || 3000
 
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use(express.static('public'));
 
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
    res.render('Home', {
    key: Publishable_Key
    })
})

app.post('/invest', (req, res) => {

    const amount = req.body;
    res.send(amount);
    console.log(amount.amount)
})
 
app.post('/payment', (req, res) => {
 
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "eur",
        },
        (stripeErr, stripeRes) => {
            if(stripeErr){
                res.status(500).json(stripeErr);
            } else{
                res.status(200).json(stripeRes);
            }
        }
    );
});
 
app.listen(port, function(error){
    if(error) throw error
    console.log(`Listening at http://localhost:${process.env.PORT}`)
})