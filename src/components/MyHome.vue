<template>
	<el-container class="layout-container-demo" style="height: 500px">
  <Bar></Bar>
   <el-container>
    <el-header style="text-align: right; font-size: 12px">
    <div class="toolbar">
       <el-dropdown>
         <el-icon style="margin-right: 8px; margin-top: 1px">
           <setting />
          </el-icon>
          <template #dropdown>
         <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
               <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
         </template>
        </el-dropdown>
        <span>Tom</span>
       </div>
    </el-header>
	
     <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
         <el-table-column prop="name" label="Name" width="140" />
           <el-table-column prop="age" label="Age" width="120" />
          <el-table-column prop="email" label="Email" />
        </el-table>
      </el-scrollbar>
     </el-main>
  </el-container>
 </el-container>
</template>

<script>
	const tableData = [];
	import Bar from "./MyBar.vue"
	export default {
 name: 'MyHome',
 components: {Bar},
 created() {
      this.getUserList();  
   }, 
   data() {  
       return {  
          // 假设我们从API获取的是一个用户列表  
         tableData
       };  
    }, 
    methods: {  
    getUserList() {
      this.$http.get('/').then(response => {  
            console.log(response.data)
             this.tableData = response.data; 
       })  
       .catch(error => {  
           console.log(error)  
        });  
    } 
    }
 }
</script>

<style>
	.layout-container-demo .el-header {
 position: relative;
 background-color: var(--el-color-primary-light-7);
 color: var(--el-text-color-primary);
	}
	.layout-container-demo .el-aside {
color: var(--el-text-color-primary);
 background: var(--el-color-primary-light-8);
	}
	.layout-container-demo .el-menu {
border-right: none;
	}
	.layout-container-demo .el-main {
padding: 0;
	}
	.layout-container-demo .toolbar {
 display: inline-flex;
 align-items: center;
justify-content: center;
 height: 100%;
 right: 20px;
	}
</style>