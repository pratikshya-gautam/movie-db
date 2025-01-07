import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Tooltip,
} from '@mui/material';
import { getPosterUrl } from '../shared/get-poster-url';

export function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 240, maxHeight: 500, minHeight: 500 }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="340px"
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
        {/* 
        TODO: Add onClick handler. Use react-router hook called 
        useNavigate -> navigate(/movies/id) 
        Read More: https://reactrouter.com/start/library/navigating#usenavigate
        Result: when clicking on Learn More -> movies/id and id should id of a movie.
        */}
        <Button id={movie.id} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
