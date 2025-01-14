import {
  Box,
  Container,
  InputAdornment,
  Divider,
  TextField,
  Grid2,
  Button,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { searchMovie } from '../api/tmdb-api.js';
import { MovieCard } from '../components/movie-card';
import { Genres } from '../components/genres';
import { useNavigate } from 'react-router';
import { Pagination } from '../components/pagination.jsx';
import logo from '../assets/logo.png';

export function SearchResult() {
  let { keyword: url } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(url);

  const [allMovies, setAllMovies] = useState([]);
  const [count, setCount] = useState(10);

  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState(null);
  const [pageNumber, setPageNumber] = useState(searchParams.get('page'));

  const navigate = useNavigate();

  async function search(t, pageNumber = 1) {
    const result = await searchMovie(t, pageNumber);
    console.log(result);
    setAllMovies(result.results);
    setCount(result.total_pages);
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
  function handleSearch() {
    navigate(`/movies/${keyword}`);
  }

  function handlePageNumberChange(number) {
    setPageNumber(number);
    setSearchParams({ page: number });
  }

  useEffect(() => {
    search(url, pageNumber);
  }, [url, pageNumber]);

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
      {/* Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
          width: '100%',
          paddingTop: 3,
          backgroundColor: '#ffffff',
        }}
      >
        {/* Search Input & Logo */}
        <Grid2
          container
          sx={{
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          <Grid2 size={{ xs: 12, md: 2 }}>
            <Box
              onClick={() => navigate('/')}
              sx={{
                width: 150,
                marginLeft: 3,
              }}
              component={'img'}
              alt="movie search"
              src={logo}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <TextField
              fullWidth
              value={keyword}
              onKeyUp={handleKeyUp}
              onChange={handleChange}
              placeholder="Enter the movie name"
              variant="outlined"
              helperText="...made with ❤️ in Berlin by Pratikshya Gautam"
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
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        onClick={handleSearch}
                        sx={{ borderRadius: 10 }}
                        variant="contained"
                      >
                        Go
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid2>
        </Grid2>

        {/* Catagories */}
        <Container sx={{ paddingTop: '20px', marginBottom: '20px' }}>
          <Grid2 container spacing={2}>
            <Genres onGenresChange={handleGenresChange} genreId={genreId} />
          </Grid2>
        </Container>
        <Divider></Divider>
      </Box>

      {/* Search Result */}
      <Container sx={{ marginTop: '200px' }}>
        <Grid2 container spacing={5}>
          {movies.map((movie) => (
            <Grid2
              size={{ xs: 12, md: 3 }}
              alignSelf={'center'}
              justifySelf={'center'}
              key={movie.id}
            >
              <MovieCard movie={{ ...movie }} />
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Pagination */}
      <Pagination
        page={pageNumber}
        count={count}
        handlePageNumberChange={handlePageNumberChange}
      />
    </>
  );
}
