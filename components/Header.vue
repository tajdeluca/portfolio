<template>
  <div class="header" :style="cssVars">
    <div class="inner-header flex">
        <h1>{{ heading }}</h1>
        <h2>{{ subheading }}</h2>
    </div>

    <!--Waves Container-->
    <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </div>
    <!--Waves end-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type HeaderCSSVariables = {
  '--header-background': string;
};

export default Vue.extend({
  props: {
    heading: String,
    subheading: String,
    headerBackgroundGradientStartColour: {
      type: String,
      default: 'rgba(84, 58, 183, 1)',
    },
    headerBackgroundGradientEndColour: {
      type: String,
      default: 'rgba(0, 172, 193, 1)',
    }
  },
  computed: {
    cssVars(): HeaderCSSVariables {
      return {
        '--header-background': `linear-gradient(60deg, ${this.headerBackgroundGradientStartColour} 0%, ${this.headerBackgroundGradientEndColour} 100%)`,
      }
    }
  }
});
</script>

<style scoped>
@import "typeface-zilla-slab/index.css";

.header {
  position: relative;
  text-align: center;
  background: var(--header-background);
  color: white;
}

.inner-header {
  height: 45vh;
  width: 100%;
  margin: 0;
  padding: 3rem;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.waves {
  display: flex;
  height: 4rem;
  width: 100%;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */
.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}
.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
}
</style>
