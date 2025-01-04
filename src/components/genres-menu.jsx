import { Menu, MenuItem, Grid2, Link } from '@mui/material';
import { useState } from 'react';

export function GenresMenu({ geners, handleMenuItemClick, genreId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    handleMenuItemClick(event);
    setAnchorEl(null);
  }

  return (
    <div>
      <Grid2>
        <Link
          underline="none"
          color={
            geners.slice(5).some((g) => g.id === genreId)
              ? 'primary'
              : 'secondary'
          }
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          More
        </Link>
      </Grid2>

      <Menu
        sx={{ width: 250, height: 300 }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {geners.slice(5).map((g) => (
          <MenuItem
            selected={genreId === g.id}
            id={g.id}
            key={g.id}
            onClick={handleClose}
          >
            {g.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
