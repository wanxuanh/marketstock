import React, { useState } from "react";

function Form(props) {
  const [StockTitle, setStockTitle] = useState("");

  const handleSubmit = (e) => {
    console.log("Form - handleSubmit - StockTitle", StockTitle);
    e.preventDefault();
    props.handleSubmit(StockTitle);
    setStockTitle("");
  };

  const handleChange = (e) => {
    console.log("handleChange clicked");
    const title = e.target.value;
    setStockTitle(title);
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="StockTitle"></label>
        <input
          id="StockTitle"
          type="text"
          placeholder="Symbol"
          value={StockTitle}
          onChange={handleChange}
        />
        <input className="Button" type="submit" value="Check Stock Info" />
      </form>
    </>
  );
}

export default Form;
