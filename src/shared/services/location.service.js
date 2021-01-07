import apiService from './api.service';

const resource = `locations`
const locationService = {
  list: () => apiService.get(`/${resource}`),
  details: (payload) => apiService.get(`/${resource}/${payload.id}`),
  add: (payload) => apiService.post(`/${resource}`, payload),
  update: (payload) => apiService.patch(`/${resource}/${payload.id}`, payload),
  delete: (payload) => apiService.delete(`/${resource}/${payload.id}`)
}

export default locationService
