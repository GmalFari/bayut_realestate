import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '6cb10cae22mshe83ac21e4eb1de3p1897c1jsn0b3893d5488f'
        }
        ,
    });
    return data; 
}
