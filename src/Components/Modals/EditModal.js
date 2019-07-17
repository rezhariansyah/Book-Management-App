import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';

class EditModal extends React.Component {
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
        <input type="button" onClick={this.toggle} className="btn btn-outline-success btn-sm mr-2 mb-2" value="Edit">{this.props.buttonLabel}</input>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Modal</ModalHeader>
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

export default EditModal;