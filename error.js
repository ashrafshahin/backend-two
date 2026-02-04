const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send('server create done')
})

const server = app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)

})

// Handle server errors, e.g., if the port is already in use
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`port ${port} is already in use`);
        // Exit the process or try another port
        process.exit(1)
        
    } else {
        console.error(error, 'server running error, Server Not running...');
        
    }
})



