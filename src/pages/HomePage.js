import { useQuery } from "@apollo/client";
import GymCarousel from "../components/GymCarousel";

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
      <GymCarousel />
    </>
  );
};

export default HomePage;
