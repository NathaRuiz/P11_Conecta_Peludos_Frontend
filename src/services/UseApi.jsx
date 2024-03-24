import axios from "axios";

const apiUrl = "http://localhost:8000/api";

const UseApi = {

 /*------Consumo de rutas api para usuarios no registrados-----*/ 
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

  getUserData: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No hay token de acceso disponible');
      }
      const response = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },


   /*------Consumo de rutas api publicas------*/ 

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

  async getAnimalById(id) { //show para ver cualquier animal con la info basica
    try {
      const response = await axios.get(`${apiUrl}/animal/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener animal por ID:", error);
      return null;
    }
  },

  async getAnimalDataById(id) { //Show para ver cualquier animal con toda la info asociada(shelter y provincia)
    try {
      const response = await axios.get(`${apiUrl}/animal/${id}/data`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener animal por ID:", error);
      return null;
    }
  },

  async getShelterDataById(id) {
    try {
      const response = await axios.get(`${apiUrl}/shelter/${id}/data`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener al shelter por ID:", error);
      return null;
    }
  },


 /*------Consumo de rutas api para el Shelter-----*/ 

  async getShelterAnimals() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/shelter/animals`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async createAnimal(data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${apiUrl}/animal/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getShelterAnimalById(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/shelter/animal/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateAnimal(id, data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${apiUrl}/animal/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteAnimal(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${apiUrl}/animal/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  /*------Consumo de rutas api para el User-----*/ 

  async getFavorites() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async addToFavorites(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${apiUrl}/favorites/add/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async removeFromFavorites(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${apiUrl}/favorites/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async clearFavorites() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${apiUrl}/favorites/clear`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async sendMessageToShelter(id, message) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${apiUrl}/send-message/${id}`, { message }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  /*------Consumo de rutas api para el Admin-----*/ 
  async AdminCreateAnimal(data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${apiUrl}/admin/animal/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async AdminUpdateAnimal(id, data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${apiUrl}/admin/animal/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async AdminDeleteAnimal(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${apiUrl}/admin/animal/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUsers() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUserById(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async createUser(data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${apiUrl}/admin/user/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id, data) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${apiUrl}/admin/user/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${apiUrl}/admin/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

};

export default UseApi;
