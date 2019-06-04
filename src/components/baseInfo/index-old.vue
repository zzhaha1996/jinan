<template>
  <div>
    <group>
      <!--  <cell title="待办事项" is-link link="/todoList"/>
      <cell title="应用消息" is-link link="/messageList"/>-->
      <cell title="申报分析" is-link link="/analyze"/>
    </group>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Group, Cell, CellBox } from 'vux'
  @Component({
    components: {
      Group,
      Cell,
      CellBox
    }
  })
  export default class baseInfo extends Vue {

  }
</script>

<style scoped>

</style>
