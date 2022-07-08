import axios from 'axios'

const instance = axios.create()
instance.defaults.timeout = 1000 * 60 * 24
instance.defaults.baseURL = ''

// instance.defaults.method = 'POST'
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8;'
instance.all = axios.all


instance.interceptors.request.use(config => {

  return config
});

instance.interceptors.response.use(response => {

  return response.data
});


export default instance;