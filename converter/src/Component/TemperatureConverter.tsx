import { useState } from "react";

function TemperatureConverter() {
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("Celsius");
    const [result, setResult] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value);
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectValue(e.target.value);
    }

    function calculate(){
        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult("Please enter a valid number.");
            return;
        }

        if (selectValue === "Celsius") {
            const fahrenheit = (value * 9 / 5) + 32;
            setResult(fahrenheit.toFixed(2)+" °F");
        } else if (selectValue === "Fahrenheit") {
            const celsius = (value - 32) * 5 / 9;
            setResult(celsius.toFixed(2)+" °C");
        }
        setInputValue("");
    }

    return (
        <div style={{border:"2px solid ", padding:"10px"}}>
            <h2>Temperature Conversion - Celsius ⇆ Fahrenheit</h2>
            <input 
            type="number" 
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter temperature"
            autoFocus/>
            <select onChange={handleSelectChange}
            style={{margin:"5px"}}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
            </select>
            <button onClick={calculate}>Convert</button>
            <p>{result}</p>
        </div>
    );
}

export default TemperatureConverter;
