const { ApolloServer, gql } = require('apollo-server');

const schema = gql(`
  type Query {
    currentUser: User
    secondUser: User
    thirdUser: User
    postsByUser(userId: String!): [Post]
    postsBySecondUser(userId: String!): [Post]
    postsByThirdUser(userId: String!): [Post]
  }

  type Mutation {
    addPost(content: String): Post 
  }

  type User {
    id: ID!
    username: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    userId: ID!
  }
`);

var data = {};

data.posts = [
  { 
    id: 'xyz-1',
    content: "First Post - Hello world",
    userId: 'abc-1',
  },
  {
    id: 'xyz-2',
    content: "Second Post - Hello again",
    userId: 'abc-2',
  },
  {
    id: 'xyz-3',
    content: "Third Post - Hello again",
    userId: 'abc-3',
  }
];

data.users = [
  {
    id: 'abc-1', 
    username: "ak ridhauddin pg jamaluddin",
  },
  {
    id: 'abc-2', 
    username: "ampuan zuhairah ampuan hj zainal",
  },
  {
    id: 'abc-3', 
    username: "hilmi sabli",
  }
];

const currentUserId = 'abc-1';
const secondUserId = 'abc-2';
const thirdUserId = 'abc-3';

var resolvers = {
  Mutation: {
    addPost: async (_, { content }, { currentUserId, data }) => {
      let post = { 
        id: 'xyz-' + (data.posts.length + 1), 
        content: content, 
        userId: currentUserId,
      };
      data.posts.push(post);
      return post;
    }
  },
  Query: {
    currentUser: (parent, args, context) => {
      let user = context.data.users.find( u => u.id === context.currentUserId );
      return user;
    },
    secondUser: (parent, args, context) => {
      let user = context.data.users.find( u => u.id === context.secondUserId );
      return user;
    },
    thirdUser: (parent, args, context) => {
      let user = context.data.users.find( u => u.id === context.thirdUserId );
      return user;
    },
    postsByUser: (parent, args, context) => {
      let posts = context.data.posts.filter( p => p.userId === args.userId ); 
      return posts
    },
    postsBySecondUser: (parent, args, context) => {
      let secondposts = context.data.posts.filter( p => p.userId === args.userId ); 
      return secondposts
    },
    postsByThirdUser: (parent, args, context) => {
      let thirdposts = context.data.posts.filter( p => p.userId === args.userId ); 
      return thirdposts
    },
  },
  User: {
    posts: (parent, args, context) => {
      let posts = context.data.posts.filter( p => p.userId === parent.id );
      return posts;
    }
  }
};

const server = new ApolloServer({ 
  typeDefs: schema, 
  resolvers: resolvers,
  context: { 
    currentUserId,
    secondUserId,
    thirdUserId,
    data
  }
});

server.listen(4001).then(({ url }) => {
  console.log('API server running at localhost:4001');
});
