import { useState } from 'react';

const useTargetState = () => {
  const [target, setTarget] = useState('');

  return { target, setTarget };
};

export default useTargetState;
