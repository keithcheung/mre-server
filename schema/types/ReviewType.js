const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: GraphQLString },
    movie: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    timestamp: { type: GraphQLString }
  })
});

module.exports = ReviewType;
