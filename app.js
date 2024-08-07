const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const events = [];

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
        type Event {
          _id: ID!
          description: String!
          price: Float!
          date: String!
        }

        input EventInput{
          title: String!
          description: String!
          price: Float!
          date: String!
        }

        type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        //return ['Romantic Cooking', 'Sailing', 'All-Night Coding'];
        return events;
      },
      createEvent: (args) => {
        const event = {
          _id: Math.random().toString(),
          title: args.title,
          description: args.description,
          price: +args.price,
          date: args.date
        };
        console.log(args);
        events.push(event);
        return event;
      }
    },
    graphiql: true
  })
);

app.listen(3000);