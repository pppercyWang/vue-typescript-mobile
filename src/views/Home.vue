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
          <div @click="handleClick()">
            <i class="iconfont percy-icon-meishi2"></i>美食
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-dianying"></i>电影
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-yule"></i>娱乐
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="handleClick()">
            <i class="iconfont percy-icon-waimai"></i>外卖
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-zhusujiedai"></i>酒店
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-chaoshi"></i>超市
          </div>
        </van-grid-item>
        <van-grid-item>
          <div @click="handleClick()">
            <i class="iconfont percy-icon-chepai"></i>打车
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-chongzhi"></i>充值
          </div>
        </van-grid-item>
        <van-grid-item>
           <div @click="handleClick()">
            <i class="iconfont percy-icon-lvyou"></i>旅游
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="footer">
      <van-cell-group class="top-group">
        <van-cell @click="handleClick" icon="points" title-class="title-left" title="个人中心" is-link />
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
import { SwiperType } from "@/interface";
@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  }
})
export default class extends Vue {
  private swiperImgsData = null;
  @Action("swiperImgs") private actionSwiperImgs;
  @Getter("swiperImgs") private getterSwiperImgs;
  private handleClick() {
    this.$router.push("/another");
  }
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