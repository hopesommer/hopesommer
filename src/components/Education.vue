<template>
    <div>
        <div class="font-medium text-2xl section-header">Education</div>
        <div class="card my-5 bg-primary white-text">
            <div class="card-body p-5">
            <h2 class="card-title mb-1">{{resume.education.school}}</h2>
            <div class="badge badge-time badge-secondary block text-xs white-text font-semibold">{{resume.education.timeperiod}}</div>
            <p>{{resume.education.degree}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import resume from '@/mixins/resume.js'

export default {
    mixins: [resume]
}
</script>