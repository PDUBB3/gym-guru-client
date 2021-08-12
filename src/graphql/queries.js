import { gql } from "@apollo/client";

export const GYMS = gql`
  query Query {
    gyms {
      name
      address
      city
      postCode
      contactNumber
      rating
      exerciseFacilities {
        name
      }
      otherFacilities {
        name
      }
    }
  }
`;
