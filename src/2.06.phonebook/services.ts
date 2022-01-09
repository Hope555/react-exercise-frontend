import axios from "axios";
import { PersonProps } from "./type";

const baseUrl = '/api/persons';

export const personService = {
  getAll: () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
  },

  create: (newPerson: PersonProps) => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
  },

  delete: (id: number) => {
    const request = axios.delete(baseUrl + '/' + id);
    return request.then(response => response.data);
  },

  update: (id: number, newPerson: PersonProps) => {
    const request = axios.put(baseUrl + '/' + id, newPerson);
    return request.then(response => response.data);
  }
};
