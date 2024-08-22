import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilTrash } from '@coreui/icons'
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
import { DocsExample } from 'src/components'

const columns = [
  {
    name: '#',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Class',
    selector: 'class',
    sortable: true,
  },
  {
    name: 'Heading',
    selector: 'heading1',
    sortable: true,
  },
  {
    name: 'Heading',
    selector: 'heading2',
    sortable: true,
  },
]
const data = [
  {
    id: 1,
    class: 'Mark',
    heading1: 'Otto',
    heading2: '@mdo',
  },
  {
    id: 2,
    class: 'Jacob',
    heading1: 'Thornton',
    heading2: '@fat',
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading1: 'Larry the Bird',
    heading2: '@twitter',
  },
]

const Tables = () => {
  const [visible, setVisible] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [validated, setValidated] = useState(false)
  const [locations, setLocations] = useState([{ to: '', from: '' }])
  const [locations1, setLocations1] = useState([{ to: '', from: '' }])
  // primary
  const addLocation = () => {
    setLocations([...locations, { to: '', from: '' }])
  }
  const removeLocation = (index) => {
    // Check if the row being removed is not the first row
    if (index !== 0) {
      const updatedLocations = [...locations]
      updatedLocations.splice(index, 1)
      setLocations(updatedLocations)
    } else {
      alert('You cannot remove the first row.')
    }
  }
  const handleLocationChange = (index, field, value) => {
    const updatedLocations = [...locations]
    updatedLocations[index][field] = value
    setLocations(updatedLocations)
  }
  // secondary
  const addLocation1 = () => {
    setLocations1([...locations1, { to: '', from: '' }])
  }
  const removeLocation1 = (index) => {
    // Check if the row being removed is not the first row
    if (index !== 0) {
      const updatedLocations = [...locations1]
      updatedLocations.splice(index, 1)
      setLocations1(updatedLocations)
    } else {
      alert('You cannot remove the first row.')
    }
  }
  const handleLocationChange1 = (index, field, value) => {
    const updatedLocations = [...locations1]
    updatedLocations[index][field] = value
    setLocations1(updatedLocations)
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CRow>
      <div className="row">
        <CCol md={10}></CCol>
        <CCol md={2} className="mb-2">
          <CButton onClick={() => setVisibleXL(!visibleXL)}>
            <CIcon icon={cilPlus} />
            Add Product Info
          </CButton>
        </CCol>
      </div>
      <CCol xs={12}>
        <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
          <CModalHeader>
            <CModalTitle>Add Product Information</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Product Name</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom02">Fill Volume</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom04">Uom</CFormLabel>
                <CFormSelect id="validationCustom04">
                  <option disabled>Choose...</option>
                  <option>...</option>
                </CFormSelect>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom03">Case Configuration</CFormLabel>
                <CFormInput type="text" id="validationCustom03" required />
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom03">Launch Quantity</CFormLabel>
                <CFormInput type="text" id="validationCustom03" required />
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom04">Mrp Price</CFormLabel>
                <CFormSelect id="validationCustom04">
                  <option disabled>Choose...</option>
                  <option>...</option>
                </CFormSelect>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom05">Distributed Channel</CFormLabel>
                <CFormInput type="text" id="validationCustom05" required />
                <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
              </CCol>
              <hr className="mt-4"></hr>
              <h5 className="mt-0">Primary Location</h5>
              <div>
                {locations.map((location, index) => (
                  <div key={index === 0 ? `first-row-${index}` : `row-${index}`} className="row">
                    <CCol md={5} className="mt-1">
                      <CFormLabel htmlFor={`toLocation-${index}`}>To location</CFormLabel>
                      <CFormSelect
                        id={`toLocation-${index}`}
                        value={location.to}
                        onChange={(e) => handleLocationChange(index, 'to', e.target.value)}
                      >
                        <option disabled>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={5} className="mt-1">
                      <CFormLabel htmlFor={`fromLocation-${index}`}>From Location</CFormLabel>
                      <CFormSelect
                        id={`toLocation-${index}`}
                        value={location.from}
                        onChange={(e) => handleLocationChange(index, 'to', e.target.value)}
                      >
                        <option disabled>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    {index === locations.length - 1 && (
                      <CCol md={1} className="mt-4">
                        <CButton className="mt-2" color="primary" onClick={addLocation}>
                          <CIcon icon={cilPlus} />
                        </CButton>
                      </CCol>
                    )}
                    <CCol md={1} className="mt-4">
                      {index !== 0 && (
                        <CButton
                          className="mt-2 mr-4"
                          color="danger"
                          onClick={() => removeLocation(index)}
                        >
                          <CIcon icon={cilTrash} />
                        </CButton>
                      )}
                    </CCol>
                  </div>
                ))}
              </div>
              <hr className="mt-4"></hr>
              <h5 className="mt-0">Secondary Location</h5>
              <div>
                {locations1.map((location, index) => (
                  <div key={index === 0 ? `first-row-${index}` : `row-${index}`} className="row">
                    <CCol md={5} className="mt-2">
                      <CFormLabel htmlFor={`toLocation-${index}`}>To location</CFormLabel>
                      <CFormSelect
                        id={`toLocation-${index}`}
                        value={location.to}
                        onChange={(e) => handleLocationChange1(index, 'to', e.target.value)}
                      >
                        <option disabled>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={5} className="mt-2">
                      <CFormLabel htmlFor={`fromLocation-${index}`}>From Location</CFormLabel>
                      <CFormSelect
                        id={`toLocation-${index}`}
                        value={location.from}
                        onChange={(e) => handleLocationChange1(index, 'to', e.target.value)}
                      >
                        <option disabled>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    {index === locations1.length - 1 && (
                      <CCol md={1} className="mt-4">
                        <CButton className="mt-3" color="primary" onClick={addLocation1}>
                          <CIcon icon={cilPlus} />
                        </CButton>
                      </CCol>
                    )}
                    <CCol md={1} className="mt-4">
                      {index !== 0 && (
                        <CButton
                          className="mt-3"
                          color="danger"
                          onClick={() => removeLocation1(index)}
                        >
                          <CIcon icon={cilTrash} />
                        </CButton>
                      )}
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="validationCustom03">RS Margin %</CFormLabel>
                      <CFormInput type="text" id="validationCustom03" required />
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="validationCustom03">SS Margin%</CFormLabel>
                      <CFormInput type="text" id="validationCustom03" required />
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="validationCustom03">Primary Scheme%</CFormLabel>
                      <CFormInput type="text" id="validationCustom03" required />
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="validationCustom03">Retailer Margin%</CFormLabel>
                      <CFormInput type="text" id="validationCustom03" required />
                      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                  </div>
                ))}
              </div>
              <div className="row mt-3">
                <CCol xs={11}></CCol>
                <CCol xs={1}>
                  <CButton color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>New Products</small>
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
