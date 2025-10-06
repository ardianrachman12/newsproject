import axios from "axios";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../utils/constants";

const newsApiCLient = axios.create({
    baseURL: NEWS_API_BASE_URL,
    params: {
        apiKey: NEWS_API_KEY,
    },
});

export const getTopHeadlines = async (
    category = '', country = 'us', page = 1, pageSize = 10) => {
    try {
        const response = await newsApiCLient.get('/top-headlines', {
            params: {
                category,
                country,
                page,
                pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching top headlines:", error);
        throw error;
    }
};

export const getEverything = async (query, page = 1, pageSize = 10) => {
    try {
        const response = await newsApiCLient.get('/everything', {
            params: {
                q: query,
                page,
                pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching everything:", error);
        throw error;
    }
};

