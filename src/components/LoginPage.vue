<template>
  <el-container class="login-container">
    <el-header>
      <h1>Login</h1>
    </el-header>
    <el-main>
      <el-form :model="loginForm" @submit.prevent="handleLogin">
        <el-form-item label="Username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">Login</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      try {
        console.log('Sending login request with:', this.loginForm)
        const response = await this.$http.post('/api/login', this.loginForm)
        console.log('Login response received:', response)
        if (response.data.success) {
          localStorage.setItem('auth', true)
          this.$router.push('/optionOne')
        } else {
          this.$message.error(response.data.message)
        }
      } catch (error) {
        console.error('Login request error:', error)
        this.$message.error('An error occurred. Please try again.')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

el-header {
  text-align: center;
  font-size: 24px;
}
</style>
