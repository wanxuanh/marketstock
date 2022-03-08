import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Trending() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a26539f4a2b7c737173b1a0a08caf516"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //console.log(items);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="table">
          Trending
          <br />
          Technology Sector [Top 100 stock]
          <TableContainer align="center" component={Paper}>
            <Table sx={{ maxWidth: 700 }} aria-label="customized table">
              {" "}
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Company Name</StyledTableCell>
                  <StyledTableCell>Symbol</StyledTableCell>
                  <StyledTableCell>Market Cap</StyledTableCell>
                  <StyledTableCell>Industry</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {item.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Link to={`/companyinfo?stock=${item.symbol}`}>
                        {item.companyName}
                      </Link>
                    </TableCell>{" "}
                    <TableCell>
                      <Link to={`/price?stock=${item.symbol}`}>
                        {item.symbol}
                      </Link>
                    </TableCell>{" "}
                    <TableCell>{item.marketCap}</TableCell>{" "}
                    <TableCell>{item.industry}</TableCell>{" "}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
}
export default Trending;
