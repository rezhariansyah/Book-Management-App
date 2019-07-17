import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';

class AddModal extends React.Component {
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
        <input type="button" onClick={this.toggle} className="btn btn-outline-success mb-2" value="Add Book">{this.props.buttonLabel}</input>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
          <ModalBody>
            <Form>
              <Label>Book Title</Label>
              <input type="text" className="form-control"/>
              <Label className="mt-2">Writer</Label>
              <input type="text" className="form-control"/>
              <Label className="mt-2">Category</Label>
              <input type="text" className="form-control"/>
              <Label className="mt-2">Cover Image</Label>
              <input type="text" className="form-control"/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;