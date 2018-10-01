const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    // returns this object
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    tagline: { type: GraphQLString },
    overview: { type: GraphQLString },
    img: { type: GraphQLString },
    released: { type: GraphQLString },
    runtime: { type: GraphQLInt },
    rating: { type: GraphQLFloat }
  })
});

module.exports = MovieType;
