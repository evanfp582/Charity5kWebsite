import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeGrid from './HomeGrid'
import AboutGrid from './AboutGrid'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };


  if (value===0){
    return(<div><Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Sign Up!" />
      </Tabs>
    </Paper>
    <HomeGrid className="grid-div"/>
    </div>
  );
    
  }

  if (value===1){
    return(<div><Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Sign Up!" />
      </Tabs>
    </Paper>
    <AboutGrid className="grid-div"/>
    </div>
  );
  }

  if (value===2){
    console.log("Piss N Shit")
  }
  

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Sign Up!" />
      </Tabs>
    </Paper>
  );
}