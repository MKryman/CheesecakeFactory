import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LivePreview from '../Components/LivePreview';

const baseFlavors = ['Classic', 'Chocolate', 'Chocolate Chip', 'Graham',]

const toppings = [
    'Caramel',
    'Cherry Pie Filling',
    'Chocolate Shavings',
    'Dark Chocolate',
    'Fresh Berries',
    'Fresh Fruit Slices',
    'Lemon Curd',
    'Oreo',
    'Peanut Butter Cups',
    'Powdered Sugar',
    'Strawberry Sauce',
    'Thin Mints',
    'Whipped Cream',
    'White Chocolate',
]


const Order = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setBaseFlavor] = useState(baseFlavors[0]);
    const [chosenToppings, setChosenToppings] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [date, setDate] = useState('');

    const navigate = useNavigate();


    const onFlavorChange = e => {
        setBaseFlavor(e.target.value);
    }

    const onSelectTopping = t => {
        if (chosenToppings.includes(t)) {
            setChosenToppings(chosenToppings.filter(topping => topping !== t))
        } else {
            setChosenToppings([...chosenToppings, t])
        }
    }

    const onOrderSubmit = async () => {
        await axios.post('api/cheesecake/submitorder',
            { name, email, baseFlavor, toppings: chosenToppings.join(', '), specialRequest: specialRequests, quantity, date, total: calculateTotal() })
        navigate('/success');
    }

    const calculateTotal = () => {
        const toppingsTotal = 3.95 * chosenToppings.length;
        const total = (49.99 + toppingsTotal) * quantity;
        return total
    }

    return (
        <>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select className="form-select" aria-label="base flavor" onChange={onFlavorChange}>
                            <option defaultValue="Choose A Base Flavor">Choose A Base Flavor</option>
                            <option value={baseFlavors[0]}>Classic</option>
                            <option value={baseFlavors[1]}>Chocolate</option>
                            <option value={baseFlavors[2]}>Chocolate Chip</option>
                            <option value={baseFlavors[3]}>Graham</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping an adittional $3.95)</label>
                        {toppings.map(t => {
                            return (
                                <div className="form-check" key={t}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={chosenToppings.includes(t)}
                                        onChange={() => onSelectTopping(t)} />
                                    <label className="form-check-label">{t}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows={3}
                            onChange={e => setSpecialRequests(e.target.value)} value={specialRequests} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input className="form-control" type="number" value={quantity}
                            onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input className="form-control" type="date" value={date}
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={onOrderSubmit}>Submit Order</button>
                </div>
                <LivePreview baseFlavor={baseFlavor}
                    toppings={chosenToppings}
                    deliveryDate={date}
                    quantity={quantity}
                    specialRequests={specialRequests}
                    total={calculateTotal()}
                    name={name}
                />
            </div>
        </>
    )

}

export default Order;