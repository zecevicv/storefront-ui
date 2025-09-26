export default `
  mutation register(
    $companyName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $location: String!
    $password: String!
    $phoneNumber: String!
  ) {
    register(
      companyName: $companyName
      firstName: $firstName
      lastName: $lastName
      email: $email
      location: $location
      password: $password
      phoneNumber: $phoneNumber
    ) {
      partner {
        id
        name
        street
        street2
        city
        state {
          id
          name
        }
        country {
          id
          name
        }
        email
        phone
      }
    }
  }
`
