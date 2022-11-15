import data from '@/resume/data.js'


export default {
    data() {
        return {
            resume: data
        }
    },
    computed: {
        jobs() {
            return this.resume.experience
        }
    },
    created() {
        this.resume = data
    }
}