import { useState, useEffect, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    console.log('hello world');
    setData([1, 2, 3]);
  }, []);

  const func = useCallback(() => {
    console.log('hello world');
  }, []);

  useMemo(() => {
    func();
    return data;
  }, [data, func]);

  return <div>App</div>;
}

createRoot(document.getElementById('root')!).render(<App />);
