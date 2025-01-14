import Stack from '@mui/material/Stack';
import { Box, Pagination as MuiPagination } from '@mui/material';
import logo from '../assets/logo.png';

export function Pagination({ page, count, handlePageNumberChange }) {
  function handleChange(event, pageNumber) {
    handlePageNumberChange(pageNumber);
  }
  return (
    <>
      <Stack
        marginTop={5}
        alignItems={'center'}
        direction={'column'}
        sx={{
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <Box
          sx={{ width: 130, marginBottom: 3, marginTop: 2 }}
          component={'img'}
          alt="movie search"
          src={logo}
        />
        <Box display={'flex'}>
          <MuiPagination
            onChange={handleChange}
            count={count}
            page={parseInt(page, 10)}
            defaultPage={1}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Stack>
    </>
  );
}
