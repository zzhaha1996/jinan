<template>
  <div>
   <!-- <x-header :left-options="{backText: '首页'}"/>-->
    <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #F7F7F7">
          <th style="color: #adadad">序号</th>
          <th style="color: #adadad">名称</th>
          <th style="color: #adadad">数量</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) in companyList">
        <tr @click="listClick(item)">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td style="color: #237aff" >{{ item.num }}</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
  export default {
    name: 'CompanyNumberPage',
    data () {
      return {
        companyList: []

      }
    },
    methods: {
      listClick: function (row) {
        console.log(row)
        this.$router.push({ name: 'companyList', query: { code: row.code } })
      },
      getData () {
        let that = this
        that.$http.get(this.rootUrl + '/h/pollresbasicdeclareMobile/findWryCount').then(res => {
          that.companyList = res.data.data
        }).catch(err => {
          console.log(err, 22)
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
