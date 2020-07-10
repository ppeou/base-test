import React, {useEffect, useState} from 'react';
import {actions} from './store';
import { useSelector } from 'react-redux';


const FeaturedDeals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
   fetch('http://localhost:3001/featured-deals')
     .then(r => r.json().then(r1 => setItems(r1)));
  },[]);
  return (<section>
    <h1>Featured Deals</h1>
    {items.map((item, i) => <div key={i}>{JSON.stringify(item)}</div>)}
  </section>);
};

export default FeaturedDeals;