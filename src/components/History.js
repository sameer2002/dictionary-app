
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const history = useSelector((state) => state.history);

  return (
    <div>
      <ul>
        {history.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
