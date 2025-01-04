import {
  Box,
  Container,
  InputAdornment,
  Divider,
  TextField,
  Grid2,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchMovie } from '../api/tmdb-api.js';
import { MovieCard } from '../components/movie-card';
import { Genres } from '../components/genres';
import { useNavigate } from 'react-router';

export function SearchResult() {
  let { keyword: url } = useParams();
  const [keyword, setKeyword] = useState(url);

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState(null);

  const navigate = useNavigate();

  async function search(t) {
    const result = await searchMovie(t);
    setAllMovies(result.results);
  }

  function handleGenresChange(id) {
    setGenreId(id ? parseInt(id, 10) : null);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      navigate(`/movies/${keyword}`);
    }
  }

  useEffect(() => {
    search(url);
  }, [url]);

  useEffect(() => {
    if (!genreId) {
      setMovies(allMovies);
    } else {
      const filtered = allMovies.filter((m) => {
        return m.genre_ids.includes(genreId);
      });
      setMovies(filtered);
    }
  }, [allMovies, genreId]);

  return (
    <>
      <Container display={'flex'}>
        <Box flex={1} marginTop={'50px'} marginBottom={'20px'}>
          <TextField
            fullWidth
            value={keyword}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="Enter the movie name"
            variant="outlined"
            slotProps={{
              input: {
                sx: { borderRadius: '50px' },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ fontSize: '30px', color: Colors.primary }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Container>

      <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid2 container spacing={2}>
          <Genres onGenresChange={handleGenresChange} genreId={genreId} />
        </Grid2>
      </Container>
      <Divider></Divider>

      <Container sx={{ marginTop: '30px' }}>
        <Grid2 container spacing={5}>
          {movies.map((movie) => (
            <Grid2 key={movie.Title}>
              <MovieCard movie={{ ...movie }} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
