import {
	ApolloClient,
	InMemoryCache,
	makeVar
} from "@apollo/client";

export const guestUserData = makeVar({})
export const loginData = makeVar({})
export const hostData = makeVar({})

export const cache = new InMemoryCache({
	typePolicies: {
	  Query: {
		fields: {
		  guestUserData: {
			read() {
			  return guestUserData();
			}
		  },

		  loginData: {
			read() {
			  return loginData()
			}
		  },

		  hostData: {
			  read() {
				  return hostData()
			  }
		  }
		}
	  }
	}
});

export const client = new ApolloClient({
	uri: 'http://localhost:4000/', cache
});

