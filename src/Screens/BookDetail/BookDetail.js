import React, { Component } from "react";
import "../../Support/Styles/bookDetail.css";
import BorrowModal from "../../Components/Modals/BorrowModal";
import EditModal from "../../Components/Modals/EditModal";
import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";
import swal from "sweetalert";
import { connect } from "react-redux";
import { deleteBook } from "../../Publics/Actions/Book";

class BookDetail extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    this.getBookData();
  }

  getBookData = () => {
    var idUrl = this.props.match.params.id;
    Axios.get(urlApi + "/book/" + idUrl)
      .then(res => {
        this.setState({ book: res.data.result[0] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteBook = () => {
    let id = this.state.book.id_book;
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        await this.props.dispatch(deleteBook(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        }).then(function() {
          window.location = "/";
        });
      }
    });
  };

  render() {
    let { title, description, status, category, img } = this.state.book;

    return (
      <div>
        <div className="jumbotron" style={{ backgroundImage: `url(${img})` }}>
          <div className="row">
            <div className="container">
              <div className="row">
                {localStorage.role == "user" ? (
                  ""
                ) : (
                  <input
                    type="button"
                    className="btn btn-outline-danger btn-sm mr-2 mb-2"
                    value="Delete"
                    onClick={() => this.deleteBook()}
                  />
                )}

                {localStorage.role == "user" ? (
                  ""
                ) : (
                  <div>
                    <EditModal book={this.state.book} />
                  </div>
                )}
                {
                  status ? <BorrowModal book={this.state.book} /> : ""
                }
                
              </div>
            </div>
          </div>

          <div className="card cardBook" style={{ maxWidth: "13rem" }}>
            <img
              src={img}
              style={{ height: "299px" }}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h4>{title}</h4>
              <p>
                <b>Book Category : </b>
                {category}
              </p>
              <p>
                <b>Status Book : </b>
                {status ? (
                  <h6 style={{ display: "inline" }}>
                    <span
                      style={{ padding: "4px" }}
                      className="badge-success rounded-pill"
                    >
                      &nbsp;Available&nbsp;
                    </span>
                  </h6>
                ) : (
                  <h6 style={{ display: "inline" }}>
                    <span
                      style={{ padding: "4px" }}
                      className="badge-danger rounded-pill"
                    >
                      &nbsp;Borrowed&nbsp;
                    </span>
                  </h6>
                )}
              </p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Book: state.Book
  };
};

export default connect(mapStateToProps)(BookDetail);
