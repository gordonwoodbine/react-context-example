import { createContext, useContext, useEffect, useState } from 'react';

const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const fetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetcher().then((res) => setData(res));
  }, []);

  return (
    data && <TestContext.Provider value={data}>{children}</TestContext.Provider>
  );
};

const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

export { TestProvider, useTest };
