export const randy = (min, max) =>
{
    return Math.floor(Math.random() * max) + min;
};

export const pokeFetch = (resource, options) =>
{
    const baseRoute = 'https://pokeapi.co/api/v2';


     return fetch(`${baseRoute}/${resource}/${options}`)
    .then(function(response)
    {
        return response.json();
    })
    .then((data) => 
    {
        return data;
    })
    .catch((err) =>
    {
        console.log(`Error fetching ${err}`);
    });
}