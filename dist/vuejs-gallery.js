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

  var script = {
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
      ondropped: function ondropped(file, cell) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          return _this._events.ondrop ? _this.$emit('ondrop', { file: file, cell: cell, resolve: resolve }) : _this.process_file(file).then(function (image) {
            return _this.add_image(image, cell) & resolve();
          });
        });
      },
      onremove: function onremove(cell) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          return _this2._events.onremove ? _this2.$emit('onremove', {
            image: cell.image,
            cb: resolve
          }) : _this2.remove_image(cell) & resolve();
        });
      },
      process_file: function process_file(file) {
        return new Promise(function (resolve, reject) {
          return function (reader) {
            reader.onload = function (event) {
              return resolve({ src: event.target.result });
            };
            reader.readAsDataURL(file);
          }(new FileReader());
        });
      },
      add_image: function add_image(image, cell) {
        this.$set(this.images, this.images.indexOf(cell.image), image);
      },
      remove_image: function remove_image(cell) {
        this.$set(this.images, this.images.indexOf(cell.image), {});
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
    }, [_vm._t("default")], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/Users/dmitryevdokimenko/Documents/tests/vue-gallery/src/components/Gallery.vue";
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

  var Gallery = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  return Gallery;

})));
