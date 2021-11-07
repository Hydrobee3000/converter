import { Button, FormControl, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConvert, setAmount, setToCurrency } from './../redux/currencyReducer'
import { setBaseCurrency } from './../redux/currencyReducer'

const FirstPage = ({ baseCurrency, currencies }) => {
  const dispatch = useDispatch()
  const toCurrency = useSelector((state) => state.currency.toCurrency)
  const result = useSelector((state) => state.currency.result)
  const amount = useSelector((state) => state.currency.amount)
  // const [value, setValue] = useState(0)
  // const [result, setResult] = useState(0)
  // let convertValue ///

  // useEffect(() => {
  //   dispatch(fetchTodos())
  // }, [dispatch])

  // const changeBaseCurrency = useCallback((e) => dispatch(setBaseCurrency())[dispatch])
  //////////////////////////

  const onClick = useCallback(
    () => dispatch(getConvert(baseCurrency, toCurrency, amount)),
    [dispatch, baseCurrency, toCurrency, amount]
  )

  // const onClick = useCallback(() => {
  //   axios
  //     .get(
  //       `https://api.fastforex.io/convert?from=${baseCurrency}&to=${toCurrency}&amount=${80}&api_key=4556f97ae5-f5e4423ba4-r220aq` //почему-то amount не может взять значение value
  //     )
  //     .then((response) => {
  //       setResult(response.data.result[toCurrency])
  //     })
  // }, [result, convertValue])

  return (
    <Paper style={{ height: '600px', backgroundColor: '#f6fdfc', display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth>
        <TextField
          style={{ margin: '30px 0 10px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='outlined-number'
          label='Number'
          type='number'
          value={amount}
          // onChange={(e) => setValue(e.target.value)}
          onChange={(e) => dispatch(setAmount(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='demo-simple-select'
          value={baseCurrency}
          onChange={(e) => dispatch(setBaseCurrency(e.target.value))}>
          {/* Меняем базовую валюту при выборе */}
          <MenuItem value={'RUB'}>RUB</MenuItem>
          <MenuItem value={'USD'}>USD </MenuItem>
        </Select>
        <TextField
          style={{ margin: '15px 0', width: '10%', alignSelf: 'center', backgroundColor: 'white', textAlign: 'center' }}
          id='outlined-read-only-input'
          value='in'
          InputProps={{
            readOnly: true,
          }}
        />
        <Select
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='demo-simple-select'
          value={toCurrency}
          onChange={(e) => dispatch(setToCurrency(e.target.value))}>
          {/* Проходимся по всем валютам из стейта и отображаем их в поле выборы валюты в которую конвертируем */}
          {Object.keys(currencies).map((currency, i) => {
            return (
              <MenuItem value={currency} key={i}>
                {currency}
              </MenuItem>
            )
          })}
        </Select>
        <Button
          style={{ margin: '10px 0', width: '10%', alignSelf: 'center', backgroundColor: 'white' }}
          variant='outlined'
          onClick={onClick}>
          Просмотр
        </Button>
        <TextField
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='outlined-read-only-input'
          value={result}
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>
    </Paper>
  )
}
export default FirstPage
