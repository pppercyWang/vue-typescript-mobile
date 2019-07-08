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
import { SwiperType } from '@/interface';
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
export default class extends Vue {
  private swiperImgsData = null;
  @Action('swiperImgs') private actionSwiperImgs;
  @Getter('swiperImgs') private getterSwiperImgs;
  private created() {
    if (this.getterSwiperImgs.length === 0) {
     try {
        this.actionSwiperImgs({type: 2} as SwiperType);  // 传参时进行类型检查
        this.swiperImgsData = this.getterSwiperImgs;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('store中已储存swiperImgs数据');
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }
}
</script>
<style scoped lang="scss">
.header-swipe{
  margin-bottom: 10px;
  img {
     width: 100%;
      display: block;
      height: 240px;
  }
}
</style>