import { jsxs as Ze, jsx as X, Fragment as $a } from "react/jsx-runtime";
import * as Y from "react";
import $, { createContext as Nr, useContext as er, useState as $r, useCallback as Ki, useEffect as kr, useRef as Zr, useImperativeHandle as GE, forwardRef as Nn, useMemo as lo, isValidElement as Vr, Children as Vi, PureComponent as Dr, cloneElement as Ot, createElement as KE, Component as VE, useLayoutEffect as bm } from "react";
import * as xm from "react-dom";
import { createPortal as F3 } from "react-dom";
function YE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = YE(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function W3() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = YE(e)) && (n && (n += " "), n += t);
  return n;
}
const mw = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, bw = W3, bi = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return bw(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, o = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = mw(d) || mw(h);
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
  return bw(e, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, wm = Nr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), oJ = ({
  children: e
}) => {
  const [t, r] = $r(!1), [n, i] = $r([]), a = Ki(
    (s) => {
      i(
        s || [...xw].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), o = Ki(() => r(!1), [r]);
  return kr(() => {
    window.XRay = {
      enable: a,
      disable: o
    };
  }, [a, o]), /* @__PURE__ */ Ze(wm.Provider, { value: { enabled: t, enable: a, disable: o, filter: n }, children: [
    e,
    t && typeof document < "u" && F3(
      /* @__PURE__ */ Ze("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ X("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ X("div", { className: "flex flex-col space-y-2", children: xw.map((s) => /* @__PURE__ */ Ze("label", { className: "block", children: [
          /* @__PURE__ */ X(
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
}, z3 = bi(
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
), U3 = bi(
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
), H3 = (e, t) => {
  const { enabled: r, filter: n } = Y.useContext(wm), i = Zr(null);
  GE(t, () => i.current);
  const a = r && !e.internal, o = typeof document < "u" ? document.body : null;
  return kr(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const s = i.current;
    s.dataset.componentName = e.name;
    let l = null, f = null;
    if (o) {
      const d = s.getBoundingClientRect(), { top: h, left: v, width: g, height: x } = d;
      l = document.createElement("div"), l.className = z3({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${x}px`, f = document.createElement("div"), f.className = U3({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, o.appendChild(f), o.appendChild(l);
    }
    return () => {
      l && (o == null || o.removeChild(l)), f && (o == null || o.removeChild(f));
    };
  }, [a, e.name, e.type, n, o]), {
    ref: i,
    enabled: r
  };
}, uJ = () => er(wm), xw = ["layout", "info", "action", "form"], G3 = (e, t) => {
  const r = Nn((n, i) => {
    const { ref: a } = H3(e, i);
    return /* @__PURE__ */ X(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function XE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = XE(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ie() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = XE(e)) && (n && (n += " "), n += t);
  return n;
}
const _m = "-", K3 = (e) => {
  const t = Y3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (o) => {
      const s = o.split(_m);
      return s[0] === "" && s.length !== 1 && s.shift(), ZE(s, t) || V3(o);
    },
    getConflictingClassGroupIds: (o, s) => {
      const l = r[o] || [];
      return s && n[o] ? [...l, ...n[o]] : l;
    }
  };
}, ZE = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? ZE(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(_m);
  return (o = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : o.classGroupId;
}, ww = /^\[(.+)\]$/, V3 = (e) => {
  if (ww.test(e)) {
    const t = ww.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Y3 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Z3(Object.entries(e.classGroups), r).forEach(([a, o]) => {
    Hg(o, n, a, t);
  }), n;
}, Hg = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : _w(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (X3(i)) {
        Hg(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, o]) => {
      Hg(o, _w(t, a), r, n);
    });
  });
}, _w = (e, t) => {
  let r = e;
  return t.split(_m).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, X3 = (e) => e.isThemeGetter, Z3 = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([o, s]) => [t + o, s])) : a);
  return [r, i];
}) : e, J3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, o) => {
    r.set(a, o), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let o = r.get(a);
      if (o !== void 0)
        return o;
      if ((o = n.get(a)) !== void 0)
        return i(a, o), o;
    },
    set(a, o) {
      r.has(a) ? r.set(a, o) : i(a, o);
    }
  };
}, JE = "!", Q3 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, o = (s) => {
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
    const v = l.length === 0 ? s : s.substring(d), g = v.startsWith(JE), x = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: o
  }) : o;
}, e8 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, t8 = (e) => ({
  cache: J3(e.cacheSize),
  parseClassName: Q3(e),
  ...K3(e)
}), r8 = /\s+/, n8 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], o = e.trim().split(r8);
  let s = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const f = o[l], {
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
    const b = e8(d).join(":"), S = h ? b + JE : b, O = S + y;
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
function i8() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = QE(t)) && (n && (n += " "), n += r);
  return n;
}
const QE = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = QE(e[n])) && (r && (r += " "), r += t);
  return r;
};
function a8(e, ...t) {
  let r, n, i, a = o;
  function o(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = t8(f), n = r.cache.get, i = r.cache.set, a = s, s(l);
  }
  function s(l) {
    const f = n(l);
    if (f)
      return f;
    const d = n8(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(i8.apply(null, arguments));
  };
}
const ut = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, eT = /^\[(?:([a-z-]+):)?(.+)\]$/i, o8 = /^\d+\/\d+$/, u8 = /* @__PURE__ */ new Set(["px", "full", "screen"]), s8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, c8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, l8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, f8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, d8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, En = (e) => ka(e) || u8.has(e) || o8.test(e), ai = (e) => fo(e, "length", x8), ka = (e) => !!e && !Number.isNaN(Number(e)), Nd = (e) => fo(e, "number", ka), Ho = (e) => !!e && Number.isInteger(Number(e)), h8 = (e) => e.endsWith("%") && ka(e.slice(0, -1)), $e = (e) => eT.test(e), oi = (e) => s8.test(e), p8 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), v8 = (e) => fo(e, p8, tT), g8 = (e) => fo(e, "position", tT), y8 = /* @__PURE__ */ new Set(["image", "url"]), m8 = (e) => fo(e, y8, _8), b8 = (e) => fo(e, "", w8), Go = () => !0, fo = (e, t, r) => {
  const n = eT.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, x8 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  c8.test(e) && !l8.test(e)
), tT = () => !1, w8 = (e) => f8.test(e), _8 = (e) => d8.test(e), O8 = () => {
  const e = ut("colors"), t = ut("spacing"), r = ut("blur"), n = ut("brightness"), i = ut("borderColor"), a = ut("borderRadius"), o = ut("borderSpacing"), s = ut("borderWidth"), l = ut("contrast"), f = ut("grayscale"), d = ut("hueRotate"), h = ut("invert"), v = ut("gap"), g = ut("gradientColorStops"), x = ut("gradientColorStopPositions"), y = ut("inset"), b = ut("margin"), S = ut("opacity"), O = ut("padding"), A = ut("saturate"), _ = ut("scale"), m = ut("sepia"), E = ut("skew"), T = ut("space"), I = ut("translate"), B = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", $e, t], j = () => [$e, t], q = () => ["", En, ai], F = () => ["auto", ka, $e], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", $e], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => [ka, $e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Go],
      spacing: [En, ai],
      blur: ["none", "", oi, $e],
      brightness: Z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", oi, $e],
      borderSpacing: j(),
      borderWidth: q(),
      contrast: Z(),
      grayscale: ue(),
      hueRotate: Z(),
      invert: ue(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [h8, ai],
      inset: N(),
      margin: N(),
      opacity: Z(),
      padding: j(),
      saturate: Z(),
      scale: Z(),
      sepia: ue(),
      skew: Z(),
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
        columns: [oi]
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
          screen: [oi]
        }, oi]
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
        text: ["base", oi, ai]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", En, $e]
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
        decoration: ["auto", "from-font", En, ai]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", En, $e]
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
        bg: [...V(), g8]
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
        bg: ["auto", "cover", "contain", v8]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, m8]
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
        "outline-offset": [En, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [En, ai]
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
        "ring-offset": [En, ai]
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
        shadow: ["", "inner", "none", oi, b8]
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
        "drop-shadow": ["", "none", oi, $e]
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
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
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
        duration: Z()
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
        delay: Z()
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
        stroke: [En, ai, Nd]
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
}, S8 = /* @__PURE__ */ a8(O8);
function zt(...e) {
  return S8(Ie(e));
}
function A8(e) {
  return zt(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const Ow = bi("inline-block shrink-0", {
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
}), rT = Nn(function({ size: t, icon: r, state: n = "normal", className: i, ...a }, o) {
  var f;
  if (!r) return null;
  const s = r;
  return ((f = r.displayName) == null ? void 0 : f.includes("Animated")) ? /* @__PURE__ */ X(
    s,
    {
      ref: o,
      ...a,
      animate: n,
      className: zt(Ow({ size: t }), "select-none", i)
    }
  ) : /* @__PURE__ */ X(
    s,
    {
      ref: o,
      ...a,
      className: zt("aspect-square", Ow({ size: t }), i)
    }
  );
}), P8 = (e, t) => /* @__PURE__ */ Ze("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ X("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ X("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), sJ = Nn(P8), nT = Nr(void 0), cJ = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ X(nT.Provider, { value: { component: t, currentPath: r }, children: e }), iT = () => {
  const e = er(nT);
  return {
    controller: () => ({}),
    ...e
  };
};
function ac(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const E8 = () => {
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
}, lJ = Nn(
  function(t, r) {
    const { component: n } = iT(), { isActive: i } = E8(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, o = lo(
      () => Nn(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ X("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ X(o, { ref: r, ...a });
  }
);
function T8(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function aT(...e) {
  return (t) => e.forEach((r) => T8(r, t));
}
function na(...e) {
  return Y.useCallback(aT(...e), e);
}
var Om = Y.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = Y.Children.toArray(r), a = i.find(C8);
  if (a) {
    const o = a.props.children, s = i.map((l) => l === a ? Y.Children.count(o) > 1 ? Y.Children.only(null) : Y.isValidElement(o) ? o.props.children : null : l);
    return /* @__PURE__ */ X(Gg, { ...n, ref: t, children: Y.isValidElement(o) ? Y.cloneElement(o, void 0, s) : null });
  }
  return /* @__PURE__ */ X(Gg, { ...n, ref: t, children: r });
});
Om.displayName = "Slot";
var Gg = Y.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (Y.isValidElement(r)) {
    const i = I8(r);
    return Y.cloneElement(r, {
      ...M8(n, r.props),
      // @ts-ignore
      ref: t ? aT(t, i) : i
    });
  }
  return Y.Children.count(r) > 1 ? Y.Children.only(null) : null;
});
Gg.displayName = "SlotClone";
var oT = ({ children: e }) => /* @__PURE__ */ X($a, { children: e });
function C8(e) {
  return Y.isValidElement(e) && e.type === oT;
}
function M8(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...s) => {
      a(...s), i(...s);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function I8(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const R8 = bi(
  zt(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    A8()
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
), uT = Y.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, o) => /* @__PURE__ */ X(
    i ? Om : "button",
    {
      className: zt(R8({ variant: r, size: n, round: t }), e),
      ref: o,
      ...a
    }
  )
);
uT.displayName = "Button";
const $8 = bi("-ml-0.5 transition-colors", {
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
}), k8 = bi("transition-colors", {
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
}), fJ = Nn(function({
  label: t,
  hideLabel: r,
  onClick: n,
  disabled: i,
  loading: a,
  icon: o,
  variant: s = "default",
  size: l = "md",
  ...f
}, d) {
  const [h, v] = $r(!1);
  return /* @__PURE__ */ Ze(
    uT,
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
        o && /* @__PURE__ */ X(
          rT,
          {
            size: l === "sm" ? "sm" : "md",
            icon: o,
            className: r ? k8({ variant: s }) : $8({ variant: s })
          }
        ),
        !r && t
      ]
    }
  );
}), sT = Nr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), dJ = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = $r(e), i = Ki(() => {
    n(!0);
  }, []), a = Ki(() => n(!1), []), o = Ki(() => n((s) => !s), []);
  return /* @__PURE__ */ X(sT.Provider, { value: { enable: i, disable: a, toggle: o, enabled: r }, children: t });
}, j8 = () => {
  const e = er(sT);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dd, Sw;
function tr() {
  if (Sw) return Dd;
  Sw = 1;
  var e = Array.isArray;
  return Dd = e, Dd;
}
var Ld, Aw;
function cT() {
  if (Aw) return Ld;
  Aw = 1;
  var e = typeof Mr == "object" && Mr && Mr.Object === Object && Mr;
  return Ld = e, Ld;
}
var qd, Pw;
function pn() {
  if (Pw) return qd;
  Pw = 1;
  var e = cT(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return qd = r, qd;
}
var Bd, Ew;
function ts() {
  if (Ew) return Bd;
  Ew = 1;
  var e = pn(), t = e.Symbol;
  return Bd = t, Bd;
}
var Fd, Tw;
function N8() {
  if (Tw) return Fd;
  Tw = 1;
  var e = ts(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var s = r.call(o, i), l = o[i];
    try {
      o[i] = void 0;
      var f = !0;
    } catch {
    }
    var d = n.call(o);
    return f && (s ? o[i] = l : delete o[i]), d;
  }
  return Fd = a, Fd;
}
var Wd, Cw;
function D8() {
  if (Cw) return Wd;
  Cw = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Wd = r, Wd;
}
var zd, Mw;
function Wn() {
  if (Mw) return zd;
  Mw = 1;
  var e = ts(), t = N8(), r = D8(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return zd = o, zd;
}
var Ud, Iw;
function zn() {
  if (Iw) return Ud;
  Iw = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ud = e, Ud;
}
var Hd, Rw;
function ho() {
  if (Rw) return Hd;
  Rw = 1;
  var e = Wn(), t = zn(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return Hd = n, Hd;
}
var Gd, $w;
function Sm() {
  if ($w) return Gd;
  $w = 1;
  var e = tr(), t = ho(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return Gd = i, Gd;
}
var Kd, kw;
function xi() {
  if (kw) return Kd;
  kw = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Kd = e, Kd;
}
var Vd, jw;
function Am() {
  if (jw) return Vd;
  jw = 1;
  var e = Wn(), t = xi(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == n || l == i || l == r || l == a;
  }
  return Vd = o, Vd;
}
var Yd, Nw;
function L8() {
  if (Nw) return Yd;
  Nw = 1;
  var e = pn(), t = e["__core-js_shared__"];
  return Yd = t, Yd;
}
var Xd, Dw;
function q8() {
  if (Dw) return Xd;
  Dw = 1;
  var e = L8(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Xd = r, Xd;
}
var Zd, Lw;
function lT() {
  if (Lw) return Zd;
  Lw = 1;
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
var Jd, qw;
function B8() {
  if (qw) return Jd;
  qw = 1;
  var e = Am(), t = q8(), r = xi(), n = lT(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, f = s.hasOwnProperty, d = RegExp(
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
var Qd, Bw;
function F8() {
  if (Bw) return Qd;
  Bw = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Qd = e, Qd;
}
var eh, Fw;
function ia() {
  if (Fw) return eh;
  Fw = 1;
  var e = B8(), t = F8();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return eh = r, eh;
}
var th, Ww;
function El() {
  if (Ww) return th;
  Ww = 1;
  var e = ia(), t = e(Object, "create");
  return th = t, th;
}
var rh, zw;
function W8() {
  if (zw) return rh;
  zw = 1;
  var e = El();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return rh = t, rh;
}
var nh, Uw;
function z8() {
  if (Uw) return nh;
  Uw = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return nh = e, nh;
}
var ih, Hw;
function U8() {
  if (Hw) return ih;
  Hw = 1;
  var e = El(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var s = o[a];
      return s === t ? void 0 : s;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return ih = i, ih;
}
var ah, Gw;
function H8() {
  if (Gw) return ah;
  Gw = 1;
  var e = El(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return ah = n, ah;
}
var oh, Kw;
function G8() {
  if (Kw) return oh;
  Kw = 1;
  var e = El(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return oh = r, oh;
}
var uh, Vw;
function K8() {
  if (Vw) return uh;
  Vw = 1;
  var e = W8(), t = z8(), r = U8(), n = H8(), i = G8();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, uh = a, uh;
}
var sh, Yw;
function V8() {
  if (Yw) return sh;
  Yw = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return sh = e, sh;
}
var ch, Xw;
function Pm() {
  if (Xw) return ch;
  Xw = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ch = e, ch;
}
var lh, Zw;
function Tl() {
  if (Zw) return lh;
  Zw = 1;
  var e = Pm();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return lh = t, lh;
}
var fh, Jw;
function Y8() {
  if (Jw) return fh;
  Jw = 1;
  var e = Tl(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var s = a.length - 1;
    return o == s ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return fh = n, fh;
}
var dh, Qw;
function X8() {
  if (Qw) return dh;
  Qw = 1;
  var e = Tl();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return dh = t, dh;
}
var hh, e1;
function Z8() {
  if (e1) return hh;
  e1 = 1;
  var e = Tl();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return hh = t, hh;
}
var ph, t1;
function J8() {
  if (t1) return ph;
  t1 = 1;
  var e = Tl();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return ph = t, ph;
}
var vh, r1;
function Cl() {
  if (r1) return vh;
  r1 = 1;
  var e = V8(), t = Y8(), r = X8(), n = Z8(), i = J8();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, vh = a, vh;
}
var gh, n1;
function Em() {
  if (n1) return gh;
  n1 = 1;
  var e = ia(), t = pn(), r = e(t, "Map");
  return gh = r, gh;
}
var yh, i1;
function Q8() {
  if (i1) return yh;
  i1 = 1;
  var e = K8(), t = Cl(), r = Em();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return yh = n, yh;
}
var mh, a1;
function eL() {
  if (a1) return mh;
  a1 = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return mh = e, mh;
}
var bh, o1;
function Ml() {
  if (o1) return bh;
  o1 = 1;
  var e = eL();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return bh = t, bh;
}
var xh, u1;
function tL() {
  if (u1) return xh;
  u1 = 1;
  var e = Ml();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return xh = t, xh;
}
var wh, s1;
function rL() {
  if (s1) return wh;
  s1 = 1;
  var e = Ml();
  function t(r) {
    return e(this, r).get(r);
  }
  return wh = t, wh;
}
var _h, c1;
function nL() {
  if (c1) return _h;
  c1 = 1;
  var e = Ml();
  function t(r) {
    return e(this, r).has(r);
  }
  return _h = t, _h;
}
var Oh, l1;
function iL() {
  if (l1) return Oh;
  l1 = 1;
  var e = Ml();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Oh = t, Oh;
}
var Sh, f1;
function Tm() {
  if (f1) return Sh;
  f1 = 1;
  var e = Q8(), t = tL(), r = rL(), n = nL(), i = iL();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Sh = a, Sh;
}
var Ah, d1;
function fT() {
  if (d1) return Ah;
  d1 = 1;
  var e = Tm(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, s = i ? i.apply(this, o) : o[0], l = a.cache;
      if (l.has(s))
        return l.get(s);
      var f = n.apply(this, o);
      return a.cache = l.set(s, f) || l, f;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Ah = r, Ah;
}
var Ph, h1;
function aL() {
  if (h1) return Ph;
  h1 = 1;
  var e = fT(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return Ph = r, Ph;
}
var Eh, p1;
function oL() {
  if (p1) return Eh;
  p1 = 1;
  var e = aL(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, s, l, f) {
      a.push(l ? f.replace(r, "$1") : s || o);
    }), a;
  });
  return Eh = n, Eh;
}
var Th, v1;
function Cm() {
  if (v1) return Th;
  v1 = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Th = e, Th;
}
var Ch, g1;
function uL() {
  if (g1) return Ch;
  g1 = 1;
  var e = ts(), t = Cm(), r = tr(), n = ho(), i = 1 / 0, a = e ? e.prototype : void 0, o = a ? a.toString : void 0;
  function s(l) {
    if (typeof l == "string")
      return l;
    if (r(l))
      return t(l, s) + "";
    if (n(l))
      return o ? o.call(l) : "";
    var f = l + "";
    return f == "0" && 1 / l == -i ? "-0" : f;
  }
  return Ch = s, Ch;
}
var Mh, y1;
function dT() {
  if (y1) return Mh;
  y1 = 1;
  var e = uL();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Mh = t, Mh;
}
var Ih, m1;
function hT() {
  if (m1) return Ih;
  m1 = 1;
  var e = tr(), t = Sm(), r = oL(), n = dT();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return Ih = i, Ih;
}
var Rh, b1;
function Il() {
  if (b1) return Rh;
  b1 = 1;
  var e = ho(), t = 1 / 0;
  function r(n) {
    if (typeof n == "string" || e(n))
      return n;
    var i = n + "";
    return i == "0" && 1 / n == -t ? "-0" : i;
  }
  return Rh = r, Rh;
}
var $h, x1;
function Mm() {
  if (x1) return $h;
  x1 = 1;
  var e = hT(), t = Il();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return $h = r, $h;
}
var kh, w1;
function pT() {
  if (w1) return kh;
  w1 = 1;
  var e = Mm();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return kh = t, kh;
}
var sL = pT();
const pr = /* @__PURE__ */ Je(sL);
var jh, _1;
function cL() {
  if (_1) return jh;
  _1 = 1;
  function e(t) {
    return t == null;
  }
  return jh = e, jh;
}
var lL = cL();
const Te = /* @__PURE__ */ Je(lL);
var Nh, O1;
function fL() {
  if (O1) return Nh;
  O1 = 1;
  var e = Wn(), t = tr(), r = zn(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Nh = i, Nh;
}
var dL = fL();
const rs = /* @__PURE__ */ Je(dL);
var hL = Am();
const Pe = /* @__PURE__ */ Je(hL);
var pL = xi();
const po = /* @__PURE__ */ Je(pL);
var oc = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S1;
function vL() {
  if (S1) return Ge;
  S1 = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
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
                case o:
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
  return Ge.AsyncMode = l, Ge.ConcurrentMode = f, Ge.ContextConsumer = s, Ge.ContextProvider = o, Ge.Element = t, Ge.ForwardRef = d, Ge.Fragment = n, Ge.Lazy = x, Ge.Memo = g, Ge.Portal = r, Ge.Profiler = a, Ge.StrictMode = i, Ge.Suspense = h, Ge.isAsyncMode = function(m) {
    return _(m) || A(m) === l;
  }, Ge.isConcurrentMode = _, Ge.isContextConsumer = function(m) {
    return A(m) === s;
  }, Ge.isContextProvider = function(m) {
    return A(m) === o;
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
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === a || m === i || m === h || m === v || typeof m == "object" && m !== null && (m.$$typeof === x || m.$$typeof === g || m.$$typeof === o || m.$$typeof === s || m.$$typeof === d || m.$$typeof === b || m.$$typeof === S || m.$$typeof === O || m.$$typeof === y);
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
var A1;
function gL() {
  return A1 || (A1 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === h || k === v || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === g || k.$$typeof === o || k.$$typeof === s || k.$$typeof === d || k.$$typeof === b || k.$$typeof === S || k.$$typeof === O || k.$$typeof === y);
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
                  case o:
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
    var m = l, E = f, T = s, I = o, B = t, L = d, N = n, j = x, q = g, F = r, V = a, U = i, J = h, G = !1;
    function ue(k) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(k) || _(k) === l;
    }
    function H(k) {
      return _(k) === f;
    }
    function Z(k) {
      return _(k) === s;
    }
    function ae(k) {
      return _(k) === o;
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
    Ke.AsyncMode = m, Ke.ConcurrentMode = E, Ke.ContextConsumer = T, Ke.ContextProvider = I, Ke.Element = B, Ke.ForwardRef = L, Ke.Fragment = N, Ke.Lazy = j, Ke.Memo = q, Ke.Portal = F, Ke.Profiler = V, Ke.StrictMode = U, Ke.Suspense = J, Ke.isAsyncMode = ue, Ke.isConcurrentMode = H, Ke.isContextConsumer = Z, Ke.isContextProvider = ae, Ke.isElement = ce, Ke.isForwardRef = he, Ke.isFragment = ye, Ke.isLazy = be, Ke.isMemo = le, Ke.isPortal = ge, Ke.isProfiler = te, Ke.isStrictMode = se, Ke.isSuspense = ve, Ke.isValidElementType = A, Ke.typeOf = _;
  }()), Ke;
}
var P1;
function yL() {
  return P1 || (P1 = 1, process.env.NODE_ENV === "production" ? oc.exports = vL() : oc.exports = gL()), oc.exports;
}
var Kg = yL(), Dh, E1;
function vT() {
  if (E1) return Dh;
  E1 = 1;
  var e = Wn(), t = zn(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return Dh = n, Dh;
}
var Lh, T1;
function mL() {
  if (T1) return Lh;
  T1 = 1;
  var e = vT();
  function t(r) {
    return e(r) && r != +r;
  }
  return Lh = t, Lh;
}
var bL = mL();
const vo = /* @__PURE__ */ Je(bL);
var xL = vT();
const wL = /* @__PURE__ */ Je(xL);
var Ut = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Wi = function(t) {
  return rs(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return wL(t) && !vo(t);
}, Pt = function(t) {
  return oe(t) || rs(t);
}, _L = 0, aa = function(t) {
  var r = ++_L;
  return "".concat(t || "").concat(r);
}, Ht = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !rs(t))
    return n;
  var a;
  if (Wi(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return vo(a) && (a = n), i && a > r && (a = r), a;
}, li = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, OL = function(t) {
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
var SL = ["viewBox", "children"], AL = [
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
], C1 = ["points", "pathLength"], qh = {
  svg: SL,
  polygon: C1,
  polyline: C1
}, Im = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Tc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Vr(t) && (n = t.props), !po(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Im.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, PL = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Ji = function(t, r, n) {
  if (!po(t) || Vg(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Im.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = PL(o, r, n));
  }), i;
}, EL = ["children"], TL = ["children"];
function M1(e, t) {
  if (e == null) return {};
  var r = CL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CL(e, t) {
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
var I1 = {
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
}, $n = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, R1 = null, Bh = null, Rm = function e(t) {
  if (t === R1 && Array.isArray(Bh))
    return Bh;
  var r = [];
  return Vi.forEach(t, function(n) {
    Te(n) || (Kg.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Bh = r, R1 = t, r;
};
function vr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return $n(i);
  }) : n = [$n(t)], Rm(e).forEach(function(i) {
    var a = pr(i, "type.displayName") || pr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function fr(e, t) {
  var r = vr(e, t);
  return r && r[0];
}
var $1 = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, ML = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], IL = function(t) {
  return t && t.type && rs(t.type) && ML.indexOf(t.type) >= 0;
}, gT = function(t) {
  return t && Yg(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, RL = function(t, r, n, i) {
  var a, o = (a = qh == null ? void 0 : qh[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && o.includes(r) || AL.includes(r)) || n && Im.includes(r);
}, xe = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Vr(t) && (i = t.props), !po(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    RL((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
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
    return k1(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!k1(a, o))
      return !1;
  }
  return !0;
}, k1 = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = M1(n, EL), o = r.props || {}, s = o.children, l = M1(o, TL);
    return i && s ? ja(a, l) && Xg(i, s) : !i && !s ? ja(a, l) : !1;
  }
  return !1;
}, j1 = function(t, r) {
  var n = [], i = {};
  return Rm(t).forEach(function(a, o) {
    if (IL(a))
      n.push(a);
    else if (a) {
      var s = $n(a.type), l = r[s] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[s])) {
        var h = f(a, s, o);
        n.push(h), i[s] = !0;
      }
    }
  }), n;
}, $L = function(t) {
  var r = t && t.type;
  return r && I1[r] ? I1[r] : null;
}, kL = function(t, r) {
  return Rm(r).indexOf(t);
}, jL = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function NL(e, t) {
  if (e == null) return {};
  var r = DL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DL(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Jg(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, l = e.desc, f = NL(e, jL), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Ie("recharts-surface", a);
  return /* @__PURE__ */ $.createElement("svg", Zg({}, xe(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ $.createElement("title", null, s), /* @__PURE__ */ $.createElement("desc", null, l), t);
}
var LL = ["children", "className"];
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
var Le = /* @__PURE__ */ $.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = qL(e, LL), a = Ie("recharts-layer", n);
  return /* @__PURE__ */ $.createElement("g", Qg({
    className: a
  }, xe(i, !0), {
    ref: t
  }), r);
}), FL = process.env.NODE_ENV !== "production", Yr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (FL && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, Fh, N1;
function WL() {
  if (N1) return Fh;
  N1 = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return Fh = e, Fh;
}
var Wh, D1;
function zL() {
  if (D1) return Wh;
  D1 = 1;
  var e = WL();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return Wh = t, Wh;
}
var zh, L1;
function yT() {
  if (L1) return zh;
  L1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + i + a + "]");
  function l(f) {
    return s.test(f);
  }
  return zh = l, zh;
}
var Uh, q1;
function UL() {
  if (q1) return Uh;
  q1 = 1;
  function e(t) {
    return t.split("");
  }
  return Uh = e, Uh;
}
var Hh, B1;
function HL() {
  if (B1) return Hh;
  B1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + i + "]", l = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + s + "|" + l + ")", d = "[^" + e + "]", h = "(?:\\ud83c[\\udde6-\\uddff]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", x = f + "?", y = "[" + a + "]?", b = "(?:" + g + "(?:" + [d, h, v].join("|") + ")" + y + x + ")*", S = y + x + b, O = "(?:" + [d + s + "?", s, h, v, o].join("|") + ")", A = RegExp(l + "(?=" + l + ")|" + O + S, "g");
  function _(m) {
    return m.match(A) || [];
  }
  return Hh = _, Hh;
}
var Gh, F1;
function GL() {
  if (F1) return Gh;
  F1 = 1;
  var e = UL(), t = yT(), r = HL();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return Gh = n, Gh;
}
var Kh, W1;
function KL() {
  if (W1) return Kh;
  W1 = 1;
  var e = zL(), t = yT(), r = GL(), n = dT();
  function i(a) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, l = s ? s[0] : o.charAt(0), f = s ? e(s, 1).join("") : o.slice(1);
      return l[a]() + f;
    };
  }
  return Kh = i, Kh;
}
var Vh, z1;
function VL() {
  if (z1) return Vh;
  z1 = 1;
  var e = KL(), t = e("toUpperCase");
  return Vh = t, Vh;
}
var YL = VL();
const Rl = /* @__PURE__ */ Je(YL);
function nt(e) {
  return function() {
    return e;
  };
}
const mT = Math.cos, Cc = Math.sin, tn = Math.sqrt, Mc = Math.PI, $l = 2 * Mc, ey = Math.PI, ty = 2 * ey, qi = 1e-6, XL = ty - qi;
function bT(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function ZL(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return bT;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class JL {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? bT : ZL(t);
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
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = n - t, f = i - r, d = o - t, h = s - r, v = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > qi) if (!(Math.abs(h * l - f * d) > qi) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - o, x = i - s, y = l * l + f * f, b = g * g + x * x, S = Math.sqrt(y), O = Math.sqrt(v), A = a * Math.tan((ey - Math.acos((y + v - b) / (2 * S * O))) / 2), _ = A / O, m = A / S;
      Math.abs(_ - 1) > qi && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * x)},${this._x1 = t + m * l},${this._y1 = r + m * f}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), f = t + s, d = r + l, h = 1 ^ o, v = o ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > qi || Math.abs(this._y1 - d) > qi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % ty + ty), v > XL ? this._append`A${n},${n},0,1,${h},${t - s},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > qi && this._append`A${n},${n},0,${+(v >= ey)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function $m(e) {
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
  }, () => new JL(t);
}
function km(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function xT(e) {
  this._context = e;
}
xT.prototype = {
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
  return new xT(e);
}
function wT(e) {
  return e[0];
}
function _T(e) {
  return e[1];
}
function OT(e, t) {
  var r = nt(!0), n = null, i = kl, a = null, o = $m(s);
  e = typeof e == "function" ? e : e === void 0 ? wT : nt(e), t = typeof t == "function" ? t : t === void 0 ? _T : nt(t);
  function s(l) {
    var f, d = (l = km(l)).length, h, v = !1, g;
    for (n == null && (a = i(g = o())), f = 0; f <= d; ++f)
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
  var n = null, i = nt(!0), a = null, o = kl, s = null, l = $m(f);
  e = typeof e == "function" ? e : e === void 0 ? wT : nt(+e), t = typeof t == "function" ? t : nt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? _T : nt(+r);
  function f(h) {
    var v, g, x, y = (h = km(h)).length, b, S = !1, O, A = new Array(y), _ = new Array(y);
    for (a == null && (s = o(O = l())), v = 0; v <= y; ++v) {
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
    return OT().defined(i).curve(o).context(a);
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
    return arguments.length ? (o = h, a != null && (s = o(a)), f) : o;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = o(a = h), f) : a;
  }, f;
}
class ST {
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
function QL(e) {
  return new ST(e, !0);
}
function e6(e) {
  return new ST(e, !1);
}
const jm = {
  draw(e, t) {
    const r = tn(t / Mc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, $l);
  }
}, t6 = {
  draw(e, t) {
    const r = tn(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, AT = tn(1 / 3), r6 = AT * 2, n6 = {
  draw(e, t) {
    const r = tn(t / r6), n = r * AT;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, i6 = {
  draw(e, t) {
    const r = tn(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, a6 = 0.8908130915292852, PT = Cc(Mc / 10) / Cc(7 * Mc / 10), o6 = Cc($l / 10) * PT, u6 = -mT($l / 10) * PT, s6 = {
  draw(e, t) {
    const r = tn(t * a6), n = o6 * r, i = u6 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = $l * a / 5, s = mT(o), l = Cc(o);
      e.lineTo(l * r, -s * r), e.lineTo(s * n - l * i, l * n + s * i);
    }
    e.closePath();
  }
}, Yh = tn(3), c6 = {
  draw(e, t) {
    const r = -tn(t / (Yh * 3));
    e.moveTo(0, r * 2), e.lineTo(-Yh * r, -r), e.lineTo(Yh * r, -r), e.closePath();
  }
}, Ar = -0.5, Pr = tn(3) / 2, ry = 1 / tn(12), l6 = (ry / 2 + 1) * 3, f6 = {
  draw(e, t) {
    const r = tn(t / l6), n = r / 2, i = r * ry, a = n, o = r * ry + r, s = -a, l = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, l), e.lineTo(Ar * n - Pr * i, Pr * n + Ar * i), e.lineTo(Ar * a - Pr * o, Pr * a + Ar * o), e.lineTo(Ar * s - Pr * l, Pr * s + Ar * l), e.lineTo(Ar * n + Pr * i, Ar * i - Pr * n), e.lineTo(Ar * a + Pr * o, Ar * o - Pr * a), e.lineTo(Ar * s + Pr * l, Ar * l - Pr * s), e.closePath();
  }
};
function d6(e, t) {
  let r = null, n = $m(i);
  e = typeof e == "function" ? e : nt(e || jm), t = typeof t == "function" ? t : nt(t === void 0 ? 64 : +t);
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
function ET(e) {
  this._context = e;
}
ET.prototype = {
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
function h6(e) {
  return new ET(e);
}
function TT(e) {
  this._context = e;
}
TT.prototype = {
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
function p6(e) {
  return new TT(e);
}
function CT(e) {
  this._context = e;
}
CT.prototype = {
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
function v6(e) {
  return new CT(e);
}
function MT(e) {
  this._context = e;
}
MT.prototype = {
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
function g6(e) {
  return new MT(e);
}
function U1(e) {
  return e < 0 ? -1 : 1;
}
function H1(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (U1(a) + U1(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function G1(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Xh(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
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
        Xh(this, this._t0, G1(this, this._t0));
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
          this._point = 3, Xh(this, G1(this, r = H1(this, e, t)), r);
          break;
        default:
          Xh(this, this._t0, r = H1(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function IT(e) {
  this._context = new RT(e);
}
(IT.prototype = Object.create($c.prototype)).point = function(e, t) {
  $c.prototype.point.call(this, t, e);
};
function RT(e) {
  this._context = e;
}
RT.prototype = {
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
function y6(e) {
  return new $c(e);
}
function m6(e) {
  return new IT(e);
}
function $T(e) {
  this._context = e;
}
$T.prototype = {
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
        for (var n = K1(e), i = K1(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function K1(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function b6(e) {
  return new $T(e);
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
function x6(e) {
  return new jl(e, 0.5);
}
function w6(e) {
  return new jl(e, 0);
}
function _6(e) {
  return new jl(e, 1);
}
function qa(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function ny(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function O6(e, t) {
  return e[t];
}
function S6(e) {
  const t = [];
  return t.key = e, t;
}
function A6() {
  var e = nt([]), t = ny, r = qa, n = O6;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), S6), s, l = o.length, f = -1, d;
    for (const h of a)
      for (s = 0, ++f; s < l; ++s)
        (o[s][f] = [0, +n(h, o[s].key, f, a)]).data = h;
    for (s = 0, d = km(t(o)); s < l; ++s)
      o[d[s]].index = s;
    return r(o, d), o;
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
function P6(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    qa(e, t);
  }
}
function E6(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    qa(e, t);
  }
}
function T6(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, l = 0, f = 0; s < o; ++s) {
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
var C6 = ["type", "size", "sizeType"];
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
function V1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Y1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? V1(Object(r), !0).forEach(function(n) {
      M6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M6(e, t, r) {
  return t = I6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I6(e) {
  var t = R6(e, "string");
  return gu(t) == "symbol" ? t : String(t);
}
function R6(e, t) {
  if (gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $6(e, t) {
  if (e == null) return {};
  var r = k6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function k6(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var kT = {
  symbolCircle: jm,
  symbolCross: t6,
  symbolDiamond: n6,
  symbolSquare: i6,
  symbolStar: s6,
  symbolTriangle: c6,
  symbolWye: f6
}, j6 = Math.PI / 180, N6 = function(t) {
  var r = "symbol".concat(Rl(t));
  return kT[r] || jm;
}, D6 = function(t, r, n) {
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
      var i = 18 * j6;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, L6 = function(t, r) {
  kT["symbol".concat(Rl(t))] = r;
}, Nm = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, l = $6(t, C6), f = Y1(Y1({}, l), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var b = N6(n), S = d6().type(b).size(D6(a, s, n));
    return S();
  }, h = f.className, v = f.cx, g = f.cy, x = xe(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ $.createElement("path", iy({}, x, {
    className: Ie("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Nm.registerSymbol = L6;
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
function X1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? X1(Object(r), !0).forEach(function(n) {
      yu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function F6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, NT(n.key), n);
  }
}
function W6(e, t, r) {
  return t && F6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z6(e, t, r) {
  return t = kc(t), U6(e, jT() ? Reflect.construct(t, r || [], kc(e).constructor) : t.apply(e, r));
}
function U6(e, t) {
  if (t && (Ba(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return H6(e);
}
function H6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jT() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jT = function() {
    return !!e;
  })();
}
function kc(e) {
  return kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kc(e);
}
function G6(e, t) {
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
  return t = NT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NT(e) {
  var t = K6(e, "string");
  return Ba(t) == "symbol" ? t : String(t);
}
function K6(e, t) {
  if (Ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Er = 32, Dm = /* @__PURE__ */ function(e) {
  G6(t, e);
  function t() {
    return B6(this, t), z6(this, t, arguments);
  }
  return W6(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = Er / 2, o = Er / 6, s = Er / 3, l = n.inactive ? i : n.color;
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
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Er, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
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
          var f = q6({}, n);
          return delete f.legendIcon, /* @__PURE__ */ $.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ $.createElement(Nm, {
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
      var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, l = i.formatter, f = i.inactiveColor, d = {
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
          width: o,
          height: o,
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
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ $.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]), t;
}(Dr);
yu(Dm, "displayName", "Legend");
yu(Dm, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Zh, Z1;
function V6() {
  if (Z1) return Zh;
  Z1 = 1;
  var e = Cl();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Zh = t, Zh;
}
var Jh, J1;
function Y6() {
  if (J1) return Jh;
  J1 = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Jh = e, Jh;
}
var Qh, Q1;
function X6() {
  if (Q1) return Qh;
  Q1 = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Qh = e, Qh;
}
var ep, e_;
function Z6() {
  if (e_) return ep;
  e_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ep = e, ep;
}
var tp, t_;
function J6() {
  if (t_) return tp;
  t_ = 1;
  var e = Cl(), t = Em(), r = Tm(), n = 200;
  function i(a, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < n - 1)
        return l.push([a, o]), this.size = ++s.size, this;
      s = this.__data__ = new r(l);
    }
    return s.set(a, o), this.size = s.size, this;
  }
  return tp = i, tp;
}
var rp, r_;
function DT() {
  if (r_) return rp;
  r_ = 1;
  var e = Cl(), t = V6(), r = Y6(), n = X6(), i = Z6(), a = J6();
  function o(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, rp = o, rp;
}
var np, n_;
function Q6() {
  if (n_) return np;
  n_ = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return np = t, np;
}
var ip, i_;
function eq() {
  if (i_) return ip;
  i_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ip = e, ip;
}
var ap, a_;
function LT() {
  if (a_) return ap;
  a_ = 1;
  var e = Tm(), t = Q6(), r = eq();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, ap = n, ap;
}
var op, o_;
function qT() {
  if (o_) return op;
  o_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return op = e, op;
}
var up, u_;
function BT() {
  if (u_) return up;
  u_ = 1;
  function e(t, r) {
    return t.has(r);
  }
  return up = e, up;
}
var sp, s_;
function FT() {
  if (s_) return sp;
  s_ = 1;
  var e = LT(), t = qT(), r = BT(), n = 1, i = 2;
  function a(o, s, l, f, d, h) {
    var v = l & n, g = o.length, x = s.length;
    if (g != x && !(v && x > g))
      return !1;
    var y = h.get(o), b = h.get(s);
    if (y && b)
      return y == s && b == o;
    var S = -1, O = !0, A = l & i ? new e() : void 0;
    for (h.set(o, s), h.set(s, o); ++S < g; ) {
      var _ = o[S], m = s[S];
      if (f)
        var E = v ? f(m, _, S, s, o, h) : f(_, m, S, o, s, h);
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
    return h.delete(o), h.delete(s), O;
  }
  return sp = a, sp;
}
var cp, c_;
function tq() {
  if (c_) return cp;
  c_ = 1;
  var e = pn(), t = e.Uint8Array;
  return cp = t, cp;
}
var lp, l_;
function rq() {
  if (l_) return lp;
  l_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return lp = e, lp;
}
var fp, f_;
function Lm() {
  if (f_) return fp;
  f_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return fp = e, fp;
}
var dp, d_;
function nq() {
  if (d_) return dp;
  d_ = 1;
  var e = ts(), t = tq(), r = Pm(), n = FT(), i = rq(), a = Lm(), o = 1, s = 2, l = "[object Boolean]", f = "[object Date]", d = "[object Error]", h = "[object Map]", v = "[object Number]", g = "[object RegExp]", x = "[object Set]", y = "[object String]", b = "[object Symbol]", S = "[object ArrayBuffer]", O = "[object DataView]", A = e ? e.prototype : void 0, _ = A ? A.valueOf : void 0;
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
        var F = B & o;
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
var hp, h_;
function WT() {
  if (h_) return hp;
  h_ = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return hp = e, hp;
}
var pp, p_;
function iq() {
  if (p_) return pp;
  p_ = 1;
  var e = WT(), t = tr();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return pp = r, pp;
}
var vp, v_;
function aq() {
  if (v_) return vp;
  v_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (o[a++] = s);
    }
    return o;
  }
  return vp = e, vp;
}
var gp, g_;
function oq() {
  if (g_) return gp;
  g_ = 1;
  function e() {
    return [];
  }
  return gp = e, gp;
}
var yp, y_;
function uq() {
  if (y_) return yp;
  y_ = 1;
  var e = aq(), t = oq(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return yp = a, yp;
}
var mp, m_;
function sq() {
  if (m_) return mp;
  m_ = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return mp = e, mp;
}
var bp, b_;
function cq() {
  if (b_) return bp;
  b_ = 1;
  var e = Wn(), t = zn(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return bp = n, bp;
}
var xp, x_;
function qm() {
  if (x_) return xp;
  x_ = 1;
  var e = cq(), t = zn(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return xp = a, xp;
}
var ru = { exports: {} }, wp, w_;
function lq() {
  if (w_) return wp;
  w_ = 1;
  function e() {
    return !1;
  }
  return wp = e, wp;
}
ru.exports;
var __;
function zT() {
  return __ || (__ = 1, function(e, t) {
    var r = pn(), n = lq(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || n;
    e.exports = f;
  }(ru, ru.exports)), ru.exports;
}
var _p, O_;
function Bm() {
  if (O_) return _p;
  O_ = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return _p = r, _p;
}
var Op, S_;
function Fm() {
  if (S_) return Op;
  S_ = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Op = t, Op;
}
var Sp, A_;
function fq() {
  if (A_) return Sp;
  A_ = 1;
  var e = Wn(), t = Fm(), r = zn(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", s = "[object Error]", l = "[object Function]", f = "[object Map]", d = "[object Number]", h = "[object Object]", v = "[object RegExp]", g = "[object Set]", x = "[object String]", y = "[object WeakMap]", b = "[object ArrayBuffer]", S = "[object DataView]", O = "[object Float32Array]", A = "[object Float64Array]", _ = "[object Int8Array]", m = "[object Int16Array]", E = "[object Int32Array]", T = "[object Uint8Array]", I = "[object Uint8ClampedArray]", B = "[object Uint16Array]", L = "[object Uint32Array]", N = {};
  N[O] = N[A] = N[_] = N[m] = N[E] = N[T] = N[I] = N[B] = N[L] = !0, N[n] = N[i] = N[b] = N[a] = N[S] = N[o] = N[s] = N[l] = N[f] = N[d] = N[h] = N[v] = N[g] = N[x] = N[y] = !1;
  function j(q) {
    return r(q) && t(q.length) && !!N[e(q)];
  }
  return Sp = j, Sp;
}
var Ap, P_;
function UT() {
  if (P_) return Ap;
  P_ = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Ap = e, Ap;
}
var nu = { exports: {} };
nu.exports;
var E_;
function dq() {
  return E_ || (E_ = 1, function(e, t) {
    var r = cT(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(nu, nu.exports)), nu.exports;
}
var Pp, T_;
function HT() {
  if (T_) return Pp;
  T_ = 1;
  var e = fq(), t = UT(), r = dq(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Pp = i, Pp;
}
var Ep, C_;
function hq() {
  if (C_) return Ep;
  C_ = 1;
  var e = sq(), t = qm(), r = tr(), n = zT(), i = Bm(), a = HT(), o = Object.prototype, s = o.hasOwnProperty;
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
var Tp, M_;
function pq() {
  if (M_) return Tp;
  M_ = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return Tp = t, Tp;
}
var Cp, I_;
function GT() {
  if (I_) return Cp;
  I_ = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Cp = e, Cp;
}
var Mp, R_;
function vq() {
  if (R_) return Mp;
  R_ = 1;
  var e = GT(), t = e(Object.keys, Object);
  return Mp = t, Mp;
}
var Ip, $_;
function gq() {
  if ($_) return Ip;
  $_ = 1;
  var e = pq(), t = vq(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Ip = i, Ip;
}
var Rp, k_;
function ns() {
  if (k_) return Rp;
  k_ = 1;
  var e = Am(), t = Fm();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Rp = r, Rp;
}
var $p, j_;
function Nl() {
  if (j_) return $p;
  j_ = 1;
  var e = hq(), t = gq(), r = ns();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return $p = n, $p;
}
var kp, N_;
function yq() {
  if (N_) return kp;
  N_ = 1;
  var e = iq(), t = uq(), r = Nl();
  function n(i) {
    return e(i, r, t);
  }
  return kp = n, kp;
}
var jp, D_;
function mq() {
  if (D_) return jp;
  D_ = 1;
  var e = yq(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, s, l, f, d) {
    var h = s & t, v = e(a), g = v.length, x = e(o), y = x.length;
    if (g != y && !h)
      return !1;
    for (var b = g; b--; ) {
      var S = v[b];
      if (!(h ? S in o : n.call(o, S)))
        return !1;
    }
    var O = d.get(a), A = d.get(o);
    if (O && A)
      return O == o && A == a;
    var _ = !0;
    d.set(a, o), d.set(o, a);
    for (var m = h; ++b < g; ) {
      S = v[b];
      var E = a[S], T = o[S];
      if (l)
        var I = h ? l(T, E, S, o, a, d) : l(E, T, S, a, o, d);
      if (!(I === void 0 ? E === T || f(E, T, s, l, d) : I)) {
        _ = !1;
        break;
      }
      m || (m = S == "constructor");
    }
    if (_ && !m) {
      var B = a.constructor, L = o.constructor;
      B != L && "constructor" in a && "constructor" in o && !(typeof B == "function" && B instanceof B && typeof L == "function" && L instanceof L) && (_ = !1);
    }
    return d.delete(a), d.delete(o), _;
  }
  return jp = i, jp;
}
var Np, L_;
function bq() {
  if (L_) return Np;
  L_ = 1;
  var e = ia(), t = pn(), r = e(t, "DataView");
  return Np = r, Np;
}
var Dp, q_;
function xq() {
  if (q_) return Dp;
  q_ = 1;
  var e = ia(), t = pn(), r = e(t, "Promise");
  return Dp = r, Dp;
}
var Lp, B_;
function KT() {
  if (B_) return Lp;
  B_ = 1;
  var e = ia(), t = pn(), r = e(t, "Set");
  return Lp = r, Lp;
}
var qp, F_;
function wq() {
  if (F_) return qp;
  F_ = 1;
  var e = ia(), t = pn(), r = e(t, "WeakMap");
  return qp = r, qp;
}
var Bp, W_;
function _q() {
  if (W_) return Bp;
  W_ = 1;
  var e = bq(), t = Em(), r = xq(), n = KT(), i = wq(), a = Wn(), o = lT(), s = "[object Map]", l = "[object Object]", f = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", v = "[object DataView]", g = o(e), x = o(t), y = o(r), b = o(n), S = o(i), O = a;
  return (e && O(new e(new ArrayBuffer(1))) != v || t && O(new t()) != s || r && O(r.resolve()) != f || n && O(new n()) != d || i && O(new i()) != h) && (O = function(A) {
    var _ = a(A), m = _ == l ? A.constructor : void 0, E = m ? o(m) : "";
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
var Fp, z_;
function Oq() {
  if (z_) return Fp;
  z_ = 1;
  var e = DT(), t = FT(), r = nq(), n = mq(), i = _q(), a = tr(), o = zT(), s = HT(), l = 1, f = "[object Arguments]", d = "[object Array]", h = "[object Object]", v = Object.prototype, g = v.hasOwnProperty;
  function x(y, b, S, O, A, _) {
    var m = a(y), E = a(b), T = m ? d : i(y), I = E ? d : i(b);
    T = T == f ? h : T, I = I == f ? h : I;
    var B = T == h, L = I == h, N = T == I;
    if (N && o(y)) {
      if (!o(b))
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
var Wp, U_;
function Wm() {
  if (U_) return Wp;
  U_ = 1;
  var e = Oq(), t = zn();
  function r(n, i, a, o, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, s);
  }
  return Wp = r, Wp;
}
var zp, H_;
function Sq() {
  if (H_) return zp;
  H_ = 1;
  var e = DT(), t = Wm(), r = 1, n = 2;
  function i(a, o, s, l) {
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
          var S = l(x, y, g, a, o, b);
        if (!(S === void 0 ? t(y, x, r | n, l, b) : S))
          return !1;
      }
    }
    return !0;
  }
  return zp = i, zp;
}
var Up, G_;
function VT() {
  if (G_) return Up;
  G_ = 1;
  var e = xi();
  function t(r) {
    return r === r && !e(r);
  }
  return Up = t, Up;
}
var Hp, K_;
function Aq() {
  if (K_) return Hp;
  K_ = 1;
  var e = VT(), t = Nl();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], s = n[o];
      i[a] = [o, s, e(s)];
    }
    return i;
  }
  return Hp = r, Hp;
}
var Gp, V_;
function YT() {
  if (V_) return Gp;
  V_ = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Gp = e, Gp;
}
var Kp, Y_;
function Pq() {
  if (Y_) return Kp;
  Y_ = 1;
  var e = Sq(), t = Aq(), r = YT();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return Kp = n, Kp;
}
var Vp, X_;
function Eq() {
  if (X_) return Vp;
  X_ = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Vp = e, Vp;
}
var Yp, Z_;
function Tq() {
  if (Z_) return Yp;
  Z_ = 1;
  var e = hT(), t = qm(), r = tr(), n = Bm(), i = Fm(), a = Il();
  function o(s, l, f) {
    l = e(l, s);
    for (var d = -1, h = l.length, v = !1; ++d < h; ) {
      var g = a(l[d]);
      if (!(v = s != null && f(s, g)))
        break;
      s = s[g];
    }
    return v || ++d != h ? v : (h = s == null ? 0 : s.length, !!h && i(h) && n(g, h) && (r(s) || t(s)));
  }
  return Yp = o, Yp;
}
var Xp, J_;
function Cq() {
  if (J_) return Xp;
  J_ = 1;
  var e = Eq(), t = Tq();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return Xp = r, Xp;
}
var Zp, Q_;
function Mq() {
  if (Q_) return Zp;
  Q_ = 1;
  var e = Wm(), t = pT(), r = Cq(), n = Sm(), i = VT(), a = YT(), o = Il(), s = 1, l = 2;
  function f(d, h) {
    return n(d) && i(h) ? a(o(d), h) : function(v) {
      var g = t(v, d);
      return g === void 0 && g === h ? r(v, d) : e(h, g, s | l);
    };
  }
  return Zp = f, Zp;
}
var Jp, eO;
function go() {
  if (eO) return Jp;
  eO = 1;
  function e(t) {
    return t;
  }
  return Jp = e, Jp;
}
var Qp, tO;
function Iq() {
  if (tO) return Qp;
  tO = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Qp = e, Qp;
}
var ev, rO;
function Rq() {
  if (rO) return ev;
  rO = 1;
  var e = Mm();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return ev = t, ev;
}
var tv, nO;
function $q() {
  if (nO) return tv;
  nO = 1;
  var e = Iq(), t = Rq(), r = Sm(), n = Il();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return tv = i, tv;
}
var rv, iO;
function vn() {
  if (iO) return rv;
  iO = 1;
  var e = Pq(), t = Mq(), r = go(), n = tr(), i = $q();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return rv = a, rv;
}
var nv, aO;
function XT() {
  if (aO) return nv;
  aO = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return nv = e, nv;
}
var iv, oO;
function kq() {
  if (oO) return iv;
  oO = 1;
  function e(t) {
    return t !== t;
  }
  return iv = e, iv;
}
var av, uO;
function jq() {
  if (uO) return av;
  uO = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return av = e, av;
}
var ov, sO;
function Nq() {
  if (sO) return ov;
  sO = 1;
  var e = XT(), t = kq(), r = jq();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return ov = n, ov;
}
var uv, cO;
function Dq() {
  if (cO) return uv;
  cO = 1;
  var e = Nq();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return uv = t, uv;
}
var sv, lO;
function Lq() {
  if (lO) return sv;
  lO = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return sv = e, sv;
}
var cv, fO;
function qq() {
  if (fO) return cv;
  fO = 1;
  function e() {
  }
  return cv = e, cv;
}
var lv, dO;
function Bq() {
  if (dO) return lv;
  dO = 1;
  var e = KT(), t = qq(), r = Lm(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return lv = i, lv;
}
var fv, hO;
function Fq() {
  if (hO) return fv;
  hO = 1;
  var e = LT(), t = Dq(), r = Lq(), n = BT(), i = Bq(), a = Lm(), o = 200;
  function s(l, f, d) {
    var h = -1, v = t, g = l.length, x = !0, y = [], b = y;
    if (d)
      x = !1, v = r;
    else if (g >= o) {
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
var dv, pO;
function Wq() {
  if (pO) return dv;
  pO = 1;
  var e = vn(), t = Fq();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return dv = r, dv;
}
var zq = Wq();
const vO = /* @__PURE__ */ Je(zq);
function ZT(e, t, r) {
  return t === !0 ? vO(e, r) : Pe(t) ? vO(e, t) : e;
}
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
var Uq = ["ref"];
function gO(e, t) {
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
    t % 2 ? gO(Object(r), !0).forEach(function(n) {
      Dl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eC(n.key), n);
  }
}
function Gq(e, t, r) {
  return t && yO(e.prototype, t), r && yO(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kq(e, t, r) {
  return t = jc(t), Vq(e, JT() ? Reflect.construct(t, r || [], jc(e).constructor) : t.apply(e, r));
}
function Vq(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QT(e);
}
function JT() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (JT = function() {
    return !!e;
  })();
}
function jc(e) {
  return jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jc(e);
}
function QT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yq(e, t) {
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
  return t = eC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eC(e) {
  var t = Xq(e, "string");
  return Fa(t) == "symbol" ? t : String(t);
}
function Xq(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zq(e, t) {
  if (e == null) return {};
  var r = Jq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Jq(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Qq(e) {
  return e.value;
}
function eB(e, t) {
  if (/* @__PURE__ */ $.isValidElement(e))
    return /* @__PURE__ */ $.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ $.createElement(e, t);
  t.ref;
  var r = Zq(t, Uq);
  return /* @__PURE__ */ $.createElement(Dm, r);
}
var mO = 1, Wa = /* @__PURE__ */ function(e) {
  Yq(t, e);
  function t() {
    var r;
    Hq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = Kq(this, t, [].concat(i)), Dl(QT(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return Gq(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > mO || Math.abs(i.height - this.lastBoundingBox.height) > mO) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, l = i.margin, f = i.chartWidth, d = i.chartHeight, h, v;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var g = this.getBBoxSnapshot();
          h = {
            left: ((f || 0) - g.width) / 2
          };
        } else
          h = o === "right" ? {
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
      var n = this, i = this.props, a = i.content, o = i.width, s = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = ji(ji({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ $.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, eB(a, ji(ji({}, this.props), {}, {
        payload: ZT(d, f, Qq)
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
var hv, bO;
function tB() {
  if (bO) return hv;
  bO = 1;
  var e = ts(), t = qm(), r = tr(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return hv = i, hv;
}
var pv, xO;
function tC() {
  if (xO) return pv;
  xO = 1;
  var e = WT(), t = tB();
  function r(n, i, a, o, s) {
    var l = -1, f = n.length;
    for (a || (a = t), s || (s = []); ++l < f; ) {
      var d = n[l];
      i > 0 && a(d) ? i > 1 ? r(d, i - 1, a, o, s) : e(s, d) : o || (s[s.length] = d);
    }
    return s;
  }
  return pv = r, pv;
}
var vv, wO;
function rB() {
  if (wO) return vv;
  wO = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), s = i(r), l = s.length; l--; ) {
        var f = s[t ? l : ++a];
        if (n(o[f], f, o) === !1)
          break;
      }
      return r;
    };
  }
  return vv = e, vv;
}
var gv, _O;
function nB() {
  if (_O) return gv;
  _O = 1;
  var e = rB(), t = e();
  return gv = t, gv;
}
var yv, OO;
function rC() {
  if (OO) return yv;
  OO = 1;
  var e = nB(), t = Nl();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return yv = r, yv;
}
var mv, SO;
function iB() {
  if (SO) return mv;
  SO = 1;
  var e = ns();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, s = n ? o : -1, l = Object(i); (n ? s-- : ++s < o) && a(l[s], s, l) !== !1; )
        ;
      return i;
    };
  }
  return mv = t, mv;
}
var bv, AO;
function zm() {
  if (AO) return bv;
  AO = 1;
  var e = rC(), t = iB(), r = t(e);
  return bv = r, bv;
}
var xv, PO;
function nC() {
  if (PO) return xv;
  PO = 1;
  var e = zm(), t = ns();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, l, f) {
      o[++a] = i(s, l, f);
    }), o;
  }
  return xv = r, xv;
}
var wv, EO;
function aB() {
  if (EO) return wv;
  EO = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return wv = e, wv;
}
var _v, TO;
function oB() {
  if (TO) return _v;
  TO = 1;
  var e = ho();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, s = e(r), l = n !== void 0, f = n === null, d = n === n, h = e(n);
      if (!f && !h && !s && r > n || s && l && d && !f && !h || a && l && d || !i && d || !o)
        return 1;
      if (!a && !s && !h && r < n || h && i && o && !a && !s || f && i && o || !l && o || !d)
        return -1;
    }
    return 0;
  }
  return _v = t, _v;
}
var Ov, CO;
function uB() {
  if (CO) return Ov;
  CO = 1;
  var e = oB();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, s = n.criteria, l = o.length, f = i.length; ++a < l; ) {
      var d = e(o[a], s[a]);
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
var Sv, MO;
function sB() {
  if (MO) return Sv;
  MO = 1;
  var e = Cm(), t = Mm(), r = vn(), n = nC(), i = aB(), a = UT(), o = uB(), s = go(), l = tr();
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
      return o(y, b, v);
    });
  }
  return Sv = f, Sv;
}
var Av, IO;
function cB() {
  if (IO) return Av;
  IO = 1;
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
var Pv, RO;
function lB() {
  if (RO) return Pv;
  RO = 1;
  var e = cB(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, s = -1, l = t(o.length - i, 0), f = Array(l); ++s < l; )
        f[s] = o[i + s];
      s = -1;
      for (var d = Array(i + 1); ++s < i; )
        d[s] = o[s];
      return d[i] = a(f), e(n, this, d);
    };
  }
  return Pv = r, Pv;
}
var Ev, $O;
function fB() {
  if ($O) return Ev;
  $O = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Ev = e, Ev;
}
var Tv, kO;
function iC() {
  if (kO) return Tv;
  kO = 1;
  var e = ia(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Tv = t, Tv;
}
var Cv, jO;
function dB() {
  if (jO) return Cv;
  jO = 1;
  var e = fB(), t = iC(), r = go(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Cv = n, Cv;
}
var Mv, NO;
function hB() {
  if (NO) return Mv;
  NO = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var s = r(), l = t - (s - o);
      if (o = s, l > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Mv = n, Mv;
}
var Iv, DO;
function pB() {
  if (DO) return Iv;
  DO = 1;
  var e = dB(), t = hB(), r = t(e);
  return Iv = r, Iv;
}
var Rv, LO;
function vB() {
  if (LO) return Rv;
  LO = 1;
  var e = go(), t = lB(), r = pB();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Rv = n, Rv;
}
var $v, qO;
function Ll() {
  if (qO) return $v;
  qO = 1;
  var e = Pm(), t = ns(), r = Bm(), n = xi();
  function i(a, o, s) {
    if (!n(s))
      return !1;
    var l = typeof o;
    return (l == "number" ? t(s) && r(o, s.length) : l == "string" && o in s) ? e(s[o], a) : !1;
  }
  return $v = i, $v;
}
var kv, BO;
function gB() {
  if (BO) return kv;
  BO = 1;
  var e = tC(), t = sB(), r = vB(), n = Ll(), i = r(function(a, o) {
    if (a == null)
      return [];
    var s = o.length;
    return s > 1 && n(a, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return kv = i, kv;
}
var yB = gB();
const Um = /* @__PURE__ */ Je(yB);
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
function mB(e, t) {
  return _B(e) || wB(e, t) || xB(e, t) || bB();
}
function bB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xB(e, t) {
  if (e) {
    if (typeof e == "string") return FO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return FO(e, t);
  }
}
function FO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function _B(e) {
  if (Array.isArray(e)) return e;
}
function WO(e, t) {
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
    t % 2 ? WO(Object(r), !0).forEach(function(n) {
      OB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : WO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OB(e, t, r) {
  return t = SB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SB(e) {
  var t = AB(e, "string");
  return mu(t) == "symbol" ? t : String(t);
}
function AB(e, t) {
  if (mu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PB(e) {
  return Array.isArray(e) && Pt(e[0]) && Pt(e[1]) ? e.join(" ~ ") : e;
}
var EB = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, x = t.labelClassName, y = t.label, b = t.labelFormatter, S = t.accessibilityLayer, O = S === void 0 ? !1 : S, A = function() {
    if (d && d.length) {
      var j = {
        padding: 0,
        margin: 0
      }, q = (v ? Um(d, v) : d).map(function(F, V) {
        if (F.type === "none")
          return null;
        var U = jv({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: F.color || "#000"
        }, s), J = F.formatter || h || PB, G = F.value, ue = F.name, H = G, Z = ue;
        if (J && H != null && Z != null) {
          var ae = J(G, ue, F, V, d);
          if (Array.isArray(ae)) {
            var ce = mB(ae, 2);
            H = ce[0], Z = ce[1];
          } else
            H = ae;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ $.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(V),
            style: U
          }, Pt(Z) ? /* @__PURE__ */ $.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Z) : null, Pt(Z) ? /* @__PURE__ */ $.createElement("span", {
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
  return t = TB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TB(e) {
  var t = CB(e, "string");
  return bu(t) == "symbol" ? t : String(t);
}
function CB(e, t) {
  if (bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ko = "recharts-tooltip-wrapper", MB = {
  visibility: "hidden"
};
function IB(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Ie(Ko, sc(sc(sc(sc({}, "".concat(Ko, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(Ko, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(Ko, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(Ko, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function zO(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && oe(a[n]))
    return a[n];
  var d = r[n] - s - i, h = r[n] + i;
  if (t[n])
    return o[n] ? d : h;
  if (o[n]) {
    var v = d, g = l[n];
    return v < g ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var x = h + s, y = l[n] + f;
  return x > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function RB(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function $B(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, f, d, h;
  return o.height > 0 && o.width > 0 && r ? (d = zO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = zO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = RB({
    translateX: d,
    translateY: h,
    useTranslate3d: s
  })) : f = MB, {
    cssProperties: f,
    cssClasses: IB({
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
function UO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function HO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? UO(Object(r), !0).forEach(function(n) {
      fy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oC(n.key), n);
  }
}
function NB(e, t, r) {
  return t && jB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DB(e, t, r) {
  return t = Nc(t), LB(e, aC() ? Reflect.construct(t, r || [], Nc(e).constructor) : t.apply(e, r));
}
function LB(e, t) {
  if (t && (za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cy(e);
}
function aC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (aC = function() {
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
function qB(e, t) {
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
  return t = oC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oC(e) {
  var t = BB(e, "string");
  return za(t) == "symbol" ? t : String(t);
}
function BB(e, t) {
  if (za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GO = 1, FB = /* @__PURE__ */ function(e) {
  qB(t, e);
  function t() {
    var r;
    kB(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = DB(this, t, [].concat(i)), fy(cy(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), fy(cy(r), "handleKeyDown", function(o) {
      if (o.key === "Escape") {
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
  return NB(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > GO || Math.abs(n.height - this.state.lastBoundingBox.height) > GO) && this.setState({
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
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, x = i.position, y = i.reverseDirection, b = i.useTranslate3d, S = i.viewBox, O = i.wrapperStyle, A = $B({
        allowEscapeViewBox: o,
        coordinate: d,
        offsetTopLeft: g,
        position: x,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: S
      }), _ = A.cssClasses, m = A.cssProperties, E = HO(HO({
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
}(Dr), WB = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Xr = {
  isSsr: WB(),
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
function KO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function VO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? KO(Object(r), !0).forEach(function(n) {
      Hm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : KO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sC(n.key), n);
  }
}
function HB(e, t, r) {
  return t && UB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function GB(e, t, r) {
  return t = Dc(t), KB(e, uC() ? Reflect.construct(t, r || [], Dc(e).constructor) : t.apply(e, r));
}
function KB(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VB(e);
}
function VB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uC = function() {
    return !!e;
  })();
}
function Dc(e) {
  return Dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dc(e);
}
function YB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dy(e, t);
}
function dy(e, t) {
  return dy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dy(e, t);
}
function Hm(e, t, r) {
  return t = sC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sC(e) {
  var t = XB(e, "string");
  return Ua(t) == "symbol" ? t : String(t);
}
function XB(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZB(e) {
  return e.dataKey;
}
function JB(e, t) {
  return /* @__PURE__ */ $.isValidElement(e) ? /* @__PURE__ */ $.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ $.createElement(e, t) : /* @__PURE__ */ $.createElement(EB, t);
}
var un = /* @__PURE__ */ function(e) {
  YB(t, e);
  function t() {
    return zB(this, t), GB(this, t, arguments);
  }
  return HB(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, x = i.payload, y = i.payloadUniqBy, b = i.position, S = i.reverseDirection, O = i.useTranslate3d, A = i.viewBox, _ = i.wrapperStyle, m = x ?? [];
      h && m.length && (m = ZT(x.filter(function(T) {
        return T.value != null && (T.hide !== !0 || n.props.includeHidden);
      }), y, ZB));
      var E = m.length > 0;
      return /* @__PURE__ */ $.createElement(FB, {
        allowEscapeViewBox: o,
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
      }, JB(f, VO(VO({}, this.props), {}, {
        payload: m
      })));
    }
  }]), t;
}(Dr);
Hm(un, "displayName", "Tooltip");
Hm(un, "defaultProps", {
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
var Nv, YO;
function QB() {
  if (YO) return Nv;
  YO = 1;
  var e = pn(), t = function() {
    return e.Date.now();
  };
  return Nv = t, Nv;
}
var Dv, XO;
function eF() {
  if (XO) return Dv;
  XO = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Dv = t, Dv;
}
var Lv, ZO;
function tF() {
  if (ZO) return Lv;
  ZO = 1;
  var e = eF(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Lv = r, Lv;
}
var qv, JO;
function cC() {
  if (JO) return qv;
  JO = 1;
  var e = tF(), t = xi(), r = ho(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
    return h || o.test(f) ? s(f.slice(2), h ? 2 : 8) : i.test(f) ? n : +f;
  }
  return qv = l, qv;
}
var Bv, QO;
function rF() {
  if (QO) return Bv;
  QO = 1;
  var e = xi(), t = QB(), r = cC(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(s, l, f) {
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
  return Bv = o, Bv;
}
var Fv, eS;
function nF() {
  if (eS) return Fv;
  eS = 1;
  var e = rF(), t = xi(), r = "Expected a function";
  function n(i, a, o) {
    var s = !0, l = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (s = "leading" in o ? !!o.leading : s, l = "trailing" in o ? !!o.trailing : l), e(i, a, {
      leading: s,
      maxWait: a,
      trailing: l
    });
  }
  return Fv = n, Fv;
}
var iF = nF();
const lC = /* @__PURE__ */ Je(iF);
function xu(e) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xu(e);
}
function tS(e, t) {
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
    t % 2 ? tS(Object(r), !0).forEach(function(n) {
      aF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aF(e, t, r) {
  return t = oF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oF(e) {
  var t = uF(e, "string");
  return xu(t) == "symbol" ? t : String(t);
}
function uF(e, t) {
  if (xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sF(e, t) {
  return dF(e) || fF(e, t) || lF(e, t) || cF();
}
function cF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lF(e, t) {
  if (e) {
    if (typeof e == "string") return rS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rS(e, t);
  }
}
function rS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function dF(e) {
  if (Array.isArray(e)) return e;
}
var hF = /* @__PURE__ */ Nn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, x = e.debounce, y = x === void 0 ? 0 : x, b = e.id, S = e.className, O = e.onResize, A = e.style, _ = A === void 0 ? {} : A, m = Zr(null), E = Zr();
  E.current = O, GE(t, function() {
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
  }), I = sF(T, 2), B = I[0], L = I[1], N = Ki(function(q, F) {
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
      var H, Z = ue[0].contentRect, ae = Z.width, ce = Z.height;
      N(ae, ce), (H = E.current) === null || H === void 0 || H.call(E, ae, ce);
    };
    y > 0 && (q = lC(q, y, {
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
    Yr(Wi(o) || Wi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l), Yr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var V = Wi(o) ? q : o, U = Wi(l) ? F : l;
    r && r > 0 && (V ? U = V / r : U && (V = U * r), v && U > v && (U = v)), Yr(V > 0 || U > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, V, U, o, l, d, h, r);
    var J = !Array.isArray(g) && Kg.isElement(g) && $n(g.type).endsWith("Chart");
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
  }, [r, g, l, v, h, d, B, o]);
  return /* @__PURE__ */ $.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: Ie("recharts-responsive-container", S),
    style: cc(cc({}, _), {}, {
      width: o,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: m
  }, j);
}), Gm = function(t) {
  return null;
};
Gm.displayName = "Cell";
function wu(e) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wu(e);
}
function nS(e, t) {
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
    t % 2 ? nS(Object(r), !0).forEach(function(n) {
      pF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pF(e, t, r) {
  return t = vF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vF(e) {
  var t = gF(e, "string");
  return wu(t) == "symbol" ? t : String(t);
}
function gF(e, t) {
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
}, yF = 2e3, mF = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, iS = "recharts_measurement_span";
function bF(e) {
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
  var n = bF(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById(iS);
    a || (a = document.createElement("span"), a.setAttribute("id", iS), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = hy(hy({}, mF), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = {
      width: s.width,
      height: s.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > yF && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, xF = function(t) {
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
  return SF(e) || OF(e, t) || _F(e, t) || wF();
}
function wF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _F(e, t) {
  if (e) {
    if (typeof e == "string") return aS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return aS(e, t);
  }
}
function aS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function SF(e) {
  if (Array.isArray(e)) return e;
}
function AF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, EF(n.key), n);
  }
}
function PF(e, t, r) {
  return t && oS(e.prototype, t), r && oS(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function EF(e) {
  var t = TF(e, "string");
  return _u(t) == "symbol" ? t : String(t);
}
function TF(e, t) {
  if (_u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, sS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, CF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, MF = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, fC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, IF = Object.keys(fC), Ca = "NaN";
function RF(e, t) {
  return e * fC[t];
}
var lc = /* @__PURE__ */ function() {
  function e(t, r) {
    AF(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !CF.test(r) && (this.num = NaN, this.unit = ""), IF.includes(r) && (this.num = RF(t, r), this.unit = "px");
  }
  return PF(e, [{
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
      var n, i = (n = MF.exec(r)) !== null && n !== void 0 ? n : [], a = Lc(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]), e;
}();
function dC(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = uS.exec(t)) !== null && r !== void 0 ? r : [], i = Lc(n, 4), a = i[1], o = i[2], s = i[3], l = lc.parse(a ?? ""), f = lc.parse(s ?? ""), d = o === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(uS, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = sS.exec(t)) !== null && h !== void 0 ? h : [], g = Lc(v, 4), x = g[1], y = g[2], b = g[3], S = lc.parse(x ?? ""), O = lc.parse(b ?? ""), A = y === "+" ? S.add(O) : S.subtract(O);
    if (A.isNaN())
      return Ca;
    t = t.replace(sS, A.toString());
  }
  return t;
}
var cS = /\(([^()]*)\)/;
function $F(e) {
  for (var t = e; t.includes("("); ) {
    var r = cS.exec(t), n = Lc(r, 2), i = n[1];
    t = t.replace(cS, dC(i));
  }
  return t;
}
function kF(e) {
  var t = e.replace(/\s+/g, "");
  return t = $F(t), t = dC(t), t;
}
function jF(e) {
  try {
    return kF(e);
  } catch {
    return Ca;
  }
}
function Wv(e) {
  var t = jF(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var NF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], DF = ["dx", "dy", "angle", "className", "breakAll"];
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
function lS(e, t) {
  if (e == null) return {};
  var r = LF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LF(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fS(e, t) {
  return WF(e) || FF(e, t) || BF(e, t) || qF();
}
function qF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BF(e, t) {
  if (e) {
    if (typeof e == "string") return dS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dS(e, t);
  }
}
function dS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FF(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function WF(e) {
  if (Array.isArray(e)) return e;
}
var hC = /[ \f\n\r\t\v\u2028\u2029]+/, pC = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(hC));
    var o = a.map(function(l) {
      return {
        word: l,
        width: su(l, i).width
      };
    }), s = n ? 0 : su(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, zF = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, l = t.style, f = t.breakAll, d = oe(o), h = s, v = function() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return V.reduce(function(U, J) {
      var G = J.word, ue = J.width, H = U[U.length - 1];
      if (H && (i == null || a || H.width + ue + n < Number(i)))
        H.words.push(G), H.width += ue + n;
      else {
        var Z = {
          words: [G],
          width: ue
        };
        U.push(Z);
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
    var U = h.slice(0, V), J = pC({
      breakAll: f,
      style: l,
      children: U + y
    }).wordsWithComputedWidth, G = v(J), ue = G.length > o || x(G).width > Number(i);
    return [ue, G];
  }, S = 0, O = h.length - 1, A = 0, _; S <= O && A <= h.length - 1; ) {
    var m = Math.floor((S + O) / 2), E = m - 1, T = b(E), I = fS(T, 2), B = I[0], L = I[1], N = b(m), j = fS(N, 1), q = j[0];
    if (!B && !q && (S = m + 1), B && q && (O = m - 1), !B && q) {
      _ = L;
      break;
    }
    A++;
  }
  return _ || g;
}, hS = function(t) {
  var r = Te(t) ? [] : t.toString().split(hC);
  return [{
    words: r
  }];
}, UF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Xr.isSsr) {
    var l, f, d = pC({
      breakAll: o,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return hS(i);
    return zF({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, l, f, r, n);
  }
  return hS(i);
}, pS = "#808080", pi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, x = t.verticalAnchor, y = x === void 0 ? "end" : x, b = t.fill, S = b === void 0 ? pS : b, O = lS(t, NF), A = lo(function() {
    return UF({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, m = O.dy, E = O.angle, T = O.className, I = O.breakAll, B = lS(O, DF);
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
    fill: S.includes("url") ? pS : S
  }), A.map(function(U, J) {
    var G = U.words.join(I ? "" : " ");
    return /* @__PURE__ */ $.createElement("tspan", {
      x: L,
      dy: J === 0 ? j : s,
      key: G
    }, G);
  }));
};
function hi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function HF(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Km(e) {
  let t, r, n;
  e.length !== 2 ? (t = hi, r = (s, l) => hi(e(s), l), n = (s, l) => e(s) - l) : (t = e === hi || e === HF ? e : GF, r = e, n = e);
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
  function o(s, l, f = 0, d = s.length) {
    const h = i(s, l, f, d - 1);
    return h > f && n(s[h - 1], l) > -n(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function GF() {
  return 0;
}
function vC(e) {
  return e === null ? NaN : +e;
}
function* KF(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const VF = Km(hi), is = VF.right;
Km(vC).center;
class vS extends Map {
  constructor(t, r = ZF) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(gS(this, t));
  }
  has(t) {
    return super.has(gS(this, t));
  }
  set(t, r) {
    return super.set(YF(this, t), r);
  }
  delete(t) {
    return super.delete(XF(this, t));
  }
}
function gS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function YF({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function XF({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function ZF(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function JF(e = hi) {
  if (e === hi) return gC;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function gC(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const QF = Math.sqrt(50), eW = Math.sqrt(10), tW = Math.sqrt(2);
function qc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= QF ? 10 : a >= eW ? 5 : a >= tW ? 2 : 1;
  let s, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, s = Math.round(e * f), l = Math.round(t * f), s / f < e && ++s, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * o, s = Math.round(e / f), l = Math.round(t / f), s * f < e && ++s, l * f > t && --l), l < s && 0.5 <= r && r < 2 ? qc(e, t, r * 2) : [s, l, f];
}
function vy(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? qc(t, e, r) : qc(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n)
    if (o < 0) for (let f = 0; f < s; ++f) l[f] = (a - f) / -o;
    else for (let f = 0; f < s; ++f) l[f] = (a - f) * o;
  else if (o < 0) for (let f = 0; f < s; ++f) l[f] = (i + f) / -o;
  else for (let f = 0; f < s; ++f) l[f] = (i + f) * o;
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
function yS(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function mS(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function yC(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? gC : JF(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), x = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      yC(e, t, g, x, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Vo(e, r, t), i(e[n], a) > 0 && Vo(e, r, n); o < s; ) {
      for (Vo(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
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
function rW(e, t, r) {
  if (e = Float64Array.from(KF(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return mS(e);
    if (t >= 1) return yS(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = yS(yC(e, a).subarray(0, a + 1)), s = mS(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function nW(e, t, r = vC) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function iW(e, t, r) {
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
function Un(e, t) {
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
function Vm() {
  var e = new vS(), t = [], r = [], n = my;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== my) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new vS();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Vm(t, r).unknown(n);
  }, Lr.apply(i, arguments), i;
}
function Ou() {
  var e = Vm().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, x = g ? i : n, y = g ? n : i;
    a = (y - x) / Math.max(1, v - l + f * 2), s && (a = Math.floor(a)), x += (y - x - a * (v - l)) * d, o = a * (1 - l), s && (x = Math.round(x), o = Math.round(o));
    var b = iW(v).map(function(S) {
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
    return o;
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
function mC(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return mC(t());
  }, e;
}
function cu() {
  return mC(Ou.apply(null, arguments).paddingInner(1));
}
function Ym(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function bC(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function as() {
}
var Su = 0.7, Bc = 1 / Su, Na = "\\s*([+-]?\\d+)\\s*", Au = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", aW = /^#([0-9a-f]{3,8})$/, oW = new RegExp(`^rgb\\(${Na},${Na},${Na}\\)$`), uW = new RegExp(`^rgb\\(${ln},${ln},${ln}\\)$`), sW = new RegExp(`^rgba\\(${Na},${Na},${Na},${Au}\\)$`), cW = new RegExp(`^rgba\\(${ln},${ln},${ln},${Au}\\)$`), lW = new RegExp(`^hsl\\(${Au},${ln},${ln}\\)$`), fW = new RegExp(`^hsla\\(${Au},${ln},${ln},${Au}\\)$`), bS = {
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
Ym(as, Pu, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xS,
  // Deprecated! Use color.formatHex.
  formatHex: xS,
  formatHex8: dW,
  formatHsl: hW,
  formatRgb: wS,
  toString: wS
});
function xS() {
  return this.rgb().formatHex();
}
function dW() {
  return this.rgb().formatHex8();
}
function hW() {
  return xC(this).formatHsl();
}
function wS() {
  return this.rgb().formatRgb();
}
function Pu(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = aW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? _S(t) : r === 3 ? new Jt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? fc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? fc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = oW.exec(e)) ? new Jt(t[1], t[2], t[3], 1) : (t = uW.exec(e)) ? new Jt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sW.exec(e)) ? fc(t[1], t[2], t[3], t[4]) : (t = cW.exec(e)) ? fc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = lW.exec(e)) ? AS(t[1], t[2] / 100, t[3] / 100, 1) : (t = fW.exec(e)) ? AS(t[1], t[2] / 100, t[3] / 100, t[4]) : bS.hasOwnProperty(e) ? _S(bS[e]) : e === "transparent" ? new Jt(NaN, NaN, NaN, 0) : null;
}
function _S(e) {
  return new Jt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Jt(e, t, r, n);
}
function pW(e) {
  return e instanceof as || (e = Pu(e)), e ? (e = e.rgb(), new Jt(e.r, e.g, e.b, e.opacity)) : new Jt();
}
function by(e, t, r, n) {
  return arguments.length === 1 ? pW(e) : new Jt(e, t, r, n ?? 1);
}
function Jt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Ym(Jt, by, bC(as, {
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
  hex: OS,
  // Deprecated! Use color.formatHex.
  formatHex: OS,
  formatHex8: vW,
  formatRgb: SS,
  toString: SS
}));
function OS() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}`;
}
function vW() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}${zi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function SS() {
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
function AS(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kr(e, t, r, n);
}
function xC(e) {
  if (e instanceof Kr) return new Kr(e.h, e.s, e.l, e.opacity);
  if (e instanceof as || (e = Pu(e)), !e) return new Kr();
  if (e instanceof Kr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Kr(o, s, l, e.opacity);
}
function gW(e, t, r, n) {
  return arguments.length === 1 ? xC(e) : new Kr(e, t, r, n ?? 1);
}
function Kr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Ym(Kr, gW, bC(as, {
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
    return new Kr(PS(this.h), dc(this.s), dc(this.l), Fc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${PS(this.h)}, ${dc(this.s) * 100}%, ${dc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function PS(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function dc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function zv(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Xm = (e) => () => e;
function yW(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function mW(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function bW(e) {
  return (e = +e) == 1 ? wC : function(t, r) {
    return r - t ? mW(t, r, e) : Xm(isNaN(t) ? r : t);
  };
}
function wC(e, t) {
  var r = t - e;
  return r ? yW(e, r) : Xm(isNaN(e) ? t : e);
}
const ES = function e(t) {
  var r = bW(t);
  function n(i, a) {
    var o = r((i = by(i)).r, (a = by(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), f = wC(i.opacity, a.opacity);
    return function(d) {
      return i.r = o(d), i.g = s(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function xW(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function wW(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _W(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = yo(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function OW(e, t) {
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
function SW(e, t) {
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
function AW(e) {
  return function() {
    return e;
  };
}
function PW(e) {
  return function(t) {
    return e(t) + "";
  };
}
function EW(e, t) {
  var r = xy.lastIndex = Uv.lastIndex = 0, n, i, a, o = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (n = xy.exec(e)) && (i = Uv.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Wc(n, i) })), r = Uv.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? PW(l[0].x) : AW(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) s[(h = l[d]).i] = h.x(f);
    return s.join("");
  });
}
function yo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Xm(t) : (r === "number" ? Wc : r === "string" ? (n = Pu(t)) ? (t = n, ES) : EW : t instanceof Pu ? ES : t instanceof Date ? OW : wW(t) ? xW : Array.isArray(t) ? _W : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? SW : Wc)(e, t);
}
function Zm(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function TW(e, t) {
  t === void 0 && (t = e, e = yo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function CW(e) {
  return function() {
    return e;
  };
}
function zc(e) {
  return +e;
}
var TS = [0, 1];
function Gt(e) {
  return e;
}
function wy(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : CW(isNaN(t) ? NaN : 0.5);
}
function MW(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function IW(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = wy(i, n), a = r(o, a)) : (n = wy(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function RW(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = wy(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var l = is(e, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function os(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ql() {
  var e = TS, t = TS, r = yo, n, i, a, o = Gt, s, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return o !== Gt && (o = MW(e[0], e[v - 1])), s = v > 2 ? RW : IW, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = s(e.map(n), t, r)))(n(o(v)));
  }
  return h.invert = function(v) {
    return o(i((f || (f = s(t, e.map(n), Wc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, zc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = Zm, d();
  }, h.clamp = function(v) {
    return arguments.length ? (o = v ? !0 : Gt, d()) : o !== Gt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, g) {
    return n = v, i = g, d();
  };
}
function Jm() {
  return ql()(Gt, Gt);
}
function $W(e) {
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
function kW(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function jW(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var NW = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Eu(e) {
  if (!(t = NW.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Qm({
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
Eu.prototype = Qm.prototype;
function Qm(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Qm.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function DW(e) {
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
var _C;
function LW(e, t) {
  var r = Uc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (_C = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Uc(e, Math.max(0, t + a - 1))[0];
}
function CS(e, t) {
  var r = Uc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const MS = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: $W,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => CS(e * 100, t),
  r: CS,
  s: LW,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function IS(e) {
  return e;
}
var RS = Array.prototype.map, $S = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qW(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? IS : kW(RS.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? IS : jW(RS.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = Eu(h);
    var v = h.fill, g = h.align, x = h.sign, y = h.symbol, b = h.zero, S = h.width, O = h.comma, A = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (O = !0, m = "g") : MS[m] || (A === void 0 && (A = 12), _ = !0, m = "g"), (b || v === "0" && g === "=") && (b = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", T = y === "$" ? n : /[%p]/.test(m) ? o : "", I = MS[m], B = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function L(N) {
      var j = E, q = T, F, V, U;
      if (m === "c")
        q = I(N) + q, N = "";
      else {
        N = +N;
        var J = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? l : I(Math.abs(N), A), _ && (N = DW(N)), J && +N == 0 && x !== "+" && (J = !1), j = (J ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + j, q = (m === "s" ? $S[8 + _C / 3] : "") + q + (J && x === "(" ? ")" : ""), B) {
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
    var g = f((h = Eu(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(Ha(v) / 3))) * 3, y = Math.pow(10, -x), b = $S[8 + x / 3];
    return function(S) {
      return g(y * S) + b;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var hc, eb, OC;
BW({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function BW(e) {
  return hc = qW(e), eb = hc.format, OC = hc.formatPrefix, hc;
}
function FW(e) {
  return Math.max(0, -Ha(Math.abs(e)));
}
function WW(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ha(t) / 3))) * 3 - Ha(Math.abs(e)));
}
function zW(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ha(t) - Ha(e)) + 1;
}
function SC(e, t, r, n) {
  var i = yy(e, t, r), a;
  switch (n = Eu(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = WW(i, o)) && (n.precision = a), OC(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = zW(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = FW(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return eb(n);
}
function wi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return vy(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return SC(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], l, f, d = 10;
    for (s < o && (f = o, o = s, s = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = gy(o, s, r), f === l)
        return n[i] = o, n[a] = s, t(n);
      if (f > 0)
        o = Math.floor(o / f) * f, s = Math.ceil(s / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, s = Math.floor(s * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function Hc() {
  var e = Jm();
  return e.copy = function() {
    return os(e, Hc());
  }, Lr.apply(e, arguments), wi(e);
}
function AC(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, zc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return AC(e).unknown(t);
  }, e = arguments.length ? Array.from(e, zc) : [0, 1], wi(r);
}
function PC(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function kS(e) {
  return Math.log(e);
}
function jS(e) {
  return Math.exp(e);
}
function UW(e) {
  return -Math.log(-e);
}
function HW(e) {
  return -Math.exp(-e);
}
function GW(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function KW(e) {
  return e === 10 ? GW : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function VW(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function NS(e) {
  return (t, r) => -e(-t, r);
}
function tb(e) {
  const t = e(kS, jS), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = VW(n), a = KW(n), r()[0] < 0 ? (i = NS(i), a = NS(a), e(UW, HW)) : e(kS, jS), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
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
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Eu(l)).precision == null && (l.trim = !0), l = eb(l)), s === 1 / 0) return l;
    const f = Math.max(1, n * s / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(PC(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function EC() {
  const e = tb(ql()).domain([1, 10]);
  return e.copy = () => os(e, EC()).base(e.base()), Lr.apply(e, arguments), e;
}
function DS(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function LS(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function rb(e) {
  var t = 1, r = e(DS(t), LS(t));
  return r.constant = function(n) {
    return arguments.length ? e(DS(t = +n), LS(t)) : t;
  }, wi(r);
}
function TC() {
  var e = rb(ql());
  return e.copy = function() {
    return os(e, TC()).constant(e.constant());
  }, Lr.apply(e, arguments);
}
function qS(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function YW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function XW(e) {
  return e < 0 ? -e * e : e * e;
}
function nb(e) {
  var t = e(Gt, Gt), r = 1;
  function n() {
    return r === 1 ? e(Gt, Gt) : r === 0.5 ? e(YW, XW) : e(qS(r), qS(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, wi(t);
}
function ib() {
  var e = nb(ql());
  return e.copy = function() {
    return os(e, ib()).exponent(e.exponent());
  }, Lr.apply(e, arguments), e;
}
function ZW() {
  return ib.apply(null, arguments).exponent(0.5);
}
function BS(e) {
  return Math.sign(e) * e * e;
}
function JW(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function CC() {
  var e = Jm(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = JW(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(BS(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, zc)).map(BS)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return CC(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Lr.apply(i, arguments), wi(i);
}
function MC() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = nW(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[is(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(hi), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return MC().domain(e).range(t).unknown(n);
  }, Lr.apply(a, arguments);
}
function IC() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[is(n, l, 0, r)] : a;
  }
  function s() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return IC().domain([e, t]).range(i).unknown(a);
  }, Lr.apply(wi(o), arguments);
}
function RC() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[is(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return RC().domain(e).range(t).unknown(r);
  }, Lr.apply(i, arguments);
}
const Hv = /* @__PURE__ */ new Date(), Gv = /* @__PURE__ */ new Date();
function Et(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const l = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (f < a && a < o);
    return l;
  }, i.filter = (a) => Et((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Hv.setTime(+a), Gv.setTime(+o), e(Hv), e(Gv), Math.floor(r(Hv, Gv))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
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
const Mn = 1e3, Ir = Mn * 60, In = Ir * 60, Dn = In * 24, ab = Dn * 7, FS = Dn * 30, Kv = Dn * 365, Ui = Et((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Mn);
}, (e, t) => (t - e) / Mn, (e) => e.getUTCSeconds());
Ui.range;
const ob = Et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mn);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
ob.range;
const ub = Et((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
ub.range;
const sb = Et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mn - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getHours());
sb.range;
const cb = Et((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getUTCHours());
cb.range;
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
const $C = Et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => Math.floor(e / Dn));
$C.range;
function oa(e) {
  return Et((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / ab);
}
const Fl = oa(0), Kc = oa(1), QW = oa(2), ez = oa(3), Ga = oa(4), tz = oa(5), rz = oa(6);
Fl.range;
Kc.range;
QW.range;
ez.range;
Ga.range;
tz.range;
rz.range;
function ua(e) {
  return Et((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ab);
}
const Wl = ua(0), Vc = ua(1), nz = ua(2), iz = ua(3), Ka = ua(4), az = ua(5), oz = ua(6);
Wl.range;
Vc.range;
nz.range;
iz.range;
Ka.range;
az.range;
oz.range;
const lb = Et((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
lb.range;
const fb = Et((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
fb.range;
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
function kC(e, t, r, n, i, a) {
  const o = [
    [Ui, 1, Mn],
    [Ui, 5, 5 * Mn],
    [Ui, 15, 15 * Mn],
    [Ui, 30, 30 * Mn],
    [a, 1, Ir],
    [a, 5, 5 * Ir],
    [a, 15, 15 * Ir],
    [a, 30, 30 * Ir],
    [i, 1, In],
    [i, 3, 3 * In],
    [i, 6, 6 * In],
    [i, 12, 12 * In],
    [n, 1, Dn],
    [n, 2, 2 * Dn],
    [r, 1, ab],
    [t, 1, FS],
    [t, 3, 3 * FS],
    [e, 1, Kv]
  ];
  function s(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), x = g ? g.range(f, +d + 1) : [];
    return v ? x.reverse() : x;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Km(([, , b]) => b).right(o, v);
    if (g === o.length) return e.every(yy(f / Kv, d / Kv, h));
    if (g === 0) return Gc.every(Math.max(yy(f, d, h), 1));
    const [x, y] = o[v / o[g - 1][2] < o[g][2] / v ? g - 1 : g];
    return x.every(y);
  }
  return [s, l];
}
const [uz, sz] = kC(qn, fb, Wl, $C, cb, ub), [cz, lz] = kC(Ln, lb, Fl, us, sb, ob);
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
function fz(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, l = e.shortMonths, f = Xo(i), d = Zo(i), h = Xo(a), v = Zo(a), g = Xo(o), x = Zo(o), y = Xo(s), b = Zo(s), S = Xo(l), O = Zo(l), A = {
    a: J,
    A: G,
    b: ue,
    B: H,
    c: null,
    d: KS,
    e: KS,
    f: kz,
    g: Uz,
    G: Gz,
    H: Iz,
    I: Rz,
    j: $z,
    L: jC,
    m: jz,
    M: Nz,
    p: Z,
    q: ae,
    Q: XS,
    s: ZS,
    S: Dz,
    u: Lz,
    U: qz,
    V: Bz,
    w: Fz,
    W: Wz,
    x: null,
    X: null,
    y: zz,
    Y: Hz,
    Z: Kz,
    "%": YS
  }, _ = {
    a: ce,
    A: he,
    b: ye,
    B: be,
    c: null,
    d: VS,
    e: VS,
    f: Zz,
    g: uU,
    G: cU,
    H: Vz,
    I: Yz,
    j: Xz,
    L: DC,
    m: Jz,
    M: Qz,
    p: le,
    q: ge,
    Q: XS,
    s: ZS,
    S: eU,
    u: tU,
    U: rU,
    V: nU,
    w: iU,
    W: aU,
    x: null,
    X: null,
    y: oU,
    Y: sU,
    Z: lU,
    "%": YS
  }, m = {
    a: L,
    A: N,
    b: j,
    B: q,
    c: F,
    d: HS,
    e: HS,
    f: Ez,
    g: US,
    G: zS,
    H: GS,
    I: GS,
    j: Oz,
    L: Pz,
    m: _z,
    M: Sz,
    p: B,
    q: wz,
    Q: Cz,
    s: Mz,
    S: Az,
    u: gz,
    U: yz,
    V: mz,
    w: vz,
    W: bz,
    x: V,
    X: U,
    y: US,
    Y: zS,
    Z: xz,
    "%": Tz
  };
  A.x = E(r, A), A.X = E(n, A), A.c = E(t, A), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(te, se) {
    return function(ve) {
      var k = [], Ee = -1, we = 0, Fe = te.length, ct, at, Kt;
      for (ve instanceof Date || (ve = /* @__PURE__ */ new Date(+ve)); ++Ee < Fe; )
        te.charCodeAt(Ee) === 37 && (k.push(te.slice(we, Ee)), (at = WS[ct = te.charAt(++Ee)]) != null ? ct = te.charAt(++Ee) : at = ct === "e" ? " " : "0", (Kt = se[ct]) && (ct = Kt(ve, at)), k.push(ct), we = Ee + 1);
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
        if (ct = se.charAt(Ee++), at = m[ct in WS ? se.charAt(Ee++) : ct], !at || (k = at(te, ve, k)) < 0) return -1;
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
    return o[te.getDay()];
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
  function Z(te) {
    return i[+(te.getHours() >= 12)];
  }
  function ae(te) {
    return 1 + ~~(te.getMonth() / 3);
  }
  function ce(te) {
    return o[te.getUTCDay()];
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
var WS = { "-": "", _: " ", 0: "0" }, It = /^\s*\d+/, dz = /^%/, hz = /[\\^$*+?|[\]().{}]/g;
function ze(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function pz(e) {
  return e.replace(hz, "\\$&");
}
function Xo(e) {
  return new RegExp("^(?:" + e.map(pz).join("|") + ")", "i");
}
function Zo(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function vz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function gz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function yz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function mz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function bz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function zS(e, t, r) {
  var n = It.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function US(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function xz(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function wz(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function _z(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function HS(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Oz(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function GS(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Sz(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Az(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Pz(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Ez(e, t, r) {
  var n = It.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Tz(e, t, r) {
  var n = dz.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Cz(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Mz(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function KS(e, t) {
  return ze(e.getDate(), t, 2);
}
function Iz(e, t) {
  return ze(e.getHours(), t, 2);
}
function Rz(e, t) {
  return ze(e.getHours() % 12 || 12, t, 2);
}
function $z(e, t) {
  return ze(1 + us.count(Ln(e), e), t, 3);
}
function jC(e, t) {
  return ze(e.getMilliseconds(), t, 3);
}
function kz(e, t) {
  return jC(e, t) + "000";
}
function jz(e, t) {
  return ze(e.getMonth() + 1, t, 2);
}
function Nz(e, t) {
  return ze(e.getMinutes(), t, 2);
}
function Dz(e, t) {
  return ze(e.getSeconds(), t, 2);
}
function Lz(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function qz(e, t) {
  return ze(Fl.count(Ln(e) - 1, e), t, 2);
}
function NC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ga(e) : Ga.ceil(e);
}
function Bz(e, t) {
  return e = NC(e), ze(Ga.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function Fz(e) {
  return e.getDay();
}
function Wz(e, t) {
  return ze(Kc.count(Ln(e) - 1, e), t, 2);
}
function zz(e, t) {
  return ze(e.getFullYear() % 100, t, 2);
}
function Uz(e, t) {
  return e = NC(e), ze(e.getFullYear() % 100, t, 2);
}
function Hz(e, t) {
  return ze(e.getFullYear() % 1e4, t, 4);
}
function Gz(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ga(e) : Ga.ceil(e), ze(e.getFullYear() % 1e4, t, 4);
}
function Kz(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ze(t / 60 | 0, "0", 2) + ze(t % 60, "0", 2);
}
function VS(e, t) {
  return ze(e.getUTCDate(), t, 2);
}
function Vz(e, t) {
  return ze(e.getUTCHours(), t, 2);
}
function Yz(e, t) {
  return ze(e.getUTCHours() % 12 || 12, t, 2);
}
function Xz(e, t) {
  return ze(1 + Bl.count(qn(e), e), t, 3);
}
function DC(e, t) {
  return ze(e.getUTCMilliseconds(), t, 3);
}
function Zz(e, t) {
  return DC(e, t) + "000";
}
function Jz(e, t) {
  return ze(e.getUTCMonth() + 1, t, 2);
}
function Qz(e, t) {
  return ze(e.getUTCMinutes(), t, 2);
}
function eU(e, t) {
  return ze(e.getUTCSeconds(), t, 2);
}
function tU(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function rU(e, t) {
  return ze(Wl.count(qn(e) - 1, e), t, 2);
}
function LC(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ka(e) : Ka.ceil(e);
}
function nU(e, t) {
  return e = LC(e), ze(Ka.count(qn(e), e) + (qn(e).getUTCDay() === 4), t, 2);
}
function iU(e) {
  return e.getUTCDay();
}
function aU(e, t) {
  return ze(Vc.count(qn(e) - 1, e), t, 2);
}
function oU(e, t) {
  return ze(e.getUTCFullYear() % 100, t, 2);
}
function uU(e, t) {
  return e = LC(e), ze(e.getUTCFullYear() % 100, t, 2);
}
function sU(e, t) {
  return ze(e.getUTCFullYear() % 1e4, t, 4);
}
function cU(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ka(e) : Ka.ceil(e), ze(e.getUTCFullYear() % 1e4, t, 4);
}
function lU() {
  return "+0000";
}
function YS() {
  return "%";
}
function XS(e) {
  return +e;
}
function ZS(e) {
  return Math.floor(+e / 1e3);
}
var Aa, qC, BC;
fU({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function fU(e) {
  return Aa = fz(e), qC = Aa.format, Aa.parse, BC = Aa.utcFormat, Aa.utcParse, Aa;
}
function dU(e) {
  return new Date(e);
}
function hU(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function db(e, t, r, n, i, a, o, s, l, f) {
  var d = Jm(), h = d.invert, v = d.domain, g = f(".%L"), x = f(":%S"), y = f("%I:%M"), b = f("%I %p"), S = f("%a %d"), O = f("%b %d"), A = f("%B"), _ = f("%Y");
  function m(E) {
    return (l(E) < E ? g : s(E) < E ? x : o(E) < E ? y : a(E) < E ? b : n(E) < E ? i(E) < E ? S : O : r(E) < E ? A : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, hU)) : v().map(dU);
  }, d.ticks = function(E) {
    var T = v();
    return e(T[0], T[T.length - 1], E ?? 10);
  }, d.tickFormat = function(E, T) {
    return T == null ? m : f(T);
  }, d.nice = function(E) {
    var T = v();
    return (!E || typeof E.range != "function") && (E = t(T[0], T[T.length - 1], E ?? 10)), E ? v(PC(T, E)) : d;
  }, d.copy = function() {
    return os(d, db(e, t, r, n, i, a, o, s, l, f));
  }, d;
}
function pU() {
  return Lr.apply(db(cz, lz, Ln, lb, Fl, us, sb, ob, Ui, qC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function vU() {
  return Lr.apply(db(uz, sz, qn, fb, Wl, Bl, cb, ub, Ui, BC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function zl() {
  var e = 0, t = 1, r, n, i, a, o = Gt, s = !1, l;
  function f(h) {
    return h == null || isNaN(h = +h) ? l : o(i === 0 ? 0.5 : (h = (a(h) - r) * i, s ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t] = h, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(h) {
    return arguments.length ? (s = !!h, f) : s;
  }, f.interpolator = function(h) {
    return arguments.length ? (o = h, f) : o;
  };
  function d(h) {
    return function(v) {
      var g, x;
      return arguments.length ? ([g, x] = v, o = h(g, x), f) : [o(0), o(1)];
    };
  }
  return f.range = d(yo), f.rangeRound = d(Zm), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function _i(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function FC() {
  var e = wi(zl()(Gt));
  return e.copy = function() {
    return _i(e, FC());
  }, Un.apply(e, arguments);
}
function WC() {
  var e = tb(zl()).domain([1, 10]);
  return e.copy = function() {
    return _i(e, WC()).base(e.base());
  }, Un.apply(e, arguments);
}
function zC() {
  var e = rb(zl());
  return e.copy = function() {
    return _i(e, zC()).constant(e.constant());
  }, Un.apply(e, arguments);
}
function hb() {
  var e = nb(zl());
  return e.copy = function() {
    return _i(e, hb()).exponent(e.exponent());
  }, Un.apply(e, arguments);
}
function gU() {
  return hb.apply(null, arguments).exponent(0.5);
}
function UC() {
  var e = [], t = Gt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((is(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(hi), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => rW(e, a / n));
  }, r.copy = function() {
    return UC(t).domain(e);
  }, Un.apply(r, arguments);
}
function Ul() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, l, f = Gt, d, h = !1, v;
  function g(y) {
    return isNaN(y = +y) ? v : (y = 0.5 + ((y = +d(y)) - a) * (n * y < n * a ? s : l), f(h ? Math.max(0, Math.min(1, y)) : y));
  }
  g.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = d(e = +e), a = d(t = +t), o = d(r = +r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, g) : [e, t, r];
  }, g.clamp = function(y) {
    return arguments.length ? (h = !!y, g) : h;
  }, g.interpolator = function(y) {
    return arguments.length ? (f = y, g) : f;
  };
  function x(y) {
    return function(b) {
      var S, O, A;
      return arguments.length ? ([S, O, A] = b, f = TW(y, [S, O, A]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = x(yo), g.rangeRound = x(Zm), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), o = y(r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, g;
  };
}
function HC() {
  var e = wi(Ul()(Gt));
  return e.copy = function() {
    return _i(e, HC());
  }, Un.apply(e, arguments);
}
function GC() {
  var e = tb(Ul()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return _i(e, GC()).base(e.base());
  }, Un.apply(e, arguments);
}
function KC() {
  var e = rb(Ul());
  return e.copy = function() {
    return _i(e, KC()).constant(e.constant());
  }, Un.apply(e, arguments);
}
function pb() {
  var e = nb(Ul());
  return e.copy = function() {
    return _i(e, pb()).exponent(e.exponent());
  }, Un.apply(e, arguments);
}
function yU() {
  return pb.apply(null, arguments).exponent(0.5);
}
const JS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Ou,
  scaleDiverging: HC,
  scaleDivergingLog: GC,
  scaleDivergingPow: pb,
  scaleDivergingSqrt: yU,
  scaleDivergingSymlog: KC,
  scaleIdentity: AC,
  scaleImplicit: my,
  scaleLinear: Hc,
  scaleLog: EC,
  scaleOrdinal: Vm,
  scalePoint: cu,
  scalePow: ib,
  scaleQuantile: MC,
  scaleQuantize: IC,
  scaleRadial: CC,
  scaleSequential: FC,
  scaleSequentialLog: WC,
  scaleSequentialPow: hb,
  scaleSequentialQuantile: UC,
  scaleSequentialSqrt: gU,
  scaleSequentialSymlog: zC,
  scaleSqrt: ZW,
  scaleSymlog: TC,
  scaleThreshold: RC,
  scaleTime: pU,
  scaleUtc: vU,
  tickFormat: SC
}, Symbol.toStringTag, { value: "Module" }));
var Xv, QS;
function Hl() {
  if (QS) return Xv;
  QS = 1;
  var e = ho();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var s = r[a], l = n(s);
      if (l != null && (f === void 0 ? l === l && !e(l) : i(l, f)))
        var f = l, d = s;
    }
    return d;
  }
  return Xv = t, Xv;
}
var Zv, eA;
function VC() {
  if (eA) return Zv;
  eA = 1;
  function e(t, r) {
    return t > r;
  }
  return Zv = e, Zv;
}
var Jv, tA;
function mU() {
  if (tA) return Jv;
  tA = 1;
  var e = Hl(), t = VC(), r = go();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Jv = n, Jv;
}
var bU = mU();
const fi = /* @__PURE__ */ Je(bU);
var Qv, rA;
function YC() {
  if (rA) return Qv;
  rA = 1;
  function e(t, r) {
    return t < r;
  }
  return Qv = e, Qv;
}
var eg, nA;
function xU() {
  if (nA) return eg;
  nA = 1;
  var e = Hl(), t = YC(), r = go();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return eg = n, eg;
}
var wU = xU();
const Gl = /* @__PURE__ */ Je(wU);
var tg, iA;
function _U() {
  if (iA) return tg;
  iA = 1;
  var e = Cm(), t = vn(), r = nC(), n = tr();
  function i(a, o) {
    var s = n(a) ? e : r;
    return s(a, t(o, 3));
  }
  return tg = i, tg;
}
var rg, aA;
function OU() {
  if (aA) return rg;
  aA = 1;
  var e = tC(), t = _U();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return rg = r, rg;
}
var SU = OU();
const AU = /* @__PURE__ */ Je(SU);
var ng, oA;
function PU() {
  if (oA) return ng;
  oA = 1;
  var e = Wm();
  function t(r, n) {
    return e(r, n);
  }
  return ng = t, ng;
}
var EU = PU();
const Qi = /* @__PURE__ */ Je(EU);
var mo = 1e9, TU = {
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
}, gb, dt = !0, jr = "[DecimalError] ", Xi = jr + "Invalid argument: ", vb = jr + "Exponent out of range: ", bo = Math.floor, Bi = Math.pow, CU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, hr, Mt = 1e7, st = 7, XC = 9007199254740991, Yc = bo(XC / st), pe = {};
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
  return kn(this, new this.constructor(e));
};
pe.dividedToIntegerBy = pe.idiv = function(e) {
  var t = this, r = t.constructor;
  return tt(kn(t, new r(e), 0, 1), r.precision);
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
  return r.eq(hr) ? new n(0) : (dt = !1, t = kn(Tu(r, a), Tu(e, a), a), dt = !0, tt(t, i));
};
pe.minus = pe.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? QC(t, e) : ZC(t, (e.s = -e.s, e));
};
pe.modulo = pe.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jr + "NaN");
  return r.s ? (dt = !1, t = kn(r, e, 0, 1).times(e), dt = !0, r.minus(t)) : tt(new n(r), i);
};
pe.naturalExponential = pe.exp = function() {
  return JC(this);
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
  return e = new t.constructor(e), t.s == e.s ? ZC(t, e) : QC(t, (e.s = -e.s, e));
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
  var e, t, r, n, i, a, o, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(jr + "NaN");
  }
  for (e = bt(s), dt = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = sn(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = bo((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(kn(s, a, o + 2)).times(0.5), sn(a.d).slice(0, o) === (t = sn(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (tt(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return dt = !0, tt(n, r);
};
pe.times = pe.mul = function(e) {
  var t, r, n, i, a, o, s, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, o = l, l = f, f = o), a = [], o = l + f, n = o; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      s = a[i] + g[n] * v[i - n - 1] + t, a[i--] = s % Mt | 0, t = s / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, dt ? tt(e, h.precision) : e;
};
pe.toDecimalPlaces = pe.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (dn(e, 0, mo), t === void 0 ? t = n.rounding : dn(t, 0, 8), tt(r, e + bt(r) + 1, t));
};
pe.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ea(n, !0) : (dn(e, 0, mo), t === void 0 ? t = i.rounding : dn(t, 0, 8), n = tt(new i(n), e + 1, t), r = ea(n, !0, e + 1)), r;
};
pe.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ea(i) : (dn(e, 0, mo), t === void 0 ? t = a.rounding : dn(t, 0, 8), n = tt(new a(i), e + bt(i) + 1, t), r = ea(n.abs(), !1, e + bt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
pe.toInteger = pe.toint = function() {
  var e = this, t = e.constructor;
  return tt(new t(e), bt(e) + 1, t.rounding);
};
pe.toNumber = function() {
  return +this;
};
pe.toPower = pe.pow = function(e) {
  var t, r, n, i, a, o, s = this, l = s.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(hr);
  if (s = new l(s), !s.s) {
    if (e.s < 1) throw Error(jr + "Infinity");
    return s;
  }
  if (s.eq(hr)) return s;
  if (n = l.precision, e.eq(hr)) return tt(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = d < 0 ? -d : d) <= XC) {
      for (i = new l(hr), t = Math.ceil(n / st + 4), dt = !1; r % 2 && (i = i.times(s), sA(i.d, t)), r = bo(r / 2), r !== 0; )
        s = s.times(s), sA(s.d, t);
      return dt = !0, e.s < 0 ? new l(hr).div(i) : tt(i, n);
    }
  } else if (a < 0) throw Error(jr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, dt = !1, i = e.times(Tu(s, n + f)), dt = !0, i = JC(i), i.s = a, i;
};
pe.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = bt(i), n = ea(i, r <= a.toExpNeg || r >= a.toExpPos)) : (dn(e, 1, mo), t === void 0 ? t = a.rounding : dn(t, 0, 8), i = tt(new a(i), e, t), r = bt(i), n = ea(i, e <= r || r <= a.toExpNeg, e)), n;
};
pe.toSignificantDigits = pe.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (dn(e, 1, mo), t === void 0 ? t = n.rounding : dn(t, 0, 8)), tt(new n(r), e, t);
};
pe.toString = pe.valueOf = pe.val = pe.toJSON = pe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = bt(e), r = e.constructor;
  return ea(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function ZC(e, t) {
  var r, n, i, a, o, s, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), dt ? tt(t, h) : t;
  if (l = e.d, f = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, s = f.length) : (n = f, i = o, s = l.length), o = Math.ceil(h / st), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = f.length, s - a < 0 && (a = s, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, dt ? tt(t, h) : t;
}
function dn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Xi + e);
}
function sn(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = st - n.length, r && (a += ci(r)), a += n;
    o = e[t], n = o + "", r = st - n.length, r && (a += ci(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var kn = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + o, n[s] = a % Mt | 0, o = a / Mt | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, l;
    if (a != o)
      l = a > o ? 1 : -1;
    else
      for (s = l = 0; s < a; s++)
        if (n[s] != i[s]) {
          l = n[s] > i[s] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Mt + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, l, f, d, h, v, g, x, y, b, S, O, A, _, m, E, T, I, B = n.constructor, L = n.s == i.s ? 1 : -1, N = n.d, j = i.d;
    if (!n.s) return new B(n);
    if (!i.s) throw Error(jr + "Division by zero");
    for (l = n.e - i.e, T = j.length, m = N.length, g = new B(L), x = g.d = [], f = 0; j[f] == (N[f] || 0); ) ++f;
    if (j[f] > (N[f] || 0) && --l, a == null ? O = a = B.precision : o ? O = a + (bt(n) - bt(i)) + 1 : O = a, O < 0) return new B(0);
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
    return x[0] || x.shift(), g.e = l, tt(g, o ? a + bt(g) + 1 : a);
  };
}();
function JC(e, t) {
  var r, n, i, a, o, s, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (bt(e) > 16) throw Error(vb + bt(e));
  if (!e.s) return new d(hr);
  for (t == null ? (dt = !1, s = h) : s = t, o = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(o), f += 5;
  for (n = Math.log(Bi(2, f)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new d(hr), d.precision = s; ; ) {
    if (i = tt(i.times(e), s), r = r.times(++l), o = a.plus(kn(i, r, s)), sn(o.d).slice(0, s) === sn(a.d).slice(0, s)) {
      for (; f--; ) a = tt(a.times(a), s);
      return d.precision = h, t == null ? (dt = !0, tt(a, h)) : a;
    }
    a = o;
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
function ci(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Tu(e, t) {
  var r, n, i, a, o, s, l, f, d, h = 1, v = 10, g = e, x = g.d, y = g.constructor, b = y.precision;
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
  for (s = o = g = kn(g.minus(hr), g.plus(hr), f), d = tt(g.times(g), f), i = 3; ; ) {
    if (o = tt(o.times(d), f), l = s.plus(kn(o, new y(i), f)), sn(l.d).slice(0, f) === sn(s.d).slice(0, f))
      return s = s.times(2), a !== 0 && (s = s.plus(ig(y, f + 2, b).times(a + ""))), s = kn(s, new y(h), f), y.precision = b, t == null ? (dt = !0, tt(s, b)) : s;
    s = l, i += 2;
  }
}
function uA(e, t) {
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
    if (e.d.push(+t), dt && (e.e > Yc || e.e < -Yc)) throw Error(vb + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function tt(e, t, r) {
  var n, i, a, o, s, l, f, d, h = e.d;
  for (o = 1, a = h[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += st, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / st), a = h.length, d >= a) return e;
    for (f = a = h[d], o = 1; a >= 10; a /= 10) o++;
    n %= st, i = n - st + o;
  }
  if (r !== void 0 && (a = Bi(10, o - i - 1), s = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Bi(10, o - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = bt(e), h.length = 1, t = t - a - 1, h[0] = Bi(10, (st - t % st) % st), e.e = bo(-t / st) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Bi(10, st - n), h[d] = i > 0 ? (f / Bi(10, o - i) % Bi(10, i) | 0) * a : 0), l)
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
    throw Error(vb + bt(e));
  return e;
}
function QC(e, t) {
  var r, n, i, a, o, s, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), dt ? tt(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), o = f - n, o) {
    for (d = o < 0, d ? (r = l, o = -o, s = h.length) : (r = h, n = f, s = l.length), i = Math.max(Math.ceil(g / st), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, s = h.length, d = i < s, d && (s = i), i = 0; i < s; i++)
      if (l[i] != h[i]) {
        d = l[i] < h[i];
        break;
      }
    o = 0;
  }
  for (d && (r = l, l = h, h = r, t.s = -t.s), s = l.length, i = h.length - s; i > 0; --i) l[s++] = 0;
  for (i = h.length; i > o; ) {
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
  var n, i = bt(e), a = sn(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ci(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + ci(-i - 1) + a, r && (n = r - o) > 0 && (a += ci(n))) : i >= o ? (a += ci(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + ci(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += ci(n))), e.s < 0 ? "-" + a : a;
}
function sA(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function e2(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Xi + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return uA(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Xi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, CU.test(a)) uA(o, a);
    else throw Error(Xi + a);
  }
  if (i.prototype = pe, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = e2, i.config = i.set = MU, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function MU(e) {
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
var gb = e2(TU);
hr = new gb(1);
const Qe = gb;
function IU(e) {
  return jU(e) || kU(e) || $U(e) || RU();
}
function RU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $U(e, t) {
  if (e) {
    if (typeof e == "string") return _y(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _y(e, t);
  }
}
function kU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function jU(e) {
  if (Array.isArray(e)) return _y(e);
}
function _y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var NU = function(t) {
  return t;
}, t2 = {
  "@@functional/placeholder": !0
}, r2 = function(t) {
  return t === t2;
}, cA = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && r2(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, DU = function e(t, r) {
  return t === 1 ? r : cA(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== t2;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, cA(function() {
      for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return r2(h) ? l.shift() : h;
      });
      return r.apply(void 0, IU(d).concat(l));
    }));
  });
}, Kl = function(t) {
  return DU(t.length, t);
}, Oy = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, LU = Kl(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), qU = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return NU;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, Sy = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, n2 = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function BU(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Qe(e).abs().log(10).toNumber()) + 1, t;
}
function FU(e, t, r) {
  for (var n = new Qe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var WU = Kl(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), zU = Kl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), UU = Kl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Vl = {
  rangeStep: FU,
  getDigitCount: BU,
  interpolateNumber: WU,
  uninterpolateNumber: zU,
  uninterpolateTruncation: UU
};
function Ay(e) {
  return KU(e) || GU(e) || i2(e) || HU();
}
function HU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function KU(e) {
  if (Array.isArray(e)) return Py(e);
}
function Cu(e, t) {
  return XU(e) || YU(e, t) || i2(e, t) || VU();
}
function VU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i2(e, t) {
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
function YU(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function XU(e) {
  if (Array.isArray(e)) return e;
}
function a2(e) {
  var t = Cu(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function o2(e, t, r) {
  if (e.lte(0))
    return new Qe(0);
  var n = Vl.getDigitCount(e.toNumber()), i = new Qe(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Qe(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = s.mul(i);
  return t ? l : new Qe(Math.ceil(l));
}
function ZU(e, t, r) {
  var n = 1, i = new Qe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Qe(10).pow(Vl.getDigitCount(e) - 1), i = new Qe(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Qe(Math.floor(e)));
  } else e === 0 ? i = new Qe(Math.floor((t - 1) / 2)) : r || (i = new Qe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = qU(LU(function(l) {
    return i.add(new Qe(l - o).mul(n)).toNumber();
  }), Oy);
  return s(0, t);
}
function u2(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Qe(0),
      tickMin: new Qe(0),
      tickMax: new Qe(0)
    };
  var a = o2(new Qe(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new Qe(0) : (o = new Qe(e).add(t).div(2), o = o.sub(new Qe(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), l = Math.ceil(new Qe(t).sub(o).div(a).toNumber()), f = s + l + 1;
  return f > r ? u2(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, s = t > 0 ? s : s + (r - f)), {
    step: a,
    tickMin: o.sub(new Qe(s).mul(a)),
    tickMax: o.add(new Qe(l).mul(a))
  });
}
function JU(e) {
  var t = Cu(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = a2([r, n]), l = Cu(s, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(Ay(Oy(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Ay(Oy(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? Sy(h) : h;
  }
  if (f === d)
    return ZU(f, i, a);
  var v = u2(f, d, o, a), g = v.step, x = v.tickMin, y = v.tickMax, b = Vl.rangeStep(x, y.add(new Qe(0.1).mul(g)), g);
  return r > n ? Sy(b) : b;
}
function QU(e, t) {
  var r = Cu(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = a2([n, i]), s = Cu(o, 2), l = s[0], f = s[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = o2(new Qe(f).sub(l).div(d - 1), a, 0), v = [].concat(Ay(Vl.rangeStep(new Qe(l), new Qe(f).sub(new Qe(0.99).mul(h)), h)), [f]);
  return n > i ? Sy(v) : v;
}
var e4 = n2(JU), t4 = n2(QU), r4 = process.env.NODE_ENV === "production", ag = "Invariant failed";
function Qt(e, t) {
  if (r4)
    throw new Error(ag);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ag, ": ").concat(r) : ag;
  throw new Error(n);
}
var n4 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
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
function i4(e, t) {
  return s4(e) || u4(e, t) || o4(e, t) || a4();
}
function a4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o4(e, t) {
  if (e) {
    if (typeof e == "string") return lA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lA(e, t);
  }
}
function lA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function s4(e) {
  if (Array.isArray(e)) return e;
}
function c4(e, t) {
  if (e == null) return {};
  var r = l4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function l4(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ss(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, o = e.dataPointFormatter, s = e.xAxis, l = e.yAxis, f = c4(e, n4), d = xe(f, !1);
  e.direction === "x" && s.type !== "number" && (process.env.NODE_ENV !== "production" ? Qt(!1, 'ErrorBar requires Axis type property to be "number".') : Qt());
  var h = a.map(function(v) {
    var g = o(v, i), x = g.x, y = g.y, b = g.value, S = g.errorVal;
    if (!S)
      return null;
    var O = [], A, _;
    if (Array.isArray(S)) {
      var m = i4(S, 2);
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
function fA(e, t) {
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
    t % 2 ? fA(Object(r), !0).forEach(function(n) {
      f4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f4(e, t, r) {
  return t = d4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d4(e) {
  var t = h4(e, "string");
  return Mu(t) == "symbol" ? t : String(t);
}
function h4(e, t) {
  if (Mu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var s2 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = fr(r, Wa);
  if (!o)
    return null;
  var s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return l.concat(v.map(function(g) {
      return {
        type: o.props.iconType || d.props.legendType,
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
      type: o.props.iconType || g || "square",
      color: yb(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), og(og(og({}, o.props), Wa.getWithHeight(o, i)), {}, {
    payload: s,
    item: o
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
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dA(Object(r), !0).forEach(function(n) {
      Da(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Da(e, t, r) {
  return t = p4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p4(e) {
  var t = v4(e, "string");
  return Iu(t) == "symbol" ? t : String(t);
}
function v4(e, t) {
  if (Iu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Iu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hA(e) {
  return b4(e) || m4(e) || y4(e) || g4();
}
function g4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y4(e, t) {
  if (e) {
    if (typeof e == "string") return Ey(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ey(e, t);
  }
}
function m4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b4(e) {
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
  var i = AU(e, function(s) {
    return mt(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return oe(s) || parseFloat(s);
    });
    return a.length ? [Gl(a), fi(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !Te(s);
  }) : i;
  return o.map(function(s) {
    return Pt(s) || s instanceof Date ? s : "";
  });
}
var x4 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
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
          o = i[f].index;
          break;
        }
      } else {
        var O = Math.min(d, v), A = Math.max(d, v);
        if (t > (O + h) / 2 && t <= (A + h) / 2) {
          o = i[f].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < s; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
        break;
      }
  return o;
}, yb = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, o = i.fill, s;
  switch (n) {
    case "Line":
      s = a;
      break;
    case "Area":
    case "Radar":
      s = a && a !== "none" ? a : o;
      break;
    default:
      s = o;
      break;
  }
  return s;
}, w4 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), l = 0, f = s.length; l < f; l++)
    for (var d = a[s[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var x = d[h[v]], y = x.items, b = x.cateAxisId, S = y.filter(function(m) {
        return $n(m.type).indexOf("Bar") >= 0;
      });
      if (S && S.length) {
        var O = S[0].props.barSize, A = S[0].props[b];
        o[A] || (o[A] = []);
        var _ = Te(O) ? r : O;
        o[A].push({
          item: S[0],
          stackList: S.slice(1),
          barSize: Te(_) ? void 0 : Ht(_, n, 0)
        });
      }
    }
  return o;
}, _4 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, l = o.length;
  if (l < 1) return null;
  var f = Ht(r, i, 0, !0), d, h = [];
  if (o[0].barSize === +o[0].barSize) {
    var v = !1, g = i / l, x = o.reduce(function(_, m) {
      return _ + m.barSize || 0;
    }, 0);
    x += (l - 1) * f, x >= i && (x -= (l - 1) * f, f = 0), x >= i && g > 0 && (v = !0, g *= 0.9, x = l * g);
    var y = (i - x) / 2 >> 0, b = {
      offset: y - f,
      size: 0
    };
    d = o.reduce(function(_, m) {
      var E = {
        item: m.item,
        position: {
          offset: b.offset + b.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : m.barSize
        }
      }, T = [].concat(hA(_), [E]);
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
    d = o.reduce(function(_, m, E) {
      var T = [].concat(hA(_), [{
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
}, O4 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, l = o - (s.left || 0) - (s.right || 0), f = s2({
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
}, S4 = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, c2 = function(t, r, n, i, a) {
  var o = r.props.children, s = vr(o, ss).filter(function(f) {
    return S4(i, a, f.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = mt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Gl(h), fi(h)] : [h, h], g = l.reduce(function(x, y) {
        var b = mt(d, y, 0), S = v[0] - Math.abs(Array.isArray(b) ? b[0] : b), O = v[1] + Math.abs(Array.isArray(b) ? b[1] : b);
        return [Math.min(S, x[0]), Math.max(O, x[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, A4 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return c2(t, s, n, a, i);
  }).filter(function(s) {
    return !Te(s);
  });
  return o && o.length ? o.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, l2 = function(t, r, n, i, a) {
  var o = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && c2(t, l, f, i) || lu(t, f, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(l, f) {
        return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(l, f) {
    for (var d = 0, h = f.length; d < h; d++)
      s[f[d]] || (s[f[d]] = !0, l.push(f[d]));
    return l;
  }, []);
}, f2 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, d2 = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, o, s = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (o = !0), l.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, Rn = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
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
}, h2 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Ou(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
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
      scale: (JS[l] || cu)(),
      realScaleType: JS[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: cu(),
    realScaleType: "point"
  };
}, pA = 1e-4, p2 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - pA, o = Math.max(i[0], i[1]) + pA, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
  }
}, P4 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, E4 = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, T4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var l = vo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + l, o = t[s][n][1]);
      }
}, C4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = vo(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, M4 = {
  sign: T4,
  // @ts-expect-error definitelytyped types are incorrect
  expand: P6,
  // @ts-expect-error definitelytyped types are incorrect
  none: qa,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: E6,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: T6,
  positive: C4
}, I4 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = M4[n], o = A6().keys(i).value(function(s, l) {
    return +mt(s, l, 0);
  }).order(ny).offset(a);
  return o(t);
}, R4 = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, l = {}, f = s.reduce(function(h, v) {
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
          stackedData: I4(t, S.items, a)
        }));
      }, x);
    }
    return Tr(Tr({}, h), {}, Da({}, v, g));
  }, d);
}, v2 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = e4(f, a, s);
    return t.domain([Gl(d), fi(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = t4(h, a, s);
    return {
      niceTicks: v
    };
  }
  return null;
};
function Zc(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var s = Ec(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = mt(i, Te(o) ? t.dataKey : o);
  return Te(l) ? null : t.scale(l);
}
var vA = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var l = mt(o, r.dataKey, r.domain[s]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, $4 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, k4 = function(t, r) {
  var n = t.props.stackId;
  if (Pt(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, j4 = function(t) {
  return t.reduce(function(r, n) {
    return [Gl(n.concat([r[0]]).filter(oe)), fi(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, g2 = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, l = s.reduce(function(f, d) {
      var h = j4(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, gA = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, yA = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ty = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (gA.test(t[0])) {
    var a = +gA.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (yA.test(t[1])) {
    var o = +yA.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Jc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Um(r, function(h) {
      return h.coordinate;
    }), o = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var f = a[s], d = a[s - 1];
      o = Math.min((f.coordinate || 0) - (d.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, mA = function(t, r, n) {
  return !t || !t.length || Qi(t, pr(n, "type.defaultProps.domain")) ? r : t;
}, y2 = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Tr(Tr({}, xe(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: yb(t),
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
function bA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bA(Object(r), !0).forEach(function(n) {
      m2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m2(e, t, r) {
  return t = N4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N4(e) {
  var t = D4(e, "string");
  return Ru(t) == "symbol" ? t : String(t);
}
function D4(e, t) {
  if (Ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function L4(e, t) {
  return W4(e) || F4(e, t) || B4(e, t) || q4();
}
function q4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B4(e, t) {
  if (e) {
    if (typeof e == "string") return xA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xA(e, t);
  }
}
function xA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function F4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function W4(e) {
  if (Array.isArray(e)) return e;
}
var Qc = Math.PI / 180, z4 = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Qc * i) * n,
    y: r + Math.sin(-Qc * i) * n
  };
}, b2 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, U4 = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.startAngle, f = t.endAngle, d = Ht(t.cx, o, o / 2), h = Ht(t.cy, s, s / 2), v = b2(o, s, n), g = Ht(t.innerRadius, v, 0), x = Ht(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(b, S) {
    var O = r[S], A = O.domain, _ = O.reversed, m;
    if (Te(O.range))
      i === "angleAxis" ? m = [l, f] : i === "radiusAxis" && (m = [g, x]), _ && (m = [m[1], m[0]]);
    else {
      m = O.range;
      var E = m, T = L4(E, 2);
      l = T[0], f = T[1];
    }
    var I = h2(O, a), B = I.realScaleType, L = I.scale;
    L.domain(A).range(m), p2(L);
    var N = v2(L, Tn(Tn({}, O), {}, {
      realScaleType: B
    })), j = Tn(Tn(Tn({}, O), N), {}, {
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
    return Tn(Tn({}, b), {}, m2({}, S, j));
  }, {});
}, H4 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, G4 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = H4({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var l = (n - a) / s, f = Math.acos(l);
  return i > o && (f = 2 * Math.PI - f), {
    radius: s,
    angle: z4(f),
    angleInRadian: f
  };
}, K4 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, V4 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, wA = function(t, r) {
  var n = t.x, i = t.y, a = G4({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (o < l || o > f)
    return !1;
  if (o === 0)
    return !0;
  var d = K4(r), h = d.startAngle, v = d.endAngle, g = s, x;
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
  return x ? Tn(Tn({}, r), {}, {
    radius: o,
    angle: V4(g, r)
  }) : null;
}, x2 = function(t) {
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
var Y4 = ["offset"];
function X4(e) {
  return e5(e) || Q4(e) || J4(e) || Z4();
}
function Z4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J4(e, t) {
  if (e) {
    if (typeof e == "string") return Cy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cy(e, t);
  }
}
function Q4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function e5(e) {
  if (Array.isArray(e)) return Cy(e);
}
function Cy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function t5(e, t) {
  if (e == null) return {};
  var r = r5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function r5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _A(e, t) {
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
    t % 2 ? _A(Object(r), !0).forEach(function(n) {
      n5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _A(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n5(e, t, r) {
  return t = i5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i5(e) {
  var t = a5(e, "string");
  return $u(t) == "symbol" ? t : String(t);
}
function a5(e, t) {
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
var o5 = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, u5 = function(t, r) {
  var n = Ut(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, s5 = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, x = l.endAngle, y = l.clockWise, b = (h + v) / 2, S = u5(g, x), O = S >= 0 ? 1 : -1, A, _;
  i === "insideStart" ? (A = g + O * o, _ = y) : i === "insideEnd" ? (A = x - O * o, _ = !y) : i === "end" && (A = x + O * o, _ = y), _ = S <= 0 ? _ : !_;
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
}, c5 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(o, s, f + n, v), x = g.x, y = g.y;
    return {
      x,
      y,
      textAnchor: x >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var b = (l + f) / 2, S = it(o, s, b, v), O = S.x, A = S.y;
  return {
    x: O,
    y: A,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, l5 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, l = o.y, f = o.width, d = o.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", x = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, b = y * i, S = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
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
}, f5 = function(t) {
  return "cx" in t && oe(t.cx);
};
function At(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = t5(e, Y4), i = _t({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(s) && Te(l) && !/* @__PURE__ */ Vr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ Vr(f))
    return /* @__PURE__ */ Ot(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ KE(f, i), /* @__PURE__ */ Vr(g))
      return g;
  } else
    g = o5(i);
  var x = f5(a), y = xe(i, !0);
  if (x && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return s5(i, g, y);
  var b = x ? c5(i) : l5(i);
  return /* @__PURE__ */ $.createElement(pi, ku({
    className: Ie("recharts-label", h)
  }, y, b, {
    breakAll: v
  }), g);
}
At.displayName = "Label";
var w2 = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, x = t.left, y = t.width, b = t.height, S = t.clockWise, O = t.labelViewBox;
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
    endAngle: o || i || 0,
    innerRadius: f || 0,
    outerRadius: d || l || s || 0,
    clockWise: S
  } : t.viewBox ? t.viewBox : {};
}, d5 = function(t, r) {
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
}, h5 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = w2(t), o = vr(i, At).map(function(l, f) {
    return /* @__PURE__ */ Ot(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return o;
  var s = d5(t.label, r || a);
  return [s].concat(X4(o));
};
At.parseViewBox = w2;
At.renderCallByParent = h5;
var sg, OA;
function p5() {
  if (OA) return sg;
  OA = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return sg = e, sg;
}
var v5 = p5();
const g5 = /* @__PURE__ */ Je(v5);
function ju(e) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ju(e);
}
var y5 = ["valueAccessor"], m5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function b5(e) {
  return O5(e) || _5(e) || w5(e) || x5();
}
function x5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w5(e, t) {
  if (e) {
    if (typeof e == "string") return My(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return My(e, t);
  }
}
function _5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function O5(e) {
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
function SA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function AA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? SA(Object(r), !0).forEach(function(n) {
      S5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S5(e, t, r) {
  return t = A5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A5(e) {
  var t = P5(e, "string");
  return ju(t) == "symbol" ? t : String(t);
}
function P5(e, t) {
  if (ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PA(e, t) {
  if (e == null) return {};
  var r = E5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var T5 = function(t) {
  return Array.isArray(t.value) ? g5(t.value) : t.value;
};
function Rr(e) {
  var t = e.valueAccessor, r = t === void 0 ? T5 : t, n = PA(e, y5), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, l = n.textBreakAll, f = PA(n, m5);
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
      viewBox: At.parseViewBox(Te(o) ? d : AA(AA({}, d), {}, {
        clockWise: o
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
Rr.displayName = "LabelList";
function C5(e, t) {
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
function M5(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = vr(n, Rr).map(function(o, s) {
    return /* @__PURE__ */ Ot(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = C5(e.label, t);
  return [a].concat(b5(i));
}
Rr.renderCallByParent = M5;
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
function EA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function TA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? EA(Object(r), !0).forEach(function(n) {
      I5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : EA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I5(e, t, r) {
  return t = R5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R5(e) {
  var t = $5(e, "string");
  return Nu(t) == "symbol" ? t : String(t);
}
function $5(e, t) {
  if (Nu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k5 = function(t, r) {
  var n = Ut(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, vc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (s ? 1 : -1) + i, h = Math.asin(l / d) / Qc, v = f ? a : a + o * h, g = it(r, n, d, v), x = it(r, n, i, v), y = f ? a - o * h : a, b = it(r, n, d * Math.cos(h * Qc), y);
  return {
    center: g,
    circleTangency: x,
    lineTangency: b,
    theta: h
  };
}, _2 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, l = k5(o, s), f = o + l, d = it(r, n, a, o), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var g = it(r, n, i, o), x = it(r, n, i, f);
    v += "L ".concat(x.x, ",").concat(x.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= f), `,
            `).concat(g.x, ",").concat(g.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, j5 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Ut(d - f), v = vc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: o,
    cornerIsExternal: l
  }), g = v.circleTangency, x = v.lineTangency, y = v.theta, b = vc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: o,
    cornerIsExternal: l
  }), S = b.circleTangency, O = b.lineTangency, A = b.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - A;
  if (_ < 0)
    return s ? "M ".concat(x.x, ",").concat(x.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : _2({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var m = "M ".concat(x.x, ",").concat(x.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(S.x, ",").concat(S.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = vc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), T = E.circleTangency, I = E.lineTangency, B = E.theta, L = vc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), N = L.circleTangency, j = L.lineTangency, q = L.theta, F = l ? Math.abs(f - d) : Math.abs(f - d) - B - q;
    if (F < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(j.x, ",").concat(j.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(N.x, ",").concat(N.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(F > 180), ",").concat(+(h > 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(I.x, ",").concat(I.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, N5 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, O2 = function(t) {
  var r = TA(TA({}, N5), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (o < a || d === h)
    return null;
  var g = Ie("recharts-sector", v), x = o - a, y = Ht(s, x, 0, !0), b;
  return y > 0 && Math.abs(d - h) < 360 ? b = j5({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(y, x / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : b = _2({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
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
function CA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function MA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? CA(Object(r), !0).forEach(function(n) {
      D5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : CA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D5(e, t, r) {
  return t = L5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L5(e) {
  var t = q5(e, "string");
  return Du(t) == "symbol" ? t : String(t);
}
function q5(e, t) {
  if (Du(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Du(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IA = {
  curveBasisClosed: p6,
  curveBasisOpen: v6,
  curveBasis: h6,
  curveBumpX: QL,
  curveBumpY: e6,
  curveLinearClosed: g6,
  curveLinear: kl,
  curveMonotoneX: y6,
  curveMonotoneY: m6,
  curveNatural: b6,
  curveStep: x6,
  curveStepAfter: _6,
  curveStepBefore: w6
}, gc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Jo = function(t) {
  return t.x;
}, Qo = function(t) {
  return t.y;
}, B5 = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Rl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? IA["".concat(n).concat(r === "vertical" ? "Y" : "X")] : IA[n] || kl;
}, F5 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = B5(n, s), h = f ? a.filter(function(y) {
    return gc(y);
  }) : a, v;
  if (Array.isArray(o)) {
    var g = f ? o.filter(function(y) {
      return gc(y);
    }) : o, x = h.map(function(y, b) {
      return MA(MA({}, y), {}, {
        base: g[b]
      });
    });
    return s === "vertical" ? v = uc().y(Qo).x1(Jo).x0(function(y) {
      return y.base.x;
    }) : v = uc().x(Jo).y1(Qo).y0(function(y) {
      return y.base.y;
    }), v.defined(gc).curve(d), v(x);
  }
  return s === "vertical" && oe(o) ? v = uc().y(Qo).x1(Jo).x0(o) : oe(o) ? v = uc().x(Jo).y1(Qo).y0(o) : v = OT().x(Jo).y(Qo), v.defined(gc).curve(d), v(h);
}, Zi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? F5(t) : i;
  return /* @__PURE__ */ $.createElement("path", Ry({}, xe(t, !1), Tc(t), {
    className: Ie("recharts-curve", r),
    d: o,
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
var RA;
function W5() {
  if (RA) return Ve;
  RA = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
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
                case o:
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
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = s, Ve.ContextProvider = o, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = x, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(m) {
    return _(m) || A(m) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(m) {
    return A(m) === s;
  }, Ve.isContextProvider = function(m) {
    return A(m) === o;
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
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === a || m === i || m === h || m === v || typeof m == "object" && m !== null && (m.$$typeof === x || m.$$typeof === g || m.$$typeof === o || m.$$typeof === s || m.$$typeof === d || m.$$typeof === b || m.$$typeof === S || m.$$typeof === O || m.$$typeof === y);
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
var $A;
function z5() {
  return $A || ($A = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === h || k === v || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === g || k.$$typeof === o || k.$$typeof === s || k.$$typeof === d || k.$$typeof === b || k.$$typeof === S || k.$$typeof === O || k.$$typeof === y);
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
                  case o:
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
    var m = l, E = f, T = s, I = o, B = t, L = d, N = n, j = x, q = g, F = r, V = a, U = i, J = h, G = !1;
    function ue(k) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(k) || _(k) === l;
    }
    function H(k) {
      return _(k) === f;
    }
    function Z(k) {
      return _(k) === s;
    }
    function ae(k) {
      return _(k) === o;
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
    Ye.AsyncMode = m, Ye.ConcurrentMode = E, Ye.ContextConsumer = T, Ye.ContextProvider = I, Ye.Element = B, Ye.ForwardRef = L, Ye.Fragment = N, Ye.Lazy = j, Ye.Memo = q, Ye.Portal = F, Ye.Profiler = V, Ye.StrictMode = U, Ye.Suspense = J, Ye.isAsyncMode = ue, Ye.isConcurrentMode = H, Ye.isContextConsumer = Z, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ye, Ye.isLazy = be, Ye.isMemo = le, Ye.isPortal = ge, Ye.isProfiler = te, Ye.isStrictMode = se, Ye.isSuspense = ve, Ye.isValidElementType = A, Ye.typeOf = _;
  }()), Ye;
}
var kA;
function S2() {
  return kA || (kA = 1, process.env.NODE_ENV === "production" ? mc.exports = W5() : mc.exports = z5()), mc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cg, jA;
function U5() {
  if (jA) return cg;
  jA = 1;
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
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
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
  return cg = i() ? Object.assign : function(a, o) {
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
var lg, NA;
function mb() {
  if (NA) return lg;
  NA = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lg = e, lg;
}
var fg, DA;
function A2() {
  return DA || (DA = 1, fg = Function.call.bind(Object.prototype.hasOwnProperty)), fg;
}
var dg, LA;
function H5() {
  if (LA) return dg;
  LA = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ mb(), r = {}, n = /* @__PURE__ */ A2();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, l, f) {
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
            h = a[d](o, d, l, s, null, t);
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
var hg, qA;
function G5() {
  if (qA) return hg;
  qA = 1;
  var e = S2(), t = U5(), r = /* @__PURE__ */ mb(), n = /* @__PURE__ */ A2(), i = /* @__PURE__ */ H5(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return hg = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(H) {
      var Z = H && (f && H[f] || H[d]);
      if (typeof Z == "function")
        return Z;
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
    function x(H, Z) {
      return H === Z ? H !== 0 || 1 / H === 1 / Z : H !== H && Z !== Z;
    }
    function y(H, Z) {
      this.message = H, this.data = Z && typeof Z == "object" ? Z : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(H) {
      if (process.env.NODE_ENV !== "production")
        var Z = {}, ae = 0;
      function ce(ye, be, le, ge, te, se, ve) {
        if (ge = ge || v, se = se || le, ve !== r) {
          if (l) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = ge + ":" + le;
            !Z[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + se + "` prop on `" + ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Z[Ee] = !0, ae++);
          }
        }
        return be[le] == null ? ye ? be[le] === null ? new y("The " + te + " `" + se + "` is marked as required " + ("in `" + ge + "`, but its value is `null`.")) : new y("The " + te + " `" + se + "` is marked as required in " + ("`" + ge + "`, but its value is `undefined`.")) : null : H(be, le, ge, te, se);
      }
      var he = ce.bind(null, !1);
      return he.isRequired = ce.bind(null, !0), he;
    }
    function S(H) {
      function Z(ae, ce, he, ye, be, le) {
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
      return b(Z);
    }
    function O() {
      return b(o);
    }
    function A(H) {
      function Z(ae, ce, he, ye, be) {
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
      return b(Z);
    }
    function _() {
      function H(Z, ae, ce, he, ye) {
        var be = Z[ae];
        if (!s(be)) {
          var le = U(be);
          return new y("Invalid " + he + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(H);
    }
    function m() {
      function H(Z, ae, ce, he, ye) {
        var be = Z[ae];
        if (!e.isValidElementType(be)) {
          var le = U(be);
          return new y("Invalid " + he + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(H);
    }
    function E(H) {
      function Z(ae, ce, he, ye, be) {
        if (!(ae[ce] instanceof H)) {
          var le = H.name || v, ge = ue(ae[ce]);
          return new y("Invalid " + ye + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + he + "`, expected ") + ("instance of `" + le + "`."));
        }
        return null;
      }
      return b(Z);
    }
    function T(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function Z(ae, ce, he, ye, be) {
        for (var le = ae[ce], ge = 0; ge < H.length; ge++)
          if (x(le, H[ge]))
            return null;
        var te = JSON.stringify(H, function(ve, k) {
          var Ee = J(k);
          return Ee === "symbol" ? String(k) : k;
        });
        return new y("Invalid " + ye + " `" + be + "` of value `" + String(le) + "` " + ("supplied to `" + he + "`, expected one of " + te + "."));
      }
      return b(Z);
    }
    function I(H) {
      function Z(ae, ce, he, ye, be) {
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
      return b(Z);
    }
    function B(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var Z = 0; Z < H.length; Z++) {
        var ae = H[Z];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(ae) + " at index " + Z + "."
          ), o;
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
      function H(Z, ae, ce, he, ye) {
        return F(Z[ae]) ? null : new y("Invalid " + he + " `" + ye + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
      }
      return b(H);
    }
    function N(H, Z, ae, ce, he) {
      return new y(
        (H || "React class") + ": " + Z + " type `" + ae + "." + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + he + "`."
      );
    }
    function j(H) {
      function Z(ae, ce, he, ye, be) {
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
      return b(Z);
    }
    function q(H) {
      function Z(ae, ce, he, ye, be) {
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
      return b(Z);
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
          var Z = h(H);
          if (Z) {
            var ae = Z.call(H), ce;
            if (Z !== H.entries) {
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
    function V(H, Z) {
      return H === "symbol" ? !0 : Z ? Z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Z instanceof Symbol : !1;
    }
    function U(H) {
      var Z = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : V(Z, H) ? "symbol" : Z;
    }
    function J(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var Z = U(H);
      if (Z === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return Z;
    }
    function G(H) {
      var Z = J(H);
      switch (Z) {
        case "array":
        case "object":
          return "an " + Z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Z;
        default:
          return Z;
      }
    }
    function ue(H) {
      return !H.constructor || !H.constructor.name ? v : H.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, hg;
}
var pg, BA;
function K5() {
  if (BA) return pg;
  BA = 1;
  var e = /* @__PURE__ */ mb();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, pg = function() {
    function n(o, s, l, f, d, h) {
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
var FA;
function V5() {
  if (FA) return yc.exports;
  if (FA = 1, process.env.NODE_ENV !== "production") {
    var e = S2(), t = !0;
    yc.exports = /* @__PURE__ */ G5()(e.isElement, t);
  } else
    yc.exports = /* @__PURE__ */ K5()();
  return yc.exports;
}
var Y5 = /* @__PURE__ */ V5();
const ke = /* @__PURE__ */ Je(Y5);
var X5 = Object.getOwnPropertyNames, Z5 = Object.getOwnPropertySymbols, J5 = Object.prototype.hasOwnProperty;
function WA(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function bc(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), s = a.get(n);
    if (o && s)
      return o === n && s === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function zA(e) {
  return X5(e).concat(Z5(e));
}
var P2 = Object.hasOwn || function(e, t) {
  return J5.call(e, t);
};
function xo(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var E2 = "_owner", UA = Object.getOwnPropertyDescriptor, HA = Object.keys;
function Q5(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function e7(e, t) {
  return xo(e.getTime(), t.getTime());
}
function GA(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, o, s; (o = i.next()) && !o.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (s = l.next()) && !s.done; ) {
      var h = o.value, v = h[0], g = h[1], x = s.value, y = x[0], b = x[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, b, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function t7(e, t, r) {
  var n = HA(e), i = n.length;
  if (HA(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === E2 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !P2(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function eu(e, t, r) {
  var n = zA(e), i = n.length;
  if (zA(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], a === E2 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !P2(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (o = UA(e, a), s = UA(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function r7(e, t) {
  return xo(e.valueOf(), t.valueOf());
}
function n7(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function KA(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var s = t.values(), l = !1, f = 0; (o = s.next()) && !o.done; )
      !l && !n[f] && (l = r.equals(a.value, o.value, a.value, o.value, e, t, r)) && (n[f] = !0), f++;
    if (!l)
      return !1;
  }
  return !0;
}
function i7(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var a7 = "[object Arguments]", o7 = "[object Boolean]", u7 = "[object Date]", s7 = "[object Map]", c7 = "[object Number]", l7 = "[object Object]", f7 = "[object RegExp]", d7 = "[object Set]", h7 = "[object String]", p7 = Array.isArray, VA = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, YA = Object.assign, v7 = Object.prototype.toString.call.bind(Object.prototype.toString);
function g7(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, o = e.areRegExpsEqual, s = e.areSetsEqual, l = e.areTypedArraysEqual;
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
    if (p7(d))
      return t(d, h, v);
    if (VA != null && VA(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return o(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return s(d, h, v);
    var x = v7(d);
    return x === u7 ? r(d, h, v) : x === f7 ? o(d, h, v) : x === s7 ? n(d, h, v) : x === d7 ? s(d, h, v) : x === l7 ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : x === a7 ? i(d, h, v) : x === o7 || x === c7 || x === h7 ? a(d, h, v) : !1;
  };
}
function y7(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? eu : Q5,
    areDatesEqual: e7,
    areMapsEqual: n ? WA(GA, eu) : GA,
    areObjectsEqual: n ? eu : t7,
    arePrimitiveWrappersEqual: r7,
    areRegExpsEqual: n7,
    areSetsEqual: n ? WA(KA, eu) : KA,
    areTypedArraysEqual: n ? eu : i7
  };
  if (r && (i = YA({}, i, r(i))), t) {
    var a = bc(i.areArraysEqual), o = bc(i.areMapsEqual), s = bc(i.areObjectsEqual), l = bc(i.areSetsEqual);
    i = YA({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: l
    });
  }
  return i;
}
function m7(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function b7(e) {
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
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(l, f) {
    return r(l, f, o);
  };
}
var x7 = Oi();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = y7(e), l = g7(s), f = n ? n(l) : m7(l);
  return b7({ circular: r, comparator: l, createState: i, equals: f, strict: o });
}
function w7(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function XA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : w7(i);
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
function _7(e) {
  return P7(e) || A7(e) || S7(e) || O7();
}
function O7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S7(e, t) {
  if (e) {
    if (typeof e == "string") return ZA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ZA(e, t);
  }
}
function ZA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function A7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function P7(e) {
  if (Array.isArray(e)) return e;
}
function E7() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = _7(o), l = s[0], f = s.slice(1);
        if (typeof l == "number") {
          XA(i.bind(null, f), l);
          return;
        }
        i(l), XA(i.bind(null, f));
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
function JA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function QA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? JA(Object(r), !0).forEach(function(n) {
      T2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T2(e, t, r) {
  return t = T7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T7(e) {
  var t = C7(e, "string");
  return Lu(t) === "symbol" ? t : String(t);
}
function C7(e, t) {
  if (Lu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var M7 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, I7 = function(t) {
  return t;
}, R7 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, fu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return QA(QA({}, n), {}, T2({}, i, t(i, r[i])));
  }, {});
}, eP = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(R7(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, $7 = process.env.NODE_ENV !== "production", tl = function(t, r, n, i, a, o, s, l) {
  if ($7 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, o, s, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function k7(e, t) {
  return D7(e) || N7(e, t) || C2(e, t) || j7();
}
function j7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function D7(e) {
  if (Array.isArray(e)) return e;
}
function L7(e) {
  return F7(e) || B7(e) || C2(e) || q7();
}
function q7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C2(e, t) {
  if (e) {
    if (typeof e == "string") return ky(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ky(e, t);
  }
}
function B7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function F7(e) {
  if (Array.isArray(e)) return ky(e);
}
function ky(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var rl = 1e-4, M2 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, I2 = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, tP = function(t, r) {
  return function(n) {
    var i = M2(t, r);
    return I2(i, n);
  };
}, W7 = function(t, r) {
  return function(n) {
    var i = M2(t, r), a = [].concat(L7(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return I2(a, n);
  };
}, rP = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, s = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(b) {
            return parseFloat(b);
          }), d = k7(f, 4);
          i = d[0], a = d[1], o = d[2], s = d[3];
        } else
          tl(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  tl([i, o, a, s].every(function(b) {
    return typeof b == "number" && b >= 0 && b <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = tP(i, o), v = tP(a, s), g = W7(i, o), x = function(S) {
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
}, z7 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, l = function(d, h, v) {
    var g = -(d - h) * n, x = v * a, y = v + (g - x) * s / 1e3, b = v * s / 1e3 + d;
    return Math.abs(b - h) < rl && Math.abs(y) < rl ? [h, 0] : [b, y];
  };
  return l.isStepper = !0, l.dt = s, l;
}, U7 = function() {
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
        return rP(i);
      case "spring":
        return z7();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return rP(i);
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
function nP(e) {
  return K7(e) || G7(e) || R2(e) || H7();
}
function H7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function K7(e) {
  if (Array.isArray(e)) return Ny(e);
}
function iP(e, t) {
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
    t % 2 ? iP(Object(r), !0).forEach(function(n) {
      jy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jy(e, t, r) {
  return t = V7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V7(e) {
  var t = Y7(e, "string");
  return qu(t) === "symbol" ? t : String(t);
}
function Y7(e, t) {
  if (qu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function X7(e, t) {
  return Q7(e) || J7(e, t) || R2(e, t) || Z7();
}
function Z7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R2(e, t) {
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
function J7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function Q7(e) {
  if (Array.isArray(e)) return e;
}
var nl = function(t, r, n) {
  return t + (r - t) * n;
}, Dy = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, e9 = function e(t, r, n) {
  var i = fu(function(a, o) {
    if (Dy(o)) {
      var s = t(o.from, o.to, o.velocity), l = X7(s, 2), f = l[0], d = l[1];
      return kt(kt({}, o), {}, {
        from: f,
        velocity: d
      });
    }
    return o;
  }, r);
  return n < 1 ? fu(function(a, o) {
    return Dy(o) ? kt(kt({}, o), {}, {
      velocity: nl(o.velocity, i[a].velocity, n),
      from: nl(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const t9 = function(e, t, r, n, i) {
  var a = M7(e, t), o = a.reduce(function(b, S) {
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
    s = e9(r, s, A), i(kt(kt(kt({}, e), t), v())), f = S, g() || (l = requestAnimationFrame(h));
  }, y = function(S) {
    d || (d = S);
    var O = (S - d) / n, A = fu(function(m, E) {
      return nl.apply(void 0, nP(E).concat([r(O)]));
    }, o);
    if (i(kt(kt(kt({}, e), t), A)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = fu(function(m, E) {
        return nl.apply(void 0, nP(E).concat([r(1)]));
      }, o);
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
var r9 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function n9(e, t) {
  if (e == null) return {};
  var r = i9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vg(e) {
  return s9(e) || u9(e) || o9(e) || a9();
}
function a9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o9(e, t) {
  if (e) {
    if (typeof e == "string") return Ly(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ly(e, t);
  }
}
function u9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s9(e) {
  if (Array.isArray(e)) return Ly(e);
}
function Ly(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aP(Object(r), !0).forEach(function(n) {
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iu(e, t, r) {
  return t = $2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $2(n.key), n);
  }
}
function f9(e, t, r) {
  return t && l9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $2(e) {
  var t = d9(e, "string");
  return Va(t) === "symbol" ? t : String(t);
}
function d9(e, t) {
  if (Va(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Va(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qy(e, t);
}
function qy(e, t) {
  return qy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qy(e, t);
}
function p9(e) {
  var t = v9();
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
function v9() {
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
  h9(r, e);
  var t = p9(r);
  function r(n, i) {
    var a;
    c9(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, l = o.attributeName, f = o.from, d = o.to, h = o.steps, v = o.children, g = o.duration;
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
  return f9(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, s = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, d = a.to, h = a.from, v = this.state.style;
      if (s) {
        if (!o) {
          var g = {
            style: l ? iu({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!(x7(i.to, d) && i.canBegin && i.isActive)) {
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
      var a = this, o = i.from, s = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = t9(o, s, U7(f), l, this.changeStyle), x = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, x, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, l = i.onAnimationStart, f = o[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, b, S) {
        if (S === 0)
          return y;
        var O = b.duration, A = b.easing, _ = A === void 0 ? "ease" : A, m = b.style, E = b.properties, T = b.onAnimationEnd, I = S > 0 ? o[S - 1] : b, B = E || Object.keys(m);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(vg(y), [a.runJSAnimation.bind(a, {
            from: I.style,
            to: m,
            duration: O,
            easing: _
          }), O]);
        var L = eP(B, O, _), N = Ur(Ur(Ur({}, I.style), m), {}, {
          transition: L
        });
        return [].concat(vg(y), [N, O, T]).filter(I7);
      };
      return this.manager.start([l].concat(vg(o.reduce(g, [d, Math.max(v, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = E7());
      var a = i.begin, o = i.duration, s = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, x = this.manager;
      if (this.unSubscribe = x.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = s ? iu({}, s, l) : l, b = eP(Object.keys(y), o, f);
      x.start([d, a, Ur(Ur({}, y), {}, {
        transition: b
      }), o, h]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var s = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = n9(i, r9), f = Vi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!s || f === 0 || o <= 0)
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
function g9(e, t) {
  return x9(e) || b9(e, t) || m9(e, t) || y9();
}
function y9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m9(e, t) {
  if (e) {
    if (typeof e == "string") return oP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oP(e, t);
  }
}
function oP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function b9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function x9(e) {
  if (Array.isArray(e)) return e;
}
function uP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uP(Object(r), !0).forEach(function(n) {
      w9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function w9(e, t, r) {
  return t = _9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _9(e) {
  var t = O9(e, "string");
  return Bu(t) == "symbol" ? t : String(t);
}
function O9(e, t) {
  if (Bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cP = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (o > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > o ? o : a[v];
    d = "M".concat(t, ",").concat(r + s * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + s * h[1])), d += "L ".concat(t + n, ",").concat(r + i - s * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - s * h[3])), d += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var x = Math.min(o, a);
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
}, S9 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + s), d = Math.max(a, a + s), h = Math.min(o, o + l), v = Math.max(o, o + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, A9 = {
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
}, bb = function(t) {
  var r = sP(sP({}, A9), t), n = Zr(), i = $r(-1), a = g9(i, 2), o = a[0], s = a[1];
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
    canBegin: o > 0,
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
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      isActive: S,
      easing: x
    }, /* @__PURE__ */ $.createElement("path", al({}, xe(r, !0), {
      className: A,
      d: cP(T, I, m, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ $.createElement("path", al({}, xe(r, !0), {
    className: A,
    d: cP(l, f, d, h, v)
  }));
}, P9 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function E9(e, t) {
  if (e == null) return {};
  var r = T9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function T9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lP(e) {
  return R9(e) || I9(e) || M9(e) || C9();
}
function C9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M9(e, t) {
  if (e) {
    if (typeof e == "string") return Wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wy(e, t);
  }
}
function I9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function R9(e) {
  if (Array.isArray(e)) return Wy(e);
}
function Wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var fP = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, $9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    fP(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), fP(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, du = function(t, r) {
  var n = $9(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(lP(a), lP(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, l) {
      return "".concat(o).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, k9 = function(t, r, n) {
  var i = du(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(du(r.reverse(), n).slice(1));
}, j9 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = E9(t, P9);
  if (!r || !r.length)
    return null;
  var s = Ie("recharts-polygon", n);
  if (i && i.length) {
    var l = o.stroke && o.stroke !== "none", f = k9(r, i, a);
    return /* @__PURE__ */ $.createElement("g", {
      className: s
    }, /* @__PURE__ */ $.createElement("path", Ma({}, xe(o, !0), {
      fill: f.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ $.createElement("path", Ma({}, xe(o, !0), {
      fill: "none",
      d: du(r, a)
    })) : null, l ? /* @__PURE__ */ $.createElement("path", Ma({}, xe(o, !0), {
      fill: "none",
      d: du(i, a)
    })) : null);
  }
  var d = du(r, a);
  return /* @__PURE__ */ $.createElement("path", Ma({}, xe(o, !0), {
    fill: d.slice(-1) === "Z" ? o.fill : "none",
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
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = Ie("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ $.createElement("circle", zy({}, xe(t, !1), Tc(t), {
    className: o,
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
var N9 = ["x", "y", "top", "left", "width", "height", "className"];
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
function dP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dP(Object(r), !0).forEach(function(n) {
      L9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L9(e, t, r) {
  return t = q9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q9(e) {
  var t = B9(e, "string");
  return Fu(t) == "symbol" ? t : String(t);
}
function B9(e, t) {
  if (Fu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F9(e, t) {
  if (e == null) return {};
  var r = W9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function W9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var z9 = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, U9 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, x = t.className, y = F9(t, N9), b = D9({
    x: n,
    y: a,
    top: s,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(s) || !oe(f) ? null : /* @__PURE__ */ $.createElement("path", Uy({}, xe(b, !0), {
    className: Ie("recharts-cross", x),
    d: z9(n, a, h, g, s, f)
  }));
}, gg, hP;
function H9() {
  if (hP) return gg;
  hP = 1;
  var e = Hl(), t = VC(), r = vn();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return gg = n, gg;
}
var G9 = H9();
const K9 = /* @__PURE__ */ Je(G9);
var yg, pP;
function V9() {
  if (pP) return yg;
  pP = 1;
  var e = Hl(), t = vn(), r = YC();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return yg = n, yg;
}
var Y9 = V9();
const X9 = /* @__PURE__ */ Je(Y9);
var Z9 = ["cx", "cy", "angle", "ticks", "axisLine"], J9 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
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
function vP(e, t) {
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
    t % 2 ? vP(Object(r), !0).forEach(function(n) {
      Yl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gP(e, t) {
  if (e == null) return {};
  var r = Q9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Q9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function eH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j2(n.key), n);
  }
}
function tH(e, t, r) {
  return t && yP(e.prototype, t), r && yP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rH(e, t, r) {
  return t = ol(t), nH(e, k2() ? Reflect.construct(t, r || [], ol(e).constructor) : t.apply(e, r));
}
function nH(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return iH(e);
}
function iH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function k2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (k2 = function() {
    return !!e;
  })();
}
function ol(e) {
  return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ol(e);
}
function aH(e, t) {
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
  return t = j2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j2(e) {
  var t = oH(e, "string");
  return Ya(t) == "symbol" ? t : String(t);
}
function oH(e, t) {
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
  aH(t, e);
  function t() {
    return eH(this, t), rH(this, t, arguments);
  }
  return tH(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, s = a.cx, l = a.cy;
        return it(s, l, i, o);
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
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = K9(s, function(d) {
        return d.coordinate || 0;
      }), f = X9(s, function(d) {
        return d.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: f.coordinate || 0,
        outerRadius: l.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = n.axisLine, f = gP(n, Z9), d = s.reduce(function(x, y) {
        return [Math.min(x[0], y.coordinate), Math.max(x[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], o), v = it(i, a, d[1], o), g = Ni(Ni(Ni({}, xe(f, !1)), {}, {
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
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.angle, l = i.tickFormatter, f = i.stroke, d = gP(i, J9), h = this.getTickTextAnchor(), v = xe(d, !1), g = xe(o, !1), x = a.map(function(y, b) {
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
          className: Ie("recharts-polar-radius-axis-tick", x2(o)),
          key: "tick-".concat(y.coordinate)
        }, Ji(n.props, y, b)), t.renderTickItem(o, O, l ? l(y.value, b) : y.value));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, x);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), At.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ $.isValidElement(n) ? o = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ $.createElement(pi, hu({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
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
function mP(e, t) {
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
    t % 2 ? mP(Object(r), !0).forEach(function(n) {
      Zl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, D2(n.key), n);
  }
}
function sH(e, t, r) {
  return t && bP(e.prototype, t), r && bP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cH(e, t, r) {
  return t = ul(t), lH(e, N2() ? Reflect.construct(t, r || [], ul(e).constructor) : t.apply(e, r));
}
function lH(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fH(e);
}
function fH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function N2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (N2 = function() {
    return !!e;
  })();
}
function ul(e) {
  return ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ul(e);
}
function dH(e, t) {
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
  return t = D2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D2(e) {
  var t = hH(e, "string");
  return Xa(t) == "symbol" ? t : String(t);
}
function hH(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pH = Math.PI / 180, xP = 1e-5, Jl = /* @__PURE__ */ function(e) {
  dH(t, e);
  function t() {
    return uH(this, t), cH(this, t, arguments);
  }
  return sH(t, [{
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
        var i = this.props, a = i.cx, o = i.cy, s = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = it(a, o, s, n.coordinate), v = it(a, o, s + (l === "inner" ? -1 : 1) * d, n.coordinate);
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
      var i = this.props.orientation, a = Math.cos(-n.coordinate * pH), o;
      return a > xP ? o = i === "outer" ? "start" : "end" : a < -xP ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, s = n.axisLine, l = n.axisLineType, f = Di(Di({}, xe(this.props, !1)), {}, {
        fill: "none"
      }, xe(s, !1));
      if (l === "circle")
        return /* @__PURE__ */ $.createElement(cs, Fi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: o
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, o, v.coordinate);
      });
      return /* @__PURE__ */ $.createElement(j9, Fi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.tickLine, l = i.tickFormatter, f = i.stroke, d = xe(this.props, !1), h = xe(o, !1), v = Di(Di({}, d), {}, {
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
          className: Ie("recharts-polar-angle-axis-tick", x2(o)),
          key: "tick-".concat(x.coordinate)
        }, Ji(n.props, x, y)), s && /* @__PURE__ */ $.createElement("line", Fi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, b)), o && t.renderTickItem(o, O, l ? l(x.value, y) : x.value));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-polar-angle-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ $.isValidElement(n) ? o = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ $.createElement(pi, Fi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
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
var mg, wP;
function vH() {
  if (wP) return mg;
  wP = 1;
  var e = GT(), t = e(Object.getPrototypeOf, Object);
  return mg = t, mg;
}
var bg, _P;
function gH() {
  if (_P) return bg;
  _P = 1;
  var e = Wn(), t = vH(), r = zn(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, s = a.hasOwnProperty, l = o.call(Object);
  function f(d) {
    if (!r(d) || e(d) != n)
      return !1;
    var h = t(d);
    if (h === null)
      return !0;
    var v = s.call(h, "constructor") && h.constructor;
    return typeof v == "function" && v instanceof v && o.call(v) == l;
  }
  return bg = f, bg;
}
var yH = gH();
const mH = /* @__PURE__ */ Je(yH);
var xg, OP;
function bH() {
  if (OP) return xg;
  OP = 1;
  var e = Wn(), t = zn(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return xg = n, xg;
}
var xH = bH();
const wH = /* @__PURE__ */ Je(xH);
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
function _H(e, t) {
  return PH(e) || AH(e, t) || SH(e, t) || OH();
}
function OH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SH(e, t) {
  if (e) {
    if (typeof e == "string") return SP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return SP(e, t);
  }
}
function SP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function PH(e) {
  if (Array.isArray(e)) return e;
}
function AP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? AP(Object(r), !0).forEach(function(n) {
      EH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EH(e, t, r) {
  return t = TH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TH(e) {
  var t = CH(e, "string");
  return Wu(t) == "symbol" ? t : String(t);
}
function CH(e, t) {
  if (Wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var EP = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, MH = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, IH = function(t) {
  var r = PP(PP({}, MH), t), n = Zr(), i = $r(-1), a = _H(i, 2), o = a[0], s = a[1];
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
    canBegin: o > 0,
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
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      easing: x
    }, /* @__PURE__ */ $.createElement("path", sl({}, xe(r, !0), {
      className: O,
      d: EP(T, I, _, m, E),
      ref: n
    })));
  }) : /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("path", sl({}, xe(r, !0), {
    className: O,
    d: EP(l, f, d, h, v)
  })));
}, RH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function zu(e) {
  "@babel/helpers - typeof";
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
}
function $H(e, t) {
  if (e == null) return {};
  var r = kH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kH(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function TP(e, t) {
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
    t % 2 ? TP(Object(r), !0).forEach(function(n) {
      jH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jH(e, t, r) {
  return t = NH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NH(e) {
  var t = DH(e, "string");
  return zu(t) == "symbol" ? t : String(t);
}
function DH(e, t) {
  if (zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LH(e, t) {
  return cl(cl({}, t), e);
}
function qH(e, t) {
  return e === "symbols";
}
function CP(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ $.createElement(bb, r);
    case "trapezoid":
      return /* @__PURE__ */ $.createElement(IH, r);
    case "sector":
      return /* @__PURE__ */ $.createElement(O2, r);
    case "symbols":
      if (qH(t))
        return /* @__PURE__ */ $.createElement(Nm, r);
      break;
    default:
      return null;
  }
}
function BH(e) {
  return /* @__PURE__ */ Vr(e) ? e.props : e;
}
function L2(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? LH : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = $H(e, RH), f;
  if (/* @__PURE__ */ Vr(t))
    f = /* @__PURE__ */ Ot(t, cl(cl({}, l), BH(t)));
  else if (Pe(t))
    f = t(l);
  else if (mH(t) && !wH(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ $.createElement(CP, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ $.createElement(CP, {
      shapeType: r,
      elementProps: h
    });
  }
  return s ? /* @__PURE__ */ $.createElement(Le, {
    className: o
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
function FH(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function WH(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function zH(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function UH(e, t) {
  var r;
  return Ql(e, t) ? r = FH : ef(e, t) ? r = WH : Uu(e, t) && (r = zH), r;
}
function HH(e, t) {
  var r;
  return Ql(e, t) ? r = "trapezoids" : ef(e, t) ? r = "sectors" : Uu(e, t) && (r = "points"), r;
}
function GH(e, t) {
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
function KH(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = HH(r, t), a = GH(r, t), o = n.filter(function(l, f) {
    var d = Qi(a, l), h = r.props[i].filter(function(x) {
      var y = UH(r, t);
      return y(x, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), s = n.indexOf(o[o.length - 1]);
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
function MP(e, t) {
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
    t % 2 ? MP(Object(r), !0).forEach(function(n) {
      Cr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, B2(n.key), n);
  }
}
function YH(e, t, r) {
  return t && IP(e.prototype, t), r && IP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XH(e, t, r) {
  return t = ll(t), ZH(e, q2() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function ZH(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ta(e);
}
function q2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (q2 = function() {
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
function JH(e, t) {
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
  return t = B2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B2(e) {
  var t = QH(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function QH(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hn = /* @__PURE__ */ function(e) {
  JH(t, e);
  function t(r) {
    var n;
    return VH(this, t), n = XH(this, t, [r]), Cr(Ta(n), "pieRef", null), Cr(Ta(n), "sectorRefs", []), Cr(Ta(n), "id", aa("recharts-pie-")), Cr(Ta(n), "handleAnimationEnd", function() {
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
  return YH(t, [{
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
      var a = this.props, o = a.label, s = a.labelLine, l = a.dataKey, f = a.valueKey, d = xe(this.props, !1), h = xe(o, !1), v = xe(s, !1), g = o && o.offsetRadius || 20, x = n.map(function(y, b) {
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
        }, s && t.renderLabelLineItem(s, _), t.renderLabelItem(o, A, mt(y, m)));
      });
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-pie-labels"
      }, x);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? o : v, x = ft(ft({}, f), {}, {
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
        }), /* @__PURE__ */ $.createElement(L2, Ia({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, x)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ $.createElement(Jr, {
        begin: s,
        duration: l,
        isActive: o,
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
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
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
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !Qi(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, s = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, x = this.state.isAnimationFinished;
      if (a || !o || !o.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Ie("recharts-pie", s);
      return /* @__PURE__ */ $.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(S) {
          n.pieRef = S;
        }
      }, this.renderSectors(), l && this.renderLabels(o), At.renderCallByParent(this.props, null, !1), (!g || x) && Rr.renderCallByParent(this.props, o, !1));
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
      var o = a;
      if (Pe(n) && (o = n(i), /* @__PURE__ */ $.isValidElement(o)))
        return o;
      var s = Ie("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ $.createElement(pi, Ia({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]), t;
}(Dr);
Ac = Hn;
Cr(Hn, "displayName", "Pie");
Cr(Hn, "defaultProps", {
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
Cr(Hn, "parseDeltaAngle", function(e, t) {
  var r = Ut(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Cr(Hn, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = xe(e.props, !1), a = vr(n, Gm);
  return r && r.length ? r.map(function(o, s) {
    return ft(ft(ft({
      payload: o
    }, i), o), a && a[s] && a[s].props);
  }) : a && a.length ? a.map(function(o) {
    return ft(ft({}, i), o.props);
  }) : [];
});
Cr(Hn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = b2(i, a), s = n + Ht(e.props.cx, i, i / 2), l = r + Ht(e.props.cy, a, a / 2), f = Ht(e.props.innerRadius, o, 0), d = Ht(e.props.outerRadius, o, o * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Cr(Hn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Ac.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, o = i.startAngle, s = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), x = Ac.parseCoordinateOfPie(t, r), y = Ac.parseDeltaAngle(o, s), b = Math.abs(y), S = f;
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
      B ? q = T.endAngle + Ut(y) * l * (L !== 0 ? 1 : 0) : q = o;
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
var wg, RP;
function eG() {
  if (RP) return wg;
  RP = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var s = -1, l = t(e((i - n) / (a || 1)), 0), f = Array(l); l--; )
      f[o ? l : ++s] = n, n += a;
    return f;
  }
  return wg = r, wg;
}
var _g, $P;
function F2() {
  if ($P) return _g;
  $P = 1;
  var e = cC(), t = 1 / 0, r = 17976931348623157e292;
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
var Og, kP;
function tG() {
  if (kP) return Og;
  kP = 1;
  var e = eG(), t = Ll(), r = F2();
  function n(i) {
    return function(a, o, s) {
      return s && typeof s != "number" && t(a, o, s) && (o = s = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), s = s === void 0 ? a < o ? 1 : -1 : r(s), e(a, o, s, i);
    };
  }
  return Og = n, Og;
}
var Sg, jP;
function rG() {
  if (jP) return Sg;
  jP = 1;
  var e = tG(), t = e();
  return Sg = t, Sg;
}
var nG = rG();
const fl = /* @__PURE__ */ Je(nG);
function Hu(e) {
  "@babel/helpers - typeof";
  return Hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hu(e);
}
function NP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function DP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? NP(Object(r), !0).forEach(function(n) {
      W2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : NP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W2(e, t, r) {
  return t = iG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iG(e) {
  var t = aG(e, "string");
  return Hu(t) == "symbol" ? t : String(t);
}
function aG(e, t) {
  if (Hu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oG = ["Webkit", "Moz", "O", "ms"], uG = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = oG.reduce(function(a, o) {
    return DP(DP({}, a), {}, W2({}, o + n, r));
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
function LP(e, t) {
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
    t % 2 ? LP(Object(r), !0).forEach(function(n) {
      lr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : LP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, U2(n.key), n);
  }
}
function cG(e, t, r) {
  return t && qP(e.prototype, t), r && qP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lG(e, t, r) {
  return t = hl(t), fG(e, z2() ? Reflect.construct(t, r || [], hl(e).constructor) : t.apply(e, r));
}
function fG(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return on(e);
}
function z2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (z2 = function() {
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
function dG(e, t) {
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
  return t = U2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U2(e) {
  var t = hG(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function hG(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pG = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = cu().domain(fl(0, l)).range([a, a + o - s]), d = f.domain().map(function(h) {
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
}, BP = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Qa = /* @__PURE__ */ function(e) {
  dG(t, e);
  function t(r) {
    var n;
    return sG(this, t), n = lG(this, t, [r]), lr(on(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), lr(on(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), lr(on(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null || o({
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
      var a = BP(i) ? i.changedTouches[0] : i;
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
  return cG(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, l = s.gap, f = s.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(o, h), x = t.getIndexInRange(o, v);
      return {
        startIndex: g - g % l,
        endIndex: x === d ? d : x - x % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, l = mt(a[n], s, n);
      return Pe(o) ? o(l, n) : l;
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
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, x = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - s, f + d - h - o) : y < 0 && (y = Math.max(y, f - o, f - s));
      var b = this.getIndex({
        startX: o + y,
        endX: s + y
      });
      (b.startIndex !== v || b.endIndex !== g) && x && x(b), this.setState({
        startX: o + y,
        endX: s + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = BP(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, l = i.startX, f = this.state[o], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, x = d.onChange, y = d.gap, b = d.data, S = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), S[o] = f + O;
      var A = this.getIndex(S), _ = A.startIndex, m = A.endIndex, E = function() {
        var I = b.length - 1;
        return o === "startX" && (s > l ? _ % y === 0 : m % y === 0) || s < l && m === I || o === "endX" && (s > l ? m % y === 0 : _ % y === 0) || s > l && m === I;
      };
      this.setState(lr(lr({}, o, f + O), "brushMoveStartX", n.pageX), function() {
        x && E() && x(A);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, l = o.startX, f = o.endX, d = this.state[i], h = s.indexOf(d);
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
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ $.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.data, f = n.children, d = n.padding, h = Vi.only(f);
      return h ? /* @__PURE__ */ $.cloneElement(h, {
        x: i,
        y: a,
        width: o,
        height: s,
        margin: d,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, s = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, x = l.data, y = l.startIndex, b = l.endIndex, S = Math.max(n, this.props.x), O = Ag(Ag({}, xe(this.props, !1)), {}, {
        x: S,
        y: f,
        width: d,
        height: h
      }), A = g || "Min value: ".concat((a = x[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = x[b]) === null || o === void 0 ? void 0 : o.name);
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
      var a = this.props, o = a.y, s = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
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
        y: o,
        width: h,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, x = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ $.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ $.createElement(pi, dl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: o + s / 2
      }, x), this.getTextOfTick(i)), /* @__PURE__ */ $.createElement(pi, dl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: o + s / 2
      }, x), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, x = v.endX, y = v.isTextActive, b = v.isSlideMoving, S = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(s) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var A = Ie("recharts-brush", a), _ = $.Children.count(o) === 1, m = uG("userSelect", "none");
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
      var i = n.x, a = n.y, o = n.width, s = n.height, l = n.stroke, f = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ $.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + o - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ $.createElement("line", {
        x1: i + 1,
        y1: f + 2,
        x2: i + o - 1,
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
      var a = n.data, o = n.width, s = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return Ag({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: o
        }, a && a.length ? pG({
          data: a,
          width: o,
          x: s,
          travellerWidth: l,
          startIndex: d,
          endIndex: h
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || s !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([s, s + o - l]);
        var v = i.scale.domain().map(function(g) {
          return i.scale(g);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: o,
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
      for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
        var l = Math.floor((o + s) / 2);
        n[l] > i ? s = l : o = l;
      }
      return i >= n[s] ? s : o;
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
var Pg, FP;
function vG() {
  if (FP) return Pg;
  FP = 1;
  var e = zm();
  function t(r, n) {
    var i;
    return e(r, function(a, o, s) {
      return i = n(a, o, s), !i;
    }), !!i;
  }
  return Pg = t, Pg;
}
var Eg, WP;
function gG() {
  if (WP) return Eg;
  WP = 1;
  var e = qT(), t = vn(), r = vG(), n = tr(), i = Ll();
  function a(o, s, l) {
    var f = n(o) ? e : r;
    return l && i(o, s, l) && (s = void 0), f(o, t(s, 3));
  }
  return Eg = a, Eg;
}
var yG = gG();
const mG = /* @__PURE__ */ Je(yG);
var fn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Tg, zP;
function bG() {
  if (zP) return Tg;
  zP = 1;
  var e = iC();
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
var Cg, UP;
function xG() {
  if (UP) return Cg;
  UP = 1;
  var e = bG(), t = rC(), r = vn();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(s, l, f) {
      e(o, l, a(s, l, f));
    }), o;
  }
  return Cg = n, Cg;
}
var wG = xG();
const _G = /* @__PURE__ */ Je(wG);
var Mg, HP;
function OG() {
  if (HP) return Mg;
  HP = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Mg = e, Mg;
}
var Ig, GP;
function SG() {
  if (GP) return Ig;
  GP = 1;
  var e = zm();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, s) {
      return i = !!n(a, o, s), i;
    }), i;
  }
  return Ig = t, Ig;
}
var Rg, KP;
function AG() {
  if (KP) return Rg;
  KP = 1;
  var e = OG(), t = SG(), r = vn(), n = tr(), i = Ll();
  function a(o, s, l) {
    var f = n(o) ? e : t;
    return l && i(o, s, l) && (s = void 0), f(o, r(s, 3));
  }
  return Rg = a, Rg;
}
var PG = AG();
const H2 = /* @__PURE__ */ Je(PG);
var EG = ["x", "y"];
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
function VP(e, t) {
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
    t % 2 ? VP(Object(r), !0).forEach(function(n) {
      TG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TG(e, t, r) {
  return t = CG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CG(e) {
  var t = MG(e, "string");
  return eo(t) == "symbol" ? t : String(t);
}
function MG(e, t) {
  if (eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IG(e, t) {
  if (e == null) return {};
  var r = RG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RG(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $G(e, t) {
  var r = e.x, n = e.y, i = IG(e, EG), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return tu(tu(tu(tu(tu({}, t), i), o ? {
    x: o
  } : {}), l ? {
    y: l
  } : {}), {}, {
    height: d,
    width: v,
    name: t.name,
    radius: t.radius
  });
}
function YP(e) {
  return /* @__PURE__ */ $.createElement(L2, Yy({
    shapeType: "rectangle",
    propTransformer: $G,
    activeClassName: "recharts-active-bar"
  }, e));
}
var kG = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? Qt(!1, "minPointSize callback function received a value with type of ".concat(eo(n), ". Currently only numbers are supported.")) : Qt()), r);
  };
}, jG = ["value", "background"], G2;
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function NG(e, t) {
  if (e == null) return {};
  var r = DG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DG(e, t) {
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
function XP(e, t) {
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
    t % 2 ? XP(Object(r), !0).forEach(function(n) {
      di(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : XP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V2(n.key), n);
  }
}
function qG(e, t, r) {
  return t && ZP(e.prototype, t), r && ZP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BG(e, t, r) {
  return t = vl(t), FG(e, K2() ? Reflect.construct(t, r || [], vl(e).constructor) : t.apply(e, r));
}
function FG(e, t) {
  if (t && (to(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return au(e);
}
function K2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (K2 = function() {
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
function WG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xy(e, t);
}
function Xy(e, t) {
  return Xy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xy(e, t);
}
function di(e, t, r) {
  return t = V2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V2(e) {
  var t = zG(e, "string");
  return to(t) == "symbol" ? t : String(t);
}
function zG(e, t) {
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
  WG(t, e);
  function t() {
    var r;
    LG(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = BG(this, t, [].concat(i)), di(au(r), "state", {
      isAnimationFinished: !1
    }), di(au(r), "id", aa("recharts-bar-")), di(au(r), "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), di(au(r), "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return qG(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, l = a.activeIndex, f = a.activeBar, d = xe(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, x = g ? f : o, y = Ct(Ct(Ct({}, d), h), {}, {
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
        }), /* @__PURE__ */ $.createElement(YP, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
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
          if (o === "horizontal") {
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
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !Qi(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, l = xe(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = NG(f, jG);
        if (!h)
          return null;
        var g = Ct(Ct(Ct(Ct(Ct({}, v), {}, {
          fill: "#eee"
        }, h), l), Ji(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: d,
          key: "background-bar-".concat(d),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ $.createElement(YP, pl({
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
      var a = this.props, o = a.data, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = vr(d, ss);
      if (!h)
        return null;
      var v = f === "vertical" ? o[0].height / 2 : o[0].width / 2, g = function(b, S) {
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
          data: o,
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
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, x = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var b = this.state.isAnimationFinished, S = Ie("recharts-bar", o), O = s && s.allowDataOverflow, A = l && l.allowDataOverflow, _ = O || A, m = Te(y) ? this.id : y;
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
G2 = Si;
di(Si, "displayName", "Bar");
di(Si, "defaultProps", {
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
di(Si, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = P4(n, r);
  if (!g)
    return null;
  var x = t.layout, y = r.props, b = y.dataKey, S = y.children, O = y.minPointSize, A = x === "horizontal" ? o : a, _ = f ? A.scale.domain() : null, m = $4({
    numericAxis: A
  }), E = vr(S, Gm), T = h.map(function(I, B) {
    var L, N, j, q, F, V;
    f ? L = E4(f[d + B], _) : (L = mt(I, b), Array.isArray(L) || (L = [m, L]));
    var U = kG(O, G2.defaultProps.minPointSize)(L[1], B);
    if (x === "horizontal") {
      var J, G = [o.scale(L[0]), o.scale(L[1])], ue = G[0], H = G[1];
      N = vA({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: g.offset,
        entry: I,
        index: B
      }), j = (J = H ?? ue) !== null && J !== void 0 ? J : void 0, q = g.size;
      var Z = ue - H;
      if (F = Number.isNaN(Z) ? 0 : Z, V = {
        x: N,
        y: o.y,
        width: q,
        height: o.height
      }, Math.abs(U) > 0 && Math.abs(F) < Math.abs(U)) {
        var ae = Ut(F || U) * (Math.abs(U) - Math.abs(F));
        j -= ae, F += ae;
      }
    } else {
      var ce = [a.scale(L[0]), a.scale(L[1])], he = ce[0], ye = ce[1];
      if (N = he, j = vA({
        axis: o,
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
      tooltipPayload: [y2(r, I)],
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
function UG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function JP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y2(n.key), n);
  }
}
function HG(e, t, r) {
  return t && JP(e.prototype, t), r && JP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QP(e, t) {
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
    t % 2 ? QP(Object(r), !0).forEach(function(n) {
      tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : QP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tf(e, t, r) {
  return t = Y2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y2(e) {
  var t = GG(e, "string");
  return Gu(t) == "symbol" ? t : String(t);
}
function GG(e, t) {
  if (Gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xb = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
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
    var ue = h2(y, a, v), H = ue.scale, Z = ue.realScaleType;
    H.domain(S).range(I), p2(H);
    var ae = v2(H, Hr(Hr({}, y), {}, {
      realScaleType: Z
    }));
    i === "xAxis" ? (N = b === "top" && !_ || b === "bottom" && _, B = n.left, L = h[E] - N * y.height) : i === "yAxis" && (N = b === "left" && !_ || b === "right" && _, B = h[E] - N * y.width, L = n.top);
    var ce = Hr(Hr(Hr({}, y), ae), {}, {
      realScaleType: Z,
      x: B,
      y: L,
      scale: H,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = Jc(ce, ae), !y.hide && i === "xAxis" ? h[E] += (N ? -1 : 1) * ce.height : y.hide || (h[E] += (N ? -1 : 1) * ce.width), Hr(Hr({}, g), {}, tf({}, x, ce));
  }, {});
}, X2 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, KG = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return X2({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Z2 = /* @__PURE__ */ function() {
  function e(t) {
    UG(this, e), this.scale = t;
  }
  return HG(e, [{
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
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
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
tf(Z2, "EPS", 1e-4);
var wb = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, tf({}, i, Z2.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return _G(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return H2(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function VG(e) {
  return (e % 180 + 180) % 180;
}
var YG = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = VG(i), o = a * Math.PI / 180, s = Math.atan(n / r), l = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, $g, eE;
function XG() {
  if (eE) return $g;
  eE = 1;
  var e = vn(), t = ns(), r = Nl();
  function n(i) {
    return function(a, o, s) {
      var l = Object(a);
      if (!t(a)) {
        var f = e(o, 3);
        a = r(a), o = function(h) {
          return f(l[h], h, l);
        };
      }
      var d = i(a, o, s);
      return d > -1 ? l[f ? a[d] : d] : void 0;
    };
  }
  return $g = n, $g;
}
var kg, tE;
function ZG() {
  if (tE) return kg;
  tE = 1;
  var e = F2();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return kg = t, kg;
}
var jg, rE;
function JG() {
  if (rE) return jg;
  rE = 1;
  var e = XT(), t = vn(), r = ZG(), n = Math.max;
  function i(a, o, s) {
    var l = a == null ? 0 : a.length;
    if (!l)
      return -1;
    var f = s == null ? 0 : r(s);
    return f < 0 && (f = n(l + f, 0)), e(a, t(o, 3), f);
  }
  return jg = i, jg;
}
var Ng, nE;
function QG() {
  if (nE) return Ng;
  nE = 1;
  var e = XG(), t = JG(), r = e(t);
  return Ng = r, Ng;
}
var eK = QG();
const tK = /* @__PURE__ */ Je(eK);
var rK = fT();
const nK = /* @__PURE__ */ Je(rK);
var iK = nK(function(e) {
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
var _b = /* @__PURE__ */ Nr(void 0), Ob = /* @__PURE__ */ Nr(void 0), J2 = /* @__PURE__ */ Nr(void 0), Q2 = /* @__PURE__ */ Nr({}), eM = /* @__PURE__ */ Nr(void 0), tM = /* @__PURE__ */ Nr(0), rM = /* @__PURE__ */ Nr(0), iE = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, l = t.width, f = t.height, d = iK(a);
  return /* @__PURE__ */ $.createElement(_b.Provider, {
    value: n
  }, /* @__PURE__ */ $.createElement(Ob.Provider, {
    value: i
  }, /* @__PURE__ */ $.createElement(Q2.Provider, {
    value: a
  }, /* @__PURE__ */ $.createElement(J2.Provider, {
    value: d
  }, /* @__PURE__ */ $.createElement(eM.Provider, {
    value: o
  }, /* @__PURE__ */ $.createElement(tM.Provider, {
    value: f
  }, /* @__PURE__ */ $.createElement(rM.Provider, {
    value: l
  }, s)))))));
}, aK = function() {
  return er(eM);
};
function nM(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var iM = function(t) {
  var r = er(_b);
  r == null && (process.env.NODE_ENV !== "production" ? Qt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(gl(t), "]. ").concat(nM(r))) : Qt()), n;
}, oK = function() {
  var t = er(_b);
  return li(t);
}, uK = function() {
  var t = er(Ob), r = tK(t, function(n) {
    return H2(n.domain, Number.isFinite);
  });
  return r || li(t);
}, aM = function(t) {
  var r = er(Ob);
  r == null && (process.env.NODE_ENV !== "production" ? Qt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(gl(t), "]. ").concat(nM(r))) : Qt()), n;
}, sK = function() {
  var t = er(J2);
  return t;
}, cK = function() {
  return er(Q2);
}, Sb = function() {
  return er(rM);
}, Ab = function() {
  return er(tM);
};
function Ku(e) {
  "@babel/helpers - typeof";
  return Ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ku(e);
}
function aE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aE(Object(r), !0).forEach(function(n) {
      lK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lK(e, t, r) {
  return t = fK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fK(e) {
  var t = dK(e, "string");
  return Ku(t) == "symbol" ? t : String(t);
}
function dK(e, t) {
  if (Ku(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ku(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hK(e, t) {
  return yK(e) || gK(e, t) || vK(e, t) || pK();
}
function pK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vK(e, t) {
  if (e) {
    if (typeof e == "string") return uE(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uE(e, t);
  }
}
function uE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gK(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function yK(e) {
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
var mK = function(t, r) {
  var n;
  return /* @__PURE__ */ $.isValidElement(t) ? n = /* @__PURE__ */ $.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ $.createElement("line", Zy({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, bK = function(t, r, n, i, a, o, s, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var x = f.y, y = t.y.apply(x, {
      position: o
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
      position: o
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
        position: o
      });
    });
    return fn(f, "discard") && mG(m, function(E) {
      return !t.isInRange(E);
    }) ? null : m;
  }
  return null;
};
function Pb(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, l = e.alwaysShow, f = aK(), d = iM(i), h = aM(a), v = sK();
  if (!f || !v)
    return null;
  Yr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = wb({
    x: d.scale,
    y: h.scale
  }), x = Pt(t), y = Pt(r), b = n && n.length === 2, S = bK(g, x, y, b, v, e.position, d.orientation, h.orientation, e);
  if (!S)
    return null;
  var O = hK(S, 2), A = O[0], _ = A.x, m = A.y, E = O[1], T = E.x, I = E.y, B = fn(e, "hidden") ? "url(#".concat(f, ")") : void 0, L = oE(oE({
    clipPath: B
  }, xe(e, !0)), {}, {
    x1: _,
    y1: m,
    x2: T,
    y2: I
  });
  return /* @__PURE__ */ $.createElement(Le, {
    className: Ie("recharts-reference-line", s)
  }, mK(o, L), At.renderCallByParent(e, KG({
    x1: _,
    y1: m,
    x2: T,
    y2: I
  })));
}
Pb.displayName = "ReferenceLine";
Pb.defaultProps = {
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
function sE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sE(Object(r), !0).forEach(function(n) {
      xK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xK(e, t, r) {
  return t = wK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wK(e) {
  var t = _K(e, "string");
  return Vu(t) == "symbol" ? t : String(t);
}
function _K(e, t) {
  if (Vu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var OK = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = wb({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return fn(t, "discard") && !o.isInRange(s) ? null : s;
};
function ls(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, o = Pt(t), s = Pt(r);
  if (Yr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !s)
    return null;
  var l = OK(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = fn(e, "hidden") ? "url(#".concat(a, ")") : void 0, x = cE(cE({
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
function lE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lE(Object(r), !0).forEach(function(n) {
      SK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SK(e, t, r) {
  return t = AK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AK(e) {
  var t = PK(e, "string");
  return Yu(t) == "symbol" ? t : String(t);
}
function PK(e, t) {
  if (Yu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var EK = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = wb({
    x: d.scale,
    y: h.scale
  }), g = {
    x: t ? v.x.apply(o, {
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
  return fn(a, "discard") && (!v.isInRange(g) || !v.isInRange(x)) ? null : X2(g, x);
};
function fs(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, o = e.alwaysShow, s = e.clipPathId;
  Yr(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Pt(t), f = Pt(r), d = Pt(n), h = Pt(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = EK(l, f, d, h, e);
  if (!g && !v)
    return null;
  var x = fn(e, "hidden") ? "url(#".concat(s, ")") : void 0;
  return /* @__PURE__ */ $.createElement(Le, {
    className: Ie("recharts-reference-area", a)
  }, fs.renderRect(v, fE(fE({
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
  return /* @__PURE__ */ $.isValidElement(e) ? r = /* @__PURE__ */ $.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ $.createElement(bb, Qy({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function oM(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function TK(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return YG(n, r);
}
function CK(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + s
  } : {
    start: n ? i + o : a + s,
    end: n ? i : a
  };
}
function yl(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function MK(e, t) {
  return oM(e, t + 1);
}
function IK(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, l = 0, f = 1, d = o, h = function() {
    var x = n == null ? void 0 : n[l];
    if (x === void 0)
      return {
        v: oM(n, f)
      };
    var y = l, b, S = function() {
      return b === void 0 && (b = r(x, y)), b;
    }, O = x.coordinate, A = l === 0 || yl(e, O, S, d, s);
    A || (l = 0, d = o, f += 1), A && (d = O + e * (S() / 2 + i), l += f);
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
function dE(e, t) {
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
    t % 2 ? dE(Object(r), !0).forEach(function(n) {
      RK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RK(e, t, r) {
  return t = $K(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $K(e) {
  var t = kK(e, "string");
  return Xu(t) == "symbol" ? t : String(t);
}
function kK(e, t) {
  if (Xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jK(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, l = t.end, f = function(v) {
    var g = a[v], x, y = function() {
      return x === void 0 && (x = r(g, v)), x;
    };
    if (v === o - 1) {
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
  }, d = o - 1; d >= 0; d--)
    f(d);
  return a;
}
function NK(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, l = t.start, f = t.end;
  if (a) {
    var d = n[s - 1], h = r(d, s - 1), v = e * (d.coordinate + e * h / 2 - f);
    o[s - 1] = d = Dt(Dt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = yl(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), o[s - 1] = Dt(Dt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var x = a ? s - 1 : s, y = function(O) {
    var A = o[O], _, m = function() {
      return _ === void 0 && (_ = r(A, O)), _;
    };
    if (O === 0) {
      var E = e * (A.coordinate - e * m() / 2 - l);
      o[O] = A = Dt(Dt({}, A), {}, {
        tickCoord: E < 0 ? A.coordinate - E * e : A.coordinate
      });
    } else
      o[O] = A = Dt(Dt({}, A), {}, {
        tickCoord: A.coordinate
      });
    var T = yl(e, A.tickCoord, m, l, f);
    T && (l = A.tickCoord + e * (m() / 2 + i), o[O] = Dt(Dt({}, A), {}, {
      isShow: !0
    }));
  }, b = 0; b < x; b++)
    y(b);
  return o;
}
function Eb(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Xr.isSsr)
    return MK(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = s === "top" || s === "bottom" ? "width" : "height", x = d && g === "width" ? su(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(A, _) {
    var m = Pe(f) ? f(A.value, _) : A.value;
    return g === "width" ? TK(su(m, {
      fontSize: t,
      letterSpacing: r
    }), x, h) : su(m, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, b = i.length >= 2 ? Ut(i[1].coordinate - i[0].coordinate) : 1, S = CK(a, b, g);
  return l === "equidistantPreserveStart" ? IK(b, S, y, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = NK(b, S, y, i, o, l === "preserveStartEnd") : v = jK(b, S, y, i, o), v.filter(function(O) {
    return O.isShow;
  }));
}
var DK = ["viewBox"], LK = ["viewBox"], qK = ["ticks"];
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
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hE(Object(r), !0).forEach(function(n) {
      Tb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dg(e, t) {
  if (e == null) return {};
  var r = BK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function FK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sM(n.key), n);
  }
}
function WK(e, t, r) {
  return t && pE(e.prototype, t), r && pE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zK(e, t, r) {
  return t = ml(t), UK(e, uM() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function UK(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return HK(e);
}
function HK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uM = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function GK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && em(e, t);
}
function em(e, t) {
  return em = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, em(e, t);
}
function Tb(e, t, r) {
  return t = sM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sM(e) {
  var t = KK(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function KK(e, t) {
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
  GK(t, e);
  function t(r) {
    var n;
    return FK(this, t), n = zK(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return WK(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = Dg(n, DK), s = this.props, l = s.viewBox, f = Dg(s, LK);
      return !ja(a, l) || !ja(o, f) || !ja(i, this.state);
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
      var i = this.props, a = i.x, o = i.y, s = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, x, y, b, S, O, A = h ? -1 : 1, _ = n.tickSize || d, m = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = x = n.coordinate, b = o + +!h * l, y = b - A * _, O = y - A * v, S = m;
          break;
        case "left":
          y = b = n.coordinate, x = a + +!h * s, g = x - A * _, S = g - A * v, O = m;
          break;
        case "right":
          y = b = n.coordinate, x = a + +h * s, g = x + A * _, S = g + A * v, O = m;
          break;
        default:
          g = x = n.coordinate, b = o + +h * l, y = b + A * _, O = y + A * v, S = m;
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
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Wt(Wt(Wt({}, xe(this.props, !1)), xe(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Wt(Wt({}, h), {}, {
          x1: i,
          y1: a + v * s,
          x2: i + o,
          y2: a + v * s
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = Wt(Wt({}, h), {}, {
          x1: i + g * o,
          y1: a,
          x2: i + g * o,
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
        var o = this, s = this.props, l = s.tickLine, f = s.stroke, d = s.tick, h = s.tickFormatter, v = s.unit, g = Eb(Wt(Wt({}, this.props), {}, {
          ticks: n
        }), i, a), x = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), b = xe(this.props, !1), S = xe(d, !1), O = Wt(Wt({}, b), {}, {
          fill: "none"
        }, xe(l, !1)), A = g.map(function(_, m) {
          var E = o.getTickLineCoord(_), T = E.line, I = E.tick, B = Wt(Wt(Wt(Wt({
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
          }, Ji(o.props, _, m)), l && /* @__PURE__ */ $.createElement("line", Ra({}, O, T, {
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
      var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = Dg(h, qK), x = v;
      return Pe(l) && (x = v && v.length > 0 ? l(this.props) : l(g)), o <= 0 || s <= 0 || !x || !x.length ? null : /* @__PURE__ */ $.createElement(Le, {
        className: Ie("recharts-cartesian-axis", f),
        ref: function(b) {
          n.layerReference = b;
        }
      }, a && this.renderAxisLine(), this.renderTicks(x, this.state.fontSize, this.state.letterSpacing), At.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ $.isValidElement(n) ? o = /* @__PURE__ */ $.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ $.createElement(pi, Ra({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]), t;
}(VE);
Tb(wo, "displayName", "CartesianAxis");
Tb(wo, "defaultProps", {
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
var VK = ["x1", "y1", "x2", "y2", "key"], YK = ["offset"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function vE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vE(Object(r), !0).forEach(function(n) {
      XK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XK(e, t, r) {
  return t = ZK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZK(e) {
  var t = JK(e, "string");
  return ta(t) == "symbol" ? t : String(t);
}
function JK(e, t) {
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
function gE(e, t) {
  if (e == null) return {};
  var r = QK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var eV = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height;
  return /* @__PURE__ */ $.createElement("rect", {
    x: i,
    y: a,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function cM(e, t) {
  var r;
  if (/* @__PURE__ */ $.isValidElement(e))
    r = /* @__PURE__ */ $.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, l = gE(t, VK), f = xe(l, !1);
    f.offset;
    var d = gE(f, YK);
    r = /* @__PURE__ */ $.createElement("line", Hi({}, d, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function tV(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = Lt(Lt({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(l),
      index: l
    });
    return cM(i, f);
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function rV(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = Lt(Lt({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return cM(i, f);
  });
  return /* @__PURE__ */ $.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function nV(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = s.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, g) {
    return v - g;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? i + o - v : d[g + 1] - v;
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
function iV(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, l = e.height, f = e.verticalPoints;
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
      y: o,
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
var aV = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return d2(Eb(Lt(Lt(Lt({}, wo.defaultProps), n), {}, {
    ticks: Rn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, oV = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return d2(Eb(Lt(Lt(Lt({}, wo.defaultProps), n), {}, {
    ticks: Rn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
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
  var t, r, n, i, a, o, s = Sb(), l = Ab(), f = cK(), d = Lt(Lt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Pa.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Pa.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Pa.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Pa.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Pa.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Pa.verticalFill,
    x: oe(e.x) ? e.x : f.left,
    y: oe(e.y) ? e.y : f.top,
    width: oe(e.width) ? e.width : f.width,
    height: oe(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, g = d.width, x = d.height, y = d.syncWithTicks, b = d.horizontalValues, S = d.verticalValues, O = oK(), A = uK();
  if (!oe(g) || g <= 0 || !oe(x) || x <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || aV, m = d.horizontalCoordinatesGenerator || oV, E = d.horizontalPoints, T = d.verticalPoints;
  if ((!E || !E.length) && Pe(m)) {
    var I = b && b.length, B = m({
      yAxis: A ? Lt(Lt({}, A), {}, {
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
      xAxis: O ? Lt(Lt({}, O), {}, {
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
  }, /* @__PURE__ */ $.createElement(eV, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ $.createElement(tV, Hi({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ $.createElement(rV, Hi({}, d, {
    offset: f,
    verticalPoints: T,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ $.createElement(nV, Hi({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ $.createElement(iV, Hi({}, d, {
    verticalPoints: T
  })));
}
ds.displayName = "CartesianGrid";
var uV = ["type", "layout", "connectNulls", "ref"];
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function sV(e, t) {
  if (e == null) return {};
  var r = cV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cV(e, t) {
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
function yE(e, t) {
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
    t % 2 ? yE(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ea(e) {
  return hV(e) || dV(e) || fV(e) || lV();
}
function lV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fV(e, t) {
  if (e) {
    if (typeof e == "string") return tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tm(e, t);
  }
}
function dV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hV(e) {
  if (Array.isArray(e)) return tm(e);
}
function tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fM(n.key), n);
  }
}
function vV(e, t, r) {
  return t && mE(e.prototype, t), r && mE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gV(e, t, r) {
  return t = bl(t), yV(e, lM() ? Reflect.construct(t, r || [], bl(e).constructor) : t.apply(e, r));
}
function yV(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ui(e);
}
function lM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lM = function() {
    return !!e;
  })();
}
function bl(e) {
  return bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bl(e);
}
function ui(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mV(e, t) {
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
  return t = fM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fM(e) {
  var t = bV(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function bV(e, t) {
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
  mV(t, e);
  function t() {
    var r;
    pV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = gV(this, t, [].concat(i)), Gr(ui(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(ui(r), "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Gr(ui(r), "getStrokeDasharray", function(o, s, l) {
      var f = l.reduce(function(S, O) {
        return S + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var d = Math.floor(o / f), h = o % f, v = s - o, g = [], x = 0, y = 0; x < l.length; y += l[x], ++x)
        if (y + l[x] > h) {
          g = [].concat(Ea(l.slice(0, x)), [h - y]);
          break;
        }
      var b = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ea(t.repeat(l, d)), Ea(g), b).map(function(S) {
        return "".concat(S, "px");
      }).join(", ");
    }), Gr(ui(r), "id", aa("recharts-line-")), Gr(ui(r), "pathRef", function(o) {
      r.mainCurve = o;
    }), Gr(ui(r), "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Gr(ui(r), "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return vV(t, [{
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
      var a = this.props, o = a.points, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = vr(d, ss);
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
          data: o,
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
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
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
    value: function(n, i, a, o) {
      var s = this.props, l = s.type, f = s.layout, d = s.connectNulls;
      s.ref;
      var h = sV(s, uV), v = cr(cr(cr({}, xe(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
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
      var a = this, o = this.props, s = o.points, l = o.strokeDasharray, f = o.isAnimationActive, d = o.animationBegin, h = o.animationDuration, v = o.animationEasing, g = o.animationId, x = o.animateNewValues, y = o.width, b = o.height, S = this.state, O = S.prevPoints, A = S.totalLength;
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
      var a = this.props, o = a.points, s = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return s && o && o.length && (!f && d > 0 || !Qi(f, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, x = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, O = s.length === 1, A = Ie("recharts-line", l), _ = f && f.allowDataOverflow, m = d && d.allowDataOverflow, E = _ || m, T = Te(b) ? this.id : b, I = (n = xe(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, B = I.r, L = B === void 0 ? 3 : B, N = I.strokeWidth, j = N === void 0 ? 2 : N, q = gT(o) ? o : {}, F = q.clipDot, V = F === void 0 ? !0 : F, U = L * 2 + j;
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
      }))) : null, !O && this.renderCurve(E, T), this.renderErrorBar(E, T), (O || o) && this.renderDots(E, V, T), (!y || S) && Rr.renderCallByParent(this.props, s));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Ea(n), [0]) : n, o = [], s = 0; s < i; ++s)
        o = [].concat(Ea(o), Ea(a));
      return o;
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
        var o = Ie("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ $.createElement(cs, pu({}, i, {
          className: o
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
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var x = mt(v, o);
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
var xV = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], dM;
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function wV(e, t) {
  if (e == null) return {};
  var r = _V(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _V(e, t) {
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
function bE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bE(Object(r), !0).forEach(function(n) {
      cn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pM(n.key), n);
  }
}
function SV(e, t, r) {
  return t && xE(e.prototype, t), r && xE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AV(e, t, r) {
  return t = xl(t), PV(e, hM() ? Reflect.construct(t, r || [], xl(e).constructor) : t.apply(e, r));
}
function PV(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ou(e);
}
function hM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hM = function() {
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
function EV(e, t) {
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
  return t = pM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pM(e) {
  var t = TV(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function TV(e, t) {
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
  EV(t, e);
  function t() {
    var r;
    OV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = AV(this, t, [].concat(i)), cn(ou(r), "state", {
      isAnimationFinished: !0
    }), cn(ou(r), "id", aa("recharts-area-")), cn(ou(r), "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(o) && o();
    }), cn(ou(r), "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(o) && o();
    }), r;
  }
  return SV(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = xe(this.props, !1), g = xe(f, !0), x = d.map(function(b, S) {
        var O = si(si(si({
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
      var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].x, f = o[o.length - 1].x, d = n * Math.abs(l - f), h = fi(o.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
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
      var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].y, f = o[o.length - 1].y, d = n * Math.abs(l - f), h = fi(o.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
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
    value: function(n, i, a, o) {
      var s = this.props, l = s.layout, f = s.type, d = s.stroke, h = s.connectNulls, v = s.isRange;
      s.ref;
      var g = wV(s, xV);
      return /* @__PURE__ */ $.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null
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
      var a = this, o = this.props, s = o.points, l = o.baseLine, f = o.isAnimationActive, d = o.animationBegin, h = o.animationDuration, v = o.animationEasing, g = o.animationId, x = this.state, y = x.prevPoints, b = x.prevBaseLine;
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
              return si(si({}, I), {}, {
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
                return si(si({}, I), {}, {
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
      var a = this.props, o = a.points, s = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && o && o.length && (!d && v > 0 || !Qi(d, o) || !Qi(h, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, x = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, O = s.length === 1, A = Ie("recharts-area", l), _ = h && h.allowDataOverflow, m = v && v.allowDataOverflow, E = _ || m, T = Te(b) ? this.id : b, I = (n = xe(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, B = I.r, L = B === void 0 ? 3 : B, N = I.strokeWidth, j = N === void 0 ? 2 : N, q = gT(o) ? o : {}, F = q.clipDot, V = F === void 0 ? !0 : F, U = L * 2 + j;
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
      }))) : null, O ? null : this.renderArea(E, T), (o || O) && this.renderDots(E, V, T), (!y || S) && Rr.renderCallByParent(this.props, s));
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
dM = Ai;
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
  var i = e.layout, a = e.baseValue, o = t.props.baseValue, s = o ?? a;
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
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, x = f && f.length, y = dM.getBaseValue(t, r, n, i), b = g === "horizontal", S = !1, O = h.map(function(_, m) {
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
        ticks: o,
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
  }) : A = b ? i.scale(y) : n.scale(y), si({
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
var Gn = function(t) {
  var r = t.xAxisId, n = Sb(), i = Ab(), a = iM(r);
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
        return Rn(s, !0);
      }
    }))
  );
};
Gn.displayName = "XAxis";
Gn.defaultProps = {
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
var Kn = function(t) {
  var r = t.yAxisId, n = Sb(), i = Ab(), a = aM(r);
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
        return Rn(s, !0);
      }
    }))
  );
};
Kn.displayName = "YAxis";
Kn.defaultProps = {
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
function wE(e) {
  return RV(e) || IV(e) || MV(e) || CV();
}
function CV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MV(e, t) {
  if (e) {
    if (typeof e == "string") return om(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return om(e, t);
  }
}
function IV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RV(e) {
  if (Array.isArray(e)) return om(e);
}
function om(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var um = function(t, r, n, i, a) {
  var o = vr(t, Pb), s = vr(t, ls), l = [].concat(wE(o), wE(s)), f = vr(t, fs), d = "".concat(i, "Id"), h = i[0], v = r;
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
}, Lg = { exports: {} }, _E;
function $V() {
  return _E || (_E = 1, function(e) {
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
    function o(l, f) {
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
        return o(this, g), this;
      var x = this._events[g];
      if (x.fn)
        x.fn === d && (!v || x.once) && (!h || x.context === h) && o(this, g);
      else {
        for (var y = 0, b = [], S = x.length; y < S; y++)
          (x[y].fn !== d || v && !x[y].once || h && x[y].context !== h) && b.push(x[y]);
        b.length ? this._events[g] = b.length === 1 ? b[0] : b : o(this, g);
      }
      return this;
    }, s.prototype.removeAllListeners = function(f) {
      var d;
      return f ? (d = r ? r + f : f, this._events[d] && o(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  }(Lg)), Lg.exports;
}
var kV = $V();
const jV = /* @__PURE__ */ Je(kV);
var qg = new jV(), Bg = "recharts.syncMouseEvents";
function Zu(e) {
  "@babel/helpers - typeof";
  return Zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zu(e);
}
function NV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vM(n.key), n);
  }
}
function LV(e, t, r) {
  return t && DV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fg(e, t, r) {
  return t = vM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vM(e) {
  var t = qV(e, "string");
  return Zu(t) == "symbol" ? t : String(t);
}
function qV(e, t) {
  if (Zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var BV = /* @__PURE__ */ function() {
  function e() {
    NV(this, e), Fg(this, "activeIndex", 0), Fg(this, "coordinateList", []), Fg(this, "layout", "horizontal");
  }
  return LV(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, g = v === void 0 ? null : v;
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
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, h = a + l + f, v = o + this.offset.top + s / 2 + d;
        this.mouseHandlerCallback({
          pageX: h,
          pageY: v
        });
      }
    }
  }]), e;
}();
function FV(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function WV(e, t, r, n) {
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
function gM(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = it(t, r, n, i), s = it(t, r, n, a);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function zV(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = it(s, l, f, h), g = it(s, l, d, h);
      n = v.x, i = v.y, a = g.x, o = g.y;
    } else
      return gM(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
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
function OE(e, t) {
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
    t % 2 ? OE(Object(r), !0).forEach(function(n) {
      UV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : OE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UV(e, t, r) {
  return t = HV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HV(e) {
  var t = GV(e, "string");
  return Ju(t) == "symbol" ? t : String(t);
}
function GV(e, t) {
  if (Ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KV(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, o = e.offset, s = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Zi;
  if (d === "ScatterChart")
    h = i, v = U9;
  else if (d === "BarChart")
    h = WV(f, i, o, l), v = bb;
  else if (f === "radial") {
    var g = gM(i), x = g.cx, y = g.cy, b = g.radius, S = g.startAngle, O = g.endAngle;
    h = {
      cx: x,
      cy: y,
      startAngle: S,
      endAngle: O,
      innerRadius: b,
      outerRadius: b
    }, v = O2;
  } else
    h = {
      points: zV(f, i, o)
    }, v = Zi;
  var A = xc(xc(xc(xc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), h), xe(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: s,
    className: Ie("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ Vr(t.props.cursor) ? /* @__PURE__ */ Ot(t.props.cursor, A) : /* @__PURE__ */ KE(v, A);
}
var VV = ["item"], YV = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function SE(e, t) {
  return JV(e) || ZV(e, t) || mM(e, t) || XV();
}
function XV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function JV(e) {
  if (Array.isArray(e)) return e;
}
function AE(e, t) {
  if (e == null) return {};
  var r = QV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function eY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tY(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bM(n.key), n);
  }
}
function rY(e, t, r) {
  return t && tY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nY(e, t, r) {
  return t = wl(t), iY(e, yM() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function iY(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return We(e);
}
function yM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yM = function() {
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
function aY(e, t) {
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
  return sY(e) || uY(e) || mM(e) || oY();
}
function oY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mM(e, t) {
  if (e) {
    if (typeof e == "string") return cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cm(e, t);
  }
}
function uY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sY(e) {
  if (Array.isArray(e)) return cm(e);
}
function cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PE(e, t) {
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
    t % 2 ? PE(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ae(e, t, r) {
  return t = bM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bM(e) {
  var t = cY(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function cY(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lY = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, fY = {
  width: "100%",
  height: "100%"
}, xM = {
  x: 0,
  y: 0
};
function wc(e) {
  return e;
}
var dY = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, hY = function(t, r, n, i) {
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
      var o = a.coordinate, s = i.radius;
      return ne(ne(ne({}, i), it(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var l = a.coordinate, f = i.angle;
    return ne(ne(ne({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return xM;
}, rf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(oo(s), oo(f)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function wM(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var lm = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = rf(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var g = h === void 0 ? s : h;
      v = Ec(g, o.dataKey, i);
    } else
      v = h && h[n] || s[n];
    return v ? [].concat(oo(l), [y2(f, v)]) : l;
  }, []);
}, EE = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = dY(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = x4(o, s, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = lm(t, r, d, h), g = hY(n, s, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, pY = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = f2(d, a);
  return n.reduce(function(x, y) {
    var b, S = y.props, O = S.type, A = S.dataKey, _ = S.allowDataOverflow, m = S.allowDuplicatedCategory, E = S.scale, T = S.ticks, I = S.includeHidden, B = y.props[o];
    if (x[B])
      return x;
    var L = rf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[o] === B;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), N = L.length, j, q, F;
    FV(y.props.domain, _, O) && (j = Ty(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (F = lu(L, A, "category")));
    var V = wM(O);
    if (!j || j.length === 0) {
      var U, J = (U = y.props.domain) !== null && U !== void 0 ? U : V;
      if (A) {
        if (j = lu(L, A, O), O === "category" && g) {
          var G = OL(j);
          m && G ? (q = j, j = fl(0, N)) : m || (j = mA(J, j, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(oo(ae), [ce]);
          }, []));
        } else if (O === "category")
          m ? j = j.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : j = mA(J, j, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(oo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var ue = A4(L, i.filter(function(ae) {
            return ae.props[o] === B && (I || !ae.props.hide);
          }), A, a, d);
          ue && (j = ue);
        }
        g && (O === "number" || E !== "auto") && (F = lu(L, A, "category"));
      } else g ? j = fl(0, N) : s && s[B] && s[B].hasStack && O === "number" ? j = v === "expand" ? [0, 1] : g2(s[B].stackGroups, l, f) : j = l2(L, i.filter(function(ae) {
        return ae.props[o] === B && (I || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        j = um(h, j, B, a, T), J && (j = Ty(J, j, _));
      else if (O === "category" && J) {
        var H = J, Z = j.every(function(ae) {
          return H.indexOf(ae) >= 0;
        });
        Z && (j = H);
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
}, vY = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = rf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, x = f2(d, a), y = -1;
  return n.reduce(function(b, S) {
    var O = S.props[o], A = wM("number");
    if (!b[O]) {
      y++;
      var _;
      return x ? _ = fl(0, g) : s && s[O] && s[O].hasStack ? (_ = g2(s[O].stackGroups, l, f), _ = um(h, _, O, a)) : (_ = Ty(A, l2(v, n.filter(function(m) {
        return m.props[o] === O && !m.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = um(h, _, O, a)), ne(ne({}, b), {}, Ae({}, O, ne(ne({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: pr(lY, "".concat(a, ".").concat(y % 2), null),
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
}, gY = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = vr(d, a), g = {};
  return v && v.length ? g = pY(t, {
    axes: v,
    graphicalItems: o,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  }) : o && o.length && (g = vY(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, yY = function(t) {
  var r = li(t), n = Rn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Um(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Jc(r, n)
  };
}, TE = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = fr(r, Qa), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, mY = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = $n(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, CE = function(t) {
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
}, bY = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = fr(h, Qa), x = fr(h, Wa), y = Object.keys(l).reduce(function(m, E) {
    var T = l[E], I = T.orientation;
    return !T.mirror && !T.hide ? ne(ne({}, m), {}, Ae({}, I, m[I] + T.width)) : m;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), b = Object.keys(o).reduce(function(m, E) {
    var T = o[E], I = T.orientation;
    return !T.mirror && !T.hide ? ne(ne({}, m), {}, Ae({}, I, pr(m, "".concat(I)) + T.height)) : m;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), S = ne(ne({}, b), y), O = S.bottom;
  g && (S.bottom += g.props.height || Qa.defaultProps.height), x && r && (S = O4(S, i, n, r));
  var A = f - S.left - S.right, _ = d - S.top - S.bottom;
  return ne(ne({
    brushBottom: O
  }, S), {}, {
    // never return negative values for height and width
    width: Math.max(A, 0),
    height: Math.max(_, 0)
  });
}, xY = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, nf = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, o = a === void 0 ? "axis" : a, s = t.validateTooltipEventTypes, l = s === void 0 ? ["axis"] : s, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(b, S) {
    var O = S.graphicalItems, A = S.stackGroups, _ = S.offset, m = S.updateId, E = S.dataStartIndex, T = S.dataEndIndex, I = b.barSize, B = b.layout, L = b.barGap, N = b.barCategoryGap, j = b.maxBarSize, q = CE(B), F = q.numericAxisName, V = q.cateAxisName, U = mY(O), J = [];
    return O.forEach(function(G, ue) {
      var H = rf(b.data, {
        graphicalItems: [G],
        dataStartIndex: E,
        dataEndIndex: T
      }), Z = G.props, ae = Z.dataKey, ce = Z.maxBarSize, he = G.props["".concat(F, "Id")], ye = G.props["".concat(V, "Id")], be = {}, le = f.reduce(function(rr, vt) {
        var yn, Vn, To = S["".concat(vt.axisType, "Map")], Yn = G.props["".concat(vt.axisType, "Id")];
        To && To[Yn] || vt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? Qt(!1, "Specifying a(n) ".concat(vt.axisType, "Id requires a corresponding ").concat(
          vt.axisType,
          "Id on the targeted graphical component "
        ).concat((yn = G == null || (Vn = G.type) === null || Vn === void 0 ? void 0 : Vn.displayName) !== null && yn !== void 0 ? yn : "")) : Qt());
        var gs = To[Yn];
        return ne(ne({}, rr), {}, Ae(Ae({}, vt.axisType, gs), "".concat(vt.axisType, "Ticks"), Rn(gs)));
      }, be), ge = le[V], te = le["".concat(V, "Ticks")], se = A && A[he] && A[he].hasStack && k4(G, A[he].stackGroups), ve = $n(G.type).indexOf("Bar") >= 0, k = Jc(ge, te), Ee = [], we = U && w4({
        barSize: I,
        stackGroups: A,
        totalSize: xY(le, V)
      });
      if (ve) {
        var Fe, ct, at = Te(ce) ? j : ce, Kt = (Fe = (ct = Jc(ge, te, !0)) !== null && ct !== void 0 ? ct : at) !== null && Fe !== void 0 ? Fe : 0;
        Ee = _4({
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
        childIndex: kL(G, b.children),
        item: G
      });
    }), J;
  }, x = function(b, S) {
    var O = b.props, A = b.dataStartIndex, _ = b.dataEndIndex, m = b.updateId;
    if (!$1({
      props: O
    }))
      return null;
    var E = O.children, T = O.layout, I = O.stackOffset, B = O.data, L = O.reverseStackOrder, N = CE(T), j = N.numericAxisName, q = N.cateAxisName, F = vr(E, i), V = R4(B, F, "".concat(j, "Id"), "".concat(q, "Id"), I, L), U = f.reduce(function(Z, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return ne(ne({}, Z), {}, Ae({}, ce, gY(O, ne(ne({}, ae), {}, {
        graphicalItems: F,
        stackGroups: ae.axisType === j && V,
        dataStartIndex: A,
        dataEndIndex: _
      }))));
    }, {}), J = bY(ne(ne({}, U), {}, {
      props: O,
      graphicalItems: F
    }), S == null ? void 0 : S.legendBBox);
    Object.keys(U).forEach(function(Z) {
      U[Z] = h(O, U[Z], J, Z.replace("Map", ""), n);
    });
    var G = U["".concat(q, "Map")], ue = yY(G), H = g(O, ne(ne({}, U), {}, {
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
    aY(b, y);
    function b(S) {
      var O, A, _;
      return eY(this, b), _ = nY(this, b, [S]), Ae(We(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Ae(We(_), "accessibilityManager", new BV()), Ae(We(_), "handleLegendBBoxUpdate", function(m) {
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
        var E = $L(m), T = pr(_.props, "".concat(E));
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
          }), H = Math.min(j, ue.x + ue.width), Z = Math.min(q, ue.y + ue.height), ae = J[F] && J[F].value, ce = lm(_.state, _.props.data, F), he = J[F] ? {
            x: T === "horizontal" ? J[F].coordinate : H,
            y: T === "horizontal" ? Z : J[F].coordinate
          } : xM;
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
        return /* @__PURE__ */ $.createElement(KV, {
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
          ticks: Rn(L, !0)
        }));
      }), Ae(We(_), "renderPolarGrid", function(m) {
        var E = m.props, T = E.radialLines, I = E.polarAngles, B = E.polarRadius, L = _.state, N = L.radiusAxisMap, j = L.angleAxisMap, q = li(N), F = li(j), V = F.cx, U = F.cy, J = F.innerRadius, G = F.outerRadius;
        return /* @__PURE__ */ Ot(m, {
          polarAngles: Array.isArray(I) ? I : Rn(F, !0).map(function(ue) {
            return ue.coordinate;
          }),
          polarRadius: Array.isArray(B) ? B : Rn(q, !0).map(function(ue) {
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
        var m = _.state.formattedGraphicalItems, E = _.props, T = E.children, I = E.width, B = E.height, L = _.props.margin || {}, N = I - (L.left || 0) - (L.right || 0), j = s2({
          children: T,
          formattedGraphicalItems: m,
          legendWidth: N,
          legendContent: d
        });
        if (!j)
          return null;
        var q = j.item, F = AE(j, VV);
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
          fill: yb(E.item),
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
        var B = _.getTooltipEventType(), L = _.state, N = L.isTooltipActive, j = L.tooltipAxis, q = L.activeTooltipIndex, F = L.activeLabel, V = _.props.children, U = fr(V, un), J = I.props, G = J.points, ue = J.isRange, H = J.baseLine, Z = I.item.props, ae = Z.activeDot, ce = Z.hide, he = Z.activeBar, ye = Z.activeShape, be = !!(!ce && N && U && (ae || he || ye)), le = {};
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
      }), _.clipPathId = "".concat((O = S.id) !== null && O !== void 0 ? O : aa("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = lC(_.triggeredAfterMouseMove, (A = S.throttleDelay) !== null && A !== void 0 ? A : 1e3 / 60), _.state = {}, _;
    }
    return rY(b, [{
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
          return l.indexOf(A) >= 0 ? A : o;
        }
        return o;
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
        var A = this.container, _ = A.getBoundingClientRect(), m = xF(_), E = {
          chartX: Math.round(O.pageX - m.left),
          chartY: Math.round(O.pageY - m.top)
        }, T = _.width / A.offsetWidth || 1, I = this.inRange(E.chartX, E.chartY, T);
        if (!I)
          return null;
        var B = this.state, L = B.xAxisMap, N = B.yAxisMap, j = this.getTooltipEventType();
        if (j !== "axis" && L && N) {
          var q = li(L).scale, F = li(N).scale, V = q && q.invert ? q.invert(E.chartX) : null, U = F && F.invert ? F.invert(E.chartY) : null;
          return ne(ne({}, E), {}, {
            xValue: V,
            yValue: U
          });
        }
        var J = EE(this.state, this.props.data, this.props.layout, I);
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
          var q = li(N);
          return wA({
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
          if (I.item === O || I.props.key === O.key || A === $n(I.item.type) && _ === I.childIndex)
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
          var m = SE(_, 2), E = m[0], T = m[1];
          return ne(ne({}, A), {}, Ae({}, E, T.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(A, _) {
          var m = SE(_, 2), E = m[0], T = m[1];
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
            var I = _[E], B = I.props, L = I.item, N = $n(L.type);
            if (N === "Bar") {
              var j = (B.data || []).find(function(U) {
                return S9(O, U);
              });
              if (j)
                return {
                  graphicalItem: I,
                  payload: j
                };
            } else if (N === "RadialBar") {
              var q = (B.data || []).find(function(U) {
                return wA(O, U);
              });
              if (q)
                return {
                  graphicalItem: I,
                  payload: q
                };
            } else if (Ql(I, m) || ef(I, m) || Uu(I, m)) {
              var F = KH({
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
        if (!$1(this))
          return null;
        var A = this.props, _ = A.children, m = A.className, E = A.width, T = A.height, I = A.style, B = A.compact, L = A.title, N = A.desc, j = AE(A, YV), q = xe(j, !1);
        if (B)
          return /* @__PURE__ */ $.createElement(iE, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ $.createElement(Jg, vu({}, q, {
            width: E,
            height: T,
            title: L,
            desc: N
          }), this.renderClipPath(), j1(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var F, V;
          q.tabIndex = (F = this.props.tabIndex) !== null && F !== void 0 ? F : 0, q.role = (V = this.props.role) !== null && V !== void 0 ? V : "application", q.onKeyDown = function(J) {
            O.accessibilityManager.keyboardEvent(J);
          }, q.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var U = this.parseEventsOfWrapper();
        return /* @__PURE__ */ $.createElement(iE, {
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
          style: fY
        }), this.renderClipPath(), j1(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), b;
  }(VE), Ae(r, "displayName", n), Ae(r, "defaultProps", ne({
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
      var N = TE(y);
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
      var j = TE(y), q = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, F = ne(ne({}, EE(b, O, E)), {}, {
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
      var U, J, G, ue, H = fr(A, Qa), Z = H && (U = (J = H.props) === null || J === void 0 ? void 0 : J.startIndex) !== null && U !== void 0 ? U : B, ae = H && (G = (ue = H.props) === null || ue === void 0 ? void 0 : ue.endIndex) !== null && G !== void 0 ? G : L, ce = Z !== B || ae !== L, he = !Te(O), ye = he && !ce ? b.updateId : b.updateId + 1;
      return ne(ne({
        updateId: ye
      }, x(ne(ne({
        props: y
      }, b), {}, {
        updateId: ye,
        dataStartIndex: Z,
        dataEndIndex: ae
      }), b)), {}, {
        prevChildren: A,
        dataStartIndex: Z,
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
}, wY = nf({
  chartName: "LineChart",
  GraphicalChild: hs,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: Kn
  }],
  formatAxisMap: xb
}), _M = nf({
  chartName: "BarChart",
  GraphicalChild: Si,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: Kn
  }],
  formatAxisMap: xb
}), _Y = nf({
  chartName: "PieChart",
  GraphicalChild: Hn,
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
  formatAxisMap: U4,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), OY = nf({
  chartName: "AreaChart",
  GraphicalChild: Ai,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: Kn
  }],
  formatAxisMap: xb
});
const SY = bi("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), AY = { light: "", dark: ".dark" }, OM = Y.createContext(null);
function SM() {
  const e = Y.useContext(OM);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const PY = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, o) => {
  const s = Y.useId(), l = `chart-${e || s.replace(/:/g, "")}`, f = Y.useRef(null), [d, h] = $r(), v = lo(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return bm(() => {
    const g = o && "current" in o ? o.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, o, f]), /* @__PURE__ */ X(OM.Provider, { value: { config: i }, children: /* @__PURE__ */ Ze(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: o || f,
      className: zt(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? SY({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ X(EY, { id: l, config: i }),
        /* @__PURE__ */ X(
          hF,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, _o = Y.forwardRef(PY);
_o.displayName = "Chart";
const EY = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ X(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(AY).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, o]) => {
            var l;
            const s = ((l = o.theme) == null ? void 0 : l[n]) || o.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, ps = un, Oo = Y.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: o,
    labelFormatter: s,
    labelClassName: l,
    formatter: f,
    yAxisFormatter: d,
    color: h,
    nameKey: v,
    labelKey: g
  }, x) => {
    const { config: y } = SM(), b = Y.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, A = `${g || O.dataKey || O.name || "value"}`, _ = fm(y, O, A), m = !g && typeof o == "string" ? ((E = y[o]) == null ? void 0 : E.label) || o : _ == null ? void 0 : _.label;
      return s ? /* @__PURE__ */ X("div", { className: zt("font-medium", l), children: s(m, t) }) : m ? /* @__PURE__ */ X("div", { className: zt("font-medium", l), children: m }) : null;
    }, [
      o,
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
    return /* @__PURE__ */ Ze(
      "div",
      {
        ref: x,
        className: zt(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          S ? null : b,
          /* @__PURE__ */ X("div", { className: "grid gap-2", children: t.map((O, A) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, m = fm(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ X(
              "div",
              {
                className: zt(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, A, O.payload) : /* @__PURE__ */ Ze($a, { children: [
                  m != null && m.icon ? /* @__PURE__ */ X(m.icon, {}) : !a && /* @__PURE__ */ X(
                    "div",
                    {
                      className: zt(
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
                  /* @__PURE__ */ Ze(
                    "div",
                    {
                      className: zt(
                        "flex flex-1 justify-between leading-none",
                        S ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Ze("div", { className: "grid gap-2", children: [
                          S ? b : null,
                          /* @__PURE__ */ X("span", { className: "pr-2 text-f1-foreground", children: (m == null ? void 0 : m.label) || O.name })
                        ] }),
                        O.value && /* @__PURE__ */ X("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: d ? d(String(O.value)) : O.value.toLocaleString() })
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
const Cb = Wa, af = Y.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: o = 0
  }, s) => {
    const { config: l } = SM();
    return r != null && r.length ? /* @__PURE__ */ X(
      "div",
      {
        ref: s,
        className: zt(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: o },
        children: r.map((f) => {
          const d = `${i || f.dataKey || "value"}`, h = fm(
            l,
            f,
            d,
            a
          );
          return /* @__PURE__ */ Ze(
            "div",
            {
              className: zt(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                h != null && h.icon && !t ? /* @__PURE__ */ X(h.icon, {}) : h && /* @__PURE__ */ X(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: f.color
                    }
                  }
                ),
                /* @__PURE__ */ X("span", { className: "text-f1-foreground", children: h == null ? void 0 : h.label })
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
const TY = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let CY = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += TY[r[e] & 63];
  return t;
};
const MY = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, jn = (e) => {
  const t = Object.values(MY);
  return t[e % t.length];
};
function of(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Mb = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Ib = (e) => ({
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
  return Nn(e);
}
function Rb(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const IY = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, o = e === t - 1;
  return /* @__PURE__ */ X(pi, { ...i, textAnchor: a ? "start" : o ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, RY = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  canBeBlurred: i,
  blurArea: a,
  lineType: o = "monotoneX",
  aspect: s,
  marginTop: l = 0
}, f) => {
  const { enabled: d } = j8(), h = Object.keys(t), v = CY(12), g = Rb(e), x = Math.max(
    ...g.flatMap(
      (A) => h.map(
        (_) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${A[_]}`) : `${A[_]}`
        )
      )
    )
  ), y = (n == null ? void 0 : n.width) ?? x + 20, b = !(n != null && n.hide), S = !(r != null && r.hide), O = !i || !d;
  return /* @__PURE__ */ X(_o, { config: t, ref: f, aspect: s, children: /* @__PURE__ */ Ze(
    OY,
    {
      accessibilityLayer: !0,
      data: g,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: l
      },
      children: [
        /* @__PURE__ */ Ze("defs", { children: [
          /* @__PURE__ */ Ze(
            "linearGradient",
            {
              id: `${v}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${b ? y : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ Ze($a, { children: [
                  /* @__PURE__ */ X("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ X("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ X("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ Ze($a, { children: [
                  /* @__PURE__ */ X("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ X("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ X("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ Ze($a, { children: [
                  /* @__PURE__ */ X("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ X("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ X(
            "mask",
            {
              id: `${v}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ X(
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
          h.map((A, _) => /* @__PURE__ */ Ze(
            "linearGradient",
            {
              id: `fill${String(A)}-${v}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ X(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[A].color || jn(_),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ X(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[A].color || jn(_),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            _
          ))
        ] }),
        /* @__PURE__ */ X(
          ds,
          {
            ...uf(),
            mask: `url(#${v}-transparent-edges)`
          }
        ),
        S && /* @__PURE__ */ X(
          Gn,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: r == null ? void 0 : r.tickFormatter,
            ticks: r == null ? void 0 : r.ticks,
            domain: r == null ? void 0 : r.domain,
            interval: 0,
            tick: IY
          }
        ),
        b && /* @__PURE__ */ X(
          Kn,
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
        O && /* @__PURE__ */ X(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(
              Oo,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        h.map((A, _) => /* @__PURE__ */ X(
          Ai,
          {
            isAnimationActive: !1,
            dataKey: A,
            type: o,
            mask: `url(#${v}-transparent-edges)`,
            fill: `url(#fill${A}-${v})`,
            fillOpacity: t[A].dashed ? 0 : 0.4,
            stroke: t[A].color || jn(_),
            strokeWidth: 1.5,
            strokeDasharray: t[A].dashed ? "4 4" : void 0
          },
          A
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ X(
          Cb,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ X(af, {})
          }
        )
      ]
    }
  ) });
}, hJ = So(RY), $Y = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: o,
  legend: s
}, l) => {
  const f = Object.keys(e), d = Rb(t), h = Math.max(
    ...d.flatMap(
      (v) => f.map(
        (g) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${v[g]}`) : `${v[g]}`
        )
      )
    )
  );
  return /* @__PURE__ */ X(_o, { config: e, ref: l, aspect: o, children: /* @__PURE__ */ Ze(
    _M,
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
        /* @__PURE__ */ X(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Oo, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ X(ds, { ...uf() }),
        /* @__PURE__ */ X(
          Kn,
          {
            ...Ib(n),
            tick: !0,
            width: n.width ?? h + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ X(Gn, { ...Mb(r), hide: r == null ? void 0 : r.hide }),
        f.map((v, g) => /* @__PURE__ */ X(
          Si,
          {
            isAnimationActive: !1,
            dataKey: v,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: e[v].color || jn(g),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ X(
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
        s && /* @__PURE__ */ X(
          Cb,
          {
            content: /* @__PURE__ */ X(af, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, pJ = So($Y);
function Cn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function vJ(e, t) {
  const r = Y.createContext(t);
  function n(a) {
    const { children: o, ...s } = a, l = Y.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ X(r.Provider, { value: l, children: o });
  }
  function i(a) {
    const o = Y.useContext(r);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return n.displayName = e + "Provider", [n, i];
}
function AM(e, t = []) {
  let r = [];
  function n(a, o) {
    const s = Y.createContext(o), l = r.length;
    r = [...r, o];
    function f(h) {
      const { scope: v, children: g, ...x } = h, y = (v == null ? void 0 : v[e][l]) || s, b = Y.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ X(y.Provider, { value: b, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || s, x = Y.useContext(g);
      if (x) return x;
      if (o !== void 0) return o;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((o) => Y.createContext(o));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return Y.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return i.scopeName = e, [n, kY(i, ...t)];
}
function kY(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const o = n.reduce((s, { useScope: l, scopeName: f }) => {
        const h = l(a)[`__scope${f}`];
        return { ...s, ...h };
      }, {});
      return Y.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var jY = [
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
], sa = jY.reduce((e, t) => {
  const r = Y.forwardRef((n, i) => {
    const { asChild: a, ...o } = n, s = a ? Om : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ X(s, { ...o, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function NY(e, t) {
  e && xm.flushSync(() => e.dispatchEvent(t));
}
function Ao(e) {
  const t = Y.useRef(e);
  return Y.useEffect(() => {
    t.current = e;
  }), Y.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function DY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e);
  Y.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var LY = "DismissableLayer", dm = "dismissableLayer.update", qY = "dismissableLayer.pointerDownOutside", BY = "dismissableLayer.focusOutside", ME, PM = Y.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), EM = Y.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: o,
      onDismiss: s,
      ...l
    } = e, f = Y.useContext(PM), [d, h] = Y.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = Y.useState({}), x = na(t, (T) => h(T)), y = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(b), O = d ? y.indexOf(d) : -1, A = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= S, m = zY((T) => {
      const I = T.target, B = [...f.branches].some((L) => L.contains(I));
      !_ || B || (i == null || i(T), o == null || o(T), T.defaultPrevented || s == null || s());
    }, v), E = UY((T) => {
      const I = T.target;
      [...f.branches].some((L) => L.contains(I)) || (a == null || a(T), o == null || o(T), T.defaultPrevented || s == null || s());
    }, v);
    return DY((T) => {
      O === f.layers.size - 1 && (n == null || n(T), !T.defaultPrevented && s && (T.preventDefault(), s()));
    }, v), Y.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (ME = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), IE(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = ME);
        };
    }, [d, v, r, f]), Y.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), IE());
    }, [d, f]), Y.useEffect(() => {
      const T = () => g({});
      return document.addEventListener(dm, T), () => document.removeEventListener(dm, T);
    }, []), /* @__PURE__ */ X(
      sa.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: A ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Cn(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Cn(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Cn(
          e.onPointerDownCapture,
          m.onPointerDownCapture
        )
      }
    );
  }
);
EM.displayName = LY;
var FY = "DismissableLayerBranch", WY = Y.forwardRef((e, t) => {
  const r = Y.useContext(PM), n = Y.useRef(null), i = na(t, n);
  return Y.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ X(sa.div, { ...e, ref: i });
});
WY.displayName = FY;
function zY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e), n = Y.useRef(!1), i = Y.useRef(() => {
  });
  return Y.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          TM(
            qY,
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
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function UY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ao(e), n = Y.useRef(!1);
  return Y.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && TM(BY, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function IE() {
  const e = new CustomEvent(dm);
  document.dispatchEvent(e);
}
function TM(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? NY(i, a) : i.dispatchEvent(a);
}
var uo = globalThis != null && globalThis.document ? Y.useLayoutEffect : () => {
}, HY = Y.useId || (() => {
}), GY = 0;
function KY(e) {
  const [t, r] = Y.useState(HY());
  return uo(() => {
    r((n) => n ?? String(GY++));
  }, [e]), t ? `radix-${t}` : "";
}
const VY = ["top", "right", "bottom", "left"], vi = Math.min, dr = Math.max, _l = Math.round, _c = Math.floor, gi = (e) => ({
  x: e,
  y: e
}), YY = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, XY = {
  start: "end",
  end: "start"
};
function hm(e, t, r) {
  return dr(e, vi(t, r));
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
function $b(e) {
  return e === "x" ? "y" : "x";
}
function kb(e) {
  return e === "y" ? "height" : "width";
}
function yi(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function jb(e) {
  return $b(yi(e));
}
function ZY(e, t, r) {
  r === void 0 && (r = !1);
  const n = Po(e), i = jb(e), a = kb(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Ol(o)), [o, Ol(o)];
}
function JY(e) {
  const t = Ol(e);
  return [pm(e), t, pm(t)];
}
function pm(e) {
  return e.replace(/start|end/g, (t) => XY[t]);
}
function QY(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? a : o;
    default:
      return [];
  }
}
function eX(e, t, r, n) {
  const i = Po(e);
  let a = QY(Fn(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(pm)))), a;
}
function Ol(e) {
  return e.replace(/left|right|bottom|top/g, (t) => YY[t]);
}
function tX(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function CM(e) {
  return typeof e != "number" ? tX(e) : {
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
function RE(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = yi(t), o = jb(t), s = kb(o), l = Fn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[s] / 2 - i[s] / 2;
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
      g[o] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[o] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const rX = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: o
  } = r, s = a.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let f = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = RE(f, n, l), v = n, g = {}, x = 0;
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
      platform: o,
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
    }, m && x <= 50 && (x++, typeof m == "object" && (m.placement && (v = m.placement), m.rects && (f = m.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : m.rects), {
      x: d,
      y: h
    } = RE(f, v, l)), y = -1);
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
    rects: o,
    elements: s,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Bn(t, e), x = CM(g), b = s[v ? h === "floating" ? "reference" : "floating" : h], S = Sl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(A)) ? await (a.getScale == null ? void 0 : a.getScale(A)) || {
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
const nX = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: o,
      elements: s,
      middlewareData: l
    } = t, {
      element: f,
      padding: d = 0
    } = Bn(e, t) || {};
    if (f == null)
      return {};
    const h = CM(d), v = {
      x: r,
      y: n
    }, g = jb(i), x = kb(g), y = await o.getDimensions(f), b = g === "y", S = b ? "top" : "left", O = b ? "bottom" : "right", A = b ? "clientHeight" : "clientWidth", _ = a.reference[x] + a.reference[g] - v[g] - a.floating[x], m = v[g] - a.reference[g], E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(f));
    let T = E ? E[A] : 0;
    (!T || !await (o.isElement == null ? void 0 : o.isElement(E))) && (T = s.floating[A] || a.floating[x]);
    const I = _ / 2 - m / 2, B = T / 2 - y[x] / 2 - 1, L = vi(h[S], B), N = vi(h[O], B), j = L, q = T - y[x] - N, F = T / 2 - y[x] / 2 + I, V = hm(j, F, q), U = !l.arrow && Po(i) != null && F !== V && a.reference[x] / 2 - (F < j ? L : N) - y[x] / 2 < 0, J = U ? F < j ? F - j : F - q : 0;
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
}), iX = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: o,
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
      const S = Fn(i), O = yi(s), A = Fn(s) === s, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), m = v || (A || !y ? [Ol(s)] : JY(s)), E = x !== "none";
      !v && E && m.push(...eX(s, y, x, _));
      const T = [s, ...m], I = await Qu(t, b), B = [];
      let L = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && B.push(I[S]), h) {
        const F = ZY(i, o, _);
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
                  const ue = yi(G.placement);
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
function $E(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function kE(e) {
  return VY.some((t) => e[t] >= 0);
}
const aX = function(e) {
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
          }), o = $E(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: kE(o)
            }
          };
        }
        case "escaped": {
          const a = await Qu(t, {
            ...i,
            altBoundary: !0
          }), o = $E(a, r.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: kE(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function oX(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Fn(r), s = Po(r), l = yi(r) === "y", f = ["left", "top"].includes(o) ? -1 : 1, d = a && l ? -1 : 1, h = Bn(t, e);
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
const uX = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: o,
        middlewareData: s
      } = t, l = await oX(t, e);
      return o === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, sX = function(e) {
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
        crossAxis: o = !1,
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
      }, d = await Qu(t, l), h = yi(Fn(i)), v = $b(h);
      let g = f[v], x = f[h];
      if (a) {
        const b = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", O = g + d[b], A = g - d[S];
        g = hm(O, g, A);
      }
      if (o) {
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
            [h]: o
          }
        }
      };
    }
  };
}, cX = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: i,
        rects: a,
        middlewareData: o
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Bn(e, t), d = {
        x: r,
        y: n
      }, h = yi(i), v = $b(h);
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
        const A = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Fn(i)), m = a.reference[h] - a.floating[A] + (_ && ((S = o.offset) == null ? void 0 : S[h]) || 0) + (_ ? 0 : b.crossAxis), E = a.reference[h] + a.reference[A] + (_ ? 0 : ((O = o.offset) == null ? void 0 : O[h]) || 0) - (_ ? b.crossAxis : 0);
        x < m ? x = m : x > E && (x = E);
      }
      return {
        [v]: g,
        [h]: x
      };
    }
  };
}, lX = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        rects: a,
        platform: o,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Bn(e, t), d = await Qu(t, f), h = Fn(i), v = Po(i), g = yi(i) === "y", {
        width: x,
        height: y
      } = a.floating;
      let b, S;
      h === "top" || h === "bottom" ? (b = h, S = v === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (S = h, b = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, A = x - d.left - d.right, _ = vi(y - d[b], O), m = vi(x - d[S], A), E = !t.middlewareData.shift;
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
      const B = await o.getDimensions(s.floating);
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
  return MM(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gn(e) {
  var t;
  return (t = (MM(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function MM(e) {
  return sf() ? e instanceof Node || e instanceof gr(e).Node : !1;
}
function Qr(e) {
  return sf() ? e instanceof Element || e instanceof gr(e).Element : !1;
}
function hn(e) {
  return sf() ? e instanceof HTMLElement || e instanceof gr(e).HTMLElement : !1;
}
function jE(e) {
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
function fX(e) {
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
function Nb(e) {
  const t = Db(), r = Qr(e) ? en(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function dX(e) {
  let t = mi(e);
  for (; hn(t) && !so(t); ) {
    if (Nb(t))
      return t;
    if (cf(t))
      return null;
    t = mi(t);
  }
  return null;
}
function Db() {
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
function mi(e) {
  if (Eo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jE(e) && e.host || // Fallback.
    gn(e)
  );
  return jE(t) ? t.host : t;
}
function IM(e) {
  const t = mi(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && vs(t) ? t : IM(t);
}
function es(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = IM(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = gr(i);
  if (a) {
    const s = vm(o);
    return t.concat(o, o.visualViewport || [], vs(i) ? i : [], s && r ? es(s) : []);
  }
  return t.concat(i, es(i, [], r));
}
function vm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function RM(e) {
  const t = en(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = hn(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = _l(r) !== a || _l(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function Lb(e) {
  return Qr(e) ? e : e.contextElement;
}
function La(e) {
  const t = Lb(e);
  if (!hn(t))
    return gi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = RM(t);
  let o = (a ? _l(r.width) : r.width) / n, s = (a ? _l(r.height) : r.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const hX = /* @__PURE__ */ gi(0);
function $M(e) {
  const t = gr(e);
  return !Db() || !t.visualViewport ? hX : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pX(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== gr(e) ? !1 : t;
}
function ra(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = Lb(e);
  let o = gi(1);
  t && (n ? Qr(n) && (o = La(n)) : o = La(e));
  const s = pX(a, r, n) ? $M(a) : gi(0);
  let l = (i.left + s.x) / o.x, f = (i.top + s.y) / o.y, d = i.width / o.x, h = i.height / o.y;
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
function vX(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = gn(n), s = t ? cf(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = gi(1);
  const d = gi(0), h = hn(n);
  if ((h || !h && !a) && ((Eo(n) !== "body" || vs(o)) && (l = lf(n)), hn(n))) {
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
function gX(e) {
  return Array.from(e.getClientRects());
}
function gm(e, t) {
  const r = lf(e).scrollLeft;
  return t ? t.left + r : ra(gn(e)).left + r;
}
function yX(e) {
  const t = gn(e), r = lf(e), n = e.ownerDocument.body, i = dr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = dr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + gm(e);
  const s = -r.scrollTop;
  return en(n).direction === "rtl" && (o += dr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function mX(e, t) {
  const r = gr(e), n = gn(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    const f = Db();
    (!f || f && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function bX(e, t) {
  const r = ra(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = hn(e) ? La(e) : gi(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: o,
    height: s,
    x: l,
    y: f
  };
}
function NE(e, t, r) {
  let n;
  if (t === "viewport")
    n = mX(e, r);
  else if (t === "document")
    n = yX(gn(e));
  else if (Qr(t))
    n = bX(t, r);
  else {
    const i = $M(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Sl(n);
}
function kM(e, t) {
  const r = mi(e);
  return r === t || !Qr(r) || so(r) ? !1 : en(r).position === "fixed" || kM(r, t);
}
function xX(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = es(e, [], !1).filter((s) => Qr(s) && Eo(s) !== "body"), i = null;
  const a = en(e).position === "fixed";
  let o = a ? mi(e) : e;
  for (; Qr(o) && !so(o); ) {
    const s = en(o), l = Nb(o);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || vs(o) && !l && kM(e, o)) ? n = n.filter((d) => d !== o) : i = s, o = mi(o);
  }
  return t.set(e, n), n;
}
function wX(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? cf(t) ? [] : xX(t, this._c) : [].concat(r), n], s = o[0], l = o.reduce((f, d) => {
    const h = NE(t, d, i);
    return f.top = dr(h.top, f.top), f.right = vi(h.right, f.right), f.bottom = vi(h.bottom, f.bottom), f.left = dr(h.left, f.left), f;
  }, NE(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _X(e) {
  const {
    width: t,
    height: r
  } = RM(e);
  return {
    width: t,
    height: r
  };
}
function OX(e, t, r) {
  const n = hn(t), i = gn(t), a = r === "fixed", o = ra(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = gi(0);
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
  const h = o.left + s.scrollLeft - l.x - f, v = o.top + s.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: o.width,
    height: o.height
  };
}
function Wg(e) {
  return en(e).position === "static";
}
function DE(e, t) {
  if (!hn(e) || en(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return gn(e) === r && (r = r.ownerDocument.body), r;
}
function jM(e, t) {
  const r = gr(e);
  if (cf(e))
    return r;
  if (!hn(e)) {
    let i = mi(e);
    for (; i && !so(i); ) {
      if (Qr(i) && !Wg(i))
        return i;
      i = mi(i);
    }
    return r;
  }
  let n = DE(e, t);
  for (; n && fX(n) && Wg(n); )
    n = DE(n, t);
  return n && so(n) && Wg(n) && !Nb(n) ? r : n || dX(e) || r;
}
const SX = async function(e) {
  const t = this.getOffsetParent || jM, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: OX(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function AX(e) {
  return en(e).direction === "rtl";
}
const PX = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vX,
  getDocumentElement: gn,
  getClippingRect: wX,
  getOffsetParent: jM,
  getElementRects: SX,
  getClientRects: gX,
  getDimensions: _X,
  getScale: La,
  isElement: Qr,
  isRTL: AX
};
function EX(e, t) {
  let r = null, n;
  const i = gn(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, l) {
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
      threshold: dr(0, vi(1, l)) || 1
    };
    let A = !0;
    function _(m) {
      const E = m[0].intersectionRatio;
      if (E !== l) {
        if (!A)
          return o();
        E ? o(!1, E) : n = setTimeout(() => {
          o(!1, 1e-7);
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
  return o(!0), a;
}
function TX(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = Lb(e), d = i || a ? [...f ? es(f) : [], ...es(t)] : [];
  d.forEach((S) => {
    i && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const h = f && s ? EX(f, r) : null;
  let v = -1, g = null;
  o && (g = new ResizeObserver((S) => {
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
const CX = uX, MX = sX, IX = iX, RX = lX, $X = aX, LE = nX, kX = cX, jX = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: PX,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return rX(e, t, {
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
function NM(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qE(e, t) {
  const r = NM(e);
  return Math.round(t * r) / r;
}
function zg(e) {
  const t = Y.useRef(e);
  return Pc(() => {
    t.current = e;
  }), t;
}
function NX(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: a,
      floating: o
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: f
  } = e, [d, h] = Y.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, g] = Y.useState(n);
  Al(v, n) || g(n);
  const [x, y] = Y.useState(null), [b, S] = Y.useState(null), O = Y.useCallback((G) => {
    G !== E.current && (E.current = G, y(G));
  }, []), A = Y.useCallback((G) => {
    G !== T.current && (T.current = G, S(G));
  }, []), _ = a || x, m = o || b, E = Y.useRef(null), T = Y.useRef(null), I = Y.useRef(d), B = l != null, L = zg(l), N = zg(i), j = zg(f), q = Y.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const G = {
      placement: t,
      strategy: r,
      middleware: v
    };
    N.current && (G.platform = N.current), jX(E.current, T.current, G).then((ue) => {
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
  const F = Y.useRef(!1);
  Pc(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Pc(() => {
    if (_ && (E.current = _), m && (T.current = m), _ && m) {
      if (L.current)
        return L.current(_, m, q);
      q();
    }
  }, [_, m, q, L, B]);
  const V = Y.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: O,
    setFloating: A
  }), [O, A]), U = Y.useMemo(() => ({
    reference: _,
    floating: m
  }), [_, m]), J = Y.useMemo(() => {
    const G = {
      position: r,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return G;
    const ue = qE(U.floating, d.x), H = qE(U.floating, d.y);
    return s ? {
      ...G,
      transform: "translate(" + ue + "px, " + H + "px)",
      ...NM(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ue,
      top: H
    };
  }, [r, s, U.floating, d.x, d.y]);
  return Y.useMemo(() => ({
    ...d,
    update: q,
    refs: V,
    elements: U,
    floatingStyles: J
  }), [d, q, V, U, J]);
}
const DX = (e) => {
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
      return n && t(n) ? n.current != null ? LE({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? LE({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, LX = (e, t) => ({
  ...CX(e),
  options: [e, t]
}), qX = (e, t) => ({
  ...MX(e),
  options: [e, t]
}), BX = (e, t) => ({
  ...kX(e),
  options: [e, t]
}), FX = (e, t) => ({
  ...IX(e),
  options: [e, t]
}), WX = (e, t) => ({
  ...RX(e),
  options: [e, t]
}), zX = (e, t) => ({
  ...$X(e),
  options: [e, t]
}), UX = (e, t) => ({
  ...DX(e),
  options: [e, t]
});
var HX = "Arrow", DM = Y.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ X(
    sa.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ X("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
DM.displayName = HX;
var GX = DM;
function KX(e) {
  const [t, r] = Y.useState(void 0);
  return uo(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let o, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          o = f.inlineSize, s = f.blockSize;
        } else
          o = e.offsetWidth, s = e.offsetHeight;
        r({ width: o, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var qb = "Popper", [LM, qM] = AM(qb), [VX, BM] = LM(qb), FM = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = Y.useState(null);
  return /* @__PURE__ */ X(VX, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
FM.displayName = qb;
var WM = "PopperAnchor", zM = Y.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = BM(WM, r), o = Y.useRef(null), s = na(t, o);
    return Y.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || o.current);
    }), n ? null : /* @__PURE__ */ X(sa.div, { ...i, ref: s });
  }
);
zM.displayName = WM;
var Bb = "PopperContent", [YX, XX] = LM(Bb), UM = Y.forwardRef(
  (e, t) => {
    var le, ge, te, se, ve, k;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: o = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...y
    } = e, b = BM(Bb, r), [S, O] = Y.useState(null), A = na(t, (Ee) => O(Ee)), [_, m] = Y.useState(null), E = KX(_), T = (E == null ? void 0 : E.width) ?? 0, I = (E == null ? void 0 : E.height) ?? 0, B = n + (a !== "center" ? "-" + a : ""), L = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, N = Array.isArray(f) ? f : [f], j = N.length > 0, q = {
      padding: L,
      boundary: N.filter(JX),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: F, floatingStyles: V, placement: U, isPositioned: J, middlewareData: G } = NX({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...Ee) => TX(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        LX({ mainAxis: i + I, alignmentAxis: o }),
        l && qX({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? BX() : void 0,
          ...q
        }),
        l && FX({ ...q }),
        WX({
          ...q,
          apply: ({ elements: Ee, rects: we, availableWidth: Fe, availableHeight: ct }) => {
            const { width: at, height: Kt } = we.reference, qr = Ee.floating.style;
            qr.setProperty("--radix-popper-available-width", `${Fe}px`), qr.setProperty("--radix-popper-available-height", `${ct}px`), qr.setProperty("--radix-popper-anchor-width", `${at}px`), qr.setProperty("--radix-popper-anchor-height", `${Kt}px`);
          }
        }),
        _ && UX({ element: _, padding: s }),
        QX({ arrowWidth: T, arrowHeight: I }),
        v && zX({ strategy: "referenceHidden", ...q })
      ]
    }), [ue, H] = KM(U), Z = Ao(x);
    uo(() => {
      J && (Z == null || Z());
    }, [J, Z]);
    const ae = (le = G.arrow) == null ? void 0 : le.x, ce = (ge = G.arrow) == null ? void 0 : ge.y, he = ((te = G.arrow) == null ? void 0 : te.centerOffset) !== 0, [ye, be] = Y.useState();
    return uo(() => {
      S && be(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ X(
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
        children: /* @__PURE__ */ X(
          YX,
          {
            scope: r,
            placedSide: ue,
            onArrowChange: m,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: he,
            children: /* @__PURE__ */ X(
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
UM.displayName = Bb;
var HM = "PopperArrow", ZX = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, GM = Y.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = XX(HM, n), o = ZX[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ X(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [o]: 0,
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
        children: /* @__PURE__ */ X(
          GX,
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
GM.displayName = HM;
function JX(e) {
  return e !== null;
}
var QX = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, S, O;
    const { placement: r, rects: n, middlewareData: i } = t, o = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0, s = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [f, d] = KM(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((S = i.arrow) == null ? void 0 : S.x) ?? 0) + s / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let x = "", y = "";
    return f === "bottom" ? (x = o ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (x = o ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (x = `${-l}px`, y = o ? h : `${g}px`) : f === "left" && (x = `${n.floating.width + l}px`, y = o ? h : `${g}px`), { data: { x, y } };
  }
});
function KM(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var eZ = FM, tZ = zM, rZ = UM, nZ = GM;
function iZ(e, t) {
  return Y.useReducer((r, n) => t[r][n] ?? r, e);
}
var VM = (e) => {
  const { present: t, children: r } = e, n = aZ(t), i = typeof r == "function" ? r({ present: n.isPresent }) : Y.Children.only(r), a = na(n.ref, oZ(i));
  return typeof r == "function" || n.isPresent ? Y.cloneElement(i, { ref: a }) : null;
};
VM.displayName = "Presence";
function aZ(e) {
  const [t, r] = Y.useState(), n = Y.useRef({}), i = Y.useRef(e), a = Y.useRef("none"), o = e ? "mounted" : "unmounted", [s, l] = iZ(o, {
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
  return Y.useEffect(() => {
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
    ref: Y.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Oc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function oZ(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function uZ({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = sZ({ defaultProp: t, onChange: r }), a = e !== void 0, o = a ? e : n, s = Ao(r), l = Y.useCallback(
    (f) => {
      if (a) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && s(h);
      } else
        i(f);
    },
    [a, e, i, s]
  );
  return [o, l];
}
function sZ({
  defaultProp: e,
  onChange: t
}) {
  const r = Y.useState(e), [n] = r, i = Y.useRef(n), a = Ao(t);
  return Y.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var cZ = "VisuallyHidden", YM = Y.forwardRef(
  (e, t) => /* @__PURE__ */ X(
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
YM.displayName = cZ;
var lZ = YM, [ff, gJ] = AM("Tooltip", [
  qM
]), df = qM(), XM = "TooltipProvider", fZ = 700, ym = "tooltip.open", [dZ, Fb] = ff(XM), ZM = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = fZ,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [o, s] = Y.useState(!0), l = Y.useRef(!1), f = Y.useRef(0);
  return Y.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ X(
    dZ,
    {
      scope: t,
      isOpenDelayed: o,
      delayDuration: r,
      onOpen: Y.useCallback(() => {
        window.clearTimeout(f.current), s(!1);
      }, []),
      onClose: Y.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: Y.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
ZM.displayName = XM;
var hf = "Tooltip", [hZ, pf] = ff(hf), JM = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: o,
    delayDuration: s
  } = e, l = Fb(hf, e.__scopeTooltip), f = df(t), [d, h] = Y.useState(null), v = KY(), g = Y.useRef(0), x = o ?? l.disableHoverableContent, y = s ?? l.delayDuration, b = Y.useRef(!1), [S = !1, O] = uZ({
    prop: n,
    defaultProp: i,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ym))) : l.onClose(), a == null || a(T);
    }
  }), A = Y.useMemo(() => S ? b.current ? "delayed-open" : "instant-open" : "closed", [S]), _ = Y.useCallback(() => {
    window.clearTimeout(g.current), b.current = !1, O(!0);
  }, [O]), m = Y.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = Y.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return Y.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ X(eZ, { ...f, children: /* @__PURE__ */ X(
    hZ,
    {
      scope: t,
      contentId: v,
      open: S,
      stateAttribute: A,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: Y.useCallback(() => {
        l.isOpenDelayed ? E() : _();
      }, [l.isOpenDelayed, E, _]),
      onTriggerLeave: Y.useCallback(() => {
        x ? m() : window.clearTimeout(g.current);
      }, [m, x]),
      onOpen: _,
      onClose: m,
      disableHoverableContent: x,
      children: r
    }
  ) });
};
JM.displayName = hf;
var mm = "TooltipTrigger", QM = Y.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = pf(mm, r), a = Fb(mm, r), o = df(r), s = Y.useRef(null), l = na(t, s, i.onTriggerChange), f = Y.useRef(!1), d = Y.useRef(!1), h = Y.useCallback(() => f.current = !1, []);
    return Y.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ X(tZ, { asChild: !0, ...o, children: /* @__PURE__ */ X(
      sa.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: Cn(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: Cn(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: Cn(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: Cn(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: Cn(e.onBlur, i.onClose),
        onClick: Cn(e.onClick, i.onClose)
      }
    ) });
  }
);
QM.displayName = mm;
var pZ = "TooltipPortal", [yJ, vZ] = ff(pZ, {
  forceMount: void 0
}), co = "TooltipContent", eI = Y.forwardRef(
  (e, t) => {
    const r = vZ(co, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, o = pf(co, e.__scopeTooltip);
    return /* @__PURE__ */ X(VM, { present: n || o.open, children: o.disableHoverableContent ? /* @__PURE__ */ X(tI, { side: i, ...a, ref: t }) : /* @__PURE__ */ X(gZ, { side: i, ...a, ref: t }) });
  }
), gZ = Y.forwardRef((e, t) => {
  const r = pf(co, e.__scopeTooltip), n = Fb(co, e.__scopeTooltip), i = Y.useRef(null), a = na(t, i), [o, s] = Y.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = Y.useCallback(() => {
    s(null), h(!1);
  }, [h]), g = Y.useCallback(
    (x, y) => {
      const b = x.currentTarget, S = { x: x.clientX, y: x.clientY }, O = xZ(S, b.getBoundingClientRect()), A = wZ(S, O), _ = _Z(y.getBoundingClientRect()), m = SZ([...A, ..._]);
      s(m), h(!0);
    },
    [h]
  );
  return Y.useEffect(() => () => v(), [v]), Y.useEffect(() => {
    if (l && d) {
      const x = (b) => g(b, d), y = (b) => g(b, l);
      return l.addEventListener("pointerleave", x), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), Y.useEffect(() => {
    if (o) {
      const x = (y) => {
        const b = y.target, S = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(b)) || (d == null ? void 0 : d.contains(b)), A = !OZ(S, o);
        O ? v() : A && (v(), f());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, d, o, f, v]), /* @__PURE__ */ X(tI, { ...e, ref: a });
}), [yZ, mZ] = ff(hf, { isInside: !1 }), tI = Y.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: o,
      ...s
    } = e, l = pf(co, r), f = df(r), { onClose: d } = l;
    return Y.useEffect(() => (document.addEventListener(ym, d), () => document.removeEventListener(ym, d)), [d]), Y.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ X(
      EM,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ Ze(
          rZ,
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
              /* @__PURE__ */ X(oT, { children: n }),
              /* @__PURE__ */ X(yZ, { scope: r, isInside: !0, children: /* @__PURE__ */ X(lZ, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
eI.displayName = co;
var rI = "TooltipArrow", bZ = Y.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = df(r);
    return mZ(
      rI,
      r
    ).isInside ? null : /* @__PURE__ */ X(nZ, { ...i, ...n, ref: t });
  }
);
bZ.displayName = rI;
function xZ(e, t) {
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
function wZ(e, t, r = 5) {
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
function _Z(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function OZ(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, o = t.length - 1; a < t.length; o = a++) {
    const s = t[a].x, l = t[a].y, f = t[o].x, d = t[o].y;
    l > n != d > n && r < (f - s) * (n - l) / (d - l) + s && (i = !i);
  }
  return i;
}
function SZ(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), AZ(t);
}
function AZ(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], o = t[t.length - 2];
      if ((a.x - o.x) * (i.y - o.y) >= (a.y - o.y) * (i.x - o.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const i = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], o = r[r.length - 2];
      if ((a.x - o.x) * (i.y - o.y) >= (a.y - o.y) * (i.x - o.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var PZ = ZM, EZ = JM, TZ = QM, nI = eI;
const CZ = PZ, MZ = EZ, IZ = TZ, iI = Y.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ X(
  nI,
  {
    ref: n,
    sideOffset: t,
    className: zt(
      "z-50 overflow-hidden rounded bg-f1-background-bold px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
iI.displayName = nI.displayName;
const RZ = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ Ze(CZ, { children: [
    /* @__PURE__ */ X("div", { className: "w-full", ref: r, children: /* @__PURE__ */ X("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const o = i.value / n * 100, s = i.color || jn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ Ze(MZ, { children: [
        /* @__PURE__ */ X(
          IZ,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${o}%` },
            title: i.name,
            asChild: !0,
            children: /* @__PURE__ */ X(
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
        /* @__PURE__ */ Ze(iI, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ X(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: s }
            }
          ),
          /* @__PURE__ */ X("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ Ze("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
            i.value,
            " (",
            l(i.value),
            "%)"
          ] })
        ] })
      ] }, i.name);
    }) }) }),
    t && /* @__PURE__ */ X(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((i, a) => {
          const o = i.color || jn(a);
          return /* @__PURE__ */ Ze(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ X(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: o }
                  }
                ),
                /* @__PURE__ */ X("span", { className: "text-f1-foreground", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, mJ = So(RZ), $Z = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, o) => {
  const s = Object.keys(t), l = Rb(e), f = Math.max(
    ...l.flatMap(
      (d) => s.map(
        (h) => of(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ X(_o, { config: t, ref: o, aspect: a, children: /* @__PURE__ */ Ze(
    wY,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ X(ds, { ...uf() }),
        !(r != null && r.hide) && /* @__PURE__ */ X(Gn, { ...Mb(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ X(
          Kn,
          {
            ...Ib(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ X(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Oo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        s.map((d, h) => /* @__PURE__ */ X(
          hs,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color || jn(h),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, bJ = So($Z), kZ = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const o = e.map((f, d) => {
    var h;
    return {
      ...f,
      fill: ((h = t[f.label]) == null ? void 0 : h.color) || jn(d)
    };
  }), l = e.map((f) => f.value).reduce((f, d) => f + d);
  return l === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ X(
    _o,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Ze(_Y, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        l !== 0 && /* @__PURE__ */ X(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Oo, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ X(
          Hn,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: o,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: /* @__PURE__ */ X(
              At,
              {
                content: ({ viewBox: f }) => {
                  if (f && "cx" in f && "cy" in f)
                    return /* @__PURE__ */ Ze(
                      "text",
                      {
                        x: f.cx,
                        y: f.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          /* @__PURE__ */ X(
                            "tspan",
                            {
                              x: f.cx,
                              y: (f.cy || 0) + 8,
                              className: "fill-f1-foreground text-2xl font-semibold",
                              children: r != null && r.number ? i ? i(String(r.number)) : r.number : null
                            }
                          ),
                          /* @__PURE__ */ X(
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
        /* @__PURE__ */ X(
          Cb,
          {
            content: /* @__PURE__ */ X(af, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, xJ = So(kZ);
var uu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var jZ = uu.exports, BE;
function NZ() {
  return BE || (BE = 1, function(e, t) {
    (function() {
      var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, x = 1, y = 2, b = 1, S = 2, O = 4, A = 8, _ = 16, m = 32, E = 64, T = 128, I = 256, B = 512, L = 30, N = "...", j = 800, q = 16, F = 1, V = 2, U = 3, J = 1 / 0, G = 9007199254740991, ue = 17976931348623157e292, H = NaN, Z = 4294967295, ae = Z - 1, ce = Z >>> 1, he = [
        ["ary", T],
        ["bind", b],
        ["bindKey", S],
        ["curry", A],
        ["curryRight", _],
        ["flip", B],
        ["partial", m],
        ["partialRight", E],
        ["rearg", I]
      ], ye = "[object Arguments]", be = "[object Array]", le = "[object AsyncFunction]", ge = "[object Boolean]", te = "[object Date]", se = "[object DOMException]", ve = "[object Error]", k = "[object Function]", Ee = "[object GeneratorFunction]", we = "[object Map]", Fe = "[object Number]", ct = "[object Null]", at = "[object Object]", Kt = "[object Promise]", qr = "[object Proxy]", rr = "[object RegExp]", vt = "[object Set]", yn = "[object String]", Vn = "[object Symbol]", To = "[object Undefined]", Yn = "[object WeakMap]", gs = "[object WeakSet]", Co = "[object ArrayBuffer]", ca = "[object DataView]", vf = "[object Float32Array]", gf = "[object Float64Array]", yf = "[object Int8Array]", mf = "[object Int16Array]", bf = "[object Int32Array]", xf = "[object Uint8Array]", wf = "[object Uint8ClampedArray]", _f = "[object Uint16Array]", Of = "[object Uint32Array]", sI = /\b__p \+= '';/g, cI = /\b(__p \+=) '' \+/g, lI = /(__e\(.*?\)|\b__t\)) \+\n'';/g, zb = /&(?:amp|lt|gt|quot|#39);/g, Ub = /[&<>"']/g, fI = RegExp(zb.source), dI = RegExp(Ub.source), hI = /<%-([\s\S]+?)%>/g, pI = /<%([\s\S]+?)%>/g, Hb = /<%=([\s\S]+?)%>/g, vI = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gI = /^\w*$/, yI = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sf = /[\\^$.*+?()[\]{}|]/g, mI = RegExp(Sf.source), Af = /^\s+/, bI = /\s/, xI = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, wI = /\{\n\/\* \[wrapped with (.+)\] \*/, _I = /,? & /, OI = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, SI = /[()=,{}\[\]\/\s]/, AI = /\\(\\)?/g, PI = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Gb = /\w*$/, EI = /^[-+]0x[0-9a-f]+$/i, TI = /^0b[01]+$/i, CI = /^\[object .+?Constructor\]$/, MI = /^0o[0-7]+$/i, II = /^(?:0|[1-9]\d*)$/, RI = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ys = /($^)/, $I = /['\n\r\u2028\u2029\\]/g, ms = "\\ud800-\\udfff", kI = "\\u0300-\\u036f", jI = "\\ufe20-\\ufe2f", NI = "\\u20d0-\\u20ff", Kb = kI + jI + NI, Vb = "\\u2700-\\u27bf", Yb = "a-z\\xdf-\\xf6\\xf8-\\xff", DI = "\\xac\\xb1\\xd7\\xf7", LI = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", qI = "\\u2000-\\u206f", BI = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Xb = "A-Z\\xc0-\\xd6\\xd8-\\xde", Zb = "\\ufe0e\\ufe0f", Jb = DI + LI + qI + BI, Pf = "['’]", FI = "[" + ms + "]", Qb = "[" + Jb + "]", bs = "[" + Kb + "]", e0 = "\\d+", WI = "[" + Vb + "]", t0 = "[" + Yb + "]", r0 = "[^" + ms + Jb + e0 + Vb + Yb + Xb + "]", Ef = "\\ud83c[\\udffb-\\udfff]", zI = "(?:" + bs + "|" + Ef + ")", n0 = "[^" + ms + "]", Tf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cf = "[\\ud800-\\udbff][\\udc00-\\udfff]", la = "[" + Xb + "]", i0 = "\\u200d", a0 = "(?:" + t0 + "|" + r0 + ")", UI = "(?:" + la + "|" + r0 + ")", o0 = "(?:" + Pf + "(?:d|ll|m|re|s|t|ve))?", u0 = "(?:" + Pf + "(?:D|LL|M|RE|S|T|VE))?", s0 = zI + "?", c0 = "[" + Zb + "]?", HI = "(?:" + i0 + "(?:" + [n0, Tf, Cf].join("|") + ")" + c0 + s0 + ")*", GI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", KI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", l0 = c0 + s0 + HI, VI = "(?:" + [WI, Tf, Cf].join("|") + ")" + l0, YI = "(?:" + [n0 + bs + "?", bs, Tf, Cf, FI].join("|") + ")", XI = RegExp(Pf, "g"), ZI = RegExp(bs, "g"), Mf = RegExp(Ef + "(?=" + Ef + ")|" + YI + l0, "g"), JI = RegExp([
        la + "?" + t0 + "+" + o0 + "(?=" + [Qb, la, "$"].join("|") + ")",
        UI + "+" + u0 + "(?=" + [Qb, la + a0, "$"].join("|") + ")",
        la + "?" + a0 + "+" + o0,
        la + "+" + u0,
        KI,
        GI,
        e0,
        VI
      ].join("|"), "g"), QI = RegExp("[" + i0 + ms + Kb + Zb + "]"), eR = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, tR = [
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
      ], rR = -1, ot = {};
      ot[vf] = ot[gf] = ot[yf] = ot[mf] = ot[bf] = ot[xf] = ot[wf] = ot[_f] = ot[Of] = !0, ot[ye] = ot[be] = ot[Co] = ot[ge] = ot[ca] = ot[te] = ot[ve] = ot[k] = ot[we] = ot[Fe] = ot[at] = ot[rr] = ot[vt] = ot[yn] = ot[Yn] = !1;
      var rt = {};
      rt[ye] = rt[be] = rt[Co] = rt[ca] = rt[ge] = rt[te] = rt[vf] = rt[gf] = rt[yf] = rt[mf] = rt[bf] = rt[we] = rt[Fe] = rt[at] = rt[rr] = rt[vt] = rt[yn] = rt[Vn] = rt[xf] = rt[wf] = rt[_f] = rt[Of] = !0, rt[ve] = rt[k] = rt[Yn] = !1;
      var nR = {
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
      }, iR = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, aR = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, oR = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, uR = parseFloat, sR = parseInt, f0 = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, cR = typeof self == "object" && self && self.Object === Object && self, Rt = f0 || cR || Function("return this")(), If = t && !t.nodeType && t, Pi = If && !0 && e && !e.nodeType && e, d0 = Pi && Pi.exports === If, Rf = d0 && f0.process, yr = function() {
        try {
          var W = Pi && Pi.require && Pi.require("util").types;
          return W || Rf && Rf.binding && Rf.binding("util");
        } catch {
        }
      }(), h0 = yr && yr.isArrayBuffer, p0 = yr && yr.isDate, v0 = yr && yr.isMap, g0 = yr && yr.isRegExp, y0 = yr && yr.isSet, m0 = yr && yr.isTypedArray;
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
      function lR(W, Q, K, de) {
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
      function fR(W, Q) {
        for (var K = W == null ? 0 : W.length; K-- && Q(W[K], K, W) !== !1; )
          ;
        return W;
      }
      function b0(W, Q) {
        for (var K = -1, de = W == null ? 0 : W.length; ++K < de; )
          if (!Q(W[K], K, W))
            return !1;
        return !0;
      }
      function Xn(W, Q) {
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
      function Zn(W, Q) {
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
      function dR(W, Q, K, de) {
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
      var hR = Nf("length");
      function pR(W) {
        return W.split("");
      }
      function vR(W) {
        return W.match(OI) || [];
      }
      function x0(W, Q, K) {
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
        return Q === Q ? ER(W, Q, K) : ws(W, w0, K);
      }
      function gR(W, Q, K, de) {
        for (var Ce = K - 1, Ue = W.length; ++Ce < Ue; )
          if (de(W[Ce], Q))
            return Ce;
        return -1;
      }
      function w0(W) {
        return W !== W;
      }
      function _0(W, Q) {
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
      function O0(W, Q, K, de, Ce) {
        return Ce(W, function(Ue, xt, et) {
          K = de ? (de = !1, Ue) : Q(K, Ue, xt, et);
        }), K;
      }
      function yR(W, Q) {
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
      function mR(W, Q) {
        return lt(Q, function(K) {
          return [K, W[K]];
        });
      }
      function S0(W) {
        return W && W.slice(0, T0(W) + 1).replace(Af, "");
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
      function A0(W, Q) {
        for (var K = -1, de = W.length; ++K < de && fa(Q, W[K], 0) > -1; )
          ;
        return K;
      }
      function P0(W, Q) {
        for (var K = W.length; K-- && fa(Q, W[K], 0) > -1; )
          ;
        return K;
      }
      function bR(W, Q) {
        for (var K = W.length, de = 0; K--; )
          W[K] === Q && ++de;
        return de;
      }
      var xR = Df(nR), wR = Df(iR);
      function _R(W) {
        return "\\" + oR[W];
      }
      function OR(W, Q) {
        return W == null ? r : W[Q];
      }
      function da(W) {
        return QI.test(W);
      }
      function SR(W) {
        return eR.test(W);
      }
      function AR(W) {
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
      function E0(W, Q) {
        return function(K) {
          return W(Q(K));
        };
      }
      function Jn(W, Q) {
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
      function PR(W) {
        var Q = -1, K = Array(W.size);
        return W.forEach(function(de) {
          K[++Q] = [de, de];
        }), K;
      }
      function ER(W, Q, K) {
        for (var de = K - 1, Ce = W.length; ++de < Ce; )
          if (W[de] === Q)
            return de;
        return -1;
      }
      function TR(W, Q, K) {
        for (var de = K + 1; de--; )
          if (W[de] === Q)
            return de;
        return de;
      }
      function ha(W) {
        return da(W) ? MR(W) : hR(W);
      }
      function Br(W) {
        return da(W) ? IR(W) : pR(W);
      }
      function T0(W) {
        for (var Q = W.length; Q-- && bI.test(W.charAt(Q)); )
          ;
        return Q;
      }
      var CR = Df(aR);
      function MR(W) {
        for (var Q = Mf.lastIndex = 0; Mf.test(W); )
          ++Q;
        return Q;
      }
      function IR(W) {
        return W.match(Mf) || [];
      }
      function RR(W) {
        return W.match(JI) || [];
      }
      var $R = function W(Q) {
        Q = Q == null ? Rt : pa.defaults(Rt.Object(), Q, pa.pick(Rt, tR));
        var K = Q.Array, de = Q.Date, Ce = Q.Error, Ue = Q.Function, xt = Q.Math, et = Q.Object, Wf = Q.RegExp, kR = Q.String, br = Q.TypeError, Os = K.prototype, jR = Ue.prototype, va = et.prototype, Ss = Q["__core-js_shared__"], As = jR.toString, Xe = va.hasOwnProperty, NR = 0, C0 = function() {
          var u = /[^.]+$/.exec(Ss && Ss.keys && Ss.keys.IE_PROTO || "");
          return u ? "Symbol(src)_1." + u : "";
        }(), Ps = va.toString, DR = As.call(et), LR = Rt._, qR = Wf(
          "^" + As.call(Xe).replace(Sf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Es = d0 ? Q.Buffer : r, Qn = Q.Symbol, Ts = Q.Uint8Array, M0 = Es ? Es.allocUnsafe : r, Cs = E0(et.getPrototypeOf, et), I0 = et.create, R0 = va.propertyIsEnumerable, Ms = Os.splice, $0 = Qn ? Qn.isConcatSpreadable : r, Io = Qn ? Qn.iterator : r, Ei = Qn ? Qn.toStringTag : r, Is = function() {
          try {
            var u = Ri(et, "defineProperty");
            return u({}, "", {}), u;
          } catch {
          }
        }(), BR = Q.clearTimeout !== Rt.clearTimeout && Q.clearTimeout, FR = de && de.now !== Rt.Date.now && de.now, WR = Q.setTimeout !== Rt.setTimeout && Q.setTimeout, Rs = xt.ceil, $s = xt.floor, zf = et.getOwnPropertySymbols, zR = Es ? Es.isBuffer : r, k0 = Q.isFinite, UR = Os.join, HR = E0(et.keys, et), wt = xt.max, jt = xt.min, GR = de.now, KR = Q.parseInt, j0 = xt.random, VR = Os.reverse, Uf = Ri(Q, "DataView"), Ro = Ri(Q, "Map"), Hf = Ri(Q, "Promise"), ga = Ri(Q, "Set"), $o = Ri(Q, "WeakMap"), ko = Ri(et, "create"), ks = $o && new $o(), ya = {}, YR = $i(Uf), XR = $i(Ro), ZR = $i(Hf), JR = $i(ga), QR = $i($o), js = Qn ? Qn.prototype : r, jo = js ? js.valueOf : r, N0 = js ? js.toString : r;
        function C(u) {
          if (pt(u) && !Me(u) && !(u instanceof qe)) {
            if (u instanceof xr)
              return u;
            if (Xe.call(u, "__wrapped__"))
              return Dx(u);
          }
          return new xr(u);
        }
        var ma = /* @__PURE__ */ function() {
          function u() {
          }
          return function(c) {
            if (!ht(c))
              return {};
            if (I0)
              return I0(c);
            u.prototype = c;
            var p = new u();
            return u.prototype = r, p;
          };
        }();
        function Ns() {
        }
        function xr(u, c) {
          this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = r;
        }
        C.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: hI,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: pI,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Hb,
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
        function qe(u) {
          this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Z, this.__views__ = [];
        }
        function e$() {
          var u = new qe(this.__wrapped__);
          return u.__actions__ = Vt(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Vt(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Vt(this.__views__), u;
        }
        function t$() {
          if (this.__filtered__) {
            var u = new qe(this);
            u.__dir__ = -1, u.__filtered__ = !0;
          } else
            u = this.clone(), u.__dir__ *= -1;
          return u;
        }
        function r$() {
          var u = this.__wrapped__.value(), c = this.__dir__, p = Me(u), w = c < 0, P = p ? u.length : 0, M = pk(0, P, this.__views__), R = M.start, D = M.end, z = D - R, ee = w ? D : R - 1, re = this.__iteratees__, ie = re.length, fe = 0, me = jt(z, this.__takeCount__);
          if (!p || !w && P == z && me == z)
            return ox(u, this.__actions__);
          var Oe = [];
          e:
            for (; z-- && fe < me; ) {
              ee += c;
              for (var je = -1, Se = u[ee]; ++je < ie; ) {
                var De = re[je], Be = De.iteratee, ur = De.type, Ft = Be(Se);
                if (ur == V)
                  Se = Ft;
                else if (!Ft) {
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
        function Ti(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function n$() {
          this.__data__ = ko ? ko(null) : {}, this.size = 0;
        }
        function i$(u) {
          var c = this.has(u) && delete this.__data__[u];
          return this.size -= c ? 1 : 0, c;
        }
        function a$(u) {
          var c = this.__data__;
          if (ko) {
            var p = c[u];
            return p === l ? r : p;
          }
          return Xe.call(c, u) ? c[u] : r;
        }
        function o$(u) {
          var c = this.__data__;
          return ko ? c[u] !== r : Xe.call(c, u);
        }
        function u$(u, c) {
          var p = this.__data__;
          return this.size += this.has(u) ? 0 : 1, p[u] = ko && c === r ? l : c, this;
        }
        Ti.prototype.clear = n$, Ti.prototype.delete = i$, Ti.prototype.get = a$, Ti.prototype.has = o$, Ti.prototype.set = u$;
        function mn(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function s$() {
          this.__data__ = [], this.size = 0;
        }
        function c$(u) {
          var c = this.__data__, p = Ds(c, u);
          if (p < 0)
            return !1;
          var w = c.length - 1;
          return p == w ? c.pop() : Ms.call(c, p, 1), --this.size, !0;
        }
        function l$(u) {
          var c = this.__data__, p = Ds(c, u);
          return p < 0 ? r : c[p][1];
        }
        function f$(u) {
          return Ds(this.__data__, u) > -1;
        }
        function d$(u, c) {
          var p = this.__data__, w = Ds(p, u);
          return w < 0 ? (++this.size, p.push([u, c])) : p[w][1] = c, this;
        }
        mn.prototype.clear = s$, mn.prototype.delete = c$, mn.prototype.get = l$, mn.prototype.has = f$, mn.prototype.set = d$;
        function bn(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function h$() {
          this.size = 0, this.__data__ = {
            hash: new Ti(),
            map: new (Ro || mn)(),
            string: new Ti()
          };
        }
        function p$(u) {
          var c = Ys(this, u).delete(u);
          return this.size -= c ? 1 : 0, c;
        }
        function v$(u) {
          return Ys(this, u).get(u);
        }
        function g$(u) {
          return Ys(this, u).has(u);
        }
        function y$(u, c) {
          var p = Ys(this, u), w = p.size;
          return p.set(u, c), this.size += p.size == w ? 0 : 1, this;
        }
        bn.prototype.clear = h$, bn.prototype.delete = p$, bn.prototype.get = v$, bn.prototype.has = g$, bn.prototype.set = y$;
        function Ci(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.__data__ = new bn(); ++c < p; )
            this.add(u[c]);
        }
        function m$(u) {
          return this.__data__.set(u, l), this;
        }
        function b$(u) {
          return this.__data__.has(u);
        }
        Ci.prototype.add = Ci.prototype.push = m$, Ci.prototype.has = b$;
        function Fr(u) {
          var c = this.__data__ = new mn(u);
          this.size = c.size;
        }
        function x$() {
          this.__data__ = new mn(), this.size = 0;
        }
        function w$(u) {
          var c = this.__data__, p = c.delete(u);
          return this.size = c.size, p;
        }
        function _$(u) {
          return this.__data__.get(u);
        }
        function O$(u) {
          return this.__data__.has(u);
        }
        function S$(u, c) {
          var p = this.__data__;
          if (p instanceof mn) {
            var w = p.__data__;
            if (!Ro || w.length < i - 1)
              return w.push([u, c]), this.size = ++p.size, this;
            p = this.__data__ = new bn(w);
          }
          return p.set(u, c), this.size = p.size, this;
        }
        Fr.prototype.clear = x$, Fr.prototype.delete = w$, Fr.prototype.get = _$, Fr.prototype.has = O$, Fr.prototype.set = S$;
        function D0(u, c) {
          var p = Me(u), w = !p && ki(u), P = !p && !w && ii(u), M = !p && !w && !P && _a(u), R = p || w || P || M, D = R ? qf(u.length, kR) : [], z = D.length;
          for (var ee in u)
            (c || Xe.call(u, ee)) && !(R && // Safari 9 has enumerable `arguments.length` in strict mode.
            (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
            On(ee, z))) && D.push(ee);
          return D;
        }
        function L0(u) {
          var c = u.length;
          return c ? u[rd(0, c - 1)] : r;
        }
        function A$(u, c) {
          return Xs(Vt(u), Mi(c, 0, u.length));
        }
        function P$(u) {
          return Xs(Vt(u));
        }
        function Gf(u, c, p) {
          (p !== r && !Wr(u[c], p) || p === r && !(c in u)) && xn(u, c, p);
        }
        function No(u, c, p) {
          var w = u[c];
          (!(Xe.call(u, c) && Wr(w, p)) || p === r && !(c in u)) && xn(u, c, p);
        }
        function Ds(u, c) {
          for (var p = u.length; p--; )
            if (Wr(u[p][0], c))
              return p;
          return -1;
        }
        function E$(u, c, p, w) {
          return ei(u, function(P, M, R) {
            c(w, P, p(P), R);
          }), w;
        }
        function q0(u, c) {
          return u && nn(c, Tt(c), u);
        }
        function T$(u, c) {
          return u && nn(c, Xt(c), u);
        }
        function xn(u, c, p) {
          c == "__proto__" && Is ? Is(u, c, {
            configurable: !0,
            enumerable: !0,
            value: p,
            writable: !0
          }) : u[c] = p;
        }
        function Kf(u, c) {
          for (var p = -1, w = c.length, P = K(w), M = u == null; ++p < w; )
            P[p] = M ? r : Ed(u, c[p]);
          return P;
        }
        function Mi(u, c, p) {
          return u === u && (p !== r && (u = u <= p ? u : p), c !== r && (u = u >= c ? u : c)), u;
        }
        function wr(u, c, p, w, P, M) {
          var R, D = c & h, z = c & v, ee = c & g;
          if (p && (R = P ? p(u, w, P, M) : p(u)), R !== r)
            return R;
          if (!ht(u))
            return u;
          var re = Me(u);
          if (re) {
            if (R = gk(u), !D)
              return Vt(u, R);
          } else {
            var ie = Nt(u), fe = ie == k || ie == Ee;
            if (ii(u))
              return cx(u, D);
            if (ie == at || ie == ye || fe && !P) {
              if (R = z || fe ? {} : Tx(u), !D)
                return z ? ak(u, T$(R, u)) : ik(u, q0(R, u));
            } else {
              if (!rt[ie])
                return P ? u : {};
              R = yk(u, ie, D);
            }
          }
          M || (M = new Fr());
          var me = M.get(u);
          if (me)
            return me;
          M.set(u, R), nw(u) ? u.forEach(function(Se) {
            R.add(wr(Se, c, p, Se, u, M));
          }) : tw(u) && u.forEach(function(Se, De) {
            R.set(De, wr(Se, c, p, De, u, M));
          });
          var Oe = ee ? z ? hd : dd : z ? Xt : Tt, je = re ? r : Oe(u);
          return mr(je || u, function(Se, De) {
            je && (De = Se, Se = u[De]), No(R, De, wr(Se, c, p, De, u, M));
          }), R;
        }
        function C$(u) {
          var c = Tt(u);
          return function(p) {
            return B0(p, u, c);
          };
        }
        function B0(u, c, p) {
          var w = p.length;
          if (u == null)
            return !w;
          for (u = et(u); w--; ) {
            var P = p[w], M = c[P], R = u[P];
            if (R === r && !(P in u) || !M(R))
              return !1;
          }
          return !0;
        }
        function F0(u, c, p) {
          if (typeof u != "function")
            throw new br(o);
          return zo(function() {
            u.apply(r, p);
          }, c);
        }
        function Do(u, c, p, w) {
          var P = -1, M = xs, R = !0, D = u.length, z = [], ee = c.length;
          if (!D)
            return z;
          p && (c = lt(c, ir(p))), w ? (M = $f, R = !1) : c.length >= i && (M = Mo, R = !1, c = new Ci(c));
          e:
            for (; ++P < D; ) {
              var re = u[P], ie = p == null ? re : p(re);
              if (re = w || re !== 0 ? re : 0, R && ie === ie) {
                for (var fe = ee; fe--; )
                  if (c[fe] === ie)
                    continue e;
                z.push(re);
              } else M(c, ie, w) || z.push(re);
            }
          return z;
        }
        var ei = px(rn), W0 = px(Yf, !0);
        function M$(u, c) {
          var p = !0;
          return ei(u, function(w, P, M) {
            return p = !!c(w, P, M), p;
          }), p;
        }
        function Ls(u, c, p) {
          for (var w = -1, P = u.length; ++w < P; ) {
            var M = u[w], R = c(M);
            if (R != null && (D === r ? R === R && !or(R) : p(R, D)))
              var D = R, z = M;
          }
          return z;
        }
        function I$(u, c, p, w) {
          var P = u.length;
          for (p = Re(p), p < 0 && (p = -p > P ? 0 : P + p), w = w === r || w > P ? P : Re(w), w < 0 && (w += P), w = p > w ? 0 : aw(w); p < w; )
            u[p++] = c;
          return u;
        }
        function z0(u, c) {
          var p = [];
          return ei(u, function(w, P, M) {
            c(w, P, M) && p.push(w);
          }), p;
        }
        function $t(u, c, p, w, P) {
          var M = -1, R = u.length;
          for (p || (p = bk), P || (P = []); ++M < R; ) {
            var D = u[M];
            c > 0 && p(D) ? c > 1 ? $t(D, c - 1, p, w, P) : Zn(P, D) : w || (P[P.length] = D);
          }
          return P;
        }
        var Vf = vx(), U0 = vx(!0);
        function rn(u, c) {
          return u && Vf(u, c, Tt);
        }
        function Yf(u, c) {
          return u && U0(u, c, Tt);
        }
        function qs(u, c) {
          return Xn(c, function(p) {
            return Sn(u[p]);
          });
        }
        function Ii(u, c) {
          c = ri(c, u);
          for (var p = 0, w = c.length; u != null && p < w; )
            u = u[an(c[p++])];
          return p && p == w ? u : r;
        }
        function H0(u, c, p) {
          var w = c(u);
          return Me(u) ? w : Zn(w, p(u));
        }
        function qt(u) {
          return u == null ? u === r ? To : ct : Ei && Ei in et(u) ? hk(u) : Pk(u);
        }
        function Xf(u, c) {
          return u > c;
        }
        function R$(u, c) {
          return u != null && Xe.call(u, c);
        }
        function $$(u, c) {
          return u != null && c in et(u);
        }
        function k$(u, c, p) {
          return u >= jt(c, p) && u < wt(c, p);
        }
        function Zf(u, c, p) {
          for (var w = p ? $f : xs, P = u[0].length, M = u.length, R = M, D = K(M), z = 1 / 0, ee = []; R--; ) {
            var re = u[R];
            R && c && (re = lt(re, ir(c))), z = jt(re.length, z), D[R] = !p && (c || P >= 120 && re.length >= 120) ? new Ci(R && re) : r;
          }
          re = u[0];
          var ie = -1, fe = D[0];
          e:
            for (; ++ie < P && ee.length < z; ) {
              var me = re[ie], Oe = c ? c(me) : me;
              if (me = p || me !== 0 ? me : 0, !(fe ? Mo(fe, Oe) : w(ee, Oe, p))) {
                for (R = M; --R; ) {
                  var je = D[R];
                  if (!(je ? Mo(je, Oe) : w(u[R], Oe, p)))
                    continue e;
                }
                fe && fe.push(Oe), ee.push(me);
              }
            }
          return ee;
        }
        function j$(u, c, p, w) {
          return rn(u, function(P, M, R) {
            c(w, p(P), M, R);
          }), w;
        }
        function Lo(u, c, p) {
          c = ri(c, u), u = Rx(u, c);
          var w = u == null ? u : u[an(Or(c))];
          return w == null ? r : nr(w, u, p);
        }
        function G0(u) {
          return pt(u) && qt(u) == ye;
        }
        function N$(u) {
          return pt(u) && qt(u) == Co;
        }
        function D$(u) {
          return pt(u) && qt(u) == te;
        }
        function qo(u, c, p, w, P) {
          return u === c ? !0 : u == null || c == null || !pt(u) && !pt(c) ? u !== u && c !== c : L$(u, c, p, w, qo, P);
        }
        function L$(u, c, p, w, P, M) {
          var R = Me(u), D = Me(c), z = R ? be : Nt(u), ee = D ? be : Nt(c);
          z = z == ye ? at : z, ee = ee == ye ? at : ee;
          var re = z == at, ie = ee == at, fe = z == ee;
          if (fe && ii(u)) {
            if (!ii(c))
              return !1;
            R = !0, re = !1;
          }
          if (fe && !re)
            return M || (M = new Fr()), R || _a(u) ? Ax(u, c, p, w, P, M) : fk(u, c, z, p, w, P, M);
          if (!(p & x)) {
            var me = re && Xe.call(u, "__wrapped__"), Oe = ie && Xe.call(c, "__wrapped__");
            if (me || Oe) {
              var je = me ? u.value() : u, Se = Oe ? c.value() : c;
              return M || (M = new Fr()), P(je, Se, p, w, M);
            }
          }
          return fe ? (M || (M = new Fr()), dk(u, c, p, w, P, M)) : !1;
        }
        function q$(u) {
          return pt(u) && Nt(u) == we;
        }
        function Jf(u, c, p, w) {
          var P = p.length, M = P, R = !w;
          if (u == null)
            return !M;
          for (u = et(u); P--; ) {
            var D = p[P];
            if (R && D[2] ? D[1] !== u[D[0]] : !(D[0] in u))
              return !1;
          }
          for (; ++P < M; ) {
            D = p[P];
            var z = D[0], ee = u[z], re = D[1];
            if (R && D[2]) {
              if (ee === r && !(z in u))
                return !1;
            } else {
              var ie = new Fr();
              if (w)
                var fe = w(ee, re, z, u, c, ie);
              if (!(fe === r ? qo(re, ee, x | y, w, ie) : fe))
                return !1;
            }
          }
          return !0;
        }
        function K0(u) {
          if (!ht(u) || wk(u))
            return !1;
          var c = Sn(u) ? qR : CI;
          return c.test($i(u));
        }
        function B$(u) {
          return pt(u) && qt(u) == rr;
        }
        function F$(u) {
          return pt(u) && Nt(u) == vt;
        }
        function W$(u) {
          return pt(u) && rc(u.length) && !!ot[qt(u)];
        }
        function V0(u) {
          return typeof u == "function" ? u : u == null ? Zt : typeof u == "object" ? Me(u) ? Z0(u[0], u[1]) : X0(u) : gw(u);
        }
        function Qf(u) {
          if (!Wo(u))
            return HR(u);
          var c = [];
          for (var p in et(u))
            Xe.call(u, p) && p != "constructor" && c.push(p);
          return c;
        }
        function z$(u) {
          if (!ht(u))
            return Ak(u);
          var c = Wo(u), p = [];
          for (var w in u)
            w == "constructor" && (c || !Xe.call(u, w)) || p.push(w);
          return p;
        }
        function ed(u, c) {
          return u < c;
        }
        function Y0(u, c) {
          var p = -1, w = Yt(u) ? K(u.length) : [];
          return ei(u, function(P, M, R) {
            w[++p] = c(P, M, R);
          }), w;
        }
        function X0(u) {
          var c = vd(u);
          return c.length == 1 && c[0][2] ? Mx(c[0][0], c[0][1]) : function(p) {
            return p === u || Jf(p, u, c);
          };
        }
        function Z0(u, c) {
          return yd(u) && Cx(c) ? Mx(an(u), c) : function(p) {
            var w = Ed(p, u);
            return w === r && w === c ? Td(p, u) : qo(c, w, x | y);
          };
        }
        function Bs(u, c, p, w, P) {
          u !== c && Vf(c, function(M, R) {
            if (P || (P = new Fr()), ht(M))
              U$(u, c, R, p, Bs, w, P);
            else {
              var D = w ? w(bd(u, R), M, R + "", u, c, P) : r;
              D === r && (D = M), Gf(u, R, D);
            }
          }, Xt);
        }
        function U$(u, c, p, w, P, M, R) {
          var D = bd(u, p), z = bd(c, p), ee = R.get(z);
          if (ee) {
            Gf(u, p, ee);
            return;
          }
          var re = M ? M(D, z, p + "", u, c, R) : r, ie = re === r;
          if (ie) {
            var fe = Me(z), me = !fe && ii(z), Oe = !fe && !me && _a(z);
            re = z, fe || me || Oe ? Me(D) ? re = D : gt(D) ? re = Vt(D) : me ? (ie = !1, re = cx(z, !0)) : Oe ? (ie = !1, re = lx(z, !0)) : re = [] : Uo(z) || ki(z) ? (re = D, ki(D) ? re = ow(D) : (!ht(D) || Sn(D)) && (re = Tx(z))) : ie = !1;
          }
          ie && (R.set(z, re), P(re, z, w, M, R), R.delete(z)), Gf(u, p, re);
        }
        function J0(u, c) {
          var p = u.length;
          if (p)
            return c += c < 0 ? p : 0, On(c, p) ? u[c] : r;
        }
        function Q0(u, c, p) {
          c.length ? c = lt(c, function(M) {
            return Me(M) ? function(R) {
              return Ii(R, M.length === 1 ? M[0] : M);
            } : M;
          }) : c = [Zt];
          var w = -1;
          c = lt(c, ir(_e()));
          var P = Y0(u, function(M, R, D) {
            var z = lt(c, function(ee) {
              return ee(M);
            });
            return { criteria: z, index: ++w, value: M };
          });
          return yR(P, function(M, R) {
            return nk(M, R, p);
          });
        }
        function H$(u, c) {
          return ex(u, c, function(p, w) {
            return Td(u, w);
          });
        }
        function ex(u, c, p) {
          for (var w = -1, P = c.length, M = {}; ++w < P; ) {
            var R = c[w], D = Ii(u, R);
            p(D, R) && Bo(M, ri(R, u), D);
          }
          return M;
        }
        function G$(u) {
          return function(c) {
            return Ii(c, u);
          };
        }
        function td(u, c, p, w) {
          var P = w ? gR : fa, M = -1, R = c.length, D = u;
          for (u === c && (c = Vt(c)), p && (D = lt(u, ir(p))); ++M < R; )
            for (var z = 0, ee = c[M], re = p ? p(ee) : ee; (z = P(D, re, z, w)) > -1; )
              D !== u && Ms.call(D, z, 1), Ms.call(u, z, 1);
          return u;
        }
        function tx(u, c) {
          for (var p = u ? c.length : 0, w = p - 1; p--; ) {
            var P = c[p];
            if (p == w || P !== M) {
              var M = P;
              On(P) ? Ms.call(u, P, 1) : ad(u, P);
            }
          }
          return u;
        }
        function rd(u, c) {
          return u + $s(j0() * (c - u + 1));
        }
        function K$(u, c, p, w) {
          for (var P = -1, M = wt(Rs((c - u) / (p || 1)), 0), R = K(M); M--; )
            R[w ? M : ++P] = u, u += p;
          return R;
        }
        function nd(u, c) {
          var p = "";
          if (!u || c < 1 || c > G)
            return p;
          do
            c % 2 && (p += u), c = $s(c / 2), c && (u += u);
          while (c);
          return p;
        }
        function Ne(u, c) {
          return xd(Ix(u, c, Zt), u + "");
        }
        function V$(u) {
          return L0(Oa(u));
        }
        function Y$(u, c) {
          var p = Oa(u);
          return Xs(p, Mi(c, 0, p.length));
        }
        function Bo(u, c, p, w) {
          if (!ht(u))
            return u;
          c = ri(c, u);
          for (var P = -1, M = c.length, R = M - 1, D = u; D != null && ++P < M; ) {
            var z = an(c[P]), ee = p;
            if (z === "__proto__" || z === "constructor" || z === "prototype")
              return u;
            if (P != R) {
              var re = D[z];
              ee = w ? w(re, z, D) : r, ee === r && (ee = ht(re) ? re : On(c[P + 1]) ? [] : {});
            }
            No(D, z, ee), D = D[z];
          }
          return u;
        }
        var rx = ks ? function(u, c) {
          return ks.set(u, c), u;
        } : Zt, X$ = Is ? function(u, c) {
          return Is(u, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Md(c),
            writable: !0
          });
        } : Zt;
        function Z$(u) {
          return Xs(Oa(u));
        }
        function _r(u, c, p) {
          var w = -1, P = u.length;
          c < 0 && (c = -c > P ? 0 : P + c), p = p > P ? P : p, p < 0 && (p += P), P = c > p ? 0 : p - c >>> 0, c >>>= 0;
          for (var M = K(P); ++w < P; )
            M[w] = u[w + c];
          return M;
        }
        function J$(u, c) {
          var p;
          return ei(u, function(w, P, M) {
            return p = c(w, P, M), !p;
          }), !!p;
        }
        function Fs(u, c, p) {
          var w = 0, P = u == null ? w : u.length;
          if (typeof c == "number" && c === c && P <= ce) {
            for (; w < P; ) {
              var M = w + P >>> 1, R = u[M];
              R !== null && !or(R) && (p ? R <= c : R < c) ? w = M + 1 : P = M;
            }
            return P;
          }
          return id(u, c, Zt, p);
        }
        function id(u, c, p, w) {
          var P = 0, M = u == null ? 0 : u.length;
          if (M === 0)
            return 0;
          c = p(c);
          for (var R = c !== c, D = c === null, z = or(c), ee = c === r; P < M; ) {
            var re = $s((P + M) / 2), ie = p(u[re]), fe = ie !== r, me = ie === null, Oe = ie === ie, je = or(ie);
            if (R)
              var Se = w || Oe;
            else ee ? Se = Oe && (w || fe) : D ? Se = Oe && fe && (w || !me) : z ? Se = Oe && fe && !me && (w || !je) : me || je ? Se = !1 : Se = w ? ie <= c : ie < c;
            Se ? P = re + 1 : M = re;
          }
          return jt(M, ae);
        }
        function nx(u, c) {
          for (var p = -1, w = u.length, P = 0, M = []; ++p < w; ) {
            var R = u[p], D = c ? c(R) : R;
            if (!p || !Wr(D, z)) {
              var z = D;
              M[P++] = R === 0 ? 0 : R;
            }
          }
          return M;
        }
        function ix(u) {
          return typeof u == "number" ? u : or(u) ? H : +u;
        }
        function ar(u) {
          if (typeof u == "string")
            return u;
          if (Me(u))
            return lt(u, ar) + "";
          if (or(u))
            return N0 ? N0.call(u) : "";
          var c = u + "";
          return c == "0" && 1 / u == -J ? "-0" : c;
        }
        function ti(u, c, p) {
          var w = -1, P = xs, M = u.length, R = !0, D = [], z = D;
          if (p)
            R = !1, P = $f;
          else if (M >= i) {
            var ee = c ? null : ck(u);
            if (ee)
              return _s(ee);
            R = !1, P = Mo, z = new Ci();
          } else
            z = c ? [] : D;
          e:
            for (; ++w < M; ) {
              var re = u[w], ie = c ? c(re) : re;
              if (re = p || re !== 0 ? re : 0, R && ie === ie) {
                for (var fe = z.length; fe--; )
                  if (z[fe] === ie)
                    continue e;
                c && z.push(ie), D.push(re);
              } else P(z, ie, p) || (z !== D && z.push(ie), D.push(re));
            }
          return D;
        }
        function ad(u, c) {
          return c = ri(c, u), u = Rx(u, c), u == null || delete u[an(Or(c))];
        }
        function ax(u, c, p, w) {
          return Bo(u, c, p(Ii(u, c)), w);
        }
        function Ws(u, c, p, w) {
          for (var P = u.length, M = w ? P : -1; (w ? M-- : ++M < P) && c(u[M], M, u); )
            ;
          return p ? _r(u, w ? 0 : M, w ? M + 1 : P) : _r(u, w ? M + 1 : 0, w ? P : M);
        }
        function ox(u, c) {
          var p = u;
          return p instanceof qe && (p = p.value()), kf(c, function(w, P) {
            return P.func.apply(P.thisArg, Zn([w], P.args));
          }, p);
        }
        function od(u, c, p) {
          var w = u.length;
          if (w < 2)
            return w ? ti(u[0]) : [];
          for (var P = -1, M = K(w); ++P < w; )
            for (var R = u[P], D = -1; ++D < w; )
              D != P && (M[P] = Do(M[P] || R, u[D], c, p));
          return ti($t(M, 1), c, p);
        }
        function ux(u, c, p) {
          for (var w = -1, P = u.length, M = c.length, R = {}; ++w < P; ) {
            var D = w < M ? c[w] : r;
            p(R, u[w], D);
          }
          return R;
        }
        function ud(u) {
          return gt(u) ? u : [];
        }
        function sd(u) {
          return typeof u == "function" ? u : Zt;
        }
        function ri(u, c) {
          return Me(u) ? u : yd(u, c) ? [u] : Nx(He(u));
        }
        var Q$ = Ne;
        function ni(u, c, p) {
          var w = u.length;
          return p = p === r ? w : p, !c && p >= w ? u : _r(u, c, p);
        }
        var sx = BR || function(u) {
          return Rt.clearTimeout(u);
        };
        function cx(u, c) {
          if (c)
            return u.slice();
          var p = u.length, w = M0 ? M0(p) : new u.constructor(p);
          return u.copy(w), w;
        }
        function cd(u) {
          var c = new u.constructor(u.byteLength);
          return new Ts(c).set(new Ts(u)), c;
        }
        function ek(u, c) {
          var p = c ? cd(u.buffer) : u.buffer;
          return new u.constructor(p, u.byteOffset, u.byteLength);
        }
        function tk(u) {
          var c = new u.constructor(u.source, Gb.exec(u));
          return c.lastIndex = u.lastIndex, c;
        }
        function rk(u) {
          return jo ? et(jo.call(u)) : {};
        }
        function lx(u, c) {
          var p = c ? cd(u.buffer) : u.buffer;
          return new u.constructor(p, u.byteOffset, u.length);
        }
        function fx(u, c) {
          if (u !== c) {
            var p = u !== r, w = u === null, P = u === u, M = or(u), R = c !== r, D = c === null, z = c === c, ee = or(c);
            if (!D && !ee && !M && u > c || M && R && z && !D && !ee || w && R && z || !p && z || !P)
              return 1;
            if (!w && !M && !ee && u < c || ee && p && P && !w && !M || D && p && P || !R && P || !z)
              return -1;
          }
          return 0;
        }
        function nk(u, c, p) {
          for (var w = -1, P = u.criteria, M = c.criteria, R = P.length, D = p.length; ++w < R; ) {
            var z = fx(P[w], M[w]);
            if (z) {
              if (w >= D)
                return z;
              var ee = p[w];
              return z * (ee == "desc" ? -1 : 1);
            }
          }
          return u.index - c.index;
        }
        function dx(u, c, p, w) {
          for (var P = -1, M = u.length, R = p.length, D = -1, z = c.length, ee = wt(M - R, 0), re = K(z + ee), ie = !w; ++D < z; )
            re[D] = c[D];
          for (; ++P < R; )
            (ie || P < M) && (re[p[P]] = u[P]);
          for (; ee--; )
            re[D++] = u[P++];
          return re;
        }
        function hx(u, c, p, w) {
          for (var P = -1, M = u.length, R = -1, D = p.length, z = -1, ee = c.length, re = wt(M - D, 0), ie = K(re + ee), fe = !w; ++P < re; )
            ie[P] = u[P];
          for (var me = P; ++z < ee; )
            ie[me + z] = c[z];
          for (; ++R < D; )
            (fe || P < M) && (ie[me + p[R]] = u[P++]);
          return ie;
        }
        function Vt(u, c) {
          var p = -1, w = u.length;
          for (c || (c = K(w)); ++p < w; )
            c[p] = u[p];
          return c;
        }
        function nn(u, c, p, w) {
          var P = !p;
          p || (p = {});
          for (var M = -1, R = c.length; ++M < R; ) {
            var D = c[M], z = w ? w(p[D], u[D], D, p, u) : r;
            z === r && (z = u[D]), P ? xn(p, D, z) : No(p, D, z);
          }
          return p;
        }
        function ik(u, c) {
          return nn(u, gd(u), c);
        }
        function ak(u, c) {
          return nn(u, Px(u), c);
        }
        function zs(u, c) {
          return function(p, w) {
            var P = Me(p) ? lR : E$, M = c ? c() : {};
            return P(p, u, _e(w, 2), M);
          };
        }
        function ba(u) {
          return Ne(function(c, p) {
            var w = -1, P = p.length, M = P > 1 ? p[P - 1] : r, R = P > 2 ? p[2] : r;
            for (M = u.length > 3 && typeof M == "function" ? (P--, M) : r, R && Bt(p[0], p[1], R) && (M = P < 3 ? r : M, P = 1), c = et(c); ++w < P; ) {
              var D = p[w];
              D && u(c, D, w, M);
            }
            return c;
          });
        }
        function px(u, c) {
          return function(p, w) {
            if (p == null)
              return p;
            if (!Yt(p))
              return u(p, w);
            for (var P = p.length, M = c ? P : -1, R = et(p); (c ? M-- : ++M < P) && w(R[M], M, R) !== !1; )
              ;
            return p;
          };
        }
        function vx(u) {
          return function(c, p, w) {
            for (var P = -1, M = et(c), R = w(c), D = R.length; D--; ) {
              var z = R[u ? D : ++P];
              if (p(M[z], z, M) === !1)
                break;
            }
            return c;
          };
        }
        function ok(u, c, p) {
          var w = c & b, P = Fo(u);
          function M() {
            var R = this && this !== Rt && this instanceof M ? P : u;
            return R.apply(w ? p : this, arguments);
          }
          return M;
        }
        function gx(u) {
          return function(c) {
            c = He(c);
            var p = da(c) ? Br(c) : r, w = p ? p[0] : c.charAt(0), P = p ? ni(p, 1).join("") : c.slice(1);
            return w[u]() + P;
          };
        }
        function xa(u) {
          return function(c) {
            return kf(pw(hw(c).replace(XI, "")), u, "");
          };
        }
        function Fo(u) {
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return new u();
              case 1:
                return new u(c[0]);
              case 2:
                return new u(c[0], c[1]);
              case 3:
                return new u(c[0], c[1], c[2]);
              case 4:
                return new u(c[0], c[1], c[2], c[3]);
              case 5:
                return new u(c[0], c[1], c[2], c[3], c[4]);
              case 6:
                return new u(c[0], c[1], c[2], c[3], c[4], c[5]);
              case 7:
                return new u(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
            }
            var p = ma(u.prototype), w = u.apply(p, c);
            return ht(w) ? w : p;
          };
        }
        function uk(u, c, p) {
          var w = Fo(u);
          function P() {
            for (var M = arguments.length, R = K(M), D = M, z = wa(P); D--; )
              R[D] = arguments[D];
            var ee = M < 3 && R[0] !== z && R[M - 1] !== z ? [] : Jn(R, z);
            if (M -= ee.length, M < p)
              return wx(
                u,
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
            var re = this && this !== Rt && this instanceof P ? w : u;
            return nr(re, this, R);
          }
          return P;
        }
        function yx(u) {
          return function(c, p, w) {
            var P = et(c);
            if (!Yt(c)) {
              var M = _e(p, 3);
              c = Tt(c), p = function(D) {
                return M(P[D], D, P);
              };
            }
            var R = u(c, p, w);
            return R > -1 ? P[M ? c[R] : R] : r;
          };
        }
        function mx(u) {
          return _n(function(c) {
            var p = c.length, w = p, P = xr.prototype.thru;
            for (u && c.reverse(); w--; ) {
              var M = c[w];
              if (typeof M != "function")
                throw new br(o);
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
        function Us(u, c, p, w, P, M, R, D, z, ee) {
          var re = c & T, ie = c & b, fe = c & S, me = c & (A | _), Oe = c & B, je = fe ? r : Fo(u);
          function Se() {
            for (var De = arguments.length, Be = K(De), ur = De; ur--; )
              Be[ur] = arguments[ur];
            if (me)
              var Ft = wa(Se), sr = bR(Be, Ft);
            if (w && (Be = dx(Be, w, P, me)), M && (Be = hx(Be, M, R, me)), De -= sr, me && De < ee) {
              var yt = Jn(Be, Ft);
              return wx(
                u,
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
            var zr = ie ? p : this, Pn = fe ? zr[u] : u;
            return De = Be.length, D ? Be = Ek(Be, D) : Oe && De > 1 && Be.reverse(), re && z < De && (Be.length = z), this && this !== Rt && this instanceof Se && (Pn = je || Fo(Pn)), Pn.apply(zr, Be);
          }
          return Se;
        }
        function bx(u, c) {
          return function(p, w) {
            return j$(p, u, c(w), {});
          };
        }
        function Hs(u, c) {
          return function(p, w) {
            var P;
            if (p === r && w === r)
              return c;
            if (p !== r && (P = p), w !== r) {
              if (P === r)
                return w;
              typeof p == "string" || typeof w == "string" ? (p = ar(p), w = ar(w)) : (p = ix(p), w = ix(w)), P = u(p, w);
            }
            return P;
          };
        }
        function ld(u) {
          return _n(function(c) {
            return c = lt(c, ir(_e())), Ne(function(p) {
              var w = this;
              return u(c, function(P) {
                return nr(P, w, p);
              });
            });
          });
        }
        function Gs(u, c) {
          c = c === r ? " " : ar(c);
          var p = c.length;
          if (p < 2)
            return p ? nd(c, u) : c;
          var w = nd(c, Rs(u / ha(c)));
          return da(c) ? ni(Br(w), 0, u).join("") : w.slice(0, u);
        }
        function sk(u, c, p, w) {
          var P = c & b, M = Fo(u);
          function R() {
            for (var D = -1, z = arguments.length, ee = -1, re = w.length, ie = K(re + z), fe = this && this !== Rt && this instanceof R ? M : u; ++ee < re; )
              ie[ee] = w[ee];
            for (; z--; )
              ie[ee++] = arguments[++D];
            return nr(fe, P ? p : this, ie);
          }
          return R;
        }
        function xx(u) {
          return function(c, p, w) {
            return w && typeof w != "number" && Bt(c, p, w) && (p = w = r), c = An(c), p === r ? (p = c, c = 0) : p = An(p), w = w === r ? c < p ? 1 : -1 : An(w), K$(c, p, w, u);
          };
        }
        function Ks(u) {
          return function(c, p) {
            return typeof c == "string" && typeof p == "string" || (c = Sr(c), p = Sr(p)), u(c, p);
          };
        }
        function wx(u, c, p, w, P, M, R, D, z, ee) {
          var re = c & A, ie = re ? R : r, fe = re ? r : R, me = re ? M : r, Oe = re ? r : M;
          c |= re ? m : E, c &= ~(re ? E : m), c & O || (c &= ~(b | S));
          var je = [
            u,
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
          return md(u) && $x(Se, je), Se.placeholder = w, kx(Se, u, c);
        }
        function fd(u) {
          var c = xt[u];
          return function(p, w) {
            if (p = Sr(p), w = w == null ? 0 : jt(Re(w), 292), w && k0(p)) {
              var P = (He(p) + "e").split("e"), M = c(P[0] + "e" + (+P[1] + w));
              return P = (He(M) + "e").split("e"), +(P[0] + "e" + (+P[1] - w));
            }
            return c(p);
          };
        }
        var ck = ga && 1 / _s(new ga([, -0]))[1] == J ? function(u) {
          return new ga(u);
        } : $d;
        function _x(u) {
          return function(c) {
            var p = Nt(c);
            return p == we ? Ff(c) : p == vt ? PR(c) : mR(c, u(c));
          };
        }
        function wn(u, c, p, w, P, M, R, D) {
          var z = c & S;
          if (!z && typeof u != "function")
            throw new br(o);
          var ee = w ? w.length : 0;
          if (ee || (c &= ~(m | E), w = P = r), R = R === r ? R : wt(Re(R), 0), D = D === r ? D : Re(D), ee -= P ? P.length : 0, c & E) {
            var re = w, ie = P;
            w = P = r;
          }
          var fe = z ? r : pd(u), me = [
            u,
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
          if (fe && Sk(me, fe), u = me[0], c = me[1], p = me[2], w = me[3], P = me[4], D = me[9] = me[9] === r ? z ? 0 : u.length : wt(me[9] - ee, 0), !D && c & (A | _) && (c &= ~(A | _)), !c || c == b)
            var Oe = ok(u, c, p);
          else c == A || c == _ ? Oe = uk(u, c, D) : (c == m || c == (b | m)) && !P.length ? Oe = sk(u, c, p, w) : Oe = Us.apply(r, me);
          var je = fe ? rx : $x;
          return kx(je(Oe, me), u, c);
        }
        function Ox(u, c, p, w) {
          return u === r || Wr(u, va[p]) && !Xe.call(w, p) ? c : u;
        }
        function Sx(u, c, p, w, P, M) {
          return ht(u) && ht(c) && (M.set(c, u), Bs(u, c, r, Sx, M), M.delete(c)), u;
        }
        function lk(u) {
          return Uo(u) ? r : u;
        }
        function Ax(u, c, p, w, P, M) {
          var R = p & x, D = u.length, z = c.length;
          if (D != z && !(R && z > D))
            return !1;
          var ee = M.get(u), re = M.get(c);
          if (ee && re)
            return ee == c && re == u;
          var ie = -1, fe = !0, me = p & y ? new Ci() : r;
          for (M.set(u, c), M.set(c, u); ++ie < D; ) {
            var Oe = u[ie], je = c[ie];
            if (w)
              var Se = R ? w(je, Oe, ie, c, u, M) : w(Oe, je, ie, u, c, M);
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
          return M.delete(u), M.delete(c), fe;
        }
        function fk(u, c, p, w, P, M, R) {
          switch (p) {
            case ca:
              if (u.byteLength != c.byteLength || u.byteOffset != c.byteOffset)
                return !1;
              u = u.buffer, c = c.buffer;
            case Co:
              return !(u.byteLength != c.byteLength || !M(new Ts(u), new Ts(c)));
            case ge:
            case te:
            case Fe:
              return Wr(+u, +c);
            case ve:
              return u.name == c.name && u.message == c.message;
            case rr:
            case yn:
              return u == c + "";
            case we:
              var D = Ff;
            case vt:
              var z = w & x;
              if (D || (D = _s), u.size != c.size && !z)
                return !1;
              var ee = R.get(u);
              if (ee)
                return ee == c;
              w |= y, R.set(u, c);
              var re = Ax(D(u), D(c), w, P, M, R);
              return R.delete(u), re;
            case Vn:
              if (jo)
                return jo.call(u) == jo.call(c);
          }
          return !1;
        }
        function dk(u, c, p, w, P, M) {
          var R = p & x, D = dd(u), z = D.length, ee = dd(c), re = ee.length;
          if (z != re && !R)
            return !1;
          for (var ie = z; ie--; ) {
            var fe = D[ie];
            if (!(R ? fe in c : Xe.call(c, fe)))
              return !1;
          }
          var me = M.get(u), Oe = M.get(c);
          if (me && Oe)
            return me == c && Oe == u;
          var je = !0;
          M.set(u, c), M.set(c, u);
          for (var Se = R; ++ie < z; ) {
            fe = D[ie];
            var De = u[fe], Be = c[fe];
            if (w)
              var ur = R ? w(Be, De, fe, c, u, M) : w(De, Be, fe, u, c, M);
            if (!(ur === r ? De === Be || P(De, Be, p, w, M) : ur)) {
              je = !1;
              break;
            }
            Se || (Se = fe == "constructor");
          }
          if (je && !Se) {
            var Ft = u.constructor, sr = c.constructor;
            Ft != sr && "constructor" in u && "constructor" in c && !(typeof Ft == "function" && Ft instanceof Ft && typeof sr == "function" && sr instanceof sr) && (je = !1);
          }
          return M.delete(u), M.delete(c), je;
        }
        function _n(u) {
          return xd(Ix(u, r, Bx), u + "");
        }
        function dd(u) {
          return H0(u, Tt, gd);
        }
        function hd(u) {
          return H0(u, Xt, Px);
        }
        var pd = ks ? function(u) {
          return ks.get(u);
        } : $d;
        function Vs(u) {
          for (var c = u.name + "", p = ya[c], w = Xe.call(ya, c) ? p.length : 0; w--; ) {
            var P = p[w], M = P.func;
            if (M == null || M == u)
              return P.name;
          }
          return c;
        }
        function wa(u) {
          var c = Xe.call(C, "placeholder") ? C : u;
          return c.placeholder;
        }
        function _e() {
          var u = C.iteratee || Id;
          return u = u === Id ? V0 : u, arguments.length ? u(arguments[0], arguments[1]) : u;
        }
        function Ys(u, c) {
          var p = u.__data__;
          return xk(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
        }
        function vd(u) {
          for (var c = Tt(u), p = c.length; p--; ) {
            var w = c[p], P = u[w];
            c[p] = [w, P, Cx(P)];
          }
          return c;
        }
        function Ri(u, c) {
          var p = OR(u, c);
          return K0(p) ? p : r;
        }
        function hk(u) {
          var c = Xe.call(u, Ei), p = u[Ei];
          try {
            u[Ei] = r;
            var w = !0;
          } catch {
          }
          var P = Ps.call(u);
          return w && (c ? u[Ei] = p : delete u[Ei]), P;
        }
        var gd = zf ? function(u) {
          return u == null ? [] : (u = et(u), Xn(zf(u), function(c) {
            return R0.call(u, c);
          }));
        } : kd, Px = zf ? function(u) {
          for (var c = []; u; )
            Zn(c, gd(u)), u = Cs(u);
          return c;
        } : kd, Nt = qt;
        (Uf && Nt(new Uf(new ArrayBuffer(1))) != ca || Ro && Nt(new Ro()) != we || Hf && Nt(Hf.resolve()) != Kt || ga && Nt(new ga()) != vt || $o && Nt(new $o()) != Yn) && (Nt = function(u) {
          var c = qt(u), p = c == at ? u.constructor : r, w = p ? $i(p) : "";
          if (w)
            switch (w) {
              case YR:
                return ca;
              case XR:
                return we;
              case ZR:
                return Kt;
              case JR:
                return vt;
              case QR:
                return Yn;
            }
          return c;
        });
        function pk(u, c, p) {
          for (var w = -1, P = p.length; ++w < P; ) {
            var M = p[w], R = M.size;
            switch (M.type) {
              case "drop":
                u += R;
                break;
              case "dropRight":
                c -= R;
                break;
              case "take":
                c = jt(c, u + R);
                break;
              case "takeRight":
                u = wt(u, c - R);
                break;
            }
          }
          return { start: u, end: c };
        }
        function vk(u) {
          var c = u.match(wI);
          return c ? c[1].split(_I) : [];
        }
        function Ex(u, c, p) {
          c = ri(c, u);
          for (var w = -1, P = c.length, M = !1; ++w < P; ) {
            var R = an(c[w]);
            if (!(M = u != null && p(u, R)))
              break;
            u = u[R];
          }
          return M || ++w != P ? M : (P = u == null ? 0 : u.length, !!P && rc(P) && On(R, P) && (Me(u) || ki(u)));
        }
        function gk(u) {
          var c = u.length, p = new u.constructor(c);
          return c && typeof u[0] == "string" && Xe.call(u, "index") && (p.index = u.index, p.input = u.input), p;
        }
        function Tx(u) {
          return typeof u.constructor == "function" && !Wo(u) ? ma(Cs(u)) : {};
        }
        function yk(u, c, p) {
          var w = u.constructor;
          switch (c) {
            case Co:
              return cd(u);
            case ge:
            case te:
              return new w(+u);
            case ca:
              return ek(u, p);
            case vf:
            case gf:
            case yf:
            case mf:
            case bf:
            case xf:
            case wf:
            case _f:
            case Of:
              return lx(u, p);
            case we:
              return new w();
            case Fe:
            case yn:
              return new w(u);
            case rr:
              return tk(u);
            case vt:
              return new w();
            case Vn:
              return rk(u);
          }
        }
        function mk(u, c) {
          var p = c.length;
          if (!p)
            return u;
          var w = p - 1;
          return c[w] = (p > 1 ? "& " : "") + c[w], c = c.join(p > 2 ? ", " : " "), u.replace(xI, `{
/* [wrapped with ` + c + `] */
`);
        }
        function bk(u) {
          return Me(u) || ki(u) || !!($0 && u && u[$0]);
        }
        function On(u, c) {
          var p = typeof u;
          return c = c ?? G, !!c && (p == "number" || p != "symbol" && II.test(u)) && u > -1 && u % 1 == 0 && u < c;
        }
        function Bt(u, c, p) {
          if (!ht(p))
            return !1;
          var w = typeof c;
          return (w == "number" ? Yt(p) && On(c, p.length) : w == "string" && c in p) ? Wr(p[c], u) : !1;
        }
        function yd(u, c) {
          if (Me(u))
            return !1;
          var p = typeof u;
          return p == "number" || p == "symbol" || p == "boolean" || u == null || or(u) ? !0 : gI.test(u) || !vI.test(u) || c != null && u in et(c);
        }
        function xk(u) {
          var c = typeof u;
          return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? u !== "__proto__" : u === null;
        }
        function md(u) {
          var c = Vs(u), p = C[c];
          if (typeof p != "function" || !(c in qe.prototype))
            return !1;
          if (u === p)
            return !0;
          var w = pd(p);
          return !!w && u === w[0];
        }
        function wk(u) {
          return !!C0 && C0 in u;
        }
        var _k = Ss ? Sn : jd;
        function Wo(u) {
          var c = u && u.constructor, p = typeof c == "function" && c.prototype || va;
          return u === p;
        }
        function Cx(u) {
          return u === u && !ht(u);
        }
        function Mx(u, c) {
          return function(p) {
            return p == null ? !1 : p[u] === c && (c !== r || u in et(p));
          };
        }
        function Ok(u) {
          var c = ec(u, function(w) {
            return p.size === f && p.clear(), w;
          }), p = c.cache;
          return c;
        }
        function Sk(u, c) {
          var p = u[1], w = c[1], P = p | w, M = P < (b | S | T), R = w == T && p == A || w == T && p == I && u[7].length <= c[8] || w == (T | I) && c[7].length <= c[8] && p == A;
          if (!(M || R))
            return u;
          w & b && (u[2] = c[2], P |= p & b ? 0 : O);
          var D = c[3];
          if (D) {
            var z = u[3];
            u[3] = z ? dx(z, D, c[4]) : D, u[4] = z ? Jn(u[3], d) : c[4];
          }
          return D = c[5], D && (z = u[5], u[5] = z ? hx(z, D, c[6]) : D, u[6] = z ? Jn(u[5], d) : c[6]), D = c[7], D && (u[7] = D), w & T && (u[8] = u[8] == null ? c[8] : jt(u[8], c[8])), u[9] == null && (u[9] = c[9]), u[0] = c[0], u[1] = P, u;
        }
        function Ak(u) {
          var c = [];
          if (u != null)
            for (var p in et(u))
              c.push(p);
          return c;
        }
        function Pk(u) {
          return Ps.call(u);
        }
        function Ix(u, c, p) {
          return c = wt(c === r ? u.length - 1 : c, 0), function() {
            for (var w = arguments, P = -1, M = wt(w.length - c, 0), R = K(M); ++P < M; )
              R[P] = w[c + P];
            P = -1;
            for (var D = K(c + 1); ++P < c; )
              D[P] = w[P];
            return D[c] = p(R), nr(u, this, D);
          };
        }
        function Rx(u, c) {
          return c.length < 2 ? u : Ii(u, _r(c, 0, -1));
        }
        function Ek(u, c) {
          for (var p = u.length, w = jt(c.length, p), P = Vt(u); w--; ) {
            var M = c[w];
            u[w] = On(M, p) ? P[M] : r;
          }
          return u;
        }
        function bd(u, c) {
          if (!(c === "constructor" && typeof u[c] == "function") && c != "__proto__")
            return u[c];
        }
        var $x = jx(rx), zo = WR || function(u, c) {
          return Rt.setTimeout(u, c);
        }, xd = jx(X$);
        function kx(u, c, p) {
          var w = c + "";
          return xd(u, mk(w, Tk(vk(w), p)));
        }
        function jx(u) {
          var c = 0, p = 0;
          return function() {
            var w = GR(), P = q - (w - p);
            if (p = w, P > 0) {
              if (++c >= j)
                return arguments[0];
            } else
              c = 0;
            return u.apply(r, arguments);
          };
        }
        function Xs(u, c) {
          var p = -1, w = u.length, P = w - 1;
          for (c = c === r ? w : c; ++p < c; ) {
            var M = rd(p, P), R = u[M];
            u[M] = u[p], u[p] = R;
          }
          return u.length = c, u;
        }
        var Nx = Ok(function(u) {
          var c = [];
          return u.charCodeAt(0) === 46 && c.push(""), u.replace(yI, function(p, w, P, M) {
            c.push(P ? M.replace(AI, "$1") : w || p);
          }), c;
        });
        function an(u) {
          if (typeof u == "string" || or(u))
            return u;
          var c = u + "";
          return c == "0" && 1 / u == -J ? "-0" : c;
        }
        function $i(u) {
          if (u != null) {
            try {
              return As.call(u);
            } catch {
            }
            try {
              return u + "";
            } catch {
            }
          }
          return "";
        }
        function Tk(u, c) {
          return mr(he, function(p) {
            var w = "_." + p[0];
            c & p[1] && !xs(u, w) && u.push(w);
          }), u.sort();
        }
        function Dx(u) {
          if (u instanceof qe)
            return u.clone();
          var c = new xr(u.__wrapped__, u.__chain__);
          return c.__actions__ = Vt(u.__actions__), c.__index__ = u.__index__, c.__values__ = u.__values__, c;
        }
        function Ck(u, c, p) {
          (p ? Bt(u, c, p) : c === r) ? c = 1 : c = wt(Re(c), 0);
          var w = u == null ? 0 : u.length;
          if (!w || c < 1)
            return [];
          for (var P = 0, M = 0, R = K(Rs(w / c)); P < w; )
            R[M++] = _r(u, P, P += c);
          return R;
        }
        function Mk(u) {
          for (var c = -1, p = u == null ? 0 : u.length, w = 0, P = []; ++c < p; ) {
            var M = u[c];
            M && (P[w++] = M);
          }
          return P;
        }
        function Ik() {
          var u = arguments.length;
          if (!u)
            return [];
          for (var c = K(u - 1), p = arguments[0], w = u; w--; )
            c[w - 1] = arguments[w];
          return Zn(Me(p) ? Vt(p) : [p], $t(c, 1));
        }
        var Rk = Ne(function(u, c) {
          return gt(u) ? Do(u, $t(c, 1, gt, !0)) : [];
        }), $k = Ne(function(u, c) {
          var p = Or(c);
          return gt(p) && (p = r), gt(u) ? Do(u, $t(c, 1, gt, !0), _e(p, 2)) : [];
        }), kk = Ne(function(u, c) {
          var p = Or(c);
          return gt(p) && (p = r), gt(u) ? Do(u, $t(c, 1, gt, !0), r, p) : [];
        });
        function jk(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Re(c), _r(u, c < 0 ? 0 : c, w)) : [];
        }
        function Nk(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Re(c), c = w - c, _r(u, 0, c < 0 ? 0 : c)) : [];
        }
        function Dk(u, c) {
          return u && u.length ? Ws(u, _e(c, 3), !0, !0) : [];
        }
        function Lk(u, c) {
          return u && u.length ? Ws(u, _e(c, 3), !0) : [];
        }
        function qk(u, c, p, w) {
          var P = u == null ? 0 : u.length;
          return P ? (p && typeof p != "number" && Bt(u, c, p) && (p = 0, w = P), I$(u, c, p, w)) : [];
        }
        function Lx(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var P = p == null ? 0 : Re(p);
          return P < 0 && (P = wt(w + P, 0)), ws(u, _e(c, 3), P);
        }
        function qx(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var P = w - 1;
          return p !== r && (P = Re(p), P = p < 0 ? wt(w + P, 0) : jt(P, w - 1)), ws(u, _e(c, 3), P, !0);
        }
        function Bx(u) {
          var c = u == null ? 0 : u.length;
          return c ? $t(u, 1) : [];
        }
        function Bk(u) {
          var c = u == null ? 0 : u.length;
          return c ? $t(u, J) : [];
        }
        function Fk(u, c) {
          var p = u == null ? 0 : u.length;
          return p ? (c = c === r ? 1 : Re(c), $t(u, c)) : [];
        }
        function Wk(u) {
          for (var c = -1, p = u == null ? 0 : u.length, w = {}; ++c < p; ) {
            var P = u[c];
            w[P[0]] = P[1];
          }
          return w;
        }
        function Fx(u) {
          return u && u.length ? u[0] : r;
        }
        function zk(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var P = p == null ? 0 : Re(p);
          return P < 0 && (P = wt(w + P, 0)), fa(u, c, P);
        }
        function Uk(u) {
          var c = u == null ? 0 : u.length;
          return c ? _r(u, 0, -1) : [];
        }
        var Hk = Ne(function(u) {
          var c = lt(u, ud);
          return c.length && c[0] === u[0] ? Zf(c) : [];
        }), Gk = Ne(function(u) {
          var c = Or(u), p = lt(u, ud);
          return c === Or(p) ? c = r : p.pop(), p.length && p[0] === u[0] ? Zf(p, _e(c, 2)) : [];
        }), Kk = Ne(function(u) {
          var c = Or(u), p = lt(u, ud);
          return c = typeof c == "function" ? c : r, c && p.pop(), p.length && p[0] === u[0] ? Zf(p, r, c) : [];
        });
        function Vk(u, c) {
          return u == null ? "" : UR.call(u, c);
        }
        function Or(u) {
          var c = u == null ? 0 : u.length;
          return c ? u[c - 1] : r;
        }
        function Yk(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var P = w;
          return p !== r && (P = Re(p), P = P < 0 ? wt(w + P, 0) : jt(P, w - 1)), c === c ? TR(u, c, P) : ws(u, w0, P, !0);
        }
        function Xk(u, c) {
          return u && u.length ? J0(u, Re(c)) : r;
        }
        var Zk = Ne(Wx);
        function Wx(u, c) {
          return u && u.length && c && c.length ? td(u, c) : u;
        }
        function Jk(u, c, p) {
          return u && u.length && c && c.length ? td(u, c, _e(p, 2)) : u;
        }
        function Qk(u, c, p) {
          return u && u.length && c && c.length ? td(u, c, r, p) : u;
        }
        var ej = _n(function(u, c) {
          var p = u == null ? 0 : u.length, w = Kf(u, c);
          return tx(u, lt(c, function(P) {
            return On(P, p) ? +P : P;
          }).sort(fx)), w;
        });
        function tj(u, c) {
          var p = [];
          if (!(u && u.length))
            return p;
          var w = -1, P = [], M = u.length;
          for (c = _e(c, 3); ++w < M; ) {
            var R = u[w];
            c(R, w, u) && (p.push(R), P.push(w));
          }
          return tx(u, P), p;
        }
        function wd(u) {
          return u == null ? u : VR.call(u);
        }
        function rj(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (p && typeof p != "number" && Bt(u, c, p) ? (c = 0, p = w) : (c = c == null ? 0 : Re(c), p = p === r ? w : Re(p)), _r(u, c, p)) : [];
        }
        function nj(u, c) {
          return Fs(u, c);
        }
        function ij(u, c, p) {
          return id(u, c, _e(p, 2));
        }
        function aj(u, c) {
          var p = u == null ? 0 : u.length;
          if (p) {
            var w = Fs(u, c);
            if (w < p && Wr(u[w], c))
              return w;
          }
          return -1;
        }
        function oj(u, c) {
          return Fs(u, c, !0);
        }
        function uj(u, c, p) {
          return id(u, c, _e(p, 2), !0);
        }
        function sj(u, c) {
          var p = u == null ? 0 : u.length;
          if (p) {
            var w = Fs(u, c, !0) - 1;
            if (Wr(u[w], c))
              return w;
          }
          return -1;
        }
        function cj(u) {
          return u && u.length ? nx(u) : [];
        }
        function lj(u, c) {
          return u && u.length ? nx(u, _e(c, 2)) : [];
        }
        function fj(u) {
          var c = u == null ? 0 : u.length;
          return c ? _r(u, 1, c) : [];
        }
        function dj(u, c, p) {
          return u && u.length ? (c = p || c === r ? 1 : Re(c), _r(u, 0, c < 0 ? 0 : c)) : [];
        }
        function hj(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Re(c), c = w - c, _r(u, c < 0 ? 0 : c, w)) : [];
        }
        function pj(u, c) {
          return u && u.length ? Ws(u, _e(c, 3), !1, !0) : [];
        }
        function vj(u, c) {
          return u && u.length ? Ws(u, _e(c, 3)) : [];
        }
        var gj = Ne(function(u) {
          return ti($t(u, 1, gt, !0));
        }), yj = Ne(function(u) {
          var c = Or(u);
          return gt(c) && (c = r), ti($t(u, 1, gt, !0), _e(c, 2));
        }), mj = Ne(function(u) {
          var c = Or(u);
          return c = typeof c == "function" ? c : r, ti($t(u, 1, gt, !0), r, c);
        });
        function bj(u) {
          return u && u.length ? ti(u) : [];
        }
        function xj(u, c) {
          return u && u.length ? ti(u, _e(c, 2)) : [];
        }
        function wj(u, c) {
          return c = typeof c == "function" ? c : r, u && u.length ? ti(u, r, c) : [];
        }
        function _d(u) {
          if (!(u && u.length))
            return [];
          var c = 0;
          return u = Xn(u, function(p) {
            if (gt(p))
              return c = wt(p.length, c), !0;
          }), qf(c, function(p) {
            return lt(u, Nf(p));
          });
        }
        function zx(u, c) {
          if (!(u && u.length))
            return [];
          var p = _d(u);
          return c == null ? p : lt(p, function(w) {
            return nr(c, r, w);
          });
        }
        var _j = Ne(function(u, c) {
          return gt(u) ? Do(u, c) : [];
        }), Oj = Ne(function(u) {
          return od(Xn(u, gt));
        }), Sj = Ne(function(u) {
          var c = Or(u);
          return gt(c) && (c = r), od(Xn(u, gt), _e(c, 2));
        }), Aj = Ne(function(u) {
          var c = Or(u);
          return c = typeof c == "function" ? c : r, od(Xn(u, gt), r, c);
        }), Pj = Ne(_d);
        function Ej(u, c) {
          return ux(u || [], c || [], No);
        }
        function Tj(u, c) {
          return ux(u || [], c || [], Bo);
        }
        var Cj = Ne(function(u) {
          var c = u.length, p = c > 1 ? u[c - 1] : r;
          return p = typeof p == "function" ? (u.pop(), p) : r, zx(u, p);
        });
        function Ux(u) {
          var c = C(u);
          return c.__chain__ = !0, c;
        }
        function Mj(u, c) {
          return c(u), u;
        }
        function Zs(u, c) {
          return c(u);
        }
        var Ij = _n(function(u) {
          var c = u.length, p = c ? u[0] : 0, w = this.__wrapped__, P = function(M) {
            return Kf(M, u);
          };
          return c > 1 || this.__actions__.length || !(w instanceof qe) || !On(p) ? this.thru(P) : (w = w.slice(p, +p + (c ? 1 : 0)), w.__actions__.push({
            func: Zs,
            args: [P],
            thisArg: r
          }), new xr(w, this.__chain__).thru(function(M) {
            return c && !M.length && M.push(r), M;
          }));
        });
        function Rj() {
          return Ux(this);
        }
        function $j() {
          return new xr(this.value(), this.__chain__);
        }
        function kj() {
          this.__values__ === r && (this.__values__ = iw(this.value()));
          var u = this.__index__ >= this.__values__.length, c = u ? r : this.__values__[this.__index__++];
          return { done: u, value: c };
        }
        function jj() {
          return this;
        }
        function Nj(u) {
          for (var c, p = this; p instanceof Ns; ) {
            var w = Dx(p);
            w.__index__ = 0, w.__values__ = r, c ? P.__wrapped__ = w : c = w;
            var P = w;
            p = p.__wrapped__;
          }
          return P.__wrapped__ = u, c;
        }
        function Dj() {
          var u = this.__wrapped__;
          if (u instanceof qe) {
            var c = u;
            return this.__actions__.length && (c = new qe(this)), c = c.reverse(), c.__actions__.push({
              func: Zs,
              args: [wd],
              thisArg: r
            }), new xr(c, this.__chain__);
          }
          return this.thru(wd);
        }
        function Lj() {
          return ox(this.__wrapped__, this.__actions__);
        }
        var qj = zs(function(u, c, p) {
          Xe.call(u, p) ? ++u[p] : xn(u, p, 1);
        });
        function Bj(u, c, p) {
          var w = Me(u) ? b0 : M$;
          return p && Bt(u, c, p) && (c = r), w(u, _e(c, 3));
        }
        function Fj(u, c) {
          var p = Me(u) ? Xn : z0;
          return p(u, _e(c, 3));
        }
        var Wj = yx(Lx), zj = yx(qx);
        function Uj(u, c) {
          return $t(Js(u, c), 1);
        }
        function Hj(u, c) {
          return $t(Js(u, c), J);
        }
        function Gj(u, c, p) {
          return p = p === r ? 1 : Re(p), $t(Js(u, c), p);
        }
        function Hx(u, c) {
          var p = Me(u) ? mr : ei;
          return p(u, _e(c, 3));
        }
        function Gx(u, c) {
          var p = Me(u) ? fR : W0;
          return p(u, _e(c, 3));
        }
        var Kj = zs(function(u, c, p) {
          Xe.call(u, p) ? u[p].push(c) : xn(u, p, [c]);
        });
        function Vj(u, c, p, w) {
          u = Yt(u) ? u : Oa(u), p = p && !w ? Re(p) : 0;
          var P = u.length;
          return p < 0 && (p = wt(P + p, 0)), nc(u) ? p <= P && u.indexOf(c, p) > -1 : !!P && fa(u, c, p) > -1;
        }
        var Yj = Ne(function(u, c, p) {
          var w = -1, P = typeof c == "function", M = Yt(u) ? K(u.length) : [];
          return ei(u, function(R) {
            M[++w] = P ? nr(c, R, p) : Lo(R, c, p);
          }), M;
        }), Xj = zs(function(u, c, p) {
          xn(u, p, c);
        });
        function Js(u, c) {
          var p = Me(u) ? lt : Y0;
          return p(u, _e(c, 3));
        }
        function Zj(u, c, p, w) {
          return u == null ? [] : (Me(c) || (c = c == null ? [] : [c]), p = w ? r : p, Me(p) || (p = p == null ? [] : [p]), Q0(u, c, p));
        }
        var Jj = zs(function(u, c, p) {
          u[p ? 0 : 1].push(c);
        }, function() {
          return [[], []];
        });
        function Qj(u, c, p) {
          var w = Me(u) ? kf : O0, P = arguments.length < 3;
          return w(u, _e(c, 4), p, P, ei);
        }
        function eN(u, c, p) {
          var w = Me(u) ? dR : O0, P = arguments.length < 3;
          return w(u, _e(c, 4), p, P, W0);
        }
        function tN(u, c) {
          var p = Me(u) ? Xn : z0;
          return p(u, tc(_e(c, 3)));
        }
        function rN(u) {
          var c = Me(u) ? L0 : V$;
          return c(u);
        }
        function nN(u, c, p) {
          (p ? Bt(u, c, p) : c === r) ? c = 1 : c = Re(c);
          var w = Me(u) ? A$ : Y$;
          return w(u, c);
        }
        function iN(u) {
          var c = Me(u) ? P$ : Z$;
          return c(u);
        }
        function aN(u) {
          if (u == null)
            return 0;
          if (Yt(u))
            return nc(u) ? ha(u) : u.length;
          var c = Nt(u);
          return c == we || c == vt ? u.size : Qf(u).length;
        }
        function oN(u, c, p) {
          var w = Me(u) ? jf : J$;
          return p && Bt(u, c, p) && (c = r), w(u, _e(c, 3));
        }
        var uN = Ne(function(u, c) {
          if (u == null)
            return [];
          var p = c.length;
          return p > 1 && Bt(u, c[0], c[1]) ? c = [] : p > 2 && Bt(c[0], c[1], c[2]) && (c = [c[0]]), Q0(u, $t(c, 1), []);
        }), Qs = FR || function() {
          return Rt.Date.now();
        };
        function sN(u, c) {
          if (typeof c != "function")
            throw new br(o);
          return u = Re(u), function() {
            if (--u < 1)
              return c.apply(this, arguments);
          };
        }
        function Kx(u, c, p) {
          return c = p ? r : c, c = u && c == null ? u.length : c, wn(u, T, r, r, r, r, c);
        }
        function Vx(u, c) {
          var p;
          if (typeof c != "function")
            throw new br(o);
          return u = Re(u), function() {
            return --u > 0 && (p = c.apply(this, arguments)), u <= 1 && (c = r), p;
          };
        }
        var Od = Ne(function(u, c, p) {
          var w = b;
          if (p.length) {
            var P = Jn(p, wa(Od));
            w |= m;
          }
          return wn(u, w, c, p, P);
        }), Yx = Ne(function(u, c, p) {
          var w = b | S;
          if (p.length) {
            var P = Jn(p, wa(Yx));
            w |= m;
          }
          return wn(c, w, u, p, P);
        });
        function Xx(u, c, p) {
          c = p ? r : c;
          var w = wn(u, A, r, r, r, r, r, c);
          return w.placeholder = Xx.placeholder, w;
        }
        function Zx(u, c, p) {
          c = p ? r : c;
          var w = wn(u, _, r, r, r, r, r, c);
          return w.placeholder = Zx.placeholder, w;
        }
        function Jx(u, c, p) {
          var w, P, M, R, D, z, ee = 0, re = !1, ie = !1, fe = !0;
          if (typeof u != "function")
            throw new br(o);
          c = Sr(c) || 0, ht(p) && (re = !!p.leading, ie = "maxWait" in p, M = ie ? wt(Sr(p.maxWait) || 0, c) : M, fe = "trailing" in p ? !!p.trailing : fe);
          function me(yt) {
            var zr = w, Pn = P;
            return w = P = r, ee = yt, R = u.apply(Pn, zr), R;
          }
          function Oe(yt) {
            return ee = yt, D = zo(De, c), re ? me(yt) : R;
          }
          function je(yt) {
            var zr = yt - z, Pn = yt - ee, yw = c - zr;
            return ie ? jt(yw, M - Pn) : yw;
          }
          function Se(yt) {
            var zr = yt - z, Pn = yt - ee;
            return z === r || zr >= c || zr < 0 || ie && Pn >= M;
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
            D !== r && sx(D), ee = 0, w = z = P = D = r;
          }
          function Ft() {
            return D === r ? R : Be(Qs());
          }
          function sr() {
            var yt = Qs(), zr = Se(yt);
            if (w = arguments, P = this, z = yt, zr) {
              if (D === r)
                return Oe(z);
              if (ie)
                return sx(D), D = zo(De, c), me(z);
            }
            return D === r && (D = zo(De, c)), R;
          }
          return sr.cancel = ur, sr.flush = Ft, sr;
        }
        var cN = Ne(function(u, c) {
          return F0(u, 1, c);
        }), lN = Ne(function(u, c, p) {
          return F0(u, Sr(c) || 0, p);
        });
        function fN(u) {
          return wn(u, B);
        }
        function ec(u, c) {
          if (typeof u != "function" || c != null && typeof c != "function")
            throw new br(o);
          var p = function() {
            var w = arguments, P = c ? c.apply(this, w) : w[0], M = p.cache;
            if (M.has(P))
              return M.get(P);
            var R = u.apply(this, w);
            return p.cache = M.set(P, R) || M, R;
          };
          return p.cache = new (ec.Cache || bn)(), p;
        }
        ec.Cache = bn;
        function tc(u) {
          if (typeof u != "function")
            throw new br(o);
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return !u.call(this);
              case 1:
                return !u.call(this, c[0]);
              case 2:
                return !u.call(this, c[0], c[1]);
              case 3:
                return !u.call(this, c[0], c[1], c[2]);
            }
            return !u.apply(this, c);
          };
        }
        function dN(u) {
          return Vx(2, u);
        }
        var hN = Q$(function(u, c) {
          c = c.length == 1 && Me(c[0]) ? lt(c[0], ir(_e())) : lt($t(c, 1), ir(_e()));
          var p = c.length;
          return Ne(function(w) {
            for (var P = -1, M = jt(w.length, p); ++P < M; )
              w[P] = c[P].call(this, w[P]);
            return nr(u, this, w);
          });
        }), Sd = Ne(function(u, c) {
          var p = Jn(c, wa(Sd));
          return wn(u, m, r, c, p);
        }), Qx = Ne(function(u, c) {
          var p = Jn(c, wa(Qx));
          return wn(u, E, r, c, p);
        }), pN = _n(function(u, c) {
          return wn(u, I, r, r, r, c);
        });
        function vN(u, c) {
          if (typeof u != "function")
            throw new br(o);
          return c = c === r ? c : Re(c), Ne(u, c);
        }
        function gN(u, c) {
          if (typeof u != "function")
            throw new br(o);
          return c = c == null ? 0 : wt(Re(c), 0), Ne(function(p) {
            var w = p[c], P = ni(p, 0, c);
            return w && Zn(P, w), nr(u, this, P);
          });
        }
        function yN(u, c, p) {
          var w = !0, P = !0;
          if (typeof u != "function")
            throw new br(o);
          return ht(p) && (w = "leading" in p ? !!p.leading : w, P = "trailing" in p ? !!p.trailing : P), Jx(u, c, {
            leading: w,
            maxWait: c,
            trailing: P
          });
        }
        function mN(u) {
          return Kx(u, 1);
        }
        function bN(u, c) {
          return Sd(sd(c), u);
        }
        function xN() {
          if (!arguments.length)
            return [];
          var u = arguments[0];
          return Me(u) ? u : [u];
        }
        function wN(u) {
          return wr(u, g);
        }
        function _N(u, c) {
          return c = typeof c == "function" ? c : r, wr(u, g, c);
        }
        function ON(u) {
          return wr(u, h | g);
        }
        function SN(u, c) {
          return c = typeof c == "function" ? c : r, wr(u, h | g, c);
        }
        function AN(u, c) {
          return c == null || B0(u, c, Tt(c));
        }
        function Wr(u, c) {
          return u === c || u !== u && c !== c;
        }
        var PN = Ks(Xf), EN = Ks(function(u, c) {
          return u >= c;
        }), ki = G0(/* @__PURE__ */ function() {
          return arguments;
        }()) ? G0 : function(u) {
          return pt(u) && Xe.call(u, "callee") && !R0.call(u, "callee");
        }, Me = K.isArray, TN = h0 ? ir(h0) : N$;
        function Yt(u) {
          return u != null && rc(u.length) && !Sn(u);
        }
        function gt(u) {
          return pt(u) && Yt(u);
        }
        function CN(u) {
          return u === !0 || u === !1 || pt(u) && qt(u) == ge;
        }
        var ii = zR || jd, MN = p0 ? ir(p0) : D$;
        function IN(u) {
          return pt(u) && u.nodeType === 1 && !Uo(u);
        }
        function RN(u) {
          if (u == null)
            return !0;
          if (Yt(u) && (Me(u) || typeof u == "string" || typeof u.splice == "function" || ii(u) || _a(u) || ki(u)))
            return !u.length;
          var c = Nt(u);
          if (c == we || c == vt)
            return !u.size;
          if (Wo(u))
            return !Qf(u).length;
          for (var p in u)
            if (Xe.call(u, p))
              return !1;
          return !0;
        }
        function $N(u, c) {
          return qo(u, c);
        }
        function kN(u, c, p) {
          p = typeof p == "function" ? p : r;
          var w = p ? p(u, c) : r;
          return w === r ? qo(u, c, r, p) : !!w;
        }
        function Ad(u) {
          if (!pt(u))
            return !1;
          var c = qt(u);
          return c == ve || c == se || typeof u.message == "string" && typeof u.name == "string" && !Uo(u);
        }
        function jN(u) {
          return typeof u == "number" && k0(u);
        }
        function Sn(u) {
          if (!ht(u))
            return !1;
          var c = qt(u);
          return c == k || c == Ee || c == le || c == qr;
        }
        function ew(u) {
          return typeof u == "number" && u == Re(u);
        }
        function rc(u) {
          return typeof u == "number" && u > -1 && u % 1 == 0 && u <= G;
        }
        function ht(u) {
          var c = typeof u;
          return u != null && (c == "object" || c == "function");
        }
        function pt(u) {
          return u != null && typeof u == "object";
        }
        var tw = v0 ? ir(v0) : q$;
        function NN(u, c) {
          return u === c || Jf(u, c, vd(c));
        }
        function DN(u, c, p) {
          return p = typeof p == "function" ? p : r, Jf(u, c, vd(c), p);
        }
        function LN(u) {
          return rw(u) && u != +u;
        }
        function qN(u) {
          if (_k(u))
            throw new Ce(a);
          return K0(u);
        }
        function BN(u) {
          return u === null;
        }
        function FN(u) {
          return u == null;
        }
        function rw(u) {
          return typeof u == "number" || pt(u) && qt(u) == Fe;
        }
        function Uo(u) {
          if (!pt(u) || qt(u) != at)
            return !1;
          var c = Cs(u);
          if (c === null)
            return !0;
          var p = Xe.call(c, "constructor") && c.constructor;
          return typeof p == "function" && p instanceof p && As.call(p) == DR;
        }
        var Pd = g0 ? ir(g0) : B$;
        function WN(u) {
          return ew(u) && u >= -G && u <= G;
        }
        var nw = y0 ? ir(y0) : F$;
        function nc(u) {
          return typeof u == "string" || !Me(u) && pt(u) && qt(u) == yn;
        }
        function or(u) {
          return typeof u == "symbol" || pt(u) && qt(u) == Vn;
        }
        var _a = m0 ? ir(m0) : W$;
        function zN(u) {
          return u === r;
        }
        function UN(u) {
          return pt(u) && Nt(u) == Yn;
        }
        function HN(u) {
          return pt(u) && qt(u) == gs;
        }
        var GN = Ks(ed), KN = Ks(function(u, c) {
          return u <= c;
        });
        function iw(u) {
          if (!u)
            return [];
          if (Yt(u))
            return nc(u) ? Br(u) : Vt(u);
          if (Io && u[Io])
            return AR(u[Io]());
          var c = Nt(u), p = c == we ? Ff : c == vt ? _s : Oa;
          return p(u);
        }
        function An(u) {
          if (!u)
            return u === 0 ? u : 0;
          if (u = Sr(u), u === J || u === -J) {
            var c = u < 0 ? -1 : 1;
            return c * ue;
          }
          return u === u ? u : 0;
        }
        function Re(u) {
          var c = An(u), p = c % 1;
          return c === c ? p ? c - p : c : 0;
        }
        function aw(u) {
          return u ? Mi(Re(u), 0, Z) : 0;
        }
        function Sr(u) {
          if (typeof u == "number")
            return u;
          if (or(u))
            return H;
          if (ht(u)) {
            var c = typeof u.valueOf == "function" ? u.valueOf() : u;
            u = ht(c) ? c + "" : c;
          }
          if (typeof u != "string")
            return u === 0 ? u : +u;
          u = S0(u);
          var p = TI.test(u);
          return p || MI.test(u) ? sR(u.slice(2), p ? 2 : 8) : EI.test(u) ? H : +u;
        }
        function ow(u) {
          return nn(u, Xt(u));
        }
        function VN(u) {
          return u ? Mi(Re(u), -G, G) : u === 0 ? u : 0;
        }
        function He(u) {
          return u == null ? "" : ar(u);
        }
        var YN = ba(function(u, c) {
          if (Wo(c) || Yt(c)) {
            nn(c, Tt(c), u);
            return;
          }
          for (var p in c)
            Xe.call(c, p) && No(u, p, c[p]);
        }), uw = ba(function(u, c) {
          nn(c, Xt(c), u);
        }), ic = ba(function(u, c, p, w) {
          nn(c, Xt(c), u, w);
        }), XN = ba(function(u, c, p, w) {
          nn(c, Tt(c), u, w);
        }), ZN = _n(Kf);
        function JN(u, c) {
          var p = ma(u);
          return c == null ? p : q0(p, c);
        }
        var QN = Ne(function(u, c) {
          u = et(u);
          var p = -1, w = c.length, P = w > 2 ? c[2] : r;
          for (P && Bt(c[0], c[1], P) && (w = 1); ++p < w; )
            for (var M = c[p], R = Xt(M), D = -1, z = R.length; ++D < z; ) {
              var ee = R[D], re = u[ee];
              (re === r || Wr(re, va[ee]) && !Xe.call(u, ee)) && (u[ee] = M[ee]);
            }
          return u;
        }), eD = Ne(function(u) {
          return u.push(r, Sx), nr(sw, r, u);
        });
        function tD(u, c) {
          return x0(u, _e(c, 3), rn);
        }
        function rD(u, c) {
          return x0(u, _e(c, 3), Yf);
        }
        function nD(u, c) {
          return u == null ? u : Vf(u, _e(c, 3), Xt);
        }
        function iD(u, c) {
          return u == null ? u : U0(u, _e(c, 3), Xt);
        }
        function aD(u, c) {
          return u && rn(u, _e(c, 3));
        }
        function oD(u, c) {
          return u && Yf(u, _e(c, 3));
        }
        function uD(u) {
          return u == null ? [] : qs(u, Tt(u));
        }
        function sD(u) {
          return u == null ? [] : qs(u, Xt(u));
        }
        function Ed(u, c, p) {
          var w = u == null ? r : Ii(u, c);
          return w === r ? p : w;
        }
        function cD(u, c) {
          return u != null && Ex(u, c, R$);
        }
        function Td(u, c) {
          return u != null && Ex(u, c, $$);
        }
        var lD = bx(function(u, c, p) {
          c != null && typeof c.toString != "function" && (c = Ps.call(c)), u[c] = p;
        }, Md(Zt)), fD = bx(function(u, c, p) {
          c != null && typeof c.toString != "function" && (c = Ps.call(c)), Xe.call(u, c) ? u[c].push(p) : u[c] = [p];
        }, _e), dD = Ne(Lo);
        function Tt(u) {
          return Yt(u) ? D0(u) : Qf(u);
        }
        function Xt(u) {
          return Yt(u) ? D0(u, !0) : z$(u);
        }
        function hD(u, c) {
          var p = {};
          return c = _e(c, 3), rn(u, function(w, P, M) {
            xn(p, c(w, P, M), w);
          }), p;
        }
        function pD(u, c) {
          var p = {};
          return c = _e(c, 3), rn(u, function(w, P, M) {
            xn(p, P, c(w, P, M));
          }), p;
        }
        var vD = ba(function(u, c, p) {
          Bs(u, c, p);
        }), sw = ba(function(u, c, p, w) {
          Bs(u, c, p, w);
        }), gD = _n(function(u, c) {
          var p = {};
          if (u == null)
            return p;
          var w = !1;
          c = lt(c, function(M) {
            return M = ri(M, u), w || (w = M.length > 1), M;
          }), nn(u, hd(u), p), w && (p = wr(p, h | v | g, lk));
          for (var P = c.length; P--; )
            ad(p, c[P]);
          return p;
        });
        function yD(u, c) {
          return cw(u, tc(_e(c)));
        }
        var mD = _n(function(u, c) {
          return u == null ? {} : H$(u, c);
        });
        function cw(u, c) {
          if (u == null)
            return {};
          var p = lt(hd(u), function(w) {
            return [w];
          });
          return c = _e(c), ex(u, p, function(w, P) {
            return c(w, P[0]);
          });
        }
        function bD(u, c, p) {
          c = ri(c, u);
          var w = -1, P = c.length;
          for (P || (P = 1, u = r); ++w < P; ) {
            var M = u == null ? r : u[an(c[w])];
            M === r && (w = P, M = p), u = Sn(M) ? M.call(u) : M;
          }
          return u;
        }
        function xD(u, c, p) {
          return u == null ? u : Bo(u, c, p);
        }
        function wD(u, c, p, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : Bo(u, c, p, w);
        }
        var lw = _x(Tt), fw = _x(Xt);
        function _D(u, c, p) {
          var w = Me(u), P = w || ii(u) || _a(u);
          if (c = _e(c, 4), p == null) {
            var M = u && u.constructor;
            P ? p = w ? new M() : [] : ht(u) ? p = Sn(M) ? ma(Cs(u)) : {} : p = {};
          }
          return (P ? mr : rn)(u, function(R, D, z) {
            return c(p, R, D, z);
          }), p;
        }
        function OD(u, c) {
          return u == null ? !0 : ad(u, c);
        }
        function SD(u, c, p) {
          return u == null ? u : ax(u, c, sd(p));
        }
        function AD(u, c, p, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : ax(u, c, sd(p), w);
        }
        function Oa(u) {
          return u == null ? [] : Bf(u, Tt(u));
        }
        function PD(u) {
          return u == null ? [] : Bf(u, Xt(u));
        }
        function ED(u, c, p) {
          return p === r && (p = c, c = r), p !== r && (p = Sr(p), p = p === p ? p : 0), c !== r && (c = Sr(c), c = c === c ? c : 0), Mi(Sr(u), c, p);
        }
        function TD(u, c, p) {
          return c = An(c), p === r ? (p = c, c = 0) : p = An(p), u = Sr(u), k$(u, c, p);
        }
        function CD(u, c, p) {
          if (p && typeof p != "boolean" && Bt(u, c, p) && (c = p = r), p === r && (typeof c == "boolean" ? (p = c, c = r) : typeof u == "boolean" && (p = u, u = r)), u === r && c === r ? (u = 0, c = 1) : (u = An(u), c === r ? (c = u, u = 0) : c = An(c)), u > c) {
            var w = u;
            u = c, c = w;
          }
          if (p || u % 1 || c % 1) {
            var P = j0();
            return jt(u + P * (c - u + uR("1e-" + ((P + "").length - 1))), c);
          }
          return rd(u, c);
        }
        var MD = xa(function(u, c, p) {
          return c = c.toLowerCase(), u + (p ? dw(c) : c);
        });
        function dw(u) {
          return Cd(He(u).toLowerCase());
        }
        function hw(u) {
          return u = He(u), u && u.replace(RI, xR).replace(ZI, "");
        }
        function ID(u, c, p) {
          u = He(u), c = ar(c);
          var w = u.length;
          p = p === r ? w : Mi(Re(p), 0, w);
          var P = p;
          return p -= c.length, p >= 0 && u.slice(p, P) == c;
        }
        function RD(u) {
          return u = He(u), u && dI.test(u) ? u.replace(Ub, wR) : u;
        }
        function $D(u) {
          return u = He(u), u && mI.test(u) ? u.replace(Sf, "\\$&") : u;
        }
        var kD = xa(function(u, c, p) {
          return u + (p ? "-" : "") + c.toLowerCase();
        }), jD = xa(function(u, c, p) {
          return u + (p ? " " : "") + c.toLowerCase();
        }), ND = gx("toLowerCase");
        function DD(u, c, p) {
          u = He(u), c = Re(c);
          var w = c ? ha(u) : 0;
          if (!c || w >= c)
            return u;
          var P = (c - w) / 2;
          return Gs($s(P), p) + u + Gs(Rs(P), p);
        }
        function LD(u, c, p) {
          u = He(u), c = Re(c);
          var w = c ? ha(u) : 0;
          return c && w < c ? u + Gs(c - w, p) : u;
        }
        function qD(u, c, p) {
          u = He(u), c = Re(c);
          var w = c ? ha(u) : 0;
          return c && w < c ? Gs(c - w, p) + u : u;
        }
        function BD(u, c, p) {
          return p || c == null ? c = 0 : c && (c = +c), KR(He(u).replace(Af, ""), c || 0);
        }
        function FD(u, c, p) {
          return (p ? Bt(u, c, p) : c === r) ? c = 1 : c = Re(c), nd(He(u), c);
        }
        function WD() {
          var u = arguments, c = He(u[0]);
          return u.length < 3 ? c : c.replace(u[1], u[2]);
        }
        var zD = xa(function(u, c, p) {
          return u + (p ? "_" : "") + c.toLowerCase();
        });
        function UD(u, c, p) {
          return p && typeof p != "number" && Bt(u, c, p) && (c = p = r), p = p === r ? Z : p >>> 0, p ? (u = He(u), u && (typeof c == "string" || c != null && !Pd(c)) && (c = ar(c), !c && da(u)) ? ni(Br(u), 0, p) : u.split(c, p)) : [];
        }
        var HD = xa(function(u, c, p) {
          return u + (p ? " " : "") + Cd(c);
        });
        function GD(u, c, p) {
          return u = He(u), p = p == null ? 0 : Mi(Re(p), 0, u.length), c = ar(c), u.slice(p, p + c.length) == c;
        }
        function KD(u, c, p) {
          var w = C.templateSettings;
          p && Bt(u, c, p) && (c = r), u = He(u), c = ic({}, c, w, Ox);
          var P = ic({}, c.imports, w.imports, Ox), M = Tt(P), R = Bf(P, M), D, z, ee = 0, re = c.interpolate || ys, ie = "__p += '", fe = Wf(
            (c.escape || ys).source + "|" + re.source + "|" + (re === Hb ? PI : ys).source + "|" + (c.evaluate || ys).source + "|$",
            "g"
          ), me = "//# sourceURL=" + (Xe.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rR + "]") + `
`;
          u.replace(fe, function(Se, De, Be, ur, Ft, sr) {
            return Be || (Be = ur), ie += u.slice(ee, sr).replace($I, _R), De && (D = !0, ie += `' +
__e(` + De + `) +
'`), Ft && (z = !0, ie += `';
` + Ft + `;
__p += '`), Be && (ie += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), ee = sr + Se.length, Se;
          }), ie += `';
`;
          var Oe = Xe.call(c, "variable") && c.variable;
          if (!Oe)
            ie = `with (obj) {
` + ie + `
}
`;
          else if (SI.test(Oe))
            throw new Ce(s);
          ie = (z ? ie.replace(sI, "") : ie).replace(cI, "$1").replace(lI, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
          var je = vw(function() {
            return Ue(M, me + "return " + ie).apply(r, R);
          });
          if (je.source = ie, Ad(je))
            throw je;
          return je;
        }
        function VD(u) {
          return He(u).toLowerCase();
        }
        function YD(u) {
          return He(u).toUpperCase();
        }
        function XD(u, c, p) {
          if (u = He(u), u && (p || c === r))
            return S0(u);
          if (!u || !(c = ar(c)))
            return u;
          var w = Br(u), P = Br(c), M = A0(w, P), R = P0(w, P) + 1;
          return ni(w, M, R).join("");
        }
        function ZD(u, c, p) {
          if (u = He(u), u && (p || c === r))
            return u.slice(0, T0(u) + 1);
          if (!u || !(c = ar(c)))
            return u;
          var w = Br(u), P = P0(w, Br(c)) + 1;
          return ni(w, 0, P).join("");
        }
        function JD(u, c, p) {
          if (u = He(u), u && (p || c === r))
            return u.replace(Af, "");
          if (!u || !(c = ar(c)))
            return u;
          var w = Br(u), P = A0(w, Br(c));
          return ni(w, P).join("");
        }
        function QD(u, c) {
          var p = L, w = N;
          if (ht(c)) {
            var P = "separator" in c ? c.separator : P;
            p = "length" in c ? Re(c.length) : p, w = "omission" in c ? ar(c.omission) : w;
          }
          u = He(u);
          var M = u.length;
          if (da(u)) {
            var R = Br(u);
            M = R.length;
          }
          if (p >= M)
            return u;
          var D = p - ha(w);
          if (D < 1)
            return w;
          var z = R ? ni(R, 0, D).join("") : u.slice(0, D);
          if (P === r)
            return z + w;
          if (R && (D += z.length - D), Pd(P)) {
            if (u.slice(D).search(P)) {
              var ee, re = z;
              for (P.global || (P = Wf(P.source, He(Gb.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(re); )
                var ie = ee.index;
              z = z.slice(0, ie === r ? D : ie);
            }
          } else if (u.indexOf(ar(P), D) != D) {
            var fe = z.lastIndexOf(P);
            fe > -1 && (z = z.slice(0, fe));
          }
          return z + w;
        }
        function e3(u) {
          return u = He(u), u && fI.test(u) ? u.replace(zb, CR) : u;
        }
        var t3 = xa(function(u, c, p) {
          return u + (p ? " " : "") + c.toUpperCase();
        }), Cd = gx("toUpperCase");
        function pw(u, c, p) {
          return u = He(u), c = p ? r : c, c === r ? SR(u) ? RR(u) : vR(u) : u.match(c) || [];
        }
        var vw = Ne(function(u, c) {
          try {
            return nr(u, r, c);
          } catch (p) {
            return Ad(p) ? p : new Ce(p);
          }
        }), r3 = _n(function(u, c) {
          return mr(c, function(p) {
            p = an(p), xn(u, p, Od(u[p], u));
          }), u;
        });
        function n3(u) {
          var c = u == null ? 0 : u.length, p = _e();
          return u = c ? lt(u, function(w) {
            if (typeof w[1] != "function")
              throw new br(o);
            return [p(w[0]), w[1]];
          }) : [], Ne(function(w) {
            for (var P = -1; ++P < c; ) {
              var M = u[P];
              if (nr(M[0], this, w))
                return nr(M[1], this, w);
            }
          });
        }
        function i3(u) {
          return C$(wr(u, h));
        }
        function Md(u) {
          return function() {
            return u;
          };
        }
        function a3(u, c) {
          return u == null || u !== u ? c : u;
        }
        var o3 = mx(), u3 = mx(!0);
        function Zt(u) {
          return u;
        }
        function Id(u) {
          return V0(typeof u == "function" ? u : wr(u, h));
        }
        function s3(u) {
          return X0(wr(u, h));
        }
        function c3(u, c) {
          return Z0(u, wr(c, h));
        }
        var l3 = Ne(function(u, c) {
          return function(p) {
            return Lo(p, u, c);
          };
        }), f3 = Ne(function(u, c) {
          return function(p) {
            return Lo(u, p, c);
          };
        });
        function Rd(u, c, p) {
          var w = Tt(c), P = qs(c, w);
          p == null && !(ht(c) && (P.length || !w.length)) && (p = c, c = u, u = this, P = qs(c, Tt(c)));
          var M = !(ht(p) && "chain" in p) || !!p.chain, R = Sn(u);
          return mr(P, function(D) {
            var z = c[D];
            u[D] = z, R && (u.prototype[D] = function() {
              var ee = this.__chain__;
              if (M || ee) {
                var re = u(this.__wrapped__), ie = re.__actions__ = Vt(this.__actions__);
                return ie.push({ func: z, args: arguments, thisArg: u }), re.__chain__ = ee, re;
              }
              return z.apply(u, Zn([this.value()], arguments));
            });
          }), u;
        }
        function d3() {
          return Rt._ === this && (Rt._ = LR), this;
        }
        function $d() {
        }
        function h3(u) {
          return u = Re(u), Ne(function(c) {
            return J0(c, u);
          });
        }
        var p3 = ld(lt), v3 = ld(b0), g3 = ld(jf);
        function gw(u) {
          return yd(u) ? Nf(an(u)) : G$(u);
        }
        function y3(u) {
          return function(c) {
            return u == null ? r : Ii(u, c);
          };
        }
        var m3 = xx(), b3 = xx(!0);
        function kd() {
          return [];
        }
        function jd() {
          return !1;
        }
        function x3() {
          return {};
        }
        function w3() {
          return "";
        }
        function _3() {
          return !0;
        }
        function O3(u, c) {
          if (u = Re(u), u < 1 || u > G)
            return [];
          var p = Z, w = jt(u, Z);
          c = _e(c), u -= Z;
          for (var P = qf(w, c); ++p < u; )
            c(p);
          return P;
        }
        function S3(u) {
          return Me(u) ? lt(u, an) : or(u) ? [u] : Vt(Nx(He(u)));
        }
        function A3(u) {
          var c = ++NR;
          return He(u) + c;
        }
        var P3 = Hs(function(u, c) {
          return u + c;
        }, 0), E3 = fd("ceil"), T3 = Hs(function(u, c) {
          return u / c;
        }, 1), C3 = fd("floor");
        function M3(u) {
          return u && u.length ? Ls(u, Zt, Xf) : r;
        }
        function I3(u, c) {
          return u && u.length ? Ls(u, _e(c, 2), Xf) : r;
        }
        function R3(u) {
          return _0(u, Zt);
        }
        function $3(u, c) {
          return _0(u, _e(c, 2));
        }
        function k3(u) {
          return u && u.length ? Ls(u, Zt, ed) : r;
        }
        function j3(u, c) {
          return u && u.length ? Ls(u, _e(c, 2), ed) : r;
        }
        var N3 = Hs(function(u, c) {
          return u * c;
        }, 1), D3 = fd("round"), L3 = Hs(function(u, c) {
          return u - c;
        }, 0);
        function q3(u) {
          return u && u.length ? Lf(u, Zt) : 0;
        }
        function B3(u, c) {
          return u && u.length ? Lf(u, _e(c, 2)) : 0;
        }
        return C.after = sN, C.ary = Kx, C.assign = YN, C.assignIn = uw, C.assignInWith = ic, C.assignWith = XN, C.at = ZN, C.before = Vx, C.bind = Od, C.bindAll = r3, C.bindKey = Yx, C.castArray = xN, C.chain = Ux, C.chunk = Ck, C.compact = Mk, C.concat = Ik, C.cond = n3, C.conforms = i3, C.constant = Md, C.countBy = qj, C.create = JN, C.curry = Xx, C.curryRight = Zx, C.debounce = Jx, C.defaults = QN, C.defaultsDeep = eD, C.defer = cN, C.delay = lN, C.difference = Rk, C.differenceBy = $k, C.differenceWith = kk, C.drop = jk, C.dropRight = Nk, C.dropRightWhile = Dk, C.dropWhile = Lk, C.fill = qk, C.filter = Fj, C.flatMap = Uj, C.flatMapDeep = Hj, C.flatMapDepth = Gj, C.flatten = Bx, C.flattenDeep = Bk, C.flattenDepth = Fk, C.flip = fN, C.flow = o3, C.flowRight = u3, C.fromPairs = Wk, C.functions = uD, C.functionsIn = sD, C.groupBy = Kj, C.initial = Uk, C.intersection = Hk, C.intersectionBy = Gk, C.intersectionWith = Kk, C.invert = lD, C.invertBy = fD, C.invokeMap = Yj, C.iteratee = Id, C.keyBy = Xj, C.keys = Tt, C.keysIn = Xt, C.map = Js, C.mapKeys = hD, C.mapValues = pD, C.matches = s3, C.matchesProperty = c3, C.memoize = ec, C.merge = vD, C.mergeWith = sw, C.method = l3, C.methodOf = f3, C.mixin = Rd, C.negate = tc, C.nthArg = h3, C.omit = gD, C.omitBy = yD, C.once = dN, C.orderBy = Zj, C.over = p3, C.overArgs = hN, C.overEvery = v3, C.overSome = g3, C.partial = Sd, C.partialRight = Qx, C.partition = Jj, C.pick = mD, C.pickBy = cw, C.property = gw, C.propertyOf = y3, C.pull = Zk, C.pullAll = Wx, C.pullAllBy = Jk, C.pullAllWith = Qk, C.pullAt = ej, C.range = m3, C.rangeRight = b3, C.rearg = pN, C.reject = tN, C.remove = tj, C.rest = vN, C.reverse = wd, C.sampleSize = nN, C.set = xD, C.setWith = wD, C.shuffle = iN, C.slice = rj, C.sortBy = uN, C.sortedUniq = cj, C.sortedUniqBy = lj, C.split = UD, C.spread = gN, C.tail = fj, C.take = dj, C.takeRight = hj, C.takeRightWhile = pj, C.takeWhile = vj, C.tap = Mj, C.throttle = yN, C.thru = Zs, C.toArray = iw, C.toPairs = lw, C.toPairsIn = fw, C.toPath = S3, C.toPlainObject = ow, C.transform = _D, C.unary = mN, C.union = gj, C.unionBy = yj, C.unionWith = mj, C.uniq = bj, C.uniqBy = xj, C.uniqWith = wj, C.unset = OD, C.unzip = _d, C.unzipWith = zx, C.update = SD, C.updateWith = AD, C.values = Oa, C.valuesIn = PD, C.without = _j, C.words = pw, C.wrap = bN, C.xor = Oj, C.xorBy = Sj, C.xorWith = Aj, C.zip = Pj, C.zipObject = Ej, C.zipObjectDeep = Tj, C.zipWith = Cj, C.entries = lw, C.entriesIn = fw, C.extend = uw, C.extendWith = ic, Rd(C, C), C.add = P3, C.attempt = vw, C.camelCase = MD, C.capitalize = dw, C.ceil = E3, C.clamp = ED, C.clone = wN, C.cloneDeep = ON, C.cloneDeepWith = SN, C.cloneWith = _N, C.conformsTo = AN, C.deburr = hw, C.defaultTo = a3, C.divide = T3, C.endsWith = ID, C.eq = Wr, C.escape = RD, C.escapeRegExp = $D, C.every = Bj, C.find = Wj, C.findIndex = Lx, C.findKey = tD, C.findLast = zj, C.findLastIndex = qx, C.findLastKey = rD, C.floor = C3, C.forEach = Hx, C.forEachRight = Gx, C.forIn = nD, C.forInRight = iD, C.forOwn = aD, C.forOwnRight = oD, C.get = Ed, C.gt = PN, C.gte = EN, C.has = cD, C.hasIn = Td, C.head = Fx, C.identity = Zt, C.includes = Vj, C.indexOf = zk, C.inRange = TD, C.invoke = dD, C.isArguments = ki, C.isArray = Me, C.isArrayBuffer = TN, C.isArrayLike = Yt, C.isArrayLikeObject = gt, C.isBoolean = CN, C.isBuffer = ii, C.isDate = MN, C.isElement = IN, C.isEmpty = RN, C.isEqual = $N, C.isEqualWith = kN, C.isError = Ad, C.isFinite = jN, C.isFunction = Sn, C.isInteger = ew, C.isLength = rc, C.isMap = tw, C.isMatch = NN, C.isMatchWith = DN, C.isNaN = LN, C.isNative = qN, C.isNil = FN, C.isNull = BN, C.isNumber = rw, C.isObject = ht, C.isObjectLike = pt, C.isPlainObject = Uo, C.isRegExp = Pd, C.isSafeInteger = WN, C.isSet = nw, C.isString = nc, C.isSymbol = or, C.isTypedArray = _a, C.isUndefined = zN, C.isWeakMap = UN, C.isWeakSet = HN, C.join = Vk, C.kebabCase = kD, C.last = Or, C.lastIndexOf = Yk, C.lowerCase = jD, C.lowerFirst = ND, C.lt = GN, C.lte = KN, C.max = M3, C.maxBy = I3, C.mean = R3, C.meanBy = $3, C.min = k3, C.minBy = j3, C.stubArray = kd, C.stubFalse = jd, C.stubObject = x3, C.stubString = w3, C.stubTrue = _3, C.multiply = N3, C.nth = Xk, C.noConflict = d3, C.noop = $d, C.now = Qs, C.pad = DD, C.padEnd = LD, C.padStart = qD, C.parseInt = BD, C.random = CD, C.reduce = Qj, C.reduceRight = eN, C.repeat = FD, C.replace = WD, C.result = bD, C.round = D3, C.runInContext = W, C.sample = rN, C.size = aN, C.snakeCase = zD, C.some = oN, C.sortedIndex = nj, C.sortedIndexBy = ij, C.sortedIndexOf = aj, C.sortedLastIndex = oj, C.sortedLastIndexBy = uj, C.sortedLastIndexOf = sj, C.startCase = HD, C.startsWith = GD, C.subtract = L3, C.sum = q3, C.sumBy = B3, C.template = KD, C.times = O3, C.toFinite = An, C.toInteger = Re, C.toLength = aw, C.toLower = VD, C.toNumber = Sr, C.toSafeInteger = VN, C.toString = He, C.toUpper = YD, C.trim = XD, C.trimEnd = ZD, C.trimStart = JD, C.truncate = QD, C.unescape = e3, C.uniqueId = A3, C.upperCase = t3, C.upperFirst = Cd, C.each = Hx, C.eachRight = Gx, C.first = Fx, Rd(C, function() {
          var u = {};
          return rn(C, function(c, p) {
            Xe.call(C.prototype, p) || (u[p] = c);
          }), u;
        }(), { chain: !1 }), C.VERSION = n, mr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
          C[u].placeholder = C;
        }), mr(["drop", "take"], function(u, c) {
          qe.prototype[u] = function(p) {
            p = p === r ? 1 : wt(Re(p), 0);
            var w = this.__filtered__ && !c ? new qe(this) : this.clone();
            return w.__filtered__ ? w.__takeCount__ = jt(p, w.__takeCount__) : w.__views__.push({
              size: jt(p, Z),
              type: u + (w.__dir__ < 0 ? "Right" : "")
            }), w;
          }, qe.prototype[u + "Right"] = function(p) {
            return this.reverse()[u](p).reverse();
          };
        }), mr(["filter", "map", "takeWhile"], function(u, c) {
          var p = c + 1, w = p == F || p == U;
          qe.prototype[u] = function(P) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: _e(P, 3),
              type: p
            }), M.__filtered__ = M.__filtered__ || w, M;
          };
        }), mr(["head", "last"], function(u, c) {
          var p = "take" + (c ? "Right" : "");
          qe.prototype[u] = function() {
            return this[p](1).value()[0];
          };
        }), mr(["initial", "tail"], function(u, c) {
          var p = "drop" + (c ? "" : "Right");
          qe.prototype[u] = function() {
            return this.__filtered__ ? new qe(this) : this[p](1);
          };
        }), qe.prototype.compact = function() {
          return this.filter(Zt);
        }, qe.prototype.find = function(u) {
          return this.filter(u).head();
        }, qe.prototype.findLast = function(u) {
          return this.reverse().find(u);
        }, qe.prototype.invokeMap = Ne(function(u, c) {
          return typeof u == "function" ? new qe(this) : this.map(function(p) {
            return Lo(p, u, c);
          });
        }), qe.prototype.reject = function(u) {
          return this.filter(tc(_e(u)));
        }, qe.prototype.slice = function(u, c) {
          u = Re(u);
          var p = this;
          return p.__filtered__ && (u > 0 || c < 0) ? new qe(p) : (u < 0 ? p = p.takeRight(-u) : u && (p = p.drop(u)), c !== r && (c = Re(c), p = c < 0 ? p.dropRight(-c) : p.take(c - u)), p);
        }, qe.prototype.takeRightWhile = function(u) {
          return this.reverse().takeWhile(u).reverse();
        }, qe.prototype.toArray = function() {
          return this.take(Z);
        }, rn(qe.prototype, function(u, c) {
          var p = /^(?:filter|find|map|reject)|While$/.test(c), w = /^(?:head|last)$/.test(c), P = C[w ? "take" + (c == "last" ? "Right" : "") : c], M = w || /^find/.test(c);
          P && (C.prototype[c] = function() {
            var R = this.__wrapped__, D = w ? [1] : arguments, z = R instanceof qe, ee = D[0], re = z || Me(R), ie = function(De) {
              var Be = P.apply(C, Zn([De], D));
              return w && fe ? Be[0] : Be;
            };
            re && p && typeof ee == "function" && ee.length != 1 && (z = re = !1);
            var fe = this.__chain__, me = !!this.__actions__.length, Oe = M && !fe, je = z && !me;
            if (!M && re) {
              R = je ? R : new qe(this);
              var Se = u.apply(R, D);
              return Se.__actions__.push({ func: Zs, args: [ie], thisArg: r }), new xr(Se, fe);
            }
            return Oe && je ? u.apply(this, D) : (Se = this.thru(ie), Oe ? w ? Se.value()[0] : Se.value() : Se);
          });
        }), mr(["pop", "push", "shift", "sort", "splice", "unshift"], function(u) {
          var c = Os[u], p = /^(?:push|sort|unshift)$/.test(u) ? "tap" : "thru", w = /^(?:pop|shift)$/.test(u);
          C.prototype[u] = function() {
            var P = arguments;
            if (w && !this.__chain__) {
              var M = this.value();
              return c.apply(Me(M) ? M : [], P);
            }
            return this[p](function(R) {
              return c.apply(Me(R) ? R : [], P);
            });
          };
        }), rn(qe.prototype, function(u, c) {
          var p = C[c];
          if (p) {
            var w = p.name + "";
            Xe.call(ya, w) || (ya[w] = []), ya[w].push({ name: c, func: p });
          }
        }), ya[Us(r, S).name] = [{
          name: "wrapper",
          func: r
        }], qe.prototype.clone = e$, qe.prototype.reverse = t$, qe.prototype.value = r$, C.prototype.at = Ij, C.prototype.chain = Rj, C.prototype.commit = $j, C.prototype.next = kj, C.prototype.plant = Nj, C.prototype.reverse = Dj, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = Lj, C.prototype.first = C.prototype.head, Io && (C.prototype[Io] = jj), C;
      }, pa = $R();
      Pi ? ((Pi.exports = pa)._ = pa, If._ = pa) : Rt._ = pa;
    }).call(jZ);
  }(uu, uu.exports)), uu.exports;
}
var DZ = NZ();
function LZ(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const qZ = (e) => {
  const t = DZ.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, o]) => {
        n < o && (n = o, r = a);
      }
    );
  }), r;
}, BZ = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, o) => {
  const s = Object.keys(e), l = LZ(t), f = Math.max(
    ...l.map((v) => of(`${v.x}`))
  ), d = {
    ...Mb(r),
    type: "number",
    dataKey: qZ(l)
  }, h = {
    ...Ib(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ X(_o, { config: e, ref: o, aspect: a, children: /* @__PURE__ */ Ze(
    _M,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ X(
          ps,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Oo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ X(
          ds,
          {
            ...uf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ X(Gn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ X(
          Kn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        s.map((v, g) => /* @__PURE__ */ X($a, { children: /* @__PURE__ */ X(
          Si,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || jn(g),
            radius: 4,
            maxBarSize: 24,
            children: i && /* @__PURE__ */ X(
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
}, wJ = So(BZ), _J = G3(
  {
    name: "Icon",
    type: "info"
  },
  rT
);
var Ug, FE;
function FZ() {
  if (FE) return Ug;
  FE = 1;
  var e = "Expected a function", t = NaN, r = "[object Symbol]", n = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, f = typeof self == "object" && self && self.Object === Object && self, d = l || f || Function("return this")(), h = Object.prototype, v = h.toString, g = Math.max, x = Math.min, y = function() {
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
    function Z(le) {
      var ge = le - q, te = le - F;
      return q === void 0 || ge >= E || ge < 0 || U && te >= L;
    }
    function ae() {
      var le = y();
      if (Z(le))
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
      var le = y(), ge = Z(le);
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
    return T || o.test(m) ? s(m.slice(2), T ? 2 : 8) : i.test(m) ? t : +m;
  }
  return Ug = b, Ug;
}
var WZ = FZ();
const WE = /* @__PURE__ */ Je(WZ);
var Wb = typeof window < "u" ? bm : kr;
function zZ(e, t, r, n) {
  const i = Zr(t);
  Wb(() => {
    i.current = t;
  }, [t]), kr(() => {
    const a = window;
    if (!(a && a.addEventListener))
      return;
    const o = (s) => {
      i.current(s);
    };
    return a.addEventListener(e, o, n), () => {
      a.removeEventListener(e, o, n);
    };
  }, [e, r, n]);
}
var UZ = typeof window > "u";
function HZ(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (s) => UZ ? t : window.matchMedia(s).matches, [i, a] = $r(() => r ? n(e) : t);
  function o() {
    a(n(e));
  }
  return Wb(() => {
    const s = window.matchMedia(e);
    return o(), s.addListener ? s.addListener(o) : s.addEventListener("change", o), () => {
      s.removeListener ? s.removeListener(o) : s.removeEventListener("change", o);
    };
  }, [e]), i;
}
function GZ(e) {
  const t = Zr(e);
  t.current = e, kr(
    () => () => {
      t.current();
    },
    []
  );
}
function KZ(e, t = 500, r) {
  const n = Zr();
  GZ(() => {
    n.current && n.current.cancel();
  });
  const i = lo(() => {
    const a = WE(e, t, r), o = (...s) => a(...s);
    return o.cancel = () => {
      a.cancel();
    }, o.isPending = () => !!n.current, o.flush = () => a.flush(), o;
  }, [e, t, r]);
  return kr(() => {
    n.current = WE(e, t, r);
  }, [e, t, r]), i;
}
function OJ({
  threshold: e = 0,
  root: t = null,
  rootMargin: r = "0%",
  freezeOnceVisible: n = !1,
  initialIsIntersecting: i = !1,
  onChange: a
} = {}) {
  var o;
  const [s, l] = $r(null), [f, d] = $r(() => ({
    isIntersecting: i,
    entry: void 0
  })), h = Zr();
  h.current = a;
  const v = ((o = f.entry) == null ? void 0 : o.isIntersecting) && n;
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
var VZ = typeof window > "u";
function SJ(e = {}) {
  let { initializeWithValue: t = !0 } = e;
  VZ && (t = !1);
  const [r, n] = $r(() => t ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {
    width: void 0,
    height: void 0
  }), i = KZ(
    n,
    e.debounceDelay
  );
  function a() {
    (e.debounceDelay ? i : n)({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  return zZ("resize", a), Wb(() => {
    a();
  }, []), r;
}
const AJ = () => HZ(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
);
var Li = {}, Sc = {}, zE;
function YZ() {
  return zE || (zE = 1, Object.defineProperty(Sc, "__esModule", {
    value: !0
  }), Sc.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g), Sc;
}
var UE;
function XZ() {
  if (UE) return Li;
  UE = 1, Object.defineProperty(Li, "__esModule", {
    value: !0
  }), Li.TypeName = void 0, Li.parse = i, Li.toCodePoints = l;
  var e = YZ(), t = r(e);
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
  var a = /\uFE0F/g, o = "‍", s = function(d) {
    return d.indexOf(o) < 0 ? d.replace(a, "") : d;
  };
  function l(f) {
    for (var d = [], h = 0, v = 0, g = 0; g < f.length; )
      h = f.charCodeAt(g++), v ? (d.push((65536 + (v - 55296 << 10) + (h - 56320)).toString(16)), v = 0) : h > 55296 && h <= 56319 ? v = h : d.push(h.toString(16));
    return d;
  }
  return Li;
}
var ZZ = XZ();
const JZ = bi("", {
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
function PJ({ emoji: e, size: t }) {
  const r = QZ(e);
  return r ? /* @__PURE__ */ X(
    "img",
    {
      src: r.url,
      alt: e,
      className: JZ({ size: t }),
      draggable: !1
    }
  ) : /* @__PURE__ */ X("span", { children: e });
}
const QZ = (e) => {
  const [t] = ZZ.parse(e, {
    buildUrl: (r) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${r}.svg`
  });
  return t || null;
};
function EJ(e) {
  return `${e} emoji`;
}
const HE = Nr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function eJ(e) {
  const t = Zr(null);
  return t.current === null && (t.current = e()), t.current;
}
const tJ = /* @__PURE__ */ new Set([
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
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tJ.has(e);
}
let aI = (e) => !Pl(e);
function oI(e) {
  e && (aI = (t) => t.startsWith("on") ? !Pl(t) : e(t));
}
try {
  oI(require("@emotion/is-prop-valid").default);
} catch {
}
function TJ(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (aI(i) || r === !0 && Pl(i) || !t && !Pl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function CJ({ children: e, isValidProp: t, ...r }) {
  t && oI(t), r = { ...er(HE), ...r }, r.isStatic = eJ(() => r.isStatic);
  const n = lo(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return X(HE.Provider, { value: n, children: e });
}
const uI = Nr(void 0), MJ = ({ children: e, ...t }) => /* @__PURE__ */ X(uI.Provider, { value: t, children: e }), rJ = () => ({
  ...er(uI)
}), IJ = Nn(
  function(t, r) {
    const { src: n } = rJ();
    if (!n) return /* @__PURE__ */ X("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ X("img", { ref: r, ...t, ...i });
  }
);
export {
  TJ as $,
  hJ as A,
  pJ as B,
  G3 as C,
  cs as D,
  PJ as E,
  sJ as F,
  Jr as G,
  St as H,
  rT as I,
  Qi as J,
  Rr as K,
  lJ as L,
  CJ as M,
  Xr as N,
  mt as O,
  sa as P,
  g5 as Q,
  Te as R,
  nf as S,
  Jl as T,
  Xl as U,
  wJ as V,
  U4 as W,
  oJ as X,
  uo as Y,
  HE as Z,
  eJ as _,
  bi as a,
  na as a0,
  VM as a1,
  Cn as a2,
  Ao as a3,
  _o as a4,
  ps as a5,
  Oo as a6,
  Cb as a7,
  af as a8,
  R8 as a9,
  A8 as aa,
  IJ as ab,
  Om as ac,
  qM as ad,
  tZ as ae,
  EM as af,
  rZ as ag,
  KY as ah,
  nZ as ai,
  YM as aj,
  uZ as ak,
  eZ as al,
  uT as am,
  HZ as an,
  aT as ao,
  NY as ap,
  CZ as aq,
  MZ as ar,
  IZ as as,
  iI as at,
  OJ as au,
  lZ as av,
  vJ as aw,
  SJ as ax,
  AM as b,
  zt as c,
  jn as d,
  mJ as e,
  So as f,
  bJ as g,
  xJ as h,
  cJ as i,
  dJ as j,
  MJ as k,
  Wb as l,
  fJ as m,
  _J as n,
  j8 as o,
  uJ as p,
  AJ as q,
  EJ as r,
  xe as s,
  it as t,
  E8 as u,
  Ie as v,
  Je as w,
  Pe as x,
  Le as y,
  j9 as z
};
