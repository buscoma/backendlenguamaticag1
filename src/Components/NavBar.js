import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Avatar from '@material-ui/core/Avatar';
import {WoodGrain} from '../Images/';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {AvatarZombie} from '../Images';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
        fontWeight: 'bold'
    },
    mainBkg: {
        backgroundImage: 'url(' + WoodGrain + ')'
    },
    homeIcon: {
        fontSize: '25pt'
    },
    usuario: {
        display: 'inline',
        float: 'right',
        textAlign: 'right'
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    //const [auth, setAuth] = React.useState(true);
    const [auth] = React.useState(true);
    //const [anchorEl, setAnchorEl] = React.useState(null);
    const mediaQueryMatch = useMediaQuery('(min-width:600px)');

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const handleBack = () => {
        console.log('handleBackClicked');
    }

    const handleHome = () => {
        console.log('handleHomeClicked');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.mainBkg}>
                <Toolbar>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleBack}
                        color="inherit"
                    >
                        <ArrowBackIosRoundedIcon />
                    </IconButton>

                    <Typography variant="subtitle1" className={classes.title}>
                        {props.AppName}
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleHome}
                        color="inherit"
                    >
                        <HomeRoundedIcon className={classes.homeIcon} />
                    </IconButton>
                    {auth && (
                        <div>
                            <Avatar alt="nombre" src={AvatarZombie} />
                            {mediaQueryMatch ? <span className={classes.usuario}>{props.User.Name}</span> : ''}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
