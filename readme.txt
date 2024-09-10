How I made this project

Tutorial at: https://www.youtube.com/watch?v=yvEEeKMuxn0&t=7s

Step 1: Type "npm init"
Step 2: Type "npm install --save express body-parser"
Step 3: Type "npm install --save-dev nodemon"
Step 4: Create an "app.js" file




http://localhost:3000/graphql

Mutation example
mutation {
  createEvent(eventInput: {title: "A Test", description: "Does this work?", price: 9.99, date: "2011-10-05T14:48:00.000Z"}){
  title
  description
}
}

mutation {
  createUser(userInput:{email: "test@test.com", password: "tester"}){
    email
    password
  }
}


query{
  events{
    _id
    date
  }
}