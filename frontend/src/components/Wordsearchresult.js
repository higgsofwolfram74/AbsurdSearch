import React from "react";
import { useEffect } from "react";

function exportToJson(objectData) {
  let filename = "Wordsearch.json";
  let contentType = "application/json;charset=utf-8;";

  var a = document.createElement("a");
  a.download = filename;
  a.href =
    "data:" +
    contentType +
    "," +
    encodeURIComponent(JSON.stringify(objectData));
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Wordsearchresult(props) {
  /* useEffect(() => {
    exportToJson(props);
  }); */

  return <div>thanks</div>;
}
