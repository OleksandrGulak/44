import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import UserProfile from './UserProfile';

const UserList = () => {
  const { users } = useContext(AppContext);

  return (
    <div>
      <h2>Список користувачів</h2>
      {users.map((user) => (
        <UserProfile key={user.id} userId={user.id} />
      ))}
    </div>
  );
};

export default UserList;