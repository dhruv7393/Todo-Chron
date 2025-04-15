import axios from "axios";

export const handler = async (event) => {
  const config1 = {
    method: "get",
    url: "https://main.d3blcxzr0t6m0f.amplifyapp.com/api/chron",
    headers: {},
    timeout: 30000,
  };

  const request1 = axios(config1);
  //  const request2 = axios(config2);

  await axios
    .all([request1])
    .then(
      axios.spread((response1) => {
        //Add response2 after , above
        // Handle successful responses
        console.log("Response from endpoint 1:", response1.data);
        // console.log("Response from endpoint 2:", response2.data);
      })
    )
    .catch((error) => {
      // Handle errors
      console.error("Error during requests:", error);
    });
};
