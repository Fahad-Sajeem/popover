import React, { useState } from "react";
import "../../styles/styles.css";
import NumericKeyboard from "../numericKeyboard";
import { Popover } from "../popover/popover";

// interface KeyboardConfig {
//   rowIndex: number;
//   colIndex: number;
//   position: { top: number; left: number };
// }

const DynamicTable: React.FC = () => {
  const tableRow = 30;
  const tableColumn = 30;
  const [open, setOpen] = useState<boolean>(false);

  const openPopup = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="content_middle">
      {/* <table>
        <thead>
          <tr>
            {Array.from({ length: tableRow }, (_, rowIndex) => (
              <th key={`thead_${rowIndex}`}>

              </th>

            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: tableRow }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: tableColumn }, (_, colIndex) => (
                <Popover open={open} content={<div> pop open </div>}>
                  <td key={colIndex} onClick={openPopup}>

                  </td>
                </Popover>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
      <Popover open={open} content={<div className="popover">Pop Over</div>} placement={"right"}>
        <div className="click" onClick={openPopup}>
          <div>click here!</div>

        </div>
      </Popover>
    </div>
  );
}
export default DynamicTable;
