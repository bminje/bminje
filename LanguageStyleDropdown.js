import { useState } from 'react';

const useLanguageStyleState = () => {
  const [languageStyle, setLanguageStyle] = useState('');

  return { languageStyle, setLanguageStyle };
};

export default useLanguageStyleState;
