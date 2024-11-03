const pool = require('../config/db');

const ScheduleController = {
  async getScheduleByBusId(req, res) {
    const { busId } = req.params;

    try {
      const result = await pool.query('SELECT * FROM schedules WHERE bus_id = $1', [busId]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAvailableSchedules(req, res) {
    const { date } = req.params;

    try {
      const result = await pool.query('SELECT * FROM schedules WHERE date = $1', [date]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ScheduleController;
