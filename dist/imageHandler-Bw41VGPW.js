import { jsxs as Xe, jsx as Y, Fragment as $a } from "react/jsx-runtime";
import * as Z from "react";
import $, { createContext as Nr, useContext as er, useState as $r, useCallback as Ki, useEffect as kr, useRef as Zr, useImperativeHandle as KE, forwardRef as dn, useMemo as lo, isValidElement as Vr, Children as Vi, PureComponent as Dr, cloneElement as Ot, createElement as VE, Component as YE, useLayoutEffect as bm } from "react";
import * as xm from "react-dom";
import { createPortal as W3 } from "react-dom";
function XE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = XE(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function z3() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = XE(e)) && (n && (n += " "), n += t);
  return n;
}
const bw = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, xw = z3, Wn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return xw(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, u = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = bw(d) || bw(h);
    return i[f][v];
  }), s = r && Object.entries(r).reduce((f, d) => {
    let [h, v] = d;
    return v === void 0 || (f[h] = v), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: h, className: v, ...g } = d;
    return Object.entries(g).every((x) => {
      let [y, b] = x;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[y]) : {
        ...a,
        ...s
      }[y] === b;
    }) ? [
      ...f,
      h,
      v
    ] : f;
  }, []);
  return xw(e, u, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, wm = Nr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), cJ = ({
  children: e
}) => {
  const [t, r] = $r(!1), [n, i] = $r([]), a = Ki(
    (s) => {
      i(
        s || [...ww].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), u = Ki(() => r(!1), [r]);
  return kr(() => {
    window.XRay = {
      enable: a,
      disable: u
    };
  }, [a, u]), /* @__PURE__ */ Xe(wm.Provider, { value: { enabled: t, enable: a, disable: u, filter: n }, children: [
    e,
    t && typeof document < "u" && W3(
      /* @__PURE__ */ Xe("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ Y("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ Y("div", { className: "flex flex-col space-y-2", children: ww.map((s) => /* @__PURE__ */ Xe("label", { className: "block", children: [
          /* @__PURE__ */ Y(
            "input",
            {
              onChange: (l) => l.target.checked ? i([...n, s]) : i(n.filter((f) => f !== s)),
              type: "checkbox",
              checked: n.includes(s),
              className: "mr-2"
            }
          ),
          s
        ] }, s)) })
      ] }),
      document == null ? void 0 : document.body
    )
  ] });
}, U3 = Wn(
  "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  {
    variants: {
      type: {
        layout: "outline-red-500",
        info: "outline-blue-500",
        action: "outline-green-600",
        form: "outline-purple-600"
      }
    }
  }
), H3 = Wn(
  "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
  {
    variants: {
      type: {
        layout: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        action: "bg-green-600 text-white",
        form: "bg-purple-600 text-white"
      }
    }
  }
), G3 = (e, t) => {
  const { enabled: r, filter: n } = Z.useContext(wm), i = Zr(null);
  KE(t, () => i.current);
  const a = r && !e.internal, u = typeof document < "u" ? document.body : null;
  return kr(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const s = i.current;
    s.dataset.componentName = e.name;
    let l = null, f = null;
    if (u) {
      const d = s.getBoundingClientRect(), { top: h, left: v, width: g, height: x } = d;
      l = document.createElement("div"), l.className = U3({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${x}px`, f = document.createElement("div"), f.className = H3({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, u.appendChild(f), u.appendChild(l);
    }
    return () => {
      l && (u == null || u.removeChild(l)), f && (u == null || u.removeChild(f));
    };
  }, [a, e.name, e.type, n, u]), {
    ref: i,
    enabled: r
  };
}, lJ = () => er(wm), ww = ["layout", "info", "action", "form"], K3 = (e, t) => {
  const r = dn((n, i) => {
    const { ref: a } = G3(e, i);
    return /* @__PURE__ */ Y(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function ZE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ZE(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ie() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ZE(e)) && (n && (n += " "), n += t);
  return n;
}
const _m = "-", V3 = (e) => {
  const t = X3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (u) => {
      const s = u.split(_m);
      return s[0] === "" && s.length !== 1 && s.shift(), JE(s, t) || Y3(u);
    },
    getConflictingClassGroupIds: (u, s) => {
      const l = r[u] || [];
      return s && n[u] ? [...l, ...n[u]] : l;
    }
  };
}, JE = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? JE(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(_m);
  return (u = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : u.classGroupId;
}, _w = /^\[(.+)\]$/, Y3 = (e) => {
  if (_w.test(e)) {
    const t = _w.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, X3 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return J3(Object.entries(e.classGroups), r).forEach(([a, u]) => {
    Hg(u, n, a, t);
  }), n;
}, Hg = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : Ow(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Z3(i)) {
        Hg(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, u]) => {
      Hg(u, Ow(t, a), r, n);
    });
  });
}, Ow = (e, t) => {
  let r = e;
  return t.split(_m).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Z3 = (e) => e.isThemeGetter, J3 = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([u, s]) => [t + u, s])) : a);
  return [r, i];
}) : e, Q3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, u) => {
    r.set(a, u), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let u = r.get(a);
      if (u !== void 0)
        return u;
      if ((u = n.get(a)) !== void 0)
        return i(a, u), u;
    },
    set(a, u) {
      r.has(a) ? r.set(a, u) : i(a, u);
    }
  };
}, QE = "!", e8 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, u = (s) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let b = 0; b < s.length; b++) {
      let S = s[b];
      if (f === 0) {
        if (S === i && (n || s.slice(b, b + a) === t)) {
          l.push(s.slice(d, b)), d = b + a;
          continue;
        }
        if (S === "/") {
          h = b;
          continue;
        }
      }
      S === "[" ? f++ : S === "]" && f--;
    }
    const v = l.length === 0 ? s : s.substring(d), g = v.startsWith(QE), x = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: u
  }) : u;
}, t8 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, r8 = (e) => ({
  cache: Q3(e.cacheSize),
  parseClassName: e8(e),
  ...V3(e)
}), n8 = /\s+/, i8 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], u = e.trim().split(n8);
  let s = "";
  for (let l = u.length - 1; l >= 0; l -= 1) {
    const f = u[l], {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = r(f);
    let x = !!g, y = n(x ? v.substring(0, g) : v);
    if (!y) {
      if (!x) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (y = n(v), !y) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const b = t8(d).join(":"), S = h ? b + QE : b, O = S + y;
    if (a.includes(O))
      continue;
    a.push(O);
    const A = i(y, x);
    for (let _ = 0; _ < A.length; ++_) {
      const m = A[_];
      a.push(S + m);
    }
    s = f + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function a8() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = eT(t)) && (n && (n += " "), n += r);
  return n;
}
const eT = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = eT(e[n])) && (r && (r += " "), r += t);
  return r;
};
function o8(e, ...t) {
  let r, n, i, a = u;
  function u(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = r8(f), n = r.cache.get, i = r.cache.set, a = s, s(l);
  }
  function s(l) {
    const f = n(l);
    if (f)
      return f;
    const d = i8(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(a8.apply(null, arguments));
  };
}
const ut = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, tT = /^\[(?:([a-z-]+):)?(.+)\]$/i, u8 = /^\d+\/\d+$/, s8 = /* @__PURE__ */ new Set(["px", "full", "screen"]), c8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, l8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, f8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, d8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, h8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tn = (e) => ka(e) || s8.has(e) || u8.test(e), oi = (e) => fo(e, "length", w8), ka = (e) => !!e && !Number.isNaN(Number(e)), Nd = (e) => fo(e, "number", ka), Ho = (e) => !!e && Number.isInteger(Number(e)), p8 = (e) => e.endsWith("%") && ka(e.slice(0, -1)), $e = (e) => tT.test(e), ui = (e) => c8.test(e), v8 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), g8 = (e) => fo(e, v8, rT), y8 = (e) => fo(e, "position", rT), m8 = /* @__PURE__ */ new Set(["image", "url"]), b8 = (e) => fo(e, m8, O8), x8 = (e) => fo(e, "", _8), Go = () => !0, fo = (e, t, r) => {
  const n = tT.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, w8 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  l8.test(e) && !f8.test(e)
), rT = () => !1, _8 = (e) => d8.test(e), O8 = (e) => h8.test(e), S8 = () => {
  const e = ut("colors"), t = ut("spacing"), r = ut("blur"), n = ut("brightness"), i = ut("borderColor"), a = ut("borderRadius"), u = ut("borderSpacing"), s = ut("borderWidth"), l = ut("contrast"), f = ut("grayscale"), d = ut("hueRotate"), h = ut("invert"), v = ut("gap"), g = ut("gradientColorStops"), x = ut("gradientColorStopPositions"), y = ut("inset"), b = ut("margin"), S = ut("opacity"), O = ut("padding"), A = ut("saturate"), _ = ut("scale"), m = ut("sepia"), E = ut("skew"), T = ut("space"), I = ut("translate"), B = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", $e, t], j = () => [$e, t], q = () => ["", Tn, oi], F = () => ["auto", ka, $e], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", $e], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [ka, $e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Go],
      spacing: [Tn, oi],
      blur: ["none", "", ui, $e],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ui, $e],
      borderSpacing: j(),
      borderWidth: q(),
      contrast: X(),
      grayscale: ue(),
      hueRotate: X(),
      invert: ue(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [p8, oi],
      inset: N(),
      margin: N(),
      opacity: X(),
      padding: j(),
      saturate: X(),
      scale: X(),
      sepia: ue(),
      skew: X(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $e]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ui]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...V(), $e]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ho, $e]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", $e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ue()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ue()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ho, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Go]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ho, $e]
        }, $e]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Go]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ho, $e]
        }, $e]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", $e]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $e]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...G()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...G(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [T]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $e, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [$e, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [$e, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ui]
        }, ui]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$e, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [$e, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$e, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [$e, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ui, oi]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nd]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Go]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ka, Nd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Tn, $e]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $e]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $e]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Tn, oi]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Tn, $e]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $e]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", $e]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...V(), y8]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", g8]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, b8]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Tn, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Tn, oi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: q()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Tn, oi]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ui, x8]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Go]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ui, $e]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [m]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [m]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $e]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: X()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: X()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $e]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ho, $e]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $e]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $e]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", $e]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Tn, oi, Nd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, A8 = /* @__PURE__ */ o8(S8);
function Lt(...e) {
  return A8(Ie(e));
}
function P8(e) {
  return Lt(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const Sw = Wn("inline-block shrink-0", {
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
      xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Om = dn(function({ size: t, icon: r, state: n = "normal", className: i, ...a }, u) {
  var f;
  if (!r) return null;
  const s = r;
  return ((f = r.displayName) == null ? void 0 : f.includes("Animated")) ? /* @__PURE__ */ Y(
    s,
    {
      ref: u,
      ...a,
      animate: n,
      className: Lt(Sw({ size: t }), "select-none", i)
    }
  ) : /* @__PURE__ */ Y(
    s,
    {
      ref: u,
      ...a,
      className: Lt("aspect-square", Sw({ size: t }), i)
    }
  );
}), E8 = (e, t) => /* @__PURE__ */ Xe("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), T8 = dn(E8), nT = Nr(void 0), fJ = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ Y(nT.Provider, { value: { component: t, currentPath: r }, children: e }), iT = () => {
  const e = er(nT);
  return {
    controller: () => ({}),
    ...e
  };
};
function ac(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const aT = () => {
  const { currentPath: e } = iT(), t = Ki(
    (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? ac(e) === ac(r) : `${ac(e)}/`.startsWith(
      `${ac(r)}/`
    ),
    [e]
  );
  return {
    currentPath: e,
    isActive: t
  };
}, C8 = dn(
  function(t, r) {
    const { component: n } = iT(), { isActive: i } = aT(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, u = lo(
      () => dn(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ Y("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ Y(u, { ref: r, ...a });
  }
), M8 = Wn("inline-flex flex-row items-center gap-1 text-base", {
  variants: {
    variant: {
      text: "text-inherit no-underline",
      link: "text-f1-link underline visited:text-f1-link hover:text-f1-link active:text-f1-link"
    },
    active: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "link"
  }
}), dJ = dn(function({ className: t, children: r, variant: n, stopPropagation: i = !1, ...a }, u) {
  const { target: s } = a, l = s === "_blank", { isActive: f } = aT();
  return /* @__PURE__ */ Xe(
    C8,
    {
      ref: u,
      ...a,
      onClick: (h) => {
        var v;
        i && h.stopPropagation(), (v = a.onClick) == null || v.call(a, h);
      },
      className: Lt(
        M8({ variant: n, active: f(a.href) }),
        t
      ),
      children: [
        /* @__PURE__ */ Y("span", { children: r }),
        l && /* @__PURE__ */ Y(Om, { icon: T8, size: "sm" })
      ]
    }
  );
});
function I8(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function oT(...e) {
  return (t) => e.forEach((r) => I8(r, t));
}
function na(...e) {
  return Z.useCallback(oT(...e), e);
}
var Sm = Z.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = Z.Children.toArray(r), a = i.find(R8);
  if (a) {
    const u = a.props.children, s = i.map((l) => l === a ? Z.Children.count(u) > 1 ? Z.Children.only(null) : Z.isValidElement(u) ? u.props.children : null : l);
    return /* @__PURE__ */ Y(Gg, { ...n, ref: t, children: Z.isValidElement(u) ? Z.cloneElement(u, void 0, s) : null });
  }
  return /* @__PURE__ */ Y(Gg, { ...n, ref: t, children: r });
});
Sm.displayName = "Slot";
var Gg = Z.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (Z.isValidElement(r)) {
    const i = k8(r);
    return Z.cloneElement(r, {
      ...$8(n, r.props),
      // @ts-ignore
      ref: t ? oT(t, i) : i
    });
  }
  return Z.Children.count(r) > 1 ? Z.Children.only(null) : null;
});
Gg.displayName = "SlotClone";
var uT = ({ children: e }) => /* @__PURE__ */ Y($a, { children: e });
function R8(e) {
  return Z.isValidElement(e) && e.type === uT;
}
function $8(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...s) => {
      a(...s), i(...s);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function k8(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const j8 = Wn(
  Lt(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    P8()
  ),
  {
    variants: {
      variant: {
        default: "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline: "border border-solid border-f1-border bg-f1-background-inverse-secondary text-f1-foreground hover:border-f1-border-hover",
        neutral: "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical: "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-transparent hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
        ghost: "bg-transparent text-f1-foreground hover:bg-f1-background-secondary-hover",
        promote: "border border-solid border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover"
      },
      size: {
        sm: "h-6 rounded-sm px-2",
        md: "h-8 rounded px-3",
        lg: "h-10 rounded px-4"
      },
      round: {
        true: "aspect-square px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      round: !1
    }
  }
), sT = Z.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, u) => /* @__PURE__ */ Y(
    i ? Sm : "button",
    {
      className: Lt(j8({ variant: r, size: n, round: t }), e),
      ref: u,
      ...a
    }
  )
);
sT.displayName = "Button";
const N8 = Wn("-ml-0.5 transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse/80",
      outline: "text-f1-icon",
      neutral: "text-f1-icon",
      critical: "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse/80",
      ghost: "text-f1-icon",
      promote: "text-f1-icon"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), D8 = Wn("transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse",
      outline: "text-f1-icon-bold",
      neutral: "text-f1-icon-bold",
      critical: "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse",
      ghost: "text-f1-icon-bold",
      promote: "text-f1-icon-bold"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), hJ = dn(function({
  label: t,
  hideLabel: r,
  onClick: n,
  disabled: i,
  loading: a,
  icon: u,
  variant: s = "default",
  size: l = "md",
  ...f
}, d) {
  const [h, v] = $r(!1);
  return /* @__PURE__ */ Xe(
    sT,
    {
      title: r ? t : void 0,
      onClick: async (x) => {
        const y = n == null ? void 0 : n(x);
        if (y instanceof Promise) {
          v(!0);
          try {
            await y;
          } finally {
            v(!1);
          }
        }
      },
      disabled: i || h || a,
      ref: d,
      variant: s,
      size: l,
      round: r,
      ...f,
      children: [
        u && /* @__PURE__ */ Y(
          Om,
          {
            size: l === "sm" ? "sm" : "md",
            icon: u,
            className: r ? D8({ variant: s }) : N8({ variant: s })
          }
        ),
        !r && t
      ]
    }
  );
}), cT = Nr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), pJ = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = $r(e), i = Ki(() => {
    n(!0);
  }, []), a = Ki(() => n(!1), []), u = Ki(() => n((s) => !s), []);
  return /* @__PURE__ */ Y(cT.Provider, { value: { enable: i, disable: a, toggle: u, enabled: r }, children: t });
}, L8 = () => {
  const e = er(cT);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dd, Aw;
function tr() {
  if (Aw) return Dd;
  Aw = 1;
  var e = Array.isArray;
  return Dd = e, Dd;
}
var Ld, Pw;
function lT() {
  if (Pw) return Ld;
  Pw = 1;
  var e = typeof Mr == "object" && Mr && Mr.Object === Object && Mr;
  return Ld = e, Ld;
}
var qd, Ew;
function vn() {
  if (Ew) return qd;
  Ew = 1;
  var e = lT(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return qd = r, qd;
}
var Bd, Tw;
function ts() {
  if (Tw) return Bd;
  Tw = 1;
  var e = vn(), t = e.Symbol;
  return Bd = t, Bd;
}
var Fd, Cw;
function q8() {
  if (Cw) return Fd;
  Cw = 1;
  var e = ts(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(u) {
    var s = r.call(u, i), l = u[i];
    try {
      u[i] = void 0;
      var f = !0;
    } catch {
    }
    var d = n.call(u);
    return f && (s ? u[i] = l : delete u[i]), d;
  }
  return Fd = a, Fd;
}
var Wd, Mw;
function B8() {
  if (Mw) return Wd;
  Mw = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Wd = r, Wd;
}
var zd, Iw;
function zn() {
  if (Iw) return zd;
  Iw = 1;
  var e = ts(), t = q8(), r = B8(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return zd = u, zd;
}
var Ud, Rw;
function Un() {
  if (Rw) return Ud;
  Rw = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ud = e, Ud;
}
var Hd, $w;
function ho() {
  if ($w) return Hd;
  $w = 1;
  var e = zn(), t = Un(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return Hd = n, Hd;
}
var Gd, kw;
function Am() {
  if (kw) return Gd;
  kw = 1;
  var e = tr(), t = ho(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, u) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || u != null && a in Object(u);
  }
  return Gd = i, Gd;
}
var Kd, jw;
function xi() {
  if (jw) return Kd;
  jw = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Kd = e, Kd;
}
var Vd, Nw;
function Pm() {
  if (Nw) return Vd;
  Nw = 1;
  var e = zn(), t = xi(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function u(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == n || l == i || l == r || l == a;
  }
  return Vd = u, Vd;
}
var Yd, Dw;
function F8() {
  if (Dw) return Yd;
  Dw = 1;
  var e = vn(), t = e["__core-js_shared__"];
  return Yd = t, Yd;
}
var Xd, Lw;
function W8() {
  if (Lw) return Xd;
  Lw = 1;
  var e = F8(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Xd = r, Xd;
}
var Zd, qw;
function fT() {
  if (qw) return Zd;
  qw = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Zd = r, Zd;
}
var Jd, Bw;
function z8() {
  if (Bw) return Jd;
  Bw = 1;
  var e = Pm(), t = W8(), r = xi(), n = fT(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, l = u.toString, f = s.hasOwnProperty, d = RegExp(
    "^" + l.call(f).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(v) {
    if (!r(v) || t(v))
      return !1;
    var g = e(v) ? d : a;
    return g.test(n(v));
  }
  return Jd = h, Jd;
}
var Qd, Fw;
function U8() {
  if (Fw) return Qd;
  Fw = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Qd = e, Qd;
}
var eh, Ww;
function ia() {
  if (Ww) return eh;
  Ww = 1;
  var e = z8(), t = U8();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return eh = r, eh;
}
var th, zw;
function El() {
  if (zw) return th;
  zw = 1;
  var e = ia(), t = e(Object, "create");
  return th = t, th;
}
var rh, Uw;
function H8() {
  if (Uw) return rh;
  Uw = 1;
  var e = El();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return rh = t, rh;
}
var nh, Hw;
function G8() {
  if (Hw) return nh;
  Hw = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return nh = e, nh;
}
var ih, Gw;
function K8() {
  if (Gw) return ih;
  Gw = 1;
  var e = El(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var u = this.__data__;
    if (e) {
      var s = u[a];
      return s === t ? void 0 : s;
    }
    return n.call(u, a) ? u[a] : void 0;
  }
  return ih = i, ih;
}
var ah, Kw;
function V8() {
  if (Kw) return ah;
  Kw = 1;
  var e = El(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return ah = n, ah;
}
var oh, Vw;
function Y8() {
  if (Vw) return oh;
  Vw = 1;
  var e = El(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return oh = r, oh;
}
var uh, Yw;
function X8() {
  if (Yw) return uh;
  Yw = 1;
  var e = H8(), t = G8(), r = K8(), n = V8(), i = Y8();
  function a(u) {
    var s = -1, l = u == null ? 0 : u.length;
    for (this.clear(); ++s < l; ) {
      var f = u[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, uh = a, uh;
}
var sh, Xw;
function Z8() {
  if (Xw) return sh;
  Xw = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return sh = e, sh;
}
var ch, Zw;
function Em() {
  if (Zw) return ch;
  Zw = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ch = e, ch;
}
var lh, Jw;
function Tl() {
  if (Jw) return lh;
  Jw = 1;
  var e = Em();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return lh = t, lh;
}
var fh, Qw;
function J8() {
  if (Qw) return fh;
  Qw = 1;
  var e = Tl(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, u = e(a, i);
    if (u < 0)
      return !1;
    var s = a.length - 1;
    return u == s ? a.pop() : r.call(a, u, 1), --this.size, !0;
  }
  return fh = n, fh;
}
var dh, e1;
function Q8() {
  if (e1) return dh;
  e1 = 1;
  var e = Tl();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return dh = t, dh;
}
var hh, t1;
function eL() {
  if (t1) return hh;
  t1 = 1;
  var e = Tl();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return hh = t, hh;
}
var ph, r1;
function tL() {
  if (r1) return ph;
  r1 = 1;
  var e = Tl();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return ph = t, ph;
}
var vh, n1;
function Cl() {
  if (n1) return vh;
  n1 = 1;
  var e = Z8(), t = J8(), r = Q8(), n = eL(), i = tL();
  function a(u) {
    var s = -1, l = u == null ? 0 : u.length;
    for (this.clear(); ++s < l; ) {
      var f = u[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, vh = a, vh;
}
var gh, i1;
function Tm() {
  if (i1) return gh;
  i1 = 1;
  var e = ia(), t = vn(), r = e(t, "Map");
  return gh = r, gh;
}
var yh, a1;
function rL() {
  if (a1) return yh;
  a1 = 1;
  var e = X8(), t = Cl(), r = Tm();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return yh = n, yh;
}
var mh, o1;
function nL() {
  if (o1) return mh;
  o1 = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return mh = e, mh;
}
var bh, u1;
function Ml() {
  if (u1) return bh;
  u1 = 1;
  var e = nL();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return bh = t, bh;
}
var xh, s1;
function iL() {
  if (s1) return xh;
  s1 = 1;
  var e = Ml();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return xh = t, xh;
}
var wh, c1;
function aL() {
  if (c1) return wh;
  c1 = 1;
  var e = Ml();
  function t(r) {
    return e(this, r).get(r);
  }
  return wh = t, wh;
}
var _h, l1;
function oL() {
  if (l1) return _h;
  l1 = 1;
  var e = Ml();
  function t(r) {
    return e(this, r).has(r);
  }
  return _h = t, _h;
}
var Oh, f1;
function uL() {
  if (f1) return Oh;
  f1 = 1;
  var e = Ml();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Oh = t, Oh;
}
var Sh, d1;
function Cm() {
  if (d1) return Sh;
  d1 = 1;
  var e = rL(), t = iL(), r = aL(), n = oL(), i = uL();
  function a(u) {
    var s = -1, l = u == null ? 0 : u.length;
    for (this.clear(); ++s < l; ) {
      var f = u[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Sh = a, Sh;
}
var Ah, h1;
function dT() {
  if (h1) return Ah;
  h1 = 1;
  var e = Cm(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var u = arguments, s = i ? i.apply(this, u) : u[0], l = a.cache;
      if (l.has(s))
        return l.get(s);
      var f = n.apply(this, u);
      return a.cache = l.set(s, f) || l, f;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Ah = r, Ah;
}
var Ph, p1;
function sL() {
  if (p1) return Ph;
  p1 = 1;
  var e = dT(), t = 500;
  function r(n) {
    var i = e(n, function(u) {
      return a.size === t && a.clear(), u;
    }), a = i.cache;
    return i;
  }
  return Ph = r, Ph;
}
var Eh, v1;
function cL() {
  if (v1) return Eh;
  v1 = 1;
  var e = sL(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(u, s, l, f) {
      a.push(l ? f.replace(r, "$1") : s || u);
    }), a;
  });
  return Eh = n, Eh;
}
var Th, g1;
function Mm() {
  if (g1) return Th;
  g1 = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Th = e, Th;
}
var Ch, y1;
function lL() {
  if (y1) return Ch;
  y1 = 1;
  var e = ts(), t = Mm(), r = tr(), n = ho(), i = 1 / 0, a = e ? e.prototype : void 0, u = a ? a.toString : void 0;
  function s(l) {
    if (typeof l == "string")
      return l;
    if (r(l))
      return t(l, s) + "";
    if (n(l))
      return u ? u.call(l) : "";
    var f = l + "";
    return f == "0" && 1 / l == -i ? "-0" : f;
  }
  return Ch = s, Ch;
}
var Mh, m1;
function hT() {
  if (m1) return Mh;
  m1 = 1;
  var e = lL();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Mh = t, Mh;
}
var Ih, b1;
function pT() {
  if (b1) return Ih;
  b1 = 1;
  var e = tr(), t = Am(), r = cL(), n = hT();
  function i(a, u) {
    return e(a) ? a : t(a, u) ? [a] : r(n(a));
  }
  return Ih = i, Ih;
}
var Rh, x1;
function Il() {
  if (x1) return Rh;
  x1 = 1;
  var e = ho(), t = 1 / 0;
  function r(n) {
    if (typeof n == "string" || e(n))
      return n;
    var i = n + "";
    return i == "0" && 1 / n == -t ? "-0" : i;
  }
  return Rh = r, Rh;
}
var $h, w1;
function Im() {
  if (w1) return $h;
  w1 = 1;
  var e = pT(), t = Il();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, u = i.length; n != null && a < u; )
      n = n[t(i[a++])];
    return a && a == u ? n : void 0;
  }
  return $h = r, $h;
}
var kh, _1;
function vT() {
  if (_1) return kh;
  _1 = 1;
  var e = Im();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return kh = t, kh;
}
var fL = vT();
const pr = /* @__PURE__ */ Je(fL);
var jh, O1;
function dL() {
  if (O1) return jh;
  O1 = 1;
  function e(t) {
    return t == null;
  }
  return jh = e, jh;
}
var hL = dL();
const Te = /* @__PURE__ */ Je(hL);
var Nh, S1;
function pL() {
  if (S1) return Nh;
  S1 = 1;
  var e = zn(), t = tr(), r = Un(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Nh = i, Nh;
}
var vL = pL();
const rs = /* @__PURE__ */ Je(vL);
var gL = Pm();
const Pe = /* @__PURE__ */ Je(gL);
var yL = xi();
const po = /* @__PURE__ */ Je(yL);
var oc = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function mL() {
  if (A1) return Ge;
  A1 = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function A(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case t:
          switch (m = m.type, m) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case d:
                case x:
                case g:
                case u:
                  return m;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(m) {
    return A(m) === f;
  }
  return Ge.AsyncMode = l, Ge.ConcurrentMode = f, Ge.ContextConsumer = s, Ge.ContextProvider = u, Ge.Element = t, Ge.ForwardRef = d, Ge.Fragment = n, Ge.Lazy = x, Ge.Memo = g, Ge.Portal = r, Ge.Profiler = a, Ge.StrictMode = i, Ge.Suspense = h, Ge.isAsyncMode = function(m) {
    return _(m) || A(m) === l;
  }, Ge.isConcurrentMode = _, Ge.isContextConsumer = function(m) {
    return A(m) === s;
  }, Ge.isContextProvider = function(m) {
    return A(m) === u;
  }, Ge.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ge.isForwardRef = function(m) {
    return A(m) === d;
  }, Ge.isFragment = function(m) {
    return A(m) === n;
  }, Ge.isLazy = function(m) {
    return A(m) === x;
  }, Ge.isMemo = function(m) {
    return A(m) === g;
  }, Ge.isPortal = function(m) {
    return A(m) === r;
  }, Ge.isProfiler = function(m) {
    return A(m) === a;
  }, Ge.isStrictMode = function(m) {
    return A(m) === i;
  }, Ge.isSuspense = function(m) {
    return A(m) === h;
  }, Ge.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === a || m === i || m === h || m === v || typeof m == "object" && m !== null && (m.$$typeof === x || m.$$typeof === g || m.$$typeof === u || m.$$typeof === s || m.$$typeof === d || m.$$typeof === b || m.$$typeof === S || m.$$typeof === O || m.$$typeof === y);
  }, Ge.typeOf = A, Ge;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function bL() {
  return P1 || (P1 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === h || k === v || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === g || k.$$typeof === u || k.$$typeof === s || k.$$typeof === d || k.$$typeof === b || k.$$typeof === S || k.$$typeof === O || k.$$typeof === y);
    }
    function _(k) {
      if (typeof k == "object" && k !== null) {
        var Ee = k.$$typeof;
        switch (Ee) {
          case t:
            var we = k.type;
            switch (we) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return we;
              default:
                var Fe = we && we.$$typeof;
                switch (Fe) {
                  case s:
                  case d:
                  case x:
                  case g:
                  case u:
                    return Fe;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var m = l, E = f, T = s, I = u, B = t, L = d, N = n, j = x, q = g, F = r, V = a, U = i, J = h, G = !1;
    function ue(k) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(k) || _(k) === l;
    }
    function H(k) {
      return _(k) === f;
    }
    function X(k) {
      return _(k) === s;
    }
    function ae(k) {
      return _(k) === u;
    }
    function ce(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function he(k) {
      return _(k) === d;
    }
    function ye(k) {
      return _(k) === n;
    }
    function be(k) {
      return _(k) === x;
    }
    function le(k) {
      return _(k) === g;
    }
    function ge(k) {
      return _(k) === r;
    }
    function te(k) {
      return _(k) === a;
    }
    function se(k) {
      return _(k) === i;
    }
    function ve(k) {
      return _(k) === h;
    }
    Ke.AsyncMode = m, Ke.ConcurrentMode = E, Ke.ContextConsumer = T, Ke.ContextProvider = I, Ke.Element = B, Ke.ForwardRef = L, Ke.Fragment = N, Ke.Lazy = j, Ke.Memo = q, Ke.Portal = F, Ke.Profiler = V, Ke.StrictMode = U, Ke.Suspense = J, Ke.isAsyncMode = ue, Ke.isConcurrentMode = H, Ke.isContextConsumer = X, Ke.isContextProvider = ae, Ke.isElement = ce, Ke.isForwardRef = he, Ke.isFragment = ye, Ke.isLazy = be, Ke.isMemo = le, Ke.isPortal = ge, Ke.isProfiler = te, Ke.isStrictMode = se, Ke.isSuspense = ve, Ke.isValidElementType = A, Ke.typeOf = _;
  }()), Ke;
}
var E1;
function xL() {
  return E1 || (E1 = 1, process.env.NODE_ENV === "production" ? oc.exports = mL() : oc.exports = bL()), oc.exports;
}
var Kg = xL(), Dh, T1;
function gT() {
  if (T1) return Dh;
  T1 = 1;
  var e = zn(), t = Un(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return Dh = n, Dh;
}
var Lh, C1;
function wL() {
  if (C1) return Lh;
  C1 = 1;
  var e = gT();
  function t(r) {
    return e(r) && r != +r;
  }
  return Lh = t, Lh;
}
var _L = wL();
const vo = /* @__PURE__ */ Je(_L);
var OL = gT();
const SL = /* @__PURE__ */ Je(OL);
var Ut = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Wi = function(t) {
  return rs(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return SL(t) && !vo(t);
}, Pt = function(t) {
  return oe(t) || rs(t);
}, AL = 0, aa = function(t) {
  var r = ++AL;
  return "".concat(t || "").concat(r);
}, Ht = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !rs(t))
    return n;
  var a;
  if (Wi(t)) {
    var u = t.indexOf("%");
    a = r * parseFloat(t.slice(0, u)) / 100;
  } else
    a = +t;
  return vo(a) && (a = n), i && a > r && (a = r), a;
}, fi = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, PL = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, St = function(t, r) {
  return oe(t) && oe(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Ec(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : pr(n, t)) === r;
  });
}
function ja(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Vg(e) {
  "@babel/helpers - typeof";
  return Vg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vg(e);
}
var EL = ["viewBox", "children"], TL = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], M1 = ["points", "pathLength"], qh = {
  svg: EL,
  polygon: M1,
  polyline: M1
}, Rm = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Tc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Vr(t) && (n = t.props), !po(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Rm.includes(a) && (i[a] = r || function(u) {
      return n[a](n, u);
    });
  }), i;
}, CL = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Ji = function(t, r, n) {
  if (!po(t) || Vg(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var u = t[a];
    Rm.includes(a) && typeof u == "function" && (i || (i = {}), i[a] = CL(u, r, n));
  }), i;
}, ML = ["children"], IL = ["children"];
function I1(e, t) {
  if (e == null) return {};
  var r = RL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RL(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Yg(e) {
  "@babel/helpers - typeof";
  return Yg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yg(e);
}
var R1 = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
}, kn = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, $1 = null, Bh = null, $m = function e(t) {
  if (t === $1 && Array.isArray(Bh))
    return Bh;
  var r = [];
  return Vi.forEach(t, function(n) {
    Te(n) || (Kg.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Bh = r, $1 = t, r;
};
function vr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return kn(i);
  }) : n = [kn(t)], $m(e).forEach(function(i) {
    var a = pr(i, "type.displayName") || pr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function fr(e, t) {
  var r = vr(e, t);
  return r && r[0];
}
var k1 = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, $L = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], kL = function(t) {
  return t && t.type && rs(t.type) && $L.indexOf(t.type) >= 0;
}, yT = function(t) {
  return t && Yg(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, jL = function(t, r, n, i) {
  var a, u = (a = qh == null ? void 0 : qh[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && u.includes(r) || TL.includes(r)) || n && Rm.includes(r);
}, xe = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Vr(t) && (i = t.props), !po(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(u) {
    var s;
    jL((s = i) === null || s === void 0 ? void 0 : s[u], u, r, n) && (a[u] = i[u]);
  }), a;
}, Xg = function e(t, r) {
  if (t === r)
    return !0;
  var n = Vi.count(t);
  if (n !== Vi.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return j1(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], u = r[i];
    if (Array.isArray(a) || Array.isArray(u)) {
      if (!e(a, u))
        return !1;
    } else if (!j1(a, u))
      return !1;
  }
  return !0;
}, j1 = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = I1(n, ML), u = r.props || {}, s = u.children, l = I1(u, IL);
    return i && s ? ja(a, l) && Xg(i, s) : !i && !s ? ja(a, l) : !1;
  }
  return !1;
}, N1 = function(t, r) {
  var n = [], i = {};
  return $m(t).forEach(function(a, u) {
    if (kL(a))
      n.push(a);
    else if (a) {
      var s = kn(a.type), l = r[s] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[s])) {
        var h = f(a, s, u);
        n.push(h), i[s] = !0;
      }
    }
  }), n;
}, NL = function(t) {
  var r = t && t.type;
  return r && R1[r] ? R1[r] : null;
}, DL = function(t, r) {
  return $m(r).indexOf(t);
}, LL = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Zg() {
  return Zg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zg.apply(this, arguments);
}
function qL(e, t) {
  if (e == null) return {};
  var r = BL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BL(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Jg(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, u = e.style, s = e.title, l = e.desc, f = qL(e, LL), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Ie("recharts-surface", a);
  return /* @__PURE__ */ $.createElement("svg", Zg({}, xe(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: u,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ $.createElement("title", null, s), /* @__PURE__ */ $.createElement("desc", null, l), t);
}
var FL = ["children", "className"];
function Qg() {
  return Qg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qg.apply(this, arguments);
}
function WL(e, t) {
  if (e == null) return {};
  var r = zL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zL(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Le = /* @__PURE__ */ $.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = WL(e, FL), a = Ie("recharts-layer", n);
  return /* @__PURE__ */ $.createElement("g", Qg({
    className: a
  }, xe(i, !0), {
    ref: t
  }), r);
}), UL = process.env.NODE_ENV !== "production", Yr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (UL && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[u++];
      }));
    }
}, Fh, D1;
function HL() {
  if (D1) return Fh;
  D1 = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var u = Array(a); ++i < a; )
      u[i] = t[i + r];
    return u;
  }
  return Fh = e, Fh;
}
var Wh, L1;
function GL() {
  if (L1) return Wh;
  L1 = 1;
  var e = HL();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return Wh = t, Wh;
}
var zh, q1;
function mT() {
  if (q1) return zh;
  q1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", u = "\\u200d", s = RegExp("[" + u + e + i + a + "]");
  function l(f) {
    return s.test(f);
  }
  return zh = l, zh;
}
var Uh, B1;
function KL() {
  if (B1) return Uh;
  B1 = 1;
  function e(t) {
    return t.split("");
  }
  return Uh = e, Uh;
}
var Hh, F1;
function VL() {
  if (F1) return Hh;
  F1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", u = "[" + e + "]", s = "[" + i + "]", l = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + s + "|" + l + ")", d = "[^" + e + "]", h = "(?:\\ud83c[\\udde6-\\uddff]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", x = f + "?", y = "[" + a + "]?", b = "(?:" + g + "(?:" + [d, h, v].join("|") + ")" + y + x + ")*", S = y + x + b, O = "(?:" + [d + s + "?", s, h, v, u].join("|") + ")", A = RegExp(l + "(?=" + l + ")|" + O + S, "g");
  function _(m) {
    return m.match(A) || [];
  }
  return Hh = _, Hh;
}
var Gh, W1;
function YL() {
  if (W1) return Gh;
  W1 = 1;
  var e = KL(), t = mT(), r = VL();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return Gh = n, Gh;
}
var Kh, z1;
function XL() {
  if (z1) return Kh;
  z1 = 1;
  var e = GL(), t = mT(), r = YL(), n = hT();
  function i(a) {
    return function(u) {
      u = n(u);
      var s = t(u) ? r(u) : void 0, l = s ? s[0] : u.charAt(0), f = s ? e(s, 1).join("") : u.slice(1);
      return l[a]() + f;
    };
  }
  return Kh = i, Kh;
}
var Vh, U1;
function ZL() {
  if (U1) return Vh;
  U1 = 1;
  var e = XL(), t = e("toUpperCase");
  return Vh = t, Vh;
}
var JL = ZL();
const Rl = /* @__PURE__ */ Je(JL);
function nt(e) {
  return function() {
    return e;
  };
}
const bT = Math.cos, Cc = Math.sin, tn = Math.sqrt, Mc = Math.PI, $l = 2 * Mc, ey = Math.PI, ty = 2 * ey, qi = 1e-6, QL = ty - qi;
function xT(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function e6(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return xT;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class t6 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? xT : e6(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, u) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +u}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let u = this._x1, s = this._y1, l = n - t, f = i - r, d = u - t, h = s - r, v = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > qi) if (!(Math.abs(h * l - f * d) > qi) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - u, x = i - s, y = l * l + f * f, b = g * g + x * x, S = Math.sqrt(y), O = Math.sqrt(v), A = a * Math.tan((ey - Math.acos((y + v - b) / (2 * S * O))) / 2), _ = A / O, m = A / S;
      Math.abs(_ - 1) > qi && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * x)},${this._x1 = t + m * l},${this._y1 = r + m * f}`;
    }
  }
  arc(t, r, n, i, a, u) {
    if (t = +t, r = +r, n = +n, u = !!u, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), f = t + s, d = r + l, h = 1 ^ u, v = u ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > qi || Math.abs(this._y1 - d) > qi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % ty + ty), v > QL ? this._append`A${n},${n},0,1,${h},${t - s},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > qi && this._append`A${n},${n},0,${+(v >= ey)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function km(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new t6(t);
}
function jm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wT(e) {
  this._context = e;
}
wT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function kl(e) {
  return new wT(e);
}
function _T(e) {
  return e[0];
}
function OT(e) {
  return e[1];
}
function ST(e, t) {
  var r = nt(!0), n = null, i = kl, a = null, u = km(s);
  e = typeof e == "function" ? e : e === void 0 ? _T : nt(e), t = typeof t == "function" ? t : t === void 0 ? OT : nt(t);
  function s(l) {
    var f, d = (l = jm(l)).length, h, v = !1, g;
    for (n == null && (a = i(g = u())), f = 0; f <= d; ++f)
      !(f < d && r(h = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(h, f, l), +t(h, f, l));
    if (g) return a = null, g + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : nt(+l), s) : e;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : nt(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : nt(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), s) : n;
  }, s;
}
function uc(e, t, r) {
  var n = null, i = nt(!0), a = null, u = kl, s = null, l = km(f);
  e = typeof e == "function" ? e : e === void 0 ? _T : nt(+e), t = typeof t == "function" ? t : nt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? OT : nt(+r);
  function f(h) {
    var v, g, x, y = (h = jm(h)).length, b, S = !1, O, A = new Array(y), _ = new Array(y);
    for (a == null && (s = u(O = l())), v = 0; v <= y; ++v) {
      if (!(v < y && i(b = h[v], v, h)) === S)
        if (S = !S)
          g = v, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), x = v - 1; x >= g; --x)
            s.point(A[x], _[x]);
          s.lineEnd(), s.areaEnd();
        }
      S && (A[v] = +e(b, v, h), _[v] = +t(b, v, h), s.point(n ? +n(b, v, h) : A[v], r ? +r(b, v, h) : _[v]));
    }
    if (O) return s = null, O + "" || null;
  }
  function d() {
    return ST().defined(i).curve(u).context(a);
  }
  return f.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : nt(+h), n = null, f) : e;
  }, f.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : nt(+h), f) : e;
  }, f.x1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : nt(+h), f) : n;
  }, f.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : nt(+h), r = null, f) : t;
  }, f.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : nt(+h), f) : t;
  }, f.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : nt(+h), f) : r;
  }, f.lineX0 = f.lineY0 = function() {
    return d().x(e).y(t);
  }, f.lineY1 = function() {
    return d().x(e).y(r);
  }, f.lineX1 = function() {
    return d().x(n).y(t);
  }, f.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : nt(!!h), f) : i;
  }, f.curve = function(h) {
    return arguments.length ? (u = h, a != null && (s = u(a)), f) : u;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = u(a = h), f) : a;
  }, f;
}
class AT {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function r6(e) {
  return new AT(e, !0);
}
function n6(e) {
  return new AT(e, !1);
}
const Nm = {
  draw(e, t) {
    const r = tn(t / Mc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, $l);
  }
}, i6 = {
  draw(e, t) {
    const r = tn(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, PT = tn(1 / 3), a6 = PT * 2, o6 = {
  draw(e, t) {
    const r = tn(t / a6), n = r * PT;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, u6 = {
  draw(e, t) {
    const r = tn(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, s6 = 0.8908130915292852, ET = Cc(Mc / 10) / Cc(7 * Mc / 10), c6 = Cc($l / 10) * ET, l6 = -bT($l / 10) * ET, f6 = {
  draw(e, t) {
    const r = tn(t * s6), n = c6 * r, i = l6 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const u = $l * a / 5, s = bT(u), l = Cc(u);
      e.lineTo(l * r, -s * r), e.lineTo(s * n - l * i, l * n + s * i);
    }
    e.closePath();
  }
}, Yh = tn(3), d6 = {
  draw(e, t) {
    const r = -tn(t / (Yh * 3));
    e.moveTo(0, r * 2), e.lineTo(-Yh * r, -r), e.lineTo(Yh * r, -r), e.closePath();
  }
}, Ar = -0.5, Pr = tn(3) / 2, ry = 1 / tn(12), h6 = (ry / 2 + 1) * 3, p6 = {
  draw(e, t) {
    const r = tn(t / h6), n = r / 2, i = r * ry, a = n, u = r * ry + r, s = -a, l = u;
    e.moveTo(n, i), e.lineTo(a, u), e.lineTo(s, l), e.lineTo(Ar * n - Pr * i, Pr * n + Ar * i), e.lineTo(Ar * a - Pr * u, Pr * a + Ar * u), e.lineTo(Ar * s - Pr * l, Pr * s + Ar * l), e.lineTo(Ar * n + Pr * i, Ar * i - Pr * n), e.lineTo(Ar * a + Pr * u, Ar * u - Pr * a), e.lineTo(Ar * s + Pr * l, Ar * l - Pr * s), e.closePath();
  }
};
function v6(e, t) {
  let r = null, n = km(i);
  e = typeof e == "function" ? e : nt(e || Nm), t = typeof t == "function" ? t : nt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : nt(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : nt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Ic() {
}
function Rc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function TT(e) {
  this._context = e;
}
TT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Rc(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Rc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function g6(e) {
  return new TT(e);
}
function CT(e) {
  this._context = e;
}
CT.prototype = {
  areaStart: Ic,
  areaEnd: Ic,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Rc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function y6(e) {
  return new CT(e);
}
function MT(e) {
  this._context = e;
}
MT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Rc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function m6(e) {
  return new MT(e);
}
function IT(e) {
  this._context = e;
}
IT.prototype = {
  areaStart: Ic,
  areaEnd: Ic,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function b6(e) {
  return new IT(e);
}
function H1(e) {
  return e < 0 ? -1 : 1;
}
function G1(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), u = (r - e._y1) / (i || n < 0 && -0), s = (a * i + u * n) / (n + i);
  return (H1(a) + H1(u)) * Math.min(Math.abs(a), Math.abs(u), 0.5 * Math.abs(s)) || 0;
}
function K1(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Xh(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, u = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, u - s * r, a, u);
}
function $c(e) {
  this._context = e;
}
$c.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Xh(this, this._t0, K1(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Xh(this, K1(this, r = G1(this, e, t)), r);
          break;
        default:
          Xh(this, this._t0, r = G1(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function RT(e) {
  this._context = new $T(e);
}
(RT.prototype = Object.create($c.prototype)).point = function(e, t) {
  $c.prototype.point.call(this, t, e);
};
function $T(e) {
  this._context = e;
}
$T.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function x6(e) {
  return new $c(e);
}
function w6(e) {
  return new RT(e);
}
function kT(e) {
  this._context = e;
}
kT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = V1(e), i = V1(t), a = 0, u = 1; u < r; ++a, ++u)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[u], t[u]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function V1(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), u = new Array(r);
  for (i[0] = 0, a[0] = 2, u[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, u[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, u[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, u[t] -= n * u[t - 1];
  for (i[r - 1] = u[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (u[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function _6(e) {
  return new kT(e);
}
function jl(e, t) {
  this._context = e, this._t = t;
}
jl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function O6(e) {
  return new jl(e, 0.5);
}
function S6(e) {
  return new jl(e, 0);
}
function A6(e) {
  return new jl(e, 1);
}
function qa(e, t) {
  if ((u = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], u, s = a.length; r < u; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function ny(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function P6(e, t) {
  return e[t];
}
function E6(e) {
  const t = [];
  return t.key = e, t;
}
function T6() {
  var e = nt([]), t = ny, r = qa, n = P6;
  function i(a) {
    var u = Array.from(e.apply(this, arguments), E6), s, l = u.length, f = -1, d;
    for (const h of a)
      for (s = 0, ++f; s < l; ++s)
        (u[s][f] = [0, +n(h, u[s].key, f, a)]).data = h;
    for (s = 0, d = jm(t(u)); s < l; ++s)
      u[d[s]].index = s;
    return r(u, d), u;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : nt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : nt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? ny : typeof a == "function" ? a : nt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? qa, i) : r;
  }, i;
}
function C6(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, u; i < a; ++i) {
      for (u = r = 0; r < n; ++r) u += e[r][i][1] || 0;
      if (u) for (r = 0; r < n; ++r) e[r][i][1] /= u;
    }
    qa(e, t);
  }
}
function M6(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var u = 0, s = 0; u < i; ++u) s += e[u][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    qa(e, t);
  }
}
function I6(e, t) {
  if (!(!((u = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, u; n < a; ++n) {
      for (var s = 0, l = 0, f = 0; s < u; ++s) {
        for (var d = e[t[s]], h = d[n][1] || 0, v = d[n - 1][1] || 0, g = (h - v) / 2, x = 0; x < s; ++x) {
          var y = e[t[x]], b = y[n][1] || 0, S = y[n - 1][1] || 0;
          g += b - S;
        }
        l += h, f += g * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, qa(e, t);
  }
}
function gu(e) {
  "@babel/helpers - typeof";
  return gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gu(e);
}
var R6 = ["type", "size", "sizeType"];
function iy() {
  return iy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, iy.apply(this, arguments);
}
function Y1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function X1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Y1(Object(r), !0).forEach(function(n) {
      $6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $6(e, t, r) {
  return t = k6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k6(e) {
  var t = j6(e, "string");
  return gu(t) == "symbol" ? t : String(t);
}
function j6(e, t) {
  if (gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N6(e, t) {
  if (e == null) return {};
  var r = D6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function D6(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var jT = {
  symbolCircle: Nm,
  symbolCross: i6,
  symbolDiamond: o6,
  symbolSquare: u6,
  symbolStar: f6,
  symbolTriangle: d6,
  symbolWye: p6
}, L6 = Math.PI / 180, q6 = function(t) {
  var r = "symbol".concat(Rl(t));
  return jT[r] || Nm;
}, B6 = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * L6;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, F6 = function(t, r) {
  jT["symbol".concat(Rl(t))] = r;
}, Dm = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, u = t.sizeType, s = u === void 0 ? "area" : u, l = N6(t, R6), f = X1(X1({}, l), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var b = q6(n), S = v6().type(b).size(B6(a, s, n));
    return S();
  }, h = f.className, v = f.cx, g = f.cy, x = xe(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ $.createElement("path", iy({}, x, {
    className: Ie("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Dm.registerSymbol = F6;
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ba(e);
}
function ay() {
  return ay = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ay.apply(this, arguments);
}
function Z1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z1(Object(r), !0).forEach(function(n) {
      yu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, DT(n.key), n);
  }
}
function H6(e, t, r) {
  return t && U6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function G6(e, t, r) {
  return t = kc(t), K6(e, NT() ? Reflect.construct(t, r || [], kc(e).constructor) : t.apply(e, r));
}
function K6(e, t) {
  if (t && (Ba(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return V6(e);
}
function V6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NT() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (NT = function() {
    return !!e;
  })();
}
function kc(e) {
  return kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kc(e);
}
function Y6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && oy(e, t);
}
function oy(e, t) {
  return oy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, oy(e, t);
}
function yu(e, t, r) {
  return t = DT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DT(e) {
  var t = X6(e, "string");
  return Ba(t) == "symbol" ? t : String(t);
}
function X6(e, t) {
  if (Ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Er = 32, Lm = /* @__PURE__ */ function(e) {
  Y6(t, e);
  function t() {
    return z6(this, t), G6(this, t, arguments);
  }
  return H6(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = Er / 2, u = Er / 6, s = Er / 3, l = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ $.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Er,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ $.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Er, "M").concat(2 * s, ",").concat(a, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ $.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(Er / 8, "h").concat(Er, "v").concat(Er * 3 / 4, "h").concat(-Er, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ $.isValidElement(n.legendIcon)) {
          var f = W6({}, n);
          return delete f.legendIcon, /* @__PURE__ */ $.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ $.createElement(Dm, {
          fill: l,
          cx: a,
          cy: a,
          size: Er,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, u = i.iconSize, s = i.layout, l = i.formatter, f = i.inactiveColor, d = {
        x: 0,
        y: 0,
        width: Er,
        height: Er
      }, h = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, x) {
        var y = g.formatter || l, b = Ie(yu(yu({
          "recharts-legend-item": !0
        }, "legend-item-".concat(x), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var S = Pe(g.value) ? null : g.value;
        Yr(
          !Pe(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = g.inactive ? f : g.color;
        return /* @__PURE__ */ $.createElement("li", ay({
          className: b,
          style: h,
          key: "legend-item-".concat(x)
        }, Ji(n.props, g, x)), /* @__PURE__ */ $.createElement(Jg, {
          width: u,
          height: u,
          viewBox: d,
          style: v
        }, n.renderIcon(g)), /* @__PURE__ */ $.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, y ? y(S, g, x) : S));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, u = n.align;
      if (!i || !i.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? u : "left"
      };
      return /* @__PURE__ */ $.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]), t;
}(Dr);
yu(Lm, "displayName", "Legend");
yu(Lm, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Zh, J1;
function Z6() {
  if (J1) return Zh;
  J1 = 1;
  var e = Cl();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Zh = t, Zh;
}
var Jh, Q1;
function J6() {
  if (Q1) return Jh;
  Q1 = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Jh = e, Jh;
}
var Qh, e_;
function Q6() {
  if (e_) return Qh;
  e_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Qh = e, Qh;
}
var ep, t_;
function eq() {
  if (t_) return ep;
  t_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ep = e, ep;
}
var tp, r_;
function tq() {
  if (r_) return tp;
  r_ = 1;
  var e = Cl(), t = Tm(), r = Cm(), n = 200;
  function i(a, u) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < n - 1)
        return l.push([a, u]), this.size = ++s.size, this;
      s = this.__data__ = new r(l);
    }
    return s.set(a, u), this.size = s.size, this;
  }
  return tp = i, tp;
}
var rp, n_;
function LT() {
  if (n_) return rp;
  n_ = 1;
  var e = Cl(), t = Z6(), r = J6(), n = Q6(), i = eq(), a = tq();
  function u(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return u.prototype.clear = t, u.prototype.delete = r, u.prototype.get = n, u.prototype.has = i, u.prototype.set = a, rp = u, rp;
}
var np, i_;
function rq() {
  if (i_) return np;
  i_ = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return np = t, np;
}
var ip, a_;
function nq() {
  if (a_) return ip;
  a_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ip = e, ip;
}
var ap, o_;
function qT() {
  if (o_) return ap;
  o_ = 1;
  var e = Cm(), t = rq(), r = nq();
  function n(i) {
    var a = -1, u = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < u; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, ap = n, ap;
}
var op, u_;
function BT() {
  if (u_) return op;
  u_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return op = e, op;
}
var up, s_;
function FT() {
  if (s_) return up;
  s_ = 1;
  function e(t, r) {
    return t.has(r);
  }
  return up = e, up;
}
var sp, c_;
function WT() {
  if (c_) return sp;
  c_ = 1;
  var e = qT(), t = BT(), r = FT(), n = 1, i = 2;
  function a(u, s, l, f, d, h) {
    var v = l & n, g = u.length, x = s.length;
    if (g != x && !(v && x > g))
      return !1;
    var y = h.get(u), b = h.get(s);
    if (y && b)
      return y == s && b == u;
    var S = -1, O = !0, A = l & i ? new e() : void 0;
    for (h.set(u, s), h.set(s, u); ++S < g; ) {
      var _ = u[S], m = s[S];
      if (f)
        var E = v ? f(m, _, S, s, u, h) : f(_, m, S, u, s, h);
      if (E !== void 0) {
        if (E)
          continue;
        O = !1;
        break;
      }
      if (A) {
        if (!t(s, function(T, I) {
          if (!r(A, I) && (_ === T || d(_, T, l, f, h)))
            return A.push(I);
        })) {
          O = !1;
          break;
        }
      } else if (!(_ === m || d(_, m, l, f, h))) {
        O = !1;
        break;
      }
    }
    return h.delete(u), h.delete(s), O;
  }
  return sp = a, sp;
}
var cp, l_;
function iq() {
  if (l_) return cp;
  l_ = 1;
  var e = vn(), t = e.Uint8Array;
  return cp = t, cp;
}
var lp, f_;
function aq() {
  if (f_) return lp;
  f_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return lp = e, lp;
}
var fp, d_;
function qm() {
  if (d_) return fp;
  d_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return fp = e, fp;
}
var dp, h_;
function oq() {
  if (h_) return dp;
  h_ = 1;
  var e = ts(), t = iq(), r = Em(), n = WT(), i = aq(), a = qm(), u = 1, s = 2, l = "[object Boolean]", f = "[object Date]", d = "[object Error]", h = "[object Map]", v = "[object Number]", g = "[object RegExp]", x = "[object Set]", y = "[object String]", b = "[object Symbol]", S = "[object ArrayBuffer]", O = "[object DataView]", A = e ? e.prototype : void 0, _ = A ? A.valueOf : void 0;
  function m(E, T, I, B, L, N, j) {
    switch (I) {
      case O:
        if (E.byteLength != T.byteLength || E.byteOffset != T.byteOffset)
          return !1;
        E = E.buffer, T = T.buffer;
      case S:
        return !(E.byteLength != T.byteLength || !N(new t(E), new t(T)));
      case l:
      case f:
      case v:
        return r(+E, +T);
      case d:
        return E.name == T.name && E.message == T.message;
      case g:
      case y:
        return E == T + "";
      case h:
        var q = i;
      case x:
        var F = B & u;
        if (q || (q = a), E.size != T.size && !F)
          return !1;
        var V = j.get(E);
        if (V)
          return V == T;
        B |= s, j.set(E, T);
        var U = n(q(E), q(T), B, L, N, j);
        return j.delete(E), U;
      case b:
        if (_)
          return _.call(E) == _.call(T);
    }
    return !1;
  }
  return dp = m, dp;
}
var hp, p_;
function zT() {
  if (p_) return hp;
  p_ = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return hp = e, hp;
}
var pp, v_;
function uq() {
  if (v_) return pp;
  v_ = 1;
  var e = zT(), t = tr();
  function r(n, i, a) {
    var u = i(n);
    return t(n) ? u : e(u, a(n));
  }
  return pp = r, pp;
}
var vp, g_;
function sq() {
  if (g_) return vp;
  g_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, u = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (u[a++] = s);
    }
    return u;
  }
  return vp = e, vp;
}
var gp, y_;
function cq() {
  if (y_) return gp;
  y_ = 1;
  function e() {
    return [];
  }
  return gp = e, gp;
}
var yp, m_;
function lq() {
  if (m_) return yp;
  m_ = 1;
  var e = sq(), t = cq(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(u) {
    return u == null ? [] : (u = Object(u), e(i(u), function(s) {
      return n.call(u, s);
    }));
  } : t;
  return yp = a, yp;
}
var mp, b_;
function fq() {
  if (b_) return mp;
  b_ = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return mp = e, mp;
}
var bp, x_;
function dq() {
  if (x_) return bp;
  x_ = 1;
  var e = zn(), t = Un(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return bp = n, bp;
}
var xp, w_;
function Bm() {
  if (w_) return xp;
  w_ = 1;
  var e = dq(), t = Un(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(u) {
    return t(u) && n.call(u, "callee") && !i.call(u, "callee");
  };
  return xp = a, xp;
}
var ru = { exports: {} }, wp, __;
function hq() {
  if (__) return wp;
  __ = 1;
  function e() {
    return !1;
  }
  return wp = e, wp;
}
ru.exports;
var O_;
function UT() {
  return O_ || (O_ = 1, function(e, t) {
    var r = vn(), n = hq(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, u = a && a.exports === i, s = u ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || n;
    e.exports = f;
  }(ru, ru.exports)), ru.exports;
}
var _p, S_;
function Fm() {
  if (S_) return _p;
  S_ = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return _p = r, _p;
}
var Op, A_;
function Wm() {
  if (A_) return Op;
  A_ = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Op = t, Op;
}
var Sp, P_;
function pq() {
  if (P_) return Sp;
  P_ = 1;
  var e = zn(), t = Wm(), r = Un(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", u = "[object Date]", s = "[object Error]", l = "[object Function]", f = "[object Map]", d = "[object Number]", h = "[object Object]", v = "[object RegExp]", g = "[object Set]", x = "[object String]", y = "[object WeakMap]", b = "[object ArrayBuffer]", S = "[object DataView]", O = "[object Float32Array]", A = "[object Float64Array]", _ = "[object Int8Array]", m = "[object Int16Array]", E = "[object Int32Array]", T = "[object Uint8Array]", I = "[object Uint8ClampedArray]", B = "[object Uint16Array]", L = "[object Uint32Array]", N = {};
  N[O] = N[A] = N[_] = N[m] = N[E] = N[T] = N[I] = N[B] = N[L] = !0, N[n] = N[i] = N[b] = N[a] = N[S] = N[u] = N[s] = N[l] = N[f] = N[d] = N[h] = N[v] = N[g] = N[x] = N[y] = !1;
  function j(q) {
    return r(q) && t(q.length) && !!N[e(q)];
  }
  return Sp = j, Sp;
}
var Ap, E_;
function HT() {
  if (E_) return Ap;
  E_ = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Ap = e, Ap;
}
var nu = { exports: {} };
nu.exports;
var T_;
function vq() {
  return T_ || (T_ = 1, function(e, t) {
    var r = lT(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, u = a && r.process, s = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || u && u.binding && u.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(nu, nu.exports)), nu.exports;
}
var Pp, C_;
function GT() {
  if (C_) return Pp;
  C_ = 1;
  var e = pq(), t = HT(), r = vq(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Pp = i, Pp;
}
var Ep, M_;
function gq() {
  if (M_) return Ep;
  M_ = 1;
  var e = fq(), t = Bm(), r = tr(), n = UT(), i = Fm(), a = GT(), u = Object.prototype, s = u.hasOwnProperty;
  function l(f, d) {
    var h = r(f), v = !h && t(f), g = !h && !v && n(f), x = !h && !v && !g && a(f), y = h || v || g || x, b = y ? e(f.length, String) : [], S = b.length;
    for (var O in f)
      (d || s.call(f, O)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      x && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
      i(O, S))) && b.push(O);
    return b;
  }
  return Ep = l, Ep;
}
var Tp, I_;
function yq() {
  if (I_) return Tp;
  I_ = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return Tp = t, Tp;
}
var Cp, R_;
function KT() {
  if (R_) return Cp;
  R_ = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Cp = e, Cp;
}
var Mp, $_;
function mq() {
  if ($_) return Mp;
  $_ = 1;
  var e = KT(), t = e(Object.keys, Object);
  return Mp = t, Mp;
}
var Ip, k_;
function bq() {
  if (k_) return Ip;
  k_ = 1;
  var e = yq(), t = mq(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var u = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && u.push(s);
    return u;
  }
  return Ip = i, Ip;
}
var Rp, j_;
function ns() {
  if (j_) return Rp;
  j_ = 1;
  var e = Pm(), t = Wm();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Rp = r, Rp;
}
var $p, N_;
function Nl() {
  if (N_) return $p;
  N_ = 1;
  var e = gq(), t = bq(), r = ns();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return $p = n, $p;
}
var kp, D_;
function xq() {
  if (D_) return kp;
  D_ = 1;
  var e = uq(), t = lq(), r = Nl();
  function n(i) {
    return e(i, r, t);
  }
  return kp = n, kp;
}
var jp, L_;
function wq() {
  if (L_) return jp;
  L_ = 1;
  var e = xq(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, u, s, l, f, d) {
    var h = s & t, v = e(a), g = v.length, x = e(u), y = x.length;
    if (g != y && !h)
      return !1;
    for (var b = g; b--; ) {
      var S = v[b];
      if (!(h ? S in u : n.call(u, S)))
        return !1;
    }
    var O = d.get(a), A = d.get(u);
    if (O && A)
      return O == u && A == a;
    var _ = !0;
    d.set(a, u), d.set(u, a);
    for (var m = h; ++b < g; ) {
      S = v[b];
      var E = a[S], T = u[S];
      if (l)
        var I = h ? l(T, E, S, u, a, d) : l(E, T, S, a, u, d);
      if (!(I === void 0 ? E === T || f(E, T, s, l, d) : I)) {
        _ = !1;
        break;
      }
      m || (m = S == "constructor");
    }
    if (_ && !m) {
      var B = a.constructor, L = u.constructor;
      B != L && "constructor" in a && "constructor" in u && !(typeof B == "function" && B instanceof B && typeof L == "function" && L instanceof L) && (_ = !1);
    }
    return d.delete(a), d.delete(u), _;
  }
  return jp = i, jp;
}
var Np, q_;
function _q() {
  if (q_) return Np;
  q_ = 1;
  var e = ia(), t = vn(), r = e(t, "DataView");
  return Np = r, Np;
}
var Dp, B_;
function Oq() {
  if (B_) return Dp;
  B_ = 1;
  var e = ia(), t = vn(), r = e(t, "Promise");
  return Dp = r, Dp;
}
var Lp, F_;
function VT() {
  if (F_) return Lp;
  F_ = 1;
  var e = ia(), t = vn(), r = e(t, "Set");
  return Lp = r, Lp;
}
var qp, W_;
function Sq() {
  if (W_) return qp;
  W_ = 1;
  var e = ia(), t = vn(), r = e(t, "WeakMap");
  return qp = r, qp;
}
var Bp, z_;
function Aq() {
  if (z_) return Bp;
  z_ = 1;
  var e = _q(), t = Tm(), r = Oq(), n = VT(), i = Sq(), a = zn(), u = fT(), s = "[object Map]", l = "[object Object]", f = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", v = "[object DataView]", g = u(e), x = u(t), y = u(r), b = u(n), S = u(i), O = a;
  return (e && O(new e(new ArrayBuffer(1))) != v || t && O(new t()) != s || r && O(r.resolve()) != f || n && O(new n()) != d || i && O(new i()) != h) && (O = function(A) {
    var _ = a(A), m = _ == l ? A.constructor : void 0, E = m ? u(m) : "";
    if (E)
      switch (E) {
        case g:
          return v;
        case x:
          return s;
        case y:
          return f;
        case b:
          return d;
        case S:
          return h;
      }
    return _;
  }), Bp = O, Bp;
}
var Fp, U_;
function Pq() {
  if (U_) return Fp;
  U_ = 1;
  var e = LT(), t = WT(), r = oq(), n = wq(), i = Aq(), a = tr(), u = UT(), s = GT(), l = 1, f = "[object Arguments]", d = "[object Array]", h = "[object Object]", v = Object.prototype, g = v.hasOwnProperty;
  function x(y, b, S, O, A, _) {
    var m = a(y), E = a(b), T = m ? d : i(y), I = E ? d : i(b);
    T = T == f ? h : T, I = I == f ? h : I;
    var B = T == h, L = I == h, N = T == I;
    if (N && u(y)) {
      if (!u(b))
        return !1;
      m = !0, B = !1;
    }
    if (N && !B)
      return _ || (_ = new e()), m || s(y) ? t(y, b, S, O, A, _) : r(y, b, T, S, O, A, _);
    if (!(S & l)) {
      var j = B && g.call(y, "__wrapped__"), q = L && g.call(b, "__wrapped__");
      if (j || q) {
        var F = j ? y.value() : y, V = q ? b.value() : b;
        return _ || (_ = new e()), A(F, V, S, O, _);
      }
    }
    return N ? (_ || (_ = new e()), n(y, b, S, O, A, _)) : !1;
  }
  return Fp = x, Fp;
}
var Wp, H_;
function zm() {
  if (H_) return Wp;
  H_ = 1;
  var e = Pq(), t = Un();
  function r(n, i, a, u, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, u, r, s);
  }
  return Wp = r, Wp;
}
var zp, G_;
function Eq() {
  if (G_) return zp;
  G_ = 1;
  var e = LT(), t = zm(), r = 1, n = 2;
  function i(a, u, s, l) {
    var f = s.length, d = f, h = !l;
    if (a == null)
      return !d;
    for (a = Object(a); f--; ) {
      var v = s[f];
      if (h && v[2] ? v[1] !== a[v[0]] : !(v[0] in a))
        return !1;
    }
    for (; ++f < d; ) {
      v = s[f];
      var g = v[0], x = a[g], y = v[1];
      if (h && v[2]) {
        if (x === void 0 && !(g in a))
          return !1;
      } else {
        var b = new e();
        if (l)
          var S = l(x, y, g, a, u, b);
        if (!(S === void 0 ? t(y, x, r | n, l, b) : S))
          return !1;
      }
    }
    return !0;
  }
  return zp = i, zp;
}
var Up, K_;
function YT() {
  if (K_) return Up;
  K_ = 1;
  var e = xi();
  function t(r) {
    return r === r && !e(r);
  }
  return Up = t, Up;
}
var Hp, V_;
function Tq() {
  if (V_) return Hp;
  V_ = 1;
  var e = YT(), t = Nl();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var u = i[a], s = n[u];
      i[a] = [u, s, e(s)];
    }
    return i;
  }
  return Hp = r, Hp;
}
var Gp, Y_;
function XT() {
  if (Y_) return Gp;
  Y_ = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Gp = e, Gp;
}
var Kp, X_;
function Cq() {
  if (X_) return Kp;
  X_ = 1;
  var e = Eq(), t = Tq(), r = XT();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(u) {
      return u === i || e(u, i, a);
    };
  }
  return Kp = n, Kp;
}
var Vp, Z_;
function Mq() {
  if (Z_) return Vp;
  Z_ = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Vp = e, Vp;
}
var Yp, J_;
function Iq() {
  if (J_) return Yp;
  J_ = 1;
  var e = pT(), t = Bm(), r = tr(), n = Fm(), i = Wm(), a = Il();
  function u(s, l, f) {
    l = e(l, s);
    for (var d = -1, h = l.length, v = !1; ++d < h; ) {
      var g = a(l[d]);
      if (!(v = s != null && f(s, g)))
        break;
      s = s[g];
    }
    return v || ++d != h ? v : (h = s == null ? 0 : s.length, !!h && i(h) && n(g, h) && (r(s) || t(s)));
  }
  return Yp = u, Yp;
}
var Xp, Q_;
function Rq() {
  if (Q_) return Xp;
  Q_ = 1;
  var e = Mq(), t = Iq();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return Xp = r, Xp;
}
var Zp, eO;
function $q() {
  if (eO) return Zp;
  eO = 1;
  var e = zm(), t = vT(), r = Rq(), n = Am(), i = YT(), a = XT(), u = Il(), s = 1, l = 2;
  function f(d, h) {
    return n(d) && i(h) ? a(u(d), h) : function(v) {
      var g = t(v, d);
      return g === void 0 && g === h ? r(v, d) : e(h, g, s | l);
    };
  }
  return Zp = f, Zp;
}
var Jp, tO;
function go() {
  if (tO) return Jp;
  tO = 1;
  function e(t) {
    return t;
  }
  return Jp = e, Jp;
}
var Qp, rO;
function kq() {
  if (rO) return Qp;
  rO = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Qp = e, Qp;
}
var ev, nO;
function jq() {
  if (nO) return ev;
  nO = 1;
  var e = Im();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return ev = t, ev;
}
var tv, iO;
function Nq() {
  if (iO) return tv;
  iO = 1;
  var e = kq(), t = jq(), r = Am(), n = Il();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return tv = i, tv;
}
var rv, aO;
function gn() {
  if (aO) return rv;
  aO = 1;
  var e = Cq(), t = $q(), r = go(), n = tr(), i = Nq();
  function a(u) {
    return typeof u == "function" ? u : u == null ? r : typeof u == "object" ? n(u) ? t(u[0], u[1]) : e(u) : i(u);
  }
  return rv = a, rv;
}
var nv, oO;
function ZT() {
  if (oO) return nv;
  oO = 1;
  function e(t, r, n, i) {
    for (var a = t.length, u = n + (i ? 1 : -1); i ? u-- : ++u < a; )
      if (r(t[u], u, t))
        return u;
    return -1;
  }
  return nv = e, nv;
}
var iv, uO;
function Dq() {
  if (uO) return iv;
  uO = 1;
  function e(t) {
    return t !== t;
  }
  return iv = e, iv;
}
var av, sO;
function Lq() {
  if (sO) return av;
  sO = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return av = e, av;
}
var ov, cO;
function qq() {
  if (cO) return ov;
  cO = 1;
  var e = ZT(), t = Dq(), r = Lq();
  function n(i, a, u) {
    return a === a ? r(i, a, u) : e(i, t, u);
  }
  return ov = n, ov;
}
var uv, lO;
function Bq() {
  if (lO) return uv;
  lO = 1;
  var e = qq();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return uv = t, uv;
}
var sv, fO;
function Fq() {
  if (fO) return sv;
  fO = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return sv = e, sv;
}
var cv, dO;
function Wq() {
  if (dO) return cv;
  dO = 1;
  function e() {
  }
  return cv = e, cv;
}
var lv, hO;
function zq() {
  if (hO) return lv;
  hO = 1;
  var e = VT(), t = Wq(), r = qm(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return lv = i, lv;
}
var fv, pO;
function Uq() {
  if (pO) return fv;
  pO = 1;
  var e = qT(), t = Bq(), r = Fq(), n = FT(), i = zq(), a = qm(), u = 200;
  function s(l, f, d) {
    var h = -1, v = t, g = l.length, x = !0, y = [], b = y;
    if (d)
      x = !1, v = r;
    else if (g >= u) {
      var S = f ? null : i(l);
      if (S)
        return a(S);
      x = !1, v = n, b = new e();
    } else
      b = f ? [] : y;
    e:
      for (; ++h < g; ) {
        var O = l[h], A = f ? f(O) : O;
        if (O = d || O !== 0 ? O : 0, x && A === A) {
          for (var _ = b.length; _--; )
            if (b[_] === A)
              continue e;
          f && b.push(A), y.push(O);
        } else v(b, A, d) || (b !== y && b.push(A), y.push(O));
      }
    return y;
  }
  return fv = s, fv;
}
var dv, vO;
function Hq() {
  if (vO) return dv;
  vO = 1;
  var e = gn(), t = Uq();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return dv = r, dv;
}
var Gq = Hq();
const gO = /* @__PURE__ */ Je(Gq);
function JT(e, t, r) {
  return t === !0 ? gO(e, r) : Pe(t) ? gO(e, t) : e;
}
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
var Kq = ["ref"];
function yO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yO(Object(r), !0).forEach(function(n) {
      Dl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tC(n.key), n);
  }
}
function Yq(e, t, r) {
  return t && mO(e.prototype, t), r && mO(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xq(e, t, r) {
  return t = jc(t), Zq(e, QT() ? Reflect.construct(t, r || [], jc(e).constructor) : t.apply(e, r));
}
function Zq(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eC(e);
}
function QT() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QT = function() {
    return !!e;
  })();
}
function jc(e) {
  return jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jc(e);
}
function eC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uy(e, t);
}
function uy(e, t) {
  return uy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, uy(e, t);
}
function Dl(e, t, r) {
  return t = tC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tC(e) {
  var t = Qq(e, "string");
  return Fa(t) == "symbol" ? t : String(t);
}
function Qq(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eB(e, t) {
  if (e == null) return {};
  var r = tB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function rB(e) {
  return e.value;
}
function nB(e, t) {
  if (/* @__PURE__ */ $.isValidElement(e))
    return /* @__PURE__ */ $.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ $.createElement(e, t);
  t.ref;
  var r = eB(t, Kq);
  return /* @__PURE__ */ $.createElement(Lm, r);
}
var bO = 1, Wa = /* @__PURE__ */ function(e) {
  Jq(t, e);
  function t() {
    var r;
    Vq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = Xq(this, t, [].concat(i)), Dl(eC(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return Yq(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > bO || Math.abs(i.height - this.lastBoundingBox.height) > bO) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ji({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, u = i.align, s = i.verticalAlign, l = i.margin, f = i.chartWidth, d = i.chartHeight, h, v;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (u === "center" && a === "vertical") {
          var g = this.getBBoxSnapshot();
          h = {
            left: ((f || 0) - g.width) / 2
          };
        } else
          h = u === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var x = this.getBBoxSnapshot();
          v = {
            top: ((d || 0) - x.height) / 2
          };
        } else
          v = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return ji(ji({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, u = i.width, s = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = ji(ji({
        position: "absolute",
        width: u || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ $.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, nB(a, ji(ji({}, this.props), {}, {
        payload: JT(d, f, rB)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = n.props.layout;
      return a === "vertical" && oe(n.props.height) ? {
        height: n.props.height
      } : a === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]), t;
}(Dr);
Dl(Wa, "displayName", "Legend");
Dl(Wa, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var hv, xO;
function iB() {
  if (xO) return hv;
  xO = 1;
  var e = ts(), t = Bm(), r = tr(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return hv = i, hv;
}
var pv, wO;
function rC() {
  if (wO) return pv;
  wO = 1;
  var e = zT(), t = iB();
  function r(n, i, a, u, s) {
    var l = -1, f = n.length;
    for (a || (a = t), s || (s = []); ++l < f; ) {
      var d = n[l];
      i > 0 && a(d) ? i > 1 ? r(d, i - 1, a, u, s) : e(s, d) : u || (s[s.length] = d);
    }
    return s;
  }
  return pv = r, pv;
}
var vv, _O;
function aB() {
  if (_O) return vv;
  _O = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, u = Object(r), s = i(r), l = s.length; l--; ) {
        var f = s[t ? l : ++a];
        if (n(u[f], f, u) === !1)
          break;
      }
      return r;
    };
  }
  return vv = e, vv;
}
var gv, OO;
function oB() {
  if (OO) return gv;
  OO = 1;
  var e = aB(), t = e();
  return gv = t, gv;
}
var yv, SO;
function nC() {
  if (SO) return yv;
  SO = 1;
  var e = oB(), t = Nl();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return yv = r, yv;
}
var mv, AO;
function uB() {
  if (AO) return mv;
  AO = 1;
  var e = ns();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var u = i.length, s = n ? u : -1, l = Object(i); (n ? s-- : ++s < u) && a(l[s], s, l) !== !1; )
        ;
      return i;
    };
  }
  return mv = t, mv;
}
var bv, PO;
function Um() {
  if (PO) return bv;
  PO = 1;
  var e = nC(), t = uB(), r = t(e);
  return bv = r, bv;
}
var xv, EO;
function iC() {
  if (EO) return xv;
  EO = 1;
  var e = Um(), t = ns();
  function r(n, i) {
    var a = -1, u = t(n) ? Array(n.length) : [];
    return e(n, function(s, l, f) {
      u[++a] = i(s, l, f);
    }), u;
  }
  return xv = r, xv;
}
var wv, TO;
function sB() {
  if (TO) return wv;
  TO = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return wv = e, wv;
}
var _v, CO;
function cB() {
  if (CO) return _v;
  CO = 1;
  var e = ho();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, u = r === r, s = e(r), l = n !== void 0, f = n === null, d = n === n, h = e(n);
      if (!f && !h && !s && r > n || s && l && d && !f && !h || a && l && d || !i && d || !u)
        return 1;
      if (!a && !s && !h && r < n || h && i && u && !a && !s || f && i && u || !l && u || !d)
        return -1;
    }
    return 0;
  }
  return _v = t, _v;
}
var Ov, MO;
function lB() {
  if (MO) return Ov;
  MO = 1;
  var e = cB();
  function t(r, n, i) {
    for (var a = -1, u = r.criteria, s = n.criteria, l = u.length, f = i.length; ++a < l; ) {
      var d = e(u[a], s[a]);
      if (d) {
        if (a >= f)
          return d;
        var h = i[a];
        return d * (h == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Ov = t, Ov;
}
var Sv, IO;
function fB() {
  if (IO) return Sv;
  IO = 1;
  var e = Mm(), t = Im(), r = gn(), n = iC(), i = sB(), a = HT(), u = lB(), s = go(), l = tr();
  function f(d, h, v) {
    h.length ? h = e(h, function(y) {
      return l(y) ? function(b) {
        return t(b, y.length === 1 ? y[0] : y);
      } : y;
    }) : h = [s];
    var g = -1;
    h = e(h, a(r));
    var x = n(d, function(y, b, S) {
      var O = e(h, function(A) {
        return A(y);
      });
      return { criteria: O, index: ++g, value: y };
    });
    return i(x, function(y, b) {
      return u(y, b, v);
    });
  }
  return Sv = f, Sv;
}
var Av, RO;
function dB() {
  if (RO) return Av;
  RO = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Av = e, Av;
}
var Pv, $O;
function hB() {
  if ($O) return Pv;
  $O = 1;
  var e = dB(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var u = arguments, s = -1, l = t(u.length - i, 0), f = Array(l); ++s < l; )
        f[s] = u[i + s];
      s = -1;
      for (var d = Array(i + 1); ++s < i; )
        d[s] = u[s];
      return d[i] = a(f), e(n, this, d);
    };
  }
  return Pv = r, Pv;
}
var Ev, kO;
function pB() {
  if (kO) return Ev;
  kO = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Ev = e, Ev;
}
var Tv, jO;
function aC() {
  if (jO) return Tv;
  jO = 1;
  var e = ia(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Tv = t, Tv;
}
var Cv, NO;
function vB() {
  if (NO) return Cv;
  NO = 1;
  var e = pB(), t = aC(), r = go(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Cv = n, Cv;
}
var Mv, DO;
function gB() {
  if (DO) return Mv;
  DO = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, u = 0;
    return function() {
      var s = r(), l = t - (s - u);
      if (u = s, l > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Mv = n, Mv;
}
var Iv, LO;
function yB() {
  if (LO) return Iv;
  LO = 1;
  var e = vB(), t = gB(), r = t(e);
  return Iv = r, Iv;
}
var Rv, qO;
function mB() {
  if (qO) return Rv;
  qO = 1;
  var e = go(), t = hB(), r = yB();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Rv = n, Rv;
}
var $v, BO;
function Ll() {
  if (BO) return $v;
  BO = 1;
  var e = Em(), t = ns(), r = Fm(), n = xi();
  function i(a, u, s) {
    if (!n(s))
      return !1;
    var l = typeof u;
    return (l == "number" ? t(s) && r(u, s.length) : l == "string" && u in s) ? e(s[u], a) : !1;
  }
  return $v = i, $v;
}
var kv, FO;
function bB() {
  if (FO) return kv;
  FO = 1;
  var e = rC(), t = fB(), r = mB(), n = Ll(), i = r(function(a, u) {
    if (a == null)
      return [];
    var s = u.length;
    return s > 1 && n(a, u[0], u[1]) ? u = [] : s > 2 && n(u[0], u[1], u[2]) && (u = [u[0]]), t(a, e(u, 1), []);
  });
  return kv = i, kv;
}
var xB = bB();
const Hm = /* @__PURE__ */ Je(xB);
function mu(e) {
  "@babel/helpers - typeof";
  return mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mu(e);
}
function sy() {
  return sy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sy.apply(this, arguments);
}
function wB(e, t) {
  return AB(e) || SB(e, t) || OB(e, t) || _B();
}
function _B() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OB(e, t) {
  if (e) {
    if (typeof e == "string") return WO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return WO(e, t);
  }
}
function WO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function AB(e) {
  if (Array.isArray(e)) return e;
}
function zO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zO(Object(r), !0).forEach(function(n) {
      PB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PB(e, t, r) {
  return t = EB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EB(e) {
  var t = TB(e, "string");
  return mu(t) == "symbol" ? t : String(t);
}
function TB(e, t) {
  if (mu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CB(e) {
  return Array.isArray(e) && Pt(e[0]) && Pt(e[1]) ? e.join(" ~ ") : e;
}
var MB = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, u = t.itemStyle, s = u === void 0 ? {} : u, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, x = t.labelClassName, y = t.label, b = t.labelFormatter, S = t.accessibilityLayer, O = S === void 0 ? !1 : S, A = function() {
    if (d && d.length) {
      var j = {
        padding: 0,
        margin: 0
      }, q = (v ? Hm(d, v) : d).map(function(F, V) {
        if (F.type === "none")
          return null;
        var U = jv({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: F.color || "#000"
        }, s), J = F.formatter || h || CB, G = F.value, ue = F.name, H = G, X = ue;
        if (J && H != null && X != null) {
          var ae = J(G, ue, F, V, d);
          if (Array.isArray(ae)) {
            var ce = wB(ae, 2);
            H = ce[0], X = ce[1];
          } else
            H = ae;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ $.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(V),
            style: U
          }, Pt(X) ? /* @__PURE__ */ $.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Pt(X) ? /* @__PURE__ */ $.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ $.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, H), /* @__PURE__ */ $.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, F.unit || ""))
        );
      });
      return /* @__PURE__ */ $.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: j
      }, q);
    }
    return null;
  }, _ = jv({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = jv({
    margin: 0
  }, f), E = !Te(y), T = E ? y : "", I = Ie("recharts-default-tooltip", g), B = Ie("recharts-tooltip-label", x);
  E && b && d !== void 0 && d !== null && (T = b(y, d));
  var L = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ $.createElement("div", sy({
    className: I,
    style: _
  }, L), /* @__PURE__ */ $.createElement("p", {
    className: B,
    style: m
  }, /* @__PURE__ */ $.isValidElement(T) ? T : "".concat(T)), A());
};
function bu(e) {
  "@babel/helpers - typeof";
  return bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bu(e);
}
function sc(e, t, r) {
  return t = IB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IB(e) {
  var t = RB(e, "string");
  return bu(t) == "symbol" ? t : String(t);
}
function RB(e, t) {
  if (bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ko = "recharts-tooltip-wrapper", $B = {
  visibility: "hidden"
};
function kB(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Ie(Ko, sc(sc(sc(sc({}, "".concat(Ko, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(Ko, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(Ko, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(Ko, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function UO(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, u = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && oe(a[n]))
    return a[n];
  var d = r[n] - s - i, h = r[n] + i;
  if (t[n])
    return u[n] ? d : h;
  if (u[n]) {
    var v = d, g = l[n];
    return v < g ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var x = h + s, y = l[n] + f;
  return x > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function jB(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function NB(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, u = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, f, d, h;
  return u.height > 0 && u.width > 0 && r ? (d = UO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = UO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = jB({
    translateX: d,
    translateY: h,
    useTranslate3d: s
  })) : f = $B, {
    cssProperties: f,
    cssClasses: kB({
      translateX: d,
      translateY: h,
      coordinate: r
    })
  };
}
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
function HO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function GO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? HO(Object(r), !0).forEach(function(n) {
      fy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : HO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uC(n.key), n);
  }
}
function qB(e, t, r) {
  return t && LB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BB(e, t, r) {
  return t = Nc(t), FB(e, oC() ? Reflect.construct(t, r || [], Nc(e).constructor) : t.apply(e, r));
}
function FB(e, t) {
  if (t && (za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cy(e);
}
function oC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oC = function() {
    return !!e;
  })();
}
function Nc(e) {
  return Nc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nc(e);
}
function cy(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ly(e, t);
}
function ly(e, t) {
  return ly = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ly(e, t);
}
function fy(e, t, r) {
  return t = uC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uC(e) {
  var t = zB(e, "string");
  return za(t) == "symbol" ? t : String(t);
}
function zB(e, t) {
  if (za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KO = 1, UB = /* @__PURE__ */ function(e) {
  WB(t, e);
  function t() {
    var r;
    DB(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = BB(this, t, [].concat(i)), fy(cy(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), fy(cy(r), "handleKeyDown", function(u) {
      if (u.key === "Escape") {
        var s, l, f, d;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (f = (d = r.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && f !== void 0 ? f : 0
          }
        });
      }
    }), r;
  }
  return qB(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > KO || Math.abs(n.height - this.state.lastBoundingBox.height) > KO) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, x = i.position, y = i.reverseDirection, b = i.useTranslate3d, S = i.viewBox, O = i.wrapperStyle, A = NB({
        allowEscapeViewBox: u,
        coordinate: d,
        offsetTopLeft: g,
        position: x,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: S
      }), _ = A.cssClasses, m = A.cssProperties, E = GO(GO({
        transition: v && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && h ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, O);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ $.createElement("div", {
          tabIndex: -1,
          className: _,
          style: E,
          ref: function(I) {
            n.wrapperNode = I;
          }
        }, f)
      );
    }
  }]), t;
}(Dr), HB = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Xr = {
  isSsr: HB(),
  get: function(t) {
    return Xr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Xr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Xr[i] = t[i];
      });
    }
  }
};
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
function VO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function YO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? VO(Object(r), !0).forEach(function(n) {
      Gm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function KB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cC(n.key), n);
  }
}
function VB(e, t, r) {
  return t && KB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function YB(e, t, r) {
  return t = Dc(t), XB(e, sC() ? Reflect.construct(t, r || [], Dc(e).constructor) : t.apply(e, r));
}
function XB(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ZB(e);
}
function ZB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sC = function() {
    return !!e;
  })();
}
function Dc(e) {
  return Dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dc(e);
}
function JB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dy(e, t);
}
function dy(e, t) {
  return dy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dy(e, t);
}
function Gm(e, t, r) {
  return t = cC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cC(e) {
  var t = QB(e, "string");
  return Ua(t) == "symbol" ? t : String(t);
}
function QB(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eF(e) {
  return e.dataKey;
}
function tF(e, t) {
  return /* @__PURE__ */ $.isValidElement(e) ? /* @__PURE__ */ $.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ $.createElement(e, t) : /* @__PURE__ */ $.createElement(MB, t);
}
var un = /* @__PURE__ */ function(e) {
  JB(t, e);
  function t() {
    return GB(this, t), YB(this, t, arguments);
  }
  return VB(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, x = i.payload, y = i.payloadUniqBy, b = i.position, S = i.reverseDirection, O = i.useTranslate3d, A = i.viewBox, _ = i.wrapperStyle, m = x ?? [];
      h && m.length && (m = JT(x.filter(function(T) {
        return T.value != null && (T.hide !== !0 || n.props.includeHidden);
      }), y, eF));
      var E = m.length > 0;
      return /* @__PURE__ */ $.createElement(UB, {
        allowEscapeViewBox: u,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: g,
        position: b,
        reverseDirection: S,
        useTranslate3d: O,
        viewBox: A,
        wrapperStyle: _
      }, tF(f, YO(YO({}, this.props), {}, {
        payload: m
      })));
    }
  }]), t;
}(Dr);
Gm(un, "displayName", "Tooltip");
Gm(un, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Xr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Nv, XO;
function rF() {
  if (XO) return Nv;
  XO = 1;
  var e = vn(), t = function() {
    return e.Date.now();
  };
  return Nv = t, Nv;
}
var Dv, ZO;
function nF() {
  if (ZO) return Dv;
  ZO = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Dv = t, Dv;
}
var Lv, JO;
function iF() {
  if (JO) return Lv;
  JO = 1;
  var e = nF(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Lv = r, Lv;
}
var qv, QO;
function lC() {
  if (QO) return qv;
  QO = 1;
  var e = iF(), t = xi(), r = ho(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, u = /^0o[0-7]+$/i, s = parseInt;
  function l(f) {
    if (typeof f == "number")
      return f;
    if (r(f))
      return n;
    if (t(f)) {
      var d = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = t(d) ? d + "" : d;
    }
    if (typeof f != "string")
      return f === 0 ? f : +f;
    f = e(f);
    var h = a.test(f);
    return h || u.test(f) ? s(f.slice(2), h ? 2 : 8) : i.test(f) ? n : +f;
  }
  return qv = l, qv;
}
var Bv, eS;
function aF() {
  if (eS) return Bv;
  eS = 1;
  var e = xi(), t = rF(), r = lC(), n = "Expected a function", i = Math.max, a = Math.min;
  function u(s, l, f) {
    var d, h, v, g, x, y, b = 0, S = !1, O = !1, A = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    l = r(l) || 0, e(f) && (S = !!f.leading, O = "maxWait" in f, v = O ? i(r(f.maxWait) || 0, l) : v, A = "trailing" in f ? !!f.trailing : A);
    function _(q) {
      var F = d, V = h;
      return d = h = void 0, b = q, g = s.apply(V, F), g;
    }
    function m(q) {
      return b = q, x = setTimeout(I, l), S ? _(q) : g;
    }
    function E(q) {
      var F = q - y, V = q - b, U = l - F;
      return O ? a(U, v - V) : U;
    }
    function T(q) {
      var F = q - y, V = q - b;
      return y === void 0 || F >= l || F < 0 || O && V >= v;
    }
    function I() {
      var q = t();
      if (T(q))
        return B(q);
      x = setTimeout(I, E(q));
    }
    function B(q) {
      return x = void 0, A && d ? _(q) : (d = h = void 0, g);
    }
    function L() {
      x !== void 0 && clearTimeout(x), b = 0, d = y = h = x = void 0;
    }
    function N() {
      return x === void 0 ? g : B(t());
    }
    function j() {
      var q = t(), F = T(q);
      if (d = arguments, h = this, y = q, F) {
        if (x === void 0)
          return m(y);
        if (O)
          return clearTimeout(x), x = setTimeout(I, l), _(y);
      }
      return x === void 0 && (x = setTimeout(I, l)), g;
    }
    return j.cancel = L, j.flush = N, j;
  }
  return Bv = u, Bv;
}
var Fv, tS;
function oF() {
  if (tS) return Fv;
  tS = 1;
  var e = aF(), t = xi(), r = "Expected a function";
  function n(i, a, u) {
    var s = !0, l = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(u) && (s = "leading" in u ? !!u.leading : s, l = "trailing" in u ? !!u.trailing : l), e(i, a, {
      leading: s,
      maxWait: a,
      trailing: l
    });
  }
  return Fv = n, Fv;
}
var uF = oF();
const fC = /* @__PURE__ */ Je(uF);
function xu(e) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xu(e);
}
function rS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rS(Object(r), !0).forEach(function(n) {
      sF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sF(e, t, r) {
  return t = cF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cF(e) {
  var t = lF(e, "string");
  return xu(t) == "symbol" ? t : String(t);
}
function lF(e, t) {
  if (xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fF(e, t) {
  return vF(e) || pF(e, t) || hF(e, t) || dF();
}
function dF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hF(e, t) {
  if (e) {
    if (typeof e == "string") return nS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nS(e, t);
  }
}
function nS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function vF(e) {
  if (Array.isArray(e)) return e;
}
var gF = /* @__PURE__ */ dn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, u = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, x = e.debounce, y = x === void 0 ? 0 : x, b = e.id, S = e.className, O = e.onResize, A = e.style, _ = A === void 0 ? {} : A, m = Zr(null), E = Zr();
  E.current = O, KE(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var T = $r({
    containerWidth: i.width,
    containerHeight: i.height
  }), I = fF(T, 2), B = I[0], L = I[1], N = Ki(function(q, F) {
    L(function(V) {
      var U = Math.round(q), J = Math.round(F);
      return V.containerWidth === U && V.containerHeight === J ? V : {
        containerWidth: U,
        containerHeight: J
      };
    });
  }, []);
  kr(function() {
    var q = function(ue) {
      var H, X = ue[0].contentRect, ae = X.width, ce = X.height;
      N(ae, ce), (H = E.current) === null || H === void 0 || H.call(E, ae, ce);
    };
    y > 0 && (q = fC(q, y, {
      trailing: !0,
      leading: !1
    }));
    var F = new ResizeObserver(q), V = m.current.getBoundingClientRect(), U = V.width, J = V.height;
    return N(U, J), F.observe(m.current), function() {
      F.disconnect();
    };
  }, [N, y]);
  var j = lo(function() {
    var q = B.containerWidth, F = B.containerHeight;
    if (q < 0 || F < 0)
      return null;
    Yr(Wi(u) || Wi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, u, l), Yr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var V = Wi(u) ? q : u, U = Wi(l) ? F : l;
    r && r > 0 && (V ? U = V / r : U && (V = U * r), v && U > v && (U = v)), Yr(V > 0 || U > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, V, U, u, l, d, h, r);
    var J = !Array.isArray(g) && Kg.isElement(g) && kn(g.type).endsWith("Chart");
    return $.Children.map(g, function(G) {
      return Kg.isElement(G) ? /* @__PURE__ */ Ot(G, cc({
        width: V,
        height: U
      }, J ? {
        style: cc({
          height: "100%",
          width: "100%",
          maxHeight: U,
          maxWidth: V
        }, G.props.style)
      } : {})) : G;
    });
  }, [r, g, l, v, h, d, B, u]);
  return /* @__PURE__ */ $.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: Ie("recharts-responsive-container", S),
    style: cc(cc({}, _), {}, {
      width: u,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: m
  }, j);
}), Km = function(t) {
  return null;
};
Km.displayName = "Cell";
function wu(e) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wu(e);
}
function iS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iS(Object(r), !0).forEach(function(n) {
      yF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yF(e, t, r) {
  return t = mF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mF(e) {
  var t = bF(e, "string");
  return wu(t) == "symbol" ? t : String(t);
}
function bF(e, t) {
  if (wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sa = {
  widthCache: {},
  cacheCount: 0
}, xF = 2e3, wF = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, aS = "recharts_measurement_span";
function _F(e) {
  var t = hy({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var su = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Xr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = _F(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById(aS);
    a || (a = document.createElement("span"), a.setAttribute("id", aS), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var u = hy(hy({}, wF), n);
    Object.assign(a.style, u), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = {
      width: s.width,
      height: s.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > xF && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, OF = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function _u(e) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _u(e);
}
function Lc(e, t) {
  return EF(e) || PF(e, t) || AF(e, t) || SF();
}
function SF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AF(e, t) {
  if (e) {
    if (typeof e == "string") return oS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oS(e, t);
  }
}
function oS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function EF(e) {
  if (Array.isArray(e)) return e;
}
function TF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MF(n.key), n);
  }
}
function CF(e, t, r) {
  return t && uS(e.prototype, t), r && uS(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MF(e) {
  var t = IF(e, "string");
  return _u(t) == "symbol" ? t : String(t);
}
function IF(e, t) {
  if (_u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var sS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, cS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, RF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, $F = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, dC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, kF = Object.keys(dC), Ca = "NaN";
function jF(e, t) {
  return e * dC[t];
}
var lc = /* @__PURE__ */ function() {
  function e(t, r) {
    TF(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !RF.test(r) && (this.num = NaN, this.unit = ""), kF.includes(r) && (this.num = jF(t, r), this.unit = "px");
  }
  return CF(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = $F.exec(r)) !== null && n !== void 0 ? n : [], a = Lc(i, 3), u = a[1], s = a[2];
      return new e(parseFloat(u), s ?? "");
    }
  }]), e;
}();
function hC(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = sS.exec(t)) !== null && r !== void 0 ? r : [], i = Lc(n, 4), a = i[1], u = i[2], s = i[3], l = lc.parse(a ?? ""), f = lc.parse(s ?? ""), d = u === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(sS, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = cS.exec(t)) !== null && h !== void 0 ? h : [], g = Lc(v, 4), x = g[1], y = g[2], b = g[3], S = lc.parse(x ?? ""), O = lc.parse(b ?? ""), A = y === "+" ? S.add(O) : S.subtract(O);
    if (A.isNaN())
      return Ca;
    t = t.replace(cS, A.toString());
  }
  return t;
}
var lS = /\(([^()]*)\)/;
function NF(e) {
  for (var t = e; t.includes("("); ) {
    var r = lS.exec(t), n = Lc(r, 2), i = n[1];
    t = t.replace(lS, hC(i));
  }
  return t;
}
function DF(e) {
  var t = e.replace(/\s+/g, "");
  return t = NF(t), t = hC(t), t;
}
function LF(e) {
  try {
    return DF(e);
  } catch {
    return Ca;
  }
}
function Wv(e) {
  var t = LF(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var qF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], BF = ["dx", "dy", "angle", "className", "breakAll"];
function py() {
  return py = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, py.apply(this, arguments);
}
function fS(e, t) {
  if (e == null) return {};
  var r = FF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FF(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function dS(e, t) {
  return HF(e) || UF(e, t) || zF(e, t) || WF();
}
function WF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zF(e, t) {
  if (e) {
    if (typeof e == "string") return hS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hS(e, t);
  }
}
function hS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function HF(e) {
  if (Array.isArray(e)) return e;
}
var pC = /[ \f\n\r\t\v\u2028\u2029]+/, vC = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(pC));
    var u = a.map(function(l) {
      return {
        word: l,
        width: su(l, i).width
      };
    }), s = n ? 0 : su(" ", i).width;
    return {
      wordsWithComputedWidth: u,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, GF = function(t, r, n, i, a) {
  var u = t.maxLines, s = t.children, l = t.style, f = t.breakAll, d = oe(u), h = s, v = function() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return V.reduce(function(U, J) {
      var G = J.word, ue = J.width, H = U[U.length - 1];
      if (H && (i == null || a || H.width + ue + n < Number(i)))
        H.words.push(G), H.width += ue + n;
      else {
        var X = {
          words: [G],
          width: ue
        };
        U.push(X);
      }
      return U;
    }, []);
  }, g = v(r), x = function(V) {
    return V.reduce(function(U, J) {
      return U.width > J.width ? U : J;
    });
  };
  if (!d)
    return g;
  for (var y = "…", b = function(V) {
    var U = h.slice(0, V), J = vC({
      breakAll: f,
      style: l,
      children: U + y
    }).wordsWithComputedWidth, G = v(J), ue = G.length > u || x(G).width > Number(i);
    return [ue, G];
  }, S = 0, O = h.length - 1, A = 0, _; S <= O && A <= h.length - 1; ) {
    var m = Math.floor((S + O) / 2), E = m - 1, T = b(E), I = dS(T, 2), B = I[0], L = I[1], N = b(m), j = dS(N, 1), q = j[0];
    if (!B && !q && (S = m + 1), B && q && (O = m - 1), !B && q) {
      _ = L;
      break;
    }
    A++;
  }
  return _ || g;
}, pS = function(t) {
  var r = Te(t) ? [] : t.toString().split(pC);
  return [{
    words: r
  }];
}, KF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, u = t.breakAll, s = t.maxLines;
  if ((r || n) && !Xr.isSsr) {
    var l, f, d = vC({
      breakAll: u,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return pS(i);
    return GF({
      breakAll: u,
      children: i,
      maxLines: s,
      style: a
    }, l, f, r, n);
  }
  return pS(i);
}, vS = "#808080", vi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.lineHeight, s = u === void 0 ? "1em" : u, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, x = t.verticalAnchor, y = x === void 0 ? "end" : x, b = t.fill, S = b === void 0 ? vS : b, O = fS(t, qF), A = lo(function() {
    return KF({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, m = O.dy, E = O.angle, T = O.className, I = O.breakAll, B = fS(O, BF);
  if (!Pt(n) || !Pt(a))
    return null;
  var L = n + (oe(_) ? _ : 0), N = a + (oe(m) ? m : 0), j;
  switch (y) {
    case "start":
      j = Wv("calc(".concat(f, ")"));
      break;
    case "middle":
      j = Wv("calc(".concat((A.length - 1) / 2, " * -").concat(s, " + (").concat(f, " / 2))"));
      break;
    default:
      j = Wv("calc(".concat(A.length - 1, " * -").concat(s, ")"));
      break;
  }
  var q = [];
  if (h) {
    var F = A[0].width, V = O.width;
    q.push("scale(".concat((oe(V) ? V / F : 1) / F, ")"));
  }
  return E && q.push("rotate(".concat(E, ", ").concat(L, ", ").concat(N, ")")), q.length && (B.transform = q.join(" ")), /* @__PURE__ */ $.createElement("text", py({}, xe(B, !0), {
    x: L,
    y: N,
    className: Ie("recharts-text", T),
    textAnchor: g,
    fill: S.includes("url") ? vS : S
  }), A.map(function(U, J) {
    var G = U.words.join(I ? "" : " ");
    return /* @__PURE__ */ $.createElement("tspan", {
      x: L,
      dy: J === 0 ? j : s,
      key: G
    }, G);
  }));
};
function pi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function VF(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Vm(e) {
  let t, r, n;
  e.length !== 2 ? (t = pi, r = (s, l) => pi(e(s), l), n = (s, l) => e(s) - l) : (t = e === pi || e === VF ? e : YF, r = e, n = e);
  function i(s, l, f = 0, d = s.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(s[h], l) < 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function a(s, l, f = 0, d = s.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(s[h], l) <= 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function u(s, l, f = 0, d = s.length) {
    const h = i(s, l, f, d - 1);
    return h > f && n(s[h - 1], l) > -n(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: u, right: a };
}
function YF() {
  return 0;
}
function gC(e) {
  return e === null ? NaN : +e;
}
function* XF(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const ZF = Vm(pi), is = ZF.right;
Vm(gC).center;
class gS extends Map {
  constructor(t, r = eW) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(yS(this, t));
  }
  has(t) {
    return super.has(yS(this, t));
  }
  set(t, r) {
    return super.set(JF(this, t), r);
  }
  delete(t) {
    return super.delete(QF(this, t));
  }
}
function yS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function JF({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function QF({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function eW(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function tW(e = pi) {
  if (e === pi) return yC;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function yC(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const rW = Math.sqrt(50), nW = Math.sqrt(10), iW = Math.sqrt(2);
function qc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), u = a >= rW ? 10 : a >= nW ? 5 : a >= iW ? 2 : 1;
  let s, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / u, s = Math.round(e * f), l = Math.round(t * f), s / f < e && ++s, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * u, s = Math.round(e / f), l = Math.round(t / f), s * f < e && ++s, l * f > t && --l), l < s && 0.5 <= r && r < 2 ? qc(e, t, r * 2) : [s, l, f];
}
function vy(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, u] = n ? qc(t, e, r) : qc(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n)
    if (u < 0) for (let f = 0; f < s; ++f) l[f] = (a - f) / -u;
    else for (let f = 0; f < s; ++f) l[f] = (a - f) * u;
  else if (u < 0) for (let f = 0; f < s; ++f) l[f] = (i + f) / -u;
  else for (let f = 0; f < s; ++f) l[f] = (i + f) * u;
  return l;
}
function gy(e, t, r) {
  return t = +t, e = +e, r = +r, qc(e, t, r)[2];
}
function yy(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? gy(t, e, r) : gy(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function mS(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function bS(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function mC(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? yC : tW(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), x = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      mC(e, t, g, x, i);
    }
    const a = e[t];
    let u = r, s = n;
    for (Vo(e, r, t), i(e[n], a) > 0 && Vo(e, r, n); u < s; ) {
      for (Vo(e, u, s), ++u, --s; i(e[u], a) < 0; ) ++u;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? Vo(e, r, s) : (++s, Vo(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Vo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function aW(e, t, r) {
  if (e = Float64Array.from(XF(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return bS(e);
    if (t >= 1) return mS(e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = mS(mC(e, a).subarray(0, a + 1)), s = bS(e.subarray(a + 1));
    return u + (s - u) * (i - a);
  }
}
function oW(e, t, r = gC) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return u + (s - u) * (i - a);
  }
}
function uW(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Lr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Hn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const my = Symbol("implicit");
function Ym() {
  var e = new gS(), t = [], r = [], n = my;
  function i(a) {
    let u = e.get(a);
    if (u === void 0) {
      if (n !== my) return n;
      e.set(a, u = t.push(a) - 1);
    }
    return r[u % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new gS();
    for (const u of a)
      e.has(u) || e.set(u, t.push(u) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Ym(t, r).unknown(n);
  }, Lr.apply(i, arguments), i;
}
function Ou() {
  var e = Ym().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, u, s = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, x = g ? i : n, y = g ? n : i;
    a = (y - x) / Math.max(1, v - l + f * 2), s && (a = Math.floor(a)), x += (y - x - a * (v - l)) * d, u = a * (1 - l), s && (x = Math.round(x), u = Math.round(u));
    var b = uW(v).map(function(S) {
      return x + a * S;
    });
    return r(g ? b.reverse() : b);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), h()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, i] = v, n = +n, i = +i, h()) : [n, i];
  }, e.rangeRound = function(v) {
    return [n, i] = v, n = +n, i = +i, s = !0, h();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return a;
  }, e.round = function(v) {
    return arguments.length ? (s = !!v, h()) : s;
  }, e.padding = function(v) {
    return arguments.length ? (l = Math.min(1, f = +v), h()) : l;
  }, e.paddingInner = function(v) {
    return arguments.length ? (l = Math.min(1, v), h()) : l;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (f = +v, h()) : f;
  }, e.align = function(v) {
    return arguments.length ? (d = Math.max(0, Math.min(1, v)), h()) : d;
  }, e.copy = function() {
    return Ou(t(), [n, i]).round(s).paddingInner(l).paddingOuter(f).align(d);
  }, Lr.apply(h(), arguments);
}
function bC(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return bC(t());
  }, e;
}
function cu() {
  return bC(Ou.apply(null, arguments).paddingInner(1));
}
function Xm(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function xC(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function as() {
}
var Su = 0.7, Bc = 1 / Su, Na = "\\s*([+-]?\\d+)\\s*", Au = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sW = /^#([0-9a-f]{3,8})$/, cW = new RegExp(`^rgb\\(${Na},${Na},${Na}\\)$`), lW = new RegExp(`^rgb\\(${ln},${ln},${ln}\\)$`), fW = new RegExp(`^rgba\\(${Na},${Na},${Na},${Au}\\)$`), dW = new RegExp(`^rgba\\(${ln},${ln},${ln},${Au}\\)$`), hW = new RegExp(`^hsl\\(${Au},${ln},${ln}\\)$`), pW = new RegExp(`^hsla\\(${Au},${ln},${ln},${Au}\\)$`), xS = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Xm(as, Pu, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wS,
  // Deprecated! Use color.formatHex.
  formatHex: wS,
  formatHex8: vW,
  formatHsl: gW,
  formatRgb: _S,
  toString: _S
});
function wS() {
  return this.rgb().formatHex();
}
function vW() {
  return this.rgb().formatHex8();
}
function gW() {
  return wC(this).formatHsl();
}
function _S() {
  return this.rgb().formatRgb();
}
function Pu(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = sW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? OS(t) : r === 3 ? new Jt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? fc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? fc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = cW.exec(e)) ? new Jt(t[1], t[2], t[3], 1) : (t = lW.exec(e)) ? new Jt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fW.exec(e)) ? fc(t[1], t[2], t[3], t[4]) : (t = dW.exec(e)) ? fc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hW.exec(e)) ? PS(t[1], t[2] / 100, t[3] / 100, 1) : (t = pW.exec(e)) ? PS(t[1], t[2] / 100, t[3] / 100, t[4]) : xS.hasOwnProperty(e) ? OS(xS[e]) : e === "transparent" ? new Jt(NaN, NaN, NaN, 0) : null;
}
function OS(e) {
  return new Jt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Jt(e, t, r, n);
}
function yW(e) {
  return e instanceof as || (e = Pu(e)), e ? (e = e.rgb(), new Jt(e.r, e.g, e.b, e.opacity)) : new Jt();
}
function by(e, t, r, n) {
  return arguments.length === 1 ? yW(e) : new Jt(e, t, r, n ?? 1);
}
function Jt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Xm(Jt, by, xC(as, {
  brighter(e) {
    return e = e == null ? Bc : Math.pow(Bc, e), new Jt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Su : Math.pow(Su, e), new Jt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Jt(Yi(this.r), Yi(this.g), Yi(this.b), Fc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: SS,
  // Deprecated! Use color.formatHex.
  formatHex: SS,
  formatHex8: mW,
  formatRgb: AS,
  toString: AS
}));
function SS() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}`;
}
function mW() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}${zi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function AS() {
  const e = Fc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yi(this.r)}, ${Yi(this.g)}, ${Yi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Fc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zi(e) {
  return e = Yi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function PS(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kr(e, t, r, n);
}
function wC(e) {
  if (e instanceof Kr) return new Kr(e.h, e.s, e.l, e.opacity);
  if (e instanceof as || (e = Pu(e)), !e) return new Kr();
  if (e instanceof Kr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), u = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? u = (r - n) / s + (r < n) * 6 : r === a ? u = (n - t) / s + 2 : u = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, u *= 60) : s = l > 0 && l < 1 ? 0 : u, new Kr(u, s, l, e.opacity);
}
function bW(e, t, r, n) {
  return arguments.length === 1 ? wC(e) : new Kr(e, t, r, n ?? 1);
}
function Kr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Xm(Kr, bW, xC(as, {
  brighter(e) {
    return e = e == null ? Bc : Math.pow(Bc, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Su : Math.pow(Su, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Jt(
      zv(e >= 240 ? e - 240 : e + 120, i, n),
      zv(e, i, n),
      zv(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Kr(ES(this.h), dc(this.s), dc(this.l), Fc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ES(this.h)}, ${dc(this.s) * 100}%, ${dc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ES(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function dc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function zv(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Zm = (e) => () => e;
function xW(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function wW(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function _W(e) {
  return (e = +e) == 1 ? _C : function(t, r) {
    return r - t ? wW(t, r, e) : Zm(isNaN(t) ? r : t);
  };
}
function _C(e, t) {
  var r = t - e;
  return r ? xW(e, r) : Zm(isNaN(e) ? t : e);
}
const TS = function e(t) {
  var r = _W(t);
  function n(i, a) {
    var u = r((i = by(i)).r, (a = by(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), f = _C(i.opacity, a.opacity);
    return function(d) {
      return i.r = u(d), i.g = s(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function OW(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function SW(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AW(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), u;
  for (u = 0; u < n; ++u) i[u] = yo(e[u], t[u]);
  for (; u < r; ++u) a[u] = t[u];
  return function(s) {
    for (u = 0; u < n; ++u) a[u] = i[u](s);
    return a;
  };
}
function PW(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Wc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function EW(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = yo(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var xy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Uv = new RegExp(xy.source, "g");
function TW(e) {
  return function() {
    return e;
  };
}
function CW(e) {
  return function(t) {
    return e(t) + "";
  };
}
function MW(e, t) {
  var r = xy.lastIndex = Uv.lastIndex = 0, n, i, a, u = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (n = xy.exec(e)) && (i = Uv.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[u] ? s[u] += a : s[++u] = a), (n = n[0]) === (i = i[0]) ? s[u] ? s[u] += i : s[++u] = i : (s[++u] = null, l.push({ i: u, x: Wc(n, i) })), r = Uv.lastIndex;
  return r < t.length && (a = t.slice(r), s[u] ? s[u] += a : s[++u] = a), s.length < 2 ? l[0] ? CW(l[0].x) : TW(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) s[(h = l[d]).i] = h.x(f);
    return s.join("");
  });
}
function yo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Zm(t) : (r === "number" ? Wc : r === "string" ? (n = Pu(t)) ? (t = n, TS) : MW : t instanceof Pu ? TS : t instanceof Date ? PW : SW(t) ? OW : Array.isArray(t) ? AW : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? EW : Wc)(e, t);
}
function Jm(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function IW(e, t) {
  t === void 0 && (t = e, e = yo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(u) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(u *= n)));
    return a[s](u - s);
  };
}
function RW(e) {
  return function() {
    return e;
  };
}
function zc(e) {
  return +e;
}
var CS = [0, 1];
function Gt(e) {
  return e;
}
function wy(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : RW(isNaN(t) ? NaN : 0.5);
}
function $W(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function kW(e, t, r) {
  var n = e[0], i = e[1], a = t[0], u = t[1];
  return i < n ? (n = wy(i, n), a = r(u, a)) : (n = wy(n, i), a = r(a, u)), function(s) {
    return a(n(s));
  };
}
function jW(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), u = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < n; )
    i[u] = wy(e[u], e[u + 1]), a[u] = r(t[u], t[u + 1]);
  return function(s) {
    var l = is(e, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function os(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ql() {
  var e = CS, t = CS, r = yo, n, i, a, u = Gt, s, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return u !== Gt && (u = $W(e[0], e[v - 1])), s = v > 2 ? jW : kW, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = s(e.map(n), t, r)))(n(u(v)));
  }
  return h.invert = function(v) {
    return u(i((f || (f = s(t, e.map(n), Wc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, zc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = Jm, d();
  }, h.clamp = function(v) {
    return arguments.length ? (u = v ? !0 : Gt, d()) : u !== Gt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, g) {
    return n = v, i = g, d();
  };
}
function Qm() {
  return ql()(Gt, Gt);
}
function NW(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Uc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Ha(e) {
  return e = Uc(Math.abs(e)), e ? e[1] : NaN;
}
function DW(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], u = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); )
      s = e[u = (u + 1) % e.length];
    return a.reverse().join(t);
  };
}
function LW(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var qW = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Eu(e) {
  if (!(t = qW.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new eb({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Eu.prototype = eb.prototype;
function eb(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
eb.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function BW(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var OC;
function FW(e, t) {
  var r = Uc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (OC = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, u = n.length;
  return a === u ? n : a > u ? n + new Array(a - u + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Uc(e, Math.max(0, t + a - 1))[0];
}
function MS(e, t) {
  var r = Uc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const IS = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: NW,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => MS(e * 100, t),
  r: MS,
  s: FW,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function RS(e) {
  return e;
}
var $S = Array.prototype.map, kS = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function WW(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? RS : DW($S.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? RS : LW($S.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = Eu(h);
    var v = h.fill, g = h.align, x = h.sign, y = h.symbol, b = h.zero, S = h.width, O = h.comma, A = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (O = !0, m = "g") : IS[m] || (A === void 0 && (A = 12), _ = !0, m = "g"), (b || v === "0" && g === "=") && (b = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", T = y === "$" ? n : /[%p]/.test(m) ? u : "", I = IS[m], B = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function L(N) {
      var j = E, q = T, F, V, U;
      if (m === "c")
        q = I(N) + q, N = "";
      else {
        N = +N;
        var J = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? l : I(Math.abs(N), A), _ && (N = BW(N)), J && +N == 0 && x !== "+" && (J = !1), j = (J ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + j, q = (m === "s" ? kS[8 + OC / 3] : "") + q + (J && x === "(" ? ")" : ""), B) {
          for (F = -1, V = N.length; ++F < V; )
            if (U = N.charCodeAt(F), 48 > U || U > 57) {
              q = (U === 46 ? i + N.slice(F + 1) : N.slice(F)) + q, N = N.slice(0, F);
              break;
            }
        }
      }
      O && !b && (N = t(N, 1 / 0));
      var G = j.length + N.length + q.length, ue = G < S ? new Array(S - G + 1).join(v) : "";
      switch (O && b && (N = t(ue + N, ue.length ? S - q.length : 1 / 0), ue = ""), g) {
        case "<":
          N = j + N + q + ue;
          break;
        case "=":
          N = j + ue + N + q;
          break;
        case "^":
          N = ue.slice(0, G = ue.length >> 1) + j + N + q + ue.slice(G);
          break;
        default:
          N = ue + j + N + q;
          break;
      }
      return a(N);
    }
    return L.toString = function() {
      return h + "";
    }, L;
  }
  function d(h, v) {
    var g = f((h = Eu(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(Ha(v) / 3))) * 3, y = Math.pow(10, -x), b = kS[8 + x / 3];
    return function(S) {
      return g(y * S) + b;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var hc, tb, SC;
zW({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function zW(e) {
  return hc = WW(e), tb = hc.format, SC = hc.formatPrefix, hc;
}
function UW(e) {
  return Math.max(0, -Ha(Math.abs(e)));
}
function HW(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ha(t) / 3))) * 3 - Ha(Math.abs(e)));
}
function GW(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ha(t) - Ha(e)) + 1;
}
function AC(e, t, r, n) {
  var i = yy(e, t, r), a;
  switch (n = Eu(n ?? ",f"), n.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = HW(i, u)) && (n.precision = a), SC(n, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = GW(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = UW(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return tb(n);
}
function wi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return vy(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return AC(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, u = n[i], s = n[a], l, f, d = 10;
    for (s < u && (f = u, u = s, s = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = gy(u, s, r), f === l)
        return n[i] = u, n[a] = s, t(n);
      if (f > 0)
        u = Math.floor(u / f) * f, s = Math.ceil(s / f) * f;
      else if (f < 0)
        u = Math.ceil(u * f) / f, s = Math.floor(s * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function Hc() {
  var e = Qm();
  return e.copy = function() {
    return os(e, Hc());
  }, Lr.apply(e, arguments), wi(e);
}
function PC(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, zc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return PC(e).unknown(t);
  }, e = arguments.length ? Array.from(e, zc) : [0, 1], wi(r);
}
function EC(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], u;
  return a < i && (u = r, r = n, n = u, u = i, i = a, a = u), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function jS(e) {
  return Math.log(e);
}
function NS(e) {
  return Math.exp(e);
}
function KW(e) {
  return -Math.log(-e);
}
function VW(e) {
  return -Math.exp(-e);
}
function YW(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function XW(e) {
  return e === 10 ? YW : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function ZW(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function DS(e) {
  return (t, r) => -e(-t, r);
}
function rb(e) {
  const t = e(jS, NS), r = t.domain;
  let n = 10, i, a;
  function u() {
    return i = ZW(n), a = XW(n), r()[0] < 0 ? (i = DS(i), a = DS(a), e(KW, VW)) : e(jS, NS), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, u()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), u()) : r();
  }, t.ticks = (s) => {
    const l = r();
    let f = l[0], d = l[l.length - 1];
    const h = d < f;
    h && ([f, d] = [d, f]);
    let v = i(f), g = i(d), x, y;
    const b = s == null ? 10 : +s;
    let S = [];
    if (!(n % 1) && g - v < b) {
      if (v = Math.floor(v), g = Math.ceil(g), f > 0) {
        for (; v <= g; ++v)
          for (x = 1; x < n; ++x)
            if (y = v < 0 ? x / a(-v) : x * a(v), !(y < f)) {
              if (y > d) break;
              S.push(y);
            }
      } else for (; v <= g; ++v)
        for (x = n - 1; x >= 1; --x)
          if (y = v > 0 ? x / a(-v) : x * a(v), !(y < f)) {
            if (y > d) break;
            S.push(y);
          }
      S.length * 2 < b && (S = vy(f, d, b));
    } else
      S = vy(v, g, Math.min(g - v, b)).map(a);
    return h ? S.reverse() : S;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Eu(l)).precision == null && (l.trim = !0), l = tb(l)), s === 1 / 0) return l;
    const f = Math.max(1, n * s / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(EC(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function TC() {
  const e = rb(ql()).domain([1, 10]);
  return e.copy = () => os(e, TC()).base(e.base()), Lr.apply(e, arguments), e;
}
function LS(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function qS(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function nb(e) {
  var t = 1, r = e(LS(t), qS(t));
  return r.constant = function(n) {
    return arguments.length ? e(LS(t = +n), qS(t)) : t;
  }, wi(r);
}
function CC() {
  var e = nb(ql());
  return e.copy = function() {
    return os(e, CC()).constant(e.constant());
  }, Lr.apply(e, arguments);
}
function BS(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function JW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function QW(e) {
  return e < 0 ? -e * e : e * e;
}
function ib(e) {
  var t = e(Gt, Gt), r = 1;
  function n() {
    return r === 1 ? e(Gt, Gt) : r === 0.5 ? e(JW, QW) : e(BS(r), BS(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, wi(t);
}
function ab() {
  var e = ib(ql());
  return e.copy = function() {
    return os(e, ab()).exponent(e.exponent());
  }, Lr.apply(e, arguments), e;
}
function ez() {
  return ab.apply(null, arguments).exponent(0.5);
}
function FS(e) {
  return Math.sign(e) * e * e;
}
function tz(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function MC() {
  var e = Qm(), t = [0, 1], r = !1, n;
  function i(a) {
    var u = tz(e(a));
    return isNaN(u) ? n : r ? Math.round(u) : u;
  }
  return i.invert = function(a) {
    return e.invert(FS(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, zc)).map(FS)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return MC(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Lr.apply(i, arguments), wi(i);
}
function IC() {
  var e = [], t = [], r = [], n;
  function i() {
    var u = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++u < s; ) r[u - 1] = oW(e, u / s);
    return a;
  }
  function a(u) {
    return u == null || isNaN(u = +u) ? n : t[is(r, u)];
  }
  return a.invertExtent = function(u) {
    var s = t.indexOf(u);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(u) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of u) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(pi), i();
  }, a.range = function(u) {
    return arguments.length ? (t = Array.from(u), i()) : t.slice();
  }, a.unknown = function(u) {
    return arguments.length ? (n = u, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return IC().domain(e).range(t).unknown(n);
  }, Lr.apply(a, arguments);
}
function RC() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function u(l) {
    return l != null && l <= l ? i[is(n, l, 0, r)] : a;
  }
  function s() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return u;
  }
  return u.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, s()) : [e, t];
  }, u.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, s()) : i.slice();
  }, u.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, u.unknown = function(l) {
    return arguments.length && (a = l), u;
  }, u.thresholds = function() {
    return n.slice();
  }, u.copy = function() {
    return RC().domain([e, t]).range(i).unknown(a);
  }, Lr.apply(wi(u), arguments);
}
function $C() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[is(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var u = t.indexOf(a);
    return [e[u - 1], e[u]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return $C().domain(e).range(t).unknown(r);
  }, Lr.apply(i, arguments);
}
const Hv = /* @__PURE__ */ new Date(), Gv = /* @__PURE__ */ new Date();
function Et(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const u = i(a), s = i.ceil(a);
    return a - u < s - a ? u : s;
  }, i.offset = (a, u) => (t(a = /* @__PURE__ */ new Date(+a), u == null ? 1 : Math.floor(u)), a), i.range = (a, u, s) => {
    const l = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < u) || !(s > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (f < a && a < u);
    return l;
  }, i.filter = (a) => Et((u) => {
    if (u >= u) for (; e(u), !a(u); ) u.setTime(u - 1);
  }, (u, s) => {
    if (u >= u)
      if (s < 0) for (; ++s <= 0; )
        for (; t(u, -1), !a(u); )
          ;
      else for (; --s >= 0; )
        for (; t(u, 1), !a(u); )
          ;
  }), r && (i.count = (a, u) => (Hv.setTime(+a), Gv.setTime(+u), e(Hv), e(Gv), Math.floor(r(Hv, Gv))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (u) => n(u) % a === 0 : (u) => i.count(0, u) % a === 0) : i)), i;
}
const Gc = Et(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Gc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Et((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Gc);
Gc.range;
const In = 1e3, Ir = In * 60, Rn = Ir * 60, Dn = Rn * 24, ob = Dn * 7, WS = Dn * 30, Kv = Dn * 365, Ui = Et((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getUTCSeconds());
Ui.range;
const ub = Et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * In);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
ub.range;
const sb = Et((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
sb.range;
const cb = Et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * In - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * Rn);
}, (e, t) => (t - e) / Rn, (e) => e.getHours());
cb.range;
const lb = Et((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rn);
}, (e, t) => (t - e) / Rn, (e) => e.getUTCHours());
lb.range;
const us = Et(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ir) / Dn,
  (e) => e.getDate() - 1
);
us.range;
const Bl = Et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => e.getUTCDate() - 1);
Bl.range;
const kC = Et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => Math.floor(e / Dn));
kC.range;
function oa(e) {
  return Et((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / ob);
}
const Fl = oa(0), Kc = oa(1), rz = oa(2), nz = oa(3), Ga = oa(4), iz = oa(5), az = oa(6);
Fl.range;
Kc.range;
rz.range;
nz.range;
Ga.range;
iz.range;
az.range;
function ua(e) {
  return Et((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ob);
}
const Wl = ua(0), Vc = ua(1), oz = ua(2), uz = ua(3), Ka = ua(4), sz = ua(5), cz = ua(6);
Wl.range;
Vc.range;
oz.range;
uz.range;
Ka.range;
sz.range;
cz.range;
const fb = Et((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
fb.range;
const db = Et((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
db.range;
const Ln = Et((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Et((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ln.range;
const qn = Et((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Et((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
qn.range;
function jC(e, t, r, n, i, a) {
  const u = [
    [Ui, 1, In],
    [Ui, 5, 5 * In],
    [Ui, 15, 15 * In],
    [Ui, 30, 30 * In],
    [a, 1, Ir],
    [a, 5, 5 * Ir],
    [a, 15, 15 * Ir],
    [a, 30, 30 * Ir],
    [i, 1, Rn],
    [i, 3, 3 * Rn],
    [i, 6, 6 * Rn],
    [i, 12, 12 * Rn],
    [n, 1, Dn],
    [n, 2, 2 * Dn],
    [r, 1, ob],
    [t, 1, WS],
    [t, 3, 3 * WS],
    [e, 1, Kv]
  ];
  function s(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), x = g ? g.range(f, +d + 1) : [];
    return v ? x.reverse() : x;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Vm(([, , b]) => b).right(u, v);
    if (g === u.length) return e.every(yy(f / Kv, d / Kv, h));
    if (g === 0) return Gc.every(Math.max(yy(f, d, h), 1));
    const [x, y] = u[v / u[g - 1][2] < u[g][2] / v ? g - 1 : g];
    return x.every(y);
  }
  return [s, l];
}
const [lz, fz] = jC(qn, db, Wl, kC, lb, sb), [dz, hz] = jC(Ln, fb, Fl, us, cb, ub);
function Vv(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Yv(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Yo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function pz(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, u = e.shortDays, s = e.months, l = e.shortMonths, f = Xo(i), d = Zo(i), h = Xo(a), v = Zo(a), g = Xo(u), x = Zo(u), y = Xo(s), b = Zo(s), S = Xo(l), O = Zo(l), A = {
    a: J,
    A: G,
    b: ue,
    B: H,
    c: null,
    d: VS,
    e: VS,
    f: Dz,
    g: Kz,
    G: Yz,
    H: kz,
    I: jz,
    j: Nz,
    L: NC,
    m: Lz,
    M: qz,
    p: X,
    q: ae,
    Q: ZS,
    s: JS,
    S: Bz,
    u: Fz,
    U: Wz,
    V: zz,
    w: Uz,
    W: Hz,
    x: null,
    X: null,
    y: Gz,
    Y: Vz,
    Z: Xz,
    "%": XS
  }, _ = {
    a: ce,
    A: he,
    b: ye,
    B: be,
    c: null,
    d: YS,
    e: YS,
    f: eU,
    g: lU,
    G: dU,
    H: Zz,
    I: Jz,
    j: Qz,
    L: LC,
    m: tU,
    M: rU,
    p: le,
    q: ge,
    Q: ZS,
    s: JS,
    S: nU,
    u: iU,
    U: aU,
    V: oU,
    w: uU,
    W: sU,
    x: null,
    X: null,
    y: cU,
    Y: fU,
    Z: hU,
    "%": XS
  }, m = {
    a: L,
    A: N,
    b: j,
    B: q,
    c: F,
    d: GS,
    e: GS,
    f: Mz,
    g: HS,
    G: US,
    H: KS,
    I: KS,
    j: Pz,
    L: Cz,
    m: Az,
    M: Ez,
    p: B,
    q: Sz,
    Q: Rz,
    s: $z,
    S: Tz,
    u: bz,
    U: xz,
    V: wz,
    w: mz,
    W: _z,
    x: V,
    X: U,
    y: HS,
    Y: US,
    Z: Oz,
    "%": Iz
  };
  A.x = E(r, A), A.X = E(n, A), A.c = E(t, A), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(te, se) {
    return function(ve) {
      var k = [], Ee = -1, we = 0, Fe = te.length, ct, at, Kt;
      for (ve instanceof Date || (ve = /* @__PURE__ */ new Date(+ve)); ++Ee < Fe; )
        te.charCodeAt(Ee) === 37 && (k.push(te.slice(we, Ee)), (at = zS[ct = te.charAt(++Ee)]) != null ? ct = te.charAt(++Ee) : at = ct === "e" ? " " : "0", (Kt = se[ct]) && (ct = Kt(ve, at)), k.push(ct), we = Ee + 1);
      return k.push(te.slice(we, Ee)), k.join("");
    };
  }
  function T(te, se) {
    return function(ve) {
      var k = Yo(1900, void 0, 1), Ee = I(k, te, ve += "", 0), we, Fe;
      if (Ee != ve.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (se && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (we = Yv(Yo(k.y, 0, 1)), Fe = we.getUTCDay(), we = Fe > 4 || Fe === 0 ? Vc.ceil(we) : Vc(we), we = Bl.offset(we, (k.V - 1) * 7), k.y = we.getUTCFullYear(), k.m = we.getUTCMonth(), k.d = we.getUTCDate() + (k.w + 6) % 7) : (we = Vv(Yo(k.y, 0, 1)), Fe = we.getDay(), we = Fe > 4 || Fe === 0 ? Kc.ceil(we) : Kc(we), we = us.offset(we, (k.V - 1) * 7), k.y = we.getFullYear(), k.m = we.getMonth(), k.d = we.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Fe = "Z" in k ? Yv(Yo(k.y, 0, 1)).getUTCDay() : Vv(Yo(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Fe + 5) % 7 : k.w + k.U * 7 - (Fe + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Yv(k)) : Vv(k);
    };
  }
  function I(te, se, ve, k) {
    for (var Ee = 0, we = se.length, Fe = ve.length, ct, at; Ee < we; ) {
      if (k >= Fe) return -1;
      if (ct = se.charCodeAt(Ee++), ct === 37) {
        if (ct = se.charAt(Ee++), at = m[ct in zS ? se.charAt(Ee++) : ct], !at || (k = at(te, ve, k)) < 0) return -1;
      } else if (ct != ve.charCodeAt(k++))
        return -1;
    }
    return k;
  }
  function B(te, se, ve) {
    var k = f.exec(se.slice(ve));
    return k ? (te.p = d.get(k[0].toLowerCase()), ve + k[0].length) : -1;
  }
  function L(te, se, ve) {
    var k = g.exec(se.slice(ve));
    return k ? (te.w = x.get(k[0].toLowerCase()), ve + k[0].length) : -1;
  }
  function N(te, se, ve) {
    var k = h.exec(se.slice(ve));
    return k ? (te.w = v.get(k[0].toLowerCase()), ve + k[0].length) : -1;
  }
  function j(te, se, ve) {
    var k = S.exec(se.slice(ve));
    return k ? (te.m = O.get(k[0].toLowerCase()), ve + k[0].length) : -1;
  }
  function q(te, se, ve) {
    var k = y.exec(se.slice(ve));
    return k ? (te.m = b.get(k[0].toLowerCase()), ve + k[0].length) : -1;
  }
  function F(te, se, ve) {
    return I(te, t, se, ve);
  }
  function V(te, se, ve) {
    return I(te, r, se, ve);
  }
  function U(te, se, ve) {
    return I(te, n, se, ve);
  }
  function J(te) {
    return u[te.getDay()];
  }
  function G(te) {
    return a[te.getDay()];
  }
  function ue(te) {
    return l[te.getMonth()];
  }
  function H(te) {
    return s[te.getMonth()];
  }
  function X(te) {
    return i[+(te.getHours() >= 12)];
  }
  function ae(te) {
    return 1 + ~~(te.getMonth() / 3);
  }
  function ce(te) {
    return u[te.getUTCDay()];
  }
  function he(te) {
    return a[te.getUTCDay()];
  }
  function ye(te) {
    return l[te.getUTCMonth()];
  }
  function be(te) {
    return s[te.getUTCMonth()];
  }
  function le(te) {
    return i[+(te.getUTCHours() >= 12)];
  }
  function ge(te) {
    return 1 + ~~(te.getUTCMonth() / 3);
  }
  return {
    format: function(te) {
      var se = E(te += "", A);
      return se.toString = function() {
        return te;
      }, se;
    },
    parse: function(te) {
      var se = T(te += "", !1);
      return se.toString = function() {
        return te;
      }, se;
    },
    utcFormat: function(te) {
      var se = E(te += "", _);
      return se.toString = function() {
        return te;
      }, se;
    },
    utcParse: function(te) {
      var se = T(te += "", !0);
      return se.toString = function() {
        return te;
      }, se;
    }
  };
}
var zS = { "-": "", _: " ", 0: "0" }, It = /^\s*\d+/, vz = /^%/, gz = /[\\^$*+?|[\]().{}]/g;
function ze(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function yz(e) {
  return e.replace(gz, "\\$&");
}
function Xo(e) {
  return new RegExp("^(?:" + e.map(yz).join("|") + ")", "i");
}
function Zo(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function mz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function bz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function xz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function wz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function _z(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function US(e, t, r) {
  var n = It.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function HS(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Oz(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Sz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Az(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function GS(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Pz(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function KS(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Ez(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Tz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Cz(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Mz(e, t, r) {
  var n = It.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Iz(e, t, r) {
  var n = vz.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Rz(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function $z(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function VS(e, t) {
  return ze(e.getDate(), t, 2);
}
function kz(e, t) {
  return ze(e.getHours(), t, 2);
}
function jz(e, t) {
  return ze(e.getHours() % 12 || 12, t, 2);
}
function Nz(e, t) {
  return ze(1 + us.count(Ln(e), e), t, 3);
}
function NC(e, t) {
  return ze(e.getMilliseconds(), t, 3);
}
function Dz(e, t) {
  return NC(e, t) + "000";
}
function Lz(e, t) {
  return ze(e.getMonth() + 1, t, 2);
}
function qz(e, t) {
  return ze(e.getMinutes(), t, 2);
}
function Bz(e, t) {
  return ze(e.getSeconds(), t, 2);
}
function Fz(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Wz(e, t) {
  return ze(Fl.count(Ln(e) - 1, e), t, 2);
}
function DC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ga(e) : Ga.ceil(e);
}
function zz(e, t) {
  return e = DC(e), ze(Ga.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function Uz(e) {
  return e.getDay();
}
function Hz(e, t) {
  return ze(Kc.count(Ln(e) - 1, e), t, 2);
}
function Gz(e, t) {
  return ze(e.getFullYear() % 100, t, 2);
}
function Kz(e, t) {
  return e = DC(e), ze(e.getFullYear() % 100, t, 2);
}
function Vz(e, t) {
  return ze(e.getFullYear() % 1e4, t, 4);
}
function Yz(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ga(e) : Ga.ceil(e), ze(e.getFullYear() % 1e4, t, 4);
}
function Xz(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ze(t / 60 | 0, "0", 2) + ze(t % 60, "0", 2);
}
function YS(e, t) {
  return ze(e.getUTCDate(), t, 2);
}
function Zz(e, t) {
  return ze(e.getUTCHours(), t, 2);
}
function Jz(e, t) {
  return ze(e.getUTCHours() % 12 || 12, t, 2);
}
function Qz(e, t) {
  return ze(1 + Bl.count(qn(e), e), t, 3);
}
function LC(e, t) {
  return ze(e.getUTCMilliseconds(), t, 3);
}
function eU(e, t) {
  return LC(e, t) + "000";
}
function tU(e, t) {
  return ze(e.getUTCMonth() + 1, t, 2);
}
function rU(e, t) {
  return ze(e.getUTCMinutes(), t, 2);
}
function nU(e, t) {
  return ze(e.getUTCSeconds(), t, 2);
}
function iU(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function aU(e, t) {
  return ze(Wl.count(qn(e) - 1, e), t, 2);
}
function qC(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ka(e) : Ka.ceil(e);
}
function oU(e, t) {
  return e = qC(e), ze(Ka.count(qn(e), e) + (qn(e).getUTCDay() === 4), t, 2);
}
function uU(e) {
  return e.getUTCDay();
}
function sU(e, t) {
  return ze(Vc.count(qn(e) - 1, e), t, 2);
}
function cU(e, t) {
  return ze(e.getUTCFullYear() % 100, t, 2);
}
function lU(e, t) {
  return e = qC(e), ze(e.getUTCFullYear() % 100, t, 2);
}
function fU(e, t) {
  return ze(e.getUTCFullYear() % 1e4, t, 4);
}
function dU(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ka(e) : Ka.ceil(e), ze(e.getUTCFullYear() % 1e4, t, 4);
}
function hU() {
  return "+0000";
}
function XS() {
  return "%";
}
function ZS(e) {
  return +e;
}
function JS(e) {
  return Math.floor(+e / 1e3);
}
var Aa, BC, FC;
pU({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pU(e) {
  return Aa = pz(e), BC = Aa.format, Aa.parse, FC = Aa.utcFormat, Aa.utcParse, Aa;
}
function vU(e) {
  return new Date(e);
}
function gU(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function hb(e, t, r, n, i, a, u, s, l, f) {
  var d = Qm(), h = d.invert, v = d.domain, g = f(".%L"), x = f(":%S"), y = f("%I:%M"), b = f("%I %p"), S = f("%a %d"), O = f("%b %d"), A = f("%B"), _ = f("%Y");
  function m(E) {
    return (l(E) < E ? g : s(E) < E ? x : u(E) < E ? y : a(E) < E ? b : n(E) < E ? i(E) < E ? S : O : r(E) < E ? A : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, gU)) : v().map(vU);
  }, d.ticks = function(E) {
    var T = v();
    return e(T[0], T[T.length - 1], E ?? 10);
  }, d.tickFormat = function(E, T) {
    return T == null ? m : f(T);
  }, d.nice = function(E) {
    var T = v();
    return (!E || typeof E.range != "function") && (E = t(T[0], T[T.length - 1], E ?? 10)), E ? v(EC(T, E)) : d;
  }, d.copy = function() {
    return os(d, hb(e, t, r, n, i, a, u, s, l, f));
  }, d;
}
function yU() {
  return Lr.apply(hb(dz, hz, Ln, fb, Fl, us, cb, ub, Ui, BC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function mU() {
  return Lr.apply(hb(lz, fz, qn, db, Wl, Bl, lb, sb, Ui, FC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function zl() {
  var e = 0, t = 1, r, n, i, a, u = Gt, s = !1, l;
  function f(h) {
    return h == null || isNaN(h = +h) ? l : u(i === 0 ? 0.5 : (h = (a(h) - r) * i, s ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t] = h, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(h) {
    return arguments.length ? (s = !!h, f) : s;
  }, f.interpolator = function(h) {
    return arguments.length ? (u = h, f) : u;
  };
  function d(h) {
    return function(v) {
      var g, x;
      return arguments.length ? ([g, x] = v, u = h(g, x), f) : [u(0), u(1)];
    };
  }
  return f.range = d(yo), f.rangeRound = d(Jm), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function _i(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function WC() {
  var e = wi(zl()(Gt));
  return e.copy = function() {
    return _i(e, WC());
  }, Hn.apply(e, arguments);
}
function zC() {
  var e = rb(zl()).domain([1, 10]);
  return e.copy = function() {
    return _i(e, zC()).base(e.base());
  }, Hn.apply(e, arguments);
}
function UC() {
  var e = nb(zl());
  return e.copy = function() {
    return _i(e, UC()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function pb() {
  var e = ib(zl());
  return e.copy = function() {
    return _i(e, pb()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function bU() {
  return pb.apply(null, arguments).exponent(0.5);
}
function HC() {
  var e = [], t = Gt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((is(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(pi), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => aW(e, a / n));
  }, r.copy = function() {
    return HC(t).domain(e);
  }, Hn.apply(r, arguments);
}
function Ul() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, u, s, l, f = Gt, d, h = !1, v;
  function g(y) {
    return isNaN(y = +y) ? v : (y = 0.5 + ((y = +d(y)) - a) * (n * y < n * a ? s : l), f(h ? Math.max(0, Math.min(1, y)) : y));
  }
  g.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = d(e = +e), a = d(t = +t), u = d(r = +r), s = i === a ? 0 : 0.5 / (a - i), l = a === u ? 0 : 0.5 / (u - a), n = a < i ? -1 : 1, g) : [e, t, r];
  }, g.clamp = function(y) {
    return arguments.length ? (h = !!y, g) : h;
  }, g.interpolator = function(y) {
    return arguments.length ? (f = y, g) : f;
  };
  function x(y) {
    return function(b) {
      var S, O, A;
      return arguments.length ? ([S, O, A] = b, f = IW(y, [S, O, A]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = x(yo), g.rangeRound = x(Jm), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), u = y(r), s = i === a ? 0 : 0.5 / (a - i), l = a === u ? 0 : 0.5 / (u - a), n = a < i ? -1 : 1, g;
  };
}
function GC() {
  var e = wi(Ul()(Gt));
  return e.copy = function() {
    return _i(e, GC());
  }, Hn.apply(e, arguments);
}
function KC() {
  var e = rb(Ul()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return _i(e, KC()).base(e.base());
  }, Hn.apply(e, arguments);
}
function VC() {
  var e = nb(Ul());
  return e.copy = function() {
    return _i(e, VC()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function vb() {
  var e = ib(Ul());
  return e.copy = function() {
    return _i(e, vb()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function xU() {
  return vb.apply(null, arguments).exponent(0.5);
}
const QS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Ou,
  scaleDiverging: GC,
  scaleDivergingLog: KC,
  scaleDivergingPow: vb,
  scaleDivergingSqrt: xU,
  scaleDivergingSymlog: VC,
  scaleIdentity: PC,
  scaleImplicit: my,
  scaleLinear: Hc,
  scaleLog: TC,
  scaleOrdinal: Ym,
  scalePoint: cu,
  scalePow: ab,
  scaleQuantile: IC,
  scaleQuantize: RC,
  scaleRadial: MC,
  scaleSequential: WC,
  scaleSequentialLog: zC,
  scaleSequentialPow: pb,
  scaleSequentialQuantile: HC,
  scaleSequentialSqrt: bU,
  scaleSequentialSymlog: UC,
  scaleSqrt: ez,
  scaleSymlog: CC,
  scaleThreshold: $C,
  scaleTime: yU,
  scaleUtc: mU,
  tickFormat: AC
}, Symbol.toStringTag, { value: "Module" }));
var Xv, eA;
function Hl() {
  if (eA) return Xv;
  eA = 1;
  var e = ho();
  function t(r, n, i) {
    for (var a = -1, u = r.length; ++a < u; ) {
      var s = r[a], l = n(s);
      if (l != null && (f === void 0 ? l === l && !e(l) : i(l, f)))
        var f = l, d = s;
    }
    return d;
  }
  return Xv = t, Xv;
}
var Zv, tA;
function YC() {
  if (tA) return Zv;
  tA = 1;
  function e(t, r) {
    return t > r;
  }
  return Zv = e, Zv;
}
var Jv, rA;
function wU() {
  if (rA) return Jv;
  rA = 1;
  var e = Hl(), t = YC(), r = go();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Jv = n, Jv;
}
var _U = wU();
const di = /* @__PURE__ */ Je(_U);
var Qv, nA;
function XC() {
  if (nA) return Qv;
  nA = 1;
  function e(t, r) {
    return t < r;
  }
  return Qv = e, Qv;
}
var eg, iA;
function OU() {
  if (iA) return eg;
  iA = 1;
  var e = Hl(), t = XC(), r = go();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return eg = n, eg;
}
var SU = OU();
const Gl = /* @__PURE__ */ Je(SU);
var tg, aA;
function AU() {
  if (aA) return tg;
  aA = 1;
  var e = Mm(), t = gn(), r = iC(), n = tr();
  function i(a, u) {
    var s = n(a) ? e : r;
    return s(a, t(u, 3));
  }
  return tg = i, tg;
}
var rg, oA;
function PU() {
  if (oA) return rg;
  oA = 1;
  var e = rC(), t = AU();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return rg = r, rg;
}
var EU = PU();
const TU = /* @__PURE__ */ Je(EU);
var ng, uA;
function CU() {
  if (uA) return ng;
  uA = 1;
  var e = zm();
  function t(r, n) {
    return e(r, n);
  }
  return ng = t, ng;
}
var MU = CU();
const Qi = /* @__PURE__ */ Je(MU);
var mo = 1e9, IU = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, yb, dt = !0, jr = "[DecimalError] ", Xi = jr + "Invalid argument: ", gb = jr + "Exponent out of range: ", bo = Math.floor, Bi = Math.pow, RU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, hr, Mt = 1e7, st = 7, ZC = 9007199254740991, Yc = bo(ZC / st), pe = {};
pe.absoluteValue = pe.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
pe.comparedTo = pe.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
pe.decimalPlaces = pe.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * st;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
pe.dividedBy = pe.div = function(e) {
  return jn(this, new this.constructor(e));
};
pe.dividedToIntegerBy = pe.idiv = function(e) {
  var t = this, r = t.constructor;
  return tt(jn(t, new r(e), 0, 1), r.precision);
};
pe.equals = pe.eq = function(e) {
  return !this.cmp(e);
};
pe.exponent = function() {
  return bt(this);
};
pe.greaterThan = pe.gt = function(e) {
  return this.cmp(e) > 0;
};
pe.greaterThanOrEqualTo = pe.gte = function(e) {
  return this.cmp(e) >= 0;
};
pe.isInteger = pe.isint = function() {
  return this.e > this.d.length - 2;
};
pe.isNegative = pe.isneg = function() {
  return this.s < 0;
};
pe.isPositive = pe.ispos = function() {
  return this.s > 0;
};
pe.isZero = function() {
  return this.s === 0;
};
pe.lessThan = pe.lt = function(e) {
  return this.cmp(e) < 0;
};
pe.lessThanOrEqualTo = pe.lte = function(e) {
  return this.cmp(e) < 1;
};
pe.logarithm = pe.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(hr)) throw Error(jr + "NaN");
  if (r.s < 1) throw Error(jr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(hr) ? new n(0) : (dt = !1, t = jn(Tu(r, a), Tu(e, a), a), dt = !0, tt(t, i));
};
pe.minus = pe.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? e2(t, e) : JC(t, (e.s = -e.s, e));
};
pe.modulo = pe.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jr + "NaN");
  return r.s ? (dt = !1, t = jn(r, e, 0, 1).times(e), dt = !0, r.minus(t)) : tt(new n(r), i);
};
pe.naturalExponential = pe.exp = function() {
  return QC(this);
};
pe.naturalLogarithm = pe.ln = function() {
  return Tu(this);
};
pe.negated = pe.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
pe.plus = pe.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? JC(t, e) : e2(t, (e.s = -e.s, e));
};
pe.precision = pe.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xi + e);
  if (t = bt(i) + 1, n = i.d.length - 1, r = n * st + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
pe.squareRoot = pe.sqrt = function() {
  var e, t, r, n, i, a, u, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(jr + "NaN");
  }
  for (e = bt(s), dt = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = sn(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = bo((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = u = r + 3; ; )
    if (a = n, n = a.plus(jn(s, a, u + 2)).times(0.5), sn(a.d).slice(0, u) === (t = sn(n.d)).slice(0, u)) {
      if (t = t.slice(u - 3, u + 1), i == u && t == "4999") {
        if (tt(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      u += 4;
    }
  return dt = !0, tt(n, r);
};
pe.times = pe.mul = function(e) {
  var t, r, n, i, a, u, s, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, u = l, l = f, f = u), a = [], u = l + f, n = u; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      s = a[i] + g[n] * v[i - n - 1] + t, a[i--] = s % Mt | 0, t = s / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--u]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, dt ? tt(e, h.precision) : e;
};
pe.toDecimalPlaces = pe.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (hn(e, 0, mo), t === void 0 ? t = n.rounding : hn(t, 0, 8), tt(r, e + bt(r) + 1, t));
};
pe.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ea(n, !0) : (hn(e, 0, mo), t === void 0 ? t = i.rounding : hn(t, 0, 8), n = tt(new i(n), e + 1, t), r = ea(n, !0, e + 1)), r;
};
pe.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ea(i) : (hn(e, 0, mo), t === void 0 ? t = a.rounding : hn(t, 0, 8), n = tt(new a(i), e + bt(i) + 1, t), r = ea(n.abs(), !1, e + bt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
pe.toInteger = pe.toint = function() {
  var e = this, t = e.constructor;
  return tt(new t(e), bt(e) + 1, t.rounding);
};
pe.toNumber = function() {
  return +this;
};
pe.toPower = pe.pow = function(e) {
  var t, r, n, i, a, u, s = this, l = s.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(hr);
  if (s = new l(s), !s.s) {
    if (e.s < 1) throw Error(jr + "Infinity");
    return s;
  }
  if (s.eq(hr)) return s;
  if (n = l.precision, e.eq(hr)) return tt(s, n);
  if (t = e.e, r = e.d.length - 1, u = t >= r, a = s.s, u) {
    if ((r = d < 0 ? -d : d) <= ZC) {
      for (i = new l(hr), t = Math.ceil(n / st + 4), dt = !1; r % 2 && (i = i.times(s), cA(i.d, t)), r = bo(r / 2), r !== 0; )
        s = s.times(s), cA(s.d, t);
      return dt = !0, e.s < 0 ? new l(hr).div(i) : tt(i, n);
    }
  } else if (a < 0) throw Error(jr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, dt = !1, i = e.times(Tu(s, n + f)), dt = !0, i = QC(i), i.s = a, i;
};
pe.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = bt(i), n = ea(i, r <= a.toExpNeg || r >= a.toExpPos)) : (hn(e, 1, mo), t === void 0 ? t = a.rounding : hn(t, 0, 8), i = tt(new a(i), e, t), r = bt(i), n = ea(i, e <= r || r <= a.toExpNeg, e)), n;
};
pe.toSignificantDigits = pe.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (hn(e, 1, mo), t === void 0 ? t = n.rounding : hn(t, 0, 8)), tt(new n(r), e, t);
};
pe.toString = pe.valueOf = pe.val = pe.toJSON = pe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = bt(e), r = e.constructor;
  return ea(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function JC(e, t) {
  var r, n, i, a, u, s, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), dt ? tt(t, h) : t;
  if (l = e.d, f = t.d, u = e.e, i = t.e, l = l.slice(), a = u - i, a) {
    for (a < 0 ? (n = l, a = -a, s = f.length) : (n = f, i = u, s = l.length), u = Math.ceil(h / st), s = u > s ? u + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = f.length, s - a < 0 && (a = s, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, dt ? tt(t, h) : t;
}
function hn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Xi + e);
}
function sn(e) {
  var t, r, n, i = e.length - 1, a = "", u = e[0];
  if (i > 0) {
    for (a += u, t = 1; t < i; t++)
      n = e[t] + "", r = st - n.length, r && (a += li(r)), a += n;
    u = e[t], n = u + "", r = st - n.length, r && (a += li(r));
  } else if (u === 0)
    return "0";
  for (; u % 10 === 0; ) u /= 10;
  return a + u;
}
var jn = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, u = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + u, n[s] = a % Mt | 0, u = a / Mt | 0;
    return u && n.unshift(u), n;
  }
  function t(n, i, a, u) {
    var s, l;
    if (a != u)
      l = a > u ? 1 : -1;
    else
      for (s = l = 0; s < a; s++)
        if (n[s] != i[s]) {
          l = n[s] > i[s] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var u = 0; a--; )
      n[a] -= u, u = n[a] < i[a] ? 1 : 0, n[a] = u * Mt + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, u) {
    var s, l, f, d, h, v, g, x, y, b, S, O, A, _, m, E, T, I, B = n.constructor, L = n.s == i.s ? 1 : -1, N = n.d, j = i.d;
    if (!n.s) return new B(n);
    if (!i.s) throw Error(jr + "Division by zero");
    for (l = n.e - i.e, T = j.length, m = N.length, g = new B(L), x = g.d = [], f = 0; j[f] == (N[f] || 0); ) ++f;
    if (j[f] > (N[f] || 0) && --l, a == null ? O = a = B.precision : u ? O = a + (bt(n) - bt(i)) + 1 : O = a, O < 0) return new B(0);
    if (O = O / st + 2 | 0, f = 0, T == 1)
      for (d = 0, j = j[0], O++; (f < m || d) && O--; f++)
        A = d * Mt + (N[f] || 0), x[f] = A / j | 0, d = A % j | 0;
    else {
      for (d = Mt / (j[0] + 1) | 0, d > 1 && (j = e(j, d), N = e(N, d), T = j.length, m = N.length), _ = T, y = N.slice(0, T), b = y.length; b < T; ) y[b++] = 0;
      I = j.slice(), I.unshift(0), E = j[0], j[1] >= Mt / 2 && ++E;
      do
        d = 0, s = t(j, y, T, b), s < 0 ? (S = y[0], T != b && (S = S * Mt + (y[1] || 0)), d = S / E | 0, d > 1 ? (d >= Mt && (d = Mt - 1), h = e(j, d), v = h.length, b = y.length, s = t(h, y, v, b), s == 1 && (d--, r(h, T < v ? I : j, v))) : (d == 0 && (s = d = 1), h = j.slice()), v = h.length, v < b && h.unshift(0), r(y, h, b), s == -1 && (b = y.length, s = t(j, y, T, b), s < 1 && (d++, r(y, T < b ? I : j, b))), b = y.length) : s === 0 && (d++, y = [0]), x[f++] = d, s && y[0] ? y[b++] = N[_] || 0 : (y = [N[_]], b = 1);
      while ((_++ < m || y[0] !== void 0) && O--);
    }
    return x[0] || x.shift(), g.e = l, tt(g, u ? a + bt(g) + 1 : a);
  };
}();
function QC(e, t) {
  var r, n, i, a, u, s, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (bt(e) > 16) throw Error(gb + bt(e));
  if (!e.s) return new d(hr);
  for (t == null ? (dt = !1, s = h) : s = t, u = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(u), f += 5;
  for (n = Math.log(Bi(2, f)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new d(hr), d.precision = s; ; ) {
    if (i = tt(i.times(e), s), r = r.times(++l), u = a.plus(jn(i, r, s)), sn(u.d).slice(0, s) === sn(a.d).slice(0, s)) {
      for (; f--; ) a = tt(a.times(a), s);
      return d.precision = h, t == null ? (dt = !0, tt(a, h)) : a;
    }
    a = u;
  }
}
function bt(e) {
  for (var t = e.e * st, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ig(e, t, r) {
  if (t > e.LN10.sd())
    throw dt = !0, r && (e.precision = r), Error(jr + "LN10 precision limit exceeded");
  return tt(new e(e.LN10), t);
}
function li(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Tu(e, t) {
  var r, n, i, a, u, s, l, f, d, h = 1, v = 10, g = e, x = g.d, y = g.constructor, b = y.precision;
  if (g.s < 1) throw Error(jr + (g.s ? "NaN" : "-Infinity"));
  if (g.eq(hr)) return new y(0);
  if (t == null ? (dt = !1, f = b) : f = t, g.eq(10))
    return t == null && (dt = !0), ig(y, f);
  if (f += v, y.precision = f, r = sn(x), n = r.charAt(0), a = bt(g), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = sn(g.d), n = r.charAt(0), h++;
    a = bt(g), n > 1 ? (g = new y("0." + r), a++) : g = new y(n + "." + r.slice(1));
  } else
    return l = ig(y, f + 2, b).times(a + ""), g = Tu(new y(n + "." + r.slice(1)), f - v).plus(l), y.precision = b, t == null ? (dt = !0, tt(g, b)) : g;
  for (s = u = g = jn(g.minus(hr), g.plus(hr), f), d = tt(g.times(g), f), i = 3; ; ) {
    if (u = tt(u.times(d), f), l = s.plus(jn(u, new y(i), f)), sn(l.d).slice(0, f) === sn(s.d).slice(0, f))
      return s = s.times(2), a !== 0 && (s = s.plus(ig(y, f + 2, b).times(a + ""))), s = jn(s, new y(h), f), y.precision = b, t == null ? (dt = !0, tt(s, b)) : s;
    s = l, i += 2;
  }
}
function sA(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = bo(r / st), e.d = [], n = (r + 1) % st, r < 0 && (n += st), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= st; n < i; ) e.d.push(+t.slice(n, n += st));
      t = t.slice(n), n = st - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), dt && (e.e > Yc || e.e < -Yc)) throw Error(gb + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function tt(e, t, r) {
  var n, i, a, u, s, l, f, d, h = e.d;
  for (u = 1, a = h[0]; a >= 10; a /= 10) u++;
  if (n = t - u, n < 0)
    n += st, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / st), a = h.length, d >= a) return e;
    for (f = a = h[d], u = 1; a >= 10; a /= 10) u++;
    n %= st, i = n - st + u;
  }
  if (r !== void 0 && (a = Bi(10, u - i - 1), s = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Bi(10, u - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = bt(e), h.length = 1, t = t - a - 1, h[0] = Bi(10, (st - t % st) % st), e.e = bo(-t / st) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Bi(10, st - n), h[d] = i > 0 ? (f / Bi(10, u - i) % Bi(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == Mt && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != Mt) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (dt && (e.e > Yc || e.e < -Yc))
    throw Error(gb + bt(e));
  return e;
}
function e2(e, t) {
  var r, n, i, a, u, s, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), dt ? tt(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), u = f - n, u) {
    for (d = u < 0, d ? (r = l, u = -u, s = h.length) : (r = h, n = f, s = l.length), i = Math.max(Math.ceil(g / st), s) + 2, u > i && (u = i, r.length = 1), r.reverse(), i = u; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, s = h.length, d = i < s, d && (s = i), i = 0; i < s; i++)
      if (l[i] != h[i]) {
        d = l[i] < h[i];
        break;
      }
    u = 0;
  }
  for (d && (r = l, l = h, h = r, t.s = -t.s), s = l.length, i = h.length - s; i > 0; --i) l[s++] = 0;
  for (i = h.length; i > u; ) {
    if (l[--i] < h[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Mt - 1;
      --l[a], l[i] += Mt;
    }
    l[i] -= h[i];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, dt ? tt(t, g) : t) : new v(0);
}
function ea(e, t, r) {
  var n, i = bt(e), a = sn(e.d), u = a.length;
  return t ? (r && (n = r - u) > 0 ? a = a.charAt(0) + "." + a.slice(1) + li(n) : u > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + li(-i - 1) + a, r && (n = r - u) > 0 && (a += li(n))) : i >= u ? (a += li(i + 1 - u), r && (n = r - i - 1) > 0 && (a = a + "." + li(n))) : ((n = i + 1) < u && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - u) > 0 && (i + 1 === u && (a += "."), a += li(n))), e.s < 0 ? "-" + a : a;
}
function cA(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function t2(e) {
  var t, r, n;
  function i(a) {
    var u = this;
    if (!(u instanceof i)) return new i(a);
    if (u.constructor = i, a instanceof i) {
      u.s = a.s, u.e = a.e, u.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Xi + a);
      if (a > 0)
        u.s = 1;
      else if (a < 0)
        a = -a, u.s = -1;
      else {
        u.s = 0, u.e = 0, u.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        u.e = 0, u.d = [a];
        return;
      }
      return sA(u, a.toString());
    } else if (typeof a != "string")
      throw Error(Xi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), u.s = -1) : u.s = 1, RU.test(a)) sA(u, a);
    else throw Error(Xi + a);
  }
  if (i.prototype = pe, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = t2, i.config = i.set = $U, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function $U(e) {
  if (!e || typeof e != "object")
    throw Error(jr + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    mo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (bo(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Xi + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Xi + r + ": " + n);
  return this;
}
var yb = t2(IU);
hr = new yb(1);
const Qe = yb;
function kU(e) {
  return LU(e) || DU(e) || NU(e) || jU();
}
function jU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NU(e, t) {
  if (e) {
    if (typeof e == "string") return _y(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _y(e, t);
  }
}
function DU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function LU(e) {
  if (Array.isArray(e)) return _y(e);
}
function _y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qU = function(t) {
  return t;
}, r2 = {
  "@@functional/placeholder": !0
}, n2 = function(t) {
  return t === r2;
}, lA = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && n2(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, BU = function e(t, r) {
  return t === 1 ? r : lA(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var u = i.filter(function(s) {
      return s !== r2;
    }).length;
    return u >= t ? r.apply(void 0, i) : e(t - u, lA(function() {
      for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return n2(h) ? l.shift() : h;
      });
      return r.apply(void 0, kU(d).concat(l));
    }));
  });
}, Kl = function(t) {
  return BU(t.length, t);
}, Oy = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, FU = Kl(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), WU = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return qU;
  var i = r.reverse(), a = i[0], u = i.slice(1);
  return function() {
    return u.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, Sy = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, i2 = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function zU(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Qe(e).abs().log(10).toNumber()) + 1, t;
}
function UU(e, t, r) {
  for (var n = new Qe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var HU = Kl(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), GU = Kl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), KU = Kl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Vl = {
  rangeStep: UU,
  getDigitCount: zU,
  interpolateNumber: HU,
  uninterpolateNumber: GU,
  uninterpolateTruncation: KU
};
function Ay(e) {
  return XU(e) || YU(e) || a2(e) || VU();
}
function VU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function XU(e) {
  if (Array.isArray(e)) return Py(e);
}
function Cu(e, t) {
  return QU(e) || JU(e, t) || a2(e, t) || ZU();
}
function ZU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a2(e, t) {
  if (e) {
    if (typeof e == "string") return Py(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Py(e, t);
  }
}
function Py(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function JU(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var u = e[Symbol.iterator](), s; !(n = (s = u.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !n && u.return != null && u.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function QU(e) {
  if (Array.isArray(e)) return e;
}
function o2(e) {
  var t = Cu(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function u2(e, t, r) {
  if (e.lte(0))
    return new Qe(0);
  var n = Vl.getDigitCount(e.toNumber()), i = new Qe(10).pow(n), a = e.div(i), u = n !== 1 ? 0.05 : 0.1, s = new Qe(Math.ceil(a.div(u).toNumber())).add(r).mul(u), l = s.mul(i);
  return t ? l : new Qe(Math.ceil(l));
}
function e4(e, t, r) {
  var n = 1, i = new Qe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Qe(10).pow(Vl.getDigitCount(e) - 1), i = new Qe(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Qe(Math.floor(e)));
  } else e === 0 ? i = new Qe(Math.floor((t - 1) / 2)) : r || (i = new Qe(Math.floor(e)));
  var u = Math.floor((t - 1) / 2), s = WU(FU(function(l) {
    return i.add(new Qe(l - u).mul(n)).toNumber();
  }), Oy);
  return s(0, t);
}
function s2(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Qe(0),
      tickMin: new Qe(0),
      tickMax: new Qe(0)
    };
  var a = u2(new Qe(t).sub(e).div(r - 1), n, i), u;
  e <= 0 && t >= 0 ? u = new Qe(0) : (u = new Qe(e).add(t).div(2), u = u.sub(new Qe(u).mod(a)));
  var s = Math.ceil(u.sub(e).div(a).toNumber()), l = Math.ceil(new Qe(t).sub(u).div(a).toNumber()), f = s + l + 1;
  return f > r ? s2(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, s = t > 0 ? s : s + (r - f)), {
    step: a,
    tickMin: u.sub(new Qe(s).mul(a)),
    tickMax: u.add(new Qe(l).mul(a))
  });
}
function t4(e) {
  var t = Cu(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = Math.max(i, 2), s = o2([r, n]), l = Cu(s, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(Ay(Oy(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Ay(Oy(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? Sy(h) : h;
  }
  if (f === d)
    return e4(f, i, a);
  var v = s2(f, d, u, a), g = v.step, x = v.tickMin, y = v.tickMax, b = Vl.rangeStep(x, y.add(new Qe(0.1).mul(g)), g);
  return r > n ? Sy(b) : b;
}
function r4(e, t) {
  var r = Cu(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = o2([n, i]), s = Cu(u, 2), l = s[0], f = s[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = u2(new Qe(f).sub(l).div(d - 1), a, 0), v = [].concat(Ay(Vl.rangeStep(new Qe(l), new Qe(f).sub(new Qe(0.99).mul(h)), h)), [f]);
  return n > i ? Sy(v) : v;
}
var n4 = i2(t4), i4 = i2(r4), a4 = process.env.NODE_ENV === "production", ag = "Invariant failed";
function Qt(e, t) {
  if (a4)
    throw new Error(ag);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ag, ": ").concat(r) : ag;
  throw new Error(n);
}
var o4 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xc.apply(this, arguments);
}
function u4(e, t) {
  return f4(e) || l4(e, t) || c4(e, t) || s4();
}
function s4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c4(e, t) {
  if (e) {
    if (typeof e == "string") return fA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fA(e, t);
  }
}
function fA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function l4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function f4(e) {
  if (Array.isArray(e)) return e;
}
function d4(e, t) {
  if (e == null) return {};
  var r = h4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h4(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ss(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, u = e.dataPointFormatter, s = e.xAxis, l = e.yAxis, f = d4(e, o4), d = xe(f, !1);
  e.direction === "x" && s.type !== "number" && (process.env.NODE_ENV !== "production" ? Qt(!1, 'ErrorBar requires Axis type property to be "number".') : Qt());
  var h = a.map(function(v) {
    var g = u(v, i), x = g.x, y = g.y, b = g.value, S = g.errorVal;
    if (!S)
      return null;
    var O = [], A, _;
    if (Array.isArray(S)) {
      var m = u4(S, 2);
      A = m[0], _ = m[1];
    } else
      A = _ = S;
    if (r === "vertical") {
      var E = s.scale, T = y + t, I = T + n, B = T - n, L = E(b - A), N = E(b + _);
      O.push({
        x1: N,
        y1: I,
        x2: N,
        y2: B
      }), O.push({
        x1: L,
        y1: T,
        x2: N,
        y2: T
      }), O.push({
        x1: L,
        y1: I,
        x2: L,
        y2: B
      });
    } else if (r === "horizontal") {
      var j = l.scale, q = x + t, F = q - n, V = q + n, U = j(b - A), J = j(b + _);
      O.push({
        x1: F,
        y1: J,
        x2: V,
        y2: J
      }), O.push({
        x1: q,
        y1: U,
        x2: q,
        y2: J
      }), O.push({
        x1: F,
        y1: U,
        x2: V,
        y2: U
      });
    }
    return /* @__PURE__ */ $.createElement(Le, Xc({
      className: "recharts-errorBar",
      key: "bar-".concat(O.map(function(G) {
        return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
      }))
    }, d), O.map(function(G) {
      return /* @__PURE__ */ $.createElement("line", Xc({}, G, {
        key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
      }));
    }));
  });
  return /* @__PURE__ */ $.createElement(Le, {
    className: "recharts-errorBars"
  }, h);
}
ss.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
ss.displayName = "ErrorBar";
function Mu(e) {
  "@babel/helpers - typeof";
  return Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mu(e);
}
function dA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dA(Object(r), !0).forEach(function(n) {
      p4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p4(e, t, r) {
  return t = v4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v4(e) {
  var t = g4(e, "string");
  return Mu(t) == "symbol" ? t : String(t);
}
function g4(e, t) {
  if (Mu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var c2 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, u = fr(r, Wa);
  if (!u)
    return null;
  var s;
  return u.props && u.props.payload ? s = u.props && u.props.payload : a === "children" ? s = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return l.concat(v.map(function(g) {
      return {
        type: u.props.iconType || d.props.legendType,
        value: g.name,
        color: g.fill,
        payload: g
      };
    }));
  }, []) : s = (n || []).map(function(l) {
    var f = l.item, d = f.props, h = d.dataKey, v = d.name, g = d.legendType, x = d.hide;
    return {
      inactive: x,
      dataKey: h,
      type: u.props.iconType || g || "square",
      color: mb(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), og(og(og({}, u.props), Wa.getWithHeight(u, i)), {}, {
    payload: s,
    item: u
  });
};
function Iu(e) {
  "@babel/helpers - typeof";
  return Iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Iu(e);
}
function hA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hA(Object(r), !0).forEach(function(n) {
      Da(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Da(e, t, r) {
  return t = y4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y4(e) {
  var t = m4(e, "string");
  return Iu(t) == "symbol" ? t : String(t);
}
function m4(e, t) {
  if (Iu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Iu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pA(e) {
  return _4(e) || w4(e) || x4(e) || b4();
}
function b4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x4(e, t) {
  if (e) {
    if (typeof e == "string") return Ey(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ey(e, t);
  }
}
function w4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _4(e) {
  if (Array.isArray(e)) return Ey(e);
}
function Ey(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mt(e, t, r) {
  return Te(e) || Te(t) ? r : Pt(t) ? pr(e, t, r) : Pe(t) ? t(e) : r;
}
function lu(e, t, r, n) {
  var i = TU(e, function(s) {
    return mt(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return oe(s) || parseFloat(s);
    });
    return a.length ? [Gl(a), di(a)] : [1 / 0, -1 / 0];
  }
  var u = n ? i.filter(function(s) {
    return !Te(s);
  }) : i;
  return u.map(function(s) {
    return Pt(s) || s instanceof Date ? s : "";
  });
}
var O4 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, u = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < s; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[s - 1].coordinate, h = i[f].coordinate, v = f >= s - 1 ? i[0].coordinate : i[f + 1].coordinate, g = void 0;
      if (Ut(h - d) !== Ut(v - h)) {
        var x = [];
        if (Ut(v - h) === Ut(l[1] - l[0])) {
          g = v;
          var y = h + l[1] - l[0];
          x[0] = Math.min(y, (y + d) / 2), x[1] = Math.max(y, (y + d) / 2);
        } else {
          g = d;
          var b = v + l[1] - l[0];
          x[0] = Math.min(h, (b + h) / 2), x[1] = Math.max(h, (b + h) / 2);
        }
        var S = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
        if (t > S[0] && t <= S[1] || t >= x[0] && t <= x[1]) {
          u = i[f].index;
          break;
        }
      } else {
        var O = Math.min(d, v), A = Math.max(d, v);
        if (t > (O + h) / 2 && t <= (A + h) / 2) {
          u = i[f].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < s; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        u = n[_].index;
        break;
      }
  return u;
}, mb = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, u = i.fill, s;
  switch (n) {
    case "Line":
      s = a;
      break;
    case "Area":
    case "Radar":
      s = a && a !== "none" ? a : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, S4 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var u = {}, s = Object.keys(a), l = 0, f = s.length; l < f; l++)
    for (var d = a[s[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var x = d[h[v]], y = x.items, b = x.cateAxisId, S = y.filter(function(m) {
        return kn(m.type).indexOf("Bar") >= 0;
      });
      if (S && S.length) {
        var O = S[0].props.barSize, A = S[0].props[b];
        u[A] || (u[A] = []);
        var _ = Te(O) ? r : O;
        u[A].push({
          item: S[0],
          stackList: S.slice(1),
          barSize: Te(_) ? void 0 : Ht(_, n, 0)
        });
      }
    }
  return u;
}, A4 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, u = a === void 0 ? [] : a, s = t.maxBarSize, l = u.length;
  if (l < 1) return null;
  var f = Ht(r, i, 0, !0), d, h = [];
  if (u[0].barSize === +u[0].barSize) {
    var v = !1, g = i / l, x = u.reduce(function(_, m) {
      return _ + m.barSize || 0;
    }, 0);
    x += (l - 1) * f, x >= i && (x -= (l - 1) * f, f = 0), x >= i && g > 0 && (v = !0, g *= 0.9, x = l * g);
    var y = (i - x) / 2 >> 0, b = {
      offset: y - f,
      size: 0
    };
    d = u.reduce(function(_, m) {
      var E = {
        item: m.item,
        position: {
          offset: b.offset + b.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : m.barSize
        }
      }, T = [].concat(pA(_), [E]);
      return b = T[T.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(I) {
        T.push({
          item: I,
          position: b
        });
      }), T;
    }, h);
  } else {
    var S = Ht(n, i, 0, !0);
    i - 2 * S - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * S - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var A = s === +s ? Math.min(O, s) : O;
    d = u.reduce(function(_, m, E) {
      var T = [].concat(pA(_), [{
        item: m.item,
        position: {
          offset: S + (O + f) * E + (O - A) / 2,
          size: A
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(I) {
        T.push({
          item: I,
          position: T[T.length - 1].position
        });
      }), T;
    }, h);
  }
  return d;
}, P4 = function(t, r, n, i) {
  var a = n.children, u = n.width, s = n.margin, l = u - (s.left || 0) - (s.right || 0), f = c2({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, g = f.align, x = f.verticalAlign, y = f.layout;
    if ((y === "vertical" || y === "horizontal" && x === "middle") && g !== "center" && oe(t[g]))
      return Tr(Tr({}, t), {}, Da({}, g, t[g] + (h || 0)));
    if ((y === "horizontal" || y === "vertical" && g === "center") && x !== "middle" && oe(t[x]))
      return Tr(Tr({}, t), {}, Da({}, x, t[x] + (v || 0)));
  }
  return t;
}, E4 = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, l2 = function(t, r, n, i, a) {
  var u = r.props.children, s = vr(u, ss).filter(function(f) {
    return E4(i, a, f.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = mt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Gl(h), di(h)] : [h, h], g = l.reduce(function(x, y) {
        var b = mt(d, y, 0), S = v[0] - Math.abs(Array.isArray(b) ? b[0] : b), O = v[1] + Math.abs(Array.isArray(b) ? b[1] : b);
        return [Math.min(S, x[0]), Math.max(O, x[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, T4 = function(t, r, n, i, a) {
  var u = r.map(function(s) {
    return l2(t, s, n, a, i);
  }).filter(function(s) {
    return !Te(s);
  });
  return u && u.length ? u.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, f2 = function(t, r, n, i, a) {
  var u = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && l2(t, l, f, i) || lu(t, f, n, a);
  });
  if (n === "number")
    return u.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(l, f) {
        return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return u.reduce(function(l, f) {
    for (var d = 0, h = f.length; d < h; d++)
      s[f[d]] || (s[f[d]] = !0, l.push(f[d]));
    return l;
  }, []);
}, d2 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, h2 = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, u, s = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (u = !0), l.coordinate;
  });
  return a || s.push(r), u || s.push(n), s;
}, $n = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, u = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && u === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? Ut(s[0] - s[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
    var d = (t.ticks || t.niceTicks).map(function(h) {
      var v = a ? a.indexOf(h) : h;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(v) + f,
        value: h,
        offset: f
      };
    });
    return d.filter(function(h) {
      return !vo(h.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(h, v) {
    return {
      coordinate: i(h) + f,
      value: h,
      index: v,
      offset: f
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(h) {
    return {
      coordinate: i(h) + f,
      value: h,
      offset: f
    };
  }) : i.domain().map(function(h, v) {
    return {
      coordinate: i(h) + f,
      value: a ? a[h] : h,
      index: v,
      offset: f
    };
  });
}, ug = /* @__PURE__ */ new WeakMap(), pc = function(t, r) {
  if (typeof r != "function")
    return t;
  ug.has(t) || ug.set(t, /* @__PURE__ */ new WeakMap());
  var n = ug.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, p2 = function(t, r, n) {
  var i = t.scale, a = t.type, u = t.layout, s = t.axisType;
  if (i === "auto")
    return u === "radial" && s === "radiusAxis" ? {
      scale: Ou(),
      realScaleType: "band"
    } : u === "radial" && s === "angleAxis" ? {
      scale: Hc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: cu(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Ou(),
      realScaleType: "band"
    } : {
      scale: Hc(),
      realScaleType: "linear"
    };
  if (rs(i)) {
    var l = "scale".concat(Rl(i));
    return {
      scale: (QS[l] || cu)(),
      realScaleType: QS[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: cu(),
    realScaleType: "point"
  };
}, vA = 1e-4, v2 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - vA, u = Math.max(i[0], i[1]) + vA, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > u || l < a || l > u) && t.domain([r[0], r[n - 1]]);
  }
}, C4 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, M4 = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, I4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0, s = 0; s < r; ++s) {
        var l = vo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = u, t[s][n][1] = u + l, u = t[s][n][1]);
      }
}, R4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0; u < r; ++u) {
        var s = vo(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = 0, t[u][n][1] = 0);
      }
}, $4 = {
  sign: I4,
  // @ts-expect-error definitelytyped types are incorrect
  expand: C6,
  // @ts-expect-error definitelytyped types are incorrect
  none: qa,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: M6,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: I6,
  positive: R4
}, k4 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = $4[n], u = T6().keys(i).value(function(s, l) {
    return +mt(s, l, 0);
  }).order(ny).offset(a);
  return u(t);
}, j4 = function(t, r, n, i, a, u) {
  if (!t)
    return null;
  var s = u ? r.reverse() : r, l = {}, f = s.reduce(function(h, v) {
    var g = v.props, x = g.stackId, y = g.hide;
    if (y)
      return h;
    var b = v.props[n], S = h[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Pt(x)) {
      var O = S.stackGroups[x] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(v), S.hasStack = !0, S.stackGroups[x] = O;
    } else
      S.stackGroups[aa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Tr(Tr({}, h), {}, Da({}, b, S));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var g = f[v];
    if (g.hasStack) {
      var x = {};
      g.stackGroups = Object.keys(g.stackGroups).reduce(function(y, b) {
        var S = g.stackGroups[b];
        return Tr(Tr({}, y), {}, Da({}, b, {
          numericAxisId: n,
          cateAxisId: i,
          items: S.items,
          stackedData: k4(t, S.items, a)
        }));
      }, x);
    }
    return Tr(Tr({}, h), {}, Da({}, v, g));
  }, d);
}, g2 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, u = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && u && (u[0] === "auto" || u[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = n4(f, a, s);
    return t.domain([Gl(d), di(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = i4(h, a, s);
    return {
      niceTicks: v
    };
  }
  return null;
};
function Zc(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, u = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var s = Ec(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = mt(i, Te(u) ? t.dataKey : u);
  return Te(l) ? null : t.scale(l);
}
var gA = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, u = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var l = mt(u, r.dataKey, r.domain[s]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, N4 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, D4 = function(t, r) {
  var n = t.props.stackId;
  if (Pt(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, L4 = function(t) {
  return t.reduce(function(r, n) {
    return [Gl(n.concat([r[0]]).filter(oe)), di(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, y2 = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var u = t[a], s = u.stackedData, l = s.reduce(function(f, d) {
      var h = L4(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, yA = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, mA = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ty = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (yA.test(t[0])) {
    var a = +yA.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (mA.test(t[1])) {
    var u = +mA.exec(t[1])[1];
    i[1] = r[1] + u;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Jc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Hm(r, function(h) {
      return h.coordinate;
    }), u = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var f = a[s], d = a[s - 1];
      u = Math.min((f.coordinate || 0) - (d.coordinate || 0), u);
    }
    return u === 1 / 0 ? 0 : u;
  }
  return n ? void 0 : 0;
}, bA = function(t, r, n) {
  return !t || !t.length || Qi(t, pr(n, "type.defaultProps.domain")) ? r : t;
}, m2 = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, u = n.unit, s = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Tr(Tr({}, xe(t, !1)), {}, {
    dataKey: i,
    unit: u,
    formatter: s,
    name: a || i,
    color: mb(t),
    value: mt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function Ru(e) {
  "@babel/helpers - typeof";
  return Ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ru(e);
}
function xA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xA(Object(r), !0).forEach(function(n) {
      b2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b2(e, t, r) {
  return t = q4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q4(e) {
  var t = B4(e, "string");
  return Ru(t) == "symbol" ? t : String(t);
}
function B4(e, t) {
  if (Ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F4(e, t) {
  return H4(e) || U4(e, t) || z4(e, t) || W4();
}
function W4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z4(e, t) {
  if (e) {
    if (typeof e == "string") return wA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wA(e, t);
  }
}
function wA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function H4(e) {
  if (Array.isArray(e)) return e;
}
var Qc = Math.PI / 180, G4 = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Qc * i) * n,
    y: r + Math.sin(-Qc * i) * n
  };
}, x2 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, K4 = function(t, r, n, i, a) {
  var u = t.width, s = t.height, l = t.startAngle, f = t.endAngle, d = Ht(t.cx, u, u / 2), h = Ht(t.cy, s, s / 2), v = x2(u, s, n), g = Ht(t.innerRadius, v, 0), x = Ht(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(b, S) {
    var O = r[S], A = O.domain, _ = O.reversed, m;
    if (Te(O.range))
      i === "angleAxis" ? m = [l, f] : i === "radiusAxis" && (m = [g, x]), _ && (m = [m[1], m[0]]);
    else {
      m = O.range;
      var E = m, T = F4(E, 2);
      l = T[0], f = T[1];
    }
    var I = p2(O, a), B = I.realScaleType, L = I.scale;
    L.domain(A).range(m), v2(L);
    var N = g2(L, Cn(Cn({}, O), {}, {
      realScaleType: B
    })), j = Cn(Cn(Cn({}, O), N), {}, {
      range: m,
      radius: x,
      realScaleType: B,
      scale: L,
      cx: d,
      cy: h,
      innerRadius: g,
      outerRadius: x,
      startAngle: l,
      endAngle: f
    });
    return Cn(Cn({}, b), {}, b2({}, S, j));
  }, {});
}, V4 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - u, 2));
}, Y4 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, u = r.cy, s = V4({
    x: n,
    y: i
  }, {
    x: a,
    y: u
  });
  if (s <= 0)
    return {
      radius: s
    };
  var l = (n - a) / s, f = Math.acos(l);
  return i > u && (f = 2 * Math.PI - f), {
    radius: s,
    angle: G4(f),
    angleInRadian: f
  };
}, X4 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), u = Math.min(i, a);
  return {
    startAngle: r - u * 360,
    endAngle: n - u * 360
  };
}, Z4 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), u = Math.floor(i / 360), s = Math.min(a, u);
  return t + s * 360;
}, _A = function(t, r) {
  var n = t.x, i = t.y, a = Y4({
    x: n,
    y: i
  }, r), u = a.radius, s = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (u < l || u > f)
    return !1;
  if (u === 0)
    return !0;
  var d = X4(r), h = d.startAngle, v = d.endAngle, g = s, x;
  if (h <= v) {
    for (; g > v; )
      g -= 360;
    for (; g < h; )
      g += 360;
    x = g >= h && g <= v;
  } else {
    for (; g > h; )
      g -= 360;
    for (; g < v; )
      g += 360;
    x = g >= v && g <= h;
  }
  return x ? Cn(Cn({}, r), {}, {
    radius: u,
    angle: Z4(g, r)
  }) : null;
}, w2 = function(t) {
  return !/* @__PURE__ */ Vr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function $u(e) {
  "@babel/helpers - typeof";
  return $u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $u(e);
}
var J4 = ["offset"];
function Q4(e) {
  return n5(e) || r5(e) || t5(e) || e5();
}
function e5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function t5(e, t) {
  if (e) {
    if (typeof e == "string") return Cy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cy(e, t);
  }
}
function r5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function n5(e) {
  if (Array.isArray(e)) return Cy(e);
}
function Cy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i5(e, t) {
  if (e == null) return {};
  var r = a5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function a5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function OA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? OA(Object(r), !0).forEach(function(n) {
      o5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : OA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o5(e, t, r) {
  return t = u5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u5(e) {
  var t = s5(e, "string");
  return $u(t) == "symbol" ? t : String(t);
}
function s5(e, t) {
  if ($u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ku.apply(this, arguments);
}
var c5 = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, l5 = function(t, r) {
  var n = Ut(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, f5 = function(t, r, n) {
  var i = t.position, a = t.viewBox, u = t.offset, s = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, x = l.endAngle, y = l.clockWise, b = (h + v) / 2, S = l5(g, x), O = S >= 0 ? 1 : -1, A, _;
  i === "insideStart" ? (A = g + O * u, _ = y) : i === "insideEnd" ? (A = x - O * u, _ = !y) : i === "end" && (A = x + O * u, _ = y), _ = S <= 0 ? _ : !_;
  var m = it(f, d, b, A), E = it(f, d, b, A + (_ ? 1 : -1) * 359), T = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(b, ",").concat(b, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), I = Te(t.id) ? aa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ $.createElement("text", ku({}, n, {
    dominantBaseline: "central",
    className: Ie("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("path", {
    id: I,
    d: T
  })), /* @__PURE__ */ $.createElement("textPath", {
    xlinkHref: "#".concat(I)
  }, r));
}, d5 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, u = a.cx, s = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(u, s, f + n, v), x = g.x, y = g.y;
    return {
      x,
      y,
      textAnchor: x >= u ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: u,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: u,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: u,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var b = (l + f) / 2, S = it(u, s, b, v), O = S.x, A = S.y;
  return {
    x: O,
    y: A,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, h5 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, u = r, s = u.x, l = u.y, f = u.width, d = u.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", x = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, b = y * i, S = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
  if (a === "top") {
    var A = {
      x: s + f / 2,
      y: l - h * i,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return _t(_t({}, A), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: s + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: x
    };
    return _t(_t({}, _), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var m = {
      x: s - b,
      y: l + d / 2,
      textAnchor: S,
      verticalAnchor: "middle"
    };
    return _t(_t({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var E = {
      x: s + f + b,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return _t(_t({}, E), n ? {
      width: Math.max(n.x + n.width - E.x, 0),
      height: d
    } : {});
  }
  var T = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? _t({
    x: s + b,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, T) : a === "insideRight" ? _t({
    x: s + f - b,
    y: l + d / 2,
    textAnchor: S,
    verticalAnchor: "middle"
  }, T) : a === "insideTop" ? _t({
    x: s + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: x
  }, T) : a === "insideBottom" ? _t({
    x: s + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: g
  }, T) : a === "insideTopLeft" ? _t({
    x: s + b,
    y: l + v,
    textAnchor: O,
    verticalAnchor: x
  }, T) : a === "insideTopRight" ? _t({
    x: s + f - b,
    y: l + v,
    textAnchor: S,
    verticalAnchor: x
  }, T) : a === "insideBottomLeft" ? _t({
    x: s + b,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: g
  }, T) : a === "insideBottomRight" ? _t({
    x: s + f - b,
    y: l + d - v,
    textAnchor: S,
    verticalAnchor: g
  }, T) : po(a) && (oe(a.x) || Wi(a.x)) && (oe(a.y) || Wi(a.y)) ? _t({
    x: s + Ht(a.x, f),
    y: l + Ht(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, T) : _t({
    x: s + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, T);
}, p5 = function(t) {
  return "cx" in t && oe(t.cx);
};
function At(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = i5(e, J4), i = _t({
    offset: r
  }, n), a = i.viewBox, u = i.position, s = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(s) && Te(l) && !/* @__PURE__ */ Vr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ Vr(f))
    return /* @__PURE__ */ Ot(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ VE(f, i), /* @__PURE__ */ Vr(g))
      return g;
  } else
    g = c5(i);
  var x = p5(a), y = xe(i, !0);
  if (x && (u === "insideStart" || u === "insideEnd" || u === "end"))
    return f5(i, g, y);
  var b = x ? d5(i) : h5(i);
  return /* @__PURE__ */ $.createElement(vi, ku({
    className: Ie("recharts-label", h)
  }, y, b, {
    breakAll: v
  }), g);
}
At.displayName = "Label";
var _2 = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, u = t.endAngle, s = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, x = t.left, y = t.width, b = t.height, S = t.clockWise, O = t.labelViewBox;
  if (O)
    return O;
  if (oe(y) && oe(b)) {
    if (oe(h) && oe(v))
      return {
        x: h,
        y: v,
        width: y,
        height: b
      };
    if (oe(g) && oe(x))
      return {
        x: g,
        y: x,
        width: y,
        height: b
      };
  }
  return oe(h) && oe(v) ? {
    x: h,
    y: v,
    width: 0,
    height: 0
  } : oe(r) && oe(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: u || i || 0,
    innerRadius: f || 0,
    outerRadius: d || l || s || 0,
    clockWise: S
  } : t.viewBox ? t.viewBox : {};
}, v5 = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ $.createElement(At, {
    key: "label-implicit",
    viewBox: r
  }) : Pt(t) ? /* @__PURE__ */ $.createElement(At, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Vr(t) ? t.type === At ? /* @__PURE__ */ Ot(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ $.createElement(At, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ $.createElement(At, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : po(t) ? /* @__PURE__ */ $.createElement(At, ku({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, g5 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = _2(t), u = vr(i, At).map(function(l, f) {
    return /* @__PURE__ */ Ot(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return u;
  var s = v5(t.label, r || a);
  return [s].concat(Q4(u));
};
At.parseViewBox = _2;
At.renderCallByParent = g5;
var sg, SA;
function y5() {
  if (SA) return sg;
  SA = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return sg = e, sg;
}
var m5 = y5();
const b5 = /* @__PURE__ */ Je(m5);
function ju(e) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ju(e);
}
var x5 = ["valueAccessor"], w5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function _5(e) {
  return P5(e) || A5(e) || S5(e) || O5();
}
function O5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S5(e, t) {
  if (e) {
    if (typeof e == "string") return My(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return My(e, t);
  }
}
function A5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function P5(e) {
  if (Array.isArray(e)) return My(e);
}
function My(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function el() {
  return el = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, el.apply(this, arguments);
}
function AA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? AA(Object(r), !0).forEach(function(n) {
      E5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E5(e, t, r) {
  return t = T5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T5(e) {
  var t = C5(e, "string");
  return ju(t) == "symbol" ? t : String(t);
}
function C5(e, t) {
  if (ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EA(e, t) {
  if (e == null) return {};
  var r = M5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var I5 = function(t) {
  return Array.isArray(t.value) ? b5(t.value) : t.value;
};
function Rr(e) {
  var t = e.valueAccessor, r = t === void 0 ? I5 : t, n = EA(e, x5), i = n.data, a = n.dataKey, u = n.clockWise, s = n.id, l = n.textBreakAll, f = EA(n, w5);
  return !i || !i.length ? null : /* @__PURE__ */ $.createElement(Le, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Te(a) ? r(d, h) : mt(d && d.payload, a), g = Te(s) ? {} : {
      id: "".concat(s, "-").concat(h)
    };
    return /* @__PURE__ */ $.createElement(At, el({}, xe(d, !0), f, g, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: At.parseViewBox(Te(u) ? d : PA(PA({}, d), {}, {
        clockWise: u
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
Rr.displayName = "LabelList";
function R5(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ $.createElement(Rr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ $.isValidElement(e) || Pe(e) ? /* @__PURE__ */ $.createElement(Rr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : po(e) ? /* @__PURE__ */ $.createElement(Rr, el({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function $5(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = vr(n, Rr).map(function(u, s) {
    return /* @__PURE__ */ Ot(u, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = R5(e.label, t);
  return [a].concat(_5(i));
}
Rr.renderCallByParent = $5;
function Nu(e) {
  "@babel/helpers - typeof";
  return Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nu(e);
}
function Iy() {
  return Iy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Iy.apply(this, arguments);
}
function TA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function CA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? TA(Object(r), !0).forEach(function(n) {
      k5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k5(e, t, r) {
  return t = j5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j5(e) {
  var t = N5(e, "string");
  return Nu(t) == "symbol" ? t : String(t);
}
function N5(e, t) {
  if (Nu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var D5 = function(t, r) {
  var n = Ut(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, vc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, u = t.sign, s = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (s ? 1 : -1) + i, h = Math.asin(l / d) / Qc, v = f ? a : a + u * h, g = it(r, n, d, v), x = it(r, n, i, v), y = f ? a - u * h : a, b = it(r, n, d * Math.cos(h * Qc), y);
  return {
    center: g,
    circleTangency: x,
    lineTangency: b,
    theta: h
  };
}, O2 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.startAngle, s = t.endAngle, l = D5(u, s), f = u + l, d = it(r, n, a, u), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(u > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var g = it(r, n, i, u), x = it(r, n, i, f);
    v += "L ".concat(x.x, ",").concat(x.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(u <= f), `,
            `).concat(g.x, ",").concat(g.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, L5 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Ut(d - f), v = vc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: u,
    cornerIsExternal: l
  }), g = v.circleTangency, x = v.lineTangency, y = v.theta, b = vc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: u,
    cornerIsExternal: l
  }), S = b.circleTangency, O = b.lineTangency, A = b.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - A;
  if (_ < 0)
    return s ? "M ".concat(x.x, ",").concat(x.y, `
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(u * 2, `,0
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(-u * 2, `,0
      `) : O2({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var m = "M ".concat(x.x, ",").concat(x.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(S.x, ",").concat(S.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = vc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: u,
      cornerIsExternal: l
    }), T = E.circleTangency, I = E.lineTangency, B = E.theta, L = vc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: u,
      cornerIsExternal: l
    }), N = L.circleTangency, j = L.lineTangency, q = L.theta, F = l ? Math.abs(f - d) : Math.abs(f - d) - B - q;
    if (F < 0 && u === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(j.x, ",").concat(j.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(N.x, ",").concat(N.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(F > 180), ",").concat(+(h > 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(I.x, ",").concat(I.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, q5 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, S2 = function(t) {
  var r = CA(CA({}, q5), t), n = r.cx, i = r.cy, a = r.innerRadius, u = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (u < a || d === h)
    return null;
  var g = Ie("recharts-sector", v), x = u - a, y = Ht(s, x, 0, !0), b;
  return y > 0 && Math.abs(d - h) < 360 ? b = L5({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    cornerRadius: Math.min(y, x / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : b = O2({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ $.createElement("path", Iy({}, xe(r, !0), {
    className: g,
    d: b,
    role: "img"
  }));
};
function Du(e) {
  "@babel/helpers - typeof";
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Du(e);
}
function Ry() {
  return Ry = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ry.apply(this, arguments);
}
function MA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function IA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? MA(Object(r), !0).forEach(function(n) {
      B5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B5(e, t, r) {
  return t = F5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F5(e) {
  var t = W5(e, "string");
  return Du(t) == "symbol" ? t : String(t);
}
function W5(e, t) {
  if (Du(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Du(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RA = {
  curveBasisClosed: y6,
  curveBasisOpen: m6,
  curveBasis: g6,
  curveBumpX: r6,
  curveBumpY: n6,
  curveLinearClosed: b6,
  curveLinear: kl,
  curveMonotoneX: x6,
  curveMonotoneY: w6,
  curveNatural: _6,
  curveStep: O6,
  curveStepAfter: A6,
  curveStepBefore: S6
}, gc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Jo = function(t) {
  return t.x;
}, Qo = function(t) {
  return t.y;
}, z5 = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Rl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? RA["".concat(n).concat(r === "vertical" ? "Y" : "X")] : RA[n] || kl;
}, U5 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, u = t.baseLine, s = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = z5(n, s), h = f ? a.filter(function(y) {
    return gc(y);
  }) : a, v;
  if (Array.isArray(u)) {
    var g = f ? u.filter(function(y) {
      return gc(y);
    }) : u, x = h.map(function(y, b) {
      return IA(IA({}, y), {}, {
        base: g[b]
      });
    });
    return s === "vertical" ? v = uc().y(Qo).x1(Jo).x0(function(y) {
      return y.base.x;
    }) : v = uc().x(Jo).y1(Qo).y0(function(y) {
      return y.base.y;
    }), v.defined(gc).curve(d), v(x);
  }
  return s === "vertical" && oe(u) ? v = uc().y(Qo).x1(Jo).x0(u) : oe(u) ? v = uc().x(Jo).y1(Qo).y0(u) : v = ST().x(Jo).y(Qo), v.defined(gc).curve(d), v(h);
}, Zi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var u = n && n.length ? U5(t) : i;
  return /* @__PURE__ */ $.createElement("path", Ry({}, xe(t, !1), Tc(t), {
    className: Ie("recharts-curve", r),
    d: u,
    ref: a
  }));
}, yc = { exports: {} }, mc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $A;
function H5() {
  if ($A) return Ve;
  $A = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function A(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case t:
          switch (m = m.type, m) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case d:
                case x:
                case g:
                case u:
                  return m;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(m) {
    return A(m) === f;
  }
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = s, Ve.ContextProvider = u, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = x, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(m) {
    return _(m) || A(m) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(m) {
    return A(m) === s;
  }, Ve.isContextProvider = function(m) {
    return A(m) === u;
  }, Ve.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ve.isForwardRef = function(m) {
    return A(m) === d;
  }, Ve.isFragment = function(m) {
    return A(m) === n;
  }, Ve.isLazy = function(m) {
    return A(m) === x;
  }, Ve.isMemo = function(m) {
    return A(m) === g;
  }, Ve.isPortal = function(m) {
    return A(m) === r;
  }, Ve.isProfiler = function(m) {
    return A(m) === a;
  }, Ve.isStrictMode = function(m) {
    return A(m) === i;
  }, Ve.isSuspense = function(m) {
    return A(m) === h;
  }, Ve.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === a || m === i || m === h || m === v || typeof m == "object" && m !== null && (m.$$typeof === x || m.$$typeof === g || m.$$typeof === u || m.$$typeof === s || m.$$typeof === d || m.$$typeof === b || m.$$typeof === S || m.$$typeof === O || m.$$typeof === y);
  }, Ve.typeOf = A, Ve;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kA;
function G5() {
  return kA || (kA = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === h || k === v || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === g || k.$$typeof === u || k.$$typeof === s || k.$$typeof === d || k.$$typeof === b || k.$$typeof === S || k.$$typeof === O || k.$$typeof === y);
    }
    function _(k) {
      if (typeof k == "object" && k !== null) {
        var Ee = k.$$typeof;
        switch (Ee) {
          case t:
            var we = k.type;
            switch (we) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return we;
              default:
                var Fe = we && we.$$typeof;
                switch (Fe) {
                  case s:
                  case d:
                  case x:
                  case g:
                  case u:
                    return Fe;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var m = l, E = f, T = s, I = u, B = t, L = d, N = n, j = x, q = g, F = r, V = a, U = i, J = h, G = !1;
    function ue(k) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(k) || _(k) === l;
    }
    function H(k) {
      return _(k) === f;
    }
    function X(k) {
      return _(k) === s;
    }
    function ae(k) {
      return _(k) === u;
    }
    function ce(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function he(k) {
      return _(k) === d;
    }
    function ye(k) {
      return _(k) === n;
    }
    function be(k) {
      return _(k) === x;
    }
    function le(k) {
      return _(k) === g;
    }
    function ge(k) {
      return _(k) === r;
    }
    function te(k) {
      return _(k) === a;
    }
    function se(k) {
      return _(k) === i;
    }
    function ve(k) {
      return _(k) === h;
    }
    Ye.AsyncMode = m, Ye.ConcurrentMode = E, Ye.ContextConsumer = T, Ye.ContextProvider = I, Ye.Element = B, Ye.ForwardRef = L, Ye.Fragment = N, Ye.Lazy = j, Ye.Memo = q, Ye.Portal = F, Ye.Profiler = V, Ye.StrictMode = U, Ye.Suspense = J, Ye.isAsyncMode = ue, Ye.isConcurrentMode = H, Ye.isContextConsumer = X, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ye, Ye.isLazy = be, Ye.isMemo = le, Ye.isPortal = ge, Ye.isProfiler = te, Ye.isStrictMode = se, Ye.isSuspense = ve, Ye.isValidElementType = A, Ye.typeOf = _;
  }()), Ye;
}
var jA;
function A2() {
  return jA || (jA = 1, process.env.NODE_ENV === "production" ? mc.exports = H5() : mc.exports = G5()), mc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cg, NA;
function K5() {
  if (NA) return cg;
  NA = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var u = {}, s = 0; s < 10; s++)
        u["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(u).map(function(d) {
        return u[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return cg = i() ? Object.assign : function(a, u) {
    for (var s, l = n(a), f, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var h in s)
        t.call(s, h) && (l[h] = s[h]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          r.call(s, f[v]) && (l[f[v]] = s[f[v]]);
      }
    }
    return l;
  }, cg;
}
var lg, DA;
function bb() {
  if (DA) return lg;
  DA = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lg = e, lg;
}
var fg, LA;
function P2() {
  return LA || (LA = 1, fg = Function.call.bind(Object.prototype.hasOwnProperty)), fg;
}
var dg, qA;
function V5() {
  if (qA) return dg;
  qA = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ bb(), r = {}, n = /* @__PURE__ */ P2();
    e = function(a) {
      var u = "Warning: " + a;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function i(a, u, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            h = a[d](u, d, l, s, null, t);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = f ? f() : "";
            e(
              "Failed " + s + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dg = i, dg;
}
var hg, BA;
function Y5() {
  if (BA) return hg;
  BA = 1;
  var e = A2(), t = K5(), r = /* @__PURE__ */ bb(), n = /* @__PURE__ */ P2(), i = /* @__PURE__ */ V5(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return hg = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(H) {
      var X = H && (f && H[f] || H[d]);
      if (typeof X == "function")
        return X;
    }
    var v = "<<anonymous>>", g = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: O(),
      arrayOf: A,
      element: _(),
      elementType: m(),
      instanceOf: E,
      node: L(),
      objectOf: I,
      oneOf: T,
      oneOfType: B,
      shape: j,
      exact: q
    };
    function x(H, X) {
      return H === X ? H !== 0 || 1 / H === 1 / X : H !== H && X !== X;
    }
    function y(H, X) {
      this.message = H, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(H) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, ae = 0;
      function ce(ye, be, le, ge, te, se, ve) {
        if (ge = ge || v, se = se || le, ve !== r) {
          if (l) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = ge + ":" + le;
            !X[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + se + "` prop on `" + ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[Ee] = !0, ae++);
          }
        }
        return be[le] == null ? ye ? be[le] === null ? new y("The " + te + " `" + se + "` is marked as required " + ("in `" + ge + "`, but its value is `null`.")) : new y("The " + te + " `" + se + "` is marked as required in " + ("`" + ge + "`, but its value is `undefined`.")) : null : H(be, le, ge, te, se);
      }
      var he = ce.bind(null, !1);
      return he.isRequired = ce.bind(null, !0), he;
    }
    function S(H) {
      function X(ae, ce, he, ye, be, le) {
        var ge = ae[ce], te = U(ge);
        if (te !== H) {
          var se = J(ge);
          return new y(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + se + "` supplied to `" + he + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return b(X);
    }
    function O() {
      return b(u);
    }
    function A(H) {
      function X(ae, ce, he, ye, be) {
        if (typeof H != "function")
          return new y("Property `" + be + "` of component `" + he + "` has invalid PropType notation inside arrayOf.");
        var le = ae[ce];
        if (!Array.isArray(le)) {
          var ge = U(le);
          return new y("Invalid " + ye + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + he + "`, expected an array."));
        }
        for (var te = 0; te < le.length; te++) {
          var se = H(le, te, he, ye, be + "[" + te + "]", r);
          if (se instanceof Error)
            return se;
        }
        return null;
      }
      return b(X);
    }
    function _() {
      function H(X, ae, ce, he, ye) {
        var be = X[ae];
        if (!s(be)) {
          var le = U(be);
          return new y("Invalid " + he + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(H);
    }
    function m() {
      function H(X, ae, ce, he, ye) {
        var be = X[ae];
        if (!e.isValidElementType(be)) {
          var le = U(be);
          return new y("Invalid " + he + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(H);
    }
    function E(H) {
      function X(ae, ce, he, ye, be) {
        if (!(ae[ce] instanceof H)) {
          var le = H.name || v, ge = ue(ae[ce]);
          return new y("Invalid " + ye + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + he + "`, expected ") + ("instance of `" + le + "`."));
        }
        return null;
      }
      return b(X);
    }
    function T(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), u;
      function X(ae, ce, he, ye, be) {
        for (var le = ae[ce], ge = 0; ge < H.length; ge++)
          if (x(le, H[ge]))
            return null;
        var te = JSON.stringify(H, function(ve, k) {
          var Ee = J(k);
          return Ee === "symbol" ? String(k) : k;
        });
        return new y("Invalid " + ye + " `" + be + "` of value `" + String(le) + "` " + ("supplied to `" + he + "`, expected one of " + te + "."));
      }
      return b(X);
    }
    function I(H) {
      function X(ae, ce, he, ye, be) {
        if (typeof H != "function")
          return new y("Property `" + be + "` of component `" + he + "` has invalid PropType notation inside objectOf.");
        var le = ae[ce], ge = U(le);
        if (ge !== "object")
          return new y("Invalid " + ye + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + he + "`, expected an object."));
        for (var te in le)
          if (n(le, te)) {
            var se = H(le, te, he, ye, be + "." + te, r);
            if (se instanceof Error)
              return se;
          }
        return null;
      }
      return b(X);
    }
    function B(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var X = 0; X < H.length; X++) {
        var ae = H[X];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(ae) + " at index " + X + "."
          ), u;
      }
      function ce(he, ye, be, le, ge) {
        for (var te = [], se = 0; se < H.length; se++) {
          var ve = H[se], k = ve(he, ye, be, le, ge, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && te.push(k.data.expectedType);
        }
        var Ee = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new y("Invalid " + le + " `" + ge + "` supplied to " + ("`" + be + "`" + Ee + "."));
      }
      return b(ce);
    }
    function L() {
      function H(X, ae, ce, he, ye) {
        return F(X[ae]) ? null : new y("Invalid " + he + " `" + ye + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
      }
      return b(H);
    }
    function N(H, X, ae, ce, he) {
      return new y(
        (H || "React class") + ": " + X + " type `" + ae + "." + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + he + "`."
      );
    }
    function j(H) {
      function X(ae, ce, he, ye, be) {
        var le = ae[ce], ge = U(le);
        if (ge !== "object")
          return new y("Invalid " + ye + " `" + be + "` of type `" + ge + "` " + ("supplied to `" + he + "`, expected `object`."));
        for (var te in H) {
          var se = H[te];
          if (typeof se != "function")
            return N(he, ye, be, te, J(se));
          var ve = se(le, te, he, ye, be + "." + te, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return b(X);
    }
    function q(H) {
      function X(ae, ce, he, ye, be) {
        var le = ae[ce], ge = U(le);
        if (ge !== "object")
          return new y("Invalid " + ye + " `" + be + "` of type `" + ge + "` " + ("supplied to `" + he + "`, expected `object`."));
        var te = t({}, ae[ce], H);
        for (var se in te) {
          var ve = H[se];
          if (n(H, se) && typeof ve != "function")
            return N(he, ye, be, se, J(ve));
          if (!ve)
            return new y(
              "Invalid " + ye + " `" + be + "` key `" + se + "` supplied to `" + he + "`.\nBad object: " + JSON.stringify(ae[ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var k = ve(le, se, he, ye, be + "." + se, r);
          if (k)
            return k;
        }
        return null;
      }
      return b(X);
    }
    function F(H) {
      switch (typeof H) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !H;
        case "object":
          if (Array.isArray(H))
            return H.every(F);
          if (H === null || s(H))
            return !0;
          var X = h(H);
          if (X) {
            var ae = X.call(H), ce;
            if (X !== H.entries) {
              for (; !(ce = ae.next()).done; )
                if (!F(ce.value))
                  return !1;
            } else
              for (; !(ce = ae.next()).done; ) {
                var he = ce.value;
                if (he && !F(he[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(H, X) {
      return H === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function U(H) {
      var X = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : V(X, H) ? "symbol" : X;
    }
    function J(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var X = U(H);
      if (X === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function G(H) {
      var X = J(H);
      switch (X) {
        case "array":
        case "object":
          return "an " + X;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + X;
        default:
          return X;
      }
    }
    function ue(H) {
      return !H.constructor || !H.constructor.name ? v : H.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, hg;
}
var pg, FA;
function X5() {
  if (FA) return pg;
  FA = 1;
  var e = /* @__PURE__ */ bb();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, pg = function() {
    function n(u, s, l, f, d, h) {
      if (h !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, pg;
}
var WA;
function Z5() {
  if (WA) return yc.exports;
  if (WA = 1, process.env.NODE_ENV !== "production") {
    var e = A2(), t = !0;
    yc.exports = /* @__PURE__ */ Y5()(e.isElement, t);
  } else
    yc.exports = /* @__PURE__ */ X5()();
  return yc.exports;
}
var J5 = /* @__PURE__ */ Z5();
const ke = /* @__PURE__ */ Je(J5);
var Q5 = Object.getOwnPropertyNames, e7 = Object.getOwnPropertySymbols, t7 = Object.prototype.hasOwnProperty;
function zA(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function bc(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, u = a.get(r), s = a.get(n);
    if (u && s)
      return u === n && s === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function UA(e) {
  return Q5(e).concat(e7(e));
}
var E2 = Object.hasOwn || function(e, t) {
  return t7.call(e, t);
};
function xo(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var T2 = "_owner", HA = Object.getOwnPropertyDescriptor, GA = Object.keys;
function r7(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function n7(e, t) {
  return xo(e.getTime(), t.getTime());
}
function KA(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, u, s; (u = i.next()) && !u.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (s = l.next()) && !s.done; ) {
      var h = u.value, v = h[0], g = h[1], x = s.value, y = x[0], b = x[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, b, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function i7(e, t, r) {
  var n = GA(e), i = n.length;
  if (GA(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === T2 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !E2(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function eu(e, t, r) {
  var n = UA(e), i = n.length;
  if (UA(t).length !== i)
    return !1;
  for (var a, u, s; i-- > 0; )
    if (a = n[i], a === T2 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !E2(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (u = HA(e, a), s = HA(t, a), (u || s) && (!u || !s || u.configurable !== s.configurable || u.enumerable !== s.enumerable || u.writable !== s.writable)))
      return !1;
  return !0;
}
function a7(e, t) {
  return xo(e.valueOf(), t.valueOf());
}
function o7(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function VA(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, u; (a = i.next()) && !a.done; ) {
    for (var s = t.values(), l = !1, f = 0; (u = s.next()) && !u.done; )
      !l && !n[f] && (l = r.equals(a.value, u.value, a.value, u.value, e, t, r)) && (n[f] = !0), f++;
    if (!l)
      return !1;
  }
  return !0;
}
function u7(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var s7 = "[object Arguments]", c7 = "[object Boolean]", l7 = "[object Date]", f7 = "[object Map]", d7 = "[object Number]", h7 = "[object Object]", p7 = "[object RegExp]", v7 = "[object Set]", g7 = "[object String]", y7 = Array.isArray, YA = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, XA = Object.assign, m7 = Object.prototype.toString.call.bind(Object.prototype.toString);
function b7(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, u = e.areRegExpsEqual, s = e.areSetsEqual, l = e.areTypedArraysEqual;
  return function(d, h, v) {
    if (d === h)
      return !0;
    if (d == null || h == null || typeof d != "object" || typeof h != "object")
      return d !== d && h !== h;
    var g = d.constructor;
    if (g !== h.constructor)
      return !1;
    if (g === Object)
      return i(d, h, v);
    if (y7(d))
      return t(d, h, v);
    if (YA != null && YA(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return u(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return s(d, h, v);
    var x = m7(d);
    return x === l7 ? r(d, h, v) : x === p7 ? u(d, h, v) : x === f7 ? n(d, h, v) : x === v7 ? s(d, h, v) : x === h7 ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : x === s7 ? i(d, h, v) : x === c7 || x === d7 || x === g7 ? a(d, h, v) : !1;
  };
}
function x7(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? eu : r7,
    areDatesEqual: n7,
    areMapsEqual: n ? zA(KA, eu) : KA,
    areObjectsEqual: n ? eu : i7,
    arePrimitiveWrappersEqual: a7,
    areRegExpsEqual: o7,
    areSetsEqual: n ? zA(VA, eu) : VA,
    areTypedArraysEqual: n ? eu : u7
  };
  if (r && (i = XA({}, i, r(i))), t) {
    var a = bc(i.areArraysEqual), u = bc(i.areMapsEqual), s = bc(i.areObjectsEqual), l = bc(i.areSetsEqual);
    i = XA({}, i, {
      areArraysEqual: a,
      areMapsEqual: u,
      areObjectsEqual: s,
      areSetsEqual: l
    });
  }
  return i;
}
function w7(e) {
  return function(t, r, n, i, a, u, s) {
    return e(t, r, s);
  };
}
function _7(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(l, f) {
      var d = n(), h = d.cache, v = h === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : h, g = d.meta;
      return r(l, f, {
        cache: v,
        equals: i,
        meta: g,
        strict: a
      });
    };
  if (t)
    return function(l, f) {
      return r(l, f, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var u = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(l, f) {
    return r(l, f, u);
  };
}
var O7 = Oi();
Oi({ strict: !0 });
Oi({ circular: !0 });
Oi({
  circular: !0,
  strict: !0
});
Oi({
  createInternalComparator: function() {
    return xo;
  }
});
Oi({
  strict: !0,
  createInternalComparator: function() {
    return xo;
  }
});
Oi({
  circular: !0,
  createInternalComparator: function() {
    return xo;
  }
});
Oi({
  circular: !0,
  createInternalComparator: function() {
    return xo;
  },
  strict: !0
});
function Oi(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, u = a === void 0 ? !1 : a, s = x7(e), l = b7(s), f = n ? n(l) : w7(l);
  return _7({ circular: r, comparator: l, createState: i, equals: f, strict: u });
}
function S7(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function ZA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : S7(i);
  };
  requestAnimationFrame(n);
}
function $y(e) {
  "@babel/helpers - typeof";
  return $y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $y(e);
}
function A7(e) {
  return C7(e) || T7(e) || E7(e) || P7();
}
function P7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E7(e, t) {
  if (e) {
    if (typeof e == "string") return JA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return JA(e, t);
  }
}
function JA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function T7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function C7(e) {
  if (Array.isArray(e)) return e;
}
function M7() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var u = a, s = A7(u), l = s[0], f = s.slice(1);
        if (typeof l == "number") {
          ZA(i.bind(null, f), l);
          return;
        }
        i(l), ZA(i.bind(null, f));
        return;
      }
      $y(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Lu(e) {
  "@babel/helpers - typeof";
  return Lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lu(e);
}
function QA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? QA(Object(r), !0).forEach(function(n) {
      C2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : QA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C2(e, t, r) {
  return t = I7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I7(e) {
  var t = R7(e, "string");
  return Lu(t) === "symbol" ? t : String(t);
}
function R7(e, t) {
  if (Lu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $7 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, k7 = function(t) {
  return t;
}, j7 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, fu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return eP(eP({}, n), {}, C2({}, i, t(i, r[i])));
  }, {});
}, tP = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(j7(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, N7 = process.env.NODE_ENV !== "production", tl = function(t, r, n, i, a, u, s, l) {
  if (N7 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, u, s, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function D7(e, t) {
  return B7(e) || q7(e, t) || M2(e, t) || L7();
}
function L7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function B7(e) {
  if (Array.isArray(e)) return e;
}
function F7(e) {
  return U7(e) || z7(e) || M2(e) || W7();
}
function W7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M2(e, t) {
  if (e) {
    if (typeof e == "string") return ky(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ky(e, t);
  }
}
function z7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function U7(e) {
  if (Array.isArray(e)) return ky(e);
}
function ky(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var rl = 1e-4, I2 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, R2 = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, rP = function(t, r) {
  return function(n) {
    var i = I2(t, r);
    return R2(i, n);
  };
}, H7 = function(t, r) {
  return function(n) {
    var i = I2(t, r), a = [].concat(F7(i.map(function(u, s) {
      return u * s;
    }).slice(1)), [0]);
    return R2(a, n);
  };
}, nP = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], u = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, u = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, u = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, u = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, u = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, u = 0.58, s = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(b) {
            return parseFloat(b);
          }), d = D7(f, 4);
          i = d[0], a = d[1], u = d[2], s = d[3];
        } else
          tl(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  tl([i, u, a, s].every(function(b) {
    return typeof b == "number" && b >= 0 && b <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = rP(i, u), v = rP(a, s), g = H7(i, u), x = function(S) {
    return S > 1 ? 1 : S < 0 ? 0 : S;
  }, y = function(S) {
    for (var O = S > 1 ? 1 : S, A = O, _ = 0; _ < 8; ++_) {
      var m = h(A) - O, E = g(A);
      if (Math.abs(m - O) < rl || E < rl)
        return v(A);
      A = x(A - m / E);
    }
    return v(A);
  };
  return y.isStepper = !1, y;
}, G7 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, u = t.dt, s = u === void 0 ? 17 : u, l = function(d, h, v) {
    var g = -(d - h) * n, x = v * a, y = v + (g - x) * s / 1e3, b = v * s / 1e3 + d;
    return Math.abs(b - h) < rl && Math.abs(y) < rl ? [h, 0] : [b, y];
  };
  return l.isStepper = !0, l.dt = s, l;
}, K7 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return nP(i);
      case "spring":
        return G7();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return nP(i);
        tl(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (tl(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function qu(e) {
  "@babel/helpers - typeof";
  return qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qu(e);
}
function iP(e) {
  return X7(e) || Y7(e) || $2(e) || V7();
}
function V7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function X7(e) {
  if (Array.isArray(e)) return Ny(e);
}
function aP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aP(Object(r), !0).forEach(function(n) {
      jy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jy(e, t, r) {
  return t = Z7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z7(e) {
  var t = J7(e, "string");
  return qu(t) === "symbol" ? t : String(t);
}
function J7(e, t) {
  if (qu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q7(e, t) {
  return r9(e) || t9(e, t) || $2(e, t) || e9();
}
function e9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $2(e, t) {
  if (e) {
    if (typeof e == "string") return Ny(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ny(e, t);
  }
}
function Ny(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function t9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function r9(e) {
  if (Array.isArray(e)) return e;
}
var nl = function(t, r, n) {
  return t + (r - t) * n;
}, Dy = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, n9 = function e(t, r, n) {
  var i = fu(function(a, u) {
    if (Dy(u)) {
      var s = t(u.from, u.to, u.velocity), l = Q7(s, 2), f = l[0], d = l[1];
      return kt(kt({}, u), {}, {
        from: f,
        velocity: d
      });
    }
    return u;
  }, r);
  return n < 1 ? fu(function(a, u) {
    return Dy(u) ? kt(kt({}, u), {}, {
      velocity: nl(u.velocity, i[a].velocity, n),
      from: nl(u.from, i[a].from, n)
    }) : u;
  }, r) : e(t, i, n - 1);
};
const i9 = function(e, t, r, n, i) {
  var a = $7(e, t), u = a.reduce(function(b, S) {
    return kt(kt({}, b), {}, jy({}, S, [e[S], t[S]]));
  }, {}), s = a.reduce(function(b, S) {
    return kt(kt({}, b), {}, jy({}, S, {
      from: e[S],
      velocity: 0,
      to: t[S]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return fu(function(S, O) {
      return O.from;
    }, s);
  }, g = function() {
    return !Object.values(s).filter(Dy).length;
  }, x = function(S) {
    f || (f = S);
    var O = S - f, A = O / r.dt;
    s = n9(r, s, A), i(kt(kt(kt({}, e), t), v())), f = S, g() || (l = requestAnimationFrame(h));
  }, y = function(S) {
    d || (d = S);
    var O = (S - d) / n, A = fu(function(m, E) {
      return nl.apply(void 0, iP(E).concat([r(O)]));
    }, u);
    if (i(kt(kt(kt({}, e), t), A)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = fu(function(m, E) {
        return nl.apply(void 0, iP(E).concat([r(1)]));
      }, u);
      i(kt(kt(kt({}, e), t), _));
    }
  };
  return h = r.isStepper ? x : y, function() {
    return requestAnimationFrame(h), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Va(e) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e);
}
var a9 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function o9(e, t) {
  if (e == null) return {};
  var r = u9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function u9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vg(e) {
  return f9(e) || l9(e) || c9(e) || s9();
}
function s9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c9(e, t) {
  if (e) {
    if (typeof e == "string") return Ly(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ly(e, t);
  }
}
function l9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function f9(e) {
  if (Array.isArray(e)) return Ly(e);
}
function Ly(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oP(Object(r), !0).forEach(function(n) {
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iu(e, t, r) {
  return t = k2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, k2(n.key), n);
  }
}
function p9(e, t, r) {
  return t && h9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function k2(e) {
  var t = v9(e, "string");
  return Va(t) === "symbol" ? t : String(t);
}
function v9(e, t) {
  if (Va(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Va(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qy(e, t);
}
function qy(e, t) {
  return qy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qy(e, t);
}
function y9(e) {
  var t = m9();
  return function() {
    var n = il(e), i;
    if (t) {
      var a = il(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return By(this, i);
  };
}
function By(e, t) {
  if (t && (Va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fy(e);
}
function Fy(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m9() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function il(e) {
  return il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, il(e);
}
var Jr = /* @__PURE__ */ function(e) {
  g9(r, e);
  var t = y9(r);
  function r(n, i) {
    var a;
    d9(this, r), a = t.call(this, n, i);
    var u = a.props, s = u.isActive, l = u.attributeName, f = u.from, d = u.to, h = u.steps, v = u.children, g = u.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Fy(a)), a.changeStyle = a.changeStyle.bind(Fy(a)), !s || g <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), By(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, By(a);
      a.state = {
        style: l ? iu({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return p9(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, u = i.canBegin;
      this.mounted = !0, !(!a || !u) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, u = a.isActive, s = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, d = a.to, h = a.from, v = this.state.style;
      if (s) {
        if (!u) {
          var g = {
            style: l ? iu({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!(O7(i.to, d) && i.canBegin && i.isActive)) {
          var x = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = x || f ? h : i.to;
          if (this.state && v) {
            var b = {
              style: l ? iu({}, l, y) : y
            };
            (l && v[l] !== y || !l && v !== y) && this.setState(b);
          }
          this.runAnimation(Ur(Ur({}, this.props), {}, {
            from: y,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, u = i.from, s = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = i9(u, s, K7(f), l, this.changeStyle), x = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, x, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, u = i.steps, s = i.begin, l = i.onAnimationStart, f = u[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, b, S) {
        if (S === 0)
          return y;
        var O = b.duration, A = b.easing, _ = A === void 0 ? "ease" : A, m = b.style, E = b.properties, T = b.onAnimationEnd, I = S > 0 ? u[S - 1] : b, B = E || Object.keys(m);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(vg(y), [a.runJSAnimation.bind(a, {
            from: I.style,
            to: m,
            duration: O,
            easing: _
          }), O]);
        var L = tP(B, O, _), N = Ur(Ur(Ur({}, I.style), m), {}, {
          transition: L
        });
        return [].concat(vg(y), [N, O, T]).filter(k7);
      };
      return this.manager.start([l].concat(vg(u.reduce(g, [d, Math.max(v, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = M7());
      var a = i.begin, u = i.duration, s = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, x = this.manager;
      if (this.unSubscribe = x.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = s ? iu({}, s, l) : l, b = tP(Object.keys(y), u, f);
      x.start([d, a, Ur(Ur({}, y), {}, {
        transition: b
      }), u, h]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var u = i.duration;
      i.attributeName, i.easing;
      var s = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = o9(i, a9), f = Vi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!s || f === 0 || u <= 0)
        return a;
      var h = function(g) {
        var x = g.props, y = x.style, b = y === void 0 ? {} : y, S = x.className, O = /* @__PURE__ */ Ot(g, Ur(Ur({}, l), {}, {
          style: Ur(Ur({}, b), d),
          className: S
        }));
        return O;
      };
      return f === 1 ? h(Vi.only(a)) : /* @__PURE__ */ $.createElement("div", null, Vi.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Dr);
Jr.displayName = "Animate";
Jr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Jr.propTypes = {
  from: ke.oneOfType([ke.object, ke.string]),
  to: ke.oneOfType([ke.object, ke.string]),
  attributeName: ke.string,
  // animation duration
  duration: ke.number,
  begin: ke.number,
  easing: ke.oneOfType([ke.string, ke.func]),
  steps: ke.arrayOf(ke.shape({
    duration: ke.number.isRequired,
    style: ke.object.isRequired,
    easing: ke.oneOfType([ke.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ke.func]),
    // transition css properties(dash case), optional
    properties: ke.arrayOf("string"),
    onAnimationEnd: ke.func
  })),
  children: ke.oneOfType([ke.node, ke.func]),
  isActive: ke.bool,
  canBegin: ke.bool,
  onAnimationEnd: ke.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: ke.bool,
  onAnimationStart: ke.func,
  onAnimationReStart: ke.func
};
ke.object, ke.object, ke.object, ke.element;
ke.object, ke.object, ke.object, ke.oneOfType([ke.array, ke.element]), ke.any;
function Bu(e) {
  "@babel/helpers - typeof";
  return Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bu(e);
}
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, al.apply(this, arguments);
}
function b9(e, t) {
  return O9(e) || _9(e, t) || w9(e, t) || x9();
}
function x9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w9(e, t) {
  if (e) {
    if (typeof e == "string") return uP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uP(e, t);
  }
}
function uP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function O9(e) {
  if (Array.isArray(e)) return e;
}
function sP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sP(Object(r), !0).forEach(function(n) {
      S9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S9(e, t, r) {
  return t = A9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A9(e) {
  var t = P9(e, "string");
  return Bu(t) == "symbol" ? t : String(t);
}
function P9(e, t) {
  if (Bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lP = function(t, r, n, i, a) {
  var u = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (u > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > u ? u : a[v];
    d = "M".concat(t, ",").concat(r + s * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + s * h[1])), d += "L ".concat(t + n, ",").concat(r + i - s * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - s * h[3])), d += "Z";
  } else if (u > 0 && a === +a && a > 0) {
    var x = Math.min(u, a);
    d = "M ".concat(t, ",").concat(r + s * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + l * x, ",").concat(r, `
            L `).concat(t + n - l * x, ",").concat(r, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + s * x, `
            L `).concat(t + n, ",").concat(r + i - s * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n - l * x, ",").concat(r + i, `
            L `).concat(t + l * x, ",").concat(r + i, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - s * x, " Z");
  } else
    d = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return d;
}, E9 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, u = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + s), d = Math.max(a, a + s), h = Math.min(u, u + l), v = Math.max(u, u + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, T9 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, xb = function(t) {
  var r = cP(cP({}, T9), t), n = Zr(), i = $r(-1), a = b9(i, 2), u = a[0], s = a[1];
  kr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && s(_);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, g = r.className, x = r.animationEasing, y = r.animationDuration, b = r.animationBegin, S = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var A = Ie("recharts-rectangle", g);
  return O ? /* @__PURE__ */ $.createElement(Jr, {
    canBegin: u > 0,
    from: {
      width: d,
      height: h,
      x: l,
      y: f
    },
    to: {
      width: d,
      height: h,
      x: l,
      y: f
    },
    duration: y,
    animationEasing: x,
    isActive: O
  }, function(_) {
    var m = _.width, E = _.height, T = _.x, I = _.y;
    return /* @__PURE__ */ $.createElement(Jr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      isActive: S,
      easing: x
    }, /* @__PURE__ */ $.createElement("path", al({}, xe(r, !0), {
      className: A,
      d: lP(T, I, m, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ $.createElement("path", al({}, xe(r, !0), {
    className: A,
    d: lP(l, f, d, h, v)
  }));
}, C9 = ["points", "className", "baseLinePoints", "connectNulls"];
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
function M9(e, t) {
  if (e == null) return {};
  var r = I9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fP(e) {
  return j9(e) || k9(e) || $9(e) || R9();
}
function R9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $9(e, t) {
  if (e) {
    if (typeof e == "string") return Wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wy(e, t);
  }
}
function k9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function j9(e) {
  if (Array.isArray(e)) return Wy(e);
}
function Wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var dP = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, N9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    dP(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), dP(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, du = function(t, r) {
  var n = N9(t);
  r && (n = [n.reduce(function(a, u) {
    return [].concat(fP(a), fP(u));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(u, s, l) {
      return "".concat(u).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, D9 = function(t, r, n) {
  var i = du(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(du(r.reverse(), n).slice(1));
}, L9 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, u = M9(t, C9);
  if (!r || !r.length)
    return null;
  var s = Ie("recharts-polygon", n);
  if (i && i.length) {
    var l = u.stroke && u.stroke !== "none", f = D9(r, i, a);
    return /* @__PURE__ */ $.createElement("g", {
      className: s
    }, /* @__PURE__ */ $.createElement("path", Ma({}, xe(u, !0), {
      fill: f.slice(-1) === "Z" ? u.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ $.createElement("path", Ma({}, xe(u, !0), {
      fill: "none",
      d: du(r, a)
    })) : null, l ? /* @__PURE__ */ $.createElement("path", Ma({}, xe(u, !0), {
      fill: "none",
      d: du(i, a)
    })) : null);
  }
  var d = du(r, a);
  return /* @__PURE__ */ $.createElement("path", Ma({}, xe(u, !0), {
    fill: d.slice(-1) === "Z" ? u.fill : "none",
    className: s,
    d
  }));
};
function zy() {
  return zy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zy.apply(this, arguments);
}
var cs = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, u = Ie("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ $.createElement("circle", zy({}, xe(t, !1), Tc(t), {
    className: u,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Fu(e) {
  "@babel/helpers - typeof";
  return Fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fu(e);
}
var q9 = ["x", "y", "top", "left", "width", "height", "className"];
function Uy() {
  return Uy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uy.apply(this, arguments);
}
function hP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hP(Object(r), !0).forEach(function(n) {
      F9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F9(e, t, r) {
  return t = W9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W9(e) {
  var t = z9(e, "string");
  return Fu(t) == "symbol" ? t : String(t);
}
function z9(e, t) {
  if (Fu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U9(e, t) {
  if (e == null) return {};
  var r = H9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var G9 = function(t, r, n, i, a, u) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(u, ",").concat(r, "h").concat(n);
}, K9 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.top, s = u === void 0 ? 0 : u, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, x = t.className, y = U9(t, q9), b = B9({
    x: n,
    y: a,
    top: s,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(s) || !oe(f) ? null : /* @__PURE__ */ $.createElement("path", Uy({}, xe(b, !0), {
    className: Ie("recharts-cross", x),
    d: G9(n, a, h, g, s, f)
  }));
}, gg, pP;
function V9() {
  if (pP) return gg;
  pP = 1;
  var e = Hl(), t = YC(), r = gn();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return gg = n, gg;
}
var Y9 = V9();
const X9 = /* @__PURE__ */ Je(Y9);
var yg, vP;
function Z9() {
  if (vP) return yg;
  vP = 1;
  var e = Hl(), t = gn(), r = XC();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return yg = n, yg;
}
var J9 = Z9();
const Q9 = /* @__PURE__ */ Je(J9);
var eH = ["cx", "cy", "angle", "ticks", "axisLine"], tH = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
}
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hu.apply(this, arguments);
}
function gP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gP(Object(r), !0).forEach(function(n) {
      Yl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yP(e, t) {
  if (e == null) return {};
  var r = rH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rH(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function nH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, N2(n.key), n);
  }
}
function iH(e, t, r) {
  return t && mP(e.prototype, t), r && mP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aH(e, t, r) {
  return t = ol(t), oH(e, j2() ? Reflect.construct(t, r || [], ol(e).constructor) : t.apply(e, r));
}
function oH(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uH(e);
}
function uH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j2 = function() {
    return !!e;
  })();
}
function ol(e) {
  return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ol(e);
}
function sH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hy(e, t);
}
function Hy(e, t) {
  return Hy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hy(e, t);
}
function Yl(e, t, r) {
  return t = N2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N2(e) {
  var t = cH(e, "string");
  return Ya(t) == "symbol" ? t : String(t);
}
function cH(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xl = /* @__PURE__ */ function(e) {
  sH(t, e);
  function t() {
    return nH(this, t), aH(this, t, arguments);
  }
  return iH(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, u = a.angle, s = a.cx, l = a.cy;
        return it(s, l, i, u);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, s = n.ticks, l = X9(s, function(d) {
        return d.coordinate || 0;
      }), f = Q9(s, function(d) {
        return d.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: u,
        endAngle: u,
        innerRadius: f.coordinate || 0,
        outerRadius: l.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, s = n.ticks, l = n.axisLine, f = yP(n, eH), d = s.reduce(function(x, y) {
        return [Math.min(x[0], y.coordinate), Math.max(x[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], u), v = it(i, a, d[1], u), g = Ni(Ni(Ni({}, xe(f, !1)), {}, {
        fill: "none"
      }, xe(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ $.createElement("line", hu({
        className: "recharts-polar-radius-axis-line"
      }, g));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, s = i.angle, l = i.tickFormatter, f = i.stroke, d = yP(i, tH), h = this.getTickTextAnchor(), v = xe(d, !1), g = xe(u, !1), x = a.map(function(y, b) {
        var S = n.getTickValueCoord(y), O = Ni(Ni(Ni(Ni({
          textAnchor: h,
          transform: "rotate(".concat(90 - s, ", ").concat(S.x, ", ").concat(S.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, g), {}, {
          index: b
        }, S), {}, {
          payload: y
        });
        return /* @__PURE__ */ $.createElement(Le, hu({
          className: Ie("recharts-polar-radius-axis-tick", w2(u)),
          key: "tick-".concat(y.coordinate)
        }, Ji(n.props, y, b)), t.renderTickItem(u, O, l ? l(y.value, b) : y.value));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, x);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, u = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), u && this.renderTicks(), At.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ $.isValidElement(n) ? u = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ $.createElement(vi, hu({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Dr);
Yl(Xl, "displayName", "PolarRadiusAxis");
Yl(Xl, "axisType", "radiusAxis");
Yl(Xl, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
}
function Fi() {
  return Fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fi.apply(this, arguments);
}
function bP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bP(Object(r), !0).forEach(function(n) {
      Zl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, L2(n.key), n);
  }
}
function fH(e, t, r) {
  return t && xP(e.prototype, t), r && xP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dH(e, t, r) {
  return t = ul(t), hH(e, D2() ? Reflect.construct(t, r || [], ul(e).constructor) : t.apply(e, r));
}
function hH(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pH(e);
}
function pH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (D2 = function() {
    return !!e;
  })();
}
function ul(e) {
  return ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ul(e);
}
function vH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gy(e, t);
}
function Gy(e, t) {
  return Gy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gy(e, t);
}
function Zl(e, t, r) {
  return t = L2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L2(e) {
  var t = gH(e, "string");
  return Xa(t) == "symbol" ? t : String(t);
}
function gH(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yH = Math.PI / 180, wP = 1e-5, Jl = /* @__PURE__ */ function(e) {
  vH(t, e);
  function t() {
    return lH(this, t), dH(this, t, arguments);
  }
  return fH(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, u = i.cy, s = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = it(a, u, s, n.coordinate), v = it(a, u, s + (l === "inner" ? -1 : 1) * d, n.coordinate);
        return {
          x1: h.x,
          y1: h.y,
          x2: v.x,
          y2: v.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * yH), u;
      return a > wP ? u = i === "outer" ? "start" : "end" : a < -wP ? u = i === "outer" ? "end" : "start" : u = "middle", u;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, u = n.radius, s = n.axisLine, l = n.axisLineType, f = Di(Di({}, xe(this.props, !1)), {}, {
        fill: "none"
      }, xe(s, !1));
      if (l === "circle")
        return /* @__PURE__ */ $.createElement(cs, Fi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: u
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, u, v.coordinate);
      });
      return /* @__PURE__ */ $.createElement(L9, Fi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, s = i.tickLine, l = i.tickFormatter, f = i.stroke, d = xe(this.props, !1), h = xe(u, !1), v = Di(Di({}, d), {}, {
        fill: "none"
      }, xe(s, !1)), g = a.map(function(x, y) {
        var b = n.getTickLineCoord(x), S = n.getTickTextAnchor(x), O = Di(Di(Di({
          textAnchor: S
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: y,
          payload: x,
          x: b.x2,
          y: b.y2
        });
        return /* @__PURE__ */ $.createElement(Le, Fi({
          className: Ie("recharts-polar-angle-axis-tick", w2(u)),
          key: "tick-".concat(x.coordinate)
        }, Ji(n.props, x, y)), s && /* @__PURE__ */ $.createElement("line", Fi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, b)), u && t.renderTickItem(u, O, l ? l(x.value, y) : x.value));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-polar-angle-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, u = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-polar-angle-axis", this.props.className)
      }, u && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ $.isValidElement(n) ? u = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ $.createElement(vi, Fi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Dr);
Zl(Jl, "displayName", "PolarAngleAxis");
Zl(Jl, "axisType", "angleAxis");
Zl(Jl, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var mg, _P;
function mH() {
  if (_P) return mg;
  _P = 1;
  var e = KT(), t = e(Object.getPrototypeOf, Object);
  return mg = t, mg;
}
var bg, OP;
function bH() {
  if (OP) return bg;
  OP = 1;
  var e = zn(), t = mH(), r = Un(), n = "[object Object]", i = Function.prototype, a = Object.prototype, u = i.toString, s = a.hasOwnProperty, l = u.call(Object);
  function f(d) {
    if (!r(d) || e(d) != n)
      return !1;
    var h = t(d);
    if (h === null)
      return !0;
    var v = s.call(h, "constructor") && h.constructor;
    return typeof v == "function" && v instanceof v && u.call(v) == l;
  }
  return bg = f, bg;
}
var xH = bH();
const wH = /* @__PURE__ */ Je(xH);
var xg, SP;
function _H() {
  if (SP) return xg;
  SP = 1;
  var e = zn(), t = Un(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return xg = n, xg;
}
var OH = _H();
const SH = /* @__PURE__ */ Je(OH);
function Wu(e) {
  "@babel/helpers - typeof";
  return Wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wu(e);
}
function sl() {
  return sl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sl.apply(this, arguments);
}
function AH(e, t) {
  return CH(e) || TH(e, t) || EH(e, t) || PH();
}
function PH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EH(e, t) {
  if (e) {
    if (typeof e == "string") return AP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return AP(e, t);
  }
}
function AP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function CH(e) {
  if (Array.isArray(e)) return e;
}
function PP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? PP(Object(r), !0).forEach(function(n) {
      MH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MH(e, t, r) {
  return t = IH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IH(e) {
  var t = RH(e, "string");
  return Wu(t) == "symbol" ? t : String(t);
}
function RH(e, t) {
  if (Wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var TP = function(t, r, n, i, a) {
  var u = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - u / 2, ",").concat(r + a), s += "L ".concat(t + n - u / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, $H = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, kH = function(t) {
  var r = EP(EP({}, $H), t), n = Zr(), i = $r(-1), a = AH(i, 2), u = a[0], s = a[1];
  kr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var A = n.current.getTotalLength();
        A && s(A);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, g = r.className, x = r.animationEasing, y = r.animationDuration, b = r.animationBegin, S = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Ie("recharts-trapezoid", g);
  return S ? /* @__PURE__ */ $.createElement(Jr, {
    canBegin: u > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: v,
      x: l,
      y: f
    },
    to: {
      upperWidth: d,
      lowerWidth: h,
      height: v,
      x: l,
      y: f
    },
    duration: y,
    animationEasing: x,
    isActive: S
  }, function(A) {
    var _ = A.upperWidth, m = A.lowerWidth, E = A.height, T = A.x, I = A.y;
    return /* @__PURE__ */ $.createElement(Jr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      easing: x
    }, /* @__PURE__ */ $.createElement("path", sl({}, xe(r, !0), {
      className: O,
      d: TP(T, I, _, m, E),
      ref: n
    })));
  }) : /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("path", sl({}, xe(r, !0), {
    className: O,
    d: TP(l, f, d, h, v)
  })));
}, jH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function zu(e) {
  "@babel/helpers - typeof";
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
}
function NH(e, t) {
  if (e == null) return {};
  var r = DH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DH(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function CP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? CP(Object(r), !0).forEach(function(n) {
      LH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : CP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LH(e, t, r) {
  return t = qH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qH(e) {
  var t = BH(e, "string");
  return zu(t) == "symbol" ? t : String(t);
}
function BH(e, t) {
  if (zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FH(e, t) {
  return cl(cl({}, t), e);
}
function WH(e, t) {
  return e === "symbols";
}
function MP(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ $.createElement(xb, r);
    case "trapezoid":
      return /* @__PURE__ */ $.createElement(kH, r);
    case "sector":
      return /* @__PURE__ */ $.createElement(S2, r);
    case "symbols":
      if (WH(t))
        return /* @__PURE__ */ $.createElement(Dm, r);
      break;
    default:
      return null;
  }
}
function zH(e) {
  return /* @__PURE__ */ Vr(e) ? e.props : e;
}
function q2(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? FH : n, a = e.activeClassName, u = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = NH(e, jH), f;
  if (/* @__PURE__ */ Vr(t))
    f = /* @__PURE__ */ Ot(t, cl(cl({}, l), zH(t)));
  else if (Pe(t))
    f = t(l);
  else if (wH(t) && !SH(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ $.createElement(MP, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ $.createElement(MP, {
      shapeType: r,
      elementProps: h
    });
  }
  return s ? /* @__PURE__ */ $.createElement(Le, {
    className: u
  }, f) : f;
}
function Ql(e, t) {
  return t != null && "trapezoids" in e.props;
}
function ef(e, t) {
  return t != null && "sectors" in e.props;
}
function Uu(e, t) {
  return t != null && "points" in e.props;
}
function UH(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function HH(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function GH(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function KH(e, t) {
  var r;
  return Ql(e, t) ? r = UH : ef(e, t) ? r = HH : Uu(e, t) && (r = GH), r;
}
function VH(e, t) {
  var r;
  return Ql(e, t) ? r = "trapezoids" : ef(e, t) ? r = "sectors" : Uu(e, t) && (r = "points"), r;
}
function YH(e, t) {
  if (Ql(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (ef(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Uu(e, t) ? t.payload : {};
}
function XH(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = VH(r, t), a = YH(r, t), u = n.filter(function(l, f) {
    var d = Qi(a, l), h = r.props[i].filter(function(x) {
      var y = KH(r, t);
      return y(x, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), s = n.indexOf(u[u.length - 1]);
  return s;
}
var Ac;
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
}
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}
function IP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? IP(Object(r), !0).forEach(function(n) {
      Cr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function RP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, F2(n.key), n);
  }
}
function JH(e, t, r) {
  return t && RP(e.prototype, t), r && RP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QH(e, t, r) {
  return t = ll(t), eG(e, B2() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function eG(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ta(e);
}
function B2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (B2 = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ky(e, t);
}
function Ky(e, t) {
  return Ky = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ky(e, t);
}
function Cr(e, t, r) {
  return t = F2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F2(e) {
  var t = rG(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function rG(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gn = /* @__PURE__ */ function(e) {
  tG(t, e);
  function t(r) {
    var n;
    return ZH(this, t), n = QH(this, t, [r]), Cr(Ta(n), "pieRef", null), Cr(Ta(n), "sectorRefs", []), Cr(Ta(n), "id", aa("recharts-pie-")), Cr(Ta(n), "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Pe(i) && i();
    }), Cr(Ta(n), "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Pe(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return JH(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, u = a.label, s = a.labelLine, l = a.dataKey, f = a.valueKey, d = xe(this.props, !1), h = xe(u, !1), v = xe(s, !1), g = u && u.offsetRadius || 20, x = n.map(function(y, b) {
        var S = (y.startAngle + y.endAngle) / 2, O = it(y.cx, y.cy, y.outerRadius + g, S), A = ft(ft(ft(ft({}, d), y), {}, {
          stroke: "none"
        }, h), {}, {
          index: b,
          textAnchor: t.getTextAnchor(O.x, y.cx)
        }, O), _ = ft(ft(ft(ft({}, d), y), {}, {
          fill: "none",
          stroke: y.fill
        }, v), {}, {
          index: b,
          points: [it(y.cx, y.cy, y.outerRadius, S), O],
          key: "line"
        }), m = l;
        return Te(l) && Te(f) ? m = "value" : Te(l) && (m = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ $.createElement(Le, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(b)
        }, s && t.renderLabelLineItem(s, _), t.renderLabelItem(u, A, mt(y, m)));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-pie-labels"
      }, x);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? u : v, x = ft(ft({}, f), {}, {
          stroke: s ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ $.createElement(Le, Ia({
          ref: function(b) {
            b && !i.sectorRefs.includes(b) && i.sectorRefs.push(b);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Ji(i.props, f, d), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(d)
        }), /* @__PURE__ */ $.createElement(q2, Ia({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, x)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, u = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ $.createElement(Jr, {
        begin: s,
        duration: l,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(d, "-").concat(g),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(x) {
        var y = x.t, b = [], S = a && a[0], O = S.startAngle;
        return a.forEach(function(A, _) {
          var m = v && v[_], E = _ > 0 ? pr(A, "paddingAngle", 0) : 0;
          if (m) {
            var T = St(m.endAngle - m.startAngle, A.endAngle - A.startAngle), I = ft(ft({}, A), {}, {
              startAngle: O + E,
              endAngle: O + T(y) + E
            });
            b.push(I), O = I.endAngle;
          } else {
            var B = A.endAngle, L = A.startAngle, N = St(0, B - L), j = N(y), q = ft(ft({}, A), {}, {
              startAngle: O + E,
              endAngle: O + j + E
            });
            b.push(q), O = q.endAngle;
          }
        }), /* @__PURE__ */ $.createElement(Le, null, n.renderSectorsStatically(b));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var u = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[u].focus(), i.setState({
                sectorToFocus: u
              });
              break;
            }
            case "ArrowRight": {
              var s = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, u = this.state.prevSectors;
      return a && i && i.length && (!u || !Qi(u, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, u = i.sectors, s = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, x = this.state.isAnimationFinished;
      if (a || !u || !u.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Ie("recharts-pie", s);
      return /* @__PURE__ */ $.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(S) {
          n.pieRef = S;
        }
      }, this.renderSectors(), l && this.renderLabels(u), At.renderCallByParent(this.props, null, !1), (!g || x) && Rr.renderCallByParent(this.props, u, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i) {
      if (/* @__PURE__ */ $.isValidElement(n))
        return /* @__PURE__ */ $.cloneElement(n, i);
      if (Pe(n))
        return n(i);
      var a = Ie("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ $.createElement(Zi, Ia({}, i, {
        type: "linear",
        className: a
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ $.isValidElement(n))
        return /* @__PURE__ */ $.cloneElement(n, i);
      var u = a;
      if (Pe(n) && (u = n(i), /* @__PURE__ */ $.isValidElement(u)))
        return u;
      var s = Ie("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ $.createElement(vi, Ia({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), u);
    }
  }]), t;
}(Dr);
Ac = Gn;
Cr(Gn, "displayName", "Pie");
Cr(Gn, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Xr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Cr(Gn, "parseDeltaAngle", function(e, t) {
  var r = Ut(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Cr(Gn, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = xe(e.props, !1), a = vr(n, Km);
  return r && r.length ? r.map(function(u, s) {
    return ft(ft(ft({
      payload: u
    }, i), u), a && a[s] && a[s].props);
  }) : a && a.length ? a.map(function(u) {
    return ft(ft({}, i), u.props);
  }) : [];
});
Cr(Gn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, u = x2(i, a), s = n + Ht(e.props.cx, i, i / 2), l = r + Ht(e.props.cy, a, a / 2), f = Ht(e.props.innerRadius, u, 0), d = Ht(e.props.outerRadius, u, u * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Cr(Gn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Ac.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, u = i.startAngle, s = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), x = Ac.parseCoordinateOfPie(t, r), y = Ac.parseDeltaAngle(u, s), b = Math.abs(y), S = f;
  Te(f) && Te(h) ? (Yr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), S = "value") : Te(f) && (Yr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), S = h);
  var O = n.filter(function(I) {
    return mt(I, S, 0) !== 0;
  }).length, A = (b >= 360 ? O : O - 1) * l, _ = b - O * g - A, m = n.reduce(function(I, B) {
    var L = mt(B, S, 0);
    return I + (oe(L) ? L : 0);
  }, 0), E;
  if (m > 0) {
    var T;
    E = n.map(function(I, B) {
      var L = mt(I, S, 0), N = mt(I, d, B), j = (oe(L) ? L : 0) / m, q;
      B ? q = T.endAngle + Ut(y) * l * (L !== 0 ? 1 : 0) : q = u;
      var F = q + Ut(y) * ((L !== 0 ? g : 0) + j * _), V = (q + F) / 2, U = (x.innerRadius + x.outerRadius) / 2, J = [{
        name: N,
        value: L,
        payload: I,
        dataKey: S,
        type: v
      }], G = it(x.cx, x.cy, U, V);
      return T = ft(ft(ft({
        percent: j,
        cornerRadius: a,
        name: N,
        tooltipPayload: J,
        midAngle: V,
        middleRadius: U,
        tooltipPosition: G
      }, I), x), {}, {
        value: mt(I, S),
        startAngle: q,
        endAngle: F,
        payload: I,
        paddingAngle: Ut(y) * l
      }), T;
    });
  }
  return ft(ft({}, x), {}, {
    sectors: E,
    data: n
  });
});
var wg, $P;
function nG() {
  if ($P) return wg;
  $P = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, u) {
    for (var s = -1, l = t(e((i - n) / (a || 1)), 0), f = Array(l); l--; )
      f[u ? l : ++s] = n, n += a;
    return f;
  }
  return wg = r, wg;
}
var _g, kP;
function W2() {
  if (kP) return _g;
  kP = 1;
  var e = lC(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return _g = n, _g;
}
var Og, jP;
function iG() {
  if (jP) return Og;
  jP = 1;
  var e = nG(), t = Ll(), r = W2();
  function n(i) {
    return function(a, u, s) {
      return s && typeof s != "number" && t(a, u, s) && (u = s = void 0), a = r(a), u === void 0 ? (u = a, a = 0) : u = r(u), s = s === void 0 ? a < u ? 1 : -1 : r(s), e(a, u, s, i);
    };
  }
  return Og = n, Og;
}
var Sg, NP;
function aG() {
  if (NP) return Sg;
  NP = 1;
  var e = iG(), t = e();
  return Sg = t, Sg;
}
var oG = aG();
const fl = /* @__PURE__ */ Je(oG);
function Hu(e) {
  "@babel/helpers - typeof";
  return Hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hu(e);
}
function DP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function LP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? DP(Object(r), !0).forEach(function(n) {
      z2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z2(e, t, r) {
  return t = uG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uG(e) {
  var t = sG(e, "string");
  return Hu(t) == "symbol" ? t : String(t);
}
function sG(e, t) {
  if (Hu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cG = ["Webkit", "Moz", "O", "ms"], lG = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = cG.reduce(function(a, u) {
    return LP(LP({}, a), {}, z2({}, u + n, r));
  }, {});
  return i[t] = r, i;
};
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
function dl() {
  return dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dl.apply(this, arguments);
}
function qP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ag(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qP(Object(r), !0).forEach(function(n) {
      lr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, H2(n.key), n);
  }
}
function dG(e, t, r) {
  return t && BP(e.prototype, t), r && BP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hG(e, t, r) {
  return t = hl(t), pG(e, U2() ? Reflect.construct(t, r || [], hl(e).constructor) : t.apply(e, r));
}
function pG(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return on(e);
}
function U2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (U2 = function() {
    return !!e;
  })();
}
function hl(e) {
  return hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hl(e);
}
function on(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vy(e, t);
}
function Vy(e, t) {
  return Vy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vy(e, t);
}
function lr(e, t, r) {
  return t = H2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H2(e) {
  var t = gG(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function gG(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yG = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, u = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = cu().domain(fl(0, l)).range([a, a + u - s]), d = f.domain().map(function(h) {
    return f(h);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: f(n),
    endX: f(i),
    scale: f,
    scaleValues: d
  };
}, FP = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Qa = /* @__PURE__ */ function(e) {
  vG(t, e);
  function t(r) {
    var n;
    return fG(this, t), n = hG(this, t, [r]), lr(on(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), lr(on(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), lr(on(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, u = i.onDragEnd, s = i.startIndex;
        u == null || u({
          endIndex: a,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), lr(on(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), lr(on(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), lr(on(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), lr(on(n), "handleSlideDragStart", function(i) {
      var a = FP(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(on(n), "startX"),
      endX: n.handleTravellerDragStart.bind(on(n), "endX")
    }, n.state = {}, n;
  }
  return dG(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, u = this.state.scaleValues, s = this.props, l = s.gap, f = s.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(u, h), x = t.getIndexInRange(u, v);
      return {
        startIndex: g - g % l,
        endIndex: x === d ? d : x - x % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, u = i.tickFormatter, s = i.dataKey, l = mt(a[n], s, n);
      return Pe(u) ? u(l, n) : l;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, u = i.startX, s = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, x = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - s, f + d - h - u) : y < 0 && (y = Math.max(y, f - u, f - s));
      var b = this.getIndex({
        startX: u + y,
        endX: s + y
      });
      (b.startIndex !== v || b.endIndex !== g) && x && x(b), this.setState({
        startX: u + y,
        endX: s + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = FP(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, u = i.movingTravellerId, s = i.endX, l = i.startX, f = this.state[u], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, x = d.onChange, y = d.gap, b = d.data, S = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), S[u] = f + O;
      var A = this.getIndex(S), _ = A.startIndex, m = A.endIndex, E = function() {
        var I = b.length - 1;
        return u === "startX" && (s > l ? _ % y === 0 : m % y === 0) || s < l && m === I || u === "endX" && (s > l ? m % y === 0 : _ % y === 0) || s > l && m === I;
      };
      this.setState(lr(lr({}, u, f + O), "brushMoveStartX", n.pageX), function() {
        x && E() && x(A);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, u = this.state, s = u.scaleValues, l = u.startX, f = u.endX, d = this.state[i], h = s.indexOf(d);
      if (h !== -1) {
        var v = h + n;
        if (!(v === -1 || v >= s.length)) {
          var g = s[v];
          i === "startX" && g >= f || i === "endX" && g <= l || this.setState(lr({}, i, g), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ $.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: u,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.data, f = n.children, d = n.padding, h = Vi.only(f);
      return h ? /* @__PURE__ */ $.cloneElement(h, {
        x: i,
        y: a,
        width: u,
        height: s,
        margin: d,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, u, s = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, x = l.data, y = l.startIndex, b = l.endIndex, S = Math.max(n, this.props.x), O = Ag(Ag({}, xe(this.props, !1)), {}, {
        x: S,
        y: f,
        width: d,
        height: h
      }), A = g || "Min value: ".concat((a = x[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((u = x[b]) === null || u === void 0 ? void 0 : u.name);
      return /* @__PURE__ */ $.createElement(Le, {
        tabIndex: 0,
        role: "slider",
        "aria-label": A,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), s.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(v, O));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, u = a.y, s = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
      return /* @__PURE__ */ $.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: l,
        fillOpacity: 0.2,
        x: d,
        y: u,
        width: h,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, u = n.y, s = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, x = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ $.createElement(vi, dl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: u + s / 2
      }, x), this.getTextOfTick(i)), /* @__PURE__ */ $.createElement(vi, dl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: u + s / 2
      }, x), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, u = n.children, s = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, x = v.endX, y = v.isTextActive, b = v.isSlideMoving, S = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(s) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var A = Ie("recharts-brush", a), _ = $.Children.count(u) === 1, m = lG("userSelect", "none");
      return /* @__PURE__ */ $.createElement(Le, {
        className: A,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(g, x), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(x, "endX"), (y || b || S || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, u = n.width, s = n.height, l = n.stroke, f = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("rect", {
        x: i,
        y: a,
        width: u,
        height: s,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ $.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + u - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ $.createElement("line", {
        x1: i + 1,
        y1: f + 2,
        x2: i + u - 1,
        y2: f + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ $.isValidElement(n) ? a = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, u = n.width, s = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return Ag({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: u
        }, a && a.length ? yG({
          data: a,
          width: u,
          x: s,
          travellerWidth: l,
          startIndex: d,
          endIndex: h
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (u !== i.prevWidth || s !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([s, s + u - l]);
        var v = i.scale.domain().map(function(g) {
          return i.scale(g);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: u,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: v
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, u = 0, s = a - 1; s - u > 1; ) {
        var l = Math.floor((u + s) / 2);
        n[l] > i ? s = l : u = l;
      }
      return i >= n[s] ? s : u;
    }
  }]), t;
}(Dr);
lr(Qa, "displayName", "Brush");
lr(Qa, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Pg, WP;
function mG() {
  if (WP) return Pg;
  WP = 1;
  var e = Um();
  function t(r, n) {
    var i;
    return e(r, function(a, u, s) {
      return i = n(a, u, s), !i;
    }), !!i;
  }
  return Pg = t, Pg;
}
var Eg, zP;
function bG() {
  if (zP) return Eg;
  zP = 1;
  var e = BT(), t = gn(), r = mG(), n = tr(), i = Ll();
  function a(u, s, l) {
    var f = n(u) ? e : r;
    return l && i(u, s, l) && (s = void 0), f(u, t(s, 3));
  }
  return Eg = a, Eg;
}
var xG = bG();
const wG = /* @__PURE__ */ Je(xG);
var fn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Tg, UP;
function _G() {
  if (UP) return Tg;
  UP = 1;
  var e = aC();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Tg = t, Tg;
}
var Cg, HP;
function OG() {
  if (HP) return Cg;
  HP = 1;
  var e = _G(), t = nC(), r = gn();
  function n(i, a) {
    var u = {};
    return a = r(a, 3), t(i, function(s, l, f) {
      e(u, l, a(s, l, f));
    }), u;
  }
  return Cg = n, Cg;
}
var SG = OG();
const AG = /* @__PURE__ */ Je(SG);
var Mg, GP;
function PG() {
  if (GP) return Mg;
  GP = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Mg = e, Mg;
}
var Ig, KP;
function EG() {
  if (KP) return Ig;
  KP = 1;
  var e = Um();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, u, s) {
      return i = !!n(a, u, s), i;
    }), i;
  }
  return Ig = t, Ig;
}
var Rg, VP;
function TG() {
  if (VP) return Rg;
  VP = 1;
  var e = PG(), t = EG(), r = gn(), n = tr(), i = Ll();
  function a(u, s, l) {
    var f = n(u) ? e : t;
    return l && i(u, s, l) && (s = void 0), f(u, r(s, 3));
  }
  return Rg = a, Rg;
}
var CG = TG();
const G2 = /* @__PURE__ */ Je(CG);
var MG = ["x", "y"];
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
function Yy() {
  return Yy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yy.apply(this, arguments);
}
function YP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? YP(Object(r), !0).forEach(function(n) {
      IG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IG(e, t, r) {
  return t = RG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RG(e) {
  var t = $G(e, "string");
  return eo(t) == "symbol" ? t : String(t);
}
function $G(e, t) {
  if (eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kG(e, t) {
  if (e == null) return {};
  var r = jG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jG(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function NG(e, t) {
  var r = e.x, n = e.y, i = kG(e, MG), a = "".concat(r), u = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return tu(tu(tu(tu(tu({}, t), i), u ? {
    x: u
  } : {}), l ? {
    y: l
  } : {}), {}, {
    height: d,
    width: v,
    name: t.name,
    radius: t.radius
  });
}
function XP(e) {
  return /* @__PURE__ */ $.createElement(q2, Yy({
    shapeType: "rectangle",
    propTransformer: NG,
    activeClassName: "recharts-active-bar"
  }, e));
}
var DG = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? Qt(!1, "minPointSize callback function received a value with type of ".concat(eo(n), ". Currently only numbers are supported.")) : Qt()), r);
  };
}, LG = ["value", "background"], K2;
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function qG(e, t) {
  if (e == null) return {};
  var r = BG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BG(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function ZP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ZP(Object(r), !0).forEach(function(n) {
      hi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function JP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y2(n.key), n);
  }
}
function WG(e, t, r) {
  return t && JP(e.prototype, t), r && JP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zG(e, t, r) {
  return t = vl(t), UG(e, V2() ? Reflect.construct(t, r || [], vl(e).constructor) : t.apply(e, r));
}
function UG(e, t) {
  if (t && (to(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return au(e);
}
function V2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V2 = function() {
    return !!e;
  })();
}
function vl(e) {
  return vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vl(e);
}
function au(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xy(e, t);
}
function Xy(e, t) {
  return Xy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xy(e, t);
}
function hi(e, t, r) {
  return t = Y2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y2(e) {
  var t = GG(e, "string");
  return to(t) == "symbol" ? t : String(t);
}
function GG(e, t) {
  if (to(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Si = /* @__PURE__ */ function(e) {
  HG(t, e);
  function t() {
    var r;
    FG(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = zG(this, t, [].concat(i)), hi(au(r), "state", {
      isAnimationFinished: !1
    }), hi(au(r), "id", aa("recharts-bar-")), hi(au(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), u && u();
    }), hi(au(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), u && u();
    }), r;
  }
  return WG(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.shape, s = a.dataKey, l = a.activeIndex, f = a.activeBar, d = xe(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, x = g ? f : u, y = Ct(Ct(Ct({}, d), h), {}, {
          isActive: g,
          option: x,
          index: v,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ $.createElement(Le, pl({
          className: "recharts-bar-rectangle"
        }, Ji(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ $.createElement(XP, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, u = i.layout, s = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ $.createElement(Jr, {
        begin: l,
        duration: f,
        isActive: s,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(g) {
        var x = g.t, y = a.map(function(b, S) {
          var O = v && v[S];
          if (O) {
            var A = St(O.x, b.x), _ = St(O.y, b.y), m = St(O.width, b.width), E = St(O.height, b.height);
            return Ct(Ct({}, b), {}, {
              x: A(x),
              y: _(x),
              width: m(x),
              height: E(x)
            });
          }
          if (u === "horizontal") {
            var T = St(0, b.height), I = T(x);
            return Ct(Ct({}, b), {}, {
              y: b.y + b.height - I,
              height: I
            });
          }
          var B = St(0, b.width), L = B(x);
          return Ct(Ct({}, b), {}, {
            width: L
          });
        });
        return /* @__PURE__ */ $.createElement(Le, null, n.renderRectanglesStatically(y));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, u = this.state.prevData;
      return a && i && i.length && (!u || !Qi(u, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, u = i.dataKey, s = i.activeIndex, l = xe(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = qG(f, LG);
        if (!h)
          return null;
        var g = Ct(Ct(Ct(Ct(Ct({}, v), {}, {
          fill: "#eee"
        }, h), l), Ji(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: u,
          index: d,
          key: "background-bar-".concat(d),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ $.createElement(XP, pl({
          option: n.props.background,
          isActive: d === s
        }, g));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, u = a.data, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = vr(d, ss);
      if (!h)
        return null;
      var v = f === "vertical" ? u[0].height / 2 : u[0].width / 2, g = function(b, S) {
        var O = Array.isArray(b.value) ? b.value[1] : b.value;
        return {
          x: b.x,
          y: b.y,
          value: O,
          errorVal: mt(b, S)
        };
      }, x = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ $.createElement(Le, x, h.map(function(y) {
        return /* @__PURE__ */ $.cloneElement(y, {
          key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
          data: u,
          xAxis: s,
          yAxis: l,
          layout: f,
          offset: v,
          dataPointFormatter: g
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, u = n.className, s = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, x = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var b = this.state.isAnimationFinished, S = Ie("recharts-bar", u), O = s && s.allowDataOverflow, A = l && l.allowDataOverflow, _ = O || A, m = Te(y) ? this.id : y;
      return /* @__PURE__ */ $.createElement(Le, {
        className: S
      }, O || A ? /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ $.createElement("rect", {
        x: O ? f : f - h / 2,
        y: A ? d : d - v / 2,
        width: O ? h : h * 2,
        height: A ? v : v * 2
      }))) : null, /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(m, ")") : null
      }, x ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, m), (!g || b) && Rr.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]), t;
}(Dr);
K2 = Si;
hi(Si, "displayName", "Bar");
hi(Si, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Xr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
hi(Si, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, u = e.yAxis, s = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = C4(n, r);
  if (!g)
    return null;
  var x = t.layout, y = r.props, b = y.dataKey, S = y.children, O = y.minPointSize, A = x === "horizontal" ? u : a, _ = f ? A.scale.domain() : null, m = N4({
    numericAxis: A
  }), E = vr(S, Km), T = h.map(function(I, B) {
    var L, N, j, q, F, V;
    f ? L = M4(f[d + B], _) : (L = mt(I, b), Array.isArray(L) || (L = [m, L]));
    var U = DG(O, K2.defaultProps.minPointSize)(L[1], B);
    if (x === "horizontal") {
      var J, G = [u.scale(L[0]), u.scale(L[1])], ue = G[0], H = G[1];
      N = gA({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: g.offset,
        entry: I,
        index: B
      }), j = (J = H ?? ue) !== null && J !== void 0 ? J : void 0, q = g.size;
      var X = ue - H;
      if (F = Number.isNaN(X) ? 0 : X, V = {
        x: N,
        y: u.y,
        width: q,
        height: u.height
      }, Math.abs(U) > 0 && Math.abs(F) < Math.abs(U)) {
        var ae = Ut(F || U) * (Math.abs(U) - Math.abs(F));
        j -= ae, F += ae;
      }
    } else {
      var ce = [a.scale(L[0]), a.scale(L[1])], he = ce[0], ye = ce[1];
      if (N = he, j = gA({
        axis: u,
        ticks: l,
        bandSize: i,
        offset: g.offset,
        entry: I,
        index: B
      }), q = ye - he, F = g.size, V = {
        x: a.x,
        y: j,
        width: a.width,
        height: F
      }, Math.abs(U) > 0 && Math.abs(q) < Math.abs(U)) {
        var be = Ut(q || U) * (Math.abs(U) - Math.abs(q));
        q += be;
      }
    }
    return Ct(Ct(Ct({}, I), {}, {
      x: N,
      y: j,
      width: q,
      height: F,
      value: f ? L : L[1],
      payload: I,
      background: V
    }, E && E[B] && E[B].props), {}, {
      tooltipPayload: [m2(r, I)],
      tooltipPosition: {
        x: N + q / 2,
        y: j + F / 2
      }
    });
  });
  return Ct({
    data: T,
    layout: x
  }, v);
});
function Gu(e) {
  "@babel/helpers - typeof";
  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gu(e);
}
function KG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X2(n.key), n);
  }
}
function VG(e, t, r) {
  return t && QP(e.prototype, t), r && QP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eE(Object(r), !0).forEach(function(n) {
      tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tf(e, t, r) {
  return t = X2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X2(e) {
  var t = YG(e, "string");
  return Gu(t) == "symbol" ? t : String(t);
}
function YG(e, t) {
  if (Gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wb = function(t, r, n, i, a) {
  var u = t.width, s = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: u - n.right,
    rightMirror: u - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, v = !!fr(f, Si);
  return d.reduce(function(g, x) {
    var y = r[x], b = y.orientation, S = y.domain, O = y.padding, A = O === void 0 ? {} : O, _ = y.mirror, m = y.reversed, E = "".concat(b).concat(_ ? "Mirror" : ""), T, I, B, L, N;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var j = S[1] - S[0], q = 1 / 0, F = y.categoricalDomain.sort();
      if (F.forEach(function(he, ye) {
        ye > 0 && (q = Math.min((he || 0) - (F[ye - 1] || 0), q));
      }), Number.isFinite(q)) {
        var V = q / j, U = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && (T = V * U / 2), y.padding === "no-gap") {
          var J = Ht(t.barCategoryGap, V * U), G = V * U / 2;
          T = G - J - (G - J) / U * J;
        }
      }
    }
    i === "xAxis" ? I = [n.left + (A.left || 0) + (T || 0), n.left + n.width - (A.right || 0) - (T || 0)] : i === "yAxis" ? I = l === "horizontal" ? [n.top + n.height - (A.bottom || 0), n.top + (A.top || 0)] : [n.top + (A.top || 0) + (T || 0), n.top + n.height - (A.bottom || 0) - (T || 0)] : I = y.range, m && (I = [I[1], I[0]]);
    var ue = p2(y, a, v), H = ue.scale, X = ue.realScaleType;
    H.domain(S).range(I), v2(H);
    var ae = g2(H, Hr(Hr({}, y), {}, {
      realScaleType: X
    }));
    i === "xAxis" ? (N = b === "top" && !_ || b === "bottom" && _, B = n.left, L = h[E] - N * y.height) : i === "yAxis" && (N = b === "left" && !_ || b === "right" && _, B = h[E] - N * y.width, L = n.top);
    var ce = Hr(Hr(Hr({}, y), ae), {}, {
      realScaleType: X,
      x: B,
      y: L,
      scale: H,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = Jc(ce, ae), !y.hide && i === "xAxis" ? h[E] += (N ? -1 : 1) * ce.height : y.hide || (h[E] += (N ? -1 : 1) * ce.width), Hr(Hr({}, g), {}, tf({}, x, ce));
  }, {});
}, Z2 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, u),
    width: Math.abs(a - n),
    height: Math.abs(u - i)
  };
}, XG = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Z2({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, J2 = /* @__PURE__ */ function() {
  function e(t) {
    KG(this, e), this.scale = t;
  }
  return VG(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var u = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + u;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var l = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + l;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]), e;
}();
tf(J2, "EPS", 1e-4);
var _b = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, tf({}, i, J2.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = a.bandAware, s = a.position;
      return AG(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: u,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return G2(i, function(a, u) {
        return r[u].isInRange(a);
      });
    }
  });
};
function ZG(e) {
  return (e % 180 + 180) % 180;
}
var JG = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = ZG(i), u = a * Math.PI / 180, s = Math.atan(n / r), l = u > s && u < Math.PI - s ? n / Math.sin(u) : r / Math.cos(u);
  return Math.abs(l);
}, $g, tE;
function QG() {
  if (tE) return $g;
  tE = 1;
  var e = gn(), t = ns(), r = Nl();
  function n(i) {
    return function(a, u, s) {
      var l = Object(a);
      if (!t(a)) {
        var f = e(u, 3);
        a = r(a), u = function(h) {
          return f(l[h], h, l);
        };
      }
      var d = i(a, u, s);
      return d > -1 ? l[f ? a[d] : d] : void 0;
    };
  }
  return $g = n, $g;
}
var kg, rE;
function eK() {
  if (rE) return kg;
  rE = 1;
  var e = W2();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return kg = t, kg;
}
var jg, nE;
function tK() {
  if (nE) return jg;
  nE = 1;
  var e = ZT(), t = gn(), r = eK(), n = Math.max;
  function i(a, u, s) {
    var l = a == null ? 0 : a.length;
    if (!l)
      return -1;
    var f = s == null ? 0 : r(s);
    return f < 0 && (f = n(l + f, 0)), e(a, t(u, 3), f);
  }
  return jg = i, jg;
}
var Ng, iE;
function rK() {
  if (iE) return Ng;
  iE = 1;
  var e = QG(), t = tK(), r = e(t);
  return Ng = r, Ng;
}
var nK = rK();
const iK = /* @__PURE__ */ Je(nK);
var aK = dT();
const oK = /* @__PURE__ */ Je(aK);
var uK = oK(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function gl(e) {
  "@babel/helpers - typeof";
  return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gl(e);
}
var Ob = /* @__PURE__ */ Nr(void 0), Sb = /* @__PURE__ */ Nr(void 0), Q2 = /* @__PURE__ */ Nr(void 0), eM = /* @__PURE__ */ Nr({}), tM = /* @__PURE__ */ Nr(void 0), rM = /* @__PURE__ */ Nr(0), nM = /* @__PURE__ */ Nr(0), aE = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, u = t.clipPathId, s = t.children, l = t.width, f = t.height, d = uK(a);
  return /* @__PURE__ */ $.createElement(Ob.Provider, {
    value: n
  }, /* @__PURE__ */ $.createElement(Sb.Provider, {
    value: i
  }, /* @__PURE__ */ $.createElement(eM.Provider, {
    value: a
  }, /* @__PURE__ */ $.createElement(Q2.Provider, {
    value: d
  }, /* @__PURE__ */ $.createElement(tM.Provider, {
    value: u
  }, /* @__PURE__ */ $.createElement(rM.Provider, {
    value: f
  }, /* @__PURE__ */ $.createElement(nM.Provider, {
    value: l
  }, s)))))));
}, sK = function() {
  return er(tM);
};
function iM(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var aM = function(t) {
  var r = er(Ob);
  r == null && (process.env.NODE_ENV !== "production" ? Qt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(gl(t), "]. ").concat(iM(r))) : Qt()), n;
}, cK = function() {
  var t = er(Ob);
  return fi(t);
}, lK = function() {
  var t = er(Sb), r = iK(t, function(n) {
    return G2(n.domain, Number.isFinite);
  });
  return r || fi(t);
}, oM = function(t) {
  var r = er(Sb);
  r == null && (process.env.NODE_ENV !== "production" ? Qt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(gl(t), "]. ").concat(iM(r))) : Qt()), n;
}, fK = function() {
  var t = er(Q2);
  return t;
}, dK = function() {
  return er(eM);
}, Ab = function() {
  return er(nM);
}, Pb = function() {
  return er(rM);
};
function Ku(e) {
  "@babel/helpers - typeof";
  return Ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ku(e);
}
function oE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oE(Object(r), !0).forEach(function(n) {
      hK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hK(e, t, r) {
  return t = pK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pK(e) {
  var t = vK(e, "string");
  return Ku(t) == "symbol" ? t : String(t);
}
function vK(e, t) {
  if (Ku(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ku(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gK(e, t) {
  return xK(e) || bK(e, t) || mK(e, t) || yK();
}
function yK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mK(e, t) {
  if (e) {
    if (typeof e == "string") return sE(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sE(e, t);
  }
}
function sE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bK(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function xK(e) {
  if (Array.isArray(e)) return e;
}
function Zy() {
  return Zy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zy.apply(this, arguments);
}
var wK = function(t, r) {
  var n;
  return /* @__PURE__ */ $.isValidElement(t) ? n = /* @__PURE__ */ $.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ $.createElement("line", Zy({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, _K = function(t, r, n, i, a, u, s, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var x = f.y, y = t.y.apply(x, {
      position: u
    });
    if (fn(f, "discard") && !t.y.isInRange(y))
      return null;
    var b = [{
      x: d + v,
      y
    }, {
      x: d,
      y
    }];
    return l === "left" ? b.reverse() : b;
  }
  if (r) {
    var S = f.x, O = t.x.apply(S, {
      position: u
    });
    if (fn(f, "discard") && !t.x.isInRange(O))
      return null;
    var A = [{
      x: O,
      y: h + g
    }, {
      x: O,
      y: h
    }];
    return s === "top" ? A.reverse() : A;
  }
  if (i) {
    var _ = f.segment, m = _.map(function(E) {
      return t.apply(E, {
        position: u
      });
    });
    return fn(f, "discard") && wG(m, function(E) {
      return !t.isInRange(E);
    }) ? null : m;
  }
  return null;
};
function Eb(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, u = e.shape, s = e.className, l = e.alwaysShow, f = sK(), d = aM(i), h = oM(a), v = fK();
  if (!f || !v)
    return null;
  Yr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = _b({
    x: d.scale,
    y: h.scale
  }), x = Pt(t), y = Pt(r), b = n && n.length === 2, S = _K(g, x, y, b, v, e.position, d.orientation, h.orientation, e);
  if (!S)
    return null;
  var O = gK(S, 2), A = O[0], _ = A.x, m = A.y, E = O[1], T = E.x, I = E.y, B = fn(e, "hidden") ? "url(#".concat(f, ")") : void 0, L = uE(uE({
    clipPath: B
  }, xe(e, !0)), {}, {
    x1: _,
    y1: m,
    x2: T,
    y2: I
  });
  return /* @__PURE__ */ $.createElement(Le, {
    className: Ie("recharts-reference-line", s)
  }, wK(u, L), At.renderCallByParent(e, XG({
    x1: _,
    y1: m,
    x2: T,
    y2: I
  })));
}
Eb.displayName = "ReferenceLine";
Eb.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
function Jy() {
  return Jy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jy.apply(this, arguments);
}
function cE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cE(Object(r), !0).forEach(function(n) {
      OK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OK(e, t, r) {
  return t = SK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SK(e) {
  var t = AK(e, "string");
  return Vu(t) == "symbol" ? t : String(t);
}
function AK(e, t) {
  if (Vu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var PK = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, u = _b({
    x: i.scale,
    y: a.scale
  }), s = u.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return fn(t, "discard") && !u.isInRange(s) ? null : s;
};
function ls(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, u = Pt(t), s = Pt(r);
  if (Yr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !s)
    return null;
  var l = PK(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = fn(e, "hidden") ? "url(#".concat(a, ")") : void 0, x = lE(lE({
    clipPath: g
  }, xe(e, !0)), {}, {
    cx: f,
    cy: d
  });
  return /* @__PURE__ */ $.createElement(Le, {
    className: Ie("recharts-reference-dot", v)
  }, ls.renderDot(h, x), At.renderCallByParent(e, {
    x: f - n,
    y: d - n,
    width: 2 * n,
    height: 2 * n
  }));
}
ls.displayName = "ReferenceDot";
ls.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
ls.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ $.isValidElement(e) ? r = /* @__PURE__ */ $.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ $.createElement(cs, Jy({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Yu(e) {
  "@babel/helpers - typeof";
  return Yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yu(e);
}
function Qy() {
  return Qy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qy.apply(this, arguments);
}
function fE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fE(Object(r), !0).forEach(function(n) {
      EK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EK(e, t, r) {
  return t = TK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TK(e) {
  var t = CK(e, "string");
  return Yu(t) == "symbol" ? t : String(t);
}
function CK(e, t) {
  if (Yu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var MK = function(t, r, n, i, a) {
  var u = a.x1, s = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = _b({
    x: d.scale,
    y: h.scale
  }), g = {
    x: t ? v.x.apply(u, {
      position: "start"
    }) : v.x.rangeMin,
    y: n ? v.y.apply(l, {
      position: "start"
    }) : v.y.rangeMin
  }, x = {
    x: r ? v.x.apply(s, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return fn(a, "discard") && (!v.isInRange(g) || !v.isInRange(x)) ? null : Z2(g, x);
};
function fs(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, u = e.alwaysShow, s = e.clipPathId;
  Yr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Pt(t), f = Pt(r), d = Pt(n), h = Pt(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = MK(l, f, d, h, e);
  if (!g && !v)
    return null;
  var x = fn(e, "hidden") ? "url(#".concat(s, ")") : void 0;
  return /* @__PURE__ */ $.createElement(Le, {
    className: Ie("recharts-reference-area", a)
  }, fs.renderRect(v, dE(dE({
    clipPath: x
  }, xe(e, !0)), g)), At.renderCallByParent(e, g));
}
fs.displayName = "ReferenceArea";
fs.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
fs.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ $.isValidElement(e) ? r = /* @__PURE__ */ $.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ $.createElement(xb, Qy({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function uM(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function IK(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return JG(n, r);
}
function RK(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, u = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + u : a + s
  } : {
    start: n ? i + u : a + s,
    end: n ? i : a
  };
}
function yl(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function $K(e, t) {
  return uM(e, t + 1);
}
function kK(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = t.start, s = t.end, l = 0, f = 1, d = u, h = function() {
    var x = n == null ? void 0 : n[l];
    if (x === void 0)
      return {
        v: uM(n, f)
      };
    var y = l, b, S = function() {
      return b === void 0 && (b = r(x, y)), b;
    }, O = x.coordinate, A = l === 0 || yl(e, O, S, d, s);
    A || (l = 0, d = u, f += 1), A && (d = O + e * (S() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function Xu(e) {
  "@babel/helpers - typeof";
  return Xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xu(e);
}
function hE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hE(Object(r), !0).forEach(function(n) {
      jK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jK(e, t, r) {
  return t = NK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NK(e) {
  var t = DK(e, "string");
  return Xu(t) == "symbol" ? t : String(t);
}
function DK(e, t) {
  if (Xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LK(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = a.length, s = t.start, l = t.end, f = function(v) {
    var g = a[v], x, y = function() {
      return x === void 0 && (x = r(g, v)), x;
    };
    if (v === u - 1) {
      var b = e * (g.coordinate + e * y() / 2 - l);
      a[v] = g = Dt(Dt({}, g), {}, {
        tickCoord: b > 0 ? g.coordinate - b * e : g.coordinate
      });
    } else
      a[v] = g = Dt(Dt({}, g), {}, {
        tickCoord: g.coordinate
      });
    var S = yl(e, g.tickCoord, y, s, l);
    S && (l = g.tickCoord - e * (y() / 2 + i), a[v] = Dt(Dt({}, g), {}, {
      isShow: !0
    }));
  }, d = u - 1; d >= 0; d--)
    f(d);
  return a;
}
function qK(e, t, r, n, i, a) {
  var u = (n || []).slice(), s = u.length, l = t.start, f = t.end;
  if (a) {
    var d = n[s - 1], h = r(d, s - 1), v = e * (d.coordinate + e * h / 2 - f);
    u[s - 1] = d = Dt(Dt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = yl(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), u[s - 1] = Dt(Dt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var x = a ? s - 1 : s, y = function(O) {
    var A = u[O], _, m = function() {
      return _ === void 0 && (_ = r(A, O)), _;
    };
    if (O === 0) {
      var E = e * (A.coordinate - e * m() / 2 - l);
      u[O] = A = Dt(Dt({}, A), {}, {
        tickCoord: E < 0 ? A.coordinate - E * e : A.coordinate
      });
    } else
      u[O] = A = Dt(Dt({}, A), {}, {
        tickCoord: A.coordinate
      });
    var T = yl(e, A.tickCoord, m, l, f);
    T && (l = A.tickCoord + e * (m() / 2 + i), u[O] = Dt(Dt({}, A), {}, {
      isShow: !0
    }));
  }, b = 0; b < x; b++)
    y(b);
  return u;
}
function Tb(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, u = e.minTickGap, s = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Xr.isSsr)
    return $K(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = s === "top" || s === "bottom" ? "width" : "height", x = d && g === "width" ? su(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(A, _) {
    var m = Pe(f) ? f(A.value, _) : A.value;
    return g === "width" ? IK(su(m, {
      fontSize: t,
      letterSpacing: r
    }), x, h) : su(m, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, b = i.length >= 2 ? Ut(i[1].coordinate - i[0].coordinate) : 1, S = RK(a, b, g);
  return l === "equidistantPreserveStart" ? kK(b, S, y, i, u) : (l === "preserveStart" || l === "preserveStartEnd" ? v = qK(b, S, y, i, u, l === "preserveStartEnd") : v = LK(b, S, y, i, u), v.filter(function(O) {
    return O.isShow;
  }));
}
var BK = ["viewBox"], FK = ["viewBox"], WK = ["ticks"];
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
function pE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pE(Object(r), !0).forEach(function(n) {
      Cb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dg(e, t) {
  if (e == null) return {};
  var r = zK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function UK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cM(n.key), n);
  }
}
function HK(e, t, r) {
  return t && vE(e.prototype, t), r && vE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function GK(e, t, r) {
  return t = ml(t), KK(e, sM() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function KK(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VK(e);
}
function VK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sM = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function YK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && em(e, t);
}
function em(e, t) {
  return em = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, em(e, t);
}
function Cb(e, t, r) {
  return t = cM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cM(e) {
  var t = XK(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function XK(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wo = /* @__PURE__ */ function(e) {
  YK(t, e);
  function t(r) {
    var n;
    return UK(this, t), n = GK(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return HK(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, u = Dg(n, BK), s = this.props, l = s.viewBox, f = Dg(s, FK);
      return !ja(a, l) || !ja(u, f) || !ja(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, u = i.y, s = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, x, y, b, S, O, A = h ? -1 : 1, _ = n.tickSize || d, m = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = x = n.coordinate, b = u + +!h * l, y = b - A * _, O = y - A * v, S = m;
          break;
        case "left":
          y = b = n.coordinate, x = a + +!h * s, g = x - A * _, S = g - A * v, O = m;
          break;
        case "right":
          y = b = n.coordinate, x = a + +h * s, g = x + A * _, S = g + A * v, O = m;
          break;
        default:
          g = x = n.coordinate, b = u + +h * l, y = b + A * _, O = y + A * v, S = m;
          break;
      }
      return {
        line: {
          x1: g,
          y1: y,
          x2: x,
          y2: b
        },
        tick: {
          x: S,
          y: O
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, u;
      switch (i) {
        case "left":
          u = a ? "start" : "end";
          break;
        case "right":
          u = a ? "end" : "start";
          break;
        default:
          u = "middle";
          break;
      }
      return u;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, u = "end";
      switch (i) {
        case "left":
        case "right":
          u = "middle";
          break;
        case "top":
          u = a ? "start" : "end";
          break;
        default:
          u = a ? "end" : "start";
          break;
      }
      return u;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = zt(zt(zt({}, xe(this.props, !1)), xe(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = zt(zt({}, h), {}, {
          x1: i,
          y1: a + v * s,
          x2: i + u,
          y2: a + v * s
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = zt(zt({}, h), {}, {
          x1: i + g * u,
          y1: a,
          x2: i + g * u,
          y2: a + s
        });
      }
      return /* @__PURE__ */ $.createElement("line", Ra({}, h, {
        className: Ie("recharts-cartesian-axis-line", pr(d, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var u = this, s = this.props, l = s.tickLine, f = s.stroke, d = s.tick, h = s.tickFormatter, v = s.unit, g = Tb(zt(zt({}, this.props), {}, {
          ticks: n
        }), i, a), x = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), b = xe(this.props, !1), S = xe(d, !1), O = zt(zt({}, b), {}, {
          fill: "none"
        }, xe(l, !1)), A = g.map(function(_, m) {
          var E = u.getTickLineCoord(_), T = E.line, I = E.tick, B = zt(zt(zt(zt({
            textAnchor: x,
            verticalAnchor: y
          }, b), {}, {
            stroke: "none",
            fill: f
          }, S), I), {}, {
            index: m,
            payload: _,
            visibleTicksCount: g.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ $.createElement(Le, Ra({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, Ji(u.props, _, m)), l && /* @__PURE__ */ $.createElement("line", Ra({}, O, T, {
            className: Ie("recharts-cartesian-axis-tick-line", pr(l, "className"))
          })), d && t.renderTickItem(d, B, "".concat(Pe(h) ? h(_.value, m) : _.value).concat(v || "")));
        });
        return /* @__PURE__ */ $.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, A);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, u = i.width, s = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = Dg(h, WK), x = v;
      return Pe(l) && (x = v && v.length > 0 ? l(this.props) : l(g)), u <= 0 || s <= 0 || !x || !x.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-cartesian-axis", f),
        ref: function(b) {
          n.layerReference = b;
        }
      }, a && this.renderAxisLine(), this.renderTicks(x, this.state.fontSize, this.state.letterSpacing), At.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ $.isValidElement(n) ? u = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ $.createElement(vi, Ra({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(YE);
Cb(wo, "displayName", "CartesianAxis");
Cb(wo, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var ZK = ["x1", "y1", "x2", "y2", "key"], JK = ["offset"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function gE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gE(Object(r), !0).forEach(function(n) {
      QK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QK(e, t, r) {
  return t = eV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eV(e) {
  var t = tV(e, "string");
  return ta(t) == "symbol" ? t : String(t);
}
function tV(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hi.apply(this, arguments);
}
function yE(e, t) {
  if (e == null) return {};
  var r = rV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var nV = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, u = t.width, s = t.height;
  return /* @__PURE__ */ $.createElement("rect", {
    x: i,
    y: a,
    width: u,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function lM(e, t) {
  var r;
  if (/* @__PURE__ */ $.isValidElement(e))
    r = /* @__PURE__ */ $.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, u = t.y2, s = t.key, l = yE(t, ZK), f = xe(l, !1);
    f.offset;
    var d = yE(f, JK);
    r = /* @__PURE__ */ $.createElement("line", Hi({}, d, {
      x1: n,
      y1: i,
      x2: a,
      y2: u,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function iV(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(s, l) {
    var f = qt(qt({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(l),
      index: l
    });
    return lM(i, f);
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, u);
}
function aV(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(s, l) {
    var f = qt(qt({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return lM(i, f);
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, u);
}
function oV(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, u = e.height, s = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = s.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, g) {
    return v - g;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? i + u - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var b = g % t.length;
    return /* @__PURE__ */ $.createElement("rect", {
      key: "react-".concat(g),
      y: v,
      x: n,
      height: y,
      width: a,
      stroke: "none",
      fill: t[b],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function uV(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, u = e.y, s = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var d = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, g) {
    return v - g;
  });
  a !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? a + s - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var b = g % n.length;
    return /* @__PURE__ */ $.createElement("rect", {
      key: "react-".concat(g),
      x: v,
      y: u,
      width: y,
      height: l,
      stroke: "none",
      fill: n[b],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var sV = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, u = t.offset;
  return h2(Tb(qt(qt(qt({}, wo.defaultProps), n), {}, {
    ticks: $n(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), u.left, u.left + u.width, r);
}, cV = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, u = t.offset;
  return h2(Tb(qt(qt(qt({}, wo.defaultProps), n), {}, {
    ticks: $n(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), u.top, u.top + u.height, r);
}, Pa = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function ds(e) {
  var t, r, n, i, a, u, s = Ab(), l = Pb(), f = dK(), d = qt(qt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Pa.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Pa.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Pa.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Pa.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Pa.vertical,
    verticalFill: (u = e.verticalFill) !== null && u !== void 0 ? u : Pa.verticalFill,
    x: oe(e.x) ? e.x : f.left,
    y: oe(e.y) ? e.y : f.top,
    width: oe(e.width) ? e.width : f.width,
    height: oe(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, g = d.width, x = d.height, y = d.syncWithTicks, b = d.horizontalValues, S = d.verticalValues, O = cK(), A = lK();
  if (!oe(g) || g <= 0 || !oe(x) || x <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || sV, m = d.horizontalCoordinatesGenerator || cV, E = d.horizontalPoints, T = d.verticalPoints;
  if ((!E || !E.length) && Pe(m)) {
    var I = b && b.length, B = m({
      yAxis: A ? qt(qt({}, A), {}, {
        ticks: I ? b : A.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, I ? !0 : y);
    Yr(Array.isArray(B), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ta(B), "]")), Array.isArray(B) && (E = B);
  }
  if ((!T || !T.length) && Pe(_)) {
    var L = S && S.length, N = _({
      xAxis: O ? qt(qt({}, O), {}, {
        ticks: L ? S : O.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, L ? !0 : y);
    Yr(Array.isArray(N), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ta(N), "]")), Array.isArray(N) && (T = N);
  }
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ $.createElement(nV, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ $.createElement(iV, Hi({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ $.createElement(aV, Hi({}, d, {
    offset: f,
    verticalPoints: T,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ $.createElement(oV, Hi({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ $.createElement(uV, Hi({}, d, {
    verticalPoints: T
  })));
}
ds.displayName = "CartesianGrid";
var lV = ["type", "layout", "connectNulls", "ref"];
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function fV(e, t) {
  if (e == null) return {};
  var r = dV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pu.apply(this, arguments);
}
function mE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mE(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ea(e) {
  return gV(e) || vV(e) || pV(e) || hV();
}
function hV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pV(e, t) {
  if (e) {
    if (typeof e == "string") return tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tm(e, t);
  }
}
function vV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gV(e) {
  if (Array.isArray(e)) return tm(e);
}
function tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dM(n.key), n);
  }
}
function mV(e, t, r) {
  return t && bE(e.prototype, t), r && bE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bV(e, t, r) {
  return t = bl(t), xV(e, fM() ? Reflect.construct(t, r || [], bl(e).constructor) : t.apply(e, r));
}
function xV(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return si(e);
}
function fM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fM = function() {
    return !!e;
  })();
}
function bl(e) {
  return bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bl(e);
}
function si(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rm(e, t);
}
function rm(e, t) {
  return rm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, rm(e, t);
}
function Gr(e, t, r) {
  return t = dM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dM(e) {
  var t = _V(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function _V(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hs = /* @__PURE__ */ function(e) {
  wV(t, e);
  function t() {
    var r;
    yV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = bV(this, t, [].concat(i)), Gr(si(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(si(r), "generateSimpleStrokeDasharray", function(u, s) {
      return "".concat(s, "px ").concat(u - s, "px");
    }), Gr(si(r), "getStrokeDasharray", function(u, s, l) {
      var f = l.reduce(function(S, O) {
        return S + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(s, u);
      for (var d = Math.floor(u / f), h = u % f, v = s - u, g = [], x = 0, y = 0; x < l.length; y += l[x], ++x)
        if (y + l[x] > h) {
          g = [].concat(Ea(l.slice(0, x)), [h - y]);
          break;
        }
      var b = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ea(t.repeat(l, d)), Ea(g), b).map(function(S) {
        return "".concat(S, "px");
      }).join(", ");
    }), Gr(si(r), "id", aa("recharts-line-")), Gr(si(r), "pathRef", function(u) {
      r.mainCurve = u;
    }), Gr(si(r), "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Gr(si(r), "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return mV(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, u = a.points, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = vr(d, ss);
      if (!h)
        return null;
      var v = function(y, b) {
        return {
          x: y.x,
          y: y.y,
          value: y.value,
          errorVal: mt(y.payload, b)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ $.createElement(Le, g, h.map(function(x) {
        return /* @__PURE__ */ $.cloneElement(x, {
          key: "bar-".concat(x.props.dataKey),
          data: u,
          xAxis: s,
          yAxis: l,
          layout: f,
          dataPointFormatter: v
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var u = this.props.isAnimationActive;
      if (u && !this.state.isAnimationFinished)
        return null;
      var s = this.props, l = s.dot, f = s.points, d = s.dataKey, h = xe(this.props, !1), v = xe(l, !0), g = f.map(function(y, b) {
        var S = cr(cr(cr({
          key: "dot-".concat(b),
          r: 3
        }, h), v), {}, {
          value: y.value,
          dataKey: d,
          cx: y.x,
          cy: y.y,
          index: b,
          payload: y.payload
        });
        return t.renderDotItem(l, S);
      }), x = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ $.createElement(Le, pu({
        className: "recharts-line-dots",
        key: "dots"
      }, x), g);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, u) {
      var s = this.props, l = s.type, f = s.layout, d = s.connectNulls;
      s.ref;
      var h = fV(s, lV), v = cr(cr(cr({}, xe(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, u), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ $.createElement(Zi, pu({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, u = this.props, s = u.points, l = u.strokeDasharray, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, x = u.animateNewValues, y = u.width, b = u.height, S = this.state, O = S.prevPoints, A = S.totalLength;
      return /* @__PURE__ */ $.createElement(Jr, {
        begin: d,
        duration: h,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(g),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var m = _.t;
        if (O) {
          var E = O.length / s.length, T = s.map(function(j, q) {
            var F = Math.floor(q * E);
            if (O[F]) {
              var V = O[F], U = St(V.x, j.x), J = St(V.y, j.y);
              return cr(cr({}, j), {}, {
                x: U(m),
                y: J(m)
              });
            }
            if (x) {
              var G = St(y * 2, j.x), ue = St(b / 2, j.y);
              return cr(cr({}, j), {}, {
                x: G(m),
                y: ue(m)
              });
            }
            return cr(cr({}, j), {}, {
              x: j.x,
              y: j.y
            });
          });
          return a.renderCurveStatically(T, n, i);
        }
        var I = St(0, A), B = I(m), L;
        if (l) {
          var N = "".concat(l).split(/[,\s]+/gim).map(function(j) {
            return parseFloat(j);
          });
          L = a.getStrokeDasharray(B, A, N);
        } else
          L = a.generateSimpleStrokeDasharray(A, B);
        return a.renderCurveStatically(s, n, i, {
          strokeDasharray: L
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, u = a.points, s = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return s && u && u.length && (!f && d > 0 || !Qi(f, u)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(u, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, s = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, x = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, O = s.length === 1, A = Ie("recharts-line", l), _ = f && f.allowDataOverflow, m = d && d.allowDataOverflow, E = _ || m, T = Te(b) ? this.id : b, I = (n = xe(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, B = I.r, L = B === void 0 ? 3 : B, N = I.strokeWidth, j = N === void 0 ? 2 : N, q = yT(u) ? u : {}, F = q.clipDot, V = F === void 0 ? !0 : F, U = L * 2 + j;
      return /* @__PURE__ */ $.createElement(Le, {
        className: A
      }, _ || m ? /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("clipPath", {
        id: "clipPath-".concat(T)
      }, /* @__PURE__ */ $.createElement("rect", {
        x: _ ? v : v - g / 2,
        y: m ? h : h - x / 2,
        width: _ ? g : g * 2,
        height: m ? x : x * 2
      })), !V && /* @__PURE__ */ $.createElement("clipPath", {
        id: "clipPath-dots-".concat(T)
      }, /* @__PURE__ */ $.createElement("rect", {
        x: v - U / 2,
        y: h - U / 2,
        width: g + U,
        height: x + U
      }))) : null, !O && this.renderCurve(E, T), this.renderErrorBar(E, T), (O || u) && this.renderDots(E, V, T), (!y || S) && Rr.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(Ea(n), [0]) : n, u = [], s = 0; s < i; ++s)
        u = [].concat(Ea(u), Ea(a));
      return u;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ $.isValidElement(n))
        a = /* @__PURE__ */ $.cloneElement(n, i);
      else if (Pe(n))
        a = n(i);
      else {
        var u = Ie("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ $.createElement(cs, pu({}, i, {
          className: u
        }));
      }
      return a;
    }
  }]), t;
}(Dr);
Gr(hs, "displayName", "Line");
Gr(hs, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Xr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Gr(hs, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, u = e.dataKey, s = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var x = mt(v, u);
    return d === "horizontal" ? {
      x: Zc({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: v,
        index: g
      }),
      y: Te(x) ? null : n.scale(x),
      value: x,
      payload: v
    } : {
      x: Te(x) ? null : r.scale(x),
      y: Zc({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: v,
        index: g
      }),
      value: x,
      payload: v
    };
  });
  return cr({
    points: h,
    layout: d
  }, f);
});
var OV = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], hM;
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function SV(e, t) {
  if (e == null) return {};
  var r = AV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function AV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Gi() {
  return Gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gi.apply(this, arguments);
}
function xE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xE(Object(r), !0).forEach(function(n) {
      cn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vM(n.key), n);
  }
}
function EV(e, t, r) {
  return t && wE(e.prototype, t), r && wE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TV(e, t, r) {
  return t = xl(t), CV(e, pM() ? Reflect.construct(t, r || [], xl(e).constructor) : t.apply(e, r));
}
function CV(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ou(e);
}
function pM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pM = function() {
    return !!e;
  })();
}
function xl(e) {
  return xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xl(e);
}
function ou(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function MV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nm(e, t);
}
function nm(e, t) {
  return nm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, nm(e, t);
}
function cn(e, t, r) {
  return t = vM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vM(e) {
  var t = IV(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function IV(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ai = /* @__PURE__ */ function(e) {
  MV(t, e);
  function t() {
    var r;
    PV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = TV(this, t, [].concat(i)), cn(ou(r), "state", {
      isAnimationFinished: !0
    }), cn(ou(r), "id", aa("recharts-area-")), cn(ou(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(u) && u();
    }), cn(ou(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(u) && u();
    }), r;
  }
  return EV(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var u = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (u && !s)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = xe(this.props, !1), g = xe(f, !0), x = d.map(function(b, S) {
        var O = ci(ci(ci({
          key: "dot-".concat(S),
          r: 3
        }, v), g), {}, {
          index: S,
          cx: b.x,
          cy: b.y,
          dataKey: h,
          value: b.value,
          payload: b.payload,
          points: d
        });
        return t.renderDotItem(f, O);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ $.createElement(Le, Gi({
        className: "recharts-area-dots"
      }, y), x);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, s = i.strokeWidth, l = u[0].x, f = u[u.length - 1].x, d = n * Math.abs(l - f), h = di(u.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.y || 0;
      })), h)), oe(h) ? /* @__PURE__ */ $.createElement("rect", {
        x: l < f ? l : l - d,
        y: 0,
        width: d,
        height: Math.floor(h + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, s = i.strokeWidth, l = u[0].y, f = u[u.length - 1].y, d = n * Math.abs(l - f), h = di(u.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.x || 0;
      })), h)), oe(h) ? /* @__PURE__ */ $.createElement("rect", {
        x: 0,
        y: l < f ? l : l - d,
        width: h + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(d)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var i = this.props.layout;
      return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, i, a, u) {
      var s = this.props, l = s.layout, f = s.type, d = s.stroke, h = s.connectNulls, v = s.isRange;
      s.ref;
      var g = SV(s, OV);
      return /* @__PURE__ */ $.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(u, ")") : null
      }, /* @__PURE__ */ $.createElement(Zi, Gi({}, xe(g, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ $.createElement(Zi, Gi({}, xe(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ $.createElement(Zi, Gi({}, xe(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: i
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, i) {
      var a = this, u = this.props, s = u.points, l = u.baseLine, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, x = this.state, y = x.prevPoints, b = x.prevBaseLine;
      return /* @__PURE__ */ $.createElement(Jr, {
        begin: d,
        duration: h,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(g),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(S) {
        var O = S.t;
        if (y) {
          var A = y.length / s.length, _ = s.map(function(I, B) {
            var L = Math.floor(B * A);
            if (y[L]) {
              var N = y[L], j = St(N.x, I.x), q = St(N.y, I.y);
              return ci(ci({}, I), {}, {
                x: j(O),
                y: q(O)
              });
            }
            return I;
          }), m;
          if (oe(l) && typeof l == "number") {
            var E = St(b, l);
            m = E(O);
          } else if (Te(l) || vo(l)) {
            var T = St(b, 0);
            m = T(O);
          } else
            m = l.map(function(I, B) {
              var L = Math.floor(B * A);
              if (b[L]) {
                var N = b[L], j = St(N.x, I.x), q = St(N.y, I.y);
                return ci(ci({}, I), {}, {
                  x: j(O),
                  y: q(O)
                });
              }
              return I;
            });
          return a.renderAreaStatically(_, m, n, i);
        }
        return /* @__PURE__ */ $.createElement(Le, null, /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ $.createElement(Le, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(s, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, u = a.points, s = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && u && u.length && (!d && v > 0 || !Qi(d, u) || !Qi(h, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(u, s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, s = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, x = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, O = s.length === 1, A = Ie("recharts-area", l), _ = h && h.allowDataOverflow, m = v && v.allowDataOverflow, E = _ || m, T = Te(b) ? this.id : b, I = (n = xe(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, B = I.r, L = B === void 0 ? 3 : B, N = I.strokeWidth, j = N === void 0 ? 2 : N, q = yT(u) ? u : {}, F = q.clipDot, V = F === void 0 ? !0 : F, U = L * 2 + j;
      return /* @__PURE__ */ $.createElement(Le, {
        className: A
      }, _ || m ? /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("clipPath", {
        id: "clipPath-".concat(T)
      }, /* @__PURE__ */ $.createElement("rect", {
        x: _ ? d : d - g / 2,
        y: m ? f : f - x / 2,
        width: _ ? g : g * 2,
        height: m ? x : x * 2
      })), !V && /* @__PURE__ */ $.createElement("clipPath", {
        id: "clipPath-dots-".concat(T)
      }, /* @__PURE__ */ $.createElement("rect", {
        x: d - U / 2,
        y: f - U / 2,
        width: g + U,
        height: x + U
      }))) : null, O ? null : this.renderArea(E, T), (u || O) && this.renderDots(E, V, T), (!y || S) && Rr.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: i.curPoints,
        prevBaseLine: i.curBaseLine
      } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]), t;
}(Dr);
hM = Ai;
cn(Ai, "displayName", "Area");
cn(Ai, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Xr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
cn(Ai, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, u = t.props.baseValue, s = u ?? a;
  if (oe(s) && typeof s == "number")
    return s;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var d = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return s === "dataMin" ? h : s === "dataMax" || d < 0 ? d : Math.max(Math.min(f[0], f[1]), 0);
  }
  return s === "dataMin" ? f[0] : s === "dataMax" ? f[1] : f[0];
});
cn(Ai, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, u = e.yAxisTicks, s = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, x = f && f.length, y = hM.getBaseValue(t, r, n, i), b = g === "horizontal", S = !1, O = h.map(function(_, m) {
    var E;
    x ? E = f[d + m] : (E = mt(_, l), Array.isArray(E) ? S = !0 : E = [y, E]);
    var T = E[1] == null || x && mt(_, l) == null;
    return b ? {
      x: Zc({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: _,
        index: m
      }),
      y: T ? null : i.scale(E[1]),
      value: E,
      payload: _
    } : {
      x: T ? null : n.scale(E[1]),
      y: Zc({
        axis: i,
        ticks: u,
        bandSize: s,
        entry: _,
        index: m
      }),
      value: E,
      payload: _
    };
  }), A;
  return x || S ? A = O.map(function(_) {
    var m = Array.isArray(_.value) ? _.value[0] : null;
    return b ? {
      x: _.x,
      y: m != null && _.y != null ? i.scale(m) : null
    } : {
      x: m != null ? n.scale(m) : null,
      y: _.y
    };
  }) : A = b ? i.scale(y) : n.scale(y), ci({
    points: O,
    baseLine: A,
    layout: g,
    isRange: S
  }, v);
});
cn(Ai, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ $.isValidElement(e))
    r = /* @__PURE__ */ $.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Ie("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ $.createElement(cs, Gi({}, t, {
      className: n
    }));
  }
  return r;
});
function im() {
  return im = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, im.apply(this, arguments);
}
var Kn = function(t) {
  var r = t.xAxisId, n = Ab(), i = Pb(), a = aM(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ $.createElement(wo, im({}, a, {
      className: Ie("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return $n(s, !0);
      }
    }))
  );
};
Kn.displayName = "XAxis";
Kn.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
};
function am() {
  return am = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, am.apply(this, arguments);
}
var Vn = function(t) {
  var r = t.yAxisId, n = Ab(), i = Pb(), a = oM(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ $.createElement(wo, am({}, a, {
      className: Ie("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return $n(s, !0);
      }
    }))
  );
};
Vn.displayName = "YAxis";
Vn.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
};
function _E(e) {
  return jV(e) || kV(e) || $V(e) || RV();
}
function RV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $V(e, t) {
  if (e) {
    if (typeof e == "string") return om(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return om(e, t);
  }
}
function kV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jV(e) {
  if (Array.isArray(e)) return om(e);
}
function om(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var um = function(t, r, n, i, a) {
  var u = vr(t, Eb), s = vr(t, ls), l = [].concat(_E(u), _E(s)), f = vr(t, fs), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(y, b) {
    if (b.props[d] === n && fn(b.props, "extendDomain") && oe(b.props[h])) {
      var S = b.props[h];
      return [Math.min(y[0], S), Math.max(y[1], S)];
    }
    return y;
  }, v)), f.length) {
    var g = "".concat(h, "1"), x = "".concat(h, "2");
    v = f.reduce(function(y, b) {
      if (b.props[d] === n && fn(b.props, "extendDomain") && oe(b.props[g]) && oe(b.props[x])) {
        var S = b.props[g], O = b.props[x];
        return [Math.min(y[0], S, O), Math.max(y[1], S, O)];
      }
      return y;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(y, b) {
    return oe(b) ? [Math.min(y[0], b), Math.max(y[1], b)] : y;
  }, v)), v;
}, Lg = { exports: {} }, OE;
function NV() {
  return OE || (OE = 1, function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(l, f, d) {
      this.fn = l, this.context = f, this.once = d || !1;
    }
    function a(l, f, d, h, v) {
      if (typeof d != "function")
        throw new TypeError("The listener must be a function");
      var g = new i(d, h || l, v), x = r ? r + f : f;
      return l._events[x] ? l._events[x].fn ? l._events[x] = [l._events[x], g] : l._events[x].push(g) : (l._events[x] = g, l._eventsCount++), l;
    }
    function u(l, f) {
      --l._eventsCount === 0 ? l._events = new n() : delete l._events[f];
    }
    function s() {
      this._events = new n(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var f = [], d, h;
      if (this._eventsCount === 0) return f;
      for (h in d = this._events)
        t.call(d, h) && f.push(r ? h.slice(1) : h);
      return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(d)) : f;
    }, s.prototype.listeners = function(f) {
      var d = r ? r + f : f, h = this._events[d];
      if (!h) return [];
      if (h.fn) return [h.fn];
      for (var v = 0, g = h.length, x = new Array(g); v < g; v++)
        x[v] = h[v].fn;
      return x;
    }, s.prototype.listenerCount = function(f) {
      var d = r ? r + f : f, h = this._events[d];
      return h ? h.fn ? 1 : h.length : 0;
    }, s.prototype.emit = function(f, d, h, v, g, x) {
      var y = r ? r + f : f;
      if (!this._events[y]) return !1;
      var b = this._events[y], S = arguments.length, O, A;
      if (b.fn) {
        switch (b.once && this.removeListener(f, b.fn, void 0, !0), S) {
          case 1:
            return b.fn.call(b.context), !0;
          case 2:
            return b.fn.call(b.context, d), !0;
          case 3:
            return b.fn.call(b.context, d, h), !0;
          case 4:
            return b.fn.call(b.context, d, h, v), !0;
          case 5:
            return b.fn.call(b.context, d, h, v, g), !0;
          case 6:
            return b.fn.call(b.context, d, h, v, g, x), !0;
        }
        for (A = 1, O = new Array(S - 1); A < S; A++)
          O[A - 1] = arguments[A];
        b.fn.apply(b.context, O);
      } else {
        var _ = b.length, m;
        for (A = 0; A < _; A++)
          switch (b[A].once && this.removeListener(f, b[A].fn, void 0, !0), S) {
            case 1:
              b[A].fn.call(b[A].context);
              break;
            case 2:
              b[A].fn.call(b[A].context, d);
              break;
            case 3:
              b[A].fn.call(b[A].context, d, h);
              break;
            case 4:
              b[A].fn.call(b[A].context, d, h, v);
              break;
            default:
              if (!O) for (m = 1, O = new Array(S - 1); m < S; m++)
                O[m - 1] = arguments[m];
              b[A].fn.apply(b[A].context, O);
          }
      }
      return !0;
    }, s.prototype.on = function(f, d, h) {
      return a(this, f, d, h, !1);
    }, s.prototype.once = function(f, d, h) {
      return a(this, f, d, h, !0);
    }, s.prototype.removeListener = function(f, d, h, v) {
      var g = r ? r + f : f;
      if (!this._events[g]) return this;
      if (!d)
        return u(this, g), this;
      var x = this._events[g];
      if (x.fn)
        x.fn === d && (!v || x.once) && (!h || x.context === h) && u(this, g);
      else {
        for (var y = 0, b = [], S = x.length; y < S; y++)
          (x[y].fn !== d || v && !x[y].once || h && x[y].context !== h) && b.push(x[y]);
        b.length ? this._events[g] = b.length === 1 ? b[0] : b : u(this, g);
      }
      return this;
    }, s.prototype.removeAllListeners = function(f) {
      var d;
      return f ? (d = r ? r + f : f, this._events[d] && u(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  }(Lg)), Lg.exports;
}
var DV = NV();
const LV = /* @__PURE__ */ Je(DV);
var qg = new LV(), Bg = "recharts.syncMouseEvents";
function Zu(e) {
  "@babel/helpers - typeof";
  return Zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zu(e);
}
function qV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gM(n.key), n);
  }
}
function FV(e, t, r) {
  return t && BV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fg(e, t, r) {
  return t = gM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gM(e) {
  var t = WV(e, "string");
  return Zu(t) == "symbol" ? t : String(t);
}
function WV(e, t) {
  if (Zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zV = /* @__PURE__ */ function() {
  function e() {
    qV(this, e), Fg(this, "activeIndex", 0), Fg(this, "coordinateList", []), Fg(this, "layout", "horizontal");
  }
  return FV(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, u = r.container, s = u === void 0 ? null : u, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, g = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = f ?? this.layout, this.offset = h ?? this.offset, this.mouseHandlerCallback = g ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, u = i.y, s = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, h = a + l + f, v = u + this.offset.top + s / 2 + d;
        this.mouseHandlerCallback({
          pageX: h,
          pageY: v
        });
      }
    }
  }]), e;
}();
function UV(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function HV(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function yM(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, u = it(t, r, n, i), s = it(t, r, n, a);
  return {
    points: [u, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function GV(e, t, r) {
  var n, i, a, u;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, u = r.top + r.height;
  else if (e === "vertical")
    i = t.y, u = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = it(s, l, f, h), g = it(s, l, d, h);
      n = v.x, i = v.y, a = g.x, u = g.y;
    } else
      return yM(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: u
  }];
}
function Ju(e) {
  "@babel/helpers - typeof";
  return Ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ju(e);
}
function SE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? SE(Object(r), !0).forEach(function(n) {
      KV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KV(e, t, r) {
  return t = VV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VV(e) {
  var t = YV(e, "string");
  return Ju(t) == "symbol" ? t : String(t);
}
function YV(e, t) {
  if (Ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XV(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, u = e.offset, s = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Zi;
  if (d === "ScatterChart")
    h = i, v = K9;
  else if (d === "BarChart")
    h = HV(f, i, u, l), v = xb;
  else if (f === "radial") {
    var g = yM(i), x = g.cx, y = g.cy, b = g.radius, S = g.startAngle, O = g.endAngle;
    h = {
      cx: x,
      cy: y,
      startAngle: S,
      endAngle: O,
      innerRadius: b,
      outerRadius: b
    }, v = S2;
  } else
    h = {
      points: GV(f, i, u)
    }, v = Zi;
  var A = xc(xc(xc(xc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), h), xe(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: s,
    className: Ie("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ Vr(t.props.cursor) ? /* @__PURE__ */ Ot(t.props.cursor, A) : /* @__PURE__ */ VE(v, A);
}
var ZV = ["item"], JV = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vu.apply(this, arguments);
}
function AE(e, t) {
  return tY(e) || eY(e, t) || bM(e, t) || QV();
}
function QV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function tY(e) {
  if (Array.isArray(e)) return e;
}
function PE(e, t) {
  if (e == null) return {};
  var r = rY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function nY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iY(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xM(n.key), n);
  }
}
function aY(e, t, r) {
  return t && iY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function oY(e, t, r) {
  return t = wl(t), uY(e, mM() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function uY(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return We(e);
}
function mM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mM = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function We(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sm(e, t);
}
function sm(e, t) {
  return sm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sm(e, t);
}
function oo(e) {
  return fY(e) || lY(e) || bM(e) || cY();
}
function cY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bM(e, t) {
  if (e) {
    if (typeof e == "string") return cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cm(e, t);
  }
}
function lY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fY(e) {
  if (Array.isArray(e)) return cm(e);
}
function cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function EE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? EE(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : EE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ae(e, t, r) {
  return t = xM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xM(e) {
  var t = dY(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function dY(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hY = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, pY = {
  width: "100%",
  height: "100%"
}, wM = {
  x: 0,
  y: 0
};
function wc(e) {
  return e;
}
var vY = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, gY = function(t, r, n, i) {
  var a = r.find(function(d) {
    return d && d.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var u = a.coordinate, s = i.radius;
      return ne(ne(ne({}, i), it(i.cx, i.cy, s, u)), {}, {
        angle: u,
        radius: s
      });
    }
    var l = a.coordinate, f = i.angle;
    return ne(ne(ne({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return wM;
}, rf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, u = (n ?? []).reduce(function(s, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(oo(s), oo(f)) : s;
  }, []);
  return u.length > 0 ? u : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function _M(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var lm = function(t, r, n, i) {
  var a = t.graphicalItems, u = t.tooltipAxis, s = rf(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (u.dataKey && !u.allowDuplicatedCategory) {
      var g = h === void 0 ? s : h;
      v = Ec(g, u.dataKey, i);
    } else
      v = h && h[n] || s[n];
    return v ? [].concat(oo(l), [m2(f, v)]) : l;
  }, []);
}, TE = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, u = vY(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = O4(u, s, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = lm(t, r, d, h), g = gY(n, s, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, yY = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, u = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = d2(d, a);
  return n.reduce(function(x, y) {
    var b, S = y.props, O = S.type, A = S.dataKey, _ = S.allowDataOverflow, m = S.allowDuplicatedCategory, E = S.scale, T = S.ticks, I = S.includeHidden, B = y.props[u];
    if (x[B])
      return x;
    var L = rf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[u] === B;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), N = L.length, j, q, F;
    UV(y.props.domain, _, O) && (j = Ty(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (F = lu(L, A, "category")));
    var V = _M(O);
    if (!j || j.length === 0) {
      var U, J = (U = y.props.domain) !== null && U !== void 0 ? U : V;
      if (A) {
        if (j = lu(L, A, O), O === "category" && g) {
          var G = PL(j);
          m && G ? (q = j, j = fl(0, N)) : m || (j = bA(J, j, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(oo(ae), [ce]);
          }, []));
        } else if (O === "category")
          m ? j = j.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : j = bA(J, j, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(oo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var ue = T4(L, i.filter(function(ae) {
            return ae.props[u] === B && (I || !ae.props.hide);
          }), A, a, d);
          ue && (j = ue);
        }
        g && (O === "number" || E !== "auto") && (F = lu(L, A, "category"));
      } else g ? j = fl(0, N) : s && s[B] && s[B].hasStack && O === "number" ? j = v === "expand" ? [0, 1] : y2(s[B].stackGroups, l, f) : j = f2(L, i.filter(function(ae) {
        return ae.props[u] === B && (I || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        j = um(h, j, B, a, T), J && (j = Ty(J, j, _));
      else if (O === "category" && J) {
        var H = J, X = j.every(function(ae) {
          return H.indexOf(ae) >= 0;
        });
        X && (j = H);
      }
    }
    return ne(ne({}, x), {}, Ae({}, B, ne(ne({}, y.props), {}, {
      axisType: a,
      domain: j,
      categoricalDomain: F,
      duplicateDomain: q,
      originalDomain: (b = y.props.domain) !== null && b !== void 0 ? b : V,
      isCategorical: g,
      layout: d
    })));
  }, {});
}, mY = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, u = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = rf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, x = d2(d, a), y = -1;
  return n.reduce(function(b, S) {
    var O = S.props[u], A = _M("number");
    if (!b[O]) {
      y++;
      var _;
      return x ? _ = fl(0, g) : s && s[O] && s[O].hasStack ? (_ = y2(s[O].stackGroups, l, f), _ = um(h, _, O, a)) : (_ = Ty(A, f2(v, n.filter(function(m) {
        return m.props[u] === O && !m.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = um(h, _, O, a)), ne(ne({}, b), {}, Ae({}, O, ne(ne({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: pr(hY, "".concat(a, ".").concat(y % 2), null),
        domain: _,
        originalDomain: A,
        isCategorical: x,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return b;
  }, {});
}, bY = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, u = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = vr(d, a), g = {};
  return v && v.length ? g = yY(t, {
    axes: v,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  }) : u && u.length && (g = mY(t, {
    Axis: a,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, xY = function(t) {
  var r = fi(t), n = $n(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Hm(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Jc(r, n)
  };
}, CE = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = fr(r, Qa), a = 0, u = 0;
  return t.data && t.data.length !== 0 && (u = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (u = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: u,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, wY = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = kn(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, ME = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, _Y = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, u = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = fr(h, Qa), x = fr(h, Wa), y = Object.keys(l).reduce(function(m, E) {
    var T = l[E], I = T.orientation;
    return !T.mirror && !T.hide ? ne(ne({}, m), {}, Ae({}, I, m[I] + T.width)) : m;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), b = Object.keys(u).reduce(function(m, E) {
    var T = u[E], I = T.orientation;
    return !T.mirror && !T.hide ? ne(ne({}, m), {}, Ae({}, I, pr(m, "".concat(I)) + T.height)) : m;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), S = ne(ne({}, b), y), O = S.bottom;
  g && (S.bottom += g.props.height || Qa.defaultProps.height), x && r && (S = P4(S, i, n, r));
  var A = f - S.left - S.right, _ = d - S.top - S.bottom;
  return ne(ne({
    brushBottom: O
  }, S), {}, {
    // never return negative values for height and width
    width: Math.max(A, 0),
    height: Math.max(_, 0)
  });
}, OY = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, nf = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, u = a === void 0 ? "axis" : a, s = t.validateTooltipEventTypes, l = s === void 0 ? ["axis"] : s, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(b, S) {
    var O = S.graphicalItems, A = S.stackGroups, _ = S.offset, m = S.updateId, E = S.dataStartIndex, T = S.dataEndIndex, I = b.barSize, B = b.layout, L = b.barGap, N = b.barCategoryGap, j = b.maxBarSize, q = ME(B), F = q.numericAxisName, V = q.cateAxisName, U = wY(O), J = [];
    return O.forEach(function(G, ue) {
      var H = rf(b.data, {
        graphicalItems: [G],
        dataStartIndex: E,
        dataEndIndex: T
      }), X = G.props, ae = X.dataKey, ce = X.maxBarSize, he = G.props["".concat(F, "Id")], ye = G.props["".concat(V, "Id")], be = {}, le = f.reduce(function(rr, vt) {
        var mn, Yn, To = S["".concat(vt.axisType, "Map")], Xn = G.props["".concat(vt.axisType, "Id")];
        To && To[Xn] || vt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? Qt(!1, "Specifying a(n) ".concat(vt.axisType, "Id requires a corresponding ").concat(
          vt.axisType,
          "Id on the targeted graphical component "
        ).concat((mn = G == null || (Yn = G.type) === null || Yn === void 0 ? void 0 : Yn.displayName) !== null && mn !== void 0 ? mn : "")) : Qt());
        var gs = To[Xn];
        return ne(ne({}, rr), {}, Ae(Ae({}, vt.axisType, gs), "".concat(vt.axisType, "Ticks"), $n(gs)));
      }, be), ge = le[V], te = le["".concat(V, "Ticks")], se = A && A[he] && A[he].hasStack && D4(G, A[he].stackGroups), ve = kn(G.type).indexOf("Bar") >= 0, k = Jc(ge, te), Ee = [], we = U && S4({
        barSize: I,
        stackGroups: A,
        totalSize: OY(le, V)
      });
      if (ve) {
        var Fe, ct, at = Te(ce) ? j : ce, Kt = (Fe = (ct = Jc(ge, te, !0)) !== null && ct !== void 0 ? ct : at) !== null && Fe !== void 0 ? Fe : 0;
        Ee = A4({
          barGap: L,
          barCategoryGap: N,
          bandSize: Kt !== k ? Kt : k,
          sizeList: we[ye],
          maxBarSize: at
        }), Kt !== k && (Ee = Ee.map(function(rr) {
          return ne(ne({}, rr), {}, {
            position: ne(ne({}, rr.position), {}, {
              offset: rr.position.offset - Kt / 2
            })
          });
        }));
      }
      var qr = G && G.type && G.type.getComposedData;
      qr && J.push({
        props: ne(ne({}, qr(ne(ne({}, le), {}, {
          displayedData: H,
          props: b,
          dataKey: ae,
          item: G,
          bandSize: k,
          barPosition: Ee,
          offset: _,
          stackedData: se,
          layout: B,
          dataStartIndex: E,
          dataEndIndex: T
        }))), {}, Ae(Ae(Ae({
          key: G.key || "item-".concat(ue)
        }, F, le[F]), V, le[V]), "animationId", m)),
        childIndex: DL(G, b.children),
        item: G
      });
    }), J;
  }, x = function(b, S) {
    var O = b.props, A = b.dataStartIndex, _ = b.dataEndIndex, m = b.updateId;
    if (!k1({
      props: O
    }))
      return null;
    var E = O.children, T = O.layout, I = O.stackOffset, B = O.data, L = O.reverseStackOrder, N = ME(T), j = N.numericAxisName, q = N.cateAxisName, F = vr(E, i), V = j4(B, F, "".concat(j, "Id"), "".concat(q, "Id"), I, L), U = f.reduce(function(X, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return ne(ne({}, X), {}, Ae({}, ce, bY(O, ne(ne({}, ae), {}, {
        graphicalItems: F,
        stackGroups: ae.axisType === j && V,
        dataStartIndex: A,
        dataEndIndex: _
      }))));
    }, {}), J = _Y(ne(ne({}, U), {}, {
      props: O,
      graphicalItems: F
    }), S == null ? void 0 : S.legendBBox);
    Object.keys(U).forEach(function(X) {
      U[X] = h(O, U[X], J, X.replace("Map", ""), n);
    });
    var G = U["".concat(q, "Map")], ue = xY(G), H = g(O, ne(ne({}, U), {}, {
      dataStartIndex: A,
      dataEndIndex: _,
      updateId: m,
      graphicalItems: F,
      stackGroups: V,
      offset: J
    }));
    return ne(ne({
      formattedGraphicalItems: H,
      graphicalItems: F,
      offset: J,
      stackGroups: V
    }, ue), U);
  };
  return r = /* @__PURE__ */ function(y) {
    sY(b, y);
    function b(S) {
      var O, A, _;
      return nY(this, b), _ = oY(this, b, [S]), Ae(We(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Ae(We(_), "accessibilityManager", new zV()), Ae(We(_), "handleLegendBBoxUpdate", function(m) {
        if (m) {
          var E = _.state, T = E.dataStartIndex, I = E.dataEndIndex, B = E.updateId;
          _.setState(ne({
            legendBBox: m
          }, x({
            props: _.props,
            dataStartIndex: T,
            dataEndIndex: I,
            updateId: B
          }, ne(ne({}, _.state), {}, {
            legendBBox: m
          }))));
        }
      }), Ae(We(_), "handleReceiveSyncEvent", function(m, E, T) {
        if (_.props.syncId === m) {
          if (T === _.eventEmitterSymbol && typeof _.props.syncMethod != "function")
            return;
          _.applySyncEvent(E);
        }
      }), Ae(We(_), "handleBrushChange", function(m) {
        var E = m.startIndex, T = m.endIndex;
        if (E !== _.state.dataStartIndex || T !== _.state.dataEndIndex) {
          var I = _.state.updateId;
          _.setState(function() {
            return ne({
              dataStartIndex: E,
              dataEndIndex: T
            }, x({
              props: _.props,
              dataStartIndex: E,
              dataEndIndex: T,
              updateId: I
            }, _.state));
          }), _.triggerSyncEvent({
            dataStartIndex: E,
            dataEndIndex: T
          });
        }
      }), Ae(We(_), "handleMouseEnter", function(m) {
        var E = _.getMouseInfo(m);
        if (E) {
          var T = ne(ne({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(T), _.triggerSyncEvent(T);
          var I = _.props.onMouseEnter;
          Pe(I) && I(T, m);
        }
      }), Ae(We(_), "triggeredAfterMouseMove", function(m) {
        var E = _.getMouseInfo(m), T = E ? ne(ne({}, E), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        _.setState(T), _.triggerSyncEvent(T);
        var I = _.props.onMouseMove;
        Pe(I) && I(T, m);
      }), Ae(We(_), "handleItemMouseEnter", function(m) {
        _.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: m,
            activePayload: m.tooltipPayload,
            activeCoordinate: m.tooltipPosition || {
              x: m.cx,
              y: m.cy
            }
          };
        });
      }), Ae(We(_), "handleItemMouseLeave", function() {
        _.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Ae(We(_), "handleMouseMove", function(m) {
        m.persist(), _.throttleTriggeredAfterMouseMove(m);
      }), Ae(We(_), "handleMouseLeave", function(m) {
        _.throttleTriggeredAfterMouseMove.cancel();
        var E = {
          isTooltipActive: !1
        };
        _.setState(E), _.triggerSyncEvent(E);
        var T = _.props.onMouseLeave;
        Pe(T) && T(E, m);
      }), Ae(We(_), "handleOuterEvent", function(m) {
        var E = NL(m), T = pr(_.props, "".concat(E));
        if (E && Pe(T)) {
          var I, B;
          /.*touch.*/i.test(E) ? B = _.getMouseInfo(m.changedTouches[0]) : B = _.getMouseInfo(m), T((I = B) !== null && I !== void 0 ? I : {}, m);
        }
      }), Ae(We(_), "handleClick", function(m) {
        var E = _.getMouseInfo(m);
        if (E) {
          var T = ne(ne({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(T), _.triggerSyncEvent(T);
          var I = _.props.onClick;
          Pe(I) && I(T, m);
        }
      }), Ae(We(_), "handleMouseDown", function(m) {
        var E = _.props.onMouseDown;
        if (Pe(E)) {
          var T = _.getMouseInfo(m);
          E(T, m);
        }
      }), Ae(We(_), "handleMouseUp", function(m) {
        var E = _.props.onMouseUp;
        if (Pe(E)) {
          var T = _.getMouseInfo(m);
          E(T, m);
        }
      }), Ae(We(_), "handleTouchMove", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && _.throttleTriggeredAfterMouseMove(m.changedTouches[0]);
      }), Ae(We(_), "handleTouchStart", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && _.handleMouseDown(m.changedTouches[0]);
      }), Ae(We(_), "handleTouchEnd", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && _.handleMouseUp(m.changedTouches[0]);
      }), Ae(We(_), "triggerSyncEvent", function(m) {
        _.props.syncId !== void 0 && qg.emit(Bg, _.props.syncId, m, _.eventEmitterSymbol);
      }), Ae(We(_), "applySyncEvent", function(m) {
        var E = _.props, T = E.layout, I = E.syncMethod, B = _.state.updateId, L = m.dataStartIndex, N = m.dataEndIndex;
        if (m.dataStartIndex !== void 0 || m.dataEndIndex !== void 0)
          _.setState(ne({
            dataStartIndex: L,
            dataEndIndex: N
          }, x({
            props: _.props,
            dataStartIndex: L,
            dataEndIndex: N,
            updateId: B
          }, _.state)));
        else if (m.activeTooltipIndex !== void 0) {
          var j = m.chartX, q = m.chartY, F = m.activeTooltipIndex, V = _.state, U = V.offset, J = V.tooltipTicks;
          if (!U)
            return;
          if (typeof I == "function")
            F = I(J, m);
          else if (I === "value") {
            F = -1;
            for (var G = 0; G < J.length; G++)
              if (J[G].value === m.activeLabel) {
                F = G;
                break;
              }
          }
          var ue = ne(ne({}, U), {}, {
            x: U.left,
            y: U.top
          }), H = Math.min(j, ue.x + ue.width), X = Math.min(q, ue.y + ue.height), ae = J[F] && J[F].value, ce = lm(_.state, _.props.data, F), he = J[F] ? {
            x: T === "horizontal" ? J[F].coordinate : H,
            y: T === "horizontal" ? X : J[F].coordinate
          } : wM;
          _.setState(ne(ne({}, m), {}, {
            activeLabel: ae,
            activeCoordinate: he,
            activePayload: ce,
            activeTooltipIndex: F
          }));
        } else
          _.setState(m);
      }), Ae(We(_), "renderCursor", function(m) {
        var E, T = _.state, I = T.isTooltipActive, B = T.activeCoordinate, L = T.activePayload, N = T.offset, j = T.activeTooltipIndex, q = T.tooltipAxisBandSize, F = _.getTooltipEventType(), V = (E = m.props.active) !== null && E !== void 0 ? E : I, U = _.props.layout, J = m.key || "_recharts-cursor";
        return /* @__PURE__ */ $.createElement(XV, {
          key: J,
          activeCoordinate: B,
          activePayload: L,
          activeTooltipIndex: j,
          chartName: n,
          element: m,
          isActive: V,
          layout: U,
          offset: N,
          tooltipAxisBandSize: q,
          tooltipEventType: F
        });
      }), Ae(We(_), "renderPolarAxis", function(m, E, T) {
        var I = pr(m, "type.axisType"), B = pr(_.state, "".concat(I, "Map")), L = B && B[m.props["".concat(I, "Id")]];
        return /* @__PURE__ */ Ot(m, ne(ne({}, L), {}, {
          className: Ie(I, L.className),
          key: m.key || "".concat(E, "-").concat(T),
          ticks: $n(L, !0)
        }));
      }), Ae(We(_), "renderPolarGrid", function(m) {
        var E = m.props, T = E.radialLines, I = E.polarAngles, B = E.polarRadius, L = _.state, N = L.radiusAxisMap, j = L.angleAxisMap, q = fi(N), F = fi(j), V = F.cx, U = F.cy, J = F.innerRadius, G = F.outerRadius;
        return /* @__PURE__ */ Ot(m, {
          polarAngles: Array.isArray(I) ? I : $n(F, !0).map(function(ue) {
            return ue.coordinate;
          }),
          polarRadius: Array.isArray(B) ? B : $n(q, !0).map(function(ue) {
            return ue.coordinate;
          }),
          cx: V,
          cy: U,
          innerRadius: J,
          outerRadius: G,
          key: m.key || "polar-grid",
          radialLines: T
        });
      }), Ae(We(_), "renderLegend", function() {
        var m = _.state.formattedGraphicalItems, E = _.props, T = E.children, I = E.width, B = E.height, L = _.props.margin || {}, N = I - (L.left || 0) - (L.right || 0), j = c2({
          children: T,
          formattedGraphicalItems: m,
          legendWidth: N,
          legendContent: d
        });
        if (!j)
          return null;
        var q = j.item, F = PE(j, ZV);
        return /* @__PURE__ */ Ot(q, ne(ne({}, F), {}, {
          chartWidth: I,
          chartHeight: B,
          margin: L,
          onBBoxUpdate: _.handleLegendBBoxUpdate
        }));
      }), Ae(We(_), "renderTooltip", function() {
        var m, E = _.props, T = E.children, I = E.accessibilityLayer, B = fr(T, un);
        if (!B)
          return null;
        var L = _.state, N = L.isTooltipActive, j = L.activeCoordinate, q = L.activePayload, F = L.activeLabel, V = L.offset, U = (m = B.props.active) !== null && m !== void 0 ? m : N;
        return /* @__PURE__ */ Ot(B, {
          viewBox: ne(ne({}, V), {}, {
            x: V.left,
            y: V.top
          }),
          active: U,
          label: F,
          payload: U ? q : [],
          coordinate: j,
          accessibilityLayer: I
        });
      }), Ae(We(_), "renderBrush", function(m) {
        var E = _.props, T = E.margin, I = E.data, B = _.state, L = B.offset, N = B.dataStartIndex, j = B.dataEndIndex, q = B.updateId;
        return /* @__PURE__ */ Ot(m, {
          key: m.key || "_recharts-brush",
          onChange: pc(_.handleBrushChange, m.props.onChange),
          data: I,
          x: oe(m.props.x) ? m.props.x : L.left,
          y: oe(m.props.y) ? m.props.y : L.top + L.height + L.brushBottom - (T.bottom || 0),
          width: oe(m.props.width) ? m.props.width : L.width,
          startIndex: N,
          endIndex: j,
          updateId: "brush-".concat(q)
        });
      }), Ae(We(_), "renderReferenceElement", function(m, E, T) {
        if (!m)
          return null;
        var I = We(_), B = I.clipPathId, L = _.state, N = L.xAxisMap, j = L.yAxisMap, q = L.offset, F = m.props, V = F.xAxisId, U = F.yAxisId;
        return /* @__PURE__ */ Ot(m, {
          key: m.key || "".concat(E, "-").concat(T),
          xAxis: N[V],
          yAxis: j[U],
          viewBox: {
            x: q.left,
            y: q.top,
            width: q.width,
            height: q.height
          },
          clipPathId: B
        });
      }), Ae(We(_), "renderActivePoints", function(m) {
        var E = m.item, T = m.activePoint, I = m.basePoint, B = m.childIndex, L = m.isRange, N = [], j = E.props.key, q = E.item.props, F = q.activeDot, V = q.dataKey, U = ne(ne({
          index: B,
          dataKey: V,
          cx: T.x,
          cy: T.y,
          r: 4,
          fill: mb(E.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: T.payload,
          value: T.value,
          key: "".concat(j, "-activePoint-").concat(B)
        }, xe(F, !1)), Tc(F));
        return N.push(b.renderActiveDot(F, U)), I ? N.push(b.renderActiveDot(F, ne(ne({}, U), {}, {
          cx: I.x,
          cy: I.y,
          key: "".concat(j, "-basePoint-").concat(B)
        }))) : L && N.push(null), N;
      }), Ae(We(_), "renderGraphicChild", function(m, E, T) {
        var I = _.filterFormatItem(m, E, T);
        if (!I)
          return null;
        var B = _.getTooltipEventType(), L = _.state, N = L.isTooltipActive, j = L.tooltipAxis, q = L.activeTooltipIndex, F = L.activeLabel, V = _.props.children, U = fr(V, un), J = I.props, G = J.points, ue = J.isRange, H = J.baseLine, X = I.item.props, ae = X.activeDot, ce = X.hide, he = X.activeBar, ye = X.activeShape, be = !!(!ce && N && U && (ae || he || ye)), le = {};
        B !== "axis" && U && U.props.trigger === "click" ? le = {
          onClick: pc(_.handleItemMouseEnter, m.props.onClick)
        } : B !== "axis" && (le = {
          onMouseLeave: pc(_.handleItemMouseLeave, m.props.onMouseLeave),
          onMouseEnter: pc(_.handleItemMouseEnter, m.props.onMouseEnter)
        });
        var ge = /* @__PURE__ */ Ot(m, ne(ne({}, I.props), le));
        function te(vt) {
          return typeof j.dataKey == "function" ? j.dataKey(vt.payload) : null;
        }
        if (be)
          if (q >= 0) {
            var se, ve;
            if (j.dataKey && !j.allowDuplicatedCategory) {
              var k = typeof j.dataKey == "function" ? te : "payload.".concat(j.dataKey.toString());
              se = Ec(G, k, F), ve = ue && H && Ec(H, k, F);
            } else
              se = G == null ? void 0 : G[q], ve = ue && H && H[q];
            if (ye || he) {
              var Ee = m.props.activeIndex !== void 0 ? m.props.activeIndex : q;
              return [/* @__PURE__ */ Ot(m, ne(ne(ne({}, I.props), le), {}, {
                activeIndex: Ee
              })), null, null];
            }
            if (!Te(se))
              return [ge].concat(oo(_.renderActivePoints({
                item: I,
                activePoint: se,
                basePoint: ve,
                childIndex: q,
                isRange: ue
              })));
          } else {
            var we, Fe = (we = _.getItemByXY(_.state.activeCoordinate)) !== null && we !== void 0 ? we : {
              graphicalItem: ge
            }, ct = Fe.graphicalItem, at = ct.item, Kt = at === void 0 ? m : at, qr = ct.childIndex, rr = ne(ne(ne({}, I.props), le), {}, {
              activeIndex: qr
            });
            return [/* @__PURE__ */ Ot(Kt, rr), null, null];
          }
        return ue ? [ge, null, null] : [ge, null];
      }), Ae(We(_), "renderCustomized", function(m, E, T) {
        return /* @__PURE__ */ Ot(m, ne(ne({
          key: "recharts-customized-".concat(T)
        }, _.props), _.state));
      }), Ae(We(_), "renderMap", {
        CartesianGrid: {
          handler: wc,
          once: !0
        },
        ReferenceArea: {
          handler: _.renderReferenceElement
        },
        ReferenceLine: {
          handler: wc
        },
        ReferenceDot: {
          handler: _.renderReferenceElement
        },
        XAxis: {
          handler: wc
        },
        YAxis: {
          handler: wc
        },
        Brush: {
          handler: _.renderBrush,
          once: !0
        },
        Bar: {
          handler: _.renderGraphicChild
        },
        Line: {
          handler: _.renderGraphicChild
        },
        Area: {
          handler: _.renderGraphicChild
        },
        Radar: {
          handler: _.renderGraphicChild
        },
        RadialBar: {
          handler: _.renderGraphicChild
        },
        Scatter: {
          handler: _.renderGraphicChild
        },
        Pie: {
          handler: _.renderGraphicChild
        },
        Funnel: {
          handler: _.renderGraphicChild
        },
        Tooltip: {
          handler: _.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: _.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: _.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: _.renderPolarAxis
        },
        Customized: {
          handler: _.renderCustomized
        }
      }), _.clipPathId = "".concat((O = S.id) !== null && O !== void 0 ? O : aa("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = fC(_.triggeredAfterMouseMove, (A = S.throttleDelay) !== null && A !== void 0 ? A : 1e3 / 60), _.state = {}, _;
    }
    return aY(b, [{
      key: "componentDidMount",
      value: function() {
        var O, A;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (O = this.props.margin.left) !== null && O !== void 0 ? O : 0,
            top: (A = this.props.margin.top) !== null && A !== void 0 ? A : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var O = this.props, A = O.children, _ = O.data, m = O.height, E = O.layout, T = fr(A, un);
        if (T) {
          var I = T.props.defaultIndex;
          if (!(typeof I != "number" || I < 0 || I > this.state.tooltipTicks.length)) {
            var B = this.state.tooltipTicks[I] && this.state.tooltipTicks[I].value, L = lm(this.state, _, I, B), N = this.state.tooltipTicks[I].coordinate, j = (this.state.offset.top + m) / 2, q = E === "horizontal", F = q ? {
              x: N,
              y: j
            } : {
              y: N,
              x: j
            }, V = this.state.formattedGraphicalItems.find(function(J) {
              var G = J.item;
              return G.type.name === "Scatter";
            });
            V && (F = ne(ne({}, F), V.props.points[I].tooltipPosition), L = V.props.points[I].tooltipPayload);
            var U = {
              activeTooltipIndex: I,
              isTooltipActive: !0,
              activeLabel: B,
              activePayload: L,
              activeCoordinate: F
            };
            this.setState(U), this.renderCursor(T), this.accessibilityManager.setIndex(I);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(O, A) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== A.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== O.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== O.margin) {
          var _, m;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_ = this.props.margin.left) !== null && _ !== void 0 ? _ : 0,
              top: (m = this.props.margin.top) !== null && m !== void 0 ? m : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(O) {
        Xg([fr(O.children, un)], [fr(this.props.children, un)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = fr(this.props.children, un);
        if (O && typeof O.props.shared == "boolean") {
          var A = O.props.shared ? "axis" : "item";
          return l.indexOf(A) >= 0 ? A : u;
        }
        return u;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(O) {
        if (!this.container)
          return null;
        var A = this.container, _ = A.getBoundingClientRect(), m = OF(_), E = {
          chartX: Math.round(O.pageX - m.left),
          chartY: Math.round(O.pageY - m.top)
        }, T = _.width / A.offsetWidth || 1, I = this.inRange(E.chartX, E.chartY, T);
        if (!I)
          return null;
        var B = this.state, L = B.xAxisMap, N = B.yAxisMap, j = this.getTooltipEventType();
        if (j !== "axis" && L && N) {
          var q = fi(L).scale, F = fi(N).scale, V = q && q.invert ? q.invert(E.chartX) : null, U = F && F.invert ? F.invert(E.chartY) : null;
          return ne(ne({}, E), {}, {
            xValue: V,
            yValue: U
          });
        }
        var J = TE(this.state, this.props.data, this.props.layout, I);
        return J ? ne(ne({}, E), J) : null;
      }
    }, {
      key: "inRange",
      value: function(O, A) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, m = this.props.layout, E = O / _, T = A / _;
        if (m === "horizontal" || m === "vertical") {
          var I = this.state.offset, B = E >= I.left && E <= I.left + I.width && T >= I.top && T <= I.top + I.height;
          return B ? {
            x: E,
            y: T
          } : null;
        }
        var L = this.state, N = L.angleAxisMap, j = L.radiusAxisMap;
        if (N && j) {
          var q = fi(N);
          return _A({
            x: E,
            y: T
          }, q);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, A = this.getTooltipEventType(), _ = fr(O, un), m = {};
        _ && A === "axis" && (_.props.trigger === "click" ? m = {
          onClick: this.handleClick
        } : m = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var E = Tc(this.props, this.handleOuterEvent);
        return ne(ne({}, E), m);
      }
    }, {
      key: "addListener",
      value: function() {
        qg.on(Bg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        qg.removeListener(Bg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, A, _) {
        for (var m = this.state.formattedGraphicalItems, E = 0, T = m.length; E < T; E++) {
          var I = m[E];
          if (I.item === O || I.props.key === O.key || A === kn(I.item.type) && _ === I.childIndex)
            return I;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, A = this.state.offset, _ = A.left, m = A.top, E = A.height, T = A.width;
        return /* @__PURE__ */ $.createElement("defs", null, /* @__PURE__ */ $.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ $.createElement("rect", {
          x: _,
          y: m,
          height: E,
          width: T
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(A, _) {
          var m = AE(_, 2), E = m[0], T = m[1];
          return ne(ne({}, A), {}, Ae({}, E, T.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(A, _) {
          var m = AE(_, 2), E = m[0], T = m[1];
          return ne(ne({}, A), {}, Ae({}, E, T.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(O) {
        var A;
        return (A = this.state.xAxisMap) === null || A === void 0 || (A = A[O]) === null || A === void 0 ? void 0 : A.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(O) {
        var A;
        return (A = this.state.yAxisMap) === null || A === void 0 || (A = A[O]) === null || A === void 0 ? void 0 : A.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(O) {
        var A = this.state, _ = A.formattedGraphicalItems, m = A.activeItem;
        if (_ && _.length)
          for (var E = 0, T = _.length; E < T; E++) {
            var I = _[E], B = I.props, L = I.item, N = kn(L.type);
            if (N === "Bar") {
              var j = (B.data || []).find(function(U) {
                return E9(O, U);
              });
              if (j)
                return {
                  graphicalItem: I,
                  payload: j
                };
            } else if (N === "RadialBar") {
              var q = (B.data || []).find(function(U) {
                return _A(O, U);
              });
              if (q)
                return {
                  graphicalItem: I,
                  payload: q
                };
            } else if (Ql(I, m) || ef(I, m) || Uu(I, m)) {
              var F = XH({
                graphicalItem: I,
                activeTooltipItem: m,
                itemData: L.props.data
              }), V = L.props.activeIndex === void 0 ? F : L.props.activeIndex;
              return {
                graphicalItem: ne(ne({}, I), {}, {
                  childIndex: V
                }),
                payload: Uu(I, m) ? L.props.data[F] : I.props.data[F]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!k1(this))
          return null;
        var A = this.props, _ = A.children, m = A.className, E = A.width, T = A.height, I = A.style, B = A.compact, L = A.title, N = A.desc, j = PE(A, JV), q = xe(j, !1);
        if (B)
          return /* @__PURE__ */ $.createElement(aE, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ $.createElement(Jg, vu({}, q, {
            width: E,
            height: T,
            title: L,
            desc: N
          }), this.renderClipPath(), N1(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var F, V;
          q.tabIndex = (F = this.props.tabIndex) !== null && F !== void 0 ? F : 0, q.role = (V = this.props.role) !== null && V !== void 0 ? V : "application", q.onKeyDown = function(J) {
            O.accessibilityManager.keyboardEvent(J);
          }, q.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var U = this.parseEventsOfWrapper();
        return /* @__PURE__ */ $.createElement(aE, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ $.createElement("div", vu({
          className: Ie("recharts-wrapper", m),
          style: ne({
            position: "relative",
            cursor: "default",
            width: E,
            height: T
          }, I)
        }, U, {
          ref: function(G) {
            O.container = G;
          }
        }), /* @__PURE__ */ $.createElement(Jg, vu({}, q, {
          width: E,
          height: T,
          title: L,
          desc: N,
          style: pY
        }), this.renderClipPath(), N1(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), b;
  }(YE), Ae(r, "displayName", n), Ae(r, "defaultProps", ne({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, v)), Ae(r, "getDerivedStateFromProps", function(y, b) {
    var S = y.dataKey, O = y.data, A = y.children, _ = y.width, m = y.height, E = y.layout, T = y.stackOffset, I = y.margin, B = b.dataStartIndex, L = b.dataEndIndex;
    if (b.updateId === void 0) {
      var N = CE(y);
      return ne(ne(ne({}, N), {}, {
        updateId: 0
      }, x(ne(ne({
        props: y
      }, N), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: S,
        prevData: O,
        prevWidth: _,
        prevHeight: m,
        prevLayout: E,
        prevStackOffset: T,
        prevMargin: I,
        prevChildren: A
      });
    }
    if (S !== b.prevDataKey || O !== b.prevData || _ !== b.prevWidth || m !== b.prevHeight || E !== b.prevLayout || T !== b.prevStackOffset || !ja(I, b.prevMargin)) {
      var j = CE(y), q = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, F = ne(ne({}, TE(b, O, E)), {}, {
        updateId: b.updateId + 1
      }), V = ne(ne(ne({}, j), q), F);
      return ne(ne(ne({}, V), x(ne({
        props: y
      }, V), b)), {}, {
        prevDataKey: S,
        prevData: O,
        prevWidth: _,
        prevHeight: m,
        prevLayout: E,
        prevStackOffset: T,
        prevMargin: I,
        prevChildren: A
      });
    }
    if (!Xg(A, b.prevChildren)) {
      var U, J, G, ue, H = fr(A, Qa), X = H && (U = (J = H.props) === null || J === void 0 ? void 0 : J.startIndex) !== null && U !== void 0 ? U : B, ae = H && (G = (ue = H.props) === null || ue === void 0 ? void 0 : ue.endIndex) !== null && G !== void 0 ? G : L, ce = X !== B || ae !== L, he = !Te(O), ye = he && !ce ? b.updateId : b.updateId + 1;
      return ne(ne({
        updateId: ye
      }, x(ne(ne({
        props: y
      }, b), {}, {
        updateId: ye,
        dataStartIndex: X,
        dataEndIndex: ae
      }), b)), {}, {
        prevChildren: A,
        dataStartIndex: X,
        dataEndIndex: ae
      });
    }
    return null;
  }), Ae(r, "renderActiveDot", function(y, b) {
    var S;
    return /* @__PURE__ */ Vr(y) ? S = /* @__PURE__ */ Ot(y, b) : Pe(y) ? S = y(b) : S = /* @__PURE__ */ $.createElement(cs, b), /* @__PURE__ */ $.createElement(Le, {
      className: "recharts-active-dot",
      key: b.key
    }, S);
  }), r;
}, SY = nf({
  chartName: "LineChart",
  GraphicalChild: hs,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: wb
}), OM = nf({
  chartName: "BarChart",
  GraphicalChild: Si,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: wb
}), AY = nf({
  chartName: "PieChart",
  GraphicalChild: Gn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Jl
  }, {
    axisType: "radiusAxis",
    AxisComp: Xl
  }],
  formatAxisMap: K4,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), PY = nf({
  chartName: "AreaChart",
  GraphicalChild: Ai,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: wb
});
const EY = Wn("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), TY = { light: "", dark: ".dark" }, SM = Z.createContext(null);
function AM() {
  const e = Z.useContext(SM);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const CY = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, u) => {
  const s = Z.useId(), l = `chart-${e || s.replace(/:/g, "")}`, f = Z.useRef(null), [d, h] = $r(), v = lo(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return bm(() => {
    const g = u && "current" in u ? u.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, u, f]), /* @__PURE__ */ Y(SM.Provider, { value: { config: i }, children: /* @__PURE__ */ Xe(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: u || f,
      className: Lt(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? EY({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ Y(MY, { id: l, config: i }),
        /* @__PURE__ */ Y(
          gF,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, _o = Z.forwardRef(CY);
_o.displayName = "Chart";
const MY = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ Y(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(TY).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, u]) => {
            var l;
            const s = ((l = u.theme) == null ? void 0 : l[n]) || u.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, ps = un, Oo = Z.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: u,
    labelFormatter: s,
    labelClassName: l,
    formatter: f,
    yAxisFormatter: d,
    color: h,
    nameKey: v,
    labelKey: g
  }, x) => {
    const { config: y } = AM(), b = Z.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, A = `${g || O.dataKey || O.name || "value"}`, _ = fm(y, O, A), m = !g && typeof u == "string" ? ((E = y[u]) == null ? void 0 : E.label) || u : _ == null ? void 0 : _.label;
      return s ? /* @__PURE__ */ Y("div", { className: Lt("font-medium", l), children: s(m, t) }) : m ? /* @__PURE__ */ Y("div", { className: Lt("font-medium", l), children: m }) : null;
    }, [
      u,
      s,
      t,
      i,
      l,
      y,
      g
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const S = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Xe(
      "div",
      {
        ref: x,
        className: Lt(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          S ? null : b,
          /* @__PURE__ */ Y("div", { className: "grid gap-2", children: t.map((O, A) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, m = fm(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ Y(
              "div",
              {
                className: Lt(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, A, O.payload) : /* @__PURE__ */ Xe($a, { children: [
                  m != null && m.icon ? /* @__PURE__ */ Y(m.icon, {}) : !a && /* @__PURE__ */ Y(
                    "div",
                    {
                      className: Lt(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": S && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": E,
                        "--color-border": E
                      }
                    }
                  ),
                  /* @__PURE__ */ Xe(
                    "div",
                    {
                      className: Lt(
                        "flex flex-1 justify-between leading-none",
                        S ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Xe("div", { className: "grid gap-2", children: [
                          S ? b : null,
                          /* @__PURE__ */ Y("span", { className: "pr-2 text-f1-foreground", children: (m == null ? void 0 : m.label) || O.name })
                        ] }),
                        O.value && /* @__PURE__ */ Y("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: d ? d(String(O.value)) : O.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              O.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Oo.displayName = "ChartTooltip";
const Mb = Wa, af = Z.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: u = 0
  }, s) => {
    const { config: l } = AM();
    return r != null && r.length ? /* @__PURE__ */ Y(
      "div",
      {
        ref: s,
        className: Lt(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: u },
        children: r.map((f) => {
          const d = `${i || f.dataKey || "value"}`, h = fm(
            l,
            f,
            d,
            a
          );
          return /* @__PURE__ */ Xe(
            "div",
            {
              className: Lt(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                h != null && h.icon && !t ? /* @__PURE__ */ Y(h.icon, {}) : h && /* @__PURE__ */ Y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: f.color
                    }
                  }
                ),
                /* @__PURE__ */ Y("span", { className: "text-f1-foreground", children: h == null ? void 0 : h.label })
              ]
            },
            JSON.stringify(f)
          );
        })
      }
    ) : null;
  }
);
af.displayName = "ChartLegend";
function fm(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const IY = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let RY = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += IY[r[e] & 63];
  return t;
};
const $Y = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, Nn = (e) => {
  const t = Object.values($Y);
  return t[e % t.length];
};
function of(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Ib = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Rb = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), uf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function So(e) {
  return dn(e);
}
function $b(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const kY = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, u = e === t - 1;
  return /* @__PURE__ */ Y(vi, { ...i, textAnchor: a ? "start" : u ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, jY = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  canBeBlurred: i,
  blurArea: a,
  lineType: u = "monotoneX",
  aspect: s,
  marginTop: l = 0
}, f) => {
  const { enabled: d } = L8(), h = Object.keys(t), v = RY(12), g = $b(e), x = Math.max(
    ...g.flatMap(
      (A) => h.map(
        (_) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${A[_]}`) : `${A[_]}`
        )
      )
    )
  ), y = (n == null ? void 0 : n.width) ?? x + 20, b = !(n != null && n.hide), S = !(r != null && r.hide), O = !i || !d;
  return /* @__PURE__ */ Y(_o, { config: t, ref: f, aspect: s, children: /* @__PURE__ */ Xe(
    PY,
    {
      accessibilityLayer: !0,
      data: g,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: l
      },
      children: [
        /* @__PURE__ */ Xe("defs", { children: [
          /* @__PURE__ */ Xe(
            "linearGradient",
            {
              id: `${v}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${b ? y : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ Xe($a, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ Y("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ Xe($a, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ Y("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ Xe($a, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ Y("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ Y(
            "mask",
            {
              id: `${v}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ Y(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${v}-fadeGradient)`
                }
              )
            }
          ),
          h.map((A, _) => /* @__PURE__ */ Xe(
            "linearGradient",
            {
              id: `fill${String(A)}-${v}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[A].color || Nn(_),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[A].color || Nn(_),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            _
          ))
        ] }),
        /* @__PURE__ */ Y(
          ds,
          {
            ...uf(),
            mask: `url(#${v}-transparent-edges)`
          }
        ),
        S && /* @__PURE__ */ Y(
          Kn,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: r == null ? void 0 : r.tickFormatter,
            ticks: r == null ? void 0 : r.ticks,
            domain: r == null ? void 0 : r.domain,
            interval: 0,
            tick: kY
          }
        ),
        b && /* @__PURE__ */ Y(
          Vn,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n == null ? void 0 : n.tickCount,
            tickFormatter: i && d ? () => "**" : n == null ? void 0 : n.tickFormatter,
            ticks: n == null ? void 0 : n.ticks,
            domain: n == null ? void 0 : n.domain,
            width: y
          }
        ),
        O && /* @__PURE__ */ Y(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(
              Oo,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        h.map((A, _) => /* @__PURE__ */ Y(
          Ai,
          {
            isAnimationActive: !1,
            dataKey: A,
            type: u,
            mask: `url(#${v}-transparent-edges)`,
            fill: `url(#fill${A}-${v})`,
            fillOpacity: t[A].dashed ? 0 : 0.4,
            stroke: t[A].color || Nn(_),
            strokeWidth: 1.5,
            strokeDasharray: t[A].dashed ? "4 4" : void 0
          },
          A
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ Y(
          Mb,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ Y(af, {})
          }
        )
      ]
    }
  ) });
}, vJ = So(jY), NY = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: u,
  legend: s
}, l) => {
  const f = Object.keys(e), d = $b(t), h = Math.max(
    ...d.flatMap(
      (v) => f.map(
        (g) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${v[g]}`) : `${v[g]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(_o, { config: e, ref: l, aspect: u, children: /* @__PURE__ */ Xe(
    OM,
    {
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      children: [
        /* @__PURE__ */ Y(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Oo, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(ds, { ...uf() }),
        /* @__PURE__ */ Y(
          Vn,
          {
            ...Rb(n),
            tick: !0,
            width: n.width ?? h + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ Y(Kn, { ...Ib(r), hide: r == null ? void 0 : r.hide }),
        f.map((v, g) => /* @__PURE__ */ Y(
          Si,
          {
            isAnimationActive: !1,
            dataKey: v,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: e[v].color || Nn(g),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ Y(
              Rr,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${v}`
            )
          },
          `bar-${v}`
        )),
        s && /* @__PURE__ */ Y(
          Mb,
          {
            content: /* @__PURE__ */ Y(af, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, gJ = So(NY);
function Mn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function PM(e, t = []) {
  let r = [];
  function n(a, u) {
    const s = Z.createContext(u), l = r.length;
    r = [...r, u];
    function f(h) {
      const { scope: v, children: g, ...x } = h, y = (v == null ? void 0 : v[e][l]) || s, b = Z.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ Y(y.Provider, { value: b, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || s, x = Z.useContext(g);
      if (x) return x;
      if (u !== void 0) return u;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((u) => Z.createContext(u));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return Z.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return i.scopeName = e, [n, DY(i, ...t)];
}
function DY(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const u = n.reduce((s, { useScope: l, scopeName: f }) => {
        const h = l(a)[`__scope${f}`];
        return { ...s, ...h };
      }, {});
      return Z.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var LY = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], sa = LY.reduce((e, t) => {
  const r = Z.forwardRef((n, i) => {
    const { asChild: a, ...u } = n, s = a ? Sm : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Y(s, { ...u, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function qY(e, t) {
  e && xm.flushSync(() => e.dispatchEvent(t));
}
function Ao(e) {
  const t = Z.useRef(e);
  return Z.useEffect(() => {
    t.current = e;
  }), Z.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function BY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e);
  Z.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var FY = "DismissableLayer", dm = "dismissableLayer.update", WY = "dismissableLayer.pointerDownOutside", zY = "dismissableLayer.focusOutside", IE, EM = Z.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), TM = Z.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: u,
      onDismiss: s,
      ...l
    } = e, f = Z.useContext(EM), [d, h] = Z.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = Z.useState({}), x = na(t, (T) => h(T)), y = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(b), O = d ? y.indexOf(d) : -1, A = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= S, m = GY((T) => {
      const I = T.target, B = [...f.branches].some((L) => L.contains(I));
      !_ || B || (i == null || i(T), u == null || u(T), T.defaultPrevented || s == null || s());
    }, v), E = KY((T) => {
      const I = T.target;
      [...f.branches].some((L) => L.contains(I)) || (a == null || a(T), u == null || u(T), T.defaultPrevented || s == null || s());
    }, v);
    return BY((T) => {
      O === f.layers.size - 1 && (n == null || n(T), !T.defaultPrevented && s && (T.preventDefault(), s()));
    }, v), Z.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (IE = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), RE(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = IE);
        };
    }, [d, v, r, f]), Z.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), RE());
    }, [d, f]), Z.useEffect(() => {
      const T = () => g({});
      return document.addEventListener(dm, T), () => document.removeEventListener(dm, T);
    }, []), /* @__PURE__ */ Y(
      sa.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: A ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Mn(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Mn(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Mn(
          e.onPointerDownCapture,
          m.onPointerDownCapture
        )
      }
    );
  }
);
TM.displayName = FY;
var UY = "DismissableLayerBranch", HY = Z.forwardRef((e, t) => {
  const r = Z.useContext(EM), n = Z.useRef(null), i = na(t, n);
  return Z.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ Y(sa.div, { ...e, ref: i });
});
HY.displayName = UY;
function GY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e), n = Z.useRef(!1), i = Z.useRef(() => {
  });
  return Z.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          CM(
            WY,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, u = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(u), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function KY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e), n = Z.useRef(!1);
  return Z.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && CM(zY, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function RE() {
  const e = new CustomEvent(dm);
  document.dispatchEvent(e);
}
function CM(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? qY(i, a) : i.dispatchEvent(a);
}
var uo = globalThis != null && globalThis.document ? Z.useLayoutEffect : () => {
}, VY = Z.useId || (() => {
}), YY = 0;
function XY(e) {
  const [t, r] = Z.useState(VY());
  return uo(() => {
    r((n) => n ?? String(YY++));
  }, [e]), t ? `radix-${t}` : "";
}
const ZY = ["top", "right", "bottom", "left"], gi = Math.min, dr = Math.max, _l = Math.round, _c = Math.floor, yi = (e) => ({
  x: e,
  y: e
}), JY = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, QY = {
  start: "end",
  end: "start"
};
function hm(e, t, r) {
  return dr(e, gi(t, r));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fn(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function kb(e) {
  return e === "x" ? "y" : "x";
}
function jb(e) {
  return e === "y" ? "height" : "width";
}
function mi(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function Nb(e) {
  return kb(mi(e));
}
function eX(e, t, r) {
  r === void 0 && (r = !1);
  const n = Po(e), i = Nb(e), a = jb(i);
  let u = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (u = Ol(u)), [u, Ol(u)];
}
function tX(e) {
  const t = Ol(e);
  return [pm(e), t, pm(t)];
}
function pm(e) {
  return e.replace(/start|end/g, (t) => QY[t]);
}
function rX(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? a : u;
    default:
      return [];
  }
}
function nX(e, t, r, n) {
  const i = Po(e);
  let a = rX(Fn(e), r === "start", n);
  return i && (a = a.map((u) => u + "-" + i), t && (a = a.concat(a.map(pm)))), a;
}
function Ol(e) {
  return e.replace(/left|right|bottom|top/g, (t) => JY[t]);
}
function iX(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function MM(e) {
  return typeof e != "number" ? iX(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sl(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: i
  } = e;
  return {
    width: n,
    height: i,
    top: r,
    left: t,
    right: t + n,
    bottom: r + i,
    x: t,
    y: r
  };
}
function $E(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = mi(t), u = Nb(t), s = jb(u), l = Fn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[s] / 2 - i[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      g = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (Po(t)) {
    case "start":
      g[u] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[u] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const aX = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: u
  } = r, s = a.filter(Boolean), l = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let f = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = $E(f, n, l), v = n, g = {}, x = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: b,
      fn: S
    } = s[y], {
      x: O,
      y: A,
      data: _,
      reset: m
    } = await S({
      x: d,
      y: h,
      initialPlacement: n,
      placement: v,
      strategy: i,
      middlewareData: g,
      rects: f,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, h = A ?? h, g = {
      ...g,
      [b]: {
        ...g[b],
        ..._
      }
    }, m && x <= 50 && (x++, typeof m == "object" && (m.placement && (v = m.placement), m.rects && (f = m.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : m.rects), {
      x: d,
      y: h
    } = $E(f, v, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: g
  };
};
async function Qu(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: u,
    elements: s,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Bn(t, e), x = MM(g), b = s[v ? h === "floating" ? "reference" : "floating" : h], S = Sl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(A)) ? await (a.getScale == null ? void 0 : a.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, m = Sl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: O,
    offsetParent: A,
    strategy: l
  }) : O);
  return {
    top: (S.top - m.top + x.top) / _.y,
    bottom: (m.bottom - S.bottom + x.bottom) / _.y,
    left: (S.left - m.left + x.left) / _.x,
    right: (m.right - S.right + x.right) / _.x
  };
}
const oX = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: u,
      elements: s,
      middlewareData: l
    } = t, {
      element: f,
      padding: d = 0
    } = Bn(e, t) || {};
    if (f == null)
      return {};
    const h = MM(d), v = {
      x: r,
      y: n
    }, g = Nb(i), x = jb(g), y = await u.getDimensions(f), b = g === "y", S = b ? "top" : "left", O = b ? "bottom" : "right", A = b ? "clientHeight" : "clientWidth", _ = a.reference[x] + a.reference[g] - v[g] - a.floating[x], m = v[g] - a.reference[g], E = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f));
    let T = E ? E[A] : 0;
    (!T || !await (u.isElement == null ? void 0 : u.isElement(E))) && (T = s.floating[A] || a.floating[x]);
    const I = _ / 2 - m / 2, B = T / 2 - y[x] / 2 - 1, L = gi(h[S], B), N = gi(h[O], B), j = L, q = T - y[x] - N, F = T / 2 - y[x] / 2 + I, V = hm(j, F, q), U = !l.arrow && Po(i) != null && F !== V && a.reference[x] / 2 - (F < j ? L : N) - y[x] / 2 < 0, J = U ? F < j ? F - j : F - q : 0;
    return {
      [g]: v[g] + J,
      data: {
        [g]: V,
        centerOffset: F - V - J,
        ...U && {
          alignmentOffset: J
        }
      },
      reset: U
    };
  }
}), uX = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: u,
        initialPlacement: s,
        platform: l,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: y = !0,
        ...b
      } = Bn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const S = Fn(i), O = mi(s), A = Fn(s) === s, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), m = v || (A || !y ? [Ol(s)] : tX(s)), E = x !== "none";
      !v && E && m.push(...nX(s, y, x, _));
      const T = [s, ...m], I = await Qu(t, b), B = [];
      let L = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && B.push(I[S]), h) {
        const F = eX(i, u, _);
        B.push(I[F[0]], I[F[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: B
      }], !B.every((F) => F <= 0)) {
        var N, j;
        const F = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, V = T[F];
        if (V)
          return {
            data: {
              index: F,
              overflows: L
            },
            reset: {
              placement: V
            }
          };
        let U = (j = L.filter((J) => J.overflows[0] <= 0).sort((J, G) => J.overflows[1] - G.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!U)
          switch (g) {
            case "bestFit": {
              var q;
              const J = (q = L.filter((G) => {
                if (E) {
                  const ue = mi(G.placement);
                  return ue === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((ue) => ue > 0).reduce((ue, H) => ue + H, 0)]).sort((G, ue) => G[1] - ue[1])[0]) == null ? void 0 : q[0];
              J && (U = J);
              break;
            }
            case "initialPlacement":
              U = s;
              break;
          }
        if (i !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function kE(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jE(e) {
  return ZY.some((t) => e[t] >= 0);
}
const sX = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...i
      } = Bn(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Qu(t, {
            ...i,
            elementContext: "reference"
          }), u = kE(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: jE(u)
            }
          };
        }
        case "escaped": {
          const a = await Qu(t, {
            ...i,
            altBoundary: !0
          }), u = kE(a, r.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: jE(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function cX(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), u = Fn(r), s = Po(r), l = mi(r) === "y", f = ["left", "top"].includes(u) ? -1 : 1, d = a && l ? -1 : 1, h = Bn(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: x
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return s && typeof x == "number" && (g = s === "end" ? x * -1 : x), l ? {
    x: g * d,
    y: v * f
  } : {
    x: v * f,
    y: g * d
  };
}
const lX = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: u,
        middlewareData: s
      } = t, l = await cX(t, e);
      return u === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: u
        }
      };
    }
  };
}, fX = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: u = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: S,
              y: O
            } = b;
            return {
              x: S,
              y: O
            };
          }
        },
        ...l
      } = Bn(e, t), f = {
        x: r,
        y: n
      }, d = await Qu(t, l), h = mi(Fn(i)), v = kb(h);
      let g = f[v], x = f[h];
      if (a) {
        const b = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", O = g + d[b], A = g - d[S];
        g = hm(O, g, A);
      }
      if (u) {
        const b = h === "y" ? "top" : "left", S = h === "y" ? "bottom" : "right", O = x + d[b], A = x - d[S];
        x = hm(O, x, A);
      }
      const y = s.fn({
        ...t,
        [v]: g,
        [h]: x
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [v]: a,
            [h]: u
          }
        }
      };
    }
  };
}, dX = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: i,
        rects: a,
        middlewareData: u
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Bn(e, t), d = {
        x: r,
        y: n
      }, h = mi(i), v = kb(h);
      let g = d[v], x = d[h];
      const y = Bn(s, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const A = v === "y" ? "height" : "width", _ = a.reference[v] - a.floating[A] + b.mainAxis, m = a.reference[v] + a.reference[A] - b.mainAxis;
        g < _ ? g = _ : g > m && (g = m);
      }
      if (f) {
        var S, O;
        const A = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Fn(i)), m = a.reference[h] - a.floating[A] + (_ && ((S = u.offset) == null ? void 0 : S[h]) || 0) + (_ ? 0 : b.crossAxis), E = a.reference[h] + a.reference[A] + (_ ? 0 : ((O = u.offset) == null ? void 0 : O[h]) || 0) - (_ ? b.crossAxis : 0);
        x < m ? x = m : x > E && (x = E);
      }
      return {
        [v]: g,
        [h]: x
      };
    }
  };
}, hX = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        rects: a,
        platform: u,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Bn(e, t), d = await Qu(t, f), h = Fn(i), v = Po(i), g = mi(i) === "y", {
        width: x,
        height: y
      } = a.floating;
      let b, S;
      h === "top" || h === "bottom" ? (b = h, S = v === (await (u.isRTL == null ? void 0 : u.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (S = h, b = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, A = x - d.left - d.right, _ = gi(y - d[b], O), m = gi(x - d[S], A), E = !t.middlewareData.shift;
      let T = _, I = m;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (I = A), (n = t.middlewareData.shift) != null && n.enabled.y && (T = O), E && !v) {
        const L = dr(d.left, 0), N = dr(d.right, 0), j = dr(d.top, 0), q = dr(d.bottom, 0);
        g ? I = x - 2 * (L !== 0 || N !== 0 ? L + N : dr(d.left, d.right)) : T = y - 2 * (j !== 0 || q !== 0 ? j + q : dr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: I,
        availableHeight: T
      });
      const B = await u.getDimensions(s.floating);
      return x !== B.width || y !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function sf() {
  return typeof window < "u";
}
function Eo(e) {
  return IM(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yn(e) {
  var t;
  return (t = (IM(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function IM(e) {
  return sf() ? e instanceof Node || e instanceof gr(e).Node : !1;
}
function Qr(e) {
  return sf() ? e instanceof Element || e instanceof gr(e).Element : !1;
}
function pn(e) {
  return sf() ? e instanceof HTMLElement || e instanceof gr(e).HTMLElement : !1;
}
function NE(e) {
  return !sf() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof gr(e).ShadowRoot;
}
function vs(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = en(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function pX(e) {
  return ["table", "td", "th"].includes(Eo(e));
}
function cf(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Db(e) {
  const t = Lb(), r = Qr(e) ? en(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function vX(e) {
  let t = bi(e);
  for (; pn(t) && !so(t); ) {
    if (Db(t))
      return t;
    if (cf(t))
      return null;
    t = bi(t);
  }
  return null;
}
function Lb() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(Eo(e));
}
function en(e) {
  return gr(e).getComputedStyle(e);
}
function lf(e) {
  return Qr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function bi(e) {
  if (Eo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    NE(e) && e.host || // Fallback.
    yn(e)
  );
  return NE(t) ? t.host : t;
}
function RM(e) {
  const t = bi(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && vs(t) ? t : RM(t);
}
function es(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = RM(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), u = gr(i);
  if (a) {
    const s = vm(u);
    return t.concat(u, u.visualViewport || [], vs(i) ? i : [], s && r ? es(s) : []);
  }
  return t.concat(i, es(i, [], r));
}
function vm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $M(e) {
  const t = en(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = pn(e), a = i ? e.offsetWidth : r, u = i ? e.offsetHeight : n, s = _l(r) !== a || _l(n) !== u;
  return s && (r = a, n = u), {
    width: r,
    height: n,
    $: s
  };
}
function qb(e) {
  return Qr(e) ? e : e.contextElement;
}
function La(e) {
  const t = qb(e);
  if (!pn(t))
    return yi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = $M(t);
  let u = (a ? _l(r.width) : r.width) / n, s = (a ? _l(r.height) : r.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: u,
    y: s
  };
}
const gX = /* @__PURE__ */ yi(0);
function kM(e) {
  const t = gr(e);
  return !Lb() || !t.visualViewport ? gX : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yX(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== gr(e) ? !1 : t;
}
function ra(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = qb(e);
  let u = yi(1);
  t && (n ? Qr(n) && (u = La(n)) : u = La(e));
  const s = yX(a, r, n) ? kM(a) : yi(0);
  let l = (i.left + s.x) / u.x, f = (i.top + s.y) / u.y, d = i.width / u.x, h = i.height / u.y;
  if (a) {
    const v = gr(a), g = n && Qr(n) ? gr(n) : n;
    let x = v, y = vm(x);
    for (; y && n && g !== x; ) {
      const b = La(y), S = y.getBoundingClientRect(), O = en(y), A = S.left + (y.clientLeft + parseFloat(O.paddingLeft)) * b.x, _ = S.top + (y.clientTop + parseFloat(O.paddingTop)) * b.y;
      l *= b.x, f *= b.y, d *= b.x, h *= b.y, l += A, f += _, x = gr(y), y = vm(x);
    }
  }
  return Sl({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function mX(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", u = yn(n), s = t ? cf(t.floating) : !1;
  if (n === u || s && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = yi(1);
  const d = yi(0), h = pn(n);
  if ((h || !h && !a) && ((Eo(n) !== "body" || vs(u)) && (l = lf(n)), pn(n))) {
    const v = ra(n);
    f = La(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y
  };
}
function bX(e) {
  return Array.from(e.getClientRects());
}
function gm(e, t) {
  const r = lf(e).scrollLeft;
  return t ? t.left + r : ra(yn(e)).left + r;
}
function xX(e) {
  const t = yn(e), r = lf(e), n = e.ownerDocument.body, i = dr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = dr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let u = -r.scrollLeft + gm(e);
  const s = -r.scrollTop;
  return en(n).direction === "rtl" && (u += dr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: u,
    y: s
  };
}
function wX(e, t) {
  const r = gr(e), n = yn(e), i = r.visualViewport;
  let a = n.clientWidth, u = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, u = i.height;
    const f = Lb();
    (!f || f && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: u,
    x: s,
    y: l
  };
}
function _X(e, t) {
  const r = ra(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = pn(e) ? La(e) : yi(1), u = e.clientWidth * a.x, s = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: u,
    height: s,
    x: l,
    y: f
  };
}
function DE(e, t, r) {
  let n;
  if (t === "viewport")
    n = wX(e, r);
  else if (t === "document")
    n = xX(yn(e));
  else if (Qr(t))
    n = _X(t, r);
  else {
    const i = kM(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Sl(n);
}
function jM(e, t) {
  const r = bi(e);
  return r === t || !Qr(r) || so(r) ? !1 : en(r).position === "fixed" || jM(r, t);
}
function OX(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = es(e, [], !1).filter((s) => Qr(s) && Eo(s) !== "body"), i = null;
  const a = en(e).position === "fixed";
  let u = a ? bi(e) : e;
  for (; Qr(u) && !so(u); ) {
    const s = en(u), l = Db(u);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || vs(u) && !l && jM(e, u)) ? n = n.filter((d) => d !== u) : i = s, u = bi(u);
  }
  return t.set(e, n), n;
}
function SX(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const u = [...r === "clippingAncestors" ? cf(t) ? [] : OX(t, this._c) : [].concat(r), n], s = u[0], l = u.reduce((f, d) => {
    const h = DE(t, d, i);
    return f.top = dr(h.top, f.top), f.right = gi(h.right, f.right), f.bottom = gi(h.bottom, f.bottom), f.left = dr(h.left, f.left), f;
  }, DE(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function AX(e) {
  const {
    width: t,
    height: r
  } = $M(e);
  return {
    width: t,
    height: r
  };
}
function PX(e, t, r) {
  const n = pn(t), i = yn(t), a = r === "fixed", u = ra(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yi(0);
  if (n || !n && !a)
    if ((Eo(t) !== "body" || vs(i)) && (s = lf(t)), n) {
      const g = ra(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else i && (l.x = gm(i));
  let f = 0, d = 0;
  if (i && !n && !a) {
    const g = i.getBoundingClientRect();
    d = g.top + s.scrollTop, f = g.left + s.scrollLeft - // RTL <body> scrollbar.
    gm(i, g);
  }
  const h = u.left + s.scrollLeft - l.x - f, v = u.top + s.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: u.width,
    height: u.height
  };
}
function Wg(e) {
  return en(e).position === "static";
}
function LE(e, t) {
  if (!pn(e) || en(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return yn(e) === r && (r = r.ownerDocument.body), r;
}
function NM(e, t) {
  const r = gr(e);
  if (cf(e))
    return r;
  if (!pn(e)) {
    let i = bi(e);
    for (; i && !so(i); ) {
      if (Qr(i) && !Wg(i))
        return i;
      i = bi(i);
    }
    return r;
  }
  let n = LE(e, t);
  for (; n && pX(n) && Wg(n); )
    n = LE(n, t);
  return n && so(n) && Wg(n) && !Db(n) ? r : n || vX(e) || r;
}
const EX = async function(e) {
  const t = this.getOffsetParent || NM, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: PX(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function TX(e) {
  return en(e).direction === "rtl";
}
const CX = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mX,
  getDocumentElement: yn,
  getClippingRect: SX,
  getOffsetParent: NM,
  getElementRects: EX,
  getClientRects: bX,
  getDimensions: AX,
  getScale: La,
  isElement: Qr,
  isRTL: TX
};
function MX(e, t) {
  let r = null, n;
  const i = yn(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function u(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: f,
      top: d,
      width: h,
      height: v
    } = e.getBoundingClientRect();
    if (s || t(), !h || !v)
      return;
    const g = _c(d), x = _c(i.clientWidth - (f + h)), y = _c(i.clientHeight - (d + v)), b = _c(f), O = {
      rootMargin: -g + "px " + -x + "px " + -y + "px " + -b + "px",
      threshold: dr(0, gi(1, l)) || 1
    };
    let A = !0;
    function _(m) {
      const E = m[0].intersectionRatio;
      if (E !== l) {
        if (!A)
          return u();
        E ? u(!1, E) : n = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      A = !1;
    }
    try {
      r = new IntersectionObserver(_, {
        ...O,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(_, O);
    }
    r.observe(e);
  }
  return u(!0), a;
}
function IX(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = qb(e), d = i || a ? [...f ? es(f) : [], ...es(t)] : [];
  d.forEach((S) => {
    i && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const h = f && s ? MX(f, r) : null;
  let v = -1, g = null;
  u && (g = new ResizeObserver((S) => {
    let [O] = S;
    O && O.target === f && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var A;
      (A = g) == null || A.observe(t);
    })), r();
  }), f && !l && g.observe(f), g.observe(t));
  let x, y = l ? ra(e) : null;
  l && b();
  function b() {
    const S = ra(e);
    y && (S.x !== y.x || S.y !== y.y || S.width !== y.width || S.height !== y.height) && r(), y = S, x = requestAnimationFrame(b);
  }
  return r(), () => {
    var S;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (S = g) == null || S.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const RX = lX, $X = fX, kX = uX, jX = hX, NX = sX, qE = oX, DX = dX, LX = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: CX,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return aX(e, t, {
    ...i,
    platform: a
  });
};
var Pc = typeof document < "u" ? bm : kr;
function Al(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Al(e[n], t[n]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = i[n];
      if (!(a === "_owner" && e.$$typeof) && !Al(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function DM(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function BE(e, t) {
  const r = DM(e);
  return Math.round(t * r) / r;
}
function zg(e) {
  const t = Z.useRef(e);
  return Pc(() => {
    t.current = e;
  }), t;
}
function qX(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: a,
      floating: u
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: f
  } = e, [d, h] = Z.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, g] = Z.useState(n);
  Al(v, n) || g(n);
  const [x, y] = Z.useState(null), [b, S] = Z.useState(null), O = Z.useCallback((G) => {
    G !== E.current && (E.current = G, y(G));
  }, []), A = Z.useCallback((G) => {
    G !== T.current && (T.current = G, S(G));
  }, []), _ = a || x, m = u || b, E = Z.useRef(null), T = Z.useRef(null), I = Z.useRef(d), B = l != null, L = zg(l), N = zg(i), j = zg(f), q = Z.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const G = {
      placement: t,
      strategy: r,
      middleware: v
    };
    N.current && (G.platform = N.current), LX(E.current, T.current, G).then((ue) => {
      const H = {
        ...ue,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      F.current && !Al(I.current, H) && (I.current = H, xm.flushSync(() => {
        h(H);
      }));
    });
  }, [v, t, r, N, j]);
  Pc(() => {
    f === !1 && I.current.isPositioned && (I.current.isPositioned = !1, h((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [f]);
  const F = Z.useRef(!1);
  Pc(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Pc(() => {
    if (_ && (E.current = _), m && (T.current = m), _ && m) {
      if (L.current)
        return L.current(_, m, q);
      q();
    }
  }, [_, m, q, L, B]);
  const V = Z.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: O,
    setFloating: A
  }), [O, A]), U = Z.useMemo(() => ({
    reference: _,
    floating: m
  }), [_, m]), J = Z.useMemo(() => {
    const G = {
      position: r,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return G;
    const ue = BE(U.floating, d.x), H = BE(U.floating, d.y);
    return s ? {
      ...G,
      transform: "translate(" + ue + "px, " + H + "px)",
      ...DM(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ue,
      top: H
    };
  }, [r, s, U.floating, d.x, d.y]);
  return Z.useMemo(() => ({
    ...d,
    update: q,
    refs: V,
    elements: U,
    floatingStyles: J
  }), [d, q, V, U, J]);
}
const BX = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: i
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? qE({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? qE({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, FX = (e, t) => ({
  ...RX(e),
  options: [e, t]
}), WX = (e, t) => ({
  ...$X(e),
  options: [e, t]
}), zX = (e, t) => ({
  ...DX(e),
  options: [e, t]
}), UX = (e, t) => ({
  ...kX(e),
  options: [e, t]
}), HX = (e, t) => ({
  ...jX(e),
  options: [e, t]
}), GX = (e, t) => ({
  ...NX(e),
  options: [e, t]
}), KX = (e, t) => ({
  ...BX(e),
  options: [e, t]
});
var VX = "Arrow", LM = Z.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ Y(
    sa.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ Y("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
LM.displayName = VX;
var YX = LM;
function XX(e) {
  const [t, r] = Z.useState(void 0);
  return uo(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let u, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          u = f.inlineSize, s = f.blockSize;
        } else
          u = e.offsetWidth, s = e.offsetHeight;
        r({ width: u, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Bb = "Popper", [qM, BM] = PM(Bb), [ZX, FM] = qM(Bb), WM = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = Z.useState(null);
  return /* @__PURE__ */ Y(ZX, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
WM.displayName = Bb;
var zM = "PopperAnchor", UM = Z.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = FM(zM, r), u = Z.useRef(null), s = na(t, u);
    return Z.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || u.current);
    }), n ? null : /* @__PURE__ */ Y(sa.div, { ...i, ref: s });
  }
);
UM.displayName = zM;
var Fb = "PopperContent", [JX, QX] = qM(Fb), HM = Z.forwardRef(
  (e, t) => {
    var le, ge, te, se, ve, k;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: u = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...y
    } = e, b = FM(Fb, r), [S, O] = Z.useState(null), A = na(t, (Ee) => O(Ee)), [_, m] = Z.useState(null), E = XX(_), T = (E == null ? void 0 : E.width) ?? 0, I = (E == null ? void 0 : E.height) ?? 0, B = n + (a !== "center" ? "-" + a : ""), L = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, N = Array.isArray(f) ? f : [f], j = N.length > 0, q = {
      padding: L,
      boundary: N.filter(tZ),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: F, floatingStyles: V, placement: U, isPositioned: J, middlewareData: G } = qX({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...Ee) => IX(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        FX({ mainAxis: i + I, alignmentAxis: u }),
        l && WX({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? zX() : void 0,
          ...q
        }),
        l && UX({ ...q }),
        HX({
          ...q,
          apply: ({ elements: Ee, rects: we, availableWidth: Fe, availableHeight: ct }) => {
            const { width: at, height: Kt } = we.reference, qr = Ee.floating.style;
            qr.setProperty("--radix-popper-available-width", `${Fe}px`), qr.setProperty("--radix-popper-available-height", `${ct}px`), qr.setProperty("--radix-popper-anchor-width", `${at}px`), qr.setProperty("--radix-popper-anchor-height", `${Kt}px`);
          }
        }),
        _ && KX({ element: _, padding: s }),
        rZ({ arrowWidth: T, arrowHeight: I }),
        v && GX({ strategy: "referenceHidden", ...q })
      ]
    }), [ue, H] = VM(U), X = Ao(x);
    uo(() => {
      J && (X == null || X());
    }, [J, X]);
    const ae = (le = G.arrow) == null ? void 0 : le.x, ce = (ge = G.arrow) == null ? void 0 : ge.y, he = ((te = G.arrow) == null ? void 0 : te.centerOffset) !== 0, [ye, be] = Z.useState();
    return uo(() => {
      S && be(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ Y(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: J ? V.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (se = G.transformOrigin) == null ? void 0 : se.x,
            (ve = G.transformOrigin) == null ? void 0 : ve.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((k = G.hide) == null ? void 0 : k.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ Y(
          JX,
          {
            scope: r,
            placedSide: ue,
            onArrowChange: m,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: he,
            children: /* @__PURE__ */ Y(
              sa.div,
              {
                "data-side": ue,
                "data-align": H,
                ...y,
                ref: A,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: J ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
HM.displayName = Fb;
var GM = "PopperArrow", eZ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, KM = Z.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = QX(GM, n), u = eZ[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ Y(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [u]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ Y(
          YX,
          {
            ...i,
            ref: r,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
KM.displayName = GM;
function tZ(e) {
  return e !== null;
}
var rZ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, S, O;
    const { placement: r, rects: n, middlewareData: i } = t, u = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0, s = u ? 0 : e.arrowWidth, l = u ? 0 : e.arrowHeight, [f, d] = VM(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((S = i.arrow) == null ? void 0 : S.x) ?? 0) + s / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let x = "", y = "";
    return f === "bottom" ? (x = u ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (x = u ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (x = `${-l}px`, y = u ? h : `${g}px`) : f === "left" && (x = `${n.floating.width + l}px`, y = u ? h : `${g}px`), { data: { x, y } };
  }
});
function VM(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var nZ = WM, iZ = UM, aZ = HM, oZ = KM;
function uZ(e, t) {
  return Z.useReducer((r, n) => t[r][n] ?? r, e);
}
var YM = (e) => {
  const { present: t, children: r } = e, n = sZ(t), i = typeof r == "function" ? r({ present: n.isPresent }) : Z.Children.only(r), a = na(n.ref, cZ(i));
  return typeof r == "function" || n.isPresent ? Z.cloneElement(i, { ref: a }) : null;
};
YM.displayName = "Presence";
function sZ(e) {
  const [t, r] = Z.useState(), n = Z.useRef({}), i = Z.useRef(e), a = Z.useRef("none"), u = e ? "mounted" : "unmounted", [s, l] = uZ(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Z.useEffect(() => {
    const f = Oc(n.current);
    a.current = s === "mounted" ? f : "none";
  }, [s]), uo(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, g = Oc(f);
      e ? l("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), uo(() => {
    if (t) {
      const f = (h) => {
        const g = Oc(n.current).includes(h.animationName);
        h.target === t && g && xm.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Oc(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: Z.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Oc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function cZ(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function lZ({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = fZ({ defaultProp: t, onChange: r }), a = e !== void 0, u = a ? e : n, s = Ao(r), l = Z.useCallback(
    (f) => {
      if (a) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && s(h);
      } else
        i(f);
    },
    [a, e, i, s]
  );
  return [u, l];
}
function fZ({
  defaultProp: e,
  onChange: t
}) {
  const r = Z.useState(e), [n] = r, i = Z.useRef(n), a = Ao(t);
  return Z.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var dZ = "VisuallyHidden", XM = Z.forwardRef(
  (e, t) => /* @__PURE__ */ Y(
    sa.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
XM.displayName = dZ;
var hZ = XM, [ff, yJ] = PM("Tooltip", [
  BM
]), df = BM(), ZM = "TooltipProvider", pZ = 700, ym = "tooltip.open", [vZ, Wb] = ff(ZM), JM = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = pZ,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [u, s] = Z.useState(!0), l = Z.useRef(!1), f = Z.useRef(0);
  return Z.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ Y(
    vZ,
    {
      scope: t,
      isOpenDelayed: u,
      delayDuration: r,
      onOpen: Z.useCallback(() => {
        window.clearTimeout(f.current), s(!1);
      }, []),
      onClose: Z.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: Z.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
JM.displayName = ZM;
var hf = "Tooltip", [gZ, pf] = ff(hf), QM = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: u,
    delayDuration: s
  } = e, l = Wb(hf, e.__scopeTooltip), f = df(t), [d, h] = Z.useState(null), v = XY(), g = Z.useRef(0), x = u ?? l.disableHoverableContent, y = s ?? l.delayDuration, b = Z.useRef(!1), [S = !1, O] = lZ({
    prop: n,
    defaultProp: i,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ym))) : l.onClose(), a == null || a(T);
    }
  }), A = Z.useMemo(() => S ? b.current ? "delayed-open" : "instant-open" : "closed", [S]), _ = Z.useCallback(() => {
    window.clearTimeout(g.current), b.current = !1, O(!0);
  }, [O]), m = Z.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = Z.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return Z.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ Y(nZ, { ...f, children: /* @__PURE__ */ Y(
    gZ,
    {
      scope: t,
      contentId: v,
      open: S,
      stateAttribute: A,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: Z.useCallback(() => {
        l.isOpenDelayed ? E() : _();
      }, [l.isOpenDelayed, E, _]),
      onTriggerLeave: Z.useCallback(() => {
        x ? m() : window.clearTimeout(g.current);
      }, [m, x]),
      onOpen: _,
      onClose: m,
      disableHoverableContent: x,
      children: r
    }
  ) });
};
QM.displayName = hf;
var mm = "TooltipTrigger", eI = Z.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = pf(mm, r), a = Wb(mm, r), u = df(r), s = Z.useRef(null), l = na(t, s, i.onTriggerChange), f = Z.useRef(!1), d = Z.useRef(!1), h = Z.useCallback(() => f.current = !1, []);
    return Z.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ Y(iZ, { asChild: !0, ...u, children: /* @__PURE__ */ Y(
      sa.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: Mn(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: Mn(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: Mn(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: Mn(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: Mn(e.onBlur, i.onClose),
        onClick: Mn(e.onClick, i.onClose)
      }
    ) });
  }
);
eI.displayName = mm;
var yZ = "TooltipPortal", [mJ, mZ] = ff(yZ, {
  forceMount: void 0
}), co = "TooltipContent", tI = Z.forwardRef(
  (e, t) => {
    const r = mZ(co, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, u = pf(co, e.__scopeTooltip);
    return /* @__PURE__ */ Y(YM, { present: n || u.open, children: u.disableHoverableContent ? /* @__PURE__ */ Y(rI, { side: i, ...a, ref: t }) : /* @__PURE__ */ Y(bZ, { side: i, ...a, ref: t }) });
  }
), bZ = Z.forwardRef((e, t) => {
  const r = pf(co, e.__scopeTooltip), n = Wb(co, e.__scopeTooltip), i = Z.useRef(null), a = na(t, i), [u, s] = Z.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = Z.useCallback(() => {
    s(null), h(!1);
  }, [h]), g = Z.useCallback(
    (x, y) => {
      const b = x.currentTarget, S = { x: x.clientX, y: x.clientY }, O = OZ(S, b.getBoundingClientRect()), A = SZ(S, O), _ = AZ(y.getBoundingClientRect()), m = EZ([...A, ..._]);
      s(m), h(!0);
    },
    [h]
  );
  return Z.useEffect(() => () => v(), [v]), Z.useEffect(() => {
    if (l && d) {
      const x = (b) => g(b, d), y = (b) => g(b, l);
      return l.addEventListener("pointerleave", x), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), Z.useEffect(() => {
    if (u) {
      const x = (y) => {
        const b = y.target, S = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(b)) || (d == null ? void 0 : d.contains(b)), A = !PZ(S, u);
        O ? v() : A && (v(), f());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, d, u, f, v]), /* @__PURE__ */ Y(rI, { ...e, ref: a });
}), [xZ, wZ] = ff(hf, { isInside: !1 }), rI = Z.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      ...s
    } = e, l = pf(co, r), f = df(r), { onClose: d } = l;
    return Z.useEffect(() => (document.addEventListener(ym, d), () => document.removeEventListener(ym, d)), [d]), Z.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ Y(
      TM,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: u,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ Xe(
          aZ,
          {
            "data-state": l.stateAttribute,
            ...f,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ Y(uT, { children: n }),
              /* @__PURE__ */ Y(xZ, { scope: r, isInside: !0, children: /* @__PURE__ */ Y(hZ, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
tI.displayName = co;
var nI = "TooltipArrow", _Z = Z.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = df(r);
    return wZ(
      nI,
      r
    ).isInside ? null : /* @__PURE__ */ Y(oZ, { ...i, ...n, ref: t });
  }
);
_Z.displayName = nI;
function OZ(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, i, a)) {
    case a:
      return "left";
    case i:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function SZ(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function AZ(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function PZ(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, u = t.length - 1; a < t.length; u = a++) {
    const s = t[a].x, l = t[a].y, f = t[u].x, d = t[u].y;
    l > n != d > n && r < (f - s) * (n - l) / (d - l) + s && (i = !i);
  }
  return i;
}
function EZ(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), TZ(t);
}
function TZ(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], u = t[t.length - 2];
      if ((a.x - u.x) * (i.y - u.y) >= (a.y - u.y) * (i.x - u.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const i = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], u = r[r.length - 2];
      if ((a.x - u.x) * (i.y - u.y) >= (a.y - u.y) * (i.x - u.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var CZ = JM, MZ = QM, IZ = eI, iI = tI;
const RZ = CZ, $Z = MZ, kZ = IZ, aI = Z.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ Y(
  iI,
  {
    ref: n,
    sideOffset: t,
    className: Lt(
      "z-50 overflow-hidden rounded bg-f1-background-bold px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
aI.displayName = iI.displayName;
const jZ = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ Xe(RZ, { children: [
    /* @__PURE__ */ Y("div", { className: "w-full", ref: r, children: /* @__PURE__ */ Y("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const u = i.value / n * 100, s = i.color || Nn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ Xe($Z, { children: [
        /* @__PURE__ */ Y(
          kZ,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${u}%` },
            title: i.name,
            asChild: !0,
            children: /* @__PURE__ */ Y(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: s },
                role: "img",
                title: i.name,
                tabIndex: 0
              }
            )
          }
        ),
        /* @__PURE__ */ Xe(aI, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ Y(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: s }
            }
          ),
          /* @__PURE__ */ Y("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ Xe("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
            i.value,
            " (",
            l(i.value),
            "%)"
          ] })
        ] })
      ] }, i.name);
    }) }) }),
    t && /* @__PURE__ */ Y(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((i, a) => {
          const u = i.color || Nn(a);
          return /* @__PURE__ */ Xe(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ Y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: u }
                  }
                ),
                /* @__PURE__ */ Y("span", { className: "text-f1-foreground", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, bJ = So(jZ), NZ = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, u) => {
  const s = Object.keys(t), l = $b(e), f = Math.max(
    ...l.flatMap(
      (d) => s.map(
        (h) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(_o, { config: t, ref: u, aspect: a, children: /* @__PURE__ */ Xe(
    SY,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ Y(ds, { ...uf() }),
        !(r != null && r.hide) && /* @__PURE__ */ Y(Kn, { ...Ib(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ Y(
          Vn,
          {
            ...Rb(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ Y(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Oo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        s.map((d, h) => /* @__PURE__ */ Y(
          hs,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color || Nn(h),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, xJ = So(NZ), DZ = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const u = e.map((f, d) => {
    var h;
    return {
      ...f,
      fill: ((h = t[f.label]) == null ? void 0 : h.color) || Nn(d)
    };
  }), l = e.map((f) => f.value).reduce((f, d) => f + d);
  return l === 0 && u.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ Y(
    _o,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Xe(AY, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        l !== 0 && /* @__PURE__ */ Y(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Oo, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ Y(
          Gn,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: u,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: /* @__PURE__ */ Y(
              At,
              {
                content: ({ viewBox: f }) => {
                  if (f && "cx" in f && "cy" in f)
                    return /* @__PURE__ */ Xe(
                      "text",
                      {
                        x: f.cx,
                        y: f.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          /* @__PURE__ */ Y(
                            "tspan",
                            {
                              x: f.cx,
                              y: (f.cy || 0) + 8,
                              className: "fill-f1-foreground text-2xl font-semibold",
                              children: r != null && r.number ? i ? i(String(r.number)) : r.number : null
                            }
                          ),
                          /* @__PURE__ */ Y(
                            "tspan",
                            {
                              x: f.cx,
                              y: (f.cy || 0) - 16,
                              className: "fill-f1-foreground-secondary",
                              children: r == null ? void 0 : r.label
                            }
                          )
                        ]
                      }
                    );
                }
              }
            )
          }
        ),
        /* @__PURE__ */ Y(
          Mb,
          {
            content: /* @__PURE__ */ Y(af, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, wJ = So(DZ);
var uu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var LZ = uu.exports, FE;
function qZ() {
  return FE || (FE = 1, function(e, t) {
    (function() {
      var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", s = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, x = 1, y = 2, b = 1, S = 2, O = 4, A = 8, _ = 16, m = 32, E = 64, T = 128, I = 256, B = 512, L = 30, N = "...", j = 800, q = 16, F = 1, V = 2, U = 3, J = 1 / 0, G = 9007199254740991, ue = 17976931348623157e292, H = NaN, X = 4294967295, ae = X - 1, ce = X >>> 1, he = [
        ["ary", T],
        ["bind", b],
        ["bindKey", S],
        ["curry", A],
        ["curryRight", _],
        ["flip", B],
        ["partial", m],
        ["partialRight", E],
        ["rearg", I]
      ], ye = "[object Arguments]", be = "[object Array]", le = "[object AsyncFunction]", ge = "[object Boolean]", te = "[object Date]", se = "[object DOMException]", ve = "[object Error]", k = "[object Function]", Ee = "[object GeneratorFunction]", we = "[object Map]", Fe = "[object Number]", ct = "[object Null]", at = "[object Object]", Kt = "[object Promise]", qr = "[object Proxy]", rr = "[object RegExp]", vt = "[object Set]", mn = "[object String]", Yn = "[object Symbol]", To = "[object Undefined]", Xn = "[object WeakMap]", gs = "[object WeakSet]", Co = "[object ArrayBuffer]", ca = "[object DataView]", vf = "[object Float32Array]", gf = "[object Float64Array]", yf = "[object Int8Array]", mf = "[object Int16Array]", bf = "[object Int32Array]", xf = "[object Uint8Array]", wf = "[object Uint8ClampedArray]", _f = "[object Uint16Array]", Of = "[object Uint32Array]", cI = /\b__p \+= '';/g, lI = /\b(__p \+=) '' \+/g, fI = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ub = /&(?:amp|lt|gt|quot|#39);/g, Hb = /[&<>"']/g, dI = RegExp(Ub.source), hI = RegExp(Hb.source), pI = /<%-([\s\S]+?)%>/g, vI = /<%([\s\S]+?)%>/g, Gb = /<%=([\s\S]+?)%>/g, gI = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yI = /^\w*$/, mI = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sf = /[\\^$.*+?()[\]{}|]/g, bI = RegExp(Sf.source), Af = /^\s+/, xI = /\s/, wI = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _I = /\{\n\/\* \[wrapped with (.+)\] \*/, OI = /,? & /, SI = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, AI = /[()=,{}\[\]\/\s]/, PI = /\\(\\)?/g, EI = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Kb = /\w*$/, TI = /^[-+]0x[0-9a-f]+$/i, CI = /^0b[01]+$/i, MI = /^\[object .+?Constructor\]$/, II = /^0o[0-7]+$/i, RI = /^(?:0|[1-9]\d*)$/, $I = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ys = /($^)/, kI = /['\n\r\u2028\u2029\\]/g, ms = "\\ud800-\\udfff", jI = "\\u0300-\\u036f", NI = "\\ufe20-\\ufe2f", DI = "\\u20d0-\\u20ff", Vb = jI + NI + DI, Yb = "\\u2700-\\u27bf", Xb = "a-z\\xdf-\\xf6\\xf8-\\xff", LI = "\\xac\\xb1\\xd7\\xf7", qI = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", BI = "\\u2000-\\u206f", FI = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zb = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jb = "\\ufe0e\\ufe0f", Qb = LI + qI + BI + FI, Pf = "['’]", WI = "[" + ms + "]", e0 = "[" + Qb + "]", bs = "[" + Vb + "]", t0 = "\\d+", zI = "[" + Yb + "]", r0 = "[" + Xb + "]", n0 = "[^" + ms + Qb + t0 + Yb + Xb + Zb + "]", Ef = "\\ud83c[\\udffb-\\udfff]", UI = "(?:" + bs + "|" + Ef + ")", i0 = "[^" + ms + "]", Tf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cf = "[\\ud800-\\udbff][\\udc00-\\udfff]", la = "[" + Zb + "]", a0 = "\\u200d", o0 = "(?:" + r0 + "|" + n0 + ")", HI = "(?:" + la + "|" + n0 + ")", u0 = "(?:" + Pf + "(?:d|ll|m|re|s|t|ve))?", s0 = "(?:" + Pf + "(?:D|LL|M|RE|S|T|VE))?", c0 = UI + "?", l0 = "[" + Jb + "]?", GI = "(?:" + a0 + "(?:" + [i0, Tf, Cf].join("|") + ")" + l0 + c0 + ")*", KI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", VI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", f0 = l0 + c0 + GI, YI = "(?:" + [zI, Tf, Cf].join("|") + ")" + f0, XI = "(?:" + [i0 + bs + "?", bs, Tf, Cf, WI].join("|") + ")", ZI = RegExp(Pf, "g"), JI = RegExp(bs, "g"), Mf = RegExp(Ef + "(?=" + Ef + ")|" + XI + f0, "g"), QI = RegExp([
        la + "?" + r0 + "+" + u0 + "(?=" + [e0, la, "$"].join("|") + ")",
        HI + "+" + s0 + "(?=" + [e0, la + o0, "$"].join("|") + ")",
        la + "?" + o0 + "+" + u0,
        la + "+" + s0,
        VI,
        KI,
        t0,
        YI
      ].join("|"), "g"), eR = RegExp("[" + a0 + ms + Vb + Jb + "]"), tR = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rR = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], nR = -1, ot = {};
      ot[vf] = ot[gf] = ot[yf] = ot[mf] = ot[bf] = ot[xf] = ot[wf] = ot[_f] = ot[Of] = !0, ot[ye] = ot[be] = ot[Co] = ot[ge] = ot[ca] = ot[te] = ot[ve] = ot[k] = ot[we] = ot[Fe] = ot[at] = ot[rr] = ot[vt] = ot[mn] = ot[Xn] = !1;
      var rt = {};
      rt[ye] = rt[be] = rt[Co] = rt[ca] = rt[ge] = rt[te] = rt[vf] = rt[gf] = rt[yf] = rt[mf] = rt[bf] = rt[we] = rt[Fe] = rt[at] = rt[rr] = rt[vt] = rt[mn] = rt[Yn] = rt[xf] = rt[wf] = rt[_f] = rt[Of] = !0, rt[ve] = rt[k] = rt[Xn] = !1;
      var iR = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, aR = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, oR = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, uR = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, sR = parseFloat, cR = parseInt, d0 = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, lR = typeof self == "object" && self && self.Object === Object && self, Rt = d0 || lR || Function("return this")(), If = t && !t.nodeType && t, Pi = If && !0 && e && !e.nodeType && e, h0 = Pi && Pi.exports === If, Rf = h0 && d0.process, yr = function() {
        try {
          var W = Pi && Pi.require && Pi.require("util").types;
          return W || Rf && Rf.binding && Rf.binding("util");
        } catch {
        }
      }(), p0 = yr && yr.isArrayBuffer, v0 = yr && yr.isDate, g0 = yr && yr.isMap, y0 = yr && yr.isRegExp, m0 = yr && yr.isSet, b0 = yr && yr.isTypedArray;
      function nr(W, Q, K) {
        switch (K.length) {
          case 0:
            return W.call(Q);
          case 1:
            return W.call(Q, K[0]);
          case 2:
            return W.call(Q, K[0], K[1]);
          case 3:
            return W.call(Q, K[0], K[1], K[2]);
        }
        return W.apply(Q, K);
      }
      function fR(W, Q, K, de) {
        for (var Ce = -1, Ue = W == null ? 0 : W.length; ++Ce < Ue; ) {
          var xt = W[Ce];
          Q(de, xt, K(xt), W);
        }
        return de;
      }
      function mr(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length; ++K < de && Q(W[K], K, W) !== !1; )
          ;
        return W;
      }
      function dR(W, Q) {
        for (var K = W == null ? 0 : W.length; K-- && Q(W[K], K, W) !== !1; )
          ;
        return W;
      }
      function x0(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length; ++K < de; )
          if (!Q(W[K], K, W))
            return !1;
        return !0;
      }
      function Zn(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length, Ce = 0, Ue = []; ++K < de; ) {
          var xt = W[K];
          Q(xt, K, W) && (Ue[Ce++] = xt);
        }
        return Ue;
      }
      function xs(W, Q) {
        var K = W == null ? 0 : W.length;
        return !!K && fa(W, Q, 0) > -1;
      }
      function $f(W, Q, K) {
        for (var de = -1, Ce = W == null ? 0 : W.length; ++de < Ce; )
          if (K(Q, W[de]))
            return !0;
        return !1;
      }
      function lt(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length, Ce = Array(de); ++K < de; )
          Ce[K] = Q(W[K], K, W);
        return Ce;
      }
      function Jn(W, Q) {
        for (var K = -1, de = Q.length, Ce = W.length; ++K < de; )
          W[Ce + K] = Q[K];
        return W;
      }
      function kf(W, Q, K, de) {
        var Ce = -1, Ue = W == null ? 0 : W.length;
        for (de && Ue && (K = W[++Ce]); ++Ce < Ue; )
          K = Q(K, W[Ce], Ce, W);
        return K;
      }
      function hR(W, Q, K, de) {
        var Ce = W == null ? 0 : W.length;
        for (de && Ce && (K = W[--Ce]); Ce--; )
          K = Q(K, W[Ce], Ce, W);
        return K;
      }
      function jf(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length; ++K < de; )
          if (Q(W[K], K, W))
            return !0;
        return !1;
      }
      var pR = Nf("length");
      function vR(W) {
        return W.split("");
      }
      function gR(W) {
        return W.match(SI) || [];
      }
      function w0(W, Q, K) {
        var de;
        return K(W, function(Ce, Ue, xt) {
          if (Q(Ce, Ue, xt))
            return de = Ue, !1;
        }), de;
      }
      function ws(W, Q, K, de) {
        for (var Ce = W.length, Ue = K + (de ? 1 : -1); de ? Ue-- : ++Ue < Ce; )
          if (Q(W[Ue], Ue, W))
            return Ue;
        return -1;
      }
      function fa(W, Q, K) {
        return Q === Q ? TR(W, Q, K) : ws(W, _0, K);
      }
      function yR(W, Q, K, de) {
        for (var Ce = K - 1, Ue = W.length; ++Ce < Ue; )
          if (de(W[Ce], Q))
            return Ce;
        return -1;
      }
      function _0(W) {
        return W !== W;
      }
      function O0(W, Q) {
        var K = W == null ? 0 : W.length;
        return K ? Lf(W, Q) / K : H;
      }
      function Nf(W) {
        return function(Q) {
          return Q == null ? r : Q[W];
        };
      }
      function Df(W) {
        return function(Q) {
          return W == null ? r : W[Q];
        };
      }
      function S0(W, Q, K, de, Ce) {
        return Ce(W, function(Ue, xt, et) {
          K = de ? (de = !1, Ue) : Q(K, Ue, xt, et);
        }), K;
      }
      function mR(W, Q) {
        var K = W.length;
        for (W.sort(Q); K--; )
          W[K] = W[K].value;
        return W;
      }
      function Lf(W, Q) {
        for (var K, de = -1, Ce = W.length; ++de < Ce; ) {
          var Ue = Q(W[de]);
          Ue !== r && (K = K === r ? Ue : K + Ue);
        }
        return K;
      }
      function qf(W, Q) {
        for (var K = -1, de = Array(W); ++K < W; )
          de[K] = Q(K);
        return de;
      }
      function bR(W, Q) {
        return lt(Q, function(K) {
          return [K, W[K]];
        });
      }
      function A0(W) {
        return W && W.slice(0, C0(W) + 1).replace(Af, "");
      }
      function ir(W) {
        return function(Q) {
          return W(Q);
        };
      }
      function Bf(W, Q) {
        return lt(Q, function(K) {
          return W[K];
        });
      }
      function Mo(W, Q) {
        return W.has(Q);
      }
      function P0(W, Q) {
        for (var K = -1, de = W.length; ++K < de && fa(Q, W[K], 0) > -1; )
          ;
        return K;
      }
      function E0(W, Q) {
        for (var K = W.length; K-- && fa(Q, W[K], 0) > -1; )
          ;
        return K;
      }
      function xR(W, Q) {
        for (var K = W.length, de = 0; K--; )
          W[K] === Q && ++de;
        return de;
      }
      var wR = Df(iR), _R = Df(aR);
      function OR(W) {
        return "\\" + uR[W];
      }
      function SR(W, Q) {
        return W == null ? r : W[Q];
      }
      function da(W) {
        return eR.test(W);
      }
      function AR(W) {
        return tR.test(W);
      }
      function PR(W) {
        for (var Q, K = []; !(Q = W.next()).done; )
          K.push(Q.value);
        return K;
      }
      function Ff(W) {
        var Q = -1, K = Array(W.size);
        return W.forEach(function(de, Ce) {
          K[++Q] = [Ce, de];
        }), K;
      }
      function T0(W, Q) {
        return function(K) {
          return W(Q(K));
        };
      }
      function Qn(W, Q) {
        for (var K = -1, de = W.length, Ce = 0, Ue = []; ++K < de; ) {
          var xt = W[K];
          (xt === Q || xt === d) && (W[K] = d, Ue[Ce++] = K);
        }
        return Ue;
      }
      function _s(W) {
        var Q = -1, K = Array(W.size);
        return W.forEach(function(de) {
          K[++Q] = de;
        }), K;
      }
      function ER(W) {
        var Q = -1, K = Array(W.size);
        return W.forEach(function(de) {
          K[++Q] = [de, de];
        }), K;
      }
      function TR(W, Q, K) {
        for (var de = K - 1, Ce = W.length; ++de < Ce; )
          if (W[de] === Q)
            return de;
        return -1;
      }
      function CR(W, Q, K) {
        for (var de = K + 1; de--; )
          if (W[de] === Q)
            return de;
        return de;
      }
      function ha(W) {
        return da(W) ? IR(W) : pR(W);
      }
      function Br(W) {
        return da(W) ? RR(W) : vR(W);
      }
      function C0(W) {
        for (var Q = W.length; Q-- && xI.test(W.charAt(Q)); )
          ;
        return Q;
      }
      var MR = Df(oR);
      function IR(W) {
        for (var Q = Mf.lastIndex = 0; Mf.test(W); )
          ++Q;
        return Q;
      }
      function RR(W) {
        return W.match(Mf) || [];
      }
      function $R(W) {
        return W.match(QI) || [];
      }
      var kR = function W(Q) {
        Q = Q == null ? Rt : pa.defaults(Rt.Object(), Q, pa.pick(Rt, rR));
        var K = Q.Array, de = Q.Date, Ce = Q.Error, Ue = Q.Function, xt = Q.Math, et = Q.Object, Wf = Q.RegExp, jR = Q.String, br = Q.TypeError, Os = K.prototype, NR = Ue.prototype, va = et.prototype, Ss = Q["__core-js_shared__"], As = NR.toString, Ze = va.hasOwnProperty, DR = 0, M0 = function() {
          var o = /[^.]+$/.exec(Ss && Ss.keys && Ss.keys.IE_PROTO || "");
          return o ? "Symbol(src)_1." + o : "";
        }(), Ps = va.toString, LR = As.call(et), qR = Rt._, BR = Wf(
          "^" + As.call(Ze).replace(Sf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Es = h0 ? Q.Buffer : r, ei = Q.Symbol, Ts = Q.Uint8Array, I0 = Es ? Es.allocUnsafe : r, Cs = T0(et.getPrototypeOf, et), R0 = et.create, $0 = va.propertyIsEnumerable, Ms = Os.splice, k0 = ei ? ei.isConcatSpreadable : r, Io = ei ? ei.iterator : r, Ei = ei ? ei.toStringTag : r, Is = function() {
          try {
            var o = Ri(et, "defineProperty");
            return o({}, "", {}), o;
          } catch {
          }
        }(), FR = Q.clearTimeout !== Rt.clearTimeout && Q.clearTimeout, WR = de && de.now !== Rt.Date.now && de.now, zR = Q.setTimeout !== Rt.setTimeout && Q.setTimeout, Rs = xt.ceil, $s = xt.floor, zf = et.getOwnPropertySymbols, UR = Es ? Es.isBuffer : r, j0 = Q.isFinite, HR = Os.join, GR = T0(et.keys, et), wt = xt.max, jt = xt.min, KR = de.now, VR = Q.parseInt, N0 = xt.random, YR = Os.reverse, Uf = Ri(Q, "DataView"), Ro = Ri(Q, "Map"), Hf = Ri(Q, "Promise"), ga = Ri(Q, "Set"), $o = Ri(Q, "WeakMap"), ko = Ri(et, "create"), ks = $o && new $o(), ya = {}, XR = $i(Uf), ZR = $i(Ro), JR = $i(Hf), QR = $i(ga), e$ = $i($o), js = ei ? ei.prototype : r, jo = js ? js.valueOf : r, D0 = js ? js.toString : r;
        function C(o) {
          if (pt(o) && !Me(o) && !(o instanceof qe)) {
            if (o instanceof xr)
              return o;
            if (Ze.call(o, "__wrapped__"))
              return Lx(o);
          }
          return new xr(o);
        }
        var ma = /* @__PURE__ */ function() {
          function o() {
          }
          return function(c) {
            if (!ht(c))
              return {};
            if (R0)
              return R0(c);
            o.prototype = c;
            var p = new o();
            return o.prototype = r, p;
          };
        }();
        function Ns() {
        }
        function xr(o, c) {
          this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = r;
        }
        C.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: pI,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: vI,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Gb,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: C
          }
        }, C.prototype = Ns.prototype, C.prototype.constructor = C, xr.prototype = ma(Ns.prototype), xr.prototype.constructor = xr;
        function qe(o) {
          this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
        }
        function t$() {
          var o = new qe(this.__wrapped__);
          return o.__actions__ = Vt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Vt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Vt(this.__views__), o;
        }
        function r$() {
          if (this.__filtered__) {
            var o = new qe(this);
            o.__dir__ = -1, o.__filtered__ = !0;
          } else
            o = this.clone(), o.__dir__ *= -1;
          return o;
        }
        function n$() {
          var o = this.__wrapped__.value(), c = this.__dir__, p = Me(o), w = c < 0, P = p ? o.length : 0, M = vk(0, P, this.__views__), R = M.start, D = M.end, z = D - R, ee = w ? D : R - 1, re = this.__iteratees__, ie = re.length, fe = 0, me = jt(z, this.__takeCount__);
          if (!p || !w && P == z && me == z)
            return ux(o, this.__actions__);
          var Oe = [];
          e:
            for (; z-- && fe < me; ) {
              ee += c;
              for (var je = -1, Se = o[ee]; ++je < ie; ) {
                var De = re[je], Be = De.iteratee, ur = De.type, Wt = Be(Se);
                if (ur == V)
                  Se = Wt;
                else if (!Wt) {
                  if (ur == F)
                    continue e;
                  break e;
                }
              }
              Oe[fe++] = Se;
            }
          return Oe;
        }
        qe.prototype = ma(Ns.prototype), qe.prototype.constructor = qe;
        function Ti(o) {
          var c = -1, p = o == null ? 0 : o.length;
          for (this.clear(); ++c < p; ) {
            var w = o[c];
            this.set(w[0], w[1]);
          }
        }
        function i$() {
          this.__data__ = ko ? ko(null) : {}, this.size = 0;
        }
        function a$(o) {
          var c = this.has(o) && delete this.__data__[o];
          return this.size -= c ? 1 : 0, c;
        }
        function o$(o) {
          var c = this.__data__;
          if (ko) {
            var p = c[o];
            return p === l ? r : p;
          }
          return Ze.call(c, o) ? c[o] : r;
        }
        function u$(o) {
          var c = this.__data__;
          return ko ? c[o] !== r : Ze.call(c, o);
        }
        function s$(o, c) {
          var p = this.__data__;
          return this.size += this.has(o) ? 0 : 1, p[o] = ko && c === r ? l : c, this;
        }
        Ti.prototype.clear = i$, Ti.prototype.delete = a$, Ti.prototype.get = o$, Ti.prototype.has = u$, Ti.prototype.set = s$;
        function bn(o) {
          var c = -1, p = o == null ? 0 : o.length;
          for (this.clear(); ++c < p; ) {
            var w = o[c];
            this.set(w[0], w[1]);
          }
        }
        function c$() {
          this.__data__ = [], this.size = 0;
        }
        function l$(o) {
          var c = this.__data__, p = Ds(c, o);
          if (p < 0)
            return !1;
          var w = c.length - 1;
          return p == w ? c.pop() : Ms.call(c, p, 1), --this.size, !0;
        }
        function f$(o) {
          var c = this.__data__, p = Ds(c, o);
          return p < 0 ? r : c[p][1];
        }
        function d$(o) {
          return Ds(this.__data__, o) > -1;
        }
        function h$(o, c) {
          var p = this.__data__, w = Ds(p, o);
          return w < 0 ? (++this.size, p.push([o, c])) : p[w][1] = c, this;
        }
        bn.prototype.clear = c$, bn.prototype.delete = l$, bn.prototype.get = f$, bn.prototype.has = d$, bn.prototype.set = h$;
        function xn(o) {
          var c = -1, p = o == null ? 0 : o.length;
          for (this.clear(); ++c < p; ) {
            var w = o[c];
            this.set(w[0], w[1]);
          }
        }
        function p$() {
          this.size = 0, this.__data__ = {
            hash: new Ti(),
            map: new (Ro || bn)(),
            string: new Ti()
          };
        }
        function v$(o) {
          var c = Ys(this, o).delete(o);
          return this.size -= c ? 1 : 0, c;
        }
        function g$(o) {
          return Ys(this, o).get(o);
        }
        function y$(o) {
          return Ys(this, o).has(o);
        }
        function m$(o, c) {
          var p = Ys(this, o), w = p.size;
          return p.set(o, c), this.size += p.size == w ? 0 : 1, this;
        }
        xn.prototype.clear = p$, xn.prototype.delete = v$, xn.prototype.get = g$, xn.prototype.has = y$, xn.prototype.set = m$;
        function Ci(o) {
          var c = -1, p = o == null ? 0 : o.length;
          for (this.__data__ = new xn(); ++c < p; )
            this.add(o[c]);
        }
        function b$(o) {
          return this.__data__.set(o, l), this;
        }
        function x$(o) {
          return this.__data__.has(o);
        }
        Ci.prototype.add = Ci.prototype.push = b$, Ci.prototype.has = x$;
        function Fr(o) {
          var c = this.__data__ = new bn(o);
          this.size = c.size;
        }
        function w$() {
          this.__data__ = new bn(), this.size = 0;
        }
        function _$(o) {
          var c = this.__data__, p = c.delete(o);
          return this.size = c.size, p;
        }
        function O$(o) {
          return this.__data__.get(o);
        }
        function S$(o) {
          return this.__data__.has(o);
        }
        function A$(o, c) {
          var p = this.__data__;
          if (p instanceof bn) {
            var w = p.__data__;
            if (!Ro || w.length < i - 1)
              return w.push([o, c]), this.size = ++p.size, this;
            p = this.__data__ = new xn(w);
          }
          return p.set(o, c), this.size = p.size, this;
        }
        Fr.prototype.clear = w$, Fr.prototype.delete = _$, Fr.prototype.get = O$, Fr.prototype.has = S$, Fr.prototype.set = A$;
        function L0(o, c) {
          var p = Me(o), w = !p && ki(o), P = !p && !w && ai(o), M = !p && !w && !P && _a(o), R = p || w || P || M, D = R ? qf(o.length, jR) : [], z = D.length;
          for (var ee in o)
            (c || Ze.call(o, ee)) && !(R && // Safari 9 has enumerable `arguments.length` in strict mode.
            (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
            Sn(ee, z))) && D.push(ee);
          return D;
        }
        function q0(o) {
          var c = o.length;
          return c ? o[rd(0, c - 1)] : r;
        }
        function P$(o, c) {
          return Xs(Vt(o), Mi(c, 0, o.length));
        }
        function E$(o) {
          return Xs(Vt(o));
        }
        function Gf(o, c, p) {
          (p !== r && !Wr(o[c], p) || p === r && !(c in o)) && wn(o, c, p);
        }
        function No(o, c, p) {
          var w = o[c];
          (!(Ze.call(o, c) && Wr(w, p)) || p === r && !(c in o)) && wn(o, c, p);
        }
        function Ds(o, c) {
          for (var p = o.length; p--; )
            if (Wr(o[p][0], c))
              return p;
          return -1;
        }
        function T$(o, c, p, w) {
          return ti(o, function(P, M, R) {
            c(w, P, p(P), R);
          }), w;
        }
        function B0(o, c) {
          return o && nn(c, Tt(c), o);
        }
        function C$(o, c) {
          return o && nn(c, Xt(c), o);
        }
        function wn(o, c, p) {
          c == "__proto__" && Is ? Is(o, c, {
            configurable: !0,
            enumerable: !0,
            value: p,
            writable: !0
          }) : o[c] = p;
        }
        function Kf(o, c) {
          for (var p = -1, w = c.length, P = K(w), M = o == null; ++p < w; )
            P[p] = M ? r : Ed(o, c[p]);
          return P;
        }
        function Mi(o, c, p) {
          return o === o && (p !== r && (o = o <= p ? o : p), c !== r && (o = o >= c ? o : c)), o;
        }
        function wr(o, c, p, w, P, M) {
          var R, D = c & h, z = c & v, ee = c & g;
          if (p && (R = P ? p(o, w, P, M) : p(o)), R !== r)
            return R;
          if (!ht(o))
            return o;
          var re = Me(o);
          if (re) {
            if (R = yk(o), !D)
              return Vt(o, R);
          } else {
            var ie = Nt(o), fe = ie == k || ie == Ee;
            if (ai(o))
              return lx(o, D);
            if (ie == at || ie == ye || fe && !P) {
              if (R = z || fe ? {} : Cx(o), !D)
                return z ? ok(o, C$(R, o)) : ak(o, B0(R, o));
            } else {
              if (!rt[ie])
                return P ? o : {};
              R = mk(o, ie, D);
            }
          }
          M || (M = new Fr());
          var me = M.get(o);
          if (me)
            return me;
          M.set(o, R), iw(o) ? o.forEach(function(Se) {
            R.add(wr(Se, c, p, Se, o, M));
          }) : rw(o) && o.forEach(function(Se, De) {
            R.set(De, wr(Se, c, p, De, o, M));
          });
          var Oe = ee ? z ? hd : dd : z ? Xt : Tt, je = re ? r : Oe(o);
          return mr(je || o, function(Se, De) {
            je && (De = Se, Se = o[De]), No(R, De, wr(Se, c, p, De, o, M));
          }), R;
        }
        function M$(o) {
          var c = Tt(o);
          return function(p) {
            return F0(p, o, c);
          };
        }
        function F0(o, c, p) {
          var w = p.length;
          if (o == null)
            return !w;
          for (o = et(o); w--; ) {
            var P = p[w], M = c[P], R = o[P];
            if (R === r && !(P in o) || !M(R))
              return !1;
          }
          return !0;
        }
        function W0(o, c, p) {
          if (typeof o != "function")
            throw new br(u);
          return zo(function() {
            o.apply(r, p);
          }, c);
        }
        function Do(o, c, p, w) {
          var P = -1, M = xs, R = !0, D = o.length, z = [], ee = c.length;
          if (!D)
            return z;
          p && (c = lt(c, ir(p))), w ? (M = $f, R = !1) : c.length >= i && (M = Mo, R = !1, c = new Ci(c));
          e:
            for (; ++P < D; ) {
              var re = o[P], ie = p == null ? re : p(re);
              if (re = w || re !== 0 ? re : 0, R && ie === ie) {
                for (var fe = ee; fe--; )
                  if (c[fe] === ie)
                    continue e;
                z.push(re);
              } else M(c, ie, w) || z.push(re);
            }
          return z;
        }
        var ti = vx(rn), z0 = vx(Yf, !0);
        function I$(o, c) {
          var p = !0;
          return ti(o, function(w, P, M) {
            return p = !!c(w, P, M), p;
          }), p;
        }
        function Ls(o, c, p) {
          for (var w = -1, P = o.length; ++w < P; ) {
            var M = o[w], R = c(M);
            if (R != null && (D === r ? R === R && !or(R) : p(R, D)))
              var D = R, z = M;
          }
          return z;
        }
        function R$(o, c, p, w) {
          var P = o.length;
          for (p = Re(p), p < 0 && (p = -p > P ? 0 : P + p), w = w === r || w > P ? P : Re(w), w < 0 && (w += P), w = p > w ? 0 : ow(w); p < w; )
            o[p++] = c;
          return o;
        }
        function U0(o, c) {
          var p = [];
          return ti(o, function(w, P, M) {
            c(w, P, M) && p.push(w);
          }), p;
        }
        function $t(o, c, p, w, P) {
          var M = -1, R = o.length;
          for (p || (p = xk), P || (P = []); ++M < R; ) {
            var D = o[M];
            c > 0 && p(D) ? c > 1 ? $t(D, c - 1, p, w, P) : Jn(P, D) : w || (P[P.length] = D);
          }
          return P;
        }
        var Vf = gx(), H0 = gx(!0);
        function rn(o, c) {
          return o && Vf(o, c, Tt);
        }
        function Yf(o, c) {
          return o && H0(o, c, Tt);
        }
        function qs(o, c) {
          return Zn(c, function(p) {
            return An(o[p]);
          });
        }
        function Ii(o, c) {
          c = ni(c, o);
          for (var p = 0, w = c.length; o != null && p < w; )
            o = o[an(c[p++])];
          return p && p == w ? o : r;
        }
        function G0(o, c, p) {
          var w = c(o);
          return Me(o) ? w : Jn(w, p(o));
        }
        function Bt(o) {
          return o == null ? o === r ? To : ct : Ei && Ei in et(o) ? pk(o) : Ek(o);
        }
        function Xf(o, c) {
          return o > c;
        }
        function $$(o, c) {
          return o != null && Ze.call(o, c);
        }
        function k$(o, c) {
          return o != null && c in et(o);
        }
        function j$(o, c, p) {
          return o >= jt(c, p) && o < wt(c, p);
        }
        function Zf(o, c, p) {
          for (var w = p ? $f : xs, P = o[0].length, M = o.length, R = M, D = K(M), z = 1 / 0, ee = []; R--; ) {
            var re = o[R];
            R && c && (re = lt(re, ir(c))), z = jt(re.length, z), D[R] = !p && (c || P >= 120 && re.length >= 120) ? new Ci(R && re) : r;
          }
          re = o[0];
          var ie = -1, fe = D[0];
          e:
            for (; ++ie < P && ee.length < z; ) {
              var me = re[ie], Oe = c ? c(me) : me;
              if (me = p || me !== 0 ? me : 0, !(fe ? Mo(fe, Oe) : w(ee, Oe, p))) {
                for (R = M; --R; ) {
                  var je = D[R];
                  if (!(je ? Mo(je, Oe) : w(o[R], Oe, p)))
                    continue e;
                }
                fe && fe.push(Oe), ee.push(me);
              }
            }
          return ee;
        }
        function N$(o, c, p, w) {
          return rn(o, function(P, M, R) {
            c(w, p(P), M, R);
          }), w;
        }
        function Lo(o, c, p) {
          c = ni(c, o), o = $x(o, c);
          var w = o == null ? o : o[an(Or(c))];
          return w == null ? r : nr(w, o, p);
        }
        function K0(o) {
          return pt(o) && Bt(o) == ye;
        }
        function D$(o) {
          return pt(o) && Bt(o) == Co;
        }
        function L$(o) {
          return pt(o) && Bt(o) == te;
        }
        function qo(o, c, p, w, P) {
          return o === c ? !0 : o == null || c == null || !pt(o) && !pt(c) ? o !== o && c !== c : q$(o, c, p, w, qo, P);
        }
        function q$(o, c, p, w, P, M) {
          var R = Me(o), D = Me(c), z = R ? be : Nt(o), ee = D ? be : Nt(c);
          z = z == ye ? at : z, ee = ee == ye ? at : ee;
          var re = z == at, ie = ee == at, fe = z == ee;
          if (fe && ai(o)) {
            if (!ai(c))
              return !1;
            R = !0, re = !1;
          }
          if (fe && !re)
            return M || (M = new Fr()), R || _a(o) ? Px(o, c, p, w, P, M) : dk(o, c, z, p, w, P, M);
          if (!(p & x)) {
            var me = re && Ze.call(o, "__wrapped__"), Oe = ie && Ze.call(c, "__wrapped__");
            if (me || Oe) {
              var je = me ? o.value() : o, Se = Oe ? c.value() : c;
              return M || (M = new Fr()), P(je, Se, p, w, M);
            }
          }
          return fe ? (M || (M = new Fr()), hk(o, c, p, w, P, M)) : !1;
        }
        function B$(o) {
          return pt(o) && Nt(o) == we;
        }
        function Jf(o, c, p, w) {
          var P = p.length, M = P, R = !w;
          if (o == null)
            return !M;
          for (o = et(o); P--; ) {
            var D = p[P];
            if (R && D[2] ? D[1] !== o[D[0]] : !(D[0] in o))
              return !1;
          }
          for (; ++P < M; ) {
            D = p[P];
            var z = D[0], ee = o[z], re = D[1];
            if (R && D[2]) {
              if (ee === r && !(z in o))
                return !1;
            } else {
              var ie = new Fr();
              if (w)
                var fe = w(ee, re, z, o, c, ie);
              if (!(fe === r ? qo(re, ee, x | y, w, ie) : fe))
                return !1;
            }
          }
          return !0;
        }
        function V0(o) {
          if (!ht(o) || _k(o))
            return !1;
          var c = An(o) ? BR : MI;
          return c.test($i(o));
        }
        function F$(o) {
          return pt(o) && Bt(o) == rr;
        }
        function W$(o) {
          return pt(o) && Nt(o) == vt;
        }
        function z$(o) {
          return pt(o) && rc(o.length) && !!ot[Bt(o)];
        }
        function Y0(o) {
          return typeof o == "function" ? o : o == null ? Zt : typeof o == "object" ? Me(o) ? J0(o[0], o[1]) : Z0(o) : yw(o);
        }
        function Qf(o) {
          if (!Wo(o))
            return GR(o);
          var c = [];
          for (var p in et(o))
            Ze.call(o, p) && p != "constructor" && c.push(p);
          return c;
        }
        function U$(o) {
          if (!ht(o))
            return Pk(o);
          var c = Wo(o), p = [];
          for (var w in o)
            w == "constructor" && (c || !Ze.call(o, w)) || p.push(w);
          return p;
        }
        function ed(o, c) {
          return o < c;
        }
        function X0(o, c) {
          var p = -1, w = Yt(o) ? K(o.length) : [];
          return ti(o, function(P, M, R) {
            w[++p] = c(P, M, R);
          }), w;
        }
        function Z0(o) {
          var c = vd(o);
          return c.length == 1 && c[0][2] ? Ix(c[0][0], c[0][1]) : function(p) {
            return p === o || Jf(p, o, c);
          };
        }
        function J0(o, c) {
          return yd(o) && Mx(c) ? Ix(an(o), c) : function(p) {
            var w = Ed(p, o);
            return w === r && w === c ? Td(p, o) : qo(c, w, x | y);
          };
        }
        function Bs(o, c, p, w, P) {
          o !== c && Vf(c, function(M, R) {
            if (P || (P = new Fr()), ht(M))
              H$(o, c, R, p, Bs, w, P);
            else {
              var D = w ? w(bd(o, R), M, R + "", o, c, P) : r;
              D === r && (D = M), Gf(o, R, D);
            }
          }, Xt);
        }
        function H$(o, c, p, w, P, M, R) {
          var D = bd(o, p), z = bd(c, p), ee = R.get(z);
          if (ee) {
            Gf(o, p, ee);
            return;
          }
          var re = M ? M(D, z, p + "", o, c, R) : r, ie = re === r;
          if (ie) {
            var fe = Me(z), me = !fe && ai(z), Oe = !fe && !me && _a(z);
            re = z, fe || me || Oe ? Me(D) ? re = D : gt(D) ? re = Vt(D) : me ? (ie = !1, re = lx(z, !0)) : Oe ? (ie = !1, re = fx(z, !0)) : re = [] : Uo(z) || ki(z) ? (re = D, ki(D) ? re = uw(D) : (!ht(D) || An(D)) && (re = Cx(z))) : ie = !1;
          }
          ie && (R.set(z, re), P(re, z, w, M, R), R.delete(z)), Gf(o, p, re);
        }
        function Q0(o, c) {
          var p = o.length;
          if (p)
            return c += c < 0 ? p : 0, Sn(c, p) ? o[c] : r;
        }
        function ex(o, c, p) {
          c.length ? c = lt(c, function(M) {
            return Me(M) ? function(R) {
              return Ii(R, M.length === 1 ? M[0] : M);
            } : M;
          }) : c = [Zt];
          var w = -1;
          c = lt(c, ir(_e()));
          var P = X0(o, function(M, R, D) {
            var z = lt(c, function(ee) {
              return ee(M);
            });
            return { criteria: z, index: ++w, value: M };
          });
          return mR(P, function(M, R) {
            return ik(M, R, p);
          });
        }
        function G$(o, c) {
          return tx(o, c, function(p, w) {
            return Td(o, w);
          });
        }
        function tx(o, c, p) {
          for (var w = -1, P = c.length, M = {}; ++w < P; ) {
            var R = c[w], D = Ii(o, R);
            p(D, R) && Bo(M, ni(R, o), D);
          }
          return M;
        }
        function K$(o) {
          return function(c) {
            return Ii(c, o);
          };
        }
        function td(o, c, p, w) {
          var P = w ? yR : fa, M = -1, R = c.length, D = o;
          for (o === c && (c = Vt(c)), p && (D = lt(o, ir(p))); ++M < R; )
            for (var z = 0, ee = c[M], re = p ? p(ee) : ee; (z = P(D, re, z, w)) > -1; )
              D !== o && Ms.call(D, z, 1), Ms.call(o, z, 1);
          return o;
        }
        function rx(o, c) {
          for (var p = o ? c.length : 0, w = p - 1; p--; ) {
            var P = c[p];
            if (p == w || P !== M) {
              var M = P;
              Sn(P) ? Ms.call(o, P, 1) : ad(o, P);
            }
          }
          return o;
        }
        function rd(o, c) {
          return o + $s(N0() * (c - o + 1));
        }
        function V$(o, c, p, w) {
          for (var P = -1, M = wt(Rs((c - o) / (p || 1)), 0), R = K(M); M--; )
            R[w ? M : ++P] = o, o += p;
          return R;
        }
        function nd(o, c) {
          var p = "";
          if (!o || c < 1 || c > G)
            return p;
          do
            c % 2 && (p += o), c = $s(c / 2), c && (o += o);
          while (c);
          return p;
        }
        function Ne(o, c) {
          return xd(Rx(o, c, Zt), o + "");
        }
        function Y$(o) {
          return q0(Oa(o));
        }
        function X$(o, c) {
          var p = Oa(o);
          return Xs(p, Mi(c, 0, p.length));
        }
        function Bo(o, c, p, w) {
          if (!ht(o))
            return o;
          c = ni(c, o);
          for (var P = -1, M = c.length, R = M - 1, D = o; D != null && ++P < M; ) {
            var z = an(c[P]), ee = p;
            if (z === "__proto__" || z === "constructor" || z === "prototype")
              return o;
            if (P != R) {
              var re = D[z];
              ee = w ? w(re, z, D) : r, ee === r && (ee = ht(re) ? re : Sn(c[P + 1]) ? [] : {});
            }
            No(D, z, ee), D = D[z];
          }
          return o;
        }
        var nx = ks ? function(o, c) {
          return ks.set(o, c), o;
        } : Zt, Z$ = Is ? function(o, c) {
          return Is(o, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Md(c),
            writable: !0
          });
        } : Zt;
        function J$(o) {
          return Xs(Oa(o));
        }
        function _r(o, c, p) {
          var w = -1, P = o.length;
          c < 0 && (c = -c > P ? 0 : P + c), p = p > P ? P : p, p < 0 && (p += P), P = c > p ? 0 : p - c >>> 0, c >>>= 0;
          for (var M = K(P); ++w < P; )
            M[w] = o[w + c];
          return M;
        }
        function Q$(o, c) {
          var p;
          return ti(o, function(w, P, M) {
            return p = c(w, P, M), !p;
          }), !!p;
        }
        function Fs(o, c, p) {
          var w = 0, P = o == null ? w : o.length;
          if (typeof c == "number" && c === c && P <= ce) {
            for (; w < P; ) {
              var M = w + P >>> 1, R = o[M];
              R !== null && !or(R) && (p ? R <= c : R < c) ? w = M + 1 : P = M;
            }
            return P;
          }
          return id(o, c, Zt, p);
        }
        function id(o, c, p, w) {
          var P = 0, M = o == null ? 0 : o.length;
          if (M === 0)
            return 0;
          c = p(c);
          for (var R = c !== c, D = c === null, z = or(c), ee = c === r; P < M; ) {
            var re = $s((P + M) / 2), ie = p(o[re]), fe = ie !== r, me = ie === null, Oe = ie === ie, je = or(ie);
            if (R)
              var Se = w || Oe;
            else ee ? Se = Oe && (w || fe) : D ? Se = Oe && fe && (w || !me) : z ? Se = Oe && fe && !me && (w || !je) : me || je ? Se = !1 : Se = w ? ie <= c : ie < c;
            Se ? P = re + 1 : M = re;
          }
          return jt(M, ae);
        }
        function ix(o, c) {
          for (var p = -1, w = o.length, P = 0, M = []; ++p < w; ) {
            var R = o[p], D = c ? c(R) : R;
            if (!p || !Wr(D, z)) {
              var z = D;
              M[P++] = R === 0 ? 0 : R;
            }
          }
          return M;
        }
        function ax(o) {
          return typeof o == "number" ? o : or(o) ? H : +o;
        }
        function ar(o) {
          if (typeof o == "string")
            return o;
          if (Me(o))
            return lt(o, ar) + "";
          if (or(o))
            return D0 ? D0.call(o) : "";
          var c = o + "";
          return c == "0" && 1 / o == -J ? "-0" : c;
        }
        function ri(o, c, p) {
          var w = -1, P = xs, M = o.length, R = !0, D = [], z = D;
          if (p)
            R = !1, P = $f;
          else if (M >= i) {
            var ee = c ? null : lk(o);
            if (ee)
              return _s(ee);
            R = !1, P = Mo, z = new Ci();
          } else
            z = c ? [] : D;
          e:
            for (; ++w < M; ) {
              var re = o[w], ie = c ? c(re) : re;
              if (re = p || re !== 0 ? re : 0, R && ie === ie) {
                for (var fe = z.length; fe--; )
                  if (z[fe] === ie)
                    continue e;
                c && z.push(ie), D.push(re);
              } else P(z, ie, p) || (z !== D && z.push(ie), D.push(re));
            }
          return D;
        }
        function ad(o, c) {
          return c = ni(c, o), o = $x(o, c), o == null || delete o[an(Or(c))];
        }
        function ox(o, c, p, w) {
          return Bo(o, c, p(Ii(o, c)), w);
        }
        function Ws(o, c, p, w) {
          for (var P = o.length, M = w ? P : -1; (w ? M-- : ++M < P) && c(o[M], M, o); )
            ;
          return p ? _r(o, w ? 0 : M, w ? M + 1 : P) : _r(o, w ? M + 1 : 0, w ? P : M);
        }
        function ux(o, c) {
          var p = o;
          return p instanceof qe && (p = p.value()), kf(c, function(w, P) {
            return P.func.apply(P.thisArg, Jn([w], P.args));
          }, p);
        }
        function od(o, c, p) {
          var w = o.length;
          if (w < 2)
            return w ? ri(o[0]) : [];
          for (var P = -1, M = K(w); ++P < w; )
            for (var R = o[P], D = -1; ++D < w; )
              D != P && (M[P] = Do(M[P] || R, o[D], c, p));
          return ri($t(M, 1), c, p);
        }
        function sx(o, c, p) {
          for (var w = -1, P = o.length, M = c.length, R = {}; ++w < P; ) {
            var D = w < M ? c[w] : r;
            p(R, o[w], D);
          }
          return R;
        }
        function ud(o) {
          return gt(o) ? o : [];
        }
        function sd(o) {
          return typeof o == "function" ? o : Zt;
        }
        function ni(o, c) {
          return Me(o) ? o : yd(o, c) ? [o] : Dx(He(o));
        }
        var ek = Ne;
        function ii(o, c, p) {
          var w = o.length;
          return p = p === r ? w : p, !c && p >= w ? o : _r(o, c, p);
        }
        var cx = FR || function(o) {
          return Rt.clearTimeout(o);
        };
        function lx(o, c) {
          if (c)
            return o.slice();
          var p = o.length, w = I0 ? I0(p) : new o.constructor(p);
          return o.copy(w), w;
        }
        function cd(o) {
          var c = new o.constructor(o.byteLength);
          return new Ts(c).set(new Ts(o)), c;
        }
        function tk(o, c) {
          var p = c ? cd(o.buffer) : o.buffer;
          return new o.constructor(p, o.byteOffset, o.byteLength);
        }
        function rk(o) {
          var c = new o.constructor(o.source, Kb.exec(o));
          return c.lastIndex = o.lastIndex, c;
        }
        function nk(o) {
          return jo ? et(jo.call(o)) : {};
        }
        function fx(o, c) {
          var p = c ? cd(o.buffer) : o.buffer;
          return new o.constructor(p, o.byteOffset, o.length);
        }
        function dx(o, c) {
          if (o !== c) {
            var p = o !== r, w = o === null, P = o === o, M = or(o), R = c !== r, D = c === null, z = c === c, ee = or(c);
            if (!D && !ee && !M && o > c || M && R && z && !D && !ee || w && R && z || !p && z || !P)
              return 1;
            if (!w && !M && !ee && o < c || ee && p && P && !w && !M || D && p && P || !R && P || !z)
              return -1;
          }
          return 0;
        }
        function ik(o, c, p) {
          for (var w = -1, P = o.criteria, M = c.criteria, R = P.length, D = p.length; ++w < R; ) {
            var z = dx(P[w], M[w]);
            if (z) {
              if (w >= D)
                return z;
              var ee = p[w];
              return z * (ee == "desc" ? -1 : 1);
            }
          }
          return o.index - c.index;
        }
        function hx(o, c, p, w) {
          for (var P = -1, M = o.length, R = p.length, D = -1, z = c.length, ee = wt(M - R, 0), re = K(z + ee), ie = !w; ++D < z; )
            re[D] = c[D];
          for (; ++P < R; )
            (ie || P < M) && (re[p[P]] = o[P]);
          for (; ee--; )
            re[D++] = o[P++];
          return re;
        }
        function px(o, c, p, w) {
          for (var P = -1, M = o.length, R = -1, D = p.length, z = -1, ee = c.length, re = wt(M - D, 0), ie = K(re + ee), fe = !w; ++P < re; )
            ie[P] = o[P];
          for (var me = P; ++z < ee; )
            ie[me + z] = c[z];
          for (; ++R < D; )
            (fe || P < M) && (ie[me + p[R]] = o[P++]);
          return ie;
        }
        function Vt(o, c) {
          var p = -1, w = o.length;
          for (c || (c = K(w)); ++p < w; )
            c[p] = o[p];
          return c;
        }
        function nn(o, c, p, w) {
          var P = !p;
          p || (p = {});
          for (var M = -1, R = c.length; ++M < R; ) {
            var D = c[M], z = w ? w(p[D], o[D], D, p, o) : r;
            z === r && (z = o[D]), P ? wn(p, D, z) : No(p, D, z);
          }
          return p;
        }
        function ak(o, c) {
          return nn(o, gd(o), c);
        }
        function ok(o, c) {
          return nn(o, Ex(o), c);
        }
        function zs(o, c) {
          return function(p, w) {
            var P = Me(p) ? fR : T$, M = c ? c() : {};
            return P(p, o, _e(w, 2), M);
          };
        }
        function ba(o) {
          return Ne(function(c, p) {
            var w = -1, P = p.length, M = P > 1 ? p[P - 1] : r, R = P > 2 ? p[2] : r;
            for (M = o.length > 3 && typeof M == "function" ? (P--, M) : r, R && Ft(p[0], p[1], R) && (M = P < 3 ? r : M, P = 1), c = et(c); ++w < P; ) {
              var D = p[w];
              D && o(c, D, w, M);
            }
            return c;
          });
        }
        function vx(o, c) {
          return function(p, w) {
            if (p == null)
              return p;
            if (!Yt(p))
              return o(p, w);
            for (var P = p.length, M = c ? P : -1, R = et(p); (c ? M-- : ++M < P) && w(R[M], M, R) !== !1; )
              ;
            return p;
          };
        }
        function gx(o) {
          return function(c, p, w) {
            for (var P = -1, M = et(c), R = w(c), D = R.length; D--; ) {
              var z = R[o ? D : ++P];
              if (p(M[z], z, M) === !1)
                break;
            }
            return c;
          };
        }
        function uk(o, c, p) {
          var w = c & b, P = Fo(o);
          function M() {
            var R = this && this !== Rt && this instanceof M ? P : o;
            return R.apply(w ? p : this, arguments);
          }
          return M;
        }
        function yx(o) {
          return function(c) {
            c = He(c);
            var p = da(c) ? Br(c) : r, w = p ? p[0] : c.charAt(0), P = p ? ii(p, 1).join("") : c.slice(1);
            return w[o]() + P;
          };
        }
        function xa(o) {
          return function(c) {
            return kf(vw(pw(c).replace(ZI, "")), o, "");
          };
        }
        function Fo(o) {
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return new o();
              case 1:
                return new o(c[0]);
              case 2:
                return new o(c[0], c[1]);
              case 3:
                return new o(c[0], c[1], c[2]);
              case 4:
                return new o(c[0], c[1], c[2], c[3]);
              case 5:
                return new o(c[0], c[1], c[2], c[3], c[4]);
              case 6:
                return new o(c[0], c[1], c[2], c[3], c[4], c[5]);
              case 7:
                return new o(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
            }
            var p = ma(o.prototype), w = o.apply(p, c);
            return ht(w) ? w : p;
          };
        }
        function sk(o, c, p) {
          var w = Fo(o);
          function P() {
            for (var M = arguments.length, R = K(M), D = M, z = wa(P); D--; )
              R[D] = arguments[D];
            var ee = M < 3 && R[0] !== z && R[M - 1] !== z ? [] : Qn(R, z);
            if (M -= ee.length, M < p)
              return _x(
                o,
                c,
                Us,
                P.placeholder,
                r,
                R,
                ee,
                r,
                r,
                p - M
              );
            var re = this && this !== Rt && this instanceof P ? w : o;
            return nr(re, this, R);
          }
          return P;
        }
        function mx(o) {
          return function(c, p, w) {
            var P = et(c);
            if (!Yt(c)) {
              var M = _e(p, 3);
              c = Tt(c), p = function(D) {
                return M(P[D], D, P);
              };
            }
            var R = o(c, p, w);
            return R > -1 ? P[M ? c[R] : R] : r;
          };
        }
        function bx(o) {
          return On(function(c) {
            var p = c.length, w = p, P = xr.prototype.thru;
            for (o && c.reverse(); w--; ) {
              var M = c[w];
              if (typeof M != "function")
                throw new br(u);
              if (P && !R && Vs(M) == "wrapper")
                var R = new xr([], !0);
            }
            for (w = R ? w : p; ++w < p; ) {
              M = c[w];
              var D = Vs(M), z = D == "wrapper" ? pd(M) : r;
              z && md(z[0]) && z[1] == (T | A | m | I) && !z[4].length && z[9] == 1 ? R = R[Vs(z[0])].apply(R, z[3]) : R = M.length == 1 && md(M) ? R[D]() : R.thru(M);
            }
            return function() {
              var ee = arguments, re = ee[0];
              if (R && ee.length == 1 && Me(re))
                return R.plant(re).value();
              for (var ie = 0, fe = p ? c[ie].apply(this, ee) : re; ++ie < p; )
                fe = c[ie].call(this, fe);
              return fe;
            };
          });
        }
        function Us(o, c, p, w, P, M, R, D, z, ee) {
          var re = c & T, ie = c & b, fe = c & S, me = c & (A | _), Oe = c & B, je = fe ? r : Fo(o);
          function Se() {
            for (var De = arguments.length, Be = K(De), ur = De; ur--; )
              Be[ur] = arguments[ur];
            if (me)
              var Wt = wa(Se), sr = xR(Be, Wt);
            if (w && (Be = hx(Be, w, P, me)), M && (Be = px(Be, M, R, me)), De -= sr, me && De < ee) {
              var yt = Qn(Be, Wt);
              return _x(
                o,
                c,
                Us,
                Se.placeholder,
                p,
                Be,
                yt,
                D,
                z,
                ee - De
              );
            }
            var zr = ie ? p : this, En = fe ? zr[o] : o;
            return De = Be.length, D ? Be = Tk(Be, D) : Oe && De > 1 && Be.reverse(), re && z < De && (Be.length = z), this && this !== Rt && this instanceof Se && (En = je || Fo(En)), En.apply(zr, Be);
          }
          return Se;
        }
        function xx(o, c) {
          return function(p, w) {
            return N$(p, o, c(w), {});
          };
        }
        function Hs(o, c) {
          return function(p, w) {
            var P;
            if (p === r && w === r)
              return c;
            if (p !== r && (P = p), w !== r) {
              if (P === r)
                return w;
              typeof p == "string" || typeof w == "string" ? (p = ar(p), w = ar(w)) : (p = ax(p), w = ax(w)), P = o(p, w);
            }
            return P;
          };
        }
        function ld(o) {
          return On(function(c) {
            return c = lt(c, ir(_e())), Ne(function(p) {
              var w = this;
              return o(c, function(P) {
                return nr(P, w, p);
              });
            });
          });
        }
        function Gs(o, c) {
          c = c === r ? " " : ar(c);
          var p = c.length;
          if (p < 2)
            return p ? nd(c, o) : c;
          var w = nd(c, Rs(o / ha(c)));
          return da(c) ? ii(Br(w), 0, o).join("") : w.slice(0, o);
        }
        function ck(o, c, p, w) {
          var P = c & b, M = Fo(o);
          function R() {
            for (var D = -1, z = arguments.length, ee = -1, re = w.length, ie = K(re + z), fe = this && this !== Rt && this instanceof R ? M : o; ++ee < re; )
              ie[ee] = w[ee];
            for (; z--; )
              ie[ee++] = arguments[++D];
            return nr(fe, P ? p : this, ie);
          }
          return R;
        }
        function wx(o) {
          return function(c, p, w) {
            return w && typeof w != "number" && Ft(c, p, w) && (p = w = r), c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), w = w === r ? c < p ? 1 : -1 : Pn(w), V$(c, p, w, o);
          };
        }
        function Ks(o) {
          return function(c, p) {
            return typeof c == "string" && typeof p == "string" || (c = Sr(c), p = Sr(p)), o(c, p);
          };
        }
        function _x(o, c, p, w, P, M, R, D, z, ee) {
          var re = c & A, ie = re ? R : r, fe = re ? r : R, me = re ? M : r, Oe = re ? r : M;
          c |= re ? m : E, c &= ~(re ? E : m), c & O || (c &= ~(b | S));
          var je = [
            o,
            c,
            P,
            me,
            ie,
            Oe,
            fe,
            D,
            z,
            ee
          ], Se = p.apply(r, je);
          return md(o) && kx(Se, je), Se.placeholder = w, jx(Se, o, c);
        }
        function fd(o) {
          var c = xt[o];
          return function(p, w) {
            if (p = Sr(p), w = w == null ? 0 : jt(Re(w), 292), w && j0(p)) {
              var P = (He(p) + "e").split("e"), M = c(P[0] + "e" + (+P[1] + w));
              return P = (He(M) + "e").split("e"), +(P[0] + "e" + (+P[1] - w));
            }
            return c(p);
          };
        }
        var lk = ga && 1 / _s(new ga([, -0]))[1] == J ? function(o) {
          return new ga(o);
        } : $d;
        function Ox(o) {
          return function(c) {
            var p = Nt(c);
            return p == we ? Ff(c) : p == vt ? ER(c) : bR(c, o(c));
          };
        }
        function _n(o, c, p, w, P, M, R, D) {
          var z = c & S;
          if (!z && typeof o != "function")
            throw new br(u);
          var ee = w ? w.length : 0;
          if (ee || (c &= ~(m | E), w = P = r), R = R === r ? R : wt(Re(R), 0), D = D === r ? D : Re(D), ee -= P ? P.length : 0, c & E) {
            var re = w, ie = P;
            w = P = r;
          }
          var fe = z ? r : pd(o), me = [
            o,
            c,
            p,
            w,
            P,
            re,
            ie,
            M,
            R,
            D
          ];
          if (fe && Ak(me, fe), o = me[0], c = me[1], p = me[2], w = me[3], P = me[4], D = me[9] = me[9] === r ? z ? 0 : o.length : wt(me[9] - ee, 0), !D && c & (A | _) && (c &= ~(A | _)), !c || c == b)
            var Oe = uk(o, c, p);
          else c == A || c == _ ? Oe = sk(o, c, D) : (c == m || c == (b | m)) && !P.length ? Oe = ck(o, c, p, w) : Oe = Us.apply(r, me);
          var je = fe ? nx : kx;
          return jx(je(Oe, me), o, c);
        }
        function Sx(o, c, p, w) {
          return o === r || Wr(o, va[p]) && !Ze.call(w, p) ? c : o;
        }
        function Ax(o, c, p, w, P, M) {
          return ht(o) && ht(c) && (M.set(c, o), Bs(o, c, r, Ax, M), M.delete(c)), o;
        }
        function fk(o) {
          return Uo(o) ? r : o;
        }
        function Px(o, c, p, w, P, M) {
          var R = p & x, D = o.length, z = c.length;
          if (D != z && !(R && z > D))
            return !1;
          var ee = M.get(o), re = M.get(c);
          if (ee && re)
            return ee == c && re == o;
          var ie = -1, fe = !0, me = p & y ? new Ci() : r;
          for (M.set(o, c), M.set(c, o); ++ie < D; ) {
            var Oe = o[ie], je = c[ie];
            if (w)
              var Se = R ? w(je, Oe, ie, c, o, M) : w(Oe, je, ie, o, c, M);
            if (Se !== r) {
              if (Se)
                continue;
              fe = !1;
              break;
            }
            if (me) {
              if (!jf(c, function(De, Be) {
                if (!Mo(me, Be) && (Oe === De || P(Oe, De, p, w, M)))
                  return me.push(Be);
              })) {
                fe = !1;
                break;
              }
            } else if (!(Oe === je || P(Oe, je, p, w, M))) {
              fe = !1;
              break;
            }
          }
          return M.delete(o), M.delete(c), fe;
        }
        function dk(o, c, p, w, P, M, R) {
          switch (p) {
            case ca:
              if (o.byteLength != c.byteLength || o.byteOffset != c.byteOffset)
                return !1;
              o = o.buffer, c = c.buffer;
            case Co:
              return !(o.byteLength != c.byteLength || !M(new Ts(o), new Ts(c)));
            case ge:
            case te:
            case Fe:
              return Wr(+o, +c);
            case ve:
              return o.name == c.name && o.message == c.message;
            case rr:
            case mn:
              return o == c + "";
            case we:
              var D = Ff;
            case vt:
              var z = w & x;
              if (D || (D = _s), o.size != c.size && !z)
                return !1;
              var ee = R.get(o);
              if (ee)
                return ee == c;
              w |= y, R.set(o, c);
              var re = Px(D(o), D(c), w, P, M, R);
              return R.delete(o), re;
            case Yn:
              if (jo)
                return jo.call(o) == jo.call(c);
          }
          return !1;
        }
        function hk(o, c, p, w, P, M) {
          var R = p & x, D = dd(o), z = D.length, ee = dd(c), re = ee.length;
          if (z != re && !R)
            return !1;
          for (var ie = z; ie--; ) {
            var fe = D[ie];
            if (!(R ? fe in c : Ze.call(c, fe)))
              return !1;
          }
          var me = M.get(o), Oe = M.get(c);
          if (me && Oe)
            return me == c && Oe == o;
          var je = !0;
          M.set(o, c), M.set(c, o);
          for (var Se = R; ++ie < z; ) {
            fe = D[ie];
            var De = o[fe], Be = c[fe];
            if (w)
              var ur = R ? w(Be, De, fe, c, o, M) : w(De, Be, fe, o, c, M);
            if (!(ur === r ? De === Be || P(De, Be, p, w, M) : ur)) {
              je = !1;
              break;
            }
            Se || (Se = fe == "constructor");
          }
          if (je && !Se) {
            var Wt = o.constructor, sr = c.constructor;
            Wt != sr && "constructor" in o && "constructor" in c && !(typeof Wt == "function" && Wt instanceof Wt && typeof sr == "function" && sr instanceof sr) && (je = !1);
          }
          return M.delete(o), M.delete(c), je;
        }
        function On(o) {
          return xd(Rx(o, r, Fx), o + "");
        }
        function dd(o) {
          return G0(o, Tt, gd);
        }
        function hd(o) {
          return G0(o, Xt, Ex);
        }
        var pd = ks ? function(o) {
          return ks.get(o);
        } : $d;
        function Vs(o) {
          for (var c = o.name + "", p = ya[c], w = Ze.call(ya, c) ? p.length : 0; w--; ) {
            var P = p[w], M = P.func;
            if (M == null || M == o)
              return P.name;
          }
          return c;
        }
        function wa(o) {
          var c = Ze.call(C, "placeholder") ? C : o;
          return c.placeholder;
        }
        function _e() {
          var o = C.iteratee || Id;
          return o = o === Id ? Y0 : o, arguments.length ? o(arguments[0], arguments[1]) : o;
        }
        function Ys(o, c) {
          var p = o.__data__;
          return wk(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
        }
        function vd(o) {
          for (var c = Tt(o), p = c.length; p--; ) {
            var w = c[p], P = o[w];
            c[p] = [w, P, Mx(P)];
          }
          return c;
        }
        function Ri(o, c) {
          var p = SR(o, c);
          return V0(p) ? p : r;
        }
        function pk(o) {
          var c = Ze.call(o, Ei), p = o[Ei];
          try {
            o[Ei] = r;
            var w = !0;
          } catch {
          }
          var P = Ps.call(o);
          return w && (c ? o[Ei] = p : delete o[Ei]), P;
        }
        var gd = zf ? function(o) {
          return o == null ? [] : (o = et(o), Zn(zf(o), function(c) {
            return $0.call(o, c);
          }));
        } : kd, Ex = zf ? function(o) {
          for (var c = []; o; )
            Jn(c, gd(o)), o = Cs(o);
          return c;
        } : kd, Nt = Bt;
        (Uf && Nt(new Uf(new ArrayBuffer(1))) != ca || Ro && Nt(new Ro()) != we || Hf && Nt(Hf.resolve()) != Kt || ga && Nt(new ga()) != vt || $o && Nt(new $o()) != Xn) && (Nt = function(o) {
          var c = Bt(o), p = c == at ? o.constructor : r, w = p ? $i(p) : "";
          if (w)
            switch (w) {
              case XR:
                return ca;
              case ZR:
                return we;
              case JR:
                return Kt;
              case QR:
                return vt;
              case e$:
                return Xn;
            }
          return c;
        });
        function vk(o, c, p) {
          for (var w = -1, P = p.length; ++w < P; ) {
            var M = p[w], R = M.size;
            switch (M.type) {
              case "drop":
                o += R;
                break;
              case "dropRight":
                c -= R;
                break;
              case "take":
                c = jt(c, o + R);
                break;
              case "takeRight":
                o = wt(o, c - R);
                break;
            }
          }
          return { start: o, end: c };
        }
        function gk(o) {
          var c = o.match(_I);
          return c ? c[1].split(OI) : [];
        }
        function Tx(o, c, p) {
          c = ni(c, o);
          for (var w = -1, P = c.length, M = !1; ++w < P; ) {
            var R = an(c[w]);
            if (!(M = o != null && p(o, R)))
              break;
            o = o[R];
          }
          return M || ++w != P ? M : (P = o == null ? 0 : o.length, !!P && rc(P) && Sn(R, P) && (Me(o) || ki(o)));
        }
        function yk(o) {
          var c = o.length, p = new o.constructor(c);
          return c && typeof o[0] == "string" && Ze.call(o, "index") && (p.index = o.index, p.input = o.input), p;
        }
        function Cx(o) {
          return typeof o.constructor == "function" && !Wo(o) ? ma(Cs(o)) : {};
        }
        function mk(o, c, p) {
          var w = o.constructor;
          switch (c) {
            case Co:
              return cd(o);
            case ge:
            case te:
              return new w(+o);
            case ca:
              return tk(o, p);
            case vf:
            case gf:
            case yf:
            case mf:
            case bf:
            case xf:
            case wf:
            case _f:
            case Of:
              return fx(o, p);
            case we:
              return new w();
            case Fe:
            case mn:
              return new w(o);
            case rr:
              return rk(o);
            case vt:
              return new w();
            case Yn:
              return nk(o);
          }
        }
        function bk(o, c) {
          var p = c.length;
          if (!p)
            return o;
          var w = p - 1;
          return c[w] = (p > 1 ? "& " : "") + c[w], c = c.join(p > 2 ? ", " : " "), o.replace(wI, `{
/* [wrapped with ` + c + `] */
`);
        }
        function xk(o) {
          return Me(o) || ki(o) || !!(k0 && o && o[k0]);
        }
        function Sn(o, c) {
          var p = typeof o;
          return c = c ?? G, !!c && (p == "number" || p != "symbol" && RI.test(o)) && o > -1 && o % 1 == 0 && o < c;
        }
        function Ft(o, c, p) {
          if (!ht(p))
            return !1;
          var w = typeof c;
          return (w == "number" ? Yt(p) && Sn(c, p.length) : w == "string" && c in p) ? Wr(p[c], o) : !1;
        }
        function yd(o, c) {
          if (Me(o))
            return !1;
          var p = typeof o;
          return p == "number" || p == "symbol" || p == "boolean" || o == null || or(o) ? !0 : yI.test(o) || !gI.test(o) || c != null && o in et(c);
        }
        function wk(o) {
          var c = typeof o;
          return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? o !== "__proto__" : o === null;
        }
        function md(o) {
          var c = Vs(o), p = C[c];
          if (typeof p != "function" || !(c in qe.prototype))
            return !1;
          if (o === p)
            return !0;
          var w = pd(p);
          return !!w && o === w[0];
        }
        function _k(o) {
          return !!M0 && M0 in o;
        }
        var Ok = Ss ? An : jd;
        function Wo(o) {
          var c = o && o.constructor, p = typeof c == "function" && c.prototype || va;
          return o === p;
        }
        function Mx(o) {
          return o === o && !ht(o);
        }
        function Ix(o, c) {
          return function(p) {
            return p == null ? !1 : p[o] === c && (c !== r || o in et(p));
          };
        }
        function Sk(o) {
          var c = ec(o, function(w) {
            return p.size === f && p.clear(), w;
          }), p = c.cache;
          return c;
        }
        function Ak(o, c) {
          var p = o[1], w = c[1], P = p | w, M = P < (b | S | T), R = w == T && p == A || w == T && p == I && o[7].length <= c[8] || w == (T | I) && c[7].length <= c[8] && p == A;
          if (!(M || R))
            return o;
          w & b && (o[2] = c[2], P |= p & b ? 0 : O);
          var D = c[3];
          if (D) {
            var z = o[3];
            o[3] = z ? hx(z, D, c[4]) : D, o[4] = z ? Qn(o[3], d) : c[4];
          }
          return D = c[5], D && (z = o[5], o[5] = z ? px(z, D, c[6]) : D, o[6] = z ? Qn(o[5], d) : c[6]), D = c[7], D && (o[7] = D), w & T && (o[8] = o[8] == null ? c[8] : jt(o[8], c[8])), o[9] == null && (o[9] = c[9]), o[0] = c[0], o[1] = P, o;
        }
        function Pk(o) {
          var c = [];
          if (o != null)
            for (var p in et(o))
              c.push(p);
          return c;
        }
        function Ek(o) {
          return Ps.call(o);
        }
        function Rx(o, c, p) {
          return c = wt(c === r ? o.length - 1 : c, 0), function() {
            for (var w = arguments, P = -1, M = wt(w.length - c, 0), R = K(M); ++P < M; )
              R[P] = w[c + P];
            P = -1;
            for (var D = K(c + 1); ++P < c; )
              D[P] = w[P];
            return D[c] = p(R), nr(o, this, D);
          };
        }
        function $x(o, c) {
          return c.length < 2 ? o : Ii(o, _r(c, 0, -1));
        }
        function Tk(o, c) {
          for (var p = o.length, w = jt(c.length, p), P = Vt(o); w--; ) {
            var M = c[w];
            o[w] = Sn(M, p) ? P[M] : r;
          }
          return o;
        }
        function bd(o, c) {
          if (!(c === "constructor" && typeof o[c] == "function") && c != "__proto__")
            return o[c];
        }
        var kx = Nx(nx), zo = zR || function(o, c) {
          return Rt.setTimeout(o, c);
        }, xd = Nx(Z$);
        function jx(o, c, p) {
          var w = c + "";
          return xd(o, bk(w, Ck(gk(w), p)));
        }
        function Nx(o) {
          var c = 0, p = 0;
          return function() {
            var w = KR(), P = q - (w - p);
            if (p = w, P > 0) {
              if (++c >= j)
                return arguments[0];
            } else
              c = 0;
            return o.apply(r, arguments);
          };
        }
        function Xs(o, c) {
          var p = -1, w = o.length, P = w - 1;
          for (c = c === r ? w : c; ++p < c; ) {
            var M = rd(p, P), R = o[M];
            o[M] = o[p], o[p] = R;
          }
          return o.length = c, o;
        }
        var Dx = Sk(function(o) {
          var c = [];
          return o.charCodeAt(0) === 46 && c.push(""), o.replace(mI, function(p, w, P, M) {
            c.push(P ? M.replace(PI, "$1") : w || p);
          }), c;
        });
        function an(o) {
          if (typeof o == "string" || or(o))
            return o;
          var c = o + "";
          return c == "0" && 1 / o == -J ? "-0" : c;
        }
        function $i(o) {
          if (o != null) {
            try {
              return As.call(o);
            } catch {
            }
            try {
              return o + "";
            } catch {
            }
          }
          return "";
        }
        function Ck(o, c) {
          return mr(he, function(p) {
            var w = "_." + p[0];
            c & p[1] && !xs(o, w) && o.push(w);
          }), o.sort();
        }
        function Lx(o) {
          if (o instanceof qe)
            return o.clone();
          var c = new xr(o.__wrapped__, o.__chain__);
          return c.__actions__ = Vt(o.__actions__), c.__index__ = o.__index__, c.__values__ = o.__values__, c;
        }
        function Mk(o, c, p) {
          (p ? Ft(o, c, p) : c === r) ? c = 1 : c = wt(Re(c), 0);
          var w = o == null ? 0 : o.length;
          if (!w || c < 1)
            return [];
          for (var P = 0, M = 0, R = K(Rs(w / c)); P < w; )
            R[M++] = _r(o, P, P += c);
          return R;
        }
        function Ik(o) {
          for (var c = -1, p = o == null ? 0 : o.length, w = 0, P = []; ++c < p; ) {
            var M = o[c];
            M && (P[w++] = M);
          }
          return P;
        }
        function Rk() {
          var o = arguments.length;
          if (!o)
            return [];
          for (var c = K(o - 1), p = arguments[0], w = o; w--; )
            c[w - 1] = arguments[w];
          return Jn(Me(p) ? Vt(p) : [p], $t(c, 1));
        }
        var $k = Ne(function(o, c) {
          return gt(o) ? Do(o, $t(c, 1, gt, !0)) : [];
        }), kk = Ne(function(o, c) {
          var p = Or(c);
          return gt(p) && (p = r), gt(o) ? Do(o, $t(c, 1, gt, !0), _e(p, 2)) : [];
        }), jk = Ne(function(o, c) {
          var p = Or(c);
          return gt(p) && (p = r), gt(o) ? Do(o, $t(c, 1, gt, !0), r, p) : [];
        });
        function Nk(o, c, p) {
          var w = o == null ? 0 : o.length;
          return w ? (c = p || c === r ? 1 : Re(c), _r(o, c < 0 ? 0 : c, w)) : [];
        }
        function Dk(o, c, p) {
          var w = o == null ? 0 : o.length;
          return w ? (c = p || c === r ? 1 : Re(c), c = w - c, _r(o, 0, c < 0 ? 0 : c)) : [];
        }
        function Lk(o, c) {
          return o && o.length ? Ws(o, _e(c, 3), !0, !0) : [];
        }
        function qk(o, c) {
          return o && o.length ? Ws(o, _e(c, 3), !0) : [];
        }
        function Bk(o, c, p, w) {
          var P = o == null ? 0 : o.length;
          return P ? (p && typeof p != "number" && Ft(o, c, p) && (p = 0, w = P), R$(o, c, p, w)) : [];
        }
        function qx(o, c, p) {
          var w = o == null ? 0 : o.length;
          if (!w)
            return -1;
          var P = p == null ? 0 : Re(p);
          return P < 0 && (P = wt(w + P, 0)), ws(o, _e(c, 3), P);
        }
        function Bx(o, c, p) {
          var w = o == null ? 0 : o.length;
          if (!w)
            return -1;
          var P = w - 1;
          return p !== r && (P = Re(p), P = p < 0 ? wt(w + P, 0) : jt(P, w - 1)), ws(o, _e(c, 3), P, !0);
        }
        function Fx(o) {
          var c = o == null ? 0 : o.length;
          return c ? $t(o, 1) : [];
        }
        function Fk(o) {
          var c = o == null ? 0 : o.length;
          return c ? $t(o, J) : [];
        }
        function Wk(o, c) {
          var p = o == null ? 0 : o.length;
          return p ? (c = c === r ? 1 : Re(c), $t(o, c)) : [];
        }
        function zk(o) {
          for (var c = -1, p = o == null ? 0 : o.length, w = {}; ++c < p; ) {
            var P = o[c];
            w[P[0]] = P[1];
          }
          return w;
        }
        function Wx(o) {
          return o && o.length ? o[0] : r;
        }
        function Uk(o, c, p) {
          var w = o == null ? 0 : o.length;
          if (!w)
            return -1;
          var P = p == null ? 0 : Re(p);
          return P < 0 && (P = wt(w + P, 0)), fa(o, c, P);
        }
        function Hk(o) {
          var c = o == null ? 0 : o.length;
          return c ? _r(o, 0, -1) : [];
        }
        var Gk = Ne(function(o) {
          var c = lt(o, ud);
          return c.length && c[0] === o[0] ? Zf(c) : [];
        }), Kk = Ne(function(o) {
          var c = Or(o), p = lt(o, ud);
          return c === Or(p) ? c = r : p.pop(), p.length && p[0] === o[0] ? Zf(p, _e(c, 2)) : [];
        }), Vk = Ne(function(o) {
          var c = Or(o), p = lt(o, ud);
          return c = typeof c == "function" ? c : r, c && p.pop(), p.length && p[0] === o[0] ? Zf(p, r, c) : [];
        });
        function Yk(o, c) {
          return o == null ? "" : HR.call(o, c);
        }
        function Or(o) {
          var c = o == null ? 0 : o.length;
          return c ? o[c - 1] : r;
        }
        function Xk(o, c, p) {
          var w = o == null ? 0 : o.length;
          if (!w)
            return -1;
          var P = w;
          return p !== r && (P = Re(p), P = P < 0 ? wt(w + P, 0) : jt(P, w - 1)), c === c ? CR(o, c, P) : ws(o, _0, P, !0);
        }
        function Zk(o, c) {
          return o && o.length ? Q0(o, Re(c)) : r;
        }
        var Jk = Ne(zx);
        function zx(o, c) {
          return o && o.length && c && c.length ? td(o, c) : o;
        }
        function Qk(o, c, p) {
          return o && o.length && c && c.length ? td(o, c, _e(p, 2)) : o;
        }
        function ej(o, c, p) {
          return o && o.length && c && c.length ? td(o, c, r, p) : o;
        }
        var tj = On(function(o, c) {
          var p = o == null ? 0 : o.length, w = Kf(o, c);
          return rx(o, lt(c, function(P) {
            return Sn(P, p) ? +P : P;
          }).sort(dx)), w;
        });
        function rj(o, c) {
          var p = [];
          if (!(o && o.length))
            return p;
          var w = -1, P = [], M = o.length;
          for (c = _e(c, 3); ++w < M; ) {
            var R = o[w];
            c(R, w, o) && (p.push(R), P.push(w));
          }
          return rx(o, P), p;
        }
        function wd(o) {
          return o == null ? o : YR.call(o);
        }
        function nj(o, c, p) {
          var w = o == null ? 0 : o.length;
          return w ? (p && typeof p != "number" && Ft(o, c, p) ? (c = 0, p = w) : (c = c == null ? 0 : Re(c), p = p === r ? w : Re(p)), _r(o, c, p)) : [];
        }
        function ij(o, c) {
          return Fs(o, c);
        }
        function aj(o, c, p) {
          return id(o, c, _e(p, 2));
        }
        function oj(o, c) {
          var p = o == null ? 0 : o.length;
          if (p) {
            var w = Fs(o, c);
            if (w < p && Wr(o[w], c))
              return w;
          }
          return -1;
        }
        function uj(o, c) {
          return Fs(o, c, !0);
        }
        function sj(o, c, p) {
          return id(o, c, _e(p, 2), !0);
        }
        function cj(o, c) {
          var p = o == null ? 0 : o.length;
          if (p) {
            var w = Fs(o, c, !0) - 1;
            if (Wr(o[w], c))
              return w;
          }
          return -1;
        }
        function lj(o) {
          return o && o.length ? ix(o) : [];
        }
        function fj(o, c) {
          return o && o.length ? ix(o, _e(c, 2)) : [];
        }
        function dj(o) {
          var c = o == null ? 0 : o.length;
          return c ? _r(o, 1, c) : [];
        }
        function hj(o, c, p) {
          return o && o.length ? (c = p || c === r ? 1 : Re(c), _r(o, 0, c < 0 ? 0 : c)) : [];
        }
        function pj(o, c, p) {
          var w = o == null ? 0 : o.length;
          return w ? (c = p || c === r ? 1 : Re(c), c = w - c, _r(o, c < 0 ? 0 : c, w)) : [];
        }
        function vj(o, c) {
          return o && o.length ? Ws(o, _e(c, 3), !1, !0) : [];
        }
        function gj(o, c) {
          return o && o.length ? Ws(o, _e(c, 3)) : [];
        }
        var yj = Ne(function(o) {
          return ri($t(o, 1, gt, !0));
        }), mj = Ne(function(o) {
          var c = Or(o);
          return gt(c) && (c = r), ri($t(o, 1, gt, !0), _e(c, 2));
        }), bj = Ne(function(o) {
          var c = Or(o);
          return c = typeof c == "function" ? c : r, ri($t(o, 1, gt, !0), r, c);
        });
        function xj(o) {
          return o && o.length ? ri(o) : [];
        }
        function wj(o, c) {
          return o && o.length ? ri(o, _e(c, 2)) : [];
        }
        function _j(o, c) {
          return c = typeof c == "function" ? c : r, o && o.length ? ri(o, r, c) : [];
        }
        function _d(o) {
          if (!(o && o.length))
            return [];
          var c = 0;
          return o = Zn(o, function(p) {
            if (gt(p))
              return c = wt(p.length, c), !0;
          }), qf(c, function(p) {
            return lt(o, Nf(p));
          });
        }
        function Ux(o, c) {
          if (!(o && o.length))
            return [];
          var p = _d(o);
          return c == null ? p : lt(p, function(w) {
            return nr(c, r, w);
          });
        }
        var Oj = Ne(function(o, c) {
          return gt(o) ? Do(o, c) : [];
        }), Sj = Ne(function(o) {
          return od(Zn(o, gt));
        }), Aj = Ne(function(o) {
          var c = Or(o);
          return gt(c) && (c = r), od(Zn(o, gt), _e(c, 2));
        }), Pj = Ne(function(o) {
          var c = Or(o);
          return c = typeof c == "function" ? c : r, od(Zn(o, gt), r, c);
        }), Ej = Ne(_d);
        function Tj(o, c) {
          return sx(o || [], c || [], No);
        }
        function Cj(o, c) {
          return sx(o || [], c || [], Bo);
        }
        var Mj = Ne(function(o) {
          var c = o.length, p = c > 1 ? o[c - 1] : r;
          return p = typeof p == "function" ? (o.pop(), p) : r, Ux(o, p);
        });
        function Hx(o) {
          var c = C(o);
          return c.__chain__ = !0, c;
        }
        function Ij(o, c) {
          return c(o), o;
        }
        function Zs(o, c) {
          return c(o);
        }
        var Rj = On(function(o) {
          var c = o.length, p = c ? o[0] : 0, w = this.__wrapped__, P = function(M) {
            return Kf(M, o);
          };
          return c > 1 || this.__actions__.length || !(w instanceof qe) || !Sn(p) ? this.thru(P) : (w = w.slice(p, +p + (c ? 1 : 0)), w.__actions__.push({
            func: Zs,
            args: [P],
            thisArg: r
          }), new xr(w, this.__chain__).thru(function(M) {
            return c && !M.length && M.push(r), M;
          }));
        });
        function $j() {
          return Hx(this);
        }
        function kj() {
          return new xr(this.value(), this.__chain__);
        }
        function jj() {
          this.__values__ === r && (this.__values__ = aw(this.value()));
          var o = this.__index__ >= this.__values__.length, c = o ? r : this.__values__[this.__index__++];
          return { done: o, value: c };
        }
        function Nj() {
          return this;
        }
        function Dj(o) {
          for (var c, p = this; p instanceof Ns; ) {
            var w = Lx(p);
            w.__index__ = 0, w.__values__ = r, c ? P.__wrapped__ = w : c = w;
            var P = w;
            p = p.__wrapped__;
          }
          return P.__wrapped__ = o, c;
        }
        function Lj() {
          var o = this.__wrapped__;
          if (o instanceof qe) {
            var c = o;
            return this.__actions__.length && (c = new qe(this)), c = c.reverse(), c.__actions__.push({
              func: Zs,
              args: [wd],
              thisArg: r
            }), new xr(c, this.__chain__);
          }
          return this.thru(wd);
        }
        function qj() {
          return ux(this.__wrapped__, this.__actions__);
        }
        var Bj = zs(function(o, c, p) {
          Ze.call(o, p) ? ++o[p] : wn(o, p, 1);
        });
        function Fj(o, c, p) {
          var w = Me(o) ? x0 : I$;
          return p && Ft(o, c, p) && (c = r), w(o, _e(c, 3));
        }
        function Wj(o, c) {
          var p = Me(o) ? Zn : U0;
          return p(o, _e(c, 3));
        }
        var zj = mx(qx), Uj = mx(Bx);
        function Hj(o, c) {
          return $t(Js(o, c), 1);
        }
        function Gj(o, c) {
          return $t(Js(o, c), J);
        }
        function Kj(o, c, p) {
          return p = p === r ? 1 : Re(p), $t(Js(o, c), p);
        }
        function Gx(o, c) {
          var p = Me(o) ? mr : ti;
          return p(o, _e(c, 3));
        }
        function Kx(o, c) {
          var p = Me(o) ? dR : z0;
          return p(o, _e(c, 3));
        }
        var Vj = zs(function(o, c, p) {
          Ze.call(o, p) ? o[p].push(c) : wn(o, p, [c]);
        });
        function Yj(o, c, p, w) {
          o = Yt(o) ? o : Oa(o), p = p && !w ? Re(p) : 0;
          var P = o.length;
          return p < 0 && (p = wt(P + p, 0)), nc(o) ? p <= P && o.indexOf(c, p) > -1 : !!P && fa(o, c, p) > -1;
        }
        var Xj = Ne(function(o, c, p) {
          var w = -1, P = typeof c == "function", M = Yt(o) ? K(o.length) : [];
          return ti(o, function(R) {
            M[++w] = P ? nr(c, R, p) : Lo(R, c, p);
          }), M;
        }), Zj = zs(function(o, c, p) {
          wn(o, p, c);
        });
        function Js(o, c) {
          var p = Me(o) ? lt : X0;
          return p(o, _e(c, 3));
        }
        function Jj(o, c, p, w) {
          return o == null ? [] : (Me(c) || (c = c == null ? [] : [c]), p = w ? r : p, Me(p) || (p = p == null ? [] : [p]), ex(o, c, p));
        }
        var Qj = zs(function(o, c, p) {
          o[p ? 0 : 1].push(c);
        }, function() {
          return [[], []];
        });
        function eN(o, c, p) {
          var w = Me(o) ? kf : S0, P = arguments.length < 3;
          return w(o, _e(c, 4), p, P, ti);
        }
        function tN(o, c, p) {
          var w = Me(o) ? hR : S0, P = arguments.length < 3;
          return w(o, _e(c, 4), p, P, z0);
        }
        function rN(o, c) {
          var p = Me(o) ? Zn : U0;
          return p(o, tc(_e(c, 3)));
        }
        function nN(o) {
          var c = Me(o) ? q0 : Y$;
          return c(o);
        }
        function iN(o, c, p) {
          (p ? Ft(o, c, p) : c === r) ? c = 1 : c = Re(c);
          var w = Me(o) ? P$ : X$;
          return w(o, c);
        }
        function aN(o) {
          var c = Me(o) ? E$ : J$;
          return c(o);
        }
        function oN(o) {
          if (o == null)
            return 0;
          if (Yt(o))
            return nc(o) ? ha(o) : o.length;
          var c = Nt(o);
          return c == we || c == vt ? o.size : Qf(o).length;
        }
        function uN(o, c, p) {
          var w = Me(o) ? jf : Q$;
          return p && Ft(o, c, p) && (c = r), w(o, _e(c, 3));
        }
        var sN = Ne(function(o, c) {
          if (o == null)
            return [];
          var p = c.length;
          return p > 1 && Ft(o, c[0], c[1]) ? c = [] : p > 2 && Ft(c[0], c[1], c[2]) && (c = [c[0]]), ex(o, $t(c, 1), []);
        }), Qs = WR || function() {
          return Rt.Date.now();
        };
        function cN(o, c) {
          if (typeof c != "function")
            throw new br(u);
          return o = Re(o), function() {
            if (--o < 1)
              return c.apply(this, arguments);
          };
        }
        function Vx(o, c, p) {
          return c = p ? r : c, c = o && c == null ? o.length : c, _n(o, T, r, r, r, r, c);
        }
        function Yx(o, c) {
          var p;
          if (typeof c != "function")
            throw new br(u);
          return o = Re(o), function() {
            return --o > 0 && (p = c.apply(this, arguments)), o <= 1 && (c = r), p;
          };
        }
        var Od = Ne(function(o, c, p) {
          var w = b;
          if (p.length) {
            var P = Qn(p, wa(Od));
            w |= m;
          }
          return _n(o, w, c, p, P);
        }), Xx = Ne(function(o, c, p) {
          var w = b | S;
          if (p.length) {
            var P = Qn(p, wa(Xx));
            w |= m;
          }
          return _n(c, w, o, p, P);
        });
        function Zx(o, c, p) {
          c = p ? r : c;
          var w = _n(o, A, r, r, r, r, r, c);
          return w.placeholder = Zx.placeholder, w;
        }
        function Jx(o, c, p) {
          c = p ? r : c;
          var w = _n(o, _, r, r, r, r, r, c);
          return w.placeholder = Jx.placeholder, w;
        }
        function Qx(o, c, p) {
          var w, P, M, R, D, z, ee = 0, re = !1, ie = !1, fe = !0;
          if (typeof o != "function")
            throw new br(u);
          c = Sr(c) || 0, ht(p) && (re = !!p.leading, ie = "maxWait" in p, M = ie ? wt(Sr(p.maxWait) || 0, c) : M, fe = "trailing" in p ? !!p.trailing : fe);
          function me(yt) {
            var zr = w, En = P;
            return w = P = r, ee = yt, R = o.apply(En, zr), R;
          }
          function Oe(yt) {
            return ee = yt, D = zo(De, c), re ? me(yt) : R;
          }
          function je(yt) {
            var zr = yt - z, En = yt - ee, mw = c - zr;
            return ie ? jt(mw, M - En) : mw;
          }
          function Se(yt) {
            var zr = yt - z, En = yt - ee;
            return z === r || zr >= c || zr < 0 || ie && En >= M;
          }
          function De() {
            var yt = Qs();
            if (Se(yt))
              return Be(yt);
            D = zo(De, je(yt));
          }
          function Be(yt) {
            return D = r, fe && w ? me(yt) : (w = P = r, R);
          }
          function ur() {
            D !== r && cx(D), ee = 0, w = z = P = D = r;
          }
          function Wt() {
            return D === r ? R : Be(Qs());
          }
          function sr() {
            var yt = Qs(), zr = Se(yt);
            if (w = arguments, P = this, z = yt, zr) {
              if (D === r)
                return Oe(z);
              if (ie)
                return cx(D), D = zo(De, c), me(z);
            }
            return D === r && (D = zo(De, c)), R;
          }
          return sr.cancel = ur, sr.flush = Wt, sr;
        }
        var lN = Ne(function(o, c) {
          return W0(o, 1, c);
        }), fN = Ne(function(o, c, p) {
          return W0(o, Sr(c) || 0, p);
        });
        function dN(o) {
          return _n(o, B);
        }
        function ec(o, c) {
          if (typeof o != "function" || c != null && typeof c != "function")
            throw new br(u);
          var p = function() {
            var w = arguments, P = c ? c.apply(this, w) : w[0], M = p.cache;
            if (M.has(P))
              return M.get(P);
            var R = o.apply(this, w);
            return p.cache = M.set(P, R) || M, R;
          };
          return p.cache = new (ec.Cache || xn)(), p;
        }
        ec.Cache = xn;
        function tc(o) {
          if (typeof o != "function")
            throw new br(u);
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return !o.call(this);
              case 1:
                return !o.call(this, c[0]);
              case 2:
                return !o.call(this, c[0], c[1]);
              case 3:
                return !o.call(this, c[0], c[1], c[2]);
            }
            return !o.apply(this, c);
          };
        }
        function hN(o) {
          return Yx(2, o);
        }
        var pN = ek(function(o, c) {
          c = c.length == 1 && Me(c[0]) ? lt(c[0], ir(_e())) : lt($t(c, 1), ir(_e()));
          var p = c.length;
          return Ne(function(w) {
            for (var P = -1, M = jt(w.length, p); ++P < M; )
              w[P] = c[P].call(this, w[P]);
            return nr(o, this, w);
          });
        }), Sd = Ne(function(o, c) {
          var p = Qn(c, wa(Sd));
          return _n(o, m, r, c, p);
        }), ew = Ne(function(o, c) {
          var p = Qn(c, wa(ew));
          return _n(o, E, r, c, p);
        }), vN = On(function(o, c) {
          return _n(o, I, r, r, r, c);
        });
        function gN(o, c) {
          if (typeof o != "function")
            throw new br(u);
          return c = c === r ? c : Re(c), Ne(o, c);
        }
        function yN(o, c) {
          if (typeof o != "function")
            throw new br(u);
          return c = c == null ? 0 : wt(Re(c), 0), Ne(function(p) {
            var w = p[c], P = ii(p, 0, c);
            return w && Jn(P, w), nr(o, this, P);
          });
        }
        function mN(o, c, p) {
          var w = !0, P = !0;
          if (typeof o != "function")
            throw new br(u);
          return ht(p) && (w = "leading" in p ? !!p.leading : w, P = "trailing" in p ? !!p.trailing : P), Qx(o, c, {
            leading: w,
            maxWait: c,
            trailing: P
          });
        }
        function bN(o) {
          return Vx(o, 1);
        }
        function xN(o, c) {
          return Sd(sd(c), o);
        }
        function wN() {
          if (!arguments.length)
            return [];
          var o = arguments[0];
          return Me(o) ? o : [o];
        }
        function _N(o) {
          return wr(o, g);
        }
        function ON(o, c) {
          return c = typeof c == "function" ? c : r, wr(o, g, c);
        }
        function SN(o) {
          return wr(o, h | g);
        }
        function AN(o, c) {
          return c = typeof c == "function" ? c : r, wr(o, h | g, c);
        }
        function PN(o, c) {
          return c == null || F0(o, c, Tt(c));
        }
        function Wr(o, c) {
          return o === c || o !== o && c !== c;
        }
        var EN = Ks(Xf), TN = Ks(function(o, c) {
          return o >= c;
        }), ki = K0(/* @__PURE__ */ function() {
          return arguments;
        }()) ? K0 : function(o) {
          return pt(o) && Ze.call(o, "callee") && !$0.call(o, "callee");
        }, Me = K.isArray, CN = p0 ? ir(p0) : D$;
        function Yt(o) {
          return o != null && rc(o.length) && !An(o);
        }
        function gt(o) {
          return pt(o) && Yt(o);
        }
        function MN(o) {
          return o === !0 || o === !1 || pt(o) && Bt(o) == ge;
        }
        var ai = UR || jd, IN = v0 ? ir(v0) : L$;
        function RN(o) {
          return pt(o) && o.nodeType === 1 && !Uo(o);
        }
        function $N(o) {
          if (o == null)
            return !0;
          if (Yt(o) && (Me(o) || typeof o == "string" || typeof o.splice == "function" || ai(o) || _a(o) || ki(o)))
            return !o.length;
          var c = Nt(o);
          if (c == we || c == vt)
            return !o.size;
          if (Wo(o))
            return !Qf(o).length;
          for (var p in o)
            if (Ze.call(o, p))
              return !1;
          return !0;
        }
        function kN(o, c) {
          return qo(o, c);
        }
        function jN(o, c, p) {
          p = typeof p == "function" ? p : r;
          var w = p ? p(o, c) : r;
          return w === r ? qo(o, c, r, p) : !!w;
        }
        function Ad(o) {
          if (!pt(o))
            return !1;
          var c = Bt(o);
          return c == ve || c == se || typeof o.message == "string" && typeof o.name == "string" && !Uo(o);
        }
        function NN(o) {
          return typeof o == "number" && j0(o);
        }
        function An(o) {
          if (!ht(o))
            return !1;
          var c = Bt(o);
          return c == k || c == Ee || c == le || c == qr;
        }
        function tw(o) {
          return typeof o == "number" && o == Re(o);
        }
        function rc(o) {
          return typeof o == "number" && o > -1 && o % 1 == 0 && o <= G;
        }
        function ht(o) {
          var c = typeof o;
          return o != null && (c == "object" || c == "function");
        }
        function pt(o) {
          return o != null && typeof o == "object";
        }
        var rw = g0 ? ir(g0) : B$;
        function DN(o, c) {
          return o === c || Jf(o, c, vd(c));
        }
        function LN(o, c, p) {
          return p = typeof p == "function" ? p : r, Jf(o, c, vd(c), p);
        }
        function qN(o) {
          return nw(o) && o != +o;
        }
        function BN(o) {
          if (Ok(o))
            throw new Ce(a);
          return V0(o);
        }
        function FN(o) {
          return o === null;
        }
        function WN(o) {
          return o == null;
        }
        function nw(o) {
          return typeof o == "number" || pt(o) && Bt(o) == Fe;
        }
        function Uo(o) {
          if (!pt(o) || Bt(o) != at)
            return !1;
          var c = Cs(o);
          if (c === null)
            return !0;
          var p = Ze.call(c, "constructor") && c.constructor;
          return typeof p == "function" && p instanceof p && As.call(p) == LR;
        }
        var Pd = y0 ? ir(y0) : F$;
        function zN(o) {
          return tw(o) && o >= -G && o <= G;
        }
        var iw = m0 ? ir(m0) : W$;
        function nc(o) {
          return typeof o == "string" || !Me(o) && pt(o) && Bt(o) == mn;
        }
        function or(o) {
          return typeof o == "symbol" || pt(o) && Bt(o) == Yn;
        }
        var _a = b0 ? ir(b0) : z$;
        function UN(o) {
          return o === r;
        }
        function HN(o) {
          return pt(o) && Nt(o) == Xn;
        }
        function GN(o) {
          return pt(o) && Bt(o) == gs;
        }
        var KN = Ks(ed), VN = Ks(function(o, c) {
          return o <= c;
        });
        function aw(o) {
          if (!o)
            return [];
          if (Yt(o))
            return nc(o) ? Br(o) : Vt(o);
          if (Io && o[Io])
            return PR(o[Io]());
          var c = Nt(o), p = c == we ? Ff : c == vt ? _s : Oa;
          return p(o);
        }
        function Pn(o) {
          if (!o)
            return o === 0 ? o : 0;
          if (o = Sr(o), o === J || o === -J) {
            var c = o < 0 ? -1 : 1;
            return c * ue;
          }
          return o === o ? o : 0;
        }
        function Re(o) {
          var c = Pn(o), p = c % 1;
          return c === c ? p ? c - p : c : 0;
        }
        function ow(o) {
          return o ? Mi(Re(o), 0, X) : 0;
        }
        function Sr(o) {
          if (typeof o == "number")
            return o;
          if (or(o))
            return H;
          if (ht(o)) {
            var c = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = ht(c) ? c + "" : c;
          }
          if (typeof o != "string")
            return o === 0 ? o : +o;
          o = A0(o);
          var p = CI.test(o);
          return p || II.test(o) ? cR(o.slice(2), p ? 2 : 8) : TI.test(o) ? H : +o;
        }
        function uw(o) {
          return nn(o, Xt(o));
        }
        function YN(o) {
          return o ? Mi(Re(o), -G, G) : o === 0 ? o : 0;
        }
        function He(o) {
          return o == null ? "" : ar(o);
        }
        var XN = ba(function(o, c) {
          if (Wo(c) || Yt(c)) {
            nn(c, Tt(c), o);
            return;
          }
          for (var p in c)
            Ze.call(c, p) && No(o, p, c[p]);
        }), sw = ba(function(o, c) {
          nn(c, Xt(c), o);
        }), ic = ba(function(o, c, p, w) {
          nn(c, Xt(c), o, w);
        }), ZN = ba(function(o, c, p, w) {
          nn(c, Tt(c), o, w);
        }), JN = On(Kf);
        function QN(o, c) {
          var p = ma(o);
          return c == null ? p : B0(p, c);
        }
        var eD = Ne(function(o, c) {
          o = et(o);
          var p = -1, w = c.length, P = w > 2 ? c[2] : r;
          for (P && Ft(c[0], c[1], P) && (w = 1); ++p < w; )
            for (var M = c[p], R = Xt(M), D = -1, z = R.length; ++D < z; ) {
              var ee = R[D], re = o[ee];
              (re === r || Wr(re, va[ee]) && !Ze.call(o, ee)) && (o[ee] = M[ee]);
            }
          return o;
        }), tD = Ne(function(o) {
          return o.push(r, Ax), nr(cw, r, o);
        });
        function rD(o, c) {
          return w0(o, _e(c, 3), rn);
        }
        function nD(o, c) {
          return w0(o, _e(c, 3), Yf);
        }
        function iD(o, c) {
          return o == null ? o : Vf(o, _e(c, 3), Xt);
        }
        function aD(o, c) {
          return o == null ? o : H0(o, _e(c, 3), Xt);
        }
        function oD(o, c) {
          return o && rn(o, _e(c, 3));
        }
        function uD(o, c) {
          return o && Yf(o, _e(c, 3));
        }
        function sD(o) {
          return o == null ? [] : qs(o, Tt(o));
        }
        function cD(o) {
          return o == null ? [] : qs(o, Xt(o));
        }
        function Ed(o, c, p) {
          var w = o == null ? r : Ii(o, c);
          return w === r ? p : w;
        }
        function lD(o, c) {
          return o != null && Tx(o, c, $$);
        }
        function Td(o, c) {
          return o != null && Tx(o, c, k$);
        }
        var fD = xx(function(o, c, p) {
          c != null && typeof c.toString != "function" && (c = Ps.call(c)), o[c] = p;
        }, Md(Zt)), dD = xx(function(o, c, p) {
          c != null && typeof c.toString != "function" && (c = Ps.call(c)), Ze.call(o, c) ? o[c].push(p) : o[c] = [p];
        }, _e), hD = Ne(Lo);
        function Tt(o) {
          return Yt(o) ? L0(o) : Qf(o);
        }
        function Xt(o) {
          return Yt(o) ? L0(o, !0) : U$(o);
        }
        function pD(o, c) {
          var p = {};
          return c = _e(c, 3), rn(o, function(w, P, M) {
            wn(p, c(w, P, M), w);
          }), p;
        }
        function vD(o, c) {
          var p = {};
          return c = _e(c, 3), rn(o, function(w, P, M) {
            wn(p, P, c(w, P, M));
          }), p;
        }
        var gD = ba(function(o, c, p) {
          Bs(o, c, p);
        }), cw = ba(function(o, c, p, w) {
          Bs(o, c, p, w);
        }), yD = On(function(o, c) {
          var p = {};
          if (o == null)
            return p;
          var w = !1;
          c = lt(c, function(M) {
            return M = ni(M, o), w || (w = M.length > 1), M;
          }), nn(o, hd(o), p), w && (p = wr(p, h | v | g, fk));
          for (var P = c.length; P--; )
            ad(p, c[P]);
          return p;
        });
        function mD(o, c) {
          return lw(o, tc(_e(c)));
        }
        var bD = On(function(o, c) {
          return o == null ? {} : G$(o, c);
        });
        function lw(o, c) {
          if (o == null)
            return {};
          var p = lt(hd(o), function(w) {
            return [w];
          });
          return c = _e(c), tx(o, p, function(w, P) {
            return c(w, P[0]);
          });
        }
        function xD(o, c, p) {
          c = ni(c, o);
          var w = -1, P = c.length;
          for (P || (P = 1, o = r); ++w < P; ) {
            var M = o == null ? r : o[an(c[w])];
            M === r && (w = P, M = p), o = An(M) ? M.call(o) : M;
          }
          return o;
        }
        function wD(o, c, p) {
          return o == null ? o : Bo(o, c, p);
        }
        function _D(o, c, p, w) {
          return w = typeof w == "function" ? w : r, o == null ? o : Bo(o, c, p, w);
        }
        var fw = Ox(Tt), dw = Ox(Xt);
        function OD(o, c, p) {
          var w = Me(o), P = w || ai(o) || _a(o);
          if (c = _e(c, 4), p == null) {
            var M = o && o.constructor;
            P ? p = w ? new M() : [] : ht(o) ? p = An(M) ? ma(Cs(o)) : {} : p = {};
          }
          return (P ? mr : rn)(o, function(R, D, z) {
            return c(p, R, D, z);
          }), p;
        }
        function SD(o, c) {
          return o == null ? !0 : ad(o, c);
        }
        function AD(o, c, p) {
          return o == null ? o : ox(o, c, sd(p));
        }
        function PD(o, c, p, w) {
          return w = typeof w == "function" ? w : r, o == null ? o : ox(o, c, sd(p), w);
        }
        function Oa(o) {
          return o == null ? [] : Bf(o, Tt(o));
        }
        function ED(o) {
          return o == null ? [] : Bf(o, Xt(o));
        }
        function TD(o, c, p) {
          return p === r && (p = c, c = r), p !== r && (p = Sr(p), p = p === p ? p : 0), c !== r && (c = Sr(c), c = c === c ? c : 0), Mi(Sr(o), c, p);
        }
        function CD(o, c, p) {
          return c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), o = Sr(o), j$(o, c, p);
        }
        function MD(o, c, p) {
          if (p && typeof p != "boolean" && Ft(o, c, p) && (c = p = r), p === r && (typeof c == "boolean" ? (p = c, c = r) : typeof o == "boolean" && (p = o, o = r)), o === r && c === r ? (o = 0, c = 1) : (o = Pn(o), c === r ? (c = o, o = 0) : c = Pn(c)), o > c) {
            var w = o;
            o = c, c = w;
          }
          if (p || o % 1 || c % 1) {
            var P = N0();
            return jt(o + P * (c - o + sR("1e-" + ((P + "").length - 1))), c);
          }
          return rd(o, c);
        }
        var ID = xa(function(o, c, p) {
          return c = c.toLowerCase(), o + (p ? hw(c) : c);
        });
        function hw(o) {
          return Cd(He(o).toLowerCase());
        }
        function pw(o) {
          return o = He(o), o && o.replace($I, wR).replace(JI, "");
        }
        function RD(o, c, p) {
          o = He(o), c = ar(c);
          var w = o.length;
          p = p === r ? w : Mi(Re(p), 0, w);
          var P = p;
          return p -= c.length, p >= 0 && o.slice(p, P) == c;
        }
        function $D(o) {
          return o = He(o), o && hI.test(o) ? o.replace(Hb, _R) : o;
        }
        function kD(o) {
          return o = He(o), o && bI.test(o) ? o.replace(Sf, "\\$&") : o;
        }
        var jD = xa(function(o, c, p) {
          return o + (p ? "-" : "") + c.toLowerCase();
        }), ND = xa(function(o, c, p) {
          return o + (p ? " " : "") + c.toLowerCase();
        }), DD = yx("toLowerCase");
        function LD(o, c, p) {
          o = He(o), c = Re(c);
          var w = c ? ha(o) : 0;
          if (!c || w >= c)
            return o;
          var P = (c - w) / 2;
          return Gs($s(P), p) + o + Gs(Rs(P), p);
        }
        function qD(o, c, p) {
          o = He(o), c = Re(c);
          var w = c ? ha(o) : 0;
          return c && w < c ? o + Gs(c - w, p) : o;
        }
        function BD(o, c, p) {
          o = He(o), c = Re(c);
          var w = c ? ha(o) : 0;
          return c && w < c ? Gs(c - w, p) + o : o;
        }
        function FD(o, c, p) {
          return p || c == null ? c = 0 : c && (c = +c), VR(He(o).replace(Af, ""), c || 0);
        }
        function WD(o, c, p) {
          return (p ? Ft(o, c, p) : c === r) ? c = 1 : c = Re(c), nd(He(o), c);
        }
        function zD() {
          var o = arguments, c = He(o[0]);
          return o.length < 3 ? c : c.replace(o[1], o[2]);
        }
        var UD = xa(function(o, c, p) {
          return o + (p ? "_" : "") + c.toLowerCase();
        });
        function HD(o, c, p) {
          return p && typeof p != "number" && Ft(o, c, p) && (c = p = r), p = p === r ? X : p >>> 0, p ? (o = He(o), o && (typeof c == "string" || c != null && !Pd(c)) && (c = ar(c), !c && da(o)) ? ii(Br(o), 0, p) : o.split(c, p)) : [];
        }
        var GD = xa(function(o, c, p) {
          return o + (p ? " " : "") + Cd(c);
        });
        function KD(o, c, p) {
          return o = He(o), p = p == null ? 0 : Mi(Re(p), 0, o.length), c = ar(c), o.slice(p, p + c.length) == c;
        }
        function VD(o, c, p) {
          var w = C.templateSettings;
          p && Ft(o, c, p) && (c = r), o = He(o), c = ic({}, c, w, Sx);
          var P = ic({}, c.imports, w.imports, Sx), M = Tt(P), R = Bf(P, M), D, z, ee = 0, re = c.interpolate || ys, ie = "__p += '", fe = Wf(
            (c.escape || ys).source + "|" + re.source + "|" + (re === Gb ? EI : ys).source + "|" + (c.evaluate || ys).source + "|$",
            "g"
          ), me = "//# sourceURL=" + (Ze.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++nR + "]") + `
`;
          o.replace(fe, function(Se, De, Be, ur, Wt, sr) {
            return Be || (Be = ur), ie += o.slice(ee, sr).replace(kI, OR), De && (D = !0, ie += `' +
__e(` + De + `) +
'`), Wt && (z = !0, ie += `';
` + Wt + `;
__p += '`), Be && (ie += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), ee = sr + Se.length, Se;
          }), ie += `';
`;
          var Oe = Ze.call(c, "variable") && c.variable;
          if (!Oe)
            ie = `with (obj) {
` + ie + `
}
`;
          else if (AI.test(Oe))
            throw new Ce(s);
          ie = (z ? ie.replace(cI, "") : ie).replace(lI, "$1").replace(fI, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
          var je = gw(function() {
            return Ue(M, me + "return " + ie).apply(r, R);
          });
          if (je.source = ie, Ad(je))
            throw je;
          return je;
        }
        function YD(o) {
          return He(o).toLowerCase();
        }
        function XD(o) {
          return He(o).toUpperCase();
        }
        function ZD(o, c, p) {
          if (o = He(o), o && (p || c === r))
            return A0(o);
          if (!o || !(c = ar(c)))
            return o;
          var w = Br(o), P = Br(c), M = P0(w, P), R = E0(w, P) + 1;
          return ii(w, M, R).join("");
        }
        function JD(o, c, p) {
          if (o = He(o), o && (p || c === r))
            return o.slice(0, C0(o) + 1);
          if (!o || !(c = ar(c)))
            return o;
          var w = Br(o), P = E0(w, Br(c)) + 1;
          return ii(w, 0, P).join("");
        }
        function QD(o, c, p) {
          if (o = He(o), o && (p || c === r))
            return o.replace(Af, "");
          if (!o || !(c = ar(c)))
            return o;
          var w = Br(o), P = P0(w, Br(c));
          return ii(w, P).join("");
        }
        function e3(o, c) {
          var p = L, w = N;
          if (ht(c)) {
            var P = "separator" in c ? c.separator : P;
            p = "length" in c ? Re(c.length) : p, w = "omission" in c ? ar(c.omission) : w;
          }
          o = He(o);
          var M = o.length;
          if (da(o)) {
            var R = Br(o);
            M = R.length;
          }
          if (p >= M)
            return o;
          var D = p - ha(w);
          if (D < 1)
            return w;
          var z = R ? ii(R, 0, D).join("") : o.slice(0, D);
          if (P === r)
            return z + w;
          if (R && (D += z.length - D), Pd(P)) {
            if (o.slice(D).search(P)) {
              var ee, re = z;
              for (P.global || (P = Wf(P.source, He(Kb.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(re); )
                var ie = ee.index;
              z = z.slice(0, ie === r ? D : ie);
            }
          } else if (o.indexOf(ar(P), D) != D) {
            var fe = z.lastIndexOf(P);
            fe > -1 && (z = z.slice(0, fe));
          }
          return z + w;
        }
        function t3(o) {
          return o = He(o), o && dI.test(o) ? o.replace(Ub, MR) : o;
        }
        var r3 = xa(function(o, c, p) {
          return o + (p ? " " : "") + c.toUpperCase();
        }), Cd = yx("toUpperCase");
        function vw(o, c, p) {
          return o = He(o), c = p ? r : c, c === r ? AR(o) ? $R(o) : gR(o) : o.match(c) || [];
        }
        var gw = Ne(function(o, c) {
          try {
            return nr(o, r, c);
          } catch (p) {
            return Ad(p) ? p : new Ce(p);
          }
        }), n3 = On(function(o, c) {
          return mr(c, function(p) {
            p = an(p), wn(o, p, Od(o[p], o));
          }), o;
        });
        function i3(o) {
          var c = o == null ? 0 : o.length, p = _e();
          return o = c ? lt(o, function(w) {
            if (typeof w[1] != "function")
              throw new br(u);
            return [p(w[0]), w[1]];
          }) : [], Ne(function(w) {
            for (var P = -1; ++P < c; ) {
              var M = o[P];
              if (nr(M[0], this, w))
                return nr(M[1], this, w);
            }
          });
        }
        function a3(o) {
          return M$(wr(o, h));
        }
        function Md(o) {
          return function() {
            return o;
          };
        }
        function o3(o, c) {
          return o == null || o !== o ? c : o;
        }
        var u3 = bx(), s3 = bx(!0);
        function Zt(o) {
          return o;
        }
        function Id(o) {
          return Y0(typeof o == "function" ? o : wr(o, h));
        }
        function c3(o) {
          return Z0(wr(o, h));
        }
        function l3(o, c) {
          return J0(o, wr(c, h));
        }
        var f3 = Ne(function(o, c) {
          return function(p) {
            return Lo(p, o, c);
          };
        }), d3 = Ne(function(o, c) {
          return function(p) {
            return Lo(o, p, c);
          };
        });
        function Rd(o, c, p) {
          var w = Tt(c), P = qs(c, w);
          p == null && !(ht(c) && (P.length || !w.length)) && (p = c, c = o, o = this, P = qs(c, Tt(c)));
          var M = !(ht(p) && "chain" in p) || !!p.chain, R = An(o);
          return mr(P, function(D) {
            var z = c[D];
            o[D] = z, R && (o.prototype[D] = function() {
              var ee = this.__chain__;
              if (M || ee) {
                var re = o(this.__wrapped__), ie = re.__actions__ = Vt(this.__actions__);
                return ie.push({ func: z, args: arguments, thisArg: o }), re.__chain__ = ee, re;
              }
              return z.apply(o, Jn([this.value()], arguments));
            });
          }), o;
        }
        function h3() {
          return Rt._ === this && (Rt._ = qR), this;
        }
        function $d() {
        }
        function p3(o) {
          return o = Re(o), Ne(function(c) {
            return Q0(c, o);
          });
        }
        var v3 = ld(lt), g3 = ld(x0), y3 = ld(jf);
        function yw(o) {
          return yd(o) ? Nf(an(o)) : K$(o);
        }
        function m3(o) {
          return function(c) {
            return o == null ? r : Ii(o, c);
          };
        }
        var b3 = wx(), x3 = wx(!0);
        function kd() {
          return [];
        }
        function jd() {
          return !1;
        }
        function w3() {
          return {};
        }
        function _3() {
          return "";
        }
        function O3() {
          return !0;
        }
        function S3(o, c) {
          if (o = Re(o), o < 1 || o > G)
            return [];
          var p = X, w = jt(o, X);
          c = _e(c), o -= X;
          for (var P = qf(w, c); ++p < o; )
            c(p);
          return P;
        }
        function A3(o) {
          return Me(o) ? lt(o, an) : or(o) ? [o] : Vt(Dx(He(o)));
        }
        function P3(o) {
          var c = ++DR;
          return He(o) + c;
        }
        var E3 = Hs(function(o, c) {
          return o + c;
        }, 0), T3 = fd("ceil"), C3 = Hs(function(o, c) {
          return o / c;
        }, 1), M3 = fd("floor");
        function I3(o) {
          return o && o.length ? Ls(o, Zt, Xf) : r;
        }
        function R3(o, c) {
          return o && o.length ? Ls(o, _e(c, 2), Xf) : r;
        }
        function $3(o) {
          return O0(o, Zt);
        }
        function k3(o, c) {
          return O0(o, _e(c, 2));
        }
        function j3(o) {
          return o && o.length ? Ls(o, Zt, ed) : r;
        }
        function N3(o, c) {
          return o && o.length ? Ls(o, _e(c, 2), ed) : r;
        }
        var D3 = Hs(function(o, c) {
          return o * c;
        }, 1), L3 = fd("round"), q3 = Hs(function(o, c) {
          return o - c;
        }, 0);
        function B3(o) {
          return o && o.length ? Lf(o, Zt) : 0;
        }
        function F3(o, c) {
          return o && o.length ? Lf(o, _e(c, 2)) : 0;
        }
        return C.after = cN, C.ary = Vx, C.assign = XN, C.assignIn = sw, C.assignInWith = ic, C.assignWith = ZN, C.at = JN, C.before = Yx, C.bind = Od, C.bindAll = n3, C.bindKey = Xx, C.castArray = wN, C.chain = Hx, C.chunk = Mk, C.compact = Ik, C.concat = Rk, C.cond = i3, C.conforms = a3, C.constant = Md, C.countBy = Bj, C.create = QN, C.curry = Zx, C.curryRight = Jx, C.debounce = Qx, C.defaults = eD, C.defaultsDeep = tD, C.defer = lN, C.delay = fN, C.difference = $k, C.differenceBy = kk, C.differenceWith = jk, C.drop = Nk, C.dropRight = Dk, C.dropRightWhile = Lk, C.dropWhile = qk, C.fill = Bk, C.filter = Wj, C.flatMap = Hj, C.flatMapDeep = Gj, C.flatMapDepth = Kj, C.flatten = Fx, C.flattenDeep = Fk, C.flattenDepth = Wk, C.flip = dN, C.flow = u3, C.flowRight = s3, C.fromPairs = zk, C.functions = sD, C.functionsIn = cD, C.groupBy = Vj, C.initial = Hk, C.intersection = Gk, C.intersectionBy = Kk, C.intersectionWith = Vk, C.invert = fD, C.invertBy = dD, C.invokeMap = Xj, C.iteratee = Id, C.keyBy = Zj, C.keys = Tt, C.keysIn = Xt, C.map = Js, C.mapKeys = pD, C.mapValues = vD, C.matches = c3, C.matchesProperty = l3, C.memoize = ec, C.merge = gD, C.mergeWith = cw, C.method = f3, C.methodOf = d3, C.mixin = Rd, C.negate = tc, C.nthArg = p3, C.omit = yD, C.omitBy = mD, C.once = hN, C.orderBy = Jj, C.over = v3, C.overArgs = pN, C.overEvery = g3, C.overSome = y3, C.partial = Sd, C.partialRight = ew, C.partition = Qj, C.pick = bD, C.pickBy = lw, C.property = yw, C.propertyOf = m3, C.pull = Jk, C.pullAll = zx, C.pullAllBy = Qk, C.pullAllWith = ej, C.pullAt = tj, C.range = b3, C.rangeRight = x3, C.rearg = vN, C.reject = rN, C.remove = rj, C.rest = gN, C.reverse = wd, C.sampleSize = iN, C.set = wD, C.setWith = _D, C.shuffle = aN, C.slice = nj, C.sortBy = sN, C.sortedUniq = lj, C.sortedUniqBy = fj, C.split = HD, C.spread = yN, C.tail = dj, C.take = hj, C.takeRight = pj, C.takeRightWhile = vj, C.takeWhile = gj, C.tap = Ij, C.throttle = mN, C.thru = Zs, C.toArray = aw, C.toPairs = fw, C.toPairsIn = dw, C.toPath = A3, C.toPlainObject = uw, C.transform = OD, C.unary = bN, C.union = yj, C.unionBy = mj, C.unionWith = bj, C.uniq = xj, C.uniqBy = wj, C.uniqWith = _j, C.unset = SD, C.unzip = _d, C.unzipWith = Ux, C.update = AD, C.updateWith = PD, C.values = Oa, C.valuesIn = ED, C.without = Oj, C.words = vw, C.wrap = xN, C.xor = Sj, C.xorBy = Aj, C.xorWith = Pj, C.zip = Ej, C.zipObject = Tj, C.zipObjectDeep = Cj, C.zipWith = Mj, C.entries = fw, C.entriesIn = dw, C.extend = sw, C.extendWith = ic, Rd(C, C), C.add = E3, C.attempt = gw, C.camelCase = ID, C.capitalize = hw, C.ceil = T3, C.clamp = TD, C.clone = _N, C.cloneDeep = SN, C.cloneDeepWith = AN, C.cloneWith = ON, C.conformsTo = PN, C.deburr = pw, C.defaultTo = o3, C.divide = C3, C.endsWith = RD, C.eq = Wr, C.escape = $D, C.escapeRegExp = kD, C.every = Fj, C.find = zj, C.findIndex = qx, C.findKey = rD, C.findLast = Uj, C.findLastIndex = Bx, C.findLastKey = nD, C.floor = M3, C.forEach = Gx, C.forEachRight = Kx, C.forIn = iD, C.forInRight = aD, C.forOwn = oD, C.forOwnRight = uD, C.get = Ed, C.gt = EN, C.gte = TN, C.has = lD, C.hasIn = Td, C.head = Wx, C.identity = Zt, C.includes = Yj, C.indexOf = Uk, C.inRange = CD, C.invoke = hD, C.isArguments = ki, C.isArray = Me, C.isArrayBuffer = CN, C.isArrayLike = Yt, C.isArrayLikeObject = gt, C.isBoolean = MN, C.isBuffer = ai, C.isDate = IN, C.isElement = RN, C.isEmpty = $N, C.isEqual = kN, C.isEqualWith = jN, C.isError = Ad, C.isFinite = NN, C.isFunction = An, C.isInteger = tw, C.isLength = rc, C.isMap = rw, C.isMatch = DN, C.isMatchWith = LN, C.isNaN = qN, C.isNative = BN, C.isNil = WN, C.isNull = FN, C.isNumber = nw, C.isObject = ht, C.isObjectLike = pt, C.isPlainObject = Uo, C.isRegExp = Pd, C.isSafeInteger = zN, C.isSet = iw, C.isString = nc, C.isSymbol = or, C.isTypedArray = _a, C.isUndefined = UN, C.isWeakMap = HN, C.isWeakSet = GN, C.join = Yk, C.kebabCase = jD, C.last = Or, C.lastIndexOf = Xk, C.lowerCase = ND, C.lowerFirst = DD, C.lt = KN, C.lte = VN, C.max = I3, C.maxBy = R3, C.mean = $3, C.meanBy = k3, C.min = j3, C.minBy = N3, C.stubArray = kd, C.stubFalse = jd, C.stubObject = w3, C.stubString = _3, C.stubTrue = O3, C.multiply = D3, C.nth = Zk, C.noConflict = h3, C.noop = $d, C.now = Qs, C.pad = LD, C.padEnd = qD, C.padStart = BD, C.parseInt = FD, C.random = MD, C.reduce = eN, C.reduceRight = tN, C.repeat = WD, C.replace = zD, C.result = xD, C.round = L3, C.runInContext = W, C.sample = nN, C.size = oN, C.snakeCase = UD, C.some = uN, C.sortedIndex = ij, C.sortedIndexBy = aj, C.sortedIndexOf = oj, C.sortedLastIndex = uj, C.sortedLastIndexBy = sj, C.sortedLastIndexOf = cj, C.startCase = GD, C.startsWith = KD, C.subtract = q3, C.sum = B3, C.sumBy = F3, C.template = VD, C.times = S3, C.toFinite = Pn, C.toInteger = Re, C.toLength = ow, C.toLower = YD, C.toNumber = Sr, C.toSafeInteger = YN, C.toString = He, C.toUpper = XD, C.trim = ZD, C.trimEnd = JD, C.trimStart = QD, C.truncate = e3, C.unescape = t3, C.uniqueId = P3, C.upperCase = r3, C.upperFirst = Cd, C.each = Gx, C.eachRight = Kx, C.first = Wx, Rd(C, function() {
          var o = {};
          return rn(C, function(c, p) {
            Ze.call(C.prototype, p) || (o[p] = c);
          }), o;
        }(), { chain: !1 }), C.VERSION = n, mr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
          C[o].placeholder = C;
        }), mr(["drop", "take"], function(o, c) {
          qe.prototype[o] = function(p) {
            p = p === r ? 1 : wt(Re(p), 0);
            var w = this.__filtered__ && !c ? new qe(this) : this.clone();
            return w.__filtered__ ? w.__takeCount__ = jt(p, w.__takeCount__) : w.__views__.push({
              size: jt(p, X),
              type: o + (w.__dir__ < 0 ? "Right" : "")
            }), w;
          }, qe.prototype[o + "Right"] = function(p) {
            return this.reverse()[o](p).reverse();
          };
        }), mr(["filter", "map", "takeWhile"], function(o, c) {
          var p = c + 1, w = p == F || p == U;
          qe.prototype[o] = function(P) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: _e(P, 3),
              type: p
            }), M.__filtered__ = M.__filtered__ || w, M;
          };
        }), mr(["head", "last"], function(o, c) {
          var p = "take" + (c ? "Right" : "");
          qe.prototype[o] = function() {
            return this[p](1).value()[0];
          };
        }), mr(["initial", "tail"], function(o, c) {
          var p = "drop" + (c ? "" : "Right");
          qe.prototype[o] = function() {
            return this.__filtered__ ? new qe(this) : this[p](1);
          };
        }), qe.prototype.compact = function() {
          return this.filter(Zt);
        }, qe.prototype.find = function(o) {
          return this.filter(o).head();
        }, qe.prototype.findLast = function(o) {
          return this.reverse().find(o);
        }, qe.prototype.invokeMap = Ne(function(o, c) {
          return typeof o == "function" ? new qe(this) : this.map(function(p) {
            return Lo(p, o, c);
          });
        }), qe.prototype.reject = function(o) {
          return this.filter(tc(_e(o)));
        }, qe.prototype.slice = function(o, c) {
          o = Re(o);
          var p = this;
          return p.__filtered__ && (o > 0 || c < 0) ? new qe(p) : (o < 0 ? p = p.takeRight(-o) : o && (p = p.drop(o)), c !== r && (c = Re(c), p = c < 0 ? p.dropRight(-c) : p.take(c - o)), p);
        }, qe.prototype.takeRightWhile = function(o) {
          return this.reverse().takeWhile(o).reverse();
        }, qe.prototype.toArray = function() {
          return this.take(X);
        }, rn(qe.prototype, function(o, c) {
          var p = /^(?:filter|find|map|reject)|While$/.test(c), w = /^(?:head|last)$/.test(c), P = C[w ? "take" + (c == "last" ? "Right" : "") : c], M = w || /^find/.test(c);
          P && (C.prototype[c] = function() {
            var R = this.__wrapped__, D = w ? [1] : arguments, z = R instanceof qe, ee = D[0], re = z || Me(R), ie = function(De) {
              var Be = P.apply(C, Jn([De], D));
              return w && fe ? Be[0] : Be;
            };
            re && p && typeof ee == "function" && ee.length != 1 && (z = re = !1);
            var fe = this.__chain__, me = !!this.__actions__.length, Oe = M && !fe, je = z && !me;
            if (!M && re) {
              R = je ? R : new qe(this);
              var Se = o.apply(R, D);
              return Se.__actions__.push({ func: Zs, args: [ie], thisArg: r }), new xr(Se, fe);
            }
            return Oe && je ? o.apply(this, D) : (Se = this.thru(ie), Oe ? w ? Se.value()[0] : Se.value() : Se);
          });
        }), mr(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
          var c = Os[o], p = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", w = /^(?:pop|shift)$/.test(o);
          C.prototype[o] = function() {
            var P = arguments;
            if (w && !this.__chain__) {
              var M = this.value();
              return c.apply(Me(M) ? M : [], P);
            }
            return this[p](function(R) {
              return c.apply(Me(R) ? R : [], P);
            });
          };
        }), rn(qe.prototype, function(o, c) {
          var p = C[c];
          if (p) {
            var w = p.name + "";
            Ze.call(ya, w) || (ya[w] = []), ya[w].push({ name: c, func: p });
          }
        }), ya[Us(r, S).name] = [{
          name: "wrapper",
          func: r
        }], qe.prototype.clone = t$, qe.prototype.reverse = r$, qe.prototype.value = n$, C.prototype.at = Rj, C.prototype.chain = $j, C.prototype.commit = kj, C.prototype.next = jj, C.prototype.plant = Dj, C.prototype.reverse = Lj, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = qj, C.prototype.first = C.prototype.head, Io && (C.prototype[Io] = Nj), C;
      }, pa = kR();
      Pi ? ((Pi.exports = pa)._ = pa, If._ = pa) : Rt._ = pa;
    }).call(LZ);
  }(uu, uu.exports)), uu.exports;
}
var BZ = qZ();
function FZ(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const WZ = (e) => {
  const t = BZ.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, u]) => {
        n < u && (n = u, r = a);
      }
    );
  }), r;
}, zZ = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, u) => {
  const s = Object.keys(e), l = FZ(t), f = Math.max(
    ...l.map((v) => of(`${v.x}`))
  ), d = {
    ...Ib(r),
    type: "number",
    dataKey: WZ(l)
  }, h = {
    ...Rb(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ Y(_o, { config: e, ref: u, aspect: a, children: /* @__PURE__ */ Xe(
    OM,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ Y(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Oo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(
          ds,
          {
            ...uf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ Y(Kn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ Y(
          Vn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        s.map((v, g) => /* @__PURE__ */ Y($a, { children: /* @__PURE__ */ Y(
          Si,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || Nn(g),
            radius: 4,
            maxBarSize: 24,
            children: i && /* @__PURE__ */ Y(
              Rr,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-{${v}}`
            )
          },
          `bar-${v}`
        ) }))
      ]
    }
  ) });
}, _J = So(zZ), OJ = K3(
  {
    name: "Icon",
    type: "info"
  },
  Om
);
var Ug, WE;
function UZ() {
  if (WE) return Ug;
  WE = 1;
  var e = "Expected a function", t = NaN, r = "[object Symbol]", n = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, u = /^0o[0-7]+$/i, s = parseInt, l = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, f = typeof self == "object" && self && self.Object === Object && self, d = l || f || Function("return this")(), h = Object.prototype, v = h.toString, g = Math.max, x = Math.min, y = function() {
    return d.Date.now();
  };
  function b(m, E, T) {
    var I, B, L, N, j, q, F = 0, V = !1, U = !1, J = !0;
    if (typeof m != "function")
      throw new TypeError(e);
    E = _(E) || 0, S(T) && (V = !!T.leading, U = "maxWait" in T, L = U ? g(_(T.maxWait) || 0, E) : L, J = "trailing" in T ? !!T.trailing : J);
    function G(le) {
      var ge = I, te = B;
      return I = B = void 0, F = le, N = m.apply(te, ge), N;
    }
    function ue(le) {
      return F = le, j = setTimeout(ae, E), V ? G(le) : N;
    }
    function H(le) {
      var ge = le - q, te = le - F, se = E - ge;
      return U ? x(se, L - te) : se;
    }
    function X(le) {
      var ge = le - q, te = le - F;
      return q === void 0 || ge >= E || ge < 0 || U && te >= L;
    }
    function ae() {
      var le = y();
      if (X(le))
        return ce(le);
      j = setTimeout(ae, H(le));
    }
    function ce(le) {
      return j = void 0, J && I ? G(le) : (I = B = void 0, N);
    }
    function he() {
      j !== void 0 && clearTimeout(j), F = 0, I = q = B = j = void 0;
    }
    function ye() {
      return j === void 0 ? N : ce(y());
    }
    function be() {
      var le = y(), ge = X(le);
      if (I = arguments, B = this, q = le, ge) {
        if (j === void 0)
          return ue(q);
        if (U)
          return j = setTimeout(ae, E), G(q);
      }
      return j === void 0 && (j = setTimeout(ae, E)), N;
    }
    return be.cancel = he, be.flush = ye, be;
  }
  function S(m) {
    var E = typeof m;
    return !!m && (E == "object" || E == "function");
  }
  function O(m) {
    return !!m && typeof m == "object";
  }
  function A(m) {
    return typeof m == "symbol" || O(m) && v.call(m) == r;
  }
  function _(m) {
    if (typeof m == "number")
      return m;
    if (A(m))
      return t;
    if (S(m)) {
      var E = typeof m.valueOf == "function" ? m.valueOf() : m;
      m = S(E) ? E + "" : E;
    }
    if (typeof m != "string")
      return m === 0 ? m : +m;
    m = m.replace(n, "");
    var T = a.test(m);
    return T || u.test(m) ? s(m.slice(2), T ? 2 : 8) : i.test(m) ? t : +m;
  }
  return Ug = b, Ug;
}
var HZ = UZ();
const zE = /* @__PURE__ */ Je(HZ);
var zb = typeof window < "u" ? bm : kr;
function GZ(e, t, r, n) {
  const i = Zr(t);
  zb(() => {
    i.current = t;
  }, [t]), kr(() => {
    const a = window;
    if (!(a && a.addEventListener))
      return;
    const u = (s) => {
      i.current(s);
    };
    return a.addEventListener(e, u, n), () => {
      a.removeEventListener(e, u, n);
    };
  }, [e, r, n]);
}
var KZ = typeof window > "u";
function VZ(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (s) => KZ ? t : window.matchMedia(s).matches, [i, a] = $r(() => r ? n(e) : t);
  function u() {
    a(n(e));
  }
  return zb(() => {
    const s = window.matchMedia(e);
    return u(), s.addListener ? s.addListener(u) : s.addEventListener("change", u), () => {
      s.removeListener ? s.removeListener(u) : s.removeEventListener("change", u);
    };
  }, [e]), i;
}
function YZ(e) {
  const t = Zr(e);
  t.current = e, kr(
    () => () => {
      t.current();
    },
    []
  );
}
function XZ(e, t = 500, r) {
  const n = Zr();
  YZ(() => {
    n.current && n.current.cancel();
  });
  const i = lo(() => {
    const a = zE(e, t, r), u = (...s) => a(...s);
    return u.cancel = () => {
      a.cancel();
    }, u.isPending = () => !!n.current, u.flush = () => a.flush(), u;
  }, [e, t, r]);
  return kr(() => {
    n.current = zE(e, t, r);
  }, [e, t, r]), i;
}
function SJ({
  threshold: e = 0,
  root: t = null,
  rootMargin: r = "0%",
  freezeOnceVisible: n = !1,
  initialIsIntersecting: i = !1,
  onChange: a
} = {}) {
  var u;
  const [s, l] = $r(null), [f, d] = $r(() => ({
    isIntersecting: i,
    entry: void 0
  })), h = Zr();
  h.current = a;
  const v = ((u = f.entry) == null ? void 0 : u.isIntersecting) && n;
  kr(() => {
    if (!s || !("IntersectionObserver" in window) || v)
      return;
    let y;
    const b = new IntersectionObserver(
      (S) => {
        const O = Array.isArray(b.thresholds) ? b.thresholds : [b.thresholds];
        S.forEach((A) => {
          const _ = A.isIntersecting && O.some((m) => A.intersectionRatio >= m);
          d({ isIntersecting: _, entry: A }), h.current && h.current(_, A), _ && n && y && (y(), y = void 0);
        });
      },
      { threshold: e, root: t, rootMargin: r }
    );
    return b.observe(s), () => {
      b.disconnect();
    };
  }, [
    s,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(e),
    t,
    r,
    v,
    n
  ]);
  const g = Zr(null);
  kr(() => {
    var y;
    !s && ((y = f.entry) != null && y.target) && !n && !v && g.current !== f.entry.target && (g.current = f.entry.target, d({ isIntersecting: i, entry: void 0 }));
  }, [s, f.entry, n, v, i]);
  const x = [
    l,
    !!f.isIntersecting,
    f.entry
  ];
  return x.ref = x[0], x.isIntersecting = x[1], x.entry = x[2], x;
}
var ZZ = typeof window > "u";
function AJ(e = {}) {
  let { initializeWithValue: t = !0 } = e;
  ZZ && (t = !1);
  const [r, n] = $r(() => t ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {
    width: void 0,
    height: void 0
  }), i = XZ(
    n,
    e.debounceDelay
  );
  function a() {
    (e.debounceDelay ? i : n)({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  return GZ("resize", a), zb(() => {
    a();
  }, []), r;
}
const PJ = () => VZ(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
);
var Li = {}, Sc = {}, UE;
function JZ() {
  return UE || (UE = 1, Object.defineProperty(Sc, "__esModule", {
    value: !0
  }), Sc.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g), Sc;
}
var HE;
function QZ() {
  if (HE) return Li;
  HE = 1, Object.defineProperty(Li, "__esModule", {
    value: !0
  }), Li.TypeName = void 0, Li.parse = i, Li.toCodePoints = l;
  var e = JZ(), t = r(e);
  function r(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var n = Li.TypeName = "emoji";
  function i(f, d) {
    var h = d && d.assetType ? d.assetType : "svg", v = d && d.buildUrl ? d.buildUrl : function(S, O) {
      return O === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + S + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + S + ".svg";
    }, g = [];
    for (t.default.lastIndex = 0; ; ) {
      var x = t.default.exec(f);
      if (!x)
        break;
      var y = x[0], b = l(s(y)).join("-");
      g.push({
        url: b ? v(b, h) : "",
        indices: [x.index, t.default.lastIndex],
        text: y,
        type: n
      });
    }
    return g;
  }
  var a = /\uFE0F/g, u = "‍", s = function(d) {
    return d.indexOf(u) < 0 ? d.replace(a, "") : d;
  };
  function l(f) {
    for (var d = [], h = 0, v = 0, g = 0; g < f.length; )
      h = f.charCodeAt(g++), v ? (d.push((65536 + (v - 55296 << 10) + (h - 56320)).toString(16)), v = 0) : h > 55296 && h <= 56319 ? v = h : d.push(h.toString(16));
    return d;
  }
  return Li;
}
var eJ = QZ();
const tJ = Wn("", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});
function EJ({ emoji: e, size: t }) {
  const r = rJ(e);
  return r ? /* @__PURE__ */ Y(
    "img",
    {
      src: r.url,
      alt: e,
      className: tJ({ size: t }),
      draggable: !1
    }
  ) : /* @__PURE__ */ Y("span", { children: e });
}
const rJ = (e) => {
  const [t] = eJ.parse(e, {
    buildUrl: (r) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${r}.svg`
  });
  return t || null;
};
function TJ(e) {
  return `${e} emoji`;
}
const GE = Nr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function nJ(e) {
  const t = Zr(null);
  return t.current === null && (t.current = e()), t.current;
}
const iJ = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Pl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || iJ.has(e);
}
let oI = (e) => !Pl(e);
function uI(e) {
  e && (oI = (t) => t.startsWith("on") ? !Pl(t) : e(t));
}
try {
  uI(require("@emotion/is-prop-valid").default);
} catch {
}
function CJ(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (oI(i) || r === !0 && Pl(i) || !t && !Pl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function MJ({ children: e, isValidProp: t, ...r }) {
  t && uI(t), r = { ...er(GE), ...r }, r.isStatic = nJ(() => r.isStatic);
  const n = lo(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return Y(GE.Provider, { value: n, children: e });
}
const sI = Nr(void 0), IJ = ({ children: e, ...t }) => /* @__PURE__ */ Y(sI.Provider, { value: t, children: e }), aJ = () => ({
  ...er(sI)
}), RJ = dn(
  function(t, r) {
    const { src: n } = aJ();
    if (!n) return /* @__PURE__ */ Y("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ Y("img", { ref: r, ...t, ...i });
  }
);
export {
  Ao as $,
  vJ as A,
  gJ as B,
  K3 as C,
  cs as D,
  EJ as E,
  Rr as F,
  Xr as G,
  mt as H,
  IJ as I,
  b5 as J,
  Te as K,
  dJ as L,
  MJ as M,
  nf as N,
  Jl as O,
  sa as P,
  Xl as Q,
  K4 as R,
  uo as S,
  GE as T,
  nJ as U,
  _J as V,
  CJ as W,
  cJ as X,
  na as Y,
  YM as Z,
  Mn as _,
  Lt as a,
  _o as a0,
  ps as a1,
  Oo as a2,
  Mb as a3,
  af as a4,
  j8 as a5,
  P8 as a6,
  Om as a7,
  Wn as a8,
  RJ as a9,
  Km as aA,
  Sm as aa,
  BM as ab,
  iZ as ac,
  TM as ad,
  aZ as ae,
  XY as af,
  oZ as ag,
  XM as ah,
  lZ as ai,
  nZ as aj,
  C8 as ak,
  sT as al,
  RZ as am,
  $Z as an,
  kZ as ao,
  aI as ap,
  BY as aq,
  oT as ar,
  qY as as,
  aT as at,
  VZ as au,
  SJ as av,
  hZ as aw,
  AJ as ax,
  AY as ay,
  Gn as az,
  Nn as b,
  PM as c,
  bJ as d,
  xJ as e,
  So as f,
  wJ as g,
  fJ as h,
  pJ as i,
  hJ as j,
  OJ as k,
  L8 as l,
  lJ as m,
  PJ as n,
  TJ as o,
  xe as p,
  it as q,
  Ie as r,
  Je as s,
  Pe as t,
  zb as u,
  Le as v,
  L9 as w,
  Jr as x,
  St as y,
  Qi as z
};
