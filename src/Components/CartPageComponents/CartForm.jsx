import React from "react";

function CartForm() {
  return (
    <form action="/">
      <div className="table-content table-responsive cart-table-content">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Until Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-thumbnail">
                <a href="/">
                  <img src="assets/img/cart/cart-1.png" alt="" />
                </a>
              </td>
              <td className="product-name">
                <a href="/">Color Box</a>
              </td>
              <td className="product-price-cart">
                <span className="amount">$260.00</span>
              </td>
              <td className="product-quantity">
                <div className="cart-plus-minus">
                  <input
                    className="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    value="2"
                  />
                </div>
              </td>
              <td className="product-subtotal">$110.00</td>
              <td className="product-remove">
                <a href="/">
                  <i className="fa fa-pencil"></i>
                </a>
                <a href="/">
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td className="product-thumbnail">
                <a href="/">
                  <img src="assets/img/cart/cart-2.png" alt="" />
                </a>
              </td>
              <td className="product-name">
                <a href="/">Color Box</a>
              </td>
              <td className="product-price-cart">
                <span className="amount">$150.00</span>
              </td>
              <td className="product-quantity">
                <div className="cart-plus-minus">
                  <input
                    className="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    value="2"
                  />
                </div>
              </td>
              <td className="product-subtotal">$150.00</td>
              <td className="product-remove">
                <a href="/">
                  <i className="fa fa-pencil"></i>
                </a>
                <a href="/">
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td className="product-thumbnail">
                <a href="/">
                  <img src="assets/img/cart/cart-1.png" alt="" />
                </a>
              </td>
              <td className="product-name">
                <a href="/">Color Box </a>
              </td>
              <td className="product-price-cart">
                <span className="amount">$170.00</span>
              </td>
              <td className="product-quantity">
                <div className="cart-plus-minus">
                  <input
                    className="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    value="2"
                  />
                </div>
              </td>
              <td className="product-subtotal">$170.00</td>
              <td className="product-remove">
                <a href="/">
                  <i className="fa fa-pencil"></i>
                </a>
                <a href="/">
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="cart-shiping-update-wrapper">
            <div className="cart-shiping-update">
              <a href="/">Continue Shopping</a>
            </div>
            <div className="cart-clear">
              <button>Update Shopping Cart</button>
              <a href="/">Clear Shopping Cart</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CartForm;
