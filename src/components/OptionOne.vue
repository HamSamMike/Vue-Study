<template>
  <div>
    <h1>Option One</h1>
    <el-table :data="tableData">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: []
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get('/api/data').then(response => {
      next(vm => vm.setData(response.data))
    })
  },
  methods: {
    setData(data) {
      this.tableData = data
    }
  }
}
</script>
