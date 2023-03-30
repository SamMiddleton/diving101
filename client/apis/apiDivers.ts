import request from 'superagent'
import { Diver, DiverInfo } from '../../common/diver'

export function getAllDivers(): Promise<Diver[]> {
  return request.get('/api/v1/divers').then((res) => res.body)
}

export function updateDiver(diver: Diver): Promise<Diver> {
  return request.patch('/api/v1/divers/')
}
