import React, { Component } from 'react';
import Useritem from './Useritem';

const Users = ({ users, loading }) => {

        return (
            <div style={userStyle}>
               {users.map(user => (
                   <Useritem key={user.id} user={user} />
               ))} 
            </div>
        )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: "1rem"
}

export default Users
