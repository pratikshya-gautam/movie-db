import { Grid2, Link } from '@mui/material';
import { GenresMenu } from './genres-menu';
import { useEffect, useState } from 'react';
import { getGenres } from '../api/tmdb-api';

export function Genres({ onGenresChange, genreId }) {
  const [geners, setGeners] = useState([]);

  async function loadGenres() {
    const result = await getGenres();
    setGeners(result);
  }

  function handleClick(event) {
    onGenresChange(event.target.id);
  }

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <>
      <Grid2>
        <Link
          onClick={handleClick}
          id={null}
          underline="none"
          color={genreId === null ? 'primary' : 'secondary'}
        >
          All
        </Link>
      </Grid2>
      {geners.slice(0, 5).map((g) => (
        <Grid2 key={g.name}>
          <Link
            onClick={handleClick}
            id={g.id}
            underline="none"
            color={genreId === g.id ? 'primary' : 'secondary'}
          >
            {g.name}
          </Link>
        </Grid2>
      ))}

      <GenresMenu
        geners={geners}
        handleMenuItemClick={handleClick}
        genreId={genreId}
      />
    </>
  );
}
