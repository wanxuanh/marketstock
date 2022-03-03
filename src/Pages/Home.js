import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h2>Welcome to Stock M App</h2>
      The stock market is a complex system where shares of publicly-traded
      companies are issued, bought and sold. There are many factors that
      determine whether stock prices rise or fall. The actual price of a stock
      is determined by market activity. When making the decision to buy or sell,
      the investor will often compare a stock’s actual price to its fair value.
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a href="https://www.forbes.com/sites/mikepatton/2015/04/28/five-basics-you-should-definitely-know-about-the-stock-market/?sh=4d54b3b27efa">
                What is stock market?
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a href="https://www.investopedia.com/articles/basics/06/invest1000.asp">
                How to start investing?
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a href="https://www.fool.com/investing/how-to-invest/stocks/">
                Determining your investing approach
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a href="https://www.thebalance.com/what-are-the-easiest-ways-to-track-my-investments-357627">
                How to track your investment?{" "}
              </a>
            }
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary={
              <a href="https://www.singsaver.com.sg/blog/best-robo-advisors-singapore">
                More about Robo-advisor{" "}
              </a>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
