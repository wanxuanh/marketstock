import React, { useState, useEffect } from "react";
import Form from "../components/Form";
// import { searchParams, useSearchParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Price(props) {
  const [stockData, setStockData] = useState("AAPL");
  const [stockTitle, setStockTitle] = useState("AAPL");

  // const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);
    // const title = data.Title;
    setStockTitle(title);
    // setSearchParams({ stock: stockTitle });
  };

  useEffect(() => {
    const stockUrl = `https://api.twelvedata.com/time_series?symbol=${stockTitle}&interval=1min&apikey=c1974e7862354751b9df6e7b9b7fe83b`;
    //check for .length = 0 dont run use effect

    fetch(stockUrl)
      .then((res) => res.json())
      .then((data) => setStockData(data)); //.then resolving a promise
  }, [stockTitle]);

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      <div className="cards">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {stockData && stockData.values ? (
              <div>
                <Typography variant="h4" component="div">
                  {stockData.meta.symbol}<br/>
                   ${stockData.values[0].close} <br />{" "}
                </Typography>
                <Typography variant="body2">
                  {" "}
                  Currency: {stockData.meta.currency} <br />
                  DateTime: {stockData.values[0].datetime} <br /> Volume:{" "}
                  {stockData.values[0].volume} <br />
                  Exchange: {stockData.meta.exchange}
                </Typography>
              </div>
            ) : (
              <div></div>
            )}
          </CardContent>
          <CardActions>
            <Button size="small">Calculate</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
export default Price;

//after one card appear, next search will move to the side
// spread operator add items to state
//show name
