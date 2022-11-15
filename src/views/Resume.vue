<template>
  <Layout>
      <div class="flex px-4 py-8 resume" :class="isMobile ? 'x-4' : 'px-8'">
          <div v-if="isMobile">
              <div class="font-semibold mb-7 text-5xl">Resume</div>
              <Experience/>
              <Education/>
              <Skills/>
          </div>
          <div v-else>
              <div class="gap-7 grid grid-cols-2">
                  <div>
                      <Experience/>
                  </div>
                  <div>
                      <Education/>
                      <Skills/>
                  </div>
              </div>
          </div>
      </div>
  </Layout>
</template>

<script>
import resize from "@/mixins/resize.js"
import Experience from "@/components/Experience.vue"
import Education from "@/components/Education.vue"
import Skills from "@/components/Skills.vue"
export default {
  components: {
      Experience,
      Education,
      Skills
  },
  mixins: [resize],
  computed: {
    isMobile() {
      return this.breakpoint === 'xs' || this.breakpoint === 'sm' || this.breakpoint === 'md'
    }
  }
}
</script>