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
                                <h3 class="nk-block-title page-title">Sửa thông số kỹ thuật</h3>
                            </div><!-- .nk-block-head-content -->
                        </div><!-- .nk-block-between -->
                    </div><!-- .nk-block-head -->
                    <div class="nk-block nk-block-lg">
                        <div class="card card-preview">
                            <div class="card-inner">
                                <ul class="nav nav-tabs mt-n3">
                                    <li class="nav-item" v-for="(item, index) in dataAddVehicle.listParameters" :key="index">
                                        <a class="nav-link" :class="{'active': tabIndex === index}" @click="tabIndex = index" href="javascript:void(0)" data-toggle="tab"><em class="icon ni ni-lock-alt"></em><span>{{ item }}</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane" v-for="(itemVehicle, indexVehicle) in dataAddVehicle.vehicleParametersGroup" :key="itemVehicle.code" :class="{'active': tabIndex === indexVehicle}" id="tabItem5">
                                         <div class="row g-gs">
                                            <div class="col-12">
                                              <div class="form-control-wrap mb-3" v-for="itemParam in itemVehicle.lstVehicleParameters" :key="itemParam.idVehicleDetail">
                                                  <div class="input-group">
                                                      <div class="input-group-prepend col-3">
                                                          <span class="input-group-label">{{ itemParam.transportColumnName }}</span>
                                                      </div>
                                                      <input type="text" v-model="itemParam.parameters" class="form-control" :placeholder="itemParam.transportColumnName ? itemParam.transportColumnName : ''" required>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- .card-preview -->

                        <div class="nk-block-head-content mt-3">
                          <div class="toggle-wrap nk-block-tools-toggle">
                              <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                              <div class="toggle-expand-content" data-content="pageMenu">
                                  <ul class="nk-block-tools justify-between g-3">
                                      <li><a href="javascript:void(0)" @click="submitEditVehicle" data-toggle="modal" class="btn text-white bg-primary"><em class="icon ni ni-send"></em><span>Xác nhận</span></a></li>
                                  </ul>
                              </div>
                          </div><!-- .toggle-wrap -->
                      </div><!-- .nk-block-head-content -->
                    </div>
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
import { VueEditor } from 'vue2-quill-editor'
export default {
  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      transportId: this.$route.query.id,
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      showModalAdd: false,
      dataEdit: {},
      vehicleParametersGroup: [],
      tabIndex: 0,
      dataAddVehicle: {
        listParameters: [],
        vehicleParametersGroup: []
      }
    }
  },

  components: {
    addVehicle,
    VueEditor
  },

  async mounted () {
    this.fetchData()
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
      } catch (error) {
        console.log(error)
      }
    },

    async submitEditVehicle () {
      try {
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
        await this.fetchData()
      } catch (error) {
        console.log(error)
      }
    },

  }
}
</script>

<style scoped>
.input-group-label {
  display: flex;
  align-items: center;
  padding: 0.4375rem 1rem;
  margin-bottom: 0;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #3c4d62;
}
</style>