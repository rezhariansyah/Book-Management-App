import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllBorrow, returnLoan } from "../../Publics/Actions/Borrow";
import { getDataUser } from "../../Publics/Actions/Book";
import swal from 'sweetalert';
import Unauthorized from "../ErrorTemplate/401Unauthorized";
import ActivityLoan from "../../Components/ActivityIndicator/loanLoading";

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.getAllBorrow().then(loanList => {
      this.setState({ loanList, loading: false });
    });
    this.getAllUsers()
  }

  getAllBorrow = async () => {
    await this.props.dispatch(getAllBorrow());
  };

  penalty = (id_borrow, borrow, date_returned) => {    
    let id = id_borrow
    let expired = parseInt(date_returned.split('T')[0].slice(-2))
    let pinjam = parseInt(borrow.split('T')[0].slice(-2))
    let total = 0

    console.log("tanggal pinjam",id, pinjam, expired)

    for(let i=expired ; i<pinjam ; i++) {
      total += 2000
    }

    return total
  } 

  retured = (id_borrow) => {
    let id = id_borrow

    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        await this.props.dispatch(returnLoan(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        })
      }
    });
  }

  getAllUsers = async () => {
    await this.props.dispatch(getDataUser());
  }


  renderLoanJsx = () => {
    console.log("userlist",this.props.Book.userList)
    let jsx = this.props.Borrow.loanList.map((val, index) => {
      return (
        <tr key={val.id_borrow}>
          <th>{val.fullname}<br/>{val.ktp}</th>
          <td>
            <img
              src={val.img}
              alt=""
              style={{ width: "60px", borderRadius: "12px", height: "96px" }}
            />
          </td>
          <td>{val.title}</td>
          <td>{val.borrow_date.split('T')[0]}</td>
          <td>{val.date_returned.split('T')[0]}</td>
          <td>Rp. {this.penalty(val.id_borrow, val.borrow_date, val.date_returned)}</td>
          <td>
            <input
              type="button"
              className="btn btn-outline-danger btn-sm"
              value="Returned"
              onClick={() => this.retured(val.id_borrow)}
            />
          </td>
        </tr>
      );
    });
    return jsx;
  };

  render() {
    return (
      <Fragment>     
      {
        localStorage.token ? <div className="container mt-5">
        <div className="row justify-content-center mb-3">
          <h3>Loan List</h3>
        </div>
        <table className="table table-hover table-dark text-center">
          <thead>
            <tr>
              <th scope="col">Users</th>
              <th scope="col">Image</th>
              <th scope="col">Book Title</th>
              <th scope="col">Loan Date</th>
              <th scope="col">Expired Date</th>
              <th scope="col">Penalty</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          {this.state.loading ? (
            <td colspan="8" style={{height:"100px"}}><ActivityLoan/></td>
          ) : (
            <tbody>{this.renderLoanJsx()}</tbody>
          )}
        </table>
      </div> : <Unauthorized/>
      }
      
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Borrow: state.Borrow,
    Book: state.Book
  };
};

export default connect(mapStateToProps)(Loan);
