<template>
  <div class="home">
    <div class="header">
      <van-swipe class="header-swipe" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in swiperImgsData" :key="index">
          <img :src="item.src" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import { Toast, Swipe, SwipeItem, Row, Col, Icon, Cell, CellGroup } from "vant";
@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class Home extends Vue {
  private swiperImgsData = null;
  @Action('swiperImgs') private actionSwiperImgs: any;
  @Getter('swiperImgs') private getterSwiperImgs: any;
  private handleClick() {
    Toast("222222222222");
  }
  private created() {
    if (this.getterSwiperImgs.length === 0) {
      this.actionSwiperImgs();
      this.swiperImgsData = this.getterSwiperImgs;
    } else {
      console.log('store中已储存swiperImgs数据');
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }
}
</script>
<style lang="sass">
  #listMovieBox
    padding: 0 16px
    p
      text-align: left;
  .header 
  .header-swipe 
    img 
      width: 100%;
      display: block;
      height: 240px;
    margin-bottom: 10px;
  .index-group 
    margin-bottom: 15px;
  .index-links
    padding: 10px;
    font-size: 13px;
    text-align: center;
    background-color: #fff;
    i 
      display: block;
      font-size: 26px;
  .title-left
    margin-right: 190px
    span
      width: 200px
</style>