import React, { useState } from 'react'
import axios from 'axios'
import { BackEndBaseLink } from '../../../Constants/Global'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CFormFeedback,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToastClose,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false)
  const [username, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const [visibleSm1, setVisibleSm1] = useState(false)

  function email(event) {
    setMobile(event.target.value)
  }

  function pword(event) {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event, values) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      const postData = { email: username, password: password }
      const url = BackEndBaseLink + `auth/login`
      try {
        const response = await axios.post(url, postData, {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        })

        if (response.status === 200) {
          setVisibleSm1(true)

          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('userData', JSON.stringify(response.data.data))
          var user = JSON.parse(localStorage.getItem('userData'))
          cookies.set('token', user.Token)
          setTimeout(() => {
            // if(user.dept == "Marketing"){
            //   if(user.role == "1"){
            //     // navigate('/dashboard')
            //   }else{
            //   }
            // }
            navigate('/dashboard')
          }, 3000)
        } else {
          Swal.fire({
            text: 'Login failed',
            icon: 'error',
          })
        }
      } catch (error) {
        Swal.fire({
          text: 'Email id and Password is incorrect',
          icon: 'error',
        })
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CToast visible={visibleSm1} color="success" className="text-white">
                    <div className="d-flex">
                      <CToastBody>Loggedin Successfully....</CToastBody>
                      <CToastClose
                        className="me-2 m-auto"
                        white
                        onClick={() => setVisibleSm1(false)}
                      />
                    </div>
                  </CToast>
                  {/* <CToast visible={visibleSm1} color="success" className="text-white">
                    <div className="d-flex">
                      <CToastBody>Loggedin Successfully....</CToastBody>
                      <CToastClose
                        className="me-2 m-auto"
                        white
                        onClick={() => setVisibleSm1(false)}
                      />
                    </div>
                  </CToast> */}
                  <br></br>
                  <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h2>Costsheet Automation</h2>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <br></br>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="email"
                        id="username"
                        onChange={email}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid user email.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={pword}
                        required
                      />
                      <CFormFeedback invalid>Please provide a valid password.</CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
