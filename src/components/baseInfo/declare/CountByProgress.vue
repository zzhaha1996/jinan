<template>
  <div>
    <!--<x-header :left-options="{backText: '返回'}"></x-header>-->
    <group>
      <cell title="按进度汇总" is-link/>
      <echarts :options="option" style="width: 100%;height: 250px" @click="click"/>
      <cell title="按地市汇总" is-link link="/countByCountry"/>
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
  export default class CountByProgress extends Vue {
    option = {
      tooltip: {
        trigger: 'item',
        formatter: ' {b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['未申报', '审批中', '已通过', '已驳回']
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: []
        }
      ]
    }
    data = []
    created () {
      this.getData()
    }

    // 获取数据
    getData () {
      let that = this
      that.$http.post(this.rootUrl + '/h/pollresbasicdeclareMobile/findCount').then(res => {
        for (let i = 0; i < 4; i++) {
          if (res.data[i] !== undefined) {
            if (res.data[i].NAME === '未申报') {
              let obj = {}
              obj.value = res.data[i].VALUE
              obj.name = res.data[i].NAME
              this.data.push(i, obj)
            }
            if (res.data[i].NAME === '审批中') {
              let obj = {}
              obj.value = res.data[i].VALUE
              obj.name = res.data[i].NAME
              this.data.push(i, obj)
            }
            if (res.data[i].NAME === '已通过') {
              let obj = {}
              obj.value = res.data[i].VALUE
              obj.name = res.data[i].NAME
              this.data.push(i, obj)
            }
            if (res.data[i].NAME === '已驳回') {
              let obj = {}
              obj.value = res.data[i].VALUE
              obj.name = res.data[i].NAME
              this.data.push(i, obj)
            }
          } else {
            if (i === 0) {
              let obj = {}
              obj.value = 0
              obj.name = '未申报'
              this.data.push(obj)
            } else if (i === 1) {
              let obj = {}
              obj.value = 0
              obj.name = '审批中'
              this.data.push(obj)
            } else if (i === 2) {
              let obj = {}
              obj.value = 0
              obj.name = '已通过'
              this.data.push(obj)
            } else if (i === 3) {
              let obj = {}
              obj.value = 0
              obj.name = '已驳回'
              this.data.push(obj)
            }
          }
        }
        console.log(this.data)
        that.option.series[0].data = this.data
      }).catch(err => {
        console.log(err, 22)
      })
    }

    // 饼图点击事件
    click () {
      this.$router.push({ name: 'analyzeList' })
    }
  }
</script>

<style scoped>

</style>
