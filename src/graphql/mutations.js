import { gql } from "@apollo/client";

export const CREATE_GYM = gql`
  mutation Mutation($createGymInput: CreateGymInput!) {
    createGym(input: $createGymInput) {
      name
      address
      city
      postCode
      contactNumber
      imageURL
      openingTimes {
        dayIndex
        dayName
        dayShort
        startTime
        endTime
      }
      exerciseFacilities {
        id
        name
      }
      otherFacilities {
        id
        name
      }
      id
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput) {
    login(input: $loginInput) {
      token
      user {
        username
        email
        id
        isGymOwner
        ownedGymId
        attendingGymId
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($signUpInput: SignUpInput) {
    signUp(input: $signUpInput) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const BUDDYREQUESTS = gql`
  mutation Mutation($buddyRequestsInput: BuddyInput) {
    buddyRequests(input: $buddyRequestsInput) {
      requesterId {
        username
      }
      recipientId {
        username
      }
      status
    }
  }
`;

export const ACCEPTBUDDYREQUEST = gql`
  mutation Mutation($acceptBuddyRequestInput: BuddyInput) {
    acceptBuddyRequest(input: $acceptBuddyRequestInput) {
      requesterId {
        username
      }
      recipientId {
        username
      }
      status
    }
  }
`;

export const REJECTBUDDYREQUEST = gql`
  mutation Mutation($rejectBuddyRequestInput: BuddyInput) {
    rejectBuddyRequest(input: $rejectBuddyRequestInput) {
      requesterId {
        username
      }
      recipientId {
        username
      }
      status
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReviewMutation($addReviewInput: ReviewInput) {
    addReview(input: $addReviewInput) {
      categories {
        category
        rating
      }
      comment
    }
  }
`;

export const UPDATE_GYM = gql`
  mutation Mutation($updateGymInput: updateGymInput) {
    updateGym(input: $updateGymInput) {
      id
      name
      imageURL
      address
      city
      postCode
      contactNumber
      openingTimes {
        endTime
        dayName
        startTime
      }
      rating
      exerciseFacilities {
        id
        name
      }
      otherFacilities {
        id
        name
      }
    }
  }
`;

export const UPDATE_GYM_RATING = gql`
  mutation UpdateGymRatingMutation($updateGymRatingInput: GymRating) {
    updateGymRating(input: $updateGymRatingInput) {
      name
      id
      rating
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUserMutation($updateUserInput: updateUserInput) {
    updateUser(input: $updateUserInput) {
      username
      firstName
      lastName
      isGymOwner
      attendingGymId {
        name
      }
      profileImageUrl
      city
      bio
      goals
      interests
      facebookUrl
      twitterUrl
      instagramUrl
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
     }
   }
 `
export const DELETE_GYM = gql`
  mutation Mutation($deleteGymId: ID!) {
    deleteGym(id: $deleteGymId) {
      id}
      }`;

export const UPDATE_ATTENDING_GYM = gql`
  mutation Mutation($updateAttendingGymInput: updateAttendingGymInput) {
    updateAttendingGym(input: $updateAttendingGymInput) {
      username
      firstName
      lastName
      attendingGymId {
        name
      }
    }
  }
`;
