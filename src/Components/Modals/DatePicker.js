import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
 
class DateExpired extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    console.log(this.props);
    
    return (
      <DatePicker className="form-control"
        selected={this.props.date_returned}
        // onChange={this.handleChange}
        id="date_returned"
        onChange={this.props.getExpired}
      />
    );
  }
}

export default DateExpired