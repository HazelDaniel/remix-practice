import {
  Form,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-4EN5BOYW.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-PZEU5VJO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/app.css
var app_default = "/build/_assets/app-V3UKCKY4.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: app_default
  }];
};
function App() {
  _s();
  const {
    contacts,
    q
  } = useLoaderData();
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "sidebar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Remix Contacts" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", role: "search", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "q", "aria-label": "Search contacts", placeholder: "Search", type: "search", name: "q", defaultValue: q || "" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "search-spinner", "aria-hidden": true, hidden: true }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "New" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: contacts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive,
          isPending
        }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }, to: `contacts/${contact.id}`, prefetch: "render", children: [
          contact.first || contact.last ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            contact.first,
            " ",
            contact.last
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 56
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 31
          }, this),
          contact.favorite ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2605" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 86,
            columnNumber: 43
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this) }, contact.id, false, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No contacts" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 89,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "detail", className: navigation.state === "loading" ? "loading" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(App, "y7tNg/eS3LGvn5W9ifHh8Rh85iY=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-6ZN6VD4O.js.map
