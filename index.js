const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(9000, () => console.log('Listening on port 9000'));