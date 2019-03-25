# vue-mobile-detection
Vue.js prototype function `this.$isMobile()` that returns a Boolean value depending on whether or not the user is browsing with a mobile

<p align="center">
  <a href="https://www.npmjs.com/package/vue-mobile-detection"><img alt="NPM Version" src="https://img.shields.io/npm/v/vue-mobile-detection.svg?style=for-the-badge"></a> 
  <a href="https://twitter.com/alberto_jrz"><img alt="Twitter" src="https://img.shields.io/static/v1.svg?label=TWITTER&message=follow&color=blue&style=for-the-badge"></a> 
</p>

## Demo

https://ajerez.github.io/vue-mobile-detection/


## Installation

#### With npm (Recommended)
```bash
npm install vue-mobile-detection
```

#### yarn
```bash
yarn add vue-mobile-detection
```

## Usage

#### Plugin installation

```vue

import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection);

/* After the install you can use this.$isMobile() in all your vue components */
```

#### Using the plugin

```vue

<template>
  <div id="app">
    <!-- Use in template -->
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>
export default {
  created() {
    // Use in js
    console.log(this.$isMobile());
  }
};
</script>

```


## License

This project is licensed under the terms of the MIT license
