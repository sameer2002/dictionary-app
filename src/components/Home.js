// Home.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchWord } from '../redux/actions'; // Update the path based on your file structure
import WordDetails from './WordDetails';

const Home = () => {
  const dispatch = useDispatch();
  const wordDetails = useSelector((state) => state.wordDetails);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      dispatch(searchWord(searchTerm));
    }
  };

  return (
    <div >
      <div className='home'>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {wordDetails && <WordDetails />}
    </div>
  );
};

export default Home;
