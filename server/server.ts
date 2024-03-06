const express = require('express')
const app = express();
require('dotenv').config();


const PORT=process.env.PORT;
console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});