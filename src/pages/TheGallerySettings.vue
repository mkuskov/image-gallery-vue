<script lang="ts">
import TheSettings from "@/entities/settings/UI/TheSettings.vue";

export default {
  components: {
    TheSettings,
  },
  data() {
    return {
    };
  },
};

</script>


<template>
  <div class="container-settings">
    <TheSettings />
  </div>
</template>

<style lang="scss">
.container-settings {
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 15px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px;
  }
}
</style>
