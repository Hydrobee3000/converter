import { FormControl, MenuItem, Paper, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConvert, setAmount, setToCurrency } from './../redux/currencyReducer'
import { setBaseCurrency } from './../redux/currencyReducer'
import LoadingButton from '@mui/lab/LoadingButton'

const FirstPage = ({ baseCurrency, currencies, rateCurrencies, convertingInProgress }) => {
  const dispatch = useDispatch()
  const toCurrency = useSelector((state) => state.currency.toCurrency) //значение валюты в которую конвертируем
  const result = useSelector((state) => state.currency.result) //значение результата
  const amount = useSelector((state) => state.currency.amount) //значение введенной суммы

  //запрос при нажатии на кнопку
  const onClick = useCallback(
    () => dispatch(getConvert(baseCurrency, toCurrency, amount)),
    [dispatch, baseCurrency, toCurrency, amount]
  )

  // document.addEventListener('keydown', function (event) {
  //   if (event.code === 'Enter') {
  //     onClick()
  //   }
  // })

  return (
    <Paper style={{ height: '700px', backgroundColor: '#f6fdfc', display: 'flex', flexDirection: 'column' }}>
      <Box component='form'>
        <FormControl fullWidth>
          <TextField
            placeholder='Enter the number'
            style={{ margin: '30px 0 10px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' }}
            id='outlined-number'
            label='Amount'
            type='number'
            inputProps={{ min: 0 }}
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <Select
            style={{ margin: '15px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' }}
            id='demo-simple-select'
            value={baseCurrency}
            onChange={(e) => dispatch(setBaseCurrency(e.target.value))}>
            {/* Меняем базовую валюту при выборе */}
            <MenuItem value={'RUB'}>RUB</MenuItem>
            <MenuItem value={'USD'}>USD </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            style={{ width: '3em', alignSelf: 'center', backgroundColor: 'white' }}
            id='outlined-read-only-input'
            value='in'
            InputProps={{
              readOnly: true,
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <Select
            style={{ margin: '15px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' }}
            id='demo-simple-select'
            value={toCurrency}
            onChange={(e) => dispatch(setToCurrency(e.target.value))}>
            {/* Проходимся по всем валютам из стейта и отображаем их в поле выборы валюты в которую конвертируем */}
            {currencies.map((currency, i) => {
              return (
                <MenuItem value={currency.name} key={i}>
                  {currency.name}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <LoadingButton
            style={{
              margin: '10px 0',
              width: '15em',
              height: '4em',
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: '10em',
            }}
            variant='outlined'
            disabled={!convertingInProgress || amount <= 0}
            // отключаем кнопку при запросе или если значение меньше или равно 0
            onClick={onClick}
            loading={!convertingInProgress}
            loadingPosition='start'>
            Convert
          </LoadingButton>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='outlined-read-only-input'
            style={{ margin: '15px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' }}
            label='Result'
            value={result}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
          />
        </FormControl>
      </Box>
    </Paper>
  )
}
export default FirstPage
