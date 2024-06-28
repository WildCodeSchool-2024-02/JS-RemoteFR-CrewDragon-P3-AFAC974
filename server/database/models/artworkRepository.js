const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  // The C of CRUD - Create operation
  async create(artwork) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, size_artwork, years, image_url, description, category_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.size_artwork,
        artwork.years,
        artwork.image_url,
        artwork.description,
        artwork.category_id,
        artwork.user_id,
      ]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }
  /* eslint-disable */

  // The U of CRUD - Update operation
  async update({
      id,
      title,
      size,
      years,
      image_url,
      description,
      category_id,
      user_id,
    }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, size_artwork = ?, years = ?, image_url = ?, description = ?, category_id = ?, user_id = ? WHERE id = ?`,
      [
        title,
        size_artwork,
        years,
        image_url,
        description,
        category_id,
        user_id,
        id,
      ]
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = ArtworkRepository;
