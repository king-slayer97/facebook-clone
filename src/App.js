import React,{useState} from 'react';
import './App.css';
import Login from './Login.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed';
import {useSelector} from 'react-redux';

const App = () => {
  const store = useSelector((store) => {return store;});
  console.log(store);
  // const [user,setUser];
  return (
    <div className="App">
      {!store.user ?
        (<Login />)
        :
        (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
        )
        /* App body */
      }
    </div>
  );
}

export default App;