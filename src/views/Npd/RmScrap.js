import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilTrash, cilPencil } from '@coreui/icons'
import {
  CCard,
  CCardBody,
  CFormSelect,
  CCardHeader,
  CCol,
  CRow,
  CFormLabel,
  CForm,
  CFormInput,
  CButton,
  CBadge,
  CModal,
  CModalHeader,
  CModalTitle,
  CFormFeedback,
  CModalBody,
  CToast,
  CToastBody,
  CToastClose,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

const datapop = [
  { Sno: 1, product: 'Milkshake', fillVolume: '50ml', caseConfig: 500, launchQty: 4500 },
  { Sno: 2, product: 'Chocolates', fillVolume: '100gm', caseConfig: 450, launchQty: 10000 },
  { Sno: 3, product: 'Choco Milkshake', fillVolume: '150ml', caseConfig: 300, launchQty: 2000 },
]

const Tables = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [visiblePm, setVisiblePm] = useState(false)
  const [add_plant, AddPlantPop] = useState(false)
  const [validated, setValidated] = useState(false)
  const [viewpopup, viewDetails] = useState(false)
  const [showpopup, showCompletedview] = useState(false)
  const [visibleSm1, setVisibleSm1] = useState(false)
  const [selectplant, setSelectedPlant] = useState([{ gravity: '' }])

  const [tableData, setTableData] = useState([]) //AddPlantPop

  const removeRow = (index) => {
    const updatedData = [...tableData]
    updatedData.splice(index, 1)
    setTableData(updatedData)
  }

  const handleInputChange = (index, event) => {
    const { name, value } = event.target
    const updatedData = [...tableData]
    updatedData[index][name] = value
    setTableData(updatedData)
  }

  const handlePlantChange = (e) => {
    setSelectedPlant(e.target.value)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      setVisiblePm(false)
      setVisibleSm1(true)
      setTimeout(() => {
        setVisibleSm1(false)
      }, 3000)
    }
  }

  const columns = [
    {
      name: 'Sno',
      selector: 'SNo',
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: 'product',
      sortable: true,
    },
    {
      name: 'Fill Volume',
      selector: 'fillVolume',
      sortable: true,
    },
    {
      name: 'Case Configuration',
      selector: 'caseConfig',
      sortable: true,
    },
    {
      name: 'Launch Qty',
      selector: 'launchQty',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
      width: '18%',
    },
  ]
  const data = [
    {
      SNo: 1,
      id: 1,
      product: 'Milkshake',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white m-1"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(addscrap)
            }}
          >
            Add Scrap
          </button>
          <button
            className="btn btn-sm btn-secondary text-white m-1"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(addscrap2)
            }}
          >
            View Plant
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'Choclates',
      fillVolume: '100gm',
      caseConfig: '450',
      launchQty: '10000',
      // actions: (
      //   <div>
      //     <button
      //       className="btn btn-sm btn-primary text-white m-1"
      //       onClick={() => {
      //         setVisiblePm(!visiblePm)
      //         setTableData(addscrap1)
      //       }}
      //     >
      //       Add Scrap
      //     </button>
      //     <button
      //       className="btn btn-sm btn-secondary text-white m-1"
      //       onClick={() => {
      //         setVisiblePm(!visiblePm)
      //         setTableData(addscrap2)
      //       }}
      //     >
      //       View Plant
      //     </button>
      //   </div>
      // ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white m-1"
            onClick={() => {
              AddPlantPop(!visiblePm)
              setTableData(addscrap1)
            }}
          >
            Add Plant
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'Choc Milkshake',
      fillVolume: '150ml',
      caseConfig: '300',
      launchQty: '2000',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-secondary text-white m-1"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(addscrap2)
            }}
          >
            View Scarp
          </button>
          <button
            className="btn btn-sm btn-secondary text-white m-1"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(addscrap2)
            }}
          >
            View Plant
          </button>
        </div>
      ),
    },
  ]

  const columns2 = [
    {
      name: 'Sno',
      selector: 'SNo',
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: 'product',
      sortable: true,
    },
    {
      name: 'Fill Volume',
      selector: 'fillVolume',
      sortable: true,
    },
    {
      name: 'Case Configuration',
      selector: 'caseConfig',
      sortable: true,
    },
    {
      name: 'Launch Qty',
      selector: 'launchQty',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
    },
  ]
  const data2 = [
    {
      SNo: 1,
      id: 1,
      product: 'Badam Milk',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(updateScrap)
            }}
          >
            Update Scrap
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'Choclate Stick',
      fillVolume: '100gm',
      caseConfig: '450',
      launchQty: '10000',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(updateScrap)
            }}
          >
            Update Scrap
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'Choc Milkshake',
      fillVolume: '150ml',
      caseConfig: '300',
      launchQty: '2000',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData(updateScrap)
            }}
          >
            Update Scrap
          </button>
        </div>
      ),
    },
  ]

  const view = [
    {
      name: 'Sno',
      selector: 'SNo',
      sortable: true,
    },
    {
      name: 'Ingredient',
      selector: 'ingredient',
      sortable: true,
    },
    {
      name: 'Rate',
      selector: 'rate',
      sortable: true,
    },
    {
      name: 'Qty',
      selector: 'quantity',
      sortable: true,
    },
  ]
  const viewdata = [
    {
      SNo: 1,
      id: 1,
      ingredient: '',
      rate: '',
      quantity: '500',
    },
    {
      SNo: 2,
      id: 2,
      product: '',
      rate: '',
      quantity: '450',
    },
    {
      SNo: 3,
      id: 3,
      ingredient: '',
      rate: '',
      quantity: '300',
    },
  ]

  const addscrap = [
    {
      SNo: 1,
      id: 1,
      ingredient: 'Milkshake',
      rate: '20',
      qty: '500',
      scrap: '',
      actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white">Add Scrap</button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'OIL',
      rate: '40',
      qty: '450',
      scrap: '5%',
      actions: (
        <div>
          <button className="btn btn-sm btn-secondary text-white" disabled>
            Scrap Added
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      ingredient: 'Soap',
      rate: '20',
      qty: '300',
      scrap: '7%',
      actions: (
        <div>
          <button className="btn btn-sm btn-secondary text-white" disabled>
            Scrap Added
          </button>
        </div>
      ),
    },
  ]

  const addscrap1 = [
    {
      SNo: 1,
      id: 1,
      ingredient: 'Powder',
      rate: '20',
      qty: '500',
      scrap: '',
      actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white">Add Scrap</button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'OIL',
      rate: '40',
      qty: '450',
      scrap: '10%',
      actions: (
        <div>
          <button className="btn btn-sm btn-secondary text-white" disabled>
            Scrap Added
          </button>
        </div>
      ),
    },
  ]
  const addscrap2 = [
    {
      SNo: 1,
      id: 1,
      ingredient: 'Powder',
      rate: '20',
      qty: '500',
      scrap: '10%',
      actions: (
        <div>
          <button className="btn btn-sm btn-secondary text-white" disabled>
            Scrap Added
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'OIL',
      rate: '40',
      qty: '450',
      scrap: '10%',
      actions: (
        <div>
          <button className="btn btn-sm btn-secondary text-white" disabled>
            Scrap Added
          </button>
        </div>
      ),
    },
  ]
  const updateScrap = [
    {
      SNo: 1,
      id: 1,
      ingredient: 'Powder',
      rate: '20',
      qty: '500',
      scrap: '10%',
      status: 'update',
      actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white">Update</button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'OIL',
      rate: '40',
      qty: '450',
      scrap: '10%',
      status: 'update',
      actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white">Update</button>
        </div>
      ),
    },
  ]
  const view1 = [
    {
      name: 'Sno',
      selector: 'SNo',
      sortable: true,
    },
    {
      name: 'Ingredient',
      selector: 'ingredient',
      sortable: true,
    },
    {
      name: 'Rate',
      selector: 'rate',
      sortable: true,
    },
    {
      name: 'Qty',
      selector: 'quantity',
      sortable: true,
    },
    {
      name: 'Scrap',
      selector: 'scrap',
      sortable: true,
    },
  ]
  const viewdata1 = [
    {
      SNo: 1,
      id: 1,
      ingredient: 'Powder',
      rate: '30',
      quantity: '500',
      scrap: '21',
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'Oil',
      rate: '40',
      quantity: '450',
      scrap: '22',
    },
    {
      SNo: 3,
      id: 3,
      ingredient: 'Milk',
      rate: '50',
      quantity: '300',
      scrap: '23',
    },
  ]

  const completetable = [
    {
      name: 'Sno',
      selector: 'SNo',
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: 'product',
      sortable: true,
    },
    {
      name: 'Fill Volume',
      selector: 'fillVolume',
      sortable: true,
    },
    {
      name: 'Case Configuration',
      selector: 'caseConfig',
      sortable: true,
    },
    {
      name: 'Launch Qty',
      selector: 'launchQty',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
    },
  ]
  const comp_data = [
    {
      SNo: 1,
      id: 1,
      product: 'Badam Milk',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!showpopup)}
          >
            View
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'Choclate Stick',
      fillVolume: '100gm',
      caseConfig: '450',
      launchQty: '10000',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!showpopup)}
          >
            View
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'Choc Milkshake',
      fillVolume: '150ml',
      caseConfig: '300',
      launchQty: '2000',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!showpopup)}
          >
            View
          </button>
        </div>
      ),
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CModal size="xl" visible={visiblePm} onClose={() => setVisiblePm(false)}>
          <CModalHeader>
            <CModalTitle>Add Scrap</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div>
                <CTable className="striped bordered">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell style={{ width: '10%' }}>Ingerdient</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Qty (ml/ gm)</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Rate</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Scrap %</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '15%' }}>Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableData.map((row, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{row.ingredient}</CTableDataCell>
                        <CTableDataCell>{row.qty}</CTableDataCell>
                        <CTableDataCell>{row.rate}</CTableDataCell>
                        <CTableDataCell>
                          {row.scrap === '' || row.status === 'update' ? (
                            <CFormInput
                              type="text"
                              name="scrap"
                              value={row.scrap}
                              onChange={(e) => handleInputChange(index, e)}
                              required
                            />
                          ) : (
                            <CFormInput
                              type="text"
                              name="scrap"
                              value={row.scrap}
                              onChange={(e) => handleInputChange(index, e)}
                              disabled
                            />
                          )}
                        </CTableDataCell>
                        <CTableDataCell>{row.actions}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
              <div className="row">
                <CCol xs={11}></CCol>
                <CCol xs={1} className="mt-0">
                  <CButton className="mt-4 mx-4 text-white" color="success" type="submit">
                    Save
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="l" visible={add_plant} onClose={() => AddPlantPop(false)}>
          <CModalHeader>
            <CModalTitle>Add Plant</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div>
                <CCol md={6} className="mt-2">
                  <CFormLabel>Choose Plant</CFormLabel>
                  <CFormSelect id="" value={selectplant} onChange={handlePlantChange}>
                    <option value="" disabled selected>
                      Choose Plant...
                    </option>
                    <option value="Test Plant1">Test Plant1</option>
                    <option value="Test Plant2">Test Plant2</option>
                    <option value="Test Plant3">Test Plant3</option>
                  </CFormSelect>

                  <CFormFeedback invalid>Please select a plant.</CFormFeedback>
                </CCol>
              </div>
              <div className="row">
                <CCol xs={11}></CCol>
                <CCol xs={1} className="mt-0 p-2">
                  <CButton className="mt-4 text-white" color="success" type="submit">
                    Save
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="lg" visible={viewpopup} onClose={() => viewDetails(false)}>
          <CModalHeader>
            <CModalTitle>View Details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <DataTable columns={view} data={viewdata} striped highlightOnHover pagination />
          </CModalBody>
        </CModal>
        <CModal size="lg" visible={showpopup} onClose={() => showCompletedview(false)}>
          <CModalHeader>
            <CModalTitle>View Details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <DataTable columns={view1} data={viewdata1} striped highlightOnHover pagination />
          </CModalBody>
        </CModal>
        {/* <DocsExample href="components/toast#color-schemes"> */}
        <CToast
          visible={visibleSm1}
          color="success"
          className="text-white"
          style={{ marginLeft: '65%' }}
        >
          <div className="d-flex">
            <CToastBody>Added Successfully....</CToastBody>
            <CToastClose className="me-2 m-auto" white onClick={() => setVisibleSm1(false)} />
          </div>
        </CToast>
        {/* </DocsExample> */}
        <CNav variant="tabs" role="tablist">
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 1}
              component="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              Pending
            </CNavLink>
          </CNavItem>
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 2}
              component="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Approved
            </CNavLink>
          </CNavItem>
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 3}
              component="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Rejected
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
            <CCard className="mb-4">
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable columns={columns} data={data} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
            <CCard className="mb-4">
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable
                  columns={completetable}
                  data={comp_data}
                  striped
                  highlightOnHover
                  pagination
                />
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 3}>
            <CCard className="mb-4">
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable columns={columns2} data={data2} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default Tables
