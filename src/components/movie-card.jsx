import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Tooltip,
  useTheme,
} from '@mui/material';
import { getPosterUrl } from '../shared/get-poster-url';
import { useNavigate } from 'react-router';

export function MovieCard({ movie }) {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleClick(event) {
    const id = event.target.id;
    const target = `/movie-details/${id}`;
    navigate(target);
  }

  return (
    <Card
      sx={{
        [theme.breakpoints.up('sm')]: {
          maxHeight: 500,
          minHeight: 500,
        },
        [theme.breakpoints.down('sm')]: {
          width: 390,
          minHeight: 500,
        },
      }}
    >
      <CardMedia
        component="img"
        alt={movie.title}
        sx={{
          [theme.breakpoints.up('sm')]: {
            height: '340px',
            maxWidth: '100%',
          },
          [theme.breakpoints.down('sm')]: {
            height: '420px',
            maxWidth: '100%',
          },
        }}
        image={getPosterUrl(movie.poster_path)}
      />
      <CardContent>
        <Tooltip title={movie.title}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: 220,
              whiteSpace: 'nowrap',
            }}
          >
            {movie.title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Release Date: {movie.release_date}
          <br />
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} id={movie.id} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
