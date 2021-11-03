import './App.css'
import { Grid, Paper } from '@mui/material'
import { Redirect, Route } from 'react-router'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
