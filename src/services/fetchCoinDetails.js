import axiosInstance from "../helpers/axiosInstance"

async function fetchCoinDetails(id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}

export default fetchCoinDetails;