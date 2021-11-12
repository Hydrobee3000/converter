import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://api.fastforex.io/`,
  headers: { Accept: 'application/json' },
})

export const currencyAPI = {
  //получить все валюты
  getAllCurrencies() {
    return instance.get(`currencies?api_key=8df75b22c9-558651ffe1-r2e4ku`)
  },
  //получить ставку относительно базовой валюты
  getRateFromBaseCurrencies(baseCurrency) {
    return instance.get(`fetch-all?from=${baseCurrency}&api_key=8df75b22c9-558651ffe1-r2e4ku`)
  },
  // конвертировать
  getResult(baseCurrency, toCurrency, amount) {
    return instance.get(`convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}&api_key=8df75b22c9-558651ffe1-r2e4ku`)
  },
}
