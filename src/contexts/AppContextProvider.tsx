import React, { useState, createContext } from "react";

type AppContextValue = {
  darkMode: boolean;
};

type AppContextProviderProps = {
  children?: React.ReactNode;
};

export const AppContext = createContext<AppContextValue>(null as any);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  // eslint-disable-next-line
  const [value, setValue] = useState<AppContextValue>({
    darkMode: false,
  });

  const init = async () => {
    // const contextValue: AppContextValue = {
    //     darkMode: false
    // };
    // setValue(contextValue);
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <AppContext.Provider value={value}>
      {value ? children : null}
    </AppContext.Provider>
  );
};
