<template>
  <div>
    <search class="padding"
            v-model="name"
            placeholder="搜索"
            auto-scroll-to-top
            ref="search"/>
    <div class="content clear-float"
         v-for="d in datas"
         :key="d.id"
         @click="click(d.id)">
      <div class="left">
        <div class="name-one">{{ d.name }}</div>
        <div class="gray f-14">{{ d.type }}</div>
      </div>
      <div class="right">
        <div class="gray f-14">{{ d.time }}</div>
        <div class="bule up f-14">期次：{{ d.period }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Search, Group, Cell, CellBox } from 'vux'

  @Component({
    components: {
      Search,
      Group,
      Cell,
      CellBox
    }
  })
  export default class List extends Vue {
    name = ''
    datas = [
      { id: '1', name: '邹城市中心水泥有限公司', type: '水泥制造', time: '2018-9-1 13:11', period: '201809' },
      { id: '2', name: '邹城市中心水泥有限公司', type: '水泥制造', time: '2018-9-1 13:11', period: '201809' },
      { id: '3', name: '邹城市中心水泥有限公司', type: '水泥制造', time: '2018-9-1 13:11', period: '201809' },
      { id: '4', name: '邹城市中心水泥有限公司', type: '水泥制造', time: '2018-9-1 13:11', period: '201809' },
      { id: '5', name: '邹城市中心水泥有限公司', type: '水泥制造', time: '2018-9-1 13:11', period: '201809' }
    ]

    click (id) {
      this.$router.push({ name: 'todoDetail', params: { id: id } })
    }
  }
</script>

<style scoped lang="less">
  .content {
    margin-left: 0.5rem;
    border-bottom: 1px solid #D2D7D6;
  }

  .left {
    width: 65%;
    float: left;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .right {
    width: 35%;
    float: right;
  }

  // 清除浮动
  .clear-float {
    zoom: 1;
  }

  .clear-float:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }

  .gray {
    color: #aaaaaa;
  }

  .bule {
    color: #1f7eff;
  }

  .f-14 {
    font-size: 14px;
  }

  .up {
    margin-top: 15px;
  }
</style>
