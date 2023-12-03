
import React from 'react';
import { useSelector } from 'react-redux';

const WordDetails = () => {
  const wordDetails = useSelector((state) => state.wordDetails);

  if (!wordDetails) {
    return <div>Loading...</div>; 
  }

  const { word, meanings, phonetics } = wordDetails[0];
  const filteredMeanings = meanings.filter(
    (meaning) => meaning.partOfSpeech === 'noun' || meaning.partOfSpeech === 'verb'
  );
  return (
    <div>
      <h3>{word}</h3>
      <div>
        <h4>Phonetics:</h4>
        {phonetics.length > 0 && (
        <div>
          
          {phonetics.map((phonetic, index) => (
            <>
            <p key={index}>{phonetic.text}</p>
            <audio key={index} controls>
              <source src={phonetic.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            </>
          ))}
        </div>
      )}
      </div>
      <div>
        <h4>Meanings:</h4>
        {filteredMeanings.length > 0 ? (
          filteredMeanings.map((meaning, index) => (
            <div key={index}>
              <p>{meaning.partOfSpeech}</p>
              <ul>
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <strong>Definition:</strong> {definition.definition}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No meanings found for nouns and verbs.</p>
        )}
      </div>
      
    </div>
  );
};

export default WordDetails;