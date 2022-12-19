<template>
    <div class="py-8 resume" :class="isMobile ? 'px-6' : 'px-10'">
        <div class="font-semibold mb-7 text-5xl">Projects</div>
        <a href="https://pokedex-snr.vercel.app/">
            <div class="card bg-base-100 shadow-xl relative" :class="!isMobile? 'w-96': 'w-60'">
            <figure class="projectImage"><img class="projectImage" src="/images/pokedex.png" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Pokedex
                <div class="badge badge-secondary white-text">NEW</div>
                </h2>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">graphQL</div> 
                    <div class="badge badge-outline">TypeScript</div>
                    <div class="badge badge-outline">React</div>
                </div>
            </div>
        </div>
        </a>
    </div>
</template>

<script>
import resize from '@/mixins/resize.js'
export default {
    name: 'Projects',
    mixins: [resize],
    computed: {
        isMobile() {
            return this.breakpoint === 'xs' || this.breakpoint === 'sm' || this.breakpoint === 'md'
        }
    }
}
</script>