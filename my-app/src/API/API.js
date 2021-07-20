import React from 'react';
import axios from 'axios';

class GetRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            access_token: null
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
        }).catch((error) =>{
            console.log(error);
        })
    }
    render() {
        const { access_token } = this.state;
        return (
            <div className="card text-center m-3">
                <div className="card-body">
                    Show me the toke: {access_token}
                </div>
            </div>
        );
    }
}

export { GetRequestSetHeaders };