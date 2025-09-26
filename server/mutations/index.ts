import AddAddress from './AddAddress'
import AdyenPaymentDetails from './AdyenPaymentDetails'
import AdyenPaymentMethods from './AdyenPaymentMethods'
import AdyenPayments from './AdyenPayments'
import AdyenProviderInfo from './AdyenProviderInfo'
import AdyenTransaction from './AdyenTransaction'
import ApplyGiftCardMutation from './ApplyGiftCardMutation'
import ApplyCouponMutation from './ApplyCouponMutation'
import CartAddItem from './CartAddItem'
import CartRemoveItem from './CartRemoveItem'
import CartUpdateQuantity from './CartUpdateQuantity'
import ChangePasswordMutation from './ChangePasswordMutation'
import CreateNewAccountMutation from './CreateNewAccountMutation'
import CreateUpdatePartner from './CreateUpdatePartner'
import LoginMutation from './LoginMutation'
import LogoutMutation from './LogoutMutation'
import RegisterUserMutation from './RegisterUserMutation'
import SendResetPasswordMutation from './SendResetPasswordMutation'
import MakeGiftCardPaymentMutation from './MakeGiftCardPaymentMutation'
import UpdateAddress from './UpdateAddress'
import UpdateMyAccountMutation from './UpdateMyAccountMutation'
import UpdatePasswordMutation from './UpdatePasswordMutation'
import WishlistAddItem from './WishlistAddItem'
import WishlistRemoveItem from './WishlistRemoveItem'
import SelectCurrentAddress from './SelectCurrentAddress'
import DeleteAddress from './DeleteAddress'
import NewsletterSubscribeMutation from './NewsletterSubscribeMutation'
import ShippingMethod from './ShippingMethod'

enum MutationName {
  LoginMutation = 'LoginMutation',
  LogoutMutation = 'LogoutMutation',
  CreateNewAccountMutation = 'CreateNewAccountMutation',
  SendResetPasswordMutation = 'SendResetPasswordMutation',
  UpdatePasswordMutation = 'UpdatePasswordMutation',
  ChangePasswordMutation = 'ChangePasswordMutation',
  CartAddItem = 'CartAddItem',
  CartUpdateQuantity = 'CartUpdateQuantity',
  CartRemoveItem = 'CartRemoveItem',
  RegisterUserMutation = 'RegisterUserMutation',
  UpdateMyAccountMutation = 'UpdateMyAccountMutation',
  WishlistAddItem = 'WishlistAddItem',
  WishlistRemoveItem = 'WishlistRemoveItem',
  AddAddress = 'AddAddress',
  UpdateAddress = 'UpdateAddress',
  CreateUpdatePartner = 'CreateUpdatePartner',
  AdyenTransaction = 'AdyenTransaction',
  AdyenProviderInfo = 'AdyenProviderInfo',
  AdyenPaymentMethods = 'AdyenPaymentMethods',
  AdyenPaymentDetails = 'AdyenPaymentDetails',
  AdyenPayments = 'AdyenPayments',
  SelectCurrentAddress = 'SelectCurrentAddress',
  DeleteAddress = 'DeleteAddress',
  NewsletterSubscribeMutation = 'NewsletterSubscribeMutation',
  ApplyGiftCardMutation = 'ApplyGiftCardMutation',
  ApplyCouponMutation = 'ApplyCouponMutation',
  MakeGiftCardPaymentMutation = 'MakeGiftCardPaymentMutation',
  ShippingMethod = 'ShippingMethod',
}

const Mutations: Record<MutationName, string> = {
  LoginMutation,
  LogoutMutation,
  CreateNewAccountMutation,
  SendResetPasswordMutation,
  UpdatePasswordMutation,
  ChangePasswordMutation,
  CartAddItem,
  CartUpdateQuantity,
  CartRemoveItem,
  RegisterUserMutation,
  UpdateMyAccountMutation,
  WishlistAddItem,
  WishlistRemoveItem,
  AddAddress,
  UpdateAddress,
  CreateUpdatePartner,
  AdyenTransaction,
  AdyenProviderInfo,
  AdyenPaymentMethods,
  AdyenPaymentDetails,
  AdyenPayments,
  SelectCurrentAddress,
  DeleteAddress,
  NewsletterSubscribeMutation,
  ApplyGiftCardMutation,
  ApplyCouponMutation,
  MakeGiftCardPaymentMutation,
  ShippingMethod,
}

export { Mutations, MutationName }
