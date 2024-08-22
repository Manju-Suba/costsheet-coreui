import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
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
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CModalFooter,
} from '@coreui/react'
const Tables = () => {
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleSm1, setVisibleSm1] = useState(false)
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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
      name: 'Actions',
      selector: 'Actions',
      sortable: true,
    },
  ]
  const data = [
    {
      SNo: 1,
      product: 'Milkshake',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Primary Freight
          </button>
          <button
            className="btn btn-sm btn-success mx-2 text-white"
            onClick={() => setVisibleSm1(!visibleSm1)}
          >
            {' '}
            Secondary Freight
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'Choclates',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Primary Freight
          </button>
          <button
            className="btn btn-sm btn-success mx-2 text-white"
            onClick={() => setVisibleSm1(!visibleSm1)}
          >
            {' '}
            Secondary Freight
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'Choc Milkshake',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Primary Freight
          </button>
          <button
            className="btn btn-sm btn-success mx-2 text-white"
            onClick={() => setVisibleSm1(!visibleSm1)}
          >
            {' '}
            Secondary Freight
          </button>
        </div>
      ),
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CModal size="lg" visible={visibleSm} onClose={() => setVisibleSm(false)}>
          <CModalHeader>
            <CModalTitle>Add Primary Freight</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">From Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">To Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Primary Freight</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>chennai</CTableDataCell>
                    <CTableDataCell>cuddalore</CTableDataCell>
                    <CTableDataCell>
                      <CFormInput type="text" id="validationCustom01" defaultValue="9.8" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>coimbatore</CTableDataCell>
                    <CTableDataCell>pondy</CTableDataCell>
                    <CTableDataCell>
                      <CFormInput
                        type="text"
                        id="validationCustom01"
                        defaultValue="10.2"
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <div className="row">
                <CCol xs={10}></CCol>
                <CCol xs={2} className="mt-0">
                  <CButton className="mt-4 mx-4" color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="lg" visible={visibleSm1} onClose={() => setVisibleSm1(false)}>
          <CModalHeader>
            <CModalTitle>Add Secondary Freight</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">From Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">To Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Primary Freight</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>chennai</CTableDataCell>
                    <CTableDataCell>cuddalore</CTableDataCell>
                    <CTableDataCell>
                      <CFormInput type="text" id="validationCustom01" defaultValue="9.8" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>coimbatore</CTableDataCell>
                    <CTableDataCell>pondy</CTableDataCell>
                    <CTableDataCell>
                      <CFormInput
                        type="text"
                        id="validationCustom01"
                        defaultValue="10.2"
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <div className="row">
                <CCol xs={10}></CCol>
                <CCol xs={2} className="mt-0">
                  <CButton className="mt-4 mx-4" color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>Freight Details </small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              {/* Use `striped` property to add zebra-striping to any table row within the `DataTable`. */}
            </p>
            {/* <DocsExample href="components/table#striped-rows"> */}
            <DataTable
              columns={columns}
              data={data}
              // customStyles={customStyles}
              striped
              highlightOnHover
              pagination
            />
            {/* </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
