<template>
  <div class="hello">
      <h1 >Hello {{userInfo.username}}</h1>
  </div>
</template>

<script>
export default {
  name: this.Headers,
  mounted () { // 这个属性就可以，在里面声明初始化时要调用的方法即可
    // we can implement any method here like
    this.change()
  },
  methods: {
    change () {
      if (localStorage.getItem('userInfo')) { // 判断当前用户的登录信息loginInfo是否存在
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      } else {
        this.$router.push({
          path: `/`
        })
      }
    }
  },
  data () {
    return {
      userInfo: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
