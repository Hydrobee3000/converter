import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://api.fastforex.io/`,
  headers: { Accept: 'application/json' },
})

export const currencyAPI = {
  //получить все валюты
  getAllCurrencies() {
    return instance.get(`currencies?api_key=219a2691a0-575e858feb-r3dj52`)
  },
  //получить ставку относительно базовой валюты
  getRateFromBaseCurrencies(baseCurrency) {
    return instance.get(`fetch-all?from=${baseCurrency}&api_key=219a2691a0-575e858feb-r3dj52`)
  },
  //получить результат конвертации
  getResult(baseCurrency, toCurrency, amount) {
    return instance.get(`convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}&api_key=219a2691a0-575e858feb-r3dj52`)
  },
}
