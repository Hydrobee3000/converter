import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://free.currconv.com/api/v7/`,
})

export const currencyAPI = {
  getRateCurrencies(baseCurrency) {
    return instance
      .get(`https://api.fastforex.io/fetch-all?from=${baseCurrency}&api_key=4556f97ae5-f5e4423ba4-r220aq`)
      .then((response) => {
        return response.data
      })
  },

  getResult(baseCurrency, toCurrency, amount) {
    return instance
      .get(
        `https://api.fastforex.io/convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}&api_key=4556f97ae5-f5e4423ba4-r220aq`
      )
      .then((response) => {
        return response.data.result[toCurrency]
      })
  },
}
