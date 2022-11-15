<template>
    <div>
        <div class="font-medium text-2xl section-header">Experience</div>
        <div 
            v-for="job in jobs"
            class="white-text card bg-neutral my-5">
            <div class="card-body p-5">
                <h2 class="card-title block mb-1">
                {{job.company}}
                 <div class="badge badge-time badge-secondary block text-xs mt-2 white-text">{{job.timeperiod}}</div>
                </h2>
                <div class="mb-2">{{job.description}}</div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium text-rose-400 flex align-center">
                    Read More
                </div>
                <div class="collapse-content px-7 text-rose-400"> 
                    <ul class="list-disc">
                    <li v-for="responsibility in job.responsibilities">
                        {{responsibility}}
                    </li>
                    </ul>
                </div>
                </div>
                <div class="card-actions justify-end mt-4">
                    <div
                        v-for="item in job.stack"
                        class="badge badge-time badge-primary white-text">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import resume from "@/mixins/resume.js"

export default {
    name: "Experience",
    mixins: [resume]
}

</script>