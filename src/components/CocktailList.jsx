import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formmattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formmattedDrinks.map((item) => {
        return <CocktailCard key={item.key} {...item} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
