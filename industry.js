import { useState } from 'react';

const useIndustryState = () => {
  const [industry, setIndustry] = useState('');

  return {
    industry,
    setIndustry,
  };
};

export default useIndustryState;
