import React from 'react';

const QuotesForm = () => {
  return (
    <div>
      <h1 className="my-5">Quote form</h1>
      <form>
        <select
          name="category"
          id="category"
          className="form-select mb-3"
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
            required
          />
        </div>
        <div className="form-group my-3">
           <textarea
             id="message"
             name="message"
             className="form-control"
             placeholder="Enter message"
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