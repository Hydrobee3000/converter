import './App.css'
import { Grid, Paper } from '@mui/material'
import { Redirect, Route } from 'react-router'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import Header from './components/Header'
import { useComponentWillMount } from './components/common/ComponentWillMountHook'
import { useDispatch, useSelector } from 'react-redux'
import { setBaseCurrency } from './redux/currencyReducer'

const App = (props) => {
  const dispatch = useDispatch()
  // Установка валюты по-умолчанию в завизимости от языка браузера
  const setBaseCurrencyFromBrowLang = () => {
    const lang = navigator.language || navigator.userLanguage

    if (lang === 'ru-RU') {
      dispatch(setBaseCurrency('RUB'))
    } else {
      dispatch(setBaseCurrency('USD'))
    }
  }
  const baseCurrency = useSelector((state) => state.currency.baseCurrency)
  const currencies = useSelector((state) => state.currency.currencies)
  const rateCurrencies = useSelector((state) => state.currency.rateCurrencies)
  const convertingInProgress = useSelector((state) => state.currency.isFetching)
  console.log(rateCurrencies)

  useComponentWillMount(setBaseCurrencyFromBrowLang)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Header baseCurrency={baseCurrency} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper color='#f6fdfc'>
          <Route exact path='/'>
            <Redirect to='/converter' />
          </Route>
          <Route
            path='/converter'
            render={() => (
              <FirstPage
                baseCurrency={baseCurrency}
                currencies={currencies}
                rateCurrencies={rateCurrencies}
                convertingInProgress={convertingInProgress}
              />
            )}
          />
          <Route
            path='/current-currency'
            render={() => <SecondPage baseCurrency={baseCurrency} currencies={currencies} rateCurrencies={rateCurrencies} />}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
