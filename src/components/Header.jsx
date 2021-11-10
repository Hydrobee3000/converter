import { AppBar, Breadcrumbs, Chip, MenuItem, Select, Toolbar } from '@mui/material'
import { emphasize, styled } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { setBaseCurrency } from '../redux/currencyReducer'
import { useDispatch } from 'react-redux'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = '#f6fdfc'
  return {
    backgroundColor,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
})

const Header = ({ baseCurrency }) => {
  const dispatch = useDispatch()

  return (
    <AppBar position='static'>
      <Toolbar style={{ display: 'flex', justifyContent: 'center', margin: '17px 0' }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
            }}
            style={{ textDecoration: 'none' }}
            to='/converter'>
            <StyledBreadcrumb label='Converter' />
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
            }}
            style={{ textDecoration: 'none' }}
            to='/current-currency'>
            <StyledBreadcrumb label='Сurrent rate' />
          </NavLink>
          <Select
            style={{
              marginLeft: 'auto',
              width: '5em',
              height: '2em',
              alignSelf: 'center',
              backgroundColor: 'white',
            }}
            id='demo-simple-select'
            value={baseCurrency}
            onChange={(e) => dispatch(setBaseCurrency(e.target.value))}>
            <MenuItem value={'RUB'}>RUB</MenuItem>
            <MenuItem value={'USD'}>USD </MenuItem>
          </Select>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  )
}
export default Header

//activeClassName={s.active}
