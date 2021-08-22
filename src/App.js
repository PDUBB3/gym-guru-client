import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BuddiesFilterProvider } from "./context/BuddiesFilterContext";

import Navbar from "./components/Navbar/Navbar";

import Routes from "./Routes";

import "./App.css";
import UserProvider from "./context/UserContext";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <BuddiesFilterProvider>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </BuddiesFilterProvider>
      </ApolloProvider>
    </UserProvider>
  );
};

export default App;
