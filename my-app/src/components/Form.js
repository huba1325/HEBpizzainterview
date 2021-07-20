import React from 'react';
import './Form.css'
import { Modal } from 'react-bootstrap';

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    handleCloseModal = () => {
      this.setState({
        isOpen: false
      });
    };
      
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        isOpen: true
      });
    };

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (

        <div className = "form-box">
        <h5 className = "form-step"> Enter your order below </h5>
        <br />
        <form onSubmit={this.handleSubmit}>

        <div className = "field1">

          <label>
            Crust : &nbsp;
            <input
              type="text"
              name="crust"
              defaultValue={this.state.crust}
              onChange={this.handleChange}
              ref={node => (this.inputNode = node)}
            />
          </label>
          <br />
          <label>
            Flavor : &nbsp;
            <input
              type="text"
              name="flavor"
              defaultValue={this.state.flavor}
              onChange={this.handleChange}
              ref={node => (this.inputNode = node)}
            />
          </label>
          <br />
          <label>
            Size : &nbsp;
            <input
              type="text"
              name="size"
              defaultValue={this.state.size}
              onChange={this.handleChange}
              ref={node => (this.inputNode = node)}
            />
          </label>
          <br />
          <label>
            Table # : &nbsp;
            <input
              type="number"
              name="tableNum"
              defaultValue={this.state.tableNum}
              onChange={this.handleChange}
              ref={node => (this.inputNode = node)}
            />
          </label>
          <br />
          </div>

          <button type="submit" class="button" onClick={this.openModal}>Submit</button>

        <Modal
      show={this.state.isOpen} 
      onHide={this.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Thank you for ordering with us, here is your order conformation!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p id="order">
            Crust : &nbsp; {this.state.crust}
            <br />
            Flavor : &nbsp; {this.state.flavor}
            <br />
            Size : &nbsp; {this.state.size}
            <br />
            Table Number : &nbsp; {this.state.tableNum}
        </p>
      </Modal.Body>
    </Modal>


        </form>
        </div>
      )
    }
  }
  export {NameForm}