import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_SUGGESTIONS_API } from "../utils/config";
import SearchResult from "./SearchResult";
import ChannelSearchResult from "./ChannelsSearchResult";
=======
import { useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_SUGGESTIONS_API } from "../utils/config";
import SearchResult from "./SearchResult";
>>>>>>> bd1fdf985bea3ed11d494f70db79bc74ae94cc93

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
<<<<<<< HEAD
  if (searchResults.length === 0) return null;

  const filteredChannels = searchResults.filter(
    (channel) => channel.id.channelId
  );
  const filteredVideos = searchResults.filter((channel) => channel.id.videoId);
  console.log(filteredVideos);
  console.log(filteredChannels);
  return (
    <div>
      {filteredChannels.map((channel) => (
        <ChannelSearchResult info={channel} />
      ))}
      {filteredVideos.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId}>
          <SearchResult key={video.id.videoId} info={video} />
        </Link>
=======
  return (
    <div>
      {searchResults.map((searchResult) => (
        <SearchResult info={searchResult} />
>>>>>>> bd1fdf985bea3ed11d494f70db79bc74ae94cc93
      ))}
    </div>
  );
};

export default ResultsPage;
