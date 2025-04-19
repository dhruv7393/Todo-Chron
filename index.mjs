import axios from "axios";

export const handler = async (event) => {
  var config = {
    method: "get",
    url: "https://main.dgsooy6yeh5ar.amplifyapp.com/api/chron",
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
