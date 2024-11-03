const pool = require('../config/db');

const BusController = {
  async getAllBuses(req, res) {
    try {
      const result = await pool.query('SELECT * FROM buses');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getBusById(req, res) {
    const { busId } = req.params;

    try {
      const result = await pool.query('SELECT * FROM buses WHERE id = $1', [busId]);
      if (result.rows.length) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Bus not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async trackBus(req, res) {
    const { busId, location } = req.body;

    try {
      await pool.query(
        'UPDATE buses SET longitude = $1, latitude = $2 WHERE id = $3',
        [location.longitude, location.latitude, busId]
      );
      res.json({ message: 'Bus location updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = BusController;
