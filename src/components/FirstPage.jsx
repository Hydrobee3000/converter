import { Button, FormControl, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

const FirstPage = () => {
  const currencies = useSelector((state) => state.currencyReducer.currencies)

  const [value, setValue] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [result, setResult] = useState(0)
  let convertValue

  const onClick = useCallback(() => {
    axios
      .get(
        `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${80}&api_key=4556f97ae5-f5e4423ba4-r220aq` //почему-то amount не может взять значение value
      )
      .then((response) => {
        setResult(response.data.result[toCurrency])
      })
  }, [result, convertValue])
  return (
    <Paper style={{ height: '600px', backgroundColor: '#f6fdfc', display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth>
        <TextField
          style={{ margin: '30px 0 10px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='outlined-number'
          label='Number'
          type='number'
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='demo-simple-select'
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}>
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
          onChange={(e) => setToCurrency(e.target.value)}>
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
