import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GYM_QUERY, REVIEWS_QUERY } from "../../graphql/queries";
import { useUserContext } from "../../context/UserContext";
import GymPageContent from "../../components/GymPage/GymPageContent/GymPageContent";

import "./GymPage.css";

const GymPage = () => {
  const { id } = useParams();
  const { state } = useUserContext();

  const { loading, error, data } = useQuery(GYM_QUERY, {
    variables: { id },
  });

  const {
    loading: reviewsLoading,
    error: reviewsError,
    data: reviewsData,
  } = useQuery(REVIEWS_QUERY, {
    variables: { reviewsGymId: id },
  });

  if (loading || reviewsLoading) {
    return <div>loading</div>;
  }

  if (error || reviewsError) {
    return <div>error</div>;
  }

  if (!data?.gym || !reviewsData?.reviews) {
    return <div>error</div>;
  }

  return (
    <GymPageContent
      user={state.user}
      gym={data.gym}
      reviews={reviewsData.reviews}
    />
  );
};

export default GymPage;
