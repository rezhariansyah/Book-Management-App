import React, { Component } from 'react';

class Loan extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Borrowed Books</h3>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-2 mb-5 mr-5">                      
                                        <div className="card text-white" style={{width: '10rem', borderColor:'white', backgroundColor:"#E1067B"}}>                
                                            <img src="https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg" className="card-img-top cardHome img-fluid" alt="..." />                               
                                        </div>                                              
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Tittle : Harry Potter</h5>
                                        <p>Category : Novel</p>
                                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate consequatur quaerat, quasi sint sunt quibusdam saepe eligendi impedit possimus ipsa? Obcaecati voluptatum possimus, asperiores eveniet itaque reprehenderit aliquam culpa cumque.</p>                                        
                                    </div>
                                    <div className="col-lg-1 text-center">
                                        <i className="fa fa-trash fa-3x" style={{cursor:"pointer"}} aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3 text-center" style={{maxWidth: '18rem'}}>
                            <div className="card-header">ID KTP</div>
                            <div className="card-body mt-3">
                                <h5 className="card-title" style={{color:'yellow'}}>Penalty : Rp.0</h5>
                                <input type="button" className="btn btn-danger mb-3" value="Returned" />                                
                                <div className="alert alert-danger text-center" role="alert">
                                <p className="card-text">books must be returned before :</p>
                                    DD/MM/YY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loan;