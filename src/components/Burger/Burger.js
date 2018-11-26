import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformredIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((pervValue, currValue) => {
      return pervValue.concat(currValue);
    }, []);
  if (transformredIngredients.length === 0) {
    transformredIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformredIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
