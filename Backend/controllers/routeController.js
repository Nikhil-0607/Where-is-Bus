const pool = require('../config/db');

const RouteController = {
  async getAllRoutes(req, res) {
    try {
      const result = await pool.query('SELECT * FROM routes');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getRouteById(req, res) {
    const { routeId } = req.params;

    try {
      const result = await pool.query('SELECT * FROM routes WHERE id = $1', [routeId]);
      if (result.rows.length) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Route not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = RouteController;
