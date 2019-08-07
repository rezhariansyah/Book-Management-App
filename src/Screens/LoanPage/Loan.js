import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBorrow, returnLoan } from "../../Publics/Actions/Borrow";
import swal from 'sweetalert';

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
  }

  getAllBorrow = async () => {
    await this.props.dispatch(getAllBorrow());
  };

  penalty = (id_borrow, borrow, date_returned) => {    
    let id = id_borrow
    let expired = parseInt(date_returned.split('T')[0].slice(-2))
    let pinjam = parseInt(borrow.split('T')[0].slice(-2))
    let total = 0

    console.log(id, pinjam, expired)

    for(let i=pinjam ; i<expired ; i++) {
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

  renderLoanJsx = () => {
    let jsx = this.props.Borrow.loanList.map((val, index) => {
      return (
        <tr key={val.id_borrow}>
          <th>{index + 1}</th>
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
    console.log("batas");
    console.log(this.props.Borrow.loanList);
    return (
      <div className="container mt-5">
        <div className="row justify-content-center mb-3">
          <h3>Loan List</h3>
        </div>
        <table className="table table-hover table-dark text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Book Title</th>
              <th scope="col">Loan Date</th>
              <th scope="col">Expired Date</th>
              <th scope="col">Penalty</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          {this.state.loading ? (
            <tbody >LOADING...</tbody>
          ) : (
            <tbody>{this.renderLoanJsx()}</tbody>
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Borrow: state.Borrow
  };
};

export default connect(mapStateToProps)(Loan);
