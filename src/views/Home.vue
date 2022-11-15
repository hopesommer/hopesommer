<template>
    <div class="home" :class="isMobile ? 'py-8' : 'py-10'">
      <div class="card bg-base-100 items-center pt-5">
        <div class="relative">
          <img src="https://emojis.slackmojis.com/emojis/images/1643516119/21426/sparkles-pink.gif?1643516119" class="absolute top-6"/>
          <img src="/images/IMG_2221.png" alt="Shoes" class="profile" />
        </div>
        <div class="card-body items-center text-center">
          <span class="card-title text-5xl">Hope Sommer</span>
          <span class="text-xl">Fullstack Developer</span>
          <div class="card-actions mt-3">
            <button class="btn btn-primary white-text"><a href="/files/hope_sommer.pdf" download>Download CV</a></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import resize from "@/mixins/resize.js"
  
  export default {
    name: "Home",
    mixins: [resize],
    computed: {
      isMobile() {
        return this.breakpoint === 'xs' || this.breakpoint === 'sm' || this.breakpoint === 'md'
      }
    },
  }
  </script>