import graphql from "graphql"
import _ from 'lodash'
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql


const users = [
    {
        id: '1',
        firstName: "Venkat",
        age: 30,
    },
    {
        id: '2',
        firstName: "Amarnath",
        age: 20,
    },
    {
        id: '3',
        firstName: "Piyush",
        age: 35,
    },
    {
        id: '4',
        firstName: "Gokul",
        age: 40,
    },
    {
        id: '5',
        firstName: "Hasansab",
        age: 20,
    },
]

//create user object 

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

//define root query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get()
            }
        }
    }
})