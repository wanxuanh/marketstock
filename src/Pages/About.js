import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <p>
        The stock market is a complex system where shares of publicly-traded
        companies are issued, bought and sold. There are many factors that
        determine whether stock prices rise or fall. <br />
        The actual price of a stock is determined by market activity. When
        making the decision to buy or sell, the investor will often compare a
        stock’s actual price to its fair value.
      </p>
      <Divider />
      <h3>
        <i>Quotes from Warren Buffet</i>
        <br />
        “Be Fearful When Others Are Greedy and Greedy When Others Are Fearful”
      </h3>
      <Divider />
      <List className="list">
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/stock-market/"
                target="_blank"
              >
                What is stock market?
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://www.investopedia.com/articles/basics/06/invest1000.asp"
                target="_blank"
              >
                How to start investing?
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://www.fool.com/investing/how-to-invest/stocks/"
                target="_blank"
              >
                Determining your investing approach
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://www.thebalance.com/what-are-the-easiest-ways-to-track-my-investments-357627"
                target="_blank"
              >
                How to track your investment?{" "}
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://www.singsaver.com.sg/blog/best-robo-advisors-singapore"
                target="_blank"
              >
                More about Robo-advisor{" "}
              </a>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
