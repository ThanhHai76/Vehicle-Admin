<template>
  <div>
    <b-modal :title="title" header-bg-variant="light" id="modalAdd" v-model="showModalAdd" centered hide-footer>
      <!-- <template #modal-header="{ }">
        <h5>{{ title }}</h5>
        <button
          type="button"
          class="close"
          @click="$emit('close')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template> -->
      <div>
          <form action="#" @submit.prevent="submitAction">
            <div class="row g-gs">
                <div class="col-md-12">
                    <div class="form-group mt-2">
                        <label class="form-label" for="add-amount">Tên</label>
                        <div class="form-control-wrap">
                            <input type="text" v-model="editData.fullName" class="form-control" placeholder="Nhập tên" required>
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="add-amount">Số điện thoại</label>
                        <div class="form-control-wrap">
                          <input class="form-control" v-model="editData.phone" type="text" placeholder="Nhập số điện thoại">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="add-amount">Địa chỉ</label>
                        <div class="form-control-wrap">
                            <input type="text" v-model="editData.address" class="form-control" placeholder="Nhập địa chỉ">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="add-amount">Loại showroom</label>
                        <div class="form-control-wrap">
                            <b-form-select class="w-100" v-model="editData.typeSellers" :options="listTypeSellers"></b-form-select>
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
import { VehicleService } from '@/services/vehicle.service'
export default {
  props: ['showModalAdd', 'title', 'editData'],
  data () {
    return {
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      listStatus: [
        { value: null, text: 'Chọn trạng thái' },
        { value: 'NEW', text: 'Mới' },
        { value: 'ACTIVE', text: 'Hoạt động' },
        { value: 'LOCK', text: 'Khoá' },
      ],
      listTypeSellers: [
        { value: null, text: 'Chọn loại showroom' },
      ]
    }
  },
  methods: {
    async submitAction () {
      try {
        const response = await VehicleService.createVehicleSeller(this.editData)
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Thêm thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.$emit('reloadList')
      } catch (error) {
        console.log(error)
      } finally {
        this.$emit('close')
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