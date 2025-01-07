import { Rating, Grid2, Paper, Typography, Box, Badge } from '@mui/material';
import { getPosterUrl } from '../shared/get-poster-url';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const movie = {
  adult: false,
  backdrop_path: '/lKsHyNJFr47Pgz3uxnnMqDU1bx0.jpg',
  genre_ids: [18, 53, 10770],
  id: 1027497,
  original_language: 'en',
  original_title: 'Hello',
  overview:
    'An emotionally unavailable flight attendant meets a potential love interest and later finds out that her "perfect guy" has ulterior motives. As the clock ticks down on New Year\'s Eve, she must fight to keep her murdered ex-boyfriend\'s secrets or find herself dead.',
  popularity: 8.04,
  poster_path: '/ra2UvHNvZ1oaneSa96I48G4sQ9N.jpg',
  release_date: '2022-09-22',
  title: 'Hello',
  video: false,
  vote_average: 6.319,
  vote_count: 171,
};

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
