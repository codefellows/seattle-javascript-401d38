import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const graphqlEndpoint = 'https://api.github.com/graphql'; // this is authenticated
const httpLink = new HttpLink({ uri: graphqlEndpoint });

// typically you would Oauth to get an access token from Github.
// alternateively we can use a "personal access Token"

// const client = new ApolloClient({ uri: graphqlEndpoint });

const authLink = new ApolloLink((operation, forward) => {

  const token = 'put-access-tokon-here';

  operation.setContext({
    headers: {
      authorization: `bearer ${token}`
    }
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const query = gql`
  query getRepos {
    viewer {
      repositories(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export default function App() {

  const [pokemon, setPokemon] = useState([]);


  // our fetching of Pokemon
  const fetchPokemon = async () => {

    // this is built in, thanks to expo.
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json(); // we hace no say in what is retuurned here
    console.log(data);
    setPokemon(data.results);
  }

  return (
    <ApolloProvider client={client}>
      <Query query={query}>
        {(props) => {
          console.log(props);
          return (
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Button title="Click for Pokemon" onPress={() => fetchPokemon()} />
              <FlatList
                data={pokemon}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <Button title={item.name} />}
              />
            </View>
          )
        }}
      </Query>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
