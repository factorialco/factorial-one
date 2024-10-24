import { jsxs as Je, jsx as q, Fragment as sv } from "react/jsx-runtime";
import * as K from "react";
import k, { createContext as Rr, useContext as tr, useState as Nn, useCallback as ja, useEffect as na, useRef as Fa, useImperativeHandle as D1, forwardRef as Xr, useMemo as nu, isValidElement as qr, Children as Vi, PureComponent as Nr, cloneElement as St, createElement as L1, Component as B1, useLayoutEffect as uv } from "react";
import * as cv from "react-dom";
import { createPortal as oj } from "react-dom";
function F1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = F1(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function sj() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = F1(e)) && (n && (n += " "), n += t);
  return n;
}
const cb = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, lb = sj, zn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return lb(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, s = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = cb(d) || cb(h);
    return i[f][v];
  }), u = r && Object.entries(r).reduce((f, d) => {
    let [h, v] = d;
    return v === void 0 || (f[h] = v), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: h, className: v, ...g } = d;
    return Object.entries(g).every((w) => {
      let [y, b] = w;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...u
      }[y]) : {
        ...a,
        ...u
      }[y] === b;
    }) ? [
      ...f,
      h,
      v
    ] : f;
  }, []);
  return lb(e, s, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, lv = Rr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), wne = ({
  children: e
}) => {
  const [t, r] = Nn(!1), [n, i] = Nn([]), a = ja(
    (u) => {
      i(
        u || [...fb].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), s = ja(() => r(!1), [r]);
  return na(() => {
    window.XRay = {
      enable: a,
      disable: s
    };
  }, [a, s]), /* @__PURE__ */ Je(lv.Provider, { value: { enabled: t, enable: a, disable: s, filter: n }, children: [
    e,
    t && typeof document < "u" && oj(
      /* @__PURE__ */ Je("div", { className: "fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border bg-white p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ q("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ q("div", { className: "flex flex-col space-y-2", children: fb.map((u) => /* @__PURE__ */ Je("label", { className: "block", children: [
          /* @__PURE__ */ q(
            "input",
            {
              onChange: (l) => l.target.checked ? i([...n, u]) : i(n.filter((f) => f !== u)),
              type: "checkbox",
              checked: n.includes(u),
              className: "mr-2"
            }
          ),
          u
        ] }, u)) })
      ] }),
      document == null ? void 0 : document.body
    )
  ] });
}, uj = zn(
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
), cj = zn(
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
), lj = (e, t) => {
  const { enabled: r, filter: n } = K.useContext(lv), i = Fa(null);
  D1(t, () => i.current);
  const a = r && !e.internal, s = typeof document < "u" ? document.body : null;
  return na(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const u = i.current;
    u.dataset.componentName = e.name;
    let l = null, f = null;
    if (s) {
      const d = u.getBoundingClientRect(), { top: h, left: v, width: g, height: w } = d;
      l = document.createElement("div"), l.className = uj({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${w}px`, f = document.createElement("div"), f.className = cj({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, s.appendChild(f), s.appendChild(l);
    }
    return () => {
      l && (s == null || s.removeChild(l)), f && (s == null || s.removeChild(f));
    };
  }, [a, e.name, e.type, n, s]), {
    ref: i,
    enabled: r
  };
}, _ne = () => tr(lv), fb = ["layout", "info", "action", "form"], One = (e, t) => {
  const r = Xr((n, i) => {
    const { ref: a } = lj(e, i);
    return /* @__PURE__ */ q(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function W1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = W1(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = W1(e)) && (n && (n += " "), n += t);
  return n;
}
const fv = "-", fj = (e) => {
  const t = hj(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const u = s.split(fv);
      return u[0] === "" && u.length !== 1 && u.shift(), z1(u, t) || dj(s);
    },
    getConflictingClassGroupIds: (s, u) => {
      const l = r[s] || [];
      return u && n[s] ? [...l, ...n[s]] : l;
    }
  };
}, z1 = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? z1(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(fv);
  return (s = t.validators.find(({
    validator: u
  }) => u(a))) == null ? void 0 : s.classGroupId;
}, db = /^\[(.+)\]$/, dj = (e) => {
  if (db.test(e)) {
    const t = db.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, hj = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vj(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    Ah(s, n, a, t);
  }), n;
}, Ah = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : hb(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (pj(i)) {
        Ah(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      Ah(s, hb(t, a), r, n);
    });
  });
}, hb = (e, t) => {
  let r = e;
  return t.split(fv).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, pj = (e) => e.isThemeGetter, vj = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, u]) => [t + s, u])) : a);
  return [r, i];
}) : e, gj = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return i(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : i(a, s);
    }
  };
}, U1 = "!", yj = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, s = (u) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let b = 0; b < u.length; b++) {
      let A = u[b];
      if (f === 0) {
        if (A === i && (n || u.slice(b, b + a) === t)) {
          l.push(u.slice(d, b)), d = b + a;
          continue;
        }
        if (A === "/") {
          h = b;
          continue;
        }
      }
      A === "[" ? f++ : A === "]" && f--;
    }
    const v = l.length === 0 ? u : u.substring(d), g = v.startsWith(U1), w = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: s
  }) : s;
}, mj = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, bj = (e) => ({
  cache: gj(e.cacheSize),
  parseClassName: yj(e),
  ...fj(e)
}), xj = /\s+/, wj = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], s = e.trim().split(xj);
  let u = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const f = s[l], {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = r(f);
    let w = !!g, y = n(w ? v.substring(0, g) : v);
    if (!y) {
      if (!w) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = n(v), !y) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      w = !1;
    }
    const b = mj(d).join(":"), A = h ? b + U1 : b, O = A + y;
    if (a.includes(O))
      continue;
    a.push(O);
    const S = i(y, w);
    for (let _ = 0; _ < S.length; ++_) {
      const x = S[_];
      a.push(A + x);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function _j() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = H1(t)) && (n && (n += " "), n += r);
  return n;
}
const H1 = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = H1(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Oj(e, ...t) {
  let r, n, i, a = s;
  function s(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = bj(f), n = r.cache.get, i = r.cache.set, a = u, u(l);
  }
  function u(l) {
    const f = n(l);
    if (f)
      return f;
    const d = wj(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(_j.apply(null, arguments));
  };
}
const st = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, G1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, Aj = /^\d+\/\d+$/, Sj = /* @__PURE__ */ new Set(["px", "full", "screen"]), Pj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ej = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, $j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cj = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, En = (e) => Ra(e) || Sj.has(e) || Aj.test(e), oi = (e) => fo(e, "length", Lj), Ra = (e) => !!e && !Number.isNaN(Number(e)), Bd = (e) => fo(e, "number", Ra), Yo = (e) => !!e && Number.isInteger(Number(e)), Mj = (e) => e.endsWith("%") && Ra(e.slice(0, -1)), ke = (e) => G1.test(e), si = (e) => Pj.test(e), Ij = /* @__PURE__ */ new Set(["length", "size", "percentage"]), kj = (e) => fo(e, Ij, K1), jj = (e) => fo(e, "position", K1), Rj = /* @__PURE__ */ new Set(["image", "url"]), Nj = (e) => fo(e, Rj, Fj), Dj = (e) => fo(e, "", Bj), Xo = () => !0, fo = (e, t, r) => {
  const n = G1.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Lj = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ej.test(e) && !Tj.test(e)
), K1 = () => !1, Bj = (e) => $j.test(e), Fj = (e) => Cj.test(e), Wj = () => {
  const e = st("colors"), t = st("spacing"), r = st("blur"), n = st("brightness"), i = st("borderColor"), a = st("borderRadius"), s = st("borderSpacing"), u = st("borderWidth"), l = st("contrast"), f = st("grayscale"), d = st("hueRotate"), h = st("invert"), v = st("gap"), g = st("gradientColorStops"), w = st("gradientColorStopPositions"), y = st("inset"), b = st("margin"), A = st("opacity"), O = st("padding"), S = st("saturate"), _ = st("scale"), x = st("sepia"), E = st("skew"), C = st("space"), M = st("translate"), F = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", ke, t], N = () => [ke, t], U = () => ["", En, oi], z = () => ["auto", Ra, ke], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], se = () => ["", "0", ke], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [Ra, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xo],
      spacing: [En, oi],
      blur: ["none", "", si, ke],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", si, ke],
      borderSpacing: N(),
      borderWidth: U(),
      contrast: X(),
      grayscale: se(),
      hueRotate: X(),
      invert: se(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mj, oi],
      inset: B(),
      margin: B(),
      opacity: X(),
      padding: N(),
      saturate: X(),
      scale: X(),
      sepia: se(),
      skew: X(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ke]
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
        columns: [si]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...J(), ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", Yo, ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", ke]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: se()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: se()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Yo, ke]
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
          span: ["full", Yo, ke]
        }, ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
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
          span: [Yo, ke]
        }, ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ke]
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
        justify: ["normal", ...V()]
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
        content: ["normal", ...V(), "baseline"]
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
        "place-content": [...V(), "baseline"]
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
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ke, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ke, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ke, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [si]
        }, si]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ke, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ke, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", si, oi]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bd]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ke]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ra, Bd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", En, ke]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ke]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ke]
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
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", En, oi]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", En, ke]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ke]
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
        content: ["none", ke]
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
        "bg-opacity": [A]
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
        bg: [...J(), jj]
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
        bg: ["auto", "cover", "contain", kj]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Nj]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
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
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
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
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [En, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [En, oi]
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
        ring: U()
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [En, oi]
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
        shadow: ["", "inner", "none", si, Dj]
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
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        "drop-shadow": ["", "none", si, ke]
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
        saturate: [S]
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
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ke]
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
        ease: ["linear", "in", "out", "in-out", ke]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ke]
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
        rotate: [Yo, ke]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ke]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ke]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", ke]
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
        stroke: [En, oi, Bd]
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
}, zj = /* @__PURE__ */ Oj(Wj);
function vt(...e) {
  return zj(Me(e));
}
function q1(e) {
  return vt(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const Uj = zn("inline-block shrink-0", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-5 w-5",
      sm: "h-4 w-4",
      xs: "h-3 w-3"
    }
  },
  defaultVariants: {
    size: "xl"
  }
}), Hj = Xr(function({ size: t, icon: r, className: n, ...i }, a) {
  return r ? /* @__PURE__ */ q(
    r,
    {
      ref: a,
      ...i,
      className: vt(Uj({ size: t }), n)
    }
  ) : null;
}), Gj = (e, t) => /* @__PURE__ */ Je("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ q("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }),
  /* @__PURE__ */ q("path", { fill: "currentColor", d: "M14.5 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V6.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L17.586 5H15.5a1 1 0 0 1-1-1" })
] }), Ane = Xr(Gj), V1 = Rr(void 0), Sne = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ q(V1.Provider, { value: { component: t, currentPath: r }, children: e }), Y1 = () => {
  const e = tr(V1);
  return {
    controller: () => ({}),
    ...e
  };
}, Kj = () => {
  const { currentPath: e } = Y1();
  return {
    currentPath: e,
    isActive: (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? e === r : e.startsWith(r)
  };
}, Pne = Xr(
  function(t, r) {
    const { component: n } = Y1(), { isActive: i } = Kj(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, s = nu(
      () => Xr(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ q("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ q(s, { ref: r, ...a });
  }
);
function qj(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function X1(...e) {
  return (t) => e.forEach((r) => qj(r, t));
}
function ia(...e) {
  return K.useCallback(X1(...e), e);
}
var dv = K.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = K.Children.toArray(r), a = i.find(Vj);
  if (a) {
    const s = a.props.children, u = i.map((l) => l === a ? K.Children.count(s) > 1 ? K.Children.only(null) : K.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ q(Sh, { ...n, ref: t, children: K.isValidElement(s) ? K.cloneElement(s, void 0, u) : null });
  }
  return /* @__PURE__ */ q(Sh, { ...n, ref: t, children: r });
});
dv.displayName = "Slot";
var Sh = K.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (K.isValidElement(r)) {
    const i = Xj(r);
    return K.cloneElement(r, {
      ...Yj(n, r.props),
      // @ts-ignore
      ref: t ? X1(t, i) : i
    });
  }
  return K.Children.count(r) > 1 ? K.Children.only(null) : null;
});
Sh.displayName = "SlotClone";
var Z1 = ({ children: e }) => /* @__PURE__ */ q(sv, { children: e });
function Vj(e) {
  return K.isValidElement(e) && e.type === Z1;
}
function Yj(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...u) => {
      a(...u), i(...u);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Xj(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Zj = zn(
  vt(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    q1()
  ),
  {
    variants: {
      variant: {
        default: "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline: "border border-solid border-f1-border bg-f1-background text-f1-foreground hover:border-f1-border-hover",
        neutral: "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical: "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-none hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse",
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
), J1 = K.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, s) => /* @__PURE__ */ q(
    i ? dv : "button",
    {
      className: vt(Zj({ variant: r, size: n, round: t }), e),
      ref: s,
      ...a
    }
  )
);
J1.displayName = "Button";
const Jj = zn("-ml-0.5 transition-colors", {
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
}), Qj = zn("transition-colors", {
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
}), Ene = Xr(function({
  label: t,
  hideLabel: r,
  onClick: n,
  disabled: i,
  loading: a,
  icon: s,
  variant: u = "default",
  size: l = "md",
  ...f
}, d) {
  const [h, v] = Nn(!1);
  return /* @__PURE__ */ Je(
    J1,
    {
      title: r ? t : void 0,
      onClick: async (w) => {
        const y = n == null ? void 0 : n(w);
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
      variant: u,
      size: l,
      round: r,
      ...f,
      children: [
        s && /* @__PURE__ */ q(
          Hj,
          {
            size: l === "sm" ? "sm" : "md",
            icon: s,
            className: r ? Qj({ variant: u }) : Jj({ variant: u })
          }
        ),
        !r && t
      ]
    }
  );
});
var pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var e2 = Array.isArray, rr = e2, t2 = typeof pr == "object" && pr && pr.Object === Object && pr, Q1 = t2, r2 = Q1, n2 = typeof self == "object" && self && self.Object === Object && self, i2 = r2 || n2 || Function("return this")(), hn = i2, a2 = hn, o2 = a2.Symbol, iu = o2, pb = iu, e_ = Object.prototype, s2 = e_.hasOwnProperty, u2 = e_.toString, Zo = pb ? pb.toStringTag : void 0;
function c2(e) {
  var t = s2.call(e, Zo), r = e[Zo];
  try {
    e[Zo] = void 0;
    var n = !0;
  } catch {
  }
  var i = u2.call(e);
  return n && (t ? e[Zo] = r : delete e[Zo]), i;
}
var l2 = c2, f2 = Object.prototype, d2 = f2.toString;
function h2(e) {
  return d2.call(e);
}
var p2 = h2, vb = iu, v2 = l2, g2 = p2, y2 = "[object Null]", m2 = "[object Undefined]", gb = vb ? vb.toStringTag : void 0;
function b2(e) {
  return e == null ? e === void 0 ? m2 : y2 : gb && gb in Object(e) ? v2(e) : g2(e);
}
var Un = b2;
function x2(e) {
  return e != null && typeof e == "object";
}
var Hn = x2, w2 = Un, _2 = Hn, O2 = "[object Symbol]";
function A2(e) {
  return typeof e == "symbol" || _2(e) && w2(e) == O2;
}
var ho = A2, S2 = rr, P2 = ho, E2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, T2 = /^\w*$/;
function $2(e, t) {
  if (S2(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || P2(e) ? !0 : T2.test(e) || !E2.test(e) || t != null && e in Object(t);
}
var hv = $2;
function C2(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wi = C2;
const po = /* @__PURE__ */ Qe(wi);
var M2 = Un, I2 = wi, k2 = "[object AsyncFunction]", j2 = "[object Function]", R2 = "[object GeneratorFunction]", N2 = "[object Proxy]";
function D2(e) {
  if (!I2(e))
    return !1;
  var t = M2(e);
  return t == j2 || t == R2 || t == k2 || t == N2;
}
var pv = D2;
const Pe = /* @__PURE__ */ Qe(pv);
var L2 = hn, B2 = L2["__core-js_shared__"], F2 = B2, Fd = F2, yb = function() {
  var e = /[^.]+$/.exec(Fd && Fd.keys && Fd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function W2(e) {
  return !!yb && yb in e;
}
var z2 = W2, U2 = Function.prototype, H2 = U2.toString;
function G2(e) {
  if (e != null) {
    try {
      return H2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var t_ = G2, K2 = pv, q2 = z2, V2 = wi, Y2 = t_, X2 = /[\\^$.*+?()[\]{}|]/g, Z2 = /^\[object .+?Constructor\]$/, J2 = Function.prototype, Q2 = Object.prototype, eR = J2.toString, tR = Q2.hasOwnProperty, rR = RegExp(
  "^" + eR.call(tR).replace(X2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nR(e) {
  if (!V2(e) || q2(e))
    return !1;
  var t = K2(e) ? rR : Z2;
  return t.test(Y2(e));
}
var iR = nR;
function aR(e, t) {
  return e == null ? void 0 : e[t];
}
var oR = aR, sR = iR, uR = oR;
function cR(e, t) {
  var r = uR(e, t);
  return sR(r) ? r : void 0;
}
var aa = cR, lR = aa, fR = lR(Object, "create"), Ml = fR, mb = Ml;
function dR() {
  this.__data__ = mb ? mb(null) : {}, this.size = 0;
}
var hR = dR;
function pR(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vR = pR, gR = Ml, yR = "__lodash_hash_undefined__", mR = Object.prototype, bR = mR.hasOwnProperty;
function xR(e) {
  var t = this.__data__;
  if (gR) {
    var r = t[e];
    return r === yR ? void 0 : r;
  }
  return bR.call(t, e) ? t[e] : void 0;
}
var wR = xR, _R = Ml, OR = Object.prototype, AR = OR.hasOwnProperty;
function SR(e) {
  var t = this.__data__;
  return _R ? t[e] !== void 0 : AR.call(t, e);
}
var PR = SR, ER = Ml, TR = "__lodash_hash_undefined__";
function $R(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ER && t === void 0 ? TR : t, this;
}
var CR = $R, MR = hR, IR = vR, kR = wR, jR = PR, RR = CR;
function vo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
vo.prototype.clear = MR;
vo.prototype.delete = IR;
vo.prototype.get = kR;
vo.prototype.has = jR;
vo.prototype.set = RR;
var NR = vo;
function DR() {
  this.__data__ = [], this.size = 0;
}
var LR = DR;
function BR(e, t) {
  return e === t || e !== e && t !== t;
}
var vv = BR, FR = vv;
function WR(e, t) {
  for (var r = e.length; r--; )
    if (FR(e[r][0], t))
      return r;
  return -1;
}
var Il = WR, zR = Il, UR = Array.prototype, HR = UR.splice;
function GR(e) {
  var t = this.__data__, r = zR(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : HR.call(t, r, 1), --this.size, !0;
}
var KR = GR, qR = Il;
function VR(e) {
  var t = this.__data__, r = qR(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var YR = VR, XR = Il;
function ZR(e) {
  return XR(this.__data__, e) > -1;
}
var JR = ZR, QR = Il;
function eN(e, t) {
  var r = this.__data__, n = QR(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var tN = eN, rN = LR, nN = KR, iN = YR, aN = JR, oN = tN;
function go(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
go.prototype.clear = rN;
go.prototype.delete = nN;
go.prototype.get = iN;
go.prototype.has = aN;
go.prototype.set = oN;
var kl = go, sN = aa, uN = hn, cN = sN(uN, "Map"), gv = cN, bb = NR, lN = kl, fN = gv;
function dN() {
  this.size = 0, this.__data__ = {
    hash: new bb(),
    map: new (fN || lN)(),
    string: new bb()
  };
}
var hN = dN;
function pN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var vN = pN, gN = vN;
function yN(e, t) {
  var r = e.__data__;
  return gN(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var jl = yN, mN = jl;
function bN(e) {
  var t = mN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var xN = bN, wN = jl;
function _N(e) {
  return wN(this, e).get(e);
}
var ON = _N, AN = jl;
function SN(e) {
  return AN(this, e).has(e);
}
var PN = SN, EN = jl;
function TN(e, t) {
  var r = EN(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var $N = TN, CN = hN, MN = xN, IN = ON, kN = PN, jN = $N;
function yo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yo.prototype.clear = CN;
yo.prototype.delete = MN;
yo.prototype.get = IN;
yo.prototype.has = kN;
yo.prototype.set = jN;
var yv = yo, r_ = yv, RN = "Expected a function";
function mv(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(RN);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (mv.Cache || r_)(), r;
}
mv.Cache = r_;
var n_ = mv;
const NN = /* @__PURE__ */ Qe(n_);
var DN = n_, LN = 500;
function BN(e) {
  var t = DN(e, function(n) {
    return r.size === LN && r.clear(), n;
  }), r = t.cache;
  return t;
}
var FN = BN, WN = FN, zN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, UN = /\\(\\)?/g, HN = WN(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zN, function(r, n, i, a) {
    t.push(i ? a.replace(UN, "$1") : n || r);
  }), t;
}), GN = HN;
function KN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var bv = KN, xb = iu, qN = bv, VN = rr, YN = ho, XN = 1 / 0, wb = xb ? xb.prototype : void 0, _b = wb ? wb.toString : void 0;
function i_(e) {
  if (typeof e == "string")
    return e;
  if (VN(e))
    return qN(e, i_) + "";
  if (YN(e))
    return _b ? _b.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -XN ? "-0" : t;
}
var ZN = i_, JN = ZN;
function QN(e) {
  return e == null ? "" : JN(e);
}
var a_ = QN, eD = rr, tD = hv, rD = GN, nD = a_;
function iD(e, t) {
  return eD(e) ? e : tD(e, t) ? [e] : rD(nD(e));
}
var o_ = iD, aD = ho, oD = 1 / 0;
function sD(e) {
  if (typeof e == "string" || aD(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -oD ? "-0" : t;
}
var Rl = sD, uD = o_, cD = Rl;
function lD(e, t) {
  t = uD(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[cD(t[r++])];
  return r && r == n ? e : void 0;
}
var xv = lD, fD = xv;
function dD(e, t, r) {
  var n = e == null ? void 0 : fD(e, t);
  return n === void 0 ? r : n;
}
var s_ = dD;
const gr = /* @__PURE__ */ Qe(s_);
function hD(e) {
  return e == null;
}
var pD = hD;
const Te = /* @__PURE__ */ Qe(pD);
var vD = Un, gD = rr, yD = Hn, mD = "[object String]";
function bD(e) {
  return typeof e == "string" || !gD(e) && yD(e) && vD(e) == mD;
}
var xD = bD;
const au = /* @__PURE__ */ Qe(xD);
var Ph = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function wD() {
  if (Ob) return Ke;
  Ob = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var E = x.$$typeof;
      switch (E) {
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
                case u:
                case d:
                case w:
                case g:
                case s:
                  return x;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(x) {
    return S(x) === f;
  }
  return Ke.AsyncMode = l, Ke.ConcurrentMode = f, Ke.ContextConsumer = u, Ke.ContextProvider = s, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = n, Ke.Lazy = w, Ke.Memo = g, Ke.Portal = r, Ke.Profiler = a, Ke.StrictMode = i, Ke.Suspense = h, Ke.isAsyncMode = function(x) {
    return _(x) || S(x) === l;
  }, Ke.isConcurrentMode = _, Ke.isContextConsumer = function(x) {
    return S(x) === u;
  }, Ke.isContextProvider = function(x) {
    return S(x) === s;
  }, Ke.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ke.isForwardRef = function(x) {
    return S(x) === d;
  }, Ke.isFragment = function(x) {
    return S(x) === n;
  }, Ke.isLazy = function(x) {
    return S(x) === w;
  }, Ke.isMemo = function(x) {
    return S(x) === g;
  }, Ke.isPortal = function(x) {
    return S(x) === r;
  }, Ke.isProfiler = function(x) {
    return S(x) === a;
  }, Ke.isStrictMode = function(x) {
    return S(x) === i;
  }, Ke.isSuspense = function(x) {
    return S(x) === h;
  }, Ke.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === h || x === v || typeof x == "object" && x !== null && (x.$$typeof === w || x.$$typeof === g || x.$$typeof === s || x.$$typeof === u || x.$$typeof === d || x.$$typeof === b || x.$$typeof === A || x.$$typeof === O || x.$$typeof === y);
  }, Ke.typeOf = S, Ke;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ab;
function _D() {
  return Ab || (Ab = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === w || j.$$typeof === g || j.$$typeof === s || j.$$typeof === u || j.$$typeof === d || j.$$typeof === b || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
    }
    function _(j) {
      if (typeof j == "object" && j !== null) {
        var Ee = j.$$typeof;
        switch (Ee) {
          case t:
            var be = j.type;
            switch (be) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return be;
              default:
                var We = be && be.$$typeof;
                switch (We) {
                  case u:
                  case d:
                  case w:
                  case g:
                  case s:
                    return We;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var x = l, E = f, C = u, M = s, F = t, D = d, B = n, N = w, U = g, z = r, J = a, H = i, Z = h, V = !1;
    function se(j) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === u;
    }
    function ae(j) {
      return _(j) === s;
    }
    function ce(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function he(j) {
      return _(j) === d;
    }
    function ge(j) {
      return _(j) === n;
    }
    function xe(j) {
      return _(j) === w;
    }
    function ye(j) {
      return _(j) === g;
    }
    function we(j) {
      return _(j) === r;
    }
    function ne(j) {
      return _(j) === a;
    }
    function ue(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    qe.AsyncMode = x, qe.ConcurrentMode = E, qe.ContextConsumer = C, qe.ContextProvider = M, qe.Element = F, qe.ForwardRef = D, qe.Fragment = B, qe.Lazy = N, qe.Memo = U, qe.Portal = z, qe.Profiler = J, qe.StrictMode = H, qe.Suspense = Z, qe.isAsyncMode = se, qe.isConcurrentMode = G, qe.isContextConsumer = X, qe.isContextProvider = ae, qe.isElement = ce, qe.isForwardRef = he, qe.isFragment = ge, qe.isLazy = xe, qe.isMemo = ye, qe.isPortal = we, qe.isProfiler = ne, qe.isStrictMode = ue, qe.isSuspense = pe, qe.isValidElementType = S, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Ph.exports = wD() : Ph.exports = _D();
var Eh = Ph.exports, OD = Un, AD = Hn, SD = "[object Number]";
function PD(e) {
  return typeof e == "number" || AD(e) && OD(e) == SD;
}
var u_ = PD;
const ED = /* @__PURE__ */ Qe(u_);
var TD = u_;
function $D(e) {
  return TD(e) && e != +e;
}
var CD = $D;
const mo = /* @__PURE__ */ Qe(CD);
var Gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Ui = function(t) {
  return au(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return ED(t) && !mo(t);
}, Tt = function(t) {
  return oe(t) || au(t);
}, MD = 0, oa = function(t) {
  var r = ++MD;
  return "".concat(t || "").concat(r);
}, Kt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !au(t))
    return n;
  var a;
  if (Ui(t)) {
    var s = t.indexOf("%");
    a = r * parseFloat(t.slice(0, s)) / 100;
  } else
    a = +t;
  return mo(a) && (a = n), i && a > r && (a = r), a;
}, fi = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, ID = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Pt = function(t, r) {
  return oe(t) && oe(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Ec(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : gr(n, t)) === r;
  });
}
function Na(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Th(e) {
  "@babel/helpers - typeof";
  return Th = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Th(e);
}
var kD = ["viewBox", "children"], jD = [
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
], Sb = ["points", "pathLength"], Wd = {
  svg: kD,
  polygon: Sb,
  polyline: Sb
}, wv = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Tc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ qr(t) && (n = t.props), !po(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    wv.includes(a) && (i[a] = r || function(s) {
      return n[a](n, s);
    });
  }), i;
}, RD = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Ji = function(t, r, n) {
  if (!po(t) || Th(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    wv.includes(a) && typeof s == "function" && (i || (i = {}), i[a] = RD(s, r, n));
  }), i;
}, ND = ["children"], DD = ["children"];
function Pb(e, t) {
  if (e == null) return {};
  var r = LD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $h(e) {
  "@babel/helpers - typeof";
  return $h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $h(e);
}
var Eb = {
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
}, Tb = null, zd = null, _v = function e(t) {
  if (t === Tb && Array.isArray(zd))
    return zd;
  var r = [];
  return Vi.forEach(t, function(n) {
    Te(n) || (Eh.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), zd = r, Tb = t, r;
};
function yr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return kn(i);
  }) : n = [kn(t)], _v(e).forEach(function(i) {
    var a = gr(i, "type.displayName") || gr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function dr(e, t) {
  var r = yr(e, t);
  return r && r[0];
}
var $b = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, BD = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], FD = function(t) {
  return t && t.type && au(t.type) && BD.indexOf(t.type) >= 0;
}, c_ = function(t) {
  return t && $h(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, WD = function(t, r, n, i) {
  var a, s = (a = Wd == null ? void 0 : Wd[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && s.includes(r) || jD.includes(r)) || n && wv.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ qr(t) && (i = t.props), !po(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(s) {
    var u;
    WD((u = i) === null || u === void 0 ? void 0 : u[s], s, r, n) && (a[s] = i[s]);
  }), a;
}, Ch = function e(t, r) {
  if (t === r)
    return !0;
  var n = Vi.count(t);
  if (n !== Vi.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Cb(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], s = r[i];
    if (Array.isArray(a) || Array.isArray(s)) {
      if (!e(a, s))
        return !1;
    } else if (!Cb(a, s))
      return !1;
  }
  return !0;
}, Cb = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = Pb(n, ND), s = r.props || {}, u = s.children, l = Pb(s, DD);
    return i && u ? Na(a, l) && Ch(i, u) : !i && !u ? Na(a, l) : !1;
  }
  return !1;
}, Mb = function(t, r) {
  var n = [], i = {};
  return _v(t).forEach(function(a, s) {
    if (FD(a))
      n.push(a);
    else if (a) {
      var u = kn(a.type), l = r[u] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[u])) {
        var h = f(a, u, s);
        n.push(h), i[u] = !0;
      }
    }
  }), n;
}, zD = function(t) {
  var r = t && t.type;
  return r && Eb[r] ? Eb[r] : null;
}, UD = function(t, r) {
  return _v(r).indexOf(t);
}, HD = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Mh() {
  return Mh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mh.apply(this, arguments);
}
function GD(e, t) {
  if (e == null) return {};
  var r = KD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ih(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, s = e.style, u = e.title, l = e.desc, f = GD(e, HD), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Me("recharts-surface", a);
  return /* @__PURE__ */ k.createElement("svg", Mh({}, me(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ k.createElement("title", null, u), /* @__PURE__ */ k.createElement("desc", null, l), t);
}
var qD = ["children", "className"];
function kh() {
  return kh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kh.apply(this, arguments);
}
function VD(e, t) {
  if (e == null) return {};
  var r = YD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function YD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Le = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = VD(e, qD), a = Me("recharts-layer", n);
  return /* @__PURE__ */ k.createElement("g", kh({
    className: a
  }, me(i, !0), {
    ref: t
  }), r);
}), XD = process.env.NODE_ENV !== "production", Vr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (XD && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[s++];
      }));
    }
};
function ZD(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var JD = ZD, QD = JD;
function eL(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : QD(e, t, r);
}
var tL = eL, rL = "\\ud800-\\udfff", nL = "\\u0300-\\u036f", iL = "\\ufe20-\\ufe2f", aL = "\\u20d0-\\u20ff", oL = nL + iL + aL, sL = "\\ufe0e\\ufe0f", uL = "\\u200d", cL = RegExp("[" + uL + rL + oL + sL + "]");
function lL(e) {
  return cL.test(e);
}
var l_ = lL;
function fL(e) {
  return e.split("");
}
var dL = fL, f_ = "\\ud800-\\udfff", hL = "\\u0300-\\u036f", pL = "\\ufe20-\\ufe2f", vL = "\\u20d0-\\u20ff", gL = hL + pL + vL, yL = "\\ufe0e\\ufe0f", mL = "[" + f_ + "]", jh = "[" + gL + "]", Rh = "\\ud83c[\\udffb-\\udfff]", bL = "(?:" + jh + "|" + Rh + ")", d_ = "[^" + f_ + "]", h_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", p_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", xL = "\\u200d", v_ = bL + "?", g_ = "[" + yL + "]?", wL = "(?:" + xL + "(?:" + [d_, h_, p_].join("|") + ")" + g_ + v_ + ")*", _L = g_ + v_ + wL, OL = "(?:" + [d_ + jh + "?", jh, h_, p_, mL].join("|") + ")", AL = RegExp(Rh + "(?=" + Rh + ")|" + OL + _L, "g");
function SL(e) {
  return e.match(AL) || [];
}
var PL = SL, EL = dL, TL = l_, $L = PL;
function CL(e) {
  return TL(e) ? $L(e) : EL(e);
}
var ML = CL, IL = tL, kL = l_, jL = ML, RL = a_;
function NL(e) {
  return function(t) {
    t = RL(t);
    var r = kL(t) ? jL(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? IL(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var DL = NL, LL = DL, BL = LL("toUpperCase"), FL = BL;
const Nl = /* @__PURE__ */ Qe(FL);
function nt(e) {
  return function() {
    return e;
  };
}
const y_ = Math.cos, $c = Math.sin, en = Math.sqrt, Cc = Math.PI, Dl = 2 * Cc, Nh = Math.PI, Dh = 2 * Nh, Bi = 1e-6, WL = Dh - Bi;
function m_(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function zL(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return m_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class UL {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? m_ : zL(t);
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
  bezierCurveTo(t, r, n, i, a, s) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let s = this._x1, u = this._y1, l = n - t, f = i - r, d = s - t, h = u - r, v = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > Bi) if (!(Math.abs(h * l - f * d) > Bi) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - s, w = i - u, y = l * l + f * f, b = g * g + w * w, A = Math.sqrt(y), O = Math.sqrt(v), S = a * Math.tan((Nh - Math.acos((y + v - b) / (2 * A * O))) / 2), _ = S / O, x = S / A;
      Math.abs(_ - 1) > Bi && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * w)},${this._x1 = t + x * l},${this._y1 = r + x * f}`;
    }
  }
  arc(t, r, n, i, a, s) {
    if (t = +t, r = +r, n = +n, s = !!s, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), l = n * Math.sin(i), f = t + u, d = r + l, h = 1 ^ s, v = s ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > Bi || Math.abs(this._y1 - d) > Bi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % Dh + Dh), v > WL ? this._append`A${n},${n},0,1,${h},${t - u},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > Bi && this._append`A${n},${n},0,${+(v >= Nh)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ov(e) {
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
  }, () => new UL(t);
}
function Av(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function b_(e) {
  this._context = e;
}
b_.prototype = {
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
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ll(e) {
  return new b_(e);
}
function x_(e) {
  return e[0];
}
function w_(e) {
  return e[1];
}
function __(e, t) {
  var r = nt(!0), n = null, i = Ll, a = null, s = Ov(u);
  e = typeof e == "function" ? e : e === void 0 ? x_ : nt(e), t = typeof t == "function" ? t : t === void 0 ? w_ : nt(t);
  function u(l) {
    var f, d = (l = Av(l)).length, h, v = !1, g;
    for (n == null && (a = i(g = s())), f = 0; f <= d; ++f)
      !(f < d && r(h = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(h, f, l), +t(h, f, l));
    if (g) return a = null, g + "" || null;
  }
  return u.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : nt(+l), u) : e;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : nt(+l), u) : t;
  }, u.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : nt(!!l), u) : r;
  }, u.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n;
  }, u;
}
function uc(e, t, r) {
  var n = null, i = nt(!0), a = null, s = Ll, u = null, l = Ov(f);
  e = typeof e == "function" ? e : e === void 0 ? x_ : nt(+e), t = typeof t == "function" ? t : nt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? w_ : nt(+r);
  function f(h) {
    var v, g, w, y = (h = Av(h)).length, b, A = !1, O, S = new Array(y), _ = new Array(y);
    for (a == null && (u = s(O = l())), v = 0; v <= y; ++v) {
      if (!(v < y && i(b = h[v], v, h)) === A)
        if (A = !A)
          g = v, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), w = v - 1; w >= g; --w)
            u.point(S[w], _[w]);
          u.lineEnd(), u.areaEnd();
        }
      A && (S[v] = +e(b, v, h), _[v] = +t(b, v, h), u.point(n ? +n(b, v, h) : S[v], r ? +r(b, v, h) : _[v]));
    }
    if (O) return u = null, O + "" || null;
  }
  function d() {
    return __().defined(i).curve(s).context(a);
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
    return arguments.length ? (s = h, a != null && (u = s(a)), f) : s;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = u = null : u = s(a = h), f) : a;
  }, f;
}
class O_ {
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
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function HL(e) {
  return new O_(e, !0);
}
function GL(e) {
  return new O_(e, !1);
}
const Sv = {
  draw(e, t) {
    const r = en(t / Cc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Dl);
  }
}, KL = {
  draw(e, t) {
    const r = en(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, A_ = en(1 / 3), qL = A_ * 2, VL = {
  draw(e, t) {
    const r = en(t / qL), n = r * A_;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, YL = {
  draw(e, t) {
    const r = en(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, XL = 0.8908130915292852, S_ = $c(Cc / 10) / $c(7 * Cc / 10), ZL = $c(Dl / 10) * S_, JL = -y_(Dl / 10) * S_, QL = {
  draw(e, t) {
    const r = en(t * XL), n = ZL * r, i = JL * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const s = Dl * a / 5, u = y_(s), l = $c(s);
      e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i);
    }
    e.closePath();
  }
}, Ud = en(3), eB = {
  draw(e, t) {
    const r = -en(t / (Ud * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ud * r, -r), e.lineTo(Ud * r, -r), e.closePath();
  }
}, Er = -0.5, Tr = en(3) / 2, Lh = 1 / en(12), tB = (Lh / 2 + 1) * 3, rB = {
  draw(e, t) {
    const r = en(t / tB), n = r / 2, i = r * Lh, a = n, s = r * Lh + r, u = -a, l = s;
    e.moveTo(n, i), e.lineTo(a, s), e.lineTo(u, l), e.lineTo(Er * n - Tr * i, Tr * n + Er * i), e.lineTo(Er * a - Tr * s, Tr * a + Er * s), e.lineTo(Er * u - Tr * l, Tr * u + Er * l), e.lineTo(Er * n + Tr * i, Er * i - Tr * n), e.lineTo(Er * a + Tr * s, Er * s - Tr * a), e.lineTo(Er * u + Tr * l, Er * l - Tr * u), e.closePath();
  }
};
function nB(e, t) {
  let r = null, n = Ov(i);
  e = typeof e == "function" ? e : nt(e || Sv), t = typeof t == "function" ? t : nt(t === void 0 ? 64 : +t);
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
function Mc() {
}
function Ic(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function P_(e) {
  this._context = e;
}
P_.prototype = {
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
        Ic(this, this._x1, this._y1);
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
      default:
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function iB(e) {
  return new P_(e);
}
function E_(e) {
  this._context = e;
}
E_.prototype = {
  areaStart: Mc,
  areaEnd: Mc,
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
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function aB(e) {
  return new E_(e);
}
function T_(e) {
  this._context = e;
}
T_.prototype = {
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
      default:
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function oB(e) {
  return new T_(e);
}
function $_(e) {
  this._context = e;
}
$_.prototype = {
  areaStart: Mc,
  areaEnd: Mc,
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
function sB(e) {
  return new $_(e);
}
function Ib(e) {
  return e < 0 ? -1 : 1;
}
function kb(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), s = (r - e._y1) / (i || n < 0 && -0), u = (a * i + s * n) / (n + i);
  return (Ib(a) + Ib(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(u)) || 0;
}
function jb(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Hd(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, s = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, s - u * r, a, s);
}
function kc(e) {
  this._context = e;
}
kc.prototype = {
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
        Hd(this, this._t0, jb(this, this._t0));
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
          this._point = 3, Hd(this, jb(this, r = kb(this, e, t)), r);
          break;
        default:
          Hd(this, this._t0, r = kb(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function C_(e) {
  this._context = new M_(e);
}
(C_.prototype = Object.create(kc.prototype)).point = function(e, t) {
  kc.prototype.point.call(this, t, e);
};
function M_(e) {
  this._context = e;
}
M_.prototype = {
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
function uB(e) {
  return new kc(e);
}
function cB(e) {
  return new C_(e);
}
function I_(e) {
  this._context = e;
}
I_.prototype = {
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
        for (var n = Rb(e), i = Rb(t), a = 0, s = 1; s < r; ++a, ++s)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[s], t[s]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Rb(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), s = new Array(r);
  for (i[0] = 0, a[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, s[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, s[t] -= n * s[t - 1];
  for (i[r - 1] = s[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (s[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function lB(e) {
  return new I_(e);
}
function Bl(e, t) {
  this._context = e, this._t = t;
}
Bl.prototype = {
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
function fB(e) {
  return new Bl(e, 0.5);
}
function dB(e) {
  return new Bl(e, 0);
}
function hB(e) {
  return new Bl(e, 1);
}
function Wa(e, t) {
  if ((s = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], s, u = a.length; r < s; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Bh(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function pB(e, t) {
  return e[t];
}
function vB(e) {
  const t = [];
  return t.key = e, t;
}
function gB() {
  var e = nt([]), t = Bh, r = Wa, n = pB;
  function i(a) {
    var s = Array.from(e.apply(this, arguments), vB), u, l = s.length, f = -1, d;
    for (const h of a)
      for (u = 0, ++f; u < l; ++u)
        (s[u][f] = [0, +n(h, s[u].key, f, a)]).data = h;
    for (u = 0, d = Av(t(s)); u < l; ++u)
      s[d[u]].index = u;
    return r(s, d), s;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : nt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : nt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Bh : typeof a == "function" ? a : nt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Wa, i) : r;
  }, i;
}
function yB(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, s; i < a; ++i) {
      for (s = r = 0; r < n; ++r) s += e[r][i][1] || 0;
      if (s) for (r = 0; r < n; ++r) e[r][i][1] /= s;
    }
    Wa(e, t);
  }
}
function mB(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var s = 0, u = 0; s < i; ++s) u += e[s][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Wa(e, t);
  }
}
function bB(e, t) {
  if (!(!((s = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, s; n < a; ++n) {
      for (var u = 0, l = 0, f = 0; u < s; ++u) {
        for (var d = e[t[u]], h = d[n][1] || 0, v = d[n - 1][1] || 0, g = (h - v) / 2, w = 0; w < u; ++w) {
          var y = e[t[w]], b = y[n][1] || 0, A = y[n - 1][1] || 0;
          g += b - A;
        }
        l += h, f += g * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Wa(e, t);
  }
}
function ms(e) {
  "@babel/helpers - typeof";
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ms(e);
}
var xB = ["type", "size", "sizeType"];
function Fh() {
  return Fh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fh.apply(this, arguments);
}
function Nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      wB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wB(e, t, r) {
  return t = _B(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _B(e) {
  var t = OB(e, "string");
  return ms(t) == "symbol" ? t : String(t);
}
function OB(e, t) {
  if (ms(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ms(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AB(e, t) {
  if (e == null) return {};
  var r = SB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var k_ = {
  symbolCircle: Sv,
  symbolCross: KL,
  symbolDiamond: VL,
  symbolSquare: YL,
  symbolStar: QL,
  symbolTriangle: eB,
  symbolWye: rB
}, PB = Math.PI / 180, EB = function(t) {
  var r = "symbol".concat(Nl(t));
  return k_[r] || Sv;
}, TB = function(t, r, n) {
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
      var i = 18 * PB;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, $B = function(t, r) {
  k_["symbol".concat(Nl(t))] = r;
}, Pv = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, s = t.sizeType, u = s === void 0 ? "area" : s, l = AB(t, xB), f = Db(Db({}, l), {}, {
    type: n,
    size: a,
    sizeType: u
  }), d = function() {
    var b = EB(n), A = nB().type(b).size(TB(a, u, n));
    return A();
  }, h = f.className, v = f.cx, g = f.cy, w = me(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ k.createElement("path", Fh({}, w, {
    className: Me("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Pv.registerSymbol = $B;
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
function Wh() {
  return Wh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wh.apply(this, arguments);
}
function Lb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function CB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lb(Object(r), !0).forEach(function(n) {
      bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R_(n.key), n);
  }
}
function kB(e, t, r) {
  return t && IB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jB(e, t, r) {
  return t = jc(t), RB(e, j_() ? Reflect.construct(t, r || [], jc(e).constructor) : t.apply(e, r));
}
function RB(e, t) {
  if (t && (za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return NB(e);
}
function NB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j_ = function() {
    return !!e;
  })();
}
function jc(e) {
  return jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jc(e);
}
function DB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zh(e, t);
}
function zh(e, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e, t);
}
function bs(e, t, r) {
  return t = R_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R_(e) {
  var t = LB(e, "string");
  return za(t) == "symbol" ? t : String(t);
}
function LB(e, t) {
  if (za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = 32, Ev = /* @__PURE__ */ function(e) {
  DB(t, e);
  function t() {
    return MB(this, t), jB(this, t, arguments);
  }
  return kB(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = $r / 2, s = $r / 6, u = $r / 3, l = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ k.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: $r,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ k.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat($r, "M").concat(2 * u, ",").concat(a, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ k.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat($r / 8, "h").concat($r, "v").concat($r * 3 / 4, "h").concat(-$r, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ k.isValidElement(n.legendIcon)) {
          var f = CB({}, n);
          return delete f.legendIcon, /* @__PURE__ */ k.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ k.createElement(Pv, {
          fill: l,
          cx: a,
          cy: a,
          size: $r,
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
      var n = this, i = this.props, a = i.payload, s = i.iconSize, u = i.layout, l = i.formatter, f = i.inactiveColor, d = {
        x: 0,
        y: 0,
        width: $r,
        height: $r
      }, h = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, w) {
        var y = g.formatter || l, b = Me(bs(bs({
          "recharts-legend-item": !0
        }, "legend-item-".concat(w), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var A = Pe(g.value) ? null : g.value;
        Vr(
          !Pe(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = g.inactive ? f : g.color;
        return /* @__PURE__ */ k.createElement("li", Wh({
          className: b,
          style: h,
          key: "legend-item-".concat(w)
        }, Ji(n.props, g, w)), /* @__PURE__ */ k.createElement(Ih, {
          width: s,
          height: s,
          viewBox: d,
          style: v
        }, n.renderIcon(g)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, y ? y(A, g, w) : A));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, s = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]), t;
}(Nr);
bs(Ev, "displayName", "Legend");
bs(Ev, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var BB = kl;
function FB() {
  this.__data__ = new BB(), this.size = 0;
}
var WB = FB;
function zB(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var UB = zB;
function HB(e) {
  return this.__data__.get(e);
}
var GB = HB;
function KB(e) {
  return this.__data__.has(e);
}
var qB = KB, VB = kl, YB = gv, XB = yv, ZB = 200;
function JB(e, t) {
  var r = this.__data__;
  if (r instanceof VB) {
    var n = r.__data__;
    if (!YB || n.length < ZB - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new XB(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var QB = JB, eF = kl, tF = WB, rF = UB, nF = GB, iF = qB, aF = QB;
function bo(e) {
  var t = this.__data__ = new eF(e);
  this.size = t.size;
}
bo.prototype.clear = tF;
bo.prototype.delete = rF;
bo.prototype.get = nF;
bo.prototype.has = iF;
bo.prototype.set = aF;
var N_ = bo, oF = "__lodash_hash_undefined__";
function sF(e) {
  return this.__data__.set(e, oF), this;
}
var uF = sF;
function cF(e) {
  return this.__data__.has(e);
}
var lF = cF, fF = yv, dF = uF, hF = lF;
function Rc(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fF(); ++t < r; )
    this.add(e[t]);
}
Rc.prototype.add = Rc.prototype.push = dF;
Rc.prototype.has = hF;
var D_ = Rc;
function pF(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var L_ = pF;
function vF(e, t) {
  return e.has(t);
}
var B_ = vF, gF = D_, yF = L_, mF = B_, bF = 1, xF = 2;
function wF(e, t, r, n, i, a) {
  var s = r & bF, u = e.length, l = t.length;
  if (u != l && !(s && l > u))
    return !1;
  var f = a.get(e), d = a.get(t);
  if (f && d)
    return f == t && d == e;
  var h = -1, v = !0, g = r & xF ? new gF() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < u; ) {
    var w = e[h], y = t[h];
    if (n)
      var b = s ? n(y, w, h, t, e, a) : n(w, y, h, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!yF(t, function(A, O) {
        if (!mF(g, O) && (w === A || i(w, A, r, n, a)))
          return g.push(O);
      })) {
        v = !1;
        break;
      }
    } else if (!(w === y || i(w, y, r, n, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var F_ = wF, _F = hn, OF = _F.Uint8Array, AF = OF;
function SF(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var PF = SF;
function EF(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Tv = EF, Bb = iu, Fb = AF, TF = vv, $F = F_, CF = PF, MF = Tv, IF = 1, kF = 2, jF = "[object Boolean]", RF = "[object Date]", NF = "[object Error]", DF = "[object Map]", LF = "[object Number]", BF = "[object RegExp]", FF = "[object Set]", WF = "[object String]", zF = "[object Symbol]", UF = "[object ArrayBuffer]", HF = "[object DataView]", Wb = Bb ? Bb.prototype : void 0, Gd = Wb ? Wb.valueOf : void 0;
function GF(e, t, r, n, i, a, s) {
  switch (r) {
    case HF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case UF:
      return !(e.byteLength != t.byteLength || !a(new Fb(e), new Fb(t)));
    case jF:
    case RF:
    case LF:
      return TF(+e, +t);
    case NF:
      return e.name == t.name && e.message == t.message;
    case BF:
    case WF:
      return e == t + "";
    case DF:
      var u = CF;
    case FF:
      var l = n & IF;
      if (u || (u = MF), e.size != t.size && !l)
        return !1;
      var f = s.get(e);
      if (f)
        return f == t;
      n |= kF, s.set(e, t);
      var d = $F(u(e), u(t), n, i, a, s);
      return s.delete(e), d;
    case zF:
      if (Gd)
        return Gd.call(e) == Gd.call(t);
  }
  return !1;
}
var KF = GF;
function qF(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var W_ = qF, VF = W_, YF = rr;
function XF(e, t, r) {
  var n = t(e);
  return YF(e) ? n : VF(n, r(e));
}
var ZF = XF;
function JF(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var QF = JF;
function eW() {
  return [];
}
var tW = eW, rW = QF, nW = tW, iW = Object.prototype, aW = iW.propertyIsEnumerable, zb = Object.getOwnPropertySymbols, oW = zb ? function(e) {
  return e == null ? [] : (e = Object(e), rW(zb(e), function(t) {
    return aW.call(e, t);
  }));
} : nW, sW = oW;
function uW(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var cW = uW, lW = Un, fW = Hn, dW = "[object Arguments]";
function hW(e) {
  return fW(e) && lW(e) == dW;
}
var pW = hW, Ub = pW, vW = Hn, z_ = Object.prototype, gW = z_.hasOwnProperty, yW = z_.propertyIsEnumerable, mW = Ub(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ub : function(e) {
  return vW(e) && gW.call(e, "callee") && !yW.call(e, "callee");
}, $v = mW, Nc = { exports: {} };
function bW() {
  return !1;
}
var xW = bW;
Nc.exports;
(function(e, t) {
  var r = hn, n = xW, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, u = s ? r.Buffer : void 0, l = u ? u.isBuffer : void 0, f = l || n;
  e.exports = f;
})(Nc, Nc.exports);
var U_ = Nc.exports, wW = 9007199254740991, _W = /^(?:0|[1-9]\d*)$/;
function OW(e, t) {
  var r = typeof e;
  return t = t ?? wW, !!t && (r == "number" || r != "symbol" && _W.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Cv = OW, AW = 9007199254740991;
function SW(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= AW;
}
var Mv = SW, PW = Un, EW = Mv, TW = Hn, $W = "[object Arguments]", CW = "[object Array]", MW = "[object Boolean]", IW = "[object Date]", kW = "[object Error]", jW = "[object Function]", RW = "[object Map]", NW = "[object Number]", DW = "[object Object]", LW = "[object RegExp]", BW = "[object Set]", FW = "[object String]", WW = "[object WeakMap]", zW = "[object ArrayBuffer]", UW = "[object DataView]", HW = "[object Float32Array]", GW = "[object Float64Array]", KW = "[object Int8Array]", qW = "[object Int16Array]", VW = "[object Int32Array]", YW = "[object Uint8Array]", XW = "[object Uint8ClampedArray]", ZW = "[object Uint16Array]", JW = "[object Uint32Array]", ut = {};
ut[HW] = ut[GW] = ut[KW] = ut[qW] = ut[VW] = ut[YW] = ut[XW] = ut[ZW] = ut[JW] = !0;
ut[$W] = ut[CW] = ut[zW] = ut[MW] = ut[UW] = ut[IW] = ut[kW] = ut[jW] = ut[RW] = ut[NW] = ut[DW] = ut[LW] = ut[BW] = ut[FW] = ut[WW] = !1;
function QW(e) {
  return TW(e) && EW(e.length) && !!ut[PW(e)];
}
var e3 = QW;
function t3(e) {
  return function(t) {
    return e(t);
  };
}
var H_ = t3, Dc = { exports: {} };
Dc.exports;
(function(e, t) {
  var r = Q1, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, u = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Dc, Dc.exports);
var r3 = Dc.exports, n3 = e3, i3 = H_, Hb = r3, Gb = Hb && Hb.isTypedArray, a3 = Gb ? i3(Gb) : n3, G_ = a3, o3 = cW, s3 = $v, u3 = rr, c3 = U_, l3 = Cv, f3 = G_, d3 = Object.prototype, h3 = d3.hasOwnProperty;
function p3(e, t) {
  var r = u3(e), n = !r && s3(e), i = !r && !n && c3(e), a = !r && !n && !i && f3(e), s = r || n || i || a, u = s ? o3(e.length, String) : [], l = u.length;
  for (var f in e)
    (t || h3.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    l3(f, l))) && u.push(f);
  return u;
}
var v3 = p3, g3 = Object.prototype;
function y3(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || g3;
  return e === r;
}
var m3 = y3;
function b3(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var K_ = b3, x3 = K_, w3 = x3(Object.keys, Object), _3 = w3, O3 = m3, A3 = _3, S3 = Object.prototype, P3 = S3.hasOwnProperty;
function E3(e) {
  if (!O3(e))
    return A3(e);
  var t = [];
  for (var r in Object(e))
    P3.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var T3 = E3, $3 = pv, C3 = Mv;
function M3(e) {
  return e != null && C3(e.length) && !$3(e);
}
var ou = M3, I3 = v3, k3 = T3, j3 = ou;
function R3(e) {
  return j3(e) ? I3(e) : k3(e);
}
var Fl = R3, N3 = ZF, D3 = sW, L3 = Fl;
function B3(e) {
  return N3(e, L3, D3);
}
var F3 = B3, Kb = F3, W3 = 1, z3 = Object.prototype, U3 = z3.hasOwnProperty;
function H3(e, t, r, n, i, a) {
  var s = r & W3, u = Kb(e), l = u.length, f = Kb(t), d = f.length;
  if (l != d && !s)
    return !1;
  for (var h = l; h--; ) {
    var v = u[h];
    if (!(s ? v in t : U3.call(t, v)))
      return !1;
  }
  var g = a.get(e), w = a.get(t);
  if (g && w)
    return g == t && w == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var b = s; ++h < l; ) {
    v = u[h];
    var A = e[v], O = t[v];
    if (n)
      var S = s ? n(O, A, v, t, e, a) : n(A, O, v, e, t, a);
    if (!(S === void 0 ? A === O || i(A, O, r, n, a) : S)) {
      y = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (y && !b) {
    var _ = e.constructor, x = t.constructor;
    _ != x && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var G3 = H3, K3 = aa, q3 = hn, V3 = K3(q3, "DataView"), Y3 = V3, X3 = aa, Z3 = hn, J3 = X3(Z3, "Promise"), Q3 = J3, ez = aa, tz = hn, rz = ez(tz, "Set"), q_ = rz, nz = aa, iz = hn, az = nz(iz, "WeakMap"), oz = az, Uh = Y3, Hh = gv, Gh = Q3, Kh = q_, qh = oz, V_ = Un, xo = t_, qb = "[object Map]", sz = "[object Object]", Vb = "[object Promise]", Yb = "[object Set]", Xb = "[object WeakMap]", Zb = "[object DataView]", uz = xo(Uh), cz = xo(Hh), lz = xo(Gh), fz = xo(Kh), dz = xo(qh), Fi = V_;
(Uh && Fi(new Uh(new ArrayBuffer(1))) != Zb || Hh && Fi(new Hh()) != qb || Gh && Fi(Gh.resolve()) != Vb || Kh && Fi(new Kh()) != Yb || qh && Fi(new qh()) != Xb) && (Fi = function(e) {
  var t = V_(e), r = t == sz ? e.constructor : void 0, n = r ? xo(r) : "";
  if (n)
    switch (n) {
      case uz:
        return Zb;
      case cz:
        return qb;
      case lz:
        return Vb;
      case fz:
        return Yb;
      case dz:
        return Xb;
    }
  return t;
});
var hz = Fi, Kd = N_, pz = F_, vz = KF, gz = G3, Jb = hz, Qb = rr, e0 = U_, yz = G_, mz = 1, t0 = "[object Arguments]", r0 = "[object Array]", cc = "[object Object]", bz = Object.prototype, n0 = bz.hasOwnProperty;
function xz(e, t, r, n, i, a) {
  var s = Qb(e), u = Qb(t), l = s ? r0 : Jb(e), f = u ? r0 : Jb(t);
  l = l == t0 ? cc : l, f = f == t0 ? cc : f;
  var d = l == cc, h = f == cc, v = l == f;
  if (v && e0(e)) {
    if (!e0(t))
      return !1;
    s = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new Kd()), s || yz(e) ? pz(e, t, r, n, i, a) : vz(e, t, l, r, n, i, a);
  if (!(r & mz)) {
    var g = d && n0.call(e, "__wrapped__"), w = h && n0.call(t, "__wrapped__");
    if (g || w) {
      var y = g ? e.value() : e, b = w ? t.value() : t;
      return a || (a = new Kd()), i(y, b, r, n, a);
    }
  }
  return v ? (a || (a = new Kd()), gz(e, t, r, n, i, a)) : !1;
}
var wz = xz, _z = wz, i0 = Hn;
function Y_(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !i0(e) && !i0(t) ? e !== e && t !== t : _z(e, t, r, n, Y_, i);
}
var Iv = Y_, Oz = N_, Az = Iv, Sz = 1, Pz = 2;
function Ez(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var l = u[0], f = e[l], d = u[1];
    if (s && u[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var h = new Oz();
      if (n)
        var v = n(f, d, l, e, t, h);
      if (!(v === void 0 ? Az(d, f, Sz | Pz, n, h) : v))
        return !1;
    }
  }
  return !0;
}
var Tz = Ez, $z = wi;
function Cz(e) {
  return e === e && !$z(e);
}
var X_ = Cz, Mz = X_, Iz = Fl;
function kz(e) {
  for (var t = Iz(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Mz(i)];
  }
  return t;
}
var jz = kz;
function Rz(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Z_ = Rz, Nz = Tz, Dz = jz, Lz = Z_;
function Bz(e) {
  var t = Dz(e);
  return t.length == 1 && t[0][2] ? Lz(t[0][0], t[0][1]) : function(r) {
    return r === e || Nz(r, e, t);
  };
}
var Fz = Bz;
function Wz(e, t) {
  return e != null && t in Object(e);
}
var zz = Wz, Uz = o_, Hz = $v, Gz = rr, Kz = Cv, qz = Mv, Vz = Rl;
function Yz(e, t, r) {
  t = Uz(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = Vz(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && qz(i) && Kz(s, i) && (Gz(e) || Hz(e)));
}
var Xz = Yz, Zz = zz, Jz = Xz;
function Qz(e, t) {
  return e != null && Jz(e, t, Zz);
}
var eU = Qz, tU = Iv, rU = s_, nU = eU, iU = hv, aU = X_, oU = Z_, sU = Rl, uU = 1, cU = 2;
function lU(e, t) {
  return iU(e) && aU(t) ? oU(sU(e), t) : function(r) {
    var n = rU(r, e);
    return n === void 0 && n === t ? nU(r, e) : tU(t, n, uU | cU);
  };
}
var fU = lU;
function dU(e) {
  return e;
}
var wo = dU;
function hU(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var pU = hU, vU = xv;
function gU(e) {
  return function(t) {
    return vU(t, e);
  };
}
var yU = gU, mU = pU, bU = yU, xU = hv, wU = Rl;
function _U(e) {
  return xU(e) ? mU(wU(e)) : bU(e);
}
var OU = _U, AU = Fz, SU = fU, PU = wo, EU = rr, TU = OU;
function $U(e) {
  return typeof e == "function" ? e : e == null ? PU : typeof e == "object" ? EU(e) ? SU(e[0], e[1]) : AU(e) : TU(e);
}
var pn = $U;
function CU(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var J_ = CU;
function MU(e) {
  return e !== e;
}
var IU = MU;
function kU(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var jU = kU, RU = J_, NU = IU, DU = jU;
function LU(e, t, r) {
  return t === t ? DU(e, t, r) : RU(e, NU, r);
}
var BU = LU, FU = BU;
function WU(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && FU(e, t, 0) > -1;
}
var zU = WU;
function UU(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var HU = UU;
function GU() {
}
var KU = GU, qd = q_, qU = KU, VU = Tv, YU = 1 / 0, XU = qd && 1 / VU(new qd([, -0]))[1] == YU ? function(e) {
  return new qd(e);
} : qU, ZU = XU, JU = D_, QU = zU, e5 = HU, t5 = B_, r5 = ZU, n5 = Tv, i5 = 200;
function a5(e, t, r) {
  var n = -1, i = QU, a = e.length, s = !0, u = [], l = u;
  if (r)
    s = !1, i = e5;
  else if (a >= i5) {
    var f = t ? null : r5(e);
    if (f)
      return n5(f);
    s = !1, i = t5, l = new JU();
  } else
    l = t ? [] : u;
  e:
    for (; ++n < a; ) {
      var d = e[n], h = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, s && h === h) {
        for (var v = l.length; v--; )
          if (l[v] === h)
            continue e;
        t && l.push(h), u.push(d);
      } else i(l, h, r) || (l !== u && l.push(h), u.push(d));
    }
  return u;
}
var o5 = a5, s5 = pn, u5 = o5;
function c5(e, t) {
  return e && e.length ? u5(e, s5(t)) : [];
}
var l5 = c5;
const a0 = /* @__PURE__ */ Qe(l5);
function Q_(e, t, r) {
  return t === !0 ? a0(e, r) : Pe(t) ? a0(e, t) : e;
}
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
var f5 = ["ref"];
function o0(e, t) {
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
    t % 2 ? o0(Object(r), !0).forEach(function(n) {
      Wl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function s0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rO(n.key), n);
  }
}
function h5(e, t, r) {
  return t && s0(e.prototype, t), r && s0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p5(e, t, r) {
  return t = Lc(t), v5(e, eO() ? Reflect.construct(t, r || [], Lc(e).constructor) : t.apply(e, r));
}
function v5(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tO(e);
}
function eO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eO = function() {
    return !!e;
  })();
}
function Lc(e) {
  return Lc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lc(e);
}
function tO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vh(e, t);
}
function Vh(e, t) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vh(e, t);
}
function Wl(e, t, r) {
  return t = rO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rO(e) {
  var t = y5(e, "string");
  return Ua(t) == "symbol" ? t : String(t);
}
function y5(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m5(e, t) {
  if (e == null) return {};
  var r = b5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function x5(e) {
  return e.value;
}
function w5(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var r = m5(t, f5);
  return /* @__PURE__ */ k.createElement(Ev, r);
}
var u0 = 1, Ha = /* @__PURE__ */ function(e) {
  g5(t, e);
  function t() {
    var r;
    d5(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = p5(this, t, [].concat(i)), Wl(tO(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return h5(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > u0 || Math.abs(i.height - this.lastBoundingBox.height) > u0) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Ni({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, s = i.align, u = i.verticalAlign, l = i.margin, f = i.chartWidth, d = i.chartHeight, h, v;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (s === "center" && a === "vertical") {
          var g = this.getBBoxSnapshot();
          h = {
            left: ((f || 0) - g.width) / 2
          };
        } else
          h = s === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var w = this.getBBoxSnapshot();
          v = {
            top: ((d || 0) - w.height) / 2
          };
        } else
          v = u === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Ni(Ni({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, s = i.width, u = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = Ni(Ni({
        position: "absolute",
        width: s || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, w5(a, Ni(Ni({}, this.props), {}, {
        payload: Q_(d, f, x5)
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
}(Nr);
Wl(Ha, "displayName", "Legend");
Wl(Ha, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var c0 = iu, _5 = $v, O5 = rr, l0 = c0 ? c0.isConcatSpreadable : void 0;
function A5(e) {
  return O5(e) || _5(e) || !!(l0 && e && e[l0]);
}
var S5 = A5, P5 = W_, E5 = S5;
function nO(e, t, r, n, i) {
  var a = -1, s = e.length;
  for (r || (r = E5), i || (i = []); ++a < s; ) {
    var u = e[a];
    t > 0 && r(u) ? t > 1 ? nO(u, t - 1, r, n, i) : P5(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var iO = nO;
function T5(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), u = s.length; u--; ) {
      var l = s[e ? u : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var $5 = T5, C5 = $5, M5 = C5(), I5 = M5, k5 = I5, j5 = Fl;
function R5(e, t) {
  return e && k5(e, t, j5);
}
var aO = R5, N5 = ou;
function D5(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!N5(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var L5 = D5, B5 = aO, F5 = L5, W5 = F5(B5), kv = W5, z5 = kv, U5 = ou;
function H5(e, t) {
  var r = -1, n = U5(e) ? Array(e.length) : [];
  return z5(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
var oO = H5;
function G5(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var K5 = G5, f0 = ho;
function q5(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = f0(e), s = t !== void 0, u = t === null, l = t === t, f = f0(t);
    if (!u && !f && !a && e > t || a && s && l && !u && !f || n && s && l || !r && l || !i)
      return 1;
    if (!n && !a && !f && e < t || f && r && i && !n && !a || u && r && i || !s && i || !l)
      return -1;
  }
  return 0;
}
var V5 = q5, Y5 = V5;
function X5(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, s = i.length, u = r.length; ++n < s; ) {
    var l = Y5(i[n], a[n]);
    if (l) {
      if (n >= u)
        return l;
      var f = r[n];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Z5 = X5, Vd = bv, J5 = xv, Q5 = pn, e8 = oO, t8 = K5, r8 = H_, n8 = Z5, i8 = wo, a8 = rr;
function o8(e, t, r) {
  t.length ? t = Vd(t, function(a) {
    return a8(a) ? function(s) {
      return J5(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [i8];
  var n = -1;
  t = Vd(t, r8(Q5));
  var i = e8(e, function(a, s, u) {
    var l = Vd(t, function(f) {
      return f(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return t8(i, function(a, s) {
    return n8(a, s, r);
  });
}
var s8 = o8;
function u8(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var c8 = u8, l8 = c8, d0 = Math.max;
function f8(e, t, r) {
  return t = d0(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = d0(n.length - t, 0), s = Array(a); ++i < a; )
      s[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(s), l8(e, this, u);
  };
}
var d8 = f8;
function h8(e) {
  return function() {
    return e;
  };
}
var p8 = h8, v8 = aa, g8 = function() {
  try {
    var e = v8(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), sO = g8, y8 = p8, h0 = sO, m8 = wo, b8 = h0 ? function(e, t) {
  return h0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: y8(t),
    writable: !0
  });
} : m8, x8 = b8, w8 = 800, _8 = 16, O8 = Date.now;
function A8(e) {
  var t = 0, r = 0;
  return function() {
    var n = O8(), i = _8 - (n - r);
    if (r = n, i > 0) {
      if (++t >= w8)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var S8 = A8, P8 = x8, E8 = S8, T8 = E8(P8), $8 = T8, C8 = wo, M8 = d8, I8 = $8;
function k8(e, t) {
  return I8(M8(e, t, C8), e + "");
}
var j8 = k8, R8 = vv, N8 = ou, D8 = Cv, L8 = wi;
function B8(e, t, r) {
  if (!L8(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? N8(r) && D8(t, r.length) : n == "string" && t in r) ? R8(r[t], e) : !1;
}
var zl = B8, F8 = iO, W8 = s8, z8 = j8, p0 = zl, U8 = z8(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && p0(e, t[0], t[1]) ? t = [] : r > 2 && p0(t[0], t[1], t[2]) && (t = [t[0]]), W8(e, F8(t, 1), []);
}), H8 = U8;
const jv = /* @__PURE__ */ Qe(H8);
function xs(e) {
  "@babel/helpers - typeof";
  return xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xs(e);
}
function Yh() {
  return Yh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yh.apply(this, arguments);
}
function G8(e, t) {
  return Y8(e) || V8(e, t) || q8(e, t) || K8();
}
function K8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q8(e, t) {
  if (e) {
    if (typeof e == "string") return v0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v0(e, t);
  }
}
function v0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function V8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function Y8(e) {
  if (Array.isArray(e)) return e;
}
function g0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g0(Object(r), !0).forEach(function(n) {
      X8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X8(e, t, r) {
  return t = Z8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z8(e) {
  var t = J8(e, "string");
  return xs(t) == "symbol" ? t : String(t);
}
function J8(e, t) {
  if (xs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q8(e) {
  return Array.isArray(e) && Tt(e[0]) && Tt(e[1]) ? e.join(" ~ ") : e;
}
var e6 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, s = t.itemStyle, u = s === void 0 ? {} : s, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, w = t.labelClassName, y = t.label, b = t.labelFormatter, A = t.accessibilityLayer, O = A === void 0 ? !1 : A, S = function() {
    if (d && d.length) {
      var N = {
        padding: 0,
        margin: 0
      }, U = (v ? jv(d, v) : d).map(function(z, J) {
        if (z.type === "none")
          return null;
        var H = Yd({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: z.color || "#000"
        }, u), Z = z.formatter || h || Q8, V = z.value, se = z.name, G = V, X = se;
        if (Z && G != null && X != null) {
          var ae = Z(V, se, z, J, d);
          if (Array.isArray(ae)) {
            var ce = G8(ae, 2);
            G = ce[0], X = ce[1];
          } else
            G = ae;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ k.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(J),
            style: H
          }, Tt(X) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Tt(X) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, G), /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, z.unit || ""))
        );
      });
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: N
      }, U);
    }
    return null;
  }, _ = Yd({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), x = Yd({
    margin: 0
  }, f), E = !Te(y), C = E ? y : "", M = Me("recharts-default-tooltip", g), F = Me("recharts-tooltip-label", w);
  E && b && d !== void 0 && d !== null && (C = b(y, d));
  var D = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", Yh({
    className: M,
    style: _
  }, D), /* @__PURE__ */ k.createElement("p", {
    className: F,
    style: x
  }, /* @__PURE__ */ k.isValidElement(C) ? C : "".concat(C)), S());
};
function ws(e) {
  "@babel/helpers - typeof";
  return ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ws(e);
}
function lc(e, t, r) {
  return t = t6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t6(e) {
  var t = r6(e, "string");
  return ws(t) == "symbol" ? t : String(t);
}
function r6(e, t) {
  if (ws(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ws(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jo = "recharts-tooltip-wrapper", n6 = {
  visibility: "hidden"
};
function i6(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Me(Jo, lc(lc(lc(lc({}, "".concat(Jo, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(Jo, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(Jo, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(Jo, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function y0(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, s = e.reverseDirection, u = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && oe(a[n]))
    return a[n];
  var d = r[n] - u - i, h = r[n] + i;
  if (t[n])
    return s[n] ? d : h;
  if (s[n]) {
    var v = d, g = l[n];
    return v < g ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var w = h + u, y = l[n] + f;
  return w > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function a6(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function o6(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, s = e.tooltipBox, u = e.useTranslate3d, l = e.viewBox, f, d, h;
  return s.height > 0 && s.width > 0 && r ? (d = y0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = y0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = a6({
    translateX: d,
    translateY: h,
    useTranslate3d: u
  })) : f = n6, {
    cssProperties: f,
    cssClasses: i6({
      translateX: d,
      translateY: h,
      coordinate: r
    })
  };
}
function Ga(e) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e);
}
function m0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function b0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m0(Object(r), !0).forEach(function(n) {
      Jh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function u6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cO(n.key), n);
  }
}
function c6(e, t, r) {
  return t && u6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function l6(e, t, r) {
  return t = Bc(t), f6(e, uO() ? Reflect.construct(t, r || [], Bc(e).constructor) : t.apply(e, r));
}
function f6(e, t) {
  if (t && (Ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xh(e);
}
function uO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uO = function() {
    return !!e;
  })();
}
function Bc(e) {
  return Bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bc(e);
}
function Xh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zh(e, t);
}
function Zh(e, t) {
  return Zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zh(e, t);
}
function Jh(e, t, r) {
  return t = cO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cO(e) {
  var t = h6(e, "string");
  return Ga(t) == "symbol" ? t : String(t);
}
function h6(e, t) {
  if (Ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var x0 = 1, p6 = /* @__PURE__ */ function(e) {
  d6(t, e);
  function t() {
    var r;
    s6(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = l6(this, t, [].concat(i)), Jh(Xh(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Jh(Xh(r), "handleKeyDown", function(s) {
      if (s.key === "Escape") {
        var u, l, f, d;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && u !== void 0 ? u : 0,
            y: (f = (d = r.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && f !== void 0 ? f : 0
          }
        });
      }
    }), r;
  }
  return c6(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > x0 || Math.abs(n.height - this.state.lastBoundingBox.height) > x0) && this.setState({
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
      var n = this, i = this.props, a = i.active, s = i.allowEscapeViewBox, u = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, w = i.position, y = i.reverseDirection, b = i.useTranslate3d, A = i.viewBox, O = i.wrapperStyle, S = o6({
        allowEscapeViewBox: s,
        coordinate: d,
        offsetTopLeft: g,
        position: w,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: A
      }), _ = S.cssClasses, x = S.cssProperties, E = b0(b0({
        transition: v && a ? "transform ".concat(u, "ms ").concat(l) : void 0
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
        /* @__PURE__ */ k.createElement("div", {
          tabIndex: -1,
          className: _,
          style: E,
          ref: function(M) {
            n.wrapperNode = M;
          }
        }, f)
      );
    }
  }]), t;
}(Nr), v6 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Yr = {
  isSsr: v6(),
  get: function(t) {
    return Yr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Yr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Yr[i] = t[i];
      });
    }
  }
};
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
function w0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? w0(Object(r), !0).forEach(function(n) {
      Rv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fO(n.key), n);
  }
}
function m6(e, t, r) {
  return t && y6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b6(e, t, r) {
  return t = Fc(t), x6(e, lO() ? Reflect.construct(t, r || [], Fc(e).constructor) : t.apply(e, r));
}
function x6(e, t) {
  if (t && (Ka(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w6(e);
}
function w6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lO = function() {
    return !!e;
  })();
}
function Fc(e) {
  return Fc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fc(e);
}
function _6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qh(e, t);
}
function Qh(e, t) {
  return Qh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qh(e, t);
}
function Rv(e, t, r) {
  return t = fO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fO(e) {
  var t = O6(e, "string");
  return Ka(t) == "symbol" ? t : String(t);
}
function O6(e, t) {
  if (Ka(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ka(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A6(e) {
  return e.dataKey;
}
function S6(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(e6, t);
}
var on = /* @__PURE__ */ function(e) {
  _6(t, e);
  function t() {
    return g6(this, t), b6(this, t, arguments);
  }
  return m6(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, s = i.allowEscapeViewBox, u = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, w = i.payload, y = i.payloadUniqBy, b = i.position, A = i.reverseDirection, O = i.useTranslate3d, S = i.viewBox, _ = i.wrapperStyle, x = w ?? [];
      h && x.length && (x = Q_(w.filter(function(C) {
        return C.value != null && (C.hide !== !0 || n.props.includeHidden);
      }), y, A6));
      var E = x.length > 0;
      return /* @__PURE__ */ k.createElement(p6, {
        allowEscapeViewBox: s,
        animationDuration: u,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: g,
        position: b,
        reverseDirection: A,
        useTranslate3d: O,
        viewBox: S,
        wrapperStyle: _
      }, S6(f, _0(_0({}, this.props), {}, {
        payload: x
      })));
    }
  }]), t;
}(Nr);
Rv(on, "displayName", "Tooltip");
Rv(on, "defaultProps", {
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
  isAnimationActive: !Yr.isSsr,
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
var P6 = hn, E6 = function() {
  return P6.Date.now();
}, T6 = E6, $6 = /\s/;
function C6(e) {
  for (var t = e.length; t-- && $6.test(e.charAt(t)); )
    ;
  return t;
}
var M6 = C6, I6 = M6, k6 = /^\s+/;
function j6(e) {
  return e && e.slice(0, I6(e) + 1).replace(k6, "");
}
var R6 = j6, N6 = R6, O0 = wi, D6 = ho, A0 = NaN, L6 = /^[-+]0x[0-9a-f]+$/i, B6 = /^0b[01]+$/i, F6 = /^0o[0-7]+$/i, W6 = parseInt;
function z6(e) {
  if (typeof e == "number")
    return e;
  if (D6(e))
    return A0;
  if (O0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = O0(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = N6(e);
  var r = B6.test(e);
  return r || F6.test(e) ? W6(e.slice(2), r ? 2 : 8) : L6.test(e) ? A0 : +e;
}
var dO = z6, U6 = wi, Xd = T6, S0 = dO, H6 = "Expected a function", G6 = Math.max, K6 = Math.min;
function q6(e, t, r) {
  var n, i, a, s, u, l, f = 0, d = !1, h = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(H6);
  t = S0(t) || 0, U6(r) && (d = !!r.leading, h = "maxWait" in r, a = h ? G6(S0(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);
  function g(E) {
    var C = n, M = i;
    return n = i = void 0, f = E, s = e.apply(M, C), s;
  }
  function w(E) {
    return f = E, u = setTimeout(A, t), d ? g(E) : s;
  }
  function y(E) {
    var C = E - l, M = E - f, F = t - C;
    return h ? K6(F, a - M) : F;
  }
  function b(E) {
    var C = E - l, M = E - f;
    return l === void 0 || C >= t || C < 0 || h && M >= a;
  }
  function A() {
    var E = Xd();
    if (b(E))
      return O(E);
    u = setTimeout(A, y(E));
  }
  function O(E) {
    return u = void 0, v && n ? g(E) : (n = i = void 0, s);
  }
  function S() {
    u !== void 0 && clearTimeout(u), f = 0, n = l = i = u = void 0;
  }
  function _() {
    return u === void 0 ? s : O(Xd());
  }
  function x() {
    var E = Xd(), C = b(E);
    if (n = arguments, i = this, l = E, C) {
      if (u === void 0)
        return w(l);
      if (h)
        return clearTimeout(u), u = setTimeout(A, t), g(l);
    }
    return u === void 0 && (u = setTimeout(A, t)), s;
  }
  return x.cancel = S, x.flush = _, x;
}
var V6 = q6, Y6 = V6, X6 = wi, Z6 = "Expected a function";
function J6(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(Z6);
  return X6(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Y6(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var Q6 = J6;
const hO = /* @__PURE__ */ Qe(Q6);
function _s(e) {
  "@babel/helpers - typeof";
  return _s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _s(e);
}
function P0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P0(Object(r), !0).forEach(function(n) {
      eH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eH(e, t, r) {
  return t = tH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tH(e) {
  var t = rH(e, "string");
  return _s(t) == "symbol" ? t : String(t);
}
function rH(e, t) {
  if (_s(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_s(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nH(e, t) {
  return sH(e) || oH(e, t) || aH(e, t) || iH();
}
function iH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aH(e, t) {
  if (e) {
    if (typeof e == "string") return E0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E0(e, t);
  }
}
function E0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function sH(e) {
  if (Array.isArray(e)) return e;
}
var uH = /* @__PURE__ */ Xr(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, s = a === void 0 ? "100%" : a, u = e.height, l = u === void 0 ? "100%" : u, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, w = e.debounce, y = w === void 0 ? 0 : w, b = e.id, A = e.className, O = e.onResize, S = e.style, _ = S === void 0 ? {} : S, x = Fa(null), E = Fa();
  E.current = O, D1(t, function() {
    return Object.defineProperty(x.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), x.current;
      },
      configurable: !0
    });
  });
  var C = Nn({
    containerWidth: i.width,
    containerHeight: i.height
  }), M = nH(C, 2), F = M[0], D = M[1], B = ja(function(U, z) {
    D(function(J) {
      var H = Math.round(U), Z = Math.round(z);
      return J.containerWidth === H && J.containerHeight === Z ? J : {
        containerWidth: H,
        containerHeight: Z
      };
    });
  }, []);
  na(function() {
    var U = function(se) {
      var G, X = se[0].contentRect, ae = X.width, ce = X.height;
      B(ae, ce), (G = E.current) === null || G === void 0 || G.call(E, ae, ce);
    };
    y > 0 && (U = hO(U, y, {
      trailing: !0,
      leading: !1
    }));
    var z = new ResizeObserver(U), J = x.current.getBoundingClientRect(), H = J.width, Z = J.height;
    return B(H, Z), z.observe(x.current), function() {
      z.disconnect();
    };
  }, [B, y]);
  var N = nu(function() {
    var U = F.containerWidth, z = F.containerHeight;
    if (U < 0 || z < 0)
      return null;
    Vr(Ui(s) || Ui(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, l), Vr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var J = Ui(s) ? U : s, H = Ui(l) ? z : l;
    r && r > 0 && (J ? H = J / r : H && (J = H * r), v && H > v && (H = v)), Vr(J > 0 || H > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, J, H, s, l, d, h, r);
    var Z = !Array.isArray(g) && Eh.isElement(g) && kn(g.type).endsWith("Chart");
    return k.Children.map(g, function(V) {
      return Eh.isElement(V) ? /* @__PURE__ */ St(V, fc({
        width: J,
        height: H
      }, Z ? {
        style: fc({
          height: "100%",
          width: "100%",
          maxHeight: H,
          maxWidth: J
        }, V.props.style)
      } : {})) : V;
    });
  }, [r, g, l, v, h, d, F, s]);
  return /* @__PURE__ */ k.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: Me("recharts-responsive-container", A),
    style: fc(fc({}, _), {}, {
      width: s,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: x
  }, N);
}), Nv = function(t) {
  return null;
};
Nv.displayName = "Cell";
function Os(e) {
  "@babel/helpers - typeof";
  return Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Os(e);
}
function T0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T0(Object(r), !0).forEach(function(n) {
      cH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cH(e, t, r) {
  return t = lH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lH(e) {
  var t = fH(e, "string");
  return Os(t) == "symbol" ? t : String(t);
}
function fH(e, t) {
  if (Os(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Os(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sa = {
  widthCache: {},
  cacheCount: 0
}, dH = 2e3, hH = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, $0 = "recharts_measurement_span";
function pH(e) {
  var t = ep({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var ls = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Yr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = pH(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById($0);
    a || (a = document.createElement("span"), a.setAttribute("id", $0), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var s = ep(ep({}, hH), n);
    Object.assign(a.style, s), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), l = {
      width: u.width,
      height: u.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > dH && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, vH = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function As(e) {
  "@babel/helpers - typeof";
  return As = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, As(e);
}
function Wc(e, t) {
  return bH(e) || mH(e, t) || yH(e, t) || gH();
}
function gH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yH(e, t) {
  if (e) {
    if (typeof e == "string") return C0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C0(e, t);
  }
}
function C0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function bH(e) {
  if (Array.isArray(e)) return e;
}
function xH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _H(n.key), n);
  }
}
function wH(e, t, r) {
  return t && M0(e.prototype, t), r && M0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _H(e) {
  var t = OH(e, "string");
  return As(t) == "symbol" ? t : String(t);
}
function OH(e, t) {
  if (As(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (As(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var I0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, k0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, AH = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, SH = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, pO = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, PH = Object.keys(pO), Ca = "NaN";
function EH(e, t) {
  return e * pO[t];
}
var dc = /* @__PURE__ */ function() {
  function e(t, r) {
    xH(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !AH.test(r) && (this.num = NaN, this.unit = ""), PH.includes(r) && (this.num = EH(t, r), this.unit = "px");
  }
  return wH(e, [{
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
      var n, i = (n = SH.exec(r)) !== null && n !== void 0 ? n : [], a = Wc(i, 3), s = a[1], u = a[2];
      return new e(parseFloat(s), u ?? "");
    }
  }]), e;
}();
function vO(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = I0.exec(t)) !== null && r !== void 0 ? r : [], i = Wc(n, 4), a = i[1], s = i[2], u = i[3], l = dc.parse(a ?? ""), f = dc.parse(u ?? ""), d = s === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(I0, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = k0.exec(t)) !== null && h !== void 0 ? h : [], g = Wc(v, 4), w = g[1], y = g[2], b = g[3], A = dc.parse(w ?? ""), O = dc.parse(b ?? ""), S = y === "+" ? A.add(O) : A.subtract(O);
    if (S.isNaN())
      return Ca;
    t = t.replace(k0, S.toString());
  }
  return t;
}
var j0 = /\(([^()]*)\)/;
function TH(e) {
  for (var t = e; t.includes("("); ) {
    var r = j0.exec(t), n = Wc(r, 2), i = n[1];
    t = t.replace(j0, vO(i));
  }
  return t;
}
function $H(e) {
  var t = e.replace(/\s+/g, "");
  return t = TH(t), t = vO(t), t;
}
function CH(e) {
  try {
    return $H(e);
  } catch {
    return Ca;
  }
}
function Zd(e) {
  var t = CH(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var MH = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], IH = ["dx", "dy", "angle", "className", "breakAll"];
function tp() {
  return tp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tp.apply(this, arguments);
}
function R0(e, t) {
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
function N0(e, t) {
  return DH(e) || NH(e, t) || RH(e, t) || jH();
}
function jH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RH(e, t) {
  if (e) {
    if (typeof e == "string") return D0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D0(e, t);
  }
}
function D0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function DH(e) {
  if (Array.isArray(e)) return e;
}
var gO = /[ \f\n\r\t\v\u2028\u2029]+/, yO = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(gO));
    var s = a.map(function(l) {
      return {
        word: l,
        width: ls(l, i).width
      };
    }), u = n ? 0 : ls(" ", i).width;
    return {
      wordsWithComputedWidth: s,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, LH = function(t, r, n, i, a) {
  var s = t.maxLines, u = t.children, l = t.style, f = t.breakAll, d = oe(s), h = u, v = function() {
    var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return J.reduce(function(H, Z) {
      var V = Z.word, se = Z.width, G = H[H.length - 1];
      if (G && (i == null || a || G.width + se + n < Number(i)))
        G.words.push(V), G.width += se + n;
      else {
        var X = {
          words: [V],
          width: se
        };
        H.push(X);
      }
      return H;
    }, []);
  }, g = v(r), w = function(J) {
    return J.reduce(function(H, Z) {
      return H.width > Z.width ? H : Z;
    });
  };
  if (!d)
    return g;
  for (var y = "…", b = function(J) {
    var H = h.slice(0, J), Z = yO({
      breakAll: f,
      style: l,
      children: H + y
    }).wordsWithComputedWidth, V = v(Z), se = V.length > s || w(V).width > Number(i);
    return [se, V];
  }, A = 0, O = h.length - 1, S = 0, _; A <= O && S <= h.length - 1; ) {
    var x = Math.floor((A + O) / 2), E = x - 1, C = b(E), M = N0(C, 2), F = M[0], D = M[1], B = b(x), N = N0(B, 1), U = N[0];
    if (!F && !U && (A = x + 1), F && U && (O = x - 1), !F && U) {
      _ = D;
      break;
    }
    S++;
  }
  return _ || g;
}, L0 = function(t) {
  var r = Te(t) ? [] : t.toString().split(gO);
  return [{
    words: r
  }];
}, BH = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, s = t.breakAll, u = t.maxLines;
  if ((r || n) && !Yr.isSsr) {
    var l, f, d = yO({
      breakAll: s,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return L0(i);
    return LH({
      breakAll: s,
      children: i,
      maxLines: u,
      style: a
    }, l, f, r, n);
  }
  return L0(i);
}, B0 = "#808080", vi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, s = t.lineHeight, u = s === void 0 ? "1em" : s, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, w = t.verticalAnchor, y = w === void 0 ? "end" : w, b = t.fill, A = b === void 0 ? B0 : b, O = R0(t, MH), S = nu(function() {
    return BH({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, x = O.dy, E = O.angle, C = O.className, M = O.breakAll, F = R0(O, IH);
  if (!Tt(n) || !Tt(a))
    return null;
  var D = n + (oe(_) ? _ : 0), B = a + (oe(x) ? x : 0), N;
  switch (y) {
    case "start":
      N = Zd("calc(".concat(f, ")"));
      break;
    case "middle":
      N = Zd("calc(".concat((S.length - 1) / 2, " * -").concat(u, " + (").concat(f, " / 2))"));
      break;
    default:
      N = Zd("calc(".concat(S.length - 1, " * -").concat(u, ")"));
      break;
  }
  var U = [];
  if (h) {
    var z = S[0].width, J = O.width;
    U.push("scale(".concat((oe(J) ? J / z : 1) / z, ")"));
  }
  return E && U.push("rotate(".concat(E, ", ").concat(D, ", ").concat(B, ")")), U.length && (F.transform = U.join(" ")), /* @__PURE__ */ k.createElement("text", tp({}, me(F, !0), {
    x: D,
    y: B,
    className: Me("recharts-text", C),
    textAnchor: g,
    fill: A.includes("url") ? B0 : A
  }), S.map(function(H, Z) {
    var V = H.words.join(M ? "" : " ");
    return /* @__PURE__ */ k.createElement("tspan", {
      x: D,
      dy: Z === 0 ? N : u,
      key: V
    }, V);
  }));
};
function pi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function FH(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Dv(e) {
  let t, r, n;
  e.length !== 2 ? (t = pi, r = (u, l) => pi(e(u), l), n = (u, l) => e(u) - l) : (t = e === pi || e === FH ? e : WH, r = e, n = e);
  function i(u, l, f = 0, d = u.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(u[h], l) < 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function a(u, l, f = 0, d = u.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(u[h], l) <= 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function s(u, l, f = 0, d = u.length) {
    const h = i(u, l, f, d - 1);
    return h > f && n(u[h - 1], l) > -n(u[h], l) ? h - 1 : h;
  }
  return { left: i, center: s, right: a };
}
function WH() {
  return 0;
}
function mO(e) {
  return e === null ? NaN : +e;
}
function* zH(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const UH = Dv(pi), su = UH.right;
Dv(mO).center;
class F0 extends Map {
  constructor(t, r = KH) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(W0(this, t));
  }
  has(t) {
    return super.has(W0(this, t));
  }
  set(t, r) {
    return super.set(HH(this, t), r);
  }
  delete(t) {
    return super.delete(GH(this, t));
  }
}
function W0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function HH({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function GH({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function KH(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function qH(e = pi) {
  if (e === pi) return bO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function bO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const VH = Math.sqrt(50), YH = Math.sqrt(10), XH = Math.sqrt(2);
function zc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), s = a >= VH ? 10 : a >= YH ? 5 : a >= XH ? 2 : 1;
  let u, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / s, u = Math.round(e * f), l = Math.round(t * f), u / f < e && ++u, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * s, u = Math.round(e / f), l = Math.round(t / f), u * f < e && ++u, l * f > t && --l), l < u && 0.5 <= r && r < 2 ? zc(e, t, r * 2) : [u, l, f];
}
function rp(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, s] = n ? zc(t, e, r) : zc(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, l = new Array(u);
  if (n)
    if (s < 0) for (let f = 0; f < u; ++f) l[f] = (a - f) / -s;
    else for (let f = 0; f < u; ++f) l[f] = (a - f) * s;
  else if (s < 0) for (let f = 0; f < u; ++f) l[f] = (i + f) / -s;
  else for (let f = 0; f < u; ++f) l[f] = (i + f) * s;
  return l;
}
function np(e, t, r) {
  return t = +t, e = +e, r = +r, zc(e, t, r)[2];
}
function ip(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? np(t, e, r) : np(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function z0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function U0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function xO(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? bO : qH(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), w = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      xO(e, t, g, w, i);
    }
    const a = e[t];
    let s = r, u = n;
    for (Qo(e, r, t), i(e[n], a) > 0 && Qo(e, r, n); s < u; ) {
      for (Qo(e, s, u), ++s, --u; i(e[s], a) < 0; ) ++s;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Qo(e, r, u) : (++u, Qo(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Qo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function ZH(e, t, r) {
  if (e = Float64Array.from(zH(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return U0(e);
    if (t >= 1) return z0(e);
    var n, i = (n - 1) * t, a = Math.floor(i), s = z0(xO(e, a).subarray(0, a + 1)), u = U0(e.subarray(a + 1));
    return s + (u - s) * (i - a);
  }
}
function JH(e, t, r = mO) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), s = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return s + (u - s) * (i - a);
  }
}
function QH(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Dr(e, t) {
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
function Gn(e, t) {
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
const ap = Symbol("implicit");
function Lv() {
  var e = new F0(), t = [], r = [], n = ap;
  function i(a) {
    let s = e.get(a);
    if (s === void 0) {
      if (n !== ap) return n;
      e.set(a, s = t.push(a) - 1);
    }
    return r[s % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new F0();
    for (const s of a)
      e.has(s) || e.set(s, t.push(s) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Lv(t, r).unknown(n);
  }, Dr.apply(i, arguments), i;
}
function Ss() {
  var e = Lv().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, s, u = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, w = g ? i : n, y = g ? n : i;
    a = (y - w) / Math.max(1, v - l + f * 2), u && (a = Math.floor(a)), w += (y - w - a * (v - l)) * d, s = a * (1 - l), u && (w = Math.round(w), s = Math.round(s));
    var b = QH(v).map(function(A) {
      return w + a * A;
    });
    return r(g ? b.reverse() : b);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), h()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, i] = v, n = +n, i = +i, h()) : [n, i];
  }, e.rangeRound = function(v) {
    return [n, i] = v, n = +n, i = +i, u = !0, h();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return a;
  }, e.round = function(v) {
    return arguments.length ? (u = !!v, h()) : u;
  }, e.padding = function(v) {
    return arguments.length ? (l = Math.min(1, f = +v), h()) : l;
  }, e.paddingInner = function(v) {
    return arguments.length ? (l = Math.min(1, v), h()) : l;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (f = +v, h()) : f;
  }, e.align = function(v) {
    return arguments.length ? (d = Math.max(0, Math.min(1, v)), h()) : d;
  }, e.copy = function() {
    return Ss(t(), [n, i]).round(u).paddingInner(l).paddingOuter(f).align(d);
  }, Dr.apply(h(), arguments);
}
function wO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return wO(t());
  }, e;
}
function fs() {
  return wO(Ss.apply(null, arguments).paddingInner(1));
}
function Bv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function _O(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function uu() {
}
var Ps = 0.7, Uc = 1 / Ps, Da = "\\s*([+-]?\\d+)\\s*", Es = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eG = /^#([0-9a-f]{3,8})$/, tG = new RegExp(`^rgb\\(${Da},${Da},${Da}\\)$`), rG = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), nG = new RegExp(`^rgba\\(${Da},${Da},${Da},${Es}\\)$`), iG = new RegExp(`^rgba\\(${cn},${cn},${cn},${Es}\\)$`), aG = new RegExp(`^hsl\\(${Es},${cn},${cn}\\)$`), oG = new RegExp(`^hsla\\(${Es},${cn},${cn},${Es}\\)$`), H0 = {
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
Bv(uu, Ts, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: G0,
  // Deprecated! Use color.formatHex.
  formatHex: G0,
  formatHex8: sG,
  formatHsl: uG,
  formatRgb: K0,
  toString: K0
});
function G0() {
  return this.rgb().formatHex();
}
function sG() {
  return this.rgb().formatHex8();
}
function uG() {
  return OO(this).formatHsl();
}
function K0() {
  return this.rgb().formatRgb();
}
function Ts(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = eG.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? q0(t) : r === 3 ? new Qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? hc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? hc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = tG.exec(e)) ? new Qt(t[1], t[2], t[3], 1) : (t = rG.exec(e)) ? new Qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nG.exec(e)) ? hc(t[1], t[2], t[3], t[4]) : (t = iG.exec(e)) ? hc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = aG.exec(e)) ? X0(t[1], t[2] / 100, t[3] / 100, 1) : (t = oG.exec(e)) ? X0(t[1], t[2] / 100, t[3] / 100, t[4]) : H0.hasOwnProperty(e) ? q0(H0[e]) : e === "transparent" ? new Qt(NaN, NaN, NaN, 0) : null;
}
function q0(e) {
  return new Qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qt(e, t, r, n);
}
function cG(e) {
  return e instanceof uu || (e = Ts(e)), e ? (e = e.rgb(), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt();
}
function op(e, t, r, n) {
  return arguments.length === 1 ? cG(e) : new Qt(e, t, r, n ?? 1);
}
function Qt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Bv(Qt, op, _O(uu, {
  brighter(e) {
    return e = e == null ? Uc : Math.pow(Uc, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ps : Math.pow(Ps, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qt(Yi(this.r), Yi(this.g), Yi(this.b), Hc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: V0,
  // Deprecated! Use color.formatHex.
  formatHex: V0,
  formatHex8: lG,
  formatRgb: Y0,
  toString: Y0
}));
function V0() {
  return `#${Hi(this.r)}${Hi(this.g)}${Hi(this.b)}`;
}
function lG() {
  return `#${Hi(this.r)}${Hi(this.g)}${Hi(this.b)}${Hi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Y0() {
  const e = Hc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yi(this.r)}, ${Yi(this.g)}, ${Yi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Hi(e) {
  return e = Yi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function X0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kr(e, t, r, n);
}
function OO(e) {
  if (e instanceof Kr) return new Kr(e.h, e.s, e.l, e.opacity);
  if (e instanceof uu || (e = Ts(e)), !e) return new Kr();
  if (e instanceof Kr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), s = NaN, u = a - i, l = (a + i) / 2;
  return u ? (t === a ? s = (r - n) / u + (r < n) * 6 : r === a ? s = (n - t) / u + 2 : s = (t - r) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, s *= 60) : u = l > 0 && l < 1 ? 0 : s, new Kr(s, u, l, e.opacity);
}
function fG(e, t, r, n) {
  return arguments.length === 1 ? OO(e) : new Kr(e, t, r, n ?? 1);
}
function Kr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Bv(Kr, fG, _O(uu, {
  brighter(e) {
    return e = e == null ? Uc : Math.pow(Uc, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ps : Math.pow(Ps, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Qt(
      Jd(e >= 240 ? e - 240 : e + 120, i, n),
      Jd(e, i, n),
      Jd(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Kr(Z0(this.h), pc(this.s), pc(this.l), Hc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Hc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Z0(this.h)}, ${pc(this.s) * 100}%, ${pc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Z0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Jd(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Fv = (e) => () => e;
function dG(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function hG(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function pG(e) {
  return (e = +e) == 1 ? AO : function(t, r) {
    return r - t ? hG(t, r, e) : Fv(isNaN(t) ? r : t);
  };
}
function AO(e, t) {
  var r = t - e;
  return r ? dG(e, r) : Fv(isNaN(e) ? t : e);
}
const J0 = function e(t) {
  var r = pG(t);
  function n(i, a) {
    var s = r((i = op(i)).r, (a = op(a)).r), u = r(i.g, a.g), l = r(i.b, a.b), f = AO(i.opacity, a.opacity);
    return function(d) {
      return i.r = s(d), i.g = u(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function vG(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function gG(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yG(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), s;
  for (s = 0; s < n; ++s) i[s] = _o(e[s], t[s]);
  for (; s < r; ++s) a[s] = t[s];
  return function(u) {
    for (s = 0; s < n; ++s) a[s] = i[s](u);
    return a;
  };
}
function mG(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Gc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function bG(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = _o(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var sp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qd = new RegExp(sp.source, "g");
function xG(e) {
  return function() {
    return e;
  };
}
function wG(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _G(e, t) {
  var r = sp.lastIndex = Qd.lastIndex = 0, n, i, a, s = -1, u = [], l = [];
  for (e = e + "", t = t + ""; (n = sp.exec(e)) && (i = Qd.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[s] ? u[s] += a : u[++s] = a), (n = n[0]) === (i = i[0]) ? u[s] ? u[s] += i : u[++s] = i : (u[++s] = null, l.push({ i: s, x: Gc(n, i) })), r = Qd.lastIndex;
  return r < t.length && (a = t.slice(r), u[s] ? u[s] += a : u[++s] = a), u.length < 2 ? l[0] ? wG(l[0].x) : xG(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) u[(h = l[d]).i] = h.x(f);
    return u.join("");
  });
}
function _o(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Fv(t) : (r === "number" ? Gc : r === "string" ? (n = Ts(t)) ? (t = n, J0) : _G : t instanceof Ts ? J0 : t instanceof Date ? mG : gG(t) ? vG : Array.isArray(t) ? yG : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bG : Gc)(e, t);
}
function Wv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function OG(e, t) {
  t === void 0 && (t = e, e = _o);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(s) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(s *= n)));
    return a[u](s - u);
  };
}
function AG(e) {
  return function() {
    return e;
  };
}
function Kc(e) {
  return +e;
}
var Q0 = [0, 1];
function qt(e) {
  return e;
}
function up(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : AG(isNaN(t) ? NaN : 0.5);
}
function SG(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function PG(e, t, r) {
  var n = e[0], i = e[1], a = t[0], s = t[1];
  return i < n ? (n = up(i, n), a = r(s, a)) : (n = up(n, i), a = r(a, s)), function(u) {
    return a(n(u));
  };
}
function EG(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), s = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < n; )
    i[s] = up(e[s], e[s + 1]), a[s] = r(t[s], t[s + 1]);
  return function(u) {
    var l = su(e, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function cu(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ul() {
  var e = Q0, t = Q0, r = _o, n, i, a, s = qt, u, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return s !== qt && (s = SG(e[0], e[v - 1])), u = v > 2 ? EG : PG, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = u(e.map(n), t, r)))(n(s(v)));
  }
  return h.invert = function(v) {
    return s(i((f || (f = u(t, e.map(n), Gc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, Kc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = Wv, d();
  }, h.clamp = function(v) {
    return arguments.length ? (s = v ? !0 : qt, d()) : s !== qt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, g) {
    return n = v, i = g, d();
  };
}
function zv() {
  return Ul()(qt, qt);
}
function TG(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function qc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function qa(e) {
  return e = qc(Math.abs(e)), e ? e[1] : NaN;
}
function $G(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], s = 0, u = e[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n)); )
      u = e[s = (s + 1) % e.length];
    return a.reverse().join(t);
  };
}
function CG(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var MG = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $s(e) {
  if (!(t = MG.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Uv({
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
$s.prototype = Uv.prototype;
function Uv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Uv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function IG(e) {
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
var SO;
function kG(e, t) {
  var r = qc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (SO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = n.length;
  return a === s ? n : a > s ? n + new Array(a - s + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + qc(e, Math.max(0, t + a - 1))[0];
}
function ex(e, t) {
  var r = qc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const tx = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: TG,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ex(e * 100, t),
  r: ex,
  s: kG,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function rx(e) {
  return e;
}
var nx = Array.prototype.map, ix = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function jG(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? rx : $G(nx.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? rx : CG(nx.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = $s(h);
    var v = h.fill, g = h.align, w = h.sign, y = h.symbol, b = h.zero, A = h.width, O = h.comma, S = h.precision, _ = h.trim, x = h.type;
    x === "n" ? (O = !0, x = "g") : tx[x] || (S === void 0 && (S = 12), _ = !0, x = "g"), (b || v === "0" && g === "=") && (b = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", C = y === "$" ? n : /[%p]/.test(x) ? s : "", M = tx[x], F = /[defgprs%]/.test(x);
    S = S === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function D(B) {
      var N = E, U = C, z, J, H;
      if (x === "c")
        U = M(B) + U, B = "";
      else {
        B = +B;
        var Z = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? l : M(Math.abs(B), S), _ && (B = IG(B)), Z && +B == 0 && w !== "+" && (Z = !1), N = (Z ? w === "(" ? w : u : w === "-" || w === "(" ? "" : w) + N, U = (x === "s" ? ix[8 + SO / 3] : "") + U + (Z && w === "(" ? ")" : ""), F) {
          for (z = -1, J = B.length; ++z < J; )
            if (H = B.charCodeAt(z), 48 > H || H > 57) {
              U = (H === 46 ? i + B.slice(z + 1) : B.slice(z)) + U, B = B.slice(0, z);
              break;
            }
        }
      }
      O && !b && (B = t(B, 1 / 0));
      var V = N.length + B.length + U.length, se = V < A ? new Array(A - V + 1).join(v) : "";
      switch (O && b && (B = t(se + B, se.length ? A - U.length : 1 / 0), se = ""), g) {
        case "<":
          B = N + B + U + se;
          break;
        case "=":
          B = N + se + B + U;
          break;
        case "^":
          B = se.slice(0, V = se.length >> 1) + N + B + U + se.slice(V);
          break;
        default:
          B = se + N + B + U;
          break;
      }
      return a(B);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function d(h, v) {
    var g = f((h = $s(h), h.type = "f", h)), w = Math.max(-8, Math.min(8, Math.floor(qa(v) / 3))) * 3, y = Math.pow(10, -w), b = ix[8 + w / 3];
    return function(A) {
      return g(y * A) + b;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var vc, Hv, PO;
RG({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function RG(e) {
  return vc = jG(e), Hv = vc.format, PO = vc.formatPrefix, vc;
}
function NG(e) {
  return Math.max(0, -qa(Math.abs(e)));
}
function DG(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(qa(t) / 3))) * 3 - qa(Math.abs(e)));
}
function LG(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, qa(t) - qa(e)) + 1;
}
function EO(e, t, r, n) {
  var i = ip(e, t, r), a;
  switch (n = $s(n ?? ",f"), n.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = DG(i, s)) && (n.precision = a), PO(n, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = LG(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = NG(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Hv(n);
}
function _i(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return rp(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return EO(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, s = n[i], u = n[a], l, f, d = 10;
    for (u < s && (f = s, s = u, u = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = np(s, u, r), f === l)
        return n[i] = s, n[a] = u, t(n);
      if (f > 0)
        s = Math.floor(s / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        s = Math.ceil(s * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function Vc() {
  var e = zv();
  return e.copy = function() {
    return cu(e, Vc());
  }, Dr.apply(e, arguments), _i(e);
}
function TO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Kc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return TO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Kc) : [0, 1], _i(r);
}
function $O(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], s;
  return a < i && (s = r, r = n, n = s, s = i, i = a, a = s), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function ax(e) {
  return Math.log(e);
}
function ox(e) {
  return Math.exp(e);
}
function BG(e) {
  return -Math.log(-e);
}
function FG(e) {
  return -Math.exp(-e);
}
function WG(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function zG(e) {
  return e === 10 ? WG : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function UG(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function sx(e) {
  return (t, r) => -e(-t, r);
}
function Gv(e) {
  const t = e(ax, ox), r = t.domain;
  let n = 10, i, a;
  function s() {
    return i = UG(n), a = zG(n), r()[0] < 0 ? (i = sx(i), a = sx(a), e(BG, FG)) : e(ax, ox), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, s()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), s()) : r();
  }, t.ticks = (u) => {
    const l = r();
    let f = l[0], d = l[l.length - 1];
    const h = d < f;
    h && ([f, d] = [d, f]);
    let v = i(f), g = i(d), w, y;
    const b = u == null ? 10 : +u;
    let A = [];
    if (!(n % 1) && g - v < b) {
      if (v = Math.floor(v), g = Math.ceil(g), f > 0) {
        for (; v <= g; ++v)
          for (w = 1; w < n; ++w)
            if (y = v < 0 ? w / a(-v) : w * a(v), !(y < f)) {
              if (y > d) break;
              A.push(y);
            }
      } else for (; v <= g; ++v)
        for (w = n - 1; w >= 1; --w)
          if (y = v > 0 ? w / a(-v) : w * a(v), !(y < f)) {
            if (y > d) break;
            A.push(y);
          }
      A.length * 2 < b && (A = rp(f, d, b));
    } else
      A = rp(v, g, Math.min(g - v, b)).map(a);
    return h ? A.reverse() : A;
  }, t.tickFormat = (u, l) => {
    if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = $s(l)).precision == null && (l.trim = !0), l = Hv(l)), u === 1 / 0) return l;
    const f = Math.max(1, n * u / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r($O(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function CO() {
  const e = Gv(Ul()).domain([1, 10]);
  return e.copy = () => cu(e, CO()).base(e.base()), Dr.apply(e, arguments), e;
}
function ux(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function cx(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Kv(e) {
  var t = 1, r = e(ux(t), cx(t));
  return r.constant = function(n) {
    return arguments.length ? e(ux(t = +n), cx(t)) : t;
  }, _i(r);
}
function MO() {
  var e = Kv(Ul());
  return e.copy = function() {
    return cu(e, MO()).constant(e.constant());
  }, Dr.apply(e, arguments);
}
function lx(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function HG(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function GG(e) {
  return e < 0 ? -e * e : e * e;
}
function qv(e) {
  var t = e(qt, qt), r = 1;
  function n() {
    return r === 1 ? e(qt, qt) : r === 0.5 ? e(HG, GG) : e(lx(r), lx(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, _i(t);
}
function Vv() {
  var e = qv(Ul());
  return e.copy = function() {
    return cu(e, Vv()).exponent(e.exponent());
  }, Dr.apply(e, arguments), e;
}
function KG() {
  return Vv.apply(null, arguments).exponent(0.5);
}
function fx(e) {
  return Math.sign(e) * e * e;
}
function qG(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function IO() {
  var e = zv(), t = [0, 1], r = !1, n;
  function i(a) {
    var s = qG(e(a));
    return isNaN(s) ? n : r ? Math.round(s) : s;
  }
  return i.invert = function(a) {
    return e.invert(fx(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Kc)).map(fx)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return IO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Dr.apply(i, arguments), _i(i);
}
function kO() {
  var e = [], t = [], r = [], n;
  function i() {
    var s = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++s < u; ) r[s - 1] = JH(e, s / u);
    return a;
  }
  function a(s) {
    return s == null || isNaN(s = +s) ? n : t[su(r, s)];
  }
  return a.invertExtent = function(s) {
    var u = t.indexOf(s);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of s) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(pi), i();
  }, a.range = function(s) {
    return arguments.length ? (t = Array.from(s), i()) : t.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (n = s, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return kO().domain(e).range(t).unknown(n);
  }, Dr.apply(a, arguments);
}
function jO() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function s(l) {
    return l != null && l <= l ? i[su(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return s;
  }
  return s.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, u()) : [e, t];
  }, s.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, u()) : i.slice();
  }, s.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, s.unknown = function(l) {
    return arguments.length && (a = l), s;
  }, s.thresholds = function() {
    return n.slice();
  }, s.copy = function() {
    return jO().domain([e, t]).range(i).unknown(a);
  }, Dr.apply(_i(s), arguments);
}
function RO() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[su(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var s = t.indexOf(a);
    return [e[s - 1], e[s]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return RO().domain(e).range(t).unknown(r);
  }, Dr.apply(i, arguments);
}
const eh = /* @__PURE__ */ new Date(), th = /* @__PURE__ */ new Date();
function $t(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const s = i(a), u = i.ceil(a);
    return a - s < u - a ? s : u;
  }, i.offset = (a, s) => (t(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), i.range = (a, s, u) => {
    const l = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < s) || !(u > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (f < a && a < s);
    return l;
  }, i.filter = (a) => $t((s) => {
    if (s >= s) for (; e(s), !a(s); ) s.setTime(s - 1);
  }, (s, u) => {
    if (s >= s)
      if (u < 0) for (; ++u <= 0; )
        for (; t(s, -1), !a(s); )
          ;
      else for (; --u >= 0; )
        for (; t(s, 1), !a(s); )
          ;
  }), r && (i.count = (a, s) => (eh.setTime(+a), th.setTime(+s), e(eh), e(th), Math.floor(r(eh, th))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (s) => n(s) % a === 0 : (s) => i.count(0, s) % a === 0) : i)), i;
}
const Yc = $t(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Yc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? $t((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Yc);
Yc.range;
const Cn = 1e3, Ir = Cn * 60, Mn = Ir * 60, Dn = Mn * 24, Yv = Dn * 7, dx = Dn * 30, rh = Dn * 365, Gi = $t((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Cn);
}, (e, t) => (t - e) / Cn, (e) => e.getUTCSeconds());
Gi.range;
const Xv = $t((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Cn);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
Xv.range;
const Zv = $t((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
Zv.range;
const Jv = $t((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Cn - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * Mn);
}, (e, t) => (t - e) / Mn, (e) => e.getHours());
Jv.range;
const Qv = $t((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mn);
}, (e, t) => (t - e) / Mn, (e) => e.getUTCHours());
Qv.range;
const lu = $t(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ir) / Dn,
  (e) => e.getDate() - 1
);
lu.range;
const Hl = $t((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => e.getUTCDate() - 1);
Hl.range;
const NO = $t((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => Math.floor(e / Dn));
NO.range;
function sa(e) {
  return $t((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / Yv);
}
const Gl = sa(0), Xc = sa(1), VG = sa(2), YG = sa(3), Va = sa(4), XG = sa(5), ZG = sa(6);
Gl.range;
Xc.range;
VG.range;
YG.range;
Va.range;
XG.range;
ZG.range;
function ua(e) {
  return $t((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Yv);
}
const Kl = ua(0), Zc = ua(1), JG = ua(2), QG = ua(3), Ya = ua(4), eK = ua(5), tK = ua(6);
Kl.range;
Zc.range;
JG.range;
QG.range;
Ya.range;
eK.range;
tK.range;
const eg = $t((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
eg.range;
const tg = $t((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
tg.range;
const Ln = $t((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : $t((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ln.range;
const Bn = $t((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : $t((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Bn.range;
function DO(e, t, r, n, i, a) {
  const s = [
    [Gi, 1, Cn],
    [Gi, 5, 5 * Cn],
    [Gi, 15, 15 * Cn],
    [Gi, 30, 30 * Cn],
    [a, 1, Ir],
    [a, 5, 5 * Ir],
    [a, 15, 15 * Ir],
    [a, 30, 30 * Ir],
    [i, 1, Mn],
    [i, 3, 3 * Mn],
    [i, 6, 6 * Mn],
    [i, 12, 12 * Mn],
    [n, 1, Dn],
    [n, 2, 2 * Dn],
    [r, 1, Yv],
    [t, 1, dx],
    [t, 3, 3 * dx],
    [e, 1, rh]
  ];
  function u(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), w = g ? g.range(f, +d + 1) : [];
    return v ? w.reverse() : w;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Dv(([, , b]) => b).right(s, v);
    if (g === s.length) return e.every(ip(f / rh, d / rh, h));
    if (g === 0) return Yc.every(Math.max(ip(f, d, h), 1));
    const [w, y] = s[v / s[g - 1][2] < s[g][2] / v ? g - 1 : g];
    return w.every(y);
  }
  return [u, l];
}
const [rK, nK] = DO(Bn, tg, Kl, NO, Qv, Zv), [iK, aK] = DO(Ln, eg, Gl, lu, Jv, Xv);
function nh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ih(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function es(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function oK(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, s = e.shortDays, u = e.months, l = e.shortMonths, f = ts(i), d = rs(i), h = ts(a), v = rs(a), g = ts(s), w = rs(s), y = ts(u), b = rs(u), A = ts(l), O = rs(l), S = {
    a: Z,
    A: V,
    b: se,
    B: G,
    c: null,
    d: mx,
    e: mx,
    f: $K,
    g: BK,
    G: WK,
    H: PK,
    I: EK,
    j: TK,
    L: LO,
    m: CK,
    M: MK,
    p: X,
    q: ae,
    Q: wx,
    s: _x,
    S: IK,
    u: kK,
    U: jK,
    V: RK,
    w: NK,
    W: DK,
    x: null,
    X: null,
    y: LK,
    Y: FK,
    Z: zK,
    "%": xx
  }, _ = {
    a: ce,
    A: he,
    b: ge,
    B: xe,
    c: null,
    d: bx,
    e: bx,
    f: KK,
    g: rq,
    G: iq,
    H: UK,
    I: HK,
    j: GK,
    L: FO,
    m: qK,
    M: VK,
    p: ye,
    q: we,
    Q: wx,
    s: _x,
    S: YK,
    u: XK,
    U: ZK,
    V: JK,
    w: QK,
    W: eq,
    x: null,
    X: null,
    y: tq,
    Y: nq,
    Z: aq,
    "%": xx
  }, x = {
    a: D,
    A: B,
    b: N,
    B: U,
    c: z,
    d: gx,
    e: gx,
    f: _K,
    g: vx,
    G: px,
    H: yx,
    I: yx,
    j: mK,
    L: wK,
    m: yK,
    M: bK,
    p: F,
    q: gK,
    Q: AK,
    s: SK,
    S: xK,
    u: fK,
    U: dK,
    V: hK,
    w: lK,
    W: pK,
    x: J,
    X: H,
    y: vx,
    Y: px,
    Z: vK,
    "%": OK
  };
  S.x = E(r, S), S.X = E(n, S), S.c = E(t, S), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(ne, ue) {
    return function(pe) {
      var j = [], Ee = -1, be = 0, We = ne.length, lt, at, Vt;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++Ee < We; )
        ne.charCodeAt(Ee) === 37 && (j.push(ne.slice(be, Ee)), (at = hx[lt = ne.charAt(++Ee)]) != null ? lt = ne.charAt(++Ee) : at = lt === "e" ? " " : "0", (Vt = ue[lt]) && (lt = Vt(pe, at)), j.push(lt), be = Ee + 1);
      return j.push(ne.slice(be, Ee)), j.join("");
    };
  }
  function C(ne, ue) {
    return function(pe) {
      var j = es(1900, void 0, 1), Ee = M(j, ne, pe += "", 0), be, We;
      if (Ee != pe.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (ue && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (be = ih(es(j.y, 0, 1)), We = be.getUTCDay(), be = We > 4 || We === 0 ? Zc.ceil(be) : Zc(be), be = Hl.offset(be, (j.V - 1) * 7), j.y = be.getUTCFullYear(), j.m = be.getUTCMonth(), j.d = be.getUTCDate() + (j.w + 6) % 7) : (be = nh(es(j.y, 0, 1)), We = be.getDay(), be = We > 4 || We === 0 ? Xc.ceil(be) : Xc(be), be = lu.offset(be, (j.V - 1) * 7), j.y = be.getFullYear(), j.m = be.getMonth(), j.d = be.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), We = "Z" in j ? ih(es(j.y, 0, 1)).getUTCDay() : nh(es(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (We + 5) % 7 : j.w + j.U * 7 - (We + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, ih(j)) : nh(j);
    };
  }
  function M(ne, ue, pe, j) {
    for (var Ee = 0, be = ue.length, We = pe.length, lt, at; Ee < be; ) {
      if (j >= We) return -1;
      if (lt = ue.charCodeAt(Ee++), lt === 37) {
        if (lt = ue.charAt(Ee++), at = x[lt in hx ? ue.charAt(Ee++) : lt], !at || (j = at(ne, pe, j)) < 0) return -1;
      } else if (lt != pe.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function F(ne, ue, pe) {
    var j = f.exec(ue.slice(pe));
    return j ? (ne.p = d.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function D(ne, ue, pe) {
    var j = g.exec(ue.slice(pe));
    return j ? (ne.w = w.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function B(ne, ue, pe) {
    var j = h.exec(ue.slice(pe));
    return j ? (ne.w = v.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function N(ne, ue, pe) {
    var j = A.exec(ue.slice(pe));
    return j ? (ne.m = O.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function U(ne, ue, pe) {
    var j = y.exec(ue.slice(pe));
    return j ? (ne.m = b.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function z(ne, ue, pe) {
    return M(ne, t, ue, pe);
  }
  function J(ne, ue, pe) {
    return M(ne, r, ue, pe);
  }
  function H(ne, ue, pe) {
    return M(ne, n, ue, pe);
  }
  function Z(ne) {
    return s[ne.getDay()];
  }
  function V(ne) {
    return a[ne.getDay()];
  }
  function se(ne) {
    return l[ne.getMonth()];
  }
  function G(ne) {
    return u[ne.getMonth()];
  }
  function X(ne) {
    return i[+(ne.getHours() >= 12)];
  }
  function ae(ne) {
    return 1 + ~~(ne.getMonth() / 3);
  }
  function ce(ne) {
    return s[ne.getUTCDay()];
  }
  function he(ne) {
    return a[ne.getUTCDay()];
  }
  function ge(ne) {
    return l[ne.getUTCMonth()];
  }
  function xe(ne) {
    return u[ne.getUTCMonth()];
  }
  function ye(ne) {
    return i[+(ne.getUTCHours() >= 12)];
  }
  function we(ne) {
    return 1 + ~~(ne.getUTCMonth() / 3);
  }
  return {
    format: function(ne) {
      var ue = E(ne += "", S);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    parse: function(ne) {
      var ue = C(ne += "", !1);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    utcFormat: function(ne) {
      var ue = E(ne += "", _);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    utcParse: function(ne) {
      var ue = C(ne += "", !0);
      return ue.toString = function() {
        return ne;
      }, ue;
    }
  };
}
var hx = { "-": "", _: " ", 0: "0" }, kt = /^\s*\d+/, sK = /^%/, uK = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function cK(e) {
  return e.replace(uK, "\\$&");
}
function ts(e) {
  return new RegExp("^(?:" + e.map(cK).join("|") + ")", "i");
}
function rs(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function lK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function fK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function dK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function hK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function pK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = kt.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function vK(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function gK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function yK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function mK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function bK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function xK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function wK(e, t, r) {
  var n = kt.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function _K(e, t, r) {
  var n = kt.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function OK(e, t, r) {
  var n = sK.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function AK(e, t, r) {
  var n = kt.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function SK(e, t, r) {
  var n = kt.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function mx(e, t) {
  return Ue(e.getDate(), t, 2);
}
function PK(e, t) {
  return Ue(e.getHours(), t, 2);
}
function EK(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function TK(e, t) {
  return Ue(1 + lu.count(Ln(e), e), t, 3);
}
function LO(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function $K(e, t) {
  return LO(e, t) + "000";
}
function CK(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function MK(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function IK(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function kK(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function jK(e, t) {
  return Ue(Gl.count(Ln(e) - 1, e), t, 2);
}
function BO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Va(e) : Va.ceil(e);
}
function RK(e, t) {
  return e = BO(e), Ue(Va.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function NK(e) {
  return e.getDay();
}
function DK(e, t) {
  return Ue(Xc.count(Ln(e) - 1, e), t, 2);
}
function LK(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function BK(e, t) {
  return e = BO(e), Ue(e.getFullYear() % 100, t, 2);
}
function FK(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function WK(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Va(e) : Va.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function zK(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function bx(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function UK(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function HK(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function GK(e, t) {
  return Ue(1 + Hl.count(Bn(e), e), t, 3);
}
function FO(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function KK(e, t) {
  return FO(e, t) + "000";
}
function qK(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function VK(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function YK(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function XK(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ZK(e, t) {
  return Ue(Kl.count(Bn(e) - 1, e), t, 2);
}
function WO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ya(e) : Ya.ceil(e);
}
function JK(e, t) {
  return e = WO(e), Ue(Ya.count(Bn(e), e) + (Bn(e).getUTCDay() === 4), t, 2);
}
function QK(e) {
  return e.getUTCDay();
}
function eq(e, t) {
  return Ue(Zc.count(Bn(e) - 1, e), t, 2);
}
function tq(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function rq(e, t) {
  return e = WO(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function nq(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function iq(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ya(e) : Ya.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function aq() {
  return "+0000";
}
function xx() {
  return "%";
}
function wx(e) {
  return +e;
}
function _x(e) {
  return Math.floor(+e / 1e3);
}
var Pa, zO, UO;
oq({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function oq(e) {
  return Pa = oK(e), zO = Pa.format, Pa.parse, UO = Pa.utcFormat, Pa.utcParse, Pa;
}
function sq(e) {
  return new Date(e);
}
function uq(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function rg(e, t, r, n, i, a, s, u, l, f) {
  var d = zv(), h = d.invert, v = d.domain, g = f(".%L"), w = f(":%S"), y = f("%I:%M"), b = f("%I %p"), A = f("%a %d"), O = f("%b %d"), S = f("%B"), _ = f("%Y");
  function x(E) {
    return (l(E) < E ? g : u(E) < E ? w : s(E) < E ? y : a(E) < E ? b : n(E) < E ? i(E) < E ? A : O : r(E) < E ? S : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, uq)) : v().map(sq);
  }, d.ticks = function(E) {
    var C = v();
    return e(C[0], C[C.length - 1], E ?? 10);
  }, d.tickFormat = function(E, C) {
    return C == null ? x : f(C);
  }, d.nice = function(E) {
    var C = v();
    return (!E || typeof E.range != "function") && (E = t(C[0], C[C.length - 1], E ?? 10)), E ? v($O(C, E)) : d;
  }, d.copy = function() {
    return cu(d, rg(e, t, r, n, i, a, s, u, l, f));
  }, d;
}
function cq() {
  return Dr.apply(rg(iK, aK, Ln, eg, Gl, lu, Jv, Xv, Gi, zO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function lq() {
  return Dr.apply(rg(rK, nK, Bn, tg, Kl, Hl, Qv, Zv, Gi, UO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ql() {
  var e = 0, t = 1, r, n, i, a, s = qt, u = !1, l;
  function f(h) {
    return h == null || isNaN(h = +h) ? l : s(i === 0 ? 0.5 : (h = (a(h) - r) * i, u ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t] = h, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(h) {
    return arguments.length ? (u = !!h, f) : u;
  }, f.interpolator = function(h) {
    return arguments.length ? (s = h, f) : s;
  };
  function d(h) {
    return function(v) {
      var g, w;
      return arguments.length ? ([g, w] = v, s = h(g, w), f) : [s(0), s(1)];
    };
  }
  return f.range = d(_o), f.rangeRound = d(Wv), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function Oi(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function HO() {
  var e = _i(ql()(qt));
  return e.copy = function() {
    return Oi(e, HO());
  }, Gn.apply(e, arguments);
}
function GO() {
  var e = Gv(ql()).domain([1, 10]);
  return e.copy = function() {
    return Oi(e, GO()).base(e.base());
  }, Gn.apply(e, arguments);
}
function KO() {
  var e = Kv(ql());
  return e.copy = function() {
    return Oi(e, KO()).constant(e.constant());
  }, Gn.apply(e, arguments);
}
function ng() {
  var e = qv(ql());
  return e.copy = function() {
    return Oi(e, ng()).exponent(e.exponent());
  }, Gn.apply(e, arguments);
}
function fq() {
  return ng.apply(null, arguments).exponent(0.5);
}
function qO() {
  var e = [], t = qt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((su(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (i, a) => ZH(e, a / n));
  }, r.copy = function() {
    return qO(t).domain(e);
  }, Gn.apply(r, arguments);
}
function Vl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, s, u, l, f = qt, d, h = !1, v;
  function g(y) {
    return isNaN(y = +y) ? v : (y = 0.5 + ((y = +d(y)) - a) * (n * y < n * a ? u : l), f(h ? Math.max(0, Math.min(1, y)) : y));
  }
  g.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = d(e = +e), a = d(t = +t), s = d(r = +r), u = i === a ? 0 : 0.5 / (a - i), l = a === s ? 0 : 0.5 / (s - a), n = a < i ? -1 : 1, g) : [e, t, r];
  }, g.clamp = function(y) {
    return arguments.length ? (h = !!y, g) : h;
  }, g.interpolator = function(y) {
    return arguments.length ? (f = y, g) : f;
  };
  function w(y) {
    return function(b) {
      var A, O, S;
      return arguments.length ? ([A, O, S] = b, f = OG(y, [A, O, S]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = w(_o), g.rangeRound = w(Wv), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), s = y(r), u = i === a ? 0 : 0.5 / (a - i), l = a === s ? 0 : 0.5 / (s - a), n = a < i ? -1 : 1, g;
  };
}
function VO() {
  var e = _i(Vl()(qt));
  return e.copy = function() {
    return Oi(e, VO());
  }, Gn.apply(e, arguments);
}
function YO() {
  var e = Gv(Vl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Oi(e, YO()).base(e.base());
  }, Gn.apply(e, arguments);
}
function XO() {
  var e = Kv(Vl());
  return e.copy = function() {
    return Oi(e, XO()).constant(e.constant());
  }, Gn.apply(e, arguments);
}
function ig() {
  var e = qv(Vl());
  return e.copy = function() {
    return Oi(e, ig()).exponent(e.exponent());
  }, Gn.apply(e, arguments);
}
function dq() {
  return ig.apply(null, arguments).exponent(0.5);
}
const Ox = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Ss,
  scaleDiverging: VO,
  scaleDivergingLog: YO,
  scaleDivergingPow: ig,
  scaleDivergingSqrt: dq,
  scaleDivergingSymlog: XO,
  scaleIdentity: TO,
  scaleImplicit: ap,
  scaleLinear: Vc,
  scaleLog: CO,
  scaleOrdinal: Lv,
  scalePoint: fs,
  scalePow: Vv,
  scaleQuantile: kO,
  scaleQuantize: jO,
  scaleRadial: IO,
  scaleSequential: HO,
  scaleSequentialLog: GO,
  scaleSequentialPow: ng,
  scaleSequentialQuantile: qO,
  scaleSequentialSqrt: fq,
  scaleSequentialSymlog: KO,
  scaleSqrt: KG,
  scaleSymlog: MO,
  scaleThreshold: RO,
  scaleTime: cq,
  scaleUtc: lq,
  tickFormat: EO
}, Symbol.toStringTag, { value: "Module" }));
var hq = ho;
function pq(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], s = t(a);
    if (s != null && (u === void 0 ? s === s && !hq(s) : r(s, u)))
      var u = s, l = a;
  }
  return l;
}
var Yl = pq;
function vq(e, t) {
  return e > t;
}
var ZO = vq, gq = Yl, yq = ZO, mq = wo;
function bq(e) {
  return e && e.length ? gq(e, mq, yq) : void 0;
}
var xq = bq;
const di = /* @__PURE__ */ Qe(xq);
function wq(e, t) {
  return e < t;
}
var JO = wq, _q = Yl, Oq = JO, Aq = wo;
function Sq(e) {
  return e && e.length ? _q(e, Aq, Oq) : void 0;
}
var Pq = Sq;
const Xl = /* @__PURE__ */ Qe(Pq);
var Eq = bv, Tq = pn, $q = oO, Cq = rr;
function Mq(e, t) {
  var r = Cq(e) ? Eq : $q;
  return r(e, Tq(t));
}
var Iq = Mq, kq = iO, jq = Iq;
function Rq(e, t) {
  return kq(jq(e, t), 1);
}
var Nq = Rq;
const Dq = /* @__PURE__ */ Qe(Nq);
var Lq = Iv;
function Bq(e, t) {
  return Lq(e, t);
}
var Fq = Bq;
const Qi = /* @__PURE__ */ Qe(Fq);
var Oo = 1e9, Wq = {
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
}, og, ht = !0, jr = "[DecimalError] ", Xi = jr + "Invalid argument: ", ag = jr + "Exponent out of range: ", Ao = Math.floor, Wi = Math.pow, zq = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vr, It = 1e7, ct = 7, QO = 9007199254740991, Jc = Ao(QO / ct), de = {};
de.absoluteValue = de.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
de.comparedTo = de.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
de.decimalPlaces = de.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ct;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
de.dividedBy = de.div = function(e) {
  return jn(this, new this.constructor(e));
};
de.dividedToIntegerBy = de.idiv = function(e) {
  var t = this, r = t.constructor;
  return tt(jn(t, new r(e), 0, 1), r.precision);
};
de.equals = de.eq = function(e) {
  return !this.cmp(e);
};
de.exponent = function() {
  return wt(this);
};
de.greaterThan = de.gt = function(e) {
  return this.cmp(e) > 0;
};
de.greaterThanOrEqualTo = de.gte = function(e) {
  return this.cmp(e) >= 0;
};
de.isInteger = de.isint = function() {
  return this.e > this.d.length - 2;
};
de.isNegative = de.isneg = function() {
  return this.s < 0;
};
de.isPositive = de.ispos = function() {
  return this.s > 0;
};
de.isZero = function() {
  return this.s === 0;
};
de.lessThan = de.lt = function(e) {
  return this.cmp(e) < 0;
};
de.lessThanOrEqualTo = de.lte = function(e) {
  return this.cmp(e) < 1;
};
de.logarithm = de.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(vr)) throw Error(jr + "NaN");
  if (r.s < 1) throw Error(jr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(vr) ? new n(0) : (ht = !1, t = jn(Cs(r, a), Cs(e, a), a), ht = !0, tt(t, i));
};
de.minus = de.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? rA(t, e) : eA(t, (e.s = -e.s, e));
};
de.modulo = de.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jr + "NaN");
  return r.s ? (ht = !1, t = jn(r, e, 0, 1).times(e), ht = !0, r.minus(t)) : tt(new n(r), i);
};
de.naturalExponential = de.exp = function() {
  return tA(this);
};
de.naturalLogarithm = de.ln = function() {
  return Cs(this);
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
de.plus = de.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? eA(t, e) : rA(t, (e.s = -e.s, e));
};
de.precision = de.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xi + e);
  if (t = wt(i) + 1, n = i.d.length - 1, r = n * ct + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
de.squareRoot = de.sqrt = function() {
  var e, t, r, n, i, a, s, u = this, l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(jr + "NaN");
  }
  for (e = wt(u), ht = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = sn(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Ao((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = s = r + 3; ; )
    if (a = n, n = a.plus(jn(u, a, s + 2)).times(0.5), sn(a.d).slice(0, s) === (t = sn(n.d)).slice(0, s)) {
      if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
        if (tt(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      s += 4;
    }
  return ht = !0, tt(n, r);
};
de.times = de.mul = function(e) {
  var t, r, n, i, a, s, u, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, s = l, l = f, f = s), a = [], s = l + f, n = s; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      u = a[i] + g[n] * v[i - n - 1] + t, a[i--] = u % It | 0, t = u / It | 0;
    a[i] = (a[i] + t) % It | 0;
  }
  for (; !a[--s]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ht ? tt(e, h.precision) : e;
};
de.toDecimalPlaces = de.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fn(e, 0, Oo), t === void 0 ? t = n.rounding : fn(t, 0, 8), tt(r, e + wt(r) + 1, t));
};
de.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ea(n, !0) : (fn(e, 0, Oo), t === void 0 ? t = i.rounding : fn(t, 0, 8), n = tt(new i(n), e + 1, t), r = ea(n, !0, e + 1)), r;
};
de.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ea(i) : (fn(e, 0, Oo), t === void 0 ? t = a.rounding : fn(t, 0, 8), n = tt(new a(i), e + wt(i) + 1, t), r = ea(n.abs(), !1, e + wt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
de.toInteger = de.toint = function() {
  var e = this, t = e.constructor;
  return tt(new t(e), wt(e) + 1, t.rounding);
};
de.toNumber = function() {
  return +this;
};
de.toPower = de.pow = function(e) {
  var t, r, n, i, a, s, u = this, l = u.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(vr);
  if (u = new l(u), !u.s) {
    if (e.s < 1) throw Error(jr + "Infinity");
    return u;
  }
  if (u.eq(vr)) return u;
  if (n = l.precision, e.eq(vr)) return tt(u, n);
  if (t = e.e, r = e.d.length - 1, s = t >= r, a = u.s, s) {
    if ((r = d < 0 ? -d : d) <= QO) {
      for (i = new l(vr), t = Math.ceil(n / ct + 4), ht = !1; r % 2 && (i = i.times(u), Sx(i.d, t)), r = Ao(r / 2), r !== 0; )
        u = u.times(u), Sx(u.d, t);
      return ht = !0, e.s < 0 ? new l(vr).div(i) : tt(i, n);
    }
  } else if (a < 0) throw Error(jr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, ht = !1, i = e.times(Cs(u, n + f)), ht = !0, i = tA(i), i.s = a, i;
};
de.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = wt(i), n = ea(i, r <= a.toExpNeg || r >= a.toExpPos)) : (fn(e, 1, Oo), t === void 0 ? t = a.rounding : fn(t, 0, 8), i = tt(new a(i), e, t), r = wt(i), n = ea(i, e <= r || r <= a.toExpNeg, e)), n;
};
de.toSignificantDigits = de.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fn(e, 1, Oo), t === void 0 ? t = n.rounding : fn(t, 0, 8)), tt(new n(r), e, t);
};
de.toString = de.valueOf = de.val = de.toJSON = de[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = wt(e), r = e.constructor;
  return ea(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function eA(e, t) {
  var r, n, i, a, s, u, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), ht ? tt(t, h) : t;
  if (l = e.d, f = t.d, s = e.e, i = t.e, l = l.slice(), a = s - i, a) {
    for (a < 0 ? (n = l, a = -a, u = f.length) : (n = f, i = s, u = l.length), s = Math.ceil(h / ct), u = s > u ? s + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = l.length, a = f.length, u - a < 0 && (a = u, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / It | 0, l[a] %= It;
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return t.d = l, t.e = i, ht ? tt(t, h) : t;
}
function fn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Xi + e);
}
function sn(e) {
  var t, r, n, i = e.length - 1, a = "", s = e[0];
  if (i > 0) {
    for (a += s, t = 1; t < i; t++)
      n = e[t] + "", r = ct - n.length, r && (a += li(r)), a += n;
    s = e[t], n = s + "", r = ct - n.length, r && (a += li(r));
  } else if (s === 0)
    return "0";
  for (; s % 10 === 0; ) s /= 10;
  return a + s;
}
var jn = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, s = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + s, n[u] = a % It | 0, s = a / It | 0;
    return s && n.unshift(s), n;
  }
  function t(n, i, a, s) {
    var u, l;
    if (a != s)
      l = a > s ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var s = 0; a--; )
      n[a] -= s, s = n[a] < i[a] ? 1 : 0, n[a] = s * It + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, s) {
    var u, l, f, d, h, v, g, w, y, b, A, O, S, _, x, E, C, M, F = n.constructor, D = n.s == i.s ? 1 : -1, B = n.d, N = i.d;
    if (!n.s) return new F(n);
    if (!i.s) throw Error(jr + "Division by zero");
    for (l = n.e - i.e, C = N.length, x = B.length, g = new F(D), w = g.d = [], f = 0; N[f] == (B[f] || 0); ) ++f;
    if (N[f] > (B[f] || 0) && --l, a == null ? O = a = F.precision : s ? O = a + (wt(n) - wt(i)) + 1 : O = a, O < 0) return new F(0);
    if (O = O / ct + 2 | 0, f = 0, C == 1)
      for (d = 0, N = N[0], O++; (f < x || d) && O--; f++)
        S = d * It + (B[f] || 0), w[f] = S / N | 0, d = S % N | 0;
    else {
      for (d = It / (N[0] + 1) | 0, d > 1 && (N = e(N, d), B = e(B, d), C = N.length, x = B.length), _ = C, y = B.slice(0, C), b = y.length; b < C; ) y[b++] = 0;
      M = N.slice(), M.unshift(0), E = N[0], N[1] >= It / 2 && ++E;
      do
        d = 0, u = t(N, y, C, b), u < 0 ? (A = y[0], C != b && (A = A * It + (y[1] || 0)), d = A / E | 0, d > 1 ? (d >= It && (d = It - 1), h = e(N, d), v = h.length, b = y.length, u = t(h, y, v, b), u == 1 && (d--, r(h, C < v ? M : N, v))) : (d == 0 && (u = d = 1), h = N.slice()), v = h.length, v < b && h.unshift(0), r(y, h, b), u == -1 && (b = y.length, u = t(N, y, C, b), u < 1 && (d++, r(y, C < b ? M : N, b))), b = y.length) : u === 0 && (d++, y = [0]), w[f++] = d, u && y[0] ? y[b++] = B[_] || 0 : (y = [B[_]], b = 1);
      while ((_++ < x || y[0] !== void 0) && O--);
    }
    return w[0] || w.shift(), g.e = l, tt(g, s ? a + wt(g) + 1 : a);
  };
}();
function tA(e, t) {
  var r, n, i, a, s, u, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (wt(e) > 16) throw Error(ag + wt(e));
  if (!e.s) return new d(vr);
  for (t == null ? (ht = !1, u = h) : u = t, s = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(s), f += 5;
  for (n = Math.log(Wi(2, f)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new d(vr), d.precision = u; ; ) {
    if (i = tt(i.times(e), u), r = r.times(++l), s = a.plus(jn(i, r, u)), sn(s.d).slice(0, u) === sn(a.d).slice(0, u)) {
      for (; f--; ) a = tt(a.times(a), u);
      return d.precision = h, t == null ? (ht = !0, tt(a, h)) : a;
    }
    a = s;
  }
}
function wt(e) {
  for (var t = e.e * ct, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ah(e, t, r) {
  if (t > e.LN10.sd())
    throw ht = !0, r && (e.precision = r), Error(jr + "LN10 precision limit exceeded");
  return tt(new e(e.LN10), t);
}
function li(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Cs(e, t) {
  var r, n, i, a, s, u, l, f, d, h = 1, v = 10, g = e, w = g.d, y = g.constructor, b = y.precision;
  if (g.s < 1) throw Error(jr + (g.s ? "NaN" : "-Infinity"));
  if (g.eq(vr)) return new y(0);
  if (t == null ? (ht = !1, f = b) : f = t, g.eq(10))
    return t == null && (ht = !0), ah(y, f);
  if (f += v, y.precision = f, r = sn(w), n = r.charAt(0), a = wt(g), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = sn(g.d), n = r.charAt(0), h++;
    a = wt(g), n > 1 ? (g = new y("0." + r), a++) : g = new y(n + "." + r.slice(1));
  } else
    return l = ah(y, f + 2, b).times(a + ""), g = Cs(new y(n + "." + r.slice(1)), f - v).plus(l), y.precision = b, t == null ? (ht = !0, tt(g, b)) : g;
  for (u = s = g = jn(g.minus(vr), g.plus(vr), f), d = tt(g.times(g), f), i = 3; ; ) {
    if (s = tt(s.times(d), f), l = u.plus(jn(s, new y(i), f)), sn(l.d).slice(0, f) === sn(u.d).slice(0, f))
      return u = u.times(2), a !== 0 && (u = u.plus(ah(y, f + 2, b).times(a + ""))), u = jn(u, new y(h), f), y.precision = b, t == null ? (ht = !0, tt(u, b)) : u;
    u = l, i += 2;
  }
}
function Ax(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Ao(r / ct), e.d = [], n = (r + 1) % ct, r < 0 && (n += ct), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ct; n < i; ) e.d.push(+t.slice(n, n += ct));
      t = t.slice(n), n = ct - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ht && (e.e > Jc || e.e < -Jc)) throw Error(ag + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function tt(e, t, r) {
  var n, i, a, s, u, l, f, d, h = e.d;
  for (s = 1, a = h[0]; a >= 10; a /= 10) s++;
  if (n = t - s, n < 0)
    n += ct, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / ct), a = h.length, d >= a) return e;
    for (f = a = h[d], s = 1; a >= 10; a /= 10) s++;
    n %= ct, i = n - ct + s;
  }
  if (r !== void 0 && (a = Wi(10, s - i - 1), u = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Wi(10, s - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = wt(e), h.length = 1, t = t - a - 1, h[0] = Wi(10, (ct - t % ct) % ct), e.e = Ao(-t / ct) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Wi(10, ct - n), h[d] = i > 0 ? (f / Wi(10, s - i) % Wi(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == It && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != It) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (ht && (e.e > Jc || e.e < -Jc))
    throw Error(ag + wt(e));
  return e;
}
function rA(e, t) {
  var r, n, i, a, s, u, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), ht ? tt(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), s = f - n, s) {
    for (d = s < 0, d ? (r = l, s = -s, u = h.length) : (r = h, n = f, u = l.length), i = Math.max(Math.ceil(g / ct), u) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = h.length, d = i < u, d && (u = i), i = 0; i < u; i++)
      if (l[i] != h[i]) {
        d = l[i] < h[i];
        break;
      }
    s = 0;
  }
  for (d && (r = l, l = h, h = r, t.s = -t.s), u = l.length, i = h.length - u; i > 0; --i) l[u++] = 0;
  for (i = h.length; i > s; ) {
    if (l[--i] < h[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = It - 1;
      --l[a], l[i] += It;
    }
    l[i] -= h[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, ht ? tt(t, g) : t) : new v(0);
}
function ea(e, t, r) {
  var n, i = wt(e), a = sn(e.d), s = a.length;
  return t ? (r && (n = r - s) > 0 ? a = a.charAt(0) + "." + a.slice(1) + li(n) : s > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + li(-i - 1) + a, r && (n = r - s) > 0 && (a += li(n))) : i >= s ? (a += li(i + 1 - s), r && (n = r - i - 1) > 0 && (a = a + "." + li(n))) : ((n = i + 1) < s && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (a += "."), a += li(n))), e.s < 0 ? "-" + a : a;
}
function Sx(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function nA(e) {
  var t, r, n;
  function i(a) {
    var s = this;
    if (!(s instanceof i)) return new i(a);
    if (s.constructor = i, a instanceof i) {
      s.s = a.s, s.e = a.e, s.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Xi + a);
      if (a > 0)
        s.s = 1;
      else if (a < 0)
        a = -a, s.s = -1;
      else {
        s.s = 0, s.e = 0, s.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        s.e = 0, s.d = [a];
        return;
      }
      return Ax(s, a.toString());
    } else if (typeof a != "string")
      throw Error(Xi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), s.s = -1) : s.s = 1, zq.test(a)) Ax(s, a);
    else throw Error(Xi + a);
  }
  if (i.prototype = de, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = nA, i.config = i.set = Uq, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Uq(e) {
  if (!e || typeof e != "object")
    throw Error(jr + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Oo,
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
      if (Ao(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Xi + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Xi + r + ": " + n);
  return this;
}
var og = nA(Wq);
vr = new og(1);
const Ze = og;
function Hq(e) {
  return Vq(e) || qq(e) || Kq(e) || Gq();
}
function Gq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kq(e, t) {
  if (e) {
    if (typeof e == "string") return cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cp(e, t);
  }
}
function qq(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Vq(e) {
  if (Array.isArray(e)) return cp(e);
}
function cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Yq = function(t) {
  return t;
}, iA = {
  "@@functional/placeholder": !0
}, aA = function(t) {
  return t === iA;
}, Px = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && aA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Xq = function e(t, r) {
  return t === 1 ? r : Px(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var s = i.filter(function(u) {
      return u !== iA;
    }).length;
    return s >= t ? r.apply(void 0, i) : e(t - s, Px(function() {
      for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return aA(h) ? l.shift() : h;
      });
      return r.apply(void 0, Hq(d).concat(l));
    }));
  });
}, Zl = function(t) {
  return Xq(t.length, t);
}, lp = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, Zq = Zl(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Jq = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Yq;
  var i = r.reverse(), a = i[0], s = i.slice(1);
  return function() {
    return s.reduce(function(u, l) {
      return l(u);
    }, a.apply(void 0, arguments));
  };
}, fp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, oA = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return r && a.every(function(u, l) {
      return u === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Qq(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ze(e).abs().log(10).toNumber()) + 1, t;
}
function e4(e, t, r) {
  for (var n = new Ze(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var t4 = Zl(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), r4 = Zl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), n4 = Zl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Jl = {
  rangeStep: e4,
  getDigitCount: Qq,
  interpolateNumber: t4,
  uninterpolateNumber: r4,
  uninterpolateTruncation: n4
};
function dp(e) {
  return o4(e) || a4(e) || sA(e) || i4();
}
function i4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a4(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function o4(e) {
  if (Array.isArray(e)) return hp(e);
}
function Ms(e, t) {
  return c4(e) || u4(e, t) || sA(e, t) || s4();
}
function s4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sA(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function u4(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var s = e[Symbol.iterator](), u; !(n = (u = s.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !n && s.return != null && s.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function c4(e) {
  if (Array.isArray(e)) return e;
}
function uA(e) {
  var t = Ms(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function cA(e, t, r) {
  if (e.lte(0))
    return new Ze(0);
  var n = Jl.getDigitCount(e.toNumber()), i = new Ze(10).pow(n), a = e.div(i), s = n !== 1 ? 0.05 : 0.1, u = new Ze(Math.ceil(a.div(s).toNumber())).add(r).mul(s), l = u.mul(i);
  return t ? l : new Ze(Math.ceil(l));
}
function l4(e, t, r) {
  var n = 1, i = new Ze(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Ze(10).pow(Jl.getDigitCount(e) - 1), i = new Ze(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ze(Math.floor(e)));
  } else e === 0 ? i = new Ze(Math.floor((t - 1) / 2)) : r || (i = new Ze(Math.floor(e)));
  var s = Math.floor((t - 1) / 2), u = Jq(Zq(function(l) {
    return i.add(new Ze(l - s).mul(n)).toNumber();
  }), lp);
  return u(0, t);
}
function lA(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ze(0),
      tickMin: new Ze(0),
      tickMax: new Ze(0)
    };
  var a = cA(new Ze(t).sub(e).div(r - 1), n, i), s;
  e <= 0 && t >= 0 ? s = new Ze(0) : (s = new Ze(e).add(t).div(2), s = s.sub(new Ze(s).mod(a)));
  var u = Math.ceil(s.sub(e).div(a).toNumber()), l = Math.ceil(new Ze(t).sub(s).div(a).toNumber()), f = u + l + 1;
  return f > r ? lA(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, u = t > 0 ? u : u + (r - f)), {
    step: a,
    tickMin: s.sub(new Ze(u).mul(a)),
    tickMax: s.add(new Ze(l).mul(a))
  });
}
function f4(e) {
  var t = Ms(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, s = Math.max(i, 2), u = uA([r, n]), l = Ms(u, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(dp(lp(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(dp(lp(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? fp(h) : h;
  }
  if (f === d)
    return l4(f, i, a);
  var v = lA(f, d, s, a), g = v.step, w = v.tickMin, y = v.tickMax, b = Jl.rangeStep(w, y.add(new Ze(0.1).mul(g)), g);
  return r > n ? fp(b) : b;
}
function d4(e, t) {
  var r = Ms(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, s = uA([n, i]), u = Ms(s, 2), l = u[0], f = u[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = cA(new Ze(f).sub(l).div(d - 1), a, 0), v = [].concat(dp(Jl.rangeStep(new Ze(l), new Ze(f).sub(new Ze(0.99).mul(h)), h)), [f]);
  return n > i ? fp(v) : v;
}
var h4 = oA(f4), p4 = oA(d4), v4 = process.env.NODE_ENV === "production", oh = "Invariant failed";
function er(e, t) {
  if (v4)
    throw new Error(oh);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(oh, ": ").concat(r) : oh;
  throw new Error(n);
}
var g4 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function y4(e, t) {
  return w4(e) || x4(e, t) || b4(e, t) || m4();
}
function m4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b4(e, t) {
  if (e) {
    if (typeof e == "string") return Ex(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ex(e, t);
  }
}
function Ex(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function x4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function w4(e) {
  if (Array.isArray(e)) return e;
}
function _4(e, t) {
  if (e == null) return {};
  var r = O4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O4(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fu(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, s = e.dataPointFormatter, u = e.xAxis, l = e.yAxis, f = _4(e, g4), d = me(f, !1);
  e.direction === "x" && u.type !== "number" && (process.env.NODE_ENV !== "production" ? er(!1, 'ErrorBar requires Axis type property to be "number".') : er());
  var h = a.map(function(v) {
    var g = s(v, i), w = g.x, y = g.y, b = g.value, A = g.errorVal;
    if (!A)
      return null;
    var O = [], S, _;
    if (Array.isArray(A)) {
      var x = y4(A, 2);
      S = x[0], _ = x[1];
    } else
      S = _ = A;
    if (r === "vertical") {
      var E = u.scale, C = y + t, M = C + n, F = C - n, D = E(b - S), B = E(b + _);
      O.push({
        x1: B,
        y1: M,
        x2: B,
        y2: F
      }), O.push({
        x1: D,
        y1: C,
        x2: B,
        y2: C
      }), O.push({
        x1: D,
        y1: M,
        x2: D,
        y2: F
      });
    } else if (r === "horizontal") {
      var N = l.scale, U = w + t, z = U - n, J = U + n, H = N(b - S), Z = N(b + _);
      O.push({
        x1: z,
        y1: Z,
        x2: J,
        y2: Z
      }), O.push({
        x1: U,
        y1: H,
        x2: U,
        y2: Z
      }), O.push({
        x1: z,
        y1: H,
        x2: J,
        y2: H
      });
    }
    return /* @__PURE__ */ k.createElement(Le, Qc({
      className: "recharts-errorBar",
      key: "bar-".concat(O.map(function(V) {
        return "".concat(V.x1, "-").concat(V.x2, "-").concat(V.y1, "-").concat(V.y2);
      }))
    }, d), O.map(function(V) {
      return /* @__PURE__ */ k.createElement("line", Qc({}, V, {
        key: "line-".concat(V.x1, "-").concat(V.x2, "-").concat(V.y1, "-").concat(V.y2)
      }));
    }));
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-errorBars"
  }, h);
}
fu.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
fu.displayName = "ErrorBar";
function Is(e) {
  "@babel/helpers - typeof";
  return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Is(e);
}
function Tx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tx(Object(r), !0).forEach(function(n) {
      A4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A4(e, t, r) {
  return t = S4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S4(e) {
  var t = P4(e, "string");
  return Is(t) == "symbol" ? t : String(t);
}
function P4(e, t) {
  if (Is(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Is(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, s = dr(r, Ha);
  if (!s)
    return null;
  var u;
  return s.props && s.props.payload ? u = s.props && s.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return l.concat(v.map(function(g) {
      return {
        type: s.props.iconType || d.props.legendType,
        value: g.name,
        color: g.fill,
        payload: g
      };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, d = f.props, h = d.dataKey, v = d.name, g = d.legendType, w = d.hide;
    return {
      inactive: w,
      dataKey: h,
      type: s.props.iconType || g || "square",
      color: sg(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), sh(sh(sh({}, s.props), Ha.getWithHeight(s, i)), {}, {
    payload: u,
    item: s
  });
};
function ks(e) {
  "@babel/helpers - typeof";
  return ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ks(e);
}
function $x(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $x(Object(r), !0).forEach(function(n) {
      La(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $x(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function La(e, t, r) {
  return t = E4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E4(e) {
  var t = T4(e, "string");
  return ks(t) == "symbol" ? t : String(t);
}
function T4(e, t) {
  if (ks(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ks(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cx(e) {
  return I4(e) || M4(e) || C4(e) || $4();
}
function $4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C4(e, t) {
  if (e) {
    if (typeof e == "string") return pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pp(e, t);
  }
}
function M4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function I4(e) {
  if (Array.isArray(e)) return pp(e);
}
function pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xt(e, t, r) {
  return Te(e) || Te(t) ? r : Tt(t) ? gr(e, t, r) : Pe(t) ? t(e) : r;
}
function ds(e, t, r, n) {
  var i = Dq(e, function(u) {
    return xt(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return oe(u) || parseFloat(u);
    });
    return a.length ? [Xl(a), di(a)] : [1 / 0, -1 / 0];
  }
  var s = n ? i.filter(function(u) {
    return !Te(u);
  }) : i;
  return s.map(function(u) {
    return Tt(u) || u instanceof Date ? u : "";
  });
}
var k4 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, s = -1, u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < u; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[u - 1].coordinate, h = i[f].coordinate, v = f >= u - 1 ? i[0].coordinate : i[f + 1].coordinate, g = void 0;
      if (Gt(h - d) !== Gt(v - h)) {
        var w = [];
        if (Gt(v - h) === Gt(l[1] - l[0])) {
          g = v;
          var y = h + l[1] - l[0];
          w[0] = Math.min(y, (y + d) / 2), w[1] = Math.max(y, (y + d) / 2);
        } else {
          g = d;
          var b = v + l[1] - l[0];
          w[0] = Math.min(h, (b + h) / 2), w[1] = Math.max(h, (b + h) / 2);
        }
        var A = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
        if (t > A[0] && t <= A[1] || t >= w[0] && t <= w[1]) {
          s = i[f].index;
          break;
        }
      } else {
        var O = Math.min(d, v), S = Math.max(d, v);
        if (t > (O + h) / 2 && t <= (S + h) / 2) {
          s = i[f].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < u; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        s = n[_].index;
        break;
      }
  return s;
}, sg = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, s = i.fill, u;
  switch (n) {
    case "Line":
      u = a;
      break;
    case "Area":
    case "Radar":
      u = a && a !== "none" ? a : s;
      break;
    default:
      u = s;
      break;
  }
  return u;
}, j4 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var s = {}, u = Object.keys(a), l = 0, f = u.length; l < f; l++)
    for (var d = a[u[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var w = d[h[v]], y = w.items, b = w.cateAxisId, A = y.filter(function(x) {
        return kn(x.type).indexOf("Bar") >= 0;
      });
      if (A && A.length) {
        var O = A[0].props.barSize, S = A[0].props[b];
        s[S] || (s[S] = []);
        var _ = Te(O) ? r : O;
        s[S].push({
          item: A[0],
          stackList: A.slice(1),
          barSize: Te(_) ? void 0 : Kt(_, n, 0)
        });
      }
    }
  return s;
}, R4 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, s = a === void 0 ? [] : a, u = t.maxBarSize, l = s.length;
  if (l < 1) return null;
  var f = Kt(r, i, 0, !0), d, h = [];
  if (s[0].barSize === +s[0].barSize) {
    var v = !1, g = i / l, w = s.reduce(function(_, x) {
      return _ + x.barSize || 0;
    }, 0);
    w += (l - 1) * f, w >= i && (w -= (l - 1) * f, f = 0), w >= i && g > 0 && (v = !0, g *= 0.9, w = l * g);
    var y = (i - w) / 2 >> 0, b = {
      offset: y - f,
      size: 0
    };
    d = s.reduce(function(_, x) {
      var E = {
        item: x.item,
        position: {
          offset: b.offset + b.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : x.barSize
        }
      }, C = [].concat(Cx(_), [E]);
      return b = C[C.length - 1].position, x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: b
        });
      }), C;
    }, h);
  } else {
    var A = Kt(n, i, 0, !0);
    i - 2 * A - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * A - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var S = u === +u ? Math.min(O, u) : O;
    d = s.reduce(function(_, x, E) {
      var C = [].concat(Cx(_), [{
        item: x.item,
        position: {
          offset: A + (O + f) * E + (O - S) / 2,
          size: S
        }
      }]);
      return x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: C[C.length - 1].position
        });
      }), C;
    }, h);
  }
  return d;
}, N4 = function(t, r, n, i) {
  var a = n.children, s = n.width, u = n.margin, l = s - (u.left || 0) - (u.right || 0), f = fA({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, g = f.align, w = f.verticalAlign, y = f.layout;
    if ((y === "vertical" || y === "horizontal" && w === "middle") && g !== "center" && oe(t[g]))
      return Cr(Cr({}, t), {}, La({}, g, t[g] + (h || 0)));
    if ((y === "horizontal" || y === "vertical" && g === "center") && w !== "middle" && oe(t[w]))
      return Cr(Cr({}, t), {}, La({}, w, t[w] + (v || 0)));
  }
  return t;
}, D4 = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, dA = function(t, r, n, i, a) {
  var s = r.props.children, u = yr(s, fu).filter(function(f) {
    return D4(i, a, f.props.direction);
  });
  if (u && u.length) {
    var l = u.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = xt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Xl(h), di(h)] : [h, h], g = l.reduce(function(w, y) {
        var b = xt(d, y, 0), A = v[0] - Math.abs(Array.isArray(b) ? b[0] : b), O = v[1] + Math.abs(Array.isArray(b) ? b[1] : b);
        return [Math.min(A, w[0]), Math.max(O, w[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, L4 = function(t, r, n, i, a) {
  var s = r.map(function(u) {
    return dA(t, u, n, a, i);
  }).filter(function(u) {
    return !Te(u);
  });
  return s && s.length ? s.reduce(function(u, l) {
    return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, hA = function(t, r, n, i, a) {
  var s = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && dA(t, l, f, i) || ds(t, f, n, a);
  });
  if (n === "number")
    return s.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(l, f) {
        return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return s.reduce(function(l, f) {
    for (var d = 0, h = f.length; d < h; d++)
      u[f[d]] || (u[f[d]] = !0, l.push(f[d]));
    return l;
  }, []);
}, pA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, vA = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, s, u = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (s = !0), l.coordinate;
  });
  return a || u.push(r), s || u.push(n), u;
}, In = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, s = t.type, u = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && s === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? Gt(u[0] - u[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
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
      return !mo(h.coordinate);
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
}, uh = /* @__PURE__ */ new WeakMap(), gc = function(t, r) {
  if (typeof r != "function")
    return t;
  uh.has(t) || uh.set(t, /* @__PURE__ */ new WeakMap());
  var n = uh.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, gA = function(t, r, n) {
  var i = t.scale, a = t.type, s = t.layout, u = t.axisType;
  if (i === "auto")
    return s === "radial" && u === "radiusAxis" ? {
      scale: Ss(),
      realScaleType: "band"
    } : s === "radial" && u === "angleAxis" ? {
      scale: Vc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: fs(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Ss(),
      realScaleType: "band"
    } : {
      scale: Vc(),
      realScaleType: "linear"
    };
  if (au(i)) {
    var l = "scale".concat(Nl(i));
    return {
      scale: (Ox[l] || fs)(),
      realScaleType: Ox[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: fs(),
    realScaleType: "point"
  };
}, Mx = 1e-4, yA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Mx, s = Math.max(i[0], i[1]) + Mx, u = t(r[0]), l = t(r[n - 1]);
    (u < a || u > s || l < a || l > s) && t.domain([r[0], r[n - 1]]);
  }
}, B4 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, F4 = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, W4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, s = 0, u = 0; u < r; ++u) {
        var l = mo(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        l >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + l, a = t[u][n][1]) : (t[u][n][0] = s, t[u][n][1] = s + l, s = t[u][n][1]);
      }
}, z4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, s = 0; s < r; ++s) {
        var u = mo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = 0, t[s][n][1] = 0);
      }
}, U4 = {
  sign: W4,
  // @ts-expect-error definitelytyped types are incorrect
  expand: yB,
  // @ts-expect-error definitelytyped types are incorrect
  none: Wa,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: mB,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: bB,
  positive: z4
}, H4 = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = U4[n], s = gB().keys(i).value(function(u, l) {
    return +xt(u, l, 0);
  }).order(Bh).offset(a);
  return s(t);
}, G4 = function(t, r, n, i, a, s) {
  if (!t)
    return null;
  var u = s ? r.reverse() : r, l = {}, f = u.reduce(function(h, v) {
    var g = v.props, w = g.stackId, y = g.hide;
    if (y)
      return h;
    var b = v.props[n], A = h[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Tt(w)) {
      var O = A.stackGroups[w] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(v), A.hasStack = !0, A.stackGroups[w] = O;
    } else
      A.stackGroups[oa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Cr(Cr({}, h), {}, La({}, b, A));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var g = f[v];
    if (g.hasStack) {
      var w = {};
      g.stackGroups = Object.keys(g.stackGroups).reduce(function(y, b) {
        var A = g.stackGroups[b];
        return Cr(Cr({}, y), {}, La({}, b, {
          numericAxisId: n,
          cateAxisId: i,
          items: A.items,
          stackedData: H4(t, A.items, a)
        }));
      }, w);
    }
    return Cr(Cr({}, h), {}, La({}, v, g));
  }, d);
}, mA = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, s = r.originalDomain, u = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && s && (s[0] === "auto" || s[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = h4(f, a, u);
    return t.domain([Xl(d), di(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = p4(h, a, u);
    return {
      niceTicks: v
    };
  }
  return null;
};
function el(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, s = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var u = Ec(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = xt(i, Te(s) ? t.dataKey : s);
  return Te(l) ? null : t.scale(l);
}
var Ix = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, s = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var l = xt(s, r.dataKey, r.domain[u]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, K4 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, q4 = function(t, r) {
  var n = t.props.stackId;
  if (Tt(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, V4 = function(t) {
  return t.reduce(function(r, n) {
    return [Xl(n.concat([r[0]]).filter(oe)), di(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, bA = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var s = t[a], u = s.stackedData, l = u.reduce(function(f, d) {
      var h = V4(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, kx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, jx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vp = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (kx.test(t[0])) {
    var a = +kx.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (jx.test(t[1])) {
    var s = +jx.exec(t[1])[1];
    i[1] = r[1] + s;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, tl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = jv(r, function(h) {
      return h.coordinate;
    }), s = 1 / 0, u = 1, l = a.length; u < l; u++) {
      var f = a[u], d = a[u - 1];
      s = Math.min((f.coordinate || 0) - (d.coordinate || 0), s);
    }
    return s === 1 / 0 ? 0 : s;
  }
  return n ? void 0 : 0;
}, Rx = function(t, r, n) {
  return !t || !t.length || Qi(t, gr(n, "type.defaultProps.domain")) ? r : t;
}, xA = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, s = n.unit, u = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Cr(Cr({}, me(t, !1)), {}, {
    dataKey: i,
    unit: s,
    formatter: u,
    name: a || i,
    color: sg(t),
    value: xt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function js(e) {
  "@babel/helpers - typeof";
  return js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, js(e);
}
function Nx(e, t) {
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
    t % 2 ? Nx(Object(r), !0).forEach(function(n) {
      wA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wA(e, t, r) {
  return t = Y4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y4(e) {
  var t = X4(e, "string");
  return js(t) == "symbol" ? t : String(t);
}
function X4(e, t) {
  if (js(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (js(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z4(e, t) {
  return tV(e) || eV(e, t) || Q4(e, t) || J4();
}
function J4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q4(e, t) {
  if (e) {
    if (typeof e == "string") return Dx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dx(e, t);
  }
}
function Dx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function tV(e) {
  if (Array.isArray(e)) return e;
}
var rl = Math.PI / 180, rV = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-rl * i) * n,
    y: r + Math.sin(-rl * i) * n
  };
}, _A = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, nV = function(t, r, n, i, a) {
  var s = t.width, u = t.height, l = t.startAngle, f = t.endAngle, d = Kt(t.cx, s, s / 2), h = Kt(t.cy, u, u / 2), v = _A(s, u, n), g = Kt(t.innerRadius, v, 0), w = Kt(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(b, A) {
    var O = r[A], S = O.domain, _ = O.reversed, x;
    if (Te(O.range))
      i === "angleAxis" ? x = [l, f] : i === "radiusAxis" && (x = [g, w]), _ && (x = [x[1], x[0]]);
    else {
      x = O.range;
      var E = x, C = Z4(E, 2);
      l = C[0], f = C[1];
    }
    var M = gA(O, a), F = M.realScaleType, D = M.scale;
    D.domain(S).range(x), yA(D);
    var B = mA(D, Tn(Tn({}, O), {}, {
      realScaleType: F
    })), N = Tn(Tn(Tn({}, O), B), {}, {
      range: x,
      radius: w,
      realScaleType: F,
      scale: D,
      cx: d,
      cy: h,
      innerRadius: g,
      outerRadius: w,
      startAngle: l,
      endAngle: f
    });
    return Tn(Tn({}, b), {}, wA({}, A, N));
  }, {});
}, iV = function(t, r) {
  var n = t.x, i = t.y, a = r.x, s = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - s, 2));
}, aV = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, s = r.cy, u = iV({
    x: n,
    y: i
  }, {
    x: a,
    y: s
  });
  if (u <= 0)
    return {
      radius: u
    };
  var l = (n - a) / u, f = Math.acos(l);
  return i > s && (f = 2 * Math.PI - f), {
    radius: u,
    angle: rV(f),
    angleInRadian: f
  };
}, oV = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), s = Math.min(i, a);
  return {
    startAngle: r - s * 360,
    endAngle: n - s * 360
  };
}, sV = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), s = Math.floor(i / 360), u = Math.min(a, s);
  return t + u * 360;
}, Lx = function(t, r) {
  var n = t.x, i = t.y, a = aV({
    x: n,
    y: i
  }, r), s = a.radius, u = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (s < l || s > f)
    return !1;
  if (s === 0)
    return !0;
  var d = oV(r), h = d.startAngle, v = d.endAngle, g = u, w;
  if (h <= v) {
    for (; g > v; )
      g -= 360;
    for (; g < h; )
      g += 360;
    w = g >= h && g <= v;
  } else {
    for (; g > h; )
      g -= 360;
    for (; g < v; )
      g += 360;
    w = g >= v && g <= h;
  }
  return w ? Tn(Tn({}, r), {}, {
    radius: s,
    angle: sV(g, r)
  }) : null;
}, OA = function(t) {
  return !/* @__PURE__ */ qr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function Rs(e) {
  "@babel/helpers - typeof";
  return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rs(e);
}
var uV = ["offset"];
function cV(e) {
  return hV(e) || dV(e) || fV(e) || lV();
}
function lV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fV(e, t) {
  if (e) {
    if (typeof e == "string") return gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gp(e, t);
  }
}
function dV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hV(e) {
  if (Array.isArray(e)) return gp(e);
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pV(e, t) {
  if (e == null) return {};
  var r = vV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Bx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bx(Object(r), !0).forEach(function(n) {
      gV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gV(e, t, r) {
  return t = yV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yV(e) {
  var t = mV(e, "string");
  return Rs(t) == "symbol" ? t : String(t);
}
function mV(e, t) {
  if (Rs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ns() {
  return Ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ns.apply(this, arguments);
}
var bV = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, xV = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, wV = function(t, r, n) {
  var i = t.position, a = t.viewBox, s = t.offset, u = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, w = l.endAngle, y = l.clockWise, b = (h + v) / 2, A = xV(g, w), O = A >= 0 ? 1 : -1, S, _;
  i === "insideStart" ? (S = g + O * s, _ = y) : i === "insideEnd" ? (S = w - O * s, _ = !y) : i === "end" && (S = w + O * s, _ = y), _ = A <= 0 ? _ : !_;
  var x = it(f, d, b, S), E = it(f, d, b, S + (_ ? 1 : -1) * 359), C = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(b, ",").concat(b, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), M = Te(t.id) ? oa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Ns({}, n, {
    dominantBaseline: "central",
    className: Me("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: M,
    d: C
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(M)
  }, r));
}, _V = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, s = a.cx, u = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(s, u, f + n, v), w = g.x, y = g.y;
    return {
      x: w,
      y,
      textAnchor: w >= s ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: s,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: s,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: s,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var b = (l + f) / 2, A = it(s, u, b, v), O = A.x, S = A.y;
  return {
    x: O,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, OV = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, s = r, u = s.x, l = s.y, f = s.width, d = s.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", w = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, b = y * i, A = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
  if (a === "top") {
    var S = {
      x: u + f / 2,
      y: l - h * i,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return At(At({}, S), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: u + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: w
    };
    return At(At({}, _), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var x = {
      x: u - b,
      y: l + d / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return At(At({}, x), n ? {
      width: Math.max(x.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var E = {
      x: u + f + b,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return At(At({}, E), n ? {
      width: Math.max(n.x + n.width - E.x, 0),
      height: d
    } : {});
  }
  var C = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? At({
    x: u + b,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, C) : a === "insideRight" ? At({
    x: u + f - b,
    y: l + d / 2,
    textAnchor: A,
    verticalAnchor: "middle"
  }, C) : a === "insideTop" ? At({
    x: u + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: w
  }, C) : a === "insideBottom" ? At({
    x: u + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: g
  }, C) : a === "insideTopLeft" ? At({
    x: u + b,
    y: l + v,
    textAnchor: O,
    verticalAnchor: w
  }, C) : a === "insideTopRight" ? At({
    x: u + f - b,
    y: l + v,
    textAnchor: A,
    verticalAnchor: w
  }, C) : a === "insideBottomLeft" ? At({
    x: u + b,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: g
  }, C) : a === "insideBottomRight" ? At({
    x: u + f - b,
    y: l + d - v,
    textAnchor: A,
    verticalAnchor: g
  }, C) : po(a) && (oe(a.x) || Ui(a.x)) && (oe(a.y) || Ui(a.y)) ? At({
    x: u + Kt(a.x, f),
    y: l + Kt(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, C) : At({
    x: u + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, C);
}, AV = function(t) {
  return "cx" in t && oe(t.cx);
};
function Et(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = pV(e, uV), i = At({
    offset: r
  }, n), a = i.viewBox, s = i.position, u = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(u) && Te(l) && !/* @__PURE__ */ qr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ qr(f))
    return /* @__PURE__ */ St(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ L1(f, i), /* @__PURE__ */ qr(g))
      return g;
  } else
    g = bV(i);
  var w = AV(a), y = me(i, !0);
  if (w && (s === "insideStart" || s === "insideEnd" || s === "end"))
    return wV(i, g, y);
  var b = w ? _V(i) : OV(i);
  return /* @__PURE__ */ k.createElement(vi, Ns({
    className: Me("recharts-label", h)
  }, y, b, {
    breakAll: v
  }), g);
}
Et.displayName = "Label";
var AA = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, s = t.endAngle, u = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, w = t.left, y = t.width, b = t.height, A = t.clockWise, O = t.labelViewBox;
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
    if (oe(g) && oe(w))
      return {
        x: g,
        y: w,
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
    endAngle: s || i || 0,
    innerRadius: f || 0,
    outerRadius: d || l || u || 0,
    clockWise: A
  } : t.viewBox ? t.viewBox : {};
}, SV = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Et, {
    key: "label-implicit",
    viewBox: r
  }) : Tt(t) ? /* @__PURE__ */ k.createElement(Et, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ qr(t) ? t.type === Et ? /* @__PURE__ */ St(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ k.createElement(Et, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ k.createElement(Et, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : po(t) ? /* @__PURE__ */ k.createElement(Et, Ns({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, PV = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = AA(t), s = yr(i, Et).map(function(l, f) {
    return /* @__PURE__ */ St(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return s;
  var u = SV(t.label, r || a);
  return [u].concat(cV(s));
};
Et.parseViewBox = AA;
Et.renderCallByParent = PV;
function EV(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var TV = EV;
const $V = /* @__PURE__ */ Qe(TV);
function Ds(e) {
  "@babel/helpers - typeof";
  return Ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ds(e);
}
var CV = ["valueAccessor"], MV = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function IV(e) {
  return NV(e) || RV(e) || jV(e) || kV();
}
function kV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jV(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function RV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NV(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nl.apply(this, arguments);
}
function Fx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fx(Object(r), !0).forEach(function(n) {
      DV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DV(e, t, r) {
  return t = LV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LV(e) {
  var t = BV(e, "string");
  return Ds(t) == "symbol" ? t : String(t);
}
function BV(e, t) {
  if (Ds(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ds(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zx(e, t) {
  if (e == null) return {};
  var r = FV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var WV = function(t) {
  return Array.isArray(t.value) ? $V(t.value) : t.value;
};
function kr(e) {
  var t = e.valueAccessor, r = t === void 0 ? WV : t, n = zx(e, CV), i = n.data, a = n.dataKey, s = n.clockWise, u = n.id, l = n.textBreakAll, f = zx(n, MV);
  return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Te(a) ? r(d, h) : xt(d && d.payload, a), g = Te(u) ? {} : {
      id: "".concat(u, "-").concat(h)
    };
    return /* @__PURE__ */ k.createElement(Et, nl({}, me(d, !0), f, g, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Et.parseViewBox(Te(s) ? d : Wx(Wx({}, d), {}, {
        clockWise: s
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
kr.displayName = "LabelList";
function zV(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Pe(e) ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : po(e) ? /* @__PURE__ */ k.createElement(kr, nl({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function UV(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = yr(n, kr).map(function(s, u) {
    return /* @__PURE__ */ St(s, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = zV(e.label, t);
  return [a].concat(IV(i));
}
kr.renderCallByParent = UV;
function Ls(e) {
  "@babel/helpers - typeof";
  return Ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ls(e);
}
function mp() {
  return mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mp.apply(this, arguments);
}
function Ux(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ux(Object(r), !0).forEach(function(n) {
      HV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HV(e, t, r) {
  return t = GV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GV(e) {
  var t = KV(e, "string");
  return Ls(t) == "symbol" ? t : String(t);
}
function KV(e, t) {
  if (Ls(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ls(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qV = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, yc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, s = t.sign, u = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (u ? 1 : -1) + i, h = Math.asin(l / d) / rl, v = f ? a : a + s * h, g = it(r, n, d, v), w = it(r, n, i, v), y = f ? a - s * h : a, b = it(r, n, d * Math.cos(h * rl), y);
  return {
    center: g,
    circleTangency: w,
    lineTangency: b,
    theta: h
  };
}, SA = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, s = t.startAngle, u = t.endAngle, l = qV(s, u), f = s + l, d = it(r, n, a, s), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(s > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var g = it(r, n, i, s), w = it(r, n, i, f);
    v += "L ".concat(w.x, ",").concat(w.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(s <= f), `,
            `).concat(g.x, ",").concat(g.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, VV = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, s = t.cornerRadius, u = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Gt(d - f), v = yc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: s,
    cornerIsExternal: l
  }), g = v.circleTangency, w = v.lineTangency, y = v.theta, b = yc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: s,
    cornerIsExternal: l
  }), A = b.circleTangency, O = b.lineTangency, S = b.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - S;
  if (_ < 0)
    return u ? "M ".concat(w.x, ",").concat(w.y, `
        a`).concat(s, ",").concat(s, ",0,0,1,").concat(s * 2, `,0
        a`).concat(s, ",").concat(s, ",0,0,1,").concat(-s * 2, `,0
      `) : SA({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var x = "M ".concat(w.x, ",").concat(w.y, `
    A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = yc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: s,
      cornerIsExternal: l
    }), C = E.circleTangency, M = E.lineTangency, F = E.theta, D = yc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: s,
      cornerIsExternal: l
    }), B = D.circleTangency, N = D.lineTangency, U = D.theta, z = l ? Math.abs(f - d) : Math.abs(f - d) - F - U;
    if (z < 0 && s === 0)
      return "".concat(x, "L").concat(r, ",").concat(n, "Z");
    x += "L".concat(N.x, ",").concat(N.y, `
      A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(B.x, ",").concat(B.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(z > 180), ",").concat(+(h > 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(M.x, ",").concat(M.y, "Z");
  } else
    x += "L".concat(r, ",").concat(n, "Z");
  return x;
}, YV = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, PA = function(t) {
  var r = Hx(Hx({}, YV), t), n = r.cx, i = r.cy, a = r.innerRadius, s = r.outerRadius, u = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (s < a || d === h)
    return null;
  var g = Me("recharts-sector", v), w = s - a, y = Kt(u, w, 0, !0), b;
  return y > 0 && Math.abs(d - h) < 360 ? b = VV({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: s,
    cornerRadius: Math.min(y, w / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : b = SA({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: s,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ k.createElement("path", mp({}, me(r, !0), {
    className: g,
    d: b,
    role: "img"
  }));
};
function Bs(e) {
  "@babel/helpers - typeof";
  return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bs(e);
}
function bp() {
  return bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bp.apply(this, arguments);
}
function Gx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gx(Object(r), !0).forEach(function(n) {
      XV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XV(e, t, r) {
  return t = ZV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZV(e) {
  var t = JV(e, "string");
  return Bs(t) == "symbol" ? t : String(t);
}
function JV(e, t) {
  if (Bs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qx = {
  curveBasisClosed: aB,
  curveBasisOpen: oB,
  curveBasis: iB,
  curveBumpX: HL,
  curveBumpY: GL,
  curveLinearClosed: sB,
  curveLinear: Ll,
  curveMonotoneX: uB,
  curveMonotoneY: cB,
  curveNatural: lB,
  curveStep: fB,
  curveStepAfter: hB,
  curveStepBefore: dB
}, mc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ns = function(t) {
  return t.x;
}, is = function(t) {
  return t.y;
}, QV = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Nl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? qx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : qx[n] || Ll;
}, eY = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, s = t.baseLine, u = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = QV(n, u), h = f ? a.filter(function(y) {
    return mc(y);
  }) : a, v;
  if (Array.isArray(s)) {
    var g = f ? s.filter(function(y) {
      return mc(y);
    }) : s, w = h.map(function(y, b) {
      return Kx(Kx({}, y), {}, {
        base: g[b]
      });
    });
    return u === "vertical" ? v = uc().y(is).x1(ns).x0(function(y) {
      return y.base.x;
    }) : v = uc().x(ns).y1(is).y0(function(y) {
      return y.base.y;
    }), v.defined(mc).curve(d), v(w);
  }
  return u === "vertical" && oe(s) ? v = uc().y(is).x1(ns).x0(s) : oe(s) ? v = uc().x(ns).y1(is).y0(s) : v = __().x(ns).y(is), v.defined(mc).curve(d), v(h);
}, Zi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var s = n && n.length ? eY(t) : i;
  return /* @__PURE__ */ k.createElement("path", bp({}, me(t, !1), Tc(t), {
    className: Me("recharts-curve", r),
    d: s,
    ref: a
  }));
}, xp = { exports: {} }, bc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vx;
function tY() {
  if (Vx) return Ve;
  Vx = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var E = x.$$typeof;
      switch (E) {
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
                case u:
                case d:
                case w:
                case g:
                case s:
                  return x;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(x) {
    return S(x) === f;
  }
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = u, Ve.ContextProvider = s, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = w, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(x) {
    return _(x) || S(x) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(x) {
    return S(x) === u;
  }, Ve.isContextProvider = function(x) {
    return S(x) === s;
  }, Ve.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ve.isForwardRef = function(x) {
    return S(x) === d;
  }, Ve.isFragment = function(x) {
    return S(x) === n;
  }, Ve.isLazy = function(x) {
    return S(x) === w;
  }, Ve.isMemo = function(x) {
    return S(x) === g;
  }, Ve.isPortal = function(x) {
    return S(x) === r;
  }, Ve.isProfiler = function(x) {
    return S(x) === a;
  }, Ve.isStrictMode = function(x) {
    return S(x) === i;
  }, Ve.isSuspense = function(x) {
    return S(x) === h;
  }, Ve.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === h || x === v || typeof x == "object" && x !== null && (x.$$typeof === w || x.$$typeof === g || x.$$typeof === s || x.$$typeof === u || x.$$typeof === d || x.$$typeof === b || x.$$typeof === A || x.$$typeof === O || x.$$typeof === y);
  }, Ve.typeOf = S, Ve;
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
var Yx;
function rY() {
  return Yx || (Yx = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === w || j.$$typeof === g || j.$$typeof === s || j.$$typeof === u || j.$$typeof === d || j.$$typeof === b || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
    }
    function _(j) {
      if (typeof j == "object" && j !== null) {
        var Ee = j.$$typeof;
        switch (Ee) {
          case t:
            var be = j.type;
            switch (be) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return be;
              default:
                var We = be && be.$$typeof;
                switch (We) {
                  case u:
                  case d:
                  case w:
                  case g:
                  case s:
                    return We;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var x = l, E = f, C = u, M = s, F = t, D = d, B = n, N = w, U = g, z = r, J = a, H = i, Z = h, V = !1;
    function se(j) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === u;
    }
    function ae(j) {
      return _(j) === s;
    }
    function ce(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function he(j) {
      return _(j) === d;
    }
    function ge(j) {
      return _(j) === n;
    }
    function xe(j) {
      return _(j) === w;
    }
    function ye(j) {
      return _(j) === g;
    }
    function we(j) {
      return _(j) === r;
    }
    function ne(j) {
      return _(j) === a;
    }
    function ue(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    Ye.AsyncMode = x, Ye.ConcurrentMode = E, Ye.ContextConsumer = C, Ye.ContextProvider = M, Ye.Element = F, Ye.ForwardRef = D, Ye.Fragment = B, Ye.Lazy = N, Ye.Memo = U, Ye.Portal = z, Ye.Profiler = J, Ye.StrictMode = H, Ye.Suspense = Z, Ye.isAsyncMode = se, Ye.isConcurrentMode = G, Ye.isContextConsumer = X, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ge, Ye.isLazy = xe, Ye.isMemo = ye, Ye.isPortal = we, Ye.isProfiler = ne, Ye.isStrictMode = ue, Ye.isSuspense = pe, Ye.isValidElementType = S, Ye.typeOf = _;
  }()), Ye;
}
var Xx;
function EA() {
  return Xx || (Xx = 1, process.env.NODE_ENV === "production" ? bc.exports = tY() : bc.exports = rY()), bc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ch, Zx;
function nY() {
  if (Zx) return ch;
  Zx = 1;
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
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
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
  return ch = i() ? Object.assign : function(a, s) {
    for (var u, l = n(a), f, d = 1; d < arguments.length; d++) {
      u = Object(arguments[d]);
      for (var h in u)
        t.call(u, h) && (l[h] = u[h]);
      if (e) {
        f = e(u);
        for (var v = 0; v < f.length; v++)
          r.call(u, f[v]) && (l[f[v]] = u[f[v]]);
      }
    }
    return l;
  }, ch;
}
var lh, Jx;
function ug() {
  if (Jx) return lh;
  Jx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lh = e, lh;
}
var fh, Qx;
function TA() {
  return Qx || (Qx = 1, fh = Function.call.bind(Object.prototype.hasOwnProperty)), fh;
}
var dh, ew;
function iY() {
  if (ew) return dh;
  ew = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ug(), r = {}, n = TA();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, u, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            h = a[d](s, d, l, u, null, t);
          } catch (w) {
            h = w;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = f ? f() : "";
            e(
              "Failed " + u + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dh = i, dh;
}
var hh, tw;
function aY() {
  if (tw) return hh;
  tw = 1;
  var e = EA(), t = nY(), r = ug(), n = TA(), i = iY(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return hh = function(u, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(G) {
      var X = G && (f && G[f] || G[d]);
      if (typeof X == "function")
        return X;
    }
    var v = "<<anonymous>>", g = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: O(),
      arrayOf: S,
      element: _(),
      elementType: x(),
      instanceOf: E,
      node: D(),
      objectOf: M,
      oneOf: C,
      oneOfType: F,
      shape: N,
      exact: U
    };
    function w(G, X) {
      return G === X ? G !== 0 || 1 / G === 1 / X : G !== G && X !== X;
    }
    function y(G, X) {
      this.message = G, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(G) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, ae = 0;
      function ce(ge, xe, ye, we, ne, ue, pe) {
        if (we = we || v, ue = ue || ye, pe !== r) {
          if (l) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = we + ":" + ye;
            !X[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ue + "` prop on `" + we + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[Ee] = !0, ae++);
          }
        }
        return xe[ye] == null ? ge ? xe[ye] === null ? new y("The " + ne + " `" + ue + "` is marked as required " + ("in `" + we + "`, but its value is `null`.")) : new y("The " + ne + " `" + ue + "` is marked as required in " + ("`" + we + "`, but its value is `undefined`.")) : null : G(xe, ye, we, ne, ue);
      }
      var he = ce.bind(null, !1);
      return he.isRequired = ce.bind(null, !0), he;
    }
    function A(G) {
      function X(ae, ce, he, ge, xe, ye) {
        var we = ae[ce], ne = H(we);
        if (ne !== G) {
          var ue = Z(we);
          return new y(
            "Invalid " + ge + " `" + xe + "` of type " + ("`" + ue + "` supplied to `" + he + "`, expected ") + ("`" + G + "`."),
            { expectedType: G }
          );
        }
        return null;
      }
      return b(X);
    }
    function O() {
      return b(s);
    }
    function S(G) {
      function X(ae, ce, he, ge, xe) {
        if (typeof G != "function")
          return new y("Property `" + xe + "` of component `" + he + "` has invalid PropType notation inside arrayOf.");
        var ye = ae[ce];
        if (!Array.isArray(ye)) {
          var we = H(ye);
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected an array."));
        }
        for (var ne = 0; ne < ye.length; ne++) {
          var ue = G(ye, ne, he, ge, xe + "[" + ne + "]", r);
          if (ue instanceof Error)
            return ue;
        }
        return null;
      }
      return b(X);
    }
    function _() {
      function G(X, ae, ce, he, ge) {
        var xe = X[ae];
        if (!u(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(G);
    }
    function x() {
      function G(X, ae, ce, he, ge) {
        var xe = X[ae];
        if (!e.isValidElementType(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(G);
    }
    function E(G) {
      function X(ae, ce, he, ge, xe) {
        if (!(ae[ce] instanceof G)) {
          var ye = G.name || v, we = se(ae[ce]);
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected ") + ("instance of `" + ye + "`."));
        }
        return null;
      }
      return b(X);
    }
    function C(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function X(ae, ce, he, ge, xe) {
        for (var ye = ae[ce], we = 0; we < G.length; we++)
          if (w(ye, G[we]))
            return null;
        var ne = JSON.stringify(G, function(pe, j) {
          var Ee = Z(j);
          return Ee === "symbol" ? String(j) : j;
        });
        return new y("Invalid " + ge + " `" + xe + "` of value `" + String(ye) + "` " + ("supplied to `" + he + "`, expected one of " + ne + "."));
      }
      return b(X);
    }
    function M(G) {
      function X(ae, ce, he, ge, xe) {
        if (typeof G != "function")
          return new y("Property `" + xe + "` of component `" + he + "` has invalid PropType notation inside objectOf.");
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected an object."));
        for (var ne in ye)
          if (n(ye, ne)) {
            var ue = G(ye, ne, he, ge, xe + "." + ne, r);
            if (ue instanceof Error)
              return ue;
          }
        return null;
      }
      return b(X);
    }
    function F(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var X = 0; X < G.length; X++) {
        var ae = G[X];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(ae) + " at index " + X + "."
          ), s;
      }
      function ce(he, ge, xe, ye, we) {
        for (var ne = [], ue = 0; ue < G.length; ue++) {
          var pe = G[ue], j = pe(he, ge, xe, ye, we, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && ne.push(j.data.expectedType);
        }
        var Ee = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new y("Invalid " + ye + " `" + we + "` supplied to " + ("`" + xe + "`" + Ee + "."));
      }
      return b(ce);
    }
    function D() {
      function G(X, ae, ce, he, ge) {
        return z(X[ae]) ? null : new y("Invalid " + he + " `" + ge + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
      }
      return b(G);
    }
    function B(G, X, ae, ce, he) {
      return new y(
        (G || "React class") + ": " + X + " type `" + ae + "." + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + he + "`."
      );
    }
    function N(G) {
      function X(ae, ce, he, ge, xe) {
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type `" + we + "` " + ("supplied to `" + he + "`, expected `object`."));
        for (var ne in G) {
          var ue = G[ne];
          if (typeof ue != "function")
            return B(he, ge, xe, ne, Z(ue));
          var pe = ue(ye, ne, he, ge, xe + "." + ne, r);
          if (pe)
            return pe;
        }
        return null;
      }
      return b(X);
    }
    function U(G) {
      function X(ae, ce, he, ge, xe) {
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type `" + we + "` " + ("supplied to `" + he + "`, expected `object`."));
        var ne = t({}, ae[ce], G);
        for (var ue in ne) {
          var pe = G[ue];
          if (n(G, ue) && typeof pe != "function")
            return B(he, ge, xe, ue, Z(pe));
          if (!pe)
            return new y(
              "Invalid " + ge + " `" + xe + "` key `" + ue + "` supplied to `" + he + "`.\nBad object: " + JSON.stringify(ae[ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(G), null, "  ")
            );
          var j = pe(ye, ue, he, ge, xe + "." + ue, r);
          if (j)
            return j;
        }
        return null;
      }
      return b(X);
    }
    function z(G) {
      switch (typeof G) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !G;
        case "object":
          if (Array.isArray(G))
            return G.every(z);
          if (G === null || u(G))
            return !0;
          var X = h(G);
          if (X) {
            var ae = X.call(G), ce;
            if (X !== G.entries) {
              for (; !(ce = ae.next()).done; )
                if (!z(ce.value))
                  return !1;
            } else
              for (; !(ce = ae.next()).done; ) {
                var he = ce.value;
                if (he && !z(he[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(G, X) {
      return G === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function H(G) {
      var X = typeof G;
      return Array.isArray(G) ? "array" : G instanceof RegExp ? "object" : J(X, G) ? "symbol" : X;
    }
    function Z(G) {
      if (typeof G > "u" || G === null)
        return "" + G;
      var X = H(G);
      if (X === "object") {
        if (G instanceof Date)
          return "date";
        if (G instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function V(G) {
      var X = Z(G);
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
    function se(G) {
      return !G.constructor || !G.constructor.name ? v : G.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, hh;
}
var ph, rw;
function oY() {
  if (rw) return ph;
  rw = 1;
  var e = ug();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ph = function() {
    function n(s, u, l, f, d, h) {
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
  }, ph;
}
if (process.env.NODE_ENV !== "production") {
  var sY = EA(), uY = !0;
  xp.exports = aY()(sY.isElement, uY);
} else
  xp.exports = oY()();
var cY = xp.exports;
const je = /* @__PURE__ */ Qe(cY);
var lY = Object.getOwnPropertyNames, fY = Object.getOwnPropertySymbols, dY = Object.prototype.hasOwnProperty;
function nw(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function xc(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, s = a.get(r), u = a.get(n);
    if (s && u)
      return s === n && u === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function iw(e) {
  return lY(e).concat(fY(e));
}
var $A = Object.hasOwn || function(e, t) {
  return dY.call(e, t);
};
function So(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var CA = "_owner", aw = Object.getOwnPropertyDescriptor, ow = Object.keys;
function hY(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function pY(e, t) {
  return So(e.getTime(), t.getTime());
}
function sw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, s, u; (s = i.next()) && !s.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (u = l.next()) && !u.done; ) {
      var h = s.value, v = h[0], g = h[1], w = u.value, y = w[0], b = w[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, b, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function vY(e, t, r) {
  var n = ow(e), i = n.length;
  if (ow(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === CA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !$A(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function as(e, t, r) {
  var n = iw(e), i = n.length;
  if (iw(t).length !== i)
    return !1;
  for (var a, s, u; i-- > 0; )
    if (a = n[i], a === CA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !$A(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (s = aw(e, a), u = aw(t, a), (s || u) && (!s || !u || s.configurable !== u.configurable || s.enumerable !== u.enumerable || s.writable !== u.writable)))
      return !1;
  return !0;
}
function gY(e, t) {
  return So(e.valueOf(), t.valueOf());
}
function yY(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function uw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, s; (a = i.next()) && !a.done; ) {
    for (var u = t.values(), l = !1, f = 0; (s = u.next()) && !s.done; )
      !l && !n[f] && (l = r.equals(a.value, s.value, a.value, s.value, e, t, r)) && (n[f] = !0), f++;
    if (!l)
      return !1;
  }
  return !0;
}
function mY(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var bY = "[object Arguments]", xY = "[object Boolean]", wY = "[object Date]", _Y = "[object Map]", OY = "[object Number]", AY = "[object Object]", SY = "[object RegExp]", PY = "[object Set]", EY = "[object String]", TY = Array.isArray, cw = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, lw = Object.assign, $Y = Object.prototype.toString.call.bind(Object.prototype.toString);
function CY(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, s = e.areRegExpsEqual, u = e.areSetsEqual, l = e.areTypedArraysEqual;
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
    if (TY(d))
      return t(d, h, v);
    if (cw != null && cw(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return s(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return u(d, h, v);
    var w = $Y(d);
    return w === wY ? r(d, h, v) : w === SY ? s(d, h, v) : w === _Y ? n(d, h, v) : w === PY ? u(d, h, v) : w === AY ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : w === bY ? i(d, h, v) : w === xY || w === OY || w === EY ? a(d, h, v) : !1;
  };
}
function MY(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? as : hY,
    areDatesEqual: pY,
    areMapsEqual: n ? nw(sw, as) : sw,
    areObjectsEqual: n ? as : vY,
    arePrimitiveWrappersEqual: gY,
    areRegExpsEqual: yY,
    areSetsEqual: n ? nw(uw, as) : uw,
    areTypedArraysEqual: n ? as : mY
  };
  if (r && (i = lw({}, i, r(i))), t) {
    var a = xc(i.areArraysEqual), s = xc(i.areMapsEqual), u = xc(i.areObjectsEqual), l = xc(i.areSetsEqual);
    i = lw({}, i, {
      areArraysEqual: a,
      areMapsEqual: s,
      areObjectsEqual: u,
      areSetsEqual: l
    });
  }
  return i;
}
function IY(e) {
  return function(t, r, n, i, a, s, u) {
    return e(t, r, u);
  };
}
function kY(e) {
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
  var s = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(l, f) {
    return r(l, f, s);
  };
}
var jY = Ai();
Ai({ strict: !0 });
Ai({ circular: !0 });
Ai({
  circular: !0,
  strict: !0
});
Ai({
  createInternalComparator: function() {
    return So;
  }
});
Ai({
  strict: !0,
  createInternalComparator: function() {
    return So;
  }
});
Ai({
  circular: !0,
  createInternalComparator: function() {
    return So;
  }
});
Ai({
  circular: !0,
  createInternalComparator: function() {
    return So;
  },
  strict: !0
});
function Ai(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, s = a === void 0 ? !1 : a, u = MY(e), l = CY(u), f = n ? n(l) : IY(l);
  return kY({ circular: r, comparator: l, createState: i, equals: f, strict: s });
}
function RY(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function fw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : RY(i);
  };
  requestAnimationFrame(n);
}
function wp(e) {
  "@babel/helpers - typeof";
  return wp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wp(e);
}
function NY(e) {
  return FY(e) || BY(e) || LY(e) || DY();
}
function DY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LY(e, t) {
  if (e) {
    if (typeof e == "string") return dw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dw(e, t);
  }
}
function dw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FY(e) {
  if (Array.isArray(e)) return e;
}
function WY() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var s = a, u = NY(s), l = u[0], f = u.slice(1);
        if (typeof l == "number") {
          fw(i.bind(null, f), l);
          return;
        }
        i(l), fw(i.bind(null, f));
        return;
      }
      wp(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function Fs(e) {
  "@babel/helpers - typeof";
  return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fs(e);
}
function hw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hw(Object(r), !0).forEach(function(n) {
      MA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MA(e, t, r) {
  return t = zY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zY(e) {
  var t = UY(e, "string");
  return Fs(t) === "symbol" ? t : String(t);
}
function UY(e, t) {
  if (Fs(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fs(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HY = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, GY = function(t) {
  return t;
}, KY = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hs = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return pw(pw({}, n), {}, MA({}, i, t(i, r[i])));
  }, {});
}, vw = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(KY(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, qY = process.env.NODE_ENV !== "production", il = function(t, r, n, i, a, s, u, l) {
  if (qY && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, s, u, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function VY(e, t) {
  return ZY(e) || XY(e, t) || IA(e, t) || YY();
}
function YY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function ZY(e) {
  if (Array.isArray(e)) return e;
}
function JY(e) {
  return t9(e) || e9(e) || IA(e) || QY();
}
function QY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IA(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function e9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t9(e) {
  if (Array.isArray(e)) return _p(e);
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var al = 1e-4, kA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, jA = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, gw = function(t, r) {
  return function(n) {
    var i = kA(t, r);
    return jA(i, n);
  };
}, r9 = function(t, r) {
  return function(n) {
    var i = kA(t, r), a = [].concat(JY(i.map(function(s, u) {
      return s * u;
    }).slice(1)), [0]);
    return jA(a, n);
  };
}, yw = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], s = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, s = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, s = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, s = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, s = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, s = 0.58, u = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(b) {
            return parseFloat(b);
          }), d = VY(f, 4);
          i = d[0], a = d[1], s = d[2], u = d[3];
        } else
          il(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  il([i, s, a, u].every(function(b) {
    return typeof b == "number" && b >= 0 && b <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = gw(i, s), v = gw(a, u), g = r9(i, s), w = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, y = function(A) {
    for (var O = A > 1 ? 1 : A, S = O, _ = 0; _ < 8; ++_) {
      var x = h(S) - O, E = g(S);
      if (Math.abs(x - O) < al || E < al)
        return v(S);
      S = w(S - x / E);
    }
    return v(S);
  };
  return y.isStepper = !1, y;
}, n9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, s = t.dt, u = s === void 0 ? 17 : s, l = function(d, h, v) {
    var g = -(d - h) * n, w = v * a, y = v + (g - w) * u / 1e3, b = v * u / 1e3 + d;
    return Math.abs(b - h) < al && Math.abs(y) < al ? [h, 0] : [b, y];
  };
  return l.isStepper = !0, l.dt = u, l;
}, i9 = function() {
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
        return yw(i);
      case "spring":
        return n9();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return yw(i);
        il(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (il(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ws(e) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ws(e);
}
function mw(e) {
  return s9(e) || o9(e) || RA(e) || a9();
}
function a9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s9(e) {
  if (Array.isArray(e)) return Ap(e);
}
function bw(e, t) {
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
    t % 2 ? bw(Object(r), !0).forEach(function(n) {
      Op(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Op(e, t, r) {
  return t = u9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u9(e) {
  var t = c9(e, "string");
  return Ws(t) === "symbol" ? t : String(t);
}
function c9(e, t) {
  if (Ws(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ws(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l9(e, t) {
  return h9(e) || d9(e, t) || RA(e, t) || f9();
}
function f9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RA(e, t) {
  if (e) {
    if (typeof e == "string") return Ap(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ap(e, t);
  }
}
function Ap(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function d9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function h9(e) {
  if (Array.isArray(e)) return e;
}
var ol = function(t, r, n) {
  return t + (r - t) * n;
}, Sp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, p9 = function e(t, r, n) {
  var i = hs(function(a, s) {
    if (Sp(s)) {
      var u = t(s.from, s.to, s.velocity), l = l9(u, 2), f = l[0], d = l[1];
      return Nt(Nt({}, s), {}, {
        from: f,
        velocity: d
      });
    }
    return s;
  }, r);
  return n < 1 ? hs(function(a, s) {
    return Sp(s) ? Nt(Nt({}, s), {}, {
      velocity: ol(s.velocity, i[a].velocity, n),
      from: ol(s.from, i[a].from, n)
    }) : s;
  }, r) : e(t, i, n - 1);
};
const v9 = function(e, t, r, n, i) {
  var a = HY(e, t), s = a.reduce(function(b, A) {
    return Nt(Nt({}, b), {}, Op({}, A, [e[A], t[A]]));
  }, {}), u = a.reduce(function(b, A) {
    return Nt(Nt({}, b), {}, Op({}, A, {
      from: e[A],
      velocity: 0,
      to: t[A]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return hs(function(A, O) {
      return O.from;
    }, u);
  }, g = function() {
    return !Object.values(u).filter(Sp).length;
  }, w = function(A) {
    f || (f = A);
    var O = A - f, S = O / r.dt;
    u = p9(r, u, S), i(Nt(Nt(Nt({}, e), t), v())), f = A, g() || (l = requestAnimationFrame(h));
  }, y = function(A) {
    d || (d = A);
    var O = (A - d) / n, S = hs(function(x, E) {
      return ol.apply(void 0, mw(E).concat([r(O)]));
    }, s);
    if (i(Nt(Nt(Nt({}, e), t), S)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = hs(function(x, E) {
        return ol.apply(void 0, mw(E).concat([r(1)]));
      }, s);
      i(Nt(Nt(Nt({}, e), t), _));
    }
  };
  return h = r.isStepper ? w : y, function() {
    return requestAnimationFrame(h), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
}
var g9 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function y9(e, t) {
  if (e == null) return {};
  var r = m9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vh(e) {
  return _9(e) || w9(e) || x9(e) || b9();
}
function b9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x9(e, t) {
  if (e) {
    if (typeof e == "string") return Pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pp(e, t);
  }
}
function w9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _9(e) {
  if (Array.isArray(e)) return Pp(e);
}
function Pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xw(e, t) {
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
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      ss(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ss(e, t, r) {
  return t = NA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, NA(n.key), n);
  }
}
function S9(e, t, r) {
  return t && A9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NA(e) {
  var t = P9(e, "string");
  return Xa(t) === "symbol" ? t : String(t);
}
function P9(e, t) {
  if (Xa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ep(e, t);
}
function Ep(e, t) {
  return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ep(e, t);
}
function T9(e) {
  var t = $9();
  return function() {
    var n = sl(e), i;
    if (t) {
      var a = sl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Tp(this, i);
  };
}
function Tp(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $p(e);
}
function $p(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $9() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sl(e) {
  return sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sl(e);
}
var Zr = /* @__PURE__ */ function(e) {
  E9(r, e);
  var t = T9(r);
  function r(n, i) {
    var a;
    O9(this, r), a = t.call(this, n, i);
    var s = a.props, u = s.isActive, l = s.attributeName, f = s.from, d = s.to, h = s.steps, v = s.children, g = s.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind($p(a)), a.changeStyle = a.changeStyle.bind($p(a)), !u || g <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), Tp(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, Tp(a);
      a.state = {
        style: l ? ss({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return S9(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, s = i.canBegin;
      this.mounted = !0, !(!a || !s) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, s = a.isActive, u = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, d = a.to, h = a.from, v = this.state.style;
      if (u) {
        if (!s) {
          var g = {
            style: l ? ss({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!(jY(i.to, d) && i.canBegin && i.isActive)) {
          var w = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = w || f ? h : i.to;
          if (this.state && v) {
            var b = {
              style: l ? ss({}, l, y) : y
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
      var a = this, s = i.from, u = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = v9(s, u, i9(f), l, this.changeStyle), w = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, w, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, s = i.steps, u = i.begin, l = i.onAnimationStart, f = s[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, b, A) {
        if (A === 0)
          return y;
        var O = b.duration, S = b.easing, _ = S === void 0 ? "ease" : S, x = b.style, E = b.properties, C = b.onAnimationEnd, M = A > 0 ? s[A - 1] : b, F = E || Object.keys(x);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(vh(y), [a.runJSAnimation.bind(a, {
            from: M.style,
            to: x,
            duration: O,
            easing: _
          }), O]);
        var D = vw(F, O, _), B = Ur(Ur(Ur({}, M.style), x), {}, {
          transition: D
        });
        return [].concat(vh(y), [B, O, C]).filter(GY);
      };
      return this.manager.start([l].concat(vh(s.reduce(g, [d, Math.max(v, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = WY());
      var a = i.begin, s = i.duration, u = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, w = this.manager;
      if (this.unSubscribe = w.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = u ? ss({}, u, l) : l, b = vw(Object.keys(y), s, f);
      w.start([d, a, Ur(Ur({}, y), {}, {
        transition: b
      }), s, h]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var s = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = y9(i, g9), f = Vi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!u || f === 0 || s <= 0)
        return a;
      var h = function(g) {
        var w = g.props, y = w.style, b = y === void 0 ? {} : y, A = w.className, O = /* @__PURE__ */ St(g, Ur(Ur({}, l), {}, {
          style: Ur(Ur({}, b), d),
          className: A
        }));
        return O;
      };
      return f === 1 ? h(Vi.only(a)) : /* @__PURE__ */ k.createElement("div", null, Vi.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Nr);
Zr.displayName = "Animate";
Zr.defaultProps = {
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
Zr.propTypes = {
  from: je.oneOfType([je.object, je.string]),
  to: je.oneOfType([je.object, je.string]),
  attributeName: je.string,
  // animation duration
  duration: je.number,
  begin: je.number,
  easing: je.oneOfType([je.string, je.func]),
  steps: je.arrayOf(je.shape({
    duration: je.number.isRequired,
    style: je.object.isRequired,
    easing: je.oneOfType([je.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), je.func]),
    // transition css properties(dash case), optional
    properties: je.arrayOf("string"),
    onAnimationEnd: je.func
  })),
  children: je.oneOfType([je.node, je.func]),
  isActive: je.bool,
  canBegin: je.bool,
  onAnimationEnd: je.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: je.bool,
  onAnimationStart: je.func,
  onAnimationReStart: je.func
};
je.object, je.object, je.object, je.element;
je.object, je.object, je.object, je.oneOfType([je.array, je.element]), je.any;
function zs(e) {
  "@babel/helpers - typeof";
  return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zs(e);
}
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ul.apply(this, arguments);
}
function C9(e, t) {
  return j9(e) || k9(e, t) || I9(e, t) || M9();
}
function M9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I9(e, t) {
  if (e) {
    if (typeof e == "string") return ww(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ww(e, t);
  }
}
function ww(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function k9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function j9(e) {
  if (Array.isArray(e)) return e;
}
function _w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ow(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _w(Object(r), !0).forEach(function(n) {
      R9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R9(e, t, r) {
  return t = N9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N9(e) {
  var t = D9(e, "string");
  return zs(t) == "symbol" ? t : String(t);
}
function D9(e, t) {
  if (zs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Aw = function(t, r, n, i, a) {
  var s = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (s > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > s ? s : a[v];
    d = "M".concat(t, ",").concat(r + u * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + u * h[1])), d += "L ".concat(t + n, ",").concat(r + i - u * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - u * h[3])), d += "Z";
  } else if (s > 0 && a === +a && a > 0) {
    var w = Math.min(s, a);
    d = "M ".concat(t, ",").concat(r + u * w, `
            A `).concat(w, ",").concat(w, ",0,0,").concat(f, ",").concat(t + l * w, ",").concat(r, `
            L `).concat(t + n - l * w, ",").concat(r, `
            A `).concat(w, ",").concat(w, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + u * w, `
            L `).concat(t + n, ",").concat(r + i - u * w, `
            A `).concat(w, ",").concat(w, ",0,0,").concat(f, ",").concat(t + n - l * w, ",").concat(r + i, `
            L `).concat(t + l * w, ",").concat(r + i, `
            A `).concat(w, ",").concat(w, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - u * w, " Z");
  } else
    d = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return d;
}, L9 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, s = r.y, u = r.width, l = r.height;
  if (Math.abs(u) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + u), d = Math.max(a, a + u), h = Math.min(s, s + l), v = Math.max(s, s + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, B9 = {
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
}, cg = function(t) {
  var r = Ow(Ow({}, B9), t), n = Fa(), i = Nn(-1), a = C9(i, 2), s = a[0], u = a[1];
  na(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && u(_);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, g = r.className, w = r.animationEasing, y = r.animationDuration, b = r.animationBegin, A = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var S = Me("recharts-rectangle", g);
  return O ? /* @__PURE__ */ k.createElement(Zr, {
    canBegin: s > 0,
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
    animationEasing: w,
    isActive: O
  }, function(_) {
    var x = _.width, E = _.height, C = _.x, M = _.y;
    return /* @__PURE__ */ k.createElement(Zr, {
      canBegin: s > 0,
      from: "0px ".concat(s === -1 ? 1 : s, "px"),
      to: "".concat(s, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      isActive: A,
      easing: w
    }, /* @__PURE__ */ k.createElement("path", ul({}, me(r, !0), {
      className: S,
      d: Aw(C, M, x, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("path", ul({}, me(r, !0), {
    className: S,
    d: Aw(l, f, d, h, v)
  }));
}, F9 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function W9(e, t) {
  if (e == null) return {};
  var r = z9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function z9(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Sw(e) {
  return K9(e) || G9(e) || H9(e) || U9();
}
function U9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H9(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function G9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function K9(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Pw = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, q9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Pw(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Pw(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, ps = function(t, r) {
  var n = q9(t);
  r && (n = [n.reduce(function(a, s) {
    return [].concat(Sw(a), Sw(s));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(s, u, l) {
      return "".concat(s).concat(l === 0 ? "M" : "L").concat(u.x, ",").concat(u.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, V9 = function(t, r, n) {
  var i = ps(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(ps(r.reverse(), n).slice(1));
}, Y9 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, s = W9(t, F9);
  if (!r || !r.length)
    return null;
  var u = Me("recharts-polygon", n);
  if (i && i.length) {
    var l = s.stroke && s.stroke !== "none", f = V9(r, i, a);
    return /* @__PURE__ */ k.createElement("g", {
      className: u
    }, /* @__PURE__ */ k.createElement("path", Ma({}, me(s, !0), {
      fill: f.slice(-1) === "Z" ? s.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(s, !0), {
      fill: "none",
      d: ps(r, a)
    })) : null, l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(s, !0), {
      fill: "none",
      d: ps(i, a)
    })) : null);
  }
  var d = ps(r, a);
  return /* @__PURE__ */ k.createElement("path", Ma({}, me(s, !0), {
    fill: d.slice(-1) === "Z" ? s.fill : "none",
    className: u,
    d
  }));
};
function Mp() {
  return Mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mp.apply(this, arguments);
}
var du = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, s = Me("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ k.createElement("circle", Mp({}, me(t, !1), Tc(t), {
    className: s,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Us(e) {
  "@babel/helpers - typeof";
  return Us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Us(e);
}
var X9 = ["x", "y", "top", "left", "width", "height", "className"];
function Ip() {
  return Ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ip.apply(this, arguments);
}
function Ew(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Z9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ew(Object(r), !0).forEach(function(n) {
      J9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J9(e, t, r) {
  return t = Q9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q9(e) {
  var t = eX(e, "string");
  return Us(t) == "symbol" ? t : String(t);
}
function eX(e, t) {
  if (Us(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Us(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tX(e, t) {
  if (e == null) return {};
  var r = rX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rX(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var nX = function(t, r, n, i, a, s) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(s, ",").concat(r, "h").concat(n);
}, iX = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, s = t.top, u = s === void 0 ? 0 : s, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, w = t.className, y = tX(t, X9), b = Z9({
    x: n,
    y: a,
    top: u,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(u) || !oe(f) ? null : /* @__PURE__ */ k.createElement("path", Ip({}, me(b, !0), {
    className: Me("recharts-cross", w),
    d: nX(n, a, h, g, u, f)
  }));
}, aX = Yl, oX = ZO, sX = pn;
function uX(e, t) {
  return e && e.length ? aX(e, sX(t), oX) : void 0;
}
var cX = uX;
const lX = /* @__PURE__ */ Qe(cX);
var fX = Yl, dX = pn, hX = JO;
function pX(e, t) {
  return e && e.length ? fX(e, dX(t), hX) : void 0;
}
var vX = pX;
const gX = /* @__PURE__ */ Qe(vX);
var yX = ["cx", "cy", "angle", "ticks", "axisLine"], mX = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function Tw(e, t) {
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
    t % 2 ? Tw(Object(r), !0).forEach(function(n) {
      Ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $w(e, t) {
  if (e == null) return {};
  var r = bX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bX(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function xX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, LA(n.key), n);
  }
}
function wX(e, t, r) {
  return t && Cw(e.prototype, t), r && Cw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _X(e, t, r) {
  return t = cl(t), OX(e, DA() ? Reflect.construct(t, r || [], cl(e).constructor) : t.apply(e, r));
}
function OX(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AX(e);
}
function AX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DA = function() {
    return !!e;
  })();
}
function cl(e) {
  return cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cl(e);
}
function SX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kp(e, t);
}
function Ql(e, t, r) {
  return t = LA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LA(e) {
  var t = PX(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function PX(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ef = /* @__PURE__ */ function(e) {
  SX(t, e);
  function t() {
    return xX(this, t), _X(this, t, arguments);
  }
  return wX(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, s = a.angle, u = a.cx, l = a.cy;
        return it(u, l, i, s);
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
      var n = this.props, i = n.cx, a = n.cy, s = n.angle, u = n.ticks, l = lX(u, function(d) {
        return d.coordinate || 0;
      }), f = gX(u, function(d) {
        return d.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: s,
        endAngle: s,
        innerRadius: f.coordinate || 0,
        outerRadius: l.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, s = n.angle, u = n.ticks, l = n.axisLine, f = $w(n, yX), d = u.reduce(function(w, y) {
        return [Math.min(w[0], y.coordinate), Math.max(w[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], s), v = it(i, a, d[1], s), g = Di(Di(Di({}, me(f, !1)), {}, {
        fill: "none"
      }, me(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ k.createElement("line", vs({
        className: "recharts-polar-radius-axis-line"
      }, g));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, s = i.tick, u = i.angle, l = i.tickFormatter, f = i.stroke, d = $w(i, mX), h = this.getTickTextAnchor(), v = me(d, !1), g = me(s, !1), w = a.map(function(y, b) {
        var A = n.getTickValueCoord(y), O = Di(Di(Di(Di({
          textAnchor: h,
          transform: "rotate(".concat(90 - u, ", ").concat(A.x, ", ").concat(A.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, g), {}, {
          index: b
        }, A), {}, {
          payload: y
        });
        return /* @__PURE__ */ k.createElement(Le, vs({
          className: Me("recharts-polar-radius-axis-tick", OA(s)),
          key: "tick-".concat(y.coordinate)
        }, Ji(n.props, y, b)), t.renderTickItem(s, O, l ? l(y.value, b) : y.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, w);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, s = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), s && this.renderTicks(), Et.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(vi, vs({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(Nr);
Ql(ef, "displayName", "PolarRadiusAxis");
Ql(ef, "axisType", "radiusAxis");
Ql(ef, "defaultProps", {
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
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zi.apply(this, arguments);
}
function Mw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mw(Object(r), !0).forEach(function(n) {
      tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Iw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, FA(n.key), n);
  }
}
function TX(e, t, r) {
  return t && Iw(e.prototype, t), r && Iw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $X(e, t, r) {
  return t = ll(t), CX(e, BA() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function CX(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MX(e);
}
function MX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BA = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function IX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jp(e, t);
}
function jp(e, t) {
  return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jp(e, t);
}
function tf(e, t, r) {
  return t = FA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FA(e) {
  var t = kX(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function kX(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jX = Math.PI / 180, kw = 1e-5, rf = /* @__PURE__ */ function(e) {
  IX(t, e);
  function t() {
    return EX(this, t), $X(this, t, arguments);
  }
  return TX(t, [{
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
        var i = this.props, a = i.cx, s = i.cy, u = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = it(a, s, u, n.coordinate), v = it(a, s, u + (l === "inner" ? -1 : 1) * d, n.coordinate);
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
      var i = this.props.orientation, a = Math.cos(-n.coordinate * jX), s;
      return a > kw ? s = i === "outer" ? "start" : "end" : a < -kw ? s = i === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, s = n.radius, u = n.axisLine, l = n.axisLineType, f = Li(Li({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(u, !1));
      if (l === "circle")
        return /* @__PURE__ */ k.createElement(du, zi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: s
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, s, v.coordinate);
      });
      return /* @__PURE__ */ k.createElement(Y9, zi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, s = i.tick, u = i.tickLine, l = i.tickFormatter, f = i.stroke, d = me(this.props, !1), h = me(s, !1), v = Li(Li({}, d), {}, {
        fill: "none"
      }, me(u, !1)), g = a.map(function(w, y) {
        var b = n.getTickLineCoord(w), A = n.getTickTextAnchor(w), O = Li(Li(Li({
          textAnchor: A
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: y,
          payload: w,
          x: b.x2,
          y: b.y2
        });
        return /* @__PURE__ */ k.createElement(Le, zi({
          className: Me("recharts-polar-angle-axis-tick", OA(s)),
          key: "tick-".concat(w.coordinate)
        }, Ji(n.props, w, y)), u && /* @__PURE__ */ k.createElement("line", zi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, b)), s && t.renderTickItem(s, O, l ? l(w.value, y) : w.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-angle-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, s = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-angle-axis", this.props.className)
      }, s && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(vi, zi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(Nr);
tf(rf, "displayName", "PolarAngleAxis");
tf(rf, "axisType", "angleAxis");
tf(rf, "defaultProps", {
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
var RX = K_, NX = RX(Object.getPrototypeOf, Object), DX = NX, LX = Un, BX = DX, FX = Hn, WX = "[object Object]", zX = Function.prototype, UX = Object.prototype, WA = zX.toString, HX = UX.hasOwnProperty, GX = WA.call(Object);
function KX(e) {
  if (!FX(e) || LX(e) != WX)
    return !1;
  var t = BX(e);
  if (t === null)
    return !0;
  var r = HX.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && WA.call(r) == GX;
}
var qX = KX;
const VX = /* @__PURE__ */ Qe(qX);
var YX = Un, XX = Hn, ZX = "[object Boolean]";
function JX(e) {
  return e === !0 || e === !1 || XX(e) && YX(e) == ZX;
}
var QX = JX;
const e7 = /* @__PURE__ */ Qe(QX);
function Hs(e) {
  "@babel/helpers - typeof";
  return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hs(e);
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
function t7(e, t) {
  return a7(e) || i7(e, t) || n7(e, t) || r7();
}
function r7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n7(e, t) {
  if (e) {
    if (typeof e == "string") return jw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jw(e, t);
  }
}
function jw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function a7(e) {
  if (Array.isArray(e)) return e;
}
function Rw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rw(Object(r), !0).forEach(function(n) {
      o7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o7(e, t, r) {
  return t = s7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s7(e) {
  var t = u7(e, "string");
  return Hs(t) == "symbol" ? t : String(t);
}
function u7(e, t) {
  if (Hs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dw = function(t, r, n, i, a) {
  var s = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - s / 2, ",").concat(r + a), u += "L ".concat(t + n - s / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, c7 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, l7 = function(t) {
  var r = Nw(Nw({}, c7), t), n = Fa(), i = Nn(-1), a = t7(i, 2), s = a[0], u = a[1];
  na(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && u(S);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, g = r.className, w = r.animationEasing, y = r.animationDuration, b = r.animationBegin, A = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Me("recharts-trapezoid", g);
  return A ? /* @__PURE__ */ k.createElement(Zr, {
    canBegin: s > 0,
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
    animationEasing: w,
    isActive: A
  }, function(S) {
    var _ = S.upperWidth, x = S.lowerWidth, E = S.height, C = S.x, M = S.y;
    return /* @__PURE__ */ k.createElement(Zr, {
      canBegin: s > 0,
      from: "0px ".concat(s === -1 ? 1 : s, "px"),
      to: "".concat(s, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: y,
      easing: w
    }, /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
      className: O,
      d: Dw(C, M, _, x, E),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
    className: O,
    d: Dw(l, f, d, h, v)
  })));
}, f7 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Gs(e) {
  "@babel/helpers - typeof";
  return Gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gs(e);
}
function d7(e, t) {
  if (e == null) return {};
  var r = h7(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h7(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Lw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lw(Object(r), !0).forEach(function(n) {
      p7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p7(e, t, r) {
  return t = v7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v7(e) {
  var t = g7(e, "string");
  return Gs(t) == "symbol" ? t : String(t);
}
function g7(e, t) {
  if (Gs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y7(e, t) {
  return dl(dl({}, t), e);
}
function m7(e, t) {
  return e === "symbols";
}
function Bw(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(cg, r);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(l7, r);
    case "sector":
      return /* @__PURE__ */ k.createElement(PA, r);
    case "symbols":
      if (m7(t))
        return /* @__PURE__ */ k.createElement(Pv, r);
      break;
    default:
      return null;
  }
}
function b7(e) {
  return /* @__PURE__ */ qr(e) ? e.props : e;
}
function zA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? y7 : n, a = e.activeClassName, s = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, l = d7(e, f7), f;
  if (/* @__PURE__ */ qr(t))
    f = /* @__PURE__ */ St(t, dl(dl({}, l), b7(t)));
  else if (Pe(t))
    f = t(l);
  else if (VX(t) && !e7(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ k.createElement(Bw, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ k.createElement(Bw, {
      shapeType: r,
      elementProps: h
    });
  }
  return u ? /* @__PURE__ */ k.createElement(Le, {
    className: s
  }, f) : f;
}
function nf(e, t) {
  return t != null && "trapezoids" in e.props;
}
function af(e, t) {
  return t != null && "sectors" in e.props;
}
function Ks(e, t) {
  return t != null && "points" in e.props;
}
function x7(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function w7(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function _7(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function O7(e, t) {
  var r;
  return nf(e, t) ? r = x7 : af(e, t) ? r = w7 : Ks(e, t) && (r = _7), r;
}
function A7(e, t) {
  var r;
  return nf(e, t) ? r = "trapezoids" : af(e, t) ? r = "sectors" : Ks(e, t) && (r = "points"), r;
}
function S7(e, t) {
  if (nf(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (af(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Ks(e, t) ? t.payload : {};
}
function P7(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = A7(r, t), a = S7(r, t), s = n.filter(function(l, f) {
    var d = Qi(a, l), h = r.props[i].filter(function(w) {
      var y = O7(r, t);
      return y(w, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), u = n.indexOf(s[s.length - 1]);
  return u;
}
var Sc;
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
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
function Fw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fw(Object(r), !0).forEach(function(n) {
      Mr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ww(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, HA(n.key), n);
  }
}
function T7(e, t, r) {
  return t && Ww(e.prototype, t), r && Ww(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $7(e, t, r) {
  return t = hl(t), C7(e, UA() ? Reflect.construct(t, r || [], hl(e).constructor) : t.apply(e, r));
}
function C7(e, t) {
  if (t && (Qa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $a(e);
}
function UA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UA = function() {
    return !!e;
  })();
}
function hl(e) {
  return hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hl(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rp(e, t);
}
function Mr(e, t, r) {
  return t = HA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HA(e) {
  var t = I7(e, "string");
  return Qa(t) == "symbol" ? t : String(t);
}
function I7(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kn = /* @__PURE__ */ function(e) {
  M7(t, e);
  function t(r) {
    var n;
    return E7(this, t), n = $7(this, t, [r]), Mr($a(n), "pieRef", null), Mr($a(n), "sectorRefs", []), Mr($a(n), "id", oa("recharts-pie-")), Mr($a(n), "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Pe(i) && i();
    }), Mr($a(n), "handleAnimationStart", function() {
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
  return T7(t, [{
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
      var a = this.props, s = a.label, u = a.labelLine, l = a.dataKey, f = a.valueKey, d = me(this.props, !1), h = me(s, !1), v = me(u, !1), g = s && s.offsetRadius || 20, w = n.map(function(y, b) {
        var A = (y.startAngle + y.endAngle) / 2, O = it(y.cx, y.cy, y.outerRadius + g, A), S = dt(dt(dt(dt({}, d), y), {}, {
          stroke: "none"
        }, h), {}, {
          index: b,
          textAnchor: t.getTextAnchor(O.x, y.cx)
        }, O), _ = dt(dt(dt(dt({}, d), y), {}, {
          fill: "none",
          stroke: y.fill
        }, v), {}, {
          index: b,
          points: [it(y.cx, y.cy, y.outerRadius, A), O],
          key: "line"
        }), x = l;
        return Te(l) && Te(f) ? x = "value" : Te(l) && (x = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Le, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(b)
        }, u && t.renderLabelLineItem(u, _), t.renderLabelItem(s, S, xt(y, x)));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-pie-labels"
      }, w);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, s = a.activeShape, u = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? s : v, w = dt(dt({}, f), {}, {
          stroke: u ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ k.createElement(Le, Ia({
          ref: function(b) {
            b && !i.sectorRefs.includes(b) && i.sectorRefs.push(b);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Ji(i.props, f, d), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(d)
        }), /* @__PURE__ */ k.createElement(zA, Ia({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, w)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, s = i.isAnimationActive, u = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(Zr, {
        begin: u,
        duration: l,
        isActive: s,
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
      }, function(w) {
        var y = w.t, b = [], A = a && a[0], O = A.startAngle;
        return a.forEach(function(S, _) {
          var x = v && v[_], E = _ > 0 ? gr(S, "paddingAngle", 0) : 0;
          if (x) {
            var C = Pt(x.endAngle - x.startAngle, S.endAngle - S.startAngle), M = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + C(y) + E
            });
            b.push(M), O = M.endAngle;
          } else {
            var F = S.endAngle, D = S.startAngle, B = Pt(0, F - D), N = B(y), U = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + N + E
            });
            b.push(U), O = U.endAngle;
          }
        }), /* @__PURE__ */ k.createElement(Le, null, n.renderSectorsStatically(b));
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
              var s = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "ArrowRight": {
              var u = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[u].focus(), i.setState({
                sectorToFocus: u
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
      var n = this.props, i = n.sectors, a = n.isAnimationActive, s = this.state.prevSectors;
      return a && i && i.length && (!s || !Qi(s, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, s = i.sectors, u = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, w = this.state.isAnimationFinished;
      if (a || !s || !s.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Me("recharts-pie", u);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(A) {
          n.pieRef = A;
        }
      }, this.renderSectors(), l && this.renderLabels(s), Et.renderCallByParent(this.props, null, !1), (!g || w) && kr.renderCallByParent(this.props, s, !1));
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
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      if (Pe(n))
        return n(i);
      var a = Me("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ k.createElement(Zi, Ia({}, i, {
        type: "linear",
        className: a
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      var s = a;
      if (Pe(n) && (s = n(i), /* @__PURE__ */ k.isValidElement(s)))
        return s;
      var u = Me("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ k.createElement(vi, Ia({}, i, {
        alignmentBaseline: "middle",
        className: u
      }), s);
    }
  }]), t;
}(Nr);
Sc = Kn;
Mr(Kn, "displayName", "Pie");
Mr(Kn, "defaultProps", {
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
  isAnimationActive: !Yr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Mr(Kn, "parseDeltaAngle", function(e, t) {
  var r = Gt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Mr(Kn, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = me(e.props, !1), a = yr(n, Nv);
  return r && r.length ? r.map(function(s, u) {
    return dt(dt(dt({
      payload: s
    }, i), s), a && a[u] && a[u].props);
  }) : a && a.length ? a.map(function(s) {
    return dt(dt({}, i), s.props);
  }) : [];
});
Mr(Kn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, s = _A(i, a), u = n + Kt(e.props.cx, i, i / 2), l = r + Kt(e.props.cy, a, a / 2), f = Kt(e.props.innerRadius, s, 0), d = Kt(e.props.outerRadius, s, s * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: u,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Mr(Kn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Sc.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, s = i.startAngle, u = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), w = Sc.parseCoordinateOfPie(t, r), y = Sc.parseDeltaAngle(s, u), b = Math.abs(y), A = f;
  Te(f) && Te(h) ? (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = "value") : Te(f) && (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = h);
  var O = n.filter(function(M) {
    return xt(M, A, 0) !== 0;
  }).length, S = (b >= 360 ? O : O - 1) * l, _ = b - O * g - S, x = n.reduce(function(M, F) {
    var D = xt(F, A, 0);
    return M + (oe(D) ? D : 0);
  }, 0), E;
  if (x > 0) {
    var C;
    E = n.map(function(M, F) {
      var D = xt(M, A, 0), B = xt(M, d, F), N = (oe(D) ? D : 0) / x, U;
      F ? U = C.endAngle + Gt(y) * l * (D !== 0 ? 1 : 0) : U = s;
      var z = U + Gt(y) * ((D !== 0 ? g : 0) + N * _), J = (U + z) / 2, H = (w.innerRadius + w.outerRadius) / 2, Z = [{
        name: B,
        value: D,
        payload: M,
        dataKey: A,
        type: v
      }], V = it(w.cx, w.cy, H, J);
      return C = dt(dt(dt({
        percent: N,
        cornerRadius: a,
        name: B,
        tooltipPayload: Z,
        midAngle: J,
        middleRadius: H,
        tooltipPosition: V
      }, M), w), {}, {
        value: xt(M, A),
        startAngle: U,
        endAngle: z,
        payload: M,
        paddingAngle: Gt(y) * l
      }), C;
    });
  }
  return dt(dt({}, w), {}, {
    sectors: E,
    data: n
  });
});
var k7 = Math.ceil, j7 = Math.max;
function R7(e, t, r, n) {
  for (var i = -1, a = j7(k7((t - e) / (r || 1)), 0), s = Array(a); a--; )
    s[n ? a : ++i] = e, e += r;
  return s;
}
var N7 = R7, D7 = dO, zw = 1 / 0, L7 = 17976931348623157e292;
function B7(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = D7(e), e === zw || e === -zw) {
    var t = e < 0 ? -1 : 1;
    return t * L7;
  }
  return e === e ? e : 0;
}
var GA = B7, F7 = N7, W7 = zl, gh = GA;
function z7(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && W7(t, r, n) && (r = n = void 0), t = gh(t), r === void 0 ? (r = t, t = 0) : r = gh(r), n = n === void 0 ? t < r ? 1 : -1 : gh(n), F7(t, r, n, e);
  };
}
var U7 = z7, H7 = U7, G7 = H7(), K7 = G7;
const pl = /* @__PURE__ */ Qe(K7);
function qs(e) {
  "@babel/helpers - typeof";
  return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qs(e);
}
function Uw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uw(Object(r), !0).forEach(function(n) {
      KA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KA(e, t, r) {
  return t = q7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q7(e) {
  var t = V7(e, "string");
  return qs(t) == "symbol" ? t : String(t);
}
function V7(e, t) {
  if (qs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Y7 = ["Webkit", "Moz", "O", "ms"], X7 = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = Y7.reduce(function(a, s) {
    return Hw(Hw({}, a), {}, KA({}, s + n, r));
  }, {});
  return i[t] = r, i;
};
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
function vl() {
  return vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vl.apply(this, arguments);
}
function Gw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gw(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, VA(n.key), n);
  }
}
function J7(e, t, r) {
  return t && Kw(e.prototype, t), r && Kw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Q7(e, t, r) {
  return t = gl(t), eZ(e, qA() ? Reflect.construct(t, r || [], gl(e).constructor) : t.apply(e, r));
}
function eZ(e, t) {
  if (t && (eo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return an(e);
}
function qA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qA = function() {
    return !!e;
  })();
}
function gl(e) {
  return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gl(e);
}
function an(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Np(e, t);
}
function fr(e, t, r) {
  return t = VA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VA(e) {
  var t = rZ(e, "string");
  return eo(t) == "symbol" ? t : String(t);
}
function rZ(e, t) {
  if (eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nZ = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, s = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = fs().domain(pl(0, l)).range([a, a + s - u]), d = f.domain().map(function(h) {
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
}, qw = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, to = /* @__PURE__ */ function(e) {
  tZ(t, e);
  function t(r) {
    var n;
    return Z7(this, t), n = Q7(this, t, [r]), fr(an(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), fr(an(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), fr(an(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, s = i.onDragEnd, u = i.startIndex;
        s == null || s({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), fr(an(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), fr(an(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), fr(an(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), fr(an(n), "handleSlideDragStart", function(i) {
      var a = qw(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(an(n), "startX"),
      endX: n.handleTravellerDragStart.bind(an(n), "endX")
    }, n.state = {}, n;
  }
  return J7(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, s = this.state.scaleValues, u = this.props, l = u.gap, f = u.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(s, h), w = t.getIndexInRange(s, v);
      return {
        startIndex: g - g % l,
        endIndex: w === d ? d : w - w % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, s = i.tickFormatter, u = i.dataKey, l = xt(a[n], u, n);
      return Pe(s) ? s(l, n) : l;
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
      var i = this.state, a = i.slideMoveStartX, s = i.startX, u = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, w = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - u, f + d - h - s) : y < 0 && (y = Math.max(y, f - s, f - u));
      var b = this.getIndex({
        startX: s + y,
        endX: u + y
      });
      (b.startIndex !== v || b.endIndex !== g) && w && w(b), this.setState({
        startX: s + y,
        endX: u + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = qw(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, s = i.movingTravellerId, u = i.endX, l = i.startX, f = this.state[s], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, w = d.onChange, y = d.gap, b = d.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), A[s] = f + O;
      var S = this.getIndex(A), _ = S.startIndex, x = S.endIndex, E = function() {
        var M = b.length - 1;
        return s === "startX" && (u > l ? _ % y === 0 : x % y === 0) || u < l && x === M || s === "endX" && (u > l ? x % y === 0 : _ % y === 0) || u > l && x === M;
      };
      this.setState(fr(fr({}, s, f + O), "brushMoveStartX", n.pageX), function() {
        w && E() && w(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, s = this.state, u = s.scaleValues, l = s.startX, f = s.endX, d = this.state[i], h = u.indexOf(d);
      if (h !== -1) {
        var v = h + n;
        if (!(v === -1 || v >= u.length)) {
          var g = u[v];
          i === "startX" && g >= f || i === "endX" && g <= l || this.setState(fr({}, i, g), function() {
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
      var n = this.props, i = n.x, a = n.y, s = n.width, u = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: s,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, s = n.width, u = n.height, l = n.data, f = n.children, d = n.padding, h = Vi.only(f);
      return h ? /* @__PURE__ */ k.cloneElement(h, {
        x: i,
        y: a,
        width: s,
        height: u,
        margin: d,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, s, u = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, w = l.data, y = l.startIndex, b = l.endIndex, A = Math.max(n, this.props.x), O = yh(yh({}, me(this.props, !1)), {}, {
        x: A,
        y: f,
        width: d,
        height: h
      }), S = g || "Min value: ".concat((a = w[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((s = w[b]) === null || s === void 0 ? void 0 : s.name);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: 0,
        role: "slider",
        "aria-label": S,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(x) {
          ["ArrowLeft", "ArrowRight"].includes(x.key) && (x.preventDefault(), x.stopPropagation(), u.handleTravellerMoveKeyboard(x.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
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
      var a = this.props, s = a.y, u = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
      return /* @__PURE__ */ k.createElement("rect", {
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
        y: s,
        width: h,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, s = n.y, u = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, w = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(vi, vl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: s + u / 2
      }, w), this.getTextOfTick(i)), /* @__PURE__ */ k.createElement(vi, vl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: s + u / 2
      }, w), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, s = n.children, u = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, w = v.endX, y = v.isTextActive, b = v.isSlideMoving, A = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(u) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var S = Me("recharts-brush", a), _ = k.Children.count(s) === 1, x = X7("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Le, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: x
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(g, w), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(w, "endX"), (y || b || A || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, s = n.width, u = n.height, l = n.stroke, f = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: i,
        y: a,
        width: s,
        height: u,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + s - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f + 2,
        x2: i + s - 1,
        y2: f + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ k.isValidElement(n) ? a = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, s = n.width, u = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return yh({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: u,
          prevWidth: s
        }, a && a.length ? nZ({
          data: a,
          width: s,
          x: u,
          travellerWidth: l,
          startIndex: d,
          endIndex: h
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (s !== i.prevWidth || u !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([u, u + s - l]);
        var v = i.scale.domain().map(function(g) {
          return i.scale(g);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: u,
          prevWidth: s,
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
      for (var a = n.length, s = 0, u = a - 1; u - s > 1; ) {
        var l = Math.floor((s + u) / 2);
        n[l] > i ? u = l : s = l;
      }
      return i >= n[u] ? u : s;
    }
  }]), t;
}(Nr);
fr(to, "displayName", "Brush");
fr(to, "defaultProps", {
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
var iZ = kv;
function aZ(e, t) {
  var r;
  return iZ(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var oZ = aZ, sZ = L_, uZ = pn, cZ = oZ, lZ = rr, fZ = zl;
function dZ(e, t, r) {
  var n = lZ(e) ? sZ : cZ;
  return r && fZ(e, t, r) && (t = void 0), n(e, uZ(t));
}
var hZ = dZ;
const pZ = /* @__PURE__ */ Qe(hZ);
var ln = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Vw = sO;
function vZ(e, t, r) {
  t == "__proto__" && Vw ? Vw(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var gZ = vZ, yZ = gZ, mZ = aO, bZ = pn;
function xZ(e, t) {
  var r = {};
  return t = bZ(t), mZ(e, function(n, i, a) {
    yZ(r, i, t(n, i, a));
  }), r;
}
var wZ = xZ;
const _Z = /* @__PURE__ */ Qe(wZ);
function OZ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var AZ = OZ, SZ = kv;
function PZ(e, t) {
  var r = !0;
  return SZ(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var EZ = PZ, TZ = AZ, $Z = EZ, CZ = pn, MZ = rr, IZ = zl;
function kZ(e, t, r) {
  var n = MZ(e) ? TZ : $Z;
  return r && IZ(e, t, r) && (t = void 0), n(e, CZ(t));
}
var jZ = kZ;
const YA = /* @__PURE__ */ Qe(jZ);
var RZ = ["x", "y"];
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function Dp() {
  return Dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dp.apply(this, arguments);
}
function Yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yw(Object(r), !0).forEach(function(n) {
      NZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NZ(e, t, r) {
  return t = DZ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DZ(e) {
  var t = LZ(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function LZ(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BZ(e, t) {
  if (e == null) return {};
  var r = FZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function WZ(e, t) {
  var r = e.x, n = e.y, i = BZ(e, RZ), a = "".concat(r), s = parseInt(a, 10), u = "".concat(n), l = parseInt(u, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return os(os(os(os(os({}, t), i), s ? {
    x: s
  } : {}), l ? {
    y: l
  } : {}), {}, {
    height: d,
    width: v,
    name: t.name,
    radius: t.radius
  });
}
function Xw(e) {
  return /* @__PURE__ */ k.createElement(zA, Dp({
    shapeType: "rectangle",
    propTransformer: WZ,
    activeClassName: "recharts-active-bar"
  }, e));
}
var zZ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? er(!1, "minPointSize callback function received a value with type of ".concat(ro(n), ". Currently only numbers are supported.")) : er()), r);
  };
}, UZ = ["value", "background"], XA;
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function HZ(e, t) {
  if (e == null) return {};
  var r = GZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function GZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function yl() {
  return yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yl.apply(this, arguments);
}
function Zw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zw(Object(r), !0).forEach(function(n) {
      hi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JA(n.key), n);
  }
}
function qZ(e, t, r) {
  return t && Jw(e.prototype, t), r && Jw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VZ(e, t, r) {
  return t = ml(t), YZ(e, ZA() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function YZ(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return us(e);
}
function ZA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZA = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function us(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lp(e, t);
}
function hi(e, t, r) {
  return t = JA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JA(e) {
  var t = ZZ(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function ZZ(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Si = /* @__PURE__ */ function(e) {
  XZ(t, e);
  function t() {
    var r;
    KZ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = VZ(this, t, [].concat(i)), hi(us(r), "state", {
      isAnimationFinished: !1
    }), hi(us(r), "id", oa("recharts-bar-")), hi(us(r), "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), s && s();
    }), hi(us(r), "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), s && s();
    }), r;
  }
  return qZ(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, s = a.shape, u = a.dataKey, l = a.activeIndex, f = a.activeBar, d = me(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, w = g ? f : s, y = Mt(Mt(Mt({}, d), h), {}, {
          isActive: g,
          option: w,
          index: v,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Le, yl({
          className: "recharts-bar-rectangle"
        }, Ji(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ k.createElement(Xw, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, s = i.layout, u = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Zr, {
        begin: l,
        duration: f,
        isActive: u,
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
        var w = g.t, y = a.map(function(b, A) {
          var O = v && v[A];
          if (O) {
            var S = Pt(O.x, b.x), _ = Pt(O.y, b.y), x = Pt(O.width, b.width), E = Pt(O.height, b.height);
            return Mt(Mt({}, b), {}, {
              x: S(w),
              y: _(w),
              width: x(w),
              height: E(w)
            });
          }
          if (s === "horizontal") {
            var C = Pt(0, b.height), M = C(w);
            return Mt(Mt({}, b), {}, {
              y: b.y + b.height - M,
              height: M
            });
          }
          var F = Pt(0, b.width), D = F(w);
          return Mt(Mt({}, b), {}, {
            width: D
          });
        });
        return /* @__PURE__ */ k.createElement(Le, null, n.renderRectanglesStatically(y));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, s = this.state.prevData;
      return a && i && i.length && (!s || !Qi(s, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, s = i.dataKey, u = i.activeIndex, l = me(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = HZ(f, UZ);
        if (!h)
          return null;
        var g = Mt(Mt(Mt(Mt(Mt({}, v), {}, {
          fill: "#eee"
        }, h), l), Ji(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: s,
          index: d,
          key: "background-bar-".concat(d),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ k.createElement(Xw, yl({
          option: n.props.background,
          isActive: d === u
        }, g));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, s = a.data, u = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fu);
      if (!h)
        return null;
      var v = f === "vertical" ? s[0].height / 2 : s[0].width / 2, g = function(b, A) {
        var O = Array.isArray(b.value) ? b.value[1] : b.value;
        return {
          x: b.x,
          y: b.y,
          value: O,
          errorVal: xt(b, A)
        };
      }, w = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, w, h.map(function(y) {
        return /* @__PURE__ */ k.cloneElement(y, {
          key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
          data: s,
          xAxis: u,
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
      var n = this.props, i = n.hide, a = n.data, s = n.className, u = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, w = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var b = this.state.isAnimationFinished, A = Me("recharts-bar", s), O = u && u.allowDataOverflow, S = l && l.allowDataOverflow, _ = O || S, x = Te(y) ? this.id : y;
      return /* @__PURE__ */ k.createElement(Le, {
        className: A
      }, O || S ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: O ? f : f - h / 2,
        y: S ? d : d - v / 2,
        width: O ? h : h * 2,
        height: S ? v : v * 2
      }))) : null, /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(x, ")") : null
      }, w ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, x), (!g || b) && kr.renderCallByParent(this.props, a));
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
}(Nr);
XA = Si;
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
  isAnimationActive: !Yr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
hi(Si, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, s = e.yAxis, u = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = B4(n, r);
  if (!g)
    return null;
  var w = t.layout, y = r.props, b = y.dataKey, A = y.children, O = y.minPointSize, S = w === "horizontal" ? s : a, _ = f ? S.scale.domain() : null, x = K4({
    numericAxis: S
  }), E = yr(A, Nv), C = h.map(function(M, F) {
    var D, B, N, U, z, J;
    f ? D = F4(f[d + F], _) : (D = xt(M, b), Array.isArray(D) || (D = [x, D]));
    var H = zZ(O, XA.defaultProps.minPointSize)(D[1], F);
    if (w === "horizontal") {
      var Z, V = [s.scale(D[0]), s.scale(D[1])], se = V[0], G = V[1];
      B = Ix({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: g.offset,
        entry: M,
        index: F
      }), N = (Z = G ?? se) !== null && Z !== void 0 ? Z : void 0, U = g.size;
      var X = se - G;
      if (z = Number.isNaN(X) ? 0 : X, J = {
        x: B,
        y: s.y,
        width: U,
        height: s.height
      }, Math.abs(H) > 0 && Math.abs(z) < Math.abs(H)) {
        var ae = Gt(z || H) * (Math.abs(H) - Math.abs(z));
        N -= ae, z += ae;
      }
    } else {
      var ce = [a.scale(D[0]), a.scale(D[1])], he = ce[0], ge = ce[1];
      if (B = he, N = Ix({
        axis: s,
        ticks: l,
        bandSize: i,
        offset: g.offset,
        entry: M,
        index: F
      }), U = ge - he, z = g.size, J = {
        x: a.x,
        y: N,
        width: a.width,
        height: z
      }, Math.abs(H) > 0 && Math.abs(U) < Math.abs(H)) {
        var xe = Gt(U || H) * (Math.abs(H) - Math.abs(U));
        U += xe;
      }
    }
    return Mt(Mt(Mt({}, M), {}, {
      x: B,
      y: N,
      width: U,
      height: z,
      value: f ? D : D[1],
      payload: M,
      background: J
    }, E && E[F] && E[F].props), {}, {
      tooltipPayload: [xA(r, M)],
      tooltipPosition: {
        x: B + U / 2,
        y: N + z / 2
      }
    });
  });
  return Mt({
    data: C,
    layout: w
  }, v);
});
function Vs(e) {
  "@babel/helpers - typeof";
  return Vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vs(e);
}
function JZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QA(n.key), n);
  }
}
function QZ(e, t, r) {
  return t && Qw(e.prototype, t), r && Qw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function e1(e, t) {
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
    t % 2 ? e1(Object(r), !0).forEach(function(n) {
      of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function of(e, t, r) {
  return t = QA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QA(e) {
  var t = eJ(e, "string");
  return Vs(t) == "symbol" ? t : String(t);
}
function eJ(e, t) {
  if (Vs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lg = function(t, r, n, i, a) {
  var s = t.width, u = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: s - n.right,
    rightMirror: s - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, v = !!dr(f, Si);
  return d.reduce(function(g, w) {
    var y = r[w], b = y.orientation, A = y.domain, O = y.padding, S = O === void 0 ? {} : O, _ = y.mirror, x = y.reversed, E = "".concat(b).concat(_ ? "Mirror" : ""), C, M, F, D, B;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var N = A[1] - A[0], U = 1 / 0, z = y.categoricalDomain.sort();
      if (z.forEach(function(he, ge) {
        ge > 0 && (U = Math.min((he || 0) - (z[ge - 1] || 0), U));
      }), Number.isFinite(U)) {
        var J = U / N, H = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && (C = J * H / 2), y.padding === "no-gap") {
          var Z = Kt(t.barCategoryGap, J * H), V = J * H / 2;
          C = V - Z - (V - Z) / H * Z;
        }
      }
    }
    i === "xAxis" ? M = [n.left + (S.left || 0) + (C || 0), n.left + n.width - (S.right || 0) - (C || 0)] : i === "yAxis" ? M = l === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + (C || 0), n.top + n.height - (S.bottom || 0) - (C || 0)] : M = y.range, x && (M = [M[1], M[0]]);
    var se = gA(y, a, v), G = se.scale, X = se.realScaleType;
    G.domain(A).range(M), yA(G);
    var ae = mA(G, Hr(Hr({}, y), {}, {
      realScaleType: X
    }));
    i === "xAxis" ? (B = b === "top" && !_ || b === "bottom" && _, F = n.left, D = h[E] - B * y.height) : i === "yAxis" && (B = b === "left" && !_ || b === "right" && _, F = h[E] - B * y.width, D = n.top);
    var ce = Hr(Hr(Hr({}, y), ae), {}, {
      realScaleType: X,
      x: F,
      y: D,
      scale: G,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = tl(ce, ae), !y.hide && i === "xAxis" ? h[E] += (B ? -1 : 1) * ce.height : y.hide || (h[E] += (B ? -1 : 1) * ce.width), Hr(Hr({}, g), {}, of({}, w, ce));
  }, {});
}, eS = function(t, r) {
  var n = t.x, i = t.y, a = r.x, s = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, s),
    width: Math.abs(a - n),
    height: Math.abs(s - i)
  };
}, tJ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return eS({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, tS = /* @__PURE__ */ function() {
  function e(t) {
    JZ(this, e), this.scale = t;
  }
  return QZ(e, [{
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
              var s = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + s;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
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
of(tS, "EPS", 1e-4);
var fg = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, of({}, i, tS.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = a.bandAware, u = a.position;
      return _Z(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: s,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return YA(i, function(a, s) {
        return r[s].isInRange(a);
      });
    }
  });
};
function rJ(e) {
  return (e % 180 + 180) % 180;
}
var nJ = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = rJ(i), s = a * Math.PI / 180, u = Math.atan(n / r), l = s > u && s < Math.PI - u ? n / Math.sin(s) : r / Math.cos(s);
  return Math.abs(l);
}, iJ = pn, aJ = ou, oJ = Fl;
function sJ(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!aJ(t)) {
      var a = iJ(r);
      t = oJ(t), r = function(u) {
        return a(i[u], u, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
var uJ = sJ, cJ = GA;
function lJ(e) {
  var t = cJ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var fJ = lJ, dJ = J_, hJ = pn, pJ = fJ, vJ = Math.max;
function gJ(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : pJ(r);
  return i < 0 && (i = vJ(n + i, 0)), dJ(e, hJ(t), i);
}
var yJ = gJ, mJ = uJ, bJ = yJ, xJ = mJ(bJ), wJ = xJ;
const _J = /* @__PURE__ */ Qe(wJ);
var OJ = NN(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function bl(e) {
  "@babel/helpers - typeof";
  return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bl(e);
}
var dg = /* @__PURE__ */ Rr(void 0), hg = /* @__PURE__ */ Rr(void 0), rS = /* @__PURE__ */ Rr(void 0), nS = /* @__PURE__ */ Rr({}), iS = /* @__PURE__ */ Rr(void 0), aS = /* @__PURE__ */ Rr(0), oS = /* @__PURE__ */ Rr(0), t1 = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, s = t.clipPathId, u = t.children, l = t.width, f = t.height, d = OJ(a);
  return /* @__PURE__ */ k.createElement(dg.Provider, {
    value: n
  }, /* @__PURE__ */ k.createElement(hg.Provider, {
    value: i
  }, /* @__PURE__ */ k.createElement(nS.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(rS.Provider, {
    value: d
  }, /* @__PURE__ */ k.createElement(iS.Provider, {
    value: s
  }, /* @__PURE__ */ k.createElement(aS.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement(oS.Provider, {
    value: l
  }, u)))))));
}, AJ = function() {
  return tr(iS);
};
function sS(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var uS = function(t) {
  var r = tr(dg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(bl(t), "]. ").concat(sS(r))) : er()), n;
}, SJ = function() {
  var t = tr(dg);
  return fi(t);
}, PJ = function() {
  var t = tr(hg), r = _J(t, function(n) {
    return YA(n.domain, Number.isFinite);
  });
  return r || fi(t);
}, cS = function(t) {
  var r = tr(hg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(bl(t), "]. ").concat(sS(r))) : er()), n;
}, EJ = function() {
  var t = tr(rS);
  return t;
}, TJ = function() {
  return tr(nS);
}, pg = function() {
  return tr(oS);
}, vg = function() {
  return tr(aS);
};
function Ys(e) {
  "@babel/helpers - typeof";
  return Ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ys(e);
}
function r1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function n1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? r1(Object(r), !0).forEach(function(n) {
      $J(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : r1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $J(e, t, r) {
  return t = CJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CJ(e) {
  var t = MJ(e, "string");
  return Ys(t) == "symbol" ? t : String(t);
}
function MJ(e, t) {
  if (Ys(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ys(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IJ(e, t) {
  return NJ(e) || RJ(e, t) || jJ(e, t) || kJ();
}
function kJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jJ(e, t) {
  if (e) {
    if (typeof e == "string") return i1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i1(e, t);
  }
}
function i1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RJ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function NJ(e) {
  if (Array.isArray(e)) return e;
}
function Bp() {
  return Bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bp.apply(this, arguments);
}
var DJ = function(t, r) {
  var n;
  return /* @__PURE__ */ k.isValidElement(t) ? n = /* @__PURE__ */ k.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ k.createElement("line", Bp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, LJ = function(t, r, n, i, a, s, u, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var w = f.y, y = t.y.apply(w, {
      position: s
    });
    if (ln(f, "discard") && !t.y.isInRange(y))
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
    var A = f.x, O = t.x.apply(A, {
      position: s
    });
    if (ln(f, "discard") && !t.x.isInRange(O))
      return null;
    var S = [{
      x: O,
      y: h + g
    }, {
      x: O,
      y: h
    }];
    return u === "top" ? S.reverse() : S;
  }
  if (i) {
    var _ = f.segment, x = _.map(function(E) {
      return t.apply(E, {
        position: s
      });
    });
    return ln(f, "discard") && pZ(x, function(E) {
      return !t.isInRange(E);
    }) ? null : x;
  }
  return null;
};
function gg(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, s = e.shape, u = e.className, l = e.alwaysShow, f = AJ(), d = uS(i), h = cS(a), v = EJ();
  if (!f || !v)
    return null;
  Vr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = fg({
    x: d.scale,
    y: h.scale
  }), w = Tt(t), y = Tt(r), b = n && n.length === 2, A = LJ(g, w, y, b, v, e.position, d.orientation, h.orientation, e);
  if (!A)
    return null;
  var O = IJ(A, 2), S = O[0], _ = S.x, x = S.y, E = O[1], C = E.x, M = E.y, F = ln(e, "hidden") ? "url(#".concat(f, ")") : void 0, D = n1(n1({
    clipPath: F
  }, me(e, !0)), {}, {
    x1: _,
    y1: x,
    x2: C,
    y2: M
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-line", u)
  }, DJ(s, D), Et.renderCallByParent(e, tJ({
    x1: _,
    y1: x,
    x2: C,
    y2: M
  })));
}
gg.displayName = "ReferenceLine";
gg.defaultProps = {
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
function Xs(e) {
  "@babel/helpers - typeof";
  return Xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xs(e);
}
function Fp() {
  return Fp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fp.apply(this, arguments);
}
function a1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function o1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a1(Object(r), !0).forEach(function(n) {
      BJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BJ(e, t, r) {
  return t = FJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FJ(e) {
  var t = WJ(e, "string");
  return Xs(t) == "symbol" ? t : String(t);
}
function WJ(e, t) {
  if (Xs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zJ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, s = fg({
    x: i.scale,
    y: a.scale
  }), u = s.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return ln(t, "discard") && !s.isInRange(u) ? null : u;
};
function hu(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, s = Tt(t), u = Tt(r);
  if (Vr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !u)
    return null;
  var l = zJ(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = ln(e, "hidden") ? "url(#".concat(a, ")") : void 0, w = o1(o1({
    clipPath: g
  }, me(e, !0)), {}, {
    cx: f,
    cy: d
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-dot", v)
  }, hu.renderDot(h, w), Et.renderCallByParent(e, {
    x: f - n,
    y: d - n,
    width: 2 * n,
    height: 2 * n
  }));
}
hu.displayName = "ReferenceDot";
hu.defaultProps = {
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
hu.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(du, Fp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Zs(e) {
  "@babel/helpers - typeof";
  return Zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zs(e);
}
function Wp() {
  return Wp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wp.apply(this, arguments);
}
function s1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function u1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s1(Object(r), !0).forEach(function(n) {
      UJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UJ(e, t, r) {
  return t = HJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HJ(e) {
  var t = GJ(e, "string");
  return Zs(t) == "symbol" ? t : String(t);
}
function GJ(e, t) {
  if (Zs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KJ = function(t, r, n, i, a) {
  var s = a.x1, u = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = fg({
    x: d.scale,
    y: h.scale
  }), g = {
    x: t ? v.x.apply(s, {
      position: "start"
    }) : v.x.rangeMin,
    y: n ? v.y.apply(l, {
      position: "start"
    }) : v.y.rangeMin
  }, w = {
    x: r ? v.x.apply(u, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return ln(a, "discard") && (!v.isInRange(g) || !v.isInRange(w)) ? null : eS(g, w);
};
function pu(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, s = e.alwaysShow, u = e.clipPathId;
  Vr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Tt(t), f = Tt(r), d = Tt(n), h = Tt(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = KJ(l, f, d, h, e);
  if (!g && !v)
    return null;
  var w = ln(e, "hidden") ? "url(#".concat(u, ")") : void 0;
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-area", a)
  }, pu.renderRect(v, u1(u1({
    clipPath: w
  }, me(e, !0)), g)), Et.renderCallByParent(e, g));
}
pu.displayName = "ReferenceArea";
pu.defaultProps = {
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
pu.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(cg, Wp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function lS(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function qJ(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return nJ(n, r);
}
function VJ(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, s = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + s : a + u
  } : {
    start: n ? i + s : a + u,
    end: n ? i : a
  };
}
function xl(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function YJ(e, t) {
  return lS(e, t + 1);
}
function XJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), s = t.start, u = t.end, l = 0, f = 1, d = s, h = function() {
    var w = n == null ? void 0 : n[l];
    if (w === void 0)
      return {
        v: lS(n, f)
      };
    var y = l, b, A = function() {
      return b === void 0 && (b = r(w, y)), b;
    }, O = w.coordinate, S = l === 0 || xl(e, O, A, d, u);
    S || (l = 0, d = s, f += 1), S && (d = O + e * (A() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function Js(e) {
  "@babel/helpers - typeof";
  return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Js(e);
}
function c1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? c1(Object(r), !0).forEach(function(n) {
      ZJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZJ(e, t, r) {
  return t = JJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JJ(e) {
  var t = QJ(e, "string");
  return Js(t) == "symbol" ? t : String(t);
}
function QJ(e, t) {
  if (Js(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Js(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eQ(e, t, r, n, i) {
  for (var a = (n || []).slice(), s = a.length, u = t.start, l = t.end, f = function(v) {
    var g = a[v], w, y = function() {
      return w === void 0 && (w = r(g, v)), w;
    };
    if (v === s - 1) {
      var b = e * (g.coordinate + e * y() / 2 - l);
      a[v] = g = Bt(Bt({}, g), {}, {
        tickCoord: b > 0 ? g.coordinate - b * e : g.coordinate
      });
    } else
      a[v] = g = Bt(Bt({}, g), {}, {
        tickCoord: g.coordinate
      });
    var A = xl(e, g.tickCoord, y, u, l);
    A && (l = g.tickCoord - e * (y() / 2 + i), a[v] = Bt(Bt({}, g), {}, {
      isShow: !0
    }));
  }, d = s - 1; d >= 0; d--)
    f(d);
  return a;
}
function tQ(e, t, r, n, i, a) {
  var s = (n || []).slice(), u = s.length, l = t.start, f = t.end;
  if (a) {
    var d = n[u - 1], h = r(d, u - 1), v = e * (d.coordinate + e * h / 2 - f);
    s[u - 1] = d = Bt(Bt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = xl(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), s[u - 1] = Bt(Bt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var w = a ? u - 1 : u, y = function(O) {
    var S = s[O], _, x = function() {
      return _ === void 0 && (_ = r(S, O)), _;
    };
    if (O === 0) {
      var E = e * (S.coordinate - e * x() / 2 - l);
      s[O] = S = Bt(Bt({}, S), {}, {
        tickCoord: E < 0 ? S.coordinate - E * e : S.coordinate
      });
    } else
      s[O] = S = Bt(Bt({}, S), {}, {
        tickCoord: S.coordinate
      });
    var C = xl(e, S.tickCoord, x, l, f);
    C && (l = S.tickCoord + e * (x() / 2 + i), s[O] = Bt(Bt({}, S), {}, {
      isShow: !0
    }));
  }, b = 0; b < w; b++)
    y(b);
  return s;
}
function yg(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, s = e.minTickGap, u = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Yr.isSsr)
    return YJ(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = u === "top" || u === "bottom" ? "width" : "height", w = d && g === "width" ? ls(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(S, _) {
    var x = Pe(f) ? f(S.value, _) : S.value;
    return g === "width" ? qJ(ls(x, {
      fontSize: t,
      letterSpacing: r
    }), w, h) : ls(x, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, b = i.length >= 2 ? Gt(i[1].coordinate - i[0].coordinate) : 1, A = VJ(a, b, g);
  return l === "equidistantPreserveStart" ? XJ(b, A, y, i, s) : (l === "preserveStart" || l === "preserveStartEnd" ? v = tQ(b, A, y, i, s, l === "preserveStartEnd") : v = eQ(b, A, y, i, s), v.filter(function(O) {
    return O.isShow;
  }));
}
var rQ = ["viewBox"], nQ = ["viewBox"], iQ = ["ticks"];
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ka.apply(this, arguments);
}
function l1(e, t) {
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
    t % 2 ? l1(Object(r), !0).forEach(function(n) {
      mg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mh(e, t) {
  if (e == null) return {};
  var r = aQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function oQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dS(n.key), n);
  }
}
function sQ(e, t, r) {
  return t && f1(e.prototype, t), r && f1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uQ(e, t, r) {
  return t = wl(t), cQ(e, fS() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function cQ(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lQ(e);
}
function lQ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fS = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function fQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zp(e, t);
}
function mg(e, t, r) {
  return t = dS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dS(e) {
  var t = dQ(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function dQ(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Po = /* @__PURE__ */ function(e) {
  fQ(t, e);
  function t(r) {
    var n;
    return oQ(this, t), n = uQ(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return sQ(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, s = mh(n, rQ), u = this.props, l = u.viewBox, f = mh(u, nQ);
      return !Na(a, l) || !Na(s, f) || !Na(i, this.state);
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
      var i = this.props, a = i.x, s = i.y, u = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, w, y, b, A, O, S = h ? -1 : 1, _ = n.tickSize || d, x = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = w = n.coordinate, b = s + +!h * l, y = b - S * _, O = y - S * v, A = x;
          break;
        case "left":
          y = b = n.coordinate, w = a + +!h * u, g = w - S * _, A = g - S * v, O = x;
          break;
        case "right":
          y = b = n.coordinate, w = a + +h * u, g = w + S * _, A = g + S * v, O = x;
          break;
        default:
          g = w = n.coordinate, b = s + +h * l, y = b + S * _, O = y + S * v, A = x;
          break;
      }
      return {
        line: {
          x1: g,
          y1: y,
          x2: w,
          y2: b
        },
        tick: {
          x: A,
          y: O
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, s;
      switch (i) {
        case "left":
          s = a ? "start" : "end";
          break;
        case "right":
          s = a ? "end" : "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, s = "end";
      switch (i) {
        case "left":
        case "right":
          s = "middle";
          break;
        case "top":
          s = a ? "start" : "end";
          break;
        default:
          s = a ? "end" : "start";
          break;
      }
      return s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, s = n.width, u = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Ht(Ht(Ht({}, me(this.props, !1)), me(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Ht(Ht({}, h), {}, {
          x1: i,
          y1: a + v * u,
          x2: i + s,
          y2: a + v * u
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = Ht(Ht({}, h), {}, {
          x1: i + g * s,
          y1: a,
          x2: i + g * s,
          y2: a + u
        });
      }
      return /* @__PURE__ */ k.createElement("line", ka({}, h, {
        className: Me("recharts-cartesian-axis-line", gr(d, "className"))
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
        var s = this, u = this.props, l = u.tickLine, f = u.stroke, d = u.tick, h = u.tickFormatter, v = u.unit, g = yg(Ht(Ht({}, this.props), {}, {
          ticks: n
        }), i, a), w = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), b = me(this.props, !1), A = me(d, !1), O = Ht(Ht({}, b), {}, {
          fill: "none"
        }, me(l, !1)), S = g.map(function(_, x) {
          var E = s.getTickLineCoord(_), C = E.line, M = E.tick, F = Ht(Ht(Ht(Ht({
            textAnchor: w,
            verticalAnchor: y
          }, b), {}, {
            stroke: "none",
            fill: f
          }, A), M), {}, {
            index: x,
            payload: _,
            visibleTicksCount: g.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ k.createElement(Le, ka({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, Ji(s.props, _, x)), l && /* @__PURE__ */ k.createElement("line", ka({}, O, C, {
            className: Me("recharts-cartesian-axis-tick-line", gr(l, "className"))
          })), d && t.renderTickItem(d, F, "".concat(Pe(h) ? h(_.value, x) : _.value).concat(v || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, s = i.width, u = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = mh(h, iQ), w = v;
      return Pe(l) && (w = v && v.length > 0 ? l(this.props) : l(g)), s <= 0 || u <= 0 || !w || !w.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-cartesian-axis", f),
        ref: function(b) {
          n.layerReference = b;
        }
      }, a && this.renderAxisLine(), this.renderTicks(w, this.state.fontSize, this.state.letterSpacing), Et.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(vi, ka({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(B1);
mg(Po, "displayName", "CartesianAxis");
mg(Po, "defaultProps", {
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
var hQ = ["x1", "y1", "x2", "y2", "key"], pQ = ["offset"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function d1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? d1(Object(r), !0).forEach(function(n) {
      vQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vQ(e, t, r) {
  return t = gQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gQ(e) {
  var t = yQ(e, "string");
  return ta(t) == "symbol" ? t : String(t);
}
function yQ(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ki() {
  return Ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ki.apply(this, arguments);
}
function h1(e, t) {
  if (e == null) return {};
  var r = mQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var bQ = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, s = t.width, u = t.height;
  return /* @__PURE__ */ k.createElement("rect", {
    x: i,
    y: a,
    width: s,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function hS(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, s = t.y2, u = t.key, l = h1(t, hQ), f = me(l, !1);
    f.offset;
    var d = h1(f, pQ);
    r = /* @__PURE__ */ k.createElement("line", Ki({}, d, {
      x1: n,
      y1: i,
      x2: a,
      y2: s,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function xQ(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var s = a.map(function(u, l) {
    var f = Ft(Ft({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(l),
      index: l
    });
    return hS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function wQ(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var s = a.map(function(u, l) {
    var f = Ft(Ft({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return hS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function _Q(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, s = e.height, u = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = u.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, g) {
    return v - g;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var w = !d[g + 1], y = w ? i + s - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var b = g % t.length;
    return /* @__PURE__ */ k.createElement("rect", {
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
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function OQ(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, s = e.y, u = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var d = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, g) {
    return v - g;
  });
  a !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var w = !d[g + 1], y = w ? a + u - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var b = g % n.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(g),
      x: v,
      y: s,
      width: y,
      height: l,
      stroke: "none",
      fill: n[b],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var AQ = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, s = t.offset;
  return vA(yg(Ft(Ft(Ft({}, Po.defaultProps), n), {}, {
    ticks: In(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), s.left, s.left + s.width, r);
}, SQ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, s = t.offset;
  return vA(yg(Ft(Ft(Ft({}, Po.defaultProps), n), {}, {
    ticks: In(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), s.top, s.top + s.height, r);
}, Ea = {
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
function vu(e) {
  var t, r, n, i, a, s, u = pg(), l = vg(), f = TJ(), d = Ft(Ft({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Ea.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Ea.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Ea.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Ea.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Ea.vertical,
    verticalFill: (s = e.verticalFill) !== null && s !== void 0 ? s : Ea.verticalFill,
    x: oe(e.x) ? e.x : f.left,
    y: oe(e.y) ? e.y : f.top,
    width: oe(e.width) ? e.width : f.width,
    height: oe(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, g = d.width, w = d.height, y = d.syncWithTicks, b = d.horizontalValues, A = d.verticalValues, O = SJ(), S = PJ();
  if (!oe(g) || g <= 0 || !oe(w) || w <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || AQ, x = d.horizontalCoordinatesGenerator || SQ, E = d.horizontalPoints, C = d.verticalPoints;
  if ((!E || !E.length) && Pe(x)) {
    var M = b && b.length, F = x({
      yAxis: S ? Ft(Ft({}, S), {}, {
        ticks: M ? b : S.ticks
      }) : void 0,
      width: u,
      height: l,
      offset: f
    }, M ? !0 : y);
    Vr(Array.isArray(F), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ta(F), "]")), Array.isArray(F) && (E = F);
  }
  if ((!C || !C.length) && Pe(_)) {
    var D = A && A.length, B = _({
      xAxis: O ? Ft(Ft({}, O), {}, {
        ticks: D ? A : O.ticks
      }) : void 0,
      width: u,
      height: l,
      offset: f
    }, D ? !0 : y);
    Vr(Array.isArray(B), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ta(B), "]")), Array.isArray(B) && (C = B);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(bQ, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ k.createElement(xQ, Ki({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(wQ, Ki({}, d, {
    offset: f,
    verticalPoints: C,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(_Q, Ki({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ k.createElement(OQ, Ki({}, d, {
    verticalPoints: C
  })));
}
vu.displayName = "CartesianGrid";
var PQ = ["type", "layout", "connectNulls", "ref"];
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function EQ(e, t) {
  if (e == null) return {};
  var r = TQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gs.apply(this, arguments);
}
function p1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p1(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ta(e) {
  return IQ(e) || MQ(e) || CQ(e) || $Q();
}
function $Q() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CQ(e, t) {
  if (e) {
    if (typeof e == "string") return Up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Up(e, t);
  }
}
function MQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function IQ(e) {
  if (Array.isArray(e)) return Up(e);
}
function Up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vS(n.key), n);
  }
}
function jQ(e, t, r) {
  return t && v1(e.prototype, t), r && v1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RQ(e, t, r) {
  return t = _l(t), NQ(e, pS() ? Reflect.construct(t, r || [], _l(e).constructor) : t.apply(e, r));
}
function NQ(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ui(e);
}
function pS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pS = function() {
    return !!e;
  })();
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
function ui(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hp(e, t);
}
function Gr(e, t, r) {
  return t = vS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vS(e) {
  var t = LQ(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function LQ(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gu = /* @__PURE__ */ function(e) {
  DQ(t, e);
  function t() {
    var r;
    kQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = RQ(this, t, [].concat(i)), Gr(ui(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(ui(r), "generateSimpleStrokeDasharray", function(s, u) {
      return "".concat(u, "px ").concat(s - u, "px");
    }), Gr(ui(r), "getStrokeDasharray", function(s, u, l) {
      var f = l.reduce(function(A, O) {
        return A + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(u, s);
      for (var d = Math.floor(s / f), h = s % f, v = u - s, g = [], w = 0, y = 0; w < l.length; y += l[w], ++w)
        if (y + l[w] > h) {
          g = [].concat(Ta(l.slice(0, w)), [h - y]);
          break;
        }
      var b = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ta(t.repeat(l, d)), Ta(g), b).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), Gr(ui(r), "id", oa("recharts-line-")), Gr(ui(r), "pathRef", function(s) {
      r.mainCurve = s;
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
  return jQ(t, [{
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
      var a = this.props, s = a.points, u = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fu);
      if (!h)
        return null;
      var v = function(y, b) {
        return {
          x: y.x,
          y: y.y,
          value: y.value,
          errorVal: xt(y.payload, b)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, g, h.map(function(w) {
        return /* @__PURE__ */ k.cloneElement(w, {
          key: "bar-".concat(w.props.dataKey),
          data: s,
          xAxis: u,
          yAxis: l,
          layout: f,
          dataPointFormatter: v
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var u = this.props, l = u.dot, f = u.points, d = u.dataKey, h = me(this.props, !1), v = me(l, !0), g = f.map(function(y, b) {
        var A = lr(lr(lr({
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
        return t.renderDotItem(l, A);
      }), w = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, gs({
        className: "recharts-line-dots",
        key: "dots"
      }, w), g);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, s) {
      var u = this.props, l = u.type, f = u.layout, d = u.connectNulls;
      u.ref;
      var h = EQ(u, PQ), v = lr(lr(lr({}, me(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, s), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ k.createElement(Zi, gs({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, s = this.props, u = s.points, l = s.strokeDasharray, f = s.isAnimationActive, d = s.animationBegin, h = s.animationDuration, v = s.animationEasing, g = s.animationId, w = s.animateNewValues, y = s.width, b = s.height, A = this.state, O = A.prevPoints, S = A.totalLength;
      return /* @__PURE__ */ k.createElement(Zr, {
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
        var x = _.t;
        if (O) {
          var E = O.length / u.length, C = u.map(function(N, U) {
            var z = Math.floor(U * E);
            if (O[z]) {
              var J = O[z], H = Pt(J.x, N.x), Z = Pt(J.y, N.y);
              return lr(lr({}, N), {}, {
                x: H(x),
                y: Z(x)
              });
            }
            if (w) {
              var V = Pt(y * 2, N.x), se = Pt(b / 2, N.y);
              return lr(lr({}, N), {}, {
                x: V(x),
                y: se(x)
              });
            }
            return lr(lr({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return a.renderCurveStatically(C, n, i);
        }
        var M = Pt(0, S), F = M(x), D;
        if (l) {
          var B = "".concat(l).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          D = a.getStrokeDasharray(F, S, B);
        } else
          D = a.generateSimpleStrokeDasharray(S, F);
        return a.renderCurveStatically(u, n, i, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, s = a.points, u = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return u && s && s.length && (!f && d > 0 || !Qi(f, s)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, s = i.dot, u = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, w = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !u || !u.length)
        return null;
      var A = this.state.isAnimationFinished, O = u.length === 1, S = Me("recharts-line", l), _ = f && f.allowDataOverflow, x = d && d.allowDataOverflow, E = _ || x, C = Te(b) ? this.id : b, M = (n = me(s, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = c_(s) ? s : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? v : v - g / 2,
        y: x ? h : h - w / 2,
        width: _ ? g : g * 2,
        height: x ? w : w * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: v - H / 2,
        y: h - H / 2,
        width: g + H,
        height: w + H
      }))) : null, !O && this.renderCurve(E, C), this.renderErrorBar(E, C), (O || s) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, u));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Ta(n), [0]) : n, s = [], u = 0; u < i; ++u)
        s = [].concat(Ta(s), Ta(a));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ k.isValidElement(n))
        a = /* @__PURE__ */ k.cloneElement(n, i);
      else if (Pe(n))
        a = n(i);
      else {
        var s = Me("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ k.createElement(du, gs({}, i, {
          className: s
        }));
      }
      return a;
    }
  }]), t;
}(Nr);
Gr(gu, "displayName", "Line");
Gr(gu, "defaultProps", {
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
  isAnimationActive: !Yr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Gr(gu, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, s = e.dataKey, u = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var w = xt(v, s);
    return d === "horizontal" ? {
      x: el({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: v,
        index: g
      }),
      y: Te(w) ? null : n.scale(w),
      value: w,
      payload: v
    } : {
      x: Te(w) ? null : r.scale(w),
      y: el({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: v,
        index: g
      }),
      value: w,
      payload: v
    };
  });
  return lr({
    points: h,
    layout: d
  }, f);
});
var BQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], gS;
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
function FQ(e, t) {
  if (e == null) return {};
  var r = WQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function qi() {
  return qi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qi.apply(this, arguments);
}
function g1(e, t) {
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
    t % 2 ? g1(Object(r), !0).forEach(function(n) {
      un(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mS(n.key), n);
  }
}
function UQ(e, t, r) {
  return t && y1(e.prototype, t), r && y1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function HQ(e, t, r) {
  return t = Ol(t), GQ(e, yS() ? Reflect.construct(t, r || [], Ol(e).constructor) : t.apply(e, r));
}
function GQ(e, t) {
  if (t && (oo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cs(e);
}
function yS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yS = function() {
    return !!e;
  })();
}
function Ol(e) {
  return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ol(e);
}
function cs(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gp(e, t);
}
function un(e, t, r) {
  return t = mS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mS(e) {
  var t = qQ(e, "string");
  return oo(t) == "symbol" ? t : String(t);
}
function qQ(e, t) {
  if (oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pi = /* @__PURE__ */ function(e) {
  KQ(t, e);
  function t() {
    var r;
    zQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = HQ(this, t, [].concat(i)), un(cs(r), "state", {
      isAnimationFinished: !0
    }), un(cs(r), "id", oa("recharts-area-")), un(cs(r), "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(s) && s();
    }), un(cs(r), "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(s) && s();
    }), r;
  }
  return UQ(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var s = this.props.isAnimationActive, u = this.state.isAnimationFinished;
      if (s && !u)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = me(this.props, !1), g = me(f, !0), w = d.map(function(b, A) {
        var O = ci(ci(ci({
          key: "dot-".concat(A),
          r: 3
        }, v), g), {}, {
          index: A,
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
      return /* @__PURE__ */ k.createElement(Le, qi({
        className: "recharts-area-dots"
      }, y), w);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, s = i.points, u = i.strokeWidth, l = s[0].x, f = s[s.length - 1].x, d = n * Math.abs(l - f), h = di(s.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.y || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: l < f ? l : l - d,
        y: 0,
        width: d,
        height: Math.floor(h + (u ? parseInt("".concat(u), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, s = i.points, u = i.strokeWidth, l = s[0].y, f = s[s.length - 1].y, d = n * Math.abs(l - f), h = di(s.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.x || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: l < f ? l : l - d,
        width: h + (u ? parseInt("".concat(u), 10) : 1),
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
    value: function(n, i, a, s) {
      var u = this.props, l = u.layout, f = u.type, d = u.stroke, h = u.connectNulls, v = u.isRange;
      u.ref;
      var g = FQ(u, BQ);
      return /* @__PURE__ */ k.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(s, ")") : null
      }, /* @__PURE__ */ k.createElement(Zi, qi({}, me(g, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ k.createElement(Zi, qi({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ k.createElement(Zi, qi({}, me(this.props, !1), {
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
      var a = this, s = this.props, u = s.points, l = s.baseLine, f = s.isAnimationActive, d = s.animationBegin, h = s.animationDuration, v = s.animationEasing, g = s.animationId, w = this.state, y = w.prevPoints, b = w.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Zr, {
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
      }, function(A) {
        var O = A.t;
        if (y) {
          var S = y.length / u.length, _ = u.map(function(M, F) {
            var D = Math.floor(F * S);
            if (y[D]) {
              var B = y[D], N = Pt(B.x, M.x), U = Pt(B.y, M.y);
              return ci(ci({}, M), {}, {
                x: N(O),
                y: U(O)
              });
            }
            return M;
          }), x;
          if (oe(l) && typeof l == "number") {
            var E = Pt(b, l);
            x = E(O);
          } else if (Te(l) || mo(l)) {
            var C = Pt(b, 0);
            x = C(O);
          } else
            x = l.map(function(M, F) {
              var D = Math.floor(F * S);
              if (b[D]) {
                var B = b[D], N = Pt(B.x, M.x), U = Pt(B.y, M.y);
                return ci(ci({}, M), {}, {
                  x: N(O),
                  y: U(O)
                });
              }
              return M;
            });
          return a.renderAreaStatically(_, x, n, i);
        }
        return /* @__PURE__ */ k.createElement(Le, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ k.createElement(Le, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(u, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, s = a.points, u = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && s && s.length && (!d && v > 0 || !Qi(d, s) || !Qi(h, u)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(s, u, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, s = i.dot, u = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, w = i.height, y = i.isAnimationActive, b = i.id;
      if (a || !u || !u.length)
        return null;
      var A = this.state.isAnimationFinished, O = u.length === 1, S = Me("recharts-area", l), _ = h && h.allowDataOverflow, x = v && v.allowDataOverflow, E = _ || x, C = Te(b) ? this.id : b, M = (n = me(s, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = c_(s) ? s : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? d : d - g / 2,
        y: x ? f : f - w / 2,
        width: _ ? g : g * 2,
        height: x ? w : w * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: d - H / 2,
        y: f - H / 2,
        width: g + H,
        height: w + H
      }))) : null, O ? null : this.renderArea(E, C), (s || O) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, u));
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
}(Nr);
gS = Pi;
un(Pi, "displayName", "Area");
un(Pi, "defaultProps", {
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
  isAnimationActive: !Yr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
un(Pi, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, s = t.props.baseValue, u = s ?? a;
  if (oe(u) && typeof u == "number")
    return u;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var d = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return u === "dataMin" ? h : u === "dataMax" || d < 0 ? d : Math.max(Math.min(f[0], f[1]), 0);
  }
  return u === "dataMin" ? f[0] : u === "dataMax" ? f[1] : f[0];
});
un(Pi, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, s = e.yAxisTicks, u = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, w = f && f.length, y = gS.getBaseValue(t, r, n, i), b = g === "horizontal", A = !1, O = h.map(function(_, x) {
    var E;
    w ? E = f[d + x] : (E = xt(_, l), Array.isArray(E) ? A = !0 : E = [y, E]);
    var C = E[1] == null || w && xt(_, l) == null;
    return b ? {
      x: el({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: _,
        index: x
      }),
      y: C ? null : i.scale(E[1]),
      value: E,
      payload: _
    } : {
      x: C ? null : n.scale(E[1]),
      y: el({
        axis: i,
        ticks: s,
        bandSize: u,
        entry: _,
        index: x
      }),
      value: E,
      payload: _
    };
  }), S;
  return w || A ? S = O.map(function(_) {
    var x = Array.isArray(_.value) ? _.value[0] : null;
    return b ? {
      x: _.x,
      y: x != null && _.y != null ? i.scale(x) : null
    } : {
      x: x != null ? n.scale(x) : null,
      y: _.y
    };
  }) : S = b ? i.scale(y) : n.scale(y), ci({
    points: O,
    baseLine: S,
    layout: g,
    isRange: A
  }, v);
});
un(Pi, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Me("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ k.createElement(du, qi({}, t, {
      className: n
    }));
  }
  return r;
});
function Kp() {
  return Kp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kp.apply(this, arguments);
}
var qn = function(t) {
  var r = t.xAxisId, n = pg(), i = vg(), a = uS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Po, Kp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return In(u, !0);
      }
    }))
  );
};
qn.displayName = "XAxis";
qn.defaultProps = {
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
function qp() {
  return qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qp.apply(this, arguments);
}
var Vn = function(t) {
  var r = t.yAxisId, n = pg(), i = vg(), a = cS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Po, qp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return In(u, !0);
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
function m1(e) {
  return ZQ(e) || XQ(e) || YQ(e) || VQ();
}
function VQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YQ(e, t) {
  if (e) {
    if (typeof e == "string") return Vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vp(e, t);
  }
}
function XQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ZQ(e) {
  if (Array.isArray(e)) return Vp(e);
}
function Vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Yp = function(t, r, n, i, a) {
  var s = yr(t, gg), u = yr(t, hu), l = [].concat(m1(s), m1(u)), f = yr(t, pu), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(y, b) {
    if (b.props[d] === n && ln(b.props, "extendDomain") && oe(b.props[h])) {
      var A = b.props[h];
      return [Math.min(y[0], A), Math.max(y[1], A)];
    }
    return y;
  }, v)), f.length) {
    var g = "".concat(h, "1"), w = "".concat(h, "2");
    v = f.reduce(function(y, b) {
      if (b.props[d] === n && ln(b.props, "extendDomain") && oe(b.props[g]) && oe(b.props[w])) {
        var A = b.props[g], O = b.props[w];
        return [Math.min(y[0], A, O), Math.max(y[1], A, O)];
      }
      return y;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(y, b) {
    return oe(b) ? [Math.min(y[0], b), Math.max(y[1], b)] : y;
  }, v)), v;
}, bS = { exports: {} };
(function(e) {
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
    var g = new i(d, h || l, v), w = r ? r + f : f;
    return l._events[w] ? l._events[w].fn ? l._events[w] = [l._events[w], g] : l._events[w].push(g) : (l._events[w] = g, l._eventsCount++), l;
  }
  function s(l, f) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[f];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var f = [], d, h;
    if (this._eventsCount === 0) return f;
    for (h in d = this._events)
      t.call(d, h) && f.push(r ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(d)) : f;
  }, u.prototype.listeners = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    if (!h) return [];
    if (h.fn) return [h.fn];
    for (var v = 0, g = h.length, w = new Array(g); v < g; v++)
      w[v] = h[v].fn;
    return w;
  }, u.prototype.listenerCount = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    return h ? h.fn ? 1 : h.length : 0;
  }, u.prototype.emit = function(f, d, h, v, g, w) {
    var y = r ? r + f : f;
    if (!this._events[y]) return !1;
    var b = this._events[y], A = arguments.length, O, S;
    if (b.fn) {
      switch (b.once && this.removeListener(f, b.fn, void 0, !0), A) {
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
          return b.fn.call(b.context, d, h, v, g, w), !0;
      }
      for (S = 1, O = new Array(A - 1); S < A; S++)
        O[S - 1] = arguments[S];
      b.fn.apply(b.context, O);
    } else {
      var _ = b.length, x;
      for (S = 0; S < _; S++)
        switch (b[S].once && this.removeListener(f, b[S].fn, void 0, !0), A) {
          case 1:
            b[S].fn.call(b[S].context);
            break;
          case 2:
            b[S].fn.call(b[S].context, d);
            break;
          case 3:
            b[S].fn.call(b[S].context, d, h);
            break;
          case 4:
            b[S].fn.call(b[S].context, d, h, v);
            break;
          default:
            if (!O) for (x = 1, O = new Array(A - 1); x < A; x++)
              O[x - 1] = arguments[x];
            b[S].fn.apply(b[S].context, O);
        }
    }
    return !0;
  }, u.prototype.on = function(f, d, h) {
    return a(this, f, d, h, !1);
  }, u.prototype.once = function(f, d, h) {
    return a(this, f, d, h, !0);
  }, u.prototype.removeListener = function(f, d, h, v) {
    var g = r ? r + f : f;
    if (!this._events[g]) return this;
    if (!d)
      return s(this, g), this;
    var w = this._events[g];
    if (w.fn)
      w.fn === d && (!v || w.once) && (!h || w.context === h) && s(this, g);
    else {
      for (var y = 0, b = [], A = w.length; y < A; y++)
        (w[y].fn !== d || v && !w[y].once || h && w[y].context !== h) && b.push(w[y]);
      b.length ? this._events[g] = b.length === 1 ? b[0] : b : s(this, g);
    }
    return this;
  }, u.prototype.removeAllListeners = function(f) {
    var d;
    return f ? (d = r ? r + f : f, this._events[d] && s(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
})(bS);
var JQ = bS.exports;
const QQ = /* @__PURE__ */ Qe(JQ);
var bh = new QQ(), xh = "recharts.syncMouseEvents";
function Qs(e) {
  "@babel/helpers - typeof";
  return Qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qs(e);
}
function eee(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tee(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xS(n.key), n);
  }
}
function ree(e, t, r) {
  return t && tee(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wh(e, t, r) {
  return t = xS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xS(e) {
  var t = nee(e, "string");
  return Qs(t) == "symbol" ? t : String(t);
}
function nee(e, t) {
  if (Qs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iee = /* @__PURE__ */ function() {
  function e() {
    eee(this, e), wh(this, "activeIndex", 0), wh(this, "coordinateList", []), wh(this, "layout", "horizontal");
  }
  return ree(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, s = r.container, u = s === void 0 ? null : s, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, g = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = f ?? this.layout, this.offset = h ?? this.offset, this.mouseHandlerCallback = g ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var i = this.container.getBoundingClientRect(), a = i.x, s = i.y, u = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, h = a + l + f, v = s + this.offset.top + u / 2 + d;
        this.mouseHandlerCallback({
          pageX: h,
          pageY: v
        });
      }
    }
  }]), e;
}();
function aee(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function oee(e, t, r, n) {
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
function wS(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, s = it(t, r, n, i), u = it(t, r, n, a);
  return {
    points: [s, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function see(e, t, r) {
  var n, i, a, s;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, s = r.top + r.height;
  else if (e === "vertical")
    i = t.y, s = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = it(u, l, f, h), g = it(u, l, d, h);
      n = v.x, i = v.y, a = g.x, s = g.y;
    } else
      return wS(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: s
  }];
}
function eu(e) {
  "@babel/helpers - typeof";
  return eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eu(e);
}
function b1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? b1(Object(r), !0).forEach(function(n) {
      uee(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uee(e, t, r) {
  return t = cee(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cee(e) {
  var t = lee(e, "string");
  return eu(t) == "symbol" ? t : String(t);
}
function lee(e, t) {
  if (eu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fee(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, s = e.offset, u = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Zi;
  if (d === "ScatterChart")
    h = i, v = iX;
  else if (d === "BarChart")
    h = oee(f, i, s, l), v = cg;
  else if (f === "radial") {
    var g = wS(i), w = g.cx, y = g.cy, b = g.radius, A = g.startAngle, O = g.endAngle;
    h = {
      cx: w,
      cy: y,
      startAngle: A,
      endAngle: O,
      innerRadius: b,
      outerRadius: b
    }, v = PA;
  } else
    h = {
      points: see(f, i, s)
    }, v = Zi;
  var S = wc(wc(wc(wc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), h), me(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: u,
    className: Me("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ qr(t.props.cursor) ? /* @__PURE__ */ St(t.props.cursor, S) : /* @__PURE__ */ L1(v, S);
}
var dee = ["item"], hee = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function so(e) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ys.apply(this, arguments);
}
function x1(e, t) {
  return gee(e) || vee(e, t) || OS(e, t) || pee();
}
function pee() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vee(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, u = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return u;
  }
}
function gee(e) {
  if (Array.isArray(e)) return e;
}
function w1(e, t) {
  if (e == null) return {};
  var r = yee(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yee(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function mee(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bee(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, AS(n.key), n);
  }
}
function xee(e, t, r) {
  return t && bee(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wee(e, t, r) {
  return t = Al(t), _ee(e, _S() ? Reflect.construct(t, r || [], Al(e).constructor) : t.apply(e, r));
}
function _ee(e, t) {
  if (t && (so(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ze(e);
}
function _S() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_S = function() {
    return !!e;
  })();
}
function Al(e) {
  return Al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Al(e);
}
function ze(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xp(e, t);
}
function uo(e) {
  return Pee(e) || See(e) || OS(e) || Aee();
}
function Aee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OS(e, t) {
  if (e) {
    if (typeof e == "string") return Zp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zp(e, t);
  }
}
function See(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Pee(e) {
  if (Array.isArray(e)) return Zp(e);
}
function Zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _1(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t, r) {
  return t = AS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AS(e) {
  var t = Eee(e, "string");
  return so(t) == "symbol" ? t : String(t);
}
function Eee(e, t) {
  if (so(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (so(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tee = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, $ee = {
  width: "100%",
  height: "100%"
}, SS = {
  x: 0,
  y: 0
};
function _c(e) {
  return e;
}
var Cee = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, Mee = function(t, r, n, i) {
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
      var s = a.coordinate, u = i.radius;
      return re(re(re({}, i), it(i.cx, i.cy, u, s)), {}, {
        angle: s,
        radius: u
      });
    }
    var l = a.coordinate, f = i.angle;
    return re(re(re({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return SS;
}, sf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, s = (n ?? []).reduce(function(u, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(uo(u), uo(f)) : u;
  }, []);
  return s.length > 0 ? s : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function PS(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Jp = function(t, r, n, i) {
  var a = t.graphicalItems, s = t.tooltipAxis, u = sf(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (s.dataKey && !s.allowDuplicatedCategory) {
      var g = h === void 0 ? u : h;
      v = Ec(g, s.dataKey, i);
    } else
      v = h && h[n] || u[n];
    return v ? [].concat(uo(l), [xA(f, v)]) : l;
  }, []);
}, O1 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, s = Cee(a, n), u = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = k4(s, u, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = Jp(t, r, d, h), g = Mee(n, u, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, Iee = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, s = r.axisIdKey, u = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = pA(d, a);
  return n.reduce(function(w, y) {
    var b, A = y.props, O = A.type, S = A.dataKey, _ = A.allowDataOverflow, x = A.allowDuplicatedCategory, E = A.scale, C = A.ticks, M = A.includeHidden, F = y.props[s];
    if (w[F])
      return w;
    var D = sf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[s] === F;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), B = D.length, N, U, z;
    aee(y.props.domain, _, O) && (N = vp(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (z = ds(D, S, "category")));
    var J = PS(O);
    if (!N || N.length === 0) {
      var H, Z = (H = y.props.domain) !== null && H !== void 0 ? H : J;
      if (S) {
        if (N = ds(D, S, O), O === "category" && g) {
          var V = ID(N);
          x && V ? (U = N, N = pl(0, B)) : x || (N = Rx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(uo(ae), [ce]);
          }, []));
        } else if (O === "category")
          x ? N = N.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : N = Rx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(uo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var se = L4(D, i.filter(function(ae) {
            return ae.props[s] === F && (M || !ae.props.hide);
          }), S, a, d);
          se && (N = se);
        }
        g && (O === "number" || E !== "auto") && (z = ds(D, S, "category"));
      } else g ? N = pl(0, B) : u && u[F] && u[F].hasStack && O === "number" ? N = v === "expand" ? [0, 1] : bA(u[F].stackGroups, l, f) : N = hA(D, i.filter(function(ae) {
        return ae.props[s] === F && (M || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        N = Yp(h, N, F, a, C), Z && (N = vp(Z, N, _));
      else if (O === "category" && Z) {
        var G = Z, X = N.every(function(ae) {
          return G.indexOf(ae) >= 0;
        });
        X && (N = G);
      }
    }
    return re(re({}, w), {}, Se({}, F, re(re({}, y.props), {}, {
      axisType: a,
      domain: N,
      categoricalDomain: z,
      duplicateDomain: U,
      originalDomain: (b = y.props.domain) !== null && b !== void 0 ? b : J,
      isCategorical: g,
      layout: d
    })));
  }, {});
}, kee = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, s = r.axisIdKey, u = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = sf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, w = pA(d, a), y = -1;
  return n.reduce(function(b, A) {
    var O = A.props[s], S = PS("number");
    if (!b[O]) {
      y++;
      var _;
      return w ? _ = pl(0, g) : u && u[O] && u[O].hasStack ? (_ = bA(u[O].stackGroups, l, f), _ = Yp(h, _, O, a)) : (_ = vp(S, hA(v, n.filter(function(x) {
        return x.props[s] === O && !x.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = Yp(h, _, O, a)), re(re({}, b), {}, Se({}, O, re(re({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: gr(Tee, "".concat(a, ".").concat(y % 2), null),
        domain: _,
        originalDomain: S,
        isCategorical: w,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return b;
  }, {});
}, jee = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, s = r.graphicalItems, u = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = yr(d, a), g = {};
  return v && v.length ? g = Iee(t, {
    axes: v,
    graphicalItems: s,
    axisType: i,
    axisIdKey: h,
    stackGroups: u,
    dataStartIndex: l,
    dataEndIndex: f
  }) : s && s.length && (g = kee(t, {
    Axis: a,
    graphicalItems: s,
    axisType: i,
    axisIdKey: h,
    stackGroups: u,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, Ree = function(t) {
  var r = fi(t), n = In(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: jv(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: tl(r, n)
  };
}, A1 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = dr(r, to), a = 0, s = 0;
  return t.data && t.data.length !== 0 && (s = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (s = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: s,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Nee = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = kn(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, S1 = function(t) {
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
}, Dee = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, s = a === void 0 ? {} : a, u = t.yAxisMap, l = u === void 0 ? {} : u, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = dr(h, to), w = dr(h, Ha), y = Object.keys(l).reduce(function(x, E) {
    var C = l[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, x), {}, Se({}, M, x[M] + C.width)) : x;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), b = Object.keys(s).reduce(function(x, E) {
    var C = s[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, x), {}, Se({}, M, gr(x, "".concat(M)) + C.height)) : x;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), A = re(re({}, b), y), O = A.bottom;
  g && (A.bottom += g.props.height || to.defaultProps.height), w && r && (A = N4(A, i, n, r));
  var S = f - A.left - A.right, _ = d - A.top - A.bottom;
  return re(re({
    brushBottom: O
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(_, 0)
  });
}, Lee = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, uf = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, s = a === void 0 ? "axis" : a, u = t.validateTooltipEventTypes, l = u === void 0 ? ["axis"] : u, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(b, A) {
    var O = A.graphicalItems, S = A.stackGroups, _ = A.offset, x = A.updateId, E = A.dataStartIndex, C = A.dataEndIndex, M = b.barSize, F = b.layout, D = b.barGap, B = b.barCategoryGap, N = b.maxBarSize, U = S1(F), z = U.numericAxisName, J = U.cateAxisName, H = Nee(O), Z = [];
    return O.forEach(function(V, se) {
      var G = sf(b.data, {
        graphicalItems: [V],
        dataStartIndex: E,
        dataEndIndex: C
      }), X = V.props, ae = X.dataKey, ce = X.maxBarSize, he = V.props["".concat(z, "Id")], ge = V.props["".concat(J, "Id")], xe = {}, ye = f.reduce(function(nr, yt) {
        var yn, Yn, Io = A["".concat(yt.axisType, "Map")], Xn = V.props["".concat(yt.axisType, "Id")];
        Io && Io[Xn] || yt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? er(!1, "Specifying a(n) ".concat(yt.axisType, "Id requires a corresponding ").concat(
          yt.axisType,
          "Id on the targeted graphical component "
        ).concat((yn = V == null || (Yn = V.type) === null || Yn === void 0 ? void 0 : Yn.displayName) !== null && yn !== void 0 ? yn : "")) : er());
        var bu = Io[Xn];
        return re(re({}, nr), {}, Se(Se({}, yt.axisType, bu), "".concat(yt.axisType, "Ticks"), In(bu)));
      }, xe), we = ye[J], ne = ye["".concat(J, "Ticks")], ue = S && S[he] && S[he].hasStack && q4(V, S[he].stackGroups), pe = kn(V.type).indexOf("Bar") >= 0, j = tl(we, ne), Ee = [], be = H && j4({
        barSize: M,
        stackGroups: S,
        totalSize: Lee(ye, J)
      });
      if (pe) {
        var We, lt, at = Te(ce) ? N : ce, Vt = (We = (lt = tl(we, ne, !0)) !== null && lt !== void 0 ? lt : at) !== null && We !== void 0 ? We : 0;
        Ee = R4({
          barGap: D,
          barCategoryGap: B,
          bandSize: Vt !== j ? Vt : j,
          sizeList: be[ge],
          maxBarSize: at
        }), Vt !== j && (Ee = Ee.map(function(nr) {
          return re(re({}, nr), {}, {
            position: re(re({}, nr.position), {}, {
              offset: nr.position.offset - Vt / 2
            })
          });
        }));
      }
      var Lr = V && V.type && V.type.getComposedData;
      Lr && Z.push({
        props: re(re({}, Lr(re(re({}, ye), {}, {
          displayedData: G,
          props: b,
          dataKey: ae,
          item: V,
          bandSize: j,
          barPosition: Ee,
          offset: _,
          stackedData: ue,
          layout: F,
          dataStartIndex: E,
          dataEndIndex: C
        }))), {}, Se(Se(Se({
          key: V.key || "item-".concat(se)
        }, z, ye[z]), J, ye[J]), "animationId", x)),
        childIndex: UD(V, b.children),
        item: V
      });
    }), Z;
  }, w = function(b, A) {
    var O = b.props, S = b.dataStartIndex, _ = b.dataEndIndex, x = b.updateId;
    if (!$b({
      props: O
    }))
      return null;
    var E = O.children, C = O.layout, M = O.stackOffset, F = O.data, D = O.reverseStackOrder, B = S1(C), N = B.numericAxisName, U = B.cateAxisName, z = yr(E, i), J = G4(F, z, "".concat(N, "Id"), "".concat(U, "Id"), M, D), H = f.reduce(function(X, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return re(re({}, X), {}, Se({}, ce, jee(O, re(re({}, ae), {}, {
        graphicalItems: z,
        stackGroups: ae.axisType === N && J,
        dataStartIndex: S,
        dataEndIndex: _
      }))));
    }, {}), Z = Dee(re(re({}, H), {}, {
      props: O,
      graphicalItems: z
    }), A == null ? void 0 : A.legendBBox);
    Object.keys(H).forEach(function(X) {
      H[X] = h(O, H[X], Z, X.replace("Map", ""), n);
    });
    var V = H["".concat(U, "Map")], se = Ree(V), G = g(O, re(re({}, H), {}, {
      dataStartIndex: S,
      dataEndIndex: _,
      updateId: x,
      graphicalItems: z,
      stackGroups: J,
      offset: Z
    }));
    return re(re({
      formattedGraphicalItems: G,
      graphicalItems: z,
      offset: Z,
      stackGroups: J
    }, se), H);
  };
  return r = /* @__PURE__ */ function(y) {
    Oee(b, y);
    function b(A) {
      var O, S, _;
      return mee(this, b), _ = wee(this, b, [A]), Se(ze(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(ze(_), "accessibilityManager", new iee()), Se(ze(_), "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var E = _.state, C = E.dataStartIndex, M = E.dataEndIndex, F = E.updateId;
          _.setState(re({
            legendBBox: x
          }, w({
            props: _.props,
            dataStartIndex: C,
            dataEndIndex: M,
            updateId: F
          }, re(re({}, _.state), {}, {
            legendBBox: x
          }))));
        }
      }), Se(ze(_), "handleReceiveSyncEvent", function(x, E, C) {
        if (_.props.syncId === x) {
          if (C === _.eventEmitterSymbol && typeof _.props.syncMethod != "function")
            return;
          _.applySyncEvent(E);
        }
      }), Se(ze(_), "handleBrushChange", function(x) {
        var E = x.startIndex, C = x.endIndex;
        if (E !== _.state.dataStartIndex || C !== _.state.dataEndIndex) {
          var M = _.state.updateId;
          _.setState(function() {
            return re({
              dataStartIndex: E,
              dataEndIndex: C
            }, w({
              props: _.props,
              dataStartIndex: E,
              dataEndIndex: C,
              updateId: M
            }, _.state));
          }), _.triggerSyncEvent({
            dataStartIndex: E,
            dataEndIndex: C
          });
        }
      }), Se(ze(_), "handleMouseEnter", function(x) {
        var E = _.getMouseInfo(x);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onMouseEnter;
          Pe(M) && M(C, x);
        }
      }), Se(ze(_), "triggeredAfterMouseMove", function(x) {
        var E = _.getMouseInfo(x), C = E ? re(re({}, E), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        _.setState(C), _.triggerSyncEvent(C);
        var M = _.props.onMouseMove;
        Pe(M) && M(C, x);
      }), Se(ze(_), "handleItemMouseEnter", function(x) {
        _.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: x,
            activePayload: x.tooltipPayload,
            activeCoordinate: x.tooltipPosition || {
              x: x.cx,
              y: x.cy
            }
          };
        });
      }), Se(ze(_), "handleItemMouseLeave", function() {
        _.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Se(ze(_), "handleMouseMove", function(x) {
        x.persist(), _.throttleTriggeredAfterMouseMove(x);
      }), Se(ze(_), "handleMouseLeave", function(x) {
        _.throttleTriggeredAfterMouseMove.cancel();
        var E = {
          isTooltipActive: !1
        };
        _.setState(E), _.triggerSyncEvent(E);
        var C = _.props.onMouseLeave;
        Pe(C) && C(E, x);
      }), Se(ze(_), "handleOuterEvent", function(x) {
        var E = zD(x), C = gr(_.props, "".concat(E));
        if (E && Pe(C)) {
          var M, F;
          /.*touch.*/i.test(E) ? F = _.getMouseInfo(x.changedTouches[0]) : F = _.getMouseInfo(x), C((M = F) !== null && M !== void 0 ? M : {}, x);
        }
      }), Se(ze(_), "handleClick", function(x) {
        var E = _.getMouseInfo(x);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onClick;
          Pe(M) && M(C, x);
        }
      }), Se(ze(_), "handleMouseDown", function(x) {
        var E = _.props.onMouseDown;
        if (Pe(E)) {
          var C = _.getMouseInfo(x);
          E(C, x);
        }
      }), Se(ze(_), "handleMouseUp", function(x) {
        var E = _.props.onMouseUp;
        if (Pe(E)) {
          var C = _.getMouseInfo(x);
          E(C, x);
        }
      }), Se(ze(_), "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), Se(ze(_), "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.handleMouseDown(x.changedTouches[0]);
      }), Se(ze(_), "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.handleMouseUp(x.changedTouches[0]);
      }), Se(ze(_), "triggerSyncEvent", function(x) {
        _.props.syncId !== void 0 && bh.emit(xh, _.props.syncId, x, _.eventEmitterSymbol);
      }), Se(ze(_), "applySyncEvent", function(x) {
        var E = _.props, C = E.layout, M = E.syncMethod, F = _.state.updateId, D = x.dataStartIndex, B = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          _.setState(re({
            dataStartIndex: D,
            dataEndIndex: B
          }, w({
            props: _.props,
            dataStartIndex: D,
            dataEndIndex: B,
            updateId: F
          }, _.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var N = x.chartX, U = x.chartY, z = x.activeTooltipIndex, J = _.state, H = J.offset, Z = J.tooltipTicks;
          if (!H)
            return;
          if (typeof M == "function")
            z = M(Z, x);
          else if (M === "value") {
            z = -1;
            for (var V = 0; V < Z.length; V++)
              if (Z[V].value === x.activeLabel) {
                z = V;
                break;
              }
          }
          var se = re(re({}, H), {}, {
            x: H.left,
            y: H.top
          }), G = Math.min(N, se.x + se.width), X = Math.min(U, se.y + se.height), ae = Z[z] && Z[z].value, ce = Jp(_.state, _.props.data, z), he = Z[z] ? {
            x: C === "horizontal" ? Z[z].coordinate : G,
            y: C === "horizontal" ? X : Z[z].coordinate
          } : SS;
          _.setState(re(re({}, x), {}, {
            activeLabel: ae,
            activeCoordinate: he,
            activePayload: ce,
            activeTooltipIndex: z
          }));
        } else
          _.setState(x);
      }), Se(ze(_), "renderCursor", function(x) {
        var E, C = _.state, M = C.isTooltipActive, F = C.activeCoordinate, D = C.activePayload, B = C.offset, N = C.activeTooltipIndex, U = C.tooltipAxisBandSize, z = _.getTooltipEventType(), J = (E = x.props.active) !== null && E !== void 0 ? E : M, H = _.props.layout, Z = x.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(fee, {
          key: Z,
          activeCoordinate: F,
          activePayload: D,
          activeTooltipIndex: N,
          chartName: n,
          element: x,
          isActive: J,
          layout: H,
          offset: B,
          tooltipAxisBandSize: U,
          tooltipEventType: z
        });
      }), Se(ze(_), "renderPolarAxis", function(x, E, C) {
        var M = gr(x, "type.axisType"), F = gr(_.state, "".concat(M, "Map")), D = F && F[x.props["".concat(M, "Id")]];
        return /* @__PURE__ */ St(x, re(re({}, D), {}, {
          className: Me(M, D.className),
          key: x.key || "".concat(E, "-").concat(C),
          ticks: In(D, !0)
        }));
      }), Se(ze(_), "renderPolarGrid", function(x) {
        var E = x.props, C = E.radialLines, M = E.polarAngles, F = E.polarRadius, D = _.state, B = D.radiusAxisMap, N = D.angleAxisMap, U = fi(B), z = fi(N), J = z.cx, H = z.cy, Z = z.innerRadius, V = z.outerRadius;
        return /* @__PURE__ */ St(x, {
          polarAngles: Array.isArray(M) ? M : In(z, !0).map(function(se) {
            return se.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : In(U, !0).map(function(se) {
            return se.coordinate;
          }),
          cx: J,
          cy: H,
          innerRadius: Z,
          outerRadius: V,
          key: x.key || "polar-grid",
          radialLines: C
        });
      }), Se(ze(_), "renderLegend", function() {
        var x = _.state.formattedGraphicalItems, E = _.props, C = E.children, M = E.width, F = E.height, D = _.props.margin || {}, B = M - (D.left || 0) - (D.right || 0), N = fA({
          children: C,
          formattedGraphicalItems: x,
          legendWidth: B,
          legendContent: d
        });
        if (!N)
          return null;
        var U = N.item, z = w1(N, dee);
        return /* @__PURE__ */ St(U, re(re({}, z), {}, {
          chartWidth: M,
          chartHeight: F,
          margin: D,
          onBBoxUpdate: _.handleLegendBBoxUpdate
        }));
      }), Se(ze(_), "renderTooltip", function() {
        var x, E = _.props, C = E.children, M = E.accessibilityLayer, F = dr(C, on);
        if (!F)
          return null;
        var D = _.state, B = D.isTooltipActive, N = D.activeCoordinate, U = D.activePayload, z = D.activeLabel, J = D.offset, H = (x = F.props.active) !== null && x !== void 0 ? x : B;
        return /* @__PURE__ */ St(F, {
          viewBox: re(re({}, J), {}, {
            x: J.left,
            y: J.top
          }),
          active: H,
          label: z,
          payload: H ? U : [],
          coordinate: N,
          accessibilityLayer: M
        });
      }), Se(ze(_), "renderBrush", function(x) {
        var E = _.props, C = E.margin, M = E.data, F = _.state, D = F.offset, B = F.dataStartIndex, N = F.dataEndIndex, U = F.updateId;
        return /* @__PURE__ */ St(x, {
          key: x.key || "_recharts-brush",
          onChange: gc(_.handleBrushChange, x.props.onChange),
          data: M,
          x: oe(x.props.x) ? x.props.x : D.left,
          y: oe(x.props.y) ? x.props.y : D.top + D.height + D.brushBottom - (C.bottom || 0),
          width: oe(x.props.width) ? x.props.width : D.width,
          startIndex: B,
          endIndex: N,
          updateId: "brush-".concat(U)
        });
      }), Se(ze(_), "renderReferenceElement", function(x, E, C) {
        if (!x)
          return null;
        var M = ze(_), F = M.clipPathId, D = _.state, B = D.xAxisMap, N = D.yAxisMap, U = D.offset, z = x.props, J = z.xAxisId, H = z.yAxisId;
        return /* @__PURE__ */ St(x, {
          key: x.key || "".concat(E, "-").concat(C),
          xAxis: B[J],
          yAxis: N[H],
          viewBox: {
            x: U.left,
            y: U.top,
            width: U.width,
            height: U.height
          },
          clipPathId: F
        });
      }), Se(ze(_), "renderActivePoints", function(x) {
        var E = x.item, C = x.activePoint, M = x.basePoint, F = x.childIndex, D = x.isRange, B = [], N = E.props.key, U = E.item.props, z = U.activeDot, J = U.dataKey, H = re(re({
          index: F,
          dataKey: J,
          cx: C.x,
          cy: C.y,
          r: 4,
          fill: sg(E.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value,
          key: "".concat(N, "-activePoint-").concat(F)
        }, me(z, !1)), Tc(z));
        return B.push(b.renderActiveDot(z, H)), M ? B.push(b.renderActiveDot(z, re(re({}, H), {}, {
          cx: M.x,
          cy: M.y,
          key: "".concat(N, "-basePoint-").concat(F)
        }))) : D && B.push(null), B;
      }), Se(ze(_), "renderGraphicChild", function(x, E, C) {
        var M = _.filterFormatItem(x, E, C);
        if (!M)
          return null;
        var F = _.getTooltipEventType(), D = _.state, B = D.isTooltipActive, N = D.tooltipAxis, U = D.activeTooltipIndex, z = D.activeLabel, J = _.props.children, H = dr(J, on), Z = M.props, V = Z.points, se = Z.isRange, G = Z.baseLine, X = M.item.props, ae = X.activeDot, ce = X.hide, he = X.activeBar, ge = X.activeShape, xe = !!(!ce && B && H && (ae || he || ge)), ye = {};
        F !== "axis" && H && H.props.trigger === "click" ? ye = {
          onClick: gc(_.handleItemMouseEnter, x.props.onClick)
        } : F !== "axis" && (ye = {
          onMouseLeave: gc(_.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: gc(_.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var we = /* @__PURE__ */ St(x, re(re({}, M.props), ye));
        function ne(yt) {
          return typeof N.dataKey == "function" ? N.dataKey(yt.payload) : null;
        }
        if (xe)
          if (U >= 0) {
            var ue, pe;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var j = typeof N.dataKey == "function" ? ne : "payload.".concat(N.dataKey.toString());
              ue = Ec(V, j, z), pe = se && G && Ec(G, j, z);
            } else
              ue = V == null ? void 0 : V[U], pe = se && G && G[U];
            if (ge || he) {
              var Ee = x.props.activeIndex !== void 0 ? x.props.activeIndex : U;
              return [/* @__PURE__ */ St(x, re(re(re({}, M.props), ye), {}, {
                activeIndex: Ee
              })), null, null];
            }
            if (!Te(ue))
              return [we].concat(uo(_.renderActivePoints({
                item: M,
                activePoint: ue,
                basePoint: pe,
                childIndex: U,
                isRange: se
              })));
          } else {
            var be, We = (be = _.getItemByXY(_.state.activeCoordinate)) !== null && be !== void 0 ? be : {
              graphicalItem: we
            }, lt = We.graphicalItem, at = lt.item, Vt = at === void 0 ? x : at, Lr = lt.childIndex, nr = re(re(re({}, M.props), ye), {}, {
              activeIndex: Lr
            });
            return [/* @__PURE__ */ St(Vt, nr), null, null];
          }
        return se ? [we, null, null] : [we, null];
      }), Se(ze(_), "renderCustomized", function(x, E, C) {
        return /* @__PURE__ */ St(x, re(re({
          key: "recharts-customized-".concat(C)
        }, _.props), _.state));
      }), Se(ze(_), "renderMap", {
        CartesianGrid: {
          handler: _c,
          once: !0
        },
        ReferenceArea: {
          handler: _.renderReferenceElement
        },
        ReferenceLine: {
          handler: _c
        },
        ReferenceDot: {
          handler: _.renderReferenceElement
        },
        XAxis: {
          handler: _c
        },
        YAxis: {
          handler: _c
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
      }), _.clipPathId = "".concat((O = A.id) !== null && O !== void 0 ? O : oa("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = hO(_.triggeredAfterMouseMove, (S = A.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), _.state = {}, _;
    }
    return xee(b, [{
      key: "componentDidMount",
      value: function() {
        var O, S;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (O = this.props.margin.left) !== null && O !== void 0 ? O : 0,
            top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var O = this.props, S = O.children, _ = O.data, x = O.height, E = O.layout, C = dr(S, on);
        if (C) {
          var M = C.props.defaultIndex;
          if (!(typeof M != "number" || M < 0 || M > this.state.tooltipTicks.length)) {
            var F = this.state.tooltipTicks[M] && this.state.tooltipTicks[M].value, D = Jp(this.state, _, M, F), B = this.state.tooltipTicks[M].coordinate, N = (this.state.offset.top + x) / 2, U = E === "horizontal", z = U ? {
              x: B,
              y: N
            } : {
              y: B,
              x: N
            }, J = this.state.formattedGraphicalItems.find(function(Z) {
              var V = Z.item;
              return V.type.name === "Scatter";
            });
            J && (z = re(re({}, z), J.props.points[M].tooltipPosition), D = J.props.points[M].tooltipPayload);
            var H = {
              activeTooltipIndex: M,
              isTooltipActive: !0,
              activeLabel: F,
              activePayload: D,
              activeCoordinate: z
            };
            this.setState(H), this.renderCursor(C), this.accessibilityManager.setIndex(M);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(O, S) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== O.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== O.margin) {
          var _, x;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_ = this.props.margin.left) !== null && _ !== void 0 ? _ : 0,
              top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(O) {
        Ch([dr(O.children, on)], [dr(this.props.children, on)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = dr(this.props.children, on);
        if (O && typeof O.props.shared == "boolean") {
          var S = O.props.shared ? "axis" : "item";
          return l.indexOf(S) >= 0 ? S : s;
        }
        return s;
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
        var S = this.container, _ = S.getBoundingClientRect(), x = vH(_), E = {
          chartX: Math.round(O.pageX - x.left),
          chartY: Math.round(O.pageY - x.top)
        }, C = _.width / S.offsetWidth || 1, M = this.inRange(E.chartX, E.chartY, C);
        if (!M)
          return null;
        var F = this.state, D = F.xAxisMap, B = F.yAxisMap, N = this.getTooltipEventType();
        if (N !== "axis" && D && B) {
          var U = fi(D).scale, z = fi(B).scale, J = U && U.invert ? U.invert(E.chartX) : null, H = z && z.invert ? z.invert(E.chartY) : null;
          return re(re({}, E), {}, {
            xValue: J,
            yValue: H
          });
        }
        var Z = O1(this.state, this.props.data, this.props.layout, M);
        return Z ? re(re({}, E), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(O, S) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, E = O / _, C = S / _;
        if (x === "horizontal" || x === "vertical") {
          var M = this.state.offset, F = E >= M.left && E <= M.left + M.width && C >= M.top && C <= M.top + M.height;
          return F ? {
            x: E,
            y: C
          } : null;
        }
        var D = this.state, B = D.angleAxisMap, N = D.radiusAxisMap;
        if (B && N) {
          var U = fi(B);
          return Lx({
            x: E,
            y: C
          }, U);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, S = this.getTooltipEventType(), _ = dr(O, on), x = {};
        _ && S === "axis" && (_.props.trigger === "click" ? x = {
          onClick: this.handleClick
        } : x = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var E = Tc(this.props, this.handleOuterEvent);
        return re(re({}, E), x);
      }
    }, {
      key: "addListener",
      value: function() {
        bh.on(xh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        bh.removeListener(xh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, S, _) {
        for (var x = this.state.formattedGraphicalItems, E = 0, C = x.length; E < C; E++) {
          var M = x[E];
          if (M.item === O || M.props.key === O.key || S === kn(M.item.type) && _ === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, S = this.state.offset, _ = S.left, x = S.top, E = S.height, C = S.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ k.createElement("rect", {
          x: _,
          y: x,
          height: E,
          width: C
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var x = x1(_, 2), E = x[0], C = x[1];
          return re(re({}, S), {}, Se({}, E, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var x = x1(_, 2), E = x[0], C = x[1];
          return re(re({}, S), {}, Se({}, E, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(O) {
        var S;
        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[O]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(O) {
        var S;
        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[O]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(O) {
        var S = this.state, _ = S.formattedGraphicalItems, x = S.activeItem;
        if (_ && _.length)
          for (var E = 0, C = _.length; E < C; E++) {
            var M = _[E], F = M.props, D = M.item, B = kn(D.type);
            if (B === "Bar") {
              var N = (F.data || []).find(function(H) {
                return L9(O, H);
              });
              if (N)
                return {
                  graphicalItem: M,
                  payload: N
                };
            } else if (B === "RadialBar") {
              var U = (F.data || []).find(function(H) {
                return Lx(O, H);
              });
              if (U)
                return {
                  graphicalItem: M,
                  payload: U
                };
            } else if (nf(M, x) || af(M, x) || Ks(M, x)) {
              var z = P7({
                graphicalItem: M,
                activeTooltipItem: x,
                itemData: D.props.data
              }), J = D.props.activeIndex === void 0 ? z : D.props.activeIndex;
              return {
                graphicalItem: re(re({}, M), {}, {
                  childIndex: J
                }),
                payload: Ks(M, x) ? D.props.data[z] : M.props.data[z]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!$b(this))
          return null;
        var S = this.props, _ = S.children, x = S.className, E = S.width, C = S.height, M = S.style, F = S.compact, D = S.title, B = S.desc, N = w1(S, hee), U = me(N, !1);
        if (F)
          return /* @__PURE__ */ k.createElement(t1, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(Ih, ys({}, U, {
            width: E,
            height: C,
            title: D,
            desc: B
          }), this.renderClipPath(), Mb(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var z, J;
          U.tabIndex = (z = this.props.tabIndex) !== null && z !== void 0 ? z : 0, U.role = (J = this.props.role) !== null && J !== void 0 ? J : "application", U.onKeyDown = function(Z) {
            O.accessibilityManager.keyboardEvent(Z);
          }, U.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var H = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(t1, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", ys({
          className: Me("recharts-wrapper", x),
          style: re({
            position: "relative",
            cursor: "default",
            width: E,
            height: C
          }, M)
        }, H, {
          ref: function(V) {
            O.container = V;
          }
        }), /* @__PURE__ */ k.createElement(Ih, ys({}, U, {
          width: E,
          height: C,
          title: D,
          desc: B,
          style: $ee
        }), this.renderClipPath(), Mb(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), b;
  }(B1), Se(r, "displayName", n), Se(r, "defaultProps", re({
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
  }, v)), Se(r, "getDerivedStateFromProps", function(y, b) {
    var A = y.dataKey, O = y.data, S = y.children, _ = y.width, x = y.height, E = y.layout, C = y.stackOffset, M = y.margin, F = b.dataStartIndex, D = b.dataEndIndex;
    if (b.updateId === void 0) {
      var B = A1(y);
      return re(re(re({}, B), {}, {
        updateId: 0
      }, w(re(re({
        props: y
      }, B), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: x,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (A !== b.prevDataKey || O !== b.prevData || _ !== b.prevWidth || x !== b.prevHeight || E !== b.prevLayout || C !== b.prevStackOffset || !Na(M, b.prevMargin)) {
      var N = A1(y), U = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, z = re(re({}, O1(b, O, E)), {}, {
        updateId: b.updateId + 1
      }), J = re(re(re({}, N), U), z);
      return re(re(re({}, J), w(re({
        props: y
      }, J), b)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: x,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (!Ch(S, b.prevChildren)) {
      var H, Z, V, se, G = dr(S, to), X = G && (H = (Z = G.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && H !== void 0 ? H : F, ae = G && (V = (se = G.props) === null || se === void 0 ? void 0 : se.endIndex) !== null && V !== void 0 ? V : D, ce = X !== F || ae !== D, he = !Te(O), ge = he && !ce ? b.updateId : b.updateId + 1;
      return re(re({
        updateId: ge
      }, w(re(re({
        props: y
      }, b), {}, {
        updateId: ge,
        dataStartIndex: X,
        dataEndIndex: ae
      }), b)), {}, {
        prevChildren: S,
        dataStartIndex: X,
        dataEndIndex: ae
      });
    }
    return null;
  }), Se(r, "renderActiveDot", function(y, b) {
    var A;
    return /* @__PURE__ */ qr(y) ? A = /* @__PURE__ */ St(y, b) : Pe(y) ? A = y(b) : A = /* @__PURE__ */ k.createElement(du, b), /* @__PURE__ */ k.createElement(Le, {
      className: "recharts-active-dot",
      key: b.key
    }, A);
  }), r;
}, Bee = uf({
  chartName: "LineChart",
  GraphicalChild: gu,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: lg
}), ES = uf({
  chartName: "BarChart",
  GraphicalChild: Si,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: lg
}), Fee = uf({
  chartName: "PieChart",
  GraphicalChild: Kn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: rf
  }, {
    axisType: "radiusAxis",
    AxisComp: ef
  }],
  formatAxisMap: nV,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Wee = uf({
  chartName: "AreaChart",
  GraphicalChild: Pi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: lg
});
const zee = zn("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), Uee = { light: "", dark: ".dark" }, TS = K.createContext(null);
function $S() {
  const e = K.useContext(TS);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Hee = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, s) => {
  const u = K.useId(), l = `chart-${e || u.replace(/:/g, "")}`, f = K.useRef(null), [d, h] = Nn(), v = nu(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return uv(() => {
    const g = s && "current" in s ? s.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, s, f]), /* @__PURE__ */ q(TS.Provider, { value: { config: i }, children: /* @__PURE__ */ Je(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: s || f,
      className: vt(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? zee({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ q(Gee, { id: l, config: i }),
        /* @__PURE__ */ q(
          uH,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, Eo = K.forwardRef(Hee);
Eo.displayName = "Chart";
const Gee = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ q(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Uee).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, s]) => {
            var l;
            const u = ((l = s.theme) == null ? void 0 : l[n]) || s.color;
            return u ? `  --color-${a}: ${u};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, yu = on, To = K.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: u,
    labelClassName: l,
    formatter: f,
    yAxisFormatter: d,
    color: h,
    nameKey: v,
    labelKey: g
  }, w) => {
    const { config: y } = $S(), b = K.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, S = `${g || O.dataKey || O.name || "value"}`, _ = Qp(y, O, S), x = !g && typeof s == "string" ? ((E = y[s]) == null ? void 0 : E.label) || s : _ == null ? void 0 : _.label;
      return u ? /* @__PURE__ */ q("div", { className: vt("font-medium", l), children: u(x, t) }) : x ? /* @__PURE__ */ q("div", { className: vt("font-medium", l), children: x }) : null;
    }, [
      s,
      u,
      t,
      i,
      l,
      y,
      g
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const A = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Je(
      "div",
      {
        ref: w,
        className: vt(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          A ? null : b,
          /* @__PURE__ */ q("div", { className: "grid gap-2", children: t.map((O, S) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, x = Qp(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ q(
              "div",
              {
                className: vt(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, S, O.payload) : /* @__PURE__ */ Je(sv, { children: [
                  x != null && x.icon ? /* @__PURE__ */ q(x.icon, {}) : !a && /* @__PURE__ */ q(
                    "div",
                    {
                      className: vt(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": A && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": E,
                        "--color-border": E
                      }
                    }
                  ),
                  /* @__PURE__ */ Je(
                    "div",
                    {
                      className: vt(
                        "flex flex-1 justify-between leading-none",
                        A ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Je("div", { className: "grid gap-2", children: [
                          A ? b : null,
                          /* @__PURE__ */ q("span", { className: "pr-2 text-f1-foreground", children: (x == null ? void 0 : x.label) || O.name })
                        ] }),
                        O.value && /* @__PURE__ */ q("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: d ? d(String(O.value)) : O.value.toLocaleString() })
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
const CS = Ha, bg = K.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    leftShift: a = 0
  }, s) => {
    const { config: u } = $S();
    return r != null && r.length ? /* @__PURE__ */ q(
      "div",
      {
        ref: s,
        className: vt(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: a },
        children: r.map((l) => {
          const f = `${i || l.dataKey || "value"}`, d = Qp(u, l, f);
          return /* @__PURE__ */ Je(
            "div",
            {
              className: vt(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                d != null && d.icon && !t ? /* @__PURE__ */ q(d.icon, {}) : /* @__PURE__ */ q(
                  "div",
                  {
                    className: "h-2.5 w-2.5 shrink-0 rounded-full",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                /* @__PURE__ */ q("span", { className: "text font-medium tracking-wide text-f1-foreground", children: d == null ? void 0 : d.label })
              ]
            },
            l.value
          );
        })
      }
    ) : null;
  }
);
bg.displayName = "ChartLegend";
function Qp(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
const Kee = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let qee = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += Kee[r[e] & 63];
  return t;
};
const Vee = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, Rn = (e) => {
  const t = Object.values(Vee);
  return t[e % t.length];
};
function cf(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const xg = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), wg = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), lf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function $o(e) {
  return Xr(e);
}
function _g(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Yee = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, s = e === t - 1;
  return /* @__PURE__ */ q(vi, { ...i, textAnchor: a ? "start" : s ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, Xee = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  lineType: i = "monotoneX",
  aspect: a,
  marginTop: s = 0
}, u) => {
  const l = Object.keys(t), f = qee(12), d = _g(e), h = Math.max(
    ...d.flatMap(
      (y) => l.map(
        (b) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${y[b]}`) : `${y[b]}`
        )
      )
    )
  ), v = (n == null ? void 0 : n.width) ?? h + 20, g = !(n != null && n.hide), w = !(r != null && r.hide);
  return /* @__PURE__ */ q(Eo, { config: t, ref: u, aspect: a, children: /* @__PURE__ */ Je(
    Wee,
    {
      accessibilityLayer: !0,
      data: d,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: s
      },
      children: [
        /* @__PURE__ */ Je("defs", { children: [
          /* @__PURE__ */ Je(
            "linearGradient",
            {
              id: `${f}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${g ? v : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                /* @__PURE__ */ q("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                /* @__PURE__ */ q("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ q("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ q("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ q("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ q("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
              ]
            }
          ),
          /* @__PURE__ */ q(
            "mask",
            {
              id: `${f}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ q(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${f}-fadeGradient)`
                }
              )
            }
          ),
          l.map((y, b) => /* @__PURE__ */ Je(
            "linearGradient",
            {
              id: `fill${String(y)}-${f}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ q(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[y].color || Rn(b),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ q(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[y].color || Rn(b),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            b
          ))
        ] }),
        /* @__PURE__ */ q(
          vu,
          {
            ...lf(),
            mask: `url(#${f}-transparent-edges)`
          }
        ),
        w && /* @__PURE__ */ q(
          qn,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: r == null ? void 0 : r.tickFormatter,
            ticks: r == null ? void 0 : r.ticks,
            domain: r == null ? void 0 : r.domain,
            interval: 0,
            tick: Yee
          }
        ),
        g && /* @__PURE__ */ q(
          Vn,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n == null ? void 0 : n.tickCount,
            tickFormatter: n == null ? void 0 : n.tickFormatter,
            ticks: n == null ? void 0 : n.ticks,
            domain: n == null ? void 0 : n.domain,
            width: v,
            className: vt((n == null ? void 0 : n.isBlur) && "blur-sm")
          }
        ),
        /* @__PURE__ */ q(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ q(
              To,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        l.map((y, b) => /* @__PURE__ */ q(
          Pi,
          {
            isAnimationActive: !1,
            dataKey: y,
            type: i,
            mask: `url(#${f}-transparent-edges)`,
            fill: `url(#fill${y}-${f})`,
            fillOpacity: t[y].dashed ? 0 : 0.4,
            stroke: t[y].color || Rn(b),
            strokeWidth: 1.5,
            strokeDasharray: t[y].dashed ? "4 4" : void 0
          },
          y
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ q(
          CS,
          {
            className: "flex justify-start",
            iconType: "star",
            content: /* @__PURE__ */ q(
              bg,
              {
                leftShift: g ? Math.round(v) : 0
              }
            )
          }
        )
      ]
    }
  ) });
}, Tne = $o(Xee), Zee = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: s
}, u) => {
  const l = Object.keys(e), f = _g(t), d = Math.max(
    ...f.flatMap(
      (h) => l.map(
        (v) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${h[v]}`) : `${h[v]}`
        )
      )
    )
  );
  return /* @__PURE__ */ q(Eo, { config: e, ref: u, aspect: s, children: /* @__PURE__ */ Je(
    ES,
    {
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      children: [
        /* @__PURE__ */ q(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ q(To, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ q(vu, { ...lf() }),
        /* @__PURE__ */ q(
          Vn,
          {
            ...wg(n),
            tick: !0,
            width: n.width ?? d + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ q(qn, { ...xg(r), hide: r == null ? void 0 : r.hide }),
        l.map((h, v) => /* @__PURE__ */ q(
          Si,
          {
            isAnimationActive: !1,
            dataKey: h,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: e[h].color || Rn(v),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ q(
              kr,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${h}`
            )
          },
          `bar-${h}`
        ))
      ]
    }
  ) });
}, $ne = $o(Zee);
function $n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Cne(e, t) {
  const r = K.createContext(t);
  function n(a) {
    const { children: s, ...u } = a, l = K.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ q(r.Provider, { value: l, children: s });
  }
  function i(a) {
    const s = K.useContext(r);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return n.displayName = e + "Provider", [n, i];
}
function Og(e, t = []) {
  let r = [];
  function n(a, s) {
    const u = K.createContext(s), l = r.length;
    r = [...r, s];
    function f(h) {
      const { scope: v, children: g, ...w } = h, y = (v == null ? void 0 : v[e][l]) || u, b = K.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ q(y.Provider, { value: b, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || u, w = K.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((s) => K.createContext(s));
    return function(u) {
      const l = (u == null ? void 0 : u[e]) || a;
      return K.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: l } }),
        [u, l]
      );
    };
  };
  return i.scopeName = e, [n, Jee(i, ...t)];
}
function Jee(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const s = n.reduce((u, { useScope: l, scopeName: f }) => {
        const h = l(a)[`__scope${f}`];
        return { ...u, ...h };
      }, {});
      return K.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Qee = [
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
], vn = Qee.reduce((e, t) => {
  const r = K.forwardRef((n, i) => {
    const { asChild: a, ...s } = n, u = a ? dv : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ q(u, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ete(e, t) {
  e && cv.flushSync(() => e.dispatchEvent(t));
}
function ca(e) {
  const t = K.useRef(e);
  return K.useEffect(() => {
    t.current = e;
  }), K.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function tte(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ca(e);
  K.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var rte = "DismissableLayer", ev = "dismissableLayer.update", nte = "dismissableLayer.pointerDownOutside", ite = "dismissableLayer.focusOutside", P1, MS = K.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), IS = K.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: u,
      ...l
    } = e, f = K.useContext(MS), [d, h] = K.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = K.useState({}), w = ia(t, (C) => h(C)), y = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), A = y.indexOf(b), O = d ? y.indexOf(d) : -1, S = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= A, x = ste((C) => {
      const M = C.target, F = [...f.branches].some((D) => D.contains(M));
      !_ || F || (i == null || i(C), s == null || s(C), C.defaultPrevented || u == null || u());
    }, v), E = ute((C) => {
      const M = C.target;
      [...f.branches].some((D) => D.contains(M)) || (a == null || a(C), s == null || s(C), C.defaultPrevented || u == null || u());
    }, v);
    return tte((C) => {
      O === f.layers.size - 1 && (n == null || n(C), !C.defaultPrevented && u && (C.preventDefault(), u()));
    }, v), K.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (P1 = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), E1(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = P1);
        };
    }, [d, v, r, f]), K.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), E1());
    }, [d, f]), K.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(ev, C), () => document.removeEventListener(ev, C);
    }, []), /* @__PURE__ */ q(
      vn.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $n(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: $n(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: $n(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
IS.displayName = rte;
var ate = "DismissableLayerBranch", ote = K.forwardRef((e, t) => {
  const r = K.useContext(MS), n = K.useRef(null), i = ia(t, n);
  return K.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ q(vn.div, { ...e, ref: i });
});
ote.displayName = ate;
function ste(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ca(e), n = K.useRef(!1), i = K.useRef(() => {
  });
  return K.useEffect(() => {
    const a = (u) => {
      if (u.target && !n.current) {
        let l = function() {
          kS(
            nte,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ute(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ca(e), n = K.useRef(!1);
  return K.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && kS(ite, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function E1() {
  const e = new CustomEvent(ev);
  document.dispatchEvent(e);
}
function kS(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? ete(i, a) : i.dispatchEvent(a);
}
var gi = globalThis != null && globalThis.document ? K.useLayoutEffect : () => {
}, cte = K.useId || (() => {
}), lte = 0;
function fte(e) {
  const [t, r] = K.useState(cte());
  return gi(() => {
    r((n) => n ?? String(lte++));
  }, [e]), t ? `radix-${t}` : "";
}
const dte = ["top", "right", "bottom", "left"], yi = Math.min, hr = Math.max, Sl = Math.round, Oc = Math.floor, mi = (e) => ({
  x: e,
  y: e
}), hte = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pte = {
  start: "end",
  end: "start"
};
function tv(e, t, r) {
  return hr(e, yi(t, r));
}
function Fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function Co(e) {
  return e.split("-")[1];
}
function Ag(e) {
  return e === "x" ? "y" : "x";
}
function Sg(e) {
  return e === "y" ? "height" : "width";
}
function bi(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function Pg(e) {
  return Ag(bi(e));
}
function vte(e, t, r) {
  r === void 0 && (r = !1);
  const n = Co(e), i = Pg(e), a = Sg(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Pl(s)), [s, Pl(s)];
}
function gte(e) {
  const t = Pl(e);
  return [rv(e), t, rv(t)];
}
function rv(e) {
  return e.replace(/start|end/g, (t) => pte[t]);
}
function yte(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function mte(e, t, r, n) {
  const i = Co(e);
  let a = yte(Wn(e), r === "start", n);
  return i && (a = a.map((s) => s + "-" + i), t && (a = a.concat(a.map(rv)))), a;
}
function Pl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hte[t]);
}
function bte(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jS(e) {
  return typeof e != "number" ? bte(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function El(e) {
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
function T1(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = bi(t), s = Pg(t), u = Sg(s), l = Wn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[u] / 2 - i[u] / 2;
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
  switch (Co(t)) {
    case "start":
      g[s] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[s] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const xte = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: s
  } = r, u = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = T1(f, n, l), v = n, g = {}, w = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: b,
      fn: A
    } = u[y], {
      x: O,
      y: S,
      data: _,
      reset: x
    } = await A({
      x: d,
      y: h,
      initialPlacement: n,
      placement: v,
      strategy: i,
      middlewareData: g,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, h = S ?? h, g = {
      ...g,
      [b]: {
        ...g[b],
        ..._
      }
    }, x && w <= 50 && (w++, typeof x == "object" && (x.placement && (v = x.placement), x.rects && (f = x.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: d,
      y: h
    } = T1(f, v, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: g
  };
};
async function tu(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: s,
    elements: u,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Fn(t, e), w = jS(g), b = u[v ? h === "floating" ? "reference" : "floating" : h], A = El(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = El(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: O,
    offsetParent: S,
    strategy: l
  }) : O);
  return {
    top: (A.top - x.top + w.top) / _.y,
    bottom: (x.bottom - A.bottom + w.bottom) / _.y,
    left: (A.left - x.left + w.left) / _.x,
    right: (x.right - A.right + w.right) / _.x
  };
}
const wte = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: s,
      elements: u,
      middlewareData: l
    } = t, {
      element: f,
      padding: d = 0
    } = Fn(e, t) || {};
    if (f == null)
      return {};
    const h = jS(d), v = {
      x: r,
      y: n
    }, g = Pg(i), w = Sg(g), y = await s.getDimensions(f), b = g === "y", A = b ? "top" : "left", O = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", _ = a.reference[w] + a.reference[g] - v[g] - a.floating[w], x = v[g] - a.reference[g], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let C = E ? E[S] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(E))) && (C = u.floating[S] || a.floating[w]);
    const M = _ / 2 - x / 2, F = C / 2 - y[w] / 2 - 1, D = yi(h[A], F), B = yi(h[O], F), N = D, U = C - y[w] - B, z = C / 2 - y[w] / 2 + M, J = tv(N, z, U), H = !l.arrow && Co(i) != null && z !== J && a.reference[w] / 2 - (z < N ? D : B) - y[w] / 2 < 0, Z = H ? z < N ? z - N : z - U : 0;
    return {
      [g]: v[g] + Z,
      data: {
        [g]: J,
        centerOffset: z - J - Z,
        ...H && {
          alignmentOffset: Z
        }
      },
      reset: H
    };
  }
}), _te = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: s,
        initialPlacement: u,
        platform: l,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...b
      } = Fn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const A = Wn(i), O = bi(u), S = Wn(u) === u, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), x = v || (S || !y ? [Pl(u)] : gte(u)), E = w !== "none";
      !v && E && x.push(...mte(u, y, w, _));
      const C = [u, ...x], M = await tu(t, b), F = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && F.push(M[A]), h) {
        const z = vte(i, s, _);
        F.push(M[z[0]], M[z[1]]);
      }
      if (D = [...D, {
        placement: i,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var B, N;
        const z = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, J = C[z];
        if (J)
          return {
            data: {
              index: z,
              overflows: D
            },
            reset: {
              placement: J
            }
          };
        let H = (N = D.filter((Z) => Z.overflows[0] <= 0).sort((Z, V) => Z.overflows[1] - V.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var U;
              const Z = (U = D.filter((V) => {
                if (E) {
                  const se = bi(V.placement);
                  return se === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  se === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((se) => se > 0).reduce((se, G) => se + G, 0)]).sort((V, se) => V[1] - se[1])[0]) == null ? void 0 : U[0];
              Z && (H = Z);
              break;
            }
            case "initialPlacement":
              H = u;
              break;
          }
        if (i !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function $1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function C1(e) {
  return dte.some((t) => e[t] >= 0);
}
const Ote = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...i
      } = Fn(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await tu(t, {
            ...i,
            elementContext: "reference"
          }), s = $1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: C1(s)
            }
          };
        }
        case "escaped": {
          const a = await tu(t, {
            ...i,
            altBoundary: !0
          }), s = $1(a, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: C1(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ate(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), s = Wn(r), u = Co(r), l = bi(r) === "y", f = ["left", "top"].includes(s) ? -1 : 1, d = a && l ? -1 : 1, h = Fn(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: w
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return u && typeof w == "number" && (g = u === "end" ? w * -1 : w), l ? {
    x: g * d,
    y: v * f
  } : {
    x: v * f,
    y: g * d
  };
}
const Ste = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: s,
        middlewareData: u
      } = t, l = await Ate(t, e);
      return s === ((r = u.offset) == null ? void 0 : r.placement) && (n = u.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Pte = function(e) {
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
        crossAxis: s = !1,
        limiter: u = {
          fn: (b) => {
            let {
              x: A,
              y: O
            } = b;
            return {
              x: A,
              y: O
            };
          }
        },
        ...l
      } = Fn(e, t), f = {
        x: r,
        y: n
      }, d = await tu(t, l), h = bi(Wn(i)), v = Ag(h);
      let g = f[v], w = f[h];
      if (a) {
        const b = v === "y" ? "top" : "left", A = v === "y" ? "bottom" : "right", O = g + d[b], S = g - d[A];
        g = tv(O, g, S);
      }
      if (s) {
        const b = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", O = w + d[b], S = w - d[A];
        w = tv(O, w, S);
      }
      const y = u.fn({
        ...t,
        [v]: g,
        [h]: w
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [v]: a,
            [h]: s
          }
        }
      };
    }
  };
}, Ete = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: i,
        rects: a,
        middlewareData: s
      } = t, {
        offset: u = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Fn(e, t), d = {
        x: r,
        y: n
      }, h = bi(i), v = Ag(h);
      let g = d[v], w = d[h];
      const y = Fn(u, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = v === "y" ? "height" : "width", _ = a.reference[v] - a.floating[S] + b.mainAxis, x = a.reference[v] + a.reference[S] - b.mainAxis;
        g < _ ? g = _ : g > x && (g = x);
      }
      if (f) {
        var A, O;
        const S = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Wn(i)), x = a.reference[h] - a.floating[S] + (_ && ((A = s.offset) == null ? void 0 : A[h]) || 0) + (_ ? 0 : b.crossAxis), E = a.reference[h] + a.reference[S] + (_ ? 0 : ((O = s.offset) == null ? void 0 : O[h]) || 0) - (_ ? b.crossAxis : 0);
        w < x ? w = x : w > E && (w = E);
      }
      return {
        [v]: g,
        [h]: w
      };
    }
  };
}, Tte = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        rects: a,
        platform: s,
        elements: u
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Fn(e, t), d = await tu(t, f), h = Wn(i), v = Co(i), g = bi(i) === "y", {
        width: w,
        height: y
      } = a.floating;
      let b, A;
      h === "top" || h === "bottom" ? (b = h, A = v === (await (s.isRTL == null ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (A = h, b = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, S = w - d.left - d.right, _ = yi(y - d[b], O), x = yi(w - d[A], S), E = !t.middlewareData.shift;
      let C = _, M = x;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (M = S), (n = t.middlewareData.shift) != null && n.enabled.y && (C = O), E && !v) {
        const D = hr(d.left, 0), B = hr(d.right, 0), N = hr(d.top, 0), U = hr(d.bottom, 0);
        g ? M = w - 2 * (D !== 0 || B !== 0 ? D + B : hr(d.left, d.right)) : C = y - 2 * (N !== 0 || U !== 0 ? N + U : hr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: C
      });
      const F = await s.getDimensions(u.floating);
      return w !== F.width || y !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ff() {
  return typeof window < "u";
}
function Mo(e) {
  return RS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gn(e) {
  var t;
  return (t = (RS(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function RS(e) {
  return ff() ? e instanceof Node || e instanceof mr(e).Node : !1;
}
function Jr(e) {
  return ff() ? e instanceof Element || e instanceof mr(e).Element : !1;
}
function dn(e) {
  return ff() ? e instanceof HTMLElement || e instanceof mr(e).HTMLElement : !1;
}
function M1(e) {
  return !ff() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mr(e).ShadowRoot;
}
function mu(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Qr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function $te(e) {
  return ["table", "td", "th"].includes(Mo(e));
}
function df(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Eg(e) {
  const t = Tg(), r = Jr(e) ? Qr(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Cte(e) {
  let t = xi(e);
  for (; dn(t) && !co(t); ) {
    if (Eg(t))
      return t;
    if (df(t))
      return null;
    t = xi(t);
  }
  return null;
}
function Tg() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function co(e) {
  return ["html", "body", "#document"].includes(Mo(e));
}
function Qr(e) {
  return mr(e).getComputedStyle(e);
}
function hf(e) {
  return Jr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xi(e) {
  if (Mo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    M1(e) && e.host || // Fallback.
    gn(e)
  );
  return M1(t) ? t.host : t;
}
function NS(e) {
  const t = xi(e);
  return co(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(t) && mu(t) ? t : NS(t);
}
function ru(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = NS(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = mr(i);
  if (a) {
    const u = nv(s);
    return t.concat(s, s.visualViewport || [], mu(i) ? i : [], u && r ? ru(u) : []);
  }
  return t.concat(i, ru(i, [], r));
}
function nv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function DS(e) {
  const t = Qr(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = dn(e), a = i ? e.offsetWidth : r, s = i ? e.offsetHeight : n, u = Sl(r) !== a || Sl(n) !== s;
  return u && (r = a, n = s), {
    width: r,
    height: n,
    $: u
  };
}
function $g(e) {
  return Jr(e) ? e : e.contextElement;
}
function Ba(e) {
  const t = $g(e);
  if (!dn(t))
    return mi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = DS(t);
  let s = (a ? Sl(r.width) : r.width) / n, u = (a ? Sl(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: s,
    y: u
  };
}
const Mte = /* @__PURE__ */ mi(0);
function LS(e) {
  const t = mr(e);
  return !Tg() || !t.visualViewport ? Mte : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ite(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mr(e) ? !1 : t;
}
function ra(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = $g(e);
  let s = mi(1);
  t && (n ? Jr(n) && (s = Ba(n)) : s = Ba(e));
  const u = Ite(a, r, n) ? LS(a) : mi(0);
  let l = (i.left + u.x) / s.x, f = (i.top + u.y) / s.y, d = i.width / s.x, h = i.height / s.y;
  if (a) {
    const v = mr(a), g = n && Jr(n) ? mr(n) : n;
    let w = v, y = nv(w);
    for (; y && n && g !== w; ) {
      const b = Ba(y), A = y.getBoundingClientRect(), O = Qr(y), S = A.left + (y.clientLeft + parseFloat(O.paddingLeft)) * b.x, _ = A.top + (y.clientTop + parseFloat(O.paddingTop)) * b.y;
      l *= b.x, f *= b.y, d *= b.x, h *= b.y, l += S, f += _, w = mr(y), y = nv(w);
    }
  }
  return El({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function kte(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", s = gn(n), u = t ? df(t.floating) : !1;
  if (n === s || u && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = mi(1);
  const d = mi(0), h = dn(n);
  if ((h || !h && !a) && ((Mo(n) !== "body" || mu(s)) && (l = hf(n)), dn(n))) {
    const v = ra(n);
    f = Ba(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y
  };
}
function jte(e) {
  return Array.from(e.getClientRects());
}
function iv(e, t) {
  const r = hf(e).scrollLeft;
  return t ? t.left + r : ra(gn(e)).left + r;
}
function Rte(e) {
  const t = gn(e), r = hf(e), n = e.ownerDocument.body, i = hr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = hr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + iv(e);
  const u = -r.scrollTop;
  return Qr(n).direction === "rtl" && (s += hr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: u
  };
}
function Nte(e, t) {
  const r = mr(e), n = gn(e), i = r.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, u = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    const f = Tg();
    (!f || f && t === "fixed") && (u = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: u,
    y: l
  };
}
function Dte(e, t) {
  const r = ra(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = dn(e) ? Ba(e) : mi(1), s = e.clientWidth * a.x, u = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: s,
    height: u,
    x: l,
    y: f
  };
}
function I1(e, t, r) {
  let n;
  if (t === "viewport")
    n = Nte(e, r);
  else if (t === "document")
    n = Rte(gn(e));
  else if (Jr(t))
    n = Dte(t, r);
  else {
    const i = LS(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return El(n);
}
function BS(e, t) {
  const r = xi(e);
  return r === t || !Jr(r) || co(r) ? !1 : Qr(r).position === "fixed" || BS(r, t);
}
function Lte(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ru(e, [], !1).filter((u) => Jr(u) && Mo(u) !== "body"), i = null;
  const a = Qr(e).position === "fixed";
  let s = a ? xi(e) : e;
  for (; Jr(s) && !co(s); ) {
    const u = Qr(s), l = Eg(s);
    !l && u.position === "fixed" && (i = null), (a ? !l && !i : !l && u.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || mu(s) && !l && BS(e, s)) ? n = n.filter((d) => d !== s) : i = u, s = xi(s);
  }
  return t.set(e, n), n;
}
function Bte(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const s = [...r === "clippingAncestors" ? df(t) ? [] : Lte(t, this._c) : [].concat(r), n], u = s[0], l = s.reduce((f, d) => {
    const h = I1(t, d, i);
    return f.top = hr(h.top, f.top), f.right = yi(h.right, f.right), f.bottom = yi(h.bottom, f.bottom), f.left = hr(h.left, f.left), f;
  }, I1(t, u, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Fte(e) {
  const {
    width: t,
    height: r
  } = DS(e);
  return {
    width: t,
    height: r
  };
}
function Wte(e, t, r) {
  const n = dn(t), i = gn(t), a = r === "fixed", s = ra(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = mi(0);
  if (n || !n && !a)
    if ((Mo(t) !== "body" || mu(i)) && (u = hf(t)), n) {
      const g = ra(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else i && (l.x = iv(i));
  let f = 0, d = 0;
  if (i && !n && !a) {
    const g = i.getBoundingClientRect();
    d = g.top + u.scrollTop, f = g.left + u.scrollLeft - // RTL <body> scrollbar.
    iv(i, g);
  }
  const h = s.left + u.scrollLeft - l.x - f, v = s.top + u.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: s.width,
    height: s.height
  };
}
function _h(e) {
  return Qr(e).position === "static";
}
function k1(e, t) {
  if (!dn(e) || Qr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return gn(e) === r && (r = r.ownerDocument.body), r;
}
function FS(e, t) {
  const r = mr(e);
  if (df(e))
    return r;
  if (!dn(e)) {
    let i = xi(e);
    for (; i && !co(i); ) {
      if (Jr(i) && !_h(i))
        return i;
      i = xi(i);
    }
    return r;
  }
  let n = k1(e, t);
  for (; n && $te(n) && _h(n); )
    n = k1(n, t);
  return n && co(n) && _h(n) && !Eg(n) ? r : n || Cte(e) || r;
}
const zte = async function(e) {
  const t = this.getOffsetParent || FS, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Wte(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Ute(e) {
  return Qr(e).direction === "rtl";
}
const Hte = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kte,
  getDocumentElement: gn,
  getClippingRect: Bte,
  getOffsetParent: FS,
  getElementRects: zte,
  getClientRects: jte,
  getDimensions: Fte,
  getScale: Ba,
  isElement: Jr,
  isRTL: Ute
};
function Gte(e, t) {
  let r = null, n;
  const i = gn(e);
  function a() {
    var u;
    clearTimeout(n), (u = r) == null || u.disconnect(), r = null;
  }
  function s(u, l) {
    u === void 0 && (u = !1), l === void 0 && (l = 1), a();
    const {
      left: f,
      top: d,
      width: h,
      height: v
    } = e.getBoundingClientRect();
    if (u || t(), !h || !v)
      return;
    const g = Oc(d), w = Oc(i.clientWidth - (f + h)), y = Oc(i.clientHeight - (d + v)), b = Oc(f), O = {
      rootMargin: -g + "px " + -w + "px " + -y + "px " + -b + "px",
      threshold: hr(0, yi(1, l)) || 1
    };
    let S = !0;
    function _(x) {
      const E = x[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return s();
        E ? s(!1, E) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
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
  return s(!0), a;
}
function Kte(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = $g(e), d = i || a ? [...f ? ru(f) : [], ...ru(t)] : [];
  d.forEach((A) => {
    i && A.addEventListener("scroll", r, {
      passive: !0
    }), a && A.addEventListener("resize", r);
  });
  const h = f && u ? Gte(f, r) : null;
  let v = -1, g = null;
  s && (g = new ResizeObserver((A) => {
    let [O] = A;
    O && O.target === f && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), r();
  }), f && !l && g.observe(f), g.observe(t));
  let w, y = l ? ra(e) : null;
  l && b();
  function b() {
    const A = ra(e);
    y && (A.x !== y.x || A.y !== y.y || A.width !== y.width || A.height !== y.height) && r(), y = A, w = requestAnimationFrame(b);
  }
  return r(), () => {
    var A;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (A = g) == null || A.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const qte = Ste, Vte = Pte, Yte = _te, Xte = Tte, Zte = Ote, j1 = wte, Jte = Ete, Qte = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Hte,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return xte(e, t, {
    ...i,
    platform: a
  });
};
var Pc = typeof document < "u" ? uv : na;
function Tl(e, t) {
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
        if (!Tl(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Tl(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function WS(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function R1(e, t) {
  const r = WS(e);
  return Math.round(t * r) / r;
}
function Oh(e) {
  const t = K.useRef(e);
  return Pc(() => {
    t.current = e;
  }), t;
}
function ere(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: u = !0,
    whileElementsMounted: l,
    open: f
  } = e, [d, h] = K.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, g] = K.useState(n);
  Tl(v, n) || g(n);
  const [w, y] = K.useState(null), [b, A] = K.useState(null), O = K.useCallback((V) => {
    V !== E.current && (E.current = V, y(V));
  }, []), S = K.useCallback((V) => {
    V !== C.current && (C.current = V, A(V));
  }, []), _ = a || w, x = s || b, E = K.useRef(null), C = K.useRef(null), M = K.useRef(d), F = l != null, D = Oh(l), B = Oh(i), N = Oh(f), U = K.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const V = {
      placement: t,
      strategy: r,
      middleware: v
    };
    B.current && (V.platform = B.current), Qte(E.current, C.current, V).then((se) => {
      const G = {
        ...se,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      z.current && !Tl(M.current, G) && (M.current = G, cv.flushSync(() => {
        h(G);
      }));
    });
  }, [v, t, r, B, N]);
  Pc(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, h((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [f]);
  const z = K.useRef(!1);
  Pc(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Pc(() => {
    if (_ && (E.current = _), x && (C.current = x), _ && x) {
      if (D.current)
        return D.current(_, x, U);
      U();
    }
  }, [_, x, U, D, F]);
  const J = K.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: O,
    setFloating: S
  }), [O, S]), H = K.useMemo(() => ({
    reference: _,
    floating: x
  }), [_, x]), Z = K.useMemo(() => {
    const V = {
      position: r,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return V;
    const se = R1(H.floating, d.x), G = R1(H.floating, d.y);
    return u ? {
      ...V,
      transform: "translate(" + se + "px, " + G + "px)",
      ...WS(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: se,
      top: G
    };
  }, [r, u, H.floating, d.x, d.y]);
  return K.useMemo(() => ({
    ...d,
    update: U,
    refs: J,
    elements: H,
    floatingStyles: Z
  }), [d, U, J, H, Z]);
}
const tre = (e) => {
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
      return n && t(n) ? n.current != null ? j1({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? j1({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, rre = (e, t) => ({
  ...qte(e),
  options: [e, t]
}), nre = (e, t) => ({
  ...Vte(e),
  options: [e, t]
}), ire = (e, t) => ({
  ...Jte(e),
  options: [e, t]
}), are = (e, t) => ({
  ...Yte(e),
  options: [e, t]
}), ore = (e, t) => ({
  ...Xte(e),
  options: [e, t]
}), sre = (e, t) => ({
  ...Zte(e),
  options: [e, t]
}), ure = (e, t) => ({
  ...tre(e),
  options: [e, t]
});
var cre = "Arrow", zS = K.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ q(
    vn.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ q("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
zS.displayName = cre;
var lre = zS;
function fre(e) {
  const [t, r] = K.useState(void 0);
  return gi(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let s, u;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          s = f.inlineSize, u = f.blockSize;
        } else
          s = e.offsetWidth, u = e.offsetHeight;
        r({ width: s, height: u });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Cg = "Popper", [US, HS] = Og(Cg), [dre, GS] = US(Cg), KS = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = K.useState(null);
  return /* @__PURE__ */ q(dre, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
KS.displayName = Cg;
var qS = "PopperAnchor", VS = K.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = GS(qS, r), s = K.useRef(null), u = ia(t, s);
    return K.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || s.current);
    }), n ? null : /* @__PURE__ */ q(vn.div, { ...i, ref: u });
  }
);
VS.displayName = qS;
var Mg = "PopperContent", [hre, pre] = US(Mg), YS = K.forwardRef(
  (e, t) => {
    var ye, we, ne, ue, pe, j;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: u = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...y
    } = e, b = GS(Mg, r), [A, O] = K.useState(null), S = ia(t, (Ee) => O(Ee)), [_, x] = K.useState(null), E = fre(_), C = (E == null ? void 0 : E.width) ?? 0, M = (E == null ? void 0 : E.height) ?? 0, F = n + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(f) ? f : [f], N = B.length > 0, U = {
      padding: D,
      boundary: B.filter(gre),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: z, floatingStyles: J, placement: H, isPositioned: Z, middlewareData: V } = ere({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...Ee) => Kte(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        rre({ mainAxis: i + M, alignmentAxis: s }),
        l && nre({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? ire() : void 0,
          ...U
        }),
        l && are({ ...U }),
        ore({
          ...U,
          apply: ({ elements: Ee, rects: be, availableWidth: We, availableHeight: lt }) => {
            const { width: at, height: Vt } = be.reference, Lr = Ee.floating.style;
            Lr.setProperty("--radix-popper-available-width", `${We}px`), Lr.setProperty("--radix-popper-available-height", `${lt}px`), Lr.setProperty("--radix-popper-anchor-width", `${at}px`), Lr.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        _ && ure({ element: _, padding: u }),
        yre({ arrowWidth: C, arrowHeight: M }),
        v && sre({ strategy: "referenceHidden", ...U })
      ]
    }), [se, G] = JS(H), X = ca(w);
    gi(() => {
      Z && (X == null || X());
    }, [Z, X]);
    const ae = (ye = V.arrow) == null ? void 0 : ye.x, ce = (we = V.arrow) == null ? void 0 : we.y, he = ((ne = V.arrow) == null ? void 0 : ne.centerOffset) !== 0, [ge, xe] = K.useState();
    return gi(() => {
      A && xe(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ q(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: Z ? J.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            (ue = V.transformOrigin) == null ? void 0 : ue.x,
            (pe = V.transformOrigin) == null ? void 0 : pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = V.hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ q(
          hre,
          {
            scope: r,
            placedSide: se,
            onArrowChange: x,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: he,
            children: /* @__PURE__ */ q(
              vn.div,
              {
                "data-side": se,
                "data-align": G,
                ...y,
                ref: S,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
YS.displayName = Mg;
var XS = "PopperArrow", vre = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ZS = K.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = pre(XS, n), s = vre[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ q(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
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
        children: /* @__PURE__ */ q(
          lre,
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
ZS.displayName = XS;
function gre(e) {
  return e !== null;
}
var yre = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, A, O;
    const { placement: r, rects: n, middlewareData: i } = t, s = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0, u = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [f, d] = JS(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((A = i.arrow) == null ? void 0 : A.x) ?? 0) + u / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let w = "", y = "";
    return f === "bottom" ? (w = s ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (w = s ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (w = `${-l}px`, y = s ? h : `${g}px`) : f === "left" && (w = `${n.floating.width + l}px`, y = s ? h : `${g}px`), { data: { x: w, y } };
  }
});
function JS(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var mre = KS, bre = VS, xre = YS, wre = ZS;
function _re(e, t) {
  return K.useReducer((r, n) => t[r][n] ?? r, e);
}
var QS = (e) => {
  const { present: t, children: r } = e, n = Ore(t), i = typeof r == "function" ? r({ present: n.isPresent }) : K.Children.only(r), a = ia(n.ref, Are(i));
  return typeof r == "function" || n.isPresent ? K.cloneElement(i, { ref: a }) : null;
};
QS.displayName = "Presence";
function Ore(e) {
  const [t, r] = K.useState(), n = K.useRef({}), i = K.useRef(e), a = K.useRef("none"), s = e ? "mounted" : "unmounted", [u, l] = _re(s, {
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
  return K.useEffect(() => {
    const f = Ac(n.current);
    a.current = u === "mounted" ? f : "none";
  }, [u]), gi(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, g = Ac(f);
      e ? l("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), gi(() => {
    if (t) {
      const f = (h) => {
        const g = Ac(n.current).includes(h.animationName);
        h.target === t && g && cv.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Ac(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: K.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Ac(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Are(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Sre({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = Pre({ defaultProp: t, onChange: r }), a = e !== void 0, s = a ? e : n, u = ca(r), l = K.useCallback(
    (f) => {
      if (a) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && u(h);
      } else
        i(f);
    },
    [a, e, i, u]
  );
  return [s, l];
}
function Pre({
  defaultProp: e,
  onChange: t
}) {
  const r = K.useState(e), [n] = r, i = K.useRef(n), a = ca(t);
  return K.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var Ere = "VisuallyHidden", eP = K.forwardRef(
  (e, t) => /* @__PURE__ */ q(
    vn.span,
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
eP.displayName = Ere;
var Tre = eP, [pf, Mne] = Og("Tooltip", [
  HS
]), vf = HS(), tP = "TooltipProvider", $re = 700, av = "tooltip.open", [Cre, Ig] = pf(tP), rP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = $re,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [s, u] = K.useState(!0), l = K.useRef(!1), f = K.useRef(0);
  return K.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ q(
    Cre,
    {
      scope: t,
      isOpenDelayed: s,
      delayDuration: r,
      onOpen: K.useCallback(() => {
        window.clearTimeout(f.current), u(!1);
      }, []),
      onClose: K.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => u(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: K.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
rP.displayName = tP;
var gf = "Tooltip", [Mre, yf] = pf(gf), nP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: u
  } = e, l = Ig(gf, e.__scopeTooltip), f = vf(t), [d, h] = K.useState(null), v = fte(), g = K.useRef(0), w = s ?? l.disableHoverableContent, y = u ?? l.delayDuration, b = K.useRef(!1), [A = !1, O] = Sre({
    prop: n,
    defaultProp: i,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(av))) : l.onClose(), a == null || a(C);
    }
  }), S = K.useMemo(() => A ? b.current ? "delayed-open" : "instant-open" : "closed", [A]), _ = K.useCallback(() => {
    window.clearTimeout(g.current), b.current = !1, O(!0);
  }, [O]), x = K.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = K.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return K.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ q(mre, { ...f, children: /* @__PURE__ */ q(
    Mre,
    {
      scope: t,
      contentId: v,
      open: A,
      stateAttribute: S,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: K.useCallback(() => {
        l.isOpenDelayed ? E() : _();
      }, [l.isOpenDelayed, E, _]),
      onTriggerLeave: K.useCallback(() => {
        w ? x() : window.clearTimeout(g.current);
      }, [x, w]),
      onOpen: _,
      onClose: x,
      disableHoverableContent: w,
      children: r
    }
  ) });
};
nP.displayName = gf;
var ov = "TooltipTrigger", iP = K.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = yf(ov, r), a = Ig(ov, r), s = vf(r), u = K.useRef(null), l = ia(t, u, i.onTriggerChange), f = K.useRef(!1), d = K.useRef(!1), h = K.useCallback(() => f.current = !1, []);
    return K.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ q(bre, { asChild: !0, ...s, children: /* @__PURE__ */ q(
      vn.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: $n(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: $n(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: $n(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: $n(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: $n(e.onBlur, i.onClose),
        onClick: $n(e.onClick, i.onClose)
      }
    ) });
  }
);
iP.displayName = ov;
var Ire = "TooltipPortal", [Ine, kre] = pf(Ire, {
  forceMount: void 0
}), lo = "TooltipContent", aP = K.forwardRef(
  (e, t) => {
    const r = kre(lo, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, s = yf(lo, e.__scopeTooltip);
    return /* @__PURE__ */ q(QS, { present: n || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ q(oP, { side: i, ...a, ref: t }) : /* @__PURE__ */ q(jre, { side: i, ...a, ref: t }) });
  }
), jre = K.forwardRef((e, t) => {
  const r = yf(lo, e.__scopeTooltip), n = Ig(lo, e.__scopeTooltip), i = K.useRef(null), a = ia(t, i), [s, u] = K.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = K.useCallback(() => {
    u(null), h(!1);
  }, [h]), g = K.useCallback(
    (w, y) => {
      const b = w.currentTarget, A = { x: w.clientX, y: w.clientY }, O = Lre(A, b.getBoundingClientRect()), S = Bre(A, O), _ = Fre(y.getBoundingClientRect()), x = zre([...S, ..._]);
      u(x), h(!0);
    },
    [h]
  );
  return K.useEffect(() => () => v(), [v]), K.useEffect(() => {
    if (l && d) {
      const w = (b) => g(b, d), y = (b) => g(b, l);
      return l.addEventListener("pointerleave", w), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", w), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), K.useEffect(() => {
    if (s) {
      const w = (y) => {
        const b = y.target, A = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(b)) || (d == null ? void 0 : d.contains(b)), S = !Wre(A, s);
        O ? v() : S && (v(), f());
      };
      return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w);
    }
  }, [l, d, s, f, v]), /* @__PURE__ */ q(oP, { ...e, ref: a });
}), [Rre, Nre] = pf(gf, { isInside: !1 }), oP = K.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...u
    } = e, l = yf(lo, r), f = vf(r), { onClose: d } = l;
    return K.useEffect(() => (document.addEventListener(av, d), () => document.removeEventListener(av, d)), [d]), K.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ q(
      IS,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ Je(
          xre,
          {
            "data-state": l.stateAttribute,
            ...f,
            ...u,
            ref: t,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ q(Z1, { children: n }),
              /* @__PURE__ */ q(Rre, { scope: r, isInside: !0, children: /* @__PURE__ */ q(Tre, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
aP.displayName = lo;
var sP = "TooltipArrow", Dre = K.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = vf(r);
    return Nre(
      sP,
      r
    ).isInside ? null : /* @__PURE__ */ q(wre, { ...i, ...n, ref: t });
  }
);
Dre.displayName = sP;
function Lre(e, t) {
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
function Bre(e, t, r = 5) {
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
function Fre(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function Wre(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const u = t[a].x, l = t[a].y, f = t[s].x, d = t[s].y;
    l > n != d > n && r < (f - u) * (n - l) / (d - l) + u && (i = !i);
  }
  return i;
}
function zre(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Ure(t);
}
function Ure(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (i.y - s.y) >= (a.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const i = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], s = r[r.length - 2];
      if ((a.x - s.x) * (i.y - s.y) >= (a.y - s.y) * (i.x - s.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Hre = rP, Gre = nP, Kre = iP, uP = aP;
const qre = Hre, Vre = Gre, Yre = Kre, cP = K.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ q(
  uP,
  {
    ref: n,
    sideOffset: t,
    className: vt(
      "z-50 overflow-hidden rounded bg-f1-background-bold px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
cP.displayName = uP.displayName;
const Xre = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ Je(qre, { children: [
    /* @__PURE__ */ q("div", { className: "w-full", ref: r, children: /* @__PURE__ */ q("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const s = i.value / n * 100, u = i.color || Rn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ Je(Vre, { children: [
        /* @__PURE__ */ q(
          Yre,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${s}%` },
            title: i.name,
            asChild: !0,
            children: /* @__PURE__ */ q(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: u },
                role: "img",
                title: i.name,
                tabIndex: 0
              }
            )
          }
        ),
        /* @__PURE__ */ Je(cP, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ q(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: u }
            }
          ),
          /* @__PURE__ */ q("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ Je("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
            i.value,
            " (",
            l(i.value),
            "%)"
          ] })
        ] })
      ] }, i.name);
    }) }) }),
    t && /* @__PURE__ */ q(
      "div",
      {
        className: "mt-1 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((i, a) => {
          const s = i.color || Rn(a);
          return /* @__PURE__ */ Je(
            "div",
            {
              className: "flex items-center gap-1",
              role: "listitem",
              children: [
                /* @__PURE__ */ q(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 translate-y-px rounded-full",
                    style: { backgroundColor: s }
                  }
                ),
                /* @__PURE__ */ q("span", { className: "text-sm tracking-wide text-f1-foreground-secondary", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, kne = $o(Xre), Zre = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, s) => {
  const u = Object.keys(t), l = _g(e), f = Math.max(
    ...l.flatMap(
      (d) => u.map(
        (h) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ q(Eo, { config: t, ref: s, aspect: a, children: /* @__PURE__ */ Je(
    Bee,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ q(vu, { ...lf() }),
        !(r != null && r.hide) && /* @__PURE__ */ q(qn, { ...xg(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ q(
          Vn,
          {
            ...wg(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ q(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ q(To, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        u.map((d, h) => /* @__PURE__ */ q(
          gu,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color || Rn(h),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, jne = $o(Zre), Jre = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const s = e.map((u, l) => {
    var f;
    return {
      ...u,
      fill: ((f = t[u.label]) == null ? void 0 : f.color) || Rn(l)
    };
  });
  return /* @__PURE__ */ q(
    Eo,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Je(Fee, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        /* @__PURE__ */ q(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ q(To, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ q(
          Kn,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: s,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: /* @__PURE__ */ q(
              Et,
              {
                content: ({ viewBox: u }) => {
                  if (u && "cx" in u && "cy" in u)
                    return /* @__PURE__ */ Je(
                      "text",
                      {
                        x: u.cx,
                        y: u.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          /* @__PURE__ */ q(
                            "tspan",
                            {
                              x: u.cx,
                              y: (u.cy || 0) + 8,
                              className: "fill-f1-foreground text-2xl font-semibold",
                              children: r != null && r.number ? i ? i(String(r.number)) : r.number : null
                            }
                          ),
                          /* @__PURE__ */ q(
                            "tspan",
                            {
                              x: u.cx,
                              y: (u.cy || 0) - 16,
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
        /* @__PURE__ */ q(
          CS,
          {
            content: /* @__PURE__ */ q(bg, {}),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, Rne = $o(Jre);
var $l = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$l.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", u = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, w = 1, y = 2, b = 1, A = 2, O = 4, S = 8, _ = 16, x = 32, E = 64, C = 128, M = 256, F = 512, D = 30, B = "...", N = 800, U = 16, z = 1, J = 2, H = 3, Z = 1 / 0, V = 9007199254740991, se = 17976931348623157e292, G = NaN, X = 4294967295, ae = X - 1, ce = X >>> 1, he = [
      ["ary", C],
      ["bind", b],
      ["bindKey", A],
      ["curry", S],
      ["curryRight", _],
      ["flip", F],
      ["partial", x],
      ["partialRight", E],
      ["rearg", M]
    ], ge = "[object Arguments]", xe = "[object Array]", ye = "[object AsyncFunction]", we = "[object Boolean]", ne = "[object Date]", ue = "[object DOMException]", pe = "[object Error]", j = "[object Function]", Ee = "[object GeneratorFunction]", be = "[object Map]", We = "[object Number]", lt = "[object Null]", at = "[object Object]", Vt = "[object Promise]", Lr = "[object Proxy]", nr = "[object RegExp]", yt = "[object Set]", yn = "[object String]", Yn = "[object Symbol]", Io = "[object Undefined]", Xn = "[object WeakMap]", bu = "[object WeakSet]", ko = "[object ArrayBuffer]", la = "[object DataView]", mf = "[object Float32Array]", bf = "[object Float64Array]", xf = "[object Int8Array]", wf = "[object Int16Array]", _f = "[object Int32Array]", Of = "[object Uint8Array]", Af = "[object Uint8ClampedArray]", Sf = "[object Uint16Array]", Pf = "[object Uint32Array]", EP = /\b__p \+= '';/g, TP = /\b(__p \+=) '' \+/g, $P = /(__e\(.*?\)|\b__t\)) \+\n'';/g, jg = /&(?:amp|lt|gt|quot|#39);/g, Rg = /[&<>"']/g, CP = RegExp(jg.source), MP = RegExp(Rg.source), IP = /<%-([\s\S]+?)%>/g, kP = /<%([\s\S]+?)%>/g, Ng = /<%=([\s\S]+?)%>/g, jP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, RP = /^\w*$/, NP = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ef = /[\\^$.*+?()[\]{}|]/g, DP = RegExp(Ef.source), Tf = /^\s+/, LP = /\s/, BP = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, FP = /\{\n\/\* \[wrapped with (.+)\] \*/, WP = /,? & /, zP = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, UP = /[()=,{}\[\]\/\s]/, HP = /\\(\\)?/g, GP = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Dg = /\w*$/, KP = /^[-+]0x[0-9a-f]+$/i, qP = /^0b[01]+$/i, VP = /^\[object .+?Constructor\]$/, YP = /^0o[0-7]+$/i, XP = /^(?:0|[1-9]\d*)$/, ZP = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xu = /($^)/, JP = /['\n\r\u2028\u2029\\]/g, wu = "\\ud800-\\udfff", QP = "\\u0300-\\u036f", eE = "\\ufe20-\\ufe2f", tE = "\\u20d0-\\u20ff", Lg = QP + eE + tE, Bg = "\\u2700-\\u27bf", Fg = "a-z\\xdf-\\xf6\\xf8-\\xff", rE = "\\xac\\xb1\\xd7\\xf7", nE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", iE = "\\u2000-\\u206f", aE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wg = "A-Z\\xc0-\\xd6\\xd8-\\xde", zg = "\\ufe0e\\ufe0f", Ug = rE + nE + iE + aE, $f = "['’]", oE = "[" + wu + "]", Hg = "[" + Ug + "]", _u = "[" + Lg + "]", Gg = "\\d+", sE = "[" + Bg + "]", Kg = "[" + Fg + "]", qg = "[^" + wu + Ug + Gg + Bg + Fg + Wg + "]", Cf = "\\ud83c[\\udffb-\\udfff]", uE = "(?:" + _u + "|" + Cf + ")", Vg = "[^" + wu + "]", Mf = "(?:\\ud83c[\\udde6-\\uddff]){2}", If = "[\\ud800-\\udbff][\\udc00-\\udfff]", fa = "[" + Wg + "]", Yg = "\\u200d", Xg = "(?:" + Kg + "|" + qg + ")", cE = "(?:" + fa + "|" + qg + ")", Zg = "(?:" + $f + "(?:d|ll|m|re|s|t|ve))?", Jg = "(?:" + $f + "(?:D|LL|M|RE|S|T|VE))?", Qg = uE + "?", ey = "[" + zg + "]?", lE = "(?:" + Yg + "(?:" + [Vg, Mf, If].join("|") + ")" + ey + Qg + ")*", fE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", dE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ty = ey + Qg + lE, hE = "(?:" + [sE, Mf, If].join("|") + ")" + ty, pE = "(?:" + [Vg + _u + "?", _u, Mf, If, oE].join("|") + ")", vE = RegExp($f, "g"), gE = RegExp(_u, "g"), kf = RegExp(Cf + "(?=" + Cf + ")|" + pE + ty, "g"), yE = RegExp([
      fa + "?" + Kg + "+" + Zg + "(?=" + [Hg, fa, "$"].join("|") + ")",
      cE + "+" + Jg + "(?=" + [Hg, fa + Xg, "$"].join("|") + ")",
      fa + "?" + Xg + "+" + Zg,
      fa + "+" + Jg,
      dE,
      fE,
      Gg,
      hE
    ].join("|"), "g"), mE = RegExp("[" + Yg + wu + Lg + zg + "]"), bE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, xE = [
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
    ], wE = -1, ot = {};
    ot[mf] = ot[bf] = ot[xf] = ot[wf] = ot[_f] = ot[Of] = ot[Af] = ot[Sf] = ot[Pf] = !0, ot[ge] = ot[xe] = ot[ko] = ot[we] = ot[la] = ot[ne] = ot[pe] = ot[j] = ot[be] = ot[We] = ot[at] = ot[nr] = ot[yt] = ot[yn] = ot[Xn] = !1;
    var rt = {};
    rt[ge] = rt[xe] = rt[ko] = rt[la] = rt[we] = rt[ne] = rt[mf] = rt[bf] = rt[xf] = rt[wf] = rt[_f] = rt[be] = rt[We] = rt[at] = rt[nr] = rt[yt] = rt[yn] = rt[Yn] = rt[Of] = rt[Af] = rt[Sf] = rt[Pf] = !0, rt[pe] = rt[j] = rt[Xn] = !1;
    var _E = {
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
    }, OE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, AE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, SE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, PE = parseFloat, EE = parseInt, ry = typeof pr == "object" && pr && pr.Object === Object && pr, TE = typeof self == "object" && self && self.Object === Object && self, jt = ry || TE || Function("return this")(), jf = t && !t.nodeType && t, Ei = jf && !0 && e && !e.nodeType && e, ny = Ei && Ei.exports === jf, Rf = ny && ry.process, br = function() {
      try {
        var L = Ei && Ei.require && Ei.require("util").types;
        return L || Rf && Rf.binding && Rf.binding("util");
      } catch {
      }
    }(), iy = br && br.isArrayBuffer, ay = br && br.isDate, oy = br && br.isMap, sy = br && br.isRegExp, uy = br && br.isSet, cy = br && br.isTypedArray;
    function ir(L, Q, Y) {
      switch (Y.length) {
        case 0:
          return L.call(Q);
        case 1:
          return L.call(Q, Y[0]);
        case 2:
          return L.call(Q, Y[0], Y[1]);
        case 3:
          return L.call(Q, Y[0], Y[1], Y[2]);
      }
      return L.apply(Q, Y);
    }
    function $E(L, Q, Y, fe) {
      for (var $e = -1, He = L == null ? 0 : L.length; ++$e < He; ) {
        var _t = L[$e];
        Q(fe, _t, Y(_t), L);
      }
      return fe;
    }
    function xr(L, Q) {
      for (var Y = -1, fe = L == null ? 0 : L.length; ++Y < fe && Q(L[Y], Y, L) !== !1; )
        ;
      return L;
    }
    function CE(L, Q) {
      for (var Y = L == null ? 0 : L.length; Y-- && Q(L[Y], Y, L) !== !1; )
        ;
      return L;
    }
    function ly(L, Q) {
      for (var Y = -1, fe = L == null ? 0 : L.length; ++Y < fe; )
        if (!Q(L[Y], Y, L))
          return !1;
      return !0;
    }
    function Zn(L, Q) {
      for (var Y = -1, fe = L == null ? 0 : L.length, $e = 0, He = []; ++Y < fe; ) {
        var _t = L[Y];
        Q(_t, Y, L) && (He[$e++] = _t);
      }
      return He;
    }
    function Ou(L, Q) {
      var Y = L == null ? 0 : L.length;
      return !!Y && da(L, Q, 0) > -1;
    }
    function Nf(L, Q, Y) {
      for (var fe = -1, $e = L == null ? 0 : L.length; ++fe < $e; )
        if (Y(Q, L[fe]))
          return !0;
      return !1;
    }
    function ft(L, Q) {
      for (var Y = -1, fe = L == null ? 0 : L.length, $e = Array(fe); ++Y < fe; )
        $e[Y] = Q(L[Y], Y, L);
      return $e;
    }
    function Jn(L, Q) {
      for (var Y = -1, fe = Q.length, $e = L.length; ++Y < fe; )
        L[$e + Y] = Q[Y];
      return L;
    }
    function Df(L, Q, Y, fe) {
      var $e = -1, He = L == null ? 0 : L.length;
      for (fe && He && (Y = L[++$e]); ++$e < He; )
        Y = Q(Y, L[$e], $e, L);
      return Y;
    }
    function ME(L, Q, Y, fe) {
      var $e = L == null ? 0 : L.length;
      for (fe && $e && (Y = L[--$e]); $e--; )
        Y = Q(Y, L[$e], $e, L);
      return Y;
    }
    function Lf(L, Q) {
      for (var Y = -1, fe = L == null ? 0 : L.length; ++Y < fe; )
        if (Q(L[Y], Y, L))
          return !0;
      return !1;
    }
    var IE = Bf("length");
    function kE(L) {
      return L.split("");
    }
    function jE(L) {
      return L.match(zP) || [];
    }
    function fy(L, Q, Y) {
      var fe;
      return Y(L, function($e, He, _t) {
        if (Q($e, He, _t))
          return fe = He, !1;
      }), fe;
    }
    function Au(L, Q, Y, fe) {
      for (var $e = L.length, He = Y + (fe ? 1 : -1); fe ? He-- : ++He < $e; )
        if (Q(L[He], He, L))
          return He;
      return -1;
    }
    function da(L, Q, Y) {
      return Q === Q ? KE(L, Q, Y) : Au(L, dy, Y);
    }
    function RE(L, Q, Y, fe) {
      for (var $e = Y - 1, He = L.length; ++$e < He; )
        if (fe(L[$e], Q))
          return $e;
      return -1;
    }
    function dy(L) {
      return L !== L;
    }
    function hy(L, Q) {
      var Y = L == null ? 0 : L.length;
      return Y ? Wf(L, Q) / Y : G;
    }
    function Bf(L) {
      return function(Q) {
        return Q == null ? r : Q[L];
      };
    }
    function Ff(L) {
      return function(Q) {
        return L == null ? r : L[Q];
      };
    }
    function py(L, Q, Y, fe, $e) {
      return $e(L, function(He, _t, et) {
        Y = fe ? (fe = !1, He) : Q(Y, He, _t, et);
      }), Y;
    }
    function NE(L, Q) {
      var Y = L.length;
      for (L.sort(Q); Y--; )
        L[Y] = L[Y].value;
      return L;
    }
    function Wf(L, Q) {
      for (var Y, fe = -1, $e = L.length; ++fe < $e; ) {
        var He = Q(L[fe]);
        He !== r && (Y = Y === r ? He : Y + He);
      }
      return Y;
    }
    function zf(L, Q) {
      for (var Y = -1, fe = Array(L); ++Y < L; )
        fe[Y] = Q(Y);
      return fe;
    }
    function DE(L, Q) {
      return ft(Q, function(Y) {
        return [Y, L[Y]];
      });
    }
    function vy(L) {
      return L && L.slice(0, by(L) + 1).replace(Tf, "");
    }
    function ar(L) {
      return function(Q) {
        return L(Q);
      };
    }
    function Uf(L, Q) {
      return ft(Q, function(Y) {
        return L[Y];
      });
    }
    function jo(L, Q) {
      return L.has(Q);
    }
    function gy(L, Q) {
      for (var Y = -1, fe = L.length; ++Y < fe && da(Q, L[Y], 0) > -1; )
        ;
      return Y;
    }
    function yy(L, Q) {
      for (var Y = L.length; Y-- && da(Q, L[Y], 0) > -1; )
        ;
      return Y;
    }
    function LE(L, Q) {
      for (var Y = L.length, fe = 0; Y--; )
        L[Y] === Q && ++fe;
      return fe;
    }
    var BE = Ff(_E), FE = Ff(OE);
    function WE(L) {
      return "\\" + SE[L];
    }
    function zE(L, Q) {
      return L == null ? r : L[Q];
    }
    function ha(L) {
      return mE.test(L);
    }
    function UE(L) {
      return bE.test(L);
    }
    function HE(L) {
      for (var Q, Y = []; !(Q = L.next()).done; )
        Y.push(Q.value);
      return Y;
    }
    function Hf(L) {
      var Q = -1, Y = Array(L.size);
      return L.forEach(function(fe, $e) {
        Y[++Q] = [$e, fe];
      }), Y;
    }
    function my(L, Q) {
      return function(Y) {
        return L(Q(Y));
      };
    }
    function Qn(L, Q) {
      for (var Y = -1, fe = L.length, $e = 0, He = []; ++Y < fe; ) {
        var _t = L[Y];
        (_t === Q || _t === d) && (L[Y] = d, He[$e++] = Y);
      }
      return He;
    }
    function Su(L) {
      var Q = -1, Y = Array(L.size);
      return L.forEach(function(fe) {
        Y[++Q] = fe;
      }), Y;
    }
    function GE(L) {
      var Q = -1, Y = Array(L.size);
      return L.forEach(function(fe) {
        Y[++Q] = [fe, fe];
      }), Y;
    }
    function KE(L, Q, Y) {
      for (var fe = Y - 1, $e = L.length; ++fe < $e; )
        if (L[fe] === Q)
          return fe;
      return -1;
    }
    function qE(L, Q, Y) {
      for (var fe = Y + 1; fe--; )
        if (L[fe] === Q)
          return fe;
      return fe;
    }
    function pa(L) {
      return ha(L) ? YE(L) : IE(L);
    }
    function Br(L) {
      return ha(L) ? XE(L) : kE(L);
    }
    function by(L) {
      for (var Q = L.length; Q-- && LP.test(L.charAt(Q)); )
        ;
      return Q;
    }
    var VE = Ff(AE);
    function YE(L) {
      for (var Q = kf.lastIndex = 0; kf.test(L); )
        ++Q;
      return Q;
    }
    function XE(L) {
      return L.match(kf) || [];
    }
    function ZE(L) {
      return L.match(yE) || [];
    }
    var JE = function L(Q) {
      Q = Q == null ? jt : va.defaults(jt.Object(), Q, va.pick(jt, xE));
      var Y = Q.Array, fe = Q.Date, $e = Q.Error, He = Q.Function, _t = Q.Math, et = Q.Object, Gf = Q.RegExp, QE = Q.String, wr = Q.TypeError, Pu = Y.prototype, eT = He.prototype, ga = et.prototype, Eu = Q["__core-js_shared__"], Tu = eT.toString, Xe = ga.hasOwnProperty, tT = 0, xy = function() {
        var o = /[^.]+$/.exec(Eu && Eu.keys && Eu.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), $u = ga.toString, rT = Tu.call(et), nT = jt._, iT = Gf(
        "^" + Tu.call(Xe).replace(Ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Cu = ny ? Q.Buffer : r, ei = Q.Symbol, Mu = Q.Uint8Array, wy = Cu ? Cu.allocUnsafe : r, Iu = my(et.getPrototypeOf, et), _y = et.create, Oy = ga.propertyIsEnumerable, ku = Pu.splice, Ay = ei ? ei.isConcatSpreadable : r, Ro = ei ? ei.iterator : r, Ti = ei ? ei.toStringTag : r, ju = function() {
        try {
          var o = ki(et, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), aT = Q.clearTimeout !== jt.clearTimeout && Q.clearTimeout, oT = fe && fe.now !== jt.Date.now && fe.now, sT = Q.setTimeout !== jt.setTimeout && Q.setTimeout, Ru = _t.ceil, Nu = _t.floor, Kf = et.getOwnPropertySymbols, uT = Cu ? Cu.isBuffer : r, Sy = Q.isFinite, cT = Pu.join, lT = my(et.keys, et), Ot = _t.max, Dt = _t.min, fT = fe.now, dT = Q.parseInt, Py = _t.random, hT = Pu.reverse, qf = ki(Q, "DataView"), No = ki(Q, "Map"), Vf = ki(Q, "Promise"), ya = ki(Q, "Set"), Do = ki(Q, "WeakMap"), Lo = ki(et, "create"), Du = Do && new Do(), ma = {}, pT = ji(qf), vT = ji(No), gT = ji(Vf), yT = ji(ya), mT = ji(Do), Lu = ei ? ei.prototype : r, Bo = Lu ? Lu.valueOf : r, Ey = Lu ? Lu.toString : r;
      function T(o) {
        if (gt(o) && !Ce(o) && !(o instanceof Be)) {
          if (o instanceof _r)
            return o;
          if (Xe.call(o, "__wrapped__"))
            return Tm(o);
        }
        return new _r(o);
      }
      var ba = /* @__PURE__ */ function() {
        function o() {
        }
        return function(c) {
          if (!pt(c))
            return {};
          if (_y)
            return _y(c);
          o.prototype = c;
          var p = new o();
          return o.prototype = r, p;
        };
      }();
      function Bu() {
      }
      function _r(o, c) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = r;
      }
      T.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: IP,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: kP,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ng,
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
          _: T
        }
      }, T.prototype = Bu.prototype, T.prototype.constructor = T, _r.prototype = ba(Bu.prototype), _r.prototype.constructor = _r;
      function Be(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
      }
      function bT() {
        var o = new Be(this.__wrapped__);
        return o.__actions__ = Yt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Yt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Yt(this.__views__), o;
      }
      function xT() {
        if (this.__filtered__) {
          var o = new Be(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function wT() {
        var o = this.__wrapped__.value(), c = this.__dir__, p = Ce(o), m = c < 0, P = p ? o.length : 0, $ = k$(0, P, this.__views__), I = $.start, R = $.end, W = R - I, ee = m ? R : I - 1, te = this.__iteratees__, ie = te.length, le = 0, ve = Dt(W, this.__takeCount__);
        if (!p || !m && P == W && ve == W)
          return Zy(o, this.__actions__);
        var Oe = [];
        e:
          for (; W-- && le < ve; ) {
            ee += c;
            for (var Re = -1, Ae = o[ee]; ++Re < ie; ) {
              var De = te[Re], Fe = De.iteratee, ur = De.type, Ut = Fe(Ae);
              if (ur == J)
                Ae = Ut;
              else if (!Ut) {
                if (ur == z)
                  continue e;
                break e;
              }
            }
            Oe[le++] = Ae;
          }
        return Oe;
      }
      Be.prototype = ba(Bu.prototype), Be.prototype.constructor = Be;
      function $i(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function _T() {
        this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
      }
      function OT(o) {
        var c = this.has(o) && delete this.__data__[o];
        return this.size -= c ? 1 : 0, c;
      }
      function AT(o) {
        var c = this.__data__;
        if (Lo) {
          var p = c[o];
          return p === l ? r : p;
        }
        return Xe.call(c, o) ? c[o] : r;
      }
      function ST(o) {
        var c = this.__data__;
        return Lo ? c[o] !== r : Xe.call(c, o);
      }
      function PT(o, c) {
        var p = this.__data__;
        return this.size += this.has(o) ? 0 : 1, p[o] = Lo && c === r ? l : c, this;
      }
      $i.prototype.clear = _T, $i.prototype.delete = OT, $i.prototype.get = AT, $i.prototype.has = ST, $i.prototype.set = PT;
      function mn(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function ET() {
        this.__data__ = [], this.size = 0;
      }
      function TT(o) {
        var c = this.__data__, p = Fu(c, o);
        if (p < 0)
          return !1;
        var m = c.length - 1;
        return p == m ? c.pop() : ku.call(c, p, 1), --this.size, !0;
      }
      function $T(o) {
        var c = this.__data__, p = Fu(c, o);
        return p < 0 ? r : c[p][1];
      }
      function CT(o) {
        return Fu(this.__data__, o) > -1;
      }
      function MT(o, c) {
        var p = this.__data__, m = Fu(p, o);
        return m < 0 ? (++this.size, p.push([o, c])) : p[m][1] = c, this;
      }
      mn.prototype.clear = ET, mn.prototype.delete = TT, mn.prototype.get = $T, mn.prototype.has = CT, mn.prototype.set = MT;
      function bn(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function IT() {
        this.size = 0, this.__data__ = {
          hash: new $i(),
          map: new (No || mn)(),
          string: new $i()
        };
      }
      function kT(o) {
        var c = Ju(this, o).delete(o);
        return this.size -= c ? 1 : 0, c;
      }
      function jT(o) {
        return Ju(this, o).get(o);
      }
      function RT(o) {
        return Ju(this, o).has(o);
      }
      function NT(o, c) {
        var p = Ju(this, o), m = p.size;
        return p.set(o, c), this.size += p.size == m ? 0 : 1, this;
      }
      bn.prototype.clear = IT, bn.prototype.delete = kT, bn.prototype.get = jT, bn.prototype.has = RT, bn.prototype.set = NT;
      function Ci(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.__data__ = new bn(); ++c < p; )
          this.add(o[c]);
      }
      function DT(o) {
        return this.__data__.set(o, l), this;
      }
      function LT(o) {
        return this.__data__.has(o);
      }
      Ci.prototype.add = Ci.prototype.push = DT, Ci.prototype.has = LT;
      function Fr(o) {
        var c = this.__data__ = new mn(o);
        this.size = c.size;
      }
      function BT() {
        this.__data__ = new mn(), this.size = 0;
      }
      function FT(o) {
        var c = this.__data__, p = c.delete(o);
        return this.size = c.size, p;
      }
      function WT(o) {
        return this.__data__.get(o);
      }
      function zT(o) {
        return this.__data__.has(o);
      }
      function UT(o, c) {
        var p = this.__data__;
        if (p instanceof mn) {
          var m = p.__data__;
          if (!No || m.length < i - 1)
            return m.push([o, c]), this.size = ++p.size, this;
          p = this.__data__ = new bn(m);
        }
        return p.set(o, c), this.size = p.size, this;
      }
      Fr.prototype.clear = BT, Fr.prototype.delete = FT, Fr.prototype.get = WT, Fr.prototype.has = zT, Fr.prototype.set = UT;
      function Ty(o, c) {
        var p = Ce(o), m = !p && Ri(o), P = !p && !m && ai(o), $ = !p && !m && !P && Oa(o), I = p || m || P || $, R = I ? zf(o.length, QE) : [], W = R.length;
        for (var ee in o)
          (c || Xe.call(o, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          $ && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          On(ee, W))) && R.push(ee);
        return R;
      }
      function $y(o) {
        var c = o.length;
        return c ? o[ad(0, c - 1)] : r;
      }
      function HT(o, c) {
        return Qu(Yt(o), Mi(c, 0, o.length));
      }
      function GT(o) {
        return Qu(Yt(o));
      }
      function Yf(o, c, p) {
        (p !== r && !Wr(o[c], p) || p === r && !(c in o)) && xn(o, c, p);
      }
      function Fo(o, c, p) {
        var m = o[c];
        (!(Xe.call(o, c) && Wr(m, p)) || p === r && !(c in o)) && xn(o, c, p);
      }
      function Fu(o, c) {
        for (var p = o.length; p--; )
          if (Wr(o[p][0], c))
            return p;
        return -1;
      }
      function KT(o, c, p, m) {
        return ti(o, function(P, $, I) {
          c(m, P, p(P), I);
        }), m;
      }
      function Cy(o, c) {
        return o && rn(c, Ct(c), o);
      }
      function qT(o, c) {
        return o && rn(c, Zt(c), o);
      }
      function xn(o, c, p) {
        c == "__proto__" && ju ? ju(o, c, {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        }) : o[c] = p;
      }
      function Xf(o, c) {
        for (var p = -1, m = c.length, P = Y(m), $ = o == null; ++p < m; )
          P[p] = $ ? r : Cd(o, c[p]);
        return P;
      }
      function Mi(o, c, p) {
        return o === o && (p !== r && (o = o <= p ? o : p), c !== r && (o = o >= c ? o : c)), o;
      }
      function Or(o, c, p, m, P, $) {
        var I, R = c & h, W = c & v, ee = c & g;
        if (p && (I = P ? p(o, m, P, $) : p(o)), I !== r)
          return I;
        if (!pt(o))
          return o;
        var te = Ce(o);
        if (te) {
          if (I = R$(o), !R)
            return Yt(o, I);
        } else {
          var ie = Lt(o), le = ie == j || ie == Ee;
          if (ai(o))
            return em(o, R);
          if (ie == at || ie == ge || le && !P) {
            if (I = W || le ? {} : bm(o), !R)
              return W ? A$(o, qT(I, o)) : O$(o, Cy(I, o));
          } else {
            if (!rt[ie])
              return P ? o : {};
            I = N$(o, ie, R);
          }
        }
        $ || ($ = new Fr());
        var ve = $.get(o);
        if (ve)
          return ve;
        $.set(o, I), Vm(o) ? o.forEach(function(Ae) {
          I.add(Or(Ae, c, p, Ae, o, $));
        }) : Km(o) && o.forEach(function(Ae, De) {
          I.set(De, Or(Ae, c, p, De, o, $));
        });
        var Oe = ee ? W ? gd : vd : W ? Zt : Ct, Re = te ? r : Oe(o);
        return xr(Re || o, function(Ae, De) {
          Re && (De = Ae, Ae = o[De]), Fo(I, De, Or(Ae, c, p, De, o, $));
        }), I;
      }
      function VT(o) {
        var c = Ct(o);
        return function(p) {
          return My(p, o, c);
        };
      }
      function My(o, c, p) {
        var m = p.length;
        if (o == null)
          return !m;
        for (o = et(o); m--; ) {
          var P = p[m], $ = c[P], I = o[P];
          if (I === r && !(P in o) || !$(I))
            return !1;
        }
        return !0;
      }
      function Iy(o, c, p) {
        if (typeof o != "function")
          throw new wr(s);
        return qo(function() {
          o.apply(r, p);
        }, c);
      }
      function Wo(o, c, p, m) {
        var P = -1, $ = Ou, I = !0, R = o.length, W = [], ee = c.length;
        if (!R)
          return W;
        p && (c = ft(c, ar(p))), m ? ($ = Nf, I = !1) : c.length >= i && ($ = jo, I = !1, c = new Ci(c));
        e:
          for (; ++P < R; ) {
            var te = o[P], ie = p == null ? te : p(te);
            if (te = m || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = ee; le--; )
                if (c[le] === ie)
                  continue e;
              W.push(te);
            } else $(c, ie, m) || W.push(te);
          }
        return W;
      }
      var ti = am(tn), ky = am(Jf, !0);
      function YT(o, c) {
        var p = !0;
        return ti(o, function(m, P, $) {
          return p = !!c(m, P, $), p;
        }), p;
      }
      function Wu(o, c, p) {
        for (var m = -1, P = o.length; ++m < P; ) {
          var $ = o[m], I = c($);
          if (I != null && (R === r ? I === I && !sr(I) : p(I, R)))
            var R = I, W = $;
        }
        return W;
      }
      function XT(o, c, p, m) {
        var P = o.length;
        for (p = Ie(p), p < 0 && (p = -p > P ? 0 : P + p), m = m === r || m > P ? P : Ie(m), m < 0 && (m += P), m = p > m ? 0 : Xm(m); p < m; )
          o[p++] = c;
        return o;
      }
      function jy(o, c) {
        var p = [];
        return ti(o, function(m, P, $) {
          c(m, P, $) && p.push(m);
        }), p;
      }
      function Rt(o, c, p, m, P) {
        var $ = -1, I = o.length;
        for (p || (p = L$), P || (P = []); ++$ < I; ) {
          var R = o[$];
          c > 0 && p(R) ? c > 1 ? Rt(R, c - 1, p, m, P) : Jn(P, R) : m || (P[P.length] = R);
        }
        return P;
      }
      var Zf = om(), Ry = om(!0);
      function tn(o, c) {
        return o && Zf(o, c, Ct);
      }
      function Jf(o, c) {
        return o && Ry(o, c, Ct);
      }
      function zu(o, c) {
        return Zn(c, function(p) {
          return An(o[p]);
        });
      }
      function Ii(o, c) {
        c = ni(c, o);
        for (var p = 0, m = c.length; o != null && p < m; )
          o = o[nn(c[p++])];
        return p && p == m ? o : r;
      }
      function Ny(o, c, p) {
        var m = c(o);
        return Ce(o) ? m : Jn(m, p(o));
      }
      function Wt(o) {
        return o == null ? o === r ? Io : lt : Ti && Ti in et(o) ? I$(o) : G$(o);
      }
      function Qf(o, c) {
        return o > c;
      }
      function ZT(o, c) {
        return o != null && Xe.call(o, c);
      }
      function JT(o, c) {
        return o != null && c in et(o);
      }
      function QT(o, c, p) {
        return o >= Dt(c, p) && o < Ot(c, p);
      }
      function ed(o, c, p) {
        for (var m = p ? Nf : Ou, P = o[0].length, $ = o.length, I = $, R = Y($), W = 1 / 0, ee = []; I--; ) {
          var te = o[I];
          I && c && (te = ft(te, ar(c))), W = Dt(te.length, W), R[I] = !p && (c || P >= 120 && te.length >= 120) ? new Ci(I && te) : r;
        }
        te = o[0];
        var ie = -1, le = R[0];
        e:
          for (; ++ie < P && ee.length < W; ) {
            var ve = te[ie], Oe = c ? c(ve) : ve;
            if (ve = p || ve !== 0 ? ve : 0, !(le ? jo(le, Oe) : m(ee, Oe, p))) {
              for (I = $; --I; ) {
                var Re = R[I];
                if (!(Re ? jo(Re, Oe) : m(o[I], Oe, p)))
                  continue e;
              }
              le && le.push(Oe), ee.push(ve);
            }
          }
        return ee;
      }
      function e$(o, c, p, m) {
        return tn(o, function(P, $, I) {
          c(m, p(P), $, I);
        }), m;
      }
      function zo(o, c, p) {
        c = ni(c, o), o = Om(o, c);
        var m = o == null ? o : o[nn(Sr(c))];
        return m == null ? r : ir(m, o, p);
      }
      function Dy(o) {
        return gt(o) && Wt(o) == ge;
      }
      function t$(o) {
        return gt(o) && Wt(o) == ko;
      }
      function r$(o) {
        return gt(o) && Wt(o) == ne;
      }
      function Uo(o, c, p, m, P) {
        return o === c ? !0 : o == null || c == null || !gt(o) && !gt(c) ? o !== o && c !== c : n$(o, c, p, m, Uo, P);
      }
      function n$(o, c, p, m, P, $) {
        var I = Ce(o), R = Ce(c), W = I ? xe : Lt(o), ee = R ? xe : Lt(c);
        W = W == ge ? at : W, ee = ee == ge ? at : ee;
        var te = W == at, ie = ee == at, le = W == ee;
        if (le && ai(o)) {
          if (!ai(c))
            return !1;
          I = !0, te = !1;
        }
        if (le && !te)
          return $ || ($ = new Fr()), I || Oa(o) ? gm(o, c, p, m, P, $) : C$(o, c, W, p, m, P, $);
        if (!(p & w)) {
          var ve = te && Xe.call(o, "__wrapped__"), Oe = ie && Xe.call(c, "__wrapped__");
          if (ve || Oe) {
            var Re = ve ? o.value() : o, Ae = Oe ? c.value() : c;
            return $ || ($ = new Fr()), P(Re, Ae, p, m, $);
          }
        }
        return le ? ($ || ($ = new Fr()), M$(o, c, p, m, P, $)) : !1;
      }
      function i$(o) {
        return gt(o) && Lt(o) == be;
      }
      function td(o, c, p, m) {
        var P = p.length, $ = P, I = !m;
        if (o == null)
          return !$;
        for (o = et(o); P--; ) {
          var R = p[P];
          if (I && R[2] ? R[1] !== o[R[0]] : !(R[0] in o))
            return !1;
        }
        for (; ++P < $; ) {
          R = p[P];
          var W = R[0], ee = o[W], te = R[1];
          if (I && R[2]) {
            if (ee === r && !(W in o))
              return !1;
          } else {
            var ie = new Fr();
            if (m)
              var le = m(ee, te, W, o, c, ie);
            if (!(le === r ? Uo(te, ee, w | y, m, ie) : le))
              return !1;
          }
        }
        return !0;
      }
      function Ly(o) {
        if (!pt(o) || F$(o))
          return !1;
        var c = An(o) ? iT : VP;
        return c.test(ji(o));
      }
      function a$(o) {
        return gt(o) && Wt(o) == nr;
      }
      function o$(o) {
        return gt(o) && Lt(o) == yt;
      }
      function s$(o) {
        return gt(o) && ac(o.length) && !!ot[Wt(o)];
      }
      function By(o) {
        return typeof o == "function" ? o : o == null ? Jt : typeof o == "object" ? Ce(o) ? zy(o[0], o[1]) : Wy(o) : sb(o);
      }
      function rd(o) {
        if (!Ko(o))
          return lT(o);
        var c = [];
        for (var p in et(o))
          Xe.call(o, p) && p != "constructor" && c.push(p);
        return c;
      }
      function u$(o) {
        if (!pt(o))
          return H$(o);
        var c = Ko(o), p = [];
        for (var m in o)
          m == "constructor" && (c || !Xe.call(o, m)) || p.push(m);
        return p;
      }
      function nd(o, c) {
        return o < c;
      }
      function Fy(o, c) {
        var p = -1, m = Xt(o) ? Y(o.length) : [];
        return ti(o, function(P, $, I) {
          m[++p] = c(P, $, I);
        }), m;
      }
      function Wy(o) {
        var c = md(o);
        return c.length == 1 && c[0][2] ? wm(c[0][0], c[0][1]) : function(p) {
          return p === o || td(p, o, c);
        };
      }
      function zy(o, c) {
        return xd(o) && xm(c) ? wm(nn(o), c) : function(p) {
          var m = Cd(p, o);
          return m === r && m === c ? Md(p, o) : Uo(c, m, w | y);
        };
      }
      function Uu(o, c, p, m, P) {
        o !== c && Zf(c, function($, I) {
          if (P || (P = new Fr()), pt($))
            c$(o, c, I, p, Uu, m, P);
          else {
            var R = m ? m(_d(o, I), $, I + "", o, c, P) : r;
            R === r && (R = $), Yf(o, I, R);
          }
        }, Zt);
      }
      function c$(o, c, p, m, P, $, I) {
        var R = _d(o, p), W = _d(c, p), ee = I.get(W);
        if (ee) {
          Yf(o, p, ee);
          return;
        }
        var te = $ ? $(R, W, p + "", o, c, I) : r, ie = te === r;
        if (ie) {
          var le = Ce(W), ve = !le && ai(W), Oe = !le && !ve && Oa(W);
          te = W, le || ve || Oe ? Ce(R) ? te = R : mt(R) ? te = Yt(R) : ve ? (ie = !1, te = em(W, !0)) : Oe ? (ie = !1, te = tm(W, !0)) : te = [] : Vo(W) || Ri(W) ? (te = R, Ri(R) ? te = Zm(R) : (!pt(R) || An(R)) && (te = bm(W))) : ie = !1;
        }
        ie && (I.set(W, te), P(te, W, m, $, I), I.delete(W)), Yf(o, p, te);
      }
      function Uy(o, c) {
        var p = o.length;
        if (p)
          return c += c < 0 ? p : 0, On(c, p) ? o[c] : r;
      }
      function Hy(o, c, p) {
        c.length ? c = ft(c, function($) {
          return Ce($) ? function(I) {
            return Ii(I, $.length === 1 ? $[0] : $);
          } : $;
        }) : c = [Jt];
        var m = -1;
        c = ft(c, ar(_e()));
        var P = Fy(o, function($, I, R) {
          var W = ft(c, function(ee) {
            return ee($);
          });
          return { criteria: W, index: ++m, value: $ };
        });
        return NE(P, function($, I) {
          return _$($, I, p);
        });
      }
      function l$(o, c) {
        return Gy(o, c, function(p, m) {
          return Md(o, m);
        });
      }
      function Gy(o, c, p) {
        for (var m = -1, P = c.length, $ = {}; ++m < P; ) {
          var I = c[m], R = Ii(o, I);
          p(R, I) && Ho($, ni(I, o), R);
        }
        return $;
      }
      function f$(o) {
        return function(c) {
          return Ii(c, o);
        };
      }
      function id(o, c, p, m) {
        var P = m ? RE : da, $ = -1, I = c.length, R = o;
        for (o === c && (c = Yt(c)), p && (R = ft(o, ar(p))); ++$ < I; )
          for (var W = 0, ee = c[$], te = p ? p(ee) : ee; (W = P(R, te, W, m)) > -1; )
            R !== o && ku.call(R, W, 1), ku.call(o, W, 1);
        return o;
      }
      function Ky(o, c) {
        for (var p = o ? c.length : 0, m = p - 1; p--; ) {
          var P = c[p];
          if (p == m || P !== $) {
            var $ = P;
            On(P) ? ku.call(o, P, 1) : ud(o, P);
          }
        }
        return o;
      }
      function ad(o, c) {
        return o + Nu(Py() * (c - o + 1));
      }
      function d$(o, c, p, m) {
        for (var P = -1, $ = Ot(Ru((c - o) / (p || 1)), 0), I = Y($); $--; )
          I[m ? $ : ++P] = o, o += p;
        return I;
      }
      function od(o, c) {
        var p = "";
        if (!o || c < 1 || c > V)
          return p;
        do
          c % 2 && (p += o), c = Nu(c / 2), c && (o += o);
        while (c);
        return p;
      }
      function Ne(o, c) {
        return Od(_m(o, c, Jt), o + "");
      }
      function h$(o) {
        return $y(Aa(o));
      }
      function p$(o, c) {
        var p = Aa(o);
        return Qu(p, Mi(c, 0, p.length));
      }
      function Ho(o, c, p, m) {
        if (!pt(o))
          return o;
        c = ni(c, o);
        for (var P = -1, $ = c.length, I = $ - 1, R = o; R != null && ++P < $; ) {
          var W = nn(c[P]), ee = p;
          if (W === "__proto__" || W === "constructor" || W === "prototype")
            return o;
          if (P != I) {
            var te = R[W];
            ee = m ? m(te, W, R) : r, ee === r && (ee = pt(te) ? te : On(c[P + 1]) ? [] : {});
          }
          Fo(R, W, ee), R = R[W];
        }
        return o;
      }
      var qy = Du ? function(o, c) {
        return Du.set(o, c), o;
      } : Jt, v$ = ju ? function(o, c) {
        return ju(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kd(c),
          writable: !0
        });
      } : Jt;
      function g$(o) {
        return Qu(Aa(o));
      }
      function Ar(o, c, p) {
        var m = -1, P = o.length;
        c < 0 && (c = -c > P ? 0 : P + c), p = p > P ? P : p, p < 0 && (p += P), P = c > p ? 0 : p - c >>> 0, c >>>= 0;
        for (var $ = Y(P); ++m < P; )
          $[m] = o[m + c];
        return $;
      }
      function y$(o, c) {
        var p;
        return ti(o, function(m, P, $) {
          return p = c(m, P, $), !p;
        }), !!p;
      }
      function Hu(o, c, p) {
        var m = 0, P = o == null ? m : o.length;
        if (typeof c == "number" && c === c && P <= ce) {
          for (; m < P; ) {
            var $ = m + P >>> 1, I = o[$];
            I !== null && !sr(I) && (p ? I <= c : I < c) ? m = $ + 1 : P = $;
          }
          return P;
        }
        return sd(o, c, Jt, p);
      }
      function sd(o, c, p, m) {
        var P = 0, $ = o == null ? 0 : o.length;
        if ($ === 0)
          return 0;
        c = p(c);
        for (var I = c !== c, R = c === null, W = sr(c), ee = c === r; P < $; ) {
          var te = Nu((P + $) / 2), ie = p(o[te]), le = ie !== r, ve = ie === null, Oe = ie === ie, Re = sr(ie);
          if (I)
            var Ae = m || Oe;
          else ee ? Ae = Oe && (m || le) : R ? Ae = Oe && le && (m || !ve) : W ? Ae = Oe && le && !ve && (m || !Re) : ve || Re ? Ae = !1 : Ae = m ? ie <= c : ie < c;
          Ae ? P = te + 1 : $ = te;
        }
        return Dt($, ae);
      }
      function Vy(o, c) {
        for (var p = -1, m = o.length, P = 0, $ = []; ++p < m; ) {
          var I = o[p], R = c ? c(I) : I;
          if (!p || !Wr(R, W)) {
            var W = R;
            $[P++] = I === 0 ? 0 : I;
          }
        }
        return $;
      }
      function Yy(o) {
        return typeof o == "number" ? o : sr(o) ? G : +o;
      }
      function or(o) {
        if (typeof o == "string")
          return o;
        if (Ce(o))
          return ft(o, or) + "";
        if (sr(o))
          return Ey ? Ey.call(o) : "";
        var c = o + "";
        return c == "0" && 1 / o == -Z ? "-0" : c;
      }
      function ri(o, c, p) {
        var m = -1, P = Ou, $ = o.length, I = !0, R = [], W = R;
        if (p)
          I = !1, P = Nf;
        else if ($ >= i) {
          var ee = c ? null : T$(o);
          if (ee)
            return Su(ee);
          I = !1, P = jo, W = new Ci();
        } else
          W = c ? [] : R;
        e:
          for (; ++m < $; ) {
            var te = o[m], ie = c ? c(te) : te;
            if (te = p || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = W.length; le--; )
                if (W[le] === ie)
                  continue e;
              c && W.push(ie), R.push(te);
            } else P(W, ie, p) || (W !== R && W.push(ie), R.push(te));
          }
        return R;
      }
      function ud(o, c) {
        return c = ni(c, o), o = Om(o, c), o == null || delete o[nn(Sr(c))];
      }
      function Xy(o, c, p, m) {
        return Ho(o, c, p(Ii(o, c)), m);
      }
      function Gu(o, c, p, m) {
        for (var P = o.length, $ = m ? P : -1; (m ? $-- : ++$ < P) && c(o[$], $, o); )
          ;
        return p ? Ar(o, m ? 0 : $, m ? $ + 1 : P) : Ar(o, m ? $ + 1 : 0, m ? P : $);
      }
      function Zy(o, c) {
        var p = o;
        return p instanceof Be && (p = p.value()), Df(c, function(m, P) {
          return P.func.apply(P.thisArg, Jn([m], P.args));
        }, p);
      }
      function cd(o, c, p) {
        var m = o.length;
        if (m < 2)
          return m ? ri(o[0]) : [];
        for (var P = -1, $ = Y(m); ++P < m; )
          for (var I = o[P], R = -1; ++R < m; )
            R != P && ($[P] = Wo($[P] || I, o[R], c, p));
        return ri(Rt($, 1), c, p);
      }
      function Jy(o, c, p) {
        for (var m = -1, P = o.length, $ = c.length, I = {}; ++m < P; ) {
          var R = m < $ ? c[m] : r;
          p(I, o[m], R);
        }
        return I;
      }
      function ld(o) {
        return mt(o) ? o : [];
      }
      function fd(o) {
        return typeof o == "function" ? o : Jt;
      }
      function ni(o, c) {
        return Ce(o) ? o : xd(o, c) ? [o] : Em(Ge(o));
      }
      var m$ = Ne;
      function ii(o, c, p) {
        var m = o.length;
        return p = p === r ? m : p, !c && p >= m ? o : Ar(o, c, p);
      }
      var Qy = aT || function(o) {
        return jt.clearTimeout(o);
      };
      function em(o, c) {
        if (c)
          return o.slice();
        var p = o.length, m = wy ? wy(p) : new o.constructor(p);
        return o.copy(m), m;
      }
      function dd(o) {
        var c = new o.constructor(o.byteLength);
        return new Mu(c).set(new Mu(o)), c;
      }
      function b$(o, c) {
        var p = c ? dd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.byteLength);
      }
      function x$(o) {
        var c = new o.constructor(o.source, Dg.exec(o));
        return c.lastIndex = o.lastIndex, c;
      }
      function w$(o) {
        return Bo ? et(Bo.call(o)) : {};
      }
      function tm(o, c) {
        var p = c ? dd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.length);
      }
      function rm(o, c) {
        if (o !== c) {
          var p = o !== r, m = o === null, P = o === o, $ = sr(o), I = c !== r, R = c === null, W = c === c, ee = sr(c);
          if (!R && !ee && !$ && o > c || $ && I && W && !R && !ee || m && I && W || !p && W || !P)
            return 1;
          if (!m && !$ && !ee && o < c || ee && p && P && !m && !$ || R && p && P || !I && P || !W)
            return -1;
        }
        return 0;
      }
      function _$(o, c, p) {
        for (var m = -1, P = o.criteria, $ = c.criteria, I = P.length, R = p.length; ++m < I; ) {
          var W = rm(P[m], $[m]);
          if (W) {
            if (m >= R)
              return W;
            var ee = p[m];
            return W * (ee == "desc" ? -1 : 1);
          }
        }
        return o.index - c.index;
      }
      function nm(o, c, p, m) {
        for (var P = -1, $ = o.length, I = p.length, R = -1, W = c.length, ee = Ot($ - I, 0), te = Y(W + ee), ie = !m; ++R < W; )
          te[R] = c[R];
        for (; ++P < I; )
          (ie || P < $) && (te[p[P]] = o[P]);
        for (; ee--; )
          te[R++] = o[P++];
        return te;
      }
      function im(o, c, p, m) {
        for (var P = -1, $ = o.length, I = -1, R = p.length, W = -1, ee = c.length, te = Ot($ - R, 0), ie = Y(te + ee), le = !m; ++P < te; )
          ie[P] = o[P];
        for (var ve = P; ++W < ee; )
          ie[ve + W] = c[W];
        for (; ++I < R; )
          (le || P < $) && (ie[ve + p[I]] = o[P++]);
        return ie;
      }
      function Yt(o, c) {
        var p = -1, m = o.length;
        for (c || (c = Y(m)); ++p < m; )
          c[p] = o[p];
        return c;
      }
      function rn(o, c, p, m) {
        var P = !p;
        p || (p = {});
        for (var $ = -1, I = c.length; ++$ < I; ) {
          var R = c[$], W = m ? m(p[R], o[R], R, p, o) : r;
          W === r && (W = o[R]), P ? xn(p, R, W) : Fo(p, R, W);
        }
        return p;
      }
      function O$(o, c) {
        return rn(o, bd(o), c);
      }
      function A$(o, c) {
        return rn(o, ym(o), c);
      }
      function Ku(o, c) {
        return function(p, m) {
          var P = Ce(p) ? $E : KT, $ = c ? c() : {};
          return P(p, o, _e(m, 2), $);
        };
      }
      function xa(o) {
        return Ne(function(c, p) {
          var m = -1, P = p.length, $ = P > 1 ? p[P - 1] : r, I = P > 2 ? p[2] : r;
          for ($ = o.length > 3 && typeof $ == "function" ? (P--, $) : r, I && zt(p[0], p[1], I) && ($ = P < 3 ? r : $, P = 1), c = et(c); ++m < P; ) {
            var R = p[m];
            R && o(c, R, m, $);
          }
          return c;
        });
      }
      function am(o, c) {
        return function(p, m) {
          if (p == null)
            return p;
          if (!Xt(p))
            return o(p, m);
          for (var P = p.length, $ = c ? P : -1, I = et(p); (c ? $-- : ++$ < P) && m(I[$], $, I) !== !1; )
            ;
          return p;
        };
      }
      function om(o) {
        return function(c, p, m) {
          for (var P = -1, $ = et(c), I = m(c), R = I.length; R--; ) {
            var W = I[o ? R : ++P];
            if (p($[W], W, $) === !1)
              break;
          }
          return c;
        };
      }
      function S$(o, c, p) {
        var m = c & b, P = Go(o);
        function $() {
          var I = this && this !== jt && this instanceof $ ? P : o;
          return I.apply(m ? p : this, arguments);
        }
        return $;
      }
      function sm(o) {
        return function(c) {
          c = Ge(c);
          var p = ha(c) ? Br(c) : r, m = p ? p[0] : c.charAt(0), P = p ? ii(p, 1).join("") : c.slice(1);
          return m[o]() + P;
        };
      }
      function wa(o) {
        return function(c) {
          return Df(ab(ib(c).replace(vE, "")), o, "");
        };
      }
      function Go(o) {
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
          var p = ba(o.prototype), m = o.apply(p, c);
          return pt(m) ? m : p;
        };
      }
      function P$(o, c, p) {
        var m = Go(o);
        function P() {
          for (var $ = arguments.length, I = Y($), R = $, W = _a(P); R--; )
            I[R] = arguments[R];
          var ee = $ < 3 && I[0] !== W && I[$ - 1] !== W ? [] : Qn(I, W);
          if ($ -= ee.length, $ < p)
            return dm(
              o,
              c,
              qu,
              P.placeholder,
              r,
              I,
              ee,
              r,
              r,
              p - $
            );
          var te = this && this !== jt && this instanceof P ? m : o;
          return ir(te, this, I);
        }
        return P;
      }
      function um(o) {
        return function(c, p, m) {
          var P = et(c);
          if (!Xt(c)) {
            var $ = _e(p, 3);
            c = Ct(c), p = function(R) {
              return $(P[R], R, P);
            };
          }
          var I = o(c, p, m);
          return I > -1 ? P[$ ? c[I] : I] : r;
        };
      }
      function cm(o) {
        return _n(function(c) {
          var p = c.length, m = p, P = _r.prototype.thru;
          for (o && c.reverse(); m--; ) {
            var $ = c[m];
            if (typeof $ != "function")
              throw new wr(s);
            if (P && !I && Zu($) == "wrapper")
              var I = new _r([], !0);
          }
          for (m = I ? m : p; ++m < p; ) {
            $ = c[m];
            var R = Zu($), W = R == "wrapper" ? yd($) : r;
            W && wd(W[0]) && W[1] == (C | S | x | M) && !W[4].length && W[9] == 1 ? I = I[Zu(W[0])].apply(I, W[3]) : I = $.length == 1 && wd($) ? I[R]() : I.thru($);
          }
          return function() {
            var ee = arguments, te = ee[0];
            if (I && ee.length == 1 && Ce(te))
              return I.plant(te).value();
            for (var ie = 0, le = p ? c[ie].apply(this, ee) : te; ++ie < p; )
              le = c[ie].call(this, le);
            return le;
          };
        });
      }
      function qu(o, c, p, m, P, $, I, R, W, ee) {
        var te = c & C, ie = c & b, le = c & A, ve = c & (S | _), Oe = c & F, Re = le ? r : Go(o);
        function Ae() {
          for (var De = arguments.length, Fe = Y(De), ur = De; ur--; )
            Fe[ur] = arguments[ur];
          if (ve)
            var Ut = _a(Ae), cr = LE(Fe, Ut);
          if (m && (Fe = nm(Fe, m, P, ve)), $ && (Fe = im(Fe, $, I, ve)), De -= cr, ve && De < ee) {
            var bt = Qn(Fe, Ut);
            return dm(
              o,
              c,
              qu,
              Ae.placeholder,
              p,
              Fe,
              bt,
              R,
              W,
              ee - De
            );
          }
          var zr = ie ? p : this, Pn = le ? zr[o] : o;
          return De = Fe.length, R ? Fe = K$(Fe, R) : Oe && De > 1 && Fe.reverse(), te && W < De && (Fe.length = W), this && this !== jt && this instanceof Ae && (Pn = Re || Go(Pn)), Pn.apply(zr, Fe);
        }
        return Ae;
      }
      function lm(o, c) {
        return function(p, m) {
          return e$(p, o, c(m), {});
        };
      }
      function Vu(o, c) {
        return function(p, m) {
          var P;
          if (p === r && m === r)
            return c;
          if (p !== r && (P = p), m !== r) {
            if (P === r)
              return m;
            typeof p == "string" || typeof m == "string" ? (p = or(p), m = or(m)) : (p = Yy(p), m = Yy(m)), P = o(p, m);
          }
          return P;
        };
      }
      function hd(o) {
        return _n(function(c) {
          return c = ft(c, ar(_e())), Ne(function(p) {
            var m = this;
            return o(c, function(P) {
              return ir(P, m, p);
            });
          });
        });
      }
      function Yu(o, c) {
        c = c === r ? " " : or(c);
        var p = c.length;
        if (p < 2)
          return p ? od(c, o) : c;
        var m = od(c, Ru(o / pa(c)));
        return ha(c) ? ii(Br(m), 0, o).join("") : m.slice(0, o);
      }
      function E$(o, c, p, m) {
        var P = c & b, $ = Go(o);
        function I() {
          for (var R = -1, W = arguments.length, ee = -1, te = m.length, ie = Y(te + W), le = this && this !== jt && this instanceof I ? $ : o; ++ee < te; )
            ie[ee] = m[ee];
          for (; W--; )
            ie[ee++] = arguments[++R];
          return ir(le, P ? p : this, ie);
        }
        return I;
      }
      function fm(o) {
        return function(c, p, m) {
          return m && typeof m != "number" && zt(c, p, m) && (p = m = r), c = Sn(c), p === r ? (p = c, c = 0) : p = Sn(p), m = m === r ? c < p ? 1 : -1 : Sn(m), d$(c, p, m, o);
        };
      }
      function Xu(o) {
        return function(c, p) {
          return typeof c == "string" && typeof p == "string" || (c = Pr(c), p = Pr(p)), o(c, p);
        };
      }
      function dm(o, c, p, m, P, $, I, R, W, ee) {
        var te = c & S, ie = te ? I : r, le = te ? r : I, ve = te ? $ : r, Oe = te ? r : $;
        c |= te ? x : E, c &= ~(te ? E : x), c & O || (c &= ~(b | A));
        var Re = [
          o,
          c,
          P,
          ve,
          ie,
          Oe,
          le,
          R,
          W,
          ee
        ], Ae = p.apply(r, Re);
        return wd(o) && Am(Ae, Re), Ae.placeholder = m, Sm(Ae, o, c);
      }
      function pd(o) {
        var c = _t[o];
        return function(p, m) {
          if (p = Pr(p), m = m == null ? 0 : Dt(Ie(m), 292), m && Sy(p)) {
            var P = (Ge(p) + "e").split("e"), $ = c(P[0] + "e" + (+P[1] + m));
            return P = (Ge($) + "e").split("e"), +(P[0] + "e" + (+P[1] - m));
          }
          return c(p);
        };
      }
      var T$ = ya && 1 / Su(new ya([, -0]))[1] == Z ? function(o) {
        return new ya(o);
      } : Nd;
      function hm(o) {
        return function(c) {
          var p = Lt(c);
          return p == be ? Hf(c) : p == yt ? GE(c) : DE(c, o(c));
        };
      }
      function wn(o, c, p, m, P, $, I, R) {
        var W = c & A;
        if (!W && typeof o != "function")
          throw new wr(s);
        var ee = m ? m.length : 0;
        if (ee || (c &= ~(x | E), m = P = r), I = I === r ? I : Ot(Ie(I), 0), R = R === r ? R : Ie(R), ee -= P ? P.length : 0, c & E) {
          var te = m, ie = P;
          m = P = r;
        }
        var le = W ? r : yd(o), ve = [
          o,
          c,
          p,
          m,
          P,
          te,
          ie,
          $,
          I,
          R
        ];
        if (le && U$(ve, le), o = ve[0], c = ve[1], p = ve[2], m = ve[3], P = ve[4], R = ve[9] = ve[9] === r ? W ? 0 : o.length : Ot(ve[9] - ee, 0), !R && c & (S | _) && (c &= ~(S | _)), !c || c == b)
          var Oe = S$(o, c, p);
        else c == S || c == _ ? Oe = P$(o, c, R) : (c == x || c == (b | x)) && !P.length ? Oe = E$(o, c, p, m) : Oe = qu.apply(r, ve);
        var Re = le ? qy : Am;
        return Sm(Re(Oe, ve), o, c);
      }
      function pm(o, c, p, m) {
        return o === r || Wr(o, ga[p]) && !Xe.call(m, p) ? c : o;
      }
      function vm(o, c, p, m, P, $) {
        return pt(o) && pt(c) && ($.set(c, o), Uu(o, c, r, vm, $), $.delete(c)), o;
      }
      function $$(o) {
        return Vo(o) ? r : o;
      }
      function gm(o, c, p, m, P, $) {
        var I = p & w, R = o.length, W = c.length;
        if (R != W && !(I && W > R))
          return !1;
        var ee = $.get(o), te = $.get(c);
        if (ee && te)
          return ee == c && te == o;
        var ie = -1, le = !0, ve = p & y ? new Ci() : r;
        for ($.set(o, c), $.set(c, o); ++ie < R; ) {
          var Oe = o[ie], Re = c[ie];
          if (m)
            var Ae = I ? m(Re, Oe, ie, c, o, $) : m(Oe, Re, ie, o, c, $);
          if (Ae !== r) {
            if (Ae)
              continue;
            le = !1;
            break;
          }
          if (ve) {
            if (!Lf(c, function(De, Fe) {
              if (!jo(ve, Fe) && (Oe === De || P(Oe, De, p, m, $)))
                return ve.push(Fe);
            })) {
              le = !1;
              break;
            }
          } else if (!(Oe === Re || P(Oe, Re, p, m, $))) {
            le = !1;
            break;
          }
        }
        return $.delete(o), $.delete(c), le;
      }
      function C$(o, c, p, m, P, $, I) {
        switch (p) {
          case la:
            if (o.byteLength != c.byteLength || o.byteOffset != c.byteOffset)
              return !1;
            o = o.buffer, c = c.buffer;
          case ko:
            return !(o.byteLength != c.byteLength || !$(new Mu(o), new Mu(c)));
          case we:
          case ne:
          case We:
            return Wr(+o, +c);
          case pe:
            return o.name == c.name && o.message == c.message;
          case nr:
          case yn:
            return o == c + "";
          case be:
            var R = Hf;
          case yt:
            var W = m & w;
            if (R || (R = Su), o.size != c.size && !W)
              return !1;
            var ee = I.get(o);
            if (ee)
              return ee == c;
            m |= y, I.set(o, c);
            var te = gm(R(o), R(c), m, P, $, I);
            return I.delete(o), te;
          case Yn:
            if (Bo)
              return Bo.call(o) == Bo.call(c);
        }
        return !1;
      }
      function M$(o, c, p, m, P, $) {
        var I = p & w, R = vd(o), W = R.length, ee = vd(c), te = ee.length;
        if (W != te && !I)
          return !1;
        for (var ie = W; ie--; ) {
          var le = R[ie];
          if (!(I ? le in c : Xe.call(c, le)))
            return !1;
        }
        var ve = $.get(o), Oe = $.get(c);
        if (ve && Oe)
          return ve == c && Oe == o;
        var Re = !0;
        $.set(o, c), $.set(c, o);
        for (var Ae = I; ++ie < W; ) {
          le = R[ie];
          var De = o[le], Fe = c[le];
          if (m)
            var ur = I ? m(Fe, De, le, c, o, $) : m(De, Fe, le, o, c, $);
          if (!(ur === r ? De === Fe || P(De, Fe, p, m, $) : ur)) {
            Re = !1;
            break;
          }
          Ae || (Ae = le == "constructor");
        }
        if (Re && !Ae) {
          var Ut = o.constructor, cr = c.constructor;
          Ut != cr && "constructor" in o && "constructor" in c && !(typeof Ut == "function" && Ut instanceof Ut && typeof cr == "function" && cr instanceof cr) && (Re = !1);
        }
        return $.delete(o), $.delete(c), Re;
      }
      function _n(o) {
        return Od(_m(o, r, Mm), o + "");
      }
      function vd(o) {
        return Ny(o, Ct, bd);
      }
      function gd(o) {
        return Ny(o, Zt, ym);
      }
      var yd = Du ? function(o) {
        return Du.get(o);
      } : Nd;
      function Zu(o) {
        for (var c = o.name + "", p = ma[c], m = Xe.call(ma, c) ? p.length : 0; m--; ) {
          var P = p[m], $ = P.func;
          if ($ == null || $ == o)
            return P.name;
        }
        return c;
      }
      function _a(o) {
        var c = Xe.call(T, "placeholder") ? T : o;
        return c.placeholder;
      }
      function _e() {
        var o = T.iteratee || jd;
        return o = o === jd ? By : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function Ju(o, c) {
        var p = o.__data__;
        return B$(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
      }
      function md(o) {
        for (var c = Ct(o), p = c.length; p--; ) {
          var m = c[p], P = o[m];
          c[p] = [m, P, xm(P)];
        }
        return c;
      }
      function ki(o, c) {
        var p = zE(o, c);
        return Ly(p) ? p : r;
      }
      function I$(o) {
        var c = Xe.call(o, Ti), p = o[Ti];
        try {
          o[Ti] = r;
          var m = !0;
        } catch {
        }
        var P = $u.call(o);
        return m && (c ? o[Ti] = p : delete o[Ti]), P;
      }
      var bd = Kf ? function(o) {
        return o == null ? [] : (o = et(o), Zn(Kf(o), function(c) {
          return Oy.call(o, c);
        }));
      } : Dd, ym = Kf ? function(o) {
        for (var c = []; o; )
          Jn(c, bd(o)), o = Iu(o);
        return c;
      } : Dd, Lt = Wt;
      (qf && Lt(new qf(new ArrayBuffer(1))) != la || No && Lt(new No()) != be || Vf && Lt(Vf.resolve()) != Vt || ya && Lt(new ya()) != yt || Do && Lt(new Do()) != Xn) && (Lt = function(o) {
        var c = Wt(o), p = c == at ? o.constructor : r, m = p ? ji(p) : "";
        if (m)
          switch (m) {
            case pT:
              return la;
            case vT:
              return be;
            case gT:
              return Vt;
            case yT:
              return yt;
            case mT:
              return Xn;
          }
        return c;
      });
      function k$(o, c, p) {
        for (var m = -1, P = p.length; ++m < P; ) {
          var $ = p[m], I = $.size;
          switch ($.type) {
            case "drop":
              o += I;
              break;
            case "dropRight":
              c -= I;
              break;
            case "take":
              c = Dt(c, o + I);
              break;
            case "takeRight":
              o = Ot(o, c - I);
              break;
          }
        }
        return { start: o, end: c };
      }
      function j$(o) {
        var c = o.match(FP);
        return c ? c[1].split(WP) : [];
      }
      function mm(o, c, p) {
        c = ni(c, o);
        for (var m = -1, P = c.length, $ = !1; ++m < P; ) {
          var I = nn(c[m]);
          if (!($ = o != null && p(o, I)))
            break;
          o = o[I];
        }
        return $ || ++m != P ? $ : (P = o == null ? 0 : o.length, !!P && ac(P) && On(I, P) && (Ce(o) || Ri(o)));
      }
      function R$(o) {
        var c = o.length, p = new o.constructor(c);
        return c && typeof o[0] == "string" && Xe.call(o, "index") && (p.index = o.index, p.input = o.input), p;
      }
      function bm(o) {
        return typeof o.constructor == "function" && !Ko(o) ? ba(Iu(o)) : {};
      }
      function N$(o, c, p) {
        var m = o.constructor;
        switch (c) {
          case ko:
            return dd(o);
          case we:
          case ne:
            return new m(+o);
          case la:
            return b$(o, p);
          case mf:
          case bf:
          case xf:
          case wf:
          case _f:
          case Of:
          case Af:
          case Sf:
          case Pf:
            return tm(o, p);
          case be:
            return new m();
          case We:
          case yn:
            return new m(o);
          case nr:
            return x$(o);
          case yt:
            return new m();
          case Yn:
            return w$(o);
        }
      }
      function D$(o, c) {
        var p = c.length;
        if (!p)
          return o;
        var m = p - 1;
        return c[m] = (p > 1 ? "& " : "") + c[m], c = c.join(p > 2 ? ", " : " "), o.replace(BP, `{
/* [wrapped with ` + c + `] */
`);
      }
      function L$(o) {
        return Ce(o) || Ri(o) || !!(Ay && o && o[Ay]);
      }
      function On(o, c) {
        var p = typeof o;
        return c = c ?? V, !!c && (p == "number" || p != "symbol" && XP.test(o)) && o > -1 && o % 1 == 0 && o < c;
      }
      function zt(o, c, p) {
        if (!pt(p))
          return !1;
        var m = typeof c;
        return (m == "number" ? Xt(p) && On(c, p.length) : m == "string" && c in p) ? Wr(p[c], o) : !1;
      }
      function xd(o, c) {
        if (Ce(o))
          return !1;
        var p = typeof o;
        return p == "number" || p == "symbol" || p == "boolean" || o == null || sr(o) ? !0 : RP.test(o) || !jP.test(o) || c != null && o in et(c);
      }
      function B$(o) {
        var c = typeof o;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? o !== "__proto__" : o === null;
      }
      function wd(o) {
        var c = Zu(o), p = T[c];
        if (typeof p != "function" || !(c in Be.prototype))
          return !1;
        if (o === p)
          return !0;
        var m = yd(p);
        return !!m && o === m[0];
      }
      function F$(o) {
        return !!xy && xy in o;
      }
      var W$ = Eu ? An : Ld;
      function Ko(o) {
        var c = o && o.constructor, p = typeof c == "function" && c.prototype || ga;
        return o === p;
      }
      function xm(o) {
        return o === o && !pt(o);
      }
      function wm(o, c) {
        return function(p) {
          return p == null ? !1 : p[o] === c && (c !== r || o in et(p));
        };
      }
      function z$(o) {
        var c = nc(o, function(m) {
          return p.size === f && p.clear(), m;
        }), p = c.cache;
        return c;
      }
      function U$(o, c) {
        var p = o[1], m = c[1], P = p | m, $ = P < (b | A | C), I = m == C && p == S || m == C && p == M && o[7].length <= c[8] || m == (C | M) && c[7].length <= c[8] && p == S;
        if (!($ || I))
          return o;
        m & b && (o[2] = c[2], P |= p & b ? 0 : O);
        var R = c[3];
        if (R) {
          var W = o[3];
          o[3] = W ? nm(W, R, c[4]) : R, o[4] = W ? Qn(o[3], d) : c[4];
        }
        return R = c[5], R && (W = o[5], o[5] = W ? im(W, R, c[6]) : R, o[6] = W ? Qn(o[5], d) : c[6]), R = c[7], R && (o[7] = R), m & C && (o[8] = o[8] == null ? c[8] : Dt(o[8], c[8])), o[9] == null && (o[9] = c[9]), o[0] = c[0], o[1] = P, o;
      }
      function H$(o) {
        var c = [];
        if (o != null)
          for (var p in et(o))
            c.push(p);
        return c;
      }
      function G$(o) {
        return $u.call(o);
      }
      function _m(o, c, p) {
        return c = Ot(c === r ? o.length - 1 : c, 0), function() {
          for (var m = arguments, P = -1, $ = Ot(m.length - c, 0), I = Y($); ++P < $; )
            I[P] = m[c + P];
          P = -1;
          for (var R = Y(c + 1); ++P < c; )
            R[P] = m[P];
          return R[c] = p(I), ir(o, this, R);
        };
      }
      function Om(o, c) {
        return c.length < 2 ? o : Ii(o, Ar(c, 0, -1));
      }
      function K$(o, c) {
        for (var p = o.length, m = Dt(c.length, p), P = Yt(o); m--; ) {
          var $ = c[m];
          o[m] = On($, p) ? P[$] : r;
        }
        return o;
      }
      function _d(o, c) {
        if (!(c === "constructor" && typeof o[c] == "function") && c != "__proto__")
          return o[c];
      }
      var Am = Pm(qy), qo = sT || function(o, c) {
        return jt.setTimeout(o, c);
      }, Od = Pm(v$);
      function Sm(o, c, p) {
        var m = c + "";
        return Od(o, D$(m, q$(j$(m), p)));
      }
      function Pm(o) {
        var c = 0, p = 0;
        return function() {
          var m = fT(), P = U - (m - p);
          if (p = m, P > 0) {
            if (++c >= N)
              return arguments[0];
          } else
            c = 0;
          return o.apply(r, arguments);
        };
      }
      function Qu(o, c) {
        var p = -1, m = o.length, P = m - 1;
        for (c = c === r ? m : c; ++p < c; ) {
          var $ = ad(p, P), I = o[$];
          o[$] = o[p], o[p] = I;
        }
        return o.length = c, o;
      }
      var Em = z$(function(o) {
        var c = [];
        return o.charCodeAt(0) === 46 && c.push(""), o.replace(NP, function(p, m, P, $) {
          c.push(P ? $.replace(HP, "$1") : m || p);
        }), c;
      });
      function nn(o) {
        if (typeof o == "string" || sr(o))
          return o;
        var c = o + "";
        return c == "0" && 1 / o == -Z ? "-0" : c;
      }
      function ji(o) {
        if (o != null) {
          try {
            return Tu.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function q$(o, c) {
        return xr(he, function(p) {
          var m = "_." + p[0];
          c & p[1] && !Ou(o, m) && o.push(m);
        }), o.sort();
      }
      function Tm(o) {
        if (o instanceof Be)
          return o.clone();
        var c = new _r(o.__wrapped__, o.__chain__);
        return c.__actions__ = Yt(o.__actions__), c.__index__ = o.__index__, c.__values__ = o.__values__, c;
      }
      function V$(o, c, p) {
        (p ? zt(o, c, p) : c === r) ? c = 1 : c = Ot(Ie(c), 0);
        var m = o == null ? 0 : o.length;
        if (!m || c < 1)
          return [];
        for (var P = 0, $ = 0, I = Y(Ru(m / c)); P < m; )
          I[$++] = Ar(o, P, P += c);
        return I;
      }
      function Y$(o) {
        for (var c = -1, p = o == null ? 0 : o.length, m = 0, P = []; ++c < p; ) {
          var $ = o[c];
          $ && (P[m++] = $);
        }
        return P;
      }
      function X$() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var c = Y(o - 1), p = arguments[0], m = o; m--; )
          c[m - 1] = arguments[m];
        return Jn(Ce(p) ? Yt(p) : [p], Rt(c, 1));
      }
      var Z$ = Ne(function(o, c) {
        return mt(o) ? Wo(o, Rt(c, 1, mt, !0)) : [];
      }), J$ = Ne(function(o, c) {
        var p = Sr(c);
        return mt(p) && (p = r), mt(o) ? Wo(o, Rt(c, 1, mt, !0), _e(p, 2)) : [];
      }), Q$ = Ne(function(o, c) {
        var p = Sr(c);
        return mt(p) && (p = r), mt(o) ? Wo(o, Rt(c, 1, mt, !0), r, p) : [];
      });
      function eC(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), Ar(o, c < 0 ? 0 : c, m)) : [];
      }
      function tC(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), c = m - c, Ar(o, 0, c < 0 ? 0 : c)) : [];
      }
      function rC(o, c) {
        return o && o.length ? Gu(o, _e(c, 3), !0, !0) : [];
      }
      function nC(o, c) {
        return o && o.length ? Gu(o, _e(c, 3), !0) : [];
      }
      function iC(o, c, p, m) {
        var P = o == null ? 0 : o.length;
        return P ? (p && typeof p != "number" && zt(o, c, p) && (p = 0, m = P), XT(o, c, p, m)) : [];
      }
      function $m(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = Ot(m + P, 0)), Au(o, _e(c, 3), P);
      }
      function Cm(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m - 1;
        return p !== r && (P = Ie(p), P = p < 0 ? Ot(m + P, 0) : Dt(P, m - 1)), Au(o, _e(c, 3), P, !0);
      }
      function Mm(o) {
        var c = o == null ? 0 : o.length;
        return c ? Rt(o, 1) : [];
      }
      function aC(o) {
        var c = o == null ? 0 : o.length;
        return c ? Rt(o, Z) : [];
      }
      function oC(o, c) {
        var p = o == null ? 0 : o.length;
        return p ? (c = c === r ? 1 : Ie(c), Rt(o, c)) : [];
      }
      function sC(o) {
        for (var c = -1, p = o == null ? 0 : o.length, m = {}; ++c < p; ) {
          var P = o[c];
          m[P[0]] = P[1];
        }
        return m;
      }
      function Im(o) {
        return o && o.length ? o[0] : r;
      }
      function uC(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = Ot(m + P, 0)), da(o, c, P);
      }
      function cC(o) {
        var c = o == null ? 0 : o.length;
        return c ? Ar(o, 0, -1) : [];
      }
      var lC = Ne(function(o) {
        var c = ft(o, ld);
        return c.length && c[0] === o[0] ? ed(c) : [];
      }), fC = Ne(function(o) {
        var c = Sr(o), p = ft(o, ld);
        return c === Sr(p) ? c = r : p.pop(), p.length && p[0] === o[0] ? ed(p, _e(c, 2)) : [];
      }), dC = Ne(function(o) {
        var c = Sr(o), p = ft(o, ld);
        return c = typeof c == "function" ? c : r, c && p.pop(), p.length && p[0] === o[0] ? ed(p, r, c) : [];
      });
      function hC(o, c) {
        return o == null ? "" : cT.call(o, c);
      }
      function Sr(o) {
        var c = o == null ? 0 : o.length;
        return c ? o[c - 1] : r;
      }
      function pC(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m;
        return p !== r && (P = Ie(p), P = P < 0 ? Ot(m + P, 0) : Dt(P, m - 1)), c === c ? qE(o, c, P) : Au(o, dy, P, !0);
      }
      function vC(o, c) {
        return o && o.length ? Uy(o, Ie(c)) : r;
      }
      var gC = Ne(km);
      function km(o, c) {
        return o && o.length && c && c.length ? id(o, c) : o;
      }
      function yC(o, c, p) {
        return o && o.length && c && c.length ? id(o, c, _e(p, 2)) : o;
      }
      function mC(o, c, p) {
        return o && o.length && c && c.length ? id(o, c, r, p) : o;
      }
      var bC = _n(function(o, c) {
        var p = o == null ? 0 : o.length, m = Xf(o, c);
        return Ky(o, ft(c, function(P) {
          return On(P, p) ? +P : P;
        }).sort(rm)), m;
      });
      function xC(o, c) {
        var p = [];
        if (!(o && o.length))
          return p;
        var m = -1, P = [], $ = o.length;
        for (c = _e(c, 3); ++m < $; ) {
          var I = o[m];
          c(I, m, o) && (p.push(I), P.push(m));
        }
        return Ky(o, P), p;
      }
      function Ad(o) {
        return o == null ? o : hT.call(o);
      }
      function wC(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (p && typeof p != "number" && zt(o, c, p) ? (c = 0, p = m) : (c = c == null ? 0 : Ie(c), p = p === r ? m : Ie(p)), Ar(o, c, p)) : [];
      }
      function _C(o, c) {
        return Hu(o, c);
      }
      function OC(o, c, p) {
        return sd(o, c, _e(p, 2));
      }
      function AC(o, c) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Hu(o, c);
          if (m < p && Wr(o[m], c))
            return m;
        }
        return -1;
      }
      function SC(o, c) {
        return Hu(o, c, !0);
      }
      function PC(o, c, p) {
        return sd(o, c, _e(p, 2), !0);
      }
      function EC(o, c) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Hu(o, c, !0) - 1;
          if (Wr(o[m], c))
            return m;
        }
        return -1;
      }
      function TC(o) {
        return o && o.length ? Vy(o) : [];
      }
      function $C(o, c) {
        return o && o.length ? Vy(o, _e(c, 2)) : [];
      }
      function CC(o) {
        var c = o == null ? 0 : o.length;
        return c ? Ar(o, 1, c) : [];
      }
      function MC(o, c, p) {
        return o && o.length ? (c = p || c === r ? 1 : Ie(c), Ar(o, 0, c < 0 ? 0 : c)) : [];
      }
      function IC(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), c = m - c, Ar(o, c < 0 ? 0 : c, m)) : [];
      }
      function kC(o, c) {
        return o && o.length ? Gu(o, _e(c, 3), !1, !0) : [];
      }
      function jC(o, c) {
        return o && o.length ? Gu(o, _e(c, 3)) : [];
      }
      var RC = Ne(function(o) {
        return ri(Rt(o, 1, mt, !0));
      }), NC = Ne(function(o) {
        var c = Sr(o);
        return mt(c) && (c = r), ri(Rt(o, 1, mt, !0), _e(c, 2));
      }), DC = Ne(function(o) {
        var c = Sr(o);
        return c = typeof c == "function" ? c : r, ri(Rt(o, 1, mt, !0), r, c);
      });
      function LC(o) {
        return o && o.length ? ri(o) : [];
      }
      function BC(o, c) {
        return o && o.length ? ri(o, _e(c, 2)) : [];
      }
      function FC(o, c) {
        return c = typeof c == "function" ? c : r, o && o.length ? ri(o, r, c) : [];
      }
      function Sd(o) {
        if (!(o && o.length))
          return [];
        var c = 0;
        return o = Zn(o, function(p) {
          if (mt(p))
            return c = Ot(p.length, c), !0;
        }), zf(c, function(p) {
          return ft(o, Bf(p));
        });
      }
      function jm(o, c) {
        if (!(o && o.length))
          return [];
        var p = Sd(o);
        return c == null ? p : ft(p, function(m) {
          return ir(c, r, m);
        });
      }
      var WC = Ne(function(o, c) {
        return mt(o) ? Wo(o, c) : [];
      }), zC = Ne(function(o) {
        return cd(Zn(o, mt));
      }), UC = Ne(function(o) {
        var c = Sr(o);
        return mt(c) && (c = r), cd(Zn(o, mt), _e(c, 2));
      }), HC = Ne(function(o) {
        var c = Sr(o);
        return c = typeof c == "function" ? c : r, cd(Zn(o, mt), r, c);
      }), GC = Ne(Sd);
      function KC(o, c) {
        return Jy(o || [], c || [], Fo);
      }
      function qC(o, c) {
        return Jy(o || [], c || [], Ho);
      }
      var VC = Ne(function(o) {
        var c = o.length, p = c > 1 ? o[c - 1] : r;
        return p = typeof p == "function" ? (o.pop(), p) : r, jm(o, p);
      });
      function Rm(o) {
        var c = T(o);
        return c.__chain__ = !0, c;
      }
      function YC(o, c) {
        return c(o), o;
      }
      function ec(o, c) {
        return c(o);
      }
      var XC = _n(function(o) {
        var c = o.length, p = c ? o[0] : 0, m = this.__wrapped__, P = function($) {
          return Xf($, o);
        };
        return c > 1 || this.__actions__.length || !(m instanceof Be) || !On(p) ? this.thru(P) : (m = m.slice(p, +p + (c ? 1 : 0)), m.__actions__.push({
          func: ec,
          args: [P],
          thisArg: r
        }), new _r(m, this.__chain__).thru(function($) {
          return c && !$.length && $.push(r), $;
        }));
      });
      function ZC() {
        return Rm(this);
      }
      function JC() {
        return new _r(this.value(), this.__chain__);
      }
      function QC() {
        this.__values__ === r && (this.__values__ = Ym(this.value()));
        var o = this.__index__ >= this.__values__.length, c = o ? r : this.__values__[this.__index__++];
        return { done: o, value: c };
      }
      function eM() {
        return this;
      }
      function tM(o) {
        for (var c, p = this; p instanceof Bu; ) {
          var m = Tm(p);
          m.__index__ = 0, m.__values__ = r, c ? P.__wrapped__ = m : c = m;
          var P = m;
          p = p.__wrapped__;
        }
        return P.__wrapped__ = o, c;
      }
      function rM() {
        var o = this.__wrapped__;
        if (o instanceof Be) {
          var c = o;
          return this.__actions__.length && (c = new Be(this)), c = c.reverse(), c.__actions__.push({
            func: ec,
            args: [Ad],
            thisArg: r
          }), new _r(c, this.__chain__);
        }
        return this.thru(Ad);
      }
      function nM() {
        return Zy(this.__wrapped__, this.__actions__);
      }
      var iM = Ku(function(o, c, p) {
        Xe.call(o, p) ? ++o[p] : xn(o, p, 1);
      });
      function aM(o, c, p) {
        var m = Ce(o) ? ly : YT;
        return p && zt(o, c, p) && (c = r), m(o, _e(c, 3));
      }
      function oM(o, c) {
        var p = Ce(o) ? Zn : jy;
        return p(o, _e(c, 3));
      }
      var sM = um($m), uM = um(Cm);
      function cM(o, c) {
        return Rt(tc(o, c), 1);
      }
      function lM(o, c) {
        return Rt(tc(o, c), Z);
      }
      function fM(o, c, p) {
        return p = p === r ? 1 : Ie(p), Rt(tc(o, c), p);
      }
      function Nm(o, c) {
        var p = Ce(o) ? xr : ti;
        return p(o, _e(c, 3));
      }
      function Dm(o, c) {
        var p = Ce(o) ? CE : ky;
        return p(o, _e(c, 3));
      }
      var dM = Ku(function(o, c, p) {
        Xe.call(o, p) ? o[p].push(c) : xn(o, p, [c]);
      });
      function hM(o, c, p, m) {
        o = Xt(o) ? o : Aa(o), p = p && !m ? Ie(p) : 0;
        var P = o.length;
        return p < 0 && (p = Ot(P + p, 0)), oc(o) ? p <= P && o.indexOf(c, p) > -1 : !!P && da(o, c, p) > -1;
      }
      var pM = Ne(function(o, c, p) {
        var m = -1, P = typeof c == "function", $ = Xt(o) ? Y(o.length) : [];
        return ti(o, function(I) {
          $[++m] = P ? ir(c, I, p) : zo(I, c, p);
        }), $;
      }), vM = Ku(function(o, c, p) {
        xn(o, p, c);
      });
      function tc(o, c) {
        var p = Ce(o) ? ft : Fy;
        return p(o, _e(c, 3));
      }
      function gM(o, c, p, m) {
        return o == null ? [] : (Ce(c) || (c = c == null ? [] : [c]), p = m ? r : p, Ce(p) || (p = p == null ? [] : [p]), Hy(o, c, p));
      }
      var yM = Ku(function(o, c, p) {
        o[p ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function mM(o, c, p) {
        var m = Ce(o) ? Df : py, P = arguments.length < 3;
        return m(o, _e(c, 4), p, P, ti);
      }
      function bM(o, c, p) {
        var m = Ce(o) ? ME : py, P = arguments.length < 3;
        return m(o, _e(c, 4), p, P, ky);
      }
      function xM(o, c) {
        var p = Ce(o) ? Zn : jy;
        return p(o, ic(_e(c, 3)));
      }
      function wM(o) {
        var c = Ce(o) ? $y : h$;
        return c(o);
      }
      function _M(o, c, p) {
        (p ? zt(o, c, p) : c === r) ? c = 1 : c = Ie(c);
        var m = Ce(o) ? HT : p$;
        return m(o, c);
      }
      function OM(o) {
        var c = Ce(o) ? GT : g$;
        return c(o);
      }
      function AM(o) {
        if (o == null)
          return 0;
        if (Xt(o))
          return oc(o) ? pa(o) : o.length;
        var c = Lt(o);
        return c == be || c == yt ? o.size : rd(o).length;
      }
      function SM(o, c, p) {
        var m = Ce(o) ? Lf : y$;
        return p && zt(o, c, p) && (c = r), m(o, _e(c, 3));
      }
      var PM = Ne(function(o, c) {
        if (o == null)
          return [];
        var p = c.length;
        return p > 1 && zt(o, c[0], c[1]) ? c = [] : p > 2 && zt(c[0], c[1], c[2]) && (c = [c[0]]), Hy(o, Rt(c, 1), []);
      }), rc = oT || function() {
        return jt.Date.now();
      };
      function EM(o, c) {
        if (typeof c != "function")
          throw new wr(s);
        return o = Ie(o), function() {
          if (--o < 1)
            return c.apply(this, arguments);
        };
      }
      function Lm(o, c, p) {
        return c = p ? r : c, c = o && c == null ? o.length : c, wn(o, C, r, r, r, r, c);
      }
      function Bm(o, c) {
        var p;
        if (typeof c != "function")
          throw new wr(s);
        return o = Ie(o), function() {
          return --o > 0 && (p = c.apply(this, arguments)), o <= 1 && (c = r), p;
        };
      }
      var Pd = Ne(function(o, c, p) {
        var m = b;
        if (p.length) {
          var P = Qn(p, _a(Pd));
          m |= x;
        }
        return wn(o, m, c, p, P);
      }), Fm = Ne(function(o, c, p) {
        var m = b | A;
        if (p.length) {
          var P = Qn(p, _a(Fm));
          m |= x;
        }
        return wn(c, m, o, p, P);
      });
      function Wm(o, c, p) {
        c = p ? r : c;
        var m = wn(o, S, r, r, r, r, r, c);
        return m.placeholder = Wm.placeholder, m;
      }
      function zm(o, c, p) {
        c = p ? r : c;
        var m = wn(o, _, r, r, r, r, r, c);
        return m.placeholder = zm.placeholder, m;
      }
      function Um(o, c, p) {
        var m, P, $, I, R, W, ee = 0, te = !1, ie = !1, le = !0;
        if (typeof o != "function")
          throw new wr(s);
        c = Pr(c) || 0, pt(p) && (te = !!p.leading, ie = "maxWait" in p, $ = ie ? Ot(Pr(p.maxWait) || 0, c) : $, le = "trailing" in p ? !!p.trailing : le);
        function ve(bt) {
          var zr = m, Pn = P;
          return m = P = r, ee = bt, I = o.apply(Pn, zr), I;
        }
        function Oe(bt) {
          return ee = bt, R = qo(De, c), te ? ve(bt) : I;
        }
        function Re(bt) {
          var zr = bt - W, Pn = bt - ee, ub = c - zr;
          return ie ? Dt(ub, $ - Pn) : ub;
        }
        function Ae(bt) {
          var zr = bt - W, Pn = bt - ee;
          return W === r || zr >= c || zr < 0 || ie && Pn >= $;
        }
        function De() {
          var bt = rc();
          if (Ae(bt))
            return Fe(bt);
          R = qo(De, Re(bt));
        }
        function Fe(bt) {
          return R = r, le && m ? ve(bt) : (m = P = r, I);
        }
        function ur() {
          R !== r && Qy(R), ee = 0, m = W = P = R = r;
        }
        function Ut() {
          return R === r ? I : Fe(rc());
        }
        function cr() {
          var bt = rc(), zr = Ae(bt);
          if (m = arguments, P = this, W = bt, zr) {
            if (R === r)
              return Oe(W);
            if (ie)
              return Qy(R), R = qo(De, c), ve(W);
          }
          return R === r && (R = qo(De, c)), I;
        }
        return cr.cancel = ur, cr.flush = Ut, cr;
      }
      var TM = Ne(function(o, c) {
        return Iy(o, 1, c);
      }), $M = Ne(function(o, c, p) {
        return Iy(o, Pr(c) || 0, p);
      });
      function CM(o) {
        return wn(o, F);
      }
      function nc(o, c) {
        if (typeof o != "function" || c != null && typeof c != "function")
          throw new wr(s);
        var p = function() {
          var m = arguments, P = c ? c.apply(this, m) : m[0], $ = p.cache;
          if ($.has(P))
            return $.get(P);
          var I = o.apply(this, m);
          return p.cache = $.set(P, I) || $, I;
        };
        return p.cache = new (nc.Cache || bn)(), p;
      }
      nc.Cache = bn;
      function ic(o) {
        if (typeof o != "function")
          throw new wr(s);
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
      function MM(o) {
        return Bm(2, o);
      }
      var IM = m$(function(o, c) {
        c = c.length == 1 && Ce(c[0]) ? ft(c[0], ar(_e())) : ft(Rt(c, 1), ar(_e()));
        var p = c.length;
        return Ne(function(m) {
          for (var P = -1, $ = Dt(m.length, p); ++P < $; )
            m[P] = c[P].call(this, m[P]);
          return ir(o, this, m);
        });
      }), Ed = Ne(function(o, c) {
        var p = Qn(c, _a(Ed));
        return wn(o, x, r, c, p);
      }), Hm = Ne(function(o, c) {
        var p = Qn(c, _a(Hm));
        return wn(o, E, r, c, p);
      }), kM = _n(function(o, c) {
        return wn(o, M, r, r, r, c);
      });
      function jM(o, c) {
        if (typeof o != "function")
          throw new wr(s);
        return c = c === r ? c : Ie(c), Ne(o, c);
      }
      function RM(o, c) {
        if (typeof o != "function")
          throw new wr(s);
        return c = c == null ? 0 : Ot(Ie(c), 0), Ne(function(p) {
          var m = p[c], P = ii(p, 0, c);
          return m && Jn(P, m), ir(o, this, P);
        });
      }
      function NM(o, c, p) {
        var m = !0, P = !0;
        if (typeof o != "function")
          throw new wr(s);
        return pt(p) && (m = "leading" in p ? !!p.leading : m, P = "trailing" in p ? !!p.trailing : P), Um(o, c, {
          leading: m,
          maxWait: c,
          trailing: P
        });
      }
      function DM(o) {
        return Lm(o, 1);
      }
      function LM(o, c) {
        return Ed(fd(c), o);
      }
      function BM() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return Ce(o) ? o : [o];
      }
      function FM(o) {
        return Or(o, g);
      }
      function WM(o, c) {
        return c = typeof c == "function" ? c : r, Or(o, g, c);
      }
      function zM(o) {
        return Or(o, h | g);
      }
      function UM(o, c) {
        return c = typeof c == "function" ? c : r, Or(o, h | g, c);
      }
      function HM(o, c) {
        return c == null || My(o, c, Ct(c));
      }
      function Wr(o, c) {
        return o === c || o !== o && c !== c;
      }
      var GM = Xu(Qf), KM = Xu(function(o, c) {
        return o >= c;
      }), Ri = Dy(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Dy : function(o) {
        return gt(o) && Xe.call(o, "callee") && !Oy.call(o, "callee");
      }, Ce = Y.isArray, qM = iy ? ar(iy) : t$;
      function Xt(o) {
        return o != null && ac(o.length) && !An(o);
      }
      function mt(o) {
        return gt(o) && Xt(o);
      }
      function VM(o) {
        return o === !0 || o === !1 || gt(o) && Wt(o) == we;
      }
      var ai = uT || Ld, YM = ay ? ar(ay) : r$;
      function XM(o) {
        return gt(o) && o.nodeType === 1 && !Vo(o);
      }
      function ZM(o) {
        if (o == null)
          return !0;
        if (Xt(o) && (Ce(o) || typeof o == "string" || typeof o.splice == "function" || ai(o) || Oa(o) || Ri(o)))
          return !o.length;
        var c = Lt(o);
        if (c == be || c == yt)
          return !o.size;
        if (Ko(o))
          return !rd(o).length;
        for (var p in o)
          if (Xe.call(o, p))
            return !1;
        return !0;
      }
      function JM(o, c) {
        return Uo(o, c);
      }
      function QM(o, c, p) {
        p = typeof p == "function" ? p : r;
        var m = p ? p(o, c) : r;
        return m === r ? Uo(o, c, r, p) : !!m;
      }
      function Td(o) {
        if (!gt(o))
          return !1;
        var c = Wt(o);
        return c == pe || c == ue || typeof o.message == "string" && typeof o.name == "string" && !Vo(o);
      }
      function eI(o) {
        return typeof o == "number" && Sy(o);
      }
      function An(o) {
        if (!pt(o))
          return !1;
        var c = Wt(o);
        return c == j || c == Ee || c == ye || c == Lr;
      }
      function Gm(o) {
        return typeof o == "number" && o == Ie(o);
      }
      function ac(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= V;
      }
      function pt(o) {
        var c = typeof o;
        return o != null && (c == "object" || c == "function");
      }
      function gt(o) {
        return o != null && typeof o == "object";
      }
      var Km = oy ? ar(oy) : i$;
      function tI(o, c) {
        return o === c || td(o, c, md(c));
      }
      function rI(o, c, p) {
        return p = typeof p == "function" ? p : r, td(o, c, md(c), p);
      }
      function nI(o) {
        return qm(o) && o != +o;
      }
      function iI(o) {
        if (W$(o))
          throw new $e(a);
        return Ly(o);
      }
      function aI(o) {
        return o === null;
      }
      function oI(o) {
        return o == null;
      }
      function qm(o) {
        return typeof o == "number" || gt(o) && Wt(o) == We;
      }
      function Vo(o) {
        if (!gt(o) || Wt(o) != at)
          return !1;
        var c = Iu(o);
        if (c === null)
          return !0;
        var p = Xe.call(c, "constructor") && c.constructor;
        return typeof p == "function" && p instanceof p && Tu.call(p) == rT;
      }
      var $d = sy ? ar(sy) : a$;
      function sI(o) {
        return Gm(o) && o >= -V && o <= V;
      }
      var Vm = uy ? ar(uy) : o$;
      function oc(o) {
        return typeof o == "string" || !Ce(o) && gt(o) && Wt(o) == yn;
      }
      function sr(o) {
        return typeof o == "symbol" || gt(o) && Wt(o) == Yn;
      }
      var Oa = cy ? ar(cy) : s$;
      function uI(o) {
        return o === r;
      }
      function cI(o) {
        return gt(o) && Lt(o) == Xn;
      }
      function lI(o) {
        return gt(o) && Wt(o) == bu;
      }
      var fI = Xu(nd), dI = Xu(function(o, c) {
        return o <= c;
      });
      function Ym(o) {
        if (!o)
          return [];
        if (Xt(o))
          return oc(o) ? Br(o) : Yt(o);
        if (Ro && o[Ro])
          return HE(o[Ro]());
        var c = Lt(o), p = c == be ? Hf : c == yt ? Su : Aa;
        return p(o);
      }
      function Sn(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Pr(o), o === Z || o === -Z) {
          var c = o < 0 ? -1 : 1;
          return c * se;
        }
        return o === o ? o : 0;
      }
      function Ie(o) {
        var c = Sn(o), p = c % 1;
        return c === c ? p ? c - p : c : 0;
      }
      function Xm(o) {
        return o ? Mi(Ie(o), 0, X) : 0;
      }
      function Pr(o) {
        if (typeof o == "number")
          return o;
        if (sr(o))
          return G;
        if (pt(o)) {
          var c = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = pt(c) ? c + "" : c;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = vy(o);
        var p = qP.test(o);
        return p || YP.test(o) ? EE(o.slice(2), p ? 2 : 8) : KP.test(o) ? G : +o;
      }
      function Zm(o) {
        return rn(o, Zt(o));
      }
      function hI(o) {
        return o ? Mi(Ie(o), -V, V) : o === 0 ? o : 0;
      }
      function Ge(o) {
        return o == null ? "" : or(o);
      }
      var pI = xa(function(o, c) {
        if (Ko(c) || Xt(c)) {
          rn(c, Ct(c), o);
          return;
        }
        for (var p in c)
          Xe.call(c, p) && Fo(o, p, c[p]);
      }), Jm = xa(function(o, c) {
        rn(c, Zt(c), o);
      }), sc = xa(function(o, c, p, m) {
        rn(c, Zt(c), o, m);
      }), vI = xa(function(o, c, p, m) {
        rn(c, Ct(c), o, m);
      }), gI = _n(Xf);
      function yI(o, c) {
        var p = ba(o);
        return c == null ? p : Cy(p, c);
      }
      var mI = Ne(function(o, c) {
        o = et(o);
        var p = -1, m = c.length, P = m > 2 ? c[2] : r;
        for (P && zt(c[0], c[1], P) && (m = 1); ++p < m; )
          for (var $ = c[p], I = Zt($), R = -1, W = I.length; ++R < W; ) {
            var ee = I[R], te = o[ee];
            (te === r || Wr(te, ga[ee]) && !Xe.call(o, ee)) && (o[ee] = $[ee]);
          }
        return o;
      }), bI = Ne(function(o) {
        return o.push(r, vm), ir(Qm, r, o);
      });
      function xI(o, c) {
        return fy(o, _e(c, 3), tn);
      }
      function wI(o, c) {
        return fy(o, _e(c, 3), Jf);
      }
      function _I(o, c) {
        return o == null ? o : Zf(o, _e(c, 3), Zt);
      }
      function OI(o, c) {
        return o == null ? o : Ry(o, _e(c, 3), Zt);
      }
      function AI(o, c) {
        return o && tn(o, _e(c, 3));
      }
      function SI(o, c) {
        return o && Jf(o, _e(c, 3));
      }
      function PI(o) {
        return o == null ? [] : zu(o, Ct(o));
      }
      function EI(o) {
        return o == null ? [] : zu(o, Zt(o));
      }
      function Cd(o, c, p) {
        var m = o == null ? r : Ii(o, c);
        return m === r ? p : m;
      }
      function TI(o, c) {
        return o != null && mm(o, c, ZT);
      }
      function Md(o, c) {
        return o != null && mm(o, c, JT);
      }
      var $I = lm(function(o, c, p) {
        c != null && typeof c.toString != "function" && (c = $u.call(c)), o[c] = p;
      }, kd(Jt)), CI = lm(function(o, c, p) {
        c != null && typeof c.toString != "function" && (c = $u.call(c)), Xe.call(o, c) ? o[c].push(p) : o[c] = [p];
      }, _e), MI = Ne(zo);
      function Ct(o) {
        return Xt(o) ? Ty(o) : rd(o);
      }
      function Zt(o) {
        return Xt(o) ? Ty(o, !0) : u$(o);
      }
      function II(o, c) {
        var p = {};
        return c = _e(c, 3), tn(o, function(m, P, $) {
          xn(p, c(m, P, $), m);
        }), p;
      }
      function kI(o, c) {
        var p = {};
        return c = _e(c, 3), tn(o, function(m, P, $) {
          xn(p, P, c(m, P, $));
        }), p;
      }
      var jI = xa(function(o, c, p) {
        Uu(o, c, p);
      }), Qm = xa(function(o, c, p, m) {
        Uu(o, c, p, m);
      }), RI = _n(function(o, c) {
        var p = {};
        if (o == null)
          return p;
        var m = !1;
        c = ft(c, function($) {
          return $ = ni($, o), m || (m = $.length > 1), $;
        }), rn(o, gd(o), p), m && (p = Or(p, h | v | g, $$));
        for (var P = c.length; P--; )
          ud(p, c[P]);
        return p;
      });
      function NI(o, c) {
        return eb(o, ic(_e(c)));
      }
      var DI = _n(function(o, c) {
        return o == null ? {} : l$(o, c);
      });
      function eb(o, c) {
        if (o == null)
          return {};
        var p = ft(gd(o), function(m) {
          return [m];
        });
        return c = _e(c), Gy(o, p, function(m, P) {
          return c(m, P[0]);
        });
      }
      function LI(o, c, p) {
        c = ni(c, o);
        var m = -1, P = c.length;
        for (P || (P = 1, o = r); ++m < P; ) {
          var $ = o == null ? r : o[nn(c[m])];
          $ === r && (m = P, $ = p), o = An($) ? $.call(o) : $;
        }
        return o;
      }
      function BI(o, c, p) {
        return o == null ? o : Ho(o, c, p);
      }
      function FI(o, c, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Ho(o, c, p, m);
      }
      var tb = hm(Ct), rb = hm(Zt);
      function WI(o, c, p) {
        var m = Ce(o), P = m || ai(o) || Oa(o);
        if (c = _e(c, 4), p == null) {
          var $ = o && o.constructor;
          P ? p = m ? new $() : [] : pt(o) ? p = An($) ? ba(Iu(o)) : {} : p = {};
        }
        return (P ? xr : tn)(o, function(I, R, W) {
          return c(p, I, R, W);
        }), p;
      }
      function zI(o, c) {
        return o == null ? !0 : ud(o, c);
      }
      function UI(o, c, p) {
        return o == null ? o : Xy(o, c, fd(p));
      }
      function HI(o, c, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Xy(o, c, fd(p), m);
      }
      function Aa(o) {
        return o == null ? [] : Uf(o, Ct(o));
      }
      function GI(o) {
        return o == null ? [] : Uf(o, Zt(o));
      }
      function KI(o, c, p) {
        return p === r && (p = c, c = r), p !== r && (p = Pr(p), p = p === p ? p : 0), c !== r && (c = Pr(c), c = c === c ? c : 0), Mi(Pr(o), c, p);
      }
      function qI(o, c, p) {
        return c = Sn(c), p === r ? (p = c, c = 0) : p = Sn(p), o = Pr(o), QT(o, c, p);
      }
      function VI(o, c, p) {
        if (p && typeof p != "boolean" && zt(o, c, p) && (c = p = r), p === r && (typeof c == "boolean" ? (p = c, c = r) : typeof o == "boolean" && (p = o, o = r)), o === r && c === r ? (o = 0, c = 1) : (o = Sn(o), c === r ? (c = o, o = 0) : c = Sn(c)), o > c) {
          var m = o;
          o = c, c = m;
        }
        if (p || o % 1 || c % 1) {
          var P = Py();
          return Dt(o + P * (c - o + PE("1e-" + ((P + "").length - 1))), c);
        }
        return ad(o, c);
      }
      var YI = wa(function(o, c, p) {
        return c = c.toLowerCase(), o + (p ? nb(c) : c);
      });
      function nb(o) {
        return Id(Ge(o).toLowerCase());
      }
      function ib(o) {
        return o = Ge(o), o && o.replace(ZP, BE).replace(gE, "");
      }
      function XI(o, c, p) {
        o = Ge(o), c = or(c);
        var m = o.length;
        p = p === r ? m : Mi(Ie(p), 0, m);
        var P = p;
        return p -= c.length, p >= 0 && o.slice(p, P) == c;
      }
      function ZI(o) {
        return o = Ge(o), o && MP.test(o) ? o.replace(Rg, FE) : o;
      }
      function JI(o) {
        return o = Ge(o), o && DP.test(o) ? o.replace(Ef, "\\$&") : o;
      }
      var QI = wa(function(o, c, p) {
        return o + (p ? "-" : "") + c.toLowerCase();
      }), ek = wa(function(o, c, p) {
        return o + (p ? " " : "") + c.toLowerCase();
      }), tk = sm("toLowerCase");
      function rk(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        if (!c || m >= c)
          return o;
        var P = (c - m) / 2;
        return Yu(Nu(P), p) + o + Yu(Ru(P), p);
      }
      function nk(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        return c && m < c ? o + Yu(c - m, p) : o;
      }
      function ik(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        return c && m < c ? Yu(c - m, p) + o : o;
      }
      function ak(o, c, p) {
        return p || c == null ? c = 0 : c && (c = +c), dT(Ge(o).replace(Tf, ""), c || 0);
      }
      function ok(o, c, p) {
        return (p ? zt(o, c, p) : c === r) ? c = 1 : c = Ie(c), od(Ge(o), c);
      }
      function sk() {
        var o = arguments, c = Ge(o[0]);
        return o.length < 3 ? c : c.replace(o[1], o[2]);
      }
      var uk = wa(function(o, c, p) {
        return o + (p ? "_" : "") + c.toLowerCase();
      });
      function ck(o, c, p) {
        return p && typeof p != "number" && zt(o, c, p) && (c = p = r), p = p === r ? X : p >>> 0, p ? (o = Ge(o), o && (typeof c == "string" || c != null && !$d(c)) && (c = or(c), !c && ha(o)) ? ii(Br(o), 0, p) : o.split(c, p)) : [];
      }
      var lk = wa(function(o, c, p) {
        return o + (p ? " " : "") + Id(c);
      });
      function fk(o, c, p) {
        return o = Ge(o), p = p == null ? 0 : Mi(Ie(p), 0, o.length), c = or(c), o.slice(p, p + c.length) == c;
      }
      function dk(o, c, p) {
        var m = T.templateSettings;
        p && zt(o, c, p) && (c = r), o = Ge(o), c = sc({}, c, m, pm);
        var P = sc({}, c.imports, m.imports, pm), $ = Ct(P), I = Uf(P, $), R, W, ee = 0, te = c.interpolate || xu, ie = "__p += '", le = Gf(
          (c.escape || xu).source + "|" + te.source + "|" + (te === Ng ? GP : xu).source + "|" + (c.evaluate || xu).source + "|$",
          "g"
        ), ve = "//# sourceURL=" + (Xe.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++wE + "]") + `
`;
        o.replace(le, function(Ae, De, Fe, ur, Ut, cr) {
          return Fe || (Fe = ur), ie += o.slice(ee, cr).replace(JP, WE), De && (R = !0, ie += `' +
__e(` + De + `) +
'`), Ut && (W = !0, ie += `';
` + Ut + `;
__p += '`), Fe && (ie += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), ee = cr + Ae.length, Ae;
        }), ie += `';
`;
        var Oe = Xe.call(c, "variable") && c.variable;
        if (!Oe)
          ie = `with (obj) {
` + ie + `
}
`;
        else if (UP.test(Oe))
          throw new $e(u);
        ie = (W ? ie.replace(EP, "") : ie).replace(TP, "$1").replace($P, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (W ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
        var Re = ob(function() {
          return He($, ve + "return " + ie).apply(r, I);
        });
        if (Re.source = ie, Td(Re))
          throw Re;
        return Re;
      }
      function hk(o) {
        return Ge(o).toLowerCase();
      }
      function pk(o) {
        return Ge(o).toUpperCase();
      }
      function vk(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return vy(o);
        if (!o || !(c = or(c)))
          return o;
        var m = Br(o), P = Br(c), $ = gy(m, P), I = yy(m, P) + 1;
        return ii(m, $, I).join("");
      }
      function gk(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return o.slice(0, by(o) + 1);
        if (!o || !(c = or(c)))
          return o;
        var m = Br(o), P = yy(m, Br(c)) + 1;
        return ii(m, 0, P).join("");
      }
      function yk(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return o.replace(Tf, "");
        if (!o || !(c = or(c)))
          return o;
        var m = Br(o), P = gy(m, Br(c));
        return ii(m, P).join("");
      }
      function mk(o, c) {
        var p = D, m = B;
        if (pt(c)) {
          var P = "separator" in c ? c.separator : P;
          p = "length" in c ? Ie(c.length) : p, m = "omission" in c ? or(c.omission) : m;
        }
        o = Ge(o);
        var $ = o.length;
        if (ha(o)) {
          var I = Br(o);
          $ = I.length;
        }
        if (p >= $)
          return o;
        var R = p - pa(m);
        if (R < 1)
          return m;
        var W = I ? ii(I, 0, R).join("") : o.slice(0, R);
        if (P === r)
          return W + m;
        if (I && (R += W.length - R), $d(P)) {
          if (o.slice(R).search(P)) {
            var ee, te = W;
            for (P.global || (P = Gf(P.source, Ge(Dg.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(te); )
              var ie = ee.index;
            W = W.slice(0, ie === r ? R : ie);
          }
        } else if (o.indexOf(or(P), R) != R) {
          var le = W.lastIndexOf(P);
          le > -1 && (W = W.slice(0, le));
        }
        return W + m;
      }
      function bk(o) {
        return o = Ge(o), o && CP.test(o) ? o.replace(jg, VE) : o;
      }
      var xk = wa(function(o, c, p) {
        return o + (p ? " " : "") + c.toUpperCase();
      }), Id = sm("toUpperCase");
      function ab(o, c, p) {
        return o = Ge(o), c = p ? r : c, c === r ? UE(o) ? ZE(o) : jE(o) : o.match(c) || [];
      }
      var ob = Ne(function(o, c) {
        try {
          return ir(o, r, c);
        } catch (p) {
          return Td(p) ? p : new $e(p);
        }
      }), wk = _n(function(o, c) {
        return xr(c, function(p) {
          p = nn(p), xn(o, p, Pd(o[p], o));
        }), o;
      });
      function _k(o) {
        var c = o == null ? 0 : o.length, p = _e();
        return o = c ? ft(o, function(m) {
          if (typeof m[1] != "function")
            throw new wr(s);
          return [p(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var P = -1; ++P < c; ) {
            var $ = o[P];
            if (ir($[0], this, m))
              return ir($[1], this, m);
          }
        });
      }
      function Ok(o) {
        return VT(Or(o, h));
      }
      function kd(o) {
        return function() {
          return o;
        };
      }
      function Ak(o, c) {
        return o == null || o !== o ? c : o;
      }
      var Sk = cm(), Pk = cm(!0);
      function Jt(o) {
        return o;
      }
      function jd(o) {
        return By(typeof o == "function" ? o : Or(o, h));
      }
      function Ek(o) {
        return Wy(Or(o, h));
      }
      function Tk(o, c) {
        return zy(o, Or(c, h));
      }
      var $k = Ne(function(o, c) {
        return function(p) {
          return zo(p, o, c);
        };
      }), Ck = Ne(function(o, c) {
        return function(p) {
          return zo(o, p, c);
        };
      });
      function Rd(o, c, p) {
        var m = Ct(c), P = zu(c, m);
        p == null && !(pt(c) && (P.length || !m.length)) && (p = c, c = o, o = this, P = zu(c, Ct(c)));
        var $ = !(pt(p) && "chain" in p) || !!p.chain, I = An(o);
        return xr(P, function(R) {
          var W = c[R];
          o[R] = W, I && (o.prototype[R] = function() {
            var ee = this.__chain__;
            if ($ || ee) {
              var te = o(this.__wrapped__), ie = te.__actions__ = Yt(this.__actions__);
              return ie.push({ func: W, args: arguments, thisArg: o }), te.__chain__ = ee, te;
            }
            return W.apply(o, Jn([this.value()], arguments));
          });
        }), o;
      }
      function Mk() {
        return jt._ === this && (jt._ = nT), this;
      }
      function Nd() {
      }
      function Ik(o) {
        return o = Ie(o), Ne(function(c) {
          return Uy(c, o);
        });
      }
      var kk = hd(ft), jk = hd(ly), Rk = hd(Lf);
      function sb(o) {
        return xd(o) ? Bf(nn(o)) : f$(o);
      }
      function Nk(o) {
        return function(c) {
          return o == null ? r : Ii(o, c);
        };
      }
      var Dk = fm(), Lk = fm(!0);
      function Dd() {
        return [];
      }
      function Ld() {
        return !1;
      }
      function Bk() {
        return {};
      }
      function Fk() {
        return "";
      }
      function Wk() {
        return !0;
      }
      function zk(o, c) {
        if (o = Ie(o), o < 1 || o > V)
          return [];
        var p = X, m = Dt(o, X);
        c = _e(c), o -= X;
        for (var P = zf(m, c); ++p < o; )
          c(p);
        return P;
      }
      function Uk(o) {
        return Ce(o) ? ft(o, nn) : sr(o) ? [o] : Yt(Em(Ge(o)));
      }
      function Hk(o) {
        var c = ++tT;
        return Ge(o) + c;
      }
      var Gk = Vu(function(o, c) {
        return o + c;
      }, 0), Kk = pd("ceil"), qk = Vu(function(o, c) {
        return o / c;
      }, 1), Vk = pd("floor");
      function Yk(o) {
        return o && o.length ? Wu(o, Jt, Qf) : r;
      }
      function Xk(o, c) {
        return o && o.length ? Wu(o, _e(c, 2), Qf) : r;
      }
      function Zk(o) {
        return hy(o, Jt);
      }
      function Jk(o, c) {
        return hy(o, _e(c, 2));
      }
      function Qk(o) {
        return o && o.length ? Wu(o, Jt, nd) : r;
      }
      function ej(o, c) {
        return o && o.length ? Wu(o, _e(c, 2), nd) : r;
      }
      var tj = Vu(function(o, c) {
        return o * c;
      }, 1), rj = pd("round"), nj = Vu(function(o, c) {
        return o - c;
      }, 0);
      function ij(o) {
        return o && o.length ? Wf(o, Jt) : 0;
      }
      function aj(o, c) {
        return o && o.length ? Wf(o, _e(c, 2)) : 0;
      }
      return T.after = EM, T.ary = Lm, T.assign = pI, T.assignIn = Jm, T.assignInWith = sc, T.assignWith = vI, T.at = gI, T.before = Bm, T.bind = Pd, T.bindAll = wk, T.bindKey = Fm, T.castArray = BM, T.chain = Rm, T.chunk = V$, T.compact = Y$, T.concat = X$, T.cond = _k, T.conforms = Ok, T.constant = kd, T.countBy = iM, T.create = yI, T.curry = Wm, T.curryRight = zm, T.debounce = Um, T.defaults = mI, T.defaultsDeep = bI, T.defer = TM, T.delay = $M, T.difference = Z$, T.differenceBy = J$, T.differenceWith = Q$, T.drop = eC, T.dropRight = tC, T.dropRightWhile = rC, T.dropWhile = nC, T.fill = iC, T.filter = oM, T.flatMap = cM, T.flatMapDeep = lM, T.flatMapDepth = fM, T.flatten = Mm, T.flattenDeep = aC, T.flattenDepth = oC, T.flip = CM, T.flow = Sk, T.flowRight = Pk, T.fromPairs = sC, T.functions = PI, T.functionsIn = EI, T.groupBy = dM, T.initial = cC, T.intersection = lC, T.intersectionBy = fC, T.intersectionWith = dC, T.invert = $I, T.invertBy = CI, T.invokeMap = pM, T.iteratee = jd, T.keyBy = vM, T.keys = Ct, T.keysIn = Zt, T.map = tc, T.mapKeys = II, T.mapValues = kI, T.matches = Ek, T.matchesProperty = Tk, T.memoize = nc, T.merge = jI, T.mergeWith = Qm, T.method = $k, T.methodOf = Ck, T.mixin = Rd, T.negate = ic, T.nthArg = Ik, T.omit = RI, T.omitBy = NI, T.once = MM, T.orderBy = gM, T.over = kk, T.overArgs = IM, T.overEvery = jk, T.overSome = Rk, T.partial = Ed, T.partialRight = Hm, T.partition = yM, T.pick = DI, T.pickBy = eb, T.property = sb, T.propertyOf = Nk, T.pull = gC, T.pullAll = km, T.pullAllBy = yC, T.pullAllWith = mC, T.pullAt = bC, T.range = Dk, T.rangeRight = Lk, T.rearg = kM, T.reject = xM, T.remove = xC, T.rest = jM, T.reverse = Ad, T.sampleSize = _M, T.set = BI, T.setWith = FI, T.shuffle = OM, T.slice = wC, T.sortBy = PM, T.sortedUniq = TC, T.sortedUniqBy = $C, T.split = ck, T.spread = RM, T.tail = CC, T.take = MC, T.takeRight = IC, T.takeRightWhile = kC, T.takeWhile = jC, T.tap = YC, T.throttle = NM, T.thru = ec, T.toArray = Ym, T.toPairs = tb, T.toPairsIn = rb, T.toPath = Uk, T.toPlainObject = Zm, T.transform = WI, T.unary = DM, T.union = RC, T.unionBy = NC, T.unionWith = DC, T.uniq = LC, T.uniqBy = BC, T.uniqWith = FC, T.unset = zI, T.unzip = Sd, T.unzipWith = jm, T.update = UI, T.updateWith = HI, T.values = Aa, T.valuesIn = GI, T.without = WC, T.words = ab, T.wrap = LM, T.xor = zC, T.xorBy = UC, T.xorWith = HC, T.zip = GC, T.zipObject = KC, T.zipObjectDeep = qC, T.zipWith = VC, T.entries = tb, T.entriesIn = rb, T.extend = Jm, T.extendWith = sc, Rd(T, T), T.add = Gk, T.attempt = ob, T.camelCase = YI, T.capitalize = nb, T.ceil = Kk, T.clamp = KI, T.clone = FM, T.cloneDeep = zM, T.cloneDeepWith = UM, T.cloneWith = WM, T.conformsTo = HM, T.deburr = ib, T.defaultTo = Ak, T.divide = qk, T.endsWith = XI, T.eq = Wr, T.escape = ZI, T.escapeRegExp = JI, T.every = aM, T.find = sM, T.findIndex = $m, T.findKey = xI, T.findLast = uM, T.findLastIndex = Cm, T.findLastKey = wI, T.floor = Vk, T.forEach = Nm, T.forEachRight = Dm, T.forIn = _I, T.forInRight = OI, T.forOwn = AI, T.forOwnRight = SI, T.get = Cd, T.gt = GM, T.gte = KM, T.has = TI, T.hasIn = Md, T.head = Im, T.identity = Jt, T.includes = hM, T.indexOf = uC, T.inRange = qI, T.invoke = MI, T.isArguments = Ri, T.isArray = Ce, T.isArrayBuffer = qM, T.isArrayLike = Xt, T.isArrayLikeObject = mt, T.isBoolean = VM, T.isBuffer = ai, T.isDate = YM, T.isElement = XM, T.isEmpty = ZM, T.isEqual = JM, T.isEqualWith = QM, T.isError = Td, T.isFinite = eI, T.isFunction = An, T.isInteger = Gm, T.isLength = ac, T.isMap = Km, T.isMatch = tI, T.isMatchWith = rI, T.isNaN = nI, T.isNative = iI, T.isNil = oI, T.isNull = aI, T.isNumber = qm, T.isObject = pt, T.isObjectLike = gt, T.isPlainObject = Vo, T.isRegExp = $d, T.isSafeInteger = sI, T.isSet = Vm, T.isString = oc, T.isSymbol = sr, T.isTypedArray = Oa, T.isUndefined = uI, T.isWeakMap = cI, T.isWeakSet = lI, T.join = hC, T.kebabCase = QI, T.last = Sr, T.lastIndexOf = pC, T.lowerCase = ek, T.lowerFirst = tk, T.lt = fI, T.lte = dI, T.max = Yk, T.maxBy = Xk, T.mean = Zk, T.meanBy = Jk, T.min = Qk, T.minBy = ej, T.stubArray = Dd, T.stubFalse = Ld, T.stubObject = Bk, T.stubString = Fk, T.stubTrue = Wk, T.multiply = tj, T.nth = vC, T.noConflict = Mk, T.noop = Nd, T.now = rc, T.pad = rk, T.padEnd = nk, T.padStart = ik, T.parseInt = ak, T.random = VI, T.reduce = mM, T.reduceRight = bM, T.repeat = ok, T.replace = sk, T.result = LI, T.round = rj, T.runInContext = L, T.sample = wM, T.size = AM, T.snakeCase = uk, T.some = SM, T.sortedIndex = _C, T.sortedIndexBy = OC, T.sortedIndexOf = AC, T.sortedLastIndex = SC, T.sortedLastIndexBy = PC, T.sortedLastIndexOf = EC, T.startCase = lk, T.startsWith = fk, T.subtract = nj, T.sum = ij, T.sumBy = aj, T.template = dk, T.times = zk, T.toFinite = Sn, T.toInteger = Ie, T.toLength = Xm, T.toLower = hk, T.toNumber = Pr, T.toSafeInteger = hI, T.toString = Ge, T.toUpper = pk, T.trim = vk, T.trimEnd = gk, T.trimStart = yk, T.truncate = mk, T.unescape = bk, T.uniqueId = Hk, T.upperCase = xk, T.upperFirst = Id, T.each = Nm, T.eachRight = Dm, T.first = Im, Rd(T, function() {
        var o = {};
        return tn(T, function(c, p) {
          Xe.call(T.prototype, p) || (o[p] = c);
        }), o;
      }(), { chain: !1 }), T.VERSION = n, xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        T[o].placeholder = T;
      }), xr(["drop", "take"], function(o, c) {
        Be.prototype[o] = function(p) {
          p = p === r ? 1 : Ot(Ie(p), 0);
          var m = this.__filtered__ && !c ? new Be(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Dt(p, m.__takeCount__) : m.__views__.push({
            size: Dt(p, X),
            type: o + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Be.prototype[o + "Right"] = function(p) {
          return this.reverse()[o](p).reverse();
        };
      }), xr(["filter", "map", "takeWhile"], function(o, c) {
        var p = c + 1, m = p == z || p == H;
        Be.prototype[o] = function(P) {
          var $ = this.clone();
          return $.__iteratees__.push({
            iteratee: _e(P, 3),
            type: p
          }), $.__filtered__ = $.__filtered__ || m, $;
        };
      }), xr(["head", "last"], function(o, c) {
        var p = "take" + (c ? "Right" : "");
        Be.prototype[o] = function() {
          return this[p](1).value()[0];
        };
      }), xr(["initial", "tail"], function(o, c) {
        var p = "drop" + (c ? "" : "Right");
        Be.prototype[o] = function() {
          return this.__filtered__ ? new Be(this) : this[p](1);
        };
      }), Be.prototype.compact = function() {
        return this.filter(Jt);
      }, Be.prototype.find = function(o) {
        return this.filter(o).head();
      }, Be.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Be.prototype.invokeMap = Ne(function(o, c) {
        return typeof o == "function" ? new Be(this) : this.map(function(p) {
          return zo(p, o, c);
        });
      }), Be.prototype.reject = function(o) {
        return this.filter(ic(_e(o)));
      }, Be.prototype.slice = function(o, c) {
        o = Ie(o);
        var p = this;
        return p.__filtered__ && (o > 0 || c < 0) ? new Be(p) : (o < 0 ? p = p.takeRight(-o) : o && (p = p.drop(o)), c !== r && (c = Ie(c), p = c < 0 ? p.dropRight(-c) : p.take(c - o)), p);
      }, Be.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Be.prototype.toArray = function() {
        return this.take(X);
      }, tn(Be.prototype, function(o, c) {
        var p = /^(?:filter|find|map|reject)|While$/.test(c), m = /^(?:head|last)$/.test(c), P = T[m ? "take" + (c == "last" ? "Right" : "") : c], $ = m || /^find/.test(c);
        P && (T.prototype[c] = function() {
          var I = this.__wrapped__, R = m ? [1] : arguments, W = I instanceof Be, ee = R[0], te = W || Ce(I), ie = function(De) {
            var Fe = P.apply(T, Jn([De], R));
            return m && le ? Fe[0] : Fe;
          };
          te && p && typeof ee == "function" && ee.length != 1 && (W = te = !1);
          var le = this.__chain__, ve = !!this.__actions__.length, Oe = $ && !le, Re = W && !ve;
          if (!$ && te) {
            I = Re ? I : new Be(this);
            var Ae = o.apply(I, R);
            return Ae.__actions__.push({ func: ec, args: [ie], thisArg: r }), new _r(Ae, le);
          }
          return Oe && Re ? o.apply(this, R) : (Ae = this.thru(ie), Oe ? m ? Ae.value()[0] : Ae.value() : Ae);
        });
      }), xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var c = Pu[o], p = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(o);
        T.prototype[o] = function() {
          var P = arguments;
          if (m && !this.__chain__) {
            var $ = this.value();
            return c.apply(Ce($) ? $ : [], P);
          }
          return this[p](function(I) {
            return c.apply(Ce(I) ? I : [], P);
          });
        };
      }), tn(Be.prototype, function(o, c) {
        var p = T[c];
        if (p) {
          var m = p.name + "";
          Xe.call(ma, m) || (ma[m] = []), ma[m].push({ name: c, func: p });
        }
      }), ma[qu(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Be.prototype.clone = bT, Be.prototype.reverse = xT, Be.prototype.value = wT, T.prototype.at = XC, T.prototype.chain = ZC, T.prototype.commit = JC, T.prototype.next = QC, T.prototype.plant = tM, T.prototype.reverse = rM, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = nM, T.prototype.first = T.prototype.head, Ro && (T.prototype[Ro] = eM), T;
    }, va = JE();
    Ei ? ((Ei.exports = va)._ = va, jf._ = va) : jt._ = va;
  }).call(pr);
})($l, $l.exports);
var Qre = $l.exports;
function ene(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const tne = (e) => {
  const t = Qre.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, s]) => {
        n < s && (n = s, r = a);
      }
    );
  }), r;
}, rne = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, s) => {
  const u = Object.keys(e), l = ene(t), f = Math.max(
    ...l.map((v) => cf(`${v.x}`))
  ), d = {
    ...xg(r),
    type: "number",
    dataKey: tne(l)
  }, h = {
    ...wg(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ q(Eo, { config: e, ref: s, aspect: a, children: /* @__PURE__ */ Je(
    ES,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ q(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ q(To, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ q(
          vu,
          {
            ...lf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ q(qn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ q(
          Vn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        u.map((v, g) => /* @__PURE__ */ q(sv, { children: /* @__PURE__ */ q(
          Si,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || Rn(g),
            radius: 4,
            maxBarSize: 24,
            children: i && /* @__PURE__ */ q(
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
}, Nne = $o(rne), lP = Rr(void 0), Dne = ({ children: e, ...t }) => /* @__PURE__ */ q(lP.Provider, { value: t, children: e }), nne = () => ({
  ...tr(lP)
}), ine = Xr(
  function(t, r) {
    const { src: n } = nne();
    if (!n) return /* @__PURE__ */ q("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ q("img", { ref: r, ...t, ...i });
  }
);
var kg = "Avatar", [ane, Lne] = Og(kg), [one, fP] = ane(kg), dP = K.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [i, a] = K.useState("idle");
    return /* @__PURE__ */ q(
      one,
      {
        scope: r,
        imageLoadingStatus: i,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ q(vn.span, { ...n, ref: t })
      }
    );
  }
);
dP.displayName = kg;
var hP = "AvatarImage", pP = K.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: i = () => {
    }, ...a } = e, s = fP(hP, r), u = sne(n), l = ca((f) => {
      i(f), s.onImageLoadingStatusChange(f);
    });
    return gi(() => {
      u !== "idle" && l(u);
    }, [u, l]), u === "loaded" ? /* @__PURE__ */ q(vn.img, { ...a, ref: t, src: n }) : null;
  }
);
pP.displayName = hP;
var vP = "AvatarFallback", gP = K.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...i } = e, a = fP(vP, r), [s, u] = K.useState(n === void 0);
    return K.useEffect(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => u(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ q(vn.span, { ...i, ref: t }) : null;
  }
);
gP.displayName = vP;
function sne(e) {
  const [t, r] = K.useState("idle");
  return gi(() => {
    if (!e) {
      r("error");
      return;
    }
    let n = !0;
    const i = new window.Image(), a = (s) => () => {
      n && r(s);
    };
    return r("loading"), i.onload = a("loaded"), i.onerror = a("error"), i.src = e, () => {
      n = !1;
    };
  }, [e]), t;
}
var yP = dP, mP = pP, bP = gP;
const une = zn("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xxsmall: "h-5 w-5 rounded-md text-sm",
      xsmall: "h-6 w-6 rounded-md text-sm",
      small: "h-10 w-10 rounded-md text-sm",
      medium: "h-12 w-12 rounded-md",
      large: "h-16 w-16 rounded-xl text-xl",
      xlarge: "h-20 w-20 rounded-xl text-xl",
      xxlarge: "h-32 w-32 rounded-xl text-2xl"
    }
  },
  defaultVariants: {
    size: "medium"
  }
}), xP = K.forwardRef(({ size: e, className: t, ...r }, n) => /* @__PURE__ */ q(
  yP,
  {
    ref: n,
    className: vt(une({ size: e, className: t })),
    ...r
  }
));
xP.displayName = yP.displayName;
const wP = K.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ q(
  mP,
  {
    ref: r,
    className: vt("aspect-square h-full w-full object-cover", e),
    ...t,
    asChild: !0,
    children: /* @__PURE__ */ q(ine, {})
  }
));
wP.displayName = mP.displayName;
const _P = K.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ q(
  bP,
  {
    ref: r,
    className: vt(
      "flex h-full w-full items-center justify-center rounded-md bg-f1-background-promote text-f1-foreground",
      e
    ),
    ...t
  }
));
_P.displayName = bP.displayName;
const OP = Xr(
  ({ src: e, alt: t, size: r, color: n }, i) => /* @__PURE__ */ Je(xP, { size: r, ref: i, children: [
    /* @__PURE__ */ q(wP, { src: e, alt: t }),
    /* @__PURE__ */ q(
      _P,
      {
        className: vt(n, n && "text-f1-foreground-inverse"),
        children: t
      }
    )
  ] })
);
OP.displayName = "Avatar";
const cne = zn(
  vt(
    "focus:ring-ring text inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    q1()
  ),
  {
    variants: {
      variant: {
        default: "border-f1-border bg-transparent text-f1-foreground",
        neutral: "border-transparent bg-f1-background-secondary text-f1-foreground",
        critical: "border-transparent bg-f1-background-critical text-f1-foreground-critical",
        positive: "border-transparent bg-f1-background-positive text-f1-foreground-positive",
        warning: "border-transparent bg-f1-background-warning text-f1-foreground-warning",
        info: "border-transparent bg-f1-background-info text-f1-foreground-info",
        name: "border-f1-border bg-f1-background-secondary text-sm font-medium text-f1-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function lne({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ q("div", { className: vt(cne({ variant: t }), e), ...r });
}
const Bne = Xr(function({
  text: t,
  avatar: r,
  hasDot: n = !1,
  variant: i = "name"
}) {
  const a = (r == null ? void 0 : r.src) || (r == null ? void 0 : r.alt), s = {
    name: "bg-f1-background-secondary",
    default: "bg-f1-icon",
    neutral: "bg-f1-icon",
    critical: "bg-f1-icon-critical",
    positive: "bg-f1-icon-positive",
    warning: "bg-f1-icon-warning",
    info: "bg-f1-icon-info"
  };
  return /* @__PURE__ */ Je(
    lne,
    {
      variant: i,
      className: vt(a ? "pl-[0.15rem] pr-2" : "px-2"),
      children: [
        a && /* @__PURE__ */ q("span", { className: "mr-1", children: /* @__PURE__ */ q(OP, { alt: r.alt || t[0], src: r.src, size: "xsmall" }) }),
        n && /* @__PURE__ */ q(
          "span",
          {
            className: vt(
              "mr-1 h-2 w-2 rounded-full",
              i && s[i]
            )
          }
        ),
        t
      ]
    }
  );
});
var fne = typeof pr == "object" && pr && pr.Object === Object && pr, dne = typeof self == "object" && self && self.Object === Object && self;
fne || dne || Function("return this")();
var hne = typeof window < "u" ? uv : na, pne = typeof window > "u";
function vne(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (u) => pne ? t : window.matchMedia(u).matches, [i, a] = Nn(() => r ? n(e) : t);
  function s() {
    a(n(e));
  }
  return hne(() => {
    const u = window.matchMedia(e);
    return s(), u.addListener ? u.addListener(s) : u.addEventListener("change", s), () => {
      u.removeListener ? u.removeListener(s) : u.removeEventListener("change", s);
    };
  }, [e]), i;
}
const Fne = () => vne(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
), N1 = Rr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function gne(e) {
  const t = Fa(null);
  return t.current === null && (t.current = e()), t.current;
}
const yne = /* @__PURE__ */ new Set([
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
function Cl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || yne.has(e);
}
let AP = (e) => !Cl(e);
function SP(e) {
  e && (AP = (t) => t.startsWith("on") ? !Cl(t) : e(t));
}
try {
  SP(require("@emotion/is-prop-valid").default);
} catch {
}
function Wne(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (AP(i) || r === !0 && Cl(i) || !t && !Cl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function zne({ children: e, isValidProp: t, ...r }) {
  t && SP(t), r = { ...tr(N1), ...r }, r.isStatic = gne(() => r.isStatic);
  const n = nu(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return q(N1.Provider, { value: n, children: e });
}
const PP = Rr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), Une = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = Nn(e), i = ja(() => {
    n(!0);
  }, []), a = ja(() => n(!1), []), s = ja(() => n((u) => !u), []);
  return /* @__PURE__ */ q(PP.Provider, { value: { enable: i, disable: a, toggle: s, enabled: r }, children: t });
}, Hne = () => {
  const e = tr(PP);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
export {
  qre as $,
  Tne as A,
  $ne as B,
  One as C,
  HS as D,
  bre as E,
  Ane as F,
  IS as G,
  xre as H,
  Hj as I,
  fte as J,
  wre as K,
  Pne as L,
  zne as M,
  eP as N,
  Sre as O,
  Rne as P,
  OP as Q,
  mre as R,
  dv as S,
  vne as T,
  X1 as U,
  Nne as V,
  ete as W,
  wne as X,
  J1 as Y,
  Tre as Z,
  Cne as _,
  zn as a,
  Vre as a0,
  Yre as a1,
  cP as a2,
  kne as b,
  vt as c,
  jne as d,
  Sne as e,
  Une as f,
  Dne as g,
  hne as h,
  Ene as i,
  Bne as j,
  Hne as k,
  _ne as l,
  Fne as m,
  gi as n,
  vn as o,
  N1 as p,
  gne as q,
  Wne as r,
  Og as s,
  ia as t,
  Kj as u,
  QS as v,
  $n as w,
  ca as x,
  q1 as y,
  Zj as z
};
