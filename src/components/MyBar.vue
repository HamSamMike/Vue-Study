<template>
	<el-aside width="200px">
 <el-scrollbar>
  <el-menu :default-openeds="['1', '3']">
    <el-sub-menu index="1">
      <template #title>
         <el-icon><Message/></el-icon>Navigator One
      </template>
     <el-menu-item-group>
        <template #title>Group 1</template>
        <el-menu-item index="1-1">
          <router-link to="/optionOne">Option 1</router-link>  
        </el-menu-item>
        <el-menu-item index="1-2">
            <router-link to="/optionTwo">Option 2</router-link>  
      </el-menu-item>
      </el-menu-item-group>
    <el-menu-item-group title="Group 2">
        <el-menu-item index="1-3">
           <router-link to="/optionThree">Option 3</router-link>  
      </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>Option4</template>
        <el-menu-item index="1-4-1">
             <router-link to="/optionFour">Option 4-1</router-link>
      </el-menu-item>
       </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
         <el-icon><Menu/></el-icon>Navigator Two
      </template>
       <el-menu-item-group>
       <template #title>Group 1</template>
         <el-menu-item index="2-1">Option 1</el-menu-item>
        <el-menu-item index="2-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="2-3">Option 3</el-menu-item>
     </el-menu-item-group>
     <el-sub-menu index="2-4">
       <template #title>Option 4</template>
        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
     </el-sub-menu>
     </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Setting/></el-icon>Navigator Three
      </template>
     <el-menu-item-group>
        <template #title>Group 1</template>
       <el-menu-item index="3-1">Option 1</el-menu-item>
        <el-menu-item index="3-2">Option 2</el-menu-item>
     </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="3-3">Option 3</el-menu-item>
     </el-menu-item-group>
      <el-sub-menu index="3-4">
         <template #title>Option 4</template>
        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
      </el-sub-menu>
   </el-sub-menu>
  </el-menu>
 </el-scrollbar>
	</el-aside>
</template>

<script>
</script>

<style>
</style>