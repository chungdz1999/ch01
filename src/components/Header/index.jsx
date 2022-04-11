import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import { Badge } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../../features/Cart/selectors';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { pink } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logOut } from '../../features/Auth/userSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  }

}));

export default function Header() {
  
  const dispath = useDispatch();
  const [open, setOpen] = useState(false);

  const cartItemCount = useSelector(cartItemsCountSelector);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    // ko the thoat tru khi bam cancel
    if (reason === 'escapeKeyDown' || reason === 'backdropClick') return;
    setOpen(false);
  };

  const handleCartClick = () => {
    history.push('/cart');
  };

  const classes = useStyles();

  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
  }

  const [mode, setMode] = useState(MODE.LOGIN);

  //// show icon when login
  const loginInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loginInUser.id;

  //// show menu to Avatar
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
      const action = logOut();
      dispath(action);

      setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}> Shop </Link>
          </Typography>

          <NavLink to='/' className={classes.link}>
            <Button color="inherit">Products</Button>
          </NavLink>

          {/* <NavLink to='/todos' className={classes.link}>
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink to='/albums' className={classes.link} >
            <Button color="inherit">Album</Button>
          </NavLink> */}

          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          )}

          {isLoggedIn && (
            <IconButton onClick={handleUserClick}>
              <FaceIcon sx={{ color: pink[500] }} />
            </IconButton>
          )}

        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>


      <Dialog
        // disableBackdropClick 
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">

        <IconButton onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign='center'>
                <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                FORM REGISTER
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign='center'>
                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                  FORM LOGIN
                </Button>
              </Box>
            </>
          )}

        </DialogContent>


        {/* <DialogActions> */}
        {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
        {/* </DialogActions> */}
      </Dialog>

    
    </div>
  );
}
