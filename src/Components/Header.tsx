import classes  from "../CSS/styles.module.css";
import React from "react";

interface FilterProp {
  sizeList: string[]; // store all possible size
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // filter products
}


const Header = (prop: FilterProp) => {
  return (
    <div className={classes.headerWrap}>
      <p className={classes.headerName}> Women's tops </p>
      <div className="filterWrap">
        <select onChange={prop.onchange} className={classes.filter}>
          <option value="Filter by size">Filter by size</option>
          {/*put all sizes from sizeList into options*/}
          {prop.sizeList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Header;
