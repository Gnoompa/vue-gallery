<template>
    <main
        :class="{ highlighted, processing, empty }"
        @dragenter="ondragenter"
        @drop.prevent.stop="ondrop"
        @dragleave="ondragleave"
        @dragover.prevent.stop
    >
        <transition name="fade">
            <section v-if="image">
                <section role="controlls" key="controlls">
                    <button
                        id="remove"
                        role="button"
                        title="Remove image"
                        @click="onremove"></button>
                </section>
                <span :style="styles"></span>
            </section>
        </transition>
    </main>
</template>

<script>
    export default {
        props: {
            image: false
        },
        data () {
            return {
                highlighted: false,
                processing: false
            }
        },
        computed: {
            styles () {
                return {
                    background: `url(${this.image.src}) 0 0 / cover no-repeat`
                }
            },
            empty () {
                return !this.image
            },
            editable () {
                return this.$parent.editable
            }
        },
        methods: {
            process () {
                this.processing = true

                return this
            },
            unprocess () {
                this.processing = false

                return this
            },
            highlight () {
                this.highlighted = true

                return this
            },
            unhighlight () {
                this.highlighted = false

                return this
            },
            ondragenter () {
                this.highlight()
            },
            ondragleave () {
                this.unhighlight()
            },
            ondrop (event) {
                if (this.editable)
                    this.process()
                        .$parent.ondropped(event.dataTransfer.files[0], this)
                        .finally(() => this.unprocess & this.unhighlight)
            },
            onremove () {
                this.process()

                this.$parent.onremove(this).finally(this.unprocess)

                this.highlighted = false
            }
        }
    }
</script>

<style scoped>
    main {
        display: flex;
        flex: 1;
        position: relative;
        margin: .25rem;
        background: rgba(0, 0, 0, .05);
        transition: .2s ease-in-out;
        overflow: hidden;
    }

    main::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2rem;
        height: 2rem;
        background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djk2LjRjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNXMxNS02LjcxNiwxNS0xNVYxNUMyNzEuMDAxLDYuNzE2LDI2NC4yODUsMCwyNTYuMDAxLDB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwzODUuNjAxYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1VjQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1czE1LTYuNzE2LDE1LTE1di05Ni4zOTkgICAgQzI3MS4wMDEsMzkyLjMxNiwyNjQuMjg1LDM4NS42MDEsMjU2LjAwMSwzODUuNjAxeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5Ni42OTEsMTIzLjI3MmwtNDguMi04My40ODVjLTQuMTQyLTcuMTc1LTEzLjMxNi05LjYzMy0yMC40OS01LjQ5Yy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OWw0OC4yLDgzLjQ4NSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMkMxOTguMzc1LDEzOS42MiwyMDAuODMzLDEzMC40NDYsMTk2LjY5MSwxMjMuMjcyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4OS40OTEsNDU3LjIxMmwtNDguMTk5LTgzLjQ4M2MtNC4xNDItNy4xNzUtMTMuMzE2LTkuNjMzLTIwLjQ5LTUuNDljLTcuMTc0LDQuMTQyLTkuNjMyLDEzLjMxNi01LjQ5LDIwLjQ5ICAgIGw0OC4xOTksODMuNDgzYzIuNzc4LDQuODEzLDcuODIsNy41MDIsMTMuMDA0LDcuNTAyYzIuNTQ1LDAsNS4xMjQtMC42NDgsNy40ODYtMi4wMTIgICAgQzM5MS4xNzUsNDczLjU2LDM5My42MzMsNDY0LjM4NiwzODkuNDkxLDQ1Ny4yMTJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTM4LjI3NCwxNzAuNzExTDU0Ljc4OCwxMjIuNTFjLTcuMTc2LTQuMTQ0LTE2LjM0OC0xLjY4NS0yMC40OSw1LjQ5Yy00LjE0Miw3LjE3NC0xLjY4NCwxNi4zNDgsNS40OSwyMC40OSAgICBsODMuNDg2LDQ4LjIwMmMyLjM2MiwxLjM2NCw0Ljk0MSwyLjAxMiw3LjQ4NiwyLjAxMmM1LjE4NCwwLDEwLjIyNi0yLjY5LDEzLjAwNC03LjUwMyAgICBDMTQ3LjkwNiwxODQuMDI3LDE0NS40NDgsMTc0Ljg1MywxMzguMjc0LDE3MC43MTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcyLjIxMywzNjMuNTFsLTgzLjQ4NC00OC4xOTljLTcuMTc2LTQuMTQyLTE2LjM0OS0xLjY4NC0yMC40OSw1LjQ5MWMtNC4xNDIsNy4xNzUtMS42ODQsMTYuMzQ5LDUuNDksMjAuNDkgICAgbDgzLjQ4NCw0OC4xOTljMi4zNjMsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjctMi42OSwxMy4wMDQtNy41MDIgICAgQzQ4MS44NDUsMzc2LjgyNSw0NzkuMzg3LDM2Ny42NTEsNDcyLjIxMywzNjMuNTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTExLjQwMSwyNDEuMDAySDE1Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1czYuNzE2LDE1LDE1LDE1aDk2LjQwMWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIFMxMTkuNjg1LDI0MS4wMDIsMTExLjQwMSwyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywyNDEuMDAyaC05Ni4zOThjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVINDk3YzguMjg0LDAsMTUtNi43MTYsMTUtMTVTNTA1LjI4NCwyNDEuMDAyLDQ5NywyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0My43NjUsMzIwLjgwMmMtNC4xNDItNy4xNzUtMTMuMzE0LTkuNjMzLTIwLjQ5LTUuNDlsLTgzLjQ4Niw0OC4yYy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMmw4My40ODYtNDguMiAgICBDMTQ1LjQ0OSwzMzcuMTUsMTQ3LjkwNywzMjcuOTc2LDE0My43NjUsMzIwLjgwMnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzcuNzAyLDEyOC4wMDNjLTQuMTQyLTcuMTc1LTEzLjMxNS05LjYzMi0yMC40OS01LjQ5bC04My40ODQsNDguMmMtNy4xNzQsNC4xNDEtOS42MzIsMTMuMzE1LTUuNDksMjAuNDg5ICAgIGMyLjc3OCw0LjgxMyw3LjgyLDcuNTAzLDEzLjAwNCw3LjUwM2MyLjU0NCwwLDUuMTI0LTAuNjQ4LDcuNDg2LTIuMDEybDgzLjQ4NC00OC4yICAgIEM0NzkuMzg2LDE0NC4zNTEsNDgxLjg0NCwxMzUuMTc3LDQ3Ny43MDIsMTI4LjAwM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTEuMjAxLDM2OC4yMzljLTcuMTc0LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4yLDgzLjQ4NWMtNC4xNDIsNy4xNzQtMS42ODQsMTYuMzQ4LDUuNDksMjAuNDkgICAgYzIuMzYyLDEuMzY0LDQuOTQxLDIuMDEyLDcuNDg2LDIuMDEyYzUuMTg0LDAsMTAuMjI3LTIuNjksMTMuMDA0LTcuNTAybDQ4LjItODMuNDg1ICAgIEMyMDAuODMzLDM4MS41NTUsMTk4LjM3NSwzNzIuMzgxLDE5MS4yMDEsMzY4LjIzOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQuMDAxLDM0LjNjLTcuMTc1LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4xOTksODMuNDgzYy00LjE0Myw3LjE3NC0xLjY4NSwxNi4zNDgsNS40OSwyMC40OSAgICBjMi4zNjIsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjYtMi42OSwxMy4wMDQtNy41MDJsNDguMTk5LTgzLjQ4MyAgICBDMzkzLjYzMyw0Ny42MTYsMzkxLjE3NSwzOC40NDIsMzg0LjAwMSwzNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=) 0 0 / cover no-repeat;
        opacity: 0;
        transition: .2s;
        z-index: 0;
    }

    main.processing::before {
        animation: processing 2s infinite;
        opacity: .5;
    }

    main.highlighted {
        background: rgba(58, 114, 183, 0.24);
    }

    main > section {
        flex: 1;
    }

    main span {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
        transition: .2s;
        cursor: pointer;
    }

    main section[role=controlls] {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: .2s;
        z-index: 1;
    }

    main section[role=controlls] button#remove {
        width: 2rem;
        height: 2rem;
        border: none;
        background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQwOC40ODMgNDA4LjQ4MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA4LjQ4MyA0MDguNDgzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTg3Ljc0OCwzODguNzg0YzAuNDYxLDExLjAxLDkuNTIxLDE5LjY5OSwyMC41MzksMTkuNjk5aDE5MS45MTFjMTEuMDE4LDAsMjAuMDc4LTguNjg5LDIwLjUzOS0xOS42OTlsMTMuNzA1LTI4OS4zMTYgICAgSDc0LjA0M0w4Ny43NDgsMzg4Ljc4NHogTTI0Ny42NTUsMTcxLjMyOWMwLTQuNjEsMy43MzgtOC4zNDksOC4zNS04LjM0OWgxMy4zNTVjNC42MDksMCw4LjM1LDMuNzM4LDguMzUsOC4zNDl2MTY1LjI5MyAgICBjMCw0LjYxMS0zLjczOCw4LjM0OS04LjM1LDguMzQ5aC0xMy4zNTVjLTQuNjEsMC04LjM1LTMuNzM2LTguMzUtOC4zNDlWMTcxLjMyOXogTTE4OS4yMTYsMTcxLjMyOSAgICBjMC00LjYxLDMuNzM4LTguMzQ5LDguMzQ5LTguMzQ5aDEzLjM1NWM0LjYwOSwwLDguMzQ5LDMuNzM4LDguMzQ5LDguMzQ5djE2NS4yOTNjMCw0LjYxMS0zLjczNyw4LjM0OS04LjM0OSw4LjM0OWgtMTMuMzU1ICAgIGMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjlMMTg5LjIxNiwxNzEuMzI5eiBNMTMwLjc3NSwxNzEuMzI5YzAtNC42MSwzLjczOC04LjM0OSw4LjM0OS04LjM0OWgxMy4zNTYgICAgYzQuNjEsMCw4LjM0OSwzLjczOCw4LjM0OSw4LjM0OXYxNjUuMjkzYzAsNC42MTEtMy43MzgsOC4zNDktOC4zNDksOC4zNDloLTEzLjM1NmMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM0My41NjcsMjEuMDQzaC04OC41MzVWNC4zMDVjMC0yLjM3Ny0xLjkyNy00LjMwNS00LjMwNS00LjMwNWgtOTIuOTcxYy0yLjM3NywwLTQuMzA0LDEuOTI4LTQuMzA0LDQuMzA1djE2LjczN0g2NC45MTYgICAgYy03LjEyNSwwLTEyLjksNS43NzYtMTIuOSwxMi45MDFWNzQuNDdoMzA0LjQ1MVYzMy45NDRDMzU2LjQ2NywyNi44MTksMzUwLjY5MiwyMS4wNDMsMzQzLjU2NywyMS4wNDN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==) 0 0 / cover no-repeat;
        transition: .2s;
        cursor: pointer;
    }

    main section[role=controlls] button#remove:hover {
        opacity: .75;
    }

    main section[role=controlls]:hover {
        opacity: 1;
    }

    main section[role=controlls]:hover + span {
        filter: blur(3px);
    }

    .fade-enter-active {
        transition: .3s;
    }

    .fade-leave-active {
        transition: .3s;
        opacity: 0;
    }

    .fade-enter {
        opacity: 0;
        transition: .3s;
    }

    @-webkit-keyframes processing {
        0% {
            transform: translate(-50%, -50%) rotate(80deg);
        }

        50% {
            transform: translate(-50%, -50%) rotate(-80deg);
        }

        100% {
            transform: translate(-50%, -50%) rotate(80deg);
        }
    }

    @keyframes processing {
        0% {
            transform: translate(-50%, -50%) rotate(80deg);
        }

        50% {
            transform: translate(-50%, -50%) rotate(-80deg);
        }

        100% {
            transform: translate(-50%, -50%) rotate(80deg);
        }
    }
</style>
