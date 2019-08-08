import React, { Component } from "react";
import { Digital } from "react-activity";
import "react-activity/dist/react-activity.css";

class ActivityLoan extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-12 text-center justify-content-center">
          <Digital color="#E1067B" size={60} speed={1} animating={true}/>
        </div>
      </div>
    );
  }
}

export default ActivityLoan;
