export const API_KEY = "AIzaSyCfOwmZsqEI5GWYak44yFeDW96KO6-3HXg"; //* previous - -1. AIzaSyDluRkSg9Q_D3LMhrRGF-W1YjmZaXrgYZw,2. AIzaSyABDEgLcdCwAgnJj6gRhm-2HP6AdmQooXs, 3. AIzaSyCfOwmZsqEI5GWYak44yFeDW96KO6-3HXg, 4. AIzaSyA2GxnByo1yVTVfzkbHAyIezbJ_RNK6iaY

export const YOUTUBE_VIDEOS_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CliveStreamingDetails&id=";
export const CHANNEL_DETAILS_API =
  " https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CcontentOwnerDetails&part=topicDetails&id=";
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

//*
export const CHANNEL_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=";
export const CHANNEL_PAGE_API =
  "https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=";

export const LIVE_CHAT_API =
  " https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=";
//* previous youtube logo - https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg
//* previous user image - https://getdrawings.com/vectors/person-icon-vector-26.jpg
