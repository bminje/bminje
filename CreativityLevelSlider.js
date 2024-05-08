const CreativityLevelSlider = ({ label, value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="range"
        min={1}
        max={3}
        step={1}
        value={value}
        onChange={handleChange}
      />
      <p>
        {value === 1 ? '직관적' : value === 2 ? '중간' : '독창적'}
      </p>
    </div>
  );
};

export default CreativityLevelSlider;