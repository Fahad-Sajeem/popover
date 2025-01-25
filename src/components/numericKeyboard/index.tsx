import React, { useState } from "react";
import "../../styles/NumericKeyboard.css";

interface NumericKeyboardProps {
  // position: { top: number; left: number };
  onValueChange: (value: string) => void;
  // onClose: () => void;
}

const NumericKeyboard: React.FC<NumericKeyboardProps> = ({ onValueChange }) => {
    const [value, setValue] = useState('')
  // const keyboardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (keyboardRef.current && !keyboardRef.current.contains(event.target as Node)) {
  //       onClose()
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [onClose])

  // useEffect(() => {
  //   if (keyboardRef.current) {
  //       const rect = keyboardRef.current.getBoundingClientRect()
  //     const { innerWidth, innerHeight } = window
  //     let { top, left } = position

  //     if (top + rect.height > innerHeight) {
  //       top = position.top - rect.height
  //     }

  //     if (left + rect.width > innerWidth) {
  //       left = position.left - rect.width
  //     }

  //     keyboardRef.current.style.top = `${top}px`
  //     keyboardRef.current.style.left = `${left}px`
  //   }
  // }, [position])

  const handleButtonClick = (digit: string) => {
    setValue((prev) => prev + digit)
  }
  const handleClear = () => {
    setValue('')
  }
  const handleSubmit = () => {
    onValueChange(value)
  }

  return (
    <div className="numeric-keyboard" >
      <div className="keyboard-display">{value}</div>
      <div className="keyboard-buttons">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
          <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
            {digit}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </div>
  );
};

export default NumericKeyboard;
