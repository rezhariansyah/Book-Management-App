import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBorrow } from "../../Publics/Actions/Borrow";

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

  penalty = () => {    
    let penalty = 0
    let expired = this.props.Borrow.loanList[0].date_returned.split('T')[0].slice(-2)
    let date = this.props.Borrow.loanList[0].borrow_date.split('T')[0].slice(-2)
    if(expired > date) {
      penalty += 2000
      console.log(expired);
      console.log(date);
      
    } 
    return penalty
  } 

  renderLoanJsx = () => {
    let jsx = this.props.Borrow.loanList.map(val => {
      return (
        <tr key={val.id_borrow}>
          <th>{val.ktp}</th>
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
          <td>Rp. {this.penalty()}</td>
          <td>
            <input
              type="button"
              className="btn btn-outline-danger btn-sm"
              value="Returned"
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
              <th scope="col">ID Card</th>
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
