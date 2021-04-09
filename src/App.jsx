import React from "react" 
import Tabs from "./components/Tabs"
import Header from "./components/Header"
import { Container } from "@material-ui/core"
//import AppBar from '@material-ui/core/AppBar';



function App(){
        
        return( <div>
            <Container>
                <Header className="container-div"/>
            </Container>
            <Tabs />
            
        </div>
        )
    
}


export default App