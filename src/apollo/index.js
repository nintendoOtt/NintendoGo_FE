import {
	ApolloClient,
	InMemoryCache,
	makeVar
} from "@apollo/client";

export const cartItemsVar = makeVar([])
export const loginToken = makeVar()

export const cache = new InMemoryCache({
	typePolicies: {
	  Query: {
		fields: {
		  cartItems: {
			read() {
			  return cartItemsVar();
			}
		  },
		  loginTk: {
			  read() {
				  return loginToken()
			  }
		  }
		}
	  }
	}
});

export const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io', cache
});

