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
                                <h3 class="nk-block-title page-title">Danh sách showroom</h3>
                            </div><!-- .nk-block-head-content -->
                            <div class="nk-block-head-content">
                                <div class="toggle-wrap nk-block-tools-toggle">
                                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                    <div class="toggle-expand-content" data-content="pageMenu">
                                        <ul class="nk-block-tools justify-between g-3">
                                            <li><a href="#" data-toggle="modal" @click="showCreateSeller()" data-target="#addPayment" class="btn text-white bg-primary"><em class="icon ni ni-plus"></em><span>Thêm showroom</span></a></li>
                                        </ul>
                                    </div>
                                </div><!-- .toggle-wrap -->
                            </div><!-- .nk-block-head-content -->
                        </div><!-- .nk-block-between -->
                    </div><!-- .nk-block-head -->
                    <div class="nk-block">
                        <div class="card card-bordered card-stretch">
                            <div class="card-title-group">
                                  <div class="card-tools">
                                      <div class="form-inline">
                                          <div class="form-wrap ml-2">
                                             
                                          </div>
                                      </div><!-- .form-inline -->
                                  </div><!-- .card-tools -->
                              </div><!-- .card-title-group -->

                            <div class="card-inner-group">
                                <div class="card-inner position-relative">
                                  <div class="card-title-group">
                                      <div class="card-tools d-flex justify-between w-100">
                                          <div class="form-inline">
                                           
                                          </div><!-- .form-inline -->
                                          
                                      </div><!-- .card-tools -->
                                  </div><!-- .card-title-group -->
                              </div><!-- .card-inner -->
                                
                                <div class="card-inner p-0">
                                    <div class="nk-tb-list nk-tb-ulist">
                                        <div class="nk-tb-item nk-tb-head text-center">
                                            <div class="nk-tb-col nk-tb-col-check">
                                                STT
                                            </div>
                                            <div class="nk-tb-col">
                                              <span class="sub-text">Tên thông số</span>
                                            </div>
                                            <div class="nk-tb-col tb-col-mb"><span class="sub-text">Giá trị mặc định</span></div>
                                            <div class="nk-tb-col tb-col-mb"><span class="sub-text">Ngày tạo</span></div>
                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Ngày cập nhật</span></div>
                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Trạng thái</span></div>
                                            <div class="nk-tb-col nk-tb-col-tools text-right">
                                                <span>Thao tác</span>
                                            </div>
                                        </div><!-- .nk-tb-item -->
                                        <div class="nk-tb-item text-center" v-for="(item, index) in dataListSpecifications" :key="item.id">
                                            <div class="nk-tb-col nk-tb-col-check">
                                                {{ index + 1 }}
                                            </div>
                                            <div class="nk-tb-col">
                                                <div class="user-card justify-content-center">
                                                    <div class="user-info">
                                                        <span class="tb-lead text-blue">{{ item.name }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-tb-col tb-col-mb">
                                                <span class="tb-amount"> {{ item.valueDefault }} </span>
                                            </div>
                                            <div class="nk-tb-col tb-col-mb">
                                                <span class="tb-amount"> {{ item.dateCreate | formatDateTime1 }} </span>
                                            </div>
                                            <div class="nk-tb-col tb-col-mb">
                                                <span class="tb-amount"> {{ item.dateModified | formatDateTime1 }} </span>
                                            </div>
                                            <div class="nk-tb-col tb-col-md text-center">
                                                <span class="tb-status text-success">{{ item.status }}</span>
                                            </div>
                                            <div class="nk-tb-col nk-tb-col-tools">
                                                <ul class="nk-tb-actions gx-1">
                                                    <li>
                                                        <div class="drodown">
                                                            <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li><a href="#"><em class="icon ni ni-focus"></em><span>Xem</span></a></li>
                                                                    <li><a href="javascript:void(0)" @click="showEditItem(item)"><em class="icon ni ni-edit"></em><span>Sửa</span></a></li>
                                                                    <!-- <li class="divider"></li>
                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li> -->
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div><!-- .nk-tb-item -->
                                    </div><!-- .nk-tb-list -->
                                </div><!-- .card-inner -->

                                <div class="card-inner">
                                    <ul class="pagination justify-content-center justify-content-md-start">
                                        <b-pagination
                                          v-model="search.page"
                                          :total-rows="search.total"
                                          :per-page="search.limit"
                                        ></b-pagination>
                                    </ul><!-- .pagination -->
                                </div><!-- .card-inner -->
                            </div><!-- .card-inner-group -->
                        </div><!-- .card -->
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

        <create-seller
          :showModalAdd="showModalAdd"
          :title="title"
          :editData="editData"
          @close="showModalAdd = false"
        >
        </create-seller>

    </div>
    
 </div>
</template>

<script>
import EventBus from '../Components/EventBus'
import { VehicleService } from '@/services/vehicle.service'
import { ConfigService } from '@/services/config.service'
import { TransportService } from '@/services/transport.service'
import createSeller from '../Components/Modal/createVehicleSeller.vue'
export default {
  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      dataListSpecifications: [],
      configRange: {},
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      showModalAdd: false,
      showModalEdit: false,
      itemSelected: null,
      title: null,
      search: {
        page: 1,
        limit: 20,
        total: 0
      },
      editData: {}
    }
  },

  components: {
    createSeller
  },

  async mounted () {
    await this.getListTransportColumn()
  },

  filters: {
    transformNameParameter (code, listParameter) {
      const parameters = listParameter.filter((e) => code === e.id)[0]
      console.log(parameters.text)
      return (code && parameters) ? parameters.text : ''
    }
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

    async getListTransportColumn () {
      try {
        const response = await TransportService.getListTransportColumn({
          idParentTransport: this.$route.query.transportId,
          idParentParameter: [this.$route.query.parameterId]
        })
        this.dataListSpecifications = response.data
      } catch (error) {
        console.log(error)
      }
    },

    showCreateSeller () {
      this.showModalAdd = true
      this.title = 'Thêm showroom'
      this.editData = {
        address: '',
        fullName: '',
        phone: '',
        typeSellers: null,
        vehicleIds: [
          'string'
        ]
      }
    },

    async showEditItem (item) {
      this.showModalAdd = true
      this.title = 'Thêm showroom'
      this.editData = item
    }
  }
}
</script>

<style scoped>
</style>