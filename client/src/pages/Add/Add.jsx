import React from "react";
import "./Add.css";
const Add = () => {
  return (
    <div className="add">
      <div className="add_container">
        <h1>Add New Gig</h1>
        <div className="add_sections">
          <div className="add_left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="category">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="coverImg">Cover Image</label>
            <input type="file" />
            <label htmlFor="uploadImg"></label>
            <input type="file" multiple />
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers."
            ></textarea>
            <button>Create</button>
          </div>
          <div className="add_right">
            <label htmlFor="service">Service Title</label>
            <input type="text" placeholder="e.g. One page web design" />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short Description of your service."
            ></textarea>
            <label htmlFor="time">Delivery Time (e.g. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="revNum">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="features">Add Features</label>
            <input type="text" placeholder="e.g. Page Design" />
            <input type="text" placeholder="e.g. File Uploading" />
            <input type="text" placeholder="e.g. Setting Up A Domain" />
            <input type="text" placeholder="e.g. Hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
