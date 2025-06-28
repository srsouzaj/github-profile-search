import type { OutUsers } from "@/services/Users/Models";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface UserContextData {
  user: OutUsers;
  handleLoggerUser: (value: OutUsers) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<OutUsers>({} as OutUsers);

  const handleLoggerUser = useCallback((value: OutUsers) => {
    setUser(value);
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLoggerUser }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
