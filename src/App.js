import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
import { useEffect, useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false)
  const [data, setDataa] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    let temp = [];
    let tempUsers = [];
    firebase.firestore().collection("acounts").get().then((res) => {

      console.log('conssss');
      res.forEach((ele) => {
        // console.log('dataaa', ele.data())
        // console.log('dataaa0', ele.data().apps)
        // console.log('dataaa', element);
        if (ele && ele.data() && ele.data().apps && Object.keys(ele.data().apps).length > 0) {

          Object.keys(ele.data().apps).forEach(element => {
            // console.log('dataaa', element);
            // console.log('dataaa', ele.data().apps[element].title);
            temp.push(ele.data().apps[element]);
            // console.log('dataaa1', temp);
          });
        }
      })
      setDataa([...temp])
    });

    firebase.firestore().collection("users").get().then((res) => {
      console.log('usersss1');
      res.forEach((ele) => {
        // console.log('dataaa', ele.data())
        // console.log('dataaa0', ele.data().apps)
        // console.log('dataaa', element);
        if (ele && ele.data() && ele.data() && Object.keys(ele.data()).length > 0) {

          // Object.keys(ele.data()).forEach(element => {
            // console.log('dataaa', element);
            console.log('dataaa', ele.data());
            console.log('dataaa', ele.data());
            tempUsers.push(ele.data());
            // console.log('dataaa1', temp);
          // });
        }
      })
      setUsers([...tempUsers])
    });

    // user get
    console.log('usersss0',temp)

  }, [])

  
  return (
    <div class="container">
      <button class="btn btn-primary" onClick={() => { setDisplay(!display) }}>Display</button>
      <h4>Account List</h4>
      {data.length === 0 || display === false ? null : data.map((ele, i) => {
        return (<div key={i} >{ele.title}</div>)
      })}
      <h4>Users List</h4>
      {users.length === 0 || display === false ? null : users.map((ele, i) => {
        return (<div key={i} >{ele.name}</div>)
      })}
    </div>
  );
}

export default App;
