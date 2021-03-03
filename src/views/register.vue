<template>
  <div class="reg_back">
    <h2>新用户注册</h2>
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
                  v-model="uname"
                  id="username"
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
                  v-model="pword"
                  id="password"
                />
              </td>
            </tr>
            <tr>
              <td class="td_left"><label for="Email">Email</label></td>
              <td class="td_right">
                <input
                  type="email"
                  name="email"
                  placeholder="请输入Email"
                  id="Email"
                />
              </td>
            </tr>
            <tr>
              <td class="td_left"><label for="rename">姓名</label></td>
              <td class="td_right">
                <input
                  type="text"
                  name="rename"
                  placeholder="请输入真实姓名"
                  id="rename"
                />
              </td>
            </tr>
            <tr>
              <td class="td_left"><label for="Telphone">手机号</label></td>
              <td class="td_right">
                <input
                  type="text"
                  name="telphone"
                  placeholder="请输入您的手机号"
                  id="Telphone"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <button class="res_btn" @click="toRes">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      pword: "",
    };
  },
  methods: {
    toRes() {
      if (this.uname != "" && this.pword != "") {
        this.$router.push("/login");
      } else {
        alert("请补充完整信息");
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.uname != "" && this.pword != "") {
      let r = confirm("表单尚未提交时候离开页面");
      sessionStorage.setItem("uname", this.uname);
      sessionStorage.setItem("pword", this.pword);
      sessionStorage.setItem("cf", r);
      next();
    }
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
input {
  outline: none;
}
.reg_back {
  width: 850px;
  height: 350px;
  border: 8px solid #eeeeee;
  background: white;
  margin: auto;
  margin-top: 20px;
  padding-top: 10px;
}
.res_btn {
  width: 250px;
  height: 40px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: cornflowerblue;
  line-height: 40px;
  margin-top: 10px;
}
</style>
