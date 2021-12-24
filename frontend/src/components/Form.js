import React from "react";

export default function Form(props) {
  const handleChange = (event) => {
    setWordList({
      words: event.target.value.toLowerCase().split(" ").join("-"),
    });
  };

  return (
    <div>
      Generate a Wordsearch
      <div align="center">Words to put inside wordsearch</div>
      Generate
    </div>
  );
}
