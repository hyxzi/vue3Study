<script>
</script>
<template>
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <div>
        <router-link to="/">首页</router-link>
      </div>
      <div>
        <router-link to="/about">关于</router-link>
    </div>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    text-decoration: none;
  }
  .el-header, .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>
