import React, { useEffect, useState } from "react";
import Info from "./info";
import "../styles/button.css";

const IndexForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (initialData.description) setDescription(initialData.description);
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit ==>", title, description);

    if (title === "") {
      setError("Title is required...");
      return;
    }
    if (description === "") {
      setError("Description is required ...");
      return;
    }

    //After validation
    setError("");
    onSubmit({
      title,
      description,
    }); //data posted
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: 18,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Form:
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Title:</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            style={{ width: 400 }}
          />
        </label>
        <br />
        <br />
        <label>
          <div>
            Description:
            <br />
            <textarea
              name="description"
              value={description}
              placeholder="Description right here ... "
              onChange={(event) => setDescription(event.target.value)}
              style={{ width: 400, height: 90 }}
            ></textarea>
          </div>
        </label>

        <br />
        <Info type={error !== "" ? "error" : "info"}>
          {error !== "" ? error : "Please fill up all the fields ..."}
        </Info>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="submit"
            class="button"
            style={{ verticalAlign: "middle" }}
          >
            <span>{!!initialData.title ? "Update" : "Submit"}</span>
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{ width: 100, height: 30, marginLeft: 10 }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default IndexForm;
