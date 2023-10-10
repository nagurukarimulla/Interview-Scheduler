// MyGQLQuery.js
import { LightningElement, api, wire } from "lwc";
import { gql, graphql, refreshGraphQL } from "lightning/uiGraphQLApi";

// Define the GraphQL query
const ACCOUNTS_QUERY = gql`
  query {
    accounts {
      id
      name
      industry
    }
  }
`;

export default class MyGQLQuery extends LightningElement {
  @wire(graphql, {
    query: ACCOUNTS_QUERY,
  })
  graphqlQueryResult(result) {
    this.graphqlData = result;
  }

  @api
  async refresh() {
    return refreshGraphQL(this.graphqlData);
  }
}
