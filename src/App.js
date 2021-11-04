import './App.css'
import { Grid, Paper } from '@mui/material'
import { Redirect, Route } from 'react-router'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { connect, Provider, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchCurrency } from './redux/appReducer'

const App = (props) => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   props.getCurrency()
  // }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Header />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper color='#f6fdfc'>
          <Route exact path='/'>
            <Redirect to='/converter' />
          </Route>
          <Route path='/converter' render={() => <FirstPage />} />
          <Route path='/current-currency' render={() => <SecondPage />} />
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  // allCurrencies: state.currencyReducer.allCurrencies,
})

let AppContainer = connect(mapStateToProps, { fetchCurrency })(App)

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp
