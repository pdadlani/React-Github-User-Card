import React from 'react';
import Card from './Cards/Card.js';

const FollowersList = (props) => {
  return (
    <div className='followers-list'>
      <h2 className='followers-list-header'>{props.userData.name}'s Followers</h2>
      <div className='followers-cards'>
        {props.followersData.map(follower => {
          return <Card userData={follower} />
        })}
      </div>
    </div>
  )
}

export default FollowersList;