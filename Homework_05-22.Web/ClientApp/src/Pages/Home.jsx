import React from "react";
import {Link} from 'react-router-dom';

const Home =() =>{
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: 600, backgroundColor: '#f2f2f2'}} >
        <div className="text-center">
            <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
            <p className="lead">
                <Link to="/order">
                    <button className="btn btn-lg btn-dark">Click here to order your own custom cheesecake</button>
                </Link>
            </p>
        </div>
      </div> 
    )
}

export default Home;