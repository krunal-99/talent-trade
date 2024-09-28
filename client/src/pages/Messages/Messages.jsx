import React from "react";
import "./Messages.css";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Krunal Pokar",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab vitae quos magnam, exercitationem necessitatibus ob`;

  return (
    <div className="messages">
      <div className="messages_container">
        <div className="messages_title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td> Krunal Pokar</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
