import { gql } from "@apollo/client";

export const GYM_QUERY = gql`
  query Query($gymId: ID!) {
    gym(id: $gymId) {
      id
      name
      address
      city
      postCode
      contactNumber
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
