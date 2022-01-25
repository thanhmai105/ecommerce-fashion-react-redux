import React from 'react';

function RenderItemCart({ product }) {
    <tr>
        <td>
            <div class="cart-item">
                <img src={product.image} alt="" />
                <div className="info-cart-item">
                    <span>${product.title}</span><br />
                    <span class="price">${product.price.toFixed(2)}</span><br />
                    <p>remove</p>
                </div>
            </div>
        </td>
        <td>
            <input
                type="number"
                class="quanity"
                id={product.id}
                pattern="[0-9]{2}" min="1" max="10"
            />
        </td>
        <td>
            <span>${(product.price * product.inCart).toFixed(2)}</span>
        </td>
    </tr>
}

function Cart(props) {
    console.log(props.products.products);

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
                    <RenderItemCart product={props.product} />
                </tbody>
            </table>

            <div className="total">
                <table>
                    <tbody id="totalPayment">

                    </tbody>
                </table>
            </div>
            <button id="btn-cart" type="submit">Proceed to Checkout</button>
        </div>
    )
}

export default Cart