const cron = require('node-cron');

// Define your cron job
cron.schedule('*/30 * * * * *', () => {
    // This function runs every 30 seconds
    console.log('Running a task every 30 seconds');
    // Place your code here that you want to run
});
app.get("/cronServer", (req, res) => {
    res.send("cron job running");
});

// Define your cron job
cron.schedule('*/30 * * * * *', () => {
    // This function runs every 30 seconds
    console.log('Running a task every 30 seconds');
    // You can call an endpoint or perform a task here
    // Example: Call the /cronServer endpoint programmatically
    const axios = require('axios');
    axios.get('http://localhost:4000/cronServer')
        .then(response => console.log(response.data))
        .catch(error => console.error('Error calling /cronServer:', error.message));
});