import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {Math, Ranking} from '../Images';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {ContainerCenter, TitleH3,TextWhiteShadow, TextBold} from '../css/BaseStyle';

const images = [
    {
        url: Math,
        title: 'Matemática',
        width: '100%',
        href: '/math_game_one'
    },
    {
        url: Math,
        title: 'Numero en palabra',
        width: '100%',
        href: '/numero_a_palabra'
    },
    {
        url: Math,
        title: 'Burger',
        width: '100%',
        href: '/burger_builder'
    },
    {
        url: Ranking,
        title: 'Ranking',
        width: '100%',
        href: '/ranking_page'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        verticalAlign: 'center'
    },
    ContainerCenter,
    TitleH3,
    TextBold,
    TextWhiteShadow,
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
            opacity: 0.15,
            },
            '& $imageMarked': {
            opacity: 0,
            },
            '& $imageTitle': {
            border: '4px solid currentColor',
            },
        },
    },

    focusVisible: {},
    
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },

    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center %',
    },

    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },

    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },

    // la rayita debajo del nombre
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },

}));

export default function DobleBoton() {

    const classes = useStyles();

    return (
        <Container className={classes.ContainerCenter}>
            <Grid container spacing={2}  alignItems="center" >           
                {images.map((image) => (
                    <Grid item xs={12} md={3}  >
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                            href={image.href}
                        >
                            <span className={classes.imageSrc}
                                style={{ backgroundImage: `url(${image.url})`,}}    />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>

                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle + " "+ classes.TitleH2 + " " + classes.TextBold + " " + classes.TextWhiteShadow}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
