<template>
  <div class="home">
    <div class="header">
     <swiper :imgs="swiperImgsData"></swiper>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import Swiper from "@/components/Swiper.vue";
import { SwiperType } from '@/interface';
@Component({
  components: {
    Swiper
  }
})
export default class extends Vue {
  private swiperImgsData = null;
  @Action('swiperImgs') private actionSwiperImgs;
  @Getter('swiperImgs') private getterSwiperImgs;
  private async created() {
    if (this.getterSwiperImgs.length === 0) {
     try {
        await this.actionSwiperImgs({type: 2} as SwiperType);  // 传参时进行类型检查
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