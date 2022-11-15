export default {
    created() {
        this.setBreakpoint(document.documentElement.clientWidth)
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler)
    },
    data() {
        return {
            breakpoint: '',
            isMobileTest: false,
        }
    },  
    methods: {
        setBreakpoint(val) {
            if (val <= 320) {
              this.breakpoint = 'xs'
            } else if (val > 320 && val <= 480) {
              this.breakpoint = 'sm'
            } else if (val > 480 && val <= 768) {
              this.breakpoint = 'md'
            } else if (val > 769 && val <= 1024) {
              this.breakpoint = 'lg'
            } else  {
              this.breakpoint = 'xl'
            }
        },
        myEventHandler(e) {
            this.setBreakpoint(e.target.window.innerWidth)
        }
    }
        
    
    
}