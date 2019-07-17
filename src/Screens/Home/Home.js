import React, { Component } from 'react';
import '../../Support/Styles/home.css';
import BorrowModal from '../../Components/Modals/BorrowModal';
import AddModal from '../../Components/Modals/AddModal';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="wrap">
               <div className="jumbotron" style={{backgroundImage:`url('https://www.dorsetcouncil.gov.uk/CachedImage.axd?ImageName=/image-library/libraries-history-and-culture/libraries/library-banner-images/gillingham-library.jpg&ImageWidth=1400&ImageHeight=1400')`}} >
                    <div className="overlay"></div>
                    <div className="inner">
                        <div className="container text-center">
                            <h2 className="display-4">Welcome to <span style={{fontWeight:"bolder"}}>Library</span></h2>
                            <p>“There is no friend as loyal as a book.” <br/> - Ernest Hemingway</p>
                            <h3>Search the book here!</h3>
                            <div className="row justify-content-center">
                                <input type="text" className="form-control mt-3 mb-3 rounded-pill" style={{width:"500px"}} placeholder="Search..." />
                            </div>                           
                        </div>
                    </div>                               
                </div> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" style={{paddingRight:"0px"}}>
                            <p><b>Categories</b></p>
                            <hr/>
                            <div className="text-left">
                                <p>Novel</p>
                                <p>Comic</p>
                                <p>Science</p>
                                <p>Biography</p>
                                <hr/>
                                <p><b>Status</b></p>
                                <p>Borrowed</p>       
                                <p>Available</p>
                                <hr/>                    
                                <AddModal/>
                            </div>                        
                        </div>
                        <div className="col-lg-10">
                            <div className="row justify-content-center">
                                <div className="col-md-2 mb-5 mr-5">                      
                                    <div className="card text-white" style={{width: '10rem', borderColor:'white', backgroundColor:"#E1067B"}}>                
                                    <img src="https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg" className="image card-img-top cardHome img-fluid" alt="..." />
                                    <h6><span class="badge badge-success">Novel</span></h6>
                                    <div className="middle">
                                        <BorrowModal/>
                                        <Link to='/bookDetail'>
                                            <div className="text"><input type="button" className="btn btn-outline-success btn-sm" value="Detail"/></div>
                                        </Link>                                        
                                    </div>                              
                                        <div className="card-body">
                                            <h5 className="card-text hidden">Harry Potter</h5>
                                            <p className="hidden" style={{fontSize:12}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error cum recusandae, perferendis soluta totam dignissimos, quaerat eaque culpa molestias iure dolores aut alias modi possimus quam amet. Quas, nihil!</p>                                           
                                        </div>
                                    </div>                                              
                                </div>                                                                                 
                            </div>                                                        
                        </div>                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;