import axios from "axios";

const RAPID_API_KEY = "YOUR_RAPID_API_KEY"; // Replace with your RapidAPI key
const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

/**
 * Fetch YouTube playlists based on a skill
 * @param {string} skill - The skill to search playlists for
 * @returns {Promise<Array>} - Returns a list of playlist objects
 */
export const fetchYouTubePlaylists = async (skill) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        query: `${skill} tutorials playlist`,
        type: "playlist",
        maxResults: 6, // Get 6 playlists
      },
      headers: {
        "X-RapidAPI-Key": '6803b9fe9bmsh0bcaa693ad94264p192e30jsncfdca898cebc',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    });

    return response.data.contents.map((item) => ({
      id: item.playlist.playlistId,
      title: item.playlist.title,
      thumbnail: item.playlist.thumbnails[0].url,
      videoCount: item.playlist.videoCount,
      url: `https://www.youtube.com/playlist?list=${item.playlist.playlistId}`,
    }));
  } catch (error) {
    console.error("Error fetching YouTube playlists:", error);
    return [];
  }
};
