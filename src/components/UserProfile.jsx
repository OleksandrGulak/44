import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserProfile = ({ userId }) => {
  const { users } = useContext(AppContext);
  const user = users.find((u) => u.id === userId);

  return (
    <div style={{ padding: '0.5rem', border: '1px solid #ccc' }}>
      <strong>Профіль:</strong> {user?.name || 'Користувача не знайдено'}
    </div>
  );
};

export default UserProfile;