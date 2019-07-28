import * as React from "react";
import { ApolloConsumer } from "react-apollo";
import { MockedProvider, MockedProviderProps } from "react-apollo/test-utils";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

export const Provider: React.FC<MockedProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <MockedProvider {...props}>
      <ApolloConsumer>
        {client => (
          <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
        )}
      </ApolloConsumer>
    </MockedProvider>
  );
};
