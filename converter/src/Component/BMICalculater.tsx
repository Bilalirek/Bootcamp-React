import { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [error, setError] = useState('');
  const calculateBMI = () => {
    setError('');

    const weightValue = weightUnit === 'kg' ? weight
      : Number(weight) * 0.453592; // convert to pound
    const heightValue =
      heightUnit === 'cm' ? Number(height) / 100
        : heightUnit === 'm' ? height
          : Number(height) * 0.0254; //convert to inch

    if (Number(weight) <= 0 || Number(height) <= 0) {
      setError('Please enter valid weight and height values greater than zero.');
      return;
    }

    const calculatedBmi = Number(weightValue) / (Number(heightValue) * Number(heightValue));
    setBmi(parseFloat(calculatedBmi.toFixed(2)));

    if (calculatedBmi < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBmi < 24.9) {
      setCategory('Normal weight');
    } else if (calculatedBmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  const getCategoryColor = () => {
    if (category === 'Normal weight') return 'green';
    if (category === 'Overweight') return 'orange';
    if (category === 'Underweight' || category === 'Obesity') return 'red';
  };

  return (
    <div style={{ padding: "20px", border: "2px solid ", borderRadius: "5px" }}>
      <h2>BMI Calculator</h2>
      <div style={{ padding: "10px" }}>
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            placeholder='Enter your weight'
            style={{ margin: "5px" }}
          />
        </label>
        <select onChange={(e) => setWeightUnit(e.target.value)} value={weightUnit}>
          <option value="kg">kg</option>
          <option value="pound">pound</option>
        </select>
      </div>
      <div style={{ padding: "10px" }}>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            placeholder='Enter your height'
            style={{ margin: "5px" }}
          />
        </label>
        <select onChange={(e) => setHeightUnit(e.target.value)} value={heightUnit}>
          <option value="cm">cm</option>
          <option value="m">m</option>
          <option value="inch">inch</option>
        </select>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {error && <p style={{ color: 'red', marginTop: "5px" }}>{error}</p>}

      {bmi && (
        <div>
          <h3 style={{ color: getCategoryColor() }}>Your BMI: {bmi}</h3>
          <h3 style={{ color: getCategoryColor() }}>({category})</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
