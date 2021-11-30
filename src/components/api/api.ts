import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'https://api.fastforex.io/',
}
const instance: AxiosInstance = axios.create(config)

interface IRate {
  base: string
  results: object
  updated: string
  ms: number
}
interface ICurrencies {
  currencies: object
  ms: number
}
interface IResult {
  base: string
  amount: number
  result: object
  ms: number
}

export const currencyAPI = {
  //получить все валюты
  getAllCurrencies() {
    return instance.get<ICurrencies>(`currencies?api_key=219a2691a0-575e858feb-r3dj52`)
  },
  //получить ставку относительно базовой валюты
  getRateFromBaseCurrencies(baseCurrency: string) {
    return instance.get<IRate>(`fetch-all?from=${baseCurrency}&api_key=219a2691a0-575e858feb-r3dj52`)
  },
  //получить результат конвертации
  getResult(baseCurrency: string, toCurrency: string, amount: number) {
    return instance.get<IResult>(
      `convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}&api_key=219a2691a0-575e858feb-r3dj52`
    )
  },
}
