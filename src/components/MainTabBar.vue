<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="#DC292E">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/hot" activeColor="#DC292E">
      <img slot="item-icon" src="../assets/img/tabbar/hot.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/hot_active.svg"
        alt=""
      />
      <div slot="item-text">热门</div>
    </tab-bar-item>
    <tab-bar-item link="/activity" activeColor="#DC292E">
      <img slot="item-icon" src="../assets/img/tabbar/activity.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/activity_active.svg"
        alt=""
      />
      <div slot="item-text">活动</div>
    </tab-bar-item>
    <tab-bar-item link="/notice" activeColor="#DC292E">
      <img slot="item-icon" src="../assets/img/tabbar/notice.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/notice_active.svg"
        alt=""
      />
      <div slot="item-text">通知</div>
    </tab-bar-item>
    <tab-bar-item link="/mine" activeColor="#DC292E">
      <img slot="item-icon" src="../assets/img/tabbar/mine.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/mine_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarItem from "./tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="scss"></style>
