import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';
import { connect } from "react-redux";
import { updateBook } from "../../Publics/Actions/Book";

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

  updateBook = () => {
    let title = this.title.value
    let writer = this.writer.value
    let category = this.category.value
    let img = this.img.value

    let newData = {
      title,
      writer,
      category,
      img
    }

    // this.state.editBook.push(newData)

    console.log(newData)

    this.props.dispatch(updateBook(this.state.newData))
    // this.setState({
    //   editBook: this.props.Book.bookList.result
    // })
  }

  handleUpdate = (event) => {
    this.setState({title: event.target.value})
  }

  render() {
    console.log(this.props.book)
    return (
      <div>
        <input type="button" onClick={this.toggle} className="btn btn-outline-success btn-sm mr-2 mb-2" value="Edit">{this.props.buttonLabel}</input>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Book</ModalHeader>
          <ModalBody>
            <Form>
              <Label>Book Title</Label>
              <input type="text" ref={(input) => {this.props.book.title = input}}  className="form-control"/>
              <Label className="mt-2" >Writer</Label>
              <input type="text" ref={(input) => {this.writer = input}} value={this.props.writer} className="form-control"/>
              <Label className="mt-2">Category</Label>
              <input type="text" ref={(input) => {this.category = input}} value={this.props.category} className="form-control"/>
              <Label className="mt-2">Cover Image</Label>
              <input type="text" ref={(input) => {this.img = input}} placeholder={this.props.img} className="form-control"/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateBook.bind(this)}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editBook: state.Book
  };
};

export default connect(mapStateToProps)(EditModal);