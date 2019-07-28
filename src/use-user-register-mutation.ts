import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

export const USER_REGISTER_MUTATION = gql`
  query userRegister($input: UserRegisterInput!) {
    userRegister(input: $input) {
      ... on UserRegisterResultSuccess {
        user {
          id
          login
        }
      }
      ... on Error {
        message
      }
      ... on UserRegisterInvalidInputError {
        loginErrorMessage
        emailErrorMessage
        passwordErrorMessage
      }
    }
  }
`;

export const useUserRegisterMutation = () => {
  return useMutation<>{}
};
