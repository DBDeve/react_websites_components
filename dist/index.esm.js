import require$$0 from 'react';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var styles = {"header":"Header-module_header__wbp8n","fixed":"Header-module_fixed__Vgp5u","navbar":"Header-module_navbar__HLD67","alignComponent":"Header-module_alignComponent__5dfOj","justifyLeft":"Header-module_justifyLeft__WN-1E","justifyCenter":"Header-module_justifyCenter__TWvZA","justifyRight":"Header-module_justifyRight__hNoYn","il":"Header-module_il__b88KG","borderRight":"Header-module_borderRight__QKdkb","touchTarget":"Header-module_touchTarget__NzhFL"};

// nomi dei componenti dopo const sempre maiuscoli
const alignMap = {
    left: `${styles.justifyLeft}`,
    center: `${styles.justifyCenter}`,
    right: `${styles.justifyRight}`,
};
const NavBar = ({ menuData, align, componetGrow }) => {
    return (jsxRuntimeExports.jsx("nav", { id: "navbar", role: "navigation", "aria-label": "Navigazione principale", style: { '--componet-Grow': componetGrow }, className: styles.navbar, children: jsxRuntimeExports.jsx("ul", { className: `${styles.alignComponent} ${alignMap[align]} `, style: { '--componet-Grow': componetGrow }, children: menuData.map((page, index) => (jsxRuntimeExports.jsx("li", { className: `${styles.il} ${index < menuData.length - 1 ? styles.borderRight : 'no_borderRight'}`, children: jsxRuntimeExports.jsx("a", { href: `${page.pagePath}`, children: page.pageTitle }) }, index))) }) }));
};
const NavBarIcon = ({ iconList, align, componetGrow }) => {
    return (jsxRuntimeExports.jsxs("div", { id: "social_icon", "aria-label": "icone social", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: [iconList.facebook &&
                jsxRuntimeExports.jsx("a", { href: iconList.facebook.link, "aria-label": "Facebook", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-facebook fa-2x" }) }), iconList.instagram &&
                jsxRuntimeExports.jsx("a", { href: iconList.instagram.link, "aria-label": "Instagram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-instagram fa-2x" }) }), iconList.twitter &&
                jsxRuntimeExports.jsx("a", { href: iconList.twitter.link, "aria-label": "Twitter", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-twitter fa-2x" }) }), iconList.linkedin &&
                jsxRuntimeExports.jsx("a", { href: iconList.linkedin.link, "aria-label": "LinkedIn", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-linkedin fa-2x" }) }), iconList.youtube &&
                jsxRuntimeExports.jsx("a", { href: iconList.youtube.link, "aria-label": "YouTube", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }) }), iconList.tiktok &&
                jsxRuntimeExports.jsx("a", { href: iconList.tiktok.link, "aria-label": "TikTok", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-tiktok" }) }), iconList.snapchat &&
                jsxRuntimeExports.jsx("a", { href: iconList.snapchat.link, "aria-label": "Snapchat", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-snapchat-ghost" }) }), iconList.pinterest &&
                jsxRuntimeExports.jsx("a", { href: iconList.pinterest.link, "aria-label": "Pinterest", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-pinterest" }) }), iconList.reddit &&
                jsxRuntimeExports.jsx("a", { href: iconList.reddit.link, "aria-label": "Reddit", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-reddit" }) }), iconList.discord &&
                jsxRuntimeExports.jsx("a", { href: iconList.discord.link, "aria-label": "Discord", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-discord" }) }), iconList.telegram &&
                jsxRuntimeExports.jsx("a", { href: iconList.telegram.link, "aria-label": "Telegram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-telegram" }) }), iconList.whatsapp &&
                jsxRuntimeExports.jsx("a", { href: iconList.whatsapp.link, "aria-label": "WhatsApp", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-whatsapp" }) }), iconList.github &&
                jsxRuntimeExports.jsx("a", { href: iconList.github.link, "aria-label": "GitHub", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-github fa-2x" }) }), iconList.twitch &&
                jsxRuntimeExports.jsx("a", { href: iconList.twitch.link, "aria-label": "Twitch", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-twitch fa-2x" }) }), iconList.behance &&
                jsxRuntimeExports.jsx("a", { href: iconList.behance.link, "aria-label": "Behance", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-behance" }) }), iconList.dribbble &&
                jsxRuntimeExports.jsx("a", { href: iconList.dribbble.link, "aria-label": "Dribbble", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-dribbble" }) }), iconList.medium &&
                jsxRuntimeExports.jsx("a", { href: iconList.medium.link, "aria-label": "Medium", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-medium" }) }), iconList.vimeo &&
                jsxRuntimeExports.jsx("a", { href: iconList.vimeo.link, "aria-label": "Vimeo", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsxRuntimeExports.jsx("i", { className: "fab fa-vimeo" }) })] }));
};
const NavBarLogo = ({ urlImage, align, componetGrow }) => {
    return (jsxRuntimeExports.jsx("div", { id: "logo_image", "aria-label": "immagine logo", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: jsxRuntimeExports.jsx("a", { href: "/", "aria-label": "Homepage", children: jsxRuntimeExports.jsx("img", { src: `${urlImage}`, alt: "Logo azienda", width: 50, height: 25 }) }) }));
};
const Header = ({ backGroundColor, fixed, children }) => {
    const positionClass = fixed ? styles.fixed : 'no_fixed';
    return (jsxRuntimeExports.jsx("header", { role: "banner", style: { '--bg-color': backGroundColor }, className: `${styles.header} ${positionClass}`, children: children }));
};

export { Header, NavBar, NavBarIcon, NavBarLogo };
