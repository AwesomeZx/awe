(self["webpackChunkninecat_ui"] = self["webpackChunkninecat_ui"] || []).push([["doc_markdown_aweTable_zh-CN_index_md"],{

/***/ "./doc/markdown/aweTable/zh-CN/index.md":
/*!**********************************************!*\
  !*** ./doc/markdown/aweTable/zh-CN/index.md ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_md_vue_type_template_id_4f2db0f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.md?vue&type=template&id=4f2db0f5 */ "./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5");
/* harmony import */ var _index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.md?vue&type=script&lang=js */ "./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js");



_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_md_vue_type_template_id_4f2db0f5__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "doc/markdown/aweTable/zh-CN/index.md"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js ***!
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
  const _component_awe_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-table")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_table, {
        columns: _ctx.tableColumns,
        data: _ctx.tableData
      }, null, 8 /* PROPS */, ["columns", "data"])
    ])
  ]))
}
  
    const democomponentExport = {
    data: function () {
      return {
        tableColumns: [
          {
            title: 'Name',
            dataIndex: 'name',
            align: 'center',
            width: 100
          },
          {
            title: 'Age',
            dataIndex: 'age',
            align: 'center'
          },
          {
            title: 'Address',
            dataIndex: 'address',
            align: 'center'
          },
          {
            title: 'Tags',
            dataIndex: 'tags'
          }
        ],
        tableData: [
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
        ]
      }
    }
  }
    return {
      render,
      ...democomponentExport,
    }
  })(),"awe-demo1": (function() {
    

 function render(_ctx, _cache) {
  const _component_awe_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("awe-table")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_awe_table, {
        columns: _ctx.tableColumns,
        data: _ctx.tableData,
        "row-click": _ctx.rowClick,
        "row-dbclick": _ctx.rowDbclick
      }, null, 8 /* PROPS */, ["columns", "data", "row-click", "row-dbclick"])
    ])
  ]))
}
  
    const democomponentExport = {
    data: function () {
      return {
        tableColumns: [
          {
            title: '姓名',
            dataIndex: 'name',
            align: 'center',
            width: 100
          },
          {
            title: '年龄',
            dataIndex: 'age'
          },
          {
            title: '性别',
            dataIndex: 'sex'
          },
          {
            title: '住址',
            dataIndex: 'address'
          }
        ],
        tableData: [
          { name: '张三', age: '11', sex: '男', address: '上海路' },
          { name: '李四', age: '12', sex: '男', address: '北京路' },
          { name: '李花', age: '12', sex: '女', address: '天津路' }
        ]
      }
    },
    methods: {
      rowClick(item,e){
        console.log('rowClick')
        console.log(item,e)
      },
      rowDbclick(item,e){
        console.log('rowDbclick')
        console.log(item,e)
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

/***/ "./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=script&lang=js");
 

/***/ }),

/***/ "./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5":
/*!****************************************************************************!*\
  !*** ./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_4f2db0f5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_clonedRuleSet_1_use_0_build_md_loader_index_js_index_md_vue_type_template_id_4f2db0f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!../../../../build/md-loader/index.js!./index.md?vue&type=template&id=4f2db0f5 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??clonedRuleSet-1.use[0]!./build/md-loader/index.js!./doc/markdown/aweTable/zh-CN/index.md?vue&type=template&id=4f2db0f5 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Table 表格", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "展示行列数据。", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "he-shi-shi-yong" }, "何时使用", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "展示大量数据时使用。", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { id: "dai-ma-yan-shi" }, "代码演示", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "ji-ben-shi-yong" }, "基本使用", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <div>\n    <awe-table\n      :columns=\"tableColumns\"\n      :data=\"tableData\"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n        tableColumns: [\n          {\n            title: 'Name',\n            dataIndex: 'name',\n            align: 'center',\n            width: 100\n          },\n          {\n            title: 'Age',\n            dataIndex: 'age',\n            align: 'center'\n          },\n          {\n            title: 'Address',\n            dataIndex: 'address',\n            align: 'center'\n          },\n          {\n            title: 'Tags',\n            dataIndex: 'tags'\n          }\n        ],\n        tableData: [\n          {\n            key: '1',\n            name: 'John Brown',\n            age: 32,\n            address: 'New York No. 1 Lake Park',\n            tags: ['nice', 'developer'],\n          },\n          {\n            key: '2',\n            name: 'Jim Green',\n            age: 42,\n            address: 'London No. 1 Lake Park',\n            tags: ['loser'],\n          },\n          {\n            key: '3',\n            name: 'Joe Black',\n            age: 32,\n            address: 'Sidney No. 1 Lake Park',\n            tags: ['cool', 'teacher'],\n          },\n        ]\n      }\n    }\n  }\n</script>\n")
], -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { id: "shi-jian-ding-yi" }, "事件定义", -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", { class: "vue" }, "<template>\n  <div>\n    <awe-table\n      :columns=\"tableColumns\"\n      :data=\"tableData\"\n      :row-click=\"rowClick\"\n      :row-dbclick=\"rowDbclick\"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n        tableColumns: [\n          {\n            title: '姓名',\n            dataIndex: 'name',\n            align: 'center',\n            width: 100\n          },\n          {\n            title: '年龄',\n            dataIndex: 'age'\n          },\n          {\n            title: '性别',\n            dataIndex: 'sex'\n          },\n          {\n            title: '住址',\n            dataIndex: 'address'\n          }\n        ],\n        tableData: [\n          { name: '张三', age: '11', sex: '男', address: '上海路' },\n          { name: '李四', age: '12', sex: '男', address: '北京路' },\n          { name: '李花', age: '12', sex: '女', address: '天津路' }\n        ]\n      }\n    },\n    methods: {\n      rowClick(item,e){\n        console.log('rowClick')\n        console.log(item,e)\n      },\n      rowDbclick(item,e){\n        console.log('rowDbclick')\n        console.log(item,e)\n      }\n    }\n  }\n</script>\n")
], -1 /* HOISTED */)
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 id=\"api\">API</h2><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">columns</td><td style=\"text-align:left;\">表头相关设置</td><td style=\"text-align:left;\">Array，具体见下表的参数说明</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">data</td><td style=\"text-align:left;\">表格数据</td><td style=\"text-align:left;\">Array</td><td style=\"text-align:left;\">[]</td></tr></tbody></table><h3 id=\"columns\">columns</h3><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">title</td><td style=\"text-align:left;\">列名称</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">dataIndex</td><td style=\"text-align:left;\">列在 data 中的 key</td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\"></td></tr><tr><td style=\"text-align:left;\">align</td><td style=\"text-align:left;\">对齐方式，可选<code>left</code>,<code>center</code>,<code>right</code></td><td style=\"text-align:left;\">String</td><td style=\"text-align:left;\">left</td></tr><tr><td style=\"text-align:left;\">width</td><td style=\"text-align:left;\">宽度（px）</td><td style=\"text-align:left;\">Number</td><td style=\"text-align:left;\"></td></tr></tbody></table><h3 id=\"table-events\">Table Events</h3><table><thead><tr><th style=\"text-align:left;\">事件名</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">参数</th></tr></thead><tbody><tr><td style=\"text-align:left;\">row-click</td><td style=\"text-align:left;\">当某一行被双击时会触发该事件</td><td style=\"text-align:left;\">row, event</td></tr><tr><td style=\"text-align:left;\">row-dblclick</td><td style=\"text-align:left;\">当某个单元格被双击击时会触发该事件</td><td style=\"text-align:left;\">row, event</td></tr></tbody></table>", 6)

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
//# sourceMappingURL=doc_markdown_aweTable_zh-CN_index_md.main.js.map