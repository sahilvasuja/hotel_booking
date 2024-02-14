import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import ModalComponent from './ModalComponent';
import { CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles


const BookingComponent: React.FC = () => {
    const [room, setRoom] = useState(1);
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [startDate, setStartDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [allowPet, setAllowPet] = useState(false);
 
    const [Destination, setDestination] = useState<string>('');

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
  

    const handleApply = (values: any) => {
        console.log("Values applied:", values);
        setRoom(values.roomValue);
        setAdult(values.adultValue);
        setChildren(values.childrenValue);
        setAllowPet(values.isCheckboxChecked)
        setModalOpen(false); // Close the modal when values are applied
      };


  const [checkInDate, setCheckInDate] = useState<string | null>(null);
//   const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
const [isModalOpen, setModalOpen] = useState(false);
 
 
  const closeModal = () => setModalOpen(false);

 

  const handleSearch = () => {
    console.log("Result:", {destination: Destination,checkInDate: startDate, CheckOutDate: checkOutDate,  allowPets: allowPet,Room:room, Guests: adult+ children,adult: adult, children: children });
  };

    const toggleDropdown=()=> {
        setModalOpen(true);
    }
   
  
   
  return (
    <div className="bg-white flex w-7/12 mx-auto my-12 items-center justify-center rounded-xl ">
    <div className="flex justify-center w-full  items-center">
       <Autocomplete setDestination={setDestination} />
     
    <div className="flex bg-white item-center p-2 bg-white gap-1 ">
    {/* <FaCalendarAlt className="date-icon mt-8 item-center" /> */}
    <CiCalendar  className="date-icon mt-5 text-xl item-center"/>
    <div  className="flex bg-white p-2 bg-white flex-col gap-1 ">
    <label className="block text-gray-700 text-sm " htmlFor="checkin">
        Check-in
      </label>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat="MM/dd/yyyy"
      placeholderText="--/--/----"
      className="w-24"
    />
    </div>

          {/* <input
            type="date"
            className=""
            value={checkInDate || ''}
            min={new Date().toISOString().split('T')[0]}
            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]}
            onChange={(e) => setCheckInDate(e.target.value)}
          /> */}
     </div>

        <div className="flex bg-white p-2 flex-col gap-1">

        <label className="block text-gray-700 text-sm  " htmlFor="checkin">
        Check-out
      </label>
      <DatePicker
        selected={checkOutDate}
        onChange={(date) => setCheckOutDate(date as Date)}
        minDate={startDate}
        // maxDate={maxDate}
        maxDate={new Date(startDate?.getTime() + 365 * 24 * 60 * 60 * 1000)} 
        dateFormat="MM/dd/yyyy"
        placeholderText="--/--/--"
        className="w-24"
      />
          {/* <input
            type="date"
           placeholder="--/--/--"
            // className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring focus:ring-blue-200"
            value={checkOutDate || ''}
            min={checkInDate || new Date().toISOString().split('T')[0]}
            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]}
            onChange={(e) => setCheckOutDate(e.target.value)}
          /> */}
        </div>

        <div>
       
      <div className="flex bg-white p-2  px-4 flex-col gap-4 border-x">
      <div className="  bg-white flex flex-col gap-1 items-center justify-between rounded-full" onClick={toggleDropdown}>
        <p className='text-gray-500 text-sm'>Guests and rooms</p>
        <p className="mb-0 text-md text-black">Room:{room}, Guests:{adult + children}</p>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <ModalComponent onApply={handleApply} />
            <button onClick={closeModal} className="absolute top-0 right-0 p-1 px-2">
              X  
            </button>
          </div>
        </div>
      )}
  
    </div>
        </div>
      

        <div className="flex-shrink-0">
          <button
            className="bg-blue-500 text-white p-2 px-8 ml-9 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSearch}
          
          >
            Search
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default BookingComponent;
