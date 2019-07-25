import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import DateExpired from "./DatePicker";
import { connect } from "react-redux";
import { addLoan } from "../../Publics/Actions/Borrow";
import swal from "sweetalert";

class BorrowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  addLoan = async () => {
    let data = {
      ktp: this.state.ktp,
      id_book: this.props.book.id_book,
      date_returned: this.state.date_returned
    };
    console.log(data);

    swal({
      title: "Add to Loan Success",
      icon: "success",
      button: "gotcha!!!"
    });

    await this.props.dispatch(addLoan(data));
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  getExpired = e => {
    console.log(e);

    let expired = e;
    this.setState({ date_returned: expired });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    console.log("batas");
    console.log(this.props.book);
    return (
      <div>
        <input
          type="button"
          onClick={this.toggle}
          className="btn btn-outline-primary mb-2 btn-sm"
          value="Borrow"
        >
          {this.props.buttonLabel}
        </input>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            User Detail
          </ModalHeader>
          <ModalBody>
            <Form>
              <Label>ID Card</Label>
              <input
                type="text"
                className="form-control"
                placeholder="KTP / SIM"
                id="ktp"
                onChange={e => this.setState({ ktp: e.target.value })}
              />
              <Label className="mt-3">Book ID</Label>
              <input
                type="text"
                className="form-control"
                placeholder="Books ID"
                value={this.props.book.id_book}
              />
              <Label className="mt-4 mr-3">Expired Date : </Label>
              <DateExpired
                getExpired={this.getExpired}
                date_returned={this.state.date_returned}
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addLoan.bind(this)}>
              Borrow
            </Button>{" "}
            <Link to="/loan">
              <Button color="secondary" onClick={this.toggle}>
                All Loan Book
              </Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Loan: state.Loan
  };
};

export default connect(mapStateToProps)(BorrowModal);
