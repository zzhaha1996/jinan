<template>
  <div>
   <!-- <x-header :left-options="{backText: '返回'}"></x-header>-->
    <group>
      <cell title="按进度汇总" is-link link="/analyze"/>
      <cell title="按地市汇总" is-link/>
      <echarts :options="option" style="width: 100%" @click="click"/>
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
  export default class CountByCountry extends Vue {
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['未申报', '审批中', '已通过', '已驳回']
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '滨州', '德州', '聊城', '临沂', '菏泽', '莱芜']
      },
      series: [
        {
          name: '未申报',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: []
        },
        {
          name: '审批中',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: []
        },
        {
          name: '已通过',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: []
        },
        {
          name: '已驳回',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: []
        }
      ]
    }
    // 获取数据
    getData () {
      let that = this
      that.$http.post(this.rootUrl + '/h/pollresbasicdeclareMobile/findCountByCityId').then(res => {
        console.log(res.data)
        this.option.series[0].data = res.data.weishenbao
        this.option.series[1].data = res.data.shenpizhong
        this.option.series[2].data = res.data.yitongguo
        this.option.series[3].data = res.data.yibohui
      }).catch(err => {
        console.log(err, 22)
      })
    }
    // 饼图点击事件
    click () {
      this.$router.push({ name: 'analyzeList' })
    }
    created () {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
