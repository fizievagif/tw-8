import React, {FormEvent, useState} from 'react';
import {QuoteFormType} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

const QuotesForm = () => {
  const [quote, setQuote] = useState<QuoteFormType>({
    category: '',
    author:  '',
    text: ''
  });

  const {id} = useParams();
  const navigate = useNavigate();

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setQuote(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!id) {
        await axiosApi.post("/quotes.json", quote);
      } else {
        await axiosApi.put("/quotes/" + id + ".json", quote);
      }
    } catch (e) {
      console.error(e);
    } finally {
      navigate('/');
    }
  };

  return (
    <div>
      <h1 className="my-5">Quote form</h1>
      <form onSubmit={onFormSubmit}>
        <select
          name="category"
          id="category"
          className="form-select mb-3"
          value={quote.category}
          required
          onChange={onQuoteChange}
        >
          <option value="" disabled>Select category</option>
          <option value="star-wars">Star Wars</option>
          <option value="famous-people">famous-people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivational">Motivational</option>
        </select>
        <div className="form-group">
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            placeholder="Enter author name"
            onChange={onQuoteChange}
            value={quote.author}
            required
          />
        </div>
        <div className="form-group my-3">
           <textarea
             id="text"
             name="text"
             className="form-control"
             placeholder="Enter quote"
             onChange={onQuoteChange}
             value={quote.text}
             required
           />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >Send post</button>
      </form>
    </div>
  );
};

export default QuotesForm;