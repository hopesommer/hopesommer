<template>
    <div>
        <div class="font-medium text-2xl section-header mb-5">Skills</div>
        <kbd 
            v-for="skill in resume.skills"
            class="kbd kbd-xs m-1 p-2.5">
            {{skill.name}}
        </kbd>
    </div>
</template>

<script>
import resume from "@/mixins/resume.js"

export default {
    mixins: [resume]
}
</script>