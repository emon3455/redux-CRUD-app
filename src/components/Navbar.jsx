import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navMenu = <>
    <Box sx={{ display: 'flex' , flexDirection: { xs: 'column', md: 'row' } }}>
      <Button sx={{ color: { xs: 'black', md: 'white' } }}>
        <Link to="/" style={{ textDecoration: 'none' , color: "inherit" }}>Home</Link>
      </Button>

      <Button sx={{ color: { xs: 'black', md: 'white' } }}>
        <Link to="/books" style={{ textDecoration: 'none' , color: "inherit" }}>Books</Link>
      </Button>

      <Button sx={{ color: { xs: 'black', md: 'white' } }}>
        <Link to="/addBook" style={{ textDecoration: 'none' , color: "inherit" }}>Add-Book</Link>
      </Button>

      <Button sx={{ color: { xs: 'black', md: 'white' } }}>
        <Link to="/manageBooks" style={{ textDecoration: 'none' , color: "inherit" }}>Manage-Books</Link>
      </Button>

      <Button sx={{ color: { xs: 'black', md: 'white' } }}>
        <Link to="/login" style={{ textDecoration: 'none', color:"inherit" }} >Login</Link>
      </Button>
    </Box>
  </>

  return (
    <AppBar position="static" sx={{ backgroundColor: '#9365df' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book-Hub
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                {navMenu}
              </MenuItem>

            </Menu>
          </Box>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book-Hub
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {navMenu}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

