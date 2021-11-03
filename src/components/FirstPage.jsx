import { Button, FormControl, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'

const FirstPage = () => {
  const [currencies, setCurrencies] = useState('usd')

  const handleChange = (event) => {
    setCurrencies(event.target.value)
  }

  return (
    <Paper style={{ height: '600px', backgroundColor: '#f6fdfc', display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth>
        <TextField
          style={{ margin: '30px 0 10px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='outlined-number'
          label='Number'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='demo-simple-select'
          value={currencies}
          onChange={handleChange}>
          <MenuItem value={'rub'}>RUB</MenuItem>
          <MenuItem value={'usd'}>USD </MenuItem>
        </Select>
        <TextField
          style={{ margin: '15px 0', width: '20%', alignSelf: 'center', backgroundColor: 'white' }}
          id='outlined-read-only-input'
          value='in'
          InputProps={{
            readOnly: true,
          }}
        />
        <Button
          style={{ margin: '10px 0', width: '10%', alignSelf: 'center', backgroundColor: 'white' }}
          variant='outlined'
          // onClick={}
        >
          Просмотр
        </Button>
      </FormControl>
    </Paper>
  )
}
export default FirstPage
