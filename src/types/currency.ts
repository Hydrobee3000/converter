export interface CurrencyState {
  currencies: object[]
  rateCurrencies: null | object
  baseCurrency: null | string
  toCurrency: string
  amount: null | number
  result: null | number
  isFetching: boolean
}

export enum CurrencyActionTypes {
  SET_CURRENCIES = 'SET_CURRENCIES',
  SET_RATE_CURRENCIES = 'SET_RATE_CURRENCIES',
  SET_BASE_CURRENCY = 'SET_BASE_CURRENCY',
  TO_CURRENCY = 'TO_CURRENCY',
  SET_AMOUNT = 'SET_AMOUNT',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
  SET_RESULT = 'SET_RESULT',
}

interface SetCurrencyAction {
  type: CurrencyActionTypes.SET_CURRENCIES
  payload: object[]
}
interface SetRateCurrencies {
  type: CurrencyActionTypes.SET_RATE_CURRENCIES
  payload: object
}
interface SetBaseCurrencies {
  type: CurrencyActionTypes.SET_BASE_CURRENCY
  payload: string
}
interface ToCurrency {
  type: CurrencyActionTypes.TO_CURRENCY
  payload: string
}
interface SetAmount {
  type: CurrencyActionTypes.SET_AMOUNT
  payload: number
}
interface SetResult {
  type: CurrencyActionTypes.SET_RESULT
  payload: number
}
interface ToggleIsFetching {
  type: CurrencyActionTypes.TOGGLE_IS_FETCHING
  payload: boolean
}

export type CurrencyAction =
  | SetCurrencyAction
  | SetRateCurrencies
  | SetBaseCurrencies
  | ToCurrency
  | SetAmount
  | SetResult
  | ToggleIsFetching
