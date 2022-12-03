import React from 'react';
import {Link} from "react-router-dom";

const LeftSide = () => {
  const quotesPosts = [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
  ];

  return (
    <div>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {quotesPosts.map((quote) => (
          <li key={quote.id}>
            <Link to={'/category/' + quote.id}>{quote.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;