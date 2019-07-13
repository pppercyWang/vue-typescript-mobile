<template>
   <van-swipe class="header-swipe" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.src" />
        </van-swipe-item>
      </van-swipe>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import {
  Swipe,
  SwipeItem,
} from "vant";
import { Icon  } from "vant";
@Component({
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  }
})
export default class extends Vue {
  @Prop()
  private imgs!: [];
  @Prop(String)
  private msg!: string;
}
</script>
<style lang="scss" scoped>
.header-swipe {
  margin-bottom: 10px;
  img {
    width: 100%;
    display: block;
    height: 240px;
  }
}
</style>