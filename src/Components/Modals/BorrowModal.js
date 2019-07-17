import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import DateExpired from './DatePicker';

class BorrowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.toggle} className="btn btn-outline-primary mb-2 btn-sm" value="Borrow">{this.props.buttonLabel}</input>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>User Detail</ModalHeader>
          <ModalBody>
            <Form>
                <Label>ID Card</Label>
                <input type="text" className="form-control" placeholder="KTP / SIM / Passport"/>
                <Label className="mt-3">Book ID</Label>
                <input type="text" className="form-control" placeholder="Books ID"/>
                <Label className="mt-4 mr-3">Expired Date : </Label>
                <DateExpired/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Link to='/loan'>
               <Button color="secondary" onClick={this.toggle}>All Loan Book</Button> 
            </Link>           
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BorrowModal;