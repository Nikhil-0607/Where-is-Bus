const pool = require('../config/db');

const Bus = {
  async getAllBuses() {
    const result = await pool.query('SELECT * FROM buses');
    return result.rows;
  },

  async updateBusLocation(busId, location) {
    const { longitude, latitude } = location;
    await pool.query(
      'UPDATE buses SET longitude = $1, latitude = $2 WHERE id = $3',
      [longitude, latitude, busId]
    );
  },

  async getBusById(busId) {
    const result = await pool.query('SELECT * FROM buses WHERE id = $1', [busId]);
    return result.rows[0];
  },
};

module.exports = Bus;
