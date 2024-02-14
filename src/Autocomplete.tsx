// SearchBar.tsx

import React, { useState } from 'react';
import { places } from './utils/places';
interface Destination {
    id: number;
    name: string;
  }
  interface AutocompleteProps {
    setDestination: React.Dispatch<React.SetStateAction<string>>;
  }
  
  import { FaSearch } from 'react-icons/fa';

  const Autocomplete: React.FC<AutocompleteProps> = ({setDestination }) => {

    const [selectedDestination, setSelectedDestination] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedDestination(value);
        setDestination(value); // This is now inside the user interaction event
      };
  return (
    <div className="flex bg-white w-72 flex-col border-r">
         <div className="relative">
         <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <FaSearch className="text-gray-400" />
        </div>
        
        <div className='flex flex-col w-full mt-4 gap-12'>
        <label className=" absolute left-12 px-1 top-2 text-gray-700 text-sm  " htmlFor="checkin">
        Landmark 
      </label>
        <select
            className=" w-full py-4 px-12 shadow-sm text-black outline-none"
            value={selectedDestination}
            onChange={handleChange}
            // onChange={(e) => setSelectedDestination(e.target.value)}
          >
             
            <option value="" disabled className='text-black font-bold flex flex-col'>Where to?</option>
            {places.map((destination: Destination) => (
              <option key={destination.id} className='text-black ' value={destination.name}>
                {destination.name}
              </option>
            ))}
          </select>
        </div>
        
          
         </div>
        
        </div>

  );
};

export default Autocomplete;
