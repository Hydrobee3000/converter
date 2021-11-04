import { AppBar, Breadcrumbs, Chip, MenuItem, Select } from '@mui/material'
import { emphasize, styled } from '@mui/system'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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

const Header = () => {
  return (
    <AppBar position='static' style={{ display: 'flex' }}>
      <Breadcrumbs style={{ display: 'flex', justifyContent: 'center', margin: '17px 0' }} aria-label='breadcrumb'>
        <NavLink style={{ textDecoration: 'none' }} to='/converter'>
          <StyledBreadcrumb component='a' label='Converter' />
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} to='/current-currency'>
          <StyledBreadcrumb component='a' label='Current currency' />
        </NavLink>
      </Breadcrumbs>
    </AppBar>
  )
}
export default Header

//activeClassName={s.active}
