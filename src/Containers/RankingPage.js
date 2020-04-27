import React from 'react';
import Table from '../Components/Table.js';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Raking(){

    const classes = useStyles();


    return (
        <Container maxWidth='lg'>
            <div className={classes.root}>
                <Grid container spacing={5} justify="space-between" alignItems="center">
                    <Grid item xs={12} justify="center" alignItems="center" style={{textAlign:'center'}}>
                        <Typography  variant="h3" noWrap> Jueguemos </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} style={{textAlign:'center'}}>
                        <Typography  variant="h3" noWrap> Juego 1 </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{textAlign:'center'}}>
                        <Typography  variant="h3" noWrap> Juego 2 </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} style={{textAlign:'center'}}>
                        <Typography  variant="h3" noWrap> Juego 3 </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Table  />
                    </Grid>
                </Grid>
            </div>
            
        </Container>
    );
        
    
}