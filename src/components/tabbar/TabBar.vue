<template>
  <div id="tab-bar">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>

<style lang="scss">
#tab-bar {
  display: flex;
  background: rgba(249, 249, 249, 0.94);
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
