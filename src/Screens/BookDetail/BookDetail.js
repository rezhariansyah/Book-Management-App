import React, { Component } from "react";
import "../../Support/Styles/bookDetail.css";
import BorrowModal from "../../Components/Modals/BorrowModal";
import EditModal from "../../Components/Modals/EditModal";
import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";

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
        this.setState({ book: res.data.result });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let {
      title,
      writer,
      description,
      create_at,
      status,
      category,
      shelf,
      img
    } = this.state.book;
    return (
      <div>
        <div className="jumbotron" style={{ backgroundImage: `url(${img})` }}>
          <div className="row">
            <div className="container">
              <div className="row">
                <input
                  type="button"
                  className="btn btn-outline-danger btn-sm mr-2 mb-2"
                  value="Delete"
                />
                <EditModal book={this.state.book}/>
                <BorrowModal />
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
                {status ? "Available" : "Borrowed"}
              </p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
