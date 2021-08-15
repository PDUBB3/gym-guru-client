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

export const USER_QUERY = gql`
  query ($findUserId: ID!) {
    findUser(id: $findUserId) {
      id
      username
      firstName
      lastName
      isGymOwner
      ownedGymId
      attendingGymId
      profileImageUrl
      city
      bio
      goals
      interests
      buddies
    }
  }
`;
