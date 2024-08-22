import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { getHeaders, getToken, BackEndBaseLink } from '../../Constants/Global'
import '../../components/common.css'
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
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CModalFooter,
} from '@coreui/react'
const Tables = () => {
  const [visibleSm, setVisibleSm] = useState(false)
  const [openEditpop, setOpenEditpop] = useState(false)
  const [validated, setValidated] = useState(false)
  const [visibleToast, setToastVisible] = useState(false)
  const [errorMessageVisible, setErrorMessageVisible] = useState(false)
  const [dataSource, setDataSource] = useState([])

  const [uom, setFormData] = useState('')
  const [edituom, setEditData] = useState('')

  function handleInputUom(event) {
    setFormData(event.target.value)
  }

  function handleEditUom(event) {
    setEditData(event.target.value)
  }

  useEffect(() => {
    const Token = getToken()
    handleGetData()
  }, [])

  const handleGetData = async (event) => {
    const dburl = BackEndBaseLink + `masters/view_uom`
    const response = await axios.get(dburl, {
      headers: {
        Authorization: getToken().token,
        'Content-Type': 'application/json',
      },
    })
    if (response.data.status === true) {
      const data2 = response.data.data
      setDataSource(data2)
    } else {
      console.error('Request was not successful:', response)
    }
  }

  const handleFormSubmit = async (event, values) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      const url = BackEndBaseLink + `masters/create_uom`
      const name = uom

      try {
        const response = await axios.get(url, {
          params: { name },
          headers: {
            Authorization: getToken().token,
            'Content-Type': 'application/json',
          },
        })

        if (response.data.status === true) {
          setVisibleSm(false)
          handleGetData()
          setToastVisible(true)
          setTimeout(() => {
            setToastVisible(false)
          }, 3000)
        } else {
          setErrorMessageVisible(true)
          setTimeout(() => {
            setErrorMessageVisible(false)
          }, 3000)
        }
      } catch (error) {
        setErrorMessageVisible(true)
        setTimeout(() => {
          setErrorMessageVisible(false)
        }, 3000)
      }
    }
  }

  const columns = [
    {
      name: 'S.no',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'UOM',
      selector: 'uomname',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <CButton color="primary" size="sm" onClick={() => handleEdit(row)}>
            <CIcon icon={cilPencil} />
          </CButton>
          <CButton
            className="text-white mx-1"
            color="danger"
            size="sm"
            onClick={() => handleDelete(row)}
          >
            <CIcon icon={cilTrash} />
          </CButton>
        </div>
      ),
    },
  ]

  const handleEdit = async (row) => {
    const url = BackEndBaseLink + 'masters/get_uom'
    try {
      const response = await axios.get(url, {
        params: { id: row.id }, // Pass the ID as a parameter
        headers: {
          Authorization: getToken().token,
          'Content-Type': 'application/json',
        },
      })

      if (response.data.status === true) {
        setEditData(response.data.data.uomname)
        setOpenEditpop(true)
        // console.log(response.data.data.uomname)
      } else {
        console.error('Edit request was not successful:', response)
      }
    } catch (error) {
      console.error('Error while editing:', error)
    }
  }

  const handleDelete = (row) => {
    // Implement your delete action here
    console.log(`Delete action for ID: ${row.id}`)
  }

  return (
    <CRow>
      <CToast
        visible={visibleToast}
        color="success"
        className="text-white"
        style={{ marginLeft: '65%', marginBottom: '8px' }}
      >
        <div className="d-flex">
          <CToastBody>Added Successfully....</CToastBody>
          <CToastClose className="me-2 m-auto" white onClick={() => setToastVisible(false)} />
        </div>
      </CToast>
      <div className="row">
        <CCol md={10}></CCol>
        <CCol md={2} className="mb-2">
          <CButton onClick={() => setVisibleSm(!visibleSm)}>
            <CIcon icon={cilPlus} />
            Add Uom
          </CButton>
        </CCol>
      </div>
      <CCol xs={12}>
        <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
          <CModalHeader>
            <CModalTitle>Add Uom</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleFormSubmit}
            >
              <CCol md={8}>
                <CFormLabel htmlFor="name">UOM</CFormLabel>
                <CFormInput type="text" id="uom" onChange={handleInputUom} required />
                <CFormFeedback invalid>Please fill uom field.</CFormFeedback>
              </CCol>
              <CCol xs={4} className="mt-4">
                <CButton className="mt-4" color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
              <CCol md={8}>
                <div
                  id="errormessage"
                  className={errorMessageVisible ? 'error-message show' : 'error-message'}
                  style={{ color: 'red' }}
                >
                  Something Error!
                </div>
              </CCol>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="sm" visible={openEditpop} onClose={() => setOpenEditpop(false)}>
          <CModalHeader>
            <CModalTitle>Update UOM</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleFormSubmit}
            >
              <CCol md={10}>
                <CFormLabel htmlFor="edituom">UOM</CFormLabel>
                <CFormInput
                  type="text"
                  id="edituom"
                  value={edituom}
                  onChange={handleEditUom}
                  required
                />
                <CFormFeedback invalid>Please fill uom field.</CFormFeedback>
              </CCol>
              <CCol md={6}></CCol>
              <CCol md={4} className="mt-1">
                <CButton className="mt-4" color="primary" type="submit">
                  Update
                </CButton>
              </CCol>
            </CForm>
          </CModalBody>
        </CModal>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>Uom Details</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              {/* Use `striped` property to add zebra-striping to any table row within the `DataTable`. */}
            </p>
            {/* <DocsExample href="components/table#striped-rows"> */}
            <DataTable
              keyField="id"
              data={dataSource}
              columns={columns}
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
