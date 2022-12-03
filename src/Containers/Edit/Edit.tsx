import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {QuoteType} from "../../types";
import axiosApi from "../../axiosApi";
import QuotesForm from "../../Components/QuotesForm/QuotesForm";

const Edit = () => {
  const {id} = useParams();
  const [edit, setEdit] = useState<QuoteType | null>(null);

  const axiosPost = useCallback(async () => {
    try {
      const response = await axiosApi.get<QuoteType>('/quotes/' + id + '.json');
      setEdit(response.data);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axiosPost().catch(console.error);
    }
  }, [id, axiosPost])

  return (
    <div>
      {edit && (
        <QuotesForm currentPost={edit}/>
      )}
    </div>
  );
};

export default Edit;