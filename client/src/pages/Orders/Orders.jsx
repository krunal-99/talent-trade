import React from "react";
import "./Orders.css";
const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Krunal Pokar",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="orders_container">
        <div className="orders_title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="order_message" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="order_message" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="order_message" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="order_message" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="order_message" src="/images/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
