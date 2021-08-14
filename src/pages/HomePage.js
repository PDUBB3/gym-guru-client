import { useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import GymCarousel from "../components/GymCarousel";
import GymCard from "../components/GymCard";

import Header from "../components/Header/Header";
import { GYMS_QUERY } from "../graphql/queries";

// import "../index.css";

const HomePage = (props) => {
  const { loading, error, data } = useQuery(GYMS_QUERY, {
    variables: {
      gymsSortBy: "rating",
    },
  });

  if (loading) {
    return <div>loading</div>;
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
    </>
  );
};

export default HomePage;
