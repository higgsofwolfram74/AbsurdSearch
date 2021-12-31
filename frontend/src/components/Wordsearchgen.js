import React from "react";
import { useState } from "react";
import axios from "axios";
import Wordsearchresult from "./Wordsearchresult";
import Form from "./Form";

export default function Wordsearchgen(props) {
  const [wordList, setWordList] = useState({
    wordslist: [],
    wordsearch: [[]],
    submitted: props["submitted"],
  });

  const handleSubmit = (words) => {
    axios.get("/api/words=" + words).then((res) => {
      setWordList({
        wordslist: res.data["wordlist"],
        wordsearch: res.data["wordsearch"],
        submitted: true,
      });
    });
  };

  if (wordList["submitted"] === true) {
    return (
      <Wordsearchresult
        wordslist={wordList["wordslist"]}
        wordsearch={wordList["wordsearch"]}
      />
    );
  } else {
    return <Form submitter={handleSubmit} />;
  }
}
