import React, { useState } from 'react';

const ModalComponent: React.FC<{ onApply: (values: any) => void }> = ({ onApply }) => {
    const [roomValue, setRoomValue] = useState(1);
    const [adultValue, setAdultValue] = useState(1);
    const [childrenValue, setChildrenValue] = useState(0);
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  
    const decrementRoomValue = () => {
      setRoomValue((prevValue) => Math.max(prevValue - 1, 1));
      
    };
  
    const incrementRoomValue = () => {
      setRoomValue((prevValue) => prevValue + 1);
   
    };
  
    
    const decrementAdultValue = () => {
      if (adultValue > 1) {
        setAdultValue((prevValue) => prevValue - 1);
      } else if (adultValue === 1 && childrenValue > 0) {
        setAdultValue(0);
        setChildrenValue((prevValue) => prevValue - 1);
      }
    };
  
    const incrementAdultValue = () => {
      if (roomValue > 0) {
        setAdultValue((prevValue) => prevValue + 1);
      }
    };
  
    const decrementChildrenValue = () => {
      if (childrenValue > 0) {
        setChildrenValue((prevValue) => prevValue - 1);
      } 
    };
  
    const incrementChildrenValue = () => {
     
      setChildrenValue((prevValue) => prevValue + 1);
    };
  
    const toggleCheckbox = () => setCheckboxChecked((prevValue) => !prevValue);
  
    const resetValues = () => {
      setRoomValue(1);
      setAdultValue(1);
      setChildrenValue(0);
      setCheckboxChecked(false);
    
    };
  
    const applyValues = () => {
      console.log("Applying values:", roomValue, adultValue, childrenValue, isCheckboxChecked);
      const values = { roomValue, adultValue, childrenValue, isCheckboxChecked };
      onApply(values);
     
    };
  
    return (
      <div className="flex bg-white p-4 w-96 flex-col gap-4 rounded-md shadow-md">
        <div className="p-2 bg-white flex items-center justify-between rounded-full">
          <p className="mb-0 text-lg font-semibold">Room:</p>
          <div className='flex gap-6 items-center'>
            <div className={`flex items-center justify-center h-9 w-9 rounded-full ${roomValue === 1 ? 'bg-gray-200 ' : 'border border-sky-600'}`}
            > 
              <button
                onClick={decrementRoomValue}
                className="text-sky-600 text-2xl"
                
                disabled={roomValue === 1}
              >
                -
              </button>
            </div> 
            <p className="text-lg">{roomValue}</p>
            <div className="flex items-center justify-center h-9 w-9 rounded-full border border-sky-600"> 
              <button
                onClick={incrementRoomValue}
                className="text-black text-2xl"
               
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 flex items-center justify-between">
          <p className="mb-0 text-lg font-semibold">Adult:</p>
          <div className='flex gap-6 items-center'>
            <div className={`flex items-center justify-center h-9 w-9 rounded-full ${adultValue=== 1 ? 'bg-gray-200 ' : 'border border-sky-600'}`}> 
              <button
                onClick={decrementAdultValue}
                className="text-sky-600 text-2xl"
                disabled={adultValue === 1}
              >
                -
              </button>
            </div>
            <p className="text-lg">{adultValue}</p>
            <div className={`flex items-center justify-center h-9 w-9 rounded-full ${adultValue === roomValue * 2 ? 'bg-gray-200 ' : 'border border-sky-600'}`}> 
              <button
                onClick={incrementAdultValue}
                className="text-sky-600 text-2xl"
                disabled={ adultValue === roomValue * 2}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 flex items-center justify-between">
          <p className="mb-0 text-lg font-semibold">Children:</p>
          <div className='flex gap-6 items-center'>
            <div className={`flex items-center justify-center h-9 w-9 rounded-full ${childrenValue === 0 ? 'bg-gray-200 ' : 'border border-sky-600'}`}> 
              <button
                onClick={decrementChildrenValue}
                className="text-sky-600 text-2xl"
                disabled={childrenValue === 0 }
              >
                -
              </button>
            </div>
            <p className="text-lg">{childrenValue}</p>
            <div className="flex items-center justify-center h-9 w-9 rounded-full border border-sky-600"> 
              <button
                onClick={incrementChildrenValue}
                className="text-sky-600 text-2xl"
               
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 flex items-center justify-between">
          <div className='flex flex-col'>
            <label className="mb-0 text-lg font-semibold" htmlFor="checkbox">
              Pet-friendly 
            </label>
            <span className='text-sm text-gray-400'>Only show stays that allow pets</span>
          </div>
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckboxChecked}
            onChange={toggleCheckbox}
            className="ml-2 text-2xl "
          />
        </div>
        <div className="p-4 flex items-center justify-between">
          <button onClick={resetValues} className="bg-gray-500 text-white px-4 py-2 rounded-full">
            Reset
          </button>
          <button onClick={applyValues} className="bg-sky-500 text-white px-4 py-2 rounded-full">
            Apply
          </button>
        </div>
      </div>
    );
  };
export default ModalComponent;  