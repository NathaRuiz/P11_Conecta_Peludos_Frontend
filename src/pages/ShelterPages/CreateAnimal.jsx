const CreateAnimal = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      breed: "",
      gender: "",
      size: "",
      age: "",
      approximate_age: "",
      status: "",
      my_story: "",
      description: "",
      delivery_options: "",
      image_url: null,
      category_id: "",
    });
  
    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedCategories = await UseApi.getCategories();
          setCategories(fetchedCategories);
        } catch (error) {
          console.error("Error al obtener categorías:", error);
          setErrorMessage(
            "Error al obtener categorías. Por favor, inténtalo de nuevo más tarde."
          );
        }
      };
  
      fetchData();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleImageChange = (e) => {
      setFormData({ ...formData, image_url: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      try {
        await UseApi.createAnimal(formDataToSend);
        navigate("/shelter/misAnimales");
      } catch (error) {
        console.error("Error al crear animal:", error);
        setErrorMessage(
          "Error al crear animal. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };
  
    return (
      <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2">
        <h2>Crear Nuevo Animal</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Categoria:
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded bg-white"
                >
                  <option value="">seleccione una</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Raza:
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Género:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>
                Tamaño:
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                  <option value="Gigante">Gigante</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Edad:
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Senior">Senior</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Edad Aproximada:
                <input
                  type="text"
                  name="approximate_age"
                  value={formData.approximate_age}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Estado:
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Urgente">Urgente</option>
                  <option value="Disponible">Disponible</option>
                  <option value="En Acogida">En Acogida</option>
                  <option value="Reservado">Reservado</option>
                  <option value="Adoptado">Adoptado</option>
                </select>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="my_story"
            >
              Mi Historia:
            </label>
            <textarea
              id="my_story"
              name="my_story"
              value={formData.my_story}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <label>
          Me Entregan:
          <input
            type="text"
            name="delivery_options"
            value={formData.delivery_options}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Imagen:
          <input
            type="file"
            accept="image/*"
            name="image_url"
            onChange={handleImageChange}
            required
          />
        </label>
        <button type="submit">Crear Animal</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
