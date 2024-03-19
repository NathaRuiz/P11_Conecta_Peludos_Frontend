import axios from "axios";

const apiUrl = "http://localhost:8000/api";

const UseApi = {
  async login(credentials) {
    try {
      const response = await axios.post(`${apiUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await axios.post(`${apiUrl}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async logout(token) {
    try {
      const response = await axios.post(`${apiUrl}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  async getShelters() {
    try {
      const response = await axios.get(`${apiUrl}/shelters`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener Protectoras y Refugios:", error);
      return [];
    }
  },

  async getCategories() {
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener Categorias:", error);
      return [];
    }
  },

  async getProvinces() {
    try {
      const response = await axios.get(`${apiUrl}/provinces`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener Provincias:", error);
      return [];
    }
  },

  async getAnimals() {
    try {
      const response = await axios.get(`${apiUrl}/animals`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener Animales:", error);
      return [];
    }
  },

  async getAnimalById(id) {
    try {
      const response = await axios.get(`${apiUrl}/animal/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener animal por ID:", error);
      return null;
    }
  },
};

export default UseApi;
