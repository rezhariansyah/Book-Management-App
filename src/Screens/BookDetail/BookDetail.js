import React, { Component } from 'react';
import '../../Support/Styles/bookDetail.css'
import BorrowModal from '../../Components/Modals/BorrowModal';
import EditModal from '../../Components/Modals/EditModal';

class BookDetail extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron" style={{backgroundImage:`url('https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg)`}}>
                    <div className="row">
                    <div className="container">
                        <div className="row">
                            <input type="button" className="btn btn-outline-danger btn-sm mr-2 mb-2" value="Delete"></input>
                            <EditModal/>
                            <BorrowModal/>
                        </div>                       
                    </div>
                    </div>
                    
                    <div className="card cardBook" style={{maxWidth: '15rem'}}>
                        <img src="https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg" style={{height:"299px"}} className="card-img-top" alt="..." />
                    </div>                  
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4>Title</h4>
                            <p>category</p>
                            <p>create at</p>
                            <p>desc</p>
                        </div>  
                    </div> 
                </div>
                                       
            </div>
        );
    }
}

export default BookDetail;