import { useEffect, useState } from "react";
import './News.css';

const url = `https://api.marketaux.com/v1/news/all?symbols=AAPL&filter_entities=true&language=en&api_token=mGjt5TKsGMalvYt0OMhSQSGhHjVnd9qWpOT9arp8`;


const News = () => {
    const [symbol, setSymbol] = useState([]);

    useEffect(() => {
        const fetchCard = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("data", data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCard();
    })

    return (
      <div>
        <h2>News</h2>
        <div>{JSON.stringify()}</div>
      </div>
    );
};

export default News;
