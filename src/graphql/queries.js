import { gql } from "@apollo/client";

export const GYM_QUERY = gql`
  query Query($id: ID!) {
    gym(id: $id) {
      id
      name
      address
      city
      postCode
      contactNumber
      imageURL
      openingTimes {
        dayName
        startTime
        endTime
      }
      rating
      exerciseFacilities {
        name
        id
      }
      otherFacilities {
        id
        name
      }
    }
  }
`;
