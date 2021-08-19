import { gql } from "@apollo/client";

export const GYMS_QUERY = gql`
  query Query {
    gyms {
      id
      name
      imageURL
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
  query Query($username: String) {
    findUser(username: $username) {
      id
      username
      lastName
      firstName
      isGymOwner
      ownedGymId
      attendingGymId {
        name
      }
      profileImageUrl
      city
      bio
      goals
      interests
      buddies
    }
  }
`;

export const USERS_QUERY = gql`
  query Query {
    users {
      username
      lastName
      firstName
      isGymOwner
      ownedGymId
      attendingGymId {
        name
      }
      profileImageUrl
      city
      bio
      goals
      interests
      buddies
    }
  }
`;

export const HOME_QUERY = gql`
  query Query($gymsSortBy: String) {
    gyms(sortBy: $gymsSortBy) {
      imageURL
      id
      rating
      name
    }
  }
`;
