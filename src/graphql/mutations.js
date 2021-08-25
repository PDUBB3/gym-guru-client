import { gql } from "@apollo/client";

export const CREATE_GYM = gql`
  mutation Mutation($createGymInput: CreateGymInput!) {
    createGym(input: $createGymInput) {
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
