import React, { Component } from 'react'
import axios from 'axios';


const body = {
    "password": "test",
    "username": "test"
  };

export default class Auth extends Component {

    constructor() {
        super();
        this.state = {
            token: ""
        };
    }

    componentDidMount() {

        axios.post('https://order-pizza-api.herokuapp.com/api/auth', 
        body,
        { 
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
            password: 'test',    
            username: 'test'
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