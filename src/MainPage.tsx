import React from "react";
import Product from "./Components/Product";
import Header from "./Components/Header";
import data from "./Components/productList.json";
import axios from "axios";
import classes from "./CSS/styles.module.css";

const MainPage = () => {
  const url = "https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893";
  const [productList, setProductList] = React.useState(data);

  // request api
  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => setProductList(response.data))
      .catch((error) => {
        // if request get error (403 forbidden or sth else)
        console.log(error);
        // load Json file locally
        setProductList(data);
      });
  }, []);

  // Get the union of all possible sizes
  let sizeList: string[] = [];
  data.map((item) => {
    sizeList = Array.from(new Set(sizeList.concat(item.size)));
    return null;
  });

  // function handle select options
  const onchangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // filter products who have chosen size
    const value = event.target.value;
    if (value === "Filter by size") setProductList(data);
    else {
      setProductList(data.filter((item) => item.size.includes(value)));
    }
  };

  return (
    <div className={classes.pageWrapper}>
      <Header sizeList={sizeList} onchange={onchangeHandler} />
      <div className={classes.listWrapper}>
        {productList.map((item) => {
          return (
            <Product
              isSale={item.isSale}
              isExclusive={item.isExclusive}
              price={item.price}
              productName={item.productName}
              productImage={item.productImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
 