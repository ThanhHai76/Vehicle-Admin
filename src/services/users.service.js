import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'

export class UsersService extends BaseService {
  static get entity () {
    return 'users'
  }

  static async getCurrent () {
    try {
      const response = await this.request({ auth: true }).get(`${this.entity}/current`)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getListUser (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.user.get-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getDetailUser (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.user.get'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async updateUser (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.user.edit'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async changePassword (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.user.change-passwd'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async resetPassword (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.user.restart-passwd'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
