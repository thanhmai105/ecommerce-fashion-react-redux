import React, { useState } from 'react';
import { deleteCart } from '../redux/ActionCreator';

function RenderItemCart({ product }) {

    const [quantity, setQuantity] = useState(product.quantity)

    return (
        <tr className='border-bottom'>
            <td>
                <div className="cart-item">
                    <img src={product.image} alt="" />
                    <div className="info-cart-item">
                        <span>{product.title}</span><br />
                        <span className="price">${product.price.toFixed(2)}</span><br />
                        <p onClick={() => {
                            // console.log(product);
                            console.log(deleteCart(product));
                            deleteCart(product.id)
                        }}>remove</p>
                    </div>
                </div>
            </td>
            <td>
                <input
                    type="number"
                    className="quanity"
                    id={product.id}
                    min="1" max="10"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <span>${(product.price * quantity).toFixed(2)}</span>
            </td>
        </tr>
    )

}

function Cart(props) {

    let ListCart = props.carts.cartData;

    let TotalCart = 0

    const totalCost = () => {
        for (let index in ListCart) {
            TotalCart += ListCart[index].quantity * ListCart[index].price
        }

        return TotalCart
    }

    return (
        <div className='page-content container cart mb-5'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quanity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody id="listItemCart">
                    {ListCart.map((product) =>
                        <RenderItemCart key={product.id} product={product} />
                    )}
                </tbody>
            </table>

            <div className="total">
                <table>
                    <tbody id="totalPayment">
                        <tr>
                            <td>Subtotal :</td>
                            <td>${totalCost().toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Fee Ship: </td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>${(totalCost() + 20.00).toFixed(2)}</td>
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
            <button id="btn-cart">Payment</button>
        </div>
    )
}

export default Cart

