<template>
    <header>
      <div
        class="container flex flex-col flex-wrap p-5 justify-center"
        :class="isMobile ? 'p-0 pr-4' : 'p-4'"
      >
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <span class="font-black text-4xl">H</span>
          <img class="text-icon" src="../../public/favicon.ico" alt="Italian Trulli"/>
          <span class="font-black text-4xl">PE</span>
        </div>
        <div class="flex-none gap-2">
          <div v-if="isMobile" class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-circle">
              <div class="w-10 rounded-full">
                MENU
              </div>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/resume">Resume</router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="flex flex-wrap items-center justify-center text-base ">
            <button class="mr-5 text-sm font-semibold btn btn-outline btn-primary">
              <router-link to="/">Home</router-link>
            </button>
        
            <button class="mr-5 text-sm font-semibold btn btn-outline btn-primary">
              <router-link to="/resume">Resume</router-link>
            </button>
          </ul>
          </div>
        </div>
      </div>
        <!-- <div class="navbar bg-base-100">
        <div class="flex-1">
          <span class="font-black text-4xl">H</span>
          <img class="text-icon" src="../../public/favicon.ico" alt="Italian Trulli"/>
          <span class="font-black text-4xl">PE</span>
        </div>
        <div class="flex-none">
          <div v-if="isMobile" class="dropdown dropdown-end">
            <button @click.self.prevent tabindex="0" class="btn btn-circle">Menu</button>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/resume">Resume</router-link>
              </li>
            </ul>
          </div>
  
          <ul v-else class="flex flex-wrap items-center justify-center text-base ">
            <button class="mr-5 text-sm font-semibold btn btn-outline btn-primary">
              <router-link to="/">Home</router-link>
            </button>
        
            <button class="mr-5 text-sm font-semibold btn btn-outline btn-primary">
              <router-link to="/resume">Resume</router-link>
            </button>
          </ul>
          </div>
        </div> -->
      </div>
    </header>
  </template>
  
  <script>
import resize from "@/mixins/resize.js"
  export default {
    name: "NavBar",
    mixins: [resize],
    computed: {
      isMobile() {
        return this.breakpoint === 'xs' || this.breakpoint === 'sm' || this.breakpoint === 'md'
      }
    }
  };
  </script>