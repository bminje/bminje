import { useState } from 'react';

const useTrendState = () => {
  const [trend, setTrend] = useState('');

  return { trend, setTrend };
};

export default useTrendState;
