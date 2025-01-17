import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_SUGGESTIONS_API } from "../utils/config";
import SearchResult from "./SearchResult";
import ChannelSearchResult from "./ChannelsSearchResult";

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
      ))}
    </div>
  );
};

export default ResultsPage;
