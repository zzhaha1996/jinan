<template>
  <div>
    <cell inline-desc="内容：您有邹城市中心水泥有限公司提交的证明，期次为20180910的审批流程超过7天未审核，请及时处理">
      <span slot="title" style="color:red;font-size: 14px">污染源审批预警</span>
    </cell>
    <div class="center">
      <x-button mini type="primary">通过</x-button>
      <x-button mini type="primary">不通过</x-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Group, Cell, CellBox, XButton, Flexbox, FlexboxItem } from 'vux'

  @Component({
    components: {
      Group,
      Cell,
      CellBox,
      XButton,
      Flexbox,
      FlexboxItem
    }
  })
  export default class List extends Vue {
  }
</script>

<style scoped lang="less">
  .center{
    text-align: center;
  }

</style>
