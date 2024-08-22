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
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CModalFooter,
} from '@coreui/react'
const Tables = () => {
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleGst, setVisibleGst] = useState(false)
  const [visibleSm1, setVisibleSm1] = useState(false)
  const [validated, setValidated] = useState(false)
  const [activeKey, setActiveKey] = useState(1)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      setVisibleSm(false)
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
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Add GST
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
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Add GST
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
            onClick={() => setVisibleSm(!visibleSm)}
          >
            {' '}
            Add GST
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
        <CModal size="md" visible={visibleSm} onClose={() => setVisibleSm(false)}>
          <CModalHeader>
            <CModalTitle>GST</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={6}>
                <CFormLabel htmlFor="validationCustom01">Sales Tax/ GST %</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  placeholder="--"
                  minLength="2"
                  maxLength="2"
                  required
                />
                <CFormFeedback invalid>Sales Tax/ GST be a 2 digit value.</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="validationCustom02">HSN Code</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom02"
                  placeholder="---- ----"
                  minLength="8"
                  maxLength="8"
                  required
                />
                <CFormFeedback invalid>HSN Code must be 8 characters long</CFormFeedback>
              </CCol>
              <div className="row">
                <CCol xs={9}></CCol>
                <CCol xs={2} className="mt-0">
                  <CButton className="mt-4 mx-4" color="primary" type="submit">
                    Save
                  </CButton>
                </CCol>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
        <CModal size="md" visible={visibleGst} onClose={() => setVisibleGst(false)}>
          <CModalHeader>
            <CModalTitle>GST</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={6}>
                <CFormLabel>Sales Tax/ GST %</CFormLabel>
                <CFormInput type="text" id="sales_gst" defaultValue="30" disabled />
              </CCol>
              <CCol md={6}>
                <CFormLabel>HSN Code</CFormLabel>
                <CFormInput type="text" id="hsn_code" defaultValue="56FG67O6" disabled />
              </CCol>
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
              aria-controls="contact-tab-pane"
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
              {/*table starts here------*/}
              <CCardHeader>
                <strong></strong> <small>GST Pending Details </small>
              </CCardHeader>
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                {/* <DocsExample href="components/table#striped-rows"> */}
                <DataTable columns={columns} data={data} striped highlightOnHover pagination />
                {/* </DocsExample> */}
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
            <CCard className="mb-4">
              {/*table starts here------*/}
              <CCardHeader>
                <strong></strong> <small>GST Approved Details </small>
              </CCardHeader>
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                {/* <DocsExample href="components/table#striped-rows"> */}
                <DataTable columns={columns2} data={data2} striped highlightOnHover pagination />
                {/* </DocsExample> */}
              </CCardBody>
            </CCard>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="contact-tab-pane" visible={activeKey === 3}>
            <CCard className="mb-4">
              {/*table starts here------*/}
              <CCardHeader>
                <strong></strong> <small>GST Rejected Details </small>
              </CCardHeader>
              <CCardBody>
                <p className="text-medium-emphasis small"></p>
                {/* <DocsExample href="components/table#striped-rows"> */}
                <DataTable columns={columns2} data={data2} striped highlightOnHover pagination />
                {/* </DocsExample> */}
              </CCardBody>
            </CCard>
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default Tables
