import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import ViewOrders from './Pages/ViewOrders';
import ViewSpecificOrder from './Pages/ViewSpecificOrder'
import Success from './Pages/Success';

class App extends React.Component {

render() {
    return (
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/order' element={<Order />} />
                <Route exact path='/success' element={<Success />} />
                <Route exact path='/viewOrders' element={<ViewOrders />} />
                <Route exact path='/viewSpecificOrder/:id' element={<ViewSpecificOrder />} />
            </Routes>
        </Layout>
    );
}
};

export default App;