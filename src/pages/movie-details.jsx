import {
  Rating,
  Grid2,
  Paper,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { getPosterUrl } from '../shared/get-poster-url';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/tmdb-api';

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
    <Paper sx={{ margin: 3, padding: 5 }} elevation={5}>
      <Grid2 container columnSpacing={2}>
        <Grid2 size={{ md: 4, sx: 12 }} alignSelf="center">
          <Box>
            <img
              height={520}
              width={350}
              src={getPosterUrl(movie.poster_path)}
              alt=""
            />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 8, sx: 12 }}>
          <Typography variant="h4">{movie.title}</Typography>

          <Typography
            sx={{ marginTop: '20px', marginBottom: '20px' }}
            variant="body1"
          >
            {movie.overview}
          </Typography>
          <Box paddingBottom={4}>
            <Stack spacing={1} direction={'row'}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  variant="outlined"
                  color="info"
                  label={genre.name}
                />
              ))}
            </Stack>
          </Box>

          <Stack direction="column" spacing={1.25} marginBottom={5}>
            <Typography>
              <strong> Status: </strong>
              {movie.status}
            </Typography>

            <Typography>
              <strong>Release Date: </strong>
              {movie.release_date}{' '}
            </Typography>

            <Typography>
              <strong> Orginal Language: </strong>
              {movie.original_language}
            </Typography>

            {movie.tagline && (
              <Typography>
                <strong> Tagline: </strong>
                {movie.tagline}
              </Typography>
            )}

            <Typography>
              <strong>Production Companies: </strong>
              <Typography component={'span'}>
                {movie.production_companies.map((c) => c.name).join(', ')}
              </Typography>
            </Typography>

            <Typography>
              <strong>Production Countries: </strong>
              {movie.production_countries.map((countrie) => (
                <Typography key={countrie.name} component={'span'}>
                  {' '}
                  {countrie.name}
                </Typography>
              ))}
            </Typography>

            <Typography>
              <strong> Runtime: </strong>
              {movie.runtime}
            </Typography>

            {/* Vote Count */}
            <Typography>
              <strong style={{ verticalAlign: 'middle' }}>Vote Count: </strong>
              <ThumbUpIcon sx={{ verticalAlign: 'bottom' }} />{' '}
              {movie.vote_count}
            </Typography>

            {/* Rating */}
            <Typography>
              <strong>Rating: </strong>
              <Rating
                readOnly
                defaultValue={parseInt(movie.popularity, 10) / 2}
                precision={0.5}
              />
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
