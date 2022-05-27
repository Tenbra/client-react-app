import ListeUtilisateur from './components/ListeUtilisateur';
import Information from './components/Information';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import "./static/css/app.css"
import Side from './components/Side';



function App() {
 
  return (
    <Container>

      <Grid container>

        <Grid item xs={"auto"} sx={{ bgcolor: 'black', width: '50px !important'}} >

          <Side/>
          
        </Grid>
      
        <Grid item xs={11} > 
          <Grid container rowSpacing={1}>

            {/* Bloc avec graphe, le logo et l'image */}
            <Grid item xs={12} sx={{ bgcolor: '#fff'}} >  
              <Information/>
            </Grid>

            {/* Bloc avec le carroussel */}
            <Grid item xs={12} > 
              <ListeUtilisateur/>
            </Grid>

          </Grid>      
        </Grid>
      
      </Grid>
    
    </Container>
    
  );
}

export default App;
