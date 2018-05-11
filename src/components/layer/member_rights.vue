<template>
    <div>
      <div class="layer" v-if="show">
        <div class="layer-ground"></div>
        <div class="layer-container">
          <div class="layer-bg"></div>
          <div class="layer-close"></div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
</style>
<script>

    export default{
        data(){
            return {
              show:false
            }
        },
        components: {

        }
    }
</script>
