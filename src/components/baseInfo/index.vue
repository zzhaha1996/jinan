<template>
  <div>
    <flexbox class="wry_head_bg"
             orient="vertical"
             :gutter="0"
             align="center">
      <flexbox-item>
        <div class="wry_head_title name"><span class="head-text">污染源基础数据</span></div>
      </flexbox-item>
      <flexbox-item>
        <div class="wry_head_title count"> <span class="head-number"> {{allNum}}</span><span class="wry_head_title unit">家</span></div>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0" class="wry_enteripse_bg">
      <flexbox-item class="wry_enteripse_line">
        <span class="wry_enteripse_word1">截至目前</span>
        <span class="wry_enteripse_type1">&nbsp;自动监控排口&nbsp;</span>
        <span class="wry_enteripse_count1">3575</span>
        <span class="wry_enteripse_unit1">&nbsp;个</span>
        <span class="wry_enteripse_word2">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span class="wry_enteripse_type2">企业&nbsp;</span>
        <span class="wry_enteripse_count2">20</span>
        <span class="wry_enteripse_unit2">&nbsp;家</span>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0" class="wry_type_bg" align="center">
      <flexbox-item class="wry_type_div line">
        <div class="wry_type_count first">5650</div>
        <div class="wry_type_name">排污许可数</div>
      </flexbox-item>
      <flexbox-item class="wry_type_div line">
        <div class="wry_type_count second">2380</div>
        <div class="wry_type_name">本月执法次数</div>
      </flexbox-item>
      <flexbox-item class="wry_type_div">
        <div class="wry_type_count third">88020</div>
        <div class="wry_type_name">企业信用评价数</div>
      </flexbox-item>
    </flexbox>
    <grid class="grid_btn"
          :cols="2"
          :show-vertical-dividers="true"
          :show-lr-borders="true">
      <grid-item link="/companyNumberList" >
        <img slot="icon" src="../../assets/wryInfo.png">
        <span slot="label"><div class="grid_label">污染源基础信息</div><div class="grid_label_sub">污染源基础信息查询</div></span>
      </grid-item>
      <!--<grid-item label="">
        <img slot="icon" src="../../assets/declare.png">
        <span slot="label"><div class="grid_label">企业申报</div><div class="grid_label_sub">企业申报信息查询</div></span>
      </grid-item>-->
      <grid-item link="/analyze">
        <img slot="icon" src="../../assets/analysis.png">
        <span slot="label"><div class="grid_label">申报分析</div><div class="grid_label_sub">企业申报进度报表</div></span>
      </grid-item>
    </grid>

  </div>
</template>

<script>

  import { Group, Cell, CellBox, Grid, GridItem, Flexbox, FlexboxItem, XImg } from 'vux'


  export default {
    name: 'index',
    components: {
      Group,
      Cell,
      CellBox,
      Grid,
      GridItem,
      Flexbox,
      FlexboxItem,
      XImg
    },
    data () {
      return {
        companyList: [],
        allNum:0,
      }
    },
    methods: {
      getData () {
        let that = this
        debugger;
        that.$http.get(this.rootUrl + '/h/pollresbasicdeclareMobile/findWryCount').then(res => {
          debugger;
          that.companyList = res.data.data
          for(var i=0;i<that.companyList.length;i++){
            var tempNum = Number(that.companyList[i].num);
            that.allNum += tempNum;
          }
        }).catch(err => {
          console.log(err, 22)
        })
      }
    },
    created () {
      debugger;
      this.getData()
    }
  }
</script>

<style scoped>
  .wry_head_bg {
    background-image: url(./../../assets/wry_bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100%;
    height: 158pt;

  }

  .wry_head_title {
    text-align: center;
    color: #fff;
  }

  .wry_head_title.name {
    margin-top: 52pt;
    font-size: 20pt;
    color: #fff;
  }

  .wry_head_title.count {
    font-size: 24pt;
    color: #FFE71D;
    font-weight: bold;
  }

  .wry_head_title.unit {
    font-size: 12pt;
    color: #FFE71D;
    font-weight: bold;
  }

  .wry_enteripse_bg {
    background: rgba(255, 255, 255, 1);
    margin-bottom: 5pt;
  }

  .wry_enteripse_line {
    padding: 8pt 11pt;
    font-size: 0.6rem;

  }

  .wry_enteripse_word1 {
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
    background-image: linear-gradient(90deg, #feac60 0%, #ff532d 100%), linear-gradient(#facd89, #facd89);
    border-radius: 3pt;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .wry_enteripse_type1 {
    font-weight: 500;
    color: #8f8f94;
    font-size: 0.6rem;
  }

  .wry_enteripse_count1 {
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
    background-image: linear-gradient(90deg, #feac60 0%, #ff532d 100%), linear-gradient(#facd89, #facd89);
    border-radius: 3pt;
    color: rgba(255, 255, 255, 1);

  }

  .wry_enteripse_unit1 {
    color: #8f8f94;
    font-size: 0.6rem;

  }

  .wry_enteripse_word2 {
    color: #8f8f94;
    font-size: 0.6rem;

  }

  .wry_enteripse_type2 {
    color: #8f8f94;
    font-size: 0.6rem;

  }

  .wry_enteripse_count2 {
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
    background-image: linear-gradient(90deg, #feac60 0%, #ff532d 100%), linear-gradient(#facd89, #facd89);
    border-radius: 3pt;
    color: rgba(255, 255, 255, 1);

  }

  .wry_enteripse_unit2 {
    color: #8f8f94;
    font-size: 0.6rem;
  }

  .wry_type_bg {
    height: 65pt;
    background: rgba(255, 255, 255, 1);
    margin-bottom: 5pt;
    text-align: center;
  }

  .wry_type_div {
    height: 52pt;
  }

  .wry_type_div.line {
    border-right: 1px solid rgba(210, 210, 210, 1);
  }

  .wry_type_name {
    font-size: 12px;
    text-align: center;
  }

  .wry_type_count {
    font-size: 19.2px;
    font-weight: bold;
    text-align: center;
  }

  .first {
    color: rgba(251, 98, 70, 1);
  }

  .second {
    color: rgba(251, 168, 70, 1);
  }

  .third {
    color: rgba(70, 189, 251, 1);
  }

  .grid_btn {
    background: rgba(255, 255, 255, 1);
  }

  .grid_btn img {
    width: 30pt;
    height: 30pt;
  }

  .grid_label {
    margin-top: 8pt;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-size: 14.88px;
  }

  .grid_label_sub {
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    font-size: 13px;
  }
  .head-text{
    font-size: 20px;
    color:#fff
  }
  .head-number{
    font-size: 23px;
    color: #FFE71D;
  }
</style>
