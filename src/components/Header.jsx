import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import head from "../pictures/headerGud.png"
//import Paper from '@material-ui/core/Paper'



export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="main-container">
                <Container > 
                    <img src={head} alt='website logo' />
                </Container>
            </div>

    </React.Fragment>
  );
}

