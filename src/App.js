import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BuddiesFilterProvider } from "./context/BuddiesFilterContext";

import { ThemeProvider } from "@material-ui/core/styles";

import { createTheme } from "@material-ui/core/styles";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index";

import Routes from "./Routes";

import "./App.css";
import UserProvider from "./context/UserContext";

const httpLink = createHttpLink({
  // uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
  uri: "https://whispering-ocean-57878.herokuapp.com/",
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
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <BuddiesFilterProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Navbar />
              <Routes />
            </Router>
          </ThemeProvider>
        </BuddiesFilterProvider>
      </ApolloProvider>
      <Footer />
    </UserProvider>
  );
};

export default App;
