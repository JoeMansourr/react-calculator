import React from 'react';
import { useState } from 'react';

export default function Calculator() {

    const [firstOperand, setFirstOperand] = useState(null);
    const [secondOperand, setSecondOperand] = useState(null);
    const [currentOperator, setCurrentOperator] = useState(null);
    
    const handleNumberClick = (event) => {
        const num = event.target.innerText;
        if (!currentOperator) {
            setFirstOperand(firstOperand ? firstOperand + num : num);
        } else {
            setSecondOperand(secondOperand ? secondOperand + num : num);
        }
    }
    
    const handleOperatorClick = (event) => {
        const operator = event.target.innerText;
        setCurrentOperator(operator);
    }
    
    const handleEqualClick = () => {
        let result;
        switch(currentOperator) {
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                result = firstOperand;
        }
        setFirstOperand(result.toLocaleString());
        setSecondOperand(null);
        setCurrentOperator(null);
    }

    const clearResult = () => {
        setFirstOperand(null);
        setSecondOperand(null);
        setCurrentOperator(null);
    }
    
  return (
    <>
        <div className="container">
            <div className="screen output">{firstOperand} {currentOperator} {secondOperand}</div>
                <div className="buttons">
                    <button className="num-button" onClick={handleNumberClick}>7</button>
                    <button className="num-button" onClick={handleNumberClick}>8</button>
                    <button className="num-button" onClick={handleNumberClick}>9</button>
                    <button className="button operator" onClick={handleOperatorClick}>*</button>
                    <button className="num-button" onClick={handleNumberClick}>4</button>
                    <button className="num-button" onClick={handleNumberClick}>5</button>
                    <button className="num-button" onClick={handleNumberClick}>6</button>
                    <button className="button operator" onClick={handleOperatorClick}>-</button>
                    <button className="num-button" onClick={handleNumberClick}>1</button>
                    <button className="num-button" onClick={handleNumberClick}>2</button>
                    <button className="num-button" onClick={handleNumberClick}>3</button>
                    <button className="button operator" onClick={handleOperatorClick}>+</button>
                    <button className="num-button" onClick={handleNumberClick}>0</button>
                    <button className="button decimal" onClick={handleNumberClick}>.</button>
                    <button className="button operator" onClick={handleEqualClick}>=</button>
                    <button className="button operator" onClick={handleOperatorClick}>/</button>
                    <button className="ac-button" onClick={clearResult}>AC</button>
                </div>
        </div>
    </>
  )
}
