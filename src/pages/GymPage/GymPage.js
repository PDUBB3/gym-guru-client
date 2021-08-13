import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import GymPageContent from "../../components/GymPage/GymPageContent/GymPageContent";

import { GYM_QUERY } from "../../graphql/queries";

import "./GymPage.css";

const GymPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GYM_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data?.gym) {
    return <div>error</div>;
  }

  const gymData = data.gym;

  return <GymPageContent gym={gymData} />;
};

export default GymPage;
