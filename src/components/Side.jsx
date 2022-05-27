import { Grid } from '@mui/material';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'; 
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';


export default function Side() {
    return (
        <>
            <Grid container sx={{height: '100px', padding:'25px 8px'}}>
                <SupervisedUserCircleRoundedIcon fontSize='large'  sx={{ bgcolor: 'white', borderRadius : '50%' }}/>
            </Grid>
            <Grid container sx={{height: '500px'}}>
                <Grid item xs={12}/>
            </Grid>
            <Grid container sx={{height: '150px', padding:'50px 0'}}>
                <SettingsApplicationsIcon  sx={{ fontSize:'50px', bgcolor: 'white' }}/>
            </Grid>
        </>     
    );
  }