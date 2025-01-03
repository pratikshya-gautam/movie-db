import {
  Box,
  Typography,
  Stack,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function SearchMovie() {
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
    <Box
      height={'60vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      margin={'100px'}
    >
      <Box flex={1}>
        <Stack spacing={2}>
          <Typography color="primary" textAlign={'center'} variant="h3">
            Search Movie
          </Typography>
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
        </Stack>
      </Box>
    </Box>
  );
}
