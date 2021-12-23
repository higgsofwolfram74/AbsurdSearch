import React from "react";

export default function Wordsearchsolve() {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quote) => setQuotesList(quote));
  });

  return (
    <div>
      <hr />
      <ol>
        {quotesList.map((d) => (
          <li>
            {d.text} -{d.author}
          </li>
        ))}
      </ol>
    </div>
  );
}
