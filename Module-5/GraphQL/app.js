import express from "express"
import { graphqlHTTP } from "express-graphql"
import { graphql } from "graphql"
const app = express()
const PORT = 5000

app.use('/graphql', graphqlHTTP({
    graphql: true
})
)

app.listen(PORT, () => console.log('The server started on the port', PORT))
