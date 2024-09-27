import React from "react";
import "./MyGigs.css";
import { Link } from "react-router-dom";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="myGigs_container">
        <div className="myGigs_title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="gig-img" src="/images/wordpress.webp" alt="" />
            </td>
            <td>Gig1</td>
            <td>6000</td>
            <td>8000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
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
              <img className="delete" src="/images/delete.png" alt="" />
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
              <img className="delete" src="/images/delete.png" alt="" />
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
              <img className="delete" src="/images/delete.png" alt="" />
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
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
