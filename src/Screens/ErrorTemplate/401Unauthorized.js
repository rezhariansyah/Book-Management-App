import React, { Component } from 'react';
import './unauthorized.css';
import { Link } from "react-router-dom";

class Unauthorized extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>1</h1>
                </div>
                <p className="mt-5" style={{paddingTop:"23px"}}>You are Unauthorized account. maybe you need to login first or call our admin</p>
                <Link to='/'>home page</Link> 
                </div>
            </div>
        );
    }
}

export default Unauthorized;