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

export const GYMS_QUERY = gql`
  query Query($gymsSortBy: String) {
    gyms(sortBy: $gymsSortBy) {
      imageURL
      id
      rating
      name
    }
  }
`;
