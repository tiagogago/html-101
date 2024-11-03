const paises = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/portugal');
    console.log(response);
}

const listaPaises = paises();

console.log(listaPaises);