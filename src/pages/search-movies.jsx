import {
  Container,
  Typography,
  InputAdornment,
  TextField,
  Grid2,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function SearchMovie() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value);
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
          <Typography color="primary" textAlign={'center'} variant="h3">
            Search Movie
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 10, md: 12 }} alignSelf={'center'}>
          <TextField
            fullWidth
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            value={keyword}
            placeholder="Enter the movie name"
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
              },
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}
