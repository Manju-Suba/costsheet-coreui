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
      name: 'Distributed Channel',
      selector: 'dist_channel',
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
      dist_channel: 'MT',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm1(!visibleSm1)}
          >
            {' '}
            <CIcon icon={cilPencil} />
          </button>
          <button className="btn btn-sm btn-danger mx-2 text-white">
            {' '}
            <CIcon icon={cilTrash} />
          </button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      dist_channel: 'ML',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm1(!visibleSm1)}
          >
            {' '}
            <CIcon icon={cilPencil} />
          </button>
          <button className="btn btn-sm btn-danger mx-2 text-white">
            {' '}
            <CIcon icon={cilTrash} />
          </button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      dist_channel: 'GT',
      Actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            <CIcon icon={cilPencil} />
          </button>
          <button className="btn btn-sm btn-danger mx-2 text-white">
            {' '}
            <CIcon icon={cilTrash} />
          </button>
        </div>
      ),
    },
  ]

  return (
    <CRow>
      <div className="row">
        <CCol md={10}></CCol>
        <CCol md={2} className="mb-2">
          <CButton onClick={() => setVisibleSm(!visibleSm)}>
            <CIcon icon={cilPlus} />
            Distributed Channel
          </CButton>
        </CCol>
      </div>
      <CCol xs={12}>
        <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
          <CModalHeader>
            <CModalTitle>Add Distributed Channel</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={8}>
                <CFormLabel htmlFor="validationCustom01"> Name</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="MT" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol xs={4} className="mt-4">
                <CButton className="mt-4" color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="sm" visible={visibleSm1} onClose={() => setVisibleSm1(false)}>
          <CModalHeader>
            <CModalTitle>Edit Distributed Channel</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={8}>
                <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="MT" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol xs={4} className="mt-4">
                <CButton className="mt-4" color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
            </CForm>
          </CModalBody>
        </CModal>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>Distributed Channel Details</small>
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
