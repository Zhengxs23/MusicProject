<template>
  <div class="log_back">
    <h2>用户登录</h2>
    <div class="reg_center">
      <div class="reg_form">
        <form action="#" method="post">
          <table>
            <tr>
              <td class="td_left"><label for="username">用户名</label></td>
              <td class="td_right">
                <input
                  type="text"
                  name="username"
                  placeholder="请输入用户名"
                  id="username"
                  v-model="username"
                />
              </td>
            </tr>
            <tr>
              <td class="td_left"><label for="password">密码</label></td>
              <td class="td_right">
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  id="password"
                  v-model="password"
                />
              </td>
            </tr>
          </table>
        </form>
        <div class="regis">
          <div class="regis_left">
            <span @click="tojump"> 免费注册</span>
          </div>
          <div class="regis_right">
            <span> 忘记登录密码</span>
          </div>
        </div>
        <button class="login_btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:''
        }
    },
  methods: {
    tojump() {
      this.$router.push("/register");
    },
    login() {
      if (this.username != "" && this.password != "") {
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("password", this.password);
        console.log('点击了');
        this.$router.push("/mypage");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.log_back {
  width: 550px;
  height: 300px;
  border: 8px solid #eeeeee;
  background: white;
  margin: auto;
  margin-top: 20px;
  padding-top: 10px;
}

.reg_center {
  margin: 20px auto;
  width: 450px;
}

.td_left {
  width: 100px;
  text-align: right;
  height: 40px;
}

.td_right {
  padding-left: 40px;
}
input {
  outline: none;
}
.login_btn {
  width: 250px;
  height: 40px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: cornflowerblue;
  line-height: 40px;
}
#username,
#password,
#Email,
#rename,
#Telphone,
#Birthday,
#checkcode {
  width: 200px;
  height: 30px;
  border: 1px solid #a4a4a4;
  border-radius: 8px;
  padding-left: 10px;
}
.regis {
  margin: 10px auto;
  width: 300px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  cursor: pointer;
}
</style>
