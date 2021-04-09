import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import pic from "../pictures/MeWithKramersRescaled.jpg"
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px"
  },
  paper: {
    color: theme.palette.text.secondary,
    height:450,
    
  },
  textBox:{
    height:400,
    textAlign: 'left',
  },
  photoBox:{
    paddingTop: 25,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:450,

  }

}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <Paper className={classes.photoBox} >
                <Container > 
                    <img src={pic} alt='website logo' />
                </Container></Paper>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.textBox}><Paper className={classes.paper}>item</Paper></div>
        </Grid>
      </React.Fragment>
    );
  }

  function BackwardsFormRow(){
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <div className={classes.textBox}><Paper className={classes.paper}>item</Paper></div>
        </Grid>
        <Grid item xs={4}>
            <Paper className={classes.photoBox} >
                <Container > 
                    <img src={pic} alt='website logo' />
                </Container></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
         <Grid container item xs={12} spacing={3}>
          <BackwardsFormRow />
        </Grid>
        {/*
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}