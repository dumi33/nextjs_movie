import { fetchmoviesWithCategory } from '@/actions/fetchMovies';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import { redirect } from 'next/navigation';

import React from 'react'

export default async function MovieCategoryPage({params}) {
    const {movieCat} = params;

    const movies  = await fetchmoviesWithCategory(movieCat);

    return (
        <MovieList movies = {movies}/>
    )

}
