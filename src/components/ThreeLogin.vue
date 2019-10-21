<template>
  <div id="sign">
    <h1>登录中，请等待</h1>
  </div>
</template>

<script>
export default {
  name: this.Headers,
  mounted () {
    console.log(this.paramsr)
    this.threeLogin()
    // this.threeLogin()
  },
  data () {
    return {
      username: '',
      password: '',
      params: this.$route,
      paramsr: window.location.href.split('?')[1].split('#')[0]
    }
  },
  methods: {
    threeLogin () {
      this.$http.get('/login/oauth2/code/github?' + this.paramsr).then(res => {
        if (res.data.code === 200) {
          this.$cookie.set('token', res.data.message)
          localStorage.setItem('userInfo', JSON.stringify(res.data.result))
          this.$router.push({
            path: `/hello`
          })
        } else {
          this.$router.push({
            path: `/`
          })
        }
      }).catch(error => {
        console.log(error)
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
