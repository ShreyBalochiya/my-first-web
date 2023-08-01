import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLocaleLowerCase());
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div
        className="container m-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <label htmlFor="myBox" className="form-label">
          Enter Text
        </label>

        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#fafafa" : "white",
            color: props.mode === "dark" ? "black" : "black",
          }}
          onChange={handleOnChange}
          id="myBox"
          placeholder="Enter Text"
          rows="3"
        ></textarea>
      </div>
      <div className="mt-3 mx-3 ">
        <button className="btn btn-primary" onClick={handleUpClick}>
          Change To Uppercase
        </button>

        <button
          className="btn btn-primary mx-lg-3 my-lg-0 mx-md-2 my-md- my-2 "
          onClick={handleLoClick}
        >
          Change To LowerCase
        </button>

        <button
          className="btn btn-primary mx-lg-0 mr-lg-0 mx-md-0 mx-1 px-4 "
          onClick={handleClearText}
        >
          Clear Text Box
        </button>

        <button
          className="btn btn-primary mx-lg-3 mx-lg-0 mx-md-2  mx-3 px-4 "
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container m-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <b>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Word and {text.length} characters{" "}
        </b>
        <p>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes Read{" "}
        </p>
      </div>
    </>
  );
}
