import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <Link to={`/users/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
