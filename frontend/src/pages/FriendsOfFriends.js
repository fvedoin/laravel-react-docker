import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../services/api";

import List from '@mui/material/List';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import FriendItem from "../components/FriendItem";

function FriendsOfFriends() {
    const { id } = useParams();
    const [friendsOfFriends, setFriendsOfFriends] = useState([]);
    useEffect(() => {
        api.get(`/people/${id}/friends_of_friends`).then(response => {
            setFriendsOfFriends(response.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Divider textAlign="left">Friends of friends</Divider>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ minWidth: 275 }}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {friendsOfFriends.map(friend => (
                            <FriendItem key={friend.id} friend={friend} />
                        ))}
                    </List>
                </Card>
            </Grid>
        </Grid>
    );
}

export default FriendsOfFriends;
