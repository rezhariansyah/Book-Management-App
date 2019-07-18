import React, { Component } from "react";
import "../../Support/Styles/home.css";
import BorrowModal from "../../Components/Modals/BorrowModal";
import AddModal from "../../Components/Modals/AddModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllBooks, getAllNovel } from "../../Publics/Actions/Book";


class Home extends Component {
  state = {
    bookList: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async () => {
    await this.props.dispatch(getAllBooks());
    this.setState({
      bookList: this.props.Book.bookList.result
    });
  };

  //masih error
  getAllNovel = async () => {
    await this.props.dispatch(getAllNovel());
    this.setState({
      bookList: this.props.Book.bookList.result
    });
  };

  renderBookJsx = () => {
    let jsx = this.state.bookList.map(val => {
      return (
        <div key={val.id_book} className="col-md-2 mb-5 mr-5">
          <div
            className="card text-white"
            style={{
              width: "10rem",
              borderColor: "white",
              backgroundColor: "#E1067B"
            }}
          >
            <img
              src={val.img}
              className="image card-img-top cardHome img-fluid"
              alt="..."
            />
            <h6>
              <span class="badge badge-success">
                {val.status ? "Available" : "Borrowed"}
              </span>
            </h6>
            <div className="middle">
              <BorrowModal />
              <Link to="/bookDetail">
                <div className="text">
                  <input
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    value="Detail"
                  />
                </div>
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-text hiddenTitle">{val.title}</h5>
              <p className="hidden" style={{ fontSize: 12 }}>
                {val.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return jsx;
  };

  render() {
    console.log("batas");
    console.log(this.props.Book.bookList.result);
    return (
      <div className="wrap">
        <div
          className="jumbotron"
          style={{
            backgroundImage: `url('https://www.dorsetcouncil.gov.uk/CachedImage.axd?ImageName=/image-library/libraries-history-and-culture/libraries/library-banner-images/gillingham-library.jpg&ImageWidth=1400&ImageHeight=1400')`
          }}
        >
          <div className="overlay" />
          <div className="inner">
            <div className="container text-center">
              <h2 className="display-4">
                Welcome to <span style={{ fontWeight: "bolder" }}>Library</span>
              </h2>
              <p>
                “There is no friend as loyal as a book.” <br /> - Ernest
                Hemingway
              </p>
              <h3>Search the book here!</h3>
              <div className="row justify-content-center">
                <input
                  type="text"
                  className="form-control mt-3 mb-3 rounded-pill"
                  style={{ width: "500px" }}
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-1" style={{ paddingRight: "0px" }}>
              <p>
                <b>Categories</b>
              </p>
              <hr />
              <div className="text-left">
                <p className="cursor">All</p>
                <p className="cursor" onClick={this.getAllNovel}>
                  Novel
                </p>
                <p className="cursor">Comic</p>
                <p className="cursor">Science</p>
                <p className="cursor">Biography</p>
                <hr />
                <p>
                  <b>Status</b>
                </p>
                <p className="cursor">Borrowed</p>
                <p className="cursor">Available</p>
                <hr />
                <AddModal />
              </div>
            </div>
            <div className="col-lg-10">
              <div className="row justify-content-center">
                {this.renderBookJsx()}
              </div>
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

export default connect(mapStateToProps)(Home);
