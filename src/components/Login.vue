<template>
  <div id="sign">
    <Confirm ref="myConfirm"></Confirm>
    <header>
      <h5 class="title">
        <div class="normal-title">
          <router-link :class="login" to="/" @click="check(0)">登录</router-link>
          <b>·</b>
          <router-link :class="registered" to="/registered" @click="check(1)">注册</router-link>
        </div>
      </h5>
    </header>
    <section>
      <div class="container">
           <div class="form-signin">
          <p>
            <label for="username" class="sr-only">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Username"
            />
          </p>
          <p>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Password"
              required
            />
          </p>
          <button class="btn btn-lg btn-primary btn-block" @click="submitForm()" >登录</button>
         </div>

         <ul>
           <li> <a>社交帐号登录</a></li>
        <li>

           <a href="https://github.com/login/oauth/authorize?response_type=code&client_id=bfe8662580f52bfcbe6d&scope=read:user&state=6MtY3Nm672Hfv2ohYpT_4D_FNT3J5M9NYLIQt-g3JlQ%3D&redirect_uri=http://47.104.150.14:80/threeLogin">GitHub</a>
        </li>
         </ul>
      </div>
    </section>

  </div>
</template>

<script>
import Confirm from './utils/Confirm'

export default {
  name: this.Headers,
  components: {Confirm},
  data () {
    return {
      username: '',
      password: '',
      login: 'check',
      registered: ''
    }
  },
  methods: {
    check (type) {
      if (type === 0) {
        this.registered = ''
      } else {
        this.login = ''
      }
    },
    submitForm () {
      event.preventDefault()
      // axios
      let data = {
        'username': this.username,
        'password': this.password
      }
      this.$http.post('/login', this.$qs.stringify(data)).then(res => {
        if (res.data.code === 200) {
          this.$cookie.set('token', res.data.message)
          localStorage.setItem('userInfo', JSON.stringify(res.data.result))
          this.$router.push({
            path: `/hello`
          })
        } else {
          this.$refs.myConfirm.show(res.data.message, {
            type: 'alert',
            confirmText: '确定',
            titleText: '消息提示',
            data: '我是外界传进来的数据'
          })
        }
      }).catch(error => {
        alert('服务器内部错误' + error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  /* background-color:aqua; */
  color: white;
  text-align: center;
  padding: 5px;
}
section {
  line-height: 100px;
  text-align: center;
  padding: 10px;
  flex: 0 0 auto;
}
.more-sign h6 {
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
}
.more-sign h6:before {
  left: 30px;
}
.check {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
</style>
