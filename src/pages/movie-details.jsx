import { Rating, Grid2, Paper, Typography, Box, Badge } from '@mui/material';
import { getPosterUrl } from '../shared/get-poster-url';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/tmdb-api';

/*
  TODO: 

  Get a movie id and read it.
    - use useParams (mathi ko :id dincha)
    - example: search-result ko line 19 ma herne. 

  Make a new function: getMovieDetails: 
   - api/tmdb-api.js ma naya function create garne.

  Use this(getMovieDetails) function:
   - useEffect banune.
   - useEffect -> ()=>{loadDetails(id), [id]}
   - src/pages/search-movies.jsx -> 49-51 line

  make loadDetails
  - getMovieDetails -> call
  - result -> useState should store the results.
  - src/pages/search-movies.jsx -> 28-33 line
  
 */

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function loadMovie() {
    const result = await getMovieDetails(id);
    setMovie(result);
  }

  useEffect(() => {
    loadMovie(id);
  }, [id]);

  if (movie === null) {
    return null;
  }

  return (
    <Grid2 container spacing={2} margin={5}>
      <Grid2 size={3}>
        <Paper sx={{ textAlign: 'center' }}>
          <img height={450} src={getPosterUrl(movie.poster_path)} alt="" />
        </Paper>
      </Grid2>
      <Grid2 size={9}>
        <Paper sx={{ padding: 5 }}>
          <Typography variant="h4">{movie.title}</Typography>

          <Typography
            sx={{ marginTop: '20px', marginBottom: '20px' }}
            variant="body1"
          >
            {movie.overview}
          </Typography>
          <Box component="span" paddingLeft={3} paddingBottom={10}>
            <Badge color="info" badgeContent={'Action'} />
          </Box>
          <Typography>
            <strong>Release Date: </strong>
            {movie.release_date}{' '}
          </Typography>
          <Typography>
            <strong>Rating: </strong>
            <Rating
              readOnly
              defaultValue={parseInt(movie.popularity, 10) / 2}
              precision={0.5}
            />
          </Typography>
          <Typography>
            <strong style={{ verticalAlign: 'middle' }}>Vote Count: </strong>
            <ThumbUpIcon sx={{ verticalAlign: 'bottom' }} /> {movie.vote_count}
          </Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
}
