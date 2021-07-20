const express = require('express'); 
var request = require("request")
const app = express()
const port = 5000


//token
//a2de15df832cfb5ef25b1ea13a837c0bb451d9d1da3229eb485d0add38c04e0f

const accesstoken = 'a2de15df832cfb5ef25b1ea13a837c0bb451d9d1da3229eb485d0add38c04e0f'
const apiURL = 'https://order-pizza-api.herokuapp.com/api/'

// const authAxios = axios.create({
//   apiURL,
//   headers: {
//     Authorization: `Bearer ${accesstoken}`
//   }
// })

//test
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/auth', (req, res) => {
    request(
        "https://order-pizza-api.herokuapp.com/api/auth",
        function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    }
    );
  })

  //get current orders
app.get('/orders', (req, res) => {
    request(
        "https://order-pizza-api.herokuapp.com/api/orders",
        function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    }
    );
  })

  // send an order
  app.post('/ordersend', (req, res) => {
    request(
        "https://order-pizza-api.herokuapp.com/api/orders",
        function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    }
    );
  })

  //delete an order
  // app.delete('/orderdelete', (req, res) => {
  //   request(
  //       "https://order-pizza-api.herokuapp.com/api/orders/`${}`",
  //       function (error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //           res.send(body);
  //       }
  //   }
  //   );
  // })

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
