import React from 'react';

const Friend = props => {

  return (
    <div className='friend'>
      <h4>{props.friend.name}</h4>
      <p><b>Age</b>: {props.friend.age}</p>
      <p><b>Email</b>: {props.friend.email}</p>
    </div>
  )
}

export default Friend;
