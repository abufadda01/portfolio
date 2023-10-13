const express = require("express")
const cors = require("cors")
const {generateRandomMathal , generateRandomTenAMathal} = require("./amthalHandler")


const app = express()

// custom middleware to allow access to our server from any place
// app.use((req , res , next) => {
//     res.header("Access-Control-Allow-Origin" , "*")
//     next()
// })

// equal to

app.use(cors())


app.get("/amthal/random" , (req , res) => {
    res.json(generateRandomMathal())
})

app.get("/amthal/randomTen" , (req , res) => {
    res.json(generateRandomTenAMathal())
})




// custom error handler middleware
app.use((err , req , res , next) => {

    const errorObject = {
        errMessage : err.message || "Somthing went wrong ! " ,
        errStatus : err.status || 500
    }

    return res.status(errorObject.errStatus).json({
        failure : true ,
        message : errorObject.errMessage ,
        status : errorObject.errStatus ,
        stack : err.stack
    })

})


const PORT = 5000

app.listen(PORT , () => console.log(`Amthal server started on port ${PORT}`))