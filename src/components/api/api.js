import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://free.currconv.com/api/v7/`,
  headers: { Accept: 'application/json' },
})

export const currencyAPI = {
  //получить все валюты
  getAllCurrencies() {
    return instance.get(`https://api.fastforex.io/currencies?api_key=4556f97ae5-f5e4423ba4-r220aq`)
  },
  //получить ставку относительно базовой валюты
  getRateFromBaseCurrencies(baseCurrency) {
    return instance.get(`https://api.fastforex.io/fetch-all?from=${baseCurrency}&api_key=4556f97ae5-f5e4423ba4-r220aq`)
  },
  // конвертировать
  getResult(baseCurrency, toCurrency, amount) {
    return instance.get(
      `https://api.fastforex.io/convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}&api_key=4556f97ae5-f5e4423ba4-r220aq`
    )
  },
}
