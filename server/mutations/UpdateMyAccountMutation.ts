import { partnerFragment } from '../fragments'

export default `
  mutation ($myaccount: UpdateMyAccountParams) {
    updateMyAccount(myaccount: $myaccount) {
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
`
