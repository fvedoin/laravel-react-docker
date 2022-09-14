import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../services/api";

import List from '@mui/material/List';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import FriendItem from "../components/FriendItem";

function Suggestions() {
    const { id } = useParams();
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        api.get(`/people/${id}/suggestions`).then(response => {
            setSuggestions(response.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Divider textAlign="left">Suggestions</Divider>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ minWidth: 275 }}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {suggestions.map(friend => (
                            <FriendItem key={friend.id} friend={friend} />
                        ))}
                    </List>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Suggestions;
