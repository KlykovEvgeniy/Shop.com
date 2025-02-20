import axios from "axios";

export const getShoes = async() => {
    const response = await axios.get('https://67b620e607ba6e59083fd3a7.mockapi.io/shoes')
    return response.data
}
