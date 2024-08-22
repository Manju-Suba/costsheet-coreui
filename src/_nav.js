import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilGraph,
  cilEyedropper,
  cilViewColumn,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const userData = JSON.parse(localStorage.getItem('userData'))
let _nav = [] // Initialize _nav as an empty array

if (localStorage.getItem('userData')) {
  if (userData.dept === 'Marketing') {
    _nav.push(
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavGroup,
        name: 'NPD',
        to: '/Npd',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Marketing',
            to: '/npdMarketing',
          },
          {
            component: CNavItem,
            name: 'Costsheet',
            to: '/npdCostsheet',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'EPD',
        to: '/Epd',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Marketing',
            to: '/epdMarketing',
          },
          {
            component: CNavItem,
            name: 'Costsheet',
            to: '/epdCostsheet',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Uom',
        to: '/uom',
        icon: <CIcon icon={cilEyedropper} customClassName="nav-icon" />,
        badge: {
          color: 'info',
          // text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Distributedchannel',
        to: '/distributedChannel',
        icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
        badge: {
          color: 'info',
          // text: 'NEW',
        },
      },
    )
  } else if (userData.dept === 'Taxation') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Taxation',
              to: '/npd-taxation',
            },
          ],
        },
        {
          component: CNavGroup,
          name: 'EPD',
          to: '/Epd',
          icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Taxation',
              to: '/epd-taxation',
            },
          ],
        },
      )
    } else {
    }
  } else if (userData.dept === 'Logistics') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Logistics',
              to: '/Npdlogistics',
            },
          ],
        },
        {
          component: CNavGroup,
          name: 'EPD',
          to: '/Epd',
          icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Logistics',
              to: '/EpdLogistics',
            },
          ],
        },
      )
    } else {
    }
  } else if (userData.dept === 'Packaging') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Packaging',
              to: '/npd-packaging',
            },
          ],
        },
      )
    }
  } else if (userData.dept === 'R&D') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'RM Rate',
              to: '/rm_rate',
            },
            {
              component: CNavItem,
              name: 'Finance status',
              to: '/finance_status_RandD',
            },
          ],
        },
      )
    } else {
    }
  } else if (userData.dept === 'RM Purchase') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'RM Rate',
              to: '/purchase',
            },
          ],
        },
      )
    }
  } else if (userData.dept === 'Operation') {
    if (userData.role === '1') {
      _nav.push(
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavGroup,
          name: 'NPD',
          to: '/Npd',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'RM Scrap',
              to: '/rmscarp',
            },
          ],
        },
      )
    }
  }
} else {
  window.location.href = '/'
}

export default _nav
