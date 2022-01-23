// 쿼리모음 

import {gql} from '@apolol/asdiahjlf'

export const MEMBER = gql`
  subscription orderUpdates($input: OrderUpdatesInput!) {
    orderUpdates(input: $input) {
      ...FullOrderParts
    }
  }
  {}
`;

