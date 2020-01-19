import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});

  const fetchItem = useCallback(async () => {
    const itemData = await (
      await fetch(`https://api.mercadolibre.com/items/${id}`)
    ).json();
    setItem(itemData);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return <div>{loading ? <Spinner /> : <div>{item.title}</div>}</div>;
};

export default ItemDetails;
