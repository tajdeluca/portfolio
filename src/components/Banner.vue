<template>
  <div>
    <div class="header" :style="cssVars">
      <div class="inner-header container flex">
        <h1>{{ heading }}</h1>
        <h2>{{ subheading }}</h2>
      </div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" />
          <use xlink:href="#gentle-wave" x="48" y="3" />
          <use xlink:href="#gentle-wave" x="48" y="5" />
          <use xlink:href="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type HeaderCSSVariables = {
  '--animation-speed-multiplier'?: number
  '--header-background'?: string
  '--header-foreground'?: string
};

export default Vue.extend({
  props: {
    heading: String,
    subheading: String,
    animationSpeedMultiplier: {
      type: Number,
      default: 2.5,
    },
    headerBackgroundGradientStartColour: {
      type: String,
      default: 'rgba(84, 58, 183, 1)',
    },
    headerBackgroundGradientEndColour: {
      type: String,
      default: 'rgba(0, 172, 193, 1)',
    },
    headerBackgroundGradientDirection: {
      type: String,
      default: '134',
    },
    headerForegroundColour: {
      type: String,
      default: '#ffffff',
    },
    showHomeLink: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    cssVars(): HeaderCSSVariables {
      return {
        '--animation-speed-multiplier': this.animationSpeedMultiplier,
        '--header-background': `linear-gradient(${this.headerBackgroundGradientDirection}deg, ${this.headerBackgroundGradientStartColour} 0%, ${this.headerBackgroundGradientEndColour} 100%)`,
        '--header-foreground': this.headerForegroundColour,
      }
    },
  },
})
</script>

<style scoped>
.header {
  background: var(--header-background);
  color: var(--header-foreground);
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
}

.inner-header {
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  min-height: 45vh;
  width: 100%;
}

h1 {
  font-size: 250%;
}

h2 {
  font-size: 150%;
}

@media (min-width: 576px) {
  .inner-header {
    margin-bottom: 0;
    margin-top: 0;
  }
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
  margin-bottom: -1px;
  width: 100%;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: calc(-2s * var(--animation-speed-multiplier));
  animation-duration: calc(7s * var(--animation-speed-multiplier));
  fill: var(--body-background);
  opacity: 0.7;
}

.parallax > use:nth-child(2) {
  animation-delay: calc(-3s * var(--animation-speed-multiplier));
  animation-duration: calc(10s * var(--animation-speed-multiplier));
  fill: var(--body-background);
  opacity: 0.5;
}

.parallax > use:nth-child(3) {
  animation-delay: calc(-4s * var(--animation-speed-multiplier));
  animation-duration: calc(13s * var(--animation-speed-multiplier));
  fill: var(--body-background);
  opacity: 0.3;
}

.parallax > use:nth-child(4) {
  animation-delay: calc(-5s * var(--animation-speed-multiplier));
  animation-duration: calc(20s * var(--animation-speed-multiplier));
  fill: var(--body-background);
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
