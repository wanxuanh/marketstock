import { useEffect, useState } from "react";
import './News.css';

const url = `https://api.marketaux.com/v1/news/all?symbols=AAPL&filter_entities=true&language=en&api_token=mGjt5TKsGMalvYt0OMhSQSGhHjVnd9qWpOT9arp8`;


const News = () => {
    const [symbol, setSymbol] = useState([]);

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setSymbol(data)); //.then resolving a promise
  }, [symbol]);
    // },[props.symbol])

    return (
      <div>
        <h2>News</h2>
        <div>{JSON.stringify(symbol)}</div>
      </div>
    );
};

export default News;
