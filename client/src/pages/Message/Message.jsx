import React from "react";
import "./Message.css";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="message">
      <div className="message_container">
        <span className="msg_breadcrumbs">
          <Link to="/messages" className="msg-link">MESSAGES</Link> {'>'} KRUNAL POKAR {'>'} 
        </span>
        <div className="text-messages">
          <div className="msg-item">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
          <div className="msg-item msg-owner">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
          <div className="msg-item">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
          <div className="msg-item msg-owner">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
          <div className="msg-item">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
          <div className="msg-item msg-owner">
            <img src="/images/man.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta reprehenderit officiis quisquam sit amet excepturi necessitatibus vero. Cupiditate maiores soluta dolore iste aliquam fugit debitis quam consequatur sapiente aspernatur.</p>
          </div>
        </div>
        <hr />
        
        <div className="msg_write">
          <textarea
            name=""
            placeholder="Write A Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
