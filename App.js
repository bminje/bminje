import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import BrandValuesDropdown from './BrandValuesDropdown';
import TrendDropdown from './TrendDropdown';
import TargetDropdown from './TargetDropdown';
import LanguageStyleDropdown from './LanguageStyleDropdown';
import CreativityLevelSlider from './CreativityLevelSlider';


const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedBrandValues, setSelectedBrandValues] = useState([]);
  const [selectedTargets, setSelectedTargets] = useState([]);
  const [selectedTrends, setSelectedTrends] = useState([]);
  const [selectedLanguageStyles, setSelectedLanguageStyles] = useState([]);
  const [seedWords, setSeedWords] = useState([]);
  const [creativityLevel, setCreativityLevel] = useState(2);

  const handleSeedWordSubmit = (word) => {
    if (seedWords.length < 3) {
      setSeedWords([...seedWords, word]);
    }
  };

  return (
    <div>
      <h1>프론트엔드 요소 예제</h1>

      <DropdownMenu
        label="제품 또는 업종"
        options={[
          '요식업/식음료',
          '의류/패션/쇼핑',
          '뷰티/미용/화장품',
          '건강/의료/복지',
          '여행/스포츠/취미',
          '가정/출산/유아동',
          '엔터테인먼트/미디어',
          '반려/애완용품',
          '생활용품/가구/가전제품',
          '인테리어/건축/부동산',
          '교육',
          '과학기술/혁신',
          '자동차/운송',
        ]}
        selectedOptions={selectedProducts}
        setSelectedOptions={setSelectedProducts}
      />

      <BrandValuesDropdown
        label="브랜드 가치"
        brandValues={[
          '전문성',
          '고급스러운',
          '실용적인',
          '건강한',
          '편안한',
          '트렌디한',
          '특이한',
          '현대적인',
          '전통적인',
          '감성적인',
          '친근한',
          '환경친화적',
          '화려한',
          '유쾌한',
        ]}
        selectedValues={selectedBrandValues}
        setSelectedValues={setSelectedBrandValues}
      />

      <TrendDropdown
        label="트렌드"
        trends={[
          '수제',
          '유기농',
          '비건',
          '즉석',
          '무인',
          '셀프서비스',
          '지역적',
          '글로벌',
          '퓨전',
          '테이크아웃',
          '1인',
          '모바일',
          '레트로',
          '배달',
        ]}
        selectedTrends={selectedTrends}
        setSelectedTrends={setSelectedTrends}
      />

      <TargetDropdown
        label="타깃"
        targets={[
          '유아동',
          '청소년',
          '성인',
          '노인/시니어',
          '학생',
          '직장인',
          '부모',
          '지역민',
          '외국인',
          '소수자',
          '1인가구',
          '남성',
          '여성',
        ]}
        selectedTargets={selectedTargets}
        setSelectedTargets={setSelectedTargets}
      />

      <LanguageStyleDropdown
        label="언어스타일"
        languageStyles={[
          '순우리말',
          '한자식',
          '영어식',
          '일본식',
          '유럽식',
        ]}
        selectedStyles={selectedLanguageStyles}
        setSelectedStyles={setSelectedLanguageStyles}
      />

      {/* 독창성 레벨 레인지 슬라이더 추가 */}
      <CreativityLevelSlider
        label="독창성 레벨"
        value={creativityLevel}
        onChange={setCreativityLevel}
      />

      {/* 시드 단어 입력 폼 추가 */}
      <SeedWordForm onSubmitSeedWord={handleSeedWordSubmit} />

      {/* 선택된 시드 단어 표시 */}
      <div>
        <h2>선택된 시드 단어:</h2>
        <ul>
          {seedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
