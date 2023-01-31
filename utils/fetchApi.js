import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '06262bf3a8mshe308b861a9cbb25p110ed6jsnb7be5352dc96'
        }
        ,
    });
    return data; 
}
