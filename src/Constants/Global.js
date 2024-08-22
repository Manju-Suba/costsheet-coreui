//BackEnd API
const BackEndBaseLink = 'http://localhost:8084/api/'

export { BackEndBaseLink }
export const getToken = () => {
  const tokenString = localStorage.getItem('userData')
  return tokenString ? JSON.parse(tokenString) : null
}

export const getHeaders = () => {
  const tokenInfo = getToken() // Call getToken to get the token
  const token = tokenInfo.Token

  if (token) {
    // If a token exists, include it in the headers
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust the content type if needed
    }
  } else {
    // If no token exists, return headers without Authorization
    return {
      'Content-Type': 'application/json',
    }
  }
}
