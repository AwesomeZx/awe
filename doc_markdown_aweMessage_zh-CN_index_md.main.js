(self["webpackChunkawe_design"] = self["webpackChunkawe_design"] || []).push([["doc_markdown_aweMessage_zh-CN_index_md"],{

/***/ "./doc/markdown/aweMessage/zh-CN/index.md":
/*!************************************************!*\
  !*** ./doc/markdown/aweMessage/zh-CN/index.md ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_md_vue_type_template_id_61276c9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.md?vue&type=template&id=61276c9c */ "./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c");
/* harmony import */ var _index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.md?vue&type=script&lang=js */ "./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js");



_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_md_vue_type_template_id_61276c9c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "doc/markdown/aweMessage/zh-CN/index.md"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

      
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
        name: 'component-doc',
        components: {
          "awe-demo0": (function() {
    

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("普通消息")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("成功消息")
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("警告消息")
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("错误消息")

 function render(_ctx, _cache) {
  const _component_awe_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.handleClick('info')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.handleClick('success')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.handleClick('warning')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.handleClick('error')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {
    methods: {
      handleClick (type) {
        if(type=='info'){
            this.$aweMessage({
            type,
            message:'这是一条普通消息'});
        }else if(type=='success'){
            this.$aweMessage({
            type,
            message:'这是一条成功消息'});
        }else if(type=='warning'){
            this.$aweMessage({
            type,
            message:'这是一条警告消息'});
          }else{
            this.$aweMessage({
            type,
            message:'这是一条错误消息'});
          }
      }
    }
  }
    return {
      render,
      ...democomponentExport,
    }
  })(),"awe-demo1": (function() {
    

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("普通消息")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("成功消息")
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("警告消息")
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("错误消息")

 function render(_ctx, _cache) {
  const _component_awe_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.handleClick('info'))),
      class: "info"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.handleClick('success'))),
      class: "success"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.handleClick('warning'))),
      class: "warning"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.handleClick('error'))),
      class: "error"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {
    methods: {
      handleClick (type) {
        if(type=='info'){
            this.$aweMessage({
            type,
            message:'这是一条普通消息'});
        }else if(type=='success'){
            this.$aweMessage({
            type,
            message:'这是一条成功消息'});
        }else if(type=='warning'){
            this.$aweMessage({
            type,
            message:'这是一条警告消息'});
          }else{
            this.$aweMessage({
            type,
            message:'这是一条错误消息'});
          }
      }
    }
  }
    return {
      render,
      ...democomponentExport,
    }
  })(),
        }
      });
    

/***/ }),

/***/ "./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=script&lang=js");
 

/***/ }),

/***/ "./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c":
/*!******************************************************************************!*\
  !*** ./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_61276c9c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_61276c9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=template&id=61276c9c */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweMessage/zh-CN/index.md?vue&type=template&id=61276c9c ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Message 信息提示", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "用于页面信息提示。", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "he-shi-shi-yong" }, "何时使用", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "页面中需要有操作提示或者信息提示的时候使用。", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "dai-ma-yan-shi" }, "代码演示", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "wu-yan-se-an-niu" }, "无颜色按钮", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <awe-button @click=\"handleClick('info')\">普通消息</awe-button>\n  <awe-button @click=\"handleClick('success')\">成功消息</awe-button>\n  <awe-button @click=\"handleClick('warning')\">警告消息</awe-button>\n  <awe-button @click=\"handleClick('error')\">错误消息</awe-button>\n</template>\n<script>\n  export default {\n    methods: {\n      handleClick (type) {\n        if(type=='info'){\n            this.$nMessage({\n            type,\n            message:'这是一条普通消息'});\n        }else if(type=='success'){\n            this.$nMessage({\n            type,\n            message:'这是一条成功消息'});\n        }else if(type=='warning'){\n            this.$nMessage({\n            type,\n            message:'这是一条警告消息'});\n          }else{\n            this.$nMessage({\n            type,\n            message:'这是一条错误消息'});\n          }\n      }\n    }\n  }\n</script>\n")
], -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "you-yan-se-an-niu" }, "有颜色按钮", -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <awe-button @click=\"handleClick('info')\" class=\"info\">普通消息</awe-button>\n  <awe-button @click=\"handleClick('success')\" class=\"success\">成功消息</awe-button>\n  <awe-button @click=\"handleClick('warning')\" class=\"warning\">警告消息</awe-button>\n  <awe-button @click=\"handleClick('error')\" class=\"error\">错误消息</awe-button>\n</template>\n<script>\n  export default {\n    methods: {\n      handleClick (type) {\n        if(type=='info'){\n            this.$nMessage({\n            type,\n            message:'这是一条普通消息'});\n        }else if(type=='success'){\n            this.$nMessage({\n            type,\n            message:'这是一条成功消息'});\n        }else if(type=='warning'){\n            this.$nMessage({\n            type,\n            message:'这是一条警告消息'});\n          }else{\n            this.$nMessage({\n            type,\n            message:'这是一条错误消息'});\n          }\n      }\n    }\n  }\n</script>\n")
], -1 /* HOISTED */)
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 id=\"api\">API</h2><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">type</td><td style=\"text-align:left;\">信息类型,可选值<code>info</code>,<code>success</code>,<code>warning</code>,<code>error</code></td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\">info</td></tr><tr><td style=\"text-align:left;\">message</td><td style=\"text-align:left;\">信息内容</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">duration</td><td style=\"text-align:left;\">信息展示的时间（ms）</td><td style=\"text-align:left;\">Number</td><td style=\"text-align:left;\">3000</td></tr></tbody></table>", 2)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_awe_demo0 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-demo0")
  const _component_demo_block = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("demo-block")
  const _component_awe_demo1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-demo1")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, null, {
      source: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_demo0)
      ]),
      highlight: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_8,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, null, {
      source: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_demo1)
      ]),
      highlight: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_9
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_10
  ]))
}

/***/ })

}]);
//# sourceMappingURL=doc_markdown_aweMessage_zh-CN_index_md.main.js.map
