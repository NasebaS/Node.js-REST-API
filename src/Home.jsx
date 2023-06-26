import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // // Assume you have a list of users with their respective IDs
  // const users = [
  //   { id: 1, name: 'User 1' },
  //   { id: 2, name: 'User 2' },
  //   // ...
  // ];

  return (
    <div>
      <h1>Home</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/update/${user.id}`} state={{ userId: user.id }}>
              Update
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
