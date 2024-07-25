import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Category.css";

function Artworks() {
  const [artworks, setArtworks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    years: "",
    size_artworks: "",
    description: "",
    image_url: "",
    category_id: "", // Assurez-vous d'avoir cette information si nécessaire
    user_id: "", // Assurez-vous d'avoir cette information si nécessaire
  });
  const fetchArtworks = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/artwork`)
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (
      !formData.title ||
      !formData.years ||
      !formData.size_artworks ||
      !formData.description ||
      !formData.image_url
    ) {
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/artwork
      `,
        formData
      )
      .then(() => {
        fetchArtworks();
        setFormData({
          title: "",
          years: "",
          size_artworks: "",
          description: "",
          image_url: "",
          category_id: "",
          user_id: "",
        });
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (artwork) => {
    setFormData(artwork);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/artwork/${id}`)
      .then(() => fetchArtworks())
      .catch((err) => console.error(err));
  };

  return (
    <section className="cat-flex">
      <h1>Artworks</h1>
      <form onSubmit={handleSubmit} className="form-insc">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="years">Year</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="years"
            value={formData.years}
            placeholder="Year"
          />
        </div>
        <div>
          <label htmlFor="size_artworks">Size</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="size_artworks"
            value={formData.size_artworks}
            placeholder="Size"
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="image_url"
            value={formData.image_url}
            placeholder="Image URL"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="insc_flex"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Description"
          />
        </div>
        <div>
          <label htmlFor="category_id">Category ID</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="category_id"
            value={formData.category_id}
            placeholder="Category ID"
          />
        </div>
        <div>
          <label htmlFor="user_id">User ID</label>
          <input
            className="insc_flex"
            onChange={handleChange}
            type="text"
            name="user_id"
            value={formData.user_id}
            placeholder="User ID"
          />
        </div>
        <button type="submit" className="btn-insc">
          Submit
        </button>
      </form>

      <div className="artworks-list">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <p>{artwork.years}</p>
            <p>{artwork.size_artworks}</p>
            <img src={artwork.image_url} alt={artwork.title} />
            <button onClick={() => handleEdit(artwork)} type="submit">
              Edit
            </button>
            <button onClick={() => handleDelete(artwork.id)} type="submit">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artworks;
