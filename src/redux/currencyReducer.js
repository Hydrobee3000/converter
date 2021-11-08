import { currencyAPI } from '../components/api/api'

const SET_CURRENCIES = 'SET_CURRENCIES'
const SET_RATE_CURRENCIES = 'SET_RATE_CURRENCIES'
const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY'
const TO_CURRENCY = 'TO_CURRENCY'
const SET_AMOUNT = 'SET_AMOUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_RESULT = 'SET_RESULT'

let initialState = {
  currencies: [
    { name: 'AED', rate: null, fullName: 'United Arab Emirates Dirham' },
    { name: 'AFN', rate: null, fullName: 'Afghan Afghani' },
    { name: 'ALL', rate: null, fullName: 'Albanian Lek' },
    { name: 'AMD', rate: null, fullName: 'Armenian Dram' },
    { name: 'ANG', rate: null, fullName: 'Dutch Guilders' },
    { name: 'AOA', rate: null, fullName: 'Angolan Kwanza' },
    { name: 'ARS', rate: null, fullName: 'Argentine Peso' },
    { name: 'AUD', rate: null, fullName: 'Australian Dollar' },
    { name: 'AWG', rate: null, fullName: 'Aruban Florin' },
    { name: 'AZN', rate: null, fullName: 'Azerbaijani Manat' },
    { name: 'BAM', rate: null, fullName: 'Bosnia-Herzegovina Convertible Mark' },
    { name: 'BBD', rate: null, fullName: 'Barbadian Dollar' },
    { name: 'BDT', rate: null, fullName: 'Bangladeshi Taka' },
    { name: 'BGN', rate: null, fullName: 'Bulgarian Lev' },
    { name: 'BHD', rate: null, fullName: 'Bahraini Dinar' },
    { name: 'BIF', rate: null, fullName: 'Burundian Franc' },
    { name: 'BMD', rate: null, fullName: 'Bermudian Dollar' },
    { name: 'BND', rate: null, fullName: 'Bruneian Dollar' },
    { name: 'BOB', rate: null, fullName: 'Bolivian Boliviano' },
    { name: 'BRL', rate: null, fullName: 'Brazilian Real' },
    { name: 'BSD', rate: null, fullName: 'Bahamian Dollar' },
    { name: 'BTN', rate: null, fullName: 'Bhutanese Ngultrum' },
    { name: 'BWP', rate: null, fullName: 'Botswanan Pula' },
    { name: 'BZD', rate: null, fullName: 'Belizean Dollar' },
    { name: 'CAD', rate: null, fullName: 'Canadian Dollar' },
    { name: 'CDF', rate: null, fullName: 'Congolese Franc' },
    { name: 'CHF', rate: null, fullName: 'Swiss Franc' },
    { name: 'CLF', rate: null, fullName: 'Chilean Unit of Account UF' },
    { name: 'CLP', rate: null, fullName: 'Chilean Peso' },
    { name: 'CNH', rate: null, fullName: 'Chinese Yuan Offshore' },
    { name: 'CNY', rate: null, fullName: 'Chinese Yuan' },
    { name: 'COP', rate: null, fullName: 'Colombian Peso' },
    { name: 'CUP', rate: null, fullName: 'Cuban Peso' },
    { name: 'CVE', rate: null, fullName: 'Cape Verdean Escudo' },
    { name: 'CZK', rate: null, fullName: 'Czech Republic Koruna' },
    { name: 'DJF', rate: null, fullName: 'Djiboutian Franc' },
    { name: 'DKK', rate: null, fullName: 'Danish Krone' },
    { name: 'DOP', rate: null, fullName: 'Dominican Peso' },
    { name: 'DZD', rate: null, fullName: 'Algerian Dinar' },
    { name: 'EGP', rate: null, fullName: 'Egyptian Pound' },
    { name: 'ERN', rate: null, fullName: 'Eritrean Nakfa' },
    { name: 'ETB', rate: null, fullName: 'Ethiopian Birr' },
    { name: 'EUR', rate: null, fullName: 'Euro' },
    { name: 'FJD', rate: null, fullName: 'Fijian Dollar' },
    { name: 'FKP', rate: null, fullName: 'Falkland Islands Pound' },
    { name: 'GBP', rate: null, fullName: 'British Pound Sterling' },
    { name: 'GEL', rate: null, fullName: 'Georgian Lari' },
    { name: 'GHS', rate: null, fullName: 'Ghanaian Cedi' },
    { name: 'GIP', rate: null, fullName: 'Gibraltar Pound' },
    { name: 'GMD', rate: null, fullName: 'Gambian Dalasi' },
    { name: 'GNF', rate: null, fullName: 'Guinean Franc' },
    { name: 'GTQ', rate: null, fullName: 'Guatemalan Quetzal' },
    { name: 'GYD', rate: null, fullName: 'Guyanaese Dollar' },
    { name: 'HKD', rate: null, fullName: 'Hong Kong Dollar' },
    { name: 'HNL', rate: null, fullName: 'Honduran Lempira' },
    { name: 'HRK', rate: null, fullName: 'Croatian Kuna' },
    { name: 'HTG', rate: null, fullName: 'Haitian Gourde' },
    { name: 'HUF', rate: null, fullName: 'Hungarian Forint' },
    { name: 'IDR', rate: null, fullName: 'Indonesian Rupiah' },
    { name: 'ILS', rate: null, fullName: 'Israeli New Sheqel' },
    { name: 'INR', rate: null, fullName: 'Indian Rupee' },
    { name: 'IQD', rate: null, fullName: 'Iraqi Dinar' },
    { name: 'IRR', rate: null, fullName: 'Iranian Rial' },
    { name: 'ISK', rate: null, fullName: 'Icelandic Krona' },
    { name: 'JMD', rate: null, fullName: 'Jamaican Dollar' },
    { name: 'JOD', rate: null, fullName: 'Jordanian Dinar' },
    { name: 'JPY', rate: null, fullName: 'Japanese Yen' },
    { name: 'KES', rate: null, fullName: 'Kenyan Shilling' },
    { name: 'KGS', rate: null, fullName: 'Kyrgystani Som' },
    { name: 'KHR', rate: null, fullName: 'Cambodian Riel' },
    { name: 'KMF', rate: null, fullName: 'Comorian Franc' },
    { name: 'KPW', rate: null, fullName: 'North Korean Won' },
    { name: 'KRW', rate: null, fullName: 'South Korean Won' },
    { name: 'KWD', rate: null, fullName: 'Kuwaiti Dinar' },
    { name: 'KYD', rate: null, fullName: 'Caymanian Dollar' },
    { name: 'KZT', rate: null, fullName: 'Kazakhstani Tenge' },
    { name: 'LAK', rate: null, fullName: 'Laotian Kip' },
    { name: 'LBP', rate: null, fullName: 'Lebanese Pound' },
    { name: 'LKR', rate: null, fullName: 'Sri Lankan Rupee' },
    { name: 'LRD', rate: null, fullName: 'Liberian Dollar' },
    { name: 'LSL', rate: null, fullName: 'Basotho Maloti' },
    { name: 'LYD', rate: null, fullName: 'Libyan Dinar' },
    { name: 'MAD', rate: null, fullName: 'Moroccan Dirham' },
    { name: 'MDL', rate: null, fullName: 'Moldovan Leu' },
    { name: 'MGA', rate: null, fullName: 'Malagasy Ariary' },
    { name: 'MKD', rate: null, fullName: 'Macedonian Denar' },
    { name: 'MMK', rate: null, fullName: 'Myanma Kyat' },
    { name: 'MNT', rate: null, fullName: 'Mongolian Tugrik' },
    { name: 'MOP', rate: null, fullName: 'Macanese Pataca' },
    { name: 'MRU', rate: null, fullName: 'Mauritanian Ouguiya (1973–2017)' },
    { name: 'MUR', rate: null, fullName: 'Mauritian Rupee' },
    { name: 'MVR', rate: null, fullName: 'Maldivian Rufiyaa' },
    { name: 'MWK', rate: null, fullName: 'Malawian Kwacha' },
    { name: 'MXN', rate: null, fullName: 'Mexican Peso' },
    { name: 'MYR', rate: null, fullName: 'Malaysian Ringgit' },
    { name: 'MZN', rate: null, fullName: 'Mozambican Metical' },
    { name: 'NAD', rate: null, fullName: 'Namibian Dollar' },
    { name: 'NGN', rate: null, fullName: 'Nigerian Naira' },
    { name: 'NOK', rate: null, fullName: 'Norwegian Krone' },
    { name: 'NPR', rate: null, fullName: 'Nepalese Rupee' },
    { name: 'NZD', rate: null, fullName: 'New Zealand Dollar' },
    { name: 'OMR', rate: null, fullName: 'Omani Rial' },
    { name: 'PAB', rate: null, fullName: 'Panamanian Balboa' },
    { name: 'PEN', rate: null, fullName: 'Peruvian Nuevo Sol' },
    { name: 'PGK', rate: null, fullName: 'Papua New Guinean Kina' },
    { name: 'PHP', rate: null, fullName: 'Philippine Peso' },
    { name: 'PKR', rate: null, fullName: 'Pakistani Rupee' },
    { name: 'PLN', rate: null, fullName: 'Polish Zloty' },
    { name: 'PYG', rate: null, fullName: 'Paraguayan Guarani' },
    { name: 'QAR', rate: null, fullName: 'Qatari Rial' },
    { name: 'RON', rate: null, fullName: 'Romanian Leu' },
    { name: 'RSD', rate: null, fullName: 'Serbian Dinar' },
    { name: 'RUB', rate: null, fullName: 'Russian Ruble' },
    { name: 'RWF', rate: null, fullName: 'Rwandan Franc' },
    { name: 'SAR', rate: null, fullName: 'Saudi Arabian Riyal' },
    { name: 'SCR', rate: null, fullName: 'Seychellois Rupee' },
    { name: 'SDG', rate: null, fullName: 'Sudanese Pound' },
    { name: 'SEK', rate: null, fullName: 'Swedish Krona' },
    { name: 'SGD', rate: null, fullName: 'Singapore Dollar' },
    { name: 'SHP', rate: null, fullName: 'Saint Helena Pound' },
    { name: 'SLL', rate: null, fullName: 'Sierra Leonean Leone' },
    { name: 'SOS', rate: null, fullName: 'Somali Shilling' },
    { name: 'SRD', rate: null, fullName: 'Surinamese Dollar' },
    { name: 'SYP', rate: null, fullName: 'Syrian Pound' },
    { name: 'SZL', rate: null, fullName: 'Swazi Emalangeni' },
    { name: 'THB', rate: null, fullName: 'Thai Baht' },
    { name: 'TJS', rate: null, fullName: 'Tajikistani Somoni' },
    { name: 'TMT', rate: null, fullName: 'Turkmenistani Manat' },
    { name: 'TND', rate: null, fullName: 'Tunisian Dinar' },
    { name: 'TOP', rate: null, fullName: "Tongan Pa'anga" },
    { name: 'TRY', rate: null, fullName: 'Turkish Lira' },
    { name: 'TTD', rate: null, fullName: 'Trinidad and Tobago Dollar' },
    { name: 'TWD', rate: null, fullName: 'Taiwan New Dollar' },
    { name: 'TZS', rate: null, fullName: 'Tanzanian Shilling' },
    { name: 'UAH', rate: null, fullName: 'Ukrainian Hryvnia' },
    { name: 'UGX', rate: null, fullName: 'Ugandan Shilling' },
    { name: 'USD', rate: null, fullName: 'United States Dollar' },
    { name: 'UYU', rate: null, fullName: 'Uruguayan Peso' },
    { name: 'UZS', rate: null, fullName: 'Uzbekistan Som' },
    { name: 'VND', rate: null, fullName: 'Vietnamese Dong' },
    { name: 'VUV', rate: null, fullName: 'Ni-Vanuatu Vatu' },
    { name: 'WST', rate: null, fullName: 'Samoan Tala' },
    { name: 'XAF', rate: null, fullName: 'CFA Franc BEAC' },
    { name: 'XCD', rate: null, fullName: 'East Caribbean Dollar' },
    { name: 'XDR', rate: null, fullName: 'Special Drawing Rights' },
    { name: 'XOF', rate: null, fullName: 'CFA Franc BCEAO' },
    { name: 'XPF', rate: null, fullName: 'CFP Franc' },
    { name: 'YER', rate: null, fullName: 'Yemeni Rial' },
    { name: 'ZAR', rate: null, fullName: 'South African Rand' },
    { name: 'ZMW', rate: null, fullName: 'Zambian Kwacha' },
  ],
  rateCurrencies: null,
  baseCurrency: null,
  toCurrency: 'EUR',
  amount: 0,
  result: null,
  isFetching: true,
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES: {
      return {
        ...state,
        currencies: action.currencies,
      }
    }
    case SET_RATE_CURRENCIES: {
      return {
        ...state,
        rateCurrencies: action.rateCurrencies,
      }
    }
    case SET_BASE_CURRENCY: {
      return { ...state, baseCurrency: action.baseCurrency }
    }
    case SET_AMOUNT: {
      return {
        ...state,
        amount: action.amount,
      }
    }
    case TO_CURRENCY: {
      return {
        ...state,
        toCurrency: action.toCurrency,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }

    case SET_RESULT: {
      return {
        ...state,
        result: action.result,
      }
    }

    default:
      return state
  }
}

export const setCurrencies = (currencies) => ({ type: SET_CURRENCIES, currencies })
export const setRateCurrencies = (rateCurrencies) => ({ type: SET_RATE_CURRENCIES, rateCurrencies })
export const setResult = (result) => ({ type: SET_RESULT, result })
export const setAmount = (amount) => ({ type: SET_AMOUNT, amount })
export const setToCurrency = (toCurrency) => ({ type: TO_CURRENCY, toCurrency })
export const setBaseCurrency = (baseCurrency) => ({ type: SET_BASE_CURRENCY, baseCurrency })
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

//получение данных всех валют
export const getCurrencies = () => {
  return async (dispatch) => {
    let response = await currencyAPI.getAllCurrencies()
    dispatch(setCurrencies(response.data.results))
  }
}

//получениe ставки всех валют валют относительно базовой валюты
export const getRateCurrencies = (baseCurrency) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(false))

    let response = await currencyAPI.getRateFromBaseCurrencies(baseCurrency)
    dispatch(toggleIsFetching(true))

    dispatch(setRateCurrencies(response.data.results))
  }
}
//получениe результата
export const getConvert = (baseCurrency, toCurrency, amount) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(false))
    let response = await currencyAPI.getResult(baseCurrency, toCurrency, amount)
    dispatch(setResult(response.data.result[toCurrency]))
    dispatch(toggleIsFetching(true))
  }
}

export default currencyReducer
