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
      name: 'Material code',
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
      product: 'M00090923',
      Actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white"> View</button>
          <button className="btn btn-sm btn-danger mx-2 text-white"> Export</button>
        </div>
      ),
    },
    {
      SNo: 2,
      id: 2,
      product: 'M00090922',
      Actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white"> View</button>
          <button className="btn btn-sm btn-danger mx-2 text-white"> Export</button>
        </div>
      ),
    },
    {
      SNo: 3,
      id: 3,
      product: 'M00090924',
      Actions: (
        <div>
          <button className="btn btn-sm btn-primary text-white"> View</button>
          <button className="btn btn-sm btn-danger mx-2 text-white"> Export</button>
        </div>
      ),
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>EPD Cost sheet Approval </small>
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
