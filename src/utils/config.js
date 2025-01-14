export const API_KEY = "AIzaSyABDEgLcdCwAgnJj6gRhm-2HP6AdmQooXs"; //* previous - - AIzaSyDluRkSg9Q_D3LMhrRGF-W1YjmZaXrgYZw

export const YOUTUBE_VIDEOS_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
export const CHANNEL_DETAILS_API =
  " https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";
export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=";
//*1.44.37
export const SEARCH_SUGGESTIONS_API =
  "https://youtube.googleapis.com/youtube/v3/search?regionCode=IN&part=snippet&maxResults=50&q=";

//* rapid api autocomplete search
export const AUTO_COMPLETE_SEARCH_API =
  "https://google-search-master.p.rapidapi.com/autocomplete?q=";
export const AUTO_COMPLETE_SEARCH_API_PARAMETERS =
  "&gl=us&hl=en&autocorrect=true&page=1";
export const AUTO_COMPLETE_SEARCH_API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9f38e8a9a4mshf132ab814245cf2p1b6f96jsnadb846004dba",
    "x-rapidapi-host": "google-search-master.p.rapidapi.com",
  },
};
