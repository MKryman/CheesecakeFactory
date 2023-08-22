import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center" style={{height: '100vh', backgroundColor: '#e001a6'}}>
            <div className="text-center">
                <h1 className="display-4">Your order has been submitted.</h1>
                <p className="lead">
                    A confirmation email has been sent to the address provided. Thank you and enjoy!
                </p>
            </div>
        </div>
        </>
    )
}

export default Success;