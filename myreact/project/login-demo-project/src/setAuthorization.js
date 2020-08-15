import axios from 'axios'
const setAuthorization = (token) => {
  if(token) {
    axios.defaults.headers.common['Authrization'] = `aiFei ${token}`
  }else {
    delete axios.defaults.headers.common['Authrization']
  }
}
export default setAuthorization