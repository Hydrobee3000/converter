import { FormControl, MenuItem, Paper, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConvert, setAmount, setToCurrency } from './../redux/currencyReducer'
import { setBaseCurrency } from './../redux/currencyReducer'
import LoadingButton from '@mui/lab/LoadingButton'

//основные стили
const style = {
  amountField: { margin: '30px 0 10px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' },
  select: { margin: '15px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' },
  preposition: { width: '3em', alignSelf: 'center', backgroundColor: 'white' },
  loadingButton: {
    margin: '10px 0',
    width: '15em',
    height: '4em',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: '10em',
  },
  paper: { height: '700px', backgroundColor: '#f6fdfc', display: 'flex', flexDirection: 'column' },
  result: { margin: '15px 0', width: '14em', alignSelf: 'center', backgroundColor: 'white' },
}

const FirstPage = ({ baseCurrency, currencies, rateCurrencies, convertingInProgress }) => {
  const dispatch = useDispatch()
  const toCurrency = useSelector((state) => state.currency.toCurrency) //значение валюты в которую конвертируем
  const result = useSelector((state) => state.currency.result) //значение результата
  const amount = useSelector((state) => state.currency.amount) //значение введенной суммы

  //запрос результата при нажатии на кнопку
  const onClick = useCallback(
    () => dispatch(getConvert(baseCurrency, toCurrency, amount)),
    [dispatch, baseCurrency, toCurrency, amount]
  )

  return (
    <Paper style={style.paper}>
      <Box component='form'>
        {/* поле ввода стоимости */}
        <FormControl fullWidth>
          <TextField
            placeholder='Enter the number'
            style={style.amountField}
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
        {/* выбор валюты ИЗ которой будет конвертироваться */}
        <FormControl fullWidth>
          <Select
            style={style.select}
            id='demo-simple-select'
            value={baseCurrency}
            onChange={(e) => dispatch(setBaseCurrency(e.target.value))}>
            {/* Меняем базовую валюту при выборе */}
            <MenuItem value={'RUB'}>RUB</MenuItem>
            <MenuItem value={'USD'}>USD </MenuItem>
          </Select>
        </FormControl>
        {/* предлог 'in' */}
        <FormControl fullWidth>
          <TextField
            style={style.preposition}
            id='outlined-read-only-input'
            value='in'
            InputProps={{
              readOnly: true,
            }}
          />
        </FormControl>
        {/* выбор валюты В которую будет конвертироваться */}
        <FormControl fullWidth>
          <Select
            style={style.select}
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
        {/* кнопка */}
        <FormControl fullWidth>
          <LoadingButton
            style={style.loadingButton}
            variant='outlined'
            disabled={!convertingInProgress || amount <= 0}
            // отключаем кнопку при запросе или если значение меньше или равно 0
            onClick={onClick}
            loading={!convertingInProgress}
            loadingPosition='start'>
            Convert
          </LoadingButton>
        </FormControl>
        {/* вывод результата */}
        <FormControl fullWidth>
          <TextField
            id='outlined-read-only-input'
            style={style.result}
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
