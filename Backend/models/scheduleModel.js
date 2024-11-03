const pool = require('../config/db');

const Schedule = {
  async getScheduleByBusId(busId) {
    const result = await pool.query('SELECT * FROM schedules WHERE bus_id = $1', [busId]);
    return result.rows;
  },

  async getAvailableSchedules(date) {
    const result = await pool.query(
      'SELECT * FROM schedules WHERE date = $1',
      [date]
    );
    return result.rows;
  },
};

module.exports = Schedule;
