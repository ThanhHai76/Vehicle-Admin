<template>
  <div>
    <b-modal id="modalAdd" v-model="showModalView" centered size="lg" hide-footer>
      <template #modal-header="{ }">
        <h5>Sửa thông tin tài khoản</h5>
        <button
          type="button"
          class="close"
          @click="$emit('close')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <div>
        <ValidationObserver ref="updateUser">
          <form action="#" @submit.prevent="updateUser">
                <div class="row g-gs">
                    <div class="col-md-12">
                        <!-- <ValidationProvider
                            rules="required"
                            vid="nameUser"
                            name="Tên tài khoản"
                          >
                          <div class="form-group mt-2" slot-scope="{ errors }">
                              <label class="form-label">Tên tài khoản</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="dataUser.username" class="form-control" placeholder="Nhập tên tài khoản" required>
                                  <p class="text-danger">{{ errors[0] }}</p>
                              </div>
                          </div>
                        </ValidationProvider> -->
                        <div class="form-group mt-2">
                            <label class="form-label">Tên đầy đủ</label>
                            <div class="form-control-wrap">
                                <input type="text" v-model="dataUser.fullName" class="form-control" placeholder="Nhập tên đầy đủ">
                            </div>
                        </div>
                        <ValidationProvider
                          rules="required|mail"
                          vid="emailUser"
                          name="Email"
                        >
                          <div class="form-group mt-2" slot-scope="{ errors }">
                              <label class="form-label">Email</label>
                              <div class="form-control-wrap">
                                  <input type="email" v-model="dataUser.email" class="form-control" placeholder="Nhập email" required>
                                  <p class="text-danger">{{ errors[0] }}</p>
                              </div>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider
                          rules="required|regexPhone"
                          vid="phoneUser"
                          name="Số điện thoại"
                        >
                          <div class="form-group mt-2" slot-scope="{ errors }">
                              <label class="form-label">Số điện thoại</label>
                              <div class="form-control-wrap">
                                  <input type="tel" v-model="dataUser.phone" class="form-control" placeholder="Nhập số điện thoại" required>
                                  <p class="text-danger">{{ errors[0] }}</p>
                              </div>
                          </div>
                        </ValidationProvider>
                        <div class="form-group mt-2">
                            <label class="form-label">Địa chỉ</label>
                            <div class="form-control-wrap">
                                <input type="text" v-model="dataUser.address" class="form-control" placeholder="Nhập địa chỉ">
                            </div>
                        </div>
                        <div class="form-group mt-2">
                            <label class="form-label">Loại tài khoản</label>
                            <div class="form-control-wrap">
                                <b-form-select class="w-100" v-model="dataUser.type" :options="listTypeUser"></b-form-select>
                            </div>
                        </div>
                        <div class="form-group mt-2">
                            <label class="form-label">Quyền tài khoản</label>
                            <div class="form-control-wrap">
                                <b-form-select class="w-100" v-model="dataUser.memberType" :options="listMemberType"></b-form-select>
                            </div>
                        </div>
                        <div class="form-group mt-2">
                            <label class="form-label">Trạng thái</label>
                            <div class="form-control-wrap">
                                <b-form-select class="w-100" v-model="dataUser.status" :options="listStatus"></b-form-select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <button type="submit" data-dismiss="modal" class="btn btn-primary">Cập nhật</button>
                        </div>
                    </div>
                </div>
          </form>
        </ValidationObserver>
      </div>
    </b-modal>

    <Notification
      :showModalNoti="showModalNoti"
      :notiSuccess="notiSuccess"
      :messNoti="messNoti"
      @close="showModalNoti = false"
    ></Notification>

  </div>
</template>

<script>
import { UsersService } from '@/services/users.service'
export default {
  props: ['showModalView', 'dataUser'],
  data () {
    return {
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      listMemberType: [
        { value: 'ROLE_USER', text: 'Tài khoản thường' },
        { value: 'ROLE_ADMIN', text: 'Tài khoản quản trị' }
      ],
      listStatus: [
        { value: 'NEW', text: 'Mới tạo' },
        { value: 'ACTIVE', text: 'Kích hoạt' },
        { value: 'BLOCK', text: 'Khoá' },
        { value: 'INACTIVE', text: 'Không kích hoạt' },
      ],
      listTypeUser: [
        { value: 'SALON', text: 'Salon' },
        { value: 'SHOWROOM', text: 'Showroom' },
        { value: 'INDIVIDUAL', text: 'Cá nhân' },
      ]
    }
  },
  methods: {
    async updateUser () {
      try {
        const isSuccess = await this.$refs.updateUser.validate()
        if (!isSuccess) return
        const response = await UsersService.updateUser(this.dataUser)
        if (response.code === 1000) {
          this.$emit('close')
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Cập nhật thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.$emit('reloadList')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
::v-deep(.nav-tabs .nav-link), ::v-deep(.form-label, .modal-header h5){
  color: black !important ;
}
</style>