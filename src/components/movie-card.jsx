import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Tooltip,
} from '@mui/material';

export function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 240, maxHeight: 500, minHeight: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="340px"
        image={movie.Poster}
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
            {movie.Title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Year: {movie.Year}
          <br />
          Type: {movie.Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
