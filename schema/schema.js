const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const dummyMovies = [
  {
    id: '22B862FFFFFFFFFFFFFFFFFF',
    title: 'Toy Story',
    tagline: '',
    overview:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    img: '/rhIRbceoE9lR4veEXuwCC2wARtG.jpg',
    released: '1995-10-30T00:00:00.000Z',
    runtime: 81,
    rating: 7.7
  },
  {
    id: '22B8844FFFFFFFFFFFFFFFFF',
    title: 'Jumanji',
    tagline: 'Roll the dice and unleash the excitement!',
    overview:
      "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
    img: '/vzmL6fP7aPKNKPRTFnZmiUfciyV.jpg',
    released: '1995-12-15T00:00:00.000Z',
    runtime: 104,
    rating: 6.9
  },
  {
    id: '22B15602FFFFFFFFFFFFFFFF',
    title: 'Grumpier Old Men',
    tagline: 'Still Yelling. Still Fighting. Still Ready for Love.',
    overview:
      "A family wedding reignites the ancient feud between next-door neighbors and fishing buddies John and Max. Meanwhile, a sultry Italian divorcée opens a restaurant at the local bait shop, alarming the locals who worry she'll scare the fish away. But she's less interested in seafood than she is in cooking up a hot time with Max.",
    img: '/6ksm1sjKMFLbO7UY2i6G1ju9SML.jpg',
    released: '1995-12-22T00:00:00.000Z',
    runtime: 101,
    rating: 6.5
  }
];

const reviews = [
  {
    id: '5af3a84d73c2d363e62d1a62',
    user: '11a1ffffffffffffffffffff',
    movie: '22B862FFFFFFFFFFFFFFFFFF',
    rating: 2.5,
    timestamp: '2009-12-14T02:52:24.000Z'
  },
  {
    id: '5af3a84d73c2d363e62d1a63',
    user: '11a1ffffffffffffffffffff',
    movie: '22B8844FFFFFFFFFFFFFFFFF',
    rating: 3,
    timestamp: '2009-12-14T02:52:59.000Z'
  },
  {
    id: '5af3a84d73c2d363e62d1a64',
    user: '11a1ffffffffffffffffffff',
    movie: '22B15602FFFFFFFFFFFFFFFF',
    rating: 3,
    timestamp: '2009-12-14T02:53:02.000Z'
  }
];

const MovieType = require('./types/MovieType');
const ReviewType = require('./types/ReviewType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return dummyMovies;
      }
    },
    reviews: {
      type: GraphQLList(ReviewType),
      resolve(parent, args) {
        return reviews;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
