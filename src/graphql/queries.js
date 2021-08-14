import { gql } from "@apollo/client";

<<<<<<< HEAD
export const GYMS = gql`
  query Query {
    gyms {
=======
export const GYM_QUERY = gql`
  query Query($id: ID!) {
    gym(id: $id) {
      id
>>>>>>> master
      name
      address
      city
      postCode
      contactNumber
<<<<<<< HEAD
      rating
      imageURL
      exerciseFacilities {
        name
      }
      otherFacilities {
=======
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
>>>>>>> master
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
