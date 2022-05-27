import { Grid } from '@mui/material';
import Histogram from './Histogram';
import Container from '@mui/material/Container';


export default function Information() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();  // Obtenir la date
  
    const date = today.getDate()+' '+months[today.getMonth()]+' '+today.getFullYear();
  
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
        <Container>
            {/* Ligne avec la date et le logo */}
            <Grid container sx={{ height: '100px', paddingTop:'50px', textAlign:'center'}}>
                <Grid item xs={2}>
                <Container>
                    company logo
                </Container>
                </Grid>
                <Grid item xs={8}/>
                <Grid item xs={2}> 
                <Container>
                    {date} <br/> {time}
                </Container>
                </Grid>
            </Grid>

            {/* Ligne avec l'histogramme'*/}
            <Grid container sx={{height: '500px'}}>
                <Grid item xs={2}/>
                <Grid item xs={8} > 
                    <Container>
                        <Histogram/> 
                    </Container> 
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </Container>
          
          

      
    );
  }