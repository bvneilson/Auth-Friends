import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';

const Friend = props => {

  const [friend, setFriend] = useState();

  const deleteFriend = id => {
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  const updateFriend = friend => {
    axiosWithAuth().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='friend'>
      <h4>{props.friend.name}</h4> 
      <p><b>Age</b>: {props.friend.age}</p>
      <p><b>Email</b>: {props.friend.email}</p>
      <button onClick={() => {deleteFriend(props.friend.id)}}>Delete Friend</button><button onClick={() => {updateFriend(friend)}}>Update Friend</button>
    </div>
  )
}

export default Friend;
