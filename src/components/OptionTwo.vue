<template>
  <el-container class="layout-container-demo" style="height: 500px">
 <Bar></Bar>
  <el-container>
  {{msg}}
  </el-container>
  </el-container>
</template>

<script>
import Bar from "./MyBar.vue"
export default {
  name: 'optionTwo',
  components: {Bar},
  data () {
    return {
      msg: 'Option Two'
    }
  }
}
</script>