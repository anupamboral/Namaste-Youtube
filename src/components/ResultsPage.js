import React, { useEffect, useState } from "react";
import { Link, Links, useSearchParams } from "react-router-dom";
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
  }, [query]); //* the useNavigate component take us to this searchResults page when we search something in the searchbar from another route like home page or channel page and it will trigger the useEffect hook to trigger the api call,  but when we are already on the search results page , and search anything second time and click enter then it will change the url route but as the page is already rendered so it will not call the useEffect hooks if we don't mention anything in the dependency array that's why we have to mention the query we get from the url in the dependency array to call the useEffect hook whenever the user search something.

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
        <Link to={"/channel/" + channel.id.channelId}>
          <ChannelSearchResult info={channel} />
        </Link>
      ))}
      {filteredVideos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchResult info={video} />
        </Link>
      ))}
    </div>
  );
};

export default ResultsPage;
