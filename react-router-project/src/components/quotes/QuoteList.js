import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if(ascending) 
      return quoteA.id > quoteB.id ? 1 : -1
    else 
      return quoteA.id < quoteB.id ? 1 : -1
  })
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortDirection = queryParams.get("sort") === "ASC";

  const sortedQUotes = sortQuotes(props.quotes, sortDirection)

  const changeSortingHandler = () => {
    const direction = sortDirection ? "DSC" : "ASC";
    // history.push(`/${location.path}?sort=${direction}`);
    history.push({
      pathname: location.pathname,
      search: `?sort=${direction}`
    })
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler} className="btn">
          Sort {sortDirection ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
