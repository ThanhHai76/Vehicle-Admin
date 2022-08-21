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
                                  <li><a href="javascript:void(0)" @click="$router.push('/change-password')">
                                  <b-icon class="mr-2" icon="key"></b-icon> 
                                  <span>Đổi mật khẩu</span></a></li>
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
                                <h3 class="nk-block-title page-title">Sửa phương tiện</h3>
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
                                        <form @submit.prevent="submitEditVehicle()">
                                            <!-- <div class="form-group">
                                                <label class="form-label" for="pay-amount">Phương tiện</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select
                                                      class="select-box"
                                                      v-model="dataSelectVehicle.vehicleCode"
                                                      :options="transportOptions"
                                                      @change="getListBrand"
                                                    >
                                                    </b-form-select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Hãng</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select
                                                      class="select-box"
                                                      v-model="dataSelectVehicle.company"
                                                      :options="companyOptions"
                                                      @change="getListSeries"
                                                    >
                                                    </b-form-select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Series</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select
                                                      class="select-box"
                                                      v-model="dataSelectVehicle.series"
                                                      :options="seriesOptions"
                                                      @change="getListModel"
                                                    >
                                                    </b-form-select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Model</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select
                                                      class="select-box"
                                                      v-model="dataSelectVehicle.model"
                                                      :options="modelOptions"
                                                      @change="changeModel"
                                                    >
                                                    </b-form-select>
                                                </div>
                                            </div> -->
                                            <div class="form-group">
                                                <label class="form-label" for="full-name">Tên</label>
                                                <div class="form-control-wrap">
                                                    <input v-model="dataAddVehicle.titleSell" type="text" class="form-control" id="full-name">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Tỉnh thành</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select
                                                      class="select-box"
                                                      v-model="dataAddVehicle.codeCity"
                                                      :options="provinceOptions"
                                                    >
                                                    </b-form-select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Trạng thái</label>
                                                <div class="form-control-wrap">
                                                    <b-form-select class="w-100" v-model="dataAddVehicle.status" :options="listStatus"></b-form-select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="phone-no">Người bán</label>
                                                <div class="form-control-wrap">
                                                    <input type="text" v-model="dataAddVehicle.idVehicleSellers" class="form-control" >
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="phone-no">Năm sản xuất</label>
                                                <div class="form-control-wrap">
                                                    <input type="number" min="2010" max="2023" v-model.number="dataAddVehicle.manufactureYear" class="form-control" >
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Giá bán</label>
                                                <div class="form-control-wrap">
                                                    <input v-model.number="dataAddVehicle.price" type="number" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Số ghế</label>
                                                <div class="form-control-wrap">
                                                    <input v-model.number="dataAddVehicle.numberSell" min="1" max="20" type="number" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Số dặm</label>
                                                <div class="form-control-wrap">
                                                    <input v-model.number="dataAddVehicle.odometer" type="number" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Độ ưu tiên</label>
                                                <div class="form-control-wrap">
                                                    <input v-model.number="dataAddVehicle.priority" type="number" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="pay-amount">Chi tiết mô tả</label>
                                                <div class="form-control-wrap">
                                                    <vue-editor v-model="dataAddVehicle.description"></vue-editor>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <button @click="submitEditVehicle" type="submit" class="btn btn-lg btn-primary">Xác nhận</button>
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
                                                      <b-form-file
                                                        @input="onSelectFileAvatar()"
                                                        ref="fileInput"
                                                        v-model="avatarImageSelected"
                                                        accept="image/*"
                                                        style="max-width: 15rem"
                                                        placeholder="Chọn ảnh phương tiện"
                                                        :disabled="isSelectedImage || avatarImage"
                                                      ></b-form-file>
                                                      <ul class="form-avatar">
                                                        <li>
                                                          <span @click="removeAvatarImg" class="cancel-image position-absolute"><b-icon icon="x-square"></b-icon></span>
                                                          <img :src="avatarImage" alt="">
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
                                                        @input="onSelectFileSubAvatar()"
                                                        ref="fileInputSubavatar"
                                                        v-model="subavatarImageSelected"
                                                        style="max-width: 15rem"
                                                        accept="image/*"
                                                        placeholder="Chọn ảnh phụ"
                                                        :disabled="isSelectedSubImage || dataAddVehicle.subAvatar"
                                                      ></b-form-file>
                                                      <ul class="form-avatar">
                                                        <li>
                                                          <span @click="removeSubAvatarImg" class="cancel-image position-absolute"><b-icon icon="x-square"></b-icon></span>
                                                          <img :src="dataAddVehicle.subAvatar" alt="">
                                                        </li>
                                                      </ul>
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="cf-default-textarea">Ảnh chi tiết của phương tiện</label>
                                                <div class="form-group row img-list">
                                                    <ul>
                                                      <li class="d-flex justify-content-end" v-for="(item, index) in listImageDetails" :key="index">
                                                        <a href="javascript:void(0)">
                                                          <img :src="item" alt="">
                                                          <span class="trash-list-image position-absolute" @click="removeImgDetail(index)"><b-icon icon="trash"></b-icon></span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <div class="add-img">
                                                          <span class="bx bx-plus text-center"></span>
                                                          <input
                                                            @input="onSelectListImageDetail()"
                                                            ref="fileInputImageDetail"
                                                            type="file"
                                                          />
                                                        </div>
                                                      </li>
                                                    </ul>
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
// import { VueEditor } from 'vue2-quill-editor'
import { VueEditor } from "vue2-editor";
export default {
  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      transportId: this.$route.query.id,
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      showModalAdd: false,
      dataSelectVehicle: {
        vehicleCode: null,
        company: null,
        series: null,
        model: null,
      },
      dataAddVehicle: {
        codeTransport: null,
        codeCity: null,
        status: null,
        imagesVehicle: {
          urls: []
        },
        description: ''
      },
      transportSelected: null,
      selectedTransport: null,
      transportOptions: [
        { value: null, text: 'Chọn phương tiện' },
        { value: 'transport_car', text: 'Ô tô' },
        { value: 'transport_motorcycle', text: 'Xe máy' },
        { value: 'transport_bicycle', text: 'Xe đạp' },
      ],
      companyOptions: [
        { value: null, text: 'Chọn hãng'}
      ],
      modelOptions: [
        { value: null, text: 'Chọn model'}
      ],
      seriesOptions: [
        { value: null, text: 'Chọn Series'}
      ],
      dataListTransport: [],
      dataSpecificationColumn: [],
      avatarFormData: null,
      avatarImage: null,
      isSelectedImage: false,
      avatarImageSelected: null,
      subavatarFormData: null,
      subavatarImage: null,
      isSelectedSubImage: false,
      subavatarImageSelected: null,
      provinceOptions: [],
      listStatus: [
        { value: null, text: 'Chọn trạng thái' },
        { value: 'NEW', text: 'Mới' },
        { value: 'ACTIVE', text: 'Hoạt động' },
        { value: 'LOCK', text: 'Khoá' },
      ],
      listImageDetails: [],
      listFormDataImageDetails: []
    }
  },

  components: {
    addVehicle,
    VueEditor
  },

  async mounted () {
    await this.getListCity()
    await this.fetchData()
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

    async fetchData () {
      try {
        const { data } = await TransportService.getDetailTransport({
          id: this.transportId
        })
        this.dataAddVehicle = data
        this.avatarImage = this.dataAddVehicle.avatar
        // this.subAvatarImage = this.dataAddVehicle.subAvatar
        this.listImageDetails = this.dataAddVehicle.detailImages.images
        // this.dataAddVehicle.description = this.decodeB64toUTF8(this.dataAddVehicle.description)
        this.dataAddVehicle.description = '<p>Bán xe <strong>KIA NEW MORNING 2021 - GT LINE</strong>&nbsp;mới 100%.</p>'
      } catch (error) {
        console.log(error)
      }
    },

    async getListBrand (code) {
      try {
        this.dataAddVehicle.codeTransport = code
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })

        this.companyOptions = [{ value: null, text: 'Chọn hãng'}]
        this.dataSelectVehicle.company = null
        this.dataSelectVehicle.series = null
        response.data.transportListRes.map((e) => {
          this.companyOptions.push({ value: e.code, text: e.name })
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.seriesOptions = [{ value: null, text: 'Chọn Series'}]
        this.modelOptions = [{ value: null, text: 'Chọn model'}]
      }
    },

    async getListSeries (code) {
      try {
        this.dataAddVehicle.codeTransport = code
        this.seriesOptions = []
        this.dataSelectVehicle.series = null
        this.dataSelectVehicle.model = null
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })
        const seriesOptions = response.data.transportListRes.map((e) => {
          return { value: e.code, text: e.name }
        })
        if (seriesOptions.length > 0) {
          seriesOptions.shift()
          this.seriesOptions = [{ value: null, text: 'Chọn Series' }, ...seriesOptions]
        } else {
          this.seriesOptions = [{ value: null, text: 'Chọn Series' }]
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.modelOptions = [{ value: null, text: 'Chọn model'}]
      }
    },

    async getListModel (code) {
      try {
        this.dataAddVehicle.codeTransport = code
        this.modelOptions = []
        this.dataSelectVehicle.model = null
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })
        const modelOptions = response.data.transportListRes.map((e) => {
          return { value: e.code, text: e.name }
        })
        if (modelOptions.length > 0) {
          modelOptions.shift()
          this.modelOptions = [{ value: null, text: 'Chọn Model' }, ...modelOptions]
        } else {
          this.modelOptions = [{ value: null, text: 'Chọn Model' }]
        }
      } catch (error) {
        console.log(error)
      }
    },

    async changeModel (code) {
      this.dataAddVehicle.codeTransport = code
    },

    async getListCity () {
      try {
        const { data } = await ConfigService.getCityList({})
        const provinceOptions = data.map((e) => {
          return {
            value: e.code,
            text: e.name
          }
        })
        this.provinceOptions = [{ value: null, text: 'Chọn tỉnh thành' }, ...provinceOptions]
      } catch (error) {
        console.log(error)
      }
    },

    async onSelectFileAvatar () {
      const input = this.$refs.fileInput
      const files = input.files

      const formData = new FormData()
      formData.append('fileData', files[0])
      formData.append('folder', 'vehicleAvatar')
      this.avatarFormData = formData

      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.avatarImage = e.target.result
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
          // this.subavatarImage = e.target.result
          this.dataAddVehicle.subAvatar = e.target.result
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
      this.avatarImage = null
      this.avatarImageSelected = null
      this.isSelectedImage = false
    },

    removeSubAvatarImg () {
      this.dataAddVehicle.subAvatar = null
      this.subavatarImageSelected = null
      this.isSelectedSubImage = false
    },

    async onSelectListImageDetail () {
      if (this.listImageDetails && this.listImageDetails.length === 20) {
        this.$emit('error', 'Chỉ tải lên tối đa 20 ảnh')
        return
      }
      const input = this.$refs.fileInputImageDetail
      const files = input.files
      const fomatUpload = ['image/jpeg', 'image/png']
      const checkFomat = fomatUpload.includes(input.files[0].type)
      if (!checkFomat) {
        alert('Định dạng ảnh không đúng')
        return
      }

      const formData = new FormData()
      formData.append('fileData', files[0])
      formData.append('folder', 'vehicleListImage')
      this.listFormDataImageDetails.push(formData)

      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.listImageDetails.push(e.target.result)
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },

    async uploadListImageDetails () {
      try {
        for (let index = 0; index < this.listFormDataImageDetails.length; index++) {
          const element = this.listFormDataImageDetails[index]
          const res = await ConfigService.uploadImg(element)
          if (res.code === 1000) {
            this.dataAddVehicle.imagesVehicle.urls.push(res.data.upload_success_1)
          }
        }
      } catch (error) {
        console.log('add img reader', error)
      }
    },

    removeImgDetail (index) {
      this.listImageDetails.splice(index, 1)
      this.listFormDataImageDetails.splice(index, 1)
      this.dataAddVehicle.imagesVehicle.urls.splice(index, 1)
    },

    encodeUTF8toB64 (string) {
      return window.btoa(unescape(encodeURIComponent(string)))
    },

    decodeB64toUTF8 (string) {
      return decodeURIComponent(escape(window.atob(string)))
    },

    async submitEditVehicle () {
      try {
        if(this.avatarFormData) await this.uploadImg()
        if(this.subavatarFormData) await this.uploadSubAvatarImg()
        if(this.listFormDataImageDetails.length > 0) await this.uploadListImageDetails()
        this.dataAddVehicle.description = this.encodeUTF8toB64(this.dataAddVehicle.description)
        const response = await VehicleService.editVehicle(this.dataAddVehicle)
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Cập nhật phương tiện thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
      } catch (error) {
        console.log(error)
      }
    },

  }
}
</script>

<style scoped>
.form-avatar {
  max-width: 10rem;
}
.form-avatar-item {
  max-width: 5rem;
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
.trash-list-image {
  cursor: pointer;
  top: 0;
  color: black;
}
</style>