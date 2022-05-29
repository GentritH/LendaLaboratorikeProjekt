import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import { ducks } from './demo';
//import DuckItem from './DuckItem';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

//Si koment pjesa e semantic-ui-css (edhe ne file-n index.tsx)
  return (

/*    <div>
    <Header as='h2' icon='users' content='Reactivities' />

      <List>
      {activities.map((activity: any) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
  </div>*/


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Projekti ne Lenden Laboratorike 1</h2>
        <ul>
        <ul>
         {activities.map((activity: any) => (
           <li key={activity.id}>
             {activity.fotoName}
           </li>
         ))}
       </ul>
       </ul>
      </header>
    </div>
  );
}

export default App;

