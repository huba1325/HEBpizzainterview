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

        const user = axios.post('https://order-pizza-api.herokuapp.com/api/auth', 
        { 
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin': '*'

            // },
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