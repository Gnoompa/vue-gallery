(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VuejsGallery = factory());
}(this, (function () { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script = {
        data: function data() {
            return {
                highlighted: false,
                processing: false,
                image: undefined
            };
        },

        computed: {
            styles: function styles() {
                return {
                    background: "url(" + this.image.src + ") 0 0 / cover no-repeat"
                };
            },
            empty: function empty() {
                return !this.image;
            }
        },
        methods: {
            ondragenter: function ondragenter() {
                this.highlighted = true;
            },
            ondragleave: function ondragleave() {
                this.highlighted = false;
            },
            ondrop: function ondrop(event) {
                var _this = this;

                this.process();

                this.$parent.ondropped(event.dataTransfer.files, function (image) {
                    return _this;
                }).finally(this.unprocess);

                this.highlighted = false;
            },
            onremove: function onremove() {
                this.process();

                this.$parent.onremove(this).finally(this.unprocess);

                this.highlighted = false;
            },
            process: function process() {
                this.processing = true;
            },
            unprocess: function unprocess() {
                this.processing = false;
            }
        }
    };

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function __vue_render__() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("main", {
        class: {
          highlighted: _vm.highlighted,
          processing: _vm.processing,
          empty: _vm.empty
        },
        on: {
          dragenter: _vm.ondragenter,
          drop: function drop($event) {
            $event.preventDefault();
            $event.stopPropagation();
            return _vm.ondrop($event);
          },
          dragleave: _vm.ondragleave,
          dragover: function dragover($event) {
            $event.preventDefault();
            $event.stopPropagation();
          }
        }
      }, [_c("transition", { attrs: { name: "fade" } }, [_vm.image ? _c("section", [_c("section", { key: "controlls", attrs: { role: "controlls" } }, [_c("button", {
        attrs: {
          id: "remove",
          role: "button",
          title: "Remove image"
        },
        on: { click: _vm.onremove }
      })]), _vm._v(" "), _c("span", { style: _vm.styles })]) : _vm._e()])], 1);
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) return;
      inject("data-v-a6dc95a6_0", { source: "\nmain[data-v-a6dc95a6] {\n    display: flex;\n    flex: 1;\n    position: relative;\n    margin: .25rem;\n    background: rgba(0, 0, 0, .05);\n    transition: .2s ease-in-out;\n    overflow: hidden;\n}\nmain[data-v-a6dc95a6]::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 2rem;\n    height: 2rem;\n    background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djk2LjRjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNXMxNS02LjcxNiwxNS0xNVYxNUMyNzEuMDAxLDYuNzE2LDI2NC4yODUsMCwyNTYuMDAxLDB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwzODUuNjAxYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1VjQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1czE1LTYuNzE2LDE1LTE1di05Ni4zOTkgICAgQzI3MS4wMDEsMzkyLjMxNiwyNjQuMjg1LDM4NS42MDEsMjU2LjAwMSwzODUuNjAxeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5Ni42OTEsMTIzLjI3MmwtNDguMi04My40ODVjLTQuMTQyLTcuMTc1LTEzLjMxNi05LjYzMy0yMC40OS01LjQ5Yy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OWw0OC4yLDgzLjQ4NSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMkMxOTguMzc1LDEzOS42MiwyMDAuODMzLDEzMC40NDYsMTk2LjY5MSwxMjMuMjcyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4OS40OTEsNDU3LjIxMmwtNDguMTk5LTgzLjQ4M2MtNC4xNDItNy4xNzUtMTMuMzE2LTkuNjMzLTIwLjQ5LTUuNDljLTcuMTc0LDQuMTQyLTkuNjMyLDEzLjMxNi01LjQ5LDIwLjQ5ICAgIGw0OC4xOTksODMuNDgzYzIuNzc4LDQuODEzLDcuODIsNy41MDIsMTMuMDA0LDcuNTAyYzIuNTQ1LDAsNS4xMjQtMC42NDgsNy40ODYtMi4wMTIgICAgQzM5MS4xNzUsNDczLjU2LDM5My42MzMsNDY0LjM4NiwzODkuNDkxLDQ1Ny4yMTJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTM4LjI3NCwxNzAuNzExTDU0Ljc4OCwxMjIuNTFjLTcuMTc2LTQuMTQ0LTE2LjM0OC0xLjY4NS0yMC40OSw1LjQ5Yy00LjE0Miw3LjE3NC0xLjY4NCwxNi4zNDgsNS40OSwyMC40OSAgICBsODMuNDg2LDQ4LjIwMmMyLjM2MiwxLjM2NCw0Ljk0MSwyLjAxMiw3LjQ4NiwyLjAxMmM1LjE4NCwwLDEwLjIyNi0yLjY5LDEzLjAwNC03LjUwMyAgICBDMTQ3LjkwNiwxODQuMDI3LDE0NS40NDgsMTc0Ljg1MywxMzguMjc0LDE3MC43MTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcyLjIxMywzNjMuNTFsLTgzLjQ4NC00OC4xOTljLTcuMTc2LTQuMTQyLTE2LjM0OS0xLjY4NC0yMC40OSw1LjQ5MWMtNC4xNDIsNy4xNzUtMS42ODQsMTYuMzQ5LDUuNDksMjAuNDkgICAgbDgzLjQ4NCw0OC4xOTljMi4zNjMsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjctMi42OSwxMy4wMDQtNy41MDIgICAgQzQ4MS44NDUsMzc2LjgyNSw0NzkuMzg3LDM2Ny42NTEsNDcyLjIxMywzNjMuNTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTExLjQwMSwyNDEuMDAySDE1Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1czYuNzE2LDE1LDE1LDE1aDk2LjQwMWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIFMxMTkuNjg1LDI0MS4wMDIsMTExLjQwMSwyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywyNDEuMDAyaC05Ni4zOThjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVINDk3YzguMjg0LDAsMTUtNi43MTYsMTUtMTVTNTA1LjI4NCwyNDEuMDAyLDQ5NywyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0My43NjUsMzIwLjgwMmMtNC4xNDItNy4xNzUtMTMuMzE0LTkuNjMzLTIwLjQ5LTUuNDlsLTgzLjQ4Niw0OC4yYy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMmw4My40ODYtNDguMiAgICBDMTQ1LjQ0OSwzMzcuMTUsMTQ3LjkwNywzMjcuOTc2LDE0My43NjUsMzIwLjgwMnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzcuNzAyLDEyOC4wMDNjLTQuMTQyLTcuMTc1LTEzLjMxNS05LjYzMi0yMC40OS01LjQ5bC04My40ODQsNDguMmMtNy4xNzQsNC4xNDEtOS42MzIsMTMuMzE1LTUuNDksMjAuNDg5ICAgIGMyLjc3OCw0LjgxMyw3LjgyLDcuNTAzLDEzLjAwNCw3LjUwM2MyLjU0NCwwLDUuMTI0LTAuNjQ4LDcuNDg2LTIuMDEybDgzLjQ4NC00OC4yICAgIEM0NzkuMzg2LDE0NC4zNTEsNDgxLjg0NCwxMzUuMTc3LDQ3Ny43MDIsMTI4LjAwM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTEuMjAxLDM2OC4yMzljLTcuMTc0LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4yLDgzLjQ4NWMtNC4xNDIsNy4xNzQtMS42ODQsMTYuMzQ4LDUuNDksMjAuNDkgICAgYzIuMzYyLDEuMzY0LDQuOTQxLDIuMDEyLDcuNDg2LDIuMDEyYzUuMTg0LDAsMTAuMjI3LTIuNjksMTMuMDA0LTcuNTAybDQ4LjItODMuNDg1ICAgIEMyMDAuODMzLDM4MS41NTUsMTk4LjM3NSwzNzIuMzgxLDE5MS4yMDEsMzY4LjIzOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQuMDAxLDM0LjNjLTcuMTc1LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4xOTksODMuNDgzYy00LjE0Myw3LjE3NC0xLjY4NSwxNi4zNDgsNS40OSwyMC40OSAgICBjMi4zNjIsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjYtMi42OSwxMy4wMDQtNy41MDJsNDguMTk5LTgzLjQ4MyAgICBDMzkzLjYzMyw0Ny42MTYsMzkxLjE3NSwzOC40NDIsMzg0LjAwMSwzNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=) 0 0 / cover no-repeat;\n    opacity: 0;\n    transition: .2s;\n    z-index: 0;\n}\nmain.processing[data-v-a6dc95a6]::before {\n    animation: processing-data-v-a6dc95a6 2s infinite;\n    opacity: .5;\n}\nmain.highlighted[data-v-a6dc95a6] {\n    background: rgba(58, 114, 183, 0.24);\n}\nmain > section[data-v-a6dc95a6] {\n    flex: 1;\n}\nmain span[data-v-a6dc95a6] {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    height: 100%;\n    transition: .2s;\n    cursor: pointer;\n}\nmain section[role=controlls][data-v-a6dc95a6] {\n    position: absolute;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: .2s;\n    z-index: 1;\n}\nmain section[role=controlls] button#remove[data-v-a6dc95a6] {\n    width: 2rem;\n    height: 2rem;\n    border: none;\n    background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQwOC40ODMgNDA4LjQ4MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA4LjQ4MyA0MDguNDgzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTg3Ljc0OCwzODguNzg0YzAuNDYxLDExLjAxLDkuNTIxLDE5LjY5OSwyMC41MzksMTkuNjk5aDE5MS45MTFjMTEuMDE4LDAsMjAuMDc4LTguNjg5LDIwLjUzOS0xOS42OTlsMTMuNzA1LTI4OS4zMTYgICAgSDc0LjA0M0w4Ny43NDgsMzg4Ljc4NHogTTI0Ny42NTUsMTcxLjMyOWMwLTQuNjEsMy43MzgtOC4zNDksOC4zNS04LjM0OWgxMy4zNTVjNC42MDksMCw4LjM1LDMuNzM4LDguMzUsOC4zNDl2MTY1LjI5MyAgICBjMCw0LjYxMS0zLjczOCw4LjM0OS04LjM1LDguMzQ5aC0xMy4zNTVjLTQuNjEsMC04LjM1LTMuNzM2LTguMzUtOC4zNDlWMTcxLjMyOXogTTE4OS4yMTYsMTcxLjMyOSAgICBjMC00LjYxLDMuNzM4LTguMzQ5LDguMzQ5LTguMzQ5aDEzLjM1NWM0LjYwOSwwLDguMzQ5LDMuNzM4LDguMzQ5LDguMzQ5djE2NS4yOTNjMCw0LjYxMS0zLjczNyw4LjM0OS04LjM0OSw4LjM0OWgtMTMuMzU1ICAgIGMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjlMMTg5LjIxNiwxNzEuMzI5eiBNMTMwLjc3NSwxNzEuMzI5YzAtNC42MSwzLjczOC04LjM0OSw4LjM0OS04LjM0OWgxMy4zNTYgICAgYzQuNjEsMCw4LjM0OSwzLjczOCw4LjM0OSw4LjM0OXYxNjUuMjkzYzAsNC42MTEtMy43MzgsOC4zNDktOC4zNDksOC4zNDloLTEzLjM1NmMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM0My41NjcsMjEuMDQzaC04OC41MzVWNC4zMDVjMC0yLjM3Ny0xLjkyNy00LjMwNS00LjMwNS00LjMwNWgtOTIuOTcxYy0yLjM3NywwLTQuMzA0LDEuOTI4LTQuMzA0LDQuMzA1djE2LjczN0g2NC45MTYgICAgYy03LjEyNSwwLTEyLjksNS43NzYtMTIuOSwxMi45MDFWNzQuNDdoMzA0LjQ1MVYzMy45NDRDMzU2LjQ2NywyNi44MTksMzUwLjY5MiwyMS4wNDMsMzQzLjU2NywyMS4wNDN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==) 0 0 / cover no-repeat;\n    transition: .2s;\n    cursor: pointer;\n}\nmain section[role=controlls] button#remove[data-v-a6dc95a6]:hover {\n    opacity: .75;\n}\nmain section[role=controlls][data-v-a6dc95a6]:hover {\n    opacity: 1;\n}\nmain section[role=controlls]:hover + span[data-v-a6dc95a6] {\n    filter: blur(3px);\n}\n.fade-enter-active[data-v-a6dc95a6] {\n    transition: .3s;\n}\n.fade-leave-active[data-v-a6dc95a6] {\n    transition: .3s;\n    opacity: 0;\n}\n.fade-enter[data-v-a6dc95a6] {\n    opacity: 0;\n    transition: .3s;\n}\n@-webkit-keyframes processing-data-v-a6dc95a6 {\n0% {\n        transform: translate(-50%, -50%) rotate(80deg);\n}\n50% {\n        transform: translate(-50%, -50%) rotate(-80deg);\n}\n100% {\n        transform: translate(-50%, -50%) rotate(80deg);\n}\n}\n@keyframes processing-data-v-a6dc95a6 {\n0% {\n        transform: translate(-50%, -50%) rotate(80deg);\n}\n50% {\n        transform: translate(-50%, -50%) rotate(-80deg);\n}\n100% {\n        transform: translate(-50%, -50%) rotate(80deg);\n}\n}\n", map: { "version": 3, "sources": ["/Users/gnoompa/Documents/PROJECTS/vue-gallery/src/components/Cell.vue"], "names": [], "mappings": ";AA0EA;IACA,cAAA;IACA,QAAA;IACA,mBAAA;IACA,eAAA;IACA,+BAAA;IACA,4BAAA;IACA,iBAAA;CACA;AAEA;IACA,YAAA;IACA,mBAAA;IACA,SAAA;IACA,UAAA;IACA,iCAAA;IACA,YAAA;IACA,aAAA;IACA,2rJAAA;IACA,WAAA;IACA,gBAAA;IACA,WAAA;CACA;AAEA;IACA,kDAAA;IACA,YAAA;CACA;AAEA;IACA,qCAAA;CACA;AAEA;IACA,QAAA;CACA;AAEA;IACA,mBAAA;IACA,iBAAA;IACA,cAAA;IACA,wBAAA;IACA,sBAAA;IACA,aAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;IACA,OAAA;IACA,cAAA;IACA,oBAAA;IACA,wBAAA;IACA,YAAA;IACA,aAAA;IACA,WAAA;IACA,gBAAA;IACA,WAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,aAAA;IACA,msEAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;IACA,WAAA;CACA;AAEA;IACA,WAAA;IACA,gBAAA;CACA;AAEA;AACA;QACA,+CAAA;CACA;AAEA;QACA,gDAAA;CACA;AAEA;QACA,+CAAA;CACA;CACA;AAEA;AACA;QACA,+CAAA;CACA;AAEA;QACA,gDAAA;CACA;AAEA;QACA,+CAAA;CACA;CACA", "file": "Cell.vue", "sourcesContent": ["<template>\n    <main\n        :class=\"{ highlighted, processing, empty }\"\n        @dragenter=\"ondragenter\"\n        @drop.prevent.stop=\"ondrop\"\n        @dragleave=\"ondragleave\"\n        @dragover.prevent.stop\n    >\n        <transition name=\"fade\">\n            <section v-if=\"image\">\n                <section role=\"controlls\" key=\"controlls\">\n                    <button\n                        id=\"remove\"\n                        role=\"button\"\n                        title=\"Remove image\"\n                        @click=\"onremove\"></button>\n                </section>\n                <span :style=\"styles\"></span>\n            </section>\n        </transition>\n    </main>\n</template>\n\n<script>\n    export default {\n        data () {\n            return {\n                highlighted: false,\n                processing: false,\n                image: undefined\n            }\n        },\n        computed: {\n            styles () {\n                return {\n                    background: `url(${this.image.src}) 0 0 / cover no-repeat`\n                }\n            },\n            empty () {\n                return !this.image\n            }\n        },\n        methods: {\n            ondragenter () {\n                this.highlighted = true\n            },\n            ondragleave () {\n                this.highlighted = false\n            },\n            ondrop (event) {\n                this.process()\n\n                this.$parent.ondropped(event.dataTransfer.files, image => this).finally(this.unprocess)\n\n                this.highlighted = false\n            },\n            onremove () {\n                this.process()\n\n                this.$parent.onremove(this).finally(this.unprocess)\n\n                this.highlighted = false\n            },\n            process () {\n                this.processing = true\n            },\n            unprocess () {\n                this.processing = false\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    main {\n        display: flex;\n        flex: 1;\n        position: relative;\n        margin: .25rem;\n        background: rgba(0, 0, 0, .05);\n        transition: .2s ease-in-out;\n        overflow: hidden;\n    }\n\n    main::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 2rem;\n        height: 2rem;\n        background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djk2LjRjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNXMxNS02LjcxNiwxNS0xNVYxNUMyNzEuMDAxLDYuNzE2LDI2NC4yODUsMCwyNTYuMDAxLDB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAwMSwzODUuNjAxYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1VjQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1czE1LTYuNzE2LDE1LTE1di05Ni4zOTkgICAgQzI3MS4wMDEsMzkyLjMxNiwyNjQuMjg1LDM4NS42MDEsMjU2LjAwMSwzODUuNjAxeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5Ni42OTEsMTIzLjI3MmwtNDguMi04My40ODVjLTQuMTQyLTcuMTc1LTEzLjMxNi05LjYzMy0yMC40OS01LjQ5Yy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OWw0OC4yLDgzLjQ4NSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMkMxOTguMzc1LDEzOS42MiwyMDAuODMzLDEzMC40NDYsMTk2LjY5MSwxMjMuMjcyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4OS40OTEsNDU3LjIxMmwtNDguMTk5LTgzLjQ4M2MtNC4xNDItNy4xNzUtMTMuMzE2LTkuNjMzLTIwLjQ5LTUuNDljLTcuMTc0LDQuMTQyLTkuNjMyLDEzLjMxNi01LjQ5LDIwLjQ5ICAgIGw0OC4xOTksODMuNDgzYzIuNzc4LDQuODEzLDcuODIsNy41MDIsMTMuMDA0LDcuNTAyYzIuNTQ1LDAsNS4xMjQtMC42NDgsNy40ODYtMi4wMTIgICAgQzM5MS4xNzUsNDczLjU2LDM5My42MzMsNDY0LjM4NiwzODkuNDkxLDQ1Ny4yMTJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTM4LjI3NCwxNzAuNzExTDU0Ljc4OCwxMjIuNTFjLTcuMTc2LTQuMTQ0LTE2LjM0OC0xLjY4NS0yMC40OSw1LjQ5Yy00LjE0Miw3LjE3NC0xLjY4NCwxNi4zNDgsNS40OSwyMC40OSAgICBsODMuNDg2LDQ4LjIwMmMyLjM2MiwxLjM2NCw0Ljk0MSwyLjAxMiw3LjQ4NiwyLjAxMmM1LjE4NCwwLDEwLjIyNi0yLjY5LDEzLjAwNC03LjUwMyAgICBDMTQ3LjkwNiwxODQuMDI3LDE0NS40NDgsMTc0Ljg1MywxMzguMjc0LDE3MC43MTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcyLjIxMywzNjMuNTFsLTgzLjQ4NC00OC4xOTljLTcuMTc2LTQuMTQyLTE2LjM0OS0xLjY4NC0yMC40OSw1LjQ5MWMtNC4xNDIsNy4xNzUtMS42ODQsMTYuMzQ5LDUuNDksMjAuNDkgICAgbDgzLjQ4NCw0OC4xOTljMi4zNjMsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjctMi42OSwxMy4wMDQtNy41MDIgICAgQzQ4MS44NDUsMzc2LjgyNSw0NzkuMzg3LDM2Ny42NTEsNDcyLjIxMywzNjMuNTF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTExLjQwMSwyNDEuMDAySDE1Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1czYuNzE2LDE1LDE1LDE1aDk2LjQwMWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIFMxMTkuNjg1LDI0MS4wMDIsMTExLjQwMSwyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywyNDEuMDAyaC05Ni4zOThjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVINDk3YzguMjg0LDAsMTUtNi43MTYsMTUtMTVTNTA1LjI4NCwyNDEuMDAyLDQ5NywyNDEuMDAyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0My43NjUsMzIwLjgwMmMtNC4xNDItNy4xNzUtMTMuMzE0LTkuNjMzLTIwLjQ5LTUuNDlsLTgzLjQ4Niw0OC4yYy03LjE3NCw0LjE0Mi05LjYzMiwxMy4zMTYtNS40OSwyMC40OSAgICBjMi43NzgsNC44MTMsNy44Miw3LjUwMiwxMy4wMDQsNy41MDJjMi41NDUsMCw1LjEyNC0wLjY0OCw3LjQ4Ni0yLjAxMmw4My40ODYtNDguMiAgICBDMTQ1LjQ0OSwzMzcuMTUsMTQ3LjkwNywzMjcuOTc2LDE0My43NjUsMzIwLjgwMnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzcuNzAyLDEyOC4wMDNjLTQuMTQyLTcuMTc1LTEzLjMxNS05LjYzMi0yMC40OS01LjQ5bC04My40ODQsNDguMmMtNy4xNzQsNC4xNDEtOS42MzIsMTMuMzE1LTUuNDksMjAuNDg5ICAgIGMyLjc3OCw0LjgxMyw3LjgyLDcuNTAzLDEzLjAwNCw3LjUwM2MyLjU0NCwwLDUuMTI0LTAuNjQ4LDcuNDg2LTIuMDEybDgzLjQ4NC00OC4yICAgIEM0NzkuMzg2LDE0NC4zNTEsNDgxLjg0NCwxMzUuMTc3LDQ3Ny43MDIsMTI4LjAwM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTEuMjAxLDM2OC4yMzljLTcuMTc0LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4yLDgzLjQ4NWMtNC4xNDIsNy4xNzQtMS42ODQsMTYuMzQ4LDUuNDksMjAuNDkgICAgYzIuMzYyLDEuMzY0LDQuOTQxLDIuMDEyLDcuNDg2LDIuMDEyYzUuMTg0LDAsMTAuMjI3LTIuNjksMTMuMDA0LTcuNTAybDQ4LjItODMuNDg1ICAgIEMyMDAuODMzLDM4MS41NTUsMTk4LjM3NSwzNzIuMzgxLDE5MS4yMDEsMzY4LjIzOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQuMDAxLDM0LjNjLTcuMTc1LTQuMTQ0LTE2LjM0OS0xLjY4NS0yMC40OSw1LjQ5bC00OC4xOTksODMuNDgzYy00LjE0Myw3LjE3NC0xLjY4NSwxNi4zNDgsNS40OSwyMC40OSAgICBjMi4zNjIsMS4zNjQsNC45NDEsMi4wMTIsNy40ODYsMi4wMTJjNS4xODQsMCwxMC4yMjYtMi42OSwxMy4wMDQtNy41MDJsNDguMTk5LTgzLjQ4MyAgICBDMzkzLjYzMyw0Ny42MTYsMzkxLjE3NSwzOC40NDIsMzg0LjAwMSwzNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=) 0 0 / cover no-repeat;\n        opacity: 0;\n        transition: .2s;\n        z-index: 0;\n    }\n\n    main.processing::before {\n        animation: processing 2s infinite;\n        opacity: .5;\n    }\n\n    main.highlighted {\n        background: rgba(58, 114, 183, 0.24);\n    }\n\n    main > section {\n        flex: 1;\n    }\n\n    main span {\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        height: 100%;\n        transition: .2s;\n        cursor: pointer;\n    }\n\n    main section[role=controlls] {\n        position: absolute;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        transition: .2s;\n        z-index: 1;\n    }\n\n    main section[role=controlls] button#remove {\n        width: 2rem;\n        height: 2rem;\n        border: none;\n        background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQwOC40ODMgNDA4LjQ4MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA4LjQ4MyA0MDguNDgzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTg3Ljc0OCwzODguNzg0YzAuNDYxLDExLjAxLDkuNTIxLDE5LjY5OSwyMC41MzksMTkuNjk5aDE5MS45MTFjMTEuMDE4LDAsMjAuMDc4LTguNjg5LDIwLjUzOS0xOS42OTlsMTMuNzA1LTI4OS4zMTYgICAgSDc0LjA0M0w4Ny43NDgsMzg4Ljc4NHogTTI0Ny42NTUsMTcxLjMyOWMwLTQuNjEsMy43MzgtOC4zNDksOC4zNS04LjM0OWgxMy4zNTVjNC42MDksMCw4LjM1LDMuNzM4LDguMzUsOC4zNDl2MTY1LjI5MyAgICBjMCw0LjYxMS0zLjczOCw4LjM0OS04LjM1LDguMzQ5aC0xMy4zNTVjLTQuNjEsMC04LjM1LTMuNzM2LTguMzUtOC4zNDlWMTcxLjMyOXogTTE4OS4yMTYsMTcxLjMyOSAgICBjMC00LjYxLDMuNzM4LTguMzQ5LDguMzQ5LTguMzQ5aDEzLjM1NWM0LjYwOSwwLDguMzQ5LDMuNzM4LDguMzQ5LDguMzQ5djE2NS4yOTNjMCw0LjYxMS0zLjczNyw4LjM0OS04LjM0OSw4LjM0OWgtMTMuMzU1ICAgIGMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjlMMTg5LjIxNiwxNzEuMzI5eiBNMTMwLjc3NSwxNzEuMzI5YzAtNC42MSwzLjczOC04LjM0OSw4LjM0OS04LjM0OWgxMy4zNTYgICAgYzQuNjEsMCw4LjM0OSwzLjczOCw4LjM0OSw4LjM0OXYxNjUuMjkzYzAsNC42MTEtMy43MzgsOC4zNDktOC4zNDksOC4zNDloLTEzLjM1NmMtNC42MSwwLTguMzQ5LTMuNzM2LTguMzQ5LTguMzQ5VjE3MS4zMjl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM0My41NjcsMjEuMDQzaC04OC41MzVWNC4zMDVjMC0yLjM3Ny0xLjkyNy00LjMwNS00LjMwNS00LjMwNWgtOTIuOTcxYy0yLjM3NywwLTQuMzA0LDEuOTI4LTQuMzA0LDQuMzA1djE2LjczN0g2NC45MTYgICAgYy03LjEyNSwwLTEyLjksNS43NzYtMTIuOSwxMi45MDFWNzQuNDdoMzA0LjQ1MVYzMy45NDRDMzU2LjQ2NywyNi44MTksMzUwLjY5MiwyMS4wNDMsMzQzLjU2NywyMS4wNDN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==) 0 0 / cover no-repeat;\n        transition: .2s;\n        cursor: pointer;\n    }\n\n    main section[role=controlls] button#remove:hover {\n        opacity: .75;\n    }\n\n    main section[role=controlls]:hover {\n        opacity: 1;\n    }\n\n    main section[role=controlls]:hover + span {\n        filter: blur(3px);\n    }\n\n    .fade-enter-active {\n        transition: .3s;\n    }\n\n    .fade-leave-active {\n        transition: .3s;\n        opacity: 0;\n    }\n\n    .fade-enter {\n        opacity: 0;\n        transition: .3s;\n    }\n\n    @-webkit-keyframes processing {\n        0% {\n            transform: translate(-50%, -50%) rotate(80deg);\n        }\n\n        50% {\n            transform: translate(-50%, -50%) rotate(-80deg);\n        }\n\n        100% {\n            transform: translate(-50%, -50%) rotate(80deg);\n        }\n    }\n\n    @keyframes processing {\n        0% {\n            transform: translate(-50%, -50%) rotate(80deg);\n        }\n\n        50% {\n            transform: translate(-50%, -50%) rotate(-80deg);\n        }\n\n        100% {\n            transform: translate(-50%, -50%) rotate(80deg);\n        }\n    }\n</style>\n"] }, media: undefined });
    };
    /* scoped */
    var __vue_scope_id__ = "data-v-a6dc95a6";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      {
        component.__file = "/Users/gnoompa/Documents/PROJECTS/vue-gallery/src/components/Cell.vue";
      }

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        var hook = void 0;
        if (style) {
          hook = function hook(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component;
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
          }
        }
      };
    }
    /* style inject SSR */

    var Cell = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

    var script$1 = {
      props: {
        images: Array,
        editable: Boolean
      },
      computed: {
        payload: function payload() {
          return {
            images: this.images,
            process: this.process
          };
        }
      },
      methods: {
        ondropped: function ondropped(files, process_image) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (_this.editable) {
              if (_this._events.ondrop) _this.$emit('ondrop', {
                file: files[0],
                cb: function cb(file) {
                  return _this.process_file(file).then(function (image) {
                    return _this.add_image(image, process_image(image)) && resolve();
                  });
                }
              });else {
                _this.process_file(files[0]).then(function (image) {
                  return _this.add_image(image, process_image(image)) && resolve();
                });
              }
            } else resolve();
          });
        },
        onremove: function onremove(cell) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            if (_this2._events.onremove) _this2.$emit('onremove', {
              image: cell.image,
              cb: function cb() {
                return _this2.remove_image(cell) && resolve();
              }
            });else _this2.remove_image(cell) & resolve();
          });
        },
        process_file: function process_file(file) {
          var _this3 = this;

          var image = {};

          return new Promise(function (resolve, reject) {
            var _validate = _this3.validate(file),
                _validate2 = _slicedToArray(_validate, 2),
                _file = _validate2[0],
                error = _validate2[1];

            if (error) reject(_this3.error(error));else {
              var reader = new FileReader();

              reader.onload = function (event) {
                return _this3.$set(image, 'src', event.target.result) && resolve(image);
              };

              reader.readAsDataURL(file);
            }
          });
        },
        validate: function validate(file) {
          return (typeof file === 'undefined' ? 'undefined' : _typeof(file)) === 'object' && file.type ? [file] : [file, { msg: 'Invalid file', file: file }];
        },
        error: function error(msg) {
          return console.error(msg) && this;
        },
        add_image: function add_image(image, cell) {
          this.images.push(cell.image = image);

          return this;
        },
        remove_image: function remove_image(cell) {
          cell.image = null;
        }
      },
      components: {
        Cell: Cell
      }
    };

    /* script */
    var __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function __vue_render__() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("main", {
        on: {
          drop: function drop($event) {
            $event.preventDefault();
            $event.stopPropagation();
          },
          dragover: function dragover($event) {
            $event.preventDefault();
            $event.stopPropagation();
          }
        }
      }, [_vm._t("grid", _vm._l(_vm.images, function (image, key) {
        return _c("Cell", {
          key: key,
          attrs: { image: image },
          on: { dropped: _vm.ondropped }
        });
      }))], 2);
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      {
        component.__file = "/Users/gnoompa/Documents/PROJECTS/vue-gallery/src/components/Gallery.vue";
      }

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component;
    }
    /* style inject */
    function __vue_create_injector__$1() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
          }
        }
      };
    }
    /* style inject SSR */

    var Gallery = __vue_normalize__$1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, __vue_create_injector__$1, undefined);

    return Gallery;

})));
