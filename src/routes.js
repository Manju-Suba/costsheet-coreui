import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// EPD
const Epdmarketing = React.lazy(() => import('./views/Epd/Epdmarketing'))
const EpdLogistics = React.lazy(() => import('./views/Epd/EpdLogistics'))
const EpdTaxation = React.lazy(() => import('./views/Epd/EpdTaxation'))
const Epdcostsheet = React.lazy(() => import('./views/Epd/Epdcostsheet'))

//Npd
const Npdmarketing = React.lazy(() => import('./views/Npd/Npdmarketing'))
const Uom = React.lazy(() => import('./views/Npd/Uom'))
const Distributedchannel = React.lazy(() => import('./views/Npd/Distributedchannel'))
const Npdcostsheet = React.lazy(() => import('./views/Npd/Npdcostsheet'))
const Npdlogistics = React.lazy(() => import('./views/Npd/Npdlogistics'))
const NpdTaxation = React.lazy(() => import('./views/Npd/NpdTaxation'))
const Packaging = React.lazy(() => import('./views/Npd/Packaging'))
const Purchase = React.lazy(() => import('./views/Npd/rmpurchase'))
const RmRate = React.lazy(() => import('./views/Npd/RmRate'))
const FinStatusRe = React.lazy(() => import('./views/Npd/financeStatus'))
const RmScrap = React.lazy(() => import('./views/Npd/RmScrap'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/epdMarketing', name: 'EPD Marketing', element: Epdmarketing },
  { path: '/npdMarketing', name: 'NPD Marketing', element: Npdmarketing },
  { path: '/uom', name: 'Uom', element: Uom },
  { path: '/distributedChannel', name: 'Distributedchannel', element: Distributedchannel },
  { path: '/npdCostsheet', name: 'NPD Costsheet', element: Npdcostsheet },
  { path: '/epdCostsheet', name: 'EPD Costsheet', element: Epdcostsheet },
  { path: '/Npdlogistics', name: 'NPD Logistics', element: Npdlogistics },
  { path: '/EpdLogistics', name: 'EPD Logistics', element: EpdLogistics },
  { path: '/npd-taxation', name: 'NPD Taxation', element: NpdTaxation },
  { path: '/epd-taxation', name: 'EPD Taxation', element: EpdTaxation },
  { path: '/npd-packaging', name: 'PM Packaging', element: Packaging },
  { path: '/purchase', name: 'Purchase', element: Purchase },
  { path: '/rm_rate', name: 'Rm Rate', element: RmRate },
  { path: '/finance_status_RandD', name: 'Finance Status', element: FinStatusRe },
  { path: '/rmscarp', name: 'RM Scrap', element: RmScrap },
]

export default routes
