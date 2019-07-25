<template>
  <div class="home">
    <div class="header">
      <swiper :imgs="swiperImgsData"></swiper>
    </div>
    <div class="body">
      <!-- 当首页的数据是通过api获取的时候。可以使用骨架屏来提高用户体验 -->
      <div class="skeleton" v-show="skeletonShow">
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
      </div>
      <van-grid :border="false" :column-num="3" v-show="!skeletonShow">
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
        <van-cell
          @click="$router.push('/another')"
          icon="points"
          title-class="title-left"
          title="个人中心"
          is-link
        />
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
import {
  Toast,
  Row,
  Col,
  Icon,
  Skeleton,
  Cell,
  CellGroup,
  Grid,
  GridItem
} from "vant";
import GridContent from "@/components/home/GridContent.vue";
import Swiper from "@/components/Swiper.vue";
import { SwiperType } from "@/interface";
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [Skeleton.name]: Skeleton,
    [GridItem.name]: GridItem,
    GridContent,
    Swiper
  }
})
export default class extends Vue {
  private skeletonShow: boolean = true;
  private swiperImgsData = null;
  @Action("swiperImgs") private actionSwiperImgs;
  @Getter("swiperImgs") private getterSwiperImgs;
  private async getSwiperImgs() {
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
  //
  private async skeletonNotShow() {
    this.skeletonShow = false;
  }
  private async created() {
    this.getSwiperImgs();
    setTimeout(this.skeletonNotShow, 1000); // api获取首页数据
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
.body {
  i {
    display: block;
    font-size: 23px; // grid中icon和字体大小
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
.skeleton {
  .van-skeleton {
    display: inline-block;
    width: 50px;
    margin: 0px 22px;
    .van-skeleton__content {
      width: 50px;
    }
    .van-skeleton__row {
      height: 50px;
      margin: 17px 0px;
    }
  }
}
</style>