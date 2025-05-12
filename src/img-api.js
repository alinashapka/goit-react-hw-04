import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const API_KEY = 'Mt32nzsEwLK7ky77hF-ioFmqbRzJfHYr_hTdfgxaMY8';

export const fetchImages = async (query, currentPage) => {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
        headers: {
            'Authorization': `Client-ID ${API_KEY}`,
        },
        params: {
            query: query,
            page: currentPage,
            per_page: 12,
        }
    });
    return {
        images: response.data.results,
        totalPages: response.data.total_pages,
    }
}