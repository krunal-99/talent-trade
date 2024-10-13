import React, { useReducer, useState } from "react";
import "./Add.css";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };
  return (
    <div className="add">
      <div className="add_container">
        <h1>Add New Gig</h1>
        <div className="add_sections">
          <div className="add_left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="category">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInput">
                <label htmlFor="coverImg">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="uploadImg">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
            </div>
            <button className="uploadBtn" onClick={handleUpload}>
              {uploading ? "Uploading" : "Upload"}
            </button>

            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers."
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="add_right">
            <label htmlFor="service">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One page web design"
              onChange={handleChange}
            />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Short Description of your service."
            ></textarea>
            <label htmlFor="time">Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              min={1}
              name="deliveryTime"
              onChange={handleChange}
            />
            <label htmlFor="revNum">Revision Number</label>
            <input
              type="number"
              min={1}
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="features">Add Features</label>
            <form action="" className="addFeatureForm" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. Page Design" />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="featureItem" key={f}>
                  <span>{f}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    <span className="removeIcon">X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" onChange={handleChange} min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
