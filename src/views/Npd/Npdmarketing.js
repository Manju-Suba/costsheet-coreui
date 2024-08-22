import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { BackEndBaseLink } from '../../Constants/Global'
import { cilPlus, cilTrash, cilPencil, cibTeamviewer } from '@coreui/icons'
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
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CModalFooter,
  CTabContent,
  CTabPane,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [visible, setVisible] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXL1, setVisibleXL1] = useState(false)
  const [validated, setValidated] = useState(false)
  const [locations, setLocations] = useState([{ from: '', to: '' }])
  const [locations1, setLocations1] = useState([{ from: '', to: '' }])
  // primary
  const addLocation = () => {
    setLocations([...locations, { from: '', to: '' }])
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
    setLocations1([...locations1, { from: '', to: '' }])
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

  const [formData, setFormData] = useState({
    productName: '',
    fillVolume: '',
    uom: '',
    caseConfig: '',
    launchQty: '',
    distChannel: '',
    mrpPrice: '',
    rsMargin: '',
    ssMargin: '',
    primaryScheme: '',
    retailerMargin: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event, values) => {
    event.preventDefault()
    console.log('Form Data:', formData, locations, locations1)
    // const form = event.currentTarget
    // if (form.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation()
    // }

    // const postData = { email: username, password: password }
    // const url = BackEndBaseLink + `auth/save`
    // try {
    //   const response = await axios.post(url, postData, {
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(postData),
    //   })

    //   if (response.status === 200) {
    //     alert('save')
    //   } else {
    //     alert('error')
    //   }
    // } catch (error) {}
    // setValidated(true)
  }
  const columns = [
    {
      name: 'Sno',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'ProductName',
      selector: 'ProductName',
      sortable: true,
    },
    {
      name: 'FillVolume',
      selector: 'FillVolume',
      sortable: true,
    },
    {
      name: 'CaseConfiuration',
      selector: 'CaseConfiuration',
      sortable: true,
    },
    {
      name: 'LaunchQuantity',
      selector: 'LaunchQuantity',
      sortable: true,
    },
    {
      name: 'Dist. Channel',
      selector: 'distchannel',
      sortable: true,
    },
    {
      name: 'Mrp Per peice',
      selector: 'mrp_peice',
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
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
  const columns1 = [
    {
      name: 'Sno',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'ProductName',
      selector: 'ProductName',
      sortable: true,
    },
    {
      name: 'FillVolume',
      selector: 'FillVolume',
      sortable: true,
    },
    {
      name: 'CaseConfiuration',
      selector: 'CaseConfiuration',
      sortable: true,
    },
    {
      name: 'LaunchQuantity',
      selector: 'LaunchQuantity',
      sortable: true,
    },
    {
      name: 'Dist. Channel',
      selector: 'distchannel',
      sortable: true,
    },
    {
      name: 'Mrp Per peice',
      selector: 'mrp_peice',
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
      name: 'Retailer Margin',
      selector: 'retailmargin',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
    },
  ]
  const data1 = [
    {
      id: 1,
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
      rejected: (
        <div>
          <CBadge color="secondary">Volume</CBadge>
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
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
      rejected: (
        <div>
          <CBadge color="secondary">Mrp</CBadge>
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
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
      rejected: (
        <div>
          <CBadge color="secondary">Quantity</CBadge>
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
  const columns2 = [
    {
      name: 'Sno',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'ProductName',
      selector: 'ProductName',
      sortable: true,
    },
    {
      name: 'FillVolume',
      selector: 'FillVolume',
      sortable: true,
    },
    {
      name: 'CaseConfiuration',
      selector: 'CaseConfiuration',
      sortable: true,
    },
    {
      name: 'LaunchQuantity',
      selector: 'LaunchQuantity',
      sortable: true,
    },
    {
      name: 'Dist. Channel',
      selector: 'distchannel',
      sortable: true,
    },
    {
      name: 'Mrp Per peice',
      selector: 'mrp_peice',
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
  ]
  const data2 = [
    {
      id: 1,
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
    },
    {
      id: 2,
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
    },
    {
      id: 3,
      ProductName: 'Mark',
      FillVolume: 'Otto',
      CaseConfiuration: '@mdo',
      LaunchQuantity: '1222',
      distchannel: 'MT',
      mrp_peice: '1222',
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
    },
  ]
  return (
    <CRow>
      <div className="row">
        <CCol md={10}></CCol>
        <CCol md={2} className="mb-2">
          <CButton onClick={() => setVisibleXL(!visibleXL)}>
            <CIcon icon={cilPlus} />
            Add Product
          </CButton>
        </CCol>
      </div>
      <CCol xs={12}>
        {/* add product */}
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
                <CFormLabel htmlFor="productName">Product Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
                <CFormFeedback invalid>Please provide a valid product name.</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="fillVolume">Fill Volume</CFormLabel>
                <CFormInput
                  type="text"
                  id="fillVolume"
                  name="fillVolume"
                  value={formData.fillVolume}
                  onChange={handleInputChange}
                  required
                />
                <CFormFeedback invalid>Please provide a valid fill volume.</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="uom">Uom</CFormLabel>
                <CFormSelect id="uom" name="uom" value={formData.uom} onChange={handleInputChange}>
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="kg">kg</option>
                  <option value="ml">ml</option>
                </CFormSelect>
                <CFormFeedback invalid>Please provide a valid uom.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="caseConfig">Case Configuration</CFormLabel>
                <CFormInput
                  type="text"
                  id="caseConfig"
                  name="caseConfig"
                  value={formData.caseConfig}
                  onChange={handleInputChange}
                  required
                />
                <CFormFeedback invalid>Please provide a valid case configuration.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="launchQty">Launch Quantity</CFormLabel>
                <CFormInput
                  type="text"
                  id="launchQty"
                  name="launchQty"
                  value={formData.launchQty}
                  onChange={handleInputChange}
                  required
                />
                <CFormFeedback invalid>Please provide a valid launch qty.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="distChannel">Distributed Channel</CFormLabel>
                <CFormSelect
                  id="distChannel"
                  name="distChannel"
                  value={formData.distChannel}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="MT">MT</option>
                  <option value="KT">KT</option>
                </CFormSelect>
                <CFormFeedback invalid>Please provide a distributed channel.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="mrpPrice"> Mrp Price</CFormLabel>
                <CFormInput
                  type="text"
                  id="mrpPrice"
                  name="mrpPrice"
                  value={formData.mrpPrice}
                  onChange={handleInputChange}
                  required
                />
                <CFormFeedback invalid>Please provide a valid mrp price.</CFormFeedback>
              </CCol>
              <hr className="mt-4"></hr>
              <h5 className="mt-0">Primary Location</h5>
              <div>
                {locations.map((location, index) => (
                  <div key={index === 0 ? `first-row-${index}` : `row-${index}`} className="row">
                    <CCol md={5} className="mt-1">
                      <CFormLabel htmlFor={`fromLocation-${index}`}>From location</CFormLabel>
                      <CFormSelect
                        id={`fromLocation-${index}`}
                        name={`fromLocation-${index}`}
                        value={location.from}
                        onChange={(e) => handleLocationChange(index, 'from', e.target.value)}
                      >
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Chennai">Chennai</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid from location.</CFormFeedback>
                    </CCol>
                    <CCol md={5} className="mt-1">
                      <CFormLabel htmlFor={`toLocation-${index}`}>To Location</CFormLabel>
                      <CFormSelect
                        id={`toLocation-${index}`}
                        name={`toLocation-${index}`}
                        value={location.to}
                        onChange={(e) => handleLocationChange(index, 'to', e.target.value)}
                      >
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Cuddalore">Cuddalore</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid To location.</CFormFeedback>
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
                      <CFormLabel htmlFor={`secFromLocation-${index}`}>From location</CFormLabel>
                      <CFormSelect
                        id={`secFromLocation-${index}`}
                        value={location.from}
                        onChange={(e) => handleLocationChange1(index, 'from', e.target.value)}
                      >
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Cuddalore">Cuddalore</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid From location.</CFormFeedback>
                    </CCol>
                    <CCol md={5} className="mt-2">
                      <CFormLabel htmlFor={`secToLocation-${index}`}>To Location</CFormLabel>
                      <CFormSelect
                        id={`secToLocation-${index}`}
                        value={location.to}
                        onChange={(e) => handleLocationChange1(index, 'to', e.target.value)}
                      >
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Pondy">Pondy</option>
                      </CFormSelect>
                      <CFormFeedback invalid>Please provide a valid to location.</CFormFeedback>
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
                      <CFormLabel htmlFor="rsMargin">RS Margin %</CFormLabel>
                      <CFormInput
                        type="text"
                        id="rsMargin"
                        name="rsMargin[]"
                        value={formData.rsMargin}
                        onChange={handleInputChange}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid RS Margin%.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="ssMargin">SS Margin%</CFormLabel>
                      <CFormInput
                        type="text"
                        id="ssMargin"
                        name="ssMargin"
                        value={formData.ssMargin}
                        onChange={handleInputChange}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid SS Margin%.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="primaryScheme">Primary Scheme%</CFormLabel>
                      <CFormInput
                        type="text"
                        id="primaryScheme"
                        name="primaryScheme"
                        value={formData.primaryScheme}
                        onChange={handleInputChange}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid primary scheme.</CFormFeedback>
                    </CCol>
                    <CCol md={3} className="mt-2">
                      <CFormLabel htmlFor="retailerMargin">Retailer Margin%</CFormLabel>
                      <CFormInput
                        type="text"
                        id="retailerMargin"
                        name="retailerMargin"
                        value={formData.retailerMargin}
                        onChange={handleInputChange}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid retailer margin.</CFormFeedback>
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
        {/* edit product */}
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
                <DataTable columns={columns2} data={data2} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 3}>
            <CCard className="mb-4" style={{ width: '100%' }}>
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                <DataTable columns={columns1} data={data1} striped highlightOnHover pagination />
              </CCardBody>
            </CCard>
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default Tables
