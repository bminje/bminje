import { useState } from 'react';

const useBrandValueState = () => {
  const [brandValue, setBrandValue] = useState('');

  return { brandValue, setBrandValue };
};

export default useBrandValueState;
