import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://free.currconv.com/api/v7/`,
})

export const currencyAPI = {
  getCurrencies() {
    return instance.get(`https://api.fastforex.io/fetch-all?api_key=4556f97ae5-f5e4423ba4-r220aq`).then((response) => {
      return response.data
    })
  },

  getResult(fromCurrency, toCurrency, value) {
    return instance
      .get(
        `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${value}&api_key=4556f97ae5-f5e4423ba4-r220aq`
      )
      .then((response) => {
        console.log(response.data)
      })
  },
}
