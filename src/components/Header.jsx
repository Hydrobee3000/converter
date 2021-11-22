import { AppBar, Breadcrumbs, Chip, MenuItem, Select, Toolbar } from '@mui/material'
import { emphasize, styled } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { setBaseCurrency } from '../redux/currencyReducer'
import { useDispatch } from 'react-redux'

//стили для навигации 'breadcrumb'
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
//основные стили
const style = {
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '17px 0',
  },
  link: { textDecoration: 'none' },
  activeLink: { fontWeight: 'bold' },
  select: { marginLeft: 'auto', width: '5em', height: '2em', alignSelf: 'center', backgroundColor: 'white' },
}

const Header = ({ baseCurrency }) => {
  const dispatch = useDispatch()
  return (
    <AppBar style={{ backgroundColor: '#2b7a78' }} position='static'>
      <Toolbar style={style.toolbar}>
        <Breadcrumbs aria-label='breadcrumb'>
          {/* ссылки */}
          <NavLink activeStyle={style.activeLink} style={style.link} to='/converter'>
            <StyledBreadcrumb label='Converter' />
          </NavLink>
          <NavLink activeStyle={style.activeLink} style={style.link} to='/current-currency'>
            <StyledBreadcrumb label='Сurrent rate' />
          </NavLink>
          {/* выбор места */}
          <Select
            style={style.select}
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
