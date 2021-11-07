import { MenuItem, Paper, Select } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies, setBaseCurrency } from '../redux/currencyReducer'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const SecondPage = ({ baseCurrency }) => {
  const dispatch = useDispatch()
  const currenciesRate = useSelector((store) => store.currency.currencies)
  // const [rate, setRate] = useState()

  // useEffect(() => {
  //   axios
  //     .get(`https://api.fastforex.io/fetch-all?from=${baseCurrency}&api_key=4556f97ae5-f5e4423ba4-r220aq`)
  //     .then(({ data }) => {
  //       setRate(data.results)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])

  useEffect(() => dispatch(getCurrencies(setBaseCurrency)), [])

  // console.log(rate)

  // const array = []
  // for (var key in currenciesRate) {
  //   array.push(Object(key) + ' : ' + Object(currenciesRate[key]))
  // }

  // // for (var i in currenciesRate) {
  // //   array.push(i)
  // //   array.push(currenciesRate[i])
  // // }
  // console.log(array)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Index</StyledTableCell>
            <StyledTableCell align='center'>Currency</StyledTableCell>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align='center'>
              <Select
                style={{ marginRight: '10px', alignSelf: 'center', backgroundColor: 'white' }}
                id='demo-simple-select'
                value={baseCurrency}
                // onChange={(e) => setBaseCurrency(e.target.value)}
                // onChange={(e) => dispatch(setBaseCurrency(e.target.value))}
                onChange={(e) => dispatch(setBaseCurrency(e.target.value))}>
                <MenuItem value={'RUB'}>RUB</MenuItem>
                <MenuItem value={'USD'}>USD </MenuItem>
              </Select>
              From
            </StyledTableCell>
            <StyledTableCell align='center'>Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(currenciesRate).map((key, i) => (
            <StyledTableRow key={key}>
              <StyledTableCell align='center' component='th' scope='row'>
                {i}
              </StyledTableCell>
              <StyledTableCell align='center'>{key}</StyledTableCell>
              <StyledTableCell align='center'>{currenciesRate[key]}</StyledTableCell>
              <StyledTableCell align='center'>{baseCurrency}</StyledTableCell>
              <StyledTableCell align='center'>{key.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default SecondPage
