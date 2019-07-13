<template>
  <div class="home">
    <div class="header">
      <van-swipe class="header-swipe" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in swiperImgsData" :key="index">
          <img :src="item.src" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="body">
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-meishi2" msg="美食"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-dianying" msg="电影" number="43"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-yule" msg="娱乐"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-waimai" msg="外卖" number="2"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-zhusujiedai" msg="酒店"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-chaoshi" msg="超市"></grid-content>
          </div>
        </van-grid-item>
         <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-chepai" msg="打车"></grid-content>
          </div>
        </van-grid-item>
         <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-chongzhi" msg="充值"></grid-content>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="$router.push('/another')">
            <grid-content iconStr="percy-icon-lvyou" msg="旅游"></grid-content>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="footer">
      <van-cell-group class="top-group">
        <van-cell @click="$router.push('/another')" icon="points" title-class="title-left" title="个人中心" is-link />
        <van-cell icon="gold-coin-o" title-class="title-left" title="我的钱包" is-link />
        <van-cell icon="gift-o" title-class="title-left" title="活动中心" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="records" title-class="title-left" title="问题反馈" is-link />
      </van-cell-group>
    </div>
  </div>
  
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import { Toast, Swipe, SwipeItem, Row, Col, Icon, Cell, CellGroup, Grid, GridItem } from "vant";
import GridContent from "@/components/home/GridContent.vue";
import { SwiperType } from "@/interface";
@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    GridContent
  }
})
export default class extends Vue {
  private swiperImgsData = null;
  @Action("swiperImgs") private actionSwiperImgs;
  @Getter("swiperImgs") private getterSwiperImgs;
  private async created() {
    if (this.getterSwiperImgs.length === 0) {
      try {
        await this.actionSwiperImgs({ type: 2 } as SwiperType); // 传参时进行类型检查
        this.swiperImgsData = this.getterSwiperImgs;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("store中已储存swiperImgs数据");
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }
}
</script>
<style scoped lang="scss">
.header-swipe {
  margin-bottom: 10px;
  img {
    width: 100%;
    display: block;
    height: 240px;
  }
}
.body{
  i {
    display: block;
    font-size: 23px;  // grid中icon和字体大小
  }
}
.top-group {
  margin-bottom: 15px;
}
.title-left {
  margin-right: 190px;
  span {
    width: 200px;
  }
}
</style>