(self["webpackChunkawe_design"] = self["webpackChunkawe_design"] || []).push([["doc_markdown_aweModal_zh-CN_index_md"],{

/***/ "./doc/markdown/aweModal/zh-CN/index.md":
/*!**********************************************!*\
  !*** ./doc/markdown/aweModal/zh-CN/index.md ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_md_vue_type_template_id_75e67836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.md?vue&type=template&id=75e67836 */ "./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836");
/* harmony import */ var _index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.md?vue&type=script&lang=js */ "./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js");



_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_md_vue_type_template_id_75e67836__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "doc/markdown/aweModal/zh-CN/index.md"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
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
    

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 显示对话框 ")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)

 function render(_ctx, _cache) {
  const _component_awe_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-button")
  const _component_awe_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-modal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, { onClick: _ctx.openModal }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_modal, {
      show: _ctx.modalShow,
      title: _ctx.modalTitle,
      confirm: _ctx.confirm,
      cancel: _ctx.cancel,
      onClose: _ctx.onClose
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_2,
        _hoisted_3,
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "title", "confirm", "cancel", "onClose"])
  ]))
}
  
    const democomponentExport ={
    data:function(){
      return {
        modalShow: false,
        modalTitle: '这是标题'
      }
    },
    methods:{
      openModal () {
        this.modalShow = true
      },
      confirm () {
        console.log('confirm')
      },
      cancel () {
        console.log('cancel')
      },
      onClose () {
        this.modalShow = false
      }
    }
  }
    return {
      render,
      ...democomponentExport,
    }
  })(),"awe-demo1": (function() {
    

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" xs ")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" sm ")
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" md ")
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" lg ")
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Some contents...", -1 /* HOISTED */)

 function render(_ctx, _cache) {
  const _component_awe_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-button")
  const _component_awe_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-modal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.openModal('xs')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.openModal('sm')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.openModal('md')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_button, {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.openModal('lg')))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_modal, {
      size: _ctx.size,
      show: _ctx.modalShow,
      title: _ctx.modalTitle,
      confirm: _ctx.confirm,
      cancel: _ctx.cancel,
      onClose: _ctx.onClose
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_5,
        _hoisted_6,
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["size", "show", "title", "confirm", "cancel", "onClose"])
  ]))
}
  
    const democomponentExport ={
    data:function(){
      return {
        modalShow: false,
        modalTitle: '这是标题',
        size:'md',
      }
    },
    methods:{
      openModal (size) {
        this.size = size
        this.modalShow = true
      },
      confirm () {
        console.log('confirm')
      },
      cancel () {
        console.log('cancel')
      },
      onClose () {
        this.modalShow = false
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

/***/ "./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=script&lang=js");
 

/***/ }),

/***/ "./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836":
/*!****************************************************************************!*\
  !*** ./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_75e67836__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_75e67836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=template&id=75e67836 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweModal/zh-CN/index.md?vue&type=template&id=75e67836 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Modal 对话框", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "模态对话框。", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "he-shi-shi-yong" }, "何时使用", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "dai-ma-yan-shi" }, "代码演示", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "ji-ben-shi-yong" }, "基本使用", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <awe-button \n    @click.native=\"openModal\">\n    显示对话框\n  </awe-button>\n  <awe-modal\n    :show=\"modalShow\"\n    :title=\"modalTitle\"\n    :confirm=\"confirm\"\n    :cancel=\"cancel\"\n    @close=\"onClose\"\n  >\n    <p>Some contents...</p>\n    <p>Some contents...</p>\n    <p>Some contents...</p>\n  </awe-Modal>\n</template>\n<script>\n  export default{\n    data:function(){\n      return {\n        modalShow: false,\n        modalTitle: '这是标题'\n      }\n    },\n    methods:{\n      openModal () {\n        this.modalShow = true\n      },\n      confirm () {\n        console.log('confirm')\n      },\n      cancel () {\n        console.log('cancel')\n      },\n      onClose () {\n        this.modalShow = false\n      }\n    }\n  }\n</script>\n\n")
], -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "chi-cun" }, "尺寸", -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <awe-button \n    @click.native=\"openModal('xs')\">\n    xs\n  </awe-button>\n  <awe-button \n    @click.native=\"openModal('sm')\">\n    sm\n  </awe-button>\n  <awe-button \n    @click.native=\"openModal('md')\">\n    md\n  </awe-button>\n  <awe-button \n    @click.native=\"openModal('lg')\">\n    lg\n  </awe-button>\n  <awe-modal\n    :size=\"size\"\n    :show=\"modalShow\"\n    :title=\"modalTitle\"\n    :confirm=\"confirm\"\n    :cancel=\"cancel\"\n    @close=\"onClose\"\n  >\n    <p>Some contents...</p>\n    <p>Some contents...</p>\n    <p>Some contents...</p>\n  </awe-Modal>\n</template>\n<script>\n  export default{\n    data:function(){\n      return {\n        modalShow: false,\n        modalTitle: '这是标题',\n        size:'md',\n      }\n    },\n    methods:{\n      openModal (size) {\n        this.size = size\n        this.modalShow = true\n      },\n      confirm () {\n        console.log('confirm')\n      },\n      cancel () {\n        console.log('cancel')\n      },\n      onClose () {\n        this.modalShow = false\n      }\n    }\n  }\n</script>\n\n")
], -1 /* HOISTED */)
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 id=\"api\">API</h2><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">show</td><td style=\"text-align:left;\">是否展示对话框</td><td style=\"text-align:left;\">Boolean</td><td style=\"text-align:left;\">false</td></tr><tr><td style=\"text-align:left;\">title</td><td style=\"text-align:left;\">对话框标题</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">size</td><td style=\"text-align:left;\">对话框尺寸</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\">sm</td></tr><tr><td style=\"text-align:left;\">confirm</td><td style=\"text-align:left;\">确认按钮按下的回调函数</td><td style=\"text-align:left;\">Function</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">cancel</td><td style=\"text-align:left;\">取消按钮按下的回调函数</td><td style=\"text-align:left;\">Function</td><td style=\"text-align:left;\"></td></tr></tbody></table>", 2)

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
//# sourceMappingURL=doc_markdown_aweModal_zh-CN_index_md.main.js.map