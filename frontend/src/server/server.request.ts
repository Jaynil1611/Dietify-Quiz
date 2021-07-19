import axios from "axios";
import { MockServer } from "./server.type";

async function callMockServer({ type, data, url }: MockServer) {
  switch (type.toLowerCase()) {
    case "get": {
      try {
        const response = await axios.get(url);
        return response.status === 200
          ? { response, error: false }
          : { response: undefined, error: true };
      } catch (error) {
        return { response: undefined, error: true };
      }
    }
    case "post": {
      try {
        const response = await axios.post(url, data);
        return response.status === 201
          ? { response, error: false }
          : { response: undefined, error: true };
      } catch (error) {
        return { response: undefined, error: true };
      }
    }
    case "put": {
      try {
        const response = await axios.put(url, data);
        return response.status === 200
          ? { response, error: false }
          : { response, error: true };
      } catch (error) {
        return { response: undefined, error: true };
      }
    }
    case "delete": {
      try {
        const response = await axios.delete(url, data);
        return response.status === 200
          ? { response, error: false }
          : { response, error: true };
      } catch (error) {
        return { response: undefined, error: true };
      }
    }
    default:
      return { response: undefined, error: false };
  }
}

export default callMockServer;
