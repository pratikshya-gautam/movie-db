import {
  Container,
  Box,
  InputAdornment,
  TextField,
  Grid2,
  useTheme,
  Button,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/logo.png';

export function SearchMovie() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSearch() {
    navigate(`/movies/${keyword}`);
  }

  async function handleKeyUp(event) {
    if (event.keyCode === 13) {
      navigate(`/movies/${keyword}`);
    }
  }
  return (
    <Container height={'60vh'} sx={{ marginTop: '30vh' }}>
      <Grid2 container flexDirection={'column'}>
        <Grid2
          size={{ xs: 10, md: 12 }}
          alignSelf={'center'}
          sx={{
            [theme.breakpoints.down('sm')]: {
              marginBottom: 1,
            },
            [theme.breakpoints.up('sm')]: {
              marginBottom: 3,
            },
          }}
        >
          <Stack alignItems={'center'}>
            <Box
              component="img"
              sx={{ width: 200 }}
              src={logo}
              alt="movie search"
            />
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 10, md: 12 }} alignSelf={'center'}>
          <TextField
            fullWidth
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            value={keyword}
            placeholder="Enter the movie name"
            helperText="...made with ❤️ in Berlin by Pratikshya Gautam"
            slotProps={{
              input: {
                sx: { borderRadius: 50 },
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
                      Search
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}
