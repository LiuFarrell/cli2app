<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      //   isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.link).catch(err => err); //catch解决连续点击报错的问题
    }
  }
};
</script>

<style lang="scss">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 98px;
  font-size: 20px;
}
.tab-bar-item img {
  height: 40px;
  width: 40px;
  margin-top: 6px;
  //vertical-align: middle;//去除图片下的3像素
}
</style>
