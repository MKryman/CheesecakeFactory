import React from "react";
import dayjs from 'dayjs';

const LivePreview = ({ baseFlavor, toppings, deliveryDate, quantity, specialRequests, total, name }) => {
    return (
        <div className="col-md-6 position-sticky" style={{ top: "2rem" }}>
            <h2 className="mb-4">Live Preview</h2>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="./cheesecake.jpg"
                    className="card-img-top"
                    alt="cheesecake"
                />
                <div className="card-body">
                    <h5 className="card-title">{name}'s Custom Cheesecake</h5>
                    <p className="card-text">Base: {baseFlavor}</p>
                    <p className="card-text">Toppings: {toppings.join(', ')}</p>
                    <p className="card-text">Special Requests: {specialRequests}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Delivery Date: {dayjs(deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fw-bold">Total: ${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default LivePreview;