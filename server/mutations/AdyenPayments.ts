export default `
  mutation (
    $providerId: Int!
    $accessToken: String!
    $browserInfo: GenericScalar!
    $paymentMethod: GenericScalar!
    $transactionReference: String!
  ) {
    adyenPayments(
      providerId: $providerId
      accessToken: $accessToken
      browserInfo: $browserInfo
      paymentMethod: $paymentMethod
      transactionReference: $transactionReference
    ) {
      adyenPayments
    }
  }
`
