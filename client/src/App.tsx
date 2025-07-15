import { useEffect, useState } from "react";

const App = () => {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        fetch('https://localhost:5000/api/activities')
        .then(response => response.json())
        .then(data => setActivities(data))
    }, [])

    const title = "Welcome to Reactivities";

    return (
        <>
            <h3 className="app" style={{color:'red'}}>{title}</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.title}</li>
                ))}
            </ul>
        </>
        
    )
}

export default App
