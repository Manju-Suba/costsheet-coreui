import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilTrash, cilPencil } from '@coreui/icons'
import {
  CCard,
  CCardBody,
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
  const [validated, setValidated] = useState(false)
  const [viewpopup, viewDetails] = useState(false)
  const [showpopup, showCompletedview] = useState(false)
  const [visibleSm1, setVisibleSm1] = useState(false)
  const [specificgravity, setspecificgravity] = useState([{ gravity: '' }])

  const [tableData, setTableData] = useState([])

  const addRow = () => {
    setTableData([
      ...tableData,
      { label: '', label_details: '', specification: '', qty: '', scrap: '' },
    ])
  }

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

  const handlechange = (e) => {
    setspecificgravity({ gravity: e.target.value })
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
      name: 'Rejected',
      selector: 'reject',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
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
      reject: (
        <div>
          <CBadge color="warning">Scrap</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white m-2 "
            onClick={() => {
              setVisiblePm(!visiblePm)
              setTableData([
                ...tableData,
                { label: '', label_details: '', specification: '', qty: '', scrap: '' },
              ])
            }}
          >
            Edit
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
      reject: (
        <div>
          <CBadge color="warning">Scrap</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white m-2"
            onClick={() => setVisiblePm(!visiblePm)}
          >
            {' '}
            Edit
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
      reject: (
        <div>
          <CBadge color="warning">Scrap</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white m-2"
            onClick={() => setVisiblePm(!visiblePm)}
          >
            {' '}
            Edit
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
      product: 'Rose Milk',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      status: (
        <div>
          <CBadge color="warning">Purchase team in progress</CBadge>,
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!viewpopup)}
          >
            View
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'Choclate',
      fillVolume: '100gm',
      caseConfig: '450',
      launchQty: '10000',
      status: (
        <div>
          <CBadge color="warning">Operation team in progress</CBadge>,
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!viewpopup)}
          >
            View
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'Strawberry Milkshake',
      fillVolume: '150ml',
      caseConfig: '300',
      launchQty: '2000',
      status: (
        <div>
          <CBadge color="warning">Operation team in progress</CBadge>,
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => showCompletedview(!viewpopup)}
          >
            View
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
      scrap: '31',
    },
    {
      SNo: 2,
      id: 2,
      ingredient: 'Oil',
      rate: '40',
      quantity: '450',
      scrap: '32',
    },
    {
      SNo: 3,
      id: 3,
      ingredient: 'Milk',
      rate: '50',
      quantity: '300',
      scrap: '33',
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
  const resetTableData = () => {
    setTableData([])

    setVisiblePm(false)
  }

  // Add a click event listener to the document to close the popup and remove rows
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!visiblePm) {
        // Popup is closed, handle removal of rows here
        resetTableData()
      }
    }
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [visiblePm])

  return (
    <CRow>
      <CCol xs={12}>
        <CModal size="xl" visible={visiblePm} onClose={() => setVisiblePm(false)}>
          <CModalHeader>
            <CModalTitle>Update rate</CModalTitle>
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
                      <CTableHeaderCell style={{ width: '20%' }}>SAP Code</CTableHeaderCell>
                      <CTableHeaderCell>Ingerdient</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Rate</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '15%' }}>Qty (ml/ gm)</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Scrap %</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '13%' }}></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableData.map((row, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label"
                            value={index === 0 ? 'test123q18' : row.label}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label_details"
                            value={index === 0 ? 'Test ingredient' : row.label_details}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="specification"
                            value={index === 0 ? '350' : row.specification}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="qty"
                            value={index === 0 ? '5000' : row.qty}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="scrap"
                            value={index === 0 ? '10' : row.scrap}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        {/* <CTableDataCell>
                          {index === tableData.length - 1 ? (
                            <CButton className="mt-2" color="primary" onClick={addRow}>
                              <CIcon icon={cilPlus} />
                            </CButton>
                          ) : index !== 0 ? (
                            <CButton
                              className="mt-2"
                              color="danger"
                              onClick={() => removeRow(index)}
                            >
                              <CIcon icon={cilTrash} />
                            </CButton>
                          ) : (
                            <CButton></CButton>
                          )}
                        </CTableDataCell> */}
                        <CTableDataCell>
                          {index === tableData.length - 1 && (
                            <CButton className="m-1" color="primary" onClick={addRow}>
                              <CIcon icon={cilPlus} />
                            </CButton>
                          )}
                          {index !== 0 && (
                            <CButton
                              className="m-1"
                              color="danger"
                              onClick={() => removeRow(index)}
                            >
                              <CIcon icon={cilTrash} />
                            </CButton>
                          )}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                    <CTableRow>
                      <CTableHeaderCell style={{ width: '20%' }}>Specific Gravity</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>
                        <CFormInput
                          type="text"
                          name="gravity"
                          value={specificgravity.gravity}
                          defaultValue="1.23"
                          onChange={handlechange}
                          required
                        />
                      </CTableDataCell>
                    </CTableRow>
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
                {/* <DataTable columns={columns} data={data} striped highlightOnHover pagination /> */}
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
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
            <CCard className="mb-4">
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable columns={columns2} data={data2} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 3}>
            <CCard className="mb-4">
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable columns={columns} data={data} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default Tables
