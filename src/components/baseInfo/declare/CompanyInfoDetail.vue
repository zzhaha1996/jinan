<template>
  <div style="background: #ffffff">
    <!--<x-header :left-options="{backText: '返回'}"></x-header>-->

    <div style="text-align: center;padding-top: 8px;padding-bottom: 8px">
      <span style="color: black;font-size: 18px">
        {{detail.COMPANY_NAME}}
      </span>
    </div>
    <flexbox orient="vertical">
      <flexbox-item  class="f-item">
        <span class="f-item-title">统一社会信用代码:</span>
        <span class="f-item-content">{{detail.CREDIT_CD}}</span>
      </flexbox-item>
      <flexbox-item class="f-item">
        <span class="f-item-title">法定代表人:</span>
        <span  class="f-item-content">{{detail.LEGAL_PERSON}}</span>
      </flexbox-item>
      <!--<flexbox-item>-->
        <!--<span>运营状态:</span>-->
        <!--<span>{{detail}}</span>-->
      <!--</flexbox-item>-->
      <flexbox-item class="f-item">
        <span  class="f-item-title">注册地址:</span>
        <span class="f-item-content">{{detail.REG_ADDRESS}}</span>
      </flexbox-item>
      <flexbox-item class="f-item">
        <span  class="f-item-title">生产经营场所地址:</span>
        <span class="f-item-content">{{detail.OPER_ADDRESS}}</span>
      </flexbox-item>
      <flexbox-item class="f-item">
        <span  class="f-item-title">固定电话:</span>
        <span class="f-item-content">{{detail.PHONE_NUM}}</span>
      </flexbox-item>
      <flexbox-item class="f-item">
        <span  class="f-item-title">环保联系人:</span>
        <span class="f-item-content">{{detail.ENGINEER}}</span>
      </flexbox-item>
      <flexbox-item class="f-item">
        <span  class="f-item-title">环保联系人电话:</span>
        <span class="f-item-content">{{detail.ENV_TELEPHONE}}</span>
      </flexbox-item>
      <!--<flexbox-item>-->
        <!--<span>营业期限（年限）:</span>-->
        <!--<span>{{detail}}</span>-->
      <!--</flexbox-item>-->
    </flexbox>
  </div>
</template>

<script>
  export default {
    name: 'CompanyInfoDetail',
    data () {
      return {
        companyList: [{
          number: '655',
          name: '王小虎'
        }, {
          number: '234',
          name: '王aa'
        }],
        detail:{},

      }
    },
    methods: {
      listClick: function (row) {
        console.log(row)
      },
      getData () {
        let that = this
        that.$http.get(this.rootUrl + '/h/pollresbasicdeclareMobile/wryDetail?id=' +that.$route.query.id).then(res => {
          that.detail = res.data.data
        }).catch(err => {
          console.log(err, 22)
        })
      }
    },
    created () {
      // this.queryCityCode = this.$route.query.code
      this.getData()
    }
  }
</script>

<style scoped>
 .f-item{
   padding-top: 8px;
   padding-bottom: 8px;
   border-top: 1px solid #cfcfcf
 }
  .f-item-title{
    float: left;
    color: #9c9c9c;
    padding-left: 5px;
  }
  .f-item-content{
    float: right;
    padding-right: 5px;
  }
</style>
