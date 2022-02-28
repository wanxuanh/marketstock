export default function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Welcome to Stock M App</h2>
      The stock market is a complex system where shares of publicly-traded
      companies are issued, bought and sold. There are many factors that
      determine whether stock prices rise or fall. The actual price of a stock
      is determined by market activity. When making the decision to buy or sell,
      the investor will often compare a stock’s actual price to its fair value.
      <ul>
        <li>
          <a href="https://www.forbes.com/sites/mikepatton/2015/04/28/five-basics-you-should-definitely-know-about-the-stock-market/?sh=4d54b3b27efa">
            What is stock market?
          </a>
        </li>
        <li>
          <a href="https://www.investopedia.com/articles/basics/06/invest1000.asp">
            How to start investing?
          </a>
        </li>
        <li>
          <a href="https://www.fool.com/investing/how-to-invest/stocks/">
            Determining your investing approach
          </a>
        </li>
        <li>
          <a href="https://www.thebalance.com/what-are-the-easiest-ways-to-track-my-investments-357627">
            How to track your investment?
          </a>
        </li>
        <li>
          <a href="https://www.singsaver.com.sg/blog/best-robo-advisors-singapore">
            More about Robo-advisor
          </a>
        </li>
      </ul>
    </main>
  );
}

//how to show top 10 [max 8 api call per minute]
//array fixed 10 symbol
//show charts instead of top10?
