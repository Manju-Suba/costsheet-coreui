import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilTrash, cibTeamviewer } from '@coreui/icons'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CBadge,
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
  CFormSelect,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
  const [visible, setVisible] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXL1, setVisibleXL1] = useState(false)
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
  const columns = [
    {
      name: 'Sno',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'MaterialCode',
      selector: 'MaterialCode',
      sortable: true,
    },
    {
      name: 'No of Peices',
      selector: 'NoofPeices',
      sortable: true,
    },
    {
      name: 'Mrp Per Peice',
      selector: 'mrpperpeice',
      sortable: true,
    },
    {
      name: 'Primary Location',
      selector: 'primary_location',
      sortable: true,
    },
    {
      name: 'Secondary Location',
      selector: 'secondary_location',
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
      id: 1,
      MaterialCode: 'Mark',
      NoofPeices: 'Otto',
      mrpperpeice: '@mdo',
      primary_location: (
        <div>
          <CBadge color="warning">Cuddalore-chennai</CBadge>
        </div>
      ),
      secondary_location: (
        <div>
          <CBadge color="secondary">Chennai-Trichy</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleXL1(!visibleXL1)}
          >
            {' '}
            <CIcon icon={cibTeamviewer} />
          </button>
          <button className="btn btn-sm btn-danger mx-2 text-white">
            {' '}
            <CIcon icon={cilTrash} />
          </button>
        </div>
      ),
    },
    {
      id: 2,
      MaterialCode: 'Mark',
      NoofPeices: 'Otto',
      mrpperpeice: '@mdo',
      primary_location: (
        <div>
          <CBadge color="warning">Cuddalore-chennai</CBadge>
        </div>
      ),
      secondary_location: (
        <div>
          <CBadge color="secondary">Chennai-Trichy</CBadge>
          <br></br>
          <CBadge color="secondary">Chennai-pondy</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleXL1(!visibleXL1)}
          >
            {' '}
            <CIcon icon={cibTeamviewer} />
          </button>
          <button className="btn btn-sm btn-danger mx-2 text-white">
            {' '}
            <CIcon icon={cilTrash} />
          </button>
        </div>
      ),
    },
    {
      id: 3,
      MaterialCode: 'Mark',
      NoofPeices: 'Otto',
      mrpperpeice: '@mdo',
      primary_location: (
        <div>
          <CBadge color="warning">Cuddalore-chennai</CBadge>
        </div>
      ),
      secondary_location: (
        <div>
          <CBadge color="secondary">Chennai-Trichy</CBadge>
        </div>
      ),
      actions: (
        <div>
          <button
            className="btn btn-sm btn-primary text-white"
            onClick={() => setVisibleXL1(!visibleXL1)}
          >
            {' '}
            <CIcon icon={cibTeamviewer} />
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
          <CButton onClick={() => setVisibleXL(!visibleXL)}>
            <CIcon icon={cilPlus} />
            Add Product Info
          </CButton>
        </CCol>
      </div>

      <CCol xs={12}>
        {/* add */}
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
                <CFormLabel htmlFor="validationCustom01">Material Code</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom02">No of Pieces per Case</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom04">MRP Per Piece</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
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
        {/* edit */}
        <CModal size="xl" visible={visibleXL1} onClose={() => setVisibleXL1(false)}>
          <CModalHeader>
            <CModalTitle>Product Information</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Material Code</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom02">No of Pieces per Case</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom04">MRP Per Piece</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <hr className="mt-4"></hr>
              <h5 className="mt-0">Primary Location</h5>
              <div>
                <div className="row">
                  <CCol md={6} className="mt-1">
                    <CFormLabel>To location</CFormLabel>
                    <CFormSelect id="" value="">
                      <option disabled>Choose...</option>
                      <option>...</option>
                    </CFormSelect>
                    <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                  </CCol>
                  <CCol md={6} className="mt-1">
                    <CFormLabel>From Location</CFormLabel>
                    <CFormSelect id="" value="">
                      <option disabled>Choose...</option>
                      <option>...</option>
                    </CFormSelect>
                    <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                  </CCol>
                </div>
              </div>
              <hr className="mt-4"></hr>
              <h5 className="mt-0">Secondary Location</h5>
              <div>
                <div className="row">
                  <CCol md={6} className="mt-2">
                    <CFormLabel>To location</CFormLabel>
                    <CFormSelect id="" value="">
                      <option disabled>Choose...</option>
                      <option>...</option>
                    </CFormSelect>
                    <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                  </CCol>
                  <CCol md={6} className="mt-2">
                    <CFormLabel>From Location</CFormLabel>
                    <CFormSelect id="" value="">
                      <option disabled>Choose...</option>
                      <option>...</option>
                    </CFormSelect>
                    <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
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
            <strong></strong> <small>Existing Products</small>
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
