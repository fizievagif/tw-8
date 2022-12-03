import React, {useCallback, useEffect, useState} from 'react';
import {QuoteType} from "../../types";
import {useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Quote from "../Quote/Quote";

const Quotes = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const location = useLocation();

  const axiosPost = useCallback(async () => {
    try {
      const response = await axiosApi.get('/quotes.json');

      if (response.data !== null || undefined) {
        const quotesKeys = Object.keys(response.data).map(key => {
          const postBlog = response.data[key];
          postBlog.id = key;
          return postBlog;
        });
        setQuotes(quotesKeys);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      axiosPost().catch(console.error);
    }
  }, [axiosPost, location])

  let isQuoteOrNot;

  if (quotes.length !== 0) {
    isQuoteOrNot = quotes.map(quote => (
      <Quote
        key={quote.id}
        quotes={quote}
      />
    ));
  } else {
    isQuoteOrNot = <h1 className="text-center mt-5">Unfortunately there are no quotes</h1>
  }

  return (
    <div>
      {isQuoteOrNot}
    </div>
  );
};

export default Quotes;