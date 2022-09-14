import { useEffect, useState } from 'react';
import api from '../services/api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function People() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        api.get('/people').then(response => {
            setPeople(response.data);
        }).catch(error => {
            alert(error);
        });
    }, []);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Divider textAlign="left">Full Group</Divider>
            </Grid>
            {people.map(person => (
                <Grid key={person.id} item md={4} sm={12} xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                User #{person.id}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {person.firstName} {person.surname}
                            </Typography>
                            <Link to={`${person.id}/friends`}>
                                <Typography sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }} color="text.secondary">
                                    <PeopleIcon sx={{ mr: 1 }} /> {person.connections_count} friends
                                </Typography>
                            </Link>
                            <Typography variant="body2">
                                Age: {person.age} years old
                                <br />
                                Gender: {person.gender}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`${person.id}/suggestions`}>
                                <Button size="small">Suggestions</Button>
                            </Link>
                            <Link to={`${person.id}/friends_of_friends`}>
                                <Button color='secondary' size="small">Friends of friends</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default People;
