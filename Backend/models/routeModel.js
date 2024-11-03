const pool = require('../config/db');

const Route = {
  async getAllRoutes() {
    const result = await pool.query('SELECT * FROM routes');
    return result.rows;
  },

  async getRouteById(routeId) {
    const result = await pool.query('SELECT * FROM routes WHERE id = $1', [routeId]);
    return result.rows[0];
  },
};

module.exports = Route;
