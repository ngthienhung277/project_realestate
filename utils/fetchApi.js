import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'e132b4b8f4msh5e82bcb956c40e4p11f683jsnc63b419832a0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}
