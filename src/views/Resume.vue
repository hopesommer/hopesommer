
<template>
  <div class="px-4 py-8 resume" :class="isMobile ? 'px-4' : 'px-8'">
    <div class="font-semibold mb-7 text-5xl">Resume</div>
    <div v-if="isMobile">
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
</template>

<script>
import resize from "@/mixins/resize.js"
import resume from "@/mixins/resume.js"
import Education from "@/components/Education.vue"
import Experience from "@/components/Experience.vue"
import Skills from "@/components/Skills.vue"

export default {
name: "Resume",
mixins: [resize, resume],
components: {
  Education,
  Experience,
  Skills
},
computed: {
  isMobile() {
    return this.breakpoint === 'xs' || this.breakpoint === 'sm' || this.breakpoint === 'md'
  }
},
}

</script>