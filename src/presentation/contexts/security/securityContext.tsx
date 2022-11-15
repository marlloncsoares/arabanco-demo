import { createContext, ReactNode, useState } from "react";
import { Nullish } from "@core/types";
import { User } from "@domain/user";

interface SecurityContextProps {
  children: ReactNode;
}

export type SecurityContextType = {
  userActive?: User | Nullish;
  setUserActive: (newValue: User | Nullish) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (newValue: boolean) => void;
  userActiveToken: string;
  setUserActiveToken: (newValue: string) => void;
};

export const SecurityContext = createContext<SecurityContextType>(
  {} as SecurityContextType
);

export const SecurityContextProvider = ({ children }: SecurityContextProps) => {
  const [userActive, setUserActive] = useState<User | Nullish>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userActiveToken, setUserActiveToken] = useState<string>("");

  return (
    <SecurityContext.Provider
      value={{
        userActive,
        setUserActive,
        isLoggedIn,
        setIsLoggedIn,
        userActiveToken,
        setUserActiveToken,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};
