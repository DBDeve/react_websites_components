import te from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
var x = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ne() {
  if (M) return p;
  M = 1;
  var r = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function i(u, c, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      m = {};
      for (var _ in c)
        _ !== "key" && (m[_] = c[_]);
    } else m = c;
    return c = m.ref, {
      $$typeof: r,
      type: u,
      key: g,
      ref: c !== void 0 ? c : null,
      props: m
    };
  }
  return p.Fragment = f, p.jsx = i, p.jsxs = i, p;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case A:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function i(e) {
      try {
        f(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), f(e);
      }
    }
    function u(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (P.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, t) {
      function l() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function G() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, t, l, o, d, b, N, E) {
      return l = b.ref, e = {
        $$typeof: S,
        type: e,
        key: t,
        props: b,
        _owner: d
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: G
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function $(e, t, l, o, d, b, N, E) {
      var s = t.children;
      if (s !== void 0)
        if (o)
          if (re(s)) {
            for (o = 0; o < s.length; o++)
              O(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(s);
      if (P.call(t, "key")) {
        s = r(e);
        var h = Object.keys(t).filter(function(ae) {
          return ae !== "key";
        });
        o = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", D[s + o] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          h,
          s
        ), D[s + o] = !0);
      }
      if (s = null, l !== void 0 && (i(l), s = "" + l), g(t) && (i(t.key), s = "" + t.key), "key" in t) {
        l = {};
        for (var y in t)
          y !== "key" && (l[y] = t[y]);
      } else l = t;
      return s && _(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        s,
        b,
        d,
        c(),
        l,
        N,
        E
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var k = te, S = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), B = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), R = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, re = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, Y = {}, I = k.react_stack_bottom_frame.bind(
      k,
      m
    )(), F = v(u(m)), D = {};
    j.Fragment = T, j.jsx = function(e, t, l, o, d) {
      var b = 1e4 > R.recentlyCreatedOwnerStacks++;
      return $(
        e,
        t,
        l,
        !1,
        o,
        d,
        b ? Error("react-stack-top-frame") : I,
        b ? v(u(e)) : F
      );
    }, j.jsxs = function(e, t, l, o, d) {
      var b = 1e4 > R.recentlyCreatedOwnerStacks++;
      return $(
        e,
        t,
        l,
        !0,
        o,
        d,
        b ? Error("react-stack-top-frame") : I,
        b ? v(u(e)) : F
      );
    };
  })()), j;
}
var z;
function oe() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? x.exports = ne() : x.exports = le()), x.exports;
}
var a = oe();
const se = "_header_jg25m_5", ie = "_fixed_jg25m_19", ce = "_navbar_jg25m_27", fe = "_alignComponent_jg25m_37", ue = "_justifyLeft_jg25m_49", me = "_justifyCenter_jg25m_55", be = "_justifyRight_jg25m_61", de = "_il_jg25m_69", he = "_borderRight_jg25m_75", ge = "_touchTarget_jg25m_85", n = {
  header: se,
  fixed: ie,
  navbar: ce,
  alignComponent: fe,
  justifyLeft: ue,
  justifyCenter: me,
  justifyRight: be,
  il: de,
  borderRight: he,
  touchTarget: ge
}, w = {
  left: `${n.justifyLeft}`,
  center: `${n.justifyCenter}`,
  right: `${n.justifyRight}`
}, _e = ({ menuData: r, align: f, componetGrow: i }) => /* @__PURE__ */ a.jsx("nav", { id: "navbar", role: "navigation", "aria-label": "Navigazione principale", style: { "--componet-Grow": i }, className: n.navbar, children: /* @__PURE__ */ a.jsx("ul", { className: `${n.alignComponent} ${w[f]} `, style: { "--componet-Grow": i }, children: r.map((u, c) => /* @__PURE__ */ a.jsx("li", { className: `${n.il} ${c < r.length - 1 ? n.borderRight : "no_borderRight"}`, children: /* @__PURE__ */ a.jsx("a", { href: `${u.pagePath}`, children: u.pageTitle }) }, c)) }) }), pe = ({ iconList: r, align: f, componetGrow: i }) => /* @__PURE__ */ a.jsxs("div", { id: "social_icon", "aria-label": "icone social", className: `${n.alignComponent} ${w[f]}`, style: { "--componet-Grow": i }, children: [
  r.facebook && /* @__PURE__ */ a.jsx("a", { href: r.facebook.link, "aria-label": "Facebook", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-facebook fa-2x" }) }),
  r.instagram && /* @__PURE__ */ a.jsx("a", { href: r.instagram.link, "aria-label": "Instagram", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-instagram fa-2x" }) }),
  r.twitter && /* @__PURE__ */ a.jsx("a", { href: r.twitter.link, "aria-label": "Twitter", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-twitter fa-2x" }) }),
  r.linkedin && /* @__PURE__ */ a.jsx("a", { href: r.linkedin.link, "aria-label": "LinkedIn", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-linkedin fa-2x" }) }),
  r.youtube && /* @__PURE__ */ a.jsx("a", { href: r.youtube.link, "aria-label": "YouTube", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-youtube" }) }),
  r.tiktok && /* @__PURE__ */ a.jsx("a", { href: r.tiktok.link, "aria-label": "TikTok", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-tiktok" }) }),
  r.snapchat && /* @__PURE__ */ a.jsx("a", { href: r.snapchat.link, "aria-label": "Snapchat", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-snapchat-ghost" }) }),
  r.pinterest && /* @__PURE__ */ a.jsx("a", { href: r.pinterest.link, "aria-label": "Pinterest", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-pinterest" }) }),
  r.reddit && /* @__PURE__ */ a.jsx("a", { href: r.reddit.link, "aria-label": "Reddit", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-reddit" }) }),
  r.discord && /* @__PURE__ */ a.jsx("a", { href: r.discord.link, "aria-label": "Discord", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-discord" }) }),
  r.telegram && /* @__PURE__ */ a.jsx("a", { href: r.telegram.link, "aria-label": "Telegram", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-telegram" }) }),
  r.whatsapp && /* @__PURE__ */ a.jsx("a", { href: r.whatsapp.link, "aria-label": "WhatsApp", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-whatsapp" }) }),
  r.github && /* @__PURE__ */ a.jsx("a", { href: r.github.link, "aria-label": "GitHub", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-github fa-2x" }) }),
  r.twitch && /* @__PURE__ */ a.jsx("a", { href: r.twitch.link, "aria-label": "Twitch", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-twitch fa-2x" }) }),
  r.behance && /* @__PURE__ */ a.jsx("a", { href: r.behance.link, "aria-label": "Behance", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-behance" }) }),
  r.dribbble && /* @__PURE__ */ a.jsx("a", { href: r.dribbble.link, "aria-label": "Dribbble", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-dribbble" }) }),
  r.medium && /* @__PURE__ */ a.jsx("a", { href: r.medium.link, "aria-label": "Medium", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-medium" }) }),
  r.vimeo && /* @__PURE__ */ a.jsx("a", { href: r.vimeo.link, "aria-label": "Vimeo", rel: "noopener noreferrer", target: "_blank", className: `${n.touchTarget}`, children: /* @__PURE__ */ a.jsx("i", { className: "fab fa-vimeo" }) })
] }), je = ({ urlImage: r, align: f, componetGrow: i }) => /* @__PURE__ */ a.jsx("div", { id: "logo_image", "aria-label": "immagine logo", className: `${n.alignComponent} ${w[f]}`, style: { "--componet-Grow": i }, children: /* @__PURE__ */ a.jsx("a", { href: "/", "aria-label": "Homepage", children: /* @__PURE__ */ a.jsx("img", { src: `${r}`, alt: "Logo azienda", width: 50, height: 25 }) }) }), ke = ({ backGroundColor: r, fixed: f, children: i }) => {
  const u = f ? n.fixed : "no_fixed";
  return /* @__PURE__ */ a.jsx("header", { role: "banner", style: { "--bg-color": r }, className: `${n.header} ${u}`, children: i });
}, Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Header: ke,
  NavBar: _e,
  NavBarIcon: pe,
  NavBarLogo: je
}, Symbol.toStringTag, { value: "Module" }));
export {
  Re as Header
};
