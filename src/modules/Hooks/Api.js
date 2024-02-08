
import axios from "axios"

export const getMovies = async () => {
    console.log(process.env.TMDB_URL)
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/popular`, {
        params: {
            'language': 'en-US',
            'page': '1'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });
    return response.data
}

export const getVideo = async (movieId) => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/${movieId}/videos`, {
        params: {
            'language': 'en-US'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });
    return response.data;
}




export const getTopRatedMovies = async () => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/top_rated`, {
        params: {
            'language': 'en-US',
            'page': '1'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });

    return response.data;
};





export const getUpcomingMovies = async () => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/upcoming?language=en-US&page=1`, {
        params: {
            'language': 'en-US',
            'page': '1'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });

    return response.data;
};


export const getSimilarMovies = async (movieId) => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/${movieId}/similar`, {
        params: {
            'language': 'en-US',
            'page': '1'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });

    return response.data;
};



export const fetchCastDetails = async (movieId) => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/${movieId}/credits`, {
        params: {
            'language': 'en-US'
        },
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'accept': 'application/json'
        }
    });
    return response.data;
};

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${process.env.TMDB_URL}/3/movie/${movieId}`, {
        params: {
            'language': 'en-US'
        },
        headers: {
            Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            accept: 'application/json',
        },
    });
    console.log(response)
    return response.data;

};