import { MenuItem, Paper, Select } from '@mui/material'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
const SecondPage = () => {
  const [baseCurrency, setBaseCurrency] = React.useState(['RUB'])
  const [rate, setRate] = React.useState()
  const currencies = useSelector((state) => state.currencyReducer.currencies)

  React.useEffect(() => {
    axios
      .get(`https://api.fastforex.io/fetch-all?from=${baseCurrency}&api_key=4556f97ae5-f5e4423ba4-r220aq`)
      .then(({ data }) => {
        setRate(data.results)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(rate)
  // const array = []
  // for (var key in currencies) {
  //   array.push(Object(key) + ' : ' + Object(currencies[key]))
  // }

  // // for (var i in currencies) {
  // //   array.push(i)
  // //   array.push(currencies[i])
  // // }
  // console.log(array)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>index</StyledTableCell>
            <StyledTableCell align='center'>currency</StyledTableCell>
            <StyledTableCell align='center'>name</StyledTableCell>
            <StyledTableCell align='center'>
              <Select
                style={{ marginRight: '10px', alignSelf: 'center', backgroundColor: 'white' }}
                id='demo-simple-select'
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}>
                <MenuItem value={'RUB'}>RUB</MenuItem>
                <MenuItem value={'USD'}>USD </MenuItem>
              </Select>
              from
            </StyledTableCell>
            <StyledTableCell align='center'>result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(currencies).map((key, i) => (
            <StyledTableRow key={key}>
              <StyledTableCell align='center' component='th' scope='row'>
                {i}
              </StyledTableCell>
              <StyledTableCell align='center'>{key}</StyledTableCell>
              <StyledTableCell align='center'>{currencies[key]}</StyledTableCell>
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
