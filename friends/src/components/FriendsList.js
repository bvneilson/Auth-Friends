import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';

import Friend from './Friend.js';

const FriendsList = props => {

  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends').then(res => {
      console.log(res);
      setFriendsList(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  if (!friendsList || friendsList === []) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='friend-list'>
    {friendsList.map((friend, index) => {
      return <Friend friend={friend} key={index} />
    })}
    </div>
  )
}

export default FriendsList;
