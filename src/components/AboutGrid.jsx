import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PVHS from "../pictures/PVHSRescaled.jpg"
import AFSP from "../pictures/AFSPRescaled.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paperPicture: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "550px"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperPicture}>
            <a href="https://www.google.com/maps/place/Pleasant+Valley+High+School/@40.9222709,-75.4063163,17z/data=!3m1!4b1!4m5!3m4!1s0x89c45a38b091aefd:0xef65754b4dcaf992!8m2!3d40.9222709!4d-75.4041276">
                <img src={PVHS} alt='website logo' />
            </a>
             <p>Located at Pleasant Valley High School</p><break /><p>Click picture for directions</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paperPicture}>
                <a href="https://afsp.org/">
                    <img src={AFSP} alt = "American Foundation for Suicide Prevention Logo"></img>
                </a>
              <p>piss</p>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}