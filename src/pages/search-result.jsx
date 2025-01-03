import {
  Box,
  Container,
  InputAdornment,
  Divider,
  TextField,
  Grid2,
  Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchMovie } from '../api/movies-api';
import { MovieCard } from '../components/movie-card';

export function SearchResult() {
  let { keyword: url } = useParams();
  const [keyword, setKeyword] = useState(url);
  const [movies, setMovies] = useState([]);

  async function search(t) {
    const result = await searchMovie(t);
    setMovies(result.Search);
  }

  useEffect(() => {
    search(url);
  }, [url]);

  console.log(movies);

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      search(keyword);
    }
  }

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
          <Grid2>
            <Link href="" underline="none" color="secondary">
              All
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              Image
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              Video
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              News
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              Web
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              Books
            </Link>
          </Grid2>
          <Grid2>
            <Link href="" underline="none" color="secondary">
              Finance
            </Link>
          </Grid2>
          <Grid2>
            {' '}
            <Link href="" underline="none" color="secondary">
              Tools
            </Link>
          </Grid2>
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
