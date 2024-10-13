import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.css";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate(
      {
        conversationId: id,
        desc: e.target[0].value,
      },
      {
        onSuccess: () => {
          e.target[0].value = ""; // Clear the input after success
          queryClient.invalidateQueries(["messages"]); // Refresh messages
        },
      }
    );
  };
  return (
    <div className="message">
      <div className="message_container">
        <span className="msg_breadcrumbs">
          <Link to="/messages" className="msg-link">
            MESSAGES
          </Link>{" "}
          {">"} KRUNAL POKAR {">"}
        </span>
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something Went Wrong..!!"
        ) : (
          <div className="text-messages">
            {data.map((m) => (
              <div
                className={
                  m.userId === currentUser._id
                    ? "msg-owner msg-item"
                    : "msg-item"
                }
                key={m._id}
              >
                <img src="/images/man.png" alt="" />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />

        <form className="msg_write" onSubmit={handleSubmit}>
          <textarea
            name=""
            placeholder="Write A Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
