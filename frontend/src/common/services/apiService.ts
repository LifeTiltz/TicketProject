const backendUrl = process.env.REACT_APP_BACKEND_URL + '/api'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type ReqOptions = {
  method: string
  headers: {
    'Content-Type': string
    Authorization?: string
  }
  body: string
}

const sendRequest = async (
  type: RequestMethod,
  path: string,
  body: any,
  isAuthenticated: boolean
) => {
  const options: ReqOptions = {
    method: type,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  if (isAuthenticated) {
    options.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  }
  return fetch(`${backendUrl}${path}`, options)
}

const apiServiceResponse = async (response: Response) => ({
  status: response.status,
  body: await response.json(),
})

export const apiService = {
  get: async (path: string, isAuthenticated = true) => {
    const response = await sendRequest('GET', path, null, isAuthenticated)
    return apiServiceResponse(response)
  },
  post: async (path: string, body: any, isAuthenticated = true) => {
    const response = await sendRequest('POST', path, body, isAuthenticated)
    return apiServiceResponse(response)
  },
  put: async (path: string, body: any, isAuthenticated = true) => {
    const response = await sendRequest('PUT', path, body, isAuthenticated)
    return apiServiceResponse(response)
  },
  delete: async (path: string, isAuthenticated = true) => {
    const response = await sendRequest('DELETE', path, null, isAuthenticated)
    return apiServiceResponse(response)
  },
}
