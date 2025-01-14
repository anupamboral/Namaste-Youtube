import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_SUGGESTIONS_API } from "../utils/config";
import SearchResult from "./SearchResult";

const ResultsPage = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");
  console.log(query);
  const [searchResults, setSearchResults] = useState([]);
  const getSearchResults = async () => {
    const data = await fetch(
      SEARCH_SUGGESTIONS_API + query + "&key=" + API_KEY
    );
    const json = await data.json();
    console.log(json);
    setSearchResults(json.items);
  };
  useEffect(() => {
    getSearchResults();
  }, []);
  return (
    <div>
      {searchResults.map((searchResult) => (
        <SearchResult info={searchResult} />
      ))}
    </div>
  );
};

export default ResultsPage;
