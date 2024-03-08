import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-SONSSR3I.js";
import {
  createHotContext
} from "/build/_shared/chunk-PZEU5VJO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/contacts.$contactId_.edit.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contacts.$contactId_.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contacts.$contactId_.edit.tsx"
  );
  import.meta.hot.lastModified = "1709168565001.6084";
}
function EditContact() {
  _s();
  const {
    contact
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Name" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: contact.first, "aria-label": "First name", name: "first", type: "text", placeholder: "First" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Last name", defaultValue: contact.last, name: "last", placeholder: "Last", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Twitter" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: contact.twitter, name: "twitter", placeholder: "@jack", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Avatar URL" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Avatar URL", defaultValue: contact.avatar, name: "avatar", placeholder: "https://example.com/avatar.jpg", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Notes" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { defaultValue: contact.notes, name: "notes", rows: 6 }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Save" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, contact.id, true, {
    fileName: "app/routes/contacts.$contactId_.edit.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(EditContact, "fVXFZ2DHJWBPDlTt0dS34HtRFN4=", false, function() {
  return [useLoaderData];
});
_c = EditContact;
var _c;
$RefreshReg$(_c, "EditContact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditContact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactId_.edit-OWYLZPKC.js.map
