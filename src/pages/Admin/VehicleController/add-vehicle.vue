<template>
 <div class="nk-wrap">
    <!-- Header -->
    <div class="nk-header nk-header-fixed is-light">
      <div class="container-fluid">
          <div class="nk-header-wrap">
              <div class="nk-menu-trigger d-xl-none ml-n1">
                  <a href="#" @click="showSidebar()" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
              </div>
              <div class="nk-header-brand d-xl-none">
                  <a href="html/index.html" class="logo-link">
                      <img class="logo-light logo-img" src="@/assets/auth-css/images/logo.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                      <img class="logo-dark logo-img" src="@/assets/auth-css/images/logo-dark.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
                  </a>
              </div><!-- .nk-header-brand -->
              <div class="nk-header-news d-none d-xl-block">
                  <div class="nk-news-list">
                      <a class="nk-news-item" href="#">
                          <div class="nk-news-icon">
                              <em class="icon ni ni-card-view"></em>
                          </div>
                      </a>
                  </div>
              </div><!-- .nk-header-news -->
              <div class="nk-header-tools">
                  <ul class="nk-quick-nav">
                      <b-dropdown class="dropdown user-dropdown" variant="link">
                        <template #button-content>
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                              <div class="user-toggle">
                                  <div class="user-avatar sm">
                                      <em class="icon ni ni-user-alt"></em>
                                  </div>
                                  <div class="user-info d-none d-md-block">
                                      <div class="user-status">Administrator</div>
                                      <div class="user-name dropdown-indicator">{{ dataUser.username }}</div>
                                  </div>
                              </div>
                          </a>
                        </template>
                        <b-dropdown-item href="#">
                          <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                              <div class="user-card">
                                  <div class="user-avatar">
                                      <span>AB</span>
                                  </div>
                                  <div class="user-info">
                                      <span class="lead-text">{{ dataUser.username }}</span>
                                      <span class="sub-text">{{ dataUser.email }}</span>
                                  </div>
                              </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          <div class="dropdown-inner">
                              <ul class="link-list">
                                  <li><a href="#" @click="goBackHome"><em class="icon ni ni-home"></em><span>Trang chủ</span></a></li>
                              </ul>
                          </div>
                          <div class="dropdown-inner">
                              <ul class="link-list">
                                  <li><a href="javascript:void(0)" @click="logout()"><em class="icon ni ni-signout"></em><span>Đăng xuất</span></a></li>
                              </ul>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                      <li class="dropdown notification-dropdown mr-n1">
                          <a href="#" class="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                              <div class="icon-status icon-status-info"><em class="icon ni ni-bell"></em></div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                              <div class="dropdown-head">
                                  <span class="sub-title nk-dropdown-title">Notifications</span>
                                  <a href="#">Mark All as Read</a>
                              </div>
                              <div class="dropdown-body">
                                  <div class="nk-notification">
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                  </div><!-- .nk-notification -->
                              </div><!-- .nk-dropdown-body -->
                              <div class="dropdown-foot center">
                                  <a href="#">View All</a>
                              </div>
                          </div>
                      </li><!-- .dropdown -->
                  </ul><!-- .nk-quick-nav -->
              </div><!-- .nk-header-tools -->
          </div><!-- .nk-header-wrap -->
      </div><!-- .container-fliud -->
    </div>
    
    <div class="nk-content ">
        <div class="container-fluid">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <div class="nk-block-head">
                        <div class="nk-block-between g-3">
                            <div class="nk-block-head-content">
                                <h3 class="nk-block-title page-title">Thêm phương tiện</h3>
                            </div><!-- .nk-block-head-content -->
                        </div><!-- .nk-block-between -->
                    </div><!-- .nk-block-head -->
                    <div class="nk-block nk-block-lg">
                        <div class="row g-gs">
                            <div class="col-lg-6">
                                <div class="card card-bordered h-100">
                                    <div class="card-inner">
                                        <div class="card-head">
                                            <h5 class="card-title">Thông tin phương tiện</h5>
                                        </div>
                                        <form @submit.prevent="submitAddVehicle()">
                                            <div class="form-group">
                                                <label class="form-label" for="full-name">Tên</label>
                                                <div class="form-control-wrap">
                                                    <input v-model="dataAddVehicle.titleSell" type="text" class="form-control" id="full-name">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="phone-no">Năm sản xuất</label>
                                                <div class="form-control-wrap">
                                                    <input type="text" v-model="dataAddVehicle.manufactureYear" class="form-control" id="phone-no">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Giá</label>
                                                <div class="form-control-wrap">
                                                    <input v-model="dataAddVehicle.price" type="text" class="form-control" id="pay-amount">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-lg btn-primary">Xác nhận</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card card-bordered h-100">
                                    <div class="card-inner">
                                        <div class="card-head">
                                            <h5 class="card-title">Ảnh</h5>
                                        </div>
                                        <form action="#">
                                            <div class="form-group">
                                                <label class="form-label" for="cf-default-textarea">Ảnh phương tiện</label>
                                                <div class="form-control-wrap">
                                                    <div class="d-flex justify-content-between">
                                                      <!-- <input
                                                        @input="onSelectFileAvatar"
                                                        ref="fileInput"
                                                        type="file"
                                                        :disabled="isSelectedImage"
                                                      /> -->
                                                      <b-form-file
                                                        @input="onSelectFileAvatar"
                                                        ref="fileInput"
                                                        v-model="avatarImageSelected"
                                                        accept="image/*"
                                                        style="max-width: 15rem"
                                                        placeholder="Chọn ảnh phương tiện"
                                                        :disabled="isSelectedImage"
                                                      ></b-form-file>
                                                      <ul class="form-avatar">
                                                        <li v-for="(item, index) in avatarImage" :key="index">
                                                          <span @click="removeAvatarImg" class="cancel-image position-absolute"><b-icon icon="x-square"></b-icon></span>
                                                          <img :src="item" alt="">
                                                        </li>
                                                      </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="cf-default-textarea">Ảnh phụ</label>
                                                <div class="form-control-wrap">
                                                  <div class="d-flex justify-content-between">
                                                      <b-form-file
                                                        @input="onSelectFileSubAvatar"
                                                        ref="fileInputSubavatar"
                                                        v-model="subavatarImageSelected"
                                                        style="max-width: 15rem"
                                                        accept="image/*"
                                                        placeholder="Chọn ảnh phụ"
                                                        :disabled="isSelectedSubImage"
                                                      ></b-form-file>
                                                      <ul class="form-avatar">
                                                        <li v-for="(item, index) in subavatarImage" :key="index">
                                                          <span @click="removeSubAvatarImg" class="cancel-image position-absolute"><b-icon icon="x-square"></b-icon></span>
                                                          <img :src="item" alt="">
                                                        </li>
                                                      </ul>
                                                  </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- .nk-block -->
                </div>
            </div>
        </div>

        <Notification
          :showModalNoti="showModalNoti"
          :notiSuccess="notiSuccess"
          :messNoti="messNoti"
          @close="showModalNoti = false"
        ></Notification>

    </div>
    
 </div>
</template>

<script>
import EventBus from '../Components/EventBus'
import { VehicleService } from '@/services/vehicle.service'
import { ConfigService } from '@/services/config.service'
import { TransportService } from '@/services/transport.service'
import addVehicle from '../Components/Modal/addListVehicle.vue'
export default {
  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      dataListParams: [],
      configRange: {},
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      showModalAdd: false,
      search: {
        page: 1,
        limit: 20,
        total: 0
      },
      transportSelected: null,
      selectedTransport: null,
      transportOptions: [
        { value: null, text: 'Chọn phương tiện' },
        { value: 'transport_car', text: 'Ô tô' },
        { value: 'transport_motorcycle', text: 'Xe máy' },
        { value: 'transport_bicycle', text: 'Xe đạp' },
      ],
      dataListTransport: [],
      dataSpecificationColumn: [],
      formData: new FormData(),
      avatarFormData: null,
      avatarImage: [],
      isSelectedImage: false,
      avatarImageSelected: null,

      subavatarFormData: null,
      subavatarImage: [],
      isSelectedSubImage: false,
      subavatarImageSelected: null,
      dataAddVehicle: {}
    }
  },

  components: {
    addVehicle
  },

  async mounted () {

  },

  methods: {
    async logout () {
      await this.$store.dispatch('user/clear')
      this.$store.dispatch('auth/logout')
      window.location.href = '/login'
    },
    goBackHome () {
      window.location.href = process.env.VUE_APP_DOMAIN
    },
    showSidebar () {
      EventBus.$emit('showSidebar', true);
    },

    async submitAddVehicle () {
      try {
        await this.uploadImg()
        await this.uploadSubAvatarImg()
        const response = await VehicleService.createVehicle(this.dataAddVehicle)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    async onSelectFileAvatar () {
      const input = this.$refs.fileInput
      const files = input.files

      this.formData = new FormData()

      this.formData.append('fileData', files[0])
      this.formData.append('folder', 'vehicleAvatar')
      this.avatarFormData = this.formData

      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.avatarImage = [e.target.result]
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
      this.isSelectedImage = true
    },

    async onSelectFileSubAvatar () {

      const input = this.$refs.fileInputSubavatar
      const files = input.files

      const formData = new FormData()

      formData.append('fileData', files[0])
      formData.append('folder', 'vehicleAvatar')
      this.subavatarFormData = formData

      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.subavatarImage = [e.target.result]
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
      this.isSelectedSubImage = true
    },

     async uploadImg () {
      try {
        await ConfigService.uploadImg(this.avatarFormData).then((res) => {
          if (res.code === 1000) {
            this.dataAddVehicle.avatar = res.data.upload_success_1
          }
        }).catch((error) => {
          console.log(error)
          alert('Đã có lỗi xảy khi upload ảnh')
        })
      } catch (error) {
        console.log('add img reader', error)
      }
    },

     async uploadSubAvatarImg () {
      try {
        await ConfigService.uploadImg(this.subavatarFormData).then((res) => {
          if (res.code === 1000) {
            this.dataAddVehicle.subAvatar = res.data.upload_success_1
          }
        }).catch((error) => {
          console.log(error)
          alert('Đã có lỗi xảy khi upload ảnh')
        })
      } catch (error) {
        console.log('add img reader', error)
      }
    },

    removeAvatarImg () {
      this.avatarImage = []
      this.avatarImageSelected = null
      this.isSelectedImage = false
    },

    removeSubAvatarImg () {
      this.subavatarImage = []
      this.subavatarImageSelected = null
      this.isSelectedSubImage = false
    }

  }
}
</script>

<style scoped>
.form-avatar {
  max-width: 10rem;
}
.cancel-image {
  cursor: pointer;
  right: 0;
  top: -2px;
  color: black;
}
.cancel-image svg {
  background: #fff;
}
</style>