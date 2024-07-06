const cron = require('node-cron');

// Define your cron job
cron.schedule('*/30 * * * * *', () => {
    // This function runs every 30 seconds
    console.log('Running a task every 30 seconds');
    // Place your code here that you want to run
});
