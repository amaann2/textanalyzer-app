import React, { useState } from "react";

export default function Textform(props) {
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const upperClick = () => {
    let newtext = text.toUpperCase();
    if (newtext.length <= 0) {
      props.showalert("warning", "enter some text");
    } else {
      setText(newtext);
      props.showalert("success", "text has been converted to uppercase");
    }
  };
  const lowerClick = () => {
    let newtext = text.toLowerCase();
    if (newtext.length <= 0) {
      props.showalert("warning", "enter some text");
    } else {
      setText(newtext);
      props.showalert("success", "text has been converted to lowercase");
    }
  };
  const clearClick = () => {
    let newtext = " ";
    if (newtext.length <= 0) {
      props.showalert("warning", "enter some text");
    } else {
      setText(newtext);
      props.showalert("success", "text has been clear");
    }
  };
  const copyClick = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // document.getSelection.removeAllRange();
    props.showalert("success", "text has been copies");
  };
  const reverseClick = () => {
    let split = text.split("");
    console.log(split);
    let reverse = split.reverse();
    let join = reverse.join("");
    console.log(join);
    setText(join);
    props.showalert("success", "text has been Reversed");
  };
  const upperfirstClick = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newtext = arr.join(" ");
    setText(newtext);
    props.showalert(
      "success",
      "first character has been converted to uppercase"
    );
  };
  const [text, setText] = useState("");

  return (
    <>
      <h3 style={{ color: props.mode === "light" ? "rgb(4,39,67)" : "white" }}>
        {props.heading}
      </h3>
      <div className="my-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleonChange}
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={lowerClick}
        >
          convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={upperClick}
        >
          convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={upperfirstClick}
        >
          uppercase first letter
        </button>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={copyClick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={reverseClick}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          className="btn-success btn my-3 mx-2"
          onClick={clearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>your text Summary</h1>
        <p>{text.split(" ").filter((ele) => { return ele.length !== 0;}).length }{" "} word 
        </p>
        
        <p>{text.length} character</p>
        <p>
          {0.0008 * text.split(" ").filter((ele) => {return ele.length !== 0;}).length}  Minutes Read{" "}
        </p>
        <h2>preview text</h2>
        <p>{text}</p>
        <p>{text.length > 0 ? text : "nothing to preview"}</p>
      </div>
    </>
  );
}
