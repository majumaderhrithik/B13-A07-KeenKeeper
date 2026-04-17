import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`,
      friendName,
    };
    setEntries(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}
