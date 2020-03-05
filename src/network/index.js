import axios from 'axios'

export function request(options) {
  return new Promise((resolve, reject) => {
    const instance = new axios.create({
    })
    instance.interceptors.response.use(res => {
      return res.data
    })
    instance(options)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
