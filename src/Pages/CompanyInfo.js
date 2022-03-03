import { useEffect, useState } from "react";
import "./CompanyInfo.css";
import Form from "../components/Form";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia>
            {" "}
            <img src={symbol.logo} />{" "}
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {symbol.name} <br />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Country: {symbol.country} <br />
              Shares Outstanding: {symbol.shareOutstanding} <br />
              Market Capitalization: {symbol.marketCapitalization}
              <br />
              Industry: {symbol.finnhubIndustry}
              <br />
            </Typography>
          </CardContent>
          <button variant="outlined">
            <a href={symbol.weburl}>Company Website</a>
          </button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CompanyInfo;
