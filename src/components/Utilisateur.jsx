import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export function Utilisateur({user}) {
  return (
    <Card>
        <div className='card-image'>
            <CardMedia
                component="img"
                image={user.image}
                alt="photo de profil"
            />
        </div>        
        
        <CardContent>
          <Typography gutterBottom variant="h6">
            {user.lastname} {user.firstname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
            <br/>
            {user.dob}
          </Typography>
        </CardContent>
        
    </Card>
  );
}

export function Ajouter({users, setUser}) {
    const newUser = {}

    // Fonction pour ajouter un utilisateur à la liste
    async function add(){
        try {
            const response = await fetch("https://randomuser.me/api") // Appel asynchron de l'API
            const data = await response.json();                       // Recevoir la reponse au format Json
            
            // Recuperer les informations necessaires
            newUser.firstname = data.results[0].name.first 
            newUser.lastname = data.results[0].name.last
            newUser.email = data.results[0].email
            newUser.dob = data.results[0].dob.date.split('T')[0]
            newUser.image = data.results[0].picture.thumbnail

            setUser([newUser, ...users])                               // Ajouter au debut de la liste courante
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <Card>

          {/* CardAction (Bouton) centré grace au style (sx) */}
          <CardActionArea sx={{height: '100%', textAlign: 'center'}} onClick={ () => add()}>
            {/* icone "+" couleur grisé */}
            <AddIcon color="disabled" sx={{ fontSize: 100 }}/>
          </CardActionArea>

      </Card>
    );
  }