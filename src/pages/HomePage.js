import { useQuery } from "@apollo/client";
import { Box, Container } from "@material-ui/core";
import GymCarousel from "../components/GymCarousel";

import Header from "../components/Header/Header";
import HomeBenefitsBlock from "../components/Home-Benefits-Block";
import Loader from "react-loader-spinner";
import { HOME_QUERY } from "../graphql/queries";

const HomePage = (props) => {
  const { loading, error, data } = useQuery(HOME_QUERY, {
    variables: {
      gymsSortBy: "rating",
    },
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Box>
    );
  }

  if (error) {
    return <div>error</div>;
  }

  const { gyms } = data;
  console.log(gyms);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <GymCarousel gyms={gyms} />
      </Container>
      <HomeBenefitsBlock />
    </>
  );
};

export default HomePage;
