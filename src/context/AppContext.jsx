import { createContext, useState } from 'react';

export const AppContext = createContext({
  users: [],
  setUsers: () => {},
});

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Олександр' },
    { id: 2, name: 'Марія' },
    { id: 3, name: 'Іван' },
  ]);

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};