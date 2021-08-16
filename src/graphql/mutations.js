import { gql } from "@apollo/client";

export const CREATE_GYM = gql`
  mutation Mutation($createGymInput: CreateGymInput!) {
    createGym(input: $createGymInput) {
      name
      address
      city
      postCode
      contactNumber
      rating
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
