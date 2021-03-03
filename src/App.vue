<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/3">发现</router-link>
      <router-link to="/mypage">我的</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/#">。。。</router-link>
      <!-- <router-link to="/1">1</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style style="css">
*{
  margin:0;
  padding:0
}
a{
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #C2C2C2; */
}

#nav {
  width:100%;
  height:80px;
  line-height:80px;
  background-color:#242424;
  display:flex;
  justify-content:space-around;
  padding:0 200px;
  box-sizing:border-box;
}

#nav a {
  width:100px;
  height:80px;
  font-weight: bold;
  color: #C2C2C2;
}

#nav a.router-link-exact-active {
  color: white;
  background-color:black;
}
</style>
