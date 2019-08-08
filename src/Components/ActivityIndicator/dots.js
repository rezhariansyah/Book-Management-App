import React, { Component } from "react";
import { Digital } from "react-activity";
import "react-activity/dist/react-activity.css";

class Activity extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-12 text-center" style={{marginTop:"200px"}}>
          <Digital color="#E1067B" size={90} speed={1} animating={true}/>
        </div>
      </div>
    );
  }
}

export default Activity;
