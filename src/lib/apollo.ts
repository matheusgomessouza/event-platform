import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o0vqw0038t01z24h0a7s5f/master',
	cache: new InMemoryCache()
});