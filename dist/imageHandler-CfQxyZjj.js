import { jsxs as Fe, jsx as Y, Fragment as ja } from "react/jsx-runtime";
import * as J from "react";
import j, { createContext as ir, useRef as Yt, useImperativeHandle as iT, useEffect as Xt, useContext as Bt, useState as Zt, useCallback as hi, forwardRef as Zr, useMemo as go, isValidElement as Vr, Children as Ki, PureComponent as Nr, cloneElement as At, createElement as aT, Component as oT, useLayoutEffect as Tm } from "react";
import * as uT from "react-dom";
import { createPortal as m8 } from "react-dom";
function sT(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = sT(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = sT(e)) && (n && (n += " "), n += t);
  return n;
}
const Tw = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, b8 = (e) => {
  const t = function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return Me(a);
  };
  return {
    compose: function() {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (s) => {
        const l = Object.fromEntries(Object.entries(s || {}).filter((f) => {
          let [d] = f;
          return ![
            "class",
            "className"
          ].includes(d);
        }));
        return t(a.map((f) => f(l)), s == null ? void 0 : s.class, s == null ? void 0 : s.className);
      };
    },
    cva: (i) => (a) => {
      var o;
      if ((i == null ? void 0 : i.variants) == null) return t(i == null ? void 0 : i.base, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
      const { variants: s, defaultVariants: l } = i, f = Object.keys(s).map((v) => {
        const y = a == null ? void 0 : a[v], b = l == null ? void 0 : l[v], m = Tw(y) || Tw(b);
        return s[v][m];
      }), d = {
        ...l,
        // remove `undefined` props
        ...a && Object.entries(a).reduce((v, y) => {
          let [b, m] = y;
          return typeof m > "u" ? v : {
            ...v,
            [b]: m
          };
        }, {})
      }, h = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((v, y) => {
        let { class: b, className: m, ...g } = y;
        return Object.entries(g).every((_) => {
          let [O, A] = _;
          const P = d[O];
          return Array.isArray(A) ? A.includes(P) : P === A;
        }) ? [
          ...v,
          b,
          m
        ] : v;
      }, []);
      return t(i == null ? void 0 : i.base, f, h, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
    },
    cx: t
  };
}, { cva: Wn } = b8(), Cm = ir({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), KQ = ({
  children: e
}) => {
  const [t, r] = Zt(!1), [n, i] = Zt([]), a = hi(
    (s) => {
      i(
        s || [...Cw].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), o = hi(() => r(!1), [r]);
  return Xt(() => {
    window.XRay = {
      enable: a,
      disable: o
    };
  }, [a, o]), /* @__PURE__ */ Fe(Cm.Provider, { value: { enabled: t, enable: a, disable: o, filter: n }, children: [
    e,
    t && typeof document < "u" && m8(
      /* @__PURE__ */ Fe("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ Y("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ Y("div", { className: "flex flex-col space-y-2", children: Cw.map((s) => /* @__PURE__ */ Fe("label", { className: "block", children: [
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
}, x8 = Wn({
  base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  variants: {
    type: {
      layout: "outline-red-500",
      info: "outline-blue-500",
      action: "outline-green-600",
      form: "outline-purple-600"
    }
  }
}), w8 = Wn({
  base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
  variants: {
    type: {
      layout: "bg-red-500 text-white",
      info: "bg-blue-500 text-white",
      action: "bg-green-600 text-white",
      form: "bg-purple-600 text-white"
    }
  }
}), _8 = (e, t) => {
  const { enabled: r, filter: n } = J.useContext(Cm), i = Yt(null);
  iT(t, () => i.current);
  const a = r && !e.internal, o = typeof document < "u" ? document.body : null;
  return Xt(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const s = i.current;
    s.dataset.componentName = e.name;
    let l = null, f = null;
    if (o) {
      const d = s.getBoundingClientRect(), { top: h, left: v, width: y, height: b } = d;
      l = document.createElement("div"), l.className = x8({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${y}px`, l.style.height = `${b}px`, f = document.createElement("div"), f.className = w8({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, o.appendChild(f), o.appendChild(l);
    }
    return () => {
      l && (o == null || o.removeChild(l)), f && (o == null || o.removeChild(f));
    };
  }, [a, e.name, e.type, n, o]), {
    ref: i,
    enabled: r
  };
}, VQ = () => Bt(Cm), Cw = ["layout", "info", "action", "form"], O8 = (e, t) => {
  const r = Zr((n, i) => {
    const { ref: a } = _8(e, i);
    return /* @__PURE__ */ Y(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
}, Mm = "-", A8 = (e) => {
  const t = P8(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (o) => {
      const s = o.split(Mm);
      return s[0] === "" && s.length !== 1 && s.shift(), cT(s, t) || S8(o);
    },
    getConflictingClassGroupIds: (o, s) => {
      const l = r[o] || [];
      return s && n[o] ? [...l, ...n[o]] : l;
    }
  };
}, cT = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? cT(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(Mm);
  return (o = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : o.classGroupId;
}, Mw = /^\[(.+)\]$/, S8 = (e) => {
  if (Mw.test(e)) {
    const t = Mw.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, P8 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return T8(Object.entries(e.classGroups), r).forEach(([a, o]) => {
    Zy(o, n, a, t);
  }), n;
}, Zy = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : Rw(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (E8(i)) {
        Zy(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, o]) => {
      Zy(o, Rw(t, a), r, n);
    });
  });
}, Rw = (e, t) => {
  let r = e;
  return t.split(Mm).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, E8 = (e) => e.isThemeGetter, T8 = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([o, s]) => [t + o, s])) : a);
  return [r, i];
}) : e, C8 = (e) => {
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
}, lT = "!", M8 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, o = (s) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let g = 0; g < s.length; g++) {
      let _ = s[g];
      if (f === 0) {
        if (_ === i && (n || s.slice(g, g + a) === t)) {
          l.push(s.slice(d, g)), d = g + a;
          continue;
        }
        if (_ === "/") {
          h = g;
          continue;
        }
      }
      _ === "[" ? f++ : _ === "]" && f--;
    }
    const v = l.length === 0 ? s : s.substring(d), y = v.startsWith(lT), b = y ? v.substring(1) : v, m = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: y,
      baseClassName: b,
      maybePostfixModifierPosition: m
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: o
  }) : o;
}, R8 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, I8 = (e) => ({
  cache: C8(e.cacheSize),
  parseClassName: M8(e),
  ...A8(e)
}), $8 = /\s+/, j8 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], o = e.trim().split($8);
  let s = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const f = o[l], {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: y
    } = r(f);
    let b = !!y, m = n(b ? v.substring(0, y) : v);
    if (!m) {
      if (!b) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (m = n(v), !m) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      b = !1;
    }
    const g = R8(d).join(":"), _ = h ? g + lT : g, O = _ + m;
    if (a.includes(O))
      continue;
    a.push(O);
    const A = i(m, b);
    for (let P = 0; P < A.length; ++P) {
      const x = A[P];
      a.push(_ + x);
    }
    s = f + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function k8() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = fT(t)) && (n && (n += " "), n += r);
  return n;
}
const fT = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = fT(e[n])) && (r && (r += " "), r += t);
  return r;
};
function D8(e, ...t) {
  let r, n, i, a = o;
  function o(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = I8(f), n = r.cache.get, i = r.cache.set, a = s, s(l);
  }
  function s(l) {
    const f = n(l);
    if (f)
      return f;
    const d = j8(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(k8.apply(null, arguments));
  };
}
const st = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, dT = /^\[(?:([a-z-]+):)?(.+)\]$/i, N8 = /^\d+\/\d+$/, L8 = /* @__PURE__ */ new Set(["px", "full", "screen"]), q8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, B8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, F8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, W8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, z8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tn = (e) => ka(e) || L8.has(e) || N8.test(e), oi = (e) => mo(e, "length", Z8), ka = (e) => !!e && !Number.isNaN(Number(e)), zd = (e) => mo(e, "number", ka), Yo = (e) => !!e && Number.isInteger(Number(e)), U8 = (e) => e.endsWith("%") && ka(e.slice(0, -1)), $e = (e) => dT.test(e), ui = (e) => q8.test(e), H8 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), G8 = (e) => mo(e, H8, hT), K8 = (e) => mo(e, "position", hT), V8 = /* @__PURE__ */ new Set(["image", "url"]), Y8 = (e) => mo(e, V8, Q8), X8 = (e) => mo(e, "", J8), Xo = () => !0, mo = (e, t, r) => {
  const n = dT.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Z8 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  B8.test(e) && !F8.test(e)
), hT = () => !1, J8 = (e) => W8.test(e), Q8 = (e) => z8.test(e), eL = () => {
  const e = st("colors"), t = st("spacing"), r = st("blur"), n = st("brightness"), i = st("borderColor"), a = st("borderRadius"), o = st("borderSpacing"), s = st("borderWidth"), l = st("contrast"), f = st("grayscale"), d = st("hueRotate"), h = st("invert"), v = st("gap"), y = st("gradientColorStops"), b = st("gradientColorStopPositions"), m = st("inset"), g = st("margin"), _ = st("opacity"), O = st("padding"), A = st("saturate"), P = st("scale"), x = st("sepia"), S = st("skew"), T = st("space"), R = st("translate"), I = () => ["auto", "contain", "none"], q = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", $e, t], D = () => [$e, t], L = () => ["", Tn, oi], F = () => ["auto", ka, $e], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ie = () => ["", "0", $e], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [ka, $e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xo],
      spacing: [Tn, oi],
      blur: ["none", "", ui, $e],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ui, $e],
      borderSpacing: D(),
      borderWidth: L(),
      contrast: K(),
      grayscale: ie(),
      hueRotate: K(),
      invert: ie(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [U8, oi],
      inset: $(),
      margin: $(),
      opacity: K(),
      padding: D(),
      saturate: K(),
      scale: K(),
      sepia: ie(),
      skew: K(),
      space: D(),
      translate: D()
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
        object: [...G(), $e]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", Yo, $e]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
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
        grow: ie()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ie()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Yo, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Yo, $e]
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
        "grid-rows": [Xo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Yo, $e]
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
        justify: ["normal", ...Z()]
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
        content: ["normal", ...Z(), "baseline"]
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
        "place-content": [...Z(), "baseline"]
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
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zd]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xo]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
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
        "line-clamp": ["none", ka, zd]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        indent: D()
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
        "bg-opacity": [_]
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
        bg: [...G(), K8]
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
        bg: ["auto", "cover", "contain", G8]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Y8]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
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
        "border-opacity": [_]
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
        "divide-opacity": [_]
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
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
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
        ring: L()
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
        "ring-opacity": [_]
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
        shadow: ["", "inner", "none", ui, X8]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
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
        sepia: [x]
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
        "backdrop-opacity": [_]
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
        "backdrop-sepia": [x]
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
        duration: K()
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
        delay: K()
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
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Yo, $e]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        stroke: [Tn, oi, zd]
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
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, tL = /* @__PURE__ */ D8(eL);
function Lt(...e) {
  return tL(Me(e));
}
function rL(e) {
  return Lt(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const Iw = Wn({
  base: "inline-block shrink-0",
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
}), Rm = Zr(function({ size: t, icon: r, state: n = "normal", className: i, ...a }, o) {
  var f;
  if (!r) return null;
  const s = r;
  return ((f = r.displayName) == null ? void 0 : f.includes("Animated")) ? /* @__PURE__ */ Y(
    s,
    {
      ref: o,
      ...a,
      animate: n,
      className: Lt(Iw({ size: t }), "select-none", i)
    }
  ) : /* @__PURE__ */ Y(
    s,
    {
      ref: o,
      ...a,
      className: Lt("aspect-square", Iw({ size: t }), i)
    }
  );
}), nL = (e, t) => /* @__PURE__ */ Fe("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), iL = Zr(nL), pT = ir(void 0), YQ = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ Y(pT.Provider, { value: { component: t, currentPath: r }, children: e }), vT = () => {
  const e = Bt(pT);
  return {
    controller: () => ({}),
    ...e
  };
};
function tc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const yT = () => {
  const { currentPath: e } = vT(), t = hi(
    (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? tc(e) === tc(r) : `${tc(e)}/`.startsWith(
      `${tc(r)}/`
    ),
    [e]
  );
  return {
    currentPath: e,
    isActive: t
  };
}, aL = Zr(
  function(t, r) {
    const { component: n } = vT(), { isActive: i } = yT(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, o = go(
      () => Zr(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ Y("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ Y(o, { ref: r, ...a });
  }
), oL = Wn({
  base: "inline-flex flex-row items-center gap-1 text-base",
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
}), XQ = Zr(function({ className: t, children: r, variant: n, stopPropagation: i = !1, ...a }, o) {
  const { target: s } = a, l = s === "_blank", { isActive: f } = yT();
  return /* @__PURE__ */ Fe(
    aL,
    {
      ref: o,
      ...a,
      onClick: (h) => {
        var v;
        i && h.stopPropagation(), (v = a.onClick) == null || v.call(a, h);
      },
      className: Lt(
        oL({ variant: n, active: f(a.href) }),
        t
      ),
      children: [
        /* @__PURE__ */ Y("span", { children: r }),
        l && /* @__PURE__ */ Y(Rm, { icon: iL, size: "sm" })
      ]
    }
  );
});
function $w(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function gT(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const a = $w(i, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const a = n[i];
          typeof a == "function" ? a() : $w(e[i], null);
        }
      };
  };
}
function na(...e) {
  return J.useCallback(gT(...e), e);
}
var Im = J.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = J.Children.toArray(r), a = i.find(uL);
  if (a) {
    const o = a.props.children, s = i.map((l) => l === a ? J.Children.count(o) > 1 ? J.Children.only(null) : J.isValidElement(o) ? o.props.children : null : l);
    return /* @__PURE__ */ Y(Jy, { ...n, ref: t, children: J.isValidElement(o) ? J.cloneElement(o, void 0, s) : null });
  }
  return /* @__PURE__ */ Y(Jy, { ...n, ref: t, children: r });
});
Im.displayName = "Slot";
var Jy = J.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (J.isValidElement(r)) {
    const i = cL(r);
    return J.cloneElement(r, {
      ...sL(n, r.props),
      // @ts-ignore
      ref: t ? gT(t, i) : i
    });
  }
  return J.Children.count(r) > 1 ? J.Children.only(null) : null;
});
Jy.displayName = "SlotClone";
var mT = ({ children: e }) => /* @__PURE__ */ Y(ja, { children: e });
function uL(e) {
  return J.isValidElement(e) && e.type === mT;
}
function sL(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...s) => {
      a(...s), i(...s);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function cL(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const lL = Wn({
  base: Lt(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    rL()
  ),
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
}), bT = J.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, o) => /* @__PURE__ */ Y(
    i ? Im : "button",
    {
      className: Lt(lL({ variant: r, size: n, round: t }), e),
      ref: o,
      ...a
    }
  )
);
bT.displayName = "Button";
const fL = Wn({
  base: "-ml-0.5 transition-colors",
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
}), dL = Wn({
  base: "transition-colors",
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
}), ZQ = Zr(function({
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
  const [h, v] = Zt(!1);
  return /* @__PURE__ */ Fe(
    bT,
    {
      title: r ? t : void 0,
      onClick: async (b) => {
        const m = n == null ? void 0 : n(b);
        if (m instanceof Promise) {
          v(!0);
          try {
            await m;
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
        o && /* @__PURE__ */ Y(
          Rm,
          {
            size: l === "sm" ? "sm" : "md",
            icon: o,
            className: r ? dL({ variant: s }) : fL({ variant: s })
          }
        ),
        !r && t
      ]
    }
  );
}), xT = ir({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), JQ = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = Zt(e), i = hi(() => {
    n(!0);
  }, []), a = hi(() => n(!1), []), o = hi(() => n((s) => !s), []);
  return /* @__PURE__ */ Y(xT.Provider, { value: { enable: i, disable: a, toggle: o, enabled: r }, children: t });
}, hL = () => {
  const e = Bt(xT);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ud, jw;
function ar() {
  if (jw) return Ud;
  jw = 1;
  var e = Array.isArray;
  return Ud = e, Ud;
}
var Hd, kw;
function wT() {
  if (kw) return Hd;
  kw = 1;
  var e = typeof $r == "object" && $r && $r.Object === Object && $r;
  return Hd = e, Hd;
}
var Gd, Dw;
function vn() {
  if (Dw) return Gd;
  Dw = 1;
  var e = wT(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Gd = r, Gd;
}
var Kd, Nw;
function Qu() {
  if (Nw) return Kd;
  Nw = 1;
  var e = vn(), t = e.Symbol;
  return Kd = t, Kd;
}
var Vd, Lw;
function pL() {
  if (Lw) return Vd;
  Lw = 1;
  var e = Qu(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
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
  return Vd = a, Vd;
}
var Yd, qw;
function vL() {
  if (qw) return Yd;
  qw = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Yd = r, Yd;
}
var Xd, Bw;
function zn() {
  if (Bw) return Xd;
  Bw = 1;
  var e = Qu(), t = pL(), r = vL(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return Xd = o, Xd;
}
var Zd, Fw;
function Un() {
  if (Fw) return Zd;
  Fw = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Zd = e, Zd;
}
var Jd, Ww;
function bo() {
  if (Ww) return Jd;
  Ww = 1;
  var e = zn(), t = Un(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return Jd = n, Jd;
}
var Qd, zw;
function $m() {
  if (zw) return Qd;
  zw = 1;
  var e = ar(), t = bo(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return Qd = i, Qd;
}
var eh, Uw;
function bi() {
  if (Uw) return eh;
  Uw = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return eh = e, eh;
}
var th, Hw;
function jm() {
  if (Hw) return th;
  Hw = 1;
  var e = zn(), t = bi(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == n || l == i || l == r || l == a;
  }
  return th = o, th;
}
var rh, Gw;
function yL() {
  if (Gw) return rh;
  Gw = 1;
  var e = vn(), t = e["__core-js_shared__"];
  return rh = t, rh;
}
var nh, Kw;
function gL() {
  if (Kw) return nh;
  Kw = 1;
  var e = yL(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return nh = r, nh;
}
var ih, Vw;
function _T() {
  if (Vw) return ih;
  Vw = 1;
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
  return ih = r, ih;
}
var ah, Yw;
function mL() {
  if (Yw) return ah;
  Yw = 1;
  var e = jm(), t = gL(), r = bi(), n = _T(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, f = s.hasOwnProperty, d = RegExp(
    "^" + l.call(f).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(v) {
    if (!r(v) || t(v))
      return !1;
    var y = e(v) ? d : a;
    return y.test(n(v));
  }
  return ah = h, ah;
}
var oh, Xw;
function bL() {
  if (Xw) return oh;
  Xw = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return oh = e, oh;
}
var uh, Zw;
function ia() {
  if (Zw) return uh;
  Zw = 1;
  var e = mL(), t = bL();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return uh = r, uh;
}
var sh, Jw;
function Cl() {
  if (Jw) return sh;
  Jw = 1;
  var e = ia(), t = e(Object, "create");
  return sh = t, sh;
}
var ch, Qw;
function xL() {
  if (Qw) return ch;
  Qw = 1;
  var e = Cl();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return ch = t, ch;
}
var lh, e1;
function wL() {
  if (e1) return lh;
  e1 = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return lh = e, lh;
}
var fh, t1;
function _L() {
  if (t1) return fh;
  t1 = 1;
  var e = Cl(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var s = o[a];
      return s === t ? void 0 : s;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return fh = i, fh;
}
var dh, r1;
function OL() {
  if (r1) return dh;
  r1 = 1;
  var e = Cl(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return dh = n, dh;
}
var hh, n1;
function AL() {
  if (n1) return hh;
  n1 = 1;
  var e = Cl(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return hh = r, hh;
}
var ph, i1;
function SL() {
  if (i1) return ph;
  i1 = 1;
  var e = xL(), t = wL(), r = _L(), n = OL(), i = AL();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, ph = a, ph;
}
var vh, a1;
function PL() {
  if (a1) return vh;
  a1 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return vh = e, vh;
}
var yh, o1;
function km() {
  if (o1) return yh;
  o1 = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return yh = e, yh;
}
var gh, u1;
function Ml() {
  if (u1) return gh;
  u1 = 1;
  var e = km();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return gh = t, gh;
}
var mh, s1;
function EL() {
  if (s1) return mh;
  s1 = 1;
  var e = Ml(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var s = a.length - 1;
    return o == s ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return mh = n, mh;
}
var bh, c1;
function TL() {
  if (c1) return bh;
  c1 = 1;
  var e = Ml();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return bh = t, bh;
}
var xh, l1;
function CL() {
  if (l1) return xh;
  l1 = 1;
  var e = Ml();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return xh = t, xh;
}
var wh, f1;
function ML() {
  if (f1) return wh;
  f1 = 1;
  var e = Ml();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return wh = t, wh;
}
var _h, d1;
function Rl() {
  if (d1) return _h;
  d1 = 1;
  var e = PL(), t = EL(), r = TL(), n = CL(), i = ML();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, _h = a, _h;
}
var Oh, h1;
function Dm() {
  if (h1) return Oh;
  h1 = 1;
  var e = ia(), t = vn(), r = e(t, "Map");
  return Oh = r, Oh;
}
var Ah, p1;
function RL() {
  if (p1) return Ah;
  p1 = 1;
  var e = SL(), t = Rl(), r = Dm();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ah = n, Ah;
}
var Sh, v1;
function IL() {
  if (v1) return Sh;
  v1 = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Sh = e, Sh;
}
var Ph, y1;
function Il() {
  if (y1) return Ph;
  y1 = 1;
  var e = IL();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return Ph = t, Ph;
}
var Eh, g1;
function $L() {
  if (g1) return Eh;
  g1 = 1;
  var e = Il();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Eh = t, Eh;
}
var Th, m1;
function jL() {
  if (m1) return Th;
  m1 = 1;
  var e = Il();
  function t(r) {
    return e(this, r).get(r);
  }
  return Th = t, Th;
}
var Ch, b1;
function kL() {
  if (b1) return Ch;
  b1 = 1;
  var e = Il();
  function t(r) {
    return e(this, r).has(r);
  }
  return Ch = t, Ch;
}
var Mh, x1;
function DL() {
  if (x1) return Mh;
  x1 = 1;
  var e = Il();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Mh = t, Mh;
}
var Rh, w1;
function Nm() {
  if (w1) return Rh;
  w1 = 1;
  var e = RL(), t = $L(), r = jL(), n = kL(), i = DL();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Rh = a, Rh;
}
var Ih, _1;
function OT() {
  if (_1) return Ih;
  _1 = 1;
  var e = Nm(), t = "Expected a function";
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
  return r.Cache = e, Ih = r, Ih;
}
var $h, O1;
function NL() {
  if (O1) return $h;
  O1 = 1;
  var e = OT(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return $h = r, $h;
}
var jh, A1;
function LL() {
  if (A1) return jh;
  A1 = 1;
  var e = NL(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, s, l, f) {
      a.push(l ? f.replace(r, "$1") : s || o);
    }), a;
  });
  return jh = n, jh;
}
var kh, S1;
function Lm() {
  if (S1) return kh;
  S1 = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return kh = e, kh;
}
var Dh, P1;
function qL() {
  if (P1) return Dh;
  P1 = 1;
  var e = Qu(), t = Lm(), r = ar(), n = bo(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, o) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return Dh = o, Dh;
}
var Nh, E1;
function AT() {
  if (E1) return Nh;
  E1 = 1;
  var e = qL();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Nh = t, Nh;
}
var Lh, T1;
function ST() {
  if (T1) return Lh;
  T1 = 1;
  var e = ar(), t = $m(), r = LL(), n = AT();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return Lh = i, Lh;
}
var qh, C1;
function $l() {
  if (C1) return qh;
  C1 = 1;
  var e = bo();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return qh = t, qh;
}
var Bh, M1;
function qm() {
  if (M1) return Bh;
  M1 = 1;
  var e = ST(), t = $l();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return Bh = r, Bh;
}
var Fh, R1;
function PT() {
  if (R1) return Fh;
  R1 = 1;
  var e = qm();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return Fh = t, Fh;
}
var BL = PT();
const br = /* @__PURE__ */ Je(BL);
var Wh, I1;
function FL() {
  if (I1) return Wh;
  I1 = 1;
  function e(t) {
    return t == null;
  }
  return Wh = e, Wh;
}
var WL = FL();
const Ee = /* @__PURE__ */ Je(WL);
var zh, $1;
function zL() {
  if ($1) return zh;
  $1 = 1;
  var e = zn(), t = ar(), r = Un(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return zh = i, zh;
}
var UL = zL();
const es = /* @__PURE__ */ Je(UL);
var HL = jm();
const Pe = /* @__PURE__ */ Je(HL);
var GL = bi();
const xo = /* @__PURE__ */ Je(GL);
var rc = { exports: {} }, He = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function KL() {
  if (j1) return He;
  j1 = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case e:
          switch (g = g.type, g) {
            case r:
            case i:
            case n:
            case f:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case o:
                case l:
                case v:
                case h:
                case a:
                  return g;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return He.ContextConsumer = o, He.ContextProvider = a, He.Element = e, He.ForwardRef = l, He.Fragment = r, He.Lazy = v, He.Memo = h, He.Portal = t, He.Profiler = i, He.StrictMode = n, He.Suspense = f, He.SuspenseList = d, He.isAsyncMode = function() {
    return !1;
  }, He.isConcurrentMode = function() {
    return !1;
  }, He.isContextConsumer = function(g) {
    return m(g) === o;
  }, He.isContextProvider = function(g) {
    return m(g) === a;
  }, He.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, He.isForwardRef = function(g) {
    return m(g) === l;
  }, He.isFragment = function(g) {
    return m(g) === r;
  }, He.isLazy = function(g) {
    return m(g) === v;
  }, He.isMemo = function(g) {
    return m(g) === h;
  }, He.isPortal = function(g) {
    return m(g) === t;
  }, He.isProfiler = function(g) {
    return m(g) === i;
  }, He.isStrictMode = function(g) {
    return m(g) === n;
  }, He.isSuspense = function(g) {
    return m(g) === f;
  }, He.isSuspenseList = function(g) {
    return m(g) === d;
  }, He.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === i || g === n || g === f || g === d || g === y || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === h || g.$$typeof === a || g.$$typeof === o || g.$$typeof === l || g.$$typeof === b || g.getModuleId !== void 0);
  }, He.typeOf = m, He;
}
var Ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k1;
function VL() {
  return k1 || (k1 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, m = !1, g = !1, _ = !1, O = !1, A;
    A = Symbol.for("react.module.reference");
    function P(oe) {
      return !!(typeof oe == "string" || typeof oe == "function" || oe === r || oe === i || O || oe === n || oe === f || oe === d || _ || oe === y || b || m || g || typeof oe == "object" && oe !== null && (oe.$$typeof === v || oe.$$typeof === h || oe.$$typeof === a || oe.$$typeof === o || oe.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      oe.$$typeof === A || oe.getModuleId !== void 0));
    }
    function x(oe) {
      if (typeof oe == "object" && oe !== null) {
        var Be = oe.$$typeof;
        switch (Be) {
          case e:
            var Qe = oe.type;
            switch (Qe) {
              case r:
              case i:
              case n:
              case f:
              case d:
                return Qe;
              default:
                var Xe = Qe && Qe.$$typeof;
                switch (Xe) {
                  case s:
                  case o:
                  case l:
                  case v:
                  case h:
                  case a:
                    return Xe;
                  default:
                    return Be;
                }
            }
          case t:
            return Be;
        }
      }
    }
    var S = o, T = a, R = e, I = l, q = r, $ = v, D = h, L = t, F = i, G = n, U = f, X = d, Z = !1, ie = !1;
    function H(oe) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(oe) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(oe) {
      return x(oe) === o;
    }
    function se(oe) {
      return x(oe) === a;
    }
    function de(oe) {
      return typeof oe == "object" && oe !== null && oe.$$typeof === e;
    }
    function ye(oe) {
      return x(oe) === l;
    }
    function me(oe) {
      return x(oe) === r;
    }
    function he(oe) {
      return x(oe) === v;
    }
    function pe(oe) {
      return x(oe) === h;
    }
    function te(oe) {
      return x(oe) === t;
    }
    function le(oe) {
      return x(oe) === i;
    }
    function be(oe) {
      return x(oe) === n;
    }
    function z(oe) {
      return x(oe) === f;
    }
    function Te(oe) {
      return x(oe) === d;
    }
    Ge.ContextConsumer = S, Ge.ContextProvider = T, Ge.Element = R, Ge.ForwardRef = I, Ge.Fragment = q, Ge.Lazy = $, Ge.Memo = D, Ge.Portal = L, Ge.Profiler = F, Ge.StrictMode = G, Ge.Suspense = U, Ge.SuspenseList = X, Ge.isAsyncMode = H, Ge.isConcurrentMode = K, Ge.isContextConsumer = re, Ge.isContextProvider = se, Ge.isElement = de, Ge.isForwardRef = ye, Ge.isFragment = me, Ge.isLazy = he, Ge.isMemo = pe, Ge.isPortal = te, Ge.isProfiler = le, Ge.isStrictMode = be, Ge.isSuspense = z, Ge.isSuspenseList = Te, Ge.isValidElementType = P, Ge.typeOf = x;
  }()), Ge;
}
var D1;
function YL() {
  return D1 || (D1 = 1, process.env.NODE_ENV === "production" ? rc.exports = KL() : rc.exports = VL()), rc.exports;
}
var XL = YL(), Uh, N1;
function ET() {
  if (N1) return Uh;
  N1 = 1;
  var e = zn(), t = Un(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return Uh = n, Uh;
}
var Hh, L1;
function ZL() {
  if (L1) return Hh;
  L1 = 1;
  var e = ET();
  function t(r) {
    return e(r) && r != +r;
  }
  return Hh = t, Hh;
}
var JL = ZL();
const wo = /* @__PURE__ */ Je(JL);
var QL = ET();
const eq = /* @__PURE__ */ Je(QL);
var Gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Wi = function(t) {
  return es(t) && t.indexOf("%") === t.length - 1;
}, ce = function(t) {
  return eq(t) && !wo(t);
}, Et = function(t) {
  return ce(t) || es(t);
}, tq = 0, aa = function(t) {
  var r = ++tq;
  return "".concat(t || "").concat(r);
}, Kt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ce(t) && !es(t))
    return n;
  var a;
  if (Wi(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return wo(a) && (a = n), i && a > r && (a = r), a;
}, li = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, rq = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, St = function(t, r) {
  return ce(t) && ce(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Oc(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : br(n, t)) === r;
  });
}
function Da(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Qy(e) {
  "@babel/helpers - typeof";
  return Qy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qy(e);
}
var nq = ["viewBox", "children"], iq = [
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
], q1 = ["points", "pathLength"], Gh = {
  svg: nq,
  polygon: q1,
  polyline: q1
}, Bm = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ac = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Vr(t) && (n = t.props), !xo(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Bm.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, aq = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Ji = function(t, r, n) {
  if (!xo(t) || Qy(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Bm.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = aq(o, r, n));
  }), i;
}, oq = ["children"], uq = ["children"];
function B1(e, t) {
  if (e == null) return {};
  var r = sq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function eg(e) {
  "@babel/helpers - typeof";
  return eg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eg(e);
}
var F1 = {
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
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, kn = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, W1 = null, Kh = null, Fm = function e(t) {
  if (t === W1 && Array.isArray(Kh))
    return Kh;
  var r = [];
  return Ki.forEach(t, function(n) {
    Ee(n) || (XL.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Kh = r, W1 = t, r;
};
function xr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return kn(i);
  }) : n = [kn(t)], Fm(e).forEach(function(i) {
    var a = br(i, "type.displayName") || br(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function yr(e, t) {
  var r = xr(e, t);
  return r && r[0];
}
var z1 = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!ce(n) || n <= 0 || !ce(i) || i <= 0);
}, cq = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], lq = function(t) {
  return t && t.type && es(t.type) && cq.indexOf(t.type) >= 0;
}, TT = function(t) {
  return t && eg(t) === "object" && "clipDot" in t;
}, fq = function(t, r, n, i) {
  var a, o = (a = Gh == null ? void 0 : Gh[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && o.includes(r) || iq.includes(r)) || n && Bm.includes(r);
}, we = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Vr(t) && (i = t.props), !xo(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    fq((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, tg = function e(t, r) {
  if (t === r)
    return !0;
  var n = Ki.count(t);
  if (n !== Ki.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return U1(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!U1(a, o))
      return !1;
  }
  return !0;
}, U1 = function(t, r) {
  if (Ee(t) && Ee(r))
    return !0;
  if (!Ee(t) && !Ee(r)) {
    var n = t.props || {}, i = n.children, a = B1(n, oq), o = r.props || {}, s = o.children, l = B1(o, uq);
    return i && s ? Da(a, l) && tg(i, s) : !i && !s ? Da(a, l) : !1;
  }
  return !1;
}, H1 = function(t, r) {
  var n = [], i = {};
  return Fm(t).forEach(function(a, o) {
    if (lq(a))
      n.push(a);
    else if (a) {
      var s = kn(a.type), l = r[s] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[s])) {
        var h = f(a, s, o);
        n.push(h), i[s] = !0;
      }
    }
  }), n;
}, dq = function(t) {
  var r = t && t.type;
  return r && F1[r] ? F1[r] : null;
}, hq = function(t, r) {
  return Fm(r).indexOf(t);
}, pq = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function rg() {
  return rg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rg.apply(this, arguments);
}
function vq(e, t) {
  if (e == null) return {};
  var r = yq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ng(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, l = e.desc, f = vq(e, pq), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Me("recharts-surface", a);
  return /* @__PURE__ */ j.createElement("svg", rg({}, we(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ j.createElement("title", null, s), /* @__PURE__ */ j.createElement("desc", null, l), t);
}
var gq = ["children", "className"];
function ig() {
  return ig = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ig.apply(this, arguments);
}
function mq(e, t) {
  if (e == null) return {};
  var r = bq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ne = /* @__PURE__ */ j.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = mq(e, gq), a = Me("recharts-layer", n);
  return /* @__PURE__ */ j.createElement("g", ig({
    className: a
  }, we(i, !0), {
    ref: t
  }), r);
}), xq = process.env.NODE_ENV !== "production", Yr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (xq && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, Vh, G1;
function wq() {
  if (G1) return Vh;
  G1 = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return Vh = e, Vh;
}
var Yh, K1;
function _q() {
  if (K1) return Yh;
  K1 = 1;
  var e = wq();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return Yh = t, Yh;
}
var Xh, V1;
function CT() {
  if (V1) return Xh;
  V1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + i + a + "]");
  function l(f) {
    return s.test(f);
  }
  return Xh = l, Xh;
}
var Zh, Y1;
function Oq() {
  if (Y1) return Zh;
  Y1 = 1;
  function e(t) {
    return t.split("");
  }
  return Zh = e, Zh;
}
var Jh, X1;
function Aq() {
  if (X1) return Jh;
  X1 = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + i + "]", l = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + s + "|" + l + ")", d = "[^" + e + "]", h = "(?:\\ud83c[\\udde6-\\uddff]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", y = "\\u200d", b = f + "?", m = "[" + a + "]?", g = "(?:" + y + "(?:" + [d, h, v].join("|") + ")" + m + b + ")*", _ = m + b + g, O = "(?:" + [d + s + "?", s, h, v, o].join("|") + ")", A = RegExp(l + "(?=" + l + ")|" + O + _, "g");
  function P(x) {
    return x.match(A) || [];
  }
  return Jh = P, Jh;
}
var Qh, Z1;
function Sq() {
  if (Z1) return Qh;
  Z1 = 1;
  var e = Oq(), t = CT(), r = Aq();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return Qh = n, Qh;
}
var ep, J1;
function Pq() {
  if (J1) return ep;
  J1 = 1;
  var e = _q(), t = CT(), r = Sq(), n = AT();
  function i(a) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, l = s ? s[0] : o.charAt(0), f = s ? e(s, 1).join("") : o.slice(1);
      return l[a]() + f;
    };
  }
  return ep = i, ep;
}
var tp, Q1;
function Eq() {
  if (Q1) return tp;
  Q1 = 1;
  var e = Pq(), t = e("toUpperCase");
  return tp = t, tp;
}
var Tq = Eq();
const jl = /* @__PURE__ */ Je(Tq);
function at(e) {
  return function() {
    return e;
  };
}
const MT = Math.cos, Sc = Math.sin, tn = Math.sqrt, Pc = Math.PI, kl = 2 * Pc, ag = Math.PI, og = 2 * ag, qi = 1e-6, Cq = og - qi;
function RT(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Mq(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return RT;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class Rq {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? RT : Mq(t);
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
      let y = n - o, b = i - s, m = l * l + f * f, g = y * y + b * b, _ = Math.sqrt(m), O = Math.sqrt(v), A = a * Math.tan((ag - Math.acos((m + v - g) / (2 * _ * O))) / 2), P = A / O, x = A / _;
      Math.abs(P - 1) > qi && this._append`L${t + P * d},${r + P * h}`, this._append`A${a},${a},0,0,${+(h * y > d * b)},${this._x1 = t + x * l},${this._y1 = r + x * f}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), f = t + s, d = r + l, h = 1 ^ o, v = o ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > qi || Math.abs(this._y1 - d) > qi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % og + og), v > Cq ? this._append`A${n},${n},0,1,${h},${t - s},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > qi && this._append`A${n},${n},0,${+(v >= ag)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Wm(e) {
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
  }, () => new Rq(t);
}
function zm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function IT(e) {
  this._context = e;
}
IT.prototype = {
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
function Dl(e) {
  return new IT(e);
}
function $T(e) {
  return e[0];
}
function jT(e) {
  return e[1];
}
function kT(e, t) {
  var r = at(!0), n = null, i = Dl, a = null, o = Wm(s);
  e = typeof e == "function" ? e : e === void 0 ? $T : at(e), t = typeof t == "function" ? t : t === void 0 ? jT : at(t);
  function s(l) {
    var f, d = (l = zm(l)).length, h, v = !1, y;
    for (n == null && (a = i(y = o())), f = 0; f <= d; ++f)
      !(f < d && r(h = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(h, f, l), +t(h, f, l));
    if (y) return a = null, y + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : at(+l), s) : e;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : at(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : at(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), s) : n;
  }, s;
}
function nc(e, t, r) {
  var n = null, i = at(!0), a = null, o = Dl, s = null, l = Wm(f);
  e = typeof e == "function" ? e : e === void 0 ? $T : at(+e), t = typeof t == "function" ? t : at(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? jT : at(+r);
  function f(h) {
    var v, y, b, m = (h = zm(h)).length, g, _ = !1, O, A = new Array(m), P = new Array(m);
    for (a == null && (s = o(O = l())), v = 0; v <= m; ++v) {
      if (!(v < m && i(g = h[v], v, h)) === _)
        if (_ = !_)
          y = v, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), b = v - 1; b >= y; --b)
            s.point(A[b], P[b]);
          s.lineEnd(), s.areaEnd();
        }
      _ && (A[v] = +e(g, v, h), P[v] = +t(g, v, h), s.point(n ? +n(g, v, h) : A[v], r ? +r(g, v, h) : P[v]));
    }
    if (O) return s = null, O + "" || null;
  }
  function d() {
    return kT().defined(i).curve(o).context(a);
  }
  return f.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : at(+h), n = null, f) : e;
  }, f.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : at(+h), f) : e;
  }, f.x1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : at(+h), f) : n;
  }, f.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : at(+h), r = null, f) : t;
  }, f.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : at(+h), f) : t;
  }, f.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : at(+h), f) : r;
  }, f.lineX0 = f.lineY0 = function() {
    return d().x(e).y(t);
  }, f.lineY1 = function() {
    return d().x(e).y(r);
  }, f.lineX1 = function() {
    return d().x(n).y(t);
  }, f.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : at(!!h), f) : i;
  }, f.curve = function(h) {
    return arguments.length ? (o = h, a != null && (s = o(a)), f) : o;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = o(a = h), f) : a;
  }, f;
}
class DT {
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
function Iq(e) {
  return new DT(e, !0);
}
function $q(e) {
  return new DT(e, !1);
}
const Um = {
  draw(e, t) {
    const r = tn(t / Pc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, kl);
  }
}, jq = {
  draw(e, t) {
    const r = tn(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, NT = tn(1 / 3), kq = NT * 2, Dq = {
  draw(e, t) {
    const r = tn(t / kq), n = r * NT;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Nq = {
  draw(e, t) {
    const r = tn(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Lq = 0.8908130915292852, LT = Sc(Pc / 10) / Sc(7 * Pc / 10), qq = Sc(kl / 10) * LT, Bq = -MT(kl / 10) * LT, Fq = {
  draw(e, t) {
    const r = tn(t * Lq), n = qq * r, i = Bq * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = kl * a / 5, s = MT(o), l = Sc(o);
      e.lineTo(l * r, -s * r), e.lineTo(s * n - l * i, l * n + s * i);
    }
    e.closePath();
  }
}, rp = tn(3), Wq = {
  draw(e, t) {
    const r = -tn(t / (rp * 3));
    e.moveTo(0, r * 2), e.lineTo(-rp * r, -r), e.lineTo(rp * r, -r), e.closePath();
  }
}, Mr = -0.5, Rr = tn(3) / 2, ug = 1 / tn(12), zq = (ug / 2 + 1) * 3, Uq = {
  draw(e, t) {
    const r = tn(t / zq), n = r / 2, i = r * ug, a = n, o = r * ug + r, s = -a, l = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, l), e.lineTo(Mr * n - Rr * i, Rr * n + Mr * i), e.lineTo(Mr * a - Rr * o, Rr * a + Mr * o), e.lineTo(Mr * s - Rr * l, Rr * s + Mr * l), e.lineTo(Mr * n + Rr * i, Mr * i - Rr * n), e.lineTo(Mr * a + Rr * o, Mr * o - Rr * a), e.lineTo(Mr * s + Rr * l, Mr * l - Rr * s), e.closePath();
  }
};
function Hq(e, t) {
  let r = null, n = Wm(i);
  e = typeof e == "function" ? e : at(e || Um), t = typeof t == "function" ? t : at(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : at(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : at(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Ec() {
}
function Tc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function qT(e) {
  this._context = e;
}
qT.prototype = {
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
        Tc(this, this._x1, this._y1);
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
        Tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Gq(e) {
  return new qT(e);
}
function BT(e) {
  this._context = e;
}
BT.prototype = {
  areaStart: Ec,
  areaEnd: Ec,
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
        Tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Kq(e) {
  return new BT(e);
}
function FT(e) {
  this._context = e;
}
FT.prototype = {
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
        Tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Vq(e) {
  return new FT(e);
}
function WT(e) {
  this._context = e;
}
WT.prototype = {
  areaStart: Ec,
  areaEnd: Ec,
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
function Yq(e) {
  return new WT(e);
}
function e_(e) {
  return e < 0 ? -1 : 1;
}
function t_(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (e_(a) + e_(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function r_(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function np(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Cc(e) {
  this._context = e;
}
Cc.prototype = {
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
        np(this, this._t0, r_(this, this._t0));
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
          this._point = 3, np(this, r_(this, r = t_(this, e, t)), r);
          break;
        default:
          np(this, this._t0, r = t_(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function zT(e) {
  this._context = new UT(e);
}
(zT.prototype = Object.create(Cc.prototype)).point = function(e, t) {
  Cc.prototype.point.call(this, t, e);
};
function UT(e) {
  this._context = e;
}
UT.prototype = {
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
function Xq(e) {
  return new Cc(e);
}
function Zq(e) {
  return new zT(e);
}
function HT(e) {
  this._context = e;
}
HT.prototype = {
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
        for (var n = n_(e), i = n_(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function n_(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Jq(e) {
  return new HT(e);
}
function Nl(e, t) {
  this._context = e, this._t = t;
}
Nl.prototype = {
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
function Qq(e) {
  return new Nl(e, 0.5);
}
function eB(e) {
  return new Nl(e, 0);
}
function tB(e) {
  return new Nl(e, 1);
}
function Ba(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function sg(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function rB(e, t) {
  return e[t];
}
function nB(e) {
  const t = [];
  return t.key = e, t;
}
function iB() {
  var e = at([]), t = sg, r = Ba, n = rB;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), nB), s, l = o.length, f = -1, d;
    for (const h of a)
      for (s = 0, ++f; s < l; ++s)
        (o[s][f] = [0, +n(h, o[s].key, f, a)]).data = h;
    for (s = 0, d = zm(t(o)); s < l; ++s)
      o[d[s]].index = s;
    return r(o, d), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : at(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : at(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? sg : typeof a == "function" ? a : at(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Ba, i) : r;
  }, i;
}
function aB(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ba(e, t);
  }
}
function oB(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Ba(e, t);
  }
}
function uB(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, l = 0, f = 0; s < o; ++s) {
        for (var d = e[t[s]], h = d[n][1] || 0, v = d[n - 1][1] || 0, y = (h - v) / 2, b = 0; b < s; ++b) {
          var m = e[t[b]], g = m[n][1] || 0, _ = m[n - 1][1] || 0;
          y += g - _;
        }
        l += h, f += y * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Ba(e, t);
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
var sB = ["type", "size", "sizeType"];
function cg() {
  return cg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cg.apply(this, arguments);
}
function i_(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function a_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i_(Object(r), !0).forEach(function(n) {
      cB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i_(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cB(e, t, r) {
  return t = lB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lB(e) {
  var t = fB(e, "string");
  return gu(t) == "symbol" ? t : t + "";
}
function fB(e, t) {
  if (gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dB(e, t) {
  if (e == null) return {};
  var r = hB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var GT = {
  symbolCircle: Um,
  symbolCross: jq,
  symbolDiamond: Dq,
  symbolSquare: Nq,
  symbolStar: Fq,
  symbolTriangle: Wq,
  symbolWye: Uq
}, pB = Math.PI / 180, vB = function(t) {
  var r = "symbol".concat(jl(t));
  return GT[r] || Um;
}, yB = function(t, r, n) {
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
      var i = 18 * pB;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, gB = function(t, r) {
  GT["symbol".concat(jl(t))] = r;
}, Hm = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, l = dB(t, sB), f = a_(a_({}, l), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var g = vB(n), _ = Hq().type(g).size(yB(a, s, n));
    return _();
  }, h = f.className, v = f.cx, y = f.cy, b = we(f, !0);
  return v === +v && y === +y && a === +a ? /* @__PURE__ */ j.createElement("path", cg({}, b, {
    className: Me("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(y, ")"),
    d: d()
  })) : null;
};
Hm.registerSymbol = gB;
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function lg() {
  return lg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lg.apply(this, arguments);
}
function o_(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o_(Object(r), !0).forEach(function(n) {
      mu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o_(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, VT(n.key), n);
  }
}
function wB(e, t, r) {
  return t && xB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _B(e, t, r) {
  return t = Mc(t), OB(e, KT() ? Reflect.construct(t, r || [], Mc(e).constructor) : t.apply(e, r));
}
function OB(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AB(e);
}
function AB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KT() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KT = function() {
    return !!e;
  })();
}
function Mc(e) {
  return Mc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mc(e);
}
function SB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fg(e, t);
}
function fg(e, t) {
  return fg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fg(e, t);
}
function mu(e, t, r) {
  return t = VT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VT(e) {
  var t = PB(e, "string");
  return Fa(t) == "symbol" ? t : t + "";
}
function PB(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zr = 32, Gm = /* @__PURE__ */ function(e) {
  function t() {
    return bB(this, t), _B(this, t, arguments);
  }
  return SB(t, e), wB(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = zr / 2, o = zr / 6, s = zr / 3, l = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ j.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: zr,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ j.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(zr, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ j.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(zr / 8, "h").concat(zr, "v").concat(zr * 3 / 4, "h").concat(-32, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ j.isValidElement(n.legendIcon)) {
          var f = mB({}, n);
          return delete f.legendIcon, /* @__PURE__ */ j.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ j.createElement(Hm, {
          fill: l,
          cx: a,
          cy: a,
          size: zr,
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
        width: zr,
        height: zr
      }, h = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(y, b) {
        var m = y.formatter || l, g = Me(mu(mu({
          "recharts-legend-item": !0
        }, "legend-item-".concat(b), !0), "inactive", y.inactive));
        if (y.type === "none")
          return null;
        var _ = Pe(y.value) ? null : y.value;
        Yr(
          !Pe(y.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = y.inactive ? f : y.color;
        return /* @__PURE__ */ j.createElement("li", lg({
          className: g,
          style: h,
          key: "legend-item-".concat(b)
        }, Ji(n.props, y, b)), /* @__PURE__ */ j.createElement(ng, {
          width: o,
          height: o,
          viewBox: d,
          style: v
        }, n.renderIcon(y)), /* @__PURE__ */ j.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, m ? m(_, y, b) : _));
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
      return /* @__PURE__ */ j.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Nr);
mu(Gm, "displayName", "Legend");
mu(Gm, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var ip, u_;
function EB() {
  if (u_) return ip;
  u_ = 1;
  var e = Rl();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return ip = t, ip;
}
var ap, s_;
function TB() {
  if (s_) return ap;
  s_ = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return ap = e, ap;
}
var op, c_;
function CB() {
  if (c_) return op;
  c_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return op = e, op;
}
var up, l_;
function MB() {
  if (l_) return up;
  l_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return up = e, up;
}
var sp, f_;
function RB() {
  if (f_) return sp;
  f_ = 1;
  var e = Rl(), t = Dm(), r = Nm(), n = 200;
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
  return sp = i, sp;
}
var cp, d_;
function YT() {
  if (d_) return cp;
  d_ = 1;
  var e = Rl(), t = EB(), r = TB(), n = CB(), i = MB(), a = RB();
  function o(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, cp = o, cp;
}
var lp, h_;
function IB() {
  if (h_) return lp;
  h_ = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return lp = t, lp;
}
var fp, p_;
function $B() {
  if (p_) return fp;
  p_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return fp = e, fp;
}
var dp, v_;
function XT() {
  if (v_) return dp;
  v_ = 1;
  var e = Nm(), t = IB(), r = $B();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, dp = n, dp;
}
var hp, y_;
function ZT() {
  if (y_) return hp;
  y_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return hp = e, hp;
}
var pp, g_;
function JT() {
  if (g_) return pp;
  g_ = 1;
  function e(t, r) {
    return t.has(r);
  }
  return pp = e, pp;
}
var vp, m_;
function QT() {
  if (m_) return vp;
  m_ = 1;
  var e = XT(), t = ZT(), r = JT(), n = 1, i = 2;
  function a(o, s, l, f, d, h) {
    var v = l & n, y = o.length, b = s.length;
    if (y != b && !(v && b > y))
      return !1;
    var m = h.get(o), g = h.get(s);
    if (m && g)
      return m == s && g == o;
    var _ = -1, O = !0, A = l & i ? new e() : void 0;
    for (h.set(o, s), h.set(s, o); ++_ < y; ) {
      var P = o[_], x = s[_];
      if (f)
        var S = v ? f(x, P, _, s, o, h) : f(P, x, _, o, s, h);
      if (S !== void 0) {
        if (S)
          continue;
        O = !1;
        break;
      }
      if (A) {
        if (!t(s, function(T, R) {
          if (!r(A, R) && (P === T || d(P, T, l, f, h)))
            return A.push(R);
        })) {
          O = !1;
          break;
        }
      } else if (!(P === x || d(P, x, l, f, h))) {
        O = !1;
        break;
      }
    }
    return h.delete(o), h.delete(s), O;
  }
  return vp = a, vp;
}
var yp, b_;
function jB() {
  if (b_) return yp;
  b_ = 1;
  var e = vn(), t = e.Uint8Array;
  return yp = t, yp;
}
var gp, x_;
function kB() {
  if (x_) return gp;
  x_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return gp = e, gp;
}
var mp, w_;
function Km() {
  if (w_) return mp;
  w_ = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return mp = e, mp;
}
var bp, __;
function DB() {
  if (__) return bp;
  __ = 1;
  var e = Qu(), t = jB(), r = km(), n = QT(), i = kB(), a = Km(), o = 1, s = 2, l = "[object Boolean]", f = "[object Date]", d = "[object Error]", h = "[object Map]", v = "[object Number]", y = "[object RegExp]", b = "[object Set]", m = "[object String]", g = "[object Symbol]", _ = "[object ArrayBuffer]", O = "[object DataView]", A = e ? e.prototype : void 0, P = A ? A.valueOf : void 0;
  function x(S, T, R, I, q, $, D) {
    switch (R) {
      case O:
        if (S.byteLength != T.byteLength || S.byteOffset != T.byteOffset)
          return !1;
        S = S.buffer, T = T.buffer;
      case _:
        return !(S.byteLength != T.byteLength || !$(new t(S), new t(T)));
      case l:
      case f:
      case v:
        return r(+S, +T);
      case d:
        return S.name == T.name && S.message == T.message;
      case y:
      case m:
        return S == T + "";
      case h:
        var L = i;
      case b:
        var F = I & o;
        if (L || (L = a), S.size != T.size && !F)
          return !1;
        var G = D.get(S);
        if (G)
          return G == T;
        I |= s, D.set(S, T);
        var U = n(L(S), L(T), I, q, $, D);
        return D.delete(S), U;
      case g:
        if (P)
          return P.call(S) == P.call(T);
    }
    return !1;
  }
  return bp = x, bp;
}
var xp, O_;
function eC() {
  if (O_) return xp;
  O_ = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return xp = e, xp;
}
var wp, A_;
function NB() {
  if (A_) return wp;
  A_ = 1;
  var e = eC(), t = ar();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return wp = r, wp;
}
var _p, S_;
function LB() {
  if (S_) return _p;
  S_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (o[a++] = s);
    }
    return o;
  }
  return _p = e, _p;
}
var Op, P_;
function qB() {
  if (P_) return Op;
  P_ = 1;
  function e() {
    return [];
  }
  return Op = e, Op;
}
var Ap, E_;
function BB() {
  if (E_) return Ap;
  E_ = 1;
  var e = LB(), t = qB(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return Ap = a, Ap;
}
var Sp, T_;
function FB() {
  if (T_) return Sp;
  T_ = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return Sp = e, Sp;
}
var Pp, C_;
function WB() {
  if (C_) return Pp;
  C_ = 1;
  var e = zn(), t = Un(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Pp = n, Pp;
}
var Ep, M_;
function Vm() {
  if (M_) return Ep;
  M_ = 1;
  var e = WB(), t = Un(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return Ep = a, Ep;
}
var ou = { exports: {} }, Tp, R_;
function zB() {
  if (R_) return Tp;
  R_ = 1;
  function e() {
    return !1;
  }
  return Tp = e, Tp;
}
ou.exports;
var I_;
function tC() {
  return I_ || (I_ = 1, function(e, t) {
    var r = vn(), n = zB(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || n;
    e.exports = f;
  }(ou, ou.exports)), ou.exports;
}
var Cp, $_;
function Ym() {
  if ($_) return Cp;
  $_ = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Cp = r, Cp;
}
var Mp, j_;
function Xm() {
  if (j_) return Mp;
  j_ = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Mp = t, Mp;
}
var Rp, k_;
function UB() {
  if (k_) return Rp;
  k_ = 1;
  var e = zn(), t = Xm(), r = Un(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", s = "[object Error]", l = "[object Function]", f = "[object Map]", d = "[object Number]", h = "[object Object]", v = "[object RegExp]", y = "[object Set]", b = "[object String]", m = "[object WeakMap]", g = "[object ArrayBuffer]", _ = "[object DataView]", O = "[object Float32Array]", A = "[object Float64Array]", P = "[object Int8Array]", x = "[object Int16Array]", S = "[object Int32Array]", T = "[object Uint8Array]", R = "[object Uint8ClampedArray]", I = "[object Uint16Array]", q = "[object Uint32Array]", $ = {};
  $[O] = $[A] = $[P] = $[x] = $[S] = $[T] = $[R] = $[I] = $[q] = !0, $[n] = $[i] = $[g] = $[a] = $[_] = $[o] = $[s] = $[l] = $[f] = $[d] = $[h] = $[v] = $[y] = $[b] = $[m] = !1;
  function D(L) {
    return r(L) && t(L.length) && !!$[e(L)];
  }
  return Rp = D, Rp;
}
var Ip, D_;
function rC() {
  if (D_) return Ip;
  D_ = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Ip = e, Ip;
}
var uu = { exports: {} };
uu.exports;
var N_;
function HB() {
  return N_ || (N_ = 1, function(e, t) {
    var r = wT(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(uu, uu.exports)), uu.exports;
}
var $p, L_;
function nC() {
  if (L_) return $p;
  L_ = 1;
  var e = UB(), t = rC(), r = HB(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return $p = i, $p;
}
var jp, q_;
function GB() {
  if (q_) return jp;
  q_ = 1;
  var e = FB(), t = Vm(), r = ar(), n = tC(), i = Ym(), a = nC(), o = Object.prototype, s = o.hasOwnProperty;
  function l(f, d) {
    var h = r(f), v = !h && t(f), y = !h && !v && n(f), b = !h && !v && !y && a(f), m = h || v || y || b, g = m ? e(f.length, String) : [], _ = g.length;
    for (var O in f)
      (d || s.call(f, O)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      y && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
      i(O, _))) && g.push(O);
    return g;
  }
  return jp = l, jp;
}
var kp, B_;
function KB() {
  if (B_) return kp;
  B_ = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return kp = t, kp;
}
var Dp, F_;
function iC() {
  if (F_) return Dp;
  F_ = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Dp = e, Dp;
}
var Np, W_;
function VB() {
  if (W_) return Np;
  W_ = 1;
  var e = iC(), t = e(Object.keys, Object);
  return Np = t, Np;
}
var Lp, z_;
function YB() {
  if (z_) return Lp;
  z_ = 1;
  var e = KB(), t = VB(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Lp = i, Lp;
}
var qp, U_;
function ts() {
  if (U_) return qp;
  U_ = 1;
  var e = jm(), t = Xm();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return qp = r, qp;
}
var Bp, H_;
function Ll() {
  if (H_) return Bp;
  H_ = 1;
  var e = GB(), t = YB(), r = ts();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return Bp = n, Bp;
}
var Fp, G_;
function XB() {
  if (G_) return Fp;
  G_ = 1;
  var e = NB(), t = BB(), r = Ll();
  function n(i) {
    return e(i, r, t);
  }
  return Fp = n, Fp;
}
var Wp, K_;
function ZB() {
  if (K_) return Wp;
  K_ = 1;
  var e = XB(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, s, l, f, d) {
    var h = s & t, v = e(a), y = v.length, b = e(o), m = b.length;
    if (y != m && !h)
      return !1;
    for (var g = y; g--; ) {
      var _ = v[g];
      if (!(h ? _ in o : n.call(o, _)))
        return !1;
    }
    var O = d.get(a), A = d.get(o);
    if (O && A)
      return O == o && A == a;
    var P = !0;
    d.set(a, o), d.set(o, a);
    for (var x = h; ++g < y; ) {
      _ = v[g];
      var S = a[_], T = o[_];
      if (l)
        var R = h ? l(T, S, _, o, a, d) : l(S, T, _, a, o, d);
      if (!(R === void 0 ? S === T || f(S, T, s, l, d) : R)) {
        P = !1;
        break;
      }
      x || (x = _ == "constructor");
    }
    if (P && !x) {
      var I = a.constructor, q = o.constructor;
      I != q && "constructor" in a && "constructor" in o && !(typeof I == "function" && I instanceof I && typeof q == "function" && q instanceof q) && (P = !1);
    }
    return d.delete(a), d.delete(o), P;
  }
  return Wp = i, Wp;
}
var zp, V_;
function JB() {
  if (V_) return zp;
  V_ = 1;
  var e = ia(), t = vn(), r = e(t, "DataView");
  return zp = r, zp;
}
var Up, Y_;
function QB() {
  if (Y_) return Up;
  Y_ = 1;
  var e = ia(), t = vn(), r = e(t, "Promise");
  return Up = r, Up;
}
var Hp, X_;
function aC() {
  if (X_) return Hp;
  X_ = 1;
  var e = ia(), t = vn(), r = e(t, "Set");
  return Hp = r, Hp;
}
var Gp, Z_;
function e6() {
  if (Z_) return Gp;
  Z_ = 1;
  var e = ia(), t = vn(), r = e(t, "WeakMap");
  return Gp = r, Gp;
}
var Kp, J_;
function t6() {
  if (J_) return Kp;
  J_ = 1;
  var e = JB(), t = Dm(), r = QB(), n = aC(), i = e6(), a = zn(), o = _T(), s = "[object Map]", l = "[object Object]", f = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", v = "[object DataView]", y = o(e), b = o(t), m = o(r), g = o(n), _ = o(i), O = a;
  return (e && O(new e(new ArrayBuffer(1))) != v || t && O(new t()) != s || r && O(r.resolve()) != f || n && O(new n()) != d || i && O(new i()) != h) && (O = function(A) {
    var P = a(A), x = P == l ? A.constructor : void 0, S = x ? o(x) : "";
    if (S)
      switch (S) {
        case y:
          return v;
        case b:
          return s;
        case m:
          return f;
        case g:
          return d;
        case _:
          return h;
      }
    return P;
  }), Kp = O, Kp;
}
var Vp, Q_;
function r6() {
  if (Q_) return Vp;
  Q_ = 1;
  var e = YT(), t = QT(), r = DB(), n = ZB(), i = t6(), a = ar(), o = tC(), s = nC(), l = 1, f = "[object Arguments]", d = "[object Array]", h = "[object Object]", v = Object.prototype, y = v.hasOwnProperty;
  function b(m, g, _, O, A, P) {
    var x = a(m), S = a(g), T = x ? d : i(m), R = S ? d : i(g);
    T = T == f ? h : T, R = R == f ? h : R;
    var I = T == h, q = R == h, $ = T == R;
    if ($ && o(m)) {
      if (!o(g))
        return !1;
      x = !0, I = !1;
    }
    if ($ && !I)
      return P || (P = new e()), x || s(m) ? t(m, g, _, O, A, P) : r(m, g, T, _, O, A, P);
    if (!(_ & l)) {
      var D = I && y.call(m, "__wrapped__"), L = q && y.call(g, "__wrapped__");
      if (D || L) {
        var F = D ? m.value() : m, G = L ? g.value() : g;
        return P || (P = new e()), A(F, G, _, O, P);
      }
    }
    return $ ? (P || (P = new e()), n(m, g, _, O, A, P)) : !1;
  }
  return Vp = b, Vp;
}
var Yp, eO;
function Zm() {
  if (eO) return Yp;
  eO = 1;
  var e = r6(), t = Un();
  function r(n, i, a, o, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, s);
  }
  return Yp = r, Yp;
}
var Xp, tO;
function n6() {
  if (tO) return Xp;
  tO = 1;
  var e = YT(), t = Zm(), r = 1, n = 2;
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
      var y = v[0], b = a[y], m = v[1];
      if (h && v[2]) {
        if (b === void 0 && !(y in a))
          return !1;
      } else {
        var g = new e();
        if (l)
          var _ = l(b, m, y, a, o, g);
        if (!(_ === void 0 ? t(m, b, r | n, l, g) : _))
          return !1;
      }
    }
    return !0;
  }
  return Xp = i, Xp;
}
var Zp, rO;
function oC() {
  if (rO) return Zp;
  rO = 1;
  var e = bi();
  function t(r) {
    return r === r && !e(r);
  }
  return Zp = t, Zp;
}
var Jp, nO;
function i6() {
  if (nO) return Jp;
  nO = 1;
  var e = oC(), t = Ll();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], s = n[o];
      i[a] = [o, s, e(s)];
    }
    return i;
  }
  return Jp = r, Jp;
}
var Qp, iO;
function uC() {
  if (iO) return Qp;
  iO = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Qp = e, Qp;
}
var ev, aO;
function a6() {
  if (aO) return ev;
  aO = 1;
  var e = n6(), t = i6(), r = uC();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return ev = n, ev;
}
var tv, oO;
function o6() {
  if (oO) return tv;
  oO = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return tv = e, tv;
}
var rv, uO;
function u6() {
  if (uO) return rv;
  uO = 1;
  var e = ST(), t = Vm(), r = ar(), n = Ym(), i = Xm(), a = $l();
  function o(s, l, f) {
    l = e(l, s);
    for (var d = -1, h = l.length, v = !1; ++d < h; ) {
      var y = a(l[d]);
      if (!(v = s != null && f(s, y)))
        break;
      s = s[y];
    }
    return v || ++d != h ? v : (h = s == null ? 0 : s.length, !!h && i(h) && n(y, h) && (r(s) || t(s)));
  }
  return rv = o, rv;
}
var nv, sO;
function s6() {
  if (sO) return nv;
  sO = 1;
  var e = o6(), t = u6();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return nv = r, nv;
}
var iv, cO;
function c6() {
  if (cO) return iv;
  cO = 1;
  var e = Zm(), t = PT(), r = s6(), n = $m(), i = oC(), a = uC(), o = $l(), s = 1, l = 2;
  function f(d, h) {
    return n(d) && i(h) ? a(o(d), h) : function(v) {
      var y = t(v, d);
      return y === void 0 && y === h ? r(v, d) : e(h, y, s | l);
    };
  }
  return iv = f, iv;
}
var av, lO;
function _o() {
  if (lO) return av;
  lO = 1;
  function e(t) {
    return t;
  }
  return av = e, av;
}
var ov, fO;
function l6() {
  if (fO) return ov;
  fO = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return ov = e, ov;
}
var uv, dO;
function f6() {
  if (dO) return uv;
  dO = 1;
  var e = qm();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return uv = t, uv;
}
var sv, hO;
function d6() {
  if (hO) return sv;
  hO = 1;
  var e = l6(), t = f6(), r = $m(), n = $l();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return sv = i, sv;
}
var cv, pO;
function yn() {
  if (pO) return cv;
  pO = 1;
  var e = a6(), t = c6(), r = _o(), n = ar(), i = d6();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return cv = a, cv;
}
var lv, vO;
function sC() {
  if (vO) return lv;
  vO = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return lv = e, lv;
}
var fv, yO;
function h6() {
  if (yO) return fv;
  yO = 1;
  function e(t) {
    return t !== t;
  }
  return fv = e, fv;
}
var dv, gO;
function p6() {
  if (gO) return dv;
  gO = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return dv = e, dv;
}
var hv, mO;
function v6() {
  if (mO) return hv;
  mO = 1;
  var e = sC(), t = h6(), r = p6();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return hv = n, hv;
}
var pv, bO;
function y6() {
  if (bO) return pv;
  bO = 1;
  var e = v6();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return pv = t, pv;
}
var vv, xO;
function g6() {
  if (xO) return vv;
  xO = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return vv = e, vv;
}
var yv, wO;
function m6() {
  if (wO) return yv;
  wO = 1;
  function e() {
  }
  return yv = e, yv;
}
var gv, _O;
function b6() {
  if (_O) return gv;
  _O = 1;
  var e = aC(), t = m6(), r = Km(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return gv = i, gv;
}
var mv, OO;
function x6() {
  if (OO) return mv;
  OO = 1;
  var e = XT(), t = y6(), r = g6(), n = JT(), i = b6(), a = Km(), o = 200;
  function s(l, f, d) {
    var h = -1, v = t, y = l.length, b = !0, m = [], g = m;
    if (d)
      b = !1, v = r;
    else if (y >= o) {
      var _ = f ? null : i(l);
      if (_)
        return a(_);
      b = !1, v = n, g = new e();
    } else
      g = f ? [] : m;
    e:
      for (; ++h < y; ) {
        var O = l[h], A = f ? f(O) : O;
        if (O = d || O !== 0 ? O : 0, b && A === A) {
          for (var P = g.length; P--; )
            if (g[P] === A)
              continue e;
          f && g.push(A), m.push(O);
        } else v(g, A, d) || (g !== m && g.push(A), m.push(O));
      }
    return m;
  }
  return mv = s, mv;
}
var bv, AO;
function w6() {
  if (AO) return bv;
  AO = 1;
  var e = yn(), t = x6();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return bv = r, bv;
}
var _6 = w6();
const SO = /* @__PURE__ */ Je(_6);
function cC(e, t, r) {
  return t === !0 ? SO(e, r) : Pe(t) ? SO(e, t) : e;
}
function Wa(e) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e);
}
var O6 = ["ref"];
function PO(e, t) {
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
    t % 2 ? PO(Object(r), !0).forEach(function(n) {
      ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fC(n.key), n);
  }
}
function S6(e, t, r) {
  return t && EO(e.prototype, t), r && EO(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P6(e, t, r) {
  return t = Rc(t), E6(e, lC() ? Reflect.construct(t, r || [], Rc(e).constructor) : t.apply(e, r));
}
function E6(e, t) {
  if (t && (Wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T6(e);
}
function T6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lC = function() {
    return !!e;
  })();
}
function Rc(e) {
  return Rc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rc(e);
}
function C6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dg(e, t);
}
function dg(e, t) {
  return dg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dg(e, t);
}
function ql(e, t, r) {
  return t = fC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fC(e) {
  var t = M6(e, "string");
  return Wa(t) == "symbol" ? t : t + "";
}
function M6(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function R6(e, t) {
  if (e == null) return {};
  var r = I6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function $6(e) {
  return e.value;
}
function j6(e, t) {
  if (/* @__PURE__ */ j.isValidElement(e))
    return /* @__PURE__ */ j.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ j.createElement(e, t);
  t.ref;
  var r = R6(t, O6);
  return /* @__PURE__ */ j.createElement(Gm, r);
}
var TO = 1, Vi = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    A6(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = P6(this, t, [].concat(i)), ql(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return C6(t, e), S6(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > TO || Math.abs(i.height - this.lastBoundingBox.height) > TO) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Cn({}, this.lastBoundingBox) : {
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
          var y = this.getBBoxSnapshot();
          h = {
            left: ((f || 0) - y.width) / 2
          };
        } else
          h = o === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var b = this.getBBoxSnapshot();
          v = {
            top: ((d || 0) - b.height) / 2
          };
        } else
          v = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Cn(Cn({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, s = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = Cn(Cn({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ j.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(y) {
          n.wrapperNode = y;
        }
      }, j6(a, Cn(Cn({}, this.props), {}, {
        payload: cC(d, f, $6)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = Cn(Cn({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && ce(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(Nr);
ql(Vi, "displayName", "Legend");
ql(Vi, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var xv, CO;
function k6() {
  if (CO) return xv;
  CO = 1;
  var e = Qu(), t = Vm(), r = ar(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return xv = i, xv;
}
var wv, MO;
function dC() {
  if (MO) return wv;
  MO = 1;
  var e = eC(), t = k6();
  function r(n, i, a, o, s) {
    var l = -1, f = n.length;
    for (a || (a = t), s || (s = []); ++l < f; ) {
      var d = n[l];
      i > 0 && a(d) ? i > 1 ? r(d, i - 1, a, o, s) : e(s, d) : o || (s[s.length] = d);
    }
    return s;
  }
  return wv = r, wv;
}
var _v, RO;
function D6() {
  if (RO) return _v;
  RO = 1;
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
  return _v = e, _v;
}
var Ov, IO;
function N6() {
  if (IO) return Ov;
  IO = 1;
  var e = D6(), t = e();
  return Ov = t, Ov;
}
var Av, $O;
function hC() {
  if ($O) return Av;
  $O = 1;
  var e = N6(), t = Ll();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return Av = r, Av;
}
var Sv, jO;
function L6() {
  if (jO) return Sv;
  jO = 1;
  var e = ts();
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
  return Sv = t, Sv;
}
var Pv, kO;
function Jm() {
  if (kO) return Pv;
  kO = 1;
  var e = hC(), t = L6(), r = t(e);
  return Pv = r, Pv;
}
var Ev, DO;
function pC() {
  if (DO) return Ev;
  DO = 1;
  var e = Jm(), t = ts();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, l, f) {
      o[++a] = i(s, l, f);
    }), o;
  }
  return Ev = r, Ev;
}
var Tv, NO;
function q6() {
  if (NO) return Tv;
  NO = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Tv = e, Tv;
}
var Cv, LO;
function B6() {
  if (LO) return Cv;
  LO = 1;
  var e = bo();
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
  return Cv = t, Cv;
}
var Mv, qO;
function F6() {
  if (qO) return Mv;
  qO = 1;
  var e = B6();
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
  return Mv = t, Mv;
}
var Rv, BO;
function W6() {
  if (BO) return Rv;
  BO = 1;
  var e = Lm(), t = qm(), r = yn(), n = pC(), i = q6(), a = rC(), o = F6(), s = _o(), l = ar();
  function f(d, h, v) {
    h.length ? h = e(h, function(m) {
      return l(m) ? function(g) {
        return t(g, m.length === 1 ? m[0] : m);
      } : m;
    }) : h = [s];
    var y = -1;
    h = e(h, a(r));
    var b = n(d, function(m, g, _) {
      var O = e(h, function(A) {
        return A(m);
      });
      return { criteria: O, index: ++y, value: m };
    });
    return i(b, function(m, g) {
      return o(m, g, v);
    });
  }
  return Rv = f, Rv;
}
var Iv, FO;
function z6() {
  if (FO) return Iv;
  FO = 1;
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
  return Iv = e, Iv;
}
var $v, WO;
function U6() {
  if (WO) return $v;
  WO = 1;
  var e = z6(), t = Math.max;
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
  return $v = r, $v;
}
var jv, zO;
function H6() {
  if (zO) return jv;
  zO = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return jv = e, jv;
}
var kv, UO;
function vC() {
  if (UO) return kv;
  UO = 1;
  var e = ia(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return kv = t, kv;
}
var Dv, HO;
function G6() {
  if (HO) return Dv;
  HO = 1;
  var e = H6(), t = vC(), r = _o(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Dv = n, Dv;
}
var Nv, GO;
function K6() {
  if (GO) return Nv;
  GO = 1;
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
  return Nv = n, Nv;
}
var Lv, KO;
function V6() {
  if (KO) return Lv;
  KO = 1;
  var e = G6(), t = K6(), r = t(e);
  return Lv = r, Lv;
}
var qv, VO;
function Y6() {
  if (VO) return qv;
  VO = 1;
  var e = _o(), t = U6(), r = V6();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return qv = n, qv;
}
var Bv, YO;
function Bl() {
  if (YO) return Bv;
  YO = 1;
  var e = km(), t = ts(), r = Ym(), n = bi();
  function i(a, o, s) {
    if (!n(s))
      return !1;
    var l = typeof o;
    return (l == "number" ? t(s) && r(o, s.length) : l == "string" && o in s) ? e(s[o], a) : !1;
  }
  return Bv = i, Bv;
}
var Fv, XO;
function X6() {
  if (XO) return Fv;
  XO = 1;
  var e = dC(), t = W6(), r = Y6(), n = Bl(), i = r(function(a, o) {
    if (a == null)
      return [];
    var s = o.length;
    return s > 1 && n(a, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return Fv = i, Fv;
}
var Z6 = X6();
const Qm = /* @__PURE__ */ Je(Z6);
function bu(e) {
  "@babel/helpers - typeof";
  return bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bu(e);
}
function hg() {
  return hg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hg.apply(this, arguments);
}
function J6(e, t) {
  return rF(e) || tF(e, t) || eF(e, t) || Q6();
}
function Q6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eF(e, t) {
  if (e) {
    if (typeof e == "string") return ZO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ZO(e, t);
  }
}
function ZO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tF(e, t) {
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
function rF(e) {
  if (Array.isArray(e)) return e;
}
function JO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? JO(Object(r), !0).forEach(function(n) {
      nF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nF(e, t, r) {
  return t = iF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iF(e) {
  var t = aF(e, "string");
  return bu(t) == "symbol" ? t : t + "";
}
function aF(e, t) {
  if (bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oF(e) {
  return Array.isArray(e) && Et(e[0]) && Et(e[1]) ? e.join(" ~ ") : e;
}
var uF = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, y = t.wrapperClassName, b = t.labelClassName, m = t.label, g = t.labelFormatter, _ = t.accessibilityLayer, O = _ === void 0 ? !1 : _, A = function() {
    if (d && d.length) {
      var D = {
        padding: 0,
        margin: 0
      }, L = (v ? Qm(d, v) : d).map(function(F, G) {
        if (F.type === "none")
          return null;
        var U = Wv({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: F.color || "#000"
        }, s), X = F.formatter || h || oF, Z = F.value, ie = F.name, H = Z, K = ie;
        if (X && H != null && K != null) {
          var re = X(Z, ie, F, G, d);
          if (Array.isArray(re)) {
            var se = J6(re, 2);
            H = se[0], K = se[1];
          } else
            H = re;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ j.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(G),
            style: U
          }, Et(K) ? /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, K) : null, Et(K) ? /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, H), /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, F.unit || ""))
        );
      });
      return /* @__PURE__ */ j.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: D
      }, L);
    }
    return null;
  }, P = Wv({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), x = Wv({
    margin: 0
  }, f), S = !Ee(m), T = S ? m : "", R = Me("recharts-default-tooltip", y), I = Me("recharts-tooltip-label", b);
  S && g && d !== void 0 && d !== null && (T = g(m, d));
  var q = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ j.createElement("div", hg({
    className: R,
    style: P
  }, q), /* @__PURE__ */ j.createElement("p", {
    className: I,
    style: x
  }, /* @__PURE__ */ j.isValidElement(T) ? T : "".concat(T)), A());
};
function xu(e) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xu(e);
}
function ic(e, t, r) {
  return t = sF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sF(e) {
  var t = cF(e, "string");
  return xu(t) == "symbol" ? t : t + "";
}
function cF(e, t) {
  if (xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zo = "recharts-tooltip-wrapper", lF = {
  visibility: "hidden"
};
function fF(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Me(Zo, ic(ic(ic(ic({}, "".concat(Zo, "-right"), ce(r) && t && ce(t.x) && r >= t.x), "".concat(Zo, "-left"), ce(r) && t && ce(t.x) && r < t.x), "".concat(Zo, "-bottom"), ce(n) && t && ce(t.y) && n >= t.y), "".concat(Zo, "-top"), ce(n) && t && ce(t.y) && n < t.y));
}
function QO(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && ce(a[n]))
    return a[n];
  var d = r[n] - s - i, h = r[n] + i;
  if (t[n])
    return o[n] ? d : h;
  if (o[n]) {
    var v = d, y = l[n];
    return v < y ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var b = h + s, m = l[n] + f;
  return b > m ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function dF(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function hF(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, f, d, h;
  return o.height > 0 && o.width > 0 && r ? (d = QO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = QO({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = dF({
    translateX: d,
    translateY: h,
    useTranslate3d: s
  })) : f = lF, {
    cssProperties: f,
    cssClasses: fF({
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
function eA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eA(Object(r), !0).forEach(function(n) {
      vg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gC(n.key), n);
  }
}
function yF(e, t, r) {
  return t && vF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gF(e, t, r) {
  return t = Ic(t), mF(e, yC() ? Reflect.construct(t, r || [], Ic(e).constructor) : t.apply(e, r));
}
function mF(e, t) {
  if (t && (za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bF(e);
}
function bF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yC = function() {
    return !!e;
  })();
}
function Ic(e) {
  return Ic = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ic(e);
}
function xF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pg(e, t);
}
function pg(e, t) {
  return pg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, pg(e, t);
}
function vg(e, t, r) {
  return t = gC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gC(e) {
  var t = wF(e, "string");
  return za(t) == "symbol" ? t : t + "";
}
function wF(e, t) {
  if (za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var rA = 1, _F = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    pF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = gF(this, t, [].concat(i)), vg(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), vg(r, "handleKeyDown", function(o) {
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
  return xF(t, e), yF(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > rA || Math.abs(n.height - this.state.lastBoundingBox.height) > rA) && this.setState({
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
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, y = i.offset, b = i.position, m = i.reverseDirection, g = i.useTranslate3d, _ = i.viewBox, O = i.wrapperStyle, A = hF({
        allowEscapeViewBox: o,
        coordinate: d,
        offsetTopLeft: y,
        position: b,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: _
      }), P = A.cssClasses, x = A.cssProperties, S = tA(tA({
        transition: v && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, x), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && h ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, O);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ j.createElement("div", {
          tabIndex: -1,
          className: P,
          style: S,
          ref: function(R) {
            n.wrapperNode = R;
          }
        }, f)
      );
    }
  }]);
}(Nr), OF = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, xi = {
  isSsr: OF()
};
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
function nA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nA(Object(r), !0).forEach(function(n) {
      eb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bC(n.key), n);
  }
}
function PF(e, t, r) {
  return t && SF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function EF(e, t, r) {
  return t = $c(t), TF(e, mC() ? Reflect.construct(t, r || [], $c(e).constructor) : t.apply(e, r));
}
function TF(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CF(e);
}
function CF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mC = function() {
    return !!e;
  })();
}
function $c(e) {
  return $c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $c(e);
}
function MF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yg(e, t);
}
function yg(e, t) {
  return yg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, yg(e, t);
}
function eb(e, t, r) {
  return t = bC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bC(e) {
  var t = RF(e, "string");
  return Ua(t) == "symbol" ? t : t + "";
}
function RF(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function IF(e) {
  return e.dataKey;
}
function $F(e, t) {
  return /* @__PURE__ */ j.isValidElement(e) ? /* @__PURE__ */ j.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ j.createElement(e, t) : /* @__PURE__ */ j.createElement(uF, t);
}
var un = /* @__PURE__ */ function(e) {
  function t() {
    return AF(this, t), EF(this, t, arguments);
  }
  return MF(t, e), PF(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, y = i.offset, b = i.payload, m = i.payloadUniqBy, g = i.position, _ = i.reverseDirection, O = i.useTranslate3d, A = i.viewBox, P = i.wrapperStyle, x = b ?? [];
      h && x.length && (x = cC(b.filter(function(T) {
        return T.value != null && (T.hide !== !0 || n.props.includeHidden);
      }), m, IF));
      var S = x.length > 0;
      return /* @__PURE__ */ j.createElement(_F, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: d,
        hasPayload: S,
        offset: y,
        position: g,
        reverseDirection: _,
        useTranslate3d: O,
        viewBox: A,
        wrapperStyle: P
      }, $F(f, iA(iA({}, this.props), {}, {
        payload: x
      })));
    }
  }]);
}(Nr);
eb(un, "displayName", "Tooltip");
eb(un, "defaultProps", {
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
  isAnimationActive: !xi.isSsr,
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
var zv, aA;
function jF() {
  if (aA) return zv;
  aA = 1;
  var e = vn(), t = function() {
    return e.Date.now();
  };
  return zv = t, zv;
}
var Uv, oA;
function kF() {
  if (oA) return Uv;
  oA = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Uv = t, Uv;
}
var Hv, uA;
function DF() {
  if (uA) return Hv;
  uA = 1;
  var e = kF(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Hv = r, Hv;
}
var Gv, sA;
function xC() {
  if (sA) return Gv;
  sA = 1;
  var e = DF(), t = bi(), r = bo(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
  return Gv = l, Gv;
}
var Kv, cA;
function NF() {
  if (cA) return Kv;
  cA = 1;
  var e = bi(), t = jF(), r = xC(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(s, l, f) {
    var d, h, v, y, b, m, g = 0, _ = !1, O = !1, A = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    l = r(l) || 0, e(f) && (_ = !!f.leading, O = "maxWait" in f, v = O ? i(r(f.maxWait) || 0, l) : v, A = "trailing" in f ? !!f.trailing : A);
    function P(L) {
      var F = d, G = h;
      return d = h = void 0, g = L, y = s.apply(G, F), y;
    }
    function x(L) {
      return g = L, b = setTimeout(R, l), _ ? P(L) : y;
    }
    function S(L) {
      var F = L - m, G = L - g, U = l - F;
      return O ? a(U, v - G) : U;
    }
    function T(L) {
      var F = L - m, G = L - g;
      return m === void 0 || F >= l || F < 0 || O && G >= v;
    }
    function R() {
      var L = t();
      if (T(L))
        return I(L);
      b = setTimeout(R, S(L));
    }
    function I(L) {
      return b = void 0, A && d ? P(L) : (d = h = void 0, y);
    }
    function q() {
      b !== void 0 && clearTimeout(b), g = 0, d = m = h = b = void 0;
    }
    function $() {
      return b === void 0 ? y : I(t());
    }
    function D() {
      var L = t(), F = T(L);
      if (d = arguments, h = this, m = L, F) {
        if (b === void 0)
          return x(m);
        if (O)
          return clearTimeout(b), b = setTimeout(R, l), P(m);
      }
      return b === void 0 && (b = setTimeout(R, l)), y;
    }
    return D.cancel = q, D.flush = $, D;
  }
  return Kv = o, Kv;
}
var Vv, lA;
function LF() {
  if (lA) return Vv;
  lA = 1;
  var e = NF(), t = bi(), r = "Expected a function";
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
  return Vv = n, Vv;
}
var qF = LF();
const wC = /* @__PURE__ */ Je(qF);
function wu(e) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wu(e);
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
function ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fA(Object(r), !0).forEach(function(n) {
      BF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BF(e, t, r) {
  return t = FF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FF(e) {
  var t = WF(e, "string");
  return wu(t) == "symbol" ? t : t + "";
}
function WF(e, t) {
  if (wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zF(e, t) {
  return KF(e) || GF(e, t) || HF(e, t) || UF();
}
function UF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HF(e, t) {
  if (e) {
    if (typeof e == "string") return dA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dA(e, t);
  }
}
function dA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GF(e, t) {
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
function KF(e) {
  if (Array.isArray(e)) return e;
}
var VF = /* @__PURE__ */ Zr(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, y = e.children, b = e.debounce, m = b === void 0 ? 0 : b, g = e.id, _ = e.className, O = e.onResize, A = e.style, P = A === void 0 ? {} : A, x = Yt(null), S = Yt();
  S.current = O, iT(t, function() {
    return Object.defineProperty(x.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), x.current;
      },
      configurable: !0
    });
  });
  var T = Zt({
    containerWidth: i.width,
    containerHeight: i.height
  }), R = zF(T, 2), I = R[0], q = R[1], $ = hi(function(L, F) {
    q(function(G) {
      var U = Math.round(L), X = Math.round(F);
      return G.containerWidth === U && G.containerHeight === X ? G : {
        containerWidth: U,
        containerHeight: X
      };
    });
  }, []);
  Xt(function() {
    var L = function(ie) {
      var H, K = ie[0].contentRect, re = K.width, se = K.height;
      $(re, se), (H = S.current) === null || H === void 0 || H.call(S, re, se);
    };
    m > 0 && (L = wC(L, m, {
      trailing: !0,
      leading: !1
    }));
    var F = new ResizeObserver(L), G = x.current.getBoundingClientRect(), U = G.width, X = G.height;
    return $(U, X), F.observe(x.current), function() {
      F.disconnect();
    };
  }, [$, m]);
  var D = go(function() {
    var L = I.containerWidth, F = I.containerHeight;
    if (L < 0 || F < 0)
      return null;
    Yr(Wi(o) || Wi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l), Yr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var G = Wi(o) ? L : o, U = Wi(l) ? F : l;
    r && r > 0 && (G ? U = G / r : U && (G = U * r), v && U > v && (U = v)), Yr(G > 0 || U > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, G, U, o, l, d, h, r);
    var X = !Array.isArray(y) && kn(y.type).endsWith("Chart");
    return j.Children.map(y, function(Z) {
      return /* @__PURE__ */ j.isValidElement(Z) ? /* @__PURE__ */ At(Z, ac({
        width: G,
        height: U
      }, X ? {
        style: ac({
          height: "100%",
          width: "100%",
          maxHeight: U,
          maxWidth: G
        }, Z.props.style)
      } : {})) : Z;
    });
  }, [r, y, l, v, h, d, I, o]);
  return /* @__PURE__ */ j.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: Me("recharts-responsive-container", _),
    style: ac(ac({}, P), {}, {
      width: o,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: x
  }, D);
}), Fl = function(t) {
  return null;
};
Fl.displayName = "Cell";
function _u(e) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _u(e);
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
function gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hA(Object(r), !0).forEach(function(n) {
      YF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YF(e, t, r) {
  return t = XF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XF(e) {
  var t = ZF(e, "string");
  return _u(t) == "symbol" ? t : t + "";
}
function ZF(e, t) {
  if (_u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sa = {
  widthCache: {},
  cacheCount: 0
}, JF = 2e3, QF = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, pA = "recharts_measurement_span";
function eW(e) {
  var t = gg({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var lu = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || xi.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = eW(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById(pA);
    a || (a = document.createElement("span"), a.setAttribute("id", pA), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = gg(gg({}, QF), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = {
      width: s.width,
      height: s.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > JF && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, tW = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Ou(e) {
  "@babel/helpers - typeof";
  return Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ou(e);
}
function jc(e, t) {
  return aW(e) || iW(e, t) || nW(e, t) || rW();
}
function rW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nW(e, t) {
  if (e) {
    if (typeof e == "string") return vA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vA(e, t);
  }
}
function vA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iW(e, t) {
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
function aW(e) {
  if (Array.isArray(e)) return e;
}
function oW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sW(n.key), n);
  }
}
function uW(e, t, r) {
  return t && yA(e.prototype, t), r && yA(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sW(e) {
  var t = cW(e, "string");
  return Ou(t) == "symbol" ? t : t + "";
}
function cW(e, t) {
  if (Ou(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ou(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, mA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, lW = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, fW = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, _C = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, dW = Object.keys(_C), Ca = "NaN";
function hW(e, t) {
  return e * _C[t];
}
var oc = /* @__PURE__ */ function() {
  function e(t, r) {
    oW(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !lW.test(r) && (this.num = NaN, this.unit = ""), dW.includes(r) && (this.num = hW(t, r), this.unit = "px");
  }
  return uW(e, [{
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
      var n, i = (n = fW.exec(r)) !== null && n !== void 0 ? n : [], a = jc(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function OC(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = gA.exec(t)) !== null && r !== void 0 ? r : [], i = jc(n, 4), a = i[1], o = i[2], s = i[3], l = oc.parse(a ?? ""), f = oc.parse(s ?? ""), d = o === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(gA, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = mA.exec(t)) !== null && h !== void 0 ? h : [], y = jc(v, 4), b = y[1], m = y[2], g = y[3], _ = oc.parse(b ?? ""), O = oc.parse(g ?? ""), A = m === "+" ? _.add(O) : _.subtract(O);
    if (A.isNaN())
      return Ca;
    t = t.replace(mA, A.toString());
  }
  return t;
}
var bA = /\(([^()]*)\)/;
function pW(e) {
  for (var t = e; t.includes("("); ) {
    var r = bA.exec(t), n = jc(r, 2), i = n[1];
    t = t.replace(bA, OC(i));
  }
  return t;
}
function vW(e) {
  var t = e.replace(/\s+/g, "");
  return t = pW(t), t = OC(t), t;
}
function yW(e) {
  try {
    return vW(e);
  } catch {
    return Ca;
  }
}
function Yv(e) {
  var t = yW(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var gW = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], mW = ["dx", "dy", "angle", "className", "breakAll"];
function mg() {
  return mg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mg.apply(this, arguments);
}
function xA(e, t) {
  if (e == null) return {};
  var r = bW(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wA(e, t) {
  return OW(e) || _W(e, t) || wW(e, t) || xW();
}
function xW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wW(e, t) {
  if (e) {
    if (typeof e == "string") return _A(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _A(e, t);
  }
}
function _A(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _W(e, t) {
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
function OW(e) {
  if (Array.isArray(e)) return e;
}
var AC = /[ \f\n\r\t\v\u2028\u2029]+/, SC = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Ee(r) || (n ? a = r.toString().split("") : a = r.toString().split(AC));
    var o = a.map(function(l) {
      return {
        word: l,
        width: lu(l, i).width
      };
    }), s = n ? 0 : lu(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, AW = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, l = t.style, f = t.breakAll, d = ce(o), h = s, v = function() {
    var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return G.reduce(function(U, X) {
      var Z = X.word, ie = X.width, H = U[U.length - 1];
      if (H && (i == null || a || H.width + ie + n < Number(i)))
        H.words.push(Z), H.width += ie + n;
      else {
        var K = {
          words: [Z],
          width: ie
        };
        U.push(K);
      }
      return U;
    }, []);
  }, y = v(r), b = function(G) {
    return G.reduce(function(U, X) {
      return U.width > X.width ? U : X;
    });
  };
  if (!d)
    return y;
  for (var m = "…", g = function(G) {
    var U = h.slice(0, G), X = SC({
      breakAll: f,
      style: l,
      children: U + m
    }).wordsWithComputedWidth, Z = v(X), ie = Z.length > o || b(Z).width > Number(i);
    return [ie, Z];
  }, _ = 0, O = h.length - 1, A = 0, P; _ <= O && A <= h.length - 1; ) {
    var x = Math.floor((_ + O) / 2), S = x - 1, T = g(S), R = wA(T, 2), I = R[0], q = R[1], $ = g(x), D = wA($, 1), L = D[0];
    if (!I && !L && (_ = x + 1), I && L && (O = x - 1), !I && L) {
      P = q;
      break;
    }
    A++;
  }
  return P || y;
}, OA = function(t) {
  var r = Ee(t) ? [] : t.toString().split(AC);
  return [{
    words: r
  }];
}, SW = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !xi.isSsr) {
    var l, f, d = SC({
      breakAll: o,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return OA(i);
    return AW({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, l, f, r, n);
  }
  return OA(i);
}, AA = "#808080", vi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, y = v === void 0 ? "start" : v, b = t.verticalAnchor, m = b === void 0 ? "end" : b, g = t.fill, _ = g === void 0 ? AA : g, O = xA(t, gW), A = go(function() {
    return SW({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), P = O.dx, x = O.dy, S = O.angle, T = O.className, R = O.breakAll, I = xA(O, mW);
  if (!Et(n) || !Et(a))
    return null;
  var q = n + (ce(P) ? P : 0), $ = a + (ce(x) ? x : 0), D;
  switch (m) {
    case "start":
      D = Yv("calc(".concat(f, ")"));
      break;
    case "middle":
      D = Yv("calc(".concat((A.length - 1) / 2, " * -").concat(s, " + (").concat(f, " / 2))"));
      break;
    default:
      D = Yv("calc(".concat(A.length - 1, " * -").concat(s, ")"));
      break;
  }
  var L = [];
  if (h) {
    var F = A[0].width, G = O.width;
    L.push("scale(".concat((ce(G) ? G / F : 1) / F, ")"));
  }
  return S && L.push("rotate(".concat(S, ", ").concat(q, ", ").concat($, ")")), L.length && (I.transform = L.join(" ")), /* @__PURE__ */ j.createElement("text", mg({}, we(I, !0), {
    x: q,
    y: $,
    className: Me("recharts-text", T),
    textAnchor: y,
    fill: _.includes("url") ? AA : _
  }), A.map(function(U, X) {
    var Z = U.words.join(R ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ j.createElement("tspan", {
        x: q,
        dy: X === 0 ? D : s,
        key: "".concat(Z, "-").concat(X)
      }, Z)
    );
  }));
};
function pi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function PW(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function tb(e) {
  let t, r, n;
  e.length !== 2 ? (t = pi, r = (s, l) => pi(e(s), l), n = (s, l) => e(s) - l) : (t = e === pi || e === PW ? e : EW, r = e, n = e);
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
function EW() {
  return 0;
}
function PC(e) {
  return e === null ? NaN : +e;
}
function* TW(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const CW = tb(pi), rs = CW.right;
tb(PC).center;
class SA extends Map {
  constructor(t, r = IW) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(PA(this, t));
  }
  has(t) {
    return super.has(PA(this, t));
  }
  set(t, r) {
    return super.set(MW(this, t), r);
  }
  delete(t) {
    return super.delete(RW(this, t));
  }
}
function PA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function MW({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function RW({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function IW(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function $W(e = pi) {
  if (e === pi) return EC;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function EC(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const jW = Math.sqrt(50), kW = Math.sqrt(10), DW = Math.sqrt(2);
function kc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= jW ? 10 : a >= kW ? 5 : a >= DW ? 2 : 1;
  let s, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, s = Math.round(e * f), l = Math.round(t * f), s / f < e && ++s, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * o, s = Math.round(e / f), l = Math.round(t / f), s * f < e && ++s, l * f > t && --l), l < s && 0.5 <= r && r < 2 ? kc(e, t, r * 2) : [s, l, f];
}
function bg(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? kc(t, e, r) : kc(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n)
    if (o < 0) for (let f = 0; f < s; ++f) l[f] = (a - f) / -o;
    else for (let f = 0; f < s; ++f) l[f] = (a - f) * o;
  else if (o < 0) for (let f = 0; f < s; ++f) l[f] = (i + f) / -o;
  else for (let f = 0; f < s; ++f) l[f] = (i + f) * o;
  return l;
}
function xg(e, t, r) {
  return t = +t, e = +e, r = +r, kc(e, t, r)[2];
}
function wg(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? xg(t, e, r) : xg(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function EA(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function TA(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function TC(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? EC : $W(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), y = Math.max(r, Math.floor(t - f * h / l + v)), b = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      TC(e, t, y, b, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Jo(e, r, t), i(e[n], a) > 0 && Jo(e, r, n); o < s; ) {
      for (Jo(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? Jo(e, r, s) : (++s, Jo(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Jo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function NW(e, t, r) {
  if (e = Float64Array.from(TW(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return TA(e);
    if (t >= 1) return EA(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = EA(TC(e, a).subarray(0, a + 1)), s = TA(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function LW(e, t, r = PC) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function qW(e, t, r) {
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
const _g = Symbol("implicit");
function rb() {
  var e = new SA(), t = [], r = [], n = _g;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== _g) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new SA();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return rb(t, r).unknown(n);
  }, Lr.apply(i, arguments), i;
}
function Au() {
  var e = rb().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, y = i < n, b = y ? i : n, m = y ? n : i;
    a = (m - b) / Math.max(1, v - l + f * 2), s && (a = Math.floor(a)), b += (m - b - a * (v - l)) * d, o = a * (1 - l), s && (b = Math.round(b), o = Math.round(o));
    var g = qW(v).map(function(_) {
      return b + a * _;
    });
    return r(y ? g.reverse() : g);
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
    return Au(t(), [n, i]).round(s).paddingInner(l).paddingOuter(f).align(d);
  }, Lr.apply(h(), arguments);
}
function CC(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return CC(t());
  }, e;
}
function fu() {
  return CC(Au.apply(null, arguments).paddingInner(1));
}
function nb(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function MC(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ns() {
}
var Su = 0.7, Dc = 1 / Su, Na = "\\s*([+-]?\\d+)\\s*", Pu = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", BW = /^#([0-9a-f]{3,8})$/, FW = new RegExp(`^rgb\\(${Na},${Na},${Na}\\)$`), WW = new RegExp(`^rgb\\(${ln},${ln},${ln}\\)$`), zW = new RegExp(`^rgba\\(${Na},${Na},${Na},${Pu}\\)$`), UW = new RegExp(`^rgba\\(${ln},${ln},${ln},${Pu}\\)$`), HW = new RegExp(`^hsl\\(${Pu},${ln},${ln}\\)$`), GW = new RegExp(`^hsla\\(${Pu},${ln},${ln},${Pu}\\)$`), CA = {
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
nb(ns, Eu, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: MA,
  // Deprecated! Use color.formatHex.
  formatHex: MA,
  formatHex8: KW,
  formatHsl: VW,
  formatRgb: RA,
  toString: RA
});
function MA() {
  return this.rgb().formatHex();
}
function KW() {
  return this.rgb().formatHex8();
}
function VW() {
  return RC(this).formatHsl();
}
function RA() {
  return this.rgb().formatRgb();
}
function Eu(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = BW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? IA(t) : r === 3 ? new rr(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? uc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? uc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = FW.exec(e)) ? new rr(t[1], t[2], t[3], 1) : (t = WW.exec(e)) ? new rr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = zW.exec(e)) ? uc(t[1], t[2], t[3], t[4]) : (t = UW.exec(e)) ? uc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = HW.exec(e)) ? kA(t[1], t[2] / 100, t[3] / 100, 1) : (t = GW.exec(e)) ? kA(t[1], t[2] / 100, t[3] / 100, t[4]) : CA.hasOwnProperty(e) ? IA(CA[e]) : e === "transparent" ? new rr(NaN, NaN, NaN, 0) : null;
}
function IA(e) {
  return new rr(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function uc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new rr(e, t, r, n);
}
function YW(e) {
  return e instanceof ns || (e = Eu(e)), e ? (e = e.rgb(), new rr(e.r, e.g, e.b, e.opacity)) : new rr();
}
function Og(e, t, r, n) {
  return arguments.length === 1 ? YW(e) : new rr(e, t, r, n ?? 1);
}
function rr(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
nb(rr, Og, MC(ns, {
  brighter(e) {
    return e = e == null ? Dc : Math.pow(Dc, e), new rr(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Su : Math.pow(Su, e), new rr(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rr(Yi(this.r), Yi(this.g), Yi(this.b), Nc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $A,
  // Deprecated! Use color.formatHex.
  formatHex: $A,
  formatHex8: XW,
  formatRgb: jA,
  toString: jA
}));
function $A() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}`;
}
function XW() {
  return `#${zi(this.r)}${zi(this.g)}${zi(this.b)}${zi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jA() {
  const e = Nc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yi(this.r)}, ${Yi(this.g)}, ${Yi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Nc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zi(e) {
  return e = Yi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function kA(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kr(e, t, r, n);
}
function RC(e) {
  if (e instanceof Kr) return new Kr(e.h, e.s, e.l, e.opacity);
  if (e instanceof ns || (e = Eu(e)), !e) return new Kr();
  if (e instanceof Kr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Kr(o, s, l, e.opacity);
}
function ZW(e, t, r, n) {
  return arguments.length === 1 ? RC(e) : new Kr(e, t, r, n ?? 1);
}
function Kr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
nb(Kr, ZW, MC(ns, {
  brighter(e) {
    return e = e == null ? Dc : Math.pow(Dc, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Su : Math.pow(Su, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new rr(
      Xv(e >= 240 ? e - 240 : e + 120, i, n),
      Xv(e, i, n),
      Xv(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Kr(DA(this.h), sc(this.s), sc(this.l), Nc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Nc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${DA(this.h)}, ${sc(this.s) * 100}%, ${sc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function DA(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function sc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Xv(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ib = (e) => () => e;
function JW(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function QW(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function ez(e) {
  return (e = +e) == 1 ? IC : function(t, r) {
    return r - t ? QW(t, r, e) : ib(isNaN(t) ? r : t);
  };
}
function IC(e, t) {
  var r = t - e;
  return r ? JW(e, r) : ib(isNaN(e) ? t : e);
}
const NA = function e(t) {
  var r = ez(t);
  function n(i, a) {
    var o = r((i = Og(i)).r, (a = Og(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), f = IC(i.opacity, a.opacity);
    return function(d) {
      return i.r = o(d), i.g = s(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function tz(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function rz(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function nz(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Oo(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function iz(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Lc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function az(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Oo(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Ag = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Zv = new RegExp(Ag.source, "g");
function oz(e) {
  return function() {
    return e;
  };
}
function uz(e) {
  return function(t) {
    return e(t) + "";
  };
}
function sz(e, t) {
  var r = Ag.lastIndex = Zv.lastIndex = 0, n, i, a, o = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (n = Ag.exec(e)) && (i = Zv.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Lc(n, i) })), r = Zv.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? uz(l[0].x) : oz(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) s[(h = l[d]).i] = h.x(f);
    return s.join("");
  });
}
function Oo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ib(t) : (r === "number" ? Lc : r === "string" ? (n = Eu(t)) ? (t = n, NA) : sz : t instanceof Eu ? NA : t instanceof Date ? iz : rz(t) ? tz : Array.isArray(t) ? nz : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? az : Lc)(e, t);
}
function ab(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function cz(e, t) {
  t === void 0 && (t = e, e = Oo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function lz(e) {
  return function() {
    return e;
  };
}
function qc(e) {
  return +e;
}
var LA = [0, 1];
function Vt(e) {
  return e;
}
function Sg(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : lz(isNaN(t) ? NaN : 0.5);
}
function fz(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function dz(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Sg(i, n), a = r(o, a)) : (n = Sg(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function hz(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Sg(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var l = rs(e, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function is(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Wl() {
  var e = LA, t = LA, r = Oo, n, i, a, o = Vt, s, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return o !== Vt && (o = fz(e[0], e[v - 1])), s = v > 2 ? hz : dz, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = s(e.map(n), t, r)))(n(o(v)));
  }
  return h.invert = function(v) {
    return o(i((f || (f = s(t, e.map(n), Lc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, qc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = ab, d();
  }, h.clamp = function(v) {
    return arguments.length ? (o = v ? !0 : Vt, d()) : o !== Vt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, y) {
    return n = v, i = y, d();
  };
}
function ob() {
  return Wl()(Vt, Vt);
}
function pz(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Bc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Ha(e) {
  return e = Bc(Math.abs(e)), e ? e[1] : NaN;
}
function vz(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function yz(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var gz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tu(e) {
  if (!(t = gz.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ub({
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
Tu.prototype = ub.prototype;
function ub(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ub.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function mz(e) {
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
var $C;
function bz(e, t) {
  var r = Bc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - ($C = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Bc(e, Math.max(0, t + a - 1))[0];
}
function qA(e, t) {
  var r = Bc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const BA = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pz,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => qA(e * 100, t),
  r: qA,
  s: bz,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function FA(e) {
  return e;
}
var WA = Array.prototype.map, zA = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function xz(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? FA : vz(WA.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? FA : yz(WA.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = Tu(h);
    var v = h.fill, y = h.align, b = h.sign, m = h.symbol, g = h.zero, _ = h.width, O = h.comma, A = h.precision, P = h.trim, x = h.type;
    x === "n" ? (O = !0, x = "g") : BA[x] || (A === void 0 && (A = 12), P = !0, x = "g"), (g || v === "0" && y === "=") && (g = !0, v = "0", y = "=");
    var S = m === "$" ? r : m === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", T = m === "$" ? n : /[%p]/.test(x) ? o : "", R = BA[x], I = /[defgprs%]/.test(x);
    A = A === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function q($) {
      var D = S, L = T, F, G, U;
      if (x === "c")
        L = R($) + L, $ = "";
      else {
        $ = +$;
        var X = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? l : R(Math.abs($), A), P && ($ = mz($)), X && +$ == 0 && b !== "+" && (X = !1), D = (X ? b === "(" ? b : s : b === "-" || b === "(" ? "" : b) + D, L = (x === "s" ? zA[8 + $C / 3] : "") + L + (X && b === "(" ? ")" : ""), I) {
          for (F = -1, G = $.length; ++F < G; )
            if (U = $.charCodeAt(F), 48 > U || U > 57) {
              L = (U === 46 ? i + $.slice(F + 1) : $.slice(F)) + L, $ = $.slice(0, F);
              break;
            }
        }
      }
      O && !g && ($ = t($, 1 / 0));
      var Z = D.length + $.length + L.length, ie = Z < _ ? new Array(_ - Z + 1).join(v) : "";
      switch (O && g && ($ = t(ie + $, ie.length ? _ - L.length : 1 / 0), ie = ""), y) {
        case "<":
          $ = D + $ + L + ie;
          break;
        case "=":
          $ = D + ie + $ + L;
          break;
        case "^":
          $ = ie.slice(0, Z = ie.length >> 1) + D + $ + L + ie.slice(Z);
          break;
        default:
          $ = ie + D + $ + L;
          break;
      }
      return a($);
    }
    return q.toString = function() {
      return h + "";
    }, q;
  }
  function d(h, v) {
    var y = f((h = Tu(h), h.type = "f", h)), b = Math.max(-8, Math.min(8, Math.floor(Ha(v) / 3))) * 3, m = Math.pow(10, -b), g = zA[8 + b / 3];
    return function(_) {
      return y(m * _) + g;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var cc, sb, jC;
wz({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function wz(e) {
  return cc = xz(e), sb = cc.format, jC = cc.formatPrefix, cc;
}
function _z(e) {
  return Math.max(0, -Ha(Math.abs(e)));
}
function Oz(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ha(t) / 3))) * 3 - Ha(Math.abs(e)));
}
function Az(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ha(t) - Ha(e)) + 1;
}
function kC(e, t, r, n) {
  var i = wg(e, t, r), a;
  switch (n = Tu(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = Oz(i, o)) && (n.precision = a), jC(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = Az(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = _z(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return sb(n);
}
function wi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return bg(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return kC(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], l, f, d = 10;
    for (s < o && (f = o, o = s, s = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = xg(o, s, r), f === l)
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
function Fc() {
  var e = ob();
  return e.copy = function() {
    return is(e, Fc());
  }, Lr.apply(e, arguments), wi(e);
}
function DC(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, qc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return DC(e).unknown(t);
  }, e = arguments.length ? Array.from(e, qc) : [0, 1], wi(r);
}
function NC(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function UA(e) {
  return Math.log(e);
}
function HA(e) {
  return Math.exp(e);
}
function Sz(e) {
  return -Math.log(-e);
}
function Pz(e) {
  return -Math.exp(-e);
}
function Ez(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Tz(e) {
  return e === 10 ? Ez : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Cz(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function GA(e) {
  return (t, r) => -e(-t, r);
}
function cb(e) {
  const t = e(UA, HA), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = Cz(n), a = Tz(n), r()[0] < 0 ? (i = GA(i), a = GA(a), e(Sz, Pz)) : e(UA, HA), t;
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
    let v = i(f), y = i(d), b, m;
    const g = s == null ? 10 : +s;
    let _ = [];
    if (!(n % 1) && y - v < g) {
      if (v = Math.floor(v), y = Math.ceil(y), f > 0) {
        for (; v <= y; ++v)
          for (b = 1; b < n; ++b)
            if (m = v < 0 ? b / a(-v) : b * a(v), !(m < f)) {
              if (m > d) break;
              _.push(m);
            }
      } else for (; v <= y; ++v)
        for (b = n - 1; b >= 1; --b)
          if (m = v > 0 ? b / a(-v) : b * a(v), !(m < f)) {
            if (m > d) break;
            _.push(m);
          }
      _.length * 2 < g && (_ = bg(f, d, g));
    } else
      _ = bg(v, y, Math.min(y - v, g)).map(a);
    return h ? _.reverse() : _;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Tu(l)).precision == null && (l.trim = !0), l = sb(l)), s === 1 / 0) return l;
    const f = Math.max(1, n * s / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(NC(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function LC() {
  const e = cb(Wl()).domain([1, 10]);
  return e.copy = () => is(e, LC()).base(e.base()), Lr.apply(e, arguments), e;
}
function KA(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function VA(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function lb(e) {
  var t = 1, r = e(KA(t), VA(t));
  return r.constant = function(n) {
    return arguments.length ? e(KA(t = +n), VA(t)) : t;
  }, wi(r);
}
function qC() {
  var e = lb(Wl());
  return e.copy = function() {
    return is(e, qC()).constant(e.constant());
  }, Lr.apply(e, arguments);
}
function YA(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Mz(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Rz(e) {
  return e < 0 ? -e * e : e * e;
}
function fb(e) {
  var t = e(Vt, Vt), r = 1;
  function n() {
    return r === 1 ? e(Vt, Vt) : r === 0.5 ? e(Mz, Rz) : e(YA(r), YA(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, wi(t);
}
function db() {
  var e = fb(Wl());
  return e.copy = function() {
    return is(e, db()).exponent(e.exponent());
  }, Lr.apply(e, arguments), e;
}
function Iz() {
  return db.apply(null, arguments).exponent(0.5);
}
function XA(e) {
  return Math.sign(e) * e * e;
}
function $z(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function BC() {
  var e = ob(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = $z(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(XA(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, qc)).map(XA)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return BC(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Lr.apply(i, arguments), wi(i);
}
function FC() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = LW(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[rs(r, o)];
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
    return e.sort(pi), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return FC().domain(e).range(t).unknown(n);
  }, Lr.apply(a, arguments);
}
function WC() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[rs(n, l, 0, r)] : a;
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
    return WC().domain([e, t]).range(i).unknown(a);
  }, Lr.apply(wi(o), arguments);
}
function zC() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[rs(e, a, 0, n)] : r;
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
    return zC().domain(e).range(t).unknown(r);
  }, Lr.apply(i, arguments);
}
const Jv = /* @__PURE__ */ new Date(), Qv = /* @__PURE__ */ new Date();
function Tt(e, t, r, n) {
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
  }, i.filter = (a) => Tt((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Jv.setTime(+a), Qv.setTime(+o), e(Jv), e(Qv), Math.floor(r(Jv, Qv))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Wc = Tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Wc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Wc);
Wc.range;
const In = 1e3, jr = In * 60, $n = jr * 60, Nn = $n * 24, hb = Nn * 7, ZA = Nn * 30, ey = Nn * 365, Ui = Tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getUTCSeconds());
Ui.range;
const pb = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * In);
}, (e, t) => {
  e.setTime(+e + t * jr);
}, (e, t) => (t - e) / jr, (e) => e.getMinutes());
pb.range;
const vb = Tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * jr);
}, (e, t) => (t - e) / jr, (e) => e.getUTCMinutes());
vb.range;
const yb = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * In - e.getMinutes() * jr);
}, (e, t) => {
  e.setTime(+e + t * $n);
}, (e, t) => (t - e) / $n, (e) => e.getHours());
yb.range;
const gb = Tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $n);
}, (e, t) => (t - e) / $n, (e) => e.getUTCHours());
gb.range;
const as = Tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * jr) / Nn,
  (e) => e.getDate() - 1
);
as.range;
const zl = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nn, (e) => e.getUTCDate() - 1);
zl.range;
const UC = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nn, (e) => Math.floor(e / Nn));
UC.range;
function oa(e) {
  return Tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * jr) / hb);
}
const Ul = oa(0), zc = oa(1), jz = oa(2), kz = oa(3), Ga = oa(4), Dz = oa(5), Nz = oa(6);
Ul.range;
zc.range;
jz.range;
kz.range;
Ga.range;
Dz.range;
Nz.range;
function ua(e) {
  return Tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / hb);
}
const Hl = ua(0), Uc = ua(1), Lz = ua(2), qz = ua(3), Ka = ua(4), Bz = ua(5), Fz = ua(6);
Hl.range;
Uc.range;
Lz.range;
qz.range;
Ka.range;
Bz.range;
Fz.range;
const mb = Tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
mb.range;
const bb = Tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
bb.range;
const Ln = Tt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ln.range;
const qn = Tt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
qn.range;
function HC(e, t, r, n, i, a) {
  const o = [
    [Ui, 1, In],
    [Ui, 5, 5 * In],
    [Ui, 15, 15 * In],
    [Ui, 30, 30 * In],
    [a, 1, jr],
    [a, 5, 5 * jr],
    [a, 15, 15 * jr],
    [a, 30, 30 * jr],
    [i, 1, $n],
    [i, 3, 3 * $n],
    [i, 6, 6 * $n],
    [i, 12, 12 * $n],
    [n, 1, Nn],
    [n, 2, 2 * Nn],
    [r, 1, hb],
    [t, 1, ZA],
    [t, 3, 3 * ZA],
    [e, 1, ey]
  ];
  function s(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const y = h && typeof h.range == "function" ? h : l(f, d, h), b = y ? y.range(f, +d + 1) : [];
    return v ? b.reverse() : b;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, y = tb(([, , g]) => g).right(o, v);
    if (y === o.length) return e.every(wg(f / ey, d / ey, h));
    if (y === 0) return Wc.every(Math.max(wg(f, d, h), 1));
    const [b, m] = o[v / o[y - 1][2] < o[y][2] / v ? y - 1 : y];
    return b.every(m);
  }
  return [s, l];
}
const [Wz, zz] = HC(qn, bb, Hl, UC, gb, vb), [Uz, Hz] = HC(Ln, mb, Ul, as, yb, pb);
function ty(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ry(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Qo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Gz(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, l = e.shortMonths, f = eu(i), d = tu(i), h = eu(a), v = tu(a), y = eu(o), b = tu(o), m = eu(s), g = tu(s), _ = eu(l), O = tu(l), A = {
    a: X,
    A: Z,
    b: ie,
    B: H,
    c: null,
    d: nS,
    e: nS,
    f: vU,
    g: SU,
    G: EU,
    H: dU,
    I: hU,
    j: pU,
    L: GC,
    m: yU,
    M: gU,
    p: K,
    q: re,
    Q: oS,
    s: uS,
    S: mU,
    u: bU,
    U: xU,
    V: wU,
    w: _U,
    W: OU,
    x: null,
    X: null,
    y: AU,
    Y: PU,
    Z: TU,
    "%": aS
  }, P = {
    a: se,
    A: de,
    b: ye,
    B: me,
    c: null,
    d: iS,
    e: iS,
    f: IU,
    g: WU,
    G: UU,
    H: CU,
    I: MU,
    j: RU,
    L: VC,
    m: $U,
    M: jU,
    p: he,
    q: pe,
    Q: oS,
    s: uS,
    S: kU,
    u: DU,
    U: NU,
    V: LU,
    w: qU,
    W: BU,
    x: null,
    X: null,
    y: FU,
    Y: zU,
    Z: HU,
    "%": aS
  }, x = {
    a: q,
    A: $,
    b: D,
    B: L,
    c: F,
    d: tS,
    e: tS,
    f: sU,
    g: eS,
    G: QA,
    H: rS,
    I: rS,
    j: iU,
    L: uU,
    m: nU,
    M: aU,
    p: I,
    q: rU,
    Q: lU,
    s: fU,
    S: oU,
    u: Zz,
    U: Jz,
    V: Qz,
    w: Xz,
    W: eU,
    x: G,
    X: U,
    y: eS,
    Y: QA,
    Z: tU,
    "%": cU
  };
  A.x = S(r, A), A.X = S(n, A), A.c = S(t, A), P.x = S(r, P), P.X = S(n, P), P.c = S(t, P);
  function S(te, le) {
    return function(be) {
      var z = [], Te = -1, oe = 0, Be = te.length, Qe, Xe, or;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Te < Be; )
        te.charCodeAt(Te) === 37 && (z.push(te.slice(oe, Te)), (Xe = JA[Qe = te.charAt(++Te)]) != null ? Qe = te.charAt(++Te) : Xe = Qe === "e" ? " " : "0", (or = le[Qe]) && (Qe = or(be, Xe)), z.push(Qe), oe = Te + 1);
      return z.push(te.slice(oe, Te)), z.join("");
    };
  }
  function T(te, le) {
    return function(be) {
      var z = Qo(1900, void 0, 1), Te = R(z, te, be += "", 0), oe, Be;
      if (Te != be.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (le && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (oe = ry(Qo(z.y, 0, 1)), Be = oe.getUTCDay(), oe = Be > 4 || Be === 0 ? Uc.ceil(oe) : Uc(oe), oe = zl.offset(oe, (z.V - 1) * 7), z.y = oe.getUTCFullYear(), z.m = oe.getUTCMonth(), z.d = oe.getUTCDate() + (z.w + 6) % 7) : (oe = ty(Qo(z.y, 0, 1)), Be = oe.getDay(), oe = Be > 4 || Be === 0 ? zc.ceil(oe) : zc(oe), oe = as.offset(oe, (z.V - 1) * 7), z.y = oe.getFullYear(), z.m = oe.getMonth(), z.d = oe.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), Be = "Z" in z ? ry(Qo(z.y, 0, 1)).getUTCDay() : ty(Qo(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (Be + 5) % 7 : z.w + z.U * 7 - (Be + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, ry(z)) : ty(z);
    };
  }
  function R(te, le, be, z) {
    for (var Te = 0, oe = le.length, Be = be.length, Qe, Xe; Te < oe; ) {
      if (z >= Be) return -1;
      if (Qe = le.charCodeAt(Te++), Qe === 37) {
        if (Qe = le.charAt(Te++), Xe = x[Qe in JA ? le.charAt(Te++) : Qe], !Xe || (z = Xe(te, be, z)) < 0) return -1;
      } else if (Qe != be.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function I(te, le, be) {
    var z = f.exec(le.slice(be));
    return z ? (te.p = d.get(z[0].toLowerCase()), be + z[0].length) : -1;
  }
  function q(te, le, be) {
    var z = y.exec(le.slice(be));
    return z ? (te.w = b.get(z[0].toLowerCase()), be + z[0].length) : -1;
  }
  function $(te, le, be) {
    var z = h.exec(le.slice(be));
    return z ? (te.w = v.get(z[0].toLowerCase()), be + z[0].length) : -1;
  }
  function D(te, le, be) {
    var z = _.exec(le.slice(be));
    return z ? (te.m = O.get(z[0].toLowerCase()), be + z[0].length) : -1;
  }
  function L(te, le, be) {
    var z = m.exec(le.slice(be));
    return z ? (te.m = g.get(z[0].toLowerCase()), be + z[0].length) : -1;
  }
  function F(te, le, be) {
    return R(te, t, le, be);
  }
  function G(te, le, be) {
    return R(te, r, le, be);
  }
  function U(te, le, be) {
    return R(te, n, le, be);
  }
  function X(te) {
    return o[te.getDay()];
  }
  function Z(te) {
    return a[te.getDay()];
  }
  function ie(te) {
    return l[te.getMonth()];
  }
  function H(te) {
    return s[te.getMonth()];
  }
  function K(te) {
    return i[+(te.getHours() >= 12)];
  }
  function re(te) {
    return 1 + ~~(te.getMonth() / 3);
  }
  function se(te) {
    return o[te.getUTCDay()];
  }
  function de(te) {
    return a[te.getUTCDay()];
  }
  function ye(te) {
    return l[te.getUTCMonth()];
  }
  function me(te) {
    return s[te.getUTCMonth()];
  }
  function he(te) {
    return i[+(te.getUTCHours() >= 12)];
  }
  function pe(te) {
    return 1 + ~~(te.getUTCMonth() / 3);
  }
  return {
    format: function(te) {
      var le = S(te += "", A);
      return le.toString = function() {
        return te;
      }, le;
    },
    parse: function(te) {
      var le = T(te += "", !1);
      return le.toString = function() {
        return te;
      }, le;
    },
    utcFormat: function(te) {
      var le = S(te += "", P);
      return le.toString = function() {
        return te;
      }, le;
    },
    utcParse: function(te) {
      var le = T(te += "", !0);
      return le.toString = function() {
        return te;
      }, le;
    }
  };
}
var JA = { "-": "", _: " ", 0: "0" }, Rt = /^\s*\d+/, Kz = /^%/, Vz = /[\\^$*+?|[\]().{}]/g;
function We(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function Yz(e) {
  return e.replace(Vz, "\\$&");
}
function eu(e) {
  return new RegExp("^(?:" + e.map(Yz).join("|") + ")", "i");
}
function tu(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Xz(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function Zz(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function Jz(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Qz(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function eU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function QA(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function eS(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function tU(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function rU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function nU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function tS(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function iU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function rS(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function aU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function oU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function uU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function sU(e, t, r) {
  var n = Rt.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function cU(e, t, r) {
  var n = Kz.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function lU(e, t, r) {
  var n = Rt.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function fU(e, t, r) {
  var n = Rt.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function nS(e, t) {
  return We(e.getDate(), t, 2);
}
function dU(e, t) {
  return We(e.getHours(), t, 2);
}
function hU(e, t) {
  return We(e.getHours() % 12 || 12, t, 2);
}
function pU(e, t) {
  return We(1 + as.count(Ln(e), e), t, 3);
}
function GC(e, t) {
  return We(e.getMilliseconds(), t, 3);
}
function vU(e, t) {
  return GC(e, t) + "000";
}
function yU(e, t) {
  return We(e.getMonth() + 1, t, 2);
}
function gU(e, t) {
  return We(e.getMinutes(), t, 2);
}
function mU(e, t) {
  return We(e.getSeconds(), t, 2);
}
function bU(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function xU(e, t) {
  return We(Ul.count(Ln(e) - 1, e), t, 2);
}
function KC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ga(e) : Ga.ceil(e);
}
function wU(e, t) {
  return e = KC(e), We(Ga.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function _U(e) {
  return e.getDay();
}
function OU(e, t) {
  return We(zc.count(Ln(e) - 1, e), t, 2);
}
function AU(e, t) {
  return We(e.getFullYear() % 100, t, 2);
}
function SU(e, t) {
  return e = KC(e), We(e.getFullYear() % 100, t, 2);
}
function PU(e, t) {
  return We(e.getFullYear() % 1e4, t, 4);
}
function EU(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ga(e) : Ga.ceil(e), We(e.getFullYear() % 1e4, t, 4);
}
function TU(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + We(t / 60 | 0, "0", 2) + We(t % 60, "0", 2);
}
function iS(e, t) {
  return We(e.getUTCDate(), t, 2);
}
function CU(e, t) {
  return We(e.getUTCHours(), t, 2);
}
function MU(e, t) {
  return We(e.getUTCHours() % 12 || 12, t, 2);
}
function RU(e, t) {
  return We(1 + zl.count(qn(e), e), t, 3);
}
function VC(e, t) {
  return We(e.getUTCMilliseconds(), t, 3);
}
function IU(e, t) {
  return VC(e, t) + "000";
}
function $U(e, t) {
  return We(e.getUTCMonth() + 1, t, 2);
}
function jU(e, t) {
  return We(e.getUTCMinutes(), t, 2);
}
function kU(e, t) {
  return We(e.getUTCSeconds(), t, 2);
}
function DU(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function NU(e, t) {
  return We(Hl.count(qn(e) - 1, e), t, 2);
}
function YC(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ka(e) : Ka.ceil(e);
}
function LU(e, t) {
  return e = YC(e), We(Ka.count(qn(e), e) + (qn(e).getUTCDay() === 4), t, 2);
}
function qU(e) {
  return e.getUTCDay();
}
function BU(e, t) {
  return We(Uc.count(qn(e) - 1, e), t, 2);
}
function FU(e, t) {
  return We(e.getUTCFullYear() % 100, t, 2);
}
function WU(e, t) {
  return e = YC(e), We(e.getUTCFullYear() % 100, t, 2);
}
function zU(e, t) {
  return We(e.getUTCFullYear() % 1e4, t, 4);
}
function UU(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ka(e) : Ka.ceil(e), We(e.getUTCFullYear() % 1e4, t, 4);
}
function HU() {
  return "+0000";
}
function aS() {
  return "%";
}
function oS(e) {
  return +e;
}
function uS(e) {
  return Math.floor(+e / 1e3);
}
var Pa, XC, ZC;
GU({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function GU(e) {
  return Pa = Gz(e), XC = Pa.format, Pa.parse, ZC = Pa.utcFormat, Pa.utcParse, Pa;
}
function KU(e) {
  return new Date(e);
}
function VU(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function xb(e, t, r, n, i, a, o, s, l, f) {
  var d = ob(), h = d.invert, v = d.domain, y = f(".%L"), b = f(":%S"), m = f("%I:%M"), g = f("%I %p"), _ = f("%a %d"), O = f("%b %d"), A = f("%B"), P = f("%Y");
  function x(S) {
    return (l(S) < S ? y : s(S) < S ? b : o(S) < S ? m : a(S) < S ? g : n(S) < S ? i(S) < S ? _ : O : r(S) < S ? A : P)(S);
  }
  return d.invert = function(S) {
    return new Date(h(S));
  }, d.domain = function(S) {
    return arguments.length ? v(Array.from(S, VU)) : v().map(KU);
  }, d.ticks = function(S) {
    var T = v();
    return e(T[0], T[T.length - 1], S ?? 10);
  }, d.tickFormat = function(S, T) {
    return T == null ? x : f(T);
  }, d.nice = function(S) {
    var T = v();
    return (!S || typeof S.range != "function") && (S = t(T[0], T[T.length - 1], S ?? 10)), S ? v(NC(T, S)) : d;
  }, d.copy = function() {
    return is(d, xb(e, t, r, n, i, a, o, s, l, f));
  }, d;
}
function YU() {
  return Lr.apply(xb(Uz, Hz, Ln, mb, Ul, as, yb, pb, Ui, XC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function XU() {
  return Lr.apply(xb(Wz, zz, qn, bb, Hl, zl, gb, vb, Ui, ZC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Gl() {
  var e = 0, t = 1, r, n, i, a, o = Vt, s = !1, l;
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
      var y, b;
      return arguments.length ? ([y, b] = v, o = h(y, b), f) : [o(0), o(1)];
    };
  }
  return f.range = d(Oo), f.rangeRound = d(ab), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function _i(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function JC() {
  var e = wi(Gl()(Vt));
  return e.copy = function() {
    return _i(e, JC());
  }, Hn.apply(e, arguments);
}
function QC() {
  var e = cb(Gl()).domain([1, 10]);
  return e.copy = function() {
    return _i(e, QC()).base(e.base());
  }, Hn.apply(e, arguments);
}
function e2() {
  var e = lb(Gl());
  return e.copy = function() {
    return _i(e, e2()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function wb() {
  var e = fb(Gl());
  return e.copy = function() {
    return _i(e, wb()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function ZU() {
  return wb.apply(null, arguments).exponent(0.5);
}
function t2() {
  var e = [], t = Vt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((rs(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (i, a) => NW(e, a / n));
  }, r.copy = function() {
    return t2(t).domain(e);
  }, Hn.apply(r, arguments);
}
function Kl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, l, f = Vt, d, h = !1, v;
  function y(m) {
    return isNaN(m = +m) ? v : (m = 0.5 + ((m = +d(m)) - a) * (n * m < n * a ? s : l), f(h ? Math.max(0, Math.min(1, m)) : m));
  }
  y.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, i = d(e = +e), a = d(t = +t), o = d(r = +r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, y) : [e, t, r];
  }, y.clamp = function(m) {
    return arguments.length ? (h = !!m, y) : h;
  }, y.interpolator = function(m) {
    return arguments.length ? (f = m, y) : f;
  };
  function b(m) {
    return function(g) {
      var _, O, A;
      return arguments.length ? ([_, O, A] = g, f = cz(m, [_, O, A]), y) : [f(0), f(0.5), f(1)];
    };
  }
  return y.range = b(Oo), y.rangeRound = b(ab), y.unknown = function(m) {
    return arguments.length ? (v = m, y) : v;
  }, function(m) {
    return d = m, i = m(e), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, y;
  };
}
function r2() {
  var e = wi(Kl()(Vt));
  return e.copy = function() {
    return _i(e, r2());
  }, Hn.apply(e, arguments);
}
function n2() {
  var e = cb(Kl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return _i(e, n2()).base(e.base());
  }, Hn.apply(e, arguments);
}
function i2() {
  var e = lb(Kl());
  return e.copy = function() {
    return _i(e, i2()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function _b() {
  var e = fb(Kl());
  return e.copy = function() {
    return _i(e, _b()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function JU() {
  return _b.apply(null, arguments).exponent(0.5);
}
const sS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Au,
  scaleDiverging: r2,
  scaleDivergingLog: n2,
  scaleDivergingPow: _b,
  scaleDivergingSqrt: JU,
  scaleDivergingSymlog: i2,
  scaleIdentity: DC,
  scaleImplicit: _g,
  scaleLinear: Fc,
  scaleLog: LC,
  scaleOrdinal: rb,
  scalePoint: fu,
  scalePow: db,
  scaleQuantile: FC,
  scaleQuantize: WC,
  scaleRadial: BC,
  scaleSequential: JC,
  scaleSequentialLog: QC,
  scaleSequentialPow: wb,
  scaleSequentialQuantile: t2,
  scaleSequentialSqrt: ZU,
  scaleSequentialSymlog: e2,
  scaleSqrt: Iz,
  scaleSymlog: qC,
  scaleThreshold: zC,
  scaleTime: YU,
  scaleUtc: XU,
  tickFormat: kC
}, Symbol.toStringTag, { value: "Module" }));
var ny, cS;
function Vl() {
  if (cS) return ny;
  cS = 1;
  var e = bo();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var s = r[a], l = n(s);
      if (l != null && (f === void 0 ? l === l && !e(l) : i(l, f)))
        var f = l, d = s;
    }
    return d;
  }
  return ny = t, ny;
}
var iy, lS;
function a2() {
  if (lS) return iy;
  lS = 1;
  function e(t, r) {
    return t > r;
  }
  return iy = e, iy;
}
var ay, fS;
function QU() {
  if (fS) return ay;
  fS = 1;
  var e = Vl(), t = a2(), r = _o();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return ay = n, ay;
}
var e4 = QU();
const fi = /* @__PURE__ */ Je(e4);
var oy, dS;
function o2() {
  if (dS) return oy;
  dS = 1;
  function e(t, r) {
    return t < r;
  }
  return oy = e, oy;
}
var uy, hS;
function t4() {
  if (hS) return uy;
  hS = 1;
  var e = Vl(), t = o2(), r = _o();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return uy = n, uy;
}
var r4 = t4();
const Yl = /* @__PURE__ */ Je(r4);
var sy, pS;
function n4() {
  if (pS) return sy;
  pS = 1;
  var e = Lm(), t = yn(), r = pC(), n = ar();
  function i(a, o) {
    var s = n(a) ? e : r;
    return s(a, t(o, 3));
  }
  return sy = i, sy;
}
var cy, vS;
function i4() {
  if (vS) return cy;
  vS = 1;
  var e = dC(), t = n4();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return cy = r, cy;
}
var a4 = i4();
const o4 = /* @__PURE__ */ Je(a4);
var ly, yS;
function u4() {
  if (yS) return ly;
  yS = 1;
  var e = Zm();
  function t(r, n) {
    return e(r, n);
  }
  return ly = t, ly;
}
var s4 = u4();
const Qi = /* @__PURE__ */ Je(s4);
var Ao = 1e9, c4 = {
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
}, Ab, ft = !0, Dr = "[DecimalError] ", Xi = Dr + "Invalid argument: ", Ob = Dr + "Exponent out of range: ", So = Math.floor, Bi = Math.pow, l4 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, mr, Mt = 1e7, ct = 7, u2 = 9007199254740991, Hc = So(u2 / ct), ge = {};
ge.absoluteValue = ge.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ge.comparedTo = ge.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
ge.decimalPlaces = ge.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ct;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ge.dividedBy = ge.div = function(e) {
  return Dn(this, new this.constructor(e));
};
ge.dividedToIntegerBy = ge.idiv = function(e) {
  var t = this, r = t.constructor;
  return rt(Dn(t, new r(e), 0, 1), r.precision);
};
ge.equals = ge.eq = function(e) {
  return !this.cmp(e);
};
ge.exponent = function() {
  return bt(this);
};
ge.greaterThan = ge.gt = function(e) {
  return this.cmp(e) > 0;
};
ge.greaterThanOrEqualTo = ge.gte = function(e) {
  return this.cmp(e) >= 0;
};
ge.isInteger = ge.isint = function() {
  return this.e > this.d.length - 2;
};
ge.isNegative = ge.isneg = function() {
  return this.s < 0;
};
ge.isPositive = ge.ispos = function() {
  return this.s > 0;
};
ge.isZero = function() {
  return this.s === 0;
};
ge.lessThan = ge.lt = function(e) {
  return this.cmp(e) < 0;
};
ge.lessThanOrEqualTo = ge.lte = function(e) {
  return this.cmp(e) < 1;
};
ge.logarithm = ge.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(mr)) throw Error(Dr + "NaN");
  if (r.s < 1) throw Error(Dr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(mr) ? new n(0) : (ft = !1, t = Dn(Cu(r, a), Cu(e, a), a), ft = !0, rt(t, i));
};
ge.minus = ge.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? l2(t, e) : s2(t, (e.s = -e.s, e));
};
ge.modulo = ge.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Dr + "NaN");
  return r.s ? (ft = !1, t = Dn(r, e, 0, 1).times(e), ft = !0, r.minus(t)) : rt(new n(r), i);
};
ge.naturalExponential = ge.exp = function() {
  return c2(this);
};
ge.naturalLogarithm = ge.ln = function() {
  return Cu(this);
};
ge.negated = ge.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ge.plus = ge.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? s2(t, e) : l2(t, (e.s = -e.s, e));
};
ge.precision = ge.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xi + e);
  if (t = bt(i) + 1, n = i.d.length - 1, r = n * ct + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ge.squareRoot = ge.sqrt = function() {
  var e, t, r, n, i, a, o, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(Dr + "NaN");
  }
  for (e = bt(s), ft = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = sn(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = So((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Dn(s, a, o + 2)).times(0.5), sn(a.d).slice(0, o) === (t = sn(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (rt(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return ft = !0, rt(n, r);
};
ge.times = ge.mul = function(e) {
  var t, r, n, i, a, o, s, l, f, d = this, h = d.constructor, v = d.d, y = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = y.length, l < f && (a = v, v = y, y = a, o = l, l = f, f = o), a = [], o = l + f, n = o; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      s = a[i] + y[n] * v[i - n - 1] + t, a[i--] = s % Mt | 0, t = s / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ft ? rt(e, h.precision) : e;
};
ge.toDecimalPlaces = ge.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (hn(e, 0, Ao), t === void 0 ? t = n.rounding : hn(t, 0, 8), rt(r, e + bt(r) + 1, t));
};
ge.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ea(n, !0) : (hn(e, 0, Ao), t === void 0 ? t = i.rounding : hn(t, 0, 8), n = rt(new i(n), e + 1, t), r = ea(n, !0, e + 1)), r;
};
ge.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ea(i) : (hn(e, 0, Ao), t === void 0 ? t = a.rounding : hn(t, 0, 8), n = rt(new a(i), e + bt(i) + 1, t), r = ea(n.abs(), !1, e + bt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ge.toInteger = ge.toint = function() {
  var e = this, t = e.constructor;
  return rt(new t(e), bt(e) + 1, t.rounding);
};
ge.toNumber = function() {
  return +this;
};
ge.toPower = ge.pow = function(e) {
  var t, r, n, i, a, o, s = this, l = s.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(mr);
  if (s = new l(s), !s.s) {
    if (e.s < 1) throw Error(Dr + "Infinity");
    return s;
  }
  if (s.eq(mr)) return s;
  if (n = l.precision, e.eq(mr)) return rt(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = d < 0 ? -d : d) <= u2) {
      for (i = new l(mr), t = Math.ceil(n / ct + 4), ft = !1; r % 2 && (i = i.times(s), mS(i.d, t)), r = So(r / 2), r !== 0; )
        s = s.times(s), mS(s.d, t);
      return ft = !0, e.s < 0 ? new l(mr).div(i) : rt(i, n);
    }
  } else if (a < 0) throw Error(Dr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, ft = !1, i = e.times(Cu(s, n + f)), ft = !0, i = c2(i), i.s = a, i;
};
ge.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = bt(i), n = ea(i, r <= a.toExpNeg || r >= a.toExpPos)) : (hn(e, 1, Ao), t === void 0 ? t = a.rounding : hn(t, 0, 8), i = rt(new a(i), e, t), r = bt(i), n = ea(i, e <= r || r <= a.toExpNeg, e)), n;
};
ge.toSignificantDigits = ge.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (hn(e, 1, Ao), t === void 0 ? t = n.rounding : hn(t, 0, 8)), rt(new n(r), e, t);
};
ge.toString = ge.valueOf = ge.val = ge.toJSON = ge[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = bt(e), r = e.constructor;
  return ea(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function s2(e, t) {
  var r, n, i, a, o, s, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), ft ? rt(t, h) : t;
  if (l = e.d, f = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, s = f.length) : (n = f, i = o, s = l.length), o = Math.ceil(h / ct), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = f.length, s - a < 0 && (a = s, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, ft ? rt(t, h) : t;
}
function hn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Xi + e);
}
function sn(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ct - n.length, r && (a += ci(r)), a += n;
    o = e[t], n = o + "", r = ct - n.length, r && (a += ci(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Dn = /* @__PURE__ */ function() {
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
    var s, l, f, d, h, v, y, b, m, g, _, O, A, P, x, S, T, R, I = n.constructor, q = n.s == i.s ? 1 : -1, $ = n.d, D = i.d;
    if (!n.s) return new I(n);
    if (!i.s) throw Error(Dr + "Division by zero");
    for (l = n.e - i.e, T = D.length, x = $.length, y = new I(q), b = y.d = [], f = 0; D[f] == ($[f] || 0); ) ++f;
    if (D[f] > ($[f] || 0) && --l, a == null ? O = a = I.precision : o ? O = a + (bt(n) - bt(i)) + 1 : O = a, O < 0) return new I(0);
    if (O = O / ct + 2 | 0, f = 0, T == 1)
      for (d = 0, D = D[0], O++; (f < x || d) && O--; f++)
        A = d * Mt + ($[f] || 0), b[f] = A / D | 0, d = A % D | 0;
    else {
      for (d = Mt / (D[0] + 1) | 0, d > 1 && (D = e(D, d), $ = e($, d), T = D.length, x = $.length), P = T, m = $.slice(0, T), g = m.length; g < T; ) m[g++] = 0;
      R = D.slice(), R.unshift(0), S = D[0], D[1] >= Mt / 2 && ++S;
      do
        d = 0, s = t(D, m, T, g), s < 0 ? (_ = m[0], T != g && (_ = _ * Mt + (m[1] || 0)), d = _ / S | 0, d > 1 ? (d >= Mt && (d = Mt - 1), h = e(D, d), v = h.length, g = m.length, s = t(h, m, v, g), s == 1 && (d--, r(h, T < v ? R : D, v))) : (d == 0 && (s = d = 1), h = D.slice()), v = h.length, v < g && h.unshift(0), r(m, h, g), s == -1 && (g = m.length, s = t(D, m, T, g), s < 1 && (d++, r(m, T < g ? R : D, g))), g = m.length) : s === 0 && (d++, m = [0]), b[f++] = d, s && m[0] ? m[g++] = $[P] || 0 : (m = [$[P]], g = 1);
      while ((P++ < x || m[0] !== void 0) && O--);
    }
    return b[0] || b.shift(), y.e = l, rt(y, o ? a + bt(y) + 1 : a);
  };
}();
function c2(e, t) {
  var r, n, i, a, o, s, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (bt(e) > 16) throw Error(Ob + bt(e));
  if (!e.s) return new d(mr);
  for (ft = !1, s = h, o = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(o), f += 5;
  for (n = Math.log(Bi(2, f)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new d(mr), d.precision = s; ; ) {
    if (i = rt(i.times(e), s), r = r.times(++l), o = a.plus(Dn(i, r, s)), sn(o.d).slice(0, s) === sn(a.d).slice(0, s)) {
      for (; f--; ) a = rt(a.times(a), s);
      return d.precision = h, t == null ? (ft = !0, rt(a, h)) : a;
    }
    a = o;
  }
}
function bt(e) {
  for (var t = e.e * ct, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function fy(e, t, r) {
  if (t > e.LN10.sd())
    throw ft = !0, r && (e.precision = r), Error(Dr + "LN10 precision limit exceeded");
  return rt(new e(e.LN10), t);
}
function ci(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Cu(e, t) {
  var r, n, i, a, o, s, l, f, d, h = 1, v = 10, y = e, b = y.d, m = y.constructor, g = m.precision;
  if (y.s < 1) throw Error(Dr + (y.s ? "NaN" : "-Infinity"));
  if (y.eq(mr)) return new m(0);
  if (t == null ? (ft = !1, f = g) : f = t, y.eq(10))
    return t == null && (ft = !0), fy(m, f);
  if (f += v, m.precision = f, r = sn(b), n = r.charAt(0), a = bt(y), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = sn(y.d), n = r.charAt(0), h++;
    a = bt(y), n > 1 ? (y = new m("0." + r), a++) : y = new m(n + "." + r.slice(1));
  } else
    return l = fy(m, f + 2, g).times(a + ""), y = Cu(new m(n + "." + r.slice(1)), f - v).plus(l), m.precision = g, t == null ? (ft = !0, rt(y, g)) : y;
  for (s = o = y = Dn(y.minus(mr), y.plus(mr), f), d = rt(y.times(y), f), i = 3; ; ) {
    if (o = rt(o.times(d), f), l = s.plus(Dn(o, new m(i), f)), sn(l.d).slice(0, f) === sn(s.d).slice(0, f))
      return s = s.times(2), a !== 0 && (s = s.plus(fy(m, f + 2, g).times(a + ""))), s = Dn(s, new m(h), f), m.precision = g, t == null ? (ft = !0, rt(s, g)) : s;
    s = l, i += 2;
  }
}
function gS(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = So(r / ct), e.d = [], n = (r + 1) % ct, r < 0 && (n += ct), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ct; n < i; ) e.d.push(+t.slice(n, n += ct));
      t = t.slice(n), n = ct - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ft && (e.e > Hc || e.e < -Hc)) throw Error(Ob + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function rt(e, t, r) {
  var n, i, a, o, s, l, f, d, h = e.d;
  for (o = 1, a = h[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += ct, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / ct), a = h.length, d >= a) return e;
    for (f = a = h[d], o = 1; a >= 10; a /= 10) o++;
    n %= ct, i = n - ct + o;
  }
  if (r !== void 0 && (a = Bi(10, o - i - 1), s = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Bi(10, o - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = bt(e), h.length = 1, t = t - a - 1, h[0] = Bi(10, (ct - t % ct) % ct), e.e = So(-t / ct) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Bi(10, ct - n), h[d] = i > 0 ? (f / Bi(10, o - i) % Bi(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == Mt && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != Mt) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (ft && (e.e > Hc || e.e < -Hc))
    throw Error(Ob + bt(e));
  return e;
}
function l2(e, t) {
  var r, n, i, a, o, s, l, f, d, h, v = e.constructor, y = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), ft ? rt(t, y) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), o = f - n, o) {
    for (d = o < 0, d ? (r = l, o = -o, s = h.length) : (r = h, n = f, s = l.length), i = Math.max(Math.ceil(y / ct), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
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
  return l[0] ? (t.d = l, t.e = n, ft ? rt(t, y) : t) : new v(0);
}
function ea(e, t, r) {
  var n, i = bt(e), a = sn(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ci(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + ci(-i - 1) + a, r && (n = r - o) > 0 && (a += ci(n))) : i >= o ? (a += ci(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + ci(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += ci(n))), e.s < 0 ? "-" + a : a;
}
function mS(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function f2(e) {
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
      return gS(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Xi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, l4.test(a)) gS(o, a);
    else throw Error(Xi + a);
  }
  if (i.prototype = ge, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = f2, i.config = i.set = f4, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function f4(e) {
  if (!e || typeof e != "object")
    throw Error(Dr + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Ao,
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
      if (So(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Xi + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Xi + r + ": " + n);
  return this;
}
var Ab = f2(c4);
mr = new Ab(1);
const et = Ab;
function d4(e) {
  return y4(e) || v4(e) || p4(e) || h4();
}
function h4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p4(e, t) {
  if (e) {
    if (typeof e == "string") return Pg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pg(e, t);
  }
}
function v4(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function y4(e) {
  if (Array.isArray(e)) return Pg(e);
}
function Pg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var g4 = function(t) {
  return t;
}, d2 = {}, h2 = function(t) {
  return t === d2;
}, bS = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && h2(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, m4 = function e(t, r) {
  return t === 1 ? r : bS(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== d2;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, bS(function() {
      for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return h2(h) ? l.shift() : h;
      });
      return r.apply(void 0, d4(d).concat(l));
    }));
  });
}, Xl = function(t) {
  return m4(t.length, t);
}, Eg = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, b4 = Xl(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), x4 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return g4;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, Tg = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, p2 = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function w4(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new et(e).abs().log(10).toNumber()) + 1, t;
}
function _4(e, t, r) {
  for (var n = new et(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var O4 = Xl(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), A4 = Xl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), S4 = Xl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Zl = {
  rangeStep: _4,
  getDigitCount: w4,
  interpolateNumber: O4,
  uninterpolateNumber: A4,
  uninterpolateTruncation: S4
};
function Cg(e) {
  return T4(e) || E4(e) || v2(e) || P4();
}
function P4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E4(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function T4(e) {
  if (Array.isArray(e)) return Mg(e);
}
function Mu(e, t) {
  return R4(e) || M4(e, t) || v2(e, t) || C4();
}
function C4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v2(e, t) {
  if (e) {
    if (typeof e == "string") return Mg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mg(e, t);
  }
}
function Mg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function M4(e, t) {
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
function R4(e) {
  if (Array.isArray(e)) return e;
}
function y2(e) {
  var t = Mu(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function g2(e, t, r) {
  if (e.lte(0))
    return new et(0);
  var n = Zl.getDigitCount(e.toNumber()), i = new et(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new et(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = s.mul(i);
  return t ? l : new et(Math.ceil(l));
}
function I4(e, t, r) {
  var n = 1, i = new et(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new et(10).pow(Zl.getDigitCount(e) - 1), i = new et(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new et(Math.floor(e)));
  } else e === 0 ? i = new et(Math.floor((t - 1) / 2)) : r || (i = new et(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = x4(b4(function(l) {
    return i.add(new et(l - o).mul(n)).toNumber();
  }), Eg);
  return s(0, t);
}
function m2(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new et(0),
      tickMin: new et(0),
      tickMax: new et(0)
    };
  var a = g2(new et(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new et(0) : (o = new et(e).add(t).div(2), o = o.sub(new et(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), l = Math.ceil(new et(t).sub(o).div(a).toNumber()), f = s + l + 1;
  return f > r ? m2(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, s = t > 0 ? s : s + (r - f)), {
    step: a,
    tickMin: o.sub(new et(s).mul(a)),
    tickMax: o.add(new et(l).mul(a))
  });
}
function $4(e) {
  var t = Mu(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = y2([r, n]), l = Mu(s, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(Cg(Eg(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Cg(Eg(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? Tg(h) : h;
  }
  if (f === d)
    return I4(f, i, a);
  var v = m2(f, d, o, a), y = v.step, b = v.tickMin, m = v.tickMax, g = Zl.rangeStep(b, m.add(new et(0.1).mul(y)), y);
  return r > n ? Tg(g) : g;
}
function j4(e, t) {
  var r = Mu(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = y2([n, i]), s = Mu(o, 2), l = s[0], f = s[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = g2(new et(f).sub(l).div(d - 1), a, 0), v = [].concat(Cg(Zl.rangeStep(new et(l), new et(f).sub(new et(0.99).mul(h)), h)), [f]);
  return n > i ? Tg(v) : v;
}
var k4 = p2($4), D4 = p2(j4), N4 = process.env.NODE_ENV === "production", dy = "Invariant failed";
function nr(e, t) {
  if (N4)
    throw new Error(dy);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(dy, ": ").concat(r) : dy;
  throw new Error(n);
}
var L4 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Va(e) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e);
}
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gc.apply(this, arguments);
}
function q4(e, t) {
  return z4(e) || W4(e, t) || F4(e, t) || B4();
}
function B4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F4(e, t) {
  if (e) {
    if (typeof e == "string") return xS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xS(e, t);
  }
}
function xS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function W4(e, t) {
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
function z4(e) {
  if (Array.isArray(e)) return e;
}
function U4(e, t) {
  if (e == null) return {};
  var r = H4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function G4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w2(n.key), n);
  }
}
function V4(e, t, r) {
  return t && K4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y4(e, t, r) {
  return t = Kc(t), X4(e, b2() ? Reflect.construct(t, r || [], Kc(e).constructor) : t.apply(e, r));
}
function X4(e, t) {
  if (t && (Va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z4(e);
}
function Z4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (b2 = function() {
    return !!e;
  })();
}
function Kc(e) {
  return Kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kc(e);
}
function J4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rg(e, t);
}
function Rg(e, t) {
  return Rg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rg(e, t);
}
function x2(e, t, r) {
  return t = w2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w2(e) {
  var t = Q4(e, "string");
  return Va(t) == "symbol" ? t : t + "";
}
function Q4(e, t) {
  if (Va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var os = /* @__PURE__ */ function(e) {
  function t() {
    return G4(this, t), Y4(this, t, arguments);
  }
  return J4(t, e), V4(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, l = n.data, f = n.dataPointFormatter, d = n.xAxis, h = n.yAxis, v = U4(n, L4), y = we(v, !1);
      this.props.direction === "x" && d.type !== "number" && (process.env.NODE_ENV !== "production" ? nr(!1, 'ErrorBar requires Axis type property to be "number".') : nr());
      var b = l.map(function(m) {
        var g = f(m, s), _ = g.x, O = g.y, A = g.value, P = g.errorVal;
        if (!P)
          return null;
        var x = [], S, T;
        if (Array.isArray(P)) {
          var R = q4(P, 2);
          S = R[0], T = R[1];
        } else
          S = T = P;
        if (a === "vertical") {
          var I = d.scale, q = O + i, $ = q + o, D = q - o, L = I(A - S), F = I(A + T);
          x.push({
            x1: F,
            y1: $,
            x2: F,
            y2: D
          }), x.push({
            x1: L,
            y1: q,
            x2: F,
            y2: q
          }), x.push({
            x1: L,
            y1: $,
            x2: L,
            y2: D
          });
        } else if (a === "horizontal") {
          var G = h.scale, U = _ + i, X = U - o, Z = U + o, ie = G(A - S), H = G(A + T);
          x.push({
            x1: X,
            y1: H,
            x2: Z,
            y2: H
          }), x.push({
            x1: U,
            y1: ie,
            x2: U,
            y2: H
          }), x.push({
            x1: X,
            y1: ie,
            x2: Z,
            y2: ie
          });
        }
        return /* @__PURE__ */ j.createElement(Ne, Gc({
          className: "recharts-errorBar",
          key: "bar-".concat(x.map(function(K) {
            return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
          }))
        }, y), x.map(function(K) {
          return /* @__PURE__ */ j.createElement("line", Gc({}, K, {
            key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2)
          }));
        }));
      });
      return /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-errorBars"
      }, b);
    }
  }]);
}(j.Component);
x2(os, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
x2(os, "displayName", "ErrorBar");
function Ru(e) {
  "@babel/helpers - typeof";
  return Ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ru(e);
}
function wS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wS(Object(r), !0).forEach(function(n) {
      e5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e5(e, t, r) {
  return t = t5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t5(e) {
  var t = r5(e, "string");
  return Ru(t) == "symbol" ? t : t + "";
}
function r5(e, t) {
  if (Ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _2 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = yr(r, Vi);
  if (!o)
    return null;
  var s = Vi.defaultProps, l = s !== void 0 ? ki(ki({}, s), o.props) : {}, f;
  return o.props && o.props.payload ? f = o.props && o.props.payload : a === "children" ? f = (n || []).reduce(function(d, h) {
    var v = h.item, y = h.props, b = y.sectors || y.data || [];
    return d.concat(b.map(function(m) {
      return {
        type: o.props.iconType || v.props.legendType,
        value: m.name,
        color: m.fill,
        payload: m
      };
    }));
  }, []) : f = (n || []).map(function(d) {
    var h = d.item, v = h.type.defaultProps, y = v !== void 0 ? ki(ki({}, v), h.props) : {}, b = y.dataKey, m = y.name, g = y.legendType, _ = y.hide;
    return {
      inactive: _,
      dataKey: b,
      type: l.iconType || g || "square",
      color: Sb(h),
      value: m || b,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: y
    };
  }), ki(ki(ki({}, l), Vi.getWithHeight(o, i)), {}, {
    payload: f,
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
function _S(e) {
  return o5(e) || a5(e) || i5(e) || n5();
}
function n5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i5(e, t) {
  if (e) {
    if (typeof e == "string") return Ig(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ig(e, t);
  }
}
function a5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o5(e) {
  if (Array.isArray(e)) return Ig(e);
}
function Ig(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? OS(Object(r), !0).forEach(function(n) {
      La(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : OS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function La(e, t, r) {
  return t = u5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u5(e) {
  var t = s5(e, "string");
  return Iu(t) == "symbol" ? t : t + "";
}
function s5(e, t) {
  if (Iu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Iu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gt(e, t, r) {
  return Ee(e) || Ee(t) ? r : Et(t) ? br(e, t, r) : Pe(t) ? t(e) : r;
}
function du(e, t, r, n) {
  var i = o4(e, function(s) {
    return gt(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return ce(s) || parseFloat(s);
    });
    return a.length ? [Yl(a), fi(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !Ee(s);
  }) : i;
  return o.map(function(s) {
    return Et(s) || s instanceof Date ? s : "";
  });
}
var c5 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < s; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[s - 1].coordinate, h = i[f].coordinate, v = f >= s - 1 ? i[0].coordinate : i[f + 1].coordinate, y = void 0;
      if (Gt(h - d) !== Gt(v - h)) {
        var b = [];
        if (Gt(v - h) === Gt(l[1] - l[0])) {
          y = v;
          var m = h + l[1] - l[0];
          b[0] = Math.min(m, (m + d) / 2), b[1] = Math.max(m, (m + d) / 2);
        } else {
          y = d;
          var g = v + l[1] - l[0];
          b[0] = Math.min(h, (g + h) / 2), b[1] = Math.max(h, (g + h) / 2);
        }
        var _ = [Math.min(h, (y + h) / 2), Math.max(h, (y + h) / 2)];
        if (t > _[0] && t <= _[1] || t >= b[0] && t <= b[1]) {
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
    for (var P = 0; P < s; P++)
      if (P === 0 && t <= (n[P].coordinate + n[P + 1].coordinate) / 2 || P > 0 && P < s - 1 && t > (n[P].coordinate + n[P - 1].coordinate) / 2 && t <= (n[P].coordinate + n[P + 1].coordinate) / 2 || P === s - 1 && t > (n[P].coordinate + n[P - 1].coordinate) / 2) {
        o = n[P].index;
        break;
      }
  return o;
}, Sb = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? pt(pt({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, l;
  switch (i) {
    case "Line":
      l = o;
      break;
    case "Area":
    case "Radar":
      l = o && o !== "none" ? o : s;
      break;
    default:
      l = s;
      break;
  }
  return l;
}, l5 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), l = 0, f = s.length; l < f; l++)
    for (var d = a[s[l]].stackGroups, h = Object.keys(d), v = 0, y = h.length; v < y; v++) {
      var b = d[h[v]], m = b.items, g = b.cateAxisId, _ = m.filter(function(T) {
        return kn(T.type).indexOf("Bar") >= 0;
      });
      if (_ && _.length) {
        var O = _[0].type.defaultProps, A = O !== void 0 ? pt(pt({}, O), _[0].props) : _[0].props, P = A.barSize, x = A[g];
        o[x] || (o[x] = []);
        var S = Ee(P) ? r : P;
        o[x].push({
          item: _[0],
          stackList: _.slice(1),
          barSize: Ee(S) ? void 0 : Kt(S, n, 0)
        });
      }
    }
  return o;
}, f5 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, l = o.length;
  if (l < 1) return null;
  var f = Kt(r, i, 0, !0), d, h = [];
  if (o[0].barSize === +o[0].barSize) {
    var v = !1, y = i / l, b = o.reduce(function(P, x) {
      return P + x.barSize || 0;
    }, 0);
    b += (l - 1) * f, b >= i && (b -= (l - 1) * f, f = 0), b >= i && y > 0 && (v = !0, y *= 0.9, b = l * y);
    var m = (i - b) / 2 >> 0, g = {
      offset: m - f,
      size: 0
    };
    d = o.reduce(function(P, x) {
      var S = {
        item: x.item,
        position: {
          offset: g.offset + g.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? y : x.barSize
        }
      }, T = [].concat(_S(P), [S]);
      return g = T[T.length - 1].position, x.stackList && x.stackList.length && x.stackList.forEach(function(R) {
        T.push({
          item: R,
          position: g
        });
      }), T;
    }, h);
  } else {
    var _ = Kt(n, i, 0, !0);
    i - 2 * _ - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * _ - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var A = s === +s ? Math.min(O, s) : O;
    d = o.reduce(function(P, x, S) {
      var T = [].concat(_S(P), [{
        item: x.item,
        position: {
          offset: _ + (O + f) * S + (O - A) / 2,
          size: A
        }
      }]);
      return x.stackList && x.stackList.length && x.stackList.forEach(function(R) {
        T.push({
          item: R,
          position: T[T.length - 1].position
        });
      }), T;
    }, h);
  }
  return d;
}, d5 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, l = o - (s.left || 0) - (s.right || 0), f = _2({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, y = f.align, b = f.verticalAlign, m = f.layout;
    if ((m === "vertical" || m === "horizontal" && b === "middle") && y !== "center" && ce(t[y]))
      return pt(pt({}, t), {}, La({}, y, t[y] + (h || 0)));
    if ((m === "horizontal" || m === "vertical" && y === "center") && b !== "middle" && ce(t[b]))
      return pt(pt({}, t), {}, La({}, b, t[b] + (v || 0)));
  }
  return t;
}, h5 = function(t, r, n) {
  return Ee(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, O2 = function(t, r, n, i, a) {
  var o = r.props.children, s = xr(o, os).filter(function(f) {
    return h5(i, a, f.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = gt(d, n);
      if (Ee(h)) return f;
      var v = Array.isArray(h) ? [Yl(h), fi(h)] : [h, h], y = l.reduce(function(b, m) {
        var g = gt(d, m, 0), _ = v[0] - Math.abs(Array.isArray(g) ? g[0] : g), O = v[1] + Math.abs(Array.isArray(g) ? g[1] : g);
        return [Math.min(_, b[0]), Math.max(O, b[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(y[0], f[0]), Math.max(y[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, p5 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return O2(t, s, n, a, i);
  }).filter(function(s) {
    return !Ee(s);
  });
  return o && o.length ? o.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, A2 = function(t, r, n, i, a) {
  var o = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && O2(t, l, f, i) || du(t, f, n, a);
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
}, S2 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, P2 = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, o, s = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (o = !0), l.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, jn = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? Gt(s[0] - s[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
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
      return !wo(h.coordinate);
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
}, hy = /* @__PURE__ */ new WeakMap(), lc = function(t, r) {
  if (typeof r != "function")
    return t;
  hy.has(t) || hy.set(t, /* @__PURE__ */ new WeakMap());
  var n = hy.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, E2 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Au(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Fc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: fu(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Au(),
      realScaleType: "band"
    } : {
      scale: Fc(),
      realScaleType: "linear"
    };
  if (es(i)) {
    var l = "scale".concat(jl(i));
    return {
      scale: (sS[l] || fu)(),
      realScaleType: sS[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: fu(),
    realScaleType: "point"
  };
}, AS = 1e-4, T2 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - AS, o = Math.max(i[0], i[1]) + AS, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
  }
}, v5 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, y5 = function(t, r) {
  if (!r || r.length !== 2 || !ce(r[0]) || !ce(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!ce(t[0]) || t[0] < n) && (a[0] = n), (!ce(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, g5 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var l = wo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + l, o = t[s][n][1]);
      }
}, m5 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = wo(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, b5 = {
  sign: g5,
  // @ts-expect-error definitelytyped types are incorrect
  expand: aB,
  // @ts-expect-error definitelytyped types are incorrect
  none: Ba,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: oB,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: uB,
  positive: m5
}, x5 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = b5[n], o = iB().keys(i).value(function(s, l) {
    return +gt(s, l, 0);
  }).order(sg).offset(a);
  return o(t);
}, w5 = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, l = {}, f = s.reduce(function(h, v) {
    var y, b = (y = v.type) !== null && y !== void 0 && y.defaultProps ? pt(pt({}, v.type.defaultProps), v.props) : v.props, m = b.stackId, g = b.hide;
    if (g)
      return h;
    var _ = b[n], O = h[_] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Et(m)) {
      var A = O.stackGroups[m] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      A.items.push(v), O.hasStack = !0, O.stackGroups[m] = A;
    } else
      O.stackGroups[aa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return pt(pt({}, h), {}, La({}, _, O));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var y = f[v];
    if (y.hasStack) {
      var b = {};
      y.stackGroups = Object.keys(y.stackGroups).reduce(function(m, g) {
        var _ = y.stackGroups[g];
        return pt(pt({}, m), {}, La({}, g, {
          numericAxisId: n,
          cateAxisId: i,
          items: _.items,
          stackedData: x5(t, _.items, a)
        }));
      }, b);
    }
    return pt(pt({}, h), {}, La({}, v, y));
  }, d);
}, C2 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = k4(f, a, s);
    return t.domain([Yl(d), fi(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = D4(h, a, s);
    return {
      niceTicks: v
    };
  }
  return null;
};
function Vc(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ee(i[t.dataKey])) {
      var s = Oc(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = gt(i, Ee(o) ? t.dataKey : o);
  return Ee(l) ? null : t.scale(l);
}
var SS = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var l = gt(o, r.dataKey, r.domain[s]);
  return Ee(l) ? null : r.scale(l) - a / 2 + i;
}, _5 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, O5 = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? pt(pt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Et(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, A5 = function(t) {
  return t.reduce(function(r, n) {
    return [Yl(n.concat([r[0]]).filter(ce)), fi(n.concat([r[1]]).filter(ce))];
  }, [1 / 0, -1 / 0]);
}, M2 = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, l = s.reduce(function(f, d) {
      var h = A5(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, PS = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ES = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, $g = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (ce(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (PS.test(t[0])) {
    var a = +PS.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (ce(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (ES.test(t[1])) {
    var o = +ES.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Yc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Qm(r, function(h) {
      return h.coordinate;
    }), o = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var f = a[s], d = a[s - 1];
      o = Math.min((f.coordinate || 0) - (d.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, TS = function(t, r, n) {
  return !t || !t.length || Qi(t, br(n, "type.defaultProps.domain")) ? r : t;
}, R2 = function(t, r) {
  var n = t.type.defaultProps ? pt(pt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return pt(pt({}, we(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: Sb(t),
    value: gt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function $u(e) {
  "@babel/helpers - typeof";
  return $u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $u(e);
}
function CS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? CS(Object(r), !0).forEach(function(n) {
      I2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : CS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I2(e, t, r) {
  return t = S5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S5(e) {
  var t = P5(e, "string");
  return $u(t) == "symbol" ? t : t + "";
}
function P5(e, t) {
  if ($u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E5(e, t) {
  return R5(e) || M5(e, t) || C5(e, t) || T5();
}
function T5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C5(e, t) {
  if (e) {
    if (typeof e == "string") return MS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return MS(e, t);
  }
}
function MS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function M5(e, t) {
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
function R5(e) {
  if (Array.isArray(e)) return e;
}
var Xc = Math.PI / 180, I5 = function(t) {
  return t * 180 / Math.PI;
}, ot = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Xc * i) * n,
    y: r + Math.sin(-Xc * i) * n
  };
}, $2 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, $5 = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.startAngle, f = t.endAngle, d = Kt(t.cx, o, o / 2), h = Kt(t.cy, s, s / 2), v = $2(o, s, n), y = Kt(t.innerRadius, v, 0), b = Kt(t.outerRadius, v, v * 0.8), m = Object.keys(r);
  return m.reduce(function(g, _) {
    var O = r[_], A = O.domain, P = O.reversed, x;
    if (Ee(O.range))
      i === "angleAxis" ? x = [l, f] : i === "radiusAxis" && (x = [y, b]), P && (x = [x[1], x[0]]);
    else {
      x = O.range;
      var S = x, T = E5(S, 2);
      l = T[0], f = T[1];
    }
    var R = E2(O, a), I = R.realScaleType, q = R.scale;
    q.domain(A).range(x), T2(q);
    var $ = C2(q, Mn(Mn({}, O), {}, {
      realScaleType: I
    })), D = Mn(Mn(Mn({}, O), $), {}, {
      range: x,
      radius: b,
      realScaleType: I,
      scale: q,
      cx: d,
      cy: h,
      innerRadius: y,
      outerRadius: b,
      startAngle: l,
      endAngle: f
    });
    return Mn(Mn({}, g), {}, I2({}, _, D));
  }, {});
}, j5 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, k5 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = j5({
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
    angle: I5(f),
    angleInRadian: f
  };
}, D5 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, N5 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, RS = function(t, r) {
  var n = t.x, i = t.y, a = k5({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (o < l || o > f)
    return !1;
  if (o === 0)
    return !0;
  var d = D5(r), h = d.startAngle, v = d.endAngle, y = s, b;
  if (h <= v) {
    for (; y > v; )
      y -= 360;
    for (; y < h; )
      y += 360;
    b = y >= h && y <= v;
  } else {
    for (; y > h; )
      y -= 360;
    for (; y < v; )
      y += 360;
    b = y >= v && y <= h;
  }
  return b ? Mn(Mn({}, r), {}, {
    radius: o,
    angle: N5(y, r)
  }) : null;
}, j2 = function(t) {
  return !/* @__PURE__ */ Vr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function ju(e) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ju(e);
}
var L5 = ["offset"];
function q5(e) {
  return z5(e) || W5(e) || F5(e) || B5();
}
function B5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F5(e, t) {
  if (e) {
    if (typeof e == "string") return jg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jg(e, t);
  }
}
function W5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function z5(e) {
  if (Array.isArray(e)) return jg(e);
}
function jg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U5(e, t) {
  if (e == null) return {};
  var r = H5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function IS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? IS(Object(r), !0).forEach(function(n) {
      G5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G5(e, t, r) {
  return t = K5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K5(e) {
  var t = V5(e, "string");
  return ju(t) == "symbol" ? t : t + "";
}
function V5(e, t) {
  if (ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ju(n) != "object") return n;
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
var Y5 = function(t) {
  var r = t.value, n = t.formatter, i = Ee(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, X5 = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, Z5 = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, y = l.startAngle, b = l.endAngle, m = l.clockWise, g = (h + v) / 2, _ = X5(y, b), O = _ >= 0 ? 1 : -1, A, P;
  i === "insideStart" ? (A = y + O * o, P = m) : i === "insideEnd" ? (A = b - O * o, P = !m) : i === "end" && (A = b + O * o, P = m), P = _ <= 0 ? P : !P;
  var x = ot(f, d, g, A), S = ot(f, d, g, A + (P ? 1 : -1) * 359), T = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(P ? 0 : 1, `,
    `).concat(S.x, ",").concat(S.y), R = Ee(t.id) ? aa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ j.createElement("text", ku({}, n, {
    dominantBaseline: "central",
    className: Me("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("path", {
    id: R,
    d: T
  })), /* @__PURE__ */ j.createElement("textPath", {
    xlinkHref: "#".concat(R)
  }, r));
}, J5 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var y = ot(o, s, f + n, v), b = y.x, m = y.y;
    return {
      x: b,
      y: m,
      textAnchor: b >= o ? "start" : "end",
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
  var g = (l + f) / 2, _ = ot(o, s, g, v), O = _.x, A = _.y;
  return {
    x: O,
    y: A,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Q5 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, l = o.y, f = o.width, d = o.height, h = d >= 0 ? 1 : -1, v = h * i, y = h > 0 ? "end" : "start", b = h > 0 ? "start" : "end", m = f >= 0 ? 1 : -1, g = m * i, _ = m > 0 ? "end" : "start", O = m > 0 ? "start" : "end";
  if (a === "top") {
    var A = {
      x: s + f / 2,
      y: l - h * i,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Ot(Ot({}, A), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var P = {
      x: s + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: b
    };
    return Ot(Ot({}, P), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var x = {
      x: s - g,
      y: l + d / 2,
      textAnchor: _,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, x), n ? {
      width: Math.max(x.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var S = {
      x: s + f + g,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, S), n ? {
      width: Math.max(n.x + n.width - S.x, 0),
      height: d
    } : {});
  }
  var T = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? Ot({
    x: s + g,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, T) : a === "insideRight" ? Ot({
    x: s + f - g,
    y: l + d / 2,
    textAnchor: _,
    verticalAnchor: "middle"
  }, T) : a === "insideTop" ? Ot({
    x: s + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: b
  }, T) : a === "insideBottom" ? Ot({
    x: s + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: y
  }, T) : a === "insideTopLeft" ? Ot({
    x: s + g,
    y: l + v,
    textAnchor: O,
    verticalAnchor: b
  }, T) : a === "insideTopRight" ? Ot({
    x: s + f - g,
    y: l + v,
    textAnchor: _,
    verticalAnchor: b
  }, T) : a === "insideBottomLeft" ? Ot({
    x: s + g,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: y
  }, T) : a === "insideBottomRight" ? Ot({
    x: s + f - g,
    y: l + d - v,
    textAnchor: _,
    verticalAnchor: y
  }, T) : xo(a) && (ce(a.x) || Wi(a.x)) && (ce(a.y) || Wi(a.y)) ? Ot({
    x: s + Kt(a.x, f),
    y: l + Kt(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, T) : Ot({
    x: s + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, T);
}, e7 = function(t) {
  return "cx" in t && ce(t.cx);
};
function Pt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = U5(e, L5), i = Ot({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Ee(s) && Ee(l) && !/* @__PURE__ */ Vr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ Vr(f))
    return /* @__PURE__ */ At(f, i);
  var y;
  if (Pe(f)) {
    if (y = /* @__PURE__ */ aT(f, i), /* @__PURE__ */ Vr(y))
      return y;
  } else
    y = Y5(i);
  var b = e7(a), m = we(i, !0);
  if (b && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return Z5(i, y, m);
  var g = b ? J5(i) : Q5(i);
  return /* @__PURE__ */ j.createElement(vi, ku({
    className: Me("recharts-label", h)
  }, m, g, {
    breakAll: v
  }), y);
}
Pt.displayName = "Label";
var k2 = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, y = t.top, b = t.left, m = t.width, g = t.height, _ = t.clockWise, O = t.labelViewBox;
  if (O)
    return O;
  if (ce(m) && ce(g)) {
    if (ce(h) && ce(v))
      return {
        x: h,
        y: v,
        width: m,
        height: g
      };
    if (ce(y) && ce(b))
      return {
        x: y,
        y: b,
        width: m,
        height: g
      };
  }
  return ce(h) && ce(v) ? {
    x: h,
    y: v,
    width: 0,
    height: 0
  } : ce(r) && ce(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: f || 0,
    outerRadius: d || l || s || 0,
    clockWise: _
  } : t.viewBox ? t.viewBox : {};
}, t7 = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ j.createElement(Pt, {
    key: "label-implicit",
    viewBox: r
  }) : Et(t) ? /* @__PURE__ */ j.createElement(Pt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Vr(t) ? t.type === Pt ? /* @__PURE__ */ At(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ j.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ j.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : xo(t) ? /* @__PURE__ */ j.createElement(Pt, ku({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, r7 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = k2(t), o = xr(i, Pt).map(function(l, f) {
    return /* @__PURE__ */ At(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return o;
  var s = t7(t.label, r || a);
  return [s].concat(q5(o));
};
Pt.parseViewBox = k2;
Pt.renderCallByParent = r7;
var py, $S;
function n7() {
  if ($S) return py;
  $S = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return py = e, py;
}
var i7 = n7();
const a7 = /* @__PURE__ */ Je(i7);
function Du(e) {
  "@babel/helpers - typeof";
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Du(e);
}
var o7 = ["valueAccessor"], u7 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function s7(e) {
  return d7(e) || f7(e) || l7(e) || c7();
}
function c7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l7(e, t) {
  if (e) {
    if (typeof e == "string") return kg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kg(e, t);
  }
}
function f7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function d7(e) {
  if (Array.isArray(e)) return kg(e);
}
function kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zc() {
  return Zc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zc.apply(this, arguments);
}
function jS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jS(Object(r), !0).forEach(function(n) {
      h7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h7(e, t, r) {
  return t = p7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p7(e) {
  var t = v7(e, "string");
  return Du(t) == "symbol" ? t : t + "";
}
function v7(e, t) {
  if (Du(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Du(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DS(e, t) {
  if (e == null) return {};
  var r = y7(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var g7 = function(t) {
  return Array.isArray(t.value) ? a7(t.value) : t.value;
};
function kr(e) {
  var t = e.valueAccessor, r = t === void 0 ? g7 : t, n = DS(e, o7), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, l = n.textBreakAll, f = DS(n, u7);
  return !i || !i.length ? null : /* @__PURE__ */ j.createElement(Ne, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Ee(a) ? r(d, h) : gt(d && d.payload, a), y = Ee(s) ? {} : {
      id: "".concat(s, "-").concat(h)
    };
    return /* @__PURE__ */ j.createElement(Pt, Zc({}, we(d, !0), f, y, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Pt.parseViewBox(Ee(o) ? d : kS(kS({}, d), {}, {
        clockWise: o
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
kr.displayName = "LabelList";
function m7(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ j.createElement(kr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ j.isValidElement(e) || Pe(e) ? /* @__PURE__ */ j.createElement(kr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : xo(e) ? /* @__PURE__ */ j.createElement(kr, Zc({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function b7(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = xr(n, kr).map(function(o, s) {
    return /* @__PURE__ */ At(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = m7(e.label, t);
  return [a].concat(s7(i));
}
kr.renderCallByParent = b7;
function Nu(e) {
  "@babel/helpers - typeof";
  return Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nu(e);
}
function Dg() {
  return Dg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dg.apply(this, arguments);
}
function NS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function LS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? NS(Object(r), !0).forEach(function(n) {
      x7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : NS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x7(e, t, r) {
  return t = w7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w7(e) {
  var t = _7(e, "string");
  return Nu(t) == "symbol" ? t : t + "";
}
function _7(e, t) {
  if (Nu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var O7 = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, fc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (s ? 1 : -1) + i, h = Math.asin(l / d) / Xc, v = f ? a : a + o * h, y = ot(r, n, d, v), b = ot(r, n, i, v), m = f ? a - o * h : a, g = ot(r, n, d * Math.cos(h * Xc), m);
  return {
    center: y,
    circleTangency: b,
    lineTangency: g,
    theta: h
  };
}, D2 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, l = O7(o, s), f = o + l, d = ot(r, n, a, o), h = ot(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var y = ot(r, n, i, o), b = ot(r, n, i, f);
    v += "L ".concat(b.x, ",").concat(b.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= f), `,
            `).concat(y.x, ",").concat(y.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, A7 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Gt(d - f), v = fc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: o,
    cornerIsExternal: l
  }), y = v.circleTangency, b = v.lineTangency, m = v.theta, g = fc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: o,
    cornerIsExternal: l
  }), _ = g.circleTangency, O = g.lineTangency, A = g.theta, P = l ? Math.abs(f - d) : Math.abs(f - d) - m - A;
  if (P < 0)
    return s ? "M ".concat(b.x, ",").concat(b.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : D2({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var x = "M ".concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(y.x, ",").concat(y.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(P > 180), ",").concat(+(h < 0), ",").concat(_.x, ",").concat(_.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var S = fc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), T = S.circleTangency, R = S.lineTangency, I = S.theta, q = fc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), $ = q.circleTangency, D = q.lineTangency, L = q.theta, F = l ? Math.abs(f - d) : Math.abs(f - d) - I - L;
    if (F < 0 && o === 0)
      return "".concat(x, "L").concat(r, ",").concat(n, "Z");
    x += "L".concat(D.x, ",").concat(D.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(F > 180), ",").concat(+(h > 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(R.x, ",").concat(R.y, "Z");
  } else
    x += "L".concat(r, ",").concat(n, "Z");
  return x;
}, S7 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, N2 = function(t) {
  var r = LS(LS({}, S7), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (o < a || d === h)
    return null;
  var y = Me("recharts-sector", v), b = o - a, m = Kt(s, b, 0, !0), g;
  return m > 0 && Math.abs(d - h) < 360 ? g = A7({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(m, b / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : g = D2({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ j.createElement("path", Dg({}, we(r, !0), {
    className: y,
    d: g,
    role: "img"
  }));
};
function Lu(e) {
  "@babel/helpers - typeof";
  return Lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lu(e);
}
function Ng() {
  return Ng = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ng.apply(this, arguments);
}
function qS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function BS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qS(Object(r), !0).forEach(function(n) {
      P7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P7(e, t, r) {
  return t = E7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E7(e) {
  var t = T7(e, "string");
  return Lu(t) == "symbol" ? t : t + "";
}
function T7(e, t) {
  if (Lu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FS = {
  curveBasisClosed: Kq,
  curveBasisOpen: Vq,
  curveBasis: Gq,
  curveBumpX: Iq,
  curveBumpY: $q,
  curveLinearClosed: Yq,
  curveLinear: Dl,
  curveMonotoneX: Xq,
  curveMonotoneY: Zq,
  curveNatural: Jq,
  curveStep: Qq,
  curveStepAfter: tB,
  curveStepBefore: eB
}, dc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ru = function(t) {
  return t.x;
}, nu = function(t) {
  return t.y;
}, C7 = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(jl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? FS["".concat(n).concat(r === "vertical" ? "Y" : "X")] : FS[n] || Dl;
}, M7 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = C7(n, s), h = f ? a.filter(function(m) {
    return dc(m);
  }) : a, v;
  if (Array.isArray(o)) {
    var y = f ? o.filter(function(m) {
      return dc(m);
    }) : o, b = h.map(function(m, g) {
      return BS(BS({}, m), {}, {
        base: y[g]
      });
    });
    return s === "vertical" ? v = nc().y(nu).x1(ru).x0(function(m) {
      return m.base.x;
    }) : v = nc().x(ru).y1(nu).y0(function(m) {
      return m.base.y;
    }), v.defined(dc).curve(d), v(b);
  }
  return s === "vertical" && ce(o) ? v = nc().y(nu).x1(ru).x0(o) : ce(o) ? v = nc().x(ru).y1(nu).y0(o) : v = kT().x(ru).y(nu), v.defined(dc).curve(d), v(h);
}, Zi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? M7(t) : i;
  return /* @__PURE__ */ j.createElement("path", Ng({}, we(t, !1), Ac(t), {
    className: Me("recharts-curve", r),
    d: o,
    ref: a
  }));
}, hc = { exports: {} }, pc = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WS;
function R7() {
  if (WS) return Ke;
  WS = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function A(x) {
    if (typeof x == "object" && x !== null) {
      var S = x.$$typeof;
      switch (S) {
        case t:
          switch (x = x.type, x) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case d:
                case b:
                case y:
                case o:
                  return x;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function P(x) {
    return A(x) === f;
  }
  return Ke.AsyncMode = l, Ke.ConcurrentMode = f, Ke.ContextConsumer = s, Ke.ContextProvider = o, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = n, Ke.Lazy = b, Ke.Memo = y, Ke.Portal = r, Ke.Profiler = a, Ke.StrictMode = i, Ke.Suspense = h, Ke.isAsyncMode = function(x) {
    return P(x) || A(x) === l;
  }, Ke.isConcurrentMode = P, Ke.isContextConsumer = function(x) {
    return A(x) === s;
  }, Ke.isContextProvider = function(x) {
    return A(x) === o;
  }, Ke.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ke.isForwardRef = function(x) {
    return A(x) === d;
  }, Ke.isFragment = function(x) {
    return A(x) === n;
  }, Ke.isLazy = function(x) {
    return A(x) === b;
  }, Ke.isMemo = function(x) {
    return A(x) === y;
  }, Ke.isPortal = function(x) {
    return A(x) === r;
  }, Ke.isProfiler = function(x) {
    return A(x) === a;
  }, Ke.isStrictMode = function(x) {
    return A(x) === i;
  }, Ke.isSuspense = function(x) {
    return A(x) === h;
  }, Ke.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === h || x === v || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === y || x.$$typeof === o || x.$$typeof === s || x.$$typeof === d || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === O || x.$$typeof === m);
  }, Ke.typeOf = A, Ke;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zS;
function I7() {
  return zS || (zS = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === n || z === f || z === a || z === i || z === h || z === v || typeof z == "object" && z !== null && (z.$$typeof === b || z.$$typeof === y || z.$$typeof === o || z.$$typeof === s || z.$$typeof === d || z.$$typeof === g || z.$$typeof === _ || z.$$typeof === O || z.$$typeof === m);
    }
    function P(z) {
      if (typeof z == "object" && z !== null) {
        var Te = z.$$typeof;
        switch (Te) {
          case t:
            var oe = z.type;
            switch (oe) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return oe;
              default:
                var Be = oe && oe.$$typeof;
                switch (Be) {
                  case s:
                  case d:
                  case b:
                  case y:
                  case o:
                    return Be;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var x = l, S = f, T = s, R = o, I = t, q = d, $ = n, D = b, L = y, F = r, G = a, U = i, X = h, Z = !1;
    function ie(z) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(z) || P(z) === l;
    }
    function H(z) {
      return P(z) === f;
    }
    function K(z) {
      return P(z) === s;
    }
    function re(z) {
      return P(z) === o;
    }
    function se(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function de(z) {
      return P(z) === d;
    }
    function ye(z) {
      return P(z) === n;
    }
    function me(z) {
      return P(z) === b;
    }
    function he(z) {
      return P(z) === y;
    }
    function pe(z) {
      return P(z) === r;
    }
    function te(z) {
      return P(z) === a;
    }
    function le(z) {
      return P(z) === i;
    }
    function be(z) {
      return P(z) === h;
    }
    Ve.AsyncMode = x, Ve.ConcurrentMode = S, Ve.ContextConsumer = T, Ve.ContextProvider = R, Ve.Element = I, Ve.ForwardRef = q, Ve.Fragment = $, Ve.Lazy = D, Ve.Memo = L, Ve.Portal = F, Ve.Profiler = G, Ve.StrictMode = U, Ve.Suspense = X, Ve.isAsyncMode = ie, Ve.isConcurrentMode = H, Ve.isContextConsumer = K, Ve.isContextProvider = re, Ve.isElement = se, Ve.isForwardRef = de, Ve.isFragment = ye, Ve.isLazy = me, Ve.isMemo = he, Ve.isPortal = pe, Ve.isProfiler = te, Ve.isStrictMode = le, Ve.isSuspense = be, Ve.isValidElementType = A, Ve.typeOf = P;
  }()), Ve;
}
var US;
function L2() {
  return US || (US = 1, process.env.NODE_ENV === "production" ? pc.exports = R7() : pc.exports = I7()), pc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vy, HS;
function $7() {
  if (HS) return vy;
  HS = 1;
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
  return vy = i() ? Object.assign : function(a, o) {
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
  }, vy;
}
var yy, GS;
function Pb() {
  if (GS) return yy;
  GS = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yy = e, yy;
}
var gy, KS;
function q2() {
  return KS || (KS = 1, gy = Function.call.bind(Object.prototype.hasOwnProperty)), gy;
}
var my, VS;
function j7() {
  if (VS) return my;
  VS = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Pb(), r = {}, n = /* @__PURE__ */ q2();
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
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var y = f ? f() : "";
            e(
              "Failed " + s + " type: " + h.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, my = i, my;
}
var by, YS;
function k7() {
  if (YS) return by;
  YS = 1;
  var e = L2(), t = $7(), r = /* @__PURE__ */ Pb(), n = /* @__PURE__ */ q2(), i = /* @__PURE__ */ j7(), a = function() {
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
  return by = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(H) {
      var K = H && (f && H[f] || H[d]);
      if (typeof K == "function")
        return K;
    }
    var v = "<<anonymous>>", y = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: O(),
      arrayOf: A,
      element: P(),
      elementType: x(),
      instanceOf: S,
      node: q(),
      objectOf: R,
      oneOf: T,
      oneOfType: I,
      shape: D,
      exact: L
    };
    function b(H, K) {
      return H === K ? H !== 0 || 1 / H === 1 / K : H !== H && K !== K;
    }
    function m(H, K) {
      this.message = H, this.data = K && typeof K == "object" ? K : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(H) {
      if (process.env.NODE_ENV !== "production")
        var K = {}, re = 0;
      function se(ye, me, he, pe, te, le, be) {
        if (pe = pe || v, le = le || he, be !== r) {
          if (l) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = pe + ":" + he;
            !K[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + le + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), K[Te] = !0, re++);
          }
        }
        return me[he] == null ? ye ? me[he] === null ? new m("The " + te + " `" + le + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new m("The " + te + " `" + le + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : H(me, he, pe, te, le);
      }
      var de = se.bind(null, !1);
      return de.isRequired = se.bind(null, !0), de;
    }
    function _(H) {
      function K(re, se, de, ye, me, he) {
        var pe = re[se], te = U(pe);
        if (te !== H) {
          var le = X(pe);
          return new m(
            "Invalid " + ye + " `" + me + "` of type " + ("`" + le + "` supplied to `" + de + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return g(K);
    }
    function O() {
      return g(o);
    }
    function A(H) {
      function K(re, se, de, ye, me) {
        if (typeof H != "function")
          return new m("Property `" + me + "` of component `" + de + "` has invalid PropType notation inside arrayOf.");
        var he = re[se];
        if (!Array.isArray(he)) {
          var pe = U(he);
          return new m("Invalid " + ye + " `" + me + "` of type " + ("`" + pe + "` supplied to `" + de + "`, expected an array."));
        }
        for (var te = 0; te < he.length; te++) {
          var le = H(he, te, de, ye, me + "[" + te + "]", r);
          if (le instanceof Error)
            return le;
        }
        return null;
      }
      return g(K);
    }
    function P() {
      function H(K, re, se, de, ye) {
        var me = K[re];
        if (!s(me)) {
          var he = U(me);
          return new m("Invalid " + de + " `" + ye + "` of type " + ("`" + he + "` supplied to `" + se + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(H);
    }
    function x() {
      function H(K, re, se, de, ye) {
        var me = K[re];
        if (!e.isValidElementType(me)) {
          var he = U(me);
          return new m("Invalid " + de + " `" + ye + "` of type " + ("`" + he + "` supplied to `" + se + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(H);
    }
    function S(H) {
      function K(re, se, de, ye, me) {
        if (!(re[se] instanceof H)) {
          var he = H.name || v, pe = ie(re[se]);
          return new m("Invalid " + ye + " `" + me + "` of type " + ("`" + pe + "` supplied to `" + de + "`, expected ") + ("instance of `" + he + "`."));
        }
        return null;
      }
      return g(K);
    }
    function T(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function K(re, se, de, ye, me) {
        for (var he = re[se], pe = 0; pe < H.length; pe++)
          if (b(he, H[pe]))
            return null;
        var te = JSON.stringify(H, function(be, z) {
          var Te = X(z);
          return Te === "symbol" ? String(z) : z;
        });
        return new m("Invalid " + ye + " `" + me + "` of value `" + String(he) + "` " + ("supplied to `" + de + "`, expected one of " + te + "."));
      }
      return g(K);
    }
    function R(H) {
      function K(re, se, de, ye, me) {
        if (typeof H != "function")
          return new m("Property `" + me + "` of component `" + de + "` has invalid PropType notation inside objectOf.");
        var he = re[se], pe = U(he);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + me + "` of type " + ("`" + pe + "` supplied to `" + de + "`, expected an object."));
        for (var te in he)
          if (n(he, te)) {
            var le = H(he, te, de, ye, me + "." + te, r);
            if (le instanceof Error)
              return le;
          }
        return null;
      }
      return g(K);
    }
    function I(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var K = 0; K < H.length; K++) {
        var re = H[K];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(re) + " at index " + K + "."
          ), o;
      }
      function se(de, ye, me, he, pe) {
        for (var te = [], le = 0; le < H.length; le++) {
          var be = H[le], z = be(de, ye, me, he, pe, r);
          if (z == null)
            return null;
          z.data && n(z.data, "expectedType") && te.push(z.data.expectedType);
        }
        var Te = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new m("Invalid " + he + " `" + pe + "` supplied to " + ("`" + me + "`" + Te + "."));
      }
      return g(se);
    }
    function q() {
      function H(K, re, se, de, ye) {
        return F(K[re]) ? null : new m("Invalid " + de + " `" + ye + "` supplied to " + ("`" + se + "`, expected a ReactNode."));
      }
      return g(H);
    }
    function $(H, K, re, se, de) {
      return new m(
        (H || "React class") + ": " + K + " type `" + re + "." + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + de + "`."
      );
    }
    function D(H) {
      function K(re, se, de, ye, me) {
        var he = re[se], pe = U(he);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + me + "` of type `" + pe + "` " + ("supplied to `" + de + "`, expected `object`."));
        for (var te in H) {
          var le = H[te];
          if (typeof le != "function")
            return $(de, ye, me, te, X(le));
          var be = le(he, te, de, ye, me + "." + te, r);
          if (be)
            return be;
        }
        return null;
      }
      return g(K);
    }
    function L(H) {
      function K(re, se, de, ye, me) {
        var he = re[se], pe = U(he);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + me + "` of type `" + pe + "` " + ("supplied to `" + de + "`, expected `object`."));
        var te = t({}, re[se], H);
        for (var le in te) {
          var be = H[le];
          if (n(H, le) && typeof be != "function")
            return $(de, ye, me, le, X(be));
          if (!be)
            return new m(
              "Invalid " + ye + " `" + me + "` key `" + le + "` supplied to `" + de + "`.\nBad object: " + JSON.stringify(re[se], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var z = be(he, le, de, ye, me + "." + le, r);
          if (z)
            return z;
        }
        return null;
      }
      return g(K);
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
          var K = h(H);
          if (K) {
            var re = K.call(H), se;
            if (K !== H.entries) {
              for (; !(se = re.next()).done; )
                if (!F(se.value))
                  return !1;
            } else
              for (; !(se = re.next()).done; ) {
                var de = se.value;
                if (de && !F(de[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(H, K) {
      return H === "symbol" ? !0 : K ? K["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && K instanceof Symbol : !1;
    }
    function U(H) {
      var K = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : G(K, H) ? "symbol" : K;
    }
    function X(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var K = U(H);
      if (K === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return K;
    }
    function Z(H) {
      var K = X(H);
      switch (K) {
        case "array":
        case "object":
          return "an " + K;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + K;
        default:
          return K;
      }
    }
    function ie(H) {
      return !H.constructor || !H.constructor.name ? v : H.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, by;
}
var xy, XS;
function D7() {
  if (XS) return xy;
  XS = 1;
  var e = /* @__PURE__ */ Pb();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, xy = function() {
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
  }, xy;
}
var ZS;
function N7() {
  if (ZS) return hc.exports;
  if (ZS = 1, process.env.NODE_ENV !== "production") {
    var e = L2(), t = !0;
    hc.exports = /* @__PURE__ */ k7()(e.isElement, t);
  } else
    hc.exports = /* @__PURE__ */ D7()();
  return hc.exports;
}
var L7 = /* @__PURE__ */ N7();
const Ye = /* @__PURE__ */ Je(L7);
var q7 = Object.getOwnPropertyNames, B7 = Object.getOwnPropertySymbols, F7 = Object.prototype.hasOwnProperty;
function JS(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function vc(e) {
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
function QS(e) {
  return q7(e).concat(B7(e));
}
var W7 = Object.hasOwn || function(e, t) {
  return F7.call(e, t);
};
function sa(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var z7 = "__v", U7 = "__o", H7 = "_owner", eP = Object.getOwnPropertyDescriptor, tP = Object.keys;
function G7(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function K7(e, t) {
  return sa(e.getTime(), t.getTime());
}
function V7(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Y7(e, t) {
  return e === t;
}
function rP(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, s, l = 0; (o = a.next()) && !o.done; ) {
    for (var f = t.entries(), d = !1, h = 0; (s = f.next()) && !s.done; ) {
      if (i[h]) {
        h++;
        continue;
      }
      var v = o.value, y = s.value;
      if (r.equals(v[0], y[0], l, h, e, t, r) && r.equals(v[1], y[1], v[0], y[0], e, t, r)) {
        d = i[h] = !0;
        break;
      }
      h++;
    }
    if (!d)
      return !1;
    l++;
  }
  return !0;
}
var X7 = sa;
function Z7(e, t, r) {
  var n = tP(e), i = n.length;
  if (tP(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!B2(e, t, r, n[i]))
      return !1;
  return !0;
}
function iu(e, t, r) {
  var n = QS(e), i = n.length;
  if (QS(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], !B2(e, t, r, a) || (o = eP(e, a), s = eP(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function J7(e, t) {
  return sa(e.valueOf(), t.valueOf());
}
function Q7(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function nP(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, s; (o = a.next()) && !o.done; ) {
    for (var l = t.values(), f = !1, d = 0; (s = l.next()) && !s.done; ) {
      if (!i[d] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        f = i[d] = !0;
        break;
      }
      d++;
    }
    if (!f)
      return !1;
  }
  return !0;
}
function e9(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function t9(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function B2(e, t, r, n) {
  return (n === H7 || n === U7 || n === z7) && (e.$$typeof || t.$$typeof) ? !0 : W7(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var r9 = "[object Arguments]", n9 = "[object Boolean]", i9 = "[object Date]", a9 = "[object Error]", o9 = "[object Map]", u9 = "[object Number]", s9 = "[object Object]", c9 = "[object RegExp]", l9 = "[object Set]", f9 = "[object String]", d9 = "[object URL]", h9 = Array.isArray, iP = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, aP = Object.assign, p9 = Object.prototype.toString.call.bind(Object.prototype.toString);
function v9(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, l = e.arePrimitiveWrappersEqual, f = e.areRegExpsEqual, d = e.areSetsEqual, h = e.areTypedArraysEqual, v = e.areUrlsEqual;
  return function(b, m, g) {
    if (b === m)
      return !0;
    if (b == null || m == null)
      return !1;
    var _ = typeof b;
    if (_ !== typeof m)
      return !1;
    if (_ !== "object")
      return _ === "number" ? o(b, m, g) : _ === "function" ? i(b, m, g) : !1;
    var O = b.constructor;
    if (O !== m.constructor)
      return !1;
    if (O === Object)
      return s(b, m, g);
    if (h9(b))
      return t(b, m, g);
    if (iP != null && iP(b))
      return h(b, m, g);
    if (O === Date)
      return r(b, m, g);
    if (O === RegExp)
      return f(b, m, g);
    if (O === Map)
      return a(b, m, g);
    if (O === Set)
      return d(b, m, g);
    var A = p9(b);
    return A === i9 ? r(b, m, g) : A === c9 ? f(b, m, g) : A === o9 ? a(b, m, g) : A === l9 ? d(b, m, g) : A === s9 ? typeof b.then != "function" && typeof m.then != "function" && s(b, m, g) : A === d9 ? v(b, m, g) : A === a9 ? n(b, m, g) : A === r9 ? s(b, m, g) : A === n9 || A === u9 || A === f9 ? l(b, m, g) : !1;
  };
}
function y9(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? iu : G7,
    areDatesEqual: K7,
    areErrorsEqual: V7,
    areFunctionsEqual: Y7,
    areMapsEqual: n ? JS(rP, iu) : rP,
    areNumbersEqual: X7,
    areObjectsEqual: n ? iu : Z7,
    arePrimitiveWrappersEqual: J7,
    areRegExpsEqual: Q7,
    areSetsEqual: n ? JS(nP, iu) : nP,
    areTypedArraysEqual: n ? iu : e9,
    areUrlsEqual: t9
  };
  if (r && (i = aP({}, i, r(i))), t) {
    var a = vc(i.areArraysEqual), o = vc(i.areMapsEqual), s = vc(i.areObjectsEqual), l = vc(i.areSetsEqual);
    i = aP({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: l
    });
  }
  return i;
}
function g9(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function m9(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(l, f) {
      var d = n(), h = d.cache, v = h === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : h, y = d.meta;
      return r(l, f, {
        cache: v,
        equals: i,
        meta: y,
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
var b9 = Oi();
Oi({ strict: !0 });
Oi({ circular: !0 });
Oi({
  circular: !0,
  strict: !0
});
Oi({
  createInternalComparator: function() {
    return sa;
  }
});
Oi({
  strict: !0,
  createInternalComparator: function() {
    return sa;
  }
});
Oi({
  circular: !0,
  createInternalComparator: function() {
    return sa;
  }
});
Oi({
  circular: !0,
  createInternalComparator: function() {
    return sa;
  },
  strict: !0
});
function Oi(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = y9(e), l = v9(s), f = n ? n(l) : g9(l);
  return m9({ circular: r, comparator: l, createState: i, equals: f, strict: o });
}
function x9(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function oP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : x9(i);
  };
  requestAnimationFrame(n);
}
function Lg(e) {
  "@babel/helpers - typeof";
  return Lg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lg(e);
}
function w9(e) {
  return S9(e) || A9(e) || O9(e) || _9();
}
function _9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O9(e, t) {
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
function A9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function S9(e) {
  if (Array.isArray(e)) return e;
}
function P9() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = w9(o), l = s[0], f = s.slice(1);
        if (typeof l == "number") {
          oP(i.bind(null, f), l);
          return;
        }
        i(l), oP(i.bind(null, f));
        return;
      }
      Lg(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function qu(e) {
  "@babel/helpers - typeof";
  return qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qu(e);
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
      F2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F2(e, t, r) {
  return t = E9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E9(e) {
  var t = T9(e, "string");
  return qu(t) === "symbol" ? t : String(t);
}
function T9(e, t) {
  if (qu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C9 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, M9 = function(t) {
  return t;
}, R9 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return cP(cP({}, n), {}, F2({}, i, t(i, r[i])));
  }, {});
}, lP = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(R9(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, I9 = process.env.NODE_ENV !== "production", Jc = function(t, r, n, i, a, o, s, l) {
  if (I9 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, o, s, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function $9(e, t) {
  return D9(e) || k9(e, t) || W2(e, t) || j9();
}
function j9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k9(e, t) {
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
function D9(e) {
  if (Array.isArray(e)) return e;
}
function N9(e) {
  return B9(e) || q9(e) || W2(e) || L9();
}
function L9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W2(e, t) {
  if (e) {
    if (typeof e == "string") return qg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qg(e, t);
  }
}
function q9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function B9(e) {
  if (Array.isArray(e)) return qg(e);
}
function qg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qc = 1e-4, z2 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, U2 = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, fP = function(t, r) {
  return function(n) {
    var i = z2(t, r);
    return U2(i, n);
  };
}, F9 = function(t, r) {
  return function(n) {
    var i = z2(t, r), a = [].concat(N9(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return U2(a, n);
  };
}, dP = function() {
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
          var f = l[1].split(")")[0].split(",").map(function(g) {
            return parseFloat(g);
          }), d = $9(f, 4);
          i = d[0], a = d[1], o = d[2], s = d[3];
        } else
          Jc(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Jc([i, o, a, s].every(function(g) {
    return typeof g == "number" && g >= 0 && g <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = fP(i, o), v = fP(a, s), y = F9(i, o), b = function(_) {
    return _ > 1 ? 1 : _ < 0 ? 0 : _;
  }, m = function(_) {
    for (var O = _ > 1 ? 1 : _, A = O, P = 0; P < 8; ++P) {
      var x = h(A) - O, S = y(A);
      if (Math.abs(x - O) < Qc || S < Qc)
        return v(A);
      A = b(A - x / S);
    }
    return v(A);
  };
  return m.isStepper = !1, m;
}, W9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, l = function(d, h, v) {
    var y = -(d - h) * n, b = v * a, m = v + (y - b) * s / 1e3, g = v * s / 1e3 + d;
    return Math.abs(g - h) < Qc && Math.abs(m) < Qc ? [h, 0] : [g, m];
  };
  return l.isStepper = !0, l.dt = s, l;
}, z9 = function() {
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
        return dP(i);
      case "spring":
        return W9();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return dP(i);
        Jc(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (Jc(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Bu(e) {
  "@babel/helpers - typeof";
  return Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bu(e);
}
function hP(e) {
  return G9(e) || H9(e) || H2(e) || U9();
}
function U9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function G9(e) {
  if (Array.isArray(e)) return Fg(e);
}
function pP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pP(Object(r), !0).forEach(function(n) {
      Bg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bg(e, t, r) {
  return t = K9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K9(e) {
  var t = V9(e, "string");
  return Bu(t) === "symbol" ? t : String(t);
}
function V9(e, t) {
  if (Bu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y9(e, t) {
  return J9(e) || Z9(e, t) || H2(e, t) || X9();
}
function X9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H2(e, t) {
  if (e) {
    if (typeof e == "string") return Fg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fg(e, t);
  }
}
function Fg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Z9(e, t) {
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
function J9(e) {
  if (Array.isArray(e)) return e;
}
var el = function(t, r, n) {
  return t + (r - t) * n;
}, Wg = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, Q9 = function e(t, r, n) {
  var i = hu(function(a, o) {
    if (Wg(o)) {
      var s = t(o.from, o.to, o.velocity), l = Y9(s, 2), f = l[0], d = l[1];
      return jt(jt({}, o), {}, {
        from: f,
        velocity: d
      });
    }
    return o;
  }, r);
  return n < 1 ? hu(function(a, o) {
    return Wg(o) ? jt(jt({}, o), {}, {
      velocity: el(o.velocity, i[a].velocity, n),
      from: el(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const eH = function(e, t, r, n, i) {
  var a = C9(e, t), o = a.reduce(function(g, _) {
    return jt(jt({}, g), {}, Bg({}, _, [e[_], t[_]]));
  }, {}), s = a.reduce(function(g, _) {
    return jt(jt({}, g), {}, Bg({}, _, {
      from: e[_],
      velocity: 0,
      to: t[_]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return hu(function(_, O) {
      return O.from;
    }, s);
  }, y = function() {
    return !Object.values(s).filter(Wg).length;
  }, b = function(_) {
    f || (f = _);
    var O = _ - f, A = O / r.dt;
    s = Q9(r, s, A), i(jt(jt(jt({}, e), t), v())), f = _, y() || (l = requestAnimationFrame(h));
  }, m = function(_) {
    d || (d = _);
    var O = (_ - d) / n, A = hu(function(x, S) {
      return el.apply(void 0, hP(S).concat([r(O)]));
    }, o);
    if (i(jt(jt(jt({}, e), t), A)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var P = hu(function(x, S) {
        return el.apply(void 0, hP(S).concat([r(1)]));
      }, o);
      i(jt(jt(jt({}, e), t), P));
    }
  };
  return h = r.isStepper ? b : m, function() {
    return requestAnimationFrame(h), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
}
var tH = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function rH(e, t) {
  if (e == null) return {};
  var r = nH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nH(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function wy(e) {
  return uH(e) || oH(e) || aH(e) || iH();
}
function iH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aH(e, t) {
  if (e) {
    if (typeof e == "string") return zg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zg(e, t);
  }
}
function oH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function uH(e) {
  if (Array.isArray(e)) return zg(e);
}
function zg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vP(Object(r), !0).forEach(function(n) {
      su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function su(e, t, r) {
  return t = G2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, G2(n.key), n);
  }
}
function lH(e, t, r) {
  return t && cH(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function G2(e) {
  var t = fH(e, "string");
  return Ya(t) === "symbol" ? t : String(t);
}
function fH(e, t) {
  if (Ya(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ya(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ug(e, t);
}
function Ug(e, t) {
  return Ug = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ug(e, t);
}
function hH(e) {
  var t = pH();
  return function() {
    var n = tl(e), i;
    if (t) {
      var a = tl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Hg(this, i);
  };
}
function Hg(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gg(e);
}
function Gg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function tl(e) {
  return tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tl(e);
}
var Jr = /* @__PURE__ */ function(e) {
  dH(r, e);
  var t = hH(r);
  function r(n, i) {
    var a;
    sH(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, l = o.attributeName, f = o.from, d = o.to, h = o.steps, v = o.children, y = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Gg(a)), a.changeStyle = a.changeStyle.bind(Gg(a)), !s || y <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), Hg(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, Hg(a);
      a.state = {
        style: l ? su({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return lH(r, [{
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
          var y = {
            style: l ? su({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(y);
          return;
        }
        if (!(b9(i.to, d) && i.canBegin && i.isActive)) {
          var b = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var m = b || f ? h : i.to;
          if (this.state && v) {
            var g = {
              style: l ? su({}, l, m) : m
            };
            (l && v[l] !== m || !l && v !== m) && this.setState(g);
          }
          this.runAnimation(Ur(Ur({}, this.props), {}, {
            from: m,
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
      var a = this, o = i.from, s = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, y = eH(o, s, z9(f), l, this.changeStyle), b = function() {
        a.stopJSAnimation = y();
      };
      this.manager.start([v, d, b, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, l = i.onAnimationStart, f = o[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, y = function(m, g, _) {
        if (_ === 0)
          return m;
        var O = g.duration, A = g.easing, P = A === void 0 ? "ease" : A, x = g.style, S = g.properties, T = g.onAnimationEnd, R = _ > 0 ? o[_ - 1] : g, I = S || Object.keys(x);
        if (typeof P == "function" || P === "spring")
          return [].concat(wy(m), [a.runJSAnimation.bind(a, {
            from: R.style,
            to: x,
            duration: O,
            easing: P
          }), O]);
        var q = lP(I, O, P), $ = Ur(Ur(Ur({}, R.style), x), {}, {
          transition: q
        });
        return [].concat(wy(m), [$, O, T]).filter(M9);
      };
      return this.manager.start([l].concat(wy(o.reduce(y, [d, Math.max(v, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = P9());
      var a = i.begin, o = i.duration, s = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, y = i.children, b = this.manager;
      if (this.unSubscribe = b.subscribe(this.handleStyleChange), typeof f == "function" || typeof y == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var m = s ? su({}, s, l) : l, g = lP(Object.keys(m), o, f);
      b.start([d, a, Ur(Ur({}, m), {}, {
        transition: g
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
      var l = rH(i, tH), f = Ki.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!s || f === 0 || o <= 0)
        return a;
      var h = function(y) {
        var b = y.props, m = b.style, g = m === void 0 ? {} : m, _ = b.className, O = /* @__PURE__ */ At(y, Ur(Ur({}, l), {}, {
          style: Ur(Ur({}, g), d),
          className: _
        }));
        return O;
      };
      return f === 1 ? h(Ki.only(a)) : /* @__PURE__ */ j.createElement("div", null, Ki.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Nr);
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
  from: Ye.oneOfType([Ye.object, Ye.string]),
  to: Ye.oneOfType([Ye.object, Ye.string]),
  attributeName: Ye.string,
  // animation duration
  duration: Ye.number,
  begin: Ye.number,
  easing: Ye.oneOfType([Ye.string, Ye.func]),
  steps: Ye.arrayOf(Ye.shape({
    duration: Ye.number.isRequired,
    style: Ye.object.isRequired,
    easing: Ye.oneOfType([Ye.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ye.func]),
    // transition css properties(dash case), optional
    properties: Ye.arrayOf("string"),
    onAnimationEnd: Ye.func
  })),
  children: Ye.oneOfType([Ye.node, Ye.func]),
  isActive: Ye.bool,
  canBegin: Ye.bool,
  onAnimationEnd: Ye.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Ye.bool,
  onAnimationStart: Ye.func,
  onAnimationReStart: Ye.func
};
function Fu(e) {
  "@babel/helpers - typeof";
  return Fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fu(e);
}
function rl() {
  return rl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rl.apply(this, arguments);
}
function vH(e, t) {
  return bH(e) || mH(e, t) || gH(e, t) || yH();
}
function yH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gH(e, t) {
  if (e) {
    if (typeof e == "string") return yP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yP(e, t);
  }
}
function yP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mH(e, t) {
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
function bH(e) {
  if (Array.isArray(e)) return e;
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
function mP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gP(Object(r), !0).forEach(function(n) {
      xH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xH(e, t, r) {
  return t = wH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wH(e) {
  var t = _H(e, "string");
  return Fu(t) == "symbol" ? t : t + "";
}
function _H(e, t) {
  if (Fu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bP = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (o > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, y = 4; v < y; v++)
      h[v] = a[v] > o ? o : a[v];
    d = "M".concat(t, ",").concat(r + s * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + s * h[1])), d += "L ".concat(t + n, ",").concat(r + i - s * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - s * h[3])), d += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var b = Math.min(o, a);
    d = "M ".concat(t, ",").concat(r + s * b, `
            A `).concat(b, ",").concat(b, ",0,0,").concat(f, ",").concat(t + l * b, ",").concat(r, `
            L `).concat(t + n - l * b, ",").concat(r, `
            A `).concat(b, ",").concat(b, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + s * b, `
            L `).concat(t + n, ",").concat(r + i - s * b, `
            A `).concat(b, ",").concat(b, ",0,0,").concat(f, ",").concat(t + n - l * b, ",").concat(r + i, `
            L `).concat(t + l * b, ",").concat(r + i, `
            A `).concat(b, ",").concat(b, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - s * b, " Z");
  } else
    d = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return d;
}, OH = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + s), d = Math.max(a, a + s), h = Math.min(o, o + l), v = Math.max(o, o + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, AH = {
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
}, Eb = function(t) {
  var r = mP(mP({}, AH), t), n = Yt(), i = Zt(-1), a = vH(i, 2), o = a[0], s = a[1];
  Xt(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var P = n.current.getTotalLength();
        P && s(P);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, y = r.className, b = r.animationEasing, m = r.animationDuration, g = r.animationBegin, _ = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var A = Me("recharts-rectangle", y);
  return O ? /* @__PURE__ */ j.createElement(Jr, {
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
    duration: m,
    animationEasing: b,
    isActive: O
  }, function(P) {
    var x = P.width, S = P.height, T = P.x, R = P.y;
    return /* @__PURE__ */ j.createElement(Jr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: g,
      duration: m,
      isActive: _,
      easing: b
    }, /* @__PURE__ */ j.createElement("path", rl({}, we(r, !0), {
      className: A,
      d: bP(T, R, x, S, v),
      ref: n
    })));
  }) : /* @__PURE__ */ j.createElement("path", rl({}, we(r, !0), {
    className: A,
    d: bP(l, f, d, h, v)
  }));
}, SH = ["points", "className", "baseLinePoints", "connectNulls"];
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
function PH(e, t) {
  if (e == null) return {};
  var r = EH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xP(e) {
  return RH(e) || MH(e) || CH(e) || TH();
}
function TH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CH(e, t) {
  if (e) {
    if (typeof e == "string") return Kg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kg(e, t);
  }
}
function MH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RH(e) {
  if (Array.isArray(e)) return Kg(e);
}
function Kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var wP = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, IH = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    wP(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), wP(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, pu = function(t, r) {
  var n = IH(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(xP(a), xP(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, l) {
      return "".concat(o).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, $H = function(t, r, n) {
  var i = pu(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(pu(r.reverse(), n).slice(1));
}, jH = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = PH(t, SH);
  if (!r || !r.length)
    return null;
  var s = Me("recharts-polygon", n);
  if (i && i.length) {
    var l = o.stroke && o.stroke !== "none", f = $H(r, i, a);
    return /* @__PURE__ */ j.createElement("g", {
      className: s
    }, /* @__PURE__ */ j.createElement("path", Ma({}, we(o, !0), {
      fill: f.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ j.createElement("path", Ma({}, we(o, !0), {
      fill: "none",
      d: pu(r, a)
    })) : null, l ? /* @__PURE__ */ j.createElement("path", Ma({}, we(o, !0), {
      fill: "none",
      d: pu(i, a)
    })) : null);
  }
  var d = pu(r, a);
  return /* @__PURE__ */ j.createElement("path", Ma({}, we(o, !0), {
    fill: d.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d
  }));
};
function Vg() {
  return Vg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vg.apply(this, arguments);
}
var us = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = Me("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ j.createElement("circle", Vg({}, we(t, !1), Ac(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Wu(e) {
  "@babel/helpers - typeof";
  return Wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wu(e);
}
var kH = ["x", "y", "top", "left", "width", "height", "className"];
function Yg() {
  return Yg = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yg.apply(this, arguments);
}
function _P(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function DH(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _P(Object(r), !0).forEach(function(n) {
      NH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _P(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NH(e, t, r) {
  return t = LH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LH(e) {
  var t = qH(e, "string");
  return Wu(t) == "symbol" ? t : t + "";
}
function qH(e, t) {
  if (Wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BH(e, t) {
  if (e == null) return {};
  var r = FH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var WH = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, zH = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, y = v === void 0 ? 0 : v, b = t.className, m = BH(t, kH), g = DH({
    x: n,
    y: a,
    top: s,
    left: f,
    width: h,
    height: y
  }, m);
  return !ce(n) || !ce(a) || !ce(h) || !ce(y) || !ce(s) || !ce(f) ? null : /* @__PURE__ */ j.createElement("path", Yg({}, we(g, !0), {
    className: Me("recharts-cross", b),
    d: WH(n, a, h, y, s, f)
  }));
}, _y, OP;
function UH() {
  if (OP) return _y;
  OP = 1;
  var e = Vl(), t = a2(), r = yn();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return _y = n, _y;
}
var HH = UH();
const GH = /* @__PURE__ */ Je(HH);
var Oy, AP;
function KH() {
  if (AP) return Oy;
  AP = 1;
  var e = Vl(), t = yn(), r = o2();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return Oy = n, Oy;
}
var VH = KH();
const YH = /* @__PURE__ */ Je(VH);
var XH = ["cx", "cy", "angle", "ticks", "axisLine"], ZH = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
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
function SP(e, t) {
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
    t % 2 ? SP(Object(r), !0).forEach(function(n) {
      Jl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PP(e, t) {
  if (e == null) return {};
  var r = JH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function JH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function QH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V2(n.key), n);
  }
}
function eG(e, t, r) {
  return t && EP(e.prototype, t), r && EP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tG(e, t, r) {
  return t = nl(t), rG(e, K2() ? Reflect.construct(t, r || [], nl(e).constructor) : t.apply(e, r));
}
function rG(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nG(e);
}
function nG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
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
function nl(e) {
  return nl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nl(e);
}
function iG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xg(e, t);
}
function Xg(e, t) {
  return Xg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xg(e, t);
}
function Jl(e, t, r) {
  return t = V2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V2(e) {
  var t = aG(e, "string");
  return Xa(t) == "symbol" ? t : t + "";
}
function aG(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ql = /* @__PURE__ */ function(e) {
  function t() {
    return QH(this, t), tG(this, t, arguments);
  }
  return iG(t, e), eG(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, s = a.cx, l = a.cy;
        return ot(s, l, i, o);
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
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = GH(s, function(d) {
        return d.coordinate || 0;
      }), f = YH(s, function(d) {
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
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = n.axisLine, f = PP(n, XH), d = s.reduce(function(b, m) {
        return [Math.min(b[0], m.coordinate), Math.max(b[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), h = ot(i, a, d[0], o), v = ot(i, a, d[1], o), y = Di(Di(Di({}, we(f, !1)), {}, {
        fill: "none"
      }, we(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ j.createElement("line", vu({
        className: "recharts-polar-radius-axis-line"
      }, y));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.angle, l = i.tickFormatter, f = i.stroke, d = PP(i, ZH), h = this.getTickTextAnchor(), v = we(d, !1), y = we(o, !1), b = a.map(function(m, g) {
        var _ = n.getTickValueCoord(m), O = Di(Di(Di(Di({
          textAnchor: h,
          transform: "rotate(".concat(90 - s, ", ").concat(_.x, ", ").concat(_.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, y), {}, {
          index: g
        }, _), {}, {
          payload: m
        });
        return /* @__PURE__ */ j.createElement(Ne, vu({
          className: Me("recharts-polar-radius-axis-tick", j2(o)),
          key: "tick-".concat(m.coordinate)
        }, Ji(n.props, m, g)), t.renderTickItem(o, O, l ? l(m.value, g) : m.value));
      });
      return /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-polar-radius-axis-ticks"
      }, b);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ j.createElement(Ne, {
        className: Me("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), Pt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ j.isValidElement(n) ? o = /* @__PURE__ */ j.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ j.createElement(vi, vu({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]);
}(Nr);
Jl(Ql, "displayName", "PolarRadiusAxis");
Jl(Ql, "axisType", "radiusAxis");
Jl(Ql, "defaultProps", {
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
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
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
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? TP(Object(r), !0).forEach(function(n) {
      ef(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X2(n.key), n);
  }
}
function uG(e, t, r) {
  return t && CP(e.prototype, t), r && CP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sG(e, t, r) {
  return t = il(t), cG(e, Y2() ? Reflect.construct(t, r || [], il(e).constructor) : t.apply(e, r));
}
function cG(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lG(e);
}
function lG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Y2 = function() {
    return !!e;
  })();
}
function il(e) {
  return il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, il(e);
}
function fG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zg(e, t);
}
function Zg(e, t) {
  return Zg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zg(e, t);
}
function ef(e, t, r) {
  return t = X2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X2(e) {
  var t = dG(e, "string");
  return Za(t) == "symbol" ? t : t + "";
}
function dG(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hG = Math.PI / 180, pG = 1e-5, tf = /* @__PURE__ */ function(e) {
  function t() {
    return oG(this, t), sG(this, t, arguments);
  }
  return fG(t, e), uG(t, [{
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
        var i = this.props, a = i.cx, o = i.cy, s = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = ot(a, o, s, n.coordinate), v = ot(a, o, s + (l === "inner" ? -1 : 1) * d, n.coordinate);
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
      var i = this.props.orientation, a = Math.cos(-n.coordinate * hG), o;
      return a > pG ? o = i === "outer" ? "start" : "end" : a < -1e-5 ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, s = n.axisLine, l = n.axisLineType, f = Ni(Ni({}, we(this.props, !1)), {}, {
        fill: "none"
      }, we(s, !1));
      if (l === "circle")
        return /* @__PURE__ */ j.createElement(us, Fi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: o
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return ot(i, a, o, v.coordinate);
      });
      return /* @__PURE__ */ j.createElement(jH, Fi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.tickLine, l = i.tickFormatter, f = i.stroke, d = we(this.props, !1), h = we(o, !1), v = Ni(Ni({}, d), {}, {
        fill: "none"
      }, we(s, !1)), y = a.map(function(b, m) {
        var g = n.getTickLineCoord(b), _ = n.getTickTextAnchor(b), O = Ni(Ni(Ni({
          textAnchor: _
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: m,
          payload: b,
          x: g.x2,
          y: g.y2
        });
        return /* @__PURE__ */ j.createElement(Ne, Fi({
          className: Me("recharts-polar-angle-axis-tick", j2(o)),
          key: "tick-".concat(b.coordinate)
        }, Ji(n.props, b, m)), s && /* @__PURE__ */ j.createElement("line", Fi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, g)), o && t.renderTickItem(o, O, l ? l(b.value, m) : b.value));
      });
      return /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-polar-angle-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ j.createElement(Ne, {
        className: Me("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ j.isValidElement(n) ? o = /* @__PURE__ */ j.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ j.createElement(vi, Fi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]);
}(Nr);
ef(tf, "displayName", "PolarAngleAxis");
ef(tf, "axisType", "angleAxis");
ef(tf, "defaultProps", {
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
var Ay, MP;
function vG() {
  if (MP) return Ay;
  MP = 1;
  var e = iC(), t = e(Object.getPrototypeOf, Object);
  return Ay = t, Ay;
}
var Sy, RP;
function yG() {
  if (RP) return Sy;
  RP = 1;
  var e = zn(), t = vG(), r = Un(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, s = a.hasOwnProperty, l = o.call(Object);
  function f(d) {
    if (!r(d) || e(d) != n)
      return !1;
    var h = t(d);
    if (h === null)
      return !0;
    var v = s.call(h, "constructor") && h.constructor;
    return typeof v == "function" && v instanceof v && o.call(v) == l;
  }
  return Sy = f, Sy;
}
var gG = yG();
const mG = /* @__PURE__ */ Je(gG);
var Py, IP;
function bG() {
  if (IP) return Py;
  IP = 1;
  var e = zn(), t = Un(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return Py = n, Py;
}
var xG = bG();
const wG = /* @__PURE__ */ Je(xG);
function zu(e) {
  "@babel/helpers - typeof";
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
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
function _G(e, t) {
  return PG(e) || SG(e, t) || AG(e, t) || OG();
}
function OG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AG(e, t) {
  if (e) {
    if (typeof e == "string") return $P(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $P(e, t);
  }
}
function $P(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SG(e, t) {
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
function PG(e) {
  if (Array.isArray(e)) return e;
}
function jP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jP(Object(r), !0).forEach(function(n) {
      EG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EG(e, t, r) {
  return t = TG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TG(e) {
  var t = CG(e, "string");
  return zu(t) == "symbol" ? t : t + "";
}
function CG(e, t) {
  if (zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var DP = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, MG = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, RG = function(t) {
  var r = kP(kP({}, MG), t), n = Yt(), i = Zt(-1), a = _G(i, 2), o = a[0], s = a[1];
  Xt(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var A = n.current.getTotalLength();
        A && s(A);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, y = r.className, b = r.animationEasing, m = r.animationDuration, g = r.animationBegin, _ = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Me("recharts-trapezoid", y);
  return _ ? /* @__PURE__ */ j.createElement(Jr, {
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
    duration: m,
    animationEasing: b,
    isActive: _
  }, function(A) {
    var P = A.upperWidth, x = A.lowerWidth, S = A.height, T = A.x, R = A.y;
    return /* @__PURE__ */ j.createElement(Jr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: g,
      duration: m,
      easing: b
    }, /* @__PURE__ */ j.createElement("path", al({}, we(r, !0), {
      className: O,
      d: DP(T, R, P, x, S),
      ref: n
    })));
  }) : /* @__PURE__ */ j.createElement("g", null, /* @__PURE__ */ j.createElement("path", al({}, we(r, !0), {
    className: O,
    d: DP(l, f, d, h, v)
  })));
}, IG = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Uu(e) {
  "@babel/helpers - typeof";
  return Uu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uu(e);
}
function $G(e, t) {
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
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? NP(Object(r), !0).forEach(function(n) {
      kG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : NP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kG(e, t, r) {
  return t = DG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DG(e) {
  var t = NG(e, "string");
  return Uu(t) == "symbol" ? t : t + "";
}
function NG(e, t) {
  if (Uu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Uu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LG(e, t) {
  return ol(ol({}, t), e);
}
function qG(e, t) {
  return e === "symbols";
}
function LP(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ j.createElement(Eb, r);
    case "trapezoid":
      return /* @__PURE__ */ j.createElement(RG, r);
    case "sector":
      return /* @__PURE__ */ j.createElement(N2, r);
    case "symbols":
      if (qG(t))
        return /* @__PURE__ */ j.createElement(Hm, r);
      break;
    default:
      return null;
  }
}
function BG(e) {
  return /* @__PURE__ */ Vr(e) ? e.props : e;
}
function Z2(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? LG : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = $G(e, IG), f;
  if (/* @__PURE__ */ Vr(t))
    f = /* @__PURE__ */ At(t, ol(ol({}, l), BG(t)));
  else if (Pe(t))
    f = t(l);
  else if (mG(t) && !wG(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ j.createElement(LP, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ j.createElement(LP, {
      shapeType: r,
      elementProps: h
    });
  }
  return s ? /* @__PURE__ */ j.createElement(Ne, {
    className: o
  }, f) : f;
}
function rf(e, t) {
  return t != null && "trapezoids" in e.props;
}
function nf(e, t) {
  return t != null && "sectors" in e.props;
}
function Hu(e, t) {
  return t != null && "points" in e.props;
}
function FG(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function WG(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function zG(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function UG(e, t) {
  var r;
  return rf(e, t) ? r = FG : nf(e, t) ? r = WG : Hu(e, t) && (r = zG), r;
}
function HG(e, t) {
  var r;
  return rf(e, t) ? r = "trapezoids" : nf(e, t) ? r = "sectors" : Hu(e, t) && (r = "points"), r;
}
function GG(e, t) {
  if (rf(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (nf(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Hu(e, t) ? t.payload : {};
}
function KG(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = HG(r, t), a = GG(r, t), o = n.filter(function(l, f) {
    var d = Qi(a, l), h = r.props[i].filter(function(b) {
      var m = UG(r, t);
      return m(b, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), y = f === v;
    return d && y;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var wc;
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
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
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qP(Object(r), !0).forEach(function(n) {
      Ir(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Q2(n.key), n);
  }
}
function YG(e, t, r) {
  return t && BP(e.prototype, t), r && BP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XG(e, t, r) {
  return t = ul(t), ZG(e, J2() ? Reflect.construct(t, r || [], ul(e).constructor) : t.apply(e, r));
}
function ZG(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JG(e);
}
function JG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function J2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (J2 = function() {
    return !!e;
  })();
}
function ul(e) {
  return ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ul(e);
}
function QG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jg(e, t);
}
function Jg(e, t) {
  return Jg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Jg(e, t);
}
function Ir(e, t, r) {
  return t = Q2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q2(e) {
  var t = eK(e, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function eK(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return VG(this, t), n = XG(this, t, [r]), Ir(n, "pieRef", null), Ir(n, "sectorRefs", []), Ir(n, "id", aa("recharts-pie-")), Ir(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Pe(i) && i();
    }), Ir(n, "handleAnimationStart", function() {
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
  return QG(t, e), YG(t, [{
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
      var a = this.props, o = a.label, s = a.labelLine, l = a.dataKey, f = a.valueKey, d = we(this.props, !1), h = we(o, !1), v = we(s, !1), y = o && o.offsetRadius || 20, b = n.map(function(m, g) {
        var _ = (m.startAngle + m.endAngle) / 2, O = ot(m.cx, m.cy, m.outerRadius + y, _), A = it(it(it(it({}, d), m), {}, {
          stroke: "none"
        }, h), {}, {
          index: g,
          textAnchor: t.getTextAnchor(O.x, m.cx)
        }, O), P = it(it(it(it({}, d), m), {}, {
          fill: "none",
          stroke: m.fill
        }, v), {}, {
          index: g,
          points: [ot(m.cx, m.cy, m.outerRadius, _), O]
        }), x = l;
        return Ee(l) && Ee(f) ? x = "value" : Ee(l) && (x = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ j.createElement(Ne, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(g)
        }, s && t.renderLabelLineItem(s, P, "line"), t.renderLabelItem(o, A, gt(m, x)));
      });
      return /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-pie-labels"
      }, b);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, y = h ? o : v, b = it(it({}, f), {}, {
          stroke: s ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ j.createElement(Ne, Ra({
          ref: function(g) {
            g && !i.sectorRefs.includes(g) && i.sectorRefs.push(g);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Ji(i.props, f, d), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(d)
        }), /* @__PURE__ */ j.createElement(Z2, Ra({
          option: y,
          isActive: h,
          shapeType: "sector"
        }, b)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, y = h.prevIsAnimationActive;
      return /* @__PURE__ */ j.createElement(Jr, {
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
        key: "pie-".concat(d, "-").concat(y),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(b) {
        var m = b.t, g = [], _ = a && a[0], O = _.startAngle;
        return a.forEach(function(A, P) {
          var x = v && v[P], S = P > 0 ? br(A, "paddingAngle", 0) : 0;
          if (x) {
            var T = St(x.endAngle - x.startAngle, A.endAngle - A.startAngle), R = it(it({}, A), {}, {
              startAngle: O + S,
              endAngle: O + T(m) + S
            });
            g.push(R), O = R.endAngle;
          } else {
            var I = A.endAngle, q = A.startAngle, $ = St(0, I - q), D = $(m), L = it(it({}, A), {}, {
              startAngle: O + S,
              endAngle: O + D + S
            });
            g.push(L), O = L.endAngle;
          }
        }), /* @__PURE__ */ j.createElement(Ne, null, n.renderSectorsStatically(g));
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
      var n = this, i = this.props, a = i.hide, o = i.sectors, s = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, y = i.isAnimationActive, b = this.state.isAnimationFinished;
      if (a || !o || !o.length || !ce(f) || !ce(d) || !ce(h) || !ce(v))
        return null;
      var m = Me("recharts-pie", s);
      return /* @__PURE__ */ j.createElement(Ne, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(_) {
          n.pieRef = _;
        }
      }, this.renderSectors(), l && this.renderLabels(o), Pt.renderCallByParent(this.props, null, !1), (!y || b) && kr.renderCallByParent(this.props, o, !1));
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
    value: function(n, i, a) {
      if (/* @__PURE__ */ j.isValidElement(n))
        return /* @__PURE__ */ j.cloneElement(n, i);
      if (Pe(n))
        return n(i);
      var o = Me("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ j.createElement(Zi, Ra({}, i, {
        key: a,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ j.isValidElement(n))
        return /* @__PURE__ */ j.cloneElement(n, i);
      var o = a;
      if (Pe(n) && (o = n(i), /* @__PURE__ */ j.isValidElement(o)))
        return o;
      var s = Me("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ j.createElement(vi, Ra({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
}(Nr);
wc = Gn;
Ir(Gn, "displayName", "Pie");
Ir(Gn, "defaultProps", {
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
  isAnimationActive: !xi.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Ir(Gn, "parseDeltaAngle", function(e, t) {
  var r = Gt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Ir(Gn, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = we(e, !1), i = xr(r, Fl);
  return t && t.length ? t.map(function(a, o) {
    return it(it(it({
      payload: a
    }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return it(it({}, n), a.props);
  }) : [];
});
Ir(Gn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = $2(i, a), s = n + Kt(e.cx, i, i / 2), l = r + Kt(e.cy, a, a / 2), f = Kt(e.innerRadius, o, 0), d = Kt(e.outerRadius, o, o * 0.8), h = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Ir(Gn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? it(it({}, t.type.defaultProps), t.props) : t.props, i = wc.getRealPieData(n);
  if (!i || !i.length)
    return null;
  var a = n.cornerRadius, o = n.startAngle, s = n.endAngle, l = n.paddingAngle, f = n.dataKey, d = n.nameKey, h = n.valueKey, v = n.tooltipType, y = Math.abs(n.minAngle), b = wc.parseCoordinateOfPie(n, r), m = wc.parseDeltaAngle(o, s), g = Math.abs(m), _ = f;
  Ee(f) && Ee(h) ? (Yr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = "value") : Ee(f) && (Yr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = h);
  var O = i.filter(function(R) {
    return gt(R, _, 0) !== 0;
  }).length, A = (g >= 360 ? O : O - 1) * l, P = g - O * y - A, x = i.reduce(function(R, I) {
    var q = gt(I, _, 0);
    return R + (ce(q) ? q : 0);
  }, 0), S;
  if (x > 0) {
    var T;
    S = i.map(function(R, I) {
      var q = gt(R, _, 0), $ = gt(R, d, I), D = (ce(q) ? q : 0) / x, L;
      I ? L = T.endAngle + Gt(m) * l * (q !== 0 ? 1 : 0) : L = o;
      var F = L + Gt(m) * ((q !== 0 ? y : 0) + D * P), G = (L + F) / 2, U = (b.innerRadius + b.outerRadius) / 2, X = [{
        name: $,
        value: q,
        payload: R,
        dataKey: _,
        type: v
      }], Z = ot(b.cx, b.cy, U, G);
      return T = it(it(it({
        percent: D,
        cornerRadius: a,
        name: $,
        tooltipPayload: X,
        midAngle: G,
        middleRadius: U,
        tooltipPosition: Z
      }, R), b), {}, {
        value: gt(R, _),
        startAngle: L,
        endAngle: F,
        payload: R,
        paddingAngle: Gt(m) * l
      }), T;
    });
  }
  return it(it({}, b), {}, {
    sectors: S,
    data: i
  });
});
var Ey, FP;
function tK() {
  if (FP) return Ey;
  FP = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var s = -1, l = t(e((i - n) / (a || 1)), 0), f = Array(l); l--; )
      f[o ? l : ++s] = n, n += a;
    return f;
  }
  return Ey = r, Ey;
}
var Ty, WP;
function eM() {
  if (WP) return Ty;
  WP = 1;
  var e = xC(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -1 / 0) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return Ty = n, Ty;
}
var Cy, zP;
function rK() {
  if (zP) return Cy;
  zP = 1;
  var e = tK(), t = Bl(), r = eM();
  function n(i) {
    return function(a, o, s) {
      return s && typeof s != "number" && t(a, o, s) && (o = s = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), s = s === void 0 ? a < o ? 1 : -1 : r(s), e(a, o, s, i);
    };
  }
  return Cy = n, Cy;
}
var My, UP;
function nK() {
  if (UP) return My;
  UP = 1;
  var e = rK(), t = e();
  return My = t, My;
}
var iK = nK();
const sl = /* @__PURE__ */ Je(iK);
function Gu(e) {
  "@babel/helpers - typeof";
  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gu(e);
}
function HP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function GP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? HP(Object(r), !0).forEach(function(n) {
      tM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : HP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tM(e, t, r) {
  return t = aK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aK(e) {
  var t = oK(e, "string");
  return Gu(t) == "symbol" ? t : t + "";
}
function oK(e, t) {
  if (Gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var uK = ["Webkit", "Moz", "O", "ms"], sK = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = uK.reduce(function(a, o) {
    return GP(GP({}, a), {}, tM({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
function cl() {
  return cl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cl.apply(this, arguments);
}
function KP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ry(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? KP(Object(r), !0).forEach(function(n) {
      vr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : KP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nM(n.key), n);
  }
}
function lK(e, t, r) {
  return t && VP(e.prototype, t), r && VP(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fK(e, t, r) {
  return t = ll(t), dK(e, rM() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function dK(e, t) {
  if (t && (Qa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hK(e);
}
function hK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rM = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function pK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qg(e, t);
}
function Qg(e, t) {
  return Qg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qg(e, t);
}
function vr(e, t, r) {
  return t = nM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nM(e) {
  var t = vK(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function vK(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var yK = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = fu().domain(sl(0, l)).range([a, a + o - s]), d = f.domain().map(function(h) {
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
}, YP = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, eo = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return cK(this, t), n = fK(this, t, [r]), vr(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), vr(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), vr(n, "handleDragEnd", function() {
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
    }), vr(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), vr(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), vr(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), vr(n, "handleSlideDragStart", function(i) {
      var a = YP(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return pK(t, e), lK(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, l = s.gap, f = s.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), y = t.getIndexInRange(o, h), b = t.getIndexInRange(o, v);
      return {
        startIndex: y - y % l,
        endIndex: b === d ? d : b - b % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, l = gt(a[n], s, n);
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
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, y = l.endIndex, b = l.onChange, m = n.pageX - a;
      m > 0 ? m = Math.min(m, f + d - h - s, f + d - h - o) : m < 0 && (m = Math.max(m, f - o, f - s));
      var g = this.getIndex({
        startX: o + m,
        endX: s + m
      });
      (g.startIndex !== v || g.endIndex !== y) && b && b(g), this.setState({
        startX: o + m,
        endX: s + m,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = YP(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, l = i.startX, f = this.state[o], d = this.props, h = d.x, v = d.width, y = d.travellerWidth, b = d.onChange, m = d.gap, g = d.data, _ = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - y - f) : O < 0 && (O = Math.max(O, h - f)), _[o] = f + O;
      var A = this.getIndex(_), P = A.startIndex, x = A.endIndex, S = function() {
        var R = g.length - 1;
        return o === "startX" && (s > l ? P % m === 0 : x % m === 0) || s < l && x === R || o === "endX" && (s > l ? x % m === 0 : P % m === 0) || s > l && x === R;
      };
      this.setState(vr(vr({}, o, f + O), "brushMoveStartX", n.pageX), function() {
        b && S() && b(A);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, l = o.startX, f = o.endX, d = this.state[i], h = s.indexOf(d);
      if (h !== -1) {
        var v = h + n;
        if (!(v === -1 || v >= s.length)) {
          var y = s[v];
          i === "startX" && y >= f || i === "endX" && y <= l || this.setState(vr({}, i, y), function() {
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
      return /* @__PURE__ */ j.createElement("rect", {
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
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.data, f = n.children, d = n.padding, h = Ki.only(f);
      return h ? /* @__PURE__ */ j.cloneElement(h, {
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
      var a, o, s = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, y = l.ariaLabel, b = l.data, m = l.startIndex, g = l.endIndex, _ = Math.max(n, this.props.x), O = Ry(Ry({}, we(this.props, !1)), {}, {
        x: _,
        y: f,
        width: d,
        height: h
      }), A = y || "Min value: ".concat((a = b[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = b[g]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ j.createElement(Ne, {
        tabIndex: 0,
        role: "slider",
        "aria-label": A,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(x) {
          ["ArrowLeft", "ArrowRight"].includes(x.key) && (x.preventDefault(), x.stopPropagation(), s.handleTravellerMoveKeyboard(x.key === "ArrowRight" ? 1 : -1, i));
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
      return /* @__PURE__ */ j.createElement("rect", {
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
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, y = 5, b = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ j.createElement(vi, cl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - y,
        y: o + s / 2
      }, b), this.getTextOfTick(i)), /* @__PURE__ */ j.createElement(vi, cl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + y,
        y: o + s / 2
      }, b), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, y = v.startX, b = v.endX, m = v.isTextActive, g = v.isSlideMoving, _ = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !ce(s) || !ce(l) || !ce(f) || !ce(d) || f <= 0 || d <= 0)
        return null;
      var A = Me("recharts-brush", a), P = j.Children.count(o) === 1, x = sK("userSelect", "none");
      return /* @__PURE__ */ j.createElement(Ne, {
        className: A,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: x
      }, this.renderBackground(), P && this.renderPanorama(), this.renderSlide(y, b), this.renderTravellerLayer(y, "startX"), this.renderTravellerLayer(b, "endX"), (m || g || _ || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, s = n.height, l = n.stroke, f = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ j.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + o - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ j.createElement("line", {
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
      return /* @__PURE__ */ j.isValidElement(n) ? a = /* @__PURE__ */ j.cloneElement(n, i) : Pe(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, s = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return Ry({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: o
        }, a && a.length ? yK({
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
        var v = i.scale.domain().map(function(y) {
          return i.scale(y);
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
  }]);
}(Nr);
vr(eo, "displayName", "Brush");
vr(eo, "defaultProps", {
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
var Iy, XP;
function gK() {
  if (XP) return Iy;
  XP = 1;
  var e = Jm();
  function t(r, n) {
    var i;
    return e(r, function(a, o, s) {
      return i = n(a, o, s), !i;
    }), !!i;
  }
  return Iy = t, Iy;
}
var $y, ZP;
function mK() {
  if (ZP) return $y;
  ZP = 1;
  var e = ZT(), t = yn(), r = gK(), n = ar(), i = Bl();
  function a(o, s, l) {
    var f = n(o) ? e : r;
    return l && i(o, s, l) && (s = void 0), f(o, t(s, 3));
  }
  return $y = a, $y;
}
var bK = mK();
const xK = /* @__PURE__ */ Je(bK);
var fn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, jy, JP;
function wK() {
  if (JP) return jy;
  JP = 1;
  var e = vC();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return jy = t, jy;
}
var ky, QP;
function _K() {
  if (QP) return ky;
  QP = 1;
  var e = wK(), t = hC(), r = yn();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(s, l, f) {
      e(o, l, a(s, l, f));
    }), o;
  }
  return ky = n, ky;
}
var OK = _K();
const AK = /* @__PURE__ */ Je(OK);
var Dy, eE;
function SK() {
  if (eE) return Dy;
  eE = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Dy = e, Dy;
}
var Ny, tE;
function PK() {
  if (tE) return Ny;
  tE = 1;
  var e = Jm();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, s) {
      return i = !!n(a, o, s), i;
    }), i;
  }
  return Ny = t, Ny;
}
var Ly, rE;
function EK() {
  if (rE) return Ly;
  rE = 1;
  var e = SK(), t = PK(), r = yn(), n = ar(), i = Bl();
  function a(o, s, l) {
    var f = n(o) ? e : t;
    return l && i(o, s, l) && (s = void 0), f(o, r(s, 3));
  }
  return Ly = a, Ly;
}
var TK = EK();
const iM = /* @__PURE__ */ Je(TK);
var CK = ["x", "y"];
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function em() {
  return em = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, em.apply(this, arguments);
}
function nE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function au(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nE(Object(r), !0).forEach(function(n) {
      MK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MK(e, t, r) {
  return t = RK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RK(e) {
  var t = IK(e, "string");
  return to(t) == "symbol" ? t : t + "";
}
function IK(e, t) {
  if (to(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $K(e, t) {
  if (e == null) return {};
  var r = jK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function kK(e, t) {
  var r = e.x, n = e.y, i = $K(e, CK), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return au(au(au(au(au({}, t), i), o ? {
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
function iE(e) {
  return /* @__PURE__ */ j.createElement(Z2, em({
    shapeType: "rectangle",
    propTransformer: kK,
    activeClassName: "recharts-active-bar"
  }, e));
}
var DK = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? nr(!1, "minPointSize callback function received a value with type of ".concat(to(n), ". Currently only numbers are supported.")) : nr()), r);
  };
}, NK = ["value", "background"], aM;
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function LK(e, t) {
  if (e == null) return {};
  var r = qK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fl.apply(this, arguments);
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
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aE(Object(r), !0).forEach(function(n) {
      di(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uM(n.key), n);
  }
}
function FK(e, t, r) {
  return t && oE(e.prototype, t), r && oE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function WK(e, t, r) {
  return t = dl(t), zK(e, oM() ? Reflect.construct(t, r || [], dl(e).constructor) : t.apply(e, r));
}
function zK(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UK(e);
}
function UK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oM = function() {
    return !!e;
  })();
}
function dl(e) {
  return dl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dl(e);
}
function HK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tm(e, t);
}
function tm(e, t) {
  return tm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tm(e, t);
}
function di(e, t, r) {
  return t = uM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uM(e) {
  var t = GK(e, "string");
  return ro(t) == "symbol" ? t : t + "";
}
function GK(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ai = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    BK(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = WK(this, t, [].concat(i)), di(r, "state", {
      isAnimationFinished: !1
    }), di(r, "id", aa("recharts-bar-")), di(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), di(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return HK(t, e), FK(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, l = a.activeIndex, f = a.activeBar, d = we(this.props, !1);
      return n && n.map(function(h, v) {
        var y = v === l, b = y ? f : o, m = mt(mt(mt({}, d), h), {}, {
          isActive: y,
          option: b,
          index: v,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ j.createElement(Ne, fl({
          className: "recharts-bar-rectangle"
        }, Ji(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ j.createElement(iE, m));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ j.createElement(Jr, {
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
      }, function(y) {
        var b = y.t, m = a.map(function(g, _) {
          var O = v && v[_];
          if (O) {
            var A = St(O.x, g.x), P = St(O.y, g.y), x = St(O.width, g.width), S = St(O.height, g.height);
            return mt(mt({}, g), {}, {
              x: A(b),
              y: P(b),
              width: x(b),
              height: S(b)
            });
          }
          if (o === "horizontal") {
            var T = St(0, g.height), R = T(b);
            return mt(mt({}, g), {}, {
              y: g.y + g.height - R,
              height: R
            });
          }
          var I = St(0, g.width), q = I(b);
          return mt(mt({}, g), {}, {
            width: q
          });
        });
        return /* @__PURE__ */ j.createElement(Ne, null, n.renderRectanglesStatically(m));
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
      var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, l = we(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = LK(f, NK);
        if (!h)
          return null;
        var y = mt(mt(mt(mt(mt({}, v), {}, {
          fill: "#eee"
        }, h), l), Ji(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: d,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ j.createElement(iE, fl({
          key: "background-bar-".concat(d),
          option: n.props.background,
          isActive: d === s
        }, y));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = xr(d, os);
      if (!h)
        return null;
      var v = f === "vertical" ? o[0].height / 2 : o[0].width / 2, y = function(g, _) {
        var O = Array.isArray(g.value) ? g.value[1] : g.value;
        return {
          x: g.x,
          y: g.y,
          value: O,
          errorVal: gt(g, _)
        };
      }, b = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ j.createElement(Ne, b, h.map(function(m) {
        return /* @__PURE__ */ j.cloneElement(m, {
          key: "error-bar-".concat(i, "-").concat(m.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: l,
          layout: f,
          offset: v,
          dataPointFormatter: y
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, y = n.isAnimationActive, b = n.background, m = n.id;
      if (i || !a || !a.length)
        return null;
      var g = this.state.isAnimationFinished, _ = Me("recharts-bar", o), O = s && s.allowDataOverflow, A = l && l.allowDataOverflow, P = O || A, x = Ee(m) ? this.id : m;
      return /* @__PURE__ */ j.createElement(Ne, {
        className: _
      }, O || A ? /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: O ? f : f - h / 2,
        y: A ? d : d - v / 2,
        width: O ? h : h * 2,
        height: A ? v : v * 2
      }))) : null, /* @__PURE__ */ j.createElement(Ne, {
        className: "recharts-bar-rectangles",
        clipPath: P ? "url(#clipPath-".concat(x, ")") : null
      }, b ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(P, x), (!y || g) && kr.renderCallByParent(this.props, a));
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
  }]);
}(Nr);
aM = Ai;
di(Ai, "displayName", "Bar");
di(Ai, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !xi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
di(Ai, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, y = v5(n, r);
  if (!y)
    return null;
  var b = t.layout, m = r.type.defaultProps, g = m !== void 0 ? mt(mt({}, m), r.props) : r.props, _ = g.dataKey, O = g.children, A = g.minPointSize, P = b === "horizontal" ? o : a, x = f ? P.scale.domain() : null, S = _5({
    numericAxis: P
  }), T = xr(O, Fl), R = h.map(function(I, q) {
    var $, D, L, F, G, U;
    f ? $ = y5(f[d + q], x) : ($ = gt(I, _), Array.isArray($) || ($ = [S, $]));
    var X = DK(A, aM.defaultProps.minPointSize)($[1], q);
    if (b === "horizontal") {
      var Z, ie = [o.scale($[0]), o.scale($[1])], H = ie[0], K = ie[1];
      D = SS({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: y.offset,
        entry: I,
        index: q
      }), L = (Z = K ?? H) !== null && Z !== void 0 ? Z : void 0, F = y.size;
      var re = H - K;
      if (G = Number.isNaN(re) ? 0 : re, U = {
        x: D,
        y: o.y,
        width: F,
        height: o.height
      }, Math.abs(X) > 0 && Math.abs(G) < Math.abs(X)) {
        var se = Gt(G || X) * (Math.abs(X) - Math.abs(G));
        L -= se, G += se;
      }
    } else {
      var de = [a.scale($[0]), a.scale($[1])], ye = de[0], me = de[1];
      if (D = ye, L = SS({
        axis: o,
        ticks: l,
        bandSize: i,
        offset: y.offset,
        entry: I,
        index: q
      }), F = me - ye, G = y.size, U = {
        x: a.x,
        y: L,
        width: a.width,
        height: G
      }, Math.abs(X) > 0 && Math.abs(F) < Math.abs(X)) {
        var he = Gt(F || X) * (Math.abs(X) - Math.abs(F));
        F += he;
      }
    }
    return mt(mt(mt({}, I), {}, {
      x: D,
      y: L,
      width: F,
      height: G,
      value: f ? $ : $[1],
      payload: I,
      background: U
    }, T && T[q] && T[q].props), {}, {
      tooltipPayload: [R2(r, I)],
      tooltipPosition: {
        x: D + F / 2,
        y: L + G / 2
      }
    });
  });
  return mt({
    data: R,
    layout: b
  }, v);
});
function Ku(e) {
  "@babel/helpers - typeof";
  return Ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ku(e);
}
function KK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sM(n.key), n);
  }
}
function VK(e, t, r) {
  return t && uE(e.prototype, t), r && uE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sE(Object(r), !0).forEach(function(n) {
      af(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function af(e, t, r) {
  return t = sM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sM(e) {
  var t = YK(e, "string");
  return Ku(t) == "symbol" ? t : t + "";
}
function YK(e, t) {
  if (Ku(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ku(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tb = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, v = !!yr(f, Ai);
  return d.reduce(function(y, b) {
    var m = r[b], g = m.orientation, _ = m.domain, O = m.padding, A = O === void 0 ? {} : O, P = m.mirror, x = m.reversed, S = "".concat(g).concat(P ? "Mirror" : ""), T, R, I, q, $;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var D = _[1] - _[0], L = 1 / 0, F = m.categoricalDomain.sort();
      if (F.forEach(function(de, ye) {
        ye > 0 && (L = Math.min((de || 0) - (F[ye - 1] || 0), L));
      }), Number.isFinite(L)) {
        var G = L / D, U = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (T = G * U / 2), m.padding === "no-gap") {
          var X = Kt(t.barCategoryGap, G * U), Z = G * U / 2;
          T = Z - X - (Z - X) / U * X;
        }
      }
    }
    i === "xAxis" ? R = [n.left + (A.left || 0) + (T || 0), n.left + n.width - (A.right || 0) - (T || 0)] : i === "yAxis" ? R = l === "horizontal" ? [n.top + n.height - (A.bottom || 0), n.top + (A.top || 0)] : [n.top + (A.top || 0) + (T || 0), n.top + n.height - (A.bottom || 0) - (T || 0)] : R = m.range, x && (R = [R[1], R[0]]);
    var ie = E2(m, a, v), H = ie.scale, K = ie.realScaleType;
    H.domain(_).range(R), T2(H);
    var re = C2(H, Hr(Hr({}, m), {}, {
      realScaleType: K
    }));
    i === "xAxis" ? ($ = g === "top" && !P || g === "bottom" && P, I = n.left, q = h[S] - $ * m.height) : i === "yAxis" && ($ = g === "left" && !P || g === "right" && P, I = h[S] - $ * m.width, q = n.top);
    var se = Hr(Hr(Hr({}, m), re), {}, {
      realScaleType: K,
      x: I,
      y: q,
      scale: H,
      width: i === "xAxis" ? n.width : m.width,
      height: i === "yAxis" ? n.height : m.height
    });
    return se.bandSize = Yc(se, re), !m.hide && i === "xAxis" ? h[S] += ($ ? -1 : 1) * se.height : m.hide || (h[S] += ($ ? -1 : 1) * se.width), Hr(Hr({}, y), {}, af({}, b, se));
  }, {});
}, cM = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, XK = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return cM({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, lM = /* @__PURE__ */ function() {
  function e(t) {
    KK(this, e), this.scale = t;
  }
  return VK(e, [{
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
  }]);
}();
af(lM, "EPS", 1e-4);
var Cb = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, af({}, i, lM.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return AK(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return iM(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function ZK(e) {
  return (e % 180 + 180) % 180;
}
var JK = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = ZK(i), o = a * Math.PI / 180, s = Math.atan(n / r), l = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, qy, cE;
function QK() {
  if (cE) return qy;
  cE = 1;
  var e = yn(), t = ts(), r = Ll();
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
  return qy = n, qy;
}
var By, lE;
function eV() {
  if (lE) return By;
  lE = 1;
  var e = eM();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return By = t, By;
}
var Fy, fE;
function tV() {
  if (fE) return Fy;
  fE = 1;
  var e = sC(), t = yn(), r = eV(), n = Math.max;
  function i(a, o, s) {
    var l = a == null ? 0 : a.length;
    if (!l)
      return -1;
    var f = s == null ? 0 : r(s);
    return f < 0 && (f = n(l + f, 0)), e(a, t(o, 3), f);
  }
  return Fy = i, Fy;
}
var Wy, dE;
function rV() {
  if (dE) return Wy;
  dE = 1;
  var e = QK(), t = tV(), r = e(t);
  return Wy = r, Wy;
}
var nV = rV();
const iV = /* @__PURE__ */ Je(nV);
var aV = OT();
const oV = /* @__PURE__ */ Je(aV);
var uV = oV(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function hl(e) {
  "@babel/helpers - typeof";
  return hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hl(e);
}
var Mb = /* @__PURE__ */ ir(void 0), Rb = /* @__PURE__ */ ir(void 0), fM = /* @__PURE__ */ ir(void 0), dM = /* @__PURE__ */ ir({}), hM = /* @__PURE__ */ ir(void 0), pM = /* @__PURE__ */ ir(0), vM = /* @__PURE__ */ ir(0), hE = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, l = t.width, f = t.height, d = uV(a);
  return /* @__PURE__ */ j.createElement(Mb.Provider, {
    value: n
  }, /* @__PURE__ */ j.createElement(Rb.Provider, {
    value: i
  }, /* @__PURE__ */ j.createElement(dM.Provider, {
    value: a
  }, /* @__PURE__ */ j.createElement(fM.Provider, {
    value: d
  }, /* @__PURE__ */ j.createElement(hM.Provider, {
    value: o
  }, /* @__PURE__ */ j.createElement(pM.Provider, {
    value: f
  }, /* @__PURE__ */ j.createElement(vM.Provider, {
    value: l
  }, s)))))));
}, sV = function() {
  return Bt(hM);
};
function yM(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var gM = function(t) {
  var r = Bt(Mb);
  r == null && (process.env.NODE_ENV !== "production" ? nr(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : nr());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? nr(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(hl(t), "]. ").concat(yM(r))) : nr()), n;
}, cV = function() {
  var t = Bt(Mb);
  return li(t);
}, lV = function() {
  var t = Bt(Rb), r = iV(t, function(n) {
    return iM(n.domain, Number.isFinite);
  });
  return r || li(t);
}, mM = function(t) {
  var r = Bt(Rb);
  r == null && (process.env.NODE_ENV !== "production" ? nr(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : nr());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? nr(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(hl(t), "]. ").concat(yM(r))) : nr()), n;
}, fV = function() {
  var t = Bt(fM);
  return t;
}, dV = function() {
  return Bt(dM);
}, Ib = function() {
  return Bt(vM);
}, $b = function() {
  return Bt(pM);
};
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function hV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xM(n.key), n);
  }
}
function vV(e, t, r) {
  return t && pV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yV(e, t, r) {
  return t = pl(t), gV(e, bM() ? Reflect.construct(t, r || [], pl(e).constructor) : t.apply(e, r));
}
function gV(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mV(e);
}
function mV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bM = function() {
    return !!e;
  })();
}
function pl(e) {
  return pl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pl(e);
}
function bV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rm(e, t);
}
function rm(e, t) {
  return rm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, rm(e, t);
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
function vE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pE(Object(r), !0).forEach(function(n) {
      jb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jb(e, t, r) {
  return t = xM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xM(e) {
  var t = xV(e, "string");
  return no(t) == "symbol" ? t : t + "";
}
function xV(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wV(e, t) {
  return SV(e) || AV(e, t) || OV(e, t) || _V();
}
function _V() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OV(e, t) {
  if (e) {
    if (typeof e == "string") return yE(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yE(e, t);
  }
}
function yE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AV(e, t) {
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
function SV(e) {
  if (Array.isArray(e)) return e;
}
function nm() {
  return nm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nm.apply(this, arguments);
}
var PV = function(t, r) {
  var n;
  return /* @__PURE__ */ j.isValidElement(t) ? n = /* @__PURE__ */ j.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ j.createElement("line", nm({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, EV = function(t, r, n, i, a, o, s, l, f) {
  var d = a.x, h = a.y, v = a.width, y = a.height;
  if (n) {
    var b = f.y, m = t.y.apply(b, {
      position: o
    });
    if (fn(f, "discard") && !t.y.isInRange(m))
      return null;
    var g = [{
      x: d + v,
      y: m
    }, {
      x: d,
      y: m
    }];
    return l === "left" ? g.reverse() : g;
  }
  if (r) {
    var _ = f.x, O = t.x.apply(_, {
      position: o
    });
    if (fn(f, "discard") && !t.x.isInRange(O))
      return null;
    var A = [{
      x: O,
      y: h + y
    }, {
      x: O,
      y: h
    }];
    return s === "top" ? A.reverse() : A;
  }
  if (i) {
    var P = f.segment, x = P.map(function(S) {
      return t.apply(S, {
        position: o
      });
    });
    return fn(f, "discard") && xK(x, function(S) {
      return !t.isInRange(S);
    }) ? null : x;
  }
  return null;
};
function TV(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, l = e.alwaysShow, f = sV(), d = gM(i), h = mM(a), v = fV();
  if (!f || !v)
    return null;
  Yr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var y = Cb({
    x: d.scale,
    y: h.scale
  }), b = Et(t), m = Et(r), g = n && n.length === 2, _ = EV(y, b, m, g, v, e.position, d.orientation, h.orientation, e);
  if (!_)
    return null;
  var O = wV(_, 2), A = O[0], P = A.x, x = A.y, S = O[1], T = S.x, R = S.y, I = fn(e, "hidden") ? "url(#".concat(f, ")") : void 0, q = vE(vE({
    clipPath: I
  }, we(e, !0)), {}, {
    x1: P,
    y1: x,
    x2: T,
    y2: R
  });
  return /* @__PURE__ */ j.createElement(Ne, {
    className: Me("recharts-reference-line", s)
  }, PV(o, q), Pt.renderCallByParent(e, XK({
    x1: P,
    y1: x,
    x2: T,
    y2: R
  })));
}
var kb = /* @__PURE__ */ function(e) {
  function t() {
    return hV(this, t), yV(this, t, arguments);
  }
  return bV(t, e), vV(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(TV, this.props);
    }
  }]);
}(j.Component);
jb(kb, "displayName", "ReferenceLine");
jb(kb, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
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
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
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
function mE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gE(Object(r), !0).forEach(function(n) {
      of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function MV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _M(n.key), n);
  }
}
function RV(e, t, r) {
  return t && MV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function IV(e, t, r) {
  return t = vl(t), $V(e, wM() ? Reflect.construct(t, r || [], vl(e).constructor) : t.apply(e, r));
}
function $V(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jV(e);
}
function jV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wM = function() {
    return !!e;
  })();
}
function vl(e) {
  return vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vl(e);
}
function kV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && am(e, t);
}
function am(e, t) {
  return am = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, am(e, t);
}
function of(e, t, r) {
  return t = _M(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _M(e) {
  var t = DV(e, "string");
  return io(t) == "symbol" ? t : t + "";
}
function DV(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var NV = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Cb({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return fn(t, "discard") && !o.isInRange(s) ? null : s;
}, uf = /* @__PURE__ */ function(e) {
  function t() {
    return CV(this, t), IV(this, t, arguments);
  }
  return kV(t, e), RV(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, l = n.clipPathId, f = Et(i), d = Et(a);
      if (Yr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !f || !d)
        return null;
      var h = NV(this.props);
      if (!h)
        return null;
      var v = h.x, y = h.y, b = this.props, m = b.shape, g = b.className, _ = fn(this.props, "hidden") ? "url(#".concat(l, ")") : void 0, O = mE(mE({
        clipPath: _
      }, we(this.props, !0)), {}, {
        cx: v,
        cy: y
      });
      return /* @__PURE__ */ j.createElement(Ne, {
        className: Me("recharts-reference-dot", g)
      }, t.renderDot(m, O), Pt.renderCallByParent(this.props, {
        x: v - o,
        y: y - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(j.Component);
of(uf, "displayName", "ReferenceDot");
of(uf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
of(uf, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ j.isValidElement(e) ? r = /* @__PURE__ */ j.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ j.createElement(us, im({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function om() {
  return om = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, om.apply(this, arguments);
}
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
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
function xE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bE(Object(r), !0).forEach(function(n) {
      sf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, AM(n.key), n);
  }
}
function BV(e, t, r) {
  return t && qV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function FV(e, t, r) {
  return t = yl(t), WV(e, OM() ? Reflect.construct(t, r || [], yl(e).constructor) : t.apply(e, r));
}
function WV(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zV(e);
}
function zV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (OM = function() {
    return !!e;
  })();
}
function yl(e) {
  return yl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yl(e);
}
function UV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && um(e, t);
}
function um(e, t) {
  return um = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, um(e, t);
}
function sf(e, t, r) {
  return t = AM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AM(e) {
  var t = HV(e, "string");
  return ao(t) == "symbol" ? t : t + "";
}
function HV(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var GV = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = Cb({
    x: d.scale,
    y: h.scale
  }), y = {
    x: t ? v.x.apply(o, {
      position: "start"
    }) : v.x.rangeMin,
    y: n ? v.y.apply(l, {
      position: "start"
    }) : v.y.rangeMin
  }, b = {
    x: r ? v.x.apply(s, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return fn(a, "discard") && (!v.isInRange(y) || !v.isInRange(b)) ? null : cM(y, b);
}, cf = /* @__PURE__ */ function(e) {
  function t() {
    return LV(this, t), FV(this, t, arguments);
  }
  return UV(t, e), BV(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, l = n.className, f = n.alwaysShow, d = n.clipPathId;
      Yr(f === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var h = Et(i), v = Et(a), y = Et(o), b = Et(s), m = this.props.shape;
      if (!h && !v && !y && !b && !m)
        return null;
      var g = GV(h, v, y, b, this.props);
      if (!g && !m)
        return null;
      var _ = fn(this.props, "hidden") ? "url(#".concat(d, ")") : void 0;
      return /* @__PURE__ */ j.createElement(Ne, {
        className: Me("recharts-reference-area", l)
      }, t.renderRect(m, xE(xE({
        clipPath: _
      }, we(this.props, !0)), g)), Pt.renderCallByParent(this.props, g));
    }
  }]);
}(j.Component);
sf(cf, "displayName", "ReferenceArea");
sf(cf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
sf(cf, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ j.isValidElement(e) ? r = /* @__PURE__ */ j.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ j.createElement(Eb, om({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function SM(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function KV(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return JK(n, r);
}
function VV(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + s
  } : {
    start: n ? i + o : a + s,
    end: n ? i : a
  };
}
function gl(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function YV(e, t) {
  return SM(e, t + 1);
}
function XV(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, l = 0, f = 1, d = o, h = function() {
    var b = n == null ? void 0 : n[l];
    if (b === void 0)
      return {
        v: SM(n, f)
      };
    var m = l, g, _ = function() {
      return g === void 0 && (g = r(b, m)), g;
    }, O = b.coordinate, A = l === 0 || gl(e, O, _, d, s);
    A || (l = 0, d = o, f += 1), A && (d = O + e * (_() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
function wE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wE(Object(r), !0).forEach(function(n) {
      ZV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZV(e, t, r) {
  return t = JV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JV(e) {
  var t = QV(e, "string");
  return Vu(t) == "symbol" ? t : t + "";
}
function QV(e, t) {
  if (Vu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eY(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, l = t.end, f = function(v) {
    var y = a[v], b, m = function() {
      return b === void 0 && (b = r(y, v)), b;
    };
    if (v === o - 1) {
      var g = e * (y.coordinate + e * m() / 2 - l);
      a[v] = y = Nt(Nt({}, y), {}, {
        tickCoord: g > 0 ? y.coordinate - g * e : y.coordinate
      });
    } else
      a[v] = y = Nt(Nt({}, y), {}, {
        tickCoord: y.coordinate
      });
    var _ = gl(e, y.tickCoord, m, s, l);
    _ && (l = y.tickCoord - e * (m() / 2 + i), a[v] = Nt(Nt({}, y), {}, {
      isShow: !0
    }));
  }, d = o - 1; d >= 0; d--)
    f(d);
  return a;
}
function tY(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, l = t.start, f = t.end;
  if (a) {
    var d = n[s - 1], h = r(d, s - 1), v = e * (d.coordinate + e * h / 2 - f);
    o[s - 1] = d = Nt(Nt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var y = gl(e, d.tickCoord, function() {
      return h;
    }, l, f);
    y && (f = d.tickCoord - e * (h / 2 + i), o[s - 1] = Nt(Nt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var b = a ? s - 1 : s, m = function(O) {
    var A = o[O], P, x = function() {
      return P === void 0 && (P = r(A, O)), P;
    };
    if (O === 0) {
      var S = e * (A.coordinate - e * x() / 2 - l);
      o[O] = A = Nt(Nt({}, A), {}, {
        tickCoord: S < 0 ? A.coordinate - S * e : A.coordinate
      });
    } else
      o[O] = A = Nt(Nt({}, A), {}, {
        tickCoord: A.coordinate
      });
    var T = gl(e, A.tickCoord, x, l, f);
    T && (l = A.tickCoord + e * (x() / 2 + i), o[O] = Nt(Nt({}, A), {}, {
      isShow: !0
    }));
  }, g = 0; g < b; g++)
    m(g);
  return o;
}
function Db(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (ce(l) || xi.isSsr)
    return YV(i, typeof l == "number" && ce(l) ? l : 0);
  var v = [], y = s === "top" || s === "bottom" ? "width" : "height", b = d && y === "width" ? lu(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(A, P) {
    var x = Pe(f) ? f(A.value, P) : A.value;
    return y === "width" ? KV(lu(x, {
      fontSize: t,
      letterSpacing: r
    }), b, h) : lu(x, {
      fontSize: t,
      letterSpacing: r
    })[y];
  }, g = i.length >= 2 ? Gt(i[1].coordinate - i[0].coordinate) : 1, _ = VV(a, g, y);
  return l === "equidistantPreserveStart" ? XV(g, _, m, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = tY(g, _, m, i, o, l === "preserveStartEnd") : v = eY(g, _, m, i, o), v.filter(function(O) {
    return O.isShow;
  }));
}
var rY = ["viewBox"], nY = ["viewBox"], iY = ["ticks"];
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
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
function _E(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _E(Object(r), !0).forEach(function(n) {
      Nb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _E(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zy(e, t) {
  if (e == null) return {};
  var r = aY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function oY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, EM(n.key), n);
  }
}
function uY(e, t, r) {
  return t && OE(e.prototype, t), r && OE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sY(e, t, r) {
  return t = ml(t), cY(e, PM() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function cY(e, t) {
  if (t && (oo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lY(e);
}
function lY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (PM = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function fY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sm(e, t);
}
function sm(e, t) {
  return sm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sm(e, t);
}
function Nb(e, t, r) {
  return t = EM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EM(e) {
  var t = dY(e, "string");
  return oo(t) == "symbol" ? t : t + "";
}
function dY(e, t) {
  if (oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Po = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return oY(this, t), n = sY(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return fY(t, e), uY(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = zy(n, rY), s = this.props, l = s.viewBox, f = zy(s, nY);
      return !Da(a, l) || !Da(o, f) || !Da(i, this.state);
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
      var i = this.props, a = i.x, o = i.y, s = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, y, b, m, g, _, O, A = h ? -1 : 1, P = n.tickSize || d, x = ce(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          y = b = n.coordinate, g = o + +!h * l, m = g - A * P, O = m - A * v, _ = x;
          break;
        case "left":
          m = g = n.coordinate, b = a + +!h * s, y = b - A * P, _ = y - A * v, O = x;
          break;
        case "right":
          m = g = n.coordinate, b = a + +h * s, y = b + A * P, _ = y + A * v, O = x;
          break;
        default:
          y = b = n.coordinate, g = o + +h * l, m = g + A * P, O = m + A * v, _ = x;
          break;
      }
      return {
        line: {
          x1: y,
          y1: m,
          x2: b,
          y2: g
        },
        tick: {
          x: _,
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
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Ht(Ht(Ht({}, we(this.props, !1)), we(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Ht(Ht({}, h), {}, {
          x1: i,
          y1: a + v * s,
          x2: i + o,
          y2: a + v * s
        });
      } else {
        var y = +(l === "left" && !f || l === "right" && f);
        h = Ht(Ht({}, h), {}, {
          x1: i + y * o,
          y1: a,
          x2: i + y * o,
          y2: a + s
        });
      }
      return /* @__PURE__ */ j.createElement("line", Ia({}, h, {
        className: Me("recharts-cartesian-axis-line", br(d, "className"))
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
        var o = this, s = this.props, l = s.tickLine, f = s.stroke, d = s.tick, h = s.tickFormatter, v = s.unit, y = Db(Ht(Ht({}, this.props), {}, {
          ticks: n
        }), i, a), b = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), g = we(this.props, !1), _ = we(d, !1), O = Ht(Ht({}, g), {}, {
          fill: "none"
        }, we(l, !1)), A = y.map(function(P, x) {
          var S = o.getTickLineCoord(P), T = S.line, R = S.tick, I = Ht(Ht(Ht(Ht({
            textAnchor: b,
            verticalAnchor: m
          }, g), {}, {
            stroke: "none",
            fill: f
          }, _), R), {}, {
            index: x,
            payload: P,
            visibleTicksCount: y.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ j.createElement(Ne, Ia({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(P.value, "-").concat(P.coordinate, "-").concat(P.tickCoord)
          }, Ji(o.props, P, x)), l && /* @__PURE__ */ j.createElement("line", Ia({}, O, T, {
            className: Me("recharts-cartesian-axis-tick-line", br(l, "className"))
          })), d && t.renderTickItem(d, I, "".concat(Pe(h) ? h(P.value, x) : P.value).concat(v || "")));
        });
        return /* @__PURE__ */ j.createElement("g", {
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
      var h = this.props, v = h.ticks, y = zy(h, iY), b = v;
      return Pe(l) && (b = v && v.length > 0 ? l(this.props) : l(y)), o <= 0 || s <= 0 || !b || !b.length ? null : /* @__PURE__ */ j.createElement(Ne, {
        className: Me("recharts-cartesian-axis", f),
        ref: function(g) {
          n.layerReference = g;
        }
      }, a && this.renderAxisLine(), this.renderTicks(b, this.state.fontSize, this.state.letterSpacing), Pt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ j.isValidElement(n) ? o = /* @__PURE__ */ j.cloneElement(n, i) : Pe(n) ? o = n(i) : o = /* @__PURE__ */ j.createElement(vi, Ia({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(oT);
Nb(Po, "displayName", "CartesianAxis");
Nb(Po, "defaultProps", {
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
var hY = ["x1", "y1", "x2", "y2", "key"], pY = ["offset"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function AE(e, t) {
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
    t % 2 ? AE(Object(r), !0).forEach(function(n) {
      vY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vY(e, t, r) {
  return t = yY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yY(e) {
  var t = gY(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function gY(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
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
function SE(e, t) {
  if (e == null) return {};
  var r = mY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var bY = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, l = t.ry;
  return /* @__PURE__ */ j.createElement("rect", {
    x: i,
    y: a,
    ry: l,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function TM(e, t) {
  var r;
  if (/* @__PURE__ */ j.isValidElement(e))
    r = /* @__PURE__ */ j.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, l = SE(t, hY), f = we(l, !1);
    f.offset;
    var d = SE(f, pY);
    r = /* @__PURE__ */ j.createElement("line", Hi({}, d, {
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
function xY(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = qt(qt({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(l),
      index: l
    });
    return TM(i, f);
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function wY(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = qt(qt({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return TM(i, f);
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function _Y(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = s.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, y) {
    return v - y;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, y) {
    var b = !d[y + 1], m = b ? i + o - v : d[y + 1] - v;
    if (m <= 0)
      return null;
    var g = y % t.length;
    return /* @__PURE__ */ j.createElement("rect", {
      key: "react-".concat(y),
      y: v,
      x: n,
      height: m,
      width: a,
      stroke: "none",
      fill: t[g],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function OY(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var d = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, y) {
    return v - y;
  });
  a !== d[0] && d.unshift(0);
  var h = d.map(function(v, y) {
    var b = !d[y + 1], m = b ? a + s - v : d[y + 1] - v;
    if (m <= 0)
      return null;
    var g = y % n.length;
    return /* @__PURE__ */ j.createElement("rect", {
      key: "react-".concat(y),
      x: v,
      y: o,
      width: m,
      height: l,
      stroke: "none",
      fill: n[g],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var AY = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return P2(Db(qt(qt(qt({}, Po.defaultProps), n), {}, {
    ticks: jn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, SY = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return P2(Db(qt(qt(qt({}, Po.defaultProps), n), {}, {
    ticks: jn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Ea = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function ss(e) {
  var t, r, n, i, a, o, s = Ib(), l = $b(), f = dV(), d = qt(qt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Ea.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Ea.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Ea.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Ea.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Ea.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Ea.verticalFill,
    x: ce(e.x) ? e.x : f.left,
    y: ce(e.y) ? e.y : f.top,
    width: ce(e.width) ? e.width : f.width,
    height: ce(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, y = d.width, b = d.height, m = d.syncWithTicks, g = d.horizontalValues, _ = d.verticalValues, O = cV(), A = lV();
  if (!ce(y) || y <= 0 || !ce(b) || b <= 0 || !ce(h) || h !== +h || !ce(v) || v !== +v)
    return null;
  var P = d.verticalCoordinatesGenerator || AY, x = d.horizontalCoordinatesGenerator || SY, S = d.horizontalPoints, T = d.verticalPoints;
  if ((!S || !S.length) && Pe(x)) {
    var R = g && g.length, I = x({
      yAxis: A ? qt(qt({}, A), {}, {
        ticks: R ? g : A.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, R ? !0 : m);
    Yr(Array.isArray(I), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ta(I), "]")), Array.isArray(I) && (S = I);
  }
  if ((!T || !T.length) && Pe(P)) {
    var q = _ && _.length, $ = P({
      xAxis: O ? qt(qt({}, O), {}, {
        ticks: q ? _ : O.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, q ? !0 : m);
    Yr(Array.isArray($), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ta($), "]")), Array.isArray($) && (T = $);
  }
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ j.createElement(bY, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height,
    ry: d.ry
  }), /* @__PURE__ */ j.createElement(xY, Hi({}, d, {
    offset: f,
    horizontalPoints: S,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ j.createElement(wY, Hi({}, d, {
    offset: f,
    verticalPoints: T,
    xAxis: O,
    yAxis: A
  })), /* @__PURE__ */ j.createElement(_Y, Hi({}, d, {
    horizontalPoints: S
  })), /* @__PURE__ */ j.createElement(OY, Hi({}, d, {
    verticalPoints: T
  })));
}
ss.displayName = "CartesianGrid";
var PY = ["type", "layout", "connectNulls", "ref"], EY = ["key"];
function uo(e) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e);
}
function PE(e, t) {
  if (e == null) return {};
  var r = TY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yu() {
  return yu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yu.apply(this, arguments);
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
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? EE(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : EE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ta(e) {
  return IY(e) || RY(e) || MY(e) || CY();
}
function CY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MY(e, t) {
  if (e) {
    if (typeof e == "string") return cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cm(e, t);
  }
}
function RY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function IY(e) {
  if (Array.isArray(e)) return cm(e);
}
function cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $Y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MM(n.key), n);
  }
}
function jY(e, t, r) {
  return t && TE(e.prototype, t), r && TE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kY(e, t, r) {
  return t = bl(t), DY(e, CM() ? Reflect.construct(t, r || [], bl(e).constructor) : t.apply(e, r));
}
function DY(e, t) {
  if (t && (uo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return NY(e);
}
function NY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function CM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (CM = function() {
    return !!e;
  })();
}
function bl(e) {
  return bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bl(e);
}
function LY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lm(e, t);
}
function lm(e, t) {
  return lm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, lm(e, t);
}
function Gr(e, t, r) {
  return t = MM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MM(e) {
  var t = qY(e, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function qY(e, t) {
  if (uo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cs = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    $Y(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = kY(this, t, [].concat(i)), Gr(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Gr(r, "getStrokeDasharray", function(o, s, l) {
      var f = l.reduce(function(_, O) {
        return _ + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var d = Math.floor(o / f), h = o % f, v = s - o, y = [], b = 0, m = 0; b < l.length; m += l[b], ++b)
        if (m + l[b] > h) {
          y = [].concat(Ta(l.slice(0, b)), [h - m]);
          break;
        }
      var g = y.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ta(t.repeat(l, d)), Ta(y), g).map(function(_) {
        return "".concat(_, "px");
      }).join(", ");
    }), Gr(r, "id", aa("recharts-line-")), Gr(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Gr(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Gr(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return LY(t, e), jY(t, [{
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
      var a = this.props, o = a.points, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = xr(d, os);
      if (!h)
        return null;
      var v = function(m, g) {
        return {
          x: m.x,
          y: m.y,
          value: m.value,
          errorVal: gt(m.payload, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ j.createElement(Ne, y, h.map(function(b) {
        return /* @__PURE__ */ j.cloneElement(b, {
          key: "bar-".concat(b.props.dataKey),
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
      var s = this.props, l = s.dot, f = s.points, d = s.dataKey, h = we(this.props, !1), v = we(l, !0), y = f.map(function(m, g) {
        var _ = pr(pr(pr({
          key: "dot-".concat(g),
          r: 3
        }, h), v), {}, {
          value: m.value,
          dataKey: d,
          cx: m.x,
          cy: m.y,
          index: g,
          payload: m.payload
        });
        return t.renderDotItem(l, _);
      }), b = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ j.createElement(Ne, yu({
        className: "recharts-line-dots",
        key: "dots"
      }, b), y);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var s = this.props, l = s.type, f = s.layout, d = s.connectNulls;
      s.ref;
      var h = PE(s, PY), v = pr(pr(pr({}, we(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ j.createElement(Zi, yu({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, s = o.points, l = o.strokeDasharray, f = o.isAnimationActive, d = o.animationBegin, h = o.animationDuration, v = o.animationEasing, y = o.animationId, b = o.animateNewValues, m = o.width, g = o.height, _ = this.state, O = _.prevPoints, A = _.totalLength;
      return /* @__PURE__ */ j.createElement(Jr, {
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
        key: "line-".concat(y),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(P) {
        var x = P.t;
        if (O) {
          var S = O.length / s.length, T = s.map(function(D, L) {
            var F = Math.floor(L * S);
            if (O[F]) {
              var G = O[F], U = St(G.x, D.x), X = St(G.y, D.y);
              return pr(pr({}, D), {}, {
                x: U(x),
                y: X(x)
              });
            }
            if (b) {
              var Z = St(m * 2, D.x), ie = St(g / 2, D.y);
              return pr(pr({}, D), {}, {
                x: Z(x),
                y: ie(x)
              });
            }
            return pr(pr({}, D), {}, {
              x: D.x,
              y: D.y
            });
          });
          return a.renderCurveStatically(T, n, i);
        }
        var R = St(0, A), I = R(x), q;
        if (l) {
          var $ = "".concat(l).split(/[,\s]+/gim).map(function(D) {
            return parseFloat(D);
          });
          q = a.getStrokeDasharray(I, A, $);
        } else
          q = a.generateSimpleStrokeDasharray(A, I);
        return a.renderCurveStatically(s, n, i, {
          strokeDasharray: q
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
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, y = i.width, b = i.height, m = i.isAnimationActive, g = i.id;
      if (a || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, O = s.length === 1, A = Me("recharts-line", l), P = f && f.allowDataOverflow, x = d && d.allowDataOverflow, S = P || x, T = Ee(g) ? this.id : g, R = (n = we(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, I = R.r, q = I === void 0 ? 3 : I, $ = R.strokeWidth, D = $ === void 0 ? 2 : $, L = TT(o) ? o : {}, F = L.clipDot, G = F === void 0 ? !0 : F, U = q * 2 + D;
      return /* @__PURE__ */ j.createElement(Ne, {
        className: A
      }, P || x ? /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-".concat(T)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: P ? v : v - y / 2,
        y: x ? h : h - b / 2,
        width: P ? y : y * 2,
        height: x ? b : b * 2
      })), !G && /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-dots-".concat(T)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: v - U / 2,
        y: h - U / 2,
        width: y + U,
        height: b + U
      }))) : null, !O && this.renderCurve(S, T), this.renderErrorBar(S, T), (O || o) && this.renderDots(S, G, T), (!m || _) && kr.renderCallByParent(this.props, s));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Ta(n), [0]) : n, o = [], s = 0; s < i; ++s)
        o = [].concat(Ta(o), Ta(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ j.isValidElement(n))
        a = /* @__PURE__ */ j.cloneElement(n, i);
      else if (Pe(n))
        a = n(i);
      else {
        var o = i.key, s = PE(i, EY), l = Me("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ j.createElement(us, yu({
          key: o
        }, s, {
          className: l
        }));
      }
      return a;
    }
  }]);
}(Nr);
Gr(cs, "displayName", "Line");
Gr(cs, "defaultProps", {
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
  isAnimationActive: !xi.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Gr(cs, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, y) {
    var b = gt(v, o);
    return d === "horizontal" ? {
      x: Vc({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: v,
        index: y
      }),
      y: Ee(b) ? null : n.scale(b),
      value: b,
      payload: v
    } : {
      x: Ee(b) ? null : r.scale(b),
      y: Vc({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: v,
        index: y
      }),
      value: b,
      payload: v
    };
  });
  return pr({
    points: h,
    layout: d
  }, f);
});
var BY = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], FY = ["key"], RM;
function so(e) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
function IM(e, t) {
  if (e == null) return {};
  var r = WY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
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
function CE(e, t) {
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
    t % 2 ? CE(Object(r), !0).forEach(function(n) {
      cn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : CE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ME(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jM(n.key), n);
  }
}
function UY(e, t, r) {
  return t && ME(e.prototype, t), r && ME(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function HY(e, t, r) {
  return t = xl(t), GY(e, $M() ? Reflect.construct(t, r || [], xl(e).constructor) : t.apply(e, r));
}
function GY(e, t) {
  if (t && (so(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return KY(e);
}
function KY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $M() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($M = function() {
    return !!e;
  })();
}
function xl(e) {
  return xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xl(e);
}
function VY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fm(e, t);
}
function fm(e, t) {
  return fm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fm(e, t);
}
function cn(e, t, r) {
  return t = jM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jM(e) {
  var t = YY(e, "string");
  return so(t) == "symbol" ? t : t + "";
}
function YY(e, t) {
  if (so(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (so(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Si = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    zY(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = HY(this, t, [].concat(i)), cn(r, "state", {
      isAnimationFinished: !0
    }), cn(r, "id", aa("recharts-area-")), cn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(o) && o();
    }), cn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(o) && o();
    }), r;
  }
  return VY(t, e), UY(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = we(this.props, !1), y = we(f, !0), b = d.map(function(g, _) {
        var O = si(si(si({
          key: "dot-".concat(_),
          r: 3
        }, v), y), {}, {
          index: _,
          cx: g.x,
          cy: g.y,
          dataKey: h,
          value: g.value,
          payload: g.payload,
          points: d
        });
        return t.renderDotItem(f, O);
      }), m = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ j.createElement(Ne, Gi({
        className: "recharts-area-dots"
      }, m), b);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].x, f = o[o.length - 1].x, d = n * Math.abs(l - f), h = fi(o.map(function(v) {
        return v.y || 0;
      }));
      return ce(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
        return v.y || 0;
      })), h)), ce(h) ? /* @__PURE__ */ j.createElement("rect", {
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
      return ce(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
        return v.x || 0;
      })), h)), ce(h) ? /* @__PURE__ */ j.createElement("rect", {
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
      var y = IM(s, BY);
      return /* @__PURE__ */ j.createElement(Ne, {
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ j.createElement(Zi, Gi({}, we(y, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ j.createElement(Zi, Gi({}, we(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ j.createElement(Zi, Gi({}, we(this.props, !1), {
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
      var a = this, o = this.props, s = o.points, l = o.baseLine, f = o.isAnimationActive, d = o.animationBegin, h = o.animationDuration, v = o.animationEasing, y = o.animationId, b = this.state, m = b.prevPoints, g = b.prevBaseLine;
      return /* @__PURE__ */ j.createElement(Jr, {
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
        key: "area-".concat(y),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var O = _.t;
        if (m) {
          var A = m.length / s.length, P = s.map(function(R, I) {
            var q = Math.floor(I * A);
            if (m[q]) {
              var $ = m[q], D = St($.x, R.x), L = St($.y, R.y);
              return si(si({}, R), {}, {
                x: D(O),
                y: L(O)
              });
            }
            return R;
          }), x;
          if (ce(l) && typeof l == "number") {
            var S = St(g, l);
            x = S(O);
          } else if (Ee(l) || wo(l)) {
            var T = St(g, 0);
            x = T(O);
          } else
            x = l.map(function(R, I) {
              var q = Math.floor(I * A);
              if (g[q]) {
                var $ = g[q], D = St($.x, R.x), L = St($.y, R.y);
                return si(si({}, R), {}, {
                  x: D(O),
                  y: L(O)
                });
              }
              return R;
            });
          return a.renderAreaStatically(P, x, n, i);
        }
        return /* @__PURE__ */ j.createElement(Ne, null, /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ j.createElement(Ne, {
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
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, y = i.width, b = i.height, m = i.isAnimationActive, g = i.id;
      if (a || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, O = s.length === 1, A = Me("recharts-area", l), P = h && h.allowDataOverflow, x = v && v.allowDataOverflow, S = P || x, T = Ee(g) ? this.id : g, R = (n = we(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, I = R.r, q = I === void 0 ? 3 : I, $ = R.strokeWidth, D = $ === void 0 ? 2 : $, L = TT(o) ? o : {}, F = L.clipDot, G = F === void 0 ? !0 : F, U = q * 2 + D;
      return /* @__PURE__ */ j.createElement(Ne, {
        className: A
      }, P || x ? /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-".concat(T)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: P ? d : d - y / 2,
        y: x ? f : f - b / 2,
        width: P ? y : y * 2,
        height: x ? b : b * 2
      })), !G && /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-dots-".concat(T)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: d - U / 2,
        y: f - U / 2,
        width: y + U,
        height: b + U
      }))) : null, O ? null : this.renderArea(S, T), (o || O) && this.renderDots(S, G, T), (!m || _) && kr.renderCallByParent(this.props, s));
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
  }]);
}(Nr);
RM = Si;
cn(Si, "displayName", "Area");
cn(Si, "defaultProps", {
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
  isAnimationActive: !xi.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
cn(Si, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, o = t.props.baseValue, s = o ?? a;
  if (ce(s) && typeof s == "number")
    return s;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var d = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return s === "dataMin" ? h : s === "dataMax" || d < 0 ? d : Math.max(Math.min(f[0], f[1]), 0);
  }
  return s === "dataMin" ? f[0] : s === "dataMax" ? f[1] : f[0];
});
cn(Si, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, y = t.layout, b = f && f.length, m = RM.getBaseValue(t, r, n, i), g = y === "horizontal", _ = !1, O = h.map(function(P, x) {
    var S;
    b ? S = f[d + x] : (S = gt(P, l), Array.isArray(S) ? _ = !0 : S = [m, S]);
    var T = S[1] == null || b && gt(P, l) == null;
    return g ? {
      x: Vc({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: P,
        index: x
      }),
      y: T ? null : i.scale(S[1]),
      value: S,
      payload: P
    } : {
      x: T ? null : n.scale(S[1]),
      y: Vc({
        axis: i,
        ticks: o,
        bandSize: s,
        entry: P,
        index: x
      }),
      value: S,
      payload: P
    };
  }), A;
  return b || _ ? A = O.map(function(P) {
    var x = Array.isArray(P.value) ? P.value[0] : null;
    return g ? {
      x: P.x,
      y: x != null && P.y != null ? i.scale(x) : null
    } : {
      x: x != null ? n.scale(x) : null,
      y: P.y
    };
  }) : A = g ? i.scale(m) : n.scale(m), si({
    points: O,
    baseLine: A,
    layout: y,
    isRange: _
  }, v);
});
cn(Si, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ j.isValidElement(e))
    r = /* @__PURE__ */ j.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Me("recharts-area-dot", typeof e != "boolean" ? e.className : ""), i = t.key, a = IM(t, FY);
    r = /* @__PURE__ */ j.createElement(us, Gi({}, a, {
      key: i,
      className: n
    }));
  }
  return r;
});
function co(e) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, co(e);
}
function XY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZY(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, NM(n.key), n);
  }
}
function JY(e, t, r) {
  return t && ZY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QY(e, t, r) {
  return t = wl(t), eX(e, kM() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function eX(e, t) {
  if (t && (co(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tX(e);
}
function tX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kM = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function rX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dm(e, t);
}
function dm(e, t) {
  return dm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dm(e, t);
}
function DM(e, t, r) {
  return t = NM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NM(e) {
  var t = nX(e, "string");
  return co(t) == "symbol" ? t : t + "";
}
function nX(e, t) {
  if (co(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function hm() {
  return hm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hm.apply(this, arguments);
}
function iX(e) {
  var t = e.xAxisId, r = Ib(), n = $b(), i = gM(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ j.createElement(Po, hm({}, i, {
      className: Me("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return jn(o, !0);
      }
    }))
  );
}
var Kn = /* @__PURE__ */ function(e) {
  function t() {
    return XY(this, t), QY(this, t, arguments);
  }
  return rX(t, e), JY(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(iX, this.props);
    }
  }]);
}(j.Component);
DM(Kn, "displayName", "XAxis");
DM(Kn, "defaultProps", {
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
});
function lo(e) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e);
}
function aX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oX(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, BM(n.key), n);
  }
}
function uX(e, t, r) {
  return t && oX(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sX(e, t, r) {
  return t = _l(t), cX(e, LM() ? Reflect.construct(t, r || [], _l(e).constructor) : t.apply(e, r));
}
function cX(e, t) {
  if (t && (lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lX(e);
}
function lX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LM = function() {
    return !!e;
  })();
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
function fX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pm(e, t);
}
function pm(e, t) {
  return pm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, pm(e, t);
}
function qM(e, t, r) {
  return t = BM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BM(e) {
  var t = dX(e, "string");
  return lo(t) == "symbol" ? t : t + "";
}
function dX(e, t) {
  if (lo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function vm() {
  return vm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vm.apply(this, arguments);
}
var hX = function(t) {
  var r = t.yAxisId, n = Ib(), i = $b(), a = mM(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ j.createElement(Po, vm({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return jn(s, !0);
      }
    }))
  );
}, Vn = /* @__PURE__ */ function(e) {
  function t() {
    return aX(this, t), sX(this, t, arguments);
  }
  return fX(t, e), uX(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(hX, this.props);
    }
  }]);
}(j.Component);
qM(Vn, "displayName", "YAxis");
qM(Vn, "defaultProps", {
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
});
function RE(e) {
  return gX(e) || yX(e) || vX(e) || pX();
}
function pX() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vX(e, t) {
  if (e) {
    if (typeof e == "string") return ym(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ym(e, t);
  }
}
function yX(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gX(e) {
  if (Array.isArray(e)) return ym(e);
}
function ym(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var gm = function(t, r, n, i, a) {
  var o = xr(t, kb), s = xr(t, uf), l = [].concat(RE(o), RE(s)), f = xr(t, cf), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(m, g) {
    if (g.props[d] === n && fn(g.props, "extendDomain") && ce(g.props[h])) {
      var _ = g.props[h];
      return [Math.min(m[0], _), Math.max(m[1], _)];
    }
    return m;
  }, v)), f.length) {
    var y = "".concat(h, "1"), b = "".concat(h, "2");
    v = f.reduce(function(m, g) {
      if (g.props[d] === n && fn(g.props, "extendDomain") && ce(g.props[y]) && ce(g.props[b])) {
        var _ = g.props[y], O = g.props[b];
        return [Math.min(m[0], _, O), Math.max(m[1], _, O)];
      }
      return m;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(m, g) {
    return ce(g) ? [Math.min(m[0], g), Math.max(m[1], g)] : m;
  }, v)), v;
}, Uy = { exports: {} }, IE;
function mX() {
  return IE || (IE = 1, function(e) {
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
      var y = new i(d, h || l, v), b = r ? r + f : f;
      return l._events[b] ? l._events[b].fn ? l._events[b] = [l._events[b], y] : l._events[b].push(y) : (l._events[b] = y, l._eventsCount++), l;
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
      for (var v = 0, y = h.length, b = new Array(y); v < y; v++)
        b[v] = h[v].fn;
      return b;
    }, s.prototype.listenerCount = function(f) {
      var d = r ? r + f : f, h = this._events[d];
      return h ? h.fn ? 1 : h.length : 0;
    }, s.prototype.emit = function(f, d, h, v, y, b) {
      var m = r ? r + f : f;
      if (!this._events[m]) return !1;
      var g = this._events[m], _ = arguments.length, O, A;
      if (g.fn) {
        switch (g.once && this.removeListener(f, g.fn, void 0, !0), _) {
          case 1:
            return g.fn.call(g.context), !0;
          case 2:
            return g.fn.call(g.context, d), !0;
          case 3:
            return g.fn.call(g.context, d, h), !0;
          case 4:
            return g.fn.call(g.context, d, h, v), !0;
          case 5:
            return g.fn.call(g.context, d, h, v, y), !0;
          case 6:
            return g.fn.call(g.context, d, h, v, y, b), !0;
        }
        for (A = 1, O = new Array(_ - 1); A < _; A++)
          O[A - 1] = arguments[A];
        g.fn.apply(g.context, O);
      } else {
        var P = g.length, x;
        for (A = 0; A < P; A++)
          switch (g[A].once && this.removeListener(f, g[A].fn, void 0, !0), _) {
            case 1:
              g[A].fn.call(g[A].context);
              break;
            case 2:
              g[A].fn.call(g[A].context, d);
              break;
            case 3:
              g[A].fn.call(g[A].context, d, h);
              break;
            case 4:
              g[A].fn.call(g[A].context, d, h, v);
              break;
            default:
              if (!O) for (x = 1, O = new Array(_ - 1); x < _; x++)
                O[x - 1] = arguments[x];
              g[A].fn.apply(g[A].context, O);
          }
      }
      return !0;
    }, s.prototype.on = function(f, d, h) {
      return a(this, f, d, h, !1);
    }, s.prototype.once = function(f, d, h) {
      return a(this, f, d, h, !0);
    }, s.prototype.removeListener = function(f, d, h, v) {
      var y = r ? r + f : f;
      if (!this._events[y]) return this;
      if (!d)
        return o(this, y), this;
      var b = this._events[y];
      if (b.fn)
        b.fn === d && (!v || b.once) && (!h || b.context === h) && o(this, y);
      else {
        for (var m = 0, g = [], _ = b.length; m < _; m++)
          (b[m].fn !== d || v && !b[m].once || h && b[m].context !== h) && g.push(b[m]);
        g.length ? this._events[y] = g.length === 1 ? g[0] : g : o(this, y);
      }
      return this;
    }, s.prototype.removeAllListeners = function(f) {
      var d;
      return f ? (d = r ? r + f : f, this._events[d] && o(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  }(Uy)), Uy.exports;
}
var bX = mX();
const xX = /* @__PURE__ */ Je(bX);
var Hy = new xX(), Gy = "recharts.syncMouseEvents";
function Yu(e) {
  "@babel/helpers - typeof";
  return Yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yu(e);
}
function wX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _X(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, FM(n.key), n);
  }
}
function OX(e, t, r) {
  return t && _X(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ky(e, t, r) {
  return t = FM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FM(e) {
  var t = AX(e, "string");
  return Yu(t) == "symbol" ? t : t + "";
}
function AX(e, t) {
  if (Yu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var SX = /* @__PURE__ */ function() {
  function e() {
    wX(this, e), Ky(this, "activeIndex", 0), Ky(this, "coordinateList", []), Ky(this, "layout", "horizontal");
  }
  return OX(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, y = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = f ?? this.layout, this.offset = h ?? this.offset, this.mouseHandlerCallback = y ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
  }]);
}();
function PX(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && ce(n) && ce(i))
      return !0;
  }
  return !1;
}
function EX(e, t, r, n) {
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
function WM(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = ot(t, r, n, i), s = ot(t, r, n, a);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function TX(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = ot(s, l, f, h), y = ot(s, l, d, h);
      n = v.x, i = v.y, a = y.x, o = y.y;
    } else
      return WM(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Xu(e) {
  "@babel/helpers - typeof";
  return Xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xu(e);
}
function $E(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $E(Object(r), !0).forEach(function(n) {
      CX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $E(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CX(e, t, r) {
  return t = MX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MX(e) {
  var t = RX(e, "string");
  return Xu(t) == "symbol" ? t : t + "";
}
function RX(e, t) {
  if (Xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IX(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, l = e.offset, f = e.activeTooltipIndex, d = e.tooltipAxisBandSize, h = e.layout, v = e.chartName, y = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !y || !a || !o || v !== "ScatterChart" && i !== "axis")
    return null;
  var b, m = Zi;
  if (v === "ScatterChart")
    b = o, m = zH;
  else if (v === "BarChart")
    b = EX(h, o, l, d), m = Eb;
  else if (h === "radial") {
    var g = WM(o), _ = g.cx, O = g.cy, A = g.radius, P = g.startAngle, x = g.endAngle;
    b = {
      cx: _,
      cy: O,
      startAngle: P,
      endAngle: x,
      innerRadius: A,
      outerRadius: A
    }, m = N2;
  } else
    b = {
      points: TX(h, o, l)
    }, m = Zi;
  var S = yc(yc(yc(yc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, l), b), we(y, !1)), {}, {
    payload: s,
    payloadIndex: f,
    className: Me("recharts-tooltip-cursor", y.className)
  });
  return /* @__PURE__ */ Vr(y) ? /* @__PURE__ */ At(y, S) : /* @__PURE__ */ aT(m, S);
}
var $X = ["item"], jX = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function fo(e) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e);
}
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function jE(e, t) {
  return NX(e) || DX(e, t) || UM(e, t) || kX();
}
function kX() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DX(e, t) {
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
function NX(e) {
  if (Array.isArray(e)) return e;
}
function kE(e, t) {
  if (e == null) return {};
  var r = LX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LX(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function qX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BX(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, HM(n.key), n);
  }
}
function FX(e, t, r) {
  return t && BX(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function WX(e, t, r) {
  return t = Ol(t), zX(e, zM() ? Reflect.construct(t, r || [], Ol(e).constructor) : t.apply(e, r));
}
function zX(e, t) {
  if (t && (fo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UX(e);
}
function UX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zM = function() {
    return !!e;
  })();
}
function Ol(e) {
  return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ol(e);
}
function HX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mm(e, t);
}
function mm(e, t) {
  return mm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, mm(e, t);
}
function ho(e) {
  return VX(e) || KX(e) || UM(e) || GX();
}
function GX() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UM(e, t) {
  if (e) {
    if (typeof e == "string") return bm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bm(e, t);
  }
}
function KX(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function VX(e) {
  if (Array.isArray(e)) return bm(e);
}
function bm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? DE(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t, r) {
  return t = HM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HM(e) {
  var t = YX(e, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function YX(e, t) {
  if (fo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var XX = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, ZX = {
  width: "100%",
  height: "100%"
}, GM = {
  x: 0,
  y: 0
};
function gc(e) {
  return e;
}
var JX = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, QX = function(t, r, n, i) {
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
      return Q(Q(Q({}, i), ot(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var l = a.coordinate, f = i.angle;
    return Q(Q(Q({}, i), ot(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return GM;
}, lf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(ho(s), ho(f)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && ce(i) && ce(a) ? t.slice(i, a + 1) : [];
};
function KM(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var xm = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = lf(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var y = h === void 0 ? s : h;
      v = Oc(y, o.dataKey, i);
    } else
      v = h && h[n] || s[n];
    return v ? [].concat(ho(l), [R2(f, v)]) : l;
  }, []);
}, NE = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = JX(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = c5(o, s, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = xm(t, r, d, h), y = QX(n, s, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: y
    };
  }
  return null;
}, eZ = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, y = S2(d, a);
  return n.reduce(function(b, m) {
    var g, _ = m.type.defaultProps !== void 0 ? Q(Q({}, m.type.defaultProps), m.props) : m.props, O = _.type, A = _.dataKey, P = _.allowDataOverflow, x = _.allowDuplicatedCategory, S = _.scale, T = _.ticks, R = _.includeHidden, I = _[o];
    if (b[I])
      return b;
    var q = lf(t.data, {
      graphicalItems: i.filter(function(re) {
        var se, de = o in re.props ? re.props[o] : (se = re.type.defaultProps) === null || se === void 0 ? void 0 : se[o];
        return de === I;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), $ = q.length, D, L, F;
    PX(_.domain, P, O) && (D = $g(_.domain, null, P), y && (O === "number" || S !== "auto") && (F = du(q, A, "category")));
    var G = KM(O);
    if (!D || D.length === 0) {
      var U, X = (U = _.domain) !== null && U !== void 0 ? U : G;
      if (A) {
        if (D = du(q, A, O), O === "category" && y) {
          var Z = rq(D);
          x && Z ? (L = D, D = sl(0, $)) : x || (D = TS(X, D, m).reduce(function(re, se) {
            return re.indexOf(se) >= 0 ? re : [].concat(ho(re), [se]);
          }, []));
        } else if (O === "category")
          x ? D = D.filter(function(re) {
            return re !== "" && !Ee(re);
          }) : D = TS(X, D, m).reduce(function(re, se) {
            return re.indexOf(se) >= 0 || se === "" || Ee(se) ? re : [].concat(ho(re), [se]);
          }, []);
        else if (O === "number") {
          var ie = p5(q, i.filter(function(re) {
            var se, de, ye = o in re.props ? re.props[o] : (se = re.type.defaultProps) === null || se === void 0 ? void 0 : se[o], me = "hide" in re.props ? re.props.hide : (de = re.type.defaultProps) === null || de === void 0 ? void 0 : de.hide;
            return ye === I && (R || !me);
          }), A, a, d);
          ie && (D = ie);
        }
        y && (O === "number" || S !== "auto") && (F = du(q, A, "category"));
      } else y ? D = sl(0, $) : s && s[I] && s[I].hasStack && O === "number" ? D = v === "expand" ? [0, 1] : M2(s[I].stackGroups, l, f) : D = A2(q, i.filter(function(re) {
        var se = o in re.props ? re.props[o] : re.type.defaultProps[o], de = "hide" in re.props ? re.props.hide : re.type.defaultProps.hide;
        return se === I && (R || !de);
      }), O, d, !0);
      if (O === "number")
        D = gm(h, D, I, a, T), X && (D = $g(X, D, P));
      else if (O === "category" && X) {
        var H = X, K = D.every(function(re) {
          return H.indexOf(re) >= 0;
        });
        K && (D = H);
      }
    }
    return Q(Q({}, b), {}, Se({}, I, Q(Q({}, _), {}, {
      axisType: a,
      domain: D,
      categoricalDomain: F,
      duplicateDomain: L,
      originalDomain: (g = _.domain) !== null && g !== void 0 ? g : G,
      isCategorical: y,
      layout: d
    })));
  }, {});
}, tZ = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = lf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), y = v.length, b = S2(d, a), m = -1;
  return n.reduce(function(g, _) {
    var O = _.type.defaultProps !== void 0 ? Q(Q({}, _.type.defaultProps), _.props) : _.props, A = O[o], P = KM("number");
    if (!g[A]) {
      m++;
      var x;
      return b ? x = sl(0, y) : s && s[A] && s[A].hasStack ? (x = M2(s[A].stackGroups, l, f), x = gm(h, x, A, a)) : (x = $g(P, A2(v, n.filter(function(S) {
        var T, R, I = o in S.props ? S.props[o] : (T = S.type.defaultProps) === null || T === void 0 ? void 0 : T[o], q = "hide" in S.props ? S.props.hide : (R = S.type.defaultProps) === null || R === void 0 ? void 0 : R.hide;
        return I === A && !q;
      }), "number", d), i.defaultProps.allowDataOverflow), x = gm(h, x, A, a)), Q(Q({}, g), {}, Se({}, A, Q(Q({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: br(XX, "".concat(a, ".").concat(m % 2), null),
        domain: x,
        originalDomain: P,
        isCategorical: b,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return g;
  }, {});
}, rZ = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = xr(d, a), y = {};
  return v && v.length ? y = eZ(t, {
    axes: v,
    graphicalItems: o,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  }) : o && o.length && (y = tZ(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  })), y;
}, nZ = function(t) {
  var r = li(t), n = jn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Qm(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Yc(r, n)
  };
}, LE = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = yr(r, eo), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, iZ = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = kn(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, qE = function(t) {
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
}, aZ = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, f = n.width, d = n.height, h = n.children, v = n.margin || {}, y = yr(h, eo), b = yr(h, Vi), m = Object.keys(l).reduce(function(x, S) {
    var T = l[S], R = T.orientation;
    return !T.mirror && !T.hide ? Q(Q({}, x), {}, Se({}, R, x[R] + T.width)) : x;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), g = Object.keys(o).reduce(function(x, S) {
    var T = o[S], R = T.orientation;
    return !T.mirror && !T.hide ? Q(Q({}, x), {}, Se({}, R, br(x, "".concat(R)) + T.height)) : x;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), _ = Q(Q({}, g), m), O = _.bottom;
  y && (_.bottom += y.props.height || eo.defaultProps.height), b && r && (_ = d5(_, i, n, r));
  var A = f - _.left - _.right, P = d - _.top - _.bottom;
  return Q(Q({
    brushBottom: O
  }, _), {}, {
    // never return negative values for height and width
    width: Math.max(A, 0),
    height: Math.max(P, 0)
  });
}, oZ = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, ff = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, l = t.axisComponents, f = t.legendContent, d = t.formatAxisMap, h = t.defaultProps, v = function(_, O) {
    var A = O.graphicalItems, P = O.stackGroups, x = O.offset, S = O.updateId, T = O.dataStartIndex, R = O.dataEndIndex, I = _.barSize, q = _.layout, $ = _.barGap, D = _.barCategoryGap, L = _.maxBarSize, F = qE(q), G = F.numericAxisName, U = F.cateAxisName, X = iZ(A), Z = [];
    return A.forEach(function(ie, H) {
      var K = lf(_.data, {
        graphicalItems: [ie],
        dataStartIndex: T,
        dataEndIndex: R
      }), re = ie.type.defaultProps !== void 0 ? Q(Q({}, ie.type.defaultProps), ie.props) : ie.props, se = re.dataKey, de = re.maxBarSize, ye = re["".concat(G, "Id")], me = re["".concat(U, "Id")], he = {}, pe = l.reduce(function(xt, Ft) {
        var Yn, $o, mn = O["".concat(Ft.axisType, "Map")], ds = re["".concat(Ft.axisType, "Id")];
        mn && mn[ds] || Ft.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? nr(!1, "Specifying a(n) ".concat(Ft.axisType, "Id requires a corresponding ").concat(
          Ft.axisType,
          "Id on the targeted graphical component "
        ).concat((Yn = ie == null || ($o = ie.type) === null || $o === void 0 ? void 0 : $o.displayName) !== null && Yn !== void 0 ? Yn : "")) : nr());
        var Xn = mn[ds];
        return Q(Q({}, xt), {}, Se(Se({}, Ft.axisType, Xn), "".concat(Ft.axisType, "Ticks"), jn(Xn)));
      }, he), te = pe[U], le = pe["".concat(U, "Ticks")], be = P && P[ye] && P[ye].hasStack && O5(ie, P[ye].stackGroups), z = kn(ie.type).indexOf("Bar") >= 0, Te = Yc(te, le), oe = [], Be = X && l5({
        barSize: I,
        stackGroups: P,
        totalSize: oZ(pe, U)
      });
      if (z) {
        var Qe, Xe, or = Ee(de) ? L : de, ur = (Qe = (Xe = Yc(te, le, !0)) !== null && Xe !== void 0 ? Xe : or) !== null && Qe !== void 0 ? Qe : 0;
        oe = f5({
          barGap: $,
          barCategoryGap: D,
          bandSize: ur !== Te ? ur : Te,
          sizeList: Be[me],
          maxBarSize: or
        }), ur !== Te && (oe = oe.map(function(xt) {
          return Q(Q({}, xt), {}, {
            position: Q(Q({}, xt.position), {}, {
              offset: xt.position.offset - ur / 2
            })
          });
        }));
      }
      var rn = ie && ie.type && ie.type.getComposedData;
      rn && Z.push({
        props: Q(Q({}, rn(Q(Q({}, pe), {}, {
          displayedData: K,
          props: _,
          dataKey: se,
          item: ie,
          bandSize: Te,
          barPosition: oe,
          offset: x,
          stackedData: be,
          layout: q,
          dataStartIndex: T,
          dataEndIndex: R
        }))), {}, Se(Se(Se({
          key: ie.key || "item-".concat(H)
        }, G, pe[G]), U, pe[U]), "animationId", S)),
        childIndex: hq(ie, _.children),
        item: ie
      });
    }), Z;
  }, y = function(_, O) {
    var A = _.props, P = _.dataStartIndex, x = _.dataEndIndex, S = _.updateId;
    if (!z1({
      props: A
    }))
      return null;
    var T = A.children, R = A.layout, I = A.stackOffset, q = A.data, $ = A.reverseStackOrder, D = qE(R), L = D.numericAxisName, F = D.cateAxisName, G = xr(T, n), U = w5(q, G, "".concat(L, "Id"), "".concat(F, "Id"), I, $), X = l.reduce(function(re, se) {
      var de = "".concat(se.axisType, "Map");
      return Q(Q({}, re), {}, Se({}, de, rZ(A, Q(Q({}, se), {}, {
        graphicalItems: G,
        stackGroups: se.axisType === L && U,
        dataStartIndex: P,
        dataEndIndex: x
      }))));
    }, {}), Z = aZ(Q(Q({}, X), {}, {
      props: A,
      graphicalItems: G
    }), O == null ? void 0 : O.legendBBox);
    Object.keys(X).forEach(function(re) {
      X[re] = d(A, X[re], Z, re.replace("Map", ""), r);
    });
    var ie = X["".concat(F, "Map")], H = nZ(ie), K = v(A, Q(Q({}, X), {}, {
      dataStartIndex: P,
      dataEndIndex: x,
      updateId: S,
      graphicalItems: G,
      stackGroups: U,
      offset: Z
    }));
    return Q(Q({
      formattedGraphicalItems: K,
      graphicalItems: G,
      offset: Z,
      stackGroups: U
    }, H), X);
  }, b = /* @__PURE__ */ function(g) {
    function _(O) {
      var A, P, x;
      return qX(this, _), x = WX(this, _, [O]), Se(x, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(x, "accessibilityManager", new SX()), Se(x, "handleLegendBBoxUpdate", function(S) {
        if (S) {
          var T = x.state, R = T.dataStartIndex, I = T.dataEndIndex, q = T.updateId;
          x.setState(Q({
            legendBBox: S
          }, y({
            props: x.props,
            dataStartIndex: R,
            dataEndIndex: I,
            updateId: q
          }, Q(Q({}, x.state), {}, {
            legendBBox: S
          }))));
        }
      }), Se(x, "handleReceiveSyncEvent", function(S, T, R) {
        if (x.props.syncId === S) {
          if (R === x.eventEmitterSymbol && typeof x.props.syncMethod != "function")
            return;
          x.applySyncEvent(T);
        }
      }), Se(x, "handleBrushChange", function(S) {
        var T = S.startIndex, R = S.endIndex;
        if (T !== x.state.dataStartIndex || R !== x.state.dataEndIndex) {
          var I = x.state.updateId;
          x.setState(function() {
            return Q({
              dataStartIndex: T,
              dataEndIndex: R
            }, y({
              props: x.props,
              dataStartIndex: T,
              dataEndIndex: R,
              updateId: I
            }, x.state));
          }), x.triggerSyncEvent({
            dataStartIndex: T,
            dataEndIndex: R
          });
        }
      }), Se(x, "handleMouseEnter", function(S) {
        var T = x.getMouseInfo(S);
        if (T) {
          var R = Q(Q({}, T), {}, {
            isTooltipActive: !0
          });
          x.setState(R), x.triggerSyncEvent(R);
          var I = x.props.onMouseEnter;
          Pe(I) && I(R, S);
        }
      }), Se(x, "triggeredAfterMouseMove", function(S) {
        var T = x.getMouseInfo(S), R = T ? Q(Q({}, T), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        x.setState(R), x.triggerSyncEvent(R);
        var I = x.props.onMouseMove;
        Pe(I) && I(R, S);
      }), Se(x, "handleItemMouseEnter", function(S) {
        x.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: S,
            activePayload: S.tooltipPayload,
            activeCoordinate: S.tooltipPosition || {
              x: S.cx,
              y: S.cy
            }
          };
        });
      }), Se(x, "handleItemMouseLeave", function() {
        x.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Se(x, "handleMouseMove", function(S) {
        S.persist(), x.throttleTriggeredAfterMouseMove(S);
      }), Se(x, "handleMouseLeave", function(S) {
        x.throttleTriggeredAfterMouseMove.cancel();
        var T = {
          isTooltipActive: !1
        };
        x.setState(T), x.triggerSyncEvent(T);
        var R = x.props.onMouseLeave;
        Pe(R) && R(T, S);
      }), Se(x, "handleOuterEvent", function(S) {
        var T = dq(S), R = br(x.props, "".concat(T));
        if (T && Pe(R)) {
          var I, q;
          /.*touch.*/i.test(T) ? q = x.getMouseInfo(S.changedTouches[0]) : q = x.getMouseInfo(S), R((I = q) !== null && I !== void 0 ? I : {}, S);
        }
      }), Se(x, "handleClick", function(S) {
        var T = x.getMouseInfo(S);
        if (T) {
          var R = Q(Q({}, T), {}, {
            isTooltipActive: !0
          });
          x.setState(R), x.triggerSyncEvent(R);
          var I = x.props.onClick;
          Pe(I) && I(R, S);
        }
      }), Se(x, "handleMouseDown", function(S) {
        var T = x.props.onMouseDown;
        if (Pe(T)) {
          var R = x.getMouseInfo(S);
          T(R, S);
        }
      }), Se(x, "handleMouseUp", function(S) {
        var T = x.props.onMouseUp;
        if (Pe(T)) {
          var R = x.getMouseInfo(S);
          T(R, S);
        }
      }), Se(x, "handleTouchMove", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && x.throttleTriggeredAfterMouseMove(S.changedTouches[0]);
      }), Se(x, "handleTouchStart", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && x.handleMouseDown(S.changedTouches[0]);
      }), Se(x, "handleTouchEnd", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && x.handleMouseUp(S.changedTouches[0]);
      }), Se(x, "handleDoubleClick", function(S) {
        var T = x.props.onDoubleClick;
        if (Pe(T)) {
          var R = x.getMouseInfo(S);
          T(R, S);
        }
      }), Se(x, "handleContextMenu", function(S) {
        var T = x.props.onContextMenu;
        if (Pe(T)) {
          var R = x.getMouseInfo(S);
          T(R, S);
        }
      }), Se(x, "triggerSyncEvent", function(S) {
        x.props.syncId !== void 0 && Hy.emit(Gy, x.props.syncId, S, x.eventEmitterSymbol);
      }), Se(x, "applySyncEvent", function(S) {
        var T = x.props, R = T.layout, I = T.syncMethod, q = x.state.updateId, $ = S.dataStartIndex, D = S.dataEndIndex;
        if (S.dataStartIndex !== void 0 || S.dataEndIndex !== void 0)
          x.setState(Q({
            dataStartIndex: $,
            dataEndIndex: D
          }, y({
            props: x.props,
            dataStartIndex: $,
            dataEndIndex: D,
            updateId: q
          }, x.state)));
        else if (S.activeTooltipIndex !== void 0) {
          var L = S.chartX, F = S.chartY, G = S.activeTooltipIndex, U = x.state, X = U.offset, Z = U.tooltipTicks;
          if (!X)
            return;
          if (typeof I == "function")
            G = I(Z, S);
          else if (I === "value") {
            G = -1;
            for (var ie = 0; ie < Z.length; ie++)
              if (Z[ie].value === S.activeLabel) {
                G = ie;
                break;
              }
          }
          var H = Q(Q({}, X), {}, {
            x: X.left,
            y: X.top
          }), K = Math.min(L, H.x + H.width), re = Math.min(F, H.y + H.height), se = Z[G] && Z[G].value, de = xm(x.state, x.props.data, G), ye = Z[G] ? {
            x: R === "horizontal" ? Z[G].coordinate : K,
            y: R === "horizontal" ? re : Z[G].coordinate
          } : GM;
          x.setState(Q(Q({}, S), {}, {
            activeLabel: se,
            activeCoordinate: ye,
            activePayload: de,
            activeTooltipIndex: G
          }));
        } else
          x.setState(S);
      }), Se(x, "renderCursor", function(S) {
        var T, R = x.state, I = R.isTooltipActive, q = R.activeCoordinate, $ = R.activePayload, D = R.offset, L = R.activeTooltipIndex, F = R.tooltipAxisBandSize, G = x.getTooltipEventType(), U = (T = S.props.active) !== null && T !== void 0 ? T : I, X = x.props.layout, Z = S.key || "_recharts-cursor";
        return /* @__PURE__ */ j.createElement(IX, {
          key: Z,
          activeCoordinate: q,
          activePayload: $,
          activeTooltipIndex: L,
          chartName: r,
          element: S,
          isActive: U,
          layout: X,
          offset: D,
          tooltipAxisBandSize: F,
          tooltipEventType: G
        });
      }), Se(x, "renderPolarAxis", function(S, T, R) {
        var I = br(S, "type.axisType"), q = br(x.state, "".concat(I, "Map")), $ = S.type.defaultProps, D = $ !== void 0 ? Q(Q({}, $), S.props) : S.props, L = q && q[D["".concat(I, "Id")]];
        return /* @__PURE__ */ At(S, Q(Q({}, L), {}, {
          className: Me(I, L.className),
          key: S.key || "".concat(T, "-").concat(R),
          ticks: jn(L, !0)
        }));
      }), Se(x, "renderPolarGrid", function(S) {
        var T = S.props, R = T.radialLines, I = T.polarAngles, q = T.polarRadius, $ = x.state, D = $.radiusAxisMap, L = $.angleAxisMap, F = li(D), G = li(L), U = G.cx, X = G.cy, Z = G.innerRadius, ie = G.outerRadius;
        return /* @__PURE__ */ At(S, {
          polarAngles: Array.isArray(I) ? I : jn(G, !0).map(function(H) {
            return H.coordinate;
          }),
          polarRadius: Array.isArray(q) ? q : jn(F, !0).map(function(H) {
            return H.coordinate;
          }),
          cx: U,
          cy: X,
          innerRadius: Z,
          outerRadius: ie,
          key: S.key || "polar-grid",
          radialLines: R
        });
      }), Se(x, "renderLegend", function() {
        var S = x.state.formattedGraphicalItems, T = x.props, R = T.children, I = T.width, q = T.height, $ = x.props.margin || {}, D = I - ($.left || 0) - ($.right || 0), L = _2({
          children: R,
          formattedGraphicalItems: S,
          legendWidth: D,
          legendContent: f
        });
        if (!L)
          return null;
        var F = L.item, G = kE(L, $X);
        return /* @__PURE__ */ At(F, Q(Q({}, G), {}, {
          chartWidth: I,
          chartHeight: q,
          margin: $,
          onBBoxUpdate: x.handleLegendBBoxUpdate
        }));
      }), Se(x, "renderTooltip", function() {
        var S, T = x.props, R = T.children, I = T.accessibilityLayer, q = yr(R, un);
        if (!q)
          return null;
        var $ = x.state, D = $.isTooltipActive, L = $.activeCoordinate, F = $.activePayload, G = $.activeLabel, U = $.offset, X = (S = q.props.active) !== null && S !== void 0 ? S : D;
        return /* @__PURE__ */ At(q, {
          viewBox: Q(Q({}, U), {}, {
            x: U.left,
            y: U.top
          }),
          active: X,
          label: G,
          payload: X ? F : [],
          coordinate: L,
          accessibilityLayer: I
        });
      }), Se(x, "renderBrush", function(S) {
        var T = x.props, R = T.margin, I = T.data, q = x.state, $ = q.offset, D = q.dataStartIndex, L = q.dataEndIndex, F = q.updateId;
        return /* @__PURE__ */ At(S, {
          key: S.key || "_recharts-brush",
          onChange: lc(x.handleBrushChange, S.props.onChange),
          data: I,
          x: ce(S.props.x) ? S.props.x : $.left,
          y: ce(S.props.y) ? S.props.y : $.top + $.height + $.brushBottom - (R.bottom || 0),
          width: ce(S.props.width) ? S.props.width : $.width,
          startIndex: D,
          endIndex: L,
          updateId: "brush-".concat(F)
        });
      }), Se(x, "renderReferenceElement", function(S, T, R) {
        if (!S)
          return null;
        var I = x, q = I.clipPathId, $ = x.state, D = $.xAxisMap, L = $.yAxisMap, F = $.offset, G = S.type.defaultProps || {}, U = S.props, X = U.xAxisId, Z = X === void 0 ? G.xAxisId : X, ie = U.yAxisId, H = ie === void 0 ? G.yAxisId : ie;
        return /* @__PURE__ */ At(S, {
          key: S.key || "".concat(T, "-").concat(R),
          xAxis: D[Z],
          yAxis: L[H],
          viewBox: {
            x: F.left,
            y: F.top,
            width: F.width,
            height: F.height
          },
          clipPathId: q
        });
      }), Se(x, "renderActivePoints", function(S) {
        var T = S.item, R = S.activePoint, I = S.basePoint, q = S.childIndex, $ = S.isRange, D = [], L = T.props.key, F = T.item.type.defaultProps !== void 0 ? Q(Q({}, T.item.type.defaultProps), T.item.props) : T.item.props, G = F.activeDot, U = F.dataKey, X = Q(Q({
          index: q,
          dataKey: U,
          cx: R.x,
          cy: R.y,
          r: 4,
          fill: Sb(T.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: R.payload,
          value: R.value
        }, we(G, !1)), Ac(G));
        return D.push(_.renderActiveDot(G, X, "".concat(L, "-activePoint-").concat(q))), I ? D.push(_.renderActiveDot(G, Q(Q({}, X), {}, {
          cx: I.x,
          cy: I.y
        }), "".concat(L, "-basePoint-").concat(q))) : $ && D.push(null), D;
      }), Se(x, "renderGraphicChild", function(S, T, R) {
        var I = x.filterFormatItem(S, T, R);
        if (!I)
          return null;
        var q = x.getTooltipEventType(), $ = x.state, D = $.isTooltipActive, L = $.tooltipAxis, F = $.activeTooltipIndex, G = $.activeLabel, U = x.props.children, X = yr(U, un), Z = I.props, ie = Z.points, H = Z.isRange, K = Z.baseLine, re = I.item.type.defaultProps !== void 0 ? Q(Q({}, I.item.type.defaultProps), I.item.props) : I.item.props, se = re.activeDot, de = re.hide, ye = re.activeBar, me = re.activeShape, he = !!(!de && D && X && (se || ye || me)), pe = {};
        q !== "axis" && X && X.props.trigger === "click" ? pe = {
          onClick: lc(x.handleItemMouseEnter, S.props.onClick)
        } : q !== "axis" && (pe = {
          onMouseLeave: lc(x.handleItemMouseLeave, S.props.onMouseLeave),
          onMouseEnter: lc(x.handleItemMouseEnter, S.props.onMouseEnter)
        });
        var te = /* @__PURE__ */ At(S, Q(Q({}, I.props), pe));
        function le(Ft) {
          return typeof L.dataKey == "function" ? L.dataKey(Ft.payload) : null;
        }
        if (he)
          if (F >= 0) {
            var be, z;
            if (L.dataKey && !L.allowDuplicatedCategory) {
              var Te = typeof L.dataKey == "function" ? le : "payload.".concat(L.dataKey.toString());
              be = Oc(ie, Te, G), z = H && K && Oc(K, Te, G);
            } else
              be = ie == null ? void 0 : ie[F], z = H && K && K[F];
            if (me || ye) {
              var oe = S.props.activeIndex !== void 0 ? S.props.activeIndex : F;
              return [/* @__PURE__ */ At(S, Q(Q(Q({}, I.props), pe), {}, {
                activeIndex: oe
              })), null, null];
            }
            if (!Ee(be))
              return [te].concat(ho(x.renderActivePoints({
                item: I,
                activePoint: be,
                basePoint: z,
                childIndex: F,
                isRange: H
              })));
          } else {
            var Be, Qe = (Be = x.getItemByXY(x.state.activeCoordinate)) !== null && Be !== void 0 ? Be : {
              graphicalItem: te
            }, Xe = Qe.graphicalItem, or = Xe.item, ur = or === void 0 ? S : or, rn = Xe.childIndex, xt = Q(Q(Q({}, I.props), pe), {}, {
              activeIndex: rn
            });
            return [/* @__PURE__ */ At(ur, xt), null, null];
          }
        return H ? [te, null, null] : [te, null];
      }), Se(x, "renderCustomized", function(S, T, R) {
        return /* @__PURE__ */ At(S, Q(Q({
          key: "recharts-customized-".concat(R)
        }, x.props), x.state));
      }), Se(x, "renderMap", {
        CartesianGrid: {
          handler: gc,
          once: !0
        },
        ReferenceArea: {
          handler: x.renderReferenceElement
        },
        ReferenceLine: {
          handler: gc
        },
        ReferenceDot: {
          handler: x.renderReferenceElement
        },
        XAxis: {
          handler: gc
        },
        YAxis: {
          handler: gc
        },
        Brush: {
          handler: x.renderBrush,
          once: !0
        },
        Bar: {
          handler: x.renderGraphicChild
        },
        Line: {
          handler: x.renderGraphicChild
        },
        Area: {
          handler: x.renderGraphicChild
        },
        Radar: {
          handler: x.renderGraphicChild
        },
        RadialBar: {
          handler: x.renderGraphicChild
        },
        Scatter: {
          handler: x.renderGraphicChild
        },
        Pie: {
          handler: x.renderGraphicChild
        },
        Funnel: {
          handler: x.renderGraphicChild
        },
        Tooltip: {
          handler: x.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: x.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: x.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: x.renderPolarAxis
        },
        Customized: {
          handler: x.renderCustomized
        }
      }), x.clipPathId = "".concat((A = O.id) !== null && A !== void 0 ? A : aa("recharts"), "-clip"), x.throttleTriggeredAfterMouseMove = wC(x.triggeredAfterMouseMove, (P = O.throttleDelay) !== null && P !== void 0 ? P : 1e3 / 60), x.state = {}, x;
    }
    return HX(_, g), FX(_, [{
      key: "componentDidMount",
      value: function() {
        var A, P;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (A = this.props.margin.left) !== null && A !== void 0 ? A : 0,
            top: (P = this.props.margin.top) !== null && P !== void 0 ? P : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var A = this.props, P = A.children, x = A.data, S = A.height, T = A.layout, R = yr(P, un);
        if (R) {
          var I = R.props.defaultIndex;
          if (!(typeof I != "number" || I < 0 || I > this.state.tooltipTicks.length - 1)) {
            var q = this.state.tooltipTicks[I] && this.state.tooltipTicks[I].value, $ = xm(this.state, x, I, q), D = this.state.tooltipTicks[I].coordinate, L = (this.state.offset.top + S) / 2, F = T === "horizontal", G = F ? {
              x: D,
              y: L
            } : {
              y: D,
              x: L
            }, U = this.state.formattedGraphicalItems.find(function(Z) {
              var ie = Z.item;
              return ie.type.name === "Scatter";
            });
            U && (G = Q(Q({}, G), U.props.points[I].tooltipPosition), $ = U.props.points[I].tooltipPayload);
            var X = {
              activeTooltipIndex: I,
              isTooltipActive: !0,
              activeLabel: q,
              activePayload: $,
              activeCoordinate: G
            };
            this.setState(X), this.renderCursor(R), this.accessibilityManager.setIndex(I);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(A, P) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== P.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== A.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== A.margin) {
          var x, S;
          this.accessibilityManager.setDetails({
            offset: {
              left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
              top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(A) {
        tg([yr(A.children, un)], [yr(this.props.children, un)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var A = yr(this.props.children, un);
        if (A && typeof A.props.shared == "boolean") {
          var P = A.props.shared ? "axis" : "item";
          return s.indexOf(P) >= 0 ? P : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(A) {
        if (!this.container)
          return null;
        var P = this.container, x = P.getBoundingClientRect(), S = tW(x), T = {
          chartX: Math.round(A.pageX - S.left),
          chartY: Math.round(A.pageY - S.top)
        }, R = x.width / P.offsetWidth || 1, I = this.inRange(T.chartX, T.chartY, R);
        if (!I)
          return null;
        var q = this.state, $ = q.xAxisMap, D = q.yAxisMap, L = this.getTooltipEventType();
        if (L !== "axis" && $ && D) {
          var F = li($).scale, G = li(D).scale, U = F && F.invert ? F.invert(T.chartX) : null, X = G && G.invert ? G.invert(T.chartY) : null;
          return Q(Q({}, T), {}, {
            xValue: U,
            yValue: X
          });
        }
        var Z = NE(this.state, this.props.data, this.props.layout, I);
        return Z ? Q(Q({}, T), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(A, P) {
        var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, S = this.props.layout, T = A / x, R = P / x;
        if (S === "horizontal" || S === "vertical") {
          var I = this.state.offset, q = T >= I.left && T <= I.left + I.width && R >= I.top && R <= I.top + I.height;
          return q ? {
            x: T,
            y: R
          } : null;
        }
        var $ = this.state, D = $.angleAxisMap, L = $.radiusAxisMap;
        if (D && L) {
          var F = li(D);
          return RS({
            x: T,
            y: R
          }, F);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var A = this.props.children, P = this.getTooltipEventType(), x = yr(A, un), S = {};
        x && P === "axis" && (x.props.trigger === "click" ? S = {
          onClick: this.handleClick
        } : S = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var T = Ac(this.props, this.handleOuterEvent);
        return Q(Q({}, T), S);
      }
    }, {
      key: "addListener",
      value: function() {
        Hy.on(Gy, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Hy.removeListener(Gy, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(A, P, x) {
        for (var S = this.state.formattedGraphicalItems, T = 0, R = S.length; T < R; T++) {
          var I = S[T];
          if (I.item === A || I.props.key === A.key || P === kn(I.item.type) && x === I.childIndex)
            return I;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var A = this.clipPathId, P = this.state.offset, x = P.left, S = P.top, T = P.height, R = P.width;
        return /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
          id: A
        }, /* @__PURE__ */ j.createElement("rect", {
          x,
          y: S,
          height: T,
          width: R
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var A = this.state.xAxisMap;
        return A ? Object.entries(A).reduce(function(P, x) {
          var S = jE(x, 2), T = S[0], R = S[1];
          return Q(Q({}, P), {}, Se({}, T, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var A = this.state.yAxisMap;
        return A ? Object.entries(A).reduce(function(P, x) {
          var S = jE(x, 2), T = S[0], R = S[1];
          return Q(Q({}, P), {}, Se({}, T, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(A) {
        var P;
        return (P = this.state.xAxisMap) === null || P === void 0 || (P = P[A]) === null || P === void 0 ? void 0 : P.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(A) {
        var P;
        return (P = this.state.yAxisMap) === null || P === void 0 || (P = P[A]) === null || P === void 0 ? void 0 : P.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(A) {
        var P = this.state, x = P.formattedGraphicalItems, S = P.activeItem;
        if (x && x.length)
          for (var T = 0, R = x.length; T < R; T++) {
            var I = x[T], q = I.props, $ = I.item, D = $.type.defaultProps !== void 0 ? Q(Q({}, $.type.defaultProps), $.props) : $.props, L = kn($.type);
            if (L === "Bar") {
              var F = (q.data || []).find(function(Z) {
                return OH(A, Z);
              });
              if (F)
                return {
                  graphicalItem: I,
                  payload: F
                };
            } else if (L === "RadialBar") {
              var G = (q.data || []).find(function(Z) {
                return RS(A, Z);
              });
              if (G)
                return {
                  graphicalItem: I,
                  payload: G
                };
            } else if (rf(I, S) || nf(I, S) || Hu(I, S)) {
              var U = KG({
                graphicalItem: I,
                activeTooltipItem: S,
                itemData: D.data
              }), X = D.activeIndex === void 0 ? U : D.activeIndex;
              return {
                graphicalItem: Q(Q({}, I), {}, {
                  childIndex: X
                }),
                payload: Hu(I, S) ? D.data[U] : I.props.data[U]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var A = this;
        if (!z1(this))
          return null;
        var P = this.props, x = P.children, S = P.className, T = P.width, R = P.height, I = P.style, q = P.compact, $ = P.title, D = P.desc, L = kE(P, jX), F = we(L, !1);
        if (q)
          return /* @__PURE__ */ j.createElement(hE, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ j.createElement(ng, $a({}, F, {
            width: T,
            height: R,
            title: $,
            desc: D
          }), this.renderClipPath(), H1(x, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var G, U;
          F.tabIndex = (G = this.props.tabIndex) !== null && G !== void 0 ? G : 0, F.role = (U = this.props.role) !== null && U !== void 0 ? U : "application", F.onKeyDown = function(Z) {
            A.accessibilityManager.keyboardEvent(Z);
          }, F.onFocus = function() {
            A.accessibilityManager.focus();
          };
        }
        var X = this.parseEventsOfWrapper();
        return /* @__PURE__ */ j.createElement(hE, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ j.createElement("div", $a({
          className: Me("recharts-wrapper", S),
          style: Q({
            position: "relative",
            cursor: "default",
            width: T,
            height: R
          }, I)
        }, X, {
          ref: function(ie) {
            A.container = ie;
          }
        }), /* @__PURE__ */ j.createElement(ng, $a({}, F, {
          width: T,
          height: R,
          title: $,
          desc: D,
          style: ZX
        }), this.renderClipPath(), H1(x, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(oT);
  Se(b, "displayName", r), Se(b, "defaultProps", Q({
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
  }, h)), Se(b, "getDerivedStateFromProps", function(g, _) {
    var O = g.dataKey, A = g.data, P = g.children, x = g.width, S = g.height, T = g.layout, R = g.stackOffset, I = g.margin, q = _.dataStartIndex, $ = _.dataEndIndex;
    if (_.updateId === void 0) {
      var D = LE(g);
      return Q(Q(Q({}, D), {}, {
        updateId: 0
      }, y(Q(Q({
        props: g
      }, D), {}, {
        updateId: 0
      }), _)), {}, {
        prevDataKey: O,
        prevData: A,
        prevWidth: x,
        prevHeight: S,
        prevLayout: T,
        prevStackOffset: R,
        prevMargin: I,
        prevChildren: P
      });
    }
    if (O !== _.prevDataKey || A !== _.prevData || x !== _.prevWidth || S !== _.prevHeight || T !== _.prevLayout || R !== _.prevStackOffset || !Da(I, _.prevMargin)) {
      var L = LE(g), F = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: _.chartX,
        chartY: _.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: _.isTooltipActive
      }, G = Q(Q({}, NE(_, A, T)), {}, {
        updateId: _.updateId + 1
      }), U = Q(Q(Q({}, L), F), G);
      return Q(Q(Q({}, U), y(Q({
        props: g
      }, U), _)), {}, {
        prevDataKey: O,
        prevData: A,
        prevWidth: x,
        prevHeight: S,
        prevLayout: T,
        prevStackOffset: R,
        prevMargin: I,
        prevChildren: P
      });
    }
    if (!tg(P, _.prevChildren)) {
      var X, Z, ie, H, K = yr(P, eo), re = K && (X = (Z = K.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && X !== void 0 ? X : q, se = K && (ie = (H = K.props) === null || H === void 0 ? void 0 : H.endIndex) !== null && ie !== void 0 ? ie : $, de = re !== q || se !== $, ye = !Ee(A), me = ye && !de ? _.updateId : _.updateId + 1;
      return Q(Q({
        updateId: me
      }, y(Q(Q({
        props: g
      }, _), {}, {
        updateId: me,
        dataStartIndex: re,
        dataEndIndex: se
      }), _)), {}, {
        prevChildren: P,
        dataStartIndex: re,
        dataEndIndex: se
      });
    }
    return null;
  }), Se(b, "renderActiveDot", function(g, _, O) {
    var A;
    return /* @__PURE__ */ Vr(g) ? A = /* @__PURE__ */ At(g, _) : Pe(g) ? A = g(_) : A = /* @__PURE__ */ j.createElement(us, _), /* @__PURE__ */ j.createElement(Ne, {
      className: "recharts-active-dot",
      key: O
    }, A);
  });
  var m = /* @__PURE__ */ Zr(function(_, O) {
    return /* @__PURE__ */ j.createElement(b, $a({}, _, {
      ref: O
    }));
  });
  return m.displayName = b.displayName, m;
}, uZ = ff({
  chartName: "LineChart",
  GraphicalChild: cs,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: Tb
}), VM = ff({
  chartName: "BarChart",
  GraphicalChild: Ai,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: Tb
}), sZ = ff({
  chartName: "PieChart",
  GraphicalChild: Gn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: tf
  }, {
    axisType: "radiusAxis",
    AxisComp: Ql
  }],
  formatAxisMap: $5,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), cZ = ff({
  chartName: "AreaChart",
  GraphicalChild: Si,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: Tb
});
const lZ = Wn({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), fZ = { light: "", dark: ".dark" }, YM = J.createContext(null);
function XM() {
  const e = J.useContext(YM);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const dZ = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, o) => {
  const s = J.useId(), l = `chart-${e || s.replace(/:/g, "")}`, f = J.useRef(null), [d, h] = Zt(), v = go(() => new ResizeObserver(
    (y) => h(y[0].contentRect.height)
  ), []);
  return Tm(() => {
    const y = o && "current" in o ? o.current : f.current;
    return y && v.observe(y.parentElement), () => {
      v.disconnect();
    };
  }, [v, o, f]), /* @__PURE__ */ Y(YM.Provider, { value: { config: i }, children: /* @__PURE__ */ Fe(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: o || f,
      className: Lt(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? lZ({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ Y(hZ, { id: l, config: i }),
        /* @__PURE__ */ Y(
          VF,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, Eo = J.forwardRef(dZ);
Eo.displayName = "Chart";
const hZ = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ Y(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(fZ).map(
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
}, ls = un, To = J.forwardRef(
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
    labelKey: y
  }, b) => {
    const { config: m } = XM(), g = J.useMemo(() => {
      var S;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, A = `${y || O.dataKey || O.name || "value"}`, P = wm(m, O, A), x = !y && typeof o == "string" ? ((S = m[o]) == null ? void 0 : S.label) || o : P == null ? void 0 : P.label;
      return s ? /* @__PURE__ */ Y("div", { className: Lt("font-medium", l), children: s(x, t) }) : x ? /* @__PURE__ */ Y("div", { className: Lt("font-medium", l), children: x }) : null;
    }, [
      o,
      s,
      t,
      i,
      l,
      m,
      y
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const _ = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Fe(
      "div",
      {
        ref: b,
        className: Lt(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          _ ? null : g,
          /* @__PURE__ */ Y("div", { className: "grid gap-2", children: t.map((O, A) => {
            const P = `${v || O.name || O.dataKey || "value"}`, x = wm(m, O, P), S = h || O.payload.fill || O.color;
            return /* @__PURE__ */ Y(
              "div",
              {
                className: Lt(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, A, O.payload) : /* @__PURE__ */ Fe(ja, { children: [
                  x != null && x.icon ? /* @__PURE__ */ Y(x.icon, {}) : !a && /* @__PURE__ */ Y(
                    "div",
                    {
                      className: Lt(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": _ && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": S,
                        "--color-border": S
                      }
                    }
                  ),
                  /* @__PURE__ */ Fe(
                    "div",
                    {
                      className: Lt(
                        "flex flex-1 justify-between leading-none",
                        _ ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Fe("div", { className: "grid gap-2", children: [
                          _ ? g : null,
                          /* @__PURE__ */ Y("span", { className: "pr-2 text-f1-foreground", children: (x == null ? void 0 : x.label) || O.name })
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
To.displayName = "ChartTooltip";
const Lb = Vi, df = J.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: o = 0
  }, s) => {
    const { config: l } = XM();
    return r != null && r.length ? /* @__PURE__ */ Y(
      "div",
      {
        ref: s,
        className: Lt(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: o },
        children: r.map((f) => {
          const d = `${i || f.dataKey || "value"}`, h = wm(
            l,
            f,
            d,
            a
          );
          return /* @__PURE__ */ Fe(
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
df.displayName = "ChartLegend";
function wm(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const pZ = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let vZ = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += pZ[r[e] & 63];
  return t;
};
const yZ = {
  "chart-1": "var(--chart-1)",
  "chart-2": "var(--chart-2)",
  "chart-3": "var(--chart-3)",
  "chart-4": "var(--chart-4)",
  "chart-5": "var(--chart-5)",
  "chart-6": "var(--chart-6)",
  "chart-7": "var(--chart-7)",
  "chart-8": "var(--chart-8)"
}, Xr = (e, t = !0) => {
  const r = Object.values(yZ), n = r[e % r.length];
  return t ? `hsl(${n})` : n;
};
function hf(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const qb = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Bb = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e == null ? void 0 : e.ticks,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), pf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function Co(e) {
  return Zr(e);
}
function Fb(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const gZ = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, o = e === t - 1;
  return /* @__PURE__ */ Y(vi, { ...i, textAnchor: a ? "start" : o ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, mZ = ({
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
  const { enabled: d } = hL(), h = Object.keys(t), v = vZ(12), y = Fb(e), b = Math.max(
    ...y.flatMap(
      (A) => h.map(
        (P) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${A[P]}`) : `${A[P]}`
        )
      )
    )
  ), m = (n == null ? void 0 : n.width) ?? b + 20, g = !(n != null && n.hide), _ = !(r != null && r.hide), O = !i || !d;
  return /* @__PURE__ */ Y(Eo, { config: t, ref: f, aspect: s, children: /* @__PURE__ */ Fe(
    cZ,
    {
      accessibilityLayer: !0,
      data: y,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: l
      },
      children: [
        /* @__PURE__ */ Fe("defs", { children: [
          /* @__PURE__ */ Fe(
            "linearGradient",
            {
              id: `${v}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${g ? m : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ Fe(ja, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ Y("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ Fe(ja, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ Y("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ Fe(ja, { children: [
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
          h.map((A, P) => /* @__PURE__ */ Fe(
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
                    stopColor: t[A].color || Xr(P),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[A].color || Xr(P),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            P
          ))
        ] }),
        /* @__PURE__ */ Y(
          ss,
          {
            ...pf(),
            mask: `url(#${v}-transparent-edges)`
          }
        ),
        _ && /* @__PURE__ */ Y(
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
            tick: gZ
          }
        ),
        g && /* @__PURE__ */ Y(
          Vn,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n == null ? void 0 : n.tickCount,
            tickFormatter: i && d ? () => "**" : n == null ? void 0 : n.tickFormatter,
            ticks: n == null ? void 0 : n.ticks,
            domain: n == null ? void 0 : n.domain,
            width: m
          }
        ),
        O && /* @__PURE__ */ Y(
          ls,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(
              To,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        h.map((A, P) => /* @__PURE__ */ Y(
          Si,
          {
            isAnimationActive: !1,
            dataKey: A,
            type: o,
            mask: `url(#${v}-transparent-edges)`,
            fill: `url(#fill${A}-${v})`,
            fillOpacity: t[A].dashed ? 0 : 0.4,
            stroke: t[A].color || Xr(P),
            strokeWidth: 1.5,
            strokeDasharray: t[A].dashed ? "4 4" : void 0
          },
          A
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ Y(
          Lb,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ Y(df, {})
          }
        )
      ]
    }
  ) });
}, QQ = Co(mZ), bZ = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  hideTooltip: o = !1,
  aspect: s,
  legend: l,
  showValueUnderLabel: f = !1,
  highlightLastBar: d = !1,
  onClick: h
}, v) => {
  const y = Object.keys(e), b = Fb(t).map((g, _, O) => {
    var A;
    return d && y.length === 1 && !((A = e[y[0]]) != null && A.color) ? {
      ...g,
      fill: _ === O.length - 1 ? Xr(0) : `hsl(${Xr(0, !1)} / 0.5)`
    } : g;
  }), m = Math.max(
    ...b.flatMap(
      (g) => y.map(
        (_) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${g[_]}`) : `${g[_]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(Eo, { config: e, ref: v, aspect: s, children: /* @__PURE__ */ Fe(
    VM,
    {
      accessibilityLayer: !0,
      data: b,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: f ? 24 : 12
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      onClick: (g) => {
        if (!h || !g.activeLabel || !g.activePayload)
          return;
        const _ = {
          label: g.activeLabel,
          values: {}
        };
        for (const O of g.activePayload)
          _.values[O.name] = O.value;
        h(_);
      },
      children: [
        o && /* @__PURE__ */ Y(
          ls,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(To, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(ss, { ...pf() }),
        /* @__PURE__ */ Y(
          Vn,
          {
            ...Bb(n),
            tick: !0,
            width: n.width ?? m + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ Y(
          Kn,
          {
            ...qb(r),
            hide: r == null ? void 0 : r.hide,
            tick: f ? (g) => {
              var T, R;
              const { x: _, y: O, payload: A } = g, P = ((T = t.find((I) => I.label === A.value)) == null ? void 0 : T.values) || "", x = Object.keys(P).length === 1 ? (R = Object.values(P)) == null ? void 0 : R[0] : void 0, S = x !== void 0 && n.tickFormatter ? n.tickFormatter(`${x}`) : x.toLocaleString();
              return /* @__PURE__ */ Fe("g", { transform: `translate(${_},${O})`, children: [
                /* @__PURE__ */ Y(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: A.value
                  }
                ),
                !!x && /* @__PURE__ */ Y(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: S
                  }
                )
              ] });
            } : void 0
          }
        ),
        y.map((g, _) => /* @__PURE__ */ Y(
          Ai,
          {
            isAnimationActive: !1,
            dataKey: g,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: d ? (O) => O.fill : e[g].color ?? Xr(_),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ Y(
              kr,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${g}`
            )
          },
          `bar-${g}`
        )),
        l && /* @__PURE__ */ Y(
          Lb,
          {
            content: /* @__PURE__ */ Y(df, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, eee = Co(bZ);
function Rn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function tee(e, t) {
  const r = J.createContext(t), n = (a) => {
    const { children: o, ...s } = a, l = J.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ Y(r.Provider, { value: l, children: o });
  };
  n.displayName = e + "Provider";
  function i(a) {
    const o = J.useContext(r);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, i];
}
function ZM(e, t = []) {
  let r = [];
  function n(a, o) {
    const s = J.createContext(o), l = r.length;
    r = [...r, o];
    const f = (h) => {
      var _;
      const { scope: v, children: y, ...b } = h, m = ((_ = v == null ? void 0 : v[e]) == null ? void 0 : _[l]) || s, g = J.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ Y(m.Provider, { value: g, children: y });
    };
    f.displayName = a + "Provider";
    function d(h, v) {
      var m;
      const y = ((m = v == null ? void 0 : v[e]) == null ? void 0 : m[l]) || s, b = J.useContext(y);
      if (b) return b;
      if (o !== void 0) return o;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return [f, d];
  }
  const i = () => {
    const a = r.map((o) => J.createContext(o));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return J.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return i.scopeName = e, [n, xZ(i, ...t)];
}
function xZ(...e) {
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
      return J.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var wZ = [
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
], ca = wZ.reduce((e, t) => {
  const r = J.forwardRef((n, i) => {
    const { asChild: a, ...o } = n, s = a ? Im : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Y(s, { ...o, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function _Z(e, t) {
  e && uT.flushSync(() => e.dispatchEvent(t));
}
function Mo(e) {
  const t = J.useRef(e);
  return J.useEffect(() => {
    t.current = e;
  }), J.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function OZ(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e);
  J.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var AZ = "DismissableLayer", _m = "dismissableLayer.update", SZ = "dismissableLayer.pointerDownOutside", PZ = "dismissableLayer.focusOutside", BE, JM = J.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), QM = J.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: o,
      onDismiss: s,
      ...l
    } = e, f = J.useContext(JM), [d, h] = J.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = J.useState({}), b = na(t, (T) => h(T)), m = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = m.indexOf(g), O = d ? m.indexOf(d) : -1, A = f.layersWithOutsidePointerEventsDisabled.size > 0, P = O >= _, x = CZ((T) => {
      const R = T.target, I = [...f.branches].some((q) => q.contains(R));
      !P || I || (i == null || i(T), o == null || o(T), T.defaultPrevented || s == null || s());
    }, v), S = MZ((T) => {
      const R = T.target;
      [...f.branches].some((q) => q.contains(R)) || (a == null || a(T), o == null || o(T), T.defaultPrevented || s == null || s());
    }, v);
    return OZ((T) => {
      O === f.layers.size - 1 && (n == null || n(T), !T.defaultPrevented && s && (T.preventDefault(), s()));
    }, v), J.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (BE = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), FE(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = BE);
        };
    }, [d, v, r, f]), J.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), FE());
    }, [d, f]), J.useEffect(() => {
      const T = () => y({});
      return document.addEventListener(_m, T), () => document.removeEventListener(_m, T);
    }, []), /* @__PURE__ */ Y(
      ca.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: A ? P ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Rn(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Rn(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Rn(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
QM.displayName = AZ;
var EZ = "DismissableLayerBranch", TZ = J.forwardRef((e, t) => {
  const r = J.useContext(JM), n = J.useRef(null), i = na(t, n);
  return J.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ Y(ca.div, { ...e, ref: i });
});
TZ.displayName = EZ;
function CZ(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e), n = J.useRef(!1), i = J.useRef(() => {
  });
  return J.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          eR(
            SZ,
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
function MZ(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e), n = J.useRef(!1);
  return J.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && eR(PZ, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function FE() {
  const e = new CustomEvent(_m);
  document.dispatchEvent(e);
}
function eR(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? _Z(i, a) : i.dispatchEvent(a);
}
var po = globalThis != null && globalThis.document ? J.useLayoutEffect : () => {
}, RZ = J.useId || (() => {
}), IZ = 0;
function $Z(e) {
  const [t, r] = J.useState(RZ());
  return po(() => {
    r((n) => n ?? String(IZ++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const jZ = ["top", "right", "bottom", "left"], yi = Math.min, gr = Math.max, Al = Math.round, mc = Math.floor, dn = (e) => ({
  x: e,
  y: e
}), kZ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, DZ = {
  start: "end",
  end: "start"
};
function Om(e, t, r) {
  return gr(e, yi(t, r));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fn(e) {
  return e.split("-")[0];
}
function Ro(e) {
  return e.split("-")[1];
}
function Wb(e) {
  return e === "x" ? "y" : "x";
}
function zb(e) {
  return e === "y" ? "height" : "width";
}
function gi(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function Ub(e) {
  return Wb(gi(e));
}
function NZ(e, t, r) {
  r === void 0 && (r = !1);
  const n = Ro(e), i = Ub(e), a = zb(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Sl(o)), [o, Sl(o)];
}
function LZ(e) {
  const t = Sl(e);
  return [Am(e), t, Am(t)];
}
function Am(e) {
  return e.replace(/start|end/g, (t) => DZ[t]);
}
function qZ(e, t, r) {
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
function BZ(e, t, r, n) {
  const i = Ro(e);
  let a = qZ(Fn(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Am)))), a;
}
function Sl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => kZ[t]);
}
function FZ(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function tR(e) {
  return typeof e != "number" ? FZ(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pl(e) {
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
function WE(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = gi(t), o = Ub(t), s = zb(o), l = Fn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[s] / 2 - i[s] / 2;
  let y;
  switch (l) {
    case "top":
      y = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      y = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      y = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      y = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      y = {
        x: n.x,
        y: n.y
      };
  }
  switch (Ro(t)) {
    case "start":
      y[o] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      y[o] += v * (r && f ? -1 : 1);
      break;
  }
  return y;
}
const WZ = async (e, t, r) => {
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
  } = WE(f, n, l), v = n, y = {}, b = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: g,
      fn: _
    } = s[m], {
      x: O,
      y: A,
      data: P,
      reset: x
    } = await _({
      x: d,
      y: h,
      initialPlacement: n,
      placement: v,
      strategy: i,
      middlewareData: y,
      rects: f,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, h = A ?? h, y = {
      ...y,
      [g]: {
        ...y[g],
        ...P
      }
    }, x && b <= 50 && (b++, typeof x == "object" && (x.placement && (v = x.placement), x.rects && (f = x.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: d,
      y: h
    } = WE(f, v, l)), m = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: y
  };
};
async function Zu(e, t) {
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
    padding: y = 0
  } = Bn(t, e), b = tR(y), g = s[v ? h === "floating" ? "reference" : "floating" : h], _ = Pl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), P = await (a.isElement == null ? void 0 : a.isElement(A)) ? await (a.getScale == null ? void 0 : a.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Pl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: O,
    offsetParent: A,
    strategy: l
  }) : O);
  return {
    top: (_.top - x.top + b.top) / P.y,
    bottom: (x.bottom - _.bottom + b.bottom) / P.y,
    left: (_.left - x.left + b.left) / P.x,
    right: (x.right - _.right + b.right) / P.x
  };
}
const zZ = (e) => ({
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
    const h = tR(d), v = {
      x: r,
      y: n
    }, y = Ub(i), b = zb(y), m = await o.getDimensions(f), g = y === "y", _ = g ? "top" : "left", O = g ? "bottom" : "right", A = g ? "clientHeight" : "clientWidth", P = a.reference[b] + a.reference[y] - v[y] - a.floating[b], x = v[y] - a.reference[y], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(f));
    let T = S ? S[A] : 0;
    (!T || !await (o.isElement == null ? void 0 : o.isElement(S))) && (T = s.floating[A] || a.floating[b]);
    const R = P / 2 - x / 2, I = T / 2 - m[b] / 2 - 1, q = yi(h[_], I), $ = yi(h[O], I), D = q, L = T - m[b] - $, F = T / 2 - m[b] / 2 + R, G = Om(D, F, L), U = !l.arrow && Ro(i) != null && F !== G && a.reference[b] / 2 - (F < D ? q : $) - m[b] / 2 < 0, X = U ? F < D ? F - D : F - L : 0;
    return {
      [y]: v[y] + X,
      data: {
        [y]: G,
        centerOffset: F - G - X,
        ...U && {
          alignmentOffset: X
        }
      },
      reset: U
    };
  }
}), UZ = function(e) {
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
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...g
      } = Bn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const _ = Fn(i), O = gi(s), A = Fn(s) === s, P = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), x = v || (A || !m ? [Sl(s)] : LZ(s)), S = b !== "none";
      !v && S && x.push(...BZ(s, m, b, P));
      const T = [s, ...x], R = await Zu(t, g), I = [];
      let q = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && I.push(R[_]), h) {
        const F = NZ(i, o, P);
        I.push(R[F[0]], R[F[1]]);
      }
      if (q = [...q, {
        placement: i,
        overflows: I
      }], !I.every((F) => F <= 0)) {
        var $, D;
        const F = ((($ = a.flip) == null ? void 0 : $.index) || 0) + 1, G = T[F];
        if (G)
          return {
            data: {
              index: F,
              overflows: q
            },
            reset: {
              placement: G
            }
          };
        let U = (D = q.filter((X) => X.overflows[0] <= 0).sort((X, Z) => X.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!U)
          switch (y) {
            case "bestFit": {
              var L;
              const X = (L = q.filter((Z) => {
                if (S) {
                  const ie = gi(Z.placement);
                  return ie === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ie === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((ie) => ie > 0).reduce((ie, H) => ie + H, 0)]).sort((Z, ie) => Z[1] - ie[1])[0]) == null ? void 0 : L[0];
              X && (U = X);
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
function zE(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function UE(e) {
  return jZ.some((t) => e[t] >= 0);
}
const HZ = function(e) {
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
          const a = await Zu(t, {
            ...i,
            elementContext: "reference"
          }), o = zE(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: UE(o)
            }
          };
        }
        case "escaped": {
          const a = await Zu(t, {
            ...i,
            altBoundary: !0
          }), o = zE(a, r.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: UE(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function GZ(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Fn(r), s = Ro(r), l = gi(r) === "y", f = ["left", "top"].includes(o) ? -1 : 1, d = a && l ? -1 : 1, h = Bn(t, e);
  let {
    mainAxis: v,
    crossAxis: y,
    alignmentAxis: b
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return s && typeof b == "number" && (y = s === "end" ? b * -1 : b), l ? {
    x: y * d,
    y: v * f
  } : {
    x: v * f,
    y: y * d
  };
}
const KZ = function(e) {
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
      } = t, l = await GZ(t, e);
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
}, VZ = function(e) {
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
          fn: (g) => {
            let {
              x: _,
              y: O
            } = g;
            return {
              x: _,
              y: O
            };
          }
        },
        ...l
      } = Bn(e, t), f = {
        x: r,
        y: n
      }, d = await Zu(t, l), h = gi(Fn(i)), v = Wb(h);
      let y = f[v], b = f[h];
      if (a) {
        const g = v === "y" ? "top" : "left", _ = v === "y" ? "bottom" : "right", O = y + d[g], A = y - d[_];
        y = Om(O, y, A);
      }
      if (o) {
        const g = h === "y" ? "top" : "left", _ = h === "y" ? "bottom" : "right", O = b + d[g], A = b - d[_];
        b = Om(O, b, A);
      }
      const m = s.fn({
        ...t,
        [v]: y,
        [h]: b
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n,
          enabled: {
            [v]: a,
            [h]: o
          }
        }
      };
    }
  };
}, YZ = function(e) {
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
      }, h = gi(i), v = Wb(h);
      let y = d[v], b = d[h];
      const m = Bn(s, t), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const A = v === "y" ? "height" : "width", P = a.reference[v] - a.floating[A] + g.mainAxis, x = a.reference[v] + a.reference[A] - g.mainAxis;
        y < P ? y = P : y > x && (y = x);
      }
      if (f) {
        var _, O;
        const A = v === "y" ? "width" : "height", P = ["top", "left"].includes(Fn(i)), x = a.reference[h] - a.floating[A] + (P && ((_ = o.offset) == null ? void 0 : _[h]) || 0) + (P ? 0 : g.crossAxis), S = a.reference[h] + a.reference[A] + (P ? 0 : ((O = o.offset) == null ? void 0 : O[h]) || 0) - (P ? g.crossAxis : 0);
        b < x ? b = x : b > S && (b = S);
      }
      return {
        [v]: y,
        [h]: b
      };
    }
  };
}, XZ = function(e) {
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
      } = Bn(e, t), d = await Zu(t, f), h = Fn(i), v = Ro(i), y = gi(i) === "y", {
        width: b,
        height: m
      } = a.floating;
      let g, _;
      h === "top" || h === "bottom" ? (g = h, _ = v === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = h, g = v === "end" ? "top" : "bottom");
      const O = m - d.top - d.bottom, A = b - d.left - d.right, P = yi(m - d[g], O), x = yi(b - d[_], A), S = !t.middlewareData.shift;
      let T = P, R = x;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = A), (n = t.middlewareData.shift) != null && n.enabled.y && (T = O), S && !v) {
        const q = gr(d.left, 0), $ = gr(d.right, 0), D = gr(d.top, 0), L = gr(d.bottom, 0);
        y ? R = b - 2 * (q !== 0 || $ !== 0 ? q + $ : gr(d.left, d.right)) : T = m - 2 * (D !== 0 || L !== 0 ? D + L : gr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: T
      });
      const I = await o.getDimensions(s.floating);
      return b !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vf() {
  return typeof window < "u";
}
function Io(e) {
  return rR(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gn(e) {
  var t;
  return (t = (rR(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function rR(e) {
  return vf() ? e instanceof Node || e instanceof wr(e).Node : !1;
}
function Qr(e) {
  return vf() ? e instanceof Element || e instanceof wr(e).Element : !1;
}
function pn(e) {
  return vf() ? e instanceof HTMLElement || e instanceof wr(e).HTMLElement : !1;
}
function HE(e) {
  return !vf() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wr(e).ShadowRoot;
}
function fs(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = en(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function ZZ(e) {
  return ["table", "td", "th"].includes(Io(e));
}
function yf(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Hb(e) {
  const t = Gb(), r = Qr(e) ? en(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function JZ(e) {
  let t = mi(e);
  for (; pn(t) && !vo(t); ) {
    if (Hb(t))
      return t;
    if (yf(t))
      return null;
    t = mi(t);
  }
  return null;
}
function Gb() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vo(e) {
  return ["html", "body", "#document"].includes(Io(e));
}
function en(e) {
  return wr(e).getComputedStyle(e);
}
function gf(e) {
  return Qr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mi(e) {
  if (Io(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    HE(e) && e.host || // Fallback.
    gn(e)
  );
  return HE(t) ? t.host : t;
}
function nR(e) {
  const t = mi(e);
  return vo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && fs(t) ? t : nR(t);
}
function Ju(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = nR(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = wr(i);
  if (a) {
    const s = Sm(o);
    return t.concat(o, o.visualViewport || [], fs(i) ? i : [], s && r ? Ju(s) : []);
  }
  return t.concat(i, Ju(i, [], r));
}
function Sm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iR(e) {
  const t = en(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = pn(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = Al(r) !== a || Al(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function Kb(e) {
  return Qr(e) ? e : e.contextElement;
}
function qa(e) {
  const t = Kb(e);
  if (!pn(t))
    return dn(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = iR(t);
  let o = (a ? Al(r.width) : r.width) / n, s = (a ? Al(r.height) : r.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const QZ = /* @__PURE__ */ dn(0);
function aR(e) {
  const t = wr(e);
  return !Gb() || !t.visualViewport ? QZ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function eJ(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== wr(e) ? !1 : t;
}
function ra(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = Kb(e);
  let o = dn(1);
  t && (n ? Qr(n) && (o = qa(n)) : o = qa(e));
  const s = eJ(a, r, n) ? aR(a) : dn(0);
  let l = (i.left + s.x) / o.x, f = (i.top + s.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (a) {
    const v = wr(a), y = n && Qr(n) ? wr(n) : n;
    let b = v, m = Sm(b);
    for (; m && n && y !== b; ) {
      const g = qa(m), _ = m.getBoundingClientRect(), O = en(m), A = _.left + (m.clientLeft + parseFloat(O.paddingLeft)) * g.x, P = _.top + (m.clientTop + parseFloat(O.paddingTop)) * g.y;
      l *= g.x, f *= g.y, d *= g.x, h *= g.y, l += A, f += P, b = wr(m), m = Sm(b);
    }
  }
  return Pl({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function Vb(e, t) {
  const r = gf(e).scrollLeft;
  return t ? t.left + r : ra(gn(e)).left + r;
}
function oR(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Vb(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function tJ(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = gn(n), s = t ? yf(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = dn(1);
  const d = dn(0), h = pn(n);
  if ((h || !h && !a) && ((Io(n) !== "body" || fs(o)) && (l = gf(n)), pn(n))) {
    const y = ra(n);
    f = qa(n), d.x = y.x + n.clientLeft, d.y = y.y + n.clientTop;
  }
  const v = o && !h && !a ? oR(o, l, !0) : dn(0);
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x + v.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y + v.y
  };
}
function rJ(e) {
  return Array.from(e.getClientRects());
}
function nJ(e) {
  const t = gn(e), r = gf(e), n = e.ownerDocument.body, i = gr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = gr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Vb(e);
  const s = -r.scrollTop;
  return en(n).direction === "rtl" && (o += gr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function iJ(e, t) {
  const r = wr(e), n = gn(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    const f = Gb();
    (!f || f && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function aJ(e, t) {
  const r = ra(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = pn(e) ? qa(e) : dn(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: o,
    height: s,
    x: l,
    y: f
  };
}
function GE(e, t, r) {
  let n;
  if (t === "viewport")
    n = iJ(e, r);
  else if (t === "document")
    n = nJ(gn(e));
  else if (Qr(t))
    n = aJ(t, r);
  else {
    const i = aR(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Pl(n);
}
function uR(e, t) {
  const r = mi(e);
  return r === t || !Qr(r) || vo(r) ? !1 : en(r).position === "fixed" || uR(r, t);
}
function oJ(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Ju(e, [], !1).filter((s) => Qr(s) && Io(s) !== "body"), i = null;
  const a = en(e).position === "fixed";
  let o = a ? mi(e) : e;
  for (; Qr(o) && !vo(o); ) {
    const s = en(o), l = Hb(o);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || fs(o) && !l && uR(e, o)) ? n = n.filter((d) => d !== o) : i = s, o = mi(o);
  }
  return t.set(e, n), n;
}
function uJ(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? yf(t) ? [] : oJ(t, this._c) : [].concat(r), n], s = o[0], l = o.reduce((f, d) => {
    const h = GE(t, d, i);
    return f.top = gr(h.top, f.top), f.right = yi(h.right, f.right), f.bottom = yi(h.bottom, f.bottom), f.left = gr(h.left, f.left), f;
  }, GE(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sJ(e) {
  const {
    width: t,
    height: r
  } = iR(e);
  return {
    width: t,
    height: r
  };
}
function cJ(e, t, r) {
  const n = pn(t), i = gn(t), a = r === "fixed", o = ra(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  if (n || !n && !a)
    if ((Io(t) !== "body" || fs(i)) && (s = gf(t)), n) {
      const v = ra(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else i && (l.x = Vb(i));
  const f = i && !n && !a ? oR(i, s) : dn(0), d = o.left + s.scrollLeft - l.x - f.x, h = o.top + s.scrollTop - l.y - f.y;
  return {
    x: d,
    y: h,
    width: o.width,
    height: o.height
  };
}
function Vy(e) {
  return en(e).position === "static";
}
function KE(e, t) {
  if (!pn(e) || en(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return gn(e) === r && (r = r.ownerDocument.body), r;
}
function sR(e, t) {
  const r = wr(e);
  if (yf(e))
    return r;
  if (!pn(e)) {
    let i = mi(e);
    for (; i && !vo(i); ) {
      if (Qr(i) && !Vy(i))
        return i;
      i = mi(i);
    }
    return r;
  }
  let n = KE(e, t);
  for (; n && ZZ(n) && Vy(n); )
    n = KE(n, t);
  return n && vo(n) && Vy(n) && !Hb(n) ? r : n || JZ(e) || r;
}
const lJ = async function(e) {
  const t = this.getOffsetParent || sR, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: cJ(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function fJ(e) {
  return en(e).direction === "rtl";
}
const dJ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tJ,
  getDocumentElement: gn,
  getClippingRect: uJ,
  getOffsetParent: sR,
  getElementRects: lJ,
  getClientRects: rJ,
  getDimensions: sJ,
  getScale: qa,
  isElement: Qr,
  isRTL: fJ
};
function cR(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function hJ(e, t) {
  let r = null, n;
  const i = gn(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const f = e.getBoundingClientRect(), {
      left: d,
      top: h,
      width: v,
      height: y
    } = f;
    if (s || t(), !v || !y)
      return;
    const b = mc(h), m = mc(i.clientWidth - (d + v)), g = mc(i.clientHeight - (h + y)), _ = mc(d), A = {
      rootMargin: -b + "px " + -m + "px " + -g + "px " + -_ + "px",
      threshold: gr(0, yi(1, l)) || 1
    };
    let P = !0;
    function x(S) {
      const T = S[0].intersectionRatio;
      if (T !== l) {
        if (!P)
          return o();
        T ? o(!1, T) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !cR(f, e.getBoundingClientRect()) && o(), P = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...A,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, A);
    }
    r.observe(e);
  }
  return o(!0), a;
}
function pJ(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = Kb(e), d = i || a ? [...f ? Ju(f) : [], ...Ju(t)] : [];
  d.forEach((_) => {
    i && _.addEventListener("scroll", r, {
      passive: !0
    }), a && _.addEventListener("resize", r);
  });
  const h = f && s ? hJ(f, r) : null;
  let v = -1, y = null;
  o && (y = new ResizeObserver((_) => {
    let [O] = _;
    O && O.target === f && y && (y.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var A;
      (A = y) == null || A.observe(t);
    })), r();
  }), f && !l && y.observe(f), y.observe(t));
  let b, m = l ? ra(e) : null;
  l && g();
  function g() {
    const _ = ra(e);
    m && !cR(m, _) && r(), m = _, b = requestAnimationFrame(g);
  }
  return r(), () => {
    var _;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (_ = y) == null || _.disconnect(), y = null, l && cancelAnimationFrame(b);
  };
}
const vJ = KZ, yJ = VZ, gJ = UZ, mJ = XZ, bJ = HZ, VE = zZ, xJ = YZ, wJ = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: dJ,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return WZ(e, t, {
    ...i,
    platform: a
  });
};
var _c = typeof document < "u" ? Tm : Xt;
function El(e, t) {
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
        if (!El(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !El(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lR(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function YE(e, t) {
  const r = lR(e);
  return Math.round(t * r) / r;
}
function Yy(e) {
  const t = J.useRef(e);
  return _c(() => {
    t.current = e;
  }), t;
}
function _J(e) {
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
  } = e, [d, h] = J.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, y] = J.useState(n);
  El(v, n) || y(n);
  const [b, m] = J.useState(null), [g, _] = J.useState(null), O = J.useCallback((Z) => {
    Z !== S.current && (S.current = Z, m(Z));
  }, []), A = J.useCallback((Z) => {
    Z !== T.current && (T.current = Z, _(Z));
  }, []), P = a || b, x = o || g, S = J.useRef(null), T = J.useRef(null), R = J.useRef(d), I = l != null, q = Yy(l), $ = Yy(i), D = Yy(f), L = J.useCallback(() => {
    if (!S.current || !T.current)
      return;
    const Z = {
      placement: t,
      strategy: r,
      middleware: v
    };
    $.current && (Z.platform = $.current), wJ(S.current, T.current, Z).then((ie) => {
      const H = {
        ...ie,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      F.current && !El(R.current, H) && (R.current = H, uT.flushSync(() => {
        h(H);
      }));
    });
  }, [v, t, r, $, D]);
  _c(() => {
    f === !1 && R.current.isPositioned && (R.current.isPositioned = !1, h((Z) => ({
      ...Z,
      isPositioned: !1
    })));
  }, [f]);
  const F = J.useRef(!1);
  _c(() => (F.current = !0, () => {
    F.current = !1;
  }), []), _c(() => {
    if (P && (S.current = P), x && (T.current = x), P && x) {
      if (q.current)
        return q.current(P, x, L);
      L();
    }
  }, [P, x, L, q, I]);
  const G = J.useMemo(() => ({
    reference: S,
    floating: T,
    setReference: O,
    setFloating: A
  }), [O, A]), U = J.useMemo(() => ({
    reference: P,
    floating: x
  }), [P, x]), X = J.useMemo(() => {
    const Z = {
      position: r,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return Z;
    const ie = YE(U.floating, d.x), H = YE(U.floating, d.y);
    return s ? {
      ...Z,
      transform: "translate(" + ie + "px, " + H + "px)",
      ...lR(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ie,
      top: H
    };
  }, [r, s, U.floating, d.x, d.y]);
  return J.useMemo(() => ({
    ...d,
    update: L,
    refs: G,
    elements: U,
    floatingStyles: X
  }), [d, L, G, U, X]);
}
const OJ = (e) => {
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
      return n && t(n) ? n.current != null ? VE({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? VE({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, AJ = (e, t) => ({
  ...vJ(e),
  options: [e, t]
}), SJ = (e, t) => ({
  ...yJ(e),
  options: [e, t]
}), PJ = (e, t) => ({
  ...xJ(e),
  options: [e, t]
}), EJ = (e, t) => ({
  ...gJ(e),
  options: [e, t]
}), TJ = (e, t) => ({
  ...mJ(e),
  options: [e, t]
}), CJ = (e, t) => ({
  ...bJ(e),
  options: [e, t]
}), MJ = (e, t) => ({
  ...OJ(e),
  options: [e, t]
});
var RJ = "Arrow", fR = J.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ Y(
    ca.svg,
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
fR.displayName = RJ;
var IJ = fR;
function $J(e) {
  const [t, r] = J.useState(void 0);
  return po(() => {
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
var Yb = "Popper", [dR, hR] = ZM(Yb), [jJ, pR] = dR(Yb), vR = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = J.useState(null);
  return /* @__PURE__ */ Y(jJ, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
vR.displayName = Yb;
var yR = "PopperAnchor", gR = J.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = pR(yR, r), o = J.useRef(null), s = na(t, o);
    return J.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || o.current);
    }), n ? null : /* @__PURE__ */ Y(ca.div, { ...i, ref: s });
  }
);
gR.displayName = yR;
var Xb = "PopperContent", [kJ, DJ] = dR(Xb), mR = J.forwardRef(
  (e, t) => {
    var he, pe, te, le, be, z;
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
      updatePositionStrategy: y = "optimized",
      onPlaced: b,
      ...m
    } = e, g = pR(Xb, r), [_, O] = J.useState(null), A = na(t, (Te) => O(Te)), [P, x] = J.useState(null), S = $J(P), T = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, I = n + (a !== "center" ? "-" + a : ""), q = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, $ = Array.isArray(f) ? f : [f], D = $.length > 0, L = {
      padding: q,
      boundary: $.filter(LJ),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: F, floatingStyles: G, placement: U, isPositioned: X, middlewareData: Z } = _J({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...Te) => pJ(...Te, {
        animationFrame: y === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        AJ({ mainAxis: i + R, alignmentAxis: o }),
        l && SJ({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? PJ() : void 0,
          ...L
        }),
        l && EJ({ ...L }),
        TJ({
          ...L,
          apply: ({ elements: Te, rects: oe, availableWidth: Be, availableHeight: Qe }) => {
            const { width: Xe, height: or } = oe.reference, ur = Te.floating.style;
            ur.setProperty("--radix-popper-available-width", `${Be}px`), ur.setProperty("--radix-popper-available-height", `${Qe}px`), ur.setProperty("--radix-popper-anchor-width", `${Xe}px`), ur.setProperty("--radix-popper-anchor-height", `${or}px`);
          }
        }),
        P && MJ({ element: P, padding: s }),
        qJ({ arrowWidth: T, arrowHeight: R }),
        v && CJ({ strategy: "referenceHidden", ...L })
      ]
    }), [ie, H] = wR(U), K = Mo(b);
    po(() => {
      X && (K == null || K());
    }, [X, K]);
    const re = (he = Z.arrow) == null ? void 0 : he.x, se = (pe = Z.arrow) == null ? void 0 : pe.y, de = ((te = Z.arrow) == null ? void 0 : te.centerOffset) !== 0, [ye, me] = J.useState();
    return po(() => {
      _ && me(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ Y(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: X ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (le = Z.transformOrigin) == null ? void 0 : le.x,
            (be = Z.transformOrigin) == null ? void 0 : be.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = Z.hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ Y(
          kJ,
          {
            scope: r,
            placedSide: ie,
            onArrowChange: x,
            arrowX: re,
            arrowY: se,
            shouldHideArrow: de,
            children: /* @__PURE__ */ Y(
              ca.div,
              {
                "data-side": ie,
                "data-align": H,
                ...m,
                ref: A,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
mR.displayName = Xb;
var bR = "PopperArrow", NJ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, xR = J.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = DJ(bR, n), o = NJ[a.placedSide];
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
        children: /* @__PURE__ */ Y(
          IJ,
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
xR.displayName = bR;
function LJ(e) {
  return e !== null;
}
var qJ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, _, O;
    const { placement: r, rects: n, middlewareData: i } = t, o = ((g = i.arrow) == null ? void 0 : g.centerOffset) !== 0, s = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [f, d] = wR(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((_ = i.arrow) == null ? void 0 : _.x) ?? 0) + s / 2, y = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let b = "", m = "";
    return f === "bottom" ? (b = o ? h : `${v}px`, m = `${-l}px`) : f === "top" ? (b = o ? h : `${v}px`, m = `${n.floating.height + l}px`) : f === "right" ? (b = `${-l}px`, m = o ? h : `${y}px`) : f === "left" && (b = `${n.floating.width + l}px`, m = o ? h : `${y}px`), { data: { x: b, y: m } };
  }
});
function wR(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var BJ = vR, FJ = gR, WJ = mR, zJ = xR;
function UJ(e, t) {
  return J.useReducer((r, n) => t[r][n] ?? r, e);
}
var _R = (e) => {
  const { present: t, children: r } = e, n = HJ(t), i = typeof r == "function" ? r({ present: n.isPresent }) : J.Children.only(r), a = na(n.ref, GJ(i));
  return typeof r == "function" || n.isPresent ? J.cloneElement(i, { ref: a }) : null;
};
_R.displayName = "Presence";
function HJ(e) {
  const [t, r] = J.useState(), n = J.useRef({}), i = J.useRef(e), a = J.useRef("none"), o = e ? "mounted" : "unmounted", [s, l] = UJ(o, {
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
  return J.useEffect(() => {
    const f = bc(n.current);
    a.current = s === "mounted" ? f : "none";
  }, [s]), po(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, y = bc(f);
      e ? l("MOUNT") : y === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== y ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), po(() => {
    if (t) {
      let f;
      const d = t.ownerDocument.defaultView ?? window, h = (y) => {
        const m = bc(n.current).includes(y.animationName);
        if (y.target === t && m && (l("ANIMATION_END"), !i.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, v = (y) => {
        y.target === t && (a.current = bc(n.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        d.clearTimeout(f), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: J.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function bc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function GJ(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function KJ({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = VJ({ defaultProp: t, onChange: r }), a = e !== void 0, o = a ? e : n, s = Mo(r), l = J.useCallback(
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
function VJ({
  defaultProp: e,
  onChange: t
}) {
  const r = J.useState(e), [n] = r, i = J.useRef(n), a = Mo(t);
  return J.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var YJ = "VisuallyHidden", OR = J.forwardRef(
  (e, t) => /* @__PURE__ */ Y(
    ca.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
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
OR.displayName = YJ;
var XJ = OR, [mf, ree] = ZM("Tooltip", [
  hR
]), bf = hR(), AR = "TooltipProvider", ZJ = 700, Pm = "tooltip.open", [JJ, Zb] = mf(AR), SR = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = ZJ,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [o, s] = J.useState(!0), l = J.useRef(!1), f = J.useRef(0);
  return J.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ Y(
    JJ,
    {
      scope: t,
      isOpenDelayed: o,
      delayDuration: r,
      onOpen: J.useCallback(() => {
        window.clearTimeout(f.current), s(!1);
      }, []),
      onClose: J.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: J.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
SR.displayName = AR;
var xf = "Tooltip", [QJ, wf] = mf(xf), PR = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: o,
    delayDuration: s
  } = e, l = Zb(xf, e.__scopeTooltip), f = bf(t), [d, h] = J.useState(null), v = $Z(), y = J.useRef(0), b = o ?? l.disableHoverableContent, m = s ?? l.delayDuration, g = J.useRef(!1), [_ = !1, O] = KJ({
    prop: n,
    defaultProp: i,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Pm))) : l.onClose(), a == null || a(T);
    }
  }), A = J.useMemo(() => _ ? g.current ? "delayed-open" : "instant-open" : "closed", [_]), P = J.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, g.current = !1, O(!0);
  }, [O]), x = J.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, O(!1);
  }, [O]), S = J.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => {
      g.current = !0, O(!0), y.current = 0;
    }, m);
  }, [m, O]);
  return J.useEffect(() => () => {
    y.current && (window.clearTimeout(y.current), y.current = 0);
  }, []), /* @__PURE__ */ Y(BJ, { ...f, children: /* @__PURE__ */ Y(
    QJ,
    {
      scope: t,
      contentId: v,
      open: _,
      stateAttribute: A,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: J.useCallback(() => {
        l.isOpenDelayed ? S() : P();
      }, [l.isOpenDelayed, S, P]),
      onTriggerLeave: J.useCallback(() => {
        b ? x() : (window.clearTimeout(y.current), y.current = 0);
      }, [x, b]),
      onOpen: P,
      onClose: x,
      disableHoverableContent: b,
      children: r
    }
  ) });
};
PR.displayName = xf;
var Em = "TooltipTrigger", ER = J.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = wf(Em, r), a = Zb(Em, r), o = bf(r), s = J.useRef(null), l = na(t, s, i.onTriggerChange), f = J.useRef(!1), d = J.useRef(!1), h = J.useCallback(() => f.current = !1, []);
    return J.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ Y(FJ, { asChild: !0, ...o, children: /* @__PURE__ */ Y(
      ca.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: Rn(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: Rn(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: Rn(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: Rn(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: Rn(e.onBlur, i.onClose),
        onClick: Rn(e.onClick, i.onClose)
      }
    ) });
  }
);
ER.displayName = Em;
var eQ = "TooltipPortal", [nee, tQ] = mf(eQ, {
  forceMount: void 0
}), yo = "TooltipContent", TR = J.forwardRef(
  (e, t) => {
    const r = tQ(yo, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, o = wf(yo, e.__scopeTooltip);
    return /* @__PURE__ */ Y(_R, { present: n || o.open, children: o.disableHoverableContent ? /* @__PURE__ */ Y(CR, { side: i, ...a, ref: t }) : /* @__PURE__ */ Y(rQ, { side: i, ...a, ref: t }) });
  }
), rQ = J.forwardRef((e, t) => {
  const r = wf(yo, e.__scopeTooltip), n = Zb(yo, e.__scopeTooltip), i = J.useRef(null), a = na(t, i), [o, s] = J.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = J.useCallback(() => {
    s(null), h(!1);
  }, [h]), y = J.useCallback(
    (b, m) => {
      const g = b.currentTarget, _ = { x: b.clientX, y: b.clientY }, O = oQ(_, g.getBoundingClientRect()), A = uQ(_, O), P = sQ(m.getBoundingClientRect()), x = lQ([...A, ...P]);
      s(x), h(!0);
    },
    [h]
  );
  return J.useEffect(() => () => v(), [v]), J.useEffect(() => {
    if (l && d) {
      const b = (g) => y(g, d), m = (g) => y(g, l);
      return l.addEventListener("pointerleave", b), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, y, v]), J.useEffect(() => {
    if (o) {
      const b = (m) => {
        const g = m.target, _ = { x: m.clientX, y: m.clientY }, O = (l == null ? void 0 : l.contains(g)) || (d == null ? void 0 : d.contains(g)), A = !cQ(_, o);
        O ? v() : A && (v(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, d, o, f, v]), /* @__PURE__ */ Y(CR, { ...e, ref: a });
}), [nQ, iQ] = mf(xf, { isInside: !1 }), CR = J.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: o,
      ...s
    } = e, l = wf(yo, r), f = bf(r), { onClose: d } = l;
    return J.useEffect(() => (document.addEventListener(Pm, d), () => document.removeEventListener(Pm, d)), [d]), J.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const y = v.target;
          y != null && y.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ Y(
      QM,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ Fe(
          WJ,
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
              /* @__PURE__ */ Y(mT, { children: n }),
              /* @__PURE__ */ Y(nQ, { scope: r, isInside: !0, children: /* @__PURE__ */ Y(XJ, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
TR.displayName = yo;
var MR = "TooltipArrow", aQ = J.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = bf(r);
    return iQ(
      MR,
      r
    ).isInside ? null : /* @__PURE__ */ Y(zJ, { ...i, ...n, ref: t });
  }
);
aQ.displayName = MR;
function oQ(e, t) {
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
function uQ(e, t, r = 5) {
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
function sQ(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function cQ(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, o = t.length - 1; a < t.length; o = a++) {
    const s = t[a].x, l = t[a].y, f = t[o].x, d = t[o].y;
    l > n != d > n && r < (f - s) * (n - l) / (d - l) + s && (i = !i);
  }
  return i;
}
function lQ(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), fQ(t);
}
function fQ(e) {
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
var dQ = SR, hQ = PR, pQ = ER, RR = TR;
const vQ = dQ, yQ = hQ, gQ = pQ, IR = J.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ Y(
  RR,
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
IR.displayName = RR.displayName;
const mQ = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const i = e.reduce((a, o) => a + o.value, 0);
  return /* @__PURE__ */ Fe(vQ, { children: [
    /* @__PURE__ */ Y("div", { className: "w-full", ref: n, children: /* @__PURE__ */ Y("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((a, o) => {
      const s = a.value / i * 100, l = a.color || Xr(o), f = (d) => {
        const h = d / i * 100;
        return h % 1 === 0 ? h.toFixed(0) : h.toFixed(1);
      };
      return s === 0 ? null : /* @__PURE__ */ Fe(yQ, { children: [
        /* @__PURE__ */ Y(
          gQ,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${s}%` },
            title: a.name,
            asChild: !0,
            children: /* @__PURE__ */ Y(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: l },
                role: "img",
                title: a.name,
                tabIndex: 0
              }
            )
          }
        ),
        !r && /* @__PURE__ */ Fe(IR, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ Y(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: l }
            }
          ),
          /* @__PURE__ */ Y("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: a.name }),
          /* @__PURE__ */ Fe("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            a.value,
            " (",
            f(a.value),
            "%)"
          ] })
        ] })
      ] }, a.name);
    }) }) }),
    t && /* @__PURE__ */ Y(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((a, o) => {
          const s = a.color || Xr(o);
          return /* @__PURE__ */ Fe(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ Y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: s }
                  }
                ),
                /* @__PURE__ */ Y("span", { className: "text-f1-foreground", children: a.name })
              ]
            },
            a.name
          );
        })
      }
    )
  ] });
}, iee = Co(mQ), bQ = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, o) => {
  const s = Object.keys(t), l = Fb(e), f = Math.max(
    ...l.flatMap(
      (d) => s.map(
        (h) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(Eo, { config: t, ref: o, aspect: a, children: /* @__PURE__ */ Fe(
    uZ,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ Y(ss, { ...pf() }),
        !(r != null && r.hide) && /* @__PURE__ */ Y(Kn, { ...qb(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ Y(
          Vn,
          {
            ...Bb(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ Y(
          ls,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(To, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        s.map((d, h) => /* @__PURE__ */ Y(
          cs,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color || Xr(h),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, aee = Co(bQ), xQ = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const o = e.map((f, d) => {
    var h;
    return {
      ...f,
      fill: ((h = t[f.label]) == null ? void 0 : h.color) || Xr(d)
    };
  }), l = e.map((f) => f.value).reduce((f, d) => f + d);
  return l === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ Y(
    Eo,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Fe(sZ, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        l !== 0 && /* @__PURE__ */ Y(
          ls,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(To, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ Fe(
          Gn,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: o,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: [
              o.map((f, d) => {
                const h = i ? i(String(f.value)) : f.value;
                return /* @__PURE__ */ Y(
                  Fl,
                  {
                    fill: f.fill,
                    "aria-label": `${f.label}: ${h} (${(f.value / l * 100).toFixed(0)}%)`
                  },
                  `cell-${d}`
                );
              }),
              /* @__PURE__ */ Y(
                Pt,
                {
                  content: ({ viewBox: f }) => {
                    if (f && "cx" in f && "cy" in f)
                      return /* @__PURE__ */ Fe(
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
            ]
          }
        ),
        /* @__PURE__ */ Y(
          Lb,
          {
            content: /* @__PURE__ */ Y(df, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, oee = Co(xQ);
var cu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var wQ = cu.exports, XE;
function _Q() {
  return XE || (XE = 1, function(e, t) {
    (function() {
      var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, y = 4, b = 1, m = 2, g = 1, _ = 2, O = 4, A = 8, P = 16, x = 32, S = 64, T = 128, R = 256, I = 512, q = 30, $ = "...", D = 800, L = 16, F = 1, G = 2, U = 3, X = 1 / 0, Z = 9007199254740991, ie = 17976931348623157e292, H = NaN, K = 4294967295, re = K - 1, se = K >>> 1, de = [
        ["ary", T],
        ["bind", g],
        ["bindKey", _],
        ["curry", A],
        ["curryRight", P],
        ["flip", I],
        ["partial", x],
        ["partialRight", S],
        ["rearg", R]
      ], ye = "[object Arguments]", me = "[object Array]", he = "[object AsyncFunction]", pe = "[object Boolean]", te = "[object Date]", le = "[object DOMException]", be = "[object Error]", z = "[object Function]", Te = "[object GeneratorFunction]", oe = "[object Map]", Be = "[object Number]", Qe = "[object Null]", Xe = "[object Object]", or = "[object Promise]", ur = "[object Proxy]", rn = "[object RegExp]", xt = "[object Set]", Ft = "[object String]", Yn = "[object Symbol]", $o = "[object Undefined]", mn = "[object WeakMap]", ds = "[object WeakSet]", Xn = "[object ArrayBuffer]", la = "[object DataView]", _f = "[object Float32Array]", Of = "[object Float64Array]", Af = "[object Int8Array]", Sf = "[object Int16Array]", Pf = "[object Int32Array]", Ef = "[object Uint8Array]", Tf = "[object Uint8ClampedArray]", Cf = "[object Uint16Array]", Mf = "[object Uint32Array]", qR = /\b__p \+= '';/g, BR = /\b(__p \+=) '' \+/g, FR = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Qb = /&(?:amp|lt|gt|quot|#39);/g, e0 = /[&<>"']/g, WR = RegExp(Qb.source), zR = RegExp(e0.source), UR = /<%-([\s\S]+?)%>/g, HR = /<%([\s\S]+?)%>/g, t0 = /<%=([\s\S]+?)%>/g, GR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KR = /^\w*$/, VR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rf = /[\\^$.*+?()[\]{}|]/g, YR = RegExp(Rf.source), If = /^\s+/, XR = /\s/, ZR = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, JR = /\{\n\/\* \[wrapped with (.+)\] \*/, QR = /,? & /, eI = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, tI = /[()=,{}\[\]\/\s]/, rI = /\\(\\)?/g, nI = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, r0 = /\w*$/, iI = /^[-+]0x[0-9a-f]+$/i, aI = /^0b[01]+$/i, oI = /^\[object .+?Constructor\]$/, uI = /^0o[0-7]+$/i, sI = /^(?:0|[1-9]\d*)$/, cI = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, hs = /($^)/, lI = /['\n\r\u2028\u2029\\]/g, ps = "\\ud800-\\udfff", fI = "\\u0300-\\u036f", dI = "\\ufe20-\\ufe2f", hI = "\\u20d0-\\u20ff", n0 = fI + dI + hI, i0 = "\\u2700-\\u27bf", a0 = "a-z\\xdf-\\xf6\\xf8-\\xff", pI = "\\xac\\xb1\\xd7\\xf7", vI = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yI = "\\u2000-\\u206f", gI = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", o0 = "A-Z\\xc0-\\xd6\\xd8-\\xde", u0 = "\\ufe0e\\ufe0f", s0 = pI + vI + yI + gI, $f = "['’]", mI = "[" + ps + "]", c0 = "[" + s0 + "]", vs = "[" + n0 + "]", l0 = "\\d+", bI = "[" + i0 + "]", f0 = "[" + a0 + "]", d0 = "[^" + ps + s0 + l0 + i0 + a0 + o0 + "]", jf = "\\ud83c[\\udffb-\\udfff]", xI = "(?:" + vs + "|" + jf + ")", h0 = "[^" + ps + "]", kf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Df = "[\\ud800-\\udbff][\\udc00-\\udfff]", fa = "[" + o0 + "]", p0 = "\\u200d", v0 = "(?:" + f0 + "|" + d0 + ")", wI = "(?:" + fa + "|" + d0 + ")", y0 = "(?:" + $f + "(?:d|ll|m|re|s|t|ve))?", g0 = "(?:" + $f + "(?:D|LL|M|RE|S|T|VE))?", m0 = xI + "?", b0 = "[" + u0 + "]?", _I = "(?:" + p0 + "(?:" + [h0, kf, Df].join("|") + ")" + b0 + m0 + ")*", OI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", AI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", x0 = b0 + m0 + _I, SI = "(?:" + [bI, kf, Df].join("|") + ")" + x0, PI = "(?:" + [h0 + vs + "?", vs, kf, Df, mI].join("|") + ")", EI = RegExp($f, "g"), TI = RegExp(vs, "g"), Nf = RegExp(jf + "(?=" + jf + ")|" + PI + x0, "g"), CI = RegExp([
        fa + "?" + f0 + "+" + y0 + "(?=" + [c0, fa, "$"].join("|") + ")",
        wI + "+" + g0 + "(?=" + [c0, fa + v0, "$"].join("|") + ")",
        fa + "?" + v0 + "+" + y0,
        fa + "+" + g0,
        AI,
        OI,
        l0,
        SI
      ].join("|"), "g"), MI = RegExp("[" + p0 + ps + n0 + u0 + "]"), RI = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, II = [
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
      ], $I = -1, ut = {};
      ut[_f] = ut[Of] = ut[Af] = ut[Sf] = ut[Pf] = ut[Ef] = ut[Tf] = ut[Cf] = ut[Mf] = !0, ut[ye] = ut[me] = ut[Xn] = ut[pe] = ut[la] = ut[te] = ut[be] = ut[z] = ut[oe] = ut[Be] = ut[Xe] = ut[rn] = ut[xt] = ut[Ft] = ut[mn] = !1;
      var nt = {};
      nt[ye] = nt[me] = nt[Xn] = nt[la] = nt[pe] = nt[te] = nt[_f] = nt[Of] = nt[Af] = nt[Sf] = nt[Pf] = nt[oe] = nt[Be] = nt[Xe] = nt[rn] = nt[xt] = nt[Ft] = nt[Yn] = nt[Ef] = nt[Tf] = nt[Cf] = nt[Mf] = !0, nt[be] = nt[z] = nt[mn] = !1;
      var jI = {
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
      }, kI = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, DI = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, NI = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, LI = parseFloat, qI = parseInt, w0 = typeof $r == "object" && $r && $r.Object === Object && $r, BI = typeof self == "object" && self && self.Object === Object && self, It = w0 || BI || Function("return this")(), Lf = t && !t.nodeType && t, Pi = Lf && !0 && e && !e.nodeType && e, _0 = Pi && Pi.exports === Lf, qf = _0 && w0.process, _r = function() {
        try {
          var B = Pi && Pi.require && Pi.require("util").types;
          return B || qf && qf.binding && qf.binding("util");
        } catch {
        }
      }(), O0 = _r && _r.isArrayBuffer, A0 = _r && _r.isDate, S0 = _r && _r.isMap, P0 = _r && _r.isRegExp, E0 = _r && _r.isSet, T0 = _r && _r.isTypedArray;
      function sr(B, ee, V) {
        switch (V.length) {
          case 0:
            return B.call(ee);
          case 1:
            return B.call(ee, V[0]);
          case 2:
            return B.call(ee, V[0], V[1]);
          case 3:
            return B.call(ee, V[0], V[1], V[2]);
        }
        return B.apply(ee, V);
      }
      function FI(B, ee, V, ve) {
        for (var Ce = -1, ze = B == null ? 0 : B.length; ++Ce < ze; ) {
          var wt = B[Ce];
          ee(ve, wt, V(wt), B);
        }
        return ve;
      }
      function Or(B, ee) {
        for (var V = -1, ve = B == null ? 0 : B.length; ++V < ve && ee(B[V], V, B) !== !1; )
          ;
        return B;
      }
      function WI(B, ee) {
        for (var V = B == null ? 0 : B.length; V-- && ee(B[V], V, B) !== !1; )
          ;
        return B;
      }
      function C0(B, ee) {
        for (var V = -1, ve = B == null ? 0 : B.length; ++V < ve; )
          if (!ee(B[V], V, B))
            return !1;
        return !0;
      }
      function Zn(B, ee) {
        for (var V = -1, ve = B == null ? 0 : B.length, Ce = 0, ze = []; ++V < ve; ) {
          var wt = B[V];
          ee(wt, V, B) && (ze[Ce++] = wt);
        }
        return ze;
      }
      function ys(B, ee) {
        var V = B == null ? 0 : B.length;
        return !!V && da(B, ee, 0) > -1;
      }
      function Bf(B, ee, V) {
        for (var ve = -1, Ce = B == null ? 0 : B.length; ++ve < Ce; )
          if (V(ee, B[ve]))
            return !0;
        return !1;
      }
      function lt(B, ee) {
        for (var V = -1, ve = B == null ? 0 : B.length, Ce = Array(ve); ++V < ve; )
          Ce[V] = ee(B[V], V, B);
        return Ce;
      }
      function Jn(B, ee) {
        for (var V = -1, ve = ee.length, Ce = B.length; ++V < ve; )
          B[Ce + V] = ee[V];
        return B;
      }
      function Ff(B, ee, V, ve) {
        var Ce = -1, ze = B == null ? 0 : B.length;
        for (ve && ze && (V = B[++Ce]); ++Ce < ze; )
          V = ee(V, B[Ce], Ce, B);
        return V;
      }
      function zI(B, ee, V, ve) {
        var Ce = B == null ? 0 : B.length;
        for (ve && Ce && (V = B[--Ce]); Ce--; )
          V = ee(V, B[Ce], Ce, B);
        return V;
      }
      function Wf(B, ee) {
        for (var V = -1, ve = B == null ? 0 : B.length; ++V < ve; )
          if (ee(B[V], V, B))
            return !0;
        return !1;
      }
      var UI = zf("length");
      function HI(B) {
        return B.split("");
      }
      function GI(B) {
        return B.match(eI) || [];
      }
      function M0(B, ee, V) {
        var ve;
        return V(B, function(Ce, ze, wt) {
          if (ee(Ce, ze, wt))
            return ve = ze, !1;
        }), ve;
      }
      function gs(B, ee, V, ve) {
        for (var Ce = B.length, ze = V + (ve ? 1 : -1); ve ? ze-- : ++ze < Ce; )
          if (ee(B[ze], ze, B))
            return ze;
        return -1;
      }
      function da(B, ee, V) {
        return ee === ee ? i$(B, ee, V) : gs(B, R0, V);
      }
      function KI(B, ee, V, ve) {
        for (var Ce = V - 1, ze = B.length; ++Ce < ze; )
          if (ve(B[Ce], ee))
            return Ce;
        return -1;
      }
      function R0(B) {
        return B !== B;
      }
      function I0(B, ee) {
        var V = B == null ? 0 : B.length;
        return V ? Hf(B, ee) / V : H;
      }
      function zf(B) {
        return function(ee) {
          return ee == null ? r : ee[B];
        };
      }
      function Uf(B) {
        return function(ee) {
          return B == null ? r : B[ee];
        };
      }
      function $0(B, ee, V, ve, Ce) {
        return Ce(B, function(ze, wt, tt) {
          V = ve ? (ve = !1, ze) : ee(V, ze, wt, tt);
        }), V;
      }
      function VI(B, ee) {
        var V = B.length;
        for (B.sort(ee); V--; )
          B[V] = B[V].value;
        return B;
      }
      function Hf(B, ee) {
        for (var V, ve = -1, Ce = B.length; ++ve < Ce; ) {
          var ze = ee(B[ve]);
          ze !== r && (V = V === r ? ze : V + ze);
        }
        return V;
      }
      function Gf(B, ee) {
        for (var V = -1, ve = Array(B); ++V < B; )
          ve[V] = ee(V);
        return ve;
      }
      function YI(B, ee) {
        return lt(ee, function(V) {
          return [V, B[V]];
        });
      }
      function j0(B) {
        return B && B.slice(0, L0(B) + 1).replace(If, "");
      }
      function cr(B) {
        return function(ee) {
          return B(ee);
        };
      }
      function Kf(B, ee) {
        return lt(ee, function(V) {
          return B[V];
        });
      }
      function jo(B, ee) {
        return B.has(ee);
      }
      function k0(B, ee) {
        for (var V = -1, ve = B.length; ++V < ve && da(ee, B[V], 0) > -1; )
          ;
        return V;
      }
      function D0(B, ee) {
        for (var V = B.length; V-- && da(ee, B[V], 0) > -1; )
          ;
        return V;
      }
      function XI(B, ee) {
        for (var V = B.length, ve = 0; V--; )
          B[V] === ee && ++ve;
        return ve;
      }
      var ZI = Uf(jI), JI = Uf(kI);
      function QI(B) {
        return "\\" + NI[B];
      }
      function e$(B, ee) {
        return B == null ? r : B[ee];
      }
      function ha(B) {
        return MI.test(B);
      }
      function t$(B) {
        return RI.test(B);
      }
      function r$(B) {
        for (var ee, V = []; !(ee = B.next()).done; )
          V.push(ee.value);
        return V;
      }
      function Vf(B) {
        var ee = -1, V = Array(B.size);
        return B.forEach(function(ve, Ce) {
          V[++ee] = [Ce, ve];
        }), V;
      }
      function N0(B, ee) {
        return function(V) {
          return B(ee(V));
        };
      }
      function Qn(B, ee) {
        for (var V = -1, ve = B.length, Ce = 0, ze = []; ++V < ve; ) {
          var wt = B[V];
          (wt === ee || wt === d) && (B[V] = d, ze[Ce++] = V);
        }
        return ze;
      }
      function ms(B) {
        var ee = -1, V = Array(B.size);
        return B.forEach(function(ve) {
          V[++ee] = ve;
        }), V;
      }
      function n$(B) {
        var ee = -1, V = Array(B.size);
        return B.forEach(function(ve) {
          V[++ee] = [ve, ve];
        }), V;
      }
      function i$(B, ee, V) {
        for (var ve = V - 1, Ce = B.length; ++ve < Ce; )
          if (B[ve] === ee)
            return ve;
        return -1;
      }
      function a$(B, ee, V) {
        for (var ve = V + 1; ve--; )
          if (B[ve] === ee)
            return ve;
        return ve;
      }
      function pa(B) {
        return ha(B) ? u$(B) : UI(B);
      }
      function qr(B) {
        return ha(B) ? s$(B) : HI(B);
      }
      function L0(B) {
        for (var ee = B.length; ee-- && XR.test(B.charAt(ee)); )
          ;
        return ee;
      }
      var o$ = Uf(DI);
      function u$(B) {
        for (var ee = Nf.lastIndex = 0; Nf.test(B); )
          ++ee;
        return ee;
      }
      function s$(B) {
        return B.match(Nf) || [];
      }
      function c$(B) {
        return B.match(CI) || [];
      }
      var l$ = function B(ee) {
        ee = ee == null ? It : va.defaults(It.Object(), ee, va.pick(It, II));
        var V = ee.Array, ve = ee.Date, Ce = ee.Error, ze = ee.Function, wt = ee.Math, tt = ee.Object, Yf = ee.RegExp, f$ = ee.String, Ar = ee.TypeError, bs = V.prototype, d$ = ze.prototype, ya = tt.prototype, xs = ee["__core-js_shared__"], ws = d$.toString, Ze = ya.hasOwnProperty, h$ = 0, q0 = function() {
          var u = /[^.]+$/.exec(xs && xs.keys && xs.keys.IE_PROTO || "");
          return u ? "Symbol(src)_1." + u : "";
        }(), _s = ya.toString, p$ = ws.call(tt), v$ = It._, y$ = Yf(
          "^" + ws.call(Ze).replace(Rf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Os = _0 ? ee.Buffer : r, ei = ee.Symbol, As = ee.Uint8Array, B0 = Os ? Os.allocUnsafe : r, Ss = N0(tt.getPrototypeOf, tt), F0 = tt.create, W0 = ya.propertyIsEnumerable, Ps = bs.splice, z0 = ei ? ei.isConcatSpreadable : r, ko = ei ? ei.iterator : r, Ei = ei ? ei.toStringTag : r, Es = function() {
          try {
            var u = Ii(tt, "defineProperty");
            return u({}, "", {}), u;
          } catch {
          }
        }(), g$ = ee.clearTimeout !== It.clearTimeout && ee.clearTimeout, m$ = ve && ve.now !== It.Date.now && ve.now, b$ = ee.setTimeout !== It.setTimeout && ee.setTimeout, Ts = wt.ceil, Cs = wt.floor, Xf = tt.getOwnPropertySymbols, x$ = Os ? Os.isBuffer : r, U0 = ee.isFinite, w$ = bs.join, _$ = N0(tt.keys, tt), _t = wt.max, kt = wt.min, O$ = ve.now, A$ = ee.parseInt, H0 = wt.random, S$ = bs.reverse, Zf = Ii(ee, "DataView"), Do = Ii(ee, "Map"), Jf = Ii(ee, "Promise"), ga = Ii(ee, "Set"), No = Ii(ee, "WeakMap"), Lo = Ii(tt, "create"), Ms = No && new No(), ma = {}, P$ = $i(Zf), E$ = $i(Do), T$ = $i(Jf), C$ = $i(ga), M$ = $i(No), Rs = ei ? ei.prototype : r, qo = Rs ? Rs.valueOf : r, G0 = Rs ? Rs.toString : r;
        function C(u) {
          if (ht(u) && !Re(u) && !(u instanceof Le)) {
            if (u instanceof Sr)
              return u;
            if (Ze.call(u, "__wrapped__"))
              return Kx(u);
          }
          return new Sr(u);
        }
        var ba = /* @__PURE__ */ function() {
          function u() {
          }
          return function(c) {
            if (!dt(c))
              return {};
            if (F0)
              return F0(c);
            u.prototype = c;
            var p = new u();
            return u.prototype = r, p;
          };
        }();
        function Is() {
        }
        function Sr(u, c) {
          this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = r;
        }
        C.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: UR,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: HR,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: t0,
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
        }, C.prototype = Is.prototype, C.prototype.constructor = C, Sr.prototype = ba(Is.prototype), Sr.prototype.constructor = Sr;
        function Le(u) {
          this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = K, this.__views__ = [];
        }
        function R$() {
          var u = new Le(this.__wrapped__);
          return u.__actions__ = Jt(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Jt(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Jt(this.__views__), u;
        }
        function I$() {
          if (this.__filtered__) {
            var u = new Le(this);
            u.__dir__ = -1, u.__filtered__ = !0;
          } else
            u = this.clone(), u.__dir__ *= -1;
          return u;
        }
        function $$() {
          var u = this.__wrapped__.value(), c = this.__dir__, p = Re(u), w = c < 0, E = p ? u.length : 0, M = Hj(0, E, this.__views__), k = M.start, N = M.end, W = N - k, ne = w ? N : k - 1, ae = this.__iteratees__, ue = ae.length, fe = 0, xe = kt(W, this.__takeCount__);
          if (!p || !w && E == W && xe == W)
            return yx(u, this.__actions__);
          var Oe = [];
          e:
            for (; W-- && fe < xe; ) {
              ne += c;
              for (var je = -1, Ae = u[ne]; ++je < ue; ) {
                var De = ae[je], qe = De.iteratee, dr = De.type, Ut = qe(Ae);
                if (dr == G)
                  Ae = Ut;
                else if (!Ut) {
                  if (dr == F)
                    continue e;
                  break e;
                }
              }
              Oe[fe++] = Ae;
            }
          return Oe;
        }
        Le.prototype = ba(Is.prototype), Le.prototype.constructor = Le;
        function Ti(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function j$() {
          this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
        }
        function k$(u) {
          var c = this.has(u) && delete this.__data__[u];
          return this.size -= c ? 1 : 0, c;
        }
        function D$(u) {
          var c = this.__data__;
          if (Lo) {
            var p = c[u];
            return p === l ? r : p;
          }
          return Ze.call(c, u) ? c[u] : r;
        }
        function N$(u) {
          var c = this.__data__;
          return Lo ? c[u] !== r : Ze.call(c, u);
        }
        function L$(u, c) {
          var p = this.__data__;
          return this.size += this.has(u) ? 0 : 1, p[u] = Lo && c === r ? l : c, this;
        }
        Ti.prototype.clear = j$, Ti.prototype.delete = k$, Ti.prototype.get = D$, Ti.prototype.has = N$, Ti.prototype.set = L$;
        function bn(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function q$() {
          this.__data__ = [], this.size = 0;
        }
        function B$(u) {
          var c = this.__data__, p = $s(c, u);
          if (p < 0)
            return !1;
          var w = c.length - 1;
          return p == w ? c.pop() : Ps.call(c, p, 1), --this.size, !0;
        }
        function F$(u) {
          var c = this.__data__, p = $s(c, u);
          return p < 0 ? r : c[p][1];
        }
        function W$(u) {
          return $s(this.__data__, u) > -1;
        }
        function z$(u, c) {
          var p = this.__data__, w = $s(p, u);
          return w < 0 ? (++this.size, p.push([u, c])) : p[w][1] = c, this;
        }
        bn.prototype.clear = q$, bn.prototype.delete = B$, bn.prototype.get = F$, bn.prototype.has = W$, bn.prototype.set = z$;
        function xn(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.clear(); ++c < p; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function U$() {
          this.size = 0, this.__data__ = {
            hash: new Ti(),
            map: new (Do || bn)(),
            string: new Ti()
          };
        }
        function H$(u) {
          var c = Hs(this, u).delete(u);
          return this.size -= c ? 1 : 0, c;
        }
        function G$(u) {
          return Hs(this, u).get(u);
        }
        function K$(u) {
          return Hs(this, u).has(u);
        }
        function V$(u, c) {
          var p = Hs(this, u), w = p.size;
          return p.set(u, c), this.size += p.size == w ? 0 : 1, this;
        }
        xn.prototype.clear = U$, xn.prototype.delete = H$, xn.prototype.get = G$, xn.prototype.has = K$, xn.prototype.set = V$;
        function Ci(u) {
          var c = -1, p = u == null ? 0 : u.length;
          for (this.__data__ = new xn(); ++c < p; )
            this.add(u[c]);
        }
        function Y$(u) {
          return this.__data__.set(u, l), this;
        }
        function X$(u) {
          return this.__data__.has(u);
        }
        Ci.prototype.add = Ci.prototype.push = Y$, Ci.prototype.has = X$;
        function Br(u) {
          var c = this.__data__ = new bn(u);
          this.size = c.size;
        }
        function Z$() {
          this.__data__ = new bn(), this.size = 0;
        }
        function J$(u) {
          var c = this.__data__, p = c.delete(u);
          return this.size = c.size, p;
        }
        function Q$(u) {
          return this.__data__.get(u);
        }
        function ej(u) {
          return this.__data__.has(u);
        }
        function tj(u, c) {
          var p = this.__data__;
          if (p instanceof bn) {
            var w = p.__data__;
            if (!Do || w.length < i - 1)
              return w.push([u, c]), this.size = ++p.size, this;
            p = this.__data__ = new xn(w);
          }
          return p.set(u, c), this.size = p.size, this;
        }
        Br.prototype.clear = Z$, Br.prototype.delete = J$, Br.prototype.get = Q$, Br.prototype.has = ej, Br.prototype.set = tj;
        function K0(u, c) {
          var p = Re(u), w = !p && ji(u), E = !p && !w && ai(u), M = !p && !w && !E && Oa(u), k = p || w || E || M, N = k ? Gf(u.length, f$) : [], W = N.length;
          for (var ne in u)
            (c || Ze.call(u, ne)) && !(k && // Safari 9 has enumerable `arguments.length` in strict mode.
            (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            E && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
            An(ne, W))) && N.push(ne);
          return N;
        }
        function V0(u) {
          var c = u.length;
          return c ? u[cd(0, c - 1)] : r;
        }
        function rj(u, c) {
          return Gs(Jt(u), Mi(c, 0, u.length));
        }
        function nj(u) {
          return Gs(Jt(u));
        }
        function Qf(u, c, p) {
          (p !== r && !Fr(u[c], p) || p === r && !(c in u)) && wn(u, c, p);
        }
        function Bo(u, c, p) {
          var w = u[c];
          (!(Ze.call(u, c) && Fr(w, p)) || p === r && !(c in u)) && wn(u, c, p);
        }
        function $s(u, c) {
          for (var p = u.length; p--; )
            if (Fr(u[p][0], c))
              return p;
          return -1;
        }
        function ij(u, c, p, w) {
          return ti(u, function(E, M, k) {
            c(w, E, p(E), k);
          }), w;
        }
        function Y0(u, c) {
          return u && an(c, Ct(c), u);
        }
        function aj(u, c) {
          return u && an(c, er(c), u);
        }
        function wn(u, c, p) {
          c == "__proto__" && Es ? Es(u, c, {
            configurable: !0,
            enumerable: !0,
            value: p,
            writable: !0
          }) : u[c] = p;
        }
        function ed(u, c) {
          for (var p = -1, w = c.length, E = V(w), M = u == null; ++p < w; )
            E[p] = M ? r : jd(u, c[p]);
          return E;
        }
        function Mi(u, c, p) {
          return u === u && (p !== r && (u = u <= p ? u : p), c !== r && (u = u >= c ? u : c)), u;
        }
        function Pr(u, c, p, w, E, M) {
          var k, N = c & h, W = c & v, ne = c & y;
          if (p && (k = E ? p(u, w, E, M) : p(u)), k !== r)
            return k;
          if (!dt(u))
            return u;
          var ae = Re(u);
          if (ae) {
            if (k = Kj(u), !N)
              return Jt(u, k);
          } else {
            var ue = Dt(u), fe = ue == z || ue == Te;
            if (ai(u))
              return bx(u, N);
            if (ue == Xe || ue == ye || fe && !E) {
              if (k = W || fe ? {} : Lx(u), !N)
                return W ? Dj(u, aj(k, u)) : kj(u, Y0(k, u));
            } else {
              if (!nt[ue])
                return E ? u : {};
              k = Vj(u, ue, N);
            }
          }
          M || (M = new Br());
          var xe = M.get(u);
          if (xe)
            return xe;
          M.set(u, k), hw(u) ? u.forEach(function(Ae) {
            k.add(Pr(Ae, c, p, Ae, u, M));
          }) : fw(u) && u.forEach(function(Ae, De) {
            k.set(De, Pr(Ae, c, p, De, u, M));
          });
          var Oe = ne ? W ? xd : bd : W ? er : Ct, je = ae ? r : Oe(u);
          return Or(je || u, function(Ae, De) {
            je && (De = Ae, Ae = u[De]), Bo(k, De, Pr(Ae, c, p, De, u, M));
          }), k;
        }
        function oj(u) {
          var c = Ct(u);
          return function(p) {
            return X0(p, u, c);
          };
        }
        function X0(u, c, p) {
          var w = p.length;
          if (u == null)
            return !w;
          for (u = tt(u); w--; ) {
            var E = p[w], M = c[E], k = u[E];
            if (k === r && !(E in u) || !M(k))
              return !1;
          }
          return !0;
        }
        function Z0(u, c, p) {
          if (typeof u != "function")
            throw new Ar(o);
          return Ko(function() {
            u.apply(r, p);
          }, c);
        }
        function Fo(u, c, p, w) {
          var E = -1, M = ys, k = !0, N = u.length, W = [], ne = c.length;
          if (!N)
            return W;
          p && (c = lt(c, cr(p))), w ? (M = Bf, k = !1) : c.length >= i && (M = jo, k = !1, c = new Ci(c));
          e:
            for (; ++E < N; ) {
              var ae = u[E], ue = p == null ? ae : p(ae);
              if (ae = w || ae !== 0 ? ae : 0, k && ue === ue) {
                for (var fe = ne; fe--; )
                  if (c[fe] === ue)
                    continue e;
                W.push(ae);
              } else M(c, ue, w) || W.push(ae);
            }
          return W;
        }
        var ti = Ax(nn), J0 = Ax(rd, !0);
        function uj(u, c) {
          var p = !0;
          return ti(u, function(w, E, M) {
            return p = !!c(w, E, M), p;
          }), p;
        }
        function js(u, c, p) {
          for (var w = -1, E = u.length; ++w < E; ) {
            var M = u[w], k = c(M);
            if (k != null && (N === r ? k === k && !fr(k) : p(k, N)))
              var N = k, W = M;
          }
          return W;
        }
        function sj(u, c, p, w) {
          var E = u.length;
          for (p = Ie(p), p < 0 && (p = -p > E ? 0 : E + p), w = w === r || w > E ? E : Ie(w), w < 0 && (w += E), w = p > w ? 0 : vw(w); p < w; )
            u[p++] = c;
          return u;
        }
        function Q0(u, c) {
          var p = [];
          return ti(u, function(w, E, M) {
            c(w, E, M) && p.push(w);
          }), p;
        }
        function $t(u, c, p, w, E) {
          var M = -1, k = u.length;
          for (p || (p = Xj), E || (E = []); ++M < k; ) {
            var N = u[M];
            c > 0 && p(N) ? c > 1 ? $t(N, c - 1, p, w, E) : Jn(E, N) : w || (E[E.length] = N);
          }
          return E;
        }
        var td = Sx(), ex = Sx(!0);
        function nn(u, c) {
          return u && td(u, c, Ct);
        }
        function rd(u, c) {
          return u && ex(u, c, Ct);
        }
        function ks(u, c) {
          return Zn(c, function(p) {
            return Sn(u[p]);
          });
        }
        function Ri(u, c) {
          c = ni(c, u);
          for (var p = 0, w = c.length; u != null && p < w; )
            u = u[on(c[p++])];
          return p && p == w ? u : r;
        }
        function tx(u, c, p) {
          var w = c(u);
          return Re(u) ? w : Jn(w, p(u));
        }
        function Wt(u) {
          return u == null ? u === r ? $o : Qe : Ei && Ei in tt(u) ? Uj(u) : nk(u);
        }
        function nd(u, c) {
          return u > c;
        }
        function cj(u, c) {
          return u != null && Ze.call(u, c);
        }
        function lj(u, c) {
          return u != null && c in tt(u);
        }
        function fj(u, c, p) {
          return u >= kt(c, p) && u < _t(c, p);
        }
        function id(u, c, p) {
          for (var w = p ? Bf : ys, E = u[0].length, M = u.length, k = M, N = V(M), W = 1 / 0, ne = []; k--; ) {
            var ae = u[k];
            k && c && (ae = lt(ae, cr(c))), W = kt(ae.length, W), N[k] = !p && (c || E >= 120 && ae.length >= 120) ? new Ci(k && ae) : r;
          }
          ae = u[0];
          var ue = -1, fe = N[0];
          e:
            for (; ++ue < E && ne.length < W; ) {
              var xe = ae[ue], Oe = c ? c(xe) : xe;
              if (xe = p || xe !== 0 ? xe : 0, !(fe ? jo(fe, Oe) : w(ne, Oe, p))) {
                for (k = M; --k; ) {
                  var je = N[k];
                  if (!(je ? jo(je, Oe) : w(u[k], Oe, p)))
                    continue e;
                }
                fe && fe.push(Oe), ne.push(xe);
              }
            }
          return ne;
        }
        function dj(u, c, p, w) {
          return nn(u, function(E, M, k) {
            c(w, p(E), M, k);
          }), w;
        }
        function Wo(u, c, p) {
          c = ni(c, u), u = Wx(u, c);
          var w = u == null ? u : u[on(Tr(c))];
          return w == null ? r : sr(w, u, p);
        }
        function rx(u) {
          return ht(u) && Wt(u) == ye;
        }
        function hj(u) {
          return ht(u) && Wt(u) == Xn;
        }
        function pj(u) {
          return ht(u) && Wt(u) == te;
        }
        function zo(u, c, p, w, E) {
          return u === c ? !0 : u == null || c == null || !ht(u) && !ht(c) ? u !== u && c !== c : vj(u, c, p, w, zo, E);
        }
        function vj(u, c, p, w, E, M) {
          var k = Re(u), N = Re(c), W = k ? me : Dt(u), ne = N ? me : Dt(c);
          W = W == ye ? Xe : W, ne = ne == ye ? Xe : ne;
          var ae = W == Xe, ue = ne == Xe, fe = W == ne;
          if (fe && ai(u)) {
            if (!ai(c))
              return !1;
            k = !0, ae = !1;
          }
          if (fe && !ae)
            return M || (M = new Br()), k || Oa(u) ? kx(u, c, p, w, E, M) : Wj(u, c, W, p, w, E, M);
          if (!(p & b)) {
            var xe = ae && Ze.call(u, "__wrapped__"), Oe = ue && Ze.call(c, "__wrapped__");
            if (xe || Oe) {
              var je = xe ? u.value() : u, Ae = Oe ? c.value() : c;
              return M || (M = new Br()), E(je, Ae, p, w, M);
            }
          }
          return fe ? (M || (M = new Br()), zj(u, c, p, w, E, M)) : !1;
        }
        function yj(u) {
          return ht(u) && Dt(u) == oe;
        }
        function ad(u, c, p, w) {
          var E = p.length, M = E, k = !w;
          if (u == null)
            return !M;
          for (u = tt(u); E--; ) {
            var N = p[E];
            if (k && N[2] ? N[1] !== u[N[0]] : !(N[0] in u))
              return !1;
          }
          for (; ++E < M; ) {
            N = p[E];
            var W = N[0], ne = u[W], ae = N[1];
            if (k && N[2]) {
              if (ne === r && !(W in u))
                return !1;
            } else {
              var ue = new Br();
              if (w)
                var fe = w(ne, ae, W, u, c, ue);
              if (!(fe === r ? zo(ae, ne, b | m, w, ue) : fe))
                return !1;
            }
          }
          return !0;
        }
        function nx(u) {
          if (!dt(u) || Jj(u))
            return !1;
          var c = Sn(u) ? y$ : oI;
          return c.test($i(u));
        }
        function gj(u) {
          return ht(u) && Wt(u) == rn;
        }
        function mj(u) {
          return ht(u) && Dt(u) == xt;
        }
        function bj(u) {
          return ht(u) && Js(u.length) && !!ut[Wt(u)];
        }
        function ix(u) {
          return typeof u == "function" ? u : u == null ? tr : typeof u == "object" ? Re(u) ? ux(u[0], u[1]) : ox(u) : Pw(u);
        }
        function od(u) {
          if (!Go(u))
            return _$(u);
          var c = [];
          for (var p in tt(u))
            Ze.call(u, p) && p != "constructor" && c.push(p);
          return c;
        }
        function xj(u) {
          if (!dt(u))
            return rk(u);
          var c = Go(u), p = [];
          for (var w in u)
            w == "constructor" && (c || !Ze.call(u, w)) || p.push(w);
          return p;
        }
        function ud(u, c) {
          return u < c;
        }
        function ax(u, c) {
          var p = -1, w = Qt(u) ? V(u.length) : [];
          return ti(u, function(E, M, k) {
            w[++p] = c(E, M, k);
          }), w;
        }
        function ox(u) {
          var c = _d(u);
          return c.length == 1 && c[0][2] ? Bx(c[0][0], c[0][1]) : function(p) {
            return p === u || ad(p, u, c);
          };
        }
        function ux(u, c) {
          return Ad(u) && qx(c) ? Bx(on(u), c) : function(p) {
            var w = jd(p, u);
            return w === r && w === c ? kd(p, u) : zo(c, w, b | m);
          };
        }
        function Ds(u, c, p, w, E) {
          u !== c && td(c, function(M, k) {
            if (E || (E = new Br()), dt(M))
              wj(u, c, k, p, Ds, w, E);
            else {
              var N = w ? w(Pd(u, k), M, k + "", u, c, E) : r;
              N === r && (N = M), Qf(u, k, N);
            }
          }, er);
        }
        function wj(u, c, p, w, E, M, k) {
          var N = Pd(u, p), W = Pd(c, p), ne = k.get(W);
          if (ne) {
            Qf(u, p, ne);
            return;
          }
          var ae = M ? M(N, W, p + "", u, c, k) : r, ue = ae === r;
          if (ue) {
            var fe = Re(W), xe = !fe && ai(W), Oe = !fe && !xe && Oa(W);
            ae = W, fe || xe || Oe ? Re(N) ? ae = N : vt(N) ? ae = Jt(N) : xe ? (ue = !1, ae = bx(W, !0)) : Oe ? (ue = !1, ae = xx(W, !0)) : ae = [] : Vo(W) || ji(W) ? (ae = N, ji(N) ? ae = yw(N) : (!dt(N) || Sn(N)) && (ae = Lx(W))) : ue = !1;
          }
          ue && (k.set(W, ae), E(ae, W, w, M, k), k.delete(W)), Qf(u, p, ae);
        }
        function sx(u, c) {
          var p = u.length;
          if (p)
            return c += c < 0 ? p : 0, An(c, p) ? u[c] : r;
        }
        function cx(u, c, p) {
          c.length ? c = lt(c, function(M) {
            return Re(M) ? function(k) {
              return Ri(k, M.length === 1 ? M[0] : M);
            } : M;
          }) : c = [tr];
          var w = -1;
          c = lt(c, cr(_e()));
          var E = ax(u, function(M, k, N) {
            var W = lt(c, function(ne) {
              return ne(M);
            });
            return { criteria: W, index: ++w, value: M };
          });
          return VI(E, function(M, k) {
            return jj(M, k, p);
          });
        }
        function _j(u, c) {
          return lx(u, c, function(p, w) {
            return kd(u, w);
          });
        }
        function lx(u, c, p) {
          for (var w = -1, E = c.length, M = {}; ++w < E; ) {
            var k = c[w], N = Ri(u, k);
            p(N, k) && Uo(M, ni(k, u), N);
          }
          return M;
        }
        function Oj(u) {
          return function(c) {
            return Ri(c, u);
          };
        }
        function sd(u, c, p, w) {
          var E = w ? KI : da, M = -1, k = c.length, N = u;
          for (u === c && (c = Jt(c)), p && (N = lt(u, cr(p))); ++M < k; )
            for (var W = 0, ne = c[M], ae = p ? p(ne) : ne; (W = E(N, ae, W, w)) > -1; )
              N !== u && Ps.call(N, W, 1), Ps.call(u, W, 1);
          return u;
        }
        function fx(u, c) {
          for (var p = u ? c.length : 0, w = p - 1; p--; ) {
            var E = c[p];
            if (p == w || E !== M) {
              var M = E;
              An(E) ? Ps.call(u, E, 1) : dd(u, E);
            }
          }
          return u;
        }
        function cd(u, c) {
          return u + Cs(H0() * (c - u + 1));
        }
        function Aj(u, c, p, w) {
          for (var E = -1, M = _t(Ts((c - u) / (p || 1)), 0), k = V(M); M--; )
            k[w ? M : ++E] = u, u += p;
          return k;
        }
        function ld(u, c) {
          var p = "";
          if (!u || c < 1 || c > Z)
            return p;
          do
            c % 2 && (p += u), c = Cs(c / 2), c && (u += u);
          while (c);
          return p;
        }
        function ke(u, c) {
          return Ed(Fx(u, c, tr), u + "");
        }
        function Sj(u) {
          return V0(Aa(u));
        }
        function Pj(u, c) {
          var p = Aa(u);
          return Gs(p, Mi(c, 0, p.length));
        }
        function Uo(u, c, p, w) {
          if (!dt(u))
            return u;
          c = ni(c, u);
          for (var E = -1, M = c.length, k = M - 1, N = u; N != null && ++E < M; ) {
            var W = on(c[E]), ne = p;
            if (W === "__proto__" || W === "constructor" || W === "prototype")
              return u;
            if (E != k) {
              var ae = N[W];
              ne = w ? w(ae, W, N) : r, ne === r && (ne = dt(ae) ? ae : An(c[E + 1]) ? [] : {});
            }
            Bo(N, W, ne), N = N[W];
          }
          return u;
        }
        var dx = Ms ? function(u, c) {
          return Ms.set(u, c), u;
        } : tr, Ej = Es ? function(u, c) {
          return Es(u, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Nd(c),
            writable: !0
          });
        } : tr;
        function Tj(u) {
          return Gs(Aa(u));
        }
        function Er(u, c, p) {
          var w = -1, E = u.length;
          c < 0 && (c = -c > E ? 0 : E + c), p = p > E ? E : p, p < 0 && (p += E), E = c > p ? 0 : p - c >>> 0, c >>>= 0;
          for (var M = V(E); ++w < E; )
            M[w] = u[w + c];
          return M;
        }
        function Cj(u, c) {
          var p;
          return ti(u, function(w, E, M) {
            return p = c(w, E, M), !p;
          }), !!p;
        }
        function Ns(u, c, p) {
          var w = 0, E = u == null ? w : u.length;
          if (typeof c == "number" && c === c && E <= se) {
            for (; w < E; ) {
              var M = w + E >>> 1, k = u[M];
              k !== null && !fr(k) && (p ? k <= c : k < c) ? w = M + 1 : E = M;
            }
            return E;
          }
          return fd(u, c, tr, p);
        }
        function fd(u, c, p, w) {
          var E = 0, M = u == null ? 0 : u.length;
          if (M === 0)
            return 0;
          c = p(c);
          for (var k = c !== c, N = c === null, W = fr(c), ne = c === r; E < M; ) {
            var ae = Cs((E + M) / 2), ue = p(u[ae]), fe = ue !== r, xe = ue === null, Oe = ue === ue, je = fr(ue);
            if (k)
              var Ae = w || Oe;
            else ne ? Ae = Oe && (w || fe) : N ? Ae = Oe && fe && (w || !xe) : W ? Ae = Oe && fe && !xe && (w || !je) : xe || je ? Ae = !1 : Ae = w ? ue <= c : ue < c;
            Ae ? E = ae + 1 : M = ae;
          }
          return kt(M, re);
        }
        function hx(u, c) {
          for (var p = -1, w = u.length, E = 0, M = []; ++p < w; ) {
            var k = u[p], N = c ? c(k) : k;
            if (!p || !Fr(N, W)) {
              var W = N;
              M[E++] = k === 0 ? 0 : k;
            }
          }
          return M;
        }
        function px(u) {
          return typeof u == "number" ? u : fr(u) ? H : +u;
        }
        function lr(u) {
          if (typeof u == "string")
            return u;
          if (Re(u))
            return lt(u, lr) + "";
          if (fr(u))
            return G0 ? G0.call(u) : "";
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }
        function ri(u, c, p) {
          var w = -1, E = ys, M = u.length, k = !0, N = [], W = N;
          if (p)
            k = !1, E = Bf;
          else if (M >= i) {
            var ne = c ? null : Bj(u);
            if (ne)
              return ms(ne);
            k = !1, E = jo, W = new Ci();
          } else
            W = c ? [] : N;
          e:
            for (; ++w < M; ) {
              var ae = u[w], ue = c ? c(ae) : ae;
              if (ae = p || ae !== 0 ? ae : 0, k && ue === ue) {
                for (var fe = W.length; fe--; )
                  if (W[fe] === ue)
                    continue e;
                c && W.push(ue), N.push(ae);
              } else E(W, ue, p) || (W !== N && W.push(ue), N.push(ae));
            }
          return N;
        }
        function dd(u, c) {
          return c = ni(c, u), u = Wx(u, c), u == null || delete u[on(Tr(c))];
        }
        function vx(u, c, p, w) {
          return Uo(u, c, p(Ri(u, c)), w);
        }
        function Ls(u, c, p, w) {
          for (var E = u.length, M = w ? E : -1; (w ? M-- : ++M < E) && c(u[M], M, u); )
            ;
          return p ? Er(u, w ? 0 : M, w ? M + 1 : E) : Er(u, w ? M + 1 : 0, w ? E : M);
        }
        function yx(u, c) {
          var p = u;
          return p instanceof Le && (p = p.value()), Ff(c, function(w, E) {
            return E.func.apply(E.thisArg, Jn([w], E.args));
          }, p);
        }
        function hd(u, c, p) {
          var w = u.length;
          if (w < 2)
            return w ? ri(u[0]) : [];
          for (var E = -1, M = V(w); ++E < w; )
            for (var k = u[E], N = -1; ++N < w; )
              N != E && (M[E] = Fo(M[E] || k, u[N], c, p));
          return ri($t(M, 1), c, p);
        }
        function gx(u, c, p) {
          for (var w = -1, E = u.length, M = c.length, k = {}; ++w < E; ) {
            var N = w < M ? c[w] : r;
            p(k, u[w], N);
          }
          return k;
        }
        function pd(u) {
          return vt(u) ? u : [];
        }
        function vd(u) {
          return typeof u == "function" ? u : tr;
        }
        function ni(u, c) {
          return Re(u) ? u : Ad(u, c) ? [u] : Gx(Ue(u));
        }
        var Mj = ke;
        function ii(u, c, p) {
          var w = u.length;
          return p = p === r ? w : p, !c && p >= w ? u : Er(u, c, p);
        }
        var mx = g$ || function(u) {
          return It.clearTimeout(u);
        };
        function bx(u, c) {
          if (c)
            return u.slice();
          var p = u.length, w = B0 ? B0(p) : new u.constructor(p);
          return u.copy(w), w;
        }
        function yd(u) {
          var c = new u.constructor(u.byteLength);
          return new As(c).set(new As(u)), c;
        }
        function Rj(u, c) {
          var p = c ? yd(u.buffer) : u.buffer;
          return new u.constructor(p, u.byteOffset, u.byteLength);
        }
        function Ij(u) {
          var c = new u.constructor(u.source, r0.exec(u));
          return c.lastIndex = u.lastIndex, c;
        }
        function $j(u) {
          return qo ? tt(qo.call(u)) : {};
        }
        function xx(u, c) {
          var p = c ? yd(u.buffer) : u.buffer;
          return new u.constructor(p, u.byteOffset, u.length);
        }
        function wx(u, c) {
          if (u !== c) {
            var p = u !== r, w = u === null, E = u === u, M = fr(u), k = c !== r, N = c === null, W = c === c, ne = fr(c);
            if (!N && !ne && !M && u > c || M && k && W && !N && !ne || w && k && W || !p && W || !E)
              return 1;
            if (!w && !M && !ne && u < c || ne && p && E && !w && !M || N && p && E || !k && E || !W)
              return -1;
          }
          return 0;
        }
        function jj(u, c, p) {
          for (var w = -1, E = u.criteria, M = c.criteria, k = E.length, N = p.length; ++w < k; ) {
            var W = wx(E[w], M[w]);
            if (W) {
              if (w >= N)
                return W;
              var ne = p[w];
              return W * (ne == "desc" ? -1 : 1);
            }
          }
          return u.index - c.index;
        }
        function _x(u, c, p, w) {
          for (var E = -1, M = u.length, k = p.length, N = -1, W = c.length, ne = _t(M - k, 0), ae = V(W + ne), ue = !w; ++N < W; )
            ae[N] = c[N];
          for (; ++E < k; )
            (ue || E < M) && (ae[p[E]] = u[E]);
          for (; ne--; )
            ae[N++] = u[E++];
          return ae;
        }
        function Ox(u, c, p, w) {
          for (var E = -1, M = u.length, k = -1, N = p.length, W = -1, ne = c.length, ae = _t(M - N, 0), ue = V(ae + ne), fe = !w; ++E < ae; )
            ue[E] = u[E];
          for (var xe = E; ++W < ne; )
            ue[xe + W] = c[W];
          for (; ++k < N; )
            (fe || E < M) && (ue[xe + p[k]] = u[E++]);
          return ue;
        }
        function Jt(u, c) {
          var p = -1, w = u.length;
          for (c || (c = V(w)); ++p < w; )
            c[p] = u[p];
          return c;
        }
        function an(u, c, p, w) {
          var E = !p;
          p || (p = {});
          for (var M = -1, k = c.length; ++M < k; ) {
            var N = c[M], W = w ? w(p[N], u[N], N, p, u) : r;
            W === r && (W = u[N]), E ? wn(p, N, W) : Bo(p, N, W);
          }
          return p;
        }
        function kj(u, c) {
          return an(u, Od(u), c);
        }
        function Dj(u, c) {
          return an(u, Dx(u), c);
        }
        function qs(u, c) {
          return function(p, w) {
            var E = Re(p) ? FI : ij, M = c ? c() : {};
            return E(p, u, _e(w, 2), M);
          };
        }
        function xa(u) {
          return ke(function(c, p) {
            var w = -1, E = p.length, M = E > 1 ? p[E - 1] : r, k = E > 2 ? p[2] : r;
            for (M = u.length > 3 && typeof M == "function" ? (E--, M) : r, k && zt(p[0], p[1], k) && (M = E < 3 ? r : M, E = 1), c = tt(c); ++w < E; ) {
              var N = p[w];
              N && u(c, N, w, M);
            }
            return c;
          });
        }
        function Ax(u, c) {
          return function(p, w) {
            if (p == null)
              return p;
            if (!Qt(p))
              return u(p, w);
            for (var E = p.length, M = c ? E : -1, k = tt(p); (c ? M-- : ++M < E) && w(k[M], M, k) !== !1; )
              ;
            return p;
          };
        }
        function Sx(u) {
          return function(c, p, w) {
            for (var E = -1, M = tt(c), k = w(c), N = k.length; N--; ) {
              var W = k[u ? N : ++E];
              if (p(M[W], W, M) === !1)
                break;
            }
            return c;
          };
        }
        function Nj(u, c, p) {
          var w = c & g, E = Ho(u);
          function M() {
            var k = this && this !== It && this instanceof M ? E : u;
            return k.apply(w ? p : this, arguments);
          }
          return M;
        }
        function Px(u) {
          return function(c) {
            c = Ue(c);
            var p = ha(c) ? qr(c) : r, w = p ? p[0] : c.charAt(0), E = p ? ii(p, 1).join("") : c.slice(1);
            return w[u]() + E;
          };
        }
        function wa(u) {
          return function(c) {
            return Ff(Aw(Ow(c).replace(EI, "")), u, "");
          };
        }
        function Ho(u) {
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
            var p = ba(u.prototype), w = u.apply(p, c);
            return dt(w) ? w : p;
          };
        }
        function Lj(u, c, p) {
          var w = Ho(u);
          function E() {
            for (var M = arguments.length, k = V(M), N = M, W = _a(E); N--; )
              k[N] = arguments[N];
            var ne = M < 3 && k[0] !== W && k[M - 1] !== W ? [] : Qn(k, W);
            if (M -= ne.length, M < p)
              return Rx(
                u,
                c,
                Bs,
                E.placeholder,
                r,
                k,
                ne,
                r,
                r,
                p - M
              );
            var ae = this && this !== It && this instanceof E ? w : u;
            return sr(ae, this, k);
          }
          return E;
        }
        function Ex(u) {
          return function(c, p, w) {
            var E = tt(c);
            if (!Qt(c)) {
              var M = _e(p, 3);
              c = Ct(c), p = function(N) {
                return M(E[N], N, E);
              };
            }
            var k = u(c, p, w);
            return k > -1 ? E[M ? c[k] : k] : r;
          };
        }
        function Tx(u) {
          return On(function(c) {
            var p = c.length, w = p, E = Sr.prototype.thru;
            for (u && c.reverse(); w--; ) {
              var M = c[w];
              if (typeof M != "function")
                throw new Ar(o);
              if (E && !k && Us(M) == "wrapper")
                var k = new Sr([], !0);
            }
            for (w = k ? w : p; ++w < p; ) {
              M = c[w];
              var N = Us(M), W = N == "wrapper" ? wd(M) : r;
              W && Sd(W[0]) && W[1] == (T | A | x | R) && !W[4].length && W[9] == 1 ? k = k[Us(W[0])].apply(k, W[3]) : k = M.length == 1 && Sd(M) ? k[N]() : k.thru(M);
            }
            return function() {
              var ne = arguments, ae = ne[0];
              if (k && ne.length == 1 && Re(ae))
                return k.plant(ae).value();
              for (var ue = 0, fe = p ? c[ue].apply(this, ne) : ae; ++ue < p; )
                fe = c[ue].call(this, fe);
              return fe;
            };
          });
        }
        function Bs(u, c, p, w, E, M, k, N, W, ne) {
          var ae = c & T, ue = c & g, fe = c & _, xe = c & (A | P), Oe = c & I, je = fe ? r : Ho(u);
          function Ae() {
            for (var De = arguments.length, qe = V(De), dr = De; dr--; )
              qe[dr] = arguments[dr];
            if (xe)
              var Ut = _a(Ae), hr = XI(qe, Ut);
            if (w && (qe = _x(qe, w, E, xe)), M && (qe = Ox(qe, M, k, xe)), De -= hr, xe && De < ne) {
              var yt = Qn(qe, Ut);
              return Rx(
                u,
                c,
                Bs,
                Ae.placeholder,
                p,
                qe,
                yt,
                N,
                W,
                ne - De
              );
            }
            var Wr = ue ? p : this, En = fe ? Wr[u] : u;
            return De = qe.length, N ? qe = ik(qe, N) : Oe && De > 1 && qe.reverse(), ae && W < De && (qe.length = W), this && this !== It && this instanceof Ae && (En = je || Ho(En)), En.apply(Wr, qe);
          }
          return Ae;
        }
        function Cx(u, c) {
          return function(p, w) {
            return dj(p, u, c(w), {});
          };
        }
        function Fs(u, c) {
          return function(p, w) {
            var E;
            if (p === r && w === r)
              return c;
            if (p !== r && (E = p), w !== r) {
              if (E === r)
                return w;
              typeof p == "string" || typeof w == "string" ? (p = lr(p), w = lr(w)) : (p = px(p), w = px(w)), E = u(p, w);
            }
            return E;
          };
        }
        function gd(u) {
          return On(function(c) {
            return c = lt(c, cr(_e())), ke(function(p) {
              var w = this;
              return u(c, function(E) {
                return sr(E, w, p);
              });
            });
          });
        }
        function Ws(u, c) {
          c = c === r ? " " : lr(c);
          var p = c.length;
          if (p < 2)
            return p ? ld(c, u) : c;
          var w = ld(c, Ts(u / pa(c)));
          return ha(c) ? ii(qr(w), 0, u).join("") : w.slice(0, u);
        }
        function qj(u, c, p, w) {
          var E = c & g, M = Ho(u);
          function k() {
            for (var N = -1, W = arguments.length, ne = -1, ae = w.length, ue = V(ae + W), fe = this && this !== It && this instanceof k ? M : u; ++ne < ae; )
              ue[ne] = w[ne];
            for (; W--; )
              ue[ne++] = arguments[++N];
            return sr(fe, E ? p : this, ue);
          }
          return k;
        }
        function Mx(u) {
          return function(c, p, w) {
            return w && typeof w != "number" && zt(c, p, w) && (p = w = r), c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), w = w === r ? c < p ? 1 : -1 : Pn(w), Aj(c, p, w, u);
          };
        }
        function zs(u) {
          return function(c, p) {
            return typeof c == "string" && typeof p == "string" || (c = Cr(c), p = Cr(p)), u(c, p);
          };
        }
        function Rx(u, c, p, w, E, M, k, N, W, ne) {
          var ae = c & A, ue = ae ? k : r, fe = ae ? r : k, xe = ae ? M : r, Oe = ae ? r : M;
          c |= ae ? x : S, c &= ~(ae ? S : x), c & O || (c &= -4);
          var je = [
            u,
            c,
            E,
            xe,
            ue,
            Oe,
            fe,
            N,
            W,
            ne
          ], Ae = p.apply(r, je);
          return Sd(u) && zx(Ae, je), Ae.placeholder = w, Ux(Ae, u, c);
        }
        function md(u) {
          var c = wt[u];
          return function(p, w) {
            if (p = Cr(p), w = w == null ? 0 : kt(Ie(w), 292), w && U0(p)) {
              var E = (Ue(p) + "e").split("e"), M = c(E[0] + "e" + (+E[1] + w));
              return E = (Ue(M) + "e").split("e"), +(E[0] + "e" + (+E[1] - w));
            }
            return c(p);
          };
        }
        var Bj = ga && 1 / ms(new ga([, -0]))[1] == X ? function(u) {
          return new ga(u);
        } : Bd;
        function Ix(u) {
          return function(c) {
            var p = Dt(c);
            return p == oe ? Vf(c) : p == xt ? n$(c) : YI(c, u(c));
          };
        }
        function _n(u, c, p, w, E, M, k, N) {
          var W = c & _;
          if (!W && typeof u != "function")
            throw new Ar(o);
          var ne = w ? w.length : 0;
          if (ne || (c &= -97, w = E = r), k = k === r ? k : _t(Ie(k), 0), N = N === r ? N : Ie(N), ne -= E ? E.length : 0, c & S) {
            var ae = w, ue = E;
            w = E = r;
          }
          var fe = W ? r : wd(u), xe = [
            u,
            c,
            p,
            w,
            E,
            ae,
            ue,
            M,
            k,
            N
          ];
          if (fe && tk(xe, fe), u = xe[0], c = xe[1], p = xe[2], w = xe[3], E = xe[4], N = xe[9] = xe[9] === r ? W ? 0 : u.length : _t(xe[9] - ne, 0), !N && c & (A | P) && (c &= -25), !c || c == g)
            var Oe = Nj(u, c, p);
          else c == A || c == P ? Oe = Lj(u, c, N) : (c == x || c == (g | x)) && !E.length ? Oe = qj(u, c, p, w) : Oe = Bs.apply(r, xe);
          var je = fe ? dx : zx;
          return Ux(je(Oe, xe), u, c);
        }
        function $x(u, c, p, w) {
          return u === r || Fr(u, ya[p]) && !Ze.call(w, p) ? c : u;
        }
        function jx(u, c, p, w, E, M) {
          return dt(u) && dt(c) && (M.set(c, u), Ds(u, c, r, jx, M), M.delete(c)), u;
        }
        function Fj(u) {
          return Vo(u) ? r : u;
        }
        function kx(u, c, p, w, E, M) {
          var k = p & b, N = u.length, W = c.length;
          if (N != W && !(k && W > N))
            return !1;
          var ne = M.get(u), ae = M.get(c);
          if (ne && ae)
            return ne == c && ae == u;
          var ue = -1, fe = !0, xe = p & m ? new Ci() : r;
          for (M.set(u, c), M.set(c, u); ++ue < N; ) {
            var Oe = u[ue], je = c[ue];
            if (w)
              var Ae = k ? w(je, Oe, ue, c, u, M) : w(Oe, je, ue, u, c, M);
            if (Ae !== r) {
              if (Ae)
                continue;
              fe = !1;
              break;
            }
            if (xe) {
              if (!Wf(c, function(De, qe) {
                if (!jo(xe, qe) && (Oe === De || E(Oe, De, p, w, M)))
                  return xe.push(qe);
              })) {
                fe = !1;
                break;
              }
            } else if (!(Oe === je || E(Oe, je, p, w, M))) {
              fe = !1;
              break;
            }
          }
          return M.delete(u), M.delete(c), fe;
        }
        function Wj(u, c, p, w, E, M, k) {
          switch (p) {
            case la:
              if (u.byteLength != c.byteLength || u.byteOffset != c.byteOffset)
                return !1;
              u = u.buffer, c = c.buffer;
            case Xn:
              return !(u.byteLength != c.byteLength || !M(new As(u), new As(c)));
            case pe:
            case te:
            case Be:
              return Fr(+u, +c);
            case be:
              return u.name == c.name && u.message == c.message;
            case rn:
            case Ft:
              return u == c + "";
            case oe:
              var N = Vf;
            case xt:
              var W = w & b;
              if (N || (N = ms), u.size != c.size && !W)
                return !1;
              var ne = k.get(u);
              if (ne)
                return ne == c;
              w |= m, k.set(u, c);
              var ae = kx(N(u), N(c), w, E, M, k);
              return k.delete(u), ae;
            case Yn:
              if (qo)
                return qo.call(u) == qo.call(c);
          }
          return !1;
        }
        function zj(u, c, p, w, E, M) {
          var k = p & b, N = bd(u), W = N.length, ne = bd(c), ae = ne.length;
          if (W != ae && !k)
            return !1;
          for (var ue = W; ue--; ) {
            var fe = N[ue];
            if (!(k ? fe in c : Ze.call(c, fe)))
              return !1;
          }
          var xe = M.get(u), Oe = M.get(c);
          if (xe && Oe)
            return xe == c && Oe == u;
          var je = !0;
          M.set(u, c), M.set(c, u);
          for (var Ae = k; ++ue < W; ) {
            fe = N[ue];
            var De = u[fe], qe = c[fe];
            if (w)
              var dr = k ? w(qe, De, fe, c, u, M) : w(De, qe, fe, u, c, M);
            if (!(dr === r ? De === qe || E(De, qe, p, w, M) : dr)) {
              je = !1;
              break;
            }
            Ae || (Ae = fe == "constructor");
          }
          if (je && !Ae) {
            var Ut = u.constructor, hr = c.constructor;
            Ut != hr && "constructor" in u && "constructor" in c && !(typeof Ut == "function" && Ut instanceof Ut && typeof hr == "function" && hr instanceof hr) && (je = !1);
          }
          return M.delete(u), M.delete(c), je;
        }
        function On(u) {
          return Ed(Fx(u, r, Xx), u + "");
        }
        function bd(u) {
          return tx(u, Ct, Od);
        }
        function xd(u) {
          return tx(u, er, Dx);
        }
        var wd = Ms ? function(u) {
          return Ms.get(u);
        } : Bd;
        function Us(u) {
          for (var c = u.name + "", p = ma[c], w = Ze.call(ma, c) ? p.length : 0; w--; ) {
            var E = p[w], M = E.func;
            if (M == null || M == u)
              return E.name;
          }
          return c;
        }
        function _a(u) {
          var c = Ze.call(C, "placeholder") ? C : u;
          return c.placeholder;
        }
        function _e() {
          var u = C.iteratee || Ld;
          return u = u === Ld ? ix : u, arguments.length ? u(arguments[0], arguments[1]) : u;
        }
        function Hs(u, c) {
          var p = u.__data__;
          return Zj(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
        }
        function _d(u) {
          for (var c = Ct(u), p = c.length; p--; ) {
            var w = c[p], E = u[w];
            c[p] = [w, E, qx(E)];
          }
          return c;
        }
        function Ii(u, c) {
          var p = e$(u, c);
          return nx(p) ? p : r;
        }
        function Uj(u) {
          var c = Ze.call(u, Ei), p = u[Ei];
          try {
            u[Ei] = r;
            var w = !0;
          } catch {
          }
          var E = _s.call(u);
          return w && (c ? u[Ei] = p : delete u[Ei]), E;
        }
        var Od = Xf ? function(u) {
          return u == null ? [] : (u = tt(u), Zn(Xf(u), function(c) {
            return W0.call(u, c);
          }));
        } : Fd, Dx = Xf ? function(u) {
          for (var c = []; u; )
            Jn(c, Od(u)), u = Ss(u);
          return c;
        } : Fd, Dt = Wt;
        (Zf && Dt(new Zf(new ArrayBuffer(1))) != la || Do && Dt(new Do()) != oe || Jf && Dt(Jf.resolve()) != or || ga && Dt(new ga()) != xt || No && Dt(new No()) != mn) && (Dt = function(u) {
          var c = Wt(u), p = c == Xe ? u.constructor : r, w = p ? $i(p) : "";
          if (w)
            switch (w) {
              case P$:
                return la;
              case E$:
                return oe;
              case T$:
                return or;
              case C$:
                return xt;
              case M$:
                return mn;
            }
          return c;
        });
        function Hj(u, c, p) {
          for (var w = -1, E = p.length; ++w < E; ) {
            var M = p[w], k = M.size;
            switch (M.type) {
              case "drop":
                u += k;
                break;
              case "dropRight":
                c -= k;
                break;
              case "take":
                c = kt(c, u + k);
                break;
              case "takeRight":
                u = _t(u, c - k);
                break;
            }
          }
          return { start: u, end: c };
        }
        function Gj(u) {
          var c = u.match(JR);
          return c ? c[1].split(QR) : [];
        }
        function Nx(u, c, p) {
          c = ni(c, u);
          for (var w = -1, E = c.length, M = !1; ++w < E; ) {
            var k = on(c[w]);
            if (!(M = u != null && p(u, k)))
              break;
            u = u[k];
          }
          return M || ++w != E ? M : (E = u == null ? 0 : u.length, !!E && Js(E) && An(k, E) && (Re(u) || ji(u)));
        }
        function Kj(u) {
          var c = u.length, p = new u.constructor(c);
          return c && typeof u[0] == "string" && Ze.call(u, "index") && (p.index = u.index, p.input = u.input), p;
        }
        function Lx(u) {
          return typeof u.constructor == "function" && !Go(u) ? ba(Ss(u)) : {};
        }
        function Vj(u, c, p) {
          var w = u.constructor;
          switch (c) {
            case Xn:
              return yd(u);
            case pe:
            case te:
              return new w(+u);
            case la:
              return Rj(u, p);
            case _f:
            case Of:
            case Af:
            case Sf:
            case Pf:
            case Ef:
            case Tf:
            case Cf:
            case Mf:
              return xx(u, p);
            case oe:
              return new w();
            case Be:
            case Ft:
              return new w(u);
            case rn:
              return Ij(u);
            case xt:
              return new w();
            case Yn:
              return $j(u);
          }
        }
        function Yj(u, c) {
          var p = c.length;
          if (!p)
            return u;
          var w = p - 1;
          return c[w] = (p > 1 ? "& " : "") + c[w], c = c.join(p > 2 ? ", " : " "), u.replace(ZR, `{
/* [wrapped with ` + c + `] */
`);
        }
        function Xj(u) {
          return Re(u) || ji(u) || !!(z0 && u && u[z0]);
        }
        function An(u, c) {
          var p = typeof u;
          return c = c ?? Z, !!c && (p == "number" || p != "symbol" && sI.test(u)) && u > -1 && u % 1 == 0 && u < c;
        }
        function zt(u, c, p) {
          if (!dt(p))
            return !1;
          var w = typeof c;
          return (w == "number" ? Qt(p) && An(c, p.length) : w == "string" && c in p) ? Fr(p[c], u) : !1;
        }
        function Ad(u, c) {
          if (Re(u))
            return !1;
          var p = typeof u;
          return p == "number" || p == "symbol" || p == "boolean" || u == null || fr(u) ? !0 : KR.test(u) || !GR.test(u) || c != null && u in tt(c);
        }
        function Zj(u) {
          var c = typeof u;
          return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? u !== "__proto__" : u === null;
        }
        function Sd(u) {
          var c = Us(u), p = C[c];
          if (typeof p != "function" || !(c in Le.prototype))
            return !1;
          if (u === p)
            return !0;
          var w = wd(p);
          return !!w && u === w[0];
        }
        function Jj(u) {
          return !!q0 && q0 in u;
        }
        var Qj = xs ? Sn : Wd;
        function Go(u) {
          var c = u && u.constructor, p = typeof c == "function" && c.prototype || ya;
          return u === p;
        }
        function qx(u) {
          return u === u && !dt(u);
        }
        function Bx(u, c) {
          return function(p) {
            return p == null ? !1 : p[u] === c && (c !== r || u in tt(p));
          };
        }
        function ek(u) {
          var c = Xs(u, function(w) {
            return p.size === f && p.clear(), w;
          }), p = c.cache;
          return c;
        }
        function tk(u, c) {
          var p = u[1], w = c[1], E = p | w, M = E < (g | _ | T), k = w == T && p == A || w == T && p == R && u[7].length <= c[8] || w == (T | R) && c[7].length <= c[8] && p == A;
          if (!(M || k))
            return u;
          w & g && (u[2] = c[2], E |= p & g ? 0 : O);
          var N = c[3];
          if (N) {
            var W = u[3];
            u[3] = W ? _x(W, N, c[4]) : N, u[4] = W ? Qn(u[3], d) : c[4];
          }
          return N = c[5], N && (W = u[5], u[5] = W ? Ox(W, N, c[6]) : N, u[6] = W ? Qn(u[5], d) : c[6]), N = c[7], N && (u[7] = N), w & T && (u[8] = u[8] == null ? c[8] : kt(u[8], c[8])), u[9] == null && (u[9] = c[9]), u[0] = c[0], u[1] = E, u;
        }
        function rk(u) {
          var c = [];
          if (u != null)
            for (var p in tt(u))
              c.push(p);
          return c;
        }
        function nk(u) {
          return _s.call(u);
        }
        function Fx(u, c, p) {
          return c = _t(c === r ? u.length - 1 : c, 0), function() {
            for (var w = arguments, E = -1, M = _t(w.length - c, 0), k = V(M); ++E < M; )
              k[E] = w[c + E];
            E = -1;
            for (var N = V(c + 1); ++E < c; )
              N[E] = w[E];
            return N[c] = p(k), sr(u, this, N);
          };
        }
        function Wx(u, c) {
          return c.length < 2 ? u : Ri(u, Er(c, 0, -1));
        }
        function ik(u, c) {
          for (var p = u.length, w = kt(c.length, p), E = Jt(u); w--; ) {
            var M = c[w];
            u[w] = An(M, p) ? E[M] : r;
          }
          return u;
        }
        function Pd(u, c) {
          if (!(c === "constructor" && typeof u[c] == "function") && c != "__proto__")
            return u[c];
        }
        var zx = Hx(dx), Ko = b$ || function(u, c) {
          return It.setTimeout(u, c);
        }, Ed = Hx(Ej);
        function Ux(u, c, p) {
          var w = c + "";
          return Ed(u, Yj(w, ak(Gj(w), p)));
        }
        function Hx(u) {
          var c = 0, p = 0;
          return function() {
            var w = O$(), E = L - (w - p);
            if (p = w, E > 0) {
              if (++c >= D)
                return arguments[0];
            } else
              c = 0;
            return u.apply(r, arguments);
          };
        }
        function Gs(u, c) {
          var p = -1, w = u.length, E = w - 1;
          for (c = c === r ? w : c; ++p < c; ) {
            var M = cd(p, E), k = u[M];
            u[M] = u[p], u[p] = k;
          }
          return u.length = c, u;
        }
        var Gx = ek(function(u) {
          var c = [];
          return u.charCodeAt(0) === 46 && c.push(""), u.replace(VR, function(p, w, E, M) {
            c.push(E ? M.replace(rI, "$1") : w || p);
          }), c;
        });
        function on(u) {
          if (typeof u == "string" || fr(u))
            return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }
        function $i(u) {
          if (u != null) {
            try {
              return ws.call(u);
            } catch {
            }
            try {
              return u + "";
            } catch {
            }
          }
          return "";
        }
        function ak(u, c) {
          return Or(de, function(p) {
            var w = "_." + p[0];
            c & p[1] && !ys(u, w) && u.push(w);
          }), u.sort();
        }
        function Kx(u) {
          if (u instanceof Le)
            return u.clone();
          var c = new Sr(u.__wrapped__, u.__chain__);
          return c.__actions__ = Jt(u.__actions__), c.__index__ = u.__index__, c.__values__ = u.__values__, c;
        }
        function ok(u, c, p) {
          (p ? zt(u, c, p) : c === r) ? c = 1 : c = _t(Ie(c), 0);
          var w = u == null ? 0 : u.length;
          if (!w || c < 1)
            return [];
          for (var E = 0, M = 0, k = V(Ts(w / c)); E < w; )
            k[M++] = Er(u, E, E += c);
          return k;
        }
        function uk(u) {
          for (var c = -1, p = u == null ? 0 : u.length, w = 0, E = []; ++c < p; ) {
            var M = u[c];
            M && (E[w++] = M);
          }
          return E;
        }
        function sk() {
          var u = arguments.length;
          if (!u)
            return [];
          for (var c = V(u - 1), p = arguments[0], w = u; w--; )
            c[w - 1] = arguments[w];
          return Jn(Re(p) ? Jt(p) : [p], $t(c, 1));
        }
        var ck = ke(function(u, c) {
          return vt(u) ? Fo(u, $t(c, 1, vt, !0)) : [];
        }), lk = ke(function(u, c) {
          var p = Tr(c);
          return vt(p) && (p = r), vt(u) ? Fo(u, $t(c, 1, vt, !0), _e(p, 2)) : [];
        }), fk = ke(function(u, c) {
          var p = Tr(c);
          return vt(p) && (p = r), vt(u) ? Fo(u, $t(c, 1, vt, !0), r, p) : [];
        });
        function dk(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Ie(c), Er(u, c < 0 ? 0 : c, w)) : [];
        }
        function hk(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Ie(c), c = w - c, Er(u, 0, c < 0 ? 0 : c)) : [];
        }
        function pk(u, c) {
          return u && u.length ? Ls(u, _e(c, 3), !0, !0) : [];
        }
        function vk(u, c) {
          return u && u.length ? Ls(u, _e(c, 3), !0) : [];
        }
        function yk(u, c, p, w) {
          var E = u == null ? 0 : u.length;
          return E ? (p && typeof p != "number" && zt(u, c, p) && (p = 0, w = E), sj(u, c, p, w)) : [];
        }
        function Vx(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var E = p == null ? 0 : Ie(p);
          return E < 0 && (E = _t(w + E, 0)), gs(u, _e(c, 3), E);
        }
        function Yx(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var E = w - 1;
          return p !== r && (E = Ie(p), E = p < 0 ? _t(w + E, 0) : kt(E, w - 1)), gs(u, _e(c, 3), E, !0);
        }
        function Xx(u) {
          var c = u == null ? 0 : u.length;
          return c ? $t(u, 1) : [];
        }
        function gk(u) {
          var c = u == null ? 0 : u.length;
          return c ? $t(u, X) : [];
        }
        function mk(u, c) {
          var p = u == null ? 0 : u.length;
          return p ? (c = c === r ? 1 : Ie(c), $t(u, c)) : [];
        }
        function bk(u) {
          for (var c = -1, p = u == null ? 0 : u.length, w = {}; ++c < p; ) {
            var E = u[c];
            w[E[0]] = E[1];
          }
          return w;
        }
        function Zx(u) {
          return u && u.length ? u[0] : r;
        }
        function xk(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var E = p == null ? 0 : Ie(p);
          return E < 0 && (E = _t(w + E, 0)), da(u, c, E);
        }
        function wk(u) {
          var c = u == null ? 0 : u.length;
          return c ? Er(u, 0, -1) : [];
        }
        var _k = ke(function(u) {
          var c = lt(u, pd);
          return c.length && c[0] === u[0] ? id(c) : [];
        }), Ok = ke(function(u) {
          var c = Tr(u), p = lt(u, pd);
          return c === Tr(p) ? c = r : p.pop(), p.length && p[0] === u[0] ? id(p, _e(c, 2)) : [];
        }), Ak = ke(function(u) {
          var c = Tr(u), p = lt(u, pd);
          return c = typeof c == "function" ? c : r, c && p.pop(), p.length && p[0] === u[0] ? id(p, r, c) : [];
        });
        function Sk(u, c) {
          return u == null ? "" : w$.call(u, c);
        }
        function Tr(u) {
          var c = u == null ? 0 : u.length;
          return c ? u[c - 1] : r;
        }
        function Pk(u, c, p) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var E = w;
          return p !== r && (E = Ie(p), E = E < 0 ? _t(w + E, 0) : kt(E, w - 1)), c === c ? a$(u, c, E) : gs(u, R0, E, !0);
        }
        function Ek(u, c) {
          return u && u.length ? sx(u, Ie(c)) : r;
        }
        var Tk = ke(Jx);
        function Jx(u, c) {
          return u && u.length && c && c.length ? sd(u, c) : u;
        }
        function Ck(u, c, p) {
          return u && u.length && c && c.length ? sd(u, c, _e(p, 2)) : u;
        }
        function Mk(u, c, p) {
          return u && u.length && c && c.length ? sd(u, c, r, p) : u;
        }
        var Rk = On(function(u, c) {
          var p = u == null ? 0 : u.length, w = ed(u, c);
          return fx(u, lt(c, function(E) {
            return An(E, p) ? +E : E;
          }).sort(wx)), w;
        });
        function Ik(u, c) {
          var p = [];
          if (!(u && u.length))
            return p;
          var w = -1, E = [], M = u.length;
          for (c = _e(c, 3); ++w < M; ) {
            var k = u[w];
            c(k, w, u) && (p.push(k), E.push(w));
          }
          return fx(u, E), p;
        }
        function Td(u) {
          return u == null ? u : S$.call(u);
        }
        function $k(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (p && typeof p != "number" && zt(u, c, p) ? (c = 0, p = w) : (c = c == null ? 0 : Ie(c), p = p === r ? w : Ie(p)), Er(u, c, p)) : [];
        }
        function jk(u, c) {
          return Ns(u, c);
        }
        function kk(u, c, p) {
          return fd(u, c, _e(p, 2));
        }
        function Dk(u, c) {
          var p = u == null ? 0 : u.length;
          if (p) {
            var w = Ns(u, c);
            if (w < p && Fr(u[w], c))
              return w;
          }
          return -1;
        }
        function Nk(u, c) {
          return Ns(u, c, !0);
        }
        function Lk(u, c, p) {
          return fd(u, c, _e(p, 2), !0);
        }
        function qk(u, c) {
          var p = u == null ? 0 : u.length;
          if (p) {
            var w = Ns(u, c, !0) - 1;
            if (Fr(u[w], c))
              return w;
          }
          return -1;
        }
        function Bk(u) {
          return u && u.length ? hx(u) : [];
        }
        function Fk(u, c) {
          return u && u.length ? hx(u, _e(c, 2)) : [];
        }
        function Wk(u) {
          var c = u == null ? 0 : u.length;
          return c ? Er(u, 1, c) : [];
        }
        function zk(u, c, p) {
          return u && u.length ? (c = p || c === r ? 1 : Ie(c), Er(u, 0, c < 0 ? 0 : c)) : [];
        }
        function Uk(u, c, p) {
          var w = u == null ? 0 : u.length;
          return w ? (c = p || c === r ? 1 : Ie(c), c = w - c, Er(u, c < 0 ? 0 : c, w)) : [];
        }
        function Hk(u, c) {
          return u && u.length ? Ls(u, _e(c, 3), !1, !0) : [];
        }
        function Gk(u, c) {
          return u && u.length ? Ls(u, _e(c, 3)) : [];
        }
        var Kk = ke(function(u) {
          return ri($t(u, 1, vt, !0));
        }), Vk = ke(function(u) {
          var c = Tr(u);
          return vt(c) && (c = r), ri($t(u, 1, vt, !0), _e(c, 2));
        }), Yk = ke(function(u) {
          var c = Tr(u);
          return c = typeof c == "function" ? c : r, ri($t(u, 1, vt, !0), r, c);
        });
        function Xk(u) {
          return u && u.length ? ri(u) : [];
        }
        function Zk(u, c) {
          return u && u.length ? ri(u, _e(c, 2)) : [];
        }
        function Jk(u, c) {
          return c = typeof c == "function" ? c : r, u && u.length ? ri(u, r, c) : [];
        }
        function Cd(u) {
          if (!(u && u.length))
            return [];
          var c = 0;
          return u = Zn(u, function(p) {
            if (vt(p))
              return c = _t(p.length, c), !0;
          }), Gf(c, function(p) {
            return lt(u, zf(p));
          });
        }
        function Qx(u, c) {
          if (!(u && u.length))
            return [];
          var p = Cd(u);
          return c == null ? p : lt(p, function(w) {
            return sr(c, r, w);
          });
        }
        var Qk = ke(function(u, c) {
          return vt(u) ? Fo(u, c) : [];
        }), eD = ke(function(u) {
          return hd(Zn(u, vt));
        }), tD = ke(function(u) {
          var c = Tr(u);
          return vt(c) && (c = r), hd(Zn(u, vt), _e(c, 2));
        }), rD = ke(function(u) {
          var c = Tr(u);
          return c = typeof c == "function" ? c : r, hd(Zn(u, vt), r, c);
        }), nD = ke(Cd);
        function iD(u, c) {
          return gx(u || [], c || [], Bo);
        }
        function aD(u, c) {
          return gx(u || [], c || [], Uo);
        }
        var oD = ke(function(u) {
          var c = u.length, p = c > 1 ? u[c - 1] : r;
          return p = typeof p == "function" ? (u.pop(), p) : r, Qx(u, p);
        });
        function ew(u) {
          var c = C(u);
          return c.__chain__ = !0, c;
        }
        function uD(u, c) {
          return c(u), u;
        }
        function Ks(u, c) {
          return c(u);
        }
        var sD = On(function(u) {
          var c = u.length, p = c ? u[0] : 0, w = this.__wrapped__, E = function(M) {
            return ed(M, u);
          };
          return c > 1 || this.__actions__.length || !(w instanceof Le) || !An(p) ? this.thru(E) : (w = w.slice(p, +p + (c ? 1 : 0)), w.__actions__.push({
            func: Ks,
            args: [E],
            thisArg: r
          }), new Sr(w, this.__chain__).thru(function(M) {
            return c && !M.length && M.push(r), M;
          }));
        });
        function cD() {
          return ew(this);
        }
        function lD() {
          return new Sr(this.value(), this.__chain__);
        }
        function fD() {
          this.__values__ === r && (this.__values__ = pw(this.value()));
          var u = this.__index__ >= this.__values__.length, c = u ? r : this.__values__[this.__index__++];
          return { done: u, value: c };
        }
        function dD() {
          return this;
        }
        function hD(u) {
          for (var c, p = this; p instanceof Is; ) {
            var w = Kx(p);
            w.__index__ = 0, w.__values__ = r, c ? E.__wrapped__ = w : c = w;
            var E = w;
            p = p.__wrapped__;
          }
          return E.__wrapped__ = u, c;
        }
        function pD() {
          var u = this.__wrapped__;
          if (u instanceof Le) {
            var c = u;
            return this.__actions__.length && (c = new Le(this)), c = c.reverse(), c.__actions__.push({
              func: Ks,
              args: [Td],
              thisArg: r
            }), new Sr(c, this.__chain__);
          }
          return this.thru(Td);
        }
        function vD() {
          return yx(this.__wrapped__, this.__actions__);
        }
        var yD = qs(function(u, c, p) {
          Ze.call(u, p) ? ++u[p] : wn(u, p, 1);
        });
        function gD(u, c, p) {
          var w = Re(u) ? C0 : uj;
          return p && zt(u, c, p) && (c = r), w(u, _e(c, 3));
        }
        function mD(u, c) {
          var p = Re(u) ? Zn : Q0;
          return p(u, _e(c, 3));
        }
        var bD = Ex(Vx), xD = Ex(Yx);
        function wD(u, c) {
          return $t(Vs(u, c), 1);
        }
        function _D(u, c) {
          return $t(Vs(u, c), X);
        }
        function OD(u, c, p) {
          return p = p === r ? 1 : Ie(p), $t(Vs(u, c), p);
        }
        function tw(u, c) {
          var p = Re(u) ? Or : ti;
          return p(u, _e(c, 3));
        }
        function rw(u, c) {
          var p = Re(u) ? WI : J0;
          return p(u, _e(c, 3));
        }
        var AD = qs(function(u, c, p) {
          Ze.call(u, p) ? u[p].push(c) : wn(u, p, [c]);
        });
        function SD(u, c, p, w) {
          u = Qt(u) ? u : Aa(u), p = p && !w ? Ie(p) : 0;
          var E = u.length;
          return p < 0 && (p = _t(E + p, 0)), Qs(u) ? p <= E && u.indexOf(c, p) > -1 : !!E && da(u, c, p) > -1;
        }
        var PD = ke(function(u, c, p) {
          var w = -1, E = typeof c == "function", M = Qt(u) ? V(u.length) : [];
          return ti(u, function(k) {
            M[++w] = E ? sr(c, k, p) : Wo(k, c, p);
          }), M;
        }), ED = qs(function(u, c, p) {
          wn(u, p, c);
        });
        function Vs(u, c) {
          var p = Re(u) ? lt : ax;
          return p(u, _e(c, 3));
        }
        function TD(u, c, p, w) {
          return u == null ? [] : (Re(c) || (c = c == null ? [] : [c]), p = w ? r : p, Re(p) || (p = p == null ? [] : [p]), cx(u, c, p));
        }
        var CD = qs(function(u, c, p) {
          u[p ? 0 : 1].push(c);
        }, function() {
          return [[], []];
        });
        function MD(u, c, p) {
          var w = Re(u) ? Ff : $0, E = arguments.length < 3;
          return w(u, _e(c, 4), p, E, ti);
        }
        function RD(u, c, p) {
          var w = Re(u) ? zI : $0, E = arguments.length < 3;
          return w(u, _e(c, 4), p, E, J0);
        }
        function ID(u, c) {
          var p = Re(u) ? Zn : Q0;
          return p(u, Zs(_e(c, 3)));
        }
        function $D(u) {
          var c = Re(u) ? V0 : Sj;
          return c(u);
        }
        function jD(u, c, p) {
          (p ? zt(u, c, p) : c === r) ? c = 1 : c = Ie(c);
          var w = Re(u) ? rj : Pj;
          return w(u, c);
        }
        function kD(u) {
          var c = Re(u) ? nj : Tj;
          return c(u);
        }
        function DD(u) {
          if (u == null)
            return 0;
          if (Qt(u))
            return Qs(u) ? pa(u) : u.length;
          var c = Dt(u);
          return c == oe || c == xt ? u.size : od(u).length;
        }
        function ND(u, c, p) {
          var w = Re(u) ? Wf : Cj;
          return p && zt(u, c, p) && (c = r), w(u, _e(c, 3));
        }
        var LD = ke(function(u, c) {
          if (u == null)
            return [];
          var p = c.length;
          return p > 1 && zt(u, c[0], c[1]) ? c = [] : p > 2 && zt(c[0], c[1], c[2]) && (c = [c[0]]), cx(u, $t(c, 1), []);
        }), Ys = m$ || function() {
          return It.Date.now();
        };
        function qD(u, c) {
          if (typeof c != "function")
            throw new Ar(o);
          return u = Ie(u), function() {
            if (--u < 1)
              return c.apply(this, arguments);
          };
        }
        function nw(u, c, p) {
          return c = p ? r : c, c = u && c == null ? u.length : c, _n(u, T, r, r, r, r, c);
        }
        function iw(u, c) {
          var p;
          if (typeof c != "function")
            throw new Ar(o);
          return u = Ie(u), function() {
            return --u > 0 && (p = c.apply(this, arguments)), u <= 1 && (c = r), p;
          };
        }
        var Md = ke(function(u, c, p) {
          var w = g;
          if (p.length) {
            var E = Qn(p, _a(Md));
            w |= x;
          }
          return _n(u, w, c, p, E);
        }), aw = ke(function(u, c, p) {
          var w = g | _;
          if (p.length) {
            var E = Qn(p, _a(aw));
            w |= x;
          }
          return _n(c, w, u, p, E);
        });
        function ow(u, c, p) {
          c = p ? r : c;
          var w = _n(u, A, r, r, r, r, r, c);
          return w.placeholder = ow.placeholder, w;
        }
        function uw(u, c, p) {
          c = p ? r : c;
          var w = _n(u, P, r, r, r, r, r, c);
          return w.placeholder = uw.placeholder, w;
        }
        function sw(u, c, p) {
          var w, E, M, k, N, W, ne = 0, ae = !1, ue = !1, fe = !0;
          if (typeof u != "function")
            throw new Ar(o);
          c = Cr(c) || 0, dt(p) && (ae = !!p.leading, ue = "maxWait" in p, M = ue ? _t(Cr(p.maxWait) || 0, c) : M, fe = "trailing" in p ? !!p.trailing : fe);
          function xe(yt) {
            var Wr = w, En = E;
            return w = E = r, ne = yt, k = u.apply(En, Wr), k;
          }
          function Oe(yt) {
            return ne = yt, N = Ko(De, c), ae ? xe(yt) : k;
          }
          function je(yt) {
            var Wr = yt - W, En = yt - ne, Ew = c - Wr;
            return ue ? kt(Ew, M - En) : Ew;
          }
          function Ae(yt) {
            var Wr = yt - W, En = yt - ne;
            return W === r || Wr >= c || Wr < 0 || ue && En >= M;
          }
          function De() {
            var yt = Ys();
            if (Ae(yt))
              return qe(yt);
            N = Ko(De, je(yt));
          }
          function qe(yt) {
            return N = r, fe && w ? xe(yt) : (w = E = r, k);
          }
          function dr() {
            N !== r && mx(N), ne = 0, w = W = E = N = r;
          }
          function Ut() {
            return N === r ? k : qe(Ys());
          }
          function hr() {
            var yt = Ys(), Wr = Ae(yt);
            if (w = arguments, E = this, W = yt, Wr) {
              if (N === r)
                return Oe(W);
              if (ue)
                return mx(N), N = Ko(De, c), xe(W);
            }
            return N === r && (N = Ko(De, c)), k;
          }
          return hr.cancel = dr, hr.flush = Ut, hr;
        }
        var BD = ke(function(u, c) {
          return Z0(u, 1, c);
        }), FD = ke(function(u, c, p) {
          return Z0(u, Cr(c) || 0, p);
        });
        function WD(u) {
          return _n(u, I);
        }
        function Xs(u, c) {
          if (typeof u != "function" || c != null && typeof c != "function")
            throw new Ar(o);
          var p = function() {
            var w = arguments, E = c ? c.apply(this, w) : w[0], M = p.cache;
            if (M.has(E))
              return M.get(E);
            var k = u.apply(this, w);
            return p.cache = M.set(E, k) || M, k;
          };
          return p.cache = new (Xs.Cache || xn)(), p;
        }
        Xs.Cache = xn;
        function Zs(u) {
          if (typeof u != "function")
            throw new Ar(o);
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
        function zD(u) {
          return iw(2, u);
        }
        var UD = Mj(function(u, c) {
          c = c.length == 1 && Re(c[0]) ? lt(c[0], cr(_e())) : lt($t(c, 1), cr(_e()));
          var p = c.length;
          return ke(function(w) {
            for (var E = -1, M = kt(w.length, p); ++E < M; )
              w[E] = c[E].call(this, w[E]);
            return sr(u, this, w);
          });
        }), Rd = ke(function(u, c) {
          var p = Qn(c, _a(Rd));
          return _n(u, x, r, c, p);
        }), cw = ke(function(u, c) {
          var p = Qn(c, _a(cw));
          return _n(u, S, r, c, p);
        }), HD = On(function(u, c) {
          return _n(u, R, r, r, r, c);
        });
        function GD(u, c) {
          if (typeof u != "function")
            throw new Ar(o);
          return c = c === r ? c : Ie(c), ke(u, c);
        }
        function KD(u, c) {
          if (typeof u != "function")
            throw new Ar(o);
          return c = c == null ? 0 : _t(Ie(c), 0), ke(function(p) {
            var w = p[c], E = ii(p, 0, c);
            return w && Jn(E, w), sr(u, this, E);
          });
        }
        function VD(u, c, p) {
          var w = !0, E = !0;
          if (typeof u != "function")
            throw new Ar(o);
          return dt(p) && (w = "leading" in p ? !!p.leading : w, E = "trailing" in p ? !!p.trailing : E), sw(u, c, {
            leading: w,
            maxWait: c,
            trailing: E
          });
        }
        function YD(u) {
          return nw(u, 1);
        }
        function XD(u, c) {
          return Rd(vd(c), u);
        }
        function ZD() {
          if (!arguments.length)
            return [];
          var u = arguments[0];
          return Re(u) ? u : [u];
        }
        function JD(u) {
          return Pr(u, y);
        }
        function QD(u, c) {
          return c = typeof c == "function" ? c : r, Pr(u, y, c);
        }
        function eN(u) {
          return Pr(u, h | y);
        }
        function tN(u, c) {
          return c = typeof c == "function" ? c : r, Pr(u, h | y, c);
        }
        function rN(u, c) {
          return c == null || X0(u, c, Ct(c));
        }
        function Fr(u, c) {
          return u === c || u !== u && c !== c;
        }
        var nN = zs(nd), iN = zs(function(u, c) {
          return u >= c;
        }), ji = rx(/* @__PURE__ */ function() {
          return arguments;
        }()) ? rx : function(u) {
          return ht(u) && Ze.call(u, "callee") && !W0.call(u, "callee");
        }, Re = V.isArray, aN = O0 ? cr(O0) : hj;
        function Qt(u) {
          return u != null && Js(u.length) && !Sn(u);
        }
        function vt(u) {
          return ht(u) && Qt(u);
        }
        function oN(u) {
          return u === !0 || u === !1 || ht(u) && Wt(u) == pe;
        }
        var ai = x$ || Wd, uN = A0 ? cr(A0) : pj;
        function sN(u) {
          return ht(u) && u.nodeType === 1 && !Vo(u);
        }
        function cN(u) {
          if (u == null)
            return !0;
          if (Qt(u) && (Re(u) || typeof u == "string" || typeof u.splice == "function" || ai(u) || Oa(u) || ji(u)))
            return !u.length;
          var c = Dt(u);
          if (c == oe || c == xt)
            return !u.size;
          if (Go(u))
            return !od(u).length;
          for (var p in u)
            if (Ze.call(u, p))
              return !1;
          return !0;
        }
        function lN(u, c) {
          return zo(u, c);
        }
        function fN(u, c, p) {
          p = typeof p == "function" ? p : r;
          var w = p ? p(u, c) : r;
          return w === r ? zo(u, c, r, p) : !!w;
        }
        function Id(u) {
          if (!ht(u))
            return !1;
          var c = Wt(u);
          return c == be || c == le || typeof u.message == "string" && typeof u.name == "string" && !Vo(u);
        }
        function dN(u) {
          return typeof u == "number" && U0(u);
        }
        function Sn(u) {
          if (!dt(u))
            return !1;
          var c = Wt(u);
          return c == z || c == Te || c == he || c == ur;
        }
        function lw(u) {
          return typeof u == "number" && u == Ie(u);
        }
        function Js(u) {
          return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Z;
        }
        function dt(u) {
          var c = typeof u;
          return u != null && (c == "object" || c == "function");
        }
        function ht(u) {
          return u != null && typeof u == "object";
        }
        var fw = S0 ? cr(S0) : yj;
        function hN(u, c) {
          return u === c || ad(u, c, _d(c));
        }
        function pN(u, c, p) {
          return p = typeof p == "function" ? p : r, ad(u, c, _d(c), p);
        }
        function vN(u) {
          return dw(u) && u != +u;
        }
        function yN(u) {
          if (Qj(u))
            throw new Ce(a);
          return nx(u);
        }
        function gN(u) {
          return u === null;
        }
        function mN(u) {
          return u == null;
        }
        function dw(u) {
          return typeof u == "number" || ht(u) && Wt(u) == Be;
        }
        function Vo(u) {
          if (!ht(u) || Wt(u) != Xe)
            return !1;
          var c = Ss(u);
          if (c === null)
            return !0;
          var p = Ze.call(c, "constructor") && c.constructor;
          return typeof p == "function" && p instanceof p && ws.call(p) == p$;
        }
        var $d = P0 ? cr(P0) : gj;
        function bN(u) {
          return lw(u) && u >= -9007199254740991 && u <= Z;
        }
        var hw = E0 ? cr(E0) : mj;
        function Qs(u) {
          return typeof u == "string" || !Re(u) && ht(u) && Wt(u) == Ft;
        }
        function fr(u) {
          return typeof u == "symbol" || ht(u) && Wt(u) == Yn;
        }
        var Oa = T0 ? cr(T0) : bj;
        function xN(u) {
          return u === r;
        }
        function wN(u) {
          return ht(u) && Dt(u) == mn;
        }
        function _N(u) {
          return ht(u) && Wt(u) == ds;
        }
        var ON = zs(ud), AN = zs(function(u, c) {
          return u <= c;
        });
        function pw(u) {
          if (!u)
            return [];
          if (Qt(u))
            return Qs(u) ? qr(u) : Jt(u);
          if (ko && u[ko])
            return r$(u[ko]());
          var c = Dt(u), p = c == oe ? Vf : c == xt ? ms : Aa;
          return p(u);
        }
        function Pn(u) {
          if (!u)
            return u === 0 ? u : 0;
          if (u = Cr(u), u === X || u === -1 / 0) {
            var c = u < 0 ? -1 : 1;
            return c * ie;
          }
          return u === u ? u : 0;
        }
        function Ie(u) {
          var c = Pn(u), p = c % 1;
          return c === c ? p ? c - p : c : 0;
        }
        function vw(u) {
          return u ? Mi(Ie(u), 0, K) : 0;
        }
        function Cr(u) {
          if (typeof u == "number")
            return u;
          if (fr(u))
            return H;
          if (dt(u)) {
            var c = typeof u.valueOf == "function" ? u.valueOf() : u;
            u = dt(c) ? c + "" : c;
          }
          if (typeof u != "string")
            return u === 0 ? u : +u;
          u = j0(u);
          var p = aI.test(u);
          return p || uI.test(u) ? qI(u.slice(2), p ? 2 : 8) : iI.test(u) ? H : +u;
        }
        function yw(u) {
          return an(u, er(u));
        }
        function SN(u) {
          return u ? Mi(Ie(u), -9007199254740991, Z) : u === 0 ? u : 0;
        }
        function Ue(u) {
          return u == null ? "" : lr(u);
        }
        var PN = xa(function(u, c) {
          if (Go(c) || Qt(c)) {
            an(c, Ct(c), u);
            return;
          }
          for (var p in c)
            Ze.call(c, p) && Bo(u, p, c[p]);
        }), gw = xa(function(u, c) {
          an(c, er(c), u);
        }), ec = xa(function(u, c, p, w) {
          an(c, er(c), u, w);
        }), EN = xa(function(u, c, p, w) {
          an(c, Ct(c), u, w);
        }), TN = On(ed);
        function CN(u, c) {
          var p = ba(u);
          return c == null ? p : Y0(p, c);
        }
        var MN = ke(function(u, c) {
          u = tt(u);
          var p = -1, w = c.length, E = w > 2 ? c[2] : r;
          for (E && zt(c[0], c[1], E) && (w = 1); ++p < w; )
            for (var M = c[p], k = er(M), N = -1, W = k.length; ++N < W; ) {
              var ne = k[N], ae = u[ne];
              (ae === r || Fr(ae, ya[ne]) && !Ze.call(u, ne)) && (u[ne] = M[ne]);
            }
          return u;
        }), RN = ke(function(u) {
          return u.push(r, jx), sr(mw, r, u);
        });
        function IN(u, c) {
          return M0(u, _e(c, 3), nn);
        }
        function $N(u, c) {
          return M0(u, _e(c, 3), rd);
        }
        function jN(u, c) {
          return u == null ? u : td(u, _e(c, 3), er);
        }
        function kN(u, c) {
          return u == null ? u : ex(u, _e(c, 3), er);
        }
        function DN(u, c) {
          return u && nn(u, _e(c, 3));
        }
        function NN(u, c) {
          return u && rd(u, _e(c, 3));
        }
        function LN(u) {
          return u == null ? [] : ks(u, Ct(u));
        }
        function qN(u) {
          return u == null ? [] : ks(u, er(u));
        }
        function jd(u, c, p) {
          var w = u == null ? r : Ri(u, c);
          return w === r ? p : w;
        }
        function BN(u, c) {
          return u != null && Nx(u, c, cj);
        }
        function kd(u, c) {
          return u != null && Nx(u, c, lj);
        }
        var FN = Cx(function(u, c, p) {
          c != null && typeof c.toString != "function" && (c = _s.call(c)), u[c] = p;
        }, Nd(tr)), WN = Cx(function(u, c, p) {
          c != null && typeof c.toString != "function" && (c = _s.call(c)), Ze.call(u, c) ? u[c].push(p) : u[c] = [p];
        }, _e), zN = ke(Wo);
        function Ct(u) {
          return Qt(u) ? K0(u) : od(u);
        }
        function er(u) {
          return Qt(u) ? K0(u, !0) : xj(u);
        }
        function UN(u, c) {
          var p = {};
          return c = _e(c, 3), nn(u, function(w, E, M) {
            wn(p, c(w, E, M), w);
          }), p;
        }
        function HN(u, c) {
          var p = {};
          return c = _e(c, 3), nn(u, function(w, E, M) {
            wn(p, E, c(w, E, M));
          }), p;
        }
        var GN = xa(function(u, c, p) {
          Ds(u, c, p);
        }), mw = xa(function(u, c, p, w) {
          Ds(u, c, p, w);
        }), KN = On(function(u, c) {
          var p = {};
          if (u == null)
            return p;
          var w = !1;
          c = lt(c, function(M) {
            return M = ni(M, u), w || (w = M.length > 1), M;
          }), an(u, xd(u), p), w && (p = Pr(p, h | v | y, Fj));
          for (var E = c.length; E--; )
            dd(p, c[E]);
          return p;
        });
        function VN(u, c) {
          return bw(u, Zs(_e(c)));
        }
        var YN = On(function(u, c) {
          return u == null ? {} : _j(u, c);
        });
        function bw(u, c) {
          if (u == null)
            return {};
          var p = lt(xd(u), function(w) {
            return [w];
          });
          return c = _e(c), lx(u, p, function(w, E) {
            return c(w, E[0]);
          });
        }
        function XN(u, c, p) {
          c = ni(c, u);
          var w = -1, E = c.length;
          for (E || (E = 1, u = r); ++w < E; ) {
            var M = u == null ? r : u[on(c[w])];
            M === r && (w = E, M = p), u = Sn(M) ? M.call(u) : M;
          }
          return u;
        }
        function ZN(u, c, p) {
          return u == null ? u : Uo(u, c, p);
        }
        function JN(u, c, p, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : Uo(u, c, p, w);
        }
        var xw = Ix(Ct), ww = Ix(er);
        function QN(u, c, p) {
          var w = Re(u), E = w || ai(u) || Oa(u);
          if (c = _e(c, 4), p == null) {
            var M = u && u.constructor;
            E ? p = w ? new M() : [] : dt(u) ? p = Sn(M) ? ba(Ss(u)) : {} : p = {};
          }
          return (E ? Or : nn)(u, function(k, N, W) {
            return c(p, k, N, W);
          }), p;
        }
        function e3(u, c) {
          return u == null ? !0 : dd(u, c);
        }
        function t3(u, c, p) {
          return u == null ? u : vx(u, c, vd(p));
        }
        function r3(u, c, p, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : vx(u, c, vd(p), w);
        }
        function Aa(u) {
          return u == null ? [] : Kf(u, Ct(u));
        }
        function n3(u) {
          return u == null ? [] : Kf(u, er(u));
        }
        function i3(u, c, p) {
          return p === r && (p = c, c = r), p !== r && (p = Cr(p), p = p === p ? p : 0), c !== r && (c = Cr(c), c = c === c ? c : 0), Mi(Cr(u), c, p);
        }
        function a3(u, c, p) {
          return c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), u = Cr(u), fj(u, c, p);
        }
        function o3(u, c, p) {
          if (p && typeof p != "boolean" && zt(u, c, p) && (c = p = r), p === r && (typeof c == "boolean" ? (p = c, c = r) : typeof u == "boolean" && (p = u, u = r)), u === r && c === r ? (u = 0, c = 1) : (u = Pn(u), c === r ? (c = u, u = 0) : c = Pn(c)), u > c) {
            var w = u;
            u = c, c = w;
          }
          if (p || u % 1 || c % 1) {
            var E = H0();
            return kt(u + E * (c - u + LI("1e-" + ((E + "").length - 1))), c);
          }
          return cd(u, c);
        }
        var u3 = wa(function(u, c, p) {
          return c = c.toLowerCase(), u + (p ? _w(c) : c);
        });
        function _w(u) {
          return Dd(Ue(u).toLowerCase());
        }
        function Ow(u) {
          return u = Ue(u), u && u.replace(cI, ZI).replace(TI, "");
        }
        function s3(u, c, p) {
          u = Ue(u), c = lr(c);
          var w = u.length;
          p = p === r ? w : Mi(Ie(p), 0, w);
          var E = p;
          return p -= c.length, p >= 0 && u.slice(p, E) == c;
        }
        function c3(u) {
          return u = Ue(u), u && zR.test(u) ? u.replace(e0, JI) : u;
        }
        function l3(u) {
          return u = Ue(u), u && YR.test(u) ? u.replace(Rf, "\\$&") : u;
        }
        var f3 = wa(function(u, c, p) {
          return u + (p ? "-" : "") + c.toLowerCase();
        }), d3 = wa(function(u, c, p) {
          return u + (p ? " " : "") + c.toLowerCase();
        }), h3 = Px("toLowerCase");
        function p3(u, c, p) {
          u = Ue(u), c = Ie(c);
          var w = c ? pa(u) : 0;
          if (!c || w >= c)
            return u;
          var E = (c - w) / 2;
          return Ws(Cs(E), p) + u + Ws(Ts(E), p);
        }
        function v3(u, c, p) {
          u = Ue(u), c = Ie(c);
          var w = c ? pa(u) : 0;
          return c && w < c ? u + Ws(c - w, p) : u;
        }
        function y3(u, c, p) {
          u = Ue(u), c = Ie(c);
          var w = c ? pa(u) : 0;
          return c && w < c ? Ws(c - w, p) + u : u;
        }
        function g3(u, c, p) {
          return p || c == null ? c = 0 : c && (c = +c), A$(Ue(u).replace(If, ""), c || 0);
        }
        function m3(u, c, p) {
          return (p ? zt(u, c, p) : c === r) ? c = 1 : c = Ie(c), ld(Ue(u), c);
        }
        function b3() {
          var u = arguments, c = Ue(u[0]);
          return u.length < 3 ? c : c.replace(u[1], u[2]);
        }
        var x3 = wa(function(u, c, p) {
          return u + (p ? "_" : "") + c.toLowerCase();
        });
        function w3(u, c, p) {
          return p && typeof p != "number" && zt(u, c, p) && (c = p = r), p = p === r ? K : p >>> 0, p ? (u = Ue(u), u && (typeof c == "string" || c != null && !$d(c)) && (c = lr(c), !c && ha(u)) ? ii(qr(u), 0, p) : u.split(c, p)) : [];
        }
        var _3 = wa(function(u, c, p) {
          return u + (p ? " " : "") + Dd(c);
        });
        function O3(u, c, p) {
          return u = Ue(u), p = p == null ? 0 : Mi(Ie(p), 0, u.length), c = lr(c), u.slice(p, p + c.length) == c;
        }
        function A3(u, c, p) {
          var w = C.templateSettings;
          p && zt(u, c, p) && (c = r), u = Ue(u), c = ec({}, c, w, $x);
          var E = ec({}, c.imports, w.imports, $x), M = Ct(E), k = Kf(E, M), N, W, ne = 0, ae = c.interpolate || hs, ue = "__p += '", fe = Yf(
            (c.escape || hs).source + "|" + ae.source + "|" + (ae === t0 ? nI : hs).source + "|" + (c.evaluate || hs).source + "|$",
            "g"
          ), xe = "//# sourceURL=" + (Ze.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$I + "]") + `
`;
          u.replace(fe, function(Ae, De, qe, dr, Ut, hr) {
            return qe || (qe = dr), ue += u.slice(ne, hr).replace(lI, QI), De && (N = !0, ue += `' +
__e(` + De + `) +
'`), Ut && (W = !0, ue += `';
` + Ut + `;
__p += '`), qe && (ue += `' +
((__t = (` + qe + `)) == null ? '' : __t) +
'`), ne = hr + Ae.length, Ae;
          }), ue += `';
`;
          var Oe = Ze.call(c, "variable") && c.variable;
          if (!Oe)
            ue = `with (obj) {
` + ue + `
}
`;
          else if (tI.test(Oe))
            throw new Ce(s);
          ue = (W ? ue.replace(qR, "") : ue).replace(BR, "$1").replace(FR, "$1;"), ue = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (W ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ue + `return __p
}`;
          var je = Sw(function() {
            return ze(M, xe + "return " + ue).apply(r, k);
          });
          if (je.source = ue, Id(je))
            throw je;
          return je;
        }
        function S3(u) {
          return Ue(u).toLowerCase();
        }
        function P3(u) {
          return Ue(u).toUpperCase();
        }
        function E3(u, c, p) {
          if (u = Ue(u), u && (p || c === r))
            return j0(u);
          if (!u || !(c = lr(c)))
            return u;
          var w = qr(u), E = qr(c), M = k0(w, E), k = D0(w, E) + 1;
          return ii(w, M, k).join("");
        }
        function T3(u, c, p) {
          if (u = Ue(u), u && (p || c === r))
            return u.slice(0, L0(u) + 1);
          if (!u || !(c = lr(c)))
            return u;
          var w = qr(u), E = D0(w, qr(c)) + 1;
          return ii(w, 0, E).join("");
        }
        function C3(u, c, p) {
          if (u = Ue(u), u && (p || c === r))
            return u.replace(If, "");
          if (!u || !(c = lr(c)))
            return u;
          var w = qr(u), E = k0(w, qr(c));
          return ii(w, E).join("");
        }
        function M3(u, c) {
          var p = q, w = $;
          if (dt(c)) {
            var E = "separator" in c ? c.separator : E;
            p = "length" in c ? Ie(c.length) : p, w = "omission" in c ? lr(c.omission) : w;
          }
          u = Ue(u);
          var M = u.length;
          if (ha(u)) {
            var k = qr(u);
            M = k.length;
          }
          if (p >= M)
            return u;
          var N = p - pa(w);
          if (N < 1)
            return w;
          var W = k ? ii(k, 0, N).join("") : u.slice(0, N);
          if (E === r)
            return W + w;
          if (k && (N += W.length - N), $d(E)) {
            if (u.slice(N).search(E)) {
              var ne, ae = W;
              for (E.global || (E = Yf(E.source, Ue(r0.exec(E)) + "g")), E.lastIndex = 0; ne = E.exec(ae); )
                var ue = ne.index;
              W = W.slice(0, ue === r ? N : ue);
            }
          } else if (u.indexOf(lr(E), N) != N) {
            var fe = W.lastIndexOf(E);
            fe > -1 && (W = W.slice(0, fe));
          }
          return W + w;
        }
        function R3(u) {
          return u = Ue(u), u && WR.test(u) ? u.replace(Qb, o$) : u;
        }
        var I3 = wa(function(u, c, p) {
          return u + (p ? " " : "") + c.toUpperCase();
        }), Dd = Px("toUpperCase");
        function Aw(u, c, p) {
          return u = Ue(u), c = p ? r : c, c === r ? t$(u) ? c$(u) : GI(u) : u.match(c) || [];
        }
        var Sw = ke(function(u, c) {
          try {
            return sr(u, r, c);
          } catch (p) {
            return Id(p) ? p : new Ce(p);
          }
        }), $3 = On(function(u, c) {
          return Or(c, function(p) {
            p = on(p), wn(u, p, Md(u[p], u));
          }), u;
        });
        function j3(u) {
          var c = u == null ? 0 : u.length, p = _e();
          return u = c ? lt(u, function(w) {
            if (typeof w[1] != "function")
              throw new Ar(o);
            return [p(w[0]), w[1]];
          }) : [], ke(function(w) {
            for (var E = -1; ++E < c; ) {
              var M = u[E];
              if (sr(M[0], this, w))
                return sr(M[1], this, w);
            }
          });
        }
        function k3(u) {
          return oj(Pr(u, h));
        }
        function Nd(u) {
          return function() {
            return u;
          };
        }
        function D3(u, c) {
          return u == null || u !== u ? c : u;
        }
        var N3 = Tx(), L3 = Tx(!0);
        function tr(u) {
          return u;
        }
        function Ld(u) {
          return ix(typeof u == "function" ? u : Pr(u, h));
        }
        function q3(u) {
          return ox(Pr(u, h));
        }
        function B3(u, c) {
          return ux(u, Pr(c, h));
        }
        var F3 = ke(function(u, c) {
          return function(p) {
            return Wo(p, u, c);
          };
        }), W3 = ke(function(u, c) {
          return function(p) {
            return Wo(u, p, c);
          };
        });
        function qd(u, c, p) {
          var w = Ct(c), E = ks(c, w);
          p == null && !(dt(c) && (E.length || !w.length)) && (p = c, c = u, u = this, E = ks(c, Ct(c)));
          var M = !(dt(p) && "chain" in p) || !!p.chain, k = Sn(u);
          return Or(E, function(N) {
            var W = c[N];
            u[N] = W, k && (u.prototype[N] = function() {
              var ne = this.__chain__;
              if (M || ne) {
                var ae = u(this.__wrapped__), ue = ae.__actions__ = Jt(this.__actions__);
                return ue.push({ func: W, args: arguments, thisArg: u }), ae.__chain__ = ne, ae;
              }
              return W.apply(u, Jn([this.value()], arguments));
            });
          }), u;
        }
        function z3() {
          return It._ === this && (It._ = v$), this;
        }
        function Bd() {
        }
        function U3(u) {
          return u = Ie(u), ke(function(c) {
            return sx(c, u);
          });
        }
        var H3 = gd(lt), G3 = gd(C0), K3 = gd(Wf);
        function Pw(u) {
          return Ad(u) ? zf(on(u)) : Oj(u);
        }
        function V3(u) {
          return function(c) {
            return u == null ? r : Ri(u, c);
          };
        }
        var Y3 = Mx(), X3 = Mx(!0);
        function Fd() {
          return [];
        }
        function Wd() {
          return !1;
        }
        function Z3() {
          return {};
        }
        function J3() {
          return "";
        }
        function Q3() {
          return !0;
        }
        function e8(u, c) {
          if (u = Ie(u), u < 1 || u > Z)
            return [];
          var p = K, w = kt(u, K);
          c = _e(c), u -= K;
          for (var E = Gf(w, c); ++p < u; )
            c(p);
          return E;
        }
        function t8(u) {
          return Re(u) ? lt(u, on) : fr(u) ? [u] : Jt(Gx(Ue(u)));
        }
        function r8(u) {
          var c = ++h$;
          return Ue(u) + c;
        }
        var n8 = Fs(function(u, c) {
          return u + c;
        }, 0), i8 = md("ceil"), a8 = Fs(function(u, c) {
          return u / c;
        }, 1), o8 = md("floor");
        function u8(u) {
          return u && u.length ? js(u, tr, nd) : r;
        }
        function s8(u, c) {
          return u && u.length ? js(u, _e(c, 2), nd) : r;
        }
        function c8(u) {
          return I0(u, tr);
        }
        function l8(u, c) {
          return I0(u, _e(c, 2));
        }
        function f8(u) {
          return u && u.length ? js(u, tr, ud) : r;
        }
        function d8(u, c) {
          return u && u.length ? js(u, _e(c, 2), ud) : r;
        }
        var h8 = Fs(function(u, c) {
          return u * c;
        }, 1), p8 = md("round"), v8 = Fs(function(u, c) {
          return u - c;
        }, 0);
        function y8(u) {
          return u && u.length ? Hf(u, tr) : 0;
        }
        function g8(u, c) {
          return u && u.length ? Hf(u, _e(c, 2)) : 0;
        }
        return C.after = qD, C.ary = nw, C.assign = PN, C.assignIn = gw, C.assignInWith = ec, C.assignWith = EN, C.at = TN, C.before = iw, C.bind = Md, C.bindAll = $3, C.bindKey = aw, C.castArray = ZD, C.chain = ew, C.chunk = ok, C.compact = uk, C.concat = sk, C.cond = j3, C.conforms = k3, C.constant = Nd, C.countBy = yD, C.create = CN, C.curry = ow, C.curryRight = uw, C.debounce = sw, C.defaults = MN, C.defaultsDeep = RN, C.defer = BD, C.delay = FD, C.difference = ck, C.differenceBy = lk, C.differenceWith = fk, C.drop = dk, C.dropRight = hk, C.dropRightWhile = pk, C.dropWhile = vk, C.fill = yk, C.filter = mD, C.flatMap = wD, C.flatMapDeep = _D, C.flatMapDepth = OD, C.flatten = Xx, C.flattenDeep = gk, C.flattenDepth = mk, C.flip = WD, C.flow = N3, C.flowRight = L3, C.fromPairs = bk, C.functions = LN, C.functionsIn = qN, C.groupBy = AD, C.initial = wk, C.intersection = _k, C.intersectionBy = Ok, C.intersectionWith = Ak, C.invert = FN, C.invertBy = WN, C.invokeMap = PD, C.iteratee = Ld, C.keyBy = ED, C.keys = Ct, C.keysIn = er, C.map = Vs, C.mapKeys = UN, C.mapValues = HN, C.matches = q3, C.matchesProperty = B3, C.memoize = Xs, C.merge = GN, C.mergeWith = mw, C.method = F3, C.methodOf = W3, C.mixin = qd, C.negate = Zs, C.nthArg = U3, C.omit = KN, C.omitBy = VN, C.once = zD, C.orderBy = TD, C.over = H3, C.overArgs = UD, C.overEvery = G3, C.overSome = K3, C.partial = Rd, C.partialRight = cw, C.partition = CD, C.pick = YN, C.pickBy = bw, C.property = Pw, C.propertyOf = V3, C.pull = Tk, C.pullAll = Jx, C.pullAllBy = Ck, C.pullAllWith = Mk, C.pullAt = Rk, C.range = Y3, C.rangeRight = X3, C.rearg = HD, C.reject = ID, C.remove = Ik, C.rest = GD, C.reverse = Td, C.sampleSize = jD, C.set = ZN, C.setWith = JN, C.shuffle = kD, C.slice = $k, C.sortBy = LD, C.sortedUniq = Bk, C.sortedUniqBy = Fk, C.split = w3, C.spread = KD, C.tail = Wk, C.take = zk, C.takeRight = Uk, C.takeRightWhile = Hk, C.takeWhile = Gk, C.tap = uD, C.throttle = VD, C.thru = Ks, C.toArray = pw, C.toPairs = xw, C.toPairsIn = ww, C.toPath = t8, C.toPlainObject = yw, C.transform = QN, C.unary = YD, C.union = Kk, C.unionBy = Vk, C.unionWith = Yk, C.uniq = Xk, C.uniqBy = Zk, C.uniqWith = Jk, C.unset = e3, C.unzip = Cd, C.unzipWith = Qx, C.update = t3, C.updateWith = r3, C.values = Aa, C.valuesIn = n3, C.without = Qk, C.words = Aw, C.wrap = XD, C.xor = eD, C.xorBy = tD, C.xorWith = rD, C.zip = nD, C.zipObject = iD, C.zipObjectDeep = aD, C.zipWith = oD, C.entries = xw, C.entriesIn = ww, C.extend = gw, C.extendWith = ec, qd(C, C), C.add = n8, C.attempt = Sw, C.camelCase = u3, C.capitalize = _w, C.ceil = i8, C.clamp = i3, C.clone = JD, C.cloneDeep = eN, C.cloneDeepWith = tN, C.cloneWith = QD, C.conformsTo = rN, C.deburr = Ow, C.defaultTo = D3, C.divide = a8, C.endsWith = s3, C.eq = Fr, C.escape = c3, C.escapeRegExp = l3, C.every = gD, C.find = bD, C.findIndex = Vx, C.findKey = IN, C.findLast = xD, C.findLastIndex = Yx, C.findLastKey = $N, C.floor = o8, C.forEach = tw, C.forEachRight = rw, C.forIn = jN, C.forInRight = kN, C.forOwn = DN, C.forOwnRight = NN, C.get = jd, C.gt = nN, C.gte = iN, C.has = BN, C.hasIn = kd, C.head = Zx, C.identity = tr, C.includes = SD, C.indexOf = xk, C.inRange = a3, C.invoke = zN, C.isArguments = ji, C.isArray = Re, C.isArrayBuffer = aN, C.isArrayLike = Qt, C.isArrayLikeObject = vt, C.isBoolean = oN, C.isBuffer = ai, C.isDate = uN, C.isElement = sN, C.isEmpty = cN, C.isEqual = lN, C.isEqualWith = fN, C.isError = Id, C.isFinite = dN, C.isFunction = Sn, C.isInteger = lw, C.isLength = Js, C.isMap = fw, C.isMatch = hN, C.isMatchWith = pN, C.isNaN = vN, C.isNative = yN, C.isNil = mN, C.isNull = gN, C.isNumber = dw, C.isObject = dt, C.isObjectLike = ht, C.isPlainObject = Vo, C.isRegExp = $d, C.isSafeInteger = bN, C.isSet = hw, C.isString = Qs, C.isSymbol = fr, C.isTypedArray = Oa, C.isUndefined = xN, C.isWeakMap = wN, C.isWeakSet = _N, C.join = Sk, C.kebabCase = f3, C.last = Tr, C.lastIndexOf = Pk, C.lowerCase = d3, C.lowerFirst = h3, C.lt = ON, C.lte = AN, C.max = u8, C.maxBy = s8, C.mean = c8, C.meanBy = l8, C.min = f8, C.minBy = d8, C.stubArray = Fd, C.stubFalse = Wd, C.stubObject = Z3, C.stubString = J3, C.stubTrue = Q3, C.multiply = h8, C.nth = Ek, C.noConflict = z3, C.noop = Bd, C.now = Ys, C.pad = p3, C.padEnd = v3, C.padStart = y3, C.parseInt = g3, C.random = o3, C.reduce = MD, C.reduceRight = RD, C.repeat = m3, C.replace = b3, C.result = XN, C.round = p8, C.runInContext = B, C.sample = $D, C.size = DD, C.snakeCase = x3, C.some = ND, C.sortedIndex = jk, C.sortedIndexBy = kk, C.sortedIndexOf = Dk, C.sortedLastIndex = Nk, C.sortedLastIndexBy = Lk, C.sortedLastIndexOf = qk, C.startCase = _3, C.startsWith = O3, C.subtract = v8, C.sum = y8, C.sumBy = g8, C.template = A3, C.times = e8, C.toFinite = Pn, C.toInteger = Ie, C.toLength = vw, C.toLower = S3, C.toNumber = Cr, C.toSafeInteger = SN, C.toString = Ue, C.toUpper = P3, C.trim = E3, C.trimEnd = T3, C.trimStart = C3, C.truncate = M3, C.unescape = R3, C.uniqueId = r8, C.upperCase = I3, C.upperFirst = Dd, C.each = tw, C.eachRight = rw, C.first = Zx, qd(C, function() {
          var u = {};
          return nn(C, function(c, p) {
            Ze.call(C.prototype, p) || (u[p] = c);
          }), u;
        }(), { chain: !1 }), C.VERSION = n, Or(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
          C[u].placeholder = C;
        }), Or(["drop", "take"], function(u, c) {
          Le.prototype[u] = function(p) {
            p = p === r ? 1 : _t(Ie(p), 0);
            var w = this.__filtered__ && !c ? new Le(this) : this.clone();
            return w.__filtered__ ? w.__takeCount__ = kt(p, w.__takeCount__) : w.__views__.push({
              size: kt(p, K),
              type: u + (w.__dir__ < 0 ? "Right" : "")
            }), w;
          }, Le.prototype[u + "Right"] = function(p) {
            return this.reverse()[u](p).reverse();
          };
        }), Or(["filter", "map", "takeWhile"], function(u, c) {
          var p = c + 1, w = p == F || p == U;
          Le.prototype[u] = function(E) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: _e(E, 3),
              type: p
            }), M.__filtered__ = M.__filtered__ || w, M;
          };
        }), Or(["head", "last"], function(u, c) {
          var p = "take" + (c ? "Right" : "");
          Le.prototype[u] = function() {
            return this[p](1).value()[0];
          };
        }), Or(["initial", "tail"], function(u, c) {
          var p = "drop" + (c ? "" : "Right");
          Le.prototype[u] = function() {
            return this.__filtered__ ? new Le(this) : this[p](1);
          };
        }), Le.prototype.compact = function() {
          return this.filter(tr);
        }, Le.prototype.find = function(u) {
          return this.filter(u).head();
        }, Le.prototype.findLast = function(u) {
          return this.reverse().find(u);
        }, Le.prototype.invokeMap = ke(function(u, c) {
          return typeof u == "function" ? new Le(this) : this.map(function(p) {
            return Wo(p, u, c);
          });
        }), Le.prototype.reject = function(u) {
          return this.filter(Zs(_e(u)));
        }, Le.prototype.slice = function(u, c) {
          u = Ie(u);
          var p = this;
          return p.__filtered__ && (u > 0 || c < 0) ? new Le(p) : (u < 0 ? p = p.takeRight(-u) : u && (p = p.drop(u)), c !== r && (c = Ie(c), p = c < 0 ? p.dropRight(-c) : p.take(c - u)), p);
        }, Le.prototype.takeRightWhile = function(u) {
          return this.reverse().takeWhile(u).reverse();
        }, Le.prototype.toArray = function() {
          return this.take(K);
        }, nn(Le.prototype, function(u, c) {
          var p = /^(?:filter|find|map|reject)|While$/.test(c), w = /^(?:head|last)$/.test(c), E = C[w ? "take" + (c == "last" ? "Right" : "") : c], M = w || /^find/.test(c);
          E && (C.prototype[c] = function() {
            var k = this.__wrapped__, N = w ? [1] : arguments, W = k instanceof Le, ne = N[0], ae = W || Re(k), ue = function(De) {
              var qe = E.apply(C, Jn([De], N));
              return w && fe ? qe[0] : qe;
            };
            ae && p && typeof ne == "function" && ne.length != 1 && (W = ae = !1);
            var fe = this.__chain__, xe = !!this.__actions__.length, Oe = M && !fe, je = W && !xe;
            if (!M && ae) {
              k = je ? k : new Le(this);
              var Ae = u.apply(k, N);
              return Ae.__actions__.push({ func: Ks, args: [ue], thisArg: r }), new Sr(Ae, fe);
            }
            return Oe && je ? u.apply(this, N) : (Ae = this.thru(ue), Oe ? w ? Ae.value()[0] : Ae.value() : Ae);
          });
        }), Or(["pop", "push", "shift", "sort", "splice", "unshift"], function(u) {
          var c = bs[u], p = /^(?:push|sort|unshift)$/.test(u) ? "tap" : "thru", w = /^(?:pop|shift)$/.test(u);
          C.prototype[u] = function() {
            var E = arguments;
            if (w && !this.__chain__) {
              var M = this.value();
              return c.apply(Re(M) ? M : [], E);
            }
            return this[p](function(k) {
              return c.apply(Re(k) ? k : [], E);
            });
          };
        }), nn(Le.prototype, function(u, c) {
          var p = C[c];
          if (p) {
            var w = p.name + "";
            Ze.call(ma, w) || (ma[w] = []), ma[w].push({ name: c, func: p });
          }
        }), ma[Bs(r, _).name] = [{
          name: "wrapper",
          func: r
        }], Le.prototype.clone = R$, Le.prototype.reverse = I$, Le.prototype.value = $$, C.prototype.at = sD, C.prototype.chain = cD, C.prototype.commit = lD, C.prototype.next = fD, C.prototype.plant = hD, C.prototype.reverse = pD, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = vD, C.prototype.first = C.prototype.head, ko && (C.prototype[ko] = dD), C;
      }, va = l$();
      Pi ? ((Pi.exports = va)._ = va, Lf._ = va) : It._ = va;
    }).call(wQ);
  }(cu, cu.exports)), cu.exports;
}
var OQ = _Q();
function AQ(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const SQ = (e) => {
  const t = OQ.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, o]) => {
        n < o && (n = o, r = a);
      }
    );
  }), r;
}, PQ = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, o) => {
  const s = Object.keys(e), l = AQ(t), f = Math.max(
    ...l.map((v) => hf(`${v.x}`))
  ), d = {
    ...qb(r),
    type: "number",
    dataKey: SQ(l)
  }, h = {
    ...Bb(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ Y(Eo, { config: e, ref: o, aspect: a, children: /* @__PURE__ */ Fe(
    VM,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ Y(
          ls,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(To, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(
          ss,
          {
            ...pf(),
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
        s.map((v, y) => /* @__PURE__ */ Y(ja, { children: /* @__PURE__ */ Y(
          Ai,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || Xr(y),
            radius: 4,
            maxBarSize: 24,
            children: i && /* @__PURE__ */ Y(
              kr,
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
}, uee = Co(PQ), see = O8(
  {
    name: "Icon",
    type: "info"
  },
  Rm
);
var Xy, ZE;
function EQ() {
  if (ZE) return Xy;
  ZE = 1;
  var e = "Expected a function", t = NaN, r = "[object Symbol]", n = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = typeof $r == "object" && $r && $r.Object === Object && $r, f = typeof self == "object" && self && self.Object === Object && self, d = l || f || Function("return this")(), h = Object.prototype, v = h.toString, y = Math.max, b = Math.min, m = function() {
    return d.Date.now();
  };
  function g(x, S, T) {
    var R, I, q, $, D, L, F = 0, G = !1, U = !1, X = !0;
    if (typeof x != "function")
      throw new TypeError(e);
    S = P(S) || 0, _(T) && (G = !!T.leading, U = "maxWait" in T, q = U ? y(P(T.maxWait) || 0, S) : q, X = "trailing" in T ? !!T.trailing : X);
    function Z(he) {
      var pe = R, te = I;
      return R = I = void 0, F = he, $ = x.apply(te, pe), $;
    }
    function ie(he) {
      return F = he, D = setTimeout(re, S), G ? Z(he) : $;
    }
    function H(he) {
      var pe = he - L, te = he - F, le = S - pe;
      return U ? b(le, q - te) : le;
    }
    function K(he) {
      var pe = he - L, te = he - F;
      return L === void 0 || pe >= S || pe < 0 || U && te >= q;
    }
    function re() {
      var he = m();
      if (K(he))
        return se(he);
      D = setTimeout(re, H(he));
    }
    function se(he) {
      return D = void 0, X && R ? Z(he) : (R = I = void 0, $);
    }
    function de() {
      D !== void 0 && clearTimeout(D), F = 0, R = L = I = D = void 0;
    }
    function ye() {
      return D === void 0 ? $ : se(m());
    }
    function me() {
      var he = m(), pe = K(he);
      if (R = arguments, I = this, L = he, pe) {
        if (D === void 0)
          return ie(L);
        if (U)
          return D = setTimeout(re, S), Z(L);
      }
      return D === void 0 && (D = setTimeout(re, S)), $;
    }
    return me.cancel = de, me.flush = ye, me;
  }
  function _(x) {
    var S = typeof x;
    return !!x && (S == "object" || S == "function");
  }
  function O(x) {
    return !!x && typeof x == "object";
  }
  function A(x) {
    return typeof x == "symbol" || O(x) && v.call(x) == r;
  }
  function P(x) {
    if (typeof x == "number")
      return x;
    if (A(x))
      return t;
    if (_(x)) {
      var S = typeof x.valueOf == "function" ? x.valueOf() : x;
      x = _(S) ? S + "" : S;
    }
    if (typeof x != "string")
      return x === 0 ? x : +x;
    x = x.replace(n, "");
    var T = a.test(x);
    return T || o.test(x) ? s(x.slice(2), T ? 2 : 8) : i.test(x) ? t : +x;
  }
  return Xy = g, Xy;
}
var TQ = EQ();
const JE = /* @__PURE__ */ Je(TQ);
var Jb = typeof window < "u" ? Tm : Xt;
function CQ(e, t, r, n) {
  const i = Yt(t);
  Jb(() => {
    i.current = t;
  }, [t]), Xt(() => {
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
var MQ = typeof window > "u";
function RQ(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (s) => MQ ? t : window.matchMedia(s).matches, [i, a] = Zt(() => r ? n(e) : t);
  function o() {
    a(n(e));
  }
  return Jb(() => {
    const s = window.matchMedia(e);
    return o(), s.addListener ? s.addListener(o) : s.addEventListener("change", o), () => {
      s.removeListener ? s.removeListener(o) : s.removeEventListener("change", o);
    };
  }, [e]), i;
}
function IQ(e) {
  const t = Yt(e);
  t.current = e, Xt(
    () => () => {
      t.current();
    },
    []
  );
}
function $R(e, t = 500, r) {
  const n = Yt();
  IQ(() => {
    n.current && n.current.cancel();
  });
  const i = go(() => {
    const a = JE(e, t, r), o = (...s) => a(...s);
    return o.cancel = () => {
      a.cancel();
    }, o.isPending = () => !!n.current, o.flush = () => a.flush(), o;
  }, [e, t, r]);
  return Xt(() => {
    n.current = JE(e, t, r);
  }, [e, t, r]), i;
}
function cee(e, t, r) {
  const n = (f, d) => f === d, i = e instanceof Function ? e() : e, [a, o] = Zt(i), s = Yt(i), l = $R(
    o,
    t,
    r
  );
  return n(s.current, i) || (l(i), s.current = i), [a, l];
}
function lee({
  threshold: e = 0,
  root: t = null,
  rootMargin: r = "0%",
  freezeOnceVisible: n = !1,
  initialIsIntersecting: i = !1,
  onChange: a
} = {}) {
  var o;
  const [s, l] = Zt(null), [f, d] = Zt(() => ({
    isIntersecting: i,
    entry: void 0
  })), h = Yt();
  h.current = a;
  const v = ((o = f.entry) == null ? void 0 : o.isIntersecting) && n;
  Xt(() => {
    if (!s || !("IntersectionObserver" in window) || v)
      return;
    const m = new IntersectionObserver(
      (g) => {
        const _ = Array.isArray(m.thresholds) ? m.thresholds : [m.thresholds];
        g.forEach((O) => {
          const A = O.isIntersecting && _.some((P) => O.intersectionRatio >= P);
          d({ isIntersecting: A, entry: O }), h.current && h.current(A, O);
        });
      },
      { threshold: e, root: t, rootMargin: r }
    );
    return m.observe(s), () => {
      m.disconnect();
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
  const y = Yt(null);
  Xt(() => {
    var m;
    !s && ((m = f.entry) != null && m.target) && !n && !v && y.current !== f.entry.target && (y.current = f.entry.target, d({ isIntersecting: i, entry: void 0 }));
  }, [s, f.entry, n, v, i]);
  const b = [
    l,
    !!f.isIntersecting,
    f.entry
  ];
  return b.ref = b[0], b.isIntersecting = b[1], b.entry = b[2], b;
}
function $Q() {
  const e = Yt(!1);
  return Xt(() => (e.current = !0, () => {
    e.current = !1;
  }), []), hi(() => e.current, []);
}
var QE = {
  width: void 0,
  height: void 0
};
function fee(e) {
  const { ref: t, box: r = "content-box" } = e, [{ width: n, height: i }, a] = Zt(QE), o = $Q(), s = Yt({ ...QE }), l = Yt(void 0);
  return l.current = e.onResize, Xt(() => {
    if (!t.current || typeof window > "u" || !("ResizeObserver" in window))
      return;
    const f = new ResizeObserver(([d]) => {
      const h = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", v = eT(d, h, "inlineSize"), y = eT(d, h, "blockSize");
      if (s.current.width !== v || s.current.height !== y) {
        const m = { width: v, height: y };
        s.current.width = v, s.current.height = y, l.current ? l.current(m) : o() && a(m);
      }
    });
    return f.observe(t.current, { box: r }), () => {
      f.disconnect();
    };
  }, [r, t, o]), { width: n, height: i };
}
function eT(e, t, r) {
  return e[t] ? Array.isArray(e[t]) ? e[t][0][r] : (
    // @ts-ignore Support Firefox's non-standard behavior
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
var jQ = typeof window > "u";
function dee(e = {}) {
  let { initializeWithValue: t = !0 } = e;
  jQ && (t = !1);
  const [r, n] = Zt(() => t ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {
    width: void 0,
    height: void 0
  }), i = $R(
    n,
    e.debounceDelay
  );
  function a() {
    (e.debounceDelay ? i : n)({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  return CQ("resize", a), Jb(() => {
    a();
  }, []), r;
}
const hee = () => RQ(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
);
var Li = {}, xc = {}, tT;
function kQ() {
  return tT || (tT = 1, Object.defineProperty(xc, "__esModule", {
    value: !0
  }), xc.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g), xc;
}
var rT;
function DQ() {
  if (rT) return Li;
  rT = 1, Object.defineProperty(Li, "__esModule", {
    value: !0
  }), Li.TypeName = void 0, Li.parse = i, Li.toCodePoints = l;
  var e = kQ(), t = r(e);
  function r(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var n = Li.TypeName = "emoji";
  function i(f, d) {
    var h = d && d.assetType ? d.assetType : "svg", v = d && d.buildUrl ? d.buildUrl : function(_, O) {
      return O === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + _ + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + _ + ".svg";
    }, y = [];
    for (t.default.lastIndex = 0; ; ) {
      var b = t.default.exec(f);
      if (!b)
        break;
      var m = b[0], g = l(s(m)).join("-");
      y.push({
        url: g ? v(g, h) : "",
        indices: [b.index, t.default.lastIndex],
        text: m,
        type: n
      });
    }
    return y;
  }
  var a = /\uFE0F/g, o = "‍", s = function(d) {
    return d.indexOf(o) < 0 ? d.replace(a, "") : d;
  };
  function l(f) {
    for (var d = [], h = 0, v = 0, y = 0; y < f.length; )
      h = f.charCodeAt(y++), v ? (d.push((65536 + (v - 55296 << 10) + (h - 56320)).toString(16)), v = 0) : h > 55296 && h <= 56319 ? v = h : d.push(h.toString(16));
    return d;
  }
  return Li;
}
var NQ = DQ();
const LQ = Wn({
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
function pee({ emoji: e, size: t }) {
  const r = qQ(e);
  return r ? /* @__PURE__ */ Y(
    "img",
    {
      src: r.url,
      alt: e,
      className: LQ({ size: t }),
      draggable: !1
    }
  ) : /* @__PURE__ */ Y("span", { children: e });
}
const qQ = (e) => {
  const [t] = NQ.parse(e, {
    buildUrl: (r) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${r}.svg`
  });
  return t || null;
};
function vee(e) {
  return `${e} emoji`;
}
const jR = ir(null);
function yee({
  children: e,
  translations: t
}) {
  return /* @__PURE__ */ Y(jR.Provider, { value: t, children: e });
}
function gee() {
  const e = Bt(jR);
  if (e === null)
    throw new Error("useI18n must be used within an I18nProvider");
  return e;
}
const mee = (e) => e;
function BQ(e) {
  const t = Yt(null);
  return t.current === null && (t.current = e()), t.current;
}
const nT = ir({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), FQ = /* @__PURE__ */ new Set([
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
function Tl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || FQ.has(e);
}
let kR = (e) => !Tl(e);
function DR(e) {
  e && (kR = (t) => t.startsWith("on") ? !Tl(t) : e(t));
}
try {
  DR(require("@emotion/is-prop-valid").default);
} catch {
}
function bee(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (kR(i) || r === !0 && Tl(i) || !t && !Tl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function xee({ children: e, isValidProp: t, ...r }) {
  t && DR(t), r = { ...Bt(nT), ...r }, r.isStatic = BQ(() => r.isStatic);
  const n = go(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return Y(nT.Provider, { value: n, children: e });
}
const WQ = async () => {
  var t;
  if (navigator.userAgentData) {
    const n = ((t = (await navigator.userAgentData.getHighEntropyValues([
      "platform"
    ])).platform) == null ? void 0 : t.toLowerCase()) || "";
    switch (!0) {
      case n.includes("mac"):
        return "mac";
      case n.includes("windows"):
        return "windows";
      case n.includes("linux"):
        return "linux";
      case navigator.userAgentData.mobile:
        return "mobile";
    }
  }
  const e = navigator.userAgent.toLowerCase();
  switch (!0) {
    case /mac|iphone|ipod|ipad/.test(e):
      return "mac";
    case /win/.test(e):
      return "windows";
    case /linux/.test(e):
      return "linux";
    case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      e
    ):
      return "mobile";
    default:
      return "unknown";
  }
}, NR = ir(null), wee = ({
  children: e,
  platform: t
}) => {
  const [r, n] = Zt(
    t ?? "unknown"
  );
  return Xt(() => {
    t === void 0 && WQ().then(n);
  }, [t]), /* @__PURE__ */ Y(NR.Provider, { value: r, children: e });
};
function _ee() {
  const e = Bt(NR);
  if (e === null)
    throw new Error(
      "useUserPlatform must be used within an UserPlatformProvider"
    );
  return e;
}
const LR = ir(void 0), Oee = ({ children: e, ...t }) => /* @__PURE__ */ Y(LR.Provider, { value: t, children: e }), zQ = () => ({
  ...Bt(LR)
}), Aee = Zr(
  function(t, r) {
    const { src: n } = zQ();
    if (!n) return /* @__PURE__ */ Y("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ Y("img", { ref: r, ...t, ...i });
  }
);
export {
  na as $,
  QQ as A,
  eee as B,
  O8 as C,
  us as D,
  pee as E,
  St as F,
  Qi as G,
  kr as H,
  yee as I,
  xi as J,
  gt as K,
  XQ as L,
  xee as M,
  a7 as N,
  Ee as O,
  ca as P,
  ff as Q,
  tf as R,
  Ql as S,
  $5 as T,
  wee as U,
  uee as V,
  po as W,
  KQ as X,
  nT as Y,
  BQ as Z,
  bee as _,
  Lt as a,
  _R as a0,
  Rn as a1,
  Mo as a2,
  Eo as a3,
  ls as a4,
  To as a5,
  Lb as a6,
  df as a7,
  hR as a8,
  KJ as a9,
  SJ as aA,
  EJ as aB,
  TJ as aC,
  MJ as aD,
  CJ as aE,
  PJ as aF,
  pJ as aG,
  OZ as aH,
  tee as aI,
  _Z as aJ,
  fee as aK,
  iL as aL,
  yT as aM,
  RQ as aN,
  lee as aO,
  XJ as aP,
  dee as aQ,
  sZ as aR,
  Gn as aS,
  Fl as aT,
  BJ as aa,
  $Z as ab,
  FJ as ac,
  Im as ad,
  QM as ae,
  WJ as af,
  zJ as ag,
  bT as ah,
  Rm as ai,
  rL as aj,
  gee as ak,
  aL as al,
  vQ as am,
  yQ as an,
  gQ as ao,
  IR as ap,
  Wn as aq,
  Aee as ar,
  OR as as,
  $J as at,
  cee as au,
  lL as av,
  _ee as aw,
  gT as ax,
  _J as ay,
  AJ as az,
  Xr as b,
  ZM as c,
  iee as d,
  aee as e,
  Co as f,
  oee as g,
  YQ as h,
  JQ as i,
  Oee as j,
  ZQ as k,
  see as l,
  mee as m,
  hL as n,
  VQ as o,
  hee as p,
  vee as q,
  we as r,
  ot as s,
  Me as t,
  Jb as u,
  Je as v,
  Pe as w,
  Ne as x,
  jH as y,
  Jr as z
};
