import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        axios.get<Activity[]>('https://localhost:5000/api/activities')
        .then(response  => setActivities(response.data))
    }, [])

    const title = "Welcome to Reactivities";

    return (
        <>
            <Typography variant='h3'>{title}</Typography>
            <List>
                {activities.map(activity => (
                    <ListItem key={activity.id}>
                        <ListItemText>{activity.title}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default App
