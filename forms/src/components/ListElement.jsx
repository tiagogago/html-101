import React from "react";
import { useState, useEffect } from "react";

const ListElement = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countriesOri, setCountriesOri] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCountries(data);
          setCountriesOri(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    
    if (props.search && props.search.length>0) {
      console.log(props.search);
      console.log('country', countries.length);
      setCountries(countriesOri.filter(country => country.name.common.toLowerCase().includes(props.search.toLowerCase())));
  } else {
      setCountries(countriesOri);
  }
},[props.search])

  if (error) {
    return (
      <tr>
        <td>Error: {error.message}</td>
      </tr>
    );
  } else if (!isLoaded) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  } else {
    return (
      <>
        {countries.map((country, index) => {
          return (
            <tr key={index}>
              <th scope="row">{country.name.common}</th>
              <td>{country.region}</td>
              <td>{country.subregion}</td>
              <td>
                <img
                  src={country.flags.png}
                  style={{ maxWidth: "60px" }}
                  alt={country.name.common}
                  title={country.name.common}
                />
              </td>
            </tr>
          );
        })}
      </>
    );
  }
};

export default ListElement;
