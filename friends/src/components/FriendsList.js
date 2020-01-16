import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';

import Friend from './Friend.js';

const FriendsList = props => {

  const [friendsList, setFriendsList] = useState([]);
  const [currentFriends, setCurrentFriends] = useState([])
  const [newFriend, setNewFriend] = useState({});

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends').then(res => {
      console.log(res);
      setFriendsList(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [currentFriends])

  const addFriend = friend => {
    axiosWithAuth().post('http://localhost:5000/api/friends', friend).then(res => {
      console.log(res);
      setCurrentFriends(res.data);
    }).catch(err => {
      console.log(err); 
    })

    //setFriendsList([...friendsList, friend]);
  }

  const handleChange = e => {
    console.log(newFriend);
    setNewFriend(
      {...newFriend,
      [e.target.name]: e.target.value}
    )
  }

  if (!friendsList || friendsList === []) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='friend-section'>
      <h3>Add a Friend</h3>
      <form>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' value={newFriend.name} onChange={handleChange} />
        <label htmlFor='age'>Age: </label>
        <input type='text' name='age' value={newFriend.age} onChange={handleChange} />
        <label htmlFor='email'>Email: </label>
        <input type='text' name='email' value={newFriend.email} onChange={handleChange} />
        <input type='submit' value='Add Friend' onClick={(e) => {e.preventDefault(); addFriend(newFriend)}} />
      </form>
      <div className='friend-list'>
      {friendsList.map((friend, index) => {
        return <Friend friend={friend} key={index} />
      })}
      </div>
    </div>
  )
}

export default FriendsList;
