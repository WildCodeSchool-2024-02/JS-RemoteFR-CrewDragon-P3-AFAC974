// UserComponent.js
import axios from "axios";
import { useState, useEffect } from "react";



function UserComponent() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data); // Assurez-vous que response.data est un tableau valide
    } catch (error) {
      setUsers([]); // Réinitialisez users en cas d'erreur pour éviter les problèmes de type
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      fetchUsers(); // Re-fetch users after creation
      setNewUser({
        firstname: "",
        lastname: "",
        email: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstname} {user.lastname} - {user.email}
          </li>
        ))}
      </ul>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={newUser.firstname}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={newUser.lastname}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default UserComponent;
