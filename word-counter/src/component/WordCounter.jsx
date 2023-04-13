import React, { useState } from "react";

function WordCounter() {
  const [all, setAll] = useState();
  const [countWord, setCountWord] = useState(0);
  const [countLetter, setCountLetter] = useState(0);
  const [countParagraph, setCountParagraph] = useState(0);

  const handleWord = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    const filterWords = words.filter((word) => word !== "");
    setCountWord(filterWords.length);
  };

  const handleLetter = (e) => {
    setCountLetter(e.target.value.trim().length);
  };

  const handleParagraph = (e) => {
    if (e.target.value === "") {
      setCountParagraph(0);
    } else {
      setCountParagraph(e.target.value.split(/\r?\n|\r/).length);
    }
  };

  const handleUpCase = (e) => {
    setAll(e.target.value.toUpperCase());
  };

  return (
    <div>
      <div className="logo-container">
        <div className="logo">a b c d</div>
        <div className="word">Word Counter</div>
      </div>
      <div className="container">
        <div className="result">
          <p className="result-word">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1033/1033943.png?w=360&t=st=1681359707~exp=1681360307~hmac=5f532134a3fea5077c608e64bde552ec3fd480ec498292b94ca7f27f709c5f31"
              alt=""
            />{" "}
            Word
          </p>{" "}
          <p className="result-word">{countWord}</p>
        </div>
        <div className="result">
          <p className="result-word">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4659/4659027.png"
              alt=""
            />{" "}
            Letter
          </p>{" "}
          <p className="result-word">{countLetter}</p>
        </div>
        <div className="result">
          <p className="result-word">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2811/2811227.png"
              alt=""
            />{" "}
            Paragraph
          </p>{" "}
          <p className="result-word">{countParagraph}</p>
        </div>
      </div>
      <div>
        <textarea
          onChange={(e) => {
            handleWord(e);
            handleLetter(e);
            handleParagraph(e);
          }}
          placeholder="Enter/Paste Your Text Here"
          cols="105"
          rows="20"
          value={all}
        ></textarea>
      </div>
      <div className="container">
        <div>
          <button onClick={(e) => handleUpCase(e)}>Click To Uppercase</button>
        </div>
        <div>
          <button>Click To Lowercase</button>
        </div>
      </div>
    </div>
  );
}

export default WordCounter;
