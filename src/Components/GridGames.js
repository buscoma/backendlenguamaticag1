import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import image1 from '../Images/abc.jpg'
import image2 from '../Images/abc.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        padding: '.5rem',
    },
    gridList: {
        flexWrap: 'wrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        justifyContent: 'center',
        width:'100%',
    },
    title: {
        color: theme.palette.primary,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));


const tileData = [
    {
        img: image1,
        title: 'Image2',
        author: 'author',
        href : ''
    },
    {
        img: image2,
        title: 'Image2',
        author: 'author',
        href:''
    },
    {
        img: image1,
        title: 'Image2',
        author: 'author',
        href:''
    },
];

export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <GridList className={classes.gridList} spacing={10} cols={3}>
                {tileData.map((tile) => (
                        <GridListTile hover key={tile.img} style={{minWidth:'200px'}}>
                            <a href={tile.href}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title="Click para jugar"
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.title}`}>
                                            <VideogameAssetIcon className={classes.title} />
                                        </IconButton>
                                    }
                                />
                            </a>
                        </GridListTile>
                    
                ))}
            </GridList>
        </div>
    );
}