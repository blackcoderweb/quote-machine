import { useGetQuotesQuery } from "../services/quotes";

export const Wrapper = () => {
  const { data, isError, isLoading } = useGetQuotesQuery();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else if (isError)
    return <h2 className="error">Ups... something went wrong!!!</h2>;

  const quotes = data.quotes;

  //First random quote appearing when screen is loaded
  let fisrtRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const colors = [
    "#16a085",
    "#27ae60",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
    "#6495ED",
    "#FF0000",
    "#800000",
    "#008080",
    "#98AFC7",
    "#EB5406",
    "#FF4500",
  ];

  const getRandomNumber = () => {
    setTimeout(() => {
      //Saving a new quote object
      let newRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      let randomColor = colors[Math.floor(Math.random() * colors.length)];

      //Select the p element containing the current quote and replace it with the new quote
      let pQuote = document.getElementById("text-author");
      let quote = document.createTextNode(newRandomQuote.quote);
      pQuote.textContent = "";
      pQuote.appendChild(quote);
      //Change the color of the text
      pQuote.style.color = randomColor;

      //Select the div element containing the current author and replace it with the new author of the new quote
      let divAuthor = document.getElementById("author");
      let author = document.createTextNode(newRandomQuote.author);
      divAuthor.textContent = "- ";
      divAuthor.appendChild(author);
    }, 250);
  };

  return (
    <div id="wrapper">
      <div id="bloq-quote">
        <div id="text">
          <i className="fa-solid fa-quote-left"></i>
          <p id="text-author">{fisrtRandomQuote.quote}</p>
          <i className="fa-solid fa-quote-right"></i>
          <div id="author">- {fisrtRandomQuote.author}</div>
        </div>
      </div>
      <div id="flex-items">
        <div id="tweet-quote">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet"
          >
            <i className="fa-brands fa-twitter fa-beat"></i>
            <p>Share on twitter</p>
          </a>
        </div>
        <button id="new-quote" onClick={getRandomNumber}>
          New Quote
        </button>
      </div>
    </div>
  );
};
