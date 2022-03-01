import { useEffect, useState } from "react";
import "./CompanyInfo.css";
import Form from "../components/Form";

// const url = `https://api.marketaux.com/v1/news/all?symbols=AAPL&filter_entities=true&language=en&api_token=mGjt5TKsGMalvYt0OMhSQSGhHjVnd9qWpOT9arp8`;

const CompanyInfo = (props) => {
  const [symbol, setSymbol] = useState([]);
  const [stockTitle, setStockTitle] = useState("AAPL");

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    // const title = data.Title;
    setStockTitle(title);
  };

  useEffect(() => {
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${stockTitle}&token=c8ednbiad3iemqqj7hbg`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSymbol(data)); //.then resolving a promise
  }, [stockTitle]);
  // },[props.symbol])

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      <div className="CompanyCard">
        <h2>Company Information</h2>
        {/* <div>{JSON.stringify(symbol)}</div> */}
        <img src={symbol.logo} /> <br />
        Country: {symbol.country} <br />
        Company Name: {symbol.name} <br />
        Shares Outstanding: {symbol.shareOutstanding} <br />
        Market Capitalization: {symbol.marketCapitalization}
        <br />
        Industry: {symbol.finnhubIndustry}
        <br />
        <button className="button">
          <a href={symbol.weburl}>Company Website</a>
        </button>
      </div>
    </>
  );
};

export default CompanyInfo;
