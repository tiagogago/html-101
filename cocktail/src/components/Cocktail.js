import { useQuery } from "react-query";

const Cocktail = (props) => {
  const {
    data: cocktails,
    error,
    isLoading,
  } = useQuery(
    ["cocktails", props.letter],
    () =>
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
          props.letter
      ).then((res) => res.json()),
    {
      // You can set additional options here, such as caching, retries, etc.
    }
  );

  if (error) {
    return (
      <tr>
        <td>Error: {error.message}</td>
      </tr>
    );
  } else if (isLoading) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  } else {
    return (
      <>
        {cocktails.drinks.map((cocktail, index) => (
          <tr key={index}>
            <th scope="row">{cocktail.strDrink}</th>
            <td>{cocktail.strCategory}</td>
            <td>{cocktail.strInstructions}</td>
            <td>
              <img
                src={cocktail.strDrinkThumb}
                style={{ maxWidth: "100px" }}
                alt={cocktail.strDrink}
              />
            </td>
          </tr>
        ))}
      </>
    );
  }
};

export default Cocktail;
