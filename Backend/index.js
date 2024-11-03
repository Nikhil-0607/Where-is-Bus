// // Get all buses
// app.get('/buses', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM buses');
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all routes
// app.get('/routes', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM routes');
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get schedule for a specific bus
// app.get('/schedule/:busId', async (req, res) => {
//   const { busId } = req.params;

//   try {
//     const result = await pool.query('SELECT * FROM schedules WHERE bus_id = $1', [busId]);
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Track a specific bus's location
// app.post('/track-bus', async (req, res) => {
//   const { busId, location } = req.body;

//   try {
//     await pool.query('UPDATE buses SET location = ST_SetSRID(ST_MakePoint($1, $2), 4326) WHERE id = $3', [
//       location.longitude,
//       location.latitude,
//       busId,
//     ]);

//     res.json({ message: 'Bus location updated successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// const app = require('./config/server');
// const busRoutes = require('./routes/busRoutes');
// const scheduleRoutes = require('./routes/scheduleRoutes');

// app.use('/api/buses', busRoutes);
// app.use('/api/schedule', scheduleRoutes);



const app = require('./config/server');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
