import React, { useState } from 'react';

const DropdownMenu = () => {
  const [industry, setIndustry] = useState('');
  const [brandValue, setBrandValue] = useState('');
  const [trend, setTrend] = useState('');
  const [target, setTarget] = useState('');
  const [languageStyle, setLanguageStyle] = useState('');

  const handleSelect = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  return (
    <div>
      <label>제품 또는 업종:</label>
      <select value={industry} onChange={(e) => handleSelect(e, setIndustry)}>
        <option value="요식업/식음료">요식업/식음료</option>
        <option value="의류/패션/쇼핑">의류/패션/쇼핑</option>
        <option value="뷰티/미용/화장품">뷰티/미용/화장품</option>
        <option value="건강/의료/복지">건강/의료/복지</option>
        <option value="여행/스포츠/취미">여행/스포츠/취미</option>
        <option value="가정/출산/유아동">가정/출산/유아동</option>
        <option value="엔터테인먼트/미디어">엔터테인먼트/미디어</option>
        <option value="반려/애완용품">반려/애완용품</option>
        <option value="생활용품/가구/가전제품">생활용품/가구/가전제품</option>
        <option value="인테리어/건축/부동산">인테리어/건축/부동산</option>
        <option value="교육">교육</option>
        <option value="과학기술/혁신">과학기술/혁신</option>
        <option value="자동차/운송">자동차/운송</option>
        {/* 다른 업종 항목들을 추가할 수 있습니다 */}
      </select>

      <label>브랜드 가치:</label>
      <select value={brandValue} onChange={(e) => handleSelect(e, setBrandValue)}>
        <option value="전문성">전문성</option>
        <option value="고급스러운">고급스러운</option>
        <option value="실용적인">실용적인</option>
        <option value="건강한">건강한</option>
        <option value="편안한">편안한</option>
        <option value="트렌디한">트렌디한</option>
        <option value="특이한">특이한</option>
        <option value="현대적인">현대적인</option>
        <option value="전통적인">전통적인</option>
        <option value="감성적인">감성적인</option>
        <option value="친근한">친근한</option>
        <option value="환경친화적">환경친화적</option>
        <option value="화려한">화려한</option>
        <option value="유쾌한">유쾌한</option>
        {/* 다른 브랜드 가치 항목들을 추가할 수 있습니다 */}
      </select>


      <label>트렌드:</label>
      <select value={trend} onChange={(e) => handleSelect(e, setTrend)}>
        <option value="수제">수제</option>
        <option value="유기농">유기농</option>
        <option value="비건">비건</option>
        <option value="즉석">즉석</option>
        <option value="무인">무인</option>
        <option value="셀프서비스">셀프서비스</option>
        <option value="지역적">지역적</option>
        <option value="글로벌">글로벌</option>
        <option value="퓨전">퓨전</option>
        <option value="테이크아웃">테이크아웃</option>
        <option value="1인">1인</option>
        <option value="모바일">모바일</option>
        <option value="레트로">레트로</option>
        <option value="배달">배달</option>
        {/* 다른 브랜드 가치 항목들을 추가할 수 있습니다 */}
      </select>


      <label>타깃:</label>
      <select value={target} onChange={(e) => handleSelect(e, setTarget)}>
        <option value="유아동">유아동</option>
        <option value="청소년">청소년</option>
        <option value="성인">성인</option>
        <option value="노인/시니어">노인/시니어</option>
        <option value="학생">학생</option>
        <option value="직장인">직장인</option>
        <option value="부모">부모</option>
        <option value="지역민">지역민</option>
        <option value="외국인">외국인</option>
        <option value="소수자">소수자</option>
        <option value="1인가구">1인가구</option>
        <option value="남성">남성</option>
        <option value="여성">여성</option>
        {/* 다른 브랜드 가치 항목들을 추가할 수 있습니다 */}
     </select>
        <label>언어 스타일:</label>
      <select value={languageStyle} onChange={(e) => handleSelect(e, setLanguageStyle)}>
        <option value="순우리말">순우리말</option>
        <option value="한자식">한자식</option>
        <option value="영어식">영어식</option>
        <option value="일본식">일본식</option>
        <option value="유럽식">유럽식</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
