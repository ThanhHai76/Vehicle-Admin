<template>
  <div>
    <b-modal id="modalAdd" v-model="showModalEdit" centered size="lg" hide-footer>
      <template #modal-header="{ }">
        <!-- <b-button size="sm" class="float-right" variant="outline-secondary" @click="$emit('close')">
          x
        </b-button> -->
        <h5>Sửa {{ title }}</h5>
        <button
          type="button"
          class="close"
          @click="$emit('close')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <div>
          <b-tabs>
            <b-tab :title="title" active>
              <form action="#" class="mt-3" @submit.prevent="updateTransport">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.name" class="form-control" id="add-amount" placeholder="Nhập tên hãng" required>
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="editData.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="editData.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="number" v-model="editData.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
                              </div>
                          </div>
                          <div class="form-group">
                              <label class="form-label" for="add-amount">Trạng thái</label>
                              <div class="form-control-wrap">
                                  <b-form-select class="w-100" v-model="editData.status" :options="listStatus"></b-form-select>
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
            </b-tab>
          </b-tabs>
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
import { TransportService } from '@/services/transport.service'
export default {
  props: ['showModalEdit', 'editData', 'title'],
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
      ]
    }
  },
  methods: {
    async updateTransport () {
      try {
        const response = await TransportService.actionTransport({
          action: 'UPDATE',
          id: this.editData.id,
          name: this.editData.name,
          icon: this.editData.icon,
          priority: this.editData.priority
        })
        if (response.code === 1000) {
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