import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://backend-mulmed-production.up.railway.app/api",
  headers: {
    "X-API-Key":
      "d3bbdf8d5772135656749948c545d9c1441225ebc6ea41cbfc0193f5b6439c2909bd8bc0685bc850d92b2211a44d9b01b7efb7e6eda6efeefc1e6eac9cef7fd1fbd33cbda427cf7487b000e593c6de8a3ce2fc01c62fc44f43c465ede7c0b3df5685bfda2166fa181496084bcfa9a5ca9a896a63e9e13c7da1bff234c9884c4f",
  },
});

const getLearn=()=>api.get('/learns?populate=*')

export default{
    getLearn
}