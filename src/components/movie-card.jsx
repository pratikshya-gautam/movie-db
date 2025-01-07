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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
