import React, { useContext, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

function getCountries() {
  return client.query({
    query: gql`
      {
        countries {
          name
          code
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    `,
  });
}

export { getCountries };
