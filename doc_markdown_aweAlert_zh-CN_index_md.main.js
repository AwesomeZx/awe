(self["webpackChunkawe_design"] = self["webpackChunkawe_design"] || []).push([["doc_markdown_aweAlert_zh-CN_index_md"],{

/***/ "./doc/markdown/aweAlert/zh-CN/index.md":
/*!**********************************************!*\
  !*** ./doc/markdown/aweAlert/zh-CN/index.md ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_md_vue_type_template_id_5db9d5a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.md?vue&type=template&id=5db9d5a7 */ "./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7");
/* harmony import */ var _index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.md?vue&type=script&lang=js */ "./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js");



_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_md_vue_type_template_id_5db9d5a7__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "doc/markdown/aweAlert/zh-CN/index.md"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js ***!
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
    

 function render(_ctx, _cache) {
  const _component_awe_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-alert")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        show: _ctx.show1,
        "onUpdate:show": _cache[1] || (_cache[1] = $event => (_ctx.show1 = $event)),
        message: "Message",
        type: "info"
      }, null, 8 /* PROPS */, ["show"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        show: _ctx.show2,
        "onUpdate:show": _cache[2] || (_cache[2] = $event => (_ctx.show2 = $event)),
        message: "Message",
        type: "success"
      }, null, 8 /* PROPS */, ["show"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        show: _ctx.show3,
        "onUpdate:show": _cache[3] || (_cache[3] = $event => (_ctx.show3 = $event)),
        message: "Message",
        type: "warning",
        closable: ""
      }, null, 8 /* PROPS */, ["show"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        show: _ctx.show4,
        "onUpdate:show": _cache[4] || (_cache[4] = $event => (_ctx.show4 = $event)),
        message: "Message",
        type: "error",
        showIcon: true
      }, null, 8 /* PROPS */, ["show"])
    ])
  ]))
}
  
    const democomponentExport = {
  data: function () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
    }
  }
}
    return {
      render,
      ...democomponentExport,
    }
  })(),"awe-demo1": (function() {
    

 function render(_ctx, _cache) {
  const _component_awe_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-alert")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        closable: "",
        show: _ctx.show,
        "onUpdate:show": _cache[1] || (_cache[1] = $event => (_ctx.show = $event)),
        message: "Message",
        type: "info",
        "close-text": "Close now"
      }, null, 8 /* PROPS */, ["show"])
    ])
  ]))
}
  
    const democomponentExport = {
  data: function () {
    return {
      show: true,
    }
  }
}
    return {
      render,
      ...democomponentExport,
    }
  })(),"awe-demo2": (function() {
    

 function render(_ctx, _cache) {
  const _component_awe_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-alert")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        show: _ctx.show,
        "onUpdate:show": _cache[1] || (_cache[1] = $event => (_ctx.show = $event)),
        message: "Success Text",
        type: "success",
        description: "Success Description Success Description Success Description"
      }, null, 8 /* PROPS */, ["show"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_alert, {
        closable: "",
        show: _ctx.show,
        "onUpdate:show": _cache[2] || (_cache[2] = $event => (_ctx.show = $event)),
        message: "Warning Text",
        type: "warning",
        showIcon: true,
        description: "Warning Description Warning Description Warning Description"
      }, null, 8 /* PROPS */, ["show"])
    ])
  ]))
}
  
    const democomponentExport = {
  data: function () {
    return {
      show: true,
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

/***/ "./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=script&lang=js");
 

/***/ }),

/***/ "./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7":
/*!****************************************************************************!*\
  !*** ./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_5db9d5a7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_5db9d5a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=template&id=5db9d5a7 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweAlert/zh-CN/index.md?vue&type=template&id=5db9d5a7 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Alert 警告提示", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "警告提示，展现需要关注的信息。", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "he-shi-shi-yong" }, "何时使用", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "当某个页面需要向用户显示警告的信息时。", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "dai-ma-yan-shi" }, "代码演示", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "ji-ben-yong-fa" }, "基本用法", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "最简单的用法，适用于简短的警告提示，四肢颜色，支持是否关闭按钮，支持是否显示辅助图标。")
], -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <div >\n    <awe-alert\n      v-model:show=\"show1\"\n      message=\"Message\"\n      type=\"info\"\n    />\n    <awe-alert\n      v-model:show=\"show2\"\n      message=\"Message\"\n      type=\"success\"\n    />\n    <awe-alert\n      v-model:show=\"show3\"\n      message=\"Message\"\n      type=\"warning\"\n      closable\n    />\n    <awe-alert\n      v-model:show=\"show4\"\n      message=\"Message\"\n      type=\"error\"\n      :showIcon=\"true\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data: function () {\n    return {\n      show1: true,\n      show2: true,\n      show3: true,\n      show4: true,\n    }\n  }\n}\n</script>\n\n")
], -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "zi-ding-yi-guan-bi" }, "自定义关闭", -1 /* HOISTED */)
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "可以自定义关闭，自定义的文字会替换原先的关闭 Icon。")
], -1 /* HOISTED */)
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <div >\n    <awe-alert\n      closable\n      v-model:show=\"show\"\n      message=\"Message\"\n      type=\"info\"\n      close-text=\"Close now\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data: function () {\n    return {\n      show: true,\n    }\n  }\n}\n</script>\n\n")
], -1 /* HOISTED */)
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "han-you-fu-zhu-xing-wen-zi-jie-shao" }, "含有辅助性文字介绍", -1 /* HOISTED */)
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "含有辅助性文字介绍的警告提示。")
], -1 /* HOISTED */)
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <div >\n    <awe-alert\n      v-model:show=\"show\"\n      message=\"Success Text\"\n      type=\"success\"\n      description=\"Success Description Success Description Success Description\"\n    />\n    <awe-alert\n      closable\n      v-model:show=\"show\"\n      message=\"Warning Text\"\n      type=\"warning\"\n      :showIcon=\"true\"\n      description=\"Warning Description Warning Description Warning Description\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data: function () {\n    return {\n      show: true,\n    }\n  }\n}\n</script>\n\n")
], -1 /* HOISTED */)
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 id=\"api\">API</h2><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">show</td><td style=\"text-align:left;\">是否展示</td><td style=\"text-align:left;\">Boolean</td><td style=\"text-align:left;\">false</td></tr><tr><td style=\"text-align:left;\">closable</td><td style=\"text-align:left;\">是否可关闭</td><td style=\"text-align:left;\">Boolean</td><td style=\"text-align:left;\">false</td></tr><tr><td style=\"text-align:left;\">message</td><td style=\"text-align:left;\">提示内容</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">description</td><td style=\"text-align:left;\">警告提示的辅助性文字介绍</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">type</td><td style=\"text-align:left;\">提示类型，可选值<code>info</code>,<code>success</code>,<code>warning</code>,<code>error</code></td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\">info</td></tr><tr><td style=\"text-align:left;\">closeText</td><td style=\"text-align:left;\">自定义关闭文案</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">showIcon</td><td style=\"text-align:left;\">是否展示辅助性图标</td><td style=\"text-align:left;\">Boolean</td><td style=\"text-align:left;\">flase</td></tr></tbody></table>", 2)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_awe_demo0 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-demo0")
  const _component_demo_block = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("demo-block")
  const _component_awe_demo1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-demo1")
  const _component_awe_demo2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-demo2")

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
        _hoisted_8
      ]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_9,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, null, {
      source: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_demo1)
      ]),
      highlight: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_11
      ]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_10
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_12,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, null, {
      source: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_demo2)
      ]),
      highlight: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_14
      ]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_13
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_15
  ]))
}

/***/ })

}]);
//# sourceMappingURL=doc_markdown_aweAlert_zh-CN_index_md.main.js.map