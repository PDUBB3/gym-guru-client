import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GYM_QUERY, REVIEWS_QUERY } from "../../graphql/queries";

import GymPageContent from "../../components/GymPage/GymPageContent/GymPageContent";

import "./GymPage.css";
import { Box } from "@material-ui/core";
import Loader from "react-loader-spinner";

const GymPage = () => {
  const { id } = useParams();

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

  if (error || reviewsError) {
    return <div>error</div>;
  }

  if (!data?.gym || !reviewsData?.reviews) {
    return <div>error</div>;
  }

  return <GymPageContent gym={data.gym} reviews={reviewsData.reviews} />;
};

export default GymPage;
