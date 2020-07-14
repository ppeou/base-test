import React, {useEffect, useState} from 'react';

const getData = async(setter) => {
  await Promise.all([
    fetch('http://localhost:4002/featured-deals'),
    fetch('http://localhost:4002/products')])
    .then(([a,b]) => Promise.all([a.json(),b.json()])
      .then(([featuredDeals,products]) => {
        console.log({featuredDeals,products});
        const productsMap = products.reduce((p, {id, ...rest}) => {
          p[id] = {id, ...rest};
          return p;
        },{});
        const featuredProducts = featuredDeals.map((id) => productsMap[id]);
        console.log(featuredProducts);
        setter(featuredProducts);
      })
    );
};

const FeaturedDeals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData(setItems);
  },[setItems]);


  return (<section>
    <h1>Featured Deals</h1>
    {items.map((item, i) => <div key={i}>{JSON.stringify(item)}</div>)}
  </section>);
};

export default FeaturedDeals;