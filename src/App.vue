<template>
  <div id="app">
    <!--<loading v-model="loading"/>-->
    <view-box>
      <!--<x-header :left-options="{backText: '首页',preventGoBack:true}"
                @on-click-back="callback()"/>-->
      <router-view/>
    </view-box>
  </div>
</template>

<script>
  import { Loading, ViewBox, Tabbar, TabbarItem, XHeader } from 'vux'
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component({
    components: {
      Loading,
      ViewBox,
      Tabbar,
      TabbarItem,
      XHeader
    },
    name: 'App'
  })
  export default class extends Vue {
    get loading () {
      return this.$store.state.loadingCount > 0
    }
    callback () {
      let that = this
      that.$router.push({ path: '/' })
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset';
  @import './themes/defatult';

  body {
    background-color: #fbf9fe;
  }
</style>
