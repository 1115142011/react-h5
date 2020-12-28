export interface UserInfoMsg {
  propId?: string
  code?: string
  name?: string
  sex?: string
  mobile?: string
  idCard?: string
  authFlag?: number
  tlAuthFlag?: number
  tlBankBindFlag?: number
  trustFlag?: number
  bank?: string
  bankAccount?: string
  bankAccountName?: string
  contact?: string
  contactMobile?: string
}
export interface GlobalState {
  userInfo: UserInfoMsg
}
const defaultState = {
  userInfo: null,
}

type Action = {
  type: string
  payload?: any
}

export default (state: GlobalState = defaultState, action: Action) => {
  switch (action.type) {
    case 'updateUserinfo':
      return {
        ...state,
        userInfo: action.payload,
      }
    case 'updateBankCard':
      return {
        ...state,
        bankInfo: action.payload,
      }
    default:
      return state
  }
}
