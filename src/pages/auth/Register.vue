<template>
  <div class="nk-body bg-white npc-general pg-auth">
    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main ">
            <!-- wrap @s -->
            <div class="nk-wrap nk-wrap-nosidebar">
                <!-- content @s -->
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                        <div class="brand-logo pb-4 text-center">
                            <a href="#" class="logo-link">
                                <img class="logo-light logo-img logo-img-lg" src="@/assets/images/logoxesang.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                                <img class="logo-dark logo-img logo-img-lg" src="@/assets/images/logoxesang.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
                            </a>
                        </div>
                        <div class="card card-bordered">
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">Đăng ký</h4>
                                        <div class="nk-block-des">
                                            <!-- <p>Create New Dashlite Account</p> -->
                                        </div>
                                    </div>
                                </div>
                                <ValidationObserver ref="register">
                                  <form @submit.prevent="register()">
                                      <ValidationProvider
                                          rules="required"
                                          vid="nameRegister"
                                          name="Tên đăng nhập"
                                        >
                                        <div class="form-group" slot-scope="{ errors }">
                                            <label class="form-label" for="name">Tên đăng nhập</label>
                                            <div class="form-control-wrap">
                                                <input v-model="authData.username" type="text" class="form-control form-control-lg" placeholder="Nhập tên" required>
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </div>
                                      </ValidationProvider>
                                      <div class="form-group">
                                          <label class="form-label" for="fullName">Tên đầy đủ</label>
                                          <div class="form-control-wrap">
                                              <input v-model="authData.fullName" type="text" class="form-control form-control-lg" placeholder="Nhập tên đầy đủ">
                                          </div>
                                      </div>
                                      <ValidationProvider
                                        rules="required|mail"
                                        vid="emailRegister"
                                        name="Email"
                                      >
                                        <div class="form-group" slot-scope="{ errors }">
                                            <label class="form-label" for="email">Email</label>
                                            <div class="form-control-wrap">
                                                <input v-model="authData.email" type="email" class="form-control form-control-lg" placeholder="Nhập email">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </div>
                                      </ValidationProvider>
                                      <ValidationProvider
                                        rules="required|regexPhone"
                                        vid="phoneRegister"
                                        name="Số điện thoại"
                                      >
                                        <div class="form-group" slot-scope="{ errors }">
                                            <label class="form-label">Số điện thoại</label>
                                            <div class="form-control-wrap">
                                                <input v-model="authData.phone" type="number" class="form-control form-control-lg" placeholder="Nhập số điện thoại">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </div>
                                      </ValidationProvider>
                                      <div class="form-group">
                                          <label class="form-label">Địa chỉ</label>
                                          <div class="form-control-wrap">
                                              <input v-model="authData.address" type="text" class="form-control form-control-lg" placeholder="Nhập số điện thoại">
                                          </div>
                                      </div>
                                      <div class="form-group">
                                          <label class="form-label">Loại tài khoản</label>
                                          <div class="form-control-wrap">
                                              <b-form-select class="w-100" v-model="authData.typeUser" :options="listTypeUser"></b-form-select>
                                          </div>
                                      </div>
                                      <ValidationProvider
                                        rules="required|regexPassword"
                                        vid="password"
                                        name="Mật khẩu"
                                      >
                                        <div class="form-group" slot-scope="{ errors }">
                                            <label class="form-label" for="password">Mật khẩu</label>
                                            <div class="form-control-wrap">
                                                <a href="javascript:void(0)" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'"
                                                  class="form-icon form-icon-right passcode-switch lg" data-target="password"
                                                >
                                                    <em v-if="typePassword === 'password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                    <em v-else class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                                </a>
                                                <input v-model="authData.passwd" :type="typePassword" class="form-control form-control-lg" id="password" placeholder="Nhập mật khẩu">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </div>
                                      </ValidationProvider>
                                      <ValidationProvider
                                        rules="required|regexPassword"
                                        vid="rewritePassword"
                                        name="Mật khẩu"
                                      >
                                        <div class="form-group" slot-scope="{ errors }">
                                            <label class="form-label" for="password">Nhập lại mật khẩu</label>
                                            <div class="form-control-wrap">
                                                <a href="javascript:void(0)" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'"
                                                  class="form-icon form-icon-right passcode-switch lg" data-target="password"
                                                >
                                                    <em v-if="typePassword === 'password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                    <em v-else class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                                </a>
                                                <input v-model="authData.rewritePassword" :type="typePassword" @input="checkRewritePassword" class="form-control form-control-lg" id="password" placeholder="Nhập mật khẩu">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </div>
                                      </ValidationProvider>
                                      <p class="text-center text-danger mt-2 fs-6" v-show="messageErr">{{ messageErr }}</p>
                                      <div class="form-group">
                                          <button class="btn btn-lg btn-primary btn-block">Đăng ký</button>
                                      </div>
                                  </form>
                                </ValidationObserver>
                                <div class="form-note-s2 d-flex justify-content-between pt-4 px-3">
                                  <a href="javascript:void(0)" @click="goBackHome">Trang chủ</a>
                                  <a href="javascript:void(0)" @click="$router.push('/login')"><strong>Đăng nhập</strong></a>
                                </div>
                                <!-- <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul class="nav justify-center gx-8">
                                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="nk-footer nk-auth-footer-full">
                        <div class="container wide-lg">
                            <div class="row g-3">
                                <div class="col-lg-6 order-lg-last">
    
                                </div>
                                <div class="col-lg-6">
                                    <div class="nk-block-content text-center text-lg-left">
                                        <p class="text-soft">&copy; 2022 Sanxesang. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- wrap @e -->
            </div>
            <!-- content @e -->
        </div>
        <!-- main @e -->

    </div>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
export default {
  data () {
    return {
      authData: {
        username: null,
        fullName: null,
        passwd: null,
        email: null,
        phone: null,
        address: null,
        typeUser: null,
        rewritePassword: null
      },
      messageErr: null,
      typePassword: 'password',
      listTypeUser: [
        { value: null, text: 'Chọn tài khoản' },
        { value: 'SALON', text: 'Salon' },
        { value: 'SHOWROOM', text: 'Showroom' },
        { value: 'INDIVIDUAL', text: 'Cá nhân' },
      ]
    }
  },
  methods: {
    async register () {
      try {
        const isSuccess = await this.$refs.register.validate()
        if (!isSuccess) return
        if (!this.authData.username || !this.authData.passwd) return

        if (this.authData.rewritePassword !== this.authData.passwd) {
          this.messageErr = 'Mật khẩu không khớp'
          return
        }
        const { data } = await AuthService.signUp(this.authData)
        if (data.code === 1000) {
          this.$bvToast.toast('Đăng ký tài khoản thành công', {
            title: `Thông báo`,
            variant: 'success',
            solid: true
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 1500);
        } else {
          this.messageErr = data.message
        }
      } catch (error) {
        // this.$refs.observer.setErrors({
        //   email: [error.message]
        // })
        console.log(error.response)
      }
    },
    checkRewritePassword () {
      if (this.authData.rewritePassword !== this.authData.passwd) {
        this.messageErr = 'Mật khẩu không khớp'
      } else {
        this.messageErr = null
      }
    },
    goBackHome () {
      window.location.href = process.env.VUE_APP_DOMAIN
    },
  }
}
</script>

<style scoped>
.logo-link {
  background: radial-gradient(#6576ff, transparent);
  border-radius: 10px;
}
</style>