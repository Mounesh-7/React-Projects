import React from 'react';

function Cart({ cartProducts }) {
    var total = 0;
    cartProducts.map((product) => (
        total = total + product.item.cost
    ));

    return (
        <div>
            <div className='container row' style={{ margin: "auto" }}>
                {cartProducts.map((product) => (
                    <div className='m-2 col-5' key={product.item.id}>
                        <div className='card'>
                            <img className='card-img-top' style={{ height: "100px", width: "300px", margin: "auto" }} src={product.item.pic} alt={product.item.name} />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.item.name}</h5>
                                <h2>Price: {product.item.cost}</h2>
                                <div>
                                    <button type='button' className='btn btn-primary'>+</button>
                                    <button type='button' className='btn btn-primary'>{product.quantity}</button>
                                    <button type='button' className='btn btn-primary'>1</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='jumbotron'>
                <h1 className='display-4'>Total Cart Price: {total} rs</h1>
                <a className='btn btn-primary btn-lg' role='button'>Make Payment</a>
            </div>
        </div>
    );
}

export default Cart;
