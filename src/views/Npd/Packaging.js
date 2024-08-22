import React, { useState } from 'react'
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
  const [visibleGst, setVisibleGst] = useState(false)
  const [visibleSm1, setVisibleSm1] = useState(false)

  const [tableData, setTableData] = useState([
    {
      label: '',
      label_details: '',
      specification: '',
      qty: '',
      scrap: '',
    },
  ])

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
    },
  ]
  const data = [
    {
      SNo: 1,
      product: 'Milkshake',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisiblePm(!visiblePm)}
          >
            Add
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
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisiblePm(!visiblePm)}
          >
            {' '}
            Add
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
            onClick={() => setVisiblePm(!visiblePm)}
          >
            {' '}
            Add
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
      product: 'Badam Milk',
      fillVolume: '50ml',
      caseConfig: '500',
      launchQty: '4500',
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleGst(!visibleGst)}
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
            onClick={() => setVisibleGst(!visibleGst)}
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
            onClick={() => setVisibleGst(!visibleGst)}
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
            <CModalTitle>Add PM Details</CModalTitle>
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
                      <CTableHeaderCell style={{ width: '20%' }}>PM</CTableHeaderCell>
                      <CTableHeaderCell>PM Details</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '25%' }}>PM Specification</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Qty</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Scrap</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '3%' }}></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableData.map((row, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label"
                            value={row.label}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label_details"
                            value={row.label_details}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="specification"
                            value={row.specification}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="qty"
                            value={row.qty}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="scrap"
                            value={row.scrap}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          {index === tableData.length - 1 ? (
                            <CButton className="mt-2" color="primary" onClick={addRow}>
                              <CIcon icon={cilPlus} />
                            </CButton>
                          ) : (
                            <CButton
                              className="mt-2"
                              color="danger"
                              onClick={() => removeRow(index)}
                            >
                              <CIcon icon={cilTrash} />
                            </CButton>
                          )}
                        </CTableDataCell>
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
        <CModal size="xl" visible={visibleGst} onClose={() => setVisibleGst(false)}>
          <CModalHeader>
            <CModalTitle>View Details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm className="row g-3 needs-validation">
              <div>
                <CTable className="striped bordered">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell style={{ width: '20%' }}>PM</CTableHeaderCell>
                      <CTableHeaderCell>PM Details</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '25%' }}>PM Specification</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Qty</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '10%' }}>Scrap</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableData.map((row, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label"
                            value={row.label}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="label_details"
                            value={row.label_details}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="specification"
                            value={row.specification}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="qty"
                            value={row.qty}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            name="scrap"
                            value={row.scrap}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </CForm>
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
              Add PM Details
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
              Completed Details
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
