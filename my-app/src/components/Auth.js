import React, { Component } from 'react'
import axios from 'axios';

export default class Auth extends Component {

    constructor() {
        super();
        this.state = {
            token: ""
        };
    }

        componentDidMount() {

        var reqData = {
                passowrd: "test",
                username: "test"
            };
         axios({
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/auth',
        data: (reqData),   

    headers: { 
      "Content-Type": "application/json",
    }
  }).then((response) =>{
            console.log(response)
            //this.setstate would go here to store the token
        }).catch((error) =>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }

}

export { Auth }