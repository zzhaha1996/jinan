<template>
  <div>
    <!--<x-header :left-options="{backText: '返回'}"/>-->

    <div>
      <group title="">

        <!--<cell
          is-link
          :border-intent="false"
          :arrow-direction="showContent004 ? 'up' : 'down'"
          @click.native="showContent004 = !showContent004"
        style="height: 10px"></cell>

        <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
-->
        <flexbox>
          <flexbox-item :span="7/10">
            <x-input placeholder="请输入公司名称"
                     novalidate
                     :show-clear="true"
                     placeholder-align="left"
                     v-model="queryName"/>
          </flexbox-item>
          <flexbox-item :span="3/10">
            <x-button plain
                      mini
                      type="primary"
                      @click.native="query()">查询</x-button>
          </flexbox-item>
        </flexbox>

      </group>
    </div>

    <div v-for="item in companyList">
      <div style="width:100%;">
        <div style="width: 100%;background: #e5e5e5;float: left;padding-top: 10px">
          <div style="width:100%;background: #ffffff;position:relative;padding-top: 5px;padding-bottom: 5px  ">
            <span class="list-title" @click="info(item)">{{ item.name }}</span>
            <span class="list-title-dm">{{ item.CREDIT_CD }}</span>
          </div>
          <div style="width:100%;background: #ffffff;border-top: 1px solid #e6e6e6">
            <span class="list-item">地址：{{ item.REG_ADDRESS }}</span>
            </br>
            <span class="list-item">入档时间：{{ item.CREATED_DATE | dateformat}}</span>
          </div>
        </div>
      </div>

    </div>

    <toast v-model="showPositionValue"
           type="text"
           :time="800"
           is-show-mask
           :text="showPositionText"
           position="top"/>

  </div>
</template>

<script>
  export default {
    name: 'CompanyListPage',
    data () {
      return {
        queryName: '',
        queryCityCode: '',
        showPositionValue: false,
        showPositionText: '',
        showContent004: false,
        companyList: []

      }
    },
    methods: {
      formatDate: function (t) {
        return 'aa' + t
      },
      query: function () {
        /* this.showPositionText = this.queryName
        this.showPositionValue = true */
        this.getData(this.queryCityCode, this.queryName)
      },
      listClick: function (row) {
        console.log(row)
      },
      info: function (item) {
        this.$router.push({ name: 'companyInfoDetail', query: { id: item.id } })
      },
      getData (code, name) {
        let that = this
        that.$http.get(this.rootUrl + '/h/pollresbasicdeclareMobile/findCityWry?code=' + code + '&name=' + name + '').then(res => {
          that.companyList = res.data.data
        }).catch(err => {
          console.log(err, 22)
        })
      }
    },
    filters: {
      dateformat(val){
        let date1 = new Date(val);
        return date1.toLocaleString();
      }
    },
    created () {
      this.queryCityCode = this.$route.query.code
      this.getData(this.queryCityCode, '')
    }
  }
</script>

<style scoped>

  .list-title {
    color: #237aff;
    font-size: 17px;
    padding-left: 5px;
  }
  .list-title-dm{
    color: #9f9f9f;
    font-size: 10px;
    float: right;
    position:absolute;
    bottom:0px;
    right: 5px;
  }
  .list-item{
    color: #000000;
    font-size: 14px;
    padding-left: 5px;
  }
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
