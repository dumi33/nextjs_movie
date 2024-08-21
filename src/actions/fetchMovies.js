"use server"

export async function  fetchmoviesWithCategory(category){

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        return json.results;  // 데이터 확보

    } catch(e){
        throw e;
    }

}

export async function fetchMoviesWithSearchTerm(searchTerm){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };
    
    try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        return json.results;
    } catch(e){
        throw e;
    }

}