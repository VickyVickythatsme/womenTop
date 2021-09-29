import classes  from "../CSS/styles.module.css";

export interface ProductProp {
  isSale: boolean;
  isExclusive: boolean;
  price: string;
  productImage: string;
  productName: string;
}

const Product = (prop: ProductProp) => {

  return (
    <div className={classes.wrapper}>
      <img
        alt={prop.productName}
        style={{width:"90%"}}
        src={require(`../Products/${prop.productImage}`).default}
      />

      <div className={classes.tagWrapper}>
        <div className={classes.tag} id={classes.sale} style={{display: prop.isSale===false?"none":"block"}}>
          Sale
        </div>
        <div className={classes.tag} id={classes.exclusive} style={{visibility: prop.isExclusive===false?"hidden":"initial"}}>
          Exclusive
        </div>
      </div>

      <div className={classes.detailWrapper}>
        <p className={classes.name}> {prop.productName}</p>
        <p className={classes.price}> {prop.price}</p>
      </div>
    </div>
  );
};
export default Product;
