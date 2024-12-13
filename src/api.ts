import axios from "axios";

export const sendRequest = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/doserial/ranking/${endpoint}`
    );
    console.log(`${endpoint} request sent:`, response.data);
  } catch (error) {
    console.error(`Error with ${endpoint} request:`, error);
  }
};
