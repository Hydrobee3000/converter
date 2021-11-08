import { MenuItem, Paper, Select } from '@mui/material'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { getRateCurrencies, setBaseCurrency } from '../redux/currencyReducer'
import Preloader from './common/Preloader/Preloader'

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

const SecondPage = ({ baseCurrency, currencies }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRateCurrencies(baseCurrency))
  }, [baseCurrency, dispatch])

  const rateCurrencies = useSelector((state) => state.currency.rateCurrencies)
  console.log(rateCurrencies)

  if (rateCurrencies == null) {
    return <Preloader />
  }
  // если ставка еще не загрузилась, показывать загрузку
  return (
    <TableContainer style={{ display: 'flex' }} component={Paper}>
      <Table sx={{ maxWidth: '70%' }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align='left'>Currency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align='center'>{currency.fullName}</StyledTableCell>
              <StyledTableCell align='left'>{currency.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Table sx={{ maxWidth: '30%' }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>From</StyledTableCell>
            <StyledTableCell align='center'>Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(rateCurrencies).map((rate, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align='center'>{baseCurrency}</StyledTableCell>

              <StyledTableCell align='center'>{rate.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default SecondPage
