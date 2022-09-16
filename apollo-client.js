import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApooloClient({
    url: "https://countries.trevorblades.com",
    header: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    }
    cache: new InMemoryCache(),
});

export default client;