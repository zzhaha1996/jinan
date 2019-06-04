<template>
  <div>
    <group>
      <cell title="邹城市中心水泥有限公司" inline-desc="水泥制造"/>
    </group>
    <group>
      <cell title="主要污染物：废水、废气"/>
      <cell title="附件：申报材料"/>
    </group>
    <group>
      <x-textarea placeholder="审批意见" :rows="3"/>
    </group>
    <div class="center">
      <x-button mini type="primary">通过</x-button>
      <x-button mini type="primary">不通过</x-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Search, Group, Cell, CellBox, XTextarea, XButton, Flexbox, FlexboxItem } from 'vux'
  @Component({
    components: {
      Search,
      Group,
      Cell,
      CellBox,
      XTextarea,
      XButton,
      Flexbox,
      FlexboxItem
    }
  })
  export default class Detail extends Vue {
  }
</script>

<style scoped lang="less">
.center{
  text-align: center;
}
</style>
