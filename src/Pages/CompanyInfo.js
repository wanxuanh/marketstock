import { useEffect, useState } from "react";
import "./CompanyInfo.css";
import Form from "../components/Form";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// const url = `https://api.marketaux.com/v1/news/all?symbols=AAPL&filter_entities=true&language=en&api_token=mGjt5TKsGMalvYt0OMhSQSGhHjVnd9qWpOT9arp8`;

const CompanyInfo = (props) => {
  const [symbol, setSymbol] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmit = (title) => {
    //console.log("App - handleSubmit - title", title);

    // const title = data.Title;
    setSearchParams({ stock: title });
  };

  useEffect(() => {
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${searchParams.get(
      "stock"
    )}&token=c8ednbiad3iemqqj7hbg`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSymbol(data)); //.then resolving a promise
  }, [location]);
  // },[props.symbol])

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <div className="gallery">
        <Card sx={{ maxWidth: 250 }}>
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
              <a href={symbol.weburl} target="_blank">
                {" "}
                Website
              </a>
            </button>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default CompanyInfo;
