import { Route, useParams } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const match = useRouteMatch();


  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) return <p>No Quote Found</p>;

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <Link to={`${match.url}/comments`} className="btn--flat centered">
          See my comments lad
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
