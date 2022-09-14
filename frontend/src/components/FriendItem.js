import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function FriendItem({ friend }) {
    return (
        <ListItem key={friend.id} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={friend.firstName} />
            </ListItemAvatar>
            <ListItemText
                primary={`${friend.firstName} ${friend.surname}`}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {friend.gender}
                        </Typography>
                        — {friend.age} years old
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

export default FriendItem;