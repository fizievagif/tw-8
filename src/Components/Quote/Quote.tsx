import React from 'react';
import {QuoteType} from "../../types";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quotes: QuoteType;
}

const Quote: React.FC<Props> = ({quotes}) => {
  const navigate = useNavigate();

  const remove = async () => {
    try {
      await axiosApi.delete('quotes/' + quotes.id + '.json');
    } catch (e) {
      console.error(e);
    } finally {
      navigate('/');
    }
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div>
          <div className="d-flex justify-content-between border-bottom border-dark fs-4 mb-3">
            <p className="card-text"><b>Author:</b> {quotes.author}</p>
            <p className="card-text"><b>Category:</b>{quotes.category}</p>
          </div>
          <p className="card-text mb-3"><b>Message:</b> {quotes.text}</p>
        </div>
        <button className="btn btn-danger" onClick={remove}>Delete</button>
      </div>
    </div>
  );
};

export default Quote;