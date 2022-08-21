<template>
  <div class="nk-body bg-white npc-general pg-auth">
    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main ">
            <!-- wrap @s -->
            <div class="nk-wrap nk-wrap-nosidebar">
                <!-- content @s -->
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                        <div class="brand-logo pb-4 text-center">
                            <a href="#" class="logo-link">
                                <img class="logo-light logo-img logo-img-lg" src="@/assets/images/logoxesang.png" alt="logo">
                                <img class="logo-dark logo-img logo-img-lg" src="@/assets/images/logoxesang.png" alt="logo-dark">
                            </a>
                        </div>
                        <div class="card card-bordered">
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">Đổi mật khẩu</h4>
                                        <div class="nk-block-des">
                                            <!-- <p>Access the CryptoLite panel using your email and passcode.</p> -->
                                        </div>
                                    </div>
                                </div>
                                <ValidationObserver ref="changePassword">
                                  <form @submit.prevent="validate().then(makeChangePassword)" slot-scope="{ validate }">
                                    <!-- <ValidationProvider rules="required" vid="email" name="Email">
                                      <div class="form-group" slot-scope="{ valid, errors }" label="Email">
                                          <div class="form-label-group">
                                              <label class="form-label" for="default-01">Tên đăng nhập</label>
                                          </div>
                                          <div class="form-control-wrap">
                                              <input type="text"
                                                v-model="authData.username"
                                                v-on:keyup.enter="validate().then(makeChangePassword)"
                                                :state="errors[0] ? false : (valid ? true : null)"
                                                class="form-control form-control-lg" id="default-01"
                                                placeholder="Tên đăng nhập"
                                              >
                                              <div class="text-danger">
                                                {{ errors[0] }}
                                              </div>
                                          </div>
                                      </div>
                                    </ValidationProvider> -->
                                    <ValidationProvider rules="required|regexPassword" name="Mật khẩu">
                                      <div class="form-group mt-2" slot-scope="{ errors }" label="Password">
                                          <div class="form-label-group">
                                              <label class="form-label" for="password">Mật khẩu hiện tại</label>
                                              <!-- <a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a> -->
                                          </div>
                                          <div class="form-control-wrap">
                                              <a href="javascript:void(0)" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                  <em v-if="typePassword === 'password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                  <em v-else class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                              </a>
                                              <input
                                                :type="typePassword"
                                                v-model="authData.passwdCurrent"
                                                v-on:keyup.enter="validate().then(makeChangePassword)"
                                                class="form-control form-control-lg" id="password"
                                                placeholder="Nhập mật khẩu"
                                              >
                                              <div class="text-danger">
                                                {{ errors[0] }}
                                              </div>
                                          </div>
                                      </div>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required|regexPassword" name="Mật khẩu">
                                      <div class="form-group mt-2" slot-scope="{ errors }" label="Password">
                                          <div class="form-label-group">
                                              <label class="form-label" for="password">Mật khẩu mới</label>
                                              <!-- <a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a> -->
                                          </div>
                                          <div class="form-control-wrap">
                                              <a href="javascript:void(0)" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                  <em v-if="typePassword === 'password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                  <em v-else class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                              </a>
                                              <input
                                                :type="typePassword"
                                                v-model="authData.passwdNew"
                                                v-on:keyup.enter="validate().then(makeChangePassword)"
                                                class="form-control form-control-lg"
                                                placeholder="Nhập mật khẩu"
                                              >
                                              <div class="text-danger">
                                                {{ errors[0] }}
                                              </div>
                                          </div>
                                      </div>
                                    </ValidationProvider>
                                      <p class="text-center text-success mt-2 fs-6" v-show="messageSuccess">{{ messageSuccess }}</p>
                                      <p class="text-center text-danger mt-2 fs-6" v-show="messageErr">{{ messageErr }}</p>
                                      <div class="form-group mt-2">
                                          <button class="btn btn-lg btn-primary btn-block">Xác nhận</button>
                                      </div>
                                  </form>
                                </ValidationObserver>
                                <div class="form-note-s2 d-flex justify-content-between pt-4 px-3">
                                  <a href="javascript:void(0)" @click="goBackHome">Trang chủ</a>
                                </div>
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
import { UsersService } from '@/services/users.service'
  export default {
    data () {
      return {
        authData: {
          passwdCurrent: null,
          passwdNew: null
        },
        messageErr: null,
        messageSuccess: null,
        typePassword: 'password'
      }
    },

    methods: {
      async makeChangePassword () {
        try {
          const isSuccess = await this.$refs.changePassword.validate()
          if (!isSuccess) return
          if (this.authData.passwdCurrent === this.authData.passwdNew) {
            this.messageErr = 'Mật khẩu mới không được giống mật khẩu cũ'
            return
          }
          const response = await UsersService.changePassword(this.authData)
          if (response.code === 1000) {
            this.messageErr = null
            this.$bvToast.toast('Đổi mật khẩu thành công', {
              title: `Thông báo`,
              variant: 'success',
              solid: true
            })
            this.messageSuccess = 'Đổi mật khẩu thành công'
            setTimeout(() => {
              this.logout()
            }, 1500);
          } else {
            this.messageErr = response.message
          }
        } catch (error) {
          console.log(error)
        }
      },
      async logout () {
        await this.$store.dispatch('user/clear')
        this.$store.dispatch('auth/logout')
        window.location.href = '/login'
      },
      goBackHome () {
        this.$router.push('/admin')
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