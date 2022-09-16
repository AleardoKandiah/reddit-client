import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApooloClient({
    url: "https://countries.trevorblades.com",
    header: {
        Authorization: `Apikey`
    }
    cache: new InMemoryCache(),
});

export default client;