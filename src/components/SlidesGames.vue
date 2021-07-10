<template>
    <!-- <div class="menu">
        <div class="menu__item">Feature</div>
        <div class="menu__item">Grand Theft Auto</div>
        <div class="menu__item">Call of Duty:Mobile</div>
        <div class="menu__item">Free Fire</div>
        <div class="menu__item">Fortine</div>
    </div> -->
    <div class="wrapper">
    <SplitCarousel v-bind="option">
      <SplitCarouselItem v-for="item in itemAmount" :key="item">
        <div class="box">{{ item }}</div>
      </SplitCarouselItem>
    </SplitCarousel>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      itemAmount: 6,
      option: {
        displayAmount: 4,
        autoplay: false,
        speed: 500,
        interval: 3000,
        loop: true,
        height: 80,
        itemWidth: 154,
        pauseOnHover: true,
        timingFunction: "ease",
        arrowVisible: "default",
      },
      timingFuntionOptions: [
        {
          value: "ease",
          label: "ease",
        },
        {
          value: "ease-in",
          label: "ease-in",
        },
        {
          value: "ease-out",
          label: "ease-out",
        },
        {
          value: "ease-in-out",
          label: "ease-in-out",
        },
        {
          value: "linear",
          label: "linear",
        },
        {
          value: "steps(2, start)",
          label: "steps(2, start)",
        },
        {
          value: "cubic-bezier(0.06, 0.29, 0.19, 1.4)",
          label: "cubic-bezier(0.06, 0.29, 0.19, 1.4)",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 900px;
  margin: 0 auto;
}
.box {
  border: 1px solid #eee;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);

}
.operator {
  padding: 30px 0;
}

// .menu{
//     margin-top:10px;
//     margin-bottom:10px;

//     &__item{
//    position: relative;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     width: 154px;
//     height: 50px;
//     margin-right: 12px;
//     color: rgba(255, 255, 255, 0.6);
//     text-align: center;
//     vertical-align: middle;
//     border-radius: 3px;
//     background-color: rgb(107, 182, 92);
// }
// }



</style>