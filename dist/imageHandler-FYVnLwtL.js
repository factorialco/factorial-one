import { jsxs as Qe, jsx as Y, Fragment as ja } from "react/jsx-runtime";
import * as V from "react";
import k, { createContext as Dr, useContext as tr, useState as jr, useCallback as Vi, useEffect as Rr, useRef as Jr, useImperativeHandle as q1, forwardRef as pi, useMemo as fo, isValidElement as Yr, Children as Yi, PureComponent as Lr, cloneElement as At, createElement as V1, Component as Y1, useLayoutEffect as pv } from "react";
import * as vv from "react-dom";
import { createPortal as ik } from "react-dom";
function X1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = X1(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function ak() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = X1(e)) && (n && (n += " "), n += t);
  return n;
}
const vb = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, gb = ak, xi = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return gb(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, u = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = vb(d) || vb(h);
    return i[f][v];
  }), s = r && Object.entries(r).reduce((f, d) => {
    let [h, v] = d;
    return v === void 0 || (f[h] = v), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: h, className: v, ...g } = d;
    return Object.entries(g).every((b) => {
      let [y, w] = b;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...s
      }[y]) : {
        ...a,
        ...s
      }[y] === w;
    }) ? [
      ...f,
      h,
      v
    ] : f;
  }, []);
  return gb(e, u, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, gv = Dr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), Wne = ({
  children: e
}) => {
  const [t, r] = jr(!1), [n, i] = jr([]), a = Vi(
    (s) => {
      i(
        s || [...yb].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), u = Vi(() => r(!1), [r]);
  return Rr(() => {
    window.XRay = {
      enable: a,
      disable: u
    };
  }, [a, u]), /* @__PURE__ */ Qe(gv.Provider, { value: { enabled: t, enable: a, disable: u, filter: n }, children: [
    e,
    t && typeof document < "u" && ik(
      /* @__PURE__ */ Qe("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ Y("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ Y("div", { className: "flex flex-col space-y-2", children: yb.map((s) => /* @__PURE__ */ Qe("label", { className: "block", children: [
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
}, ok = xi(
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
), uk = xi(
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
), sk = (e, t) => {
  const { enabled: r, filter: n } = V.useContext(gv), i = Jr(null);
  q1(t, () => i.current);
  const a = r && !e.internal, u = typeof document < "u" ? document.body : null;
  return Rr(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const s = i.current;
    s.dataset.componentName = e.name;
    let l = null, f = null;
    if (u) {
      const d = s.getBoundingClientRect(), { top: h, left: v, width: g, height: b } = d;
      l = document.createElement("div"), l.className = ok({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${b}px`, f = document.createElement("div"), f.className = uk({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, u.appendChild(f), u.appendChild(l);
    }
    return () => {
      l && (u == null || u.removeChild(l)), f && (u == null || u.removeChild(f));
    };
  }, [a, e.name, e.type, n, u]), {
    ref: i,
    enabled: r
  };
}, zne = () => tr(gv), yb = ["layout", "info", "action", "form"], ck = (e, t) => {
  const r = pi((n, i) => {
    const { ref: a } = sk(e, i);
    return /* @__PURE__ */ Y(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function Z1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Z1(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Z1(e)) && (n && (n += " "), n += t);
  return n;
}
const yv = "-", lk = (e) => {
  const t = dk(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (u) => {
      const s = u.split(yv);
      return s[0] === "" && s.length !== 1 && s.shift(), J1(s, t) || fk(u);
    },
    getConflictingClassGroupIds: (u, s) => {
      const l = r[u] || [];
      return s && n[u] ? [...l, ...n[u]] : l;
    }
  };
}, J1 = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? J1(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(yv);
  return (u = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : u.classGroupId;
}, mb = /^\[(.+)\]$/, fk = (e) => {
  if (mb.test(e)) {
    const t = mb.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, dk = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return pk(Object.entries(e.classGroups), r).forEach(([a, u]) => {
    Ch(u, n, a, t);
  }), n;
}, Ch = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : bb(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (hk(i)) {
        Ch(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, u]) => {
      Ch(u, bb(t, a), r, n);
    });
  });
}, bb = (e, t) => {
  let r = e;
  return t.split(yv).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, hk = (e) => e.isThemeGetter, pk = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([u, s]) => [t + u, s])) : a);
  return [r, i];
}) : e, vk = (e) => {
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
}, Q1 = "!", gk = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, u = (s) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let w = 0; w < s.length; w++) {
      let A = s[w];
      if (f === 0) {
        if (A === i && (n || s.slice(w, w + a) === t)) {
          l.push(s.slice(d, w)), d = w + a;
          continue;
        }
        if (A === "/") {
          h = w;
          continue;
        }
      }
      A === "[" ? f++ : A === "]" && f--;
    }
    const v = l.length === 0 ? s : s.substring(d), g = v.startsWith(Q1), b = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: u
  }) : u;
}, yk = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, mk = (e) => ({
  cache: vk(e.cacheSize),
  parseClassName: gk(e),
  ...lk(e)
}), bk = /\s+/, xk = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], u = e.trim().split(bk);
  let s = "";
  for (let l = u.length - 1; l >= 0; l -= 1) {
    const f = u[l], {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = r(f);
    let b = !!g, y = n(b ? v.substring(0, g) : v);
    if (!y) {
      if (!b) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (y = n(v), !y) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      b = !1;
    }
    const w = yk(d).join(":"), A = h ? w + Q1 : w, O = A + y;
    if (a.includes(O))
      continue;
    a.push(O);
    const S = i(y, b);
    for (let _ = 0; _ < S.length; ++_) {
      const x = S[_];
      a.push(A + x);
    }
    s = f + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function wk() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = e_(t)) && (n && (n += " "), n += r);
  return n;
}
const e_ = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = e_(e[n])) && (r && (r += " "), r += t);
  return r;
};
function _k(e, ...t) {
  let r, n, i, a = u;
  function u(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = mk(f), n = r.cache.get, i = r.cache.set, a = s, s(l);
  }
  function s(l) {
    const f = n(l);
    if (f)
      return f;
    const d = xk(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(wk.apply(null, arguments));
  };
}
const ut = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, t_ = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ok = /^\d+\/\d+$/, Ak = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ek = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Tk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tn = (e) => Ra(e) || Ak.has(e) || Ok.test(e), ai = (e) => ho(e, "length", Dk), Ra = (e) => !!e && !Number.isNaN(Number(e)), Ud = (e) => ho(e, "number", Ra), Zo = (e) => !!e && Number.isInteger(Number(e)), Ck = (e) => e.endsWith("%") && Ra(e.slice(0, -1)), ke = (e) => t_.test(e), oi = (e) => Sk.test(e), Mk = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ik = (e) => ho(e, Mk, r_), kk = (e) => ho(e, "position", r_), jk = /* @__PURE__ */ new Set(["image", "url"]), Rk = (e) => ho(e, jk, Bk), Nk = (e) => ho(e, "", Lk), Jo = () => !0, ho = (e, t, r) => {
  const n = t_.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Dk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pk.test(e) && !Ek.test(e)
), r_ = () => !1, Lk = (e) => Tk.test(e), Bk = (e) => $k.test(e), Fk = () => {
  const e = ut("colors"), t = ut("spacing"), r = ut("blur"), n = ut("brightness"), i = ut("borderColor"), a = ut("borderRadius"), u = ut("borderSpacing"), s = ut("borderWidth"), l = ut("contrast"), f = ut("grayscale"), d = ut("hueRotate"), h = ut("invert"), v = ut("gap"), g = ut("gradientColorStops"), b = ut("gradientColorStopPositions"), y = ut("inset"), w = ut("margin"), A = ut("opacity"), O = ut("padding"), S = ut("saturate"), _ = ut("scale"), x = ut("sepia"), E = ut("skew"), $ = ut("space"), M = ut("translate"), F = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", ke, t], N = () => [ke, t], U = () => ["", Tn, ai], z = () => ["auto", Ra, ke], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", ke], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [Ra, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Jo],
      spacing: [Tn, ai],
      blur: ["none", "", oi, ke],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", oi, ke],
      borderSpacing: N(),
      borderWidth: U(),
      contrast: X(),
      grayscale: ue(),
      hueRotate: X(),
      invert: ue(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ck, ai],
      inset: B(),
      margin: B(),
      opacity: X(),
      padding: N(),
      saturate: X(),
      scale: X(),
      sepia: ue(),
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
        columns: [oi]
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
        z: ["auto", Zo, ke]
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
        order: ["first", "last", "none", Zo, ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Jo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Zo, ke]
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
        "grid-rows": [Jo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Zo, ke]
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
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [$]
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
        "space-y": [$]
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
          screen: [oi]
        }, oi]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ud]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jo]
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
        "line-clamp": ["none", Ra, Ud]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Tn, ke]
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
        decoration: ["auto", "from-font", Tn, ai]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Tn, ke]
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
        bg: [...J(), kk]
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
        bg: ["auto", "cover", "contain", Ik]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Rk]
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
        "outline-offset": [Tn, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Tn, ai]
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
        "ring-offset": [Tn, ai]
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
        shadow: ["", "inner", "none", oi, Nk]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Jo]
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
        "drop-shadow": ["", "none", oi, ke]
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
        rotate: [Zo, ke]
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
        stroke: [Tn, ai, Ud]
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
}, Wk = /* @__PURE__ */ _k(Fk);
function Ht(...e) {
  return Wk(Me(e));
}
function zk(e) {
  return Ht(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const xb = xi("inline-block shrink-0", {
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
}), n_ = pi(function({ size: t, icon: r, state: n = "normal", className: i, ...a }, u) {
  var f;
  if (!r) return null;
  const s = r;
  return ((f = r.displayName) == null ? void 0 : f.includes("Animated")) ? /* @__PURE__ */ Y(
    s,
    {
      ref: u,
      ...a,
      animate: n,
      className: Ht(xb({ size: t }), "select-none", i)
    }
  ) : /* @__PURE__ */ Y(
    s,
    {
      ref: u,
      ...a,
      className: Ht("aspect-square", xb({ size: t }), i)
    }
  );
}), i_ = Dr(void 0), Une = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ Y(i_.Provider, { value: { component: t, currentPath: r }, children: e }), a_ = () => {
  const e = tr(i_);
  return {
    controller: () => ({}),
    ...e
  };
};
function lc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const Uk = () => {
  const { currentPath: e } = a_(), t = Vi(
    (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? lc(e) === lc(r) : `${lc(e)}/`.startsWith(
      `${lc(r)}/`
    ),
    [e]
  );
  return {
    currentPath: e,
    isActive: t
  };
}, Hne = pi(
  function(t, r) {
    const { component: n } = a_(), { isActive: i } = Uk(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, u = fo(
      () => pi(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ Y("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ Y(u, { ref: r, ...a });
  }
);
function Hk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function o_(...e) {
  return (t) => e.forEach((r) => Hk(r, t));
}
function ia(...e) {
  return V.useCallback(o_(...e), e);
}
var mv = V.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = V.Children.toArray(r), a = i.find(Gk);
  if (a) {
    const u = a.props.children, s = i.map((l) => l === a ? V.Children.count(u) > 1 ? V.Children.only(null) : V.isValidElement(u) ? u.props.children : null : l);
    return /* @__PURE__ */ Y(Mh, { ...n, ref: t, children: V.isValidElement(u) ? V.cloneElement(u, void 0, s) : null });
  }
  return /* @__PURE__ */ Y(Mh, { ...n, ref: t, children: r });
});
mv.displayName = "Slot";
var Mh = V.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (V.isValidElement(r)) {
    const i = qk(r);
    return V.cloneElement(r, {
      ...Kk(n, r.props),
      // @ts-ignore
      ref: t ? o_(t, i) : i
    });
  }
  return V.Children.count(r) > 1 ? V.Children.only(null) : null;
});
Mh.displayName = "SlotClone";
var u_ = ({ children: e }) => /* @__PURE__ */ Y(ja, { children: e });
function Gk(e) {
  return V.isValidElement(e) && e.type === u_;
}
function Kk(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...s) => {
      a(...s), i(...s);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function qk(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Vk = xi(
  Ht(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    zk()
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
), s_ = V.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, u) => /* @__PURE__ */ Y(
    i ? mv : "button",
    {
      className: Ht(Vk({ variant: r, size: n, round: t }), e),
      ref: u,
      ...a
    }
  )
);
s_.displayName = "Button";
const Yk = xi("-ml-0.5 transition-colors", {
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
}), Xk = xi("transition-colors", {
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
}), Gne = pi(function({
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
  const [h, v] = jr(!1);
  return /* @__PURE__ */ Qe(
    s_,
    {
      title: r ? t : void 0,
      onClick: async (b) => {
        const y = n == null ? void 0 : n(b);
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
          n_,
          {
            size: l === "sm" ? "sm" : "md",
            icon: u,
            className: r ? Xk({ variant: s }) : Yk({ variant: s })
          }
        ),
        !r && t
      ]
    }
  );
}), c_ = Dr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), Kne = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = jr(e), i = Vi(() => {
    n(!0);
  }, []), a = Vi(() => n(!1), []), u = Vi(() => n((s) => !s), []);
  return /* @__PURE__ */ Y(c_.Provider, { value: { enable: i, disable: a, toggle: u, enabled: r }, children: t });
}, Zk = () => {
  const e = tr(c_);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ze(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jk = Array.isArray, rr = Jk, Qk = typeof pr == "object" && pr && pr.Object === Object && pr, l_ = Qk, ej = l_, tj = typeof self == "object" && self && self.Object === Object && self, rj = ej || tj || Function("return this")(), vn = rj, nj = vn, ij = nj.Symbol, as = ij, wb = as, f_ = Object.prototype, aj = f_.hasOwnProperty, oj = f_.toString, Qo = wb ? wb.toStringTag : void 0;
function uj(e) {
  var t = aj.call(e, Qo), r = e[Qo];
  try {
    e[Qo] = void 0;
    var n = !0;
  } catch {
  }
  var i = oj.call(e);
  return n && (t ? e[Qo] = r : delete e[Qo]), i;
}
var sj = uj, cj = Object.prototype, lj = cj.toString;
function fj(e) {
  return lj.call(e);
}
var dj = fj, _b = as, hj = sj, pj = dj, vj = "[object Null]", gj = "[object Undefined]", Ob = _b ? _b.toStringTag : void 0;
function yj(e) {
  return e == null ? e === void 0 ? gj : vj : Ob && Ob in Object(e) ? hj(e) : pj(e);
}
var zn = yj;
function mj(e) {
  return e != null && typeof e == "object";
}
var Un = mj, bj = zn, xj = Un, wj = "[object Symbol]";
function _j(e) {
  return typeof e == "symbol" || xj(e) && bj(e) == wj;
}
var po = _j, Oj = rr, Aj = po, Sj = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pj = /^\w*$/;
function Ej(e, t) {
  if (Oj(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Aj(e) ? !0 : Pj.test(e) || !Sj.test(e) || t != null && e in Object(t);
}
var bv = Ej;
function Tj(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wi = Tj;
const vo = /* @__PURE__ */ Ze(wi);
var $j = zn, Cj = wi, Mj = "[object AsyncFunction]", Ij = "[object Function]", kj = "[object GeneratorFunction]", jj = "[object Proxy]";
function Rj(e) {
  if (!Cj(e))
    return !1;
  var t = $j(e);
  return t == Ij || t == kj || t == Mj || t == jj;
}
var xv = Rj;
const Pe = /* @__PURE__ */ Ze(xv);
var Nj = vn, Dj = Nj["__core-js_shared__"], Lj = Dj, Hd = Lj, Ab = function() {
  var e = /[^.]+$/.exec(Hd && Hd.keys && Hd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bj(e) {
  return !!Ab && Ab in e;
}
var Fj = Bj, Wj = Function.prototype, zj = Wj.toString;
function Uj(e) {
  if (e != null) {
    try {
      return zj.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var d_ = Uj, Hj = xv, Gj = Fj, Kj = wi, qj = d_, Vj = /[\\^$.*+?()[\]{}|]/g, Yj = /^\[object .+?Constructor\]$/, Xj = Function.prototype, Zj = Object.prototype, Jj = Xj.toString, Qj = Zj.hasOwnProperty, eR = RegExp(
  "^" + Jj.call(Qj).replace(Vj, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tR(e) {
  if (!Kj(e) || Gj(e))
    return !1;
  var t = Hj(e) ? eR : Yj;
  return t.test(qj(e));
}
var rR = tR;
function nR(e, t) {
  return e == null ? void 0 : e[t];
}
var iR = nR, aR = rR, oR = iR;
function uR(e, t) {
  var r = oR(e, t);
  return aR(r) ? r : void 0;
}
var aa = uR, sR = aa, cR = sR(Object, "create"), jl = cR, Sb = jl;
function lR() {
  this.__data__ = Sb ? Sb(null) : {}, this.size = 0;
}
var fR = lR;
function dR(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hR = dR, pR = jl, vR = "__lodash_hash_undefined__", gR = Object.prototype, yR = gR.hasOwnProperty;
function mR(e) {
  var t = this.__data__;
  if (pR) {
    var r = t[e];
    return r === vR ? void 0 : r;
  }
  return yR.call(t, e) ? t[e] : void 0;
}
var bR = mR, xR = jl, wR = Object.prototype, _R = wR.hasOwnProperty;
function OR(e) {
  var t = this.__data__;
  return xR ? t[e] !== void 0 : _R.call(t, e);
}
var AR = OR, SR = jl, PR = "__lodash_hash_undefined__";
function ER(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = SR && t === void 0 ? PR : t, this;
}
var TR = ER, $R = fR, CR = hR, MR = bR, IR = AR, kR = TR;
function go(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
go.prototype.clear = $R;
go.prototype.delete = CR;
go.prototype.get = MR;
go.prototype.has = IR;
go.prototype.set = kR;
var jR = go;
function RR() {
  this.__data__ = [], this.size = 0;
}
var NR = RR;
function DR(e, t) {
  return e === t || e !== e && t !== t;
}
var wv = DR, LR = wv;
function BR(e, t) {
  for (var r = e.length; r--; )
    if (LR(e[r][0], t))
      return r;
  return -1;
}
var Rl = BR, FR = Rl, WR = Array.prototype, zR = WR.splice;
function UR(e) {
  var t = this.__data__, r = FR(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : zR.call(t, r, 1), --this.size, !0;
}
var HR = UR, GR = Rl;
function KR(e) {
  var t = this.__data__, r = GR(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var qR = KR, VR = Rl;
function YR(e) {
  return VR(this.__data__, e) > -1;
}
var XR = YR, ZR = Rl;
function JR(e, t) {
  var r = this.__data__, n = ZR(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var QR = JR, e3 = NR, t3 = HR, r3 = qR, n3 = XR, i3 = QR;
function yo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yo.prototype.clear = e3;
yo.prototype.delete = t3;
yo.prototype.get = r3;
yo.prototype.has = n3;
yo.prototype.set = i3;
var Nl = yo, a3 = aa, o3 = vn, u3 = a3(o3, "Map"), _v = u3, Pb = jR, s3 = Nl, c3 = _v;
function l3() {
  this.size = 0, this.__data__ = {
    hash: new Pb(),
    map: new (c3 || s3)(),
    string: new Pb()
  };
}
var f3 = l3;
function d3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var h3 = d3, p3 = h3;
function v3(e, t) {
  var r = e.__data__;
  return p3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Dl = v3, g3 = Dl;
function y3(e) {
  var t = g3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var m3 = y3, b3 = Dl;
function x3(e) {
  return b3(this, e).get(e);
}
var w3 = x3, _3 = Dl;
function O3(e) {
  return _3(this, e).has(e);
}
var A3 = O3, S3 = Dl;
function P3(e, t) {
  var r = S3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var E3 = P3, T3 = f3, $3 = m3, C3 = w3, M3 = A3, I3 = E3;
function mo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mo.prototype.clear = T3;
mo.prototype.delete = $3;
mo.prototype.get = C3;
mo.prototype.has = M3;
mo.prototype.set = I3;
var Ov = mo, h_ = Ov, k3 = "Expected a function";
function Av(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(k3);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var u = e.apply(this, n);
    return r.cache = a.set(i, u) || a, u;
  };
  return r.cache = new (Av.Cache || h_)(), r;
}
Av.Cache = h_;
var p_ = Av;
const j3 = /* @__PURE__ */ Ze(p_);
var R3 = p_, N3 = 500;
function D3(e) {
  var t = R3(e, function(n) {
    return r.size === N3 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var L3 = D3, B3 = L3, F3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, W3 = /\\(\\)?/g, z3 = B3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(F3, function(r, n, i, a) {
    t.push(i ? a.replace(W3, "$1") : n || r);
  }), t;
}), U3 = z3;
function H3(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Sv = H3, Eb = as, G3 = Sv, K3 = rr, q3 = po, V3 = 1 / 0, Tb = Eb ? Eb.prototype : void 0, $b = Tb ? Tb.toString : void 0;
function v_(e) {
  if (typeof e == "string")
    return e;
  if (K3(e))
    return G3(e, v_) + "";
  if (q3(e))
    return $b ? $b.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -V3 ? "-0" : t;
}
var Y3 = v_, X3 = Y3;
function Z3(e) {
  return e == null ? "" : X3(e);
}
var g_ = Z3, J3 = rr, Q3 = bv, eN = U3, tN = g_;
function rN(e, t) {
  return J3(e) ? e : Q3(e, t) ? [e] : eN(tN(e));
}
var y_ = rN, nN = po, iN = 1 / 0;
function aN(e) {
  if (typeof e == "string" || nN(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -iN ? "-0" : t;
}
var Ll = aN, oN = y_, uN = Ll;
function sN(e, t) {
  t = oN(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[uN(t[r++])];
  return r && r == n ? e : void 0;
}
var Pv = sN, cN = Pv;
function lN(e, t, r) {
  var n = e == null ? void 0 : cN(e, t);
  return n === void 0 ? r : n;
}
var m_ = lN;
const gr = /* @__PURE__ */ Ze(m_);
function fN(e) {
  return e == null;
}
var dN = fN;
const Te = /* @__PURE__ */ Ze(dN);
var hN = zn, pN = rr, vN = Un, gN = "[object String]";
function yN(e) {
  return typeof e == "string" || !pN(e) && vN(e) && hN(e) == gN;
}
var mN = yN;
const os = /* @__PURE__ */ Ze(mN);
var Ih = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function bN() {
  if (Cb) return Ke;
  Cb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
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
                case s:
                case d:
                case b:
                case g:
                case u:
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
  return Ke.AsyncMode = l, Ke.ConcurrentMode = f, Ke.ContextConsumer = s, Ke.ContextProvider = u, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = n, Ke.Lazy = b, Ke.Memo = g, Ke.Portal = r, Ke.Profiler = a, Ke.StrictMode = i, Ke.Suspense = h, Ke.isAsyncMode = function(x) {
    return _(x) || S(x) === l;
  }, Ke.isConcurrentMode = _, Ke.isContextConsumer = function(x) {
    return S(x) === s;
  }, Ke.isContextProvider = function(x) {
    return S(x) === u;
  }, Ke.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ke.isForwardRef = function(x) {
    return S(x) === d;
  }, Ke.isFragment = function(x) {
    return S(x) === n;
  }, Ke.isLazy = function(x) {
    return S(x) === b;
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
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === h || x === v || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === g || x.$$typeof === u || x.$$typeof === s || x.$$typeof === d || x.$$typeof === w || x.$$typeof === A || x.$$typeof === O || x.$$typeof === y);
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
var Mb;
function xN() {
  return Mb || (Mb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === g || j.$$typeof === u || j.$$typeof === s || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
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
                  case s:
                  case d:
                  case b:
                  case g:
                  case u:
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
    var x = l, E = f, $ = s, M = u, F = t, D = d, B = n, N = b, U = g, z = r, J = a, H = i, Z = h, K = !1;
    function ue(j) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === s;
    }
    function ae(j) {
      return _(j) === u;
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
      return _(j) === b;
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
    function se(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    qe.AsyncMode = x, qe.ConcurrentMode = E, qe.ContextConsumer = $, qe.ContextProvider = M, qe.Element = F, qe.ForwardRef = D, qe.Fragment = B, qe.Lazy = N, qe.Memo = U, qe.Portal = z, qe.Profiler = J, qe.StrictMode = H, qe.Suspense = Z, qe.isAsyncMode = ue, qe.isConcurrentMode = G, qe.isContextConsumer = X, qe.isContextProvider = ae, qe.isElement = ce, qe.isForwardRef = he, qe.isFragment = ge, qe.isLazy = xe, qe.isMemo = ye, qe.isPortal = we, qe.isProfiler = ne, qe.isStrictMode = se, qe.isSuspense = pe, qe.isValidElementType = S, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Ih.exports = bN() : Ih.exports = xN();
var kh = Ih.exports, wN = zn, _N = Un, ON = "[object Number]";
function AN(e) {
  return typeof e == "number" || _N(e) && wN(e) == ON;
}
var b_ = AN;
const SN = /* @__PURE__ */ Ze(b_);
var PN = b_;
function EN(e) {
  return PN(e) && e != +e;
}
var TN = EN;
const bo = /* @__PURE__ */ Ze(TN);
var Gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Ui = function(t) {
  return os(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return SN(t) && !bo(t);
}, Et = function(t) {
  return oe(t) || os(t);
}, $N = 0, oa = function(t) {
  var r = ++$N;
  return "".concat(t || "").concat(r);
}, Kt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !os(t))
    return n;
  var a;
  if (Ui(t)) {
    var u = t.indexOf("%");
    a = r * parseFloat(t.slice(0, u)) / 100;
  } else
    a = +t;
  return bo(a) && (a = n), i && a > r && (a = r), a;
}, li = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, CN = function(t) {
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
function Cc(e, t, r) {
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
function jh(e) {
  "@babel/helpers - typeof";
  return jh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jh(e);
}
var MN = ["viewBox", "children"], IN = [
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
], Ib = ["points", "pathLength"], Gd = {
  svg: MN,
  polygon: Ib,
  polyline: Ib
}, Ev = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Mc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Yr(t) && (n = t.props), !vo(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Ev.includes(a) && (i[a] = r || function(u) {
      return n[a](n, u);
    });
  }), i;
}, kN = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Qi = function(t, r, n) {
  if (!vo(t) || jh(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var u = t[a];
    Ev.includes(a) && typeof u == "function" && (i || (i = {}), i[a] = kN(u, r, n));
  }), i;
}, jN = ["children"], RN = ["children"];
function kb(e, t) {
  if (e == null) return {};
  var r = NN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NN(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Rh(e) {
  "@babel/helpers - typeof";
  return Rh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rh(e);
}
var jb = {
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
}, jn = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Rb = null, Kd = null, Tv = function e(t) {
  if (t === Rb && Array.isArray(Kd))
    return Kd;
  var r = [];
  return Yi.forEach(t, function(n) {
    Te(n) || (kh.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Kd = r, Rb = t, r;
};
function yr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return jn(i);
  }) : n = [jn(t)], Tv(e).forEach(function(i) {
    var a = gr(i, "type.displayName") || gr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function dr(e, t) {
  var r = yr(e, t);
  return r && r[0];
}
var Nb = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, DN = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], LN = function(t) {
  return t && t.type && os(t.type) && DN.indexOf(t.type) >= 0;
}, x_ = function(t) {
  return t && Rh(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, BN = function(t, r, n, i) {
  var a, u = (a = Gd == null ? void 0 : Gd[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && u.includes(r) || IN.includes(r)) || n && Ev.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Yr(t) && (i = t.props), !vo(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(u) {
    var s;
    BN((s = i) === null || s === void 0 ? void 0 : s[u], u, r, n) && (a[u] = i[u]);
  }), a;
}, Nh = function e(t, r) {
  if (t === r)
    return !0;
  var n = Yi.count(t);
  if (n !== Yi.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Db(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], u = r[i];
    if (Array.isArray(a) || Array.isArray(u)) {
      if (!e(a, u))
        return !1;
    } else if (!Db(a, u))
      return !1;
  }
  return !0;
}, Db = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = kb(n, jN), u = r.props || {}, s = u.children, l = kb(u, RN);
    return i && s ? Na(a, l) && Nh(i, s) : !i && !s ? Na(a, l) : !1;
  }
  return !1;
}, Lb = function(t, r) {
  var n = [], i = {};
  return Tv(t).forEach(function(a, u) {
    if (LN(a))
      n.push(a);
    else if (a) {
      var s = jn(a.type), l = r[s] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[s])) {
        var h = f(a, s, u);
        n.push(h), i[s] = !0;
      }
    }
  }), n;
}, FN = function(t) {
  var r = t && t.type;
  return r && jb[r] ? jb[r] : null;
}, WN = function(t, r) {
  return Tv(r).indexOf(t);
}, zN = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Dh() {
  return Dh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dh.apply(this, arguments);
}
function UN(e, t) {
  if (e == null) return {};
  var r = HN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HN(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Lh(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, u = e.style, s = e.title, l = e.desc, f = UN(e, zN), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Me("recharts-surface", a);
  return /* @__PURE__ */ k.createElement("svg", Dh({}, me(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: u,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ k.createElement("title", null, s), /* @__PURE__ */ k.createElement("desc", null, l), t);
}
var GN = ["children", "className"];
function Bh() {
  return Bh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bh.apply(this, arguments);
}
function KN(e, t) {
  if (e == null) return {};
  var r = qN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qN(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Le = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = KN(e, GN), a = Me("recharts-layer", n);
  return /* @__PURE__ */ k.createElement("g", Bh({
    className: a
  }, me(i, !0), {
    ref: t
  }), r);
}), VN = process.env.NODE_ENV !== "production", Xr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (VN && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[u++];
      }));
    }
};
function YN(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var XN = YN, ZN = XN;
function JN(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : ZN(e, t, r);
}
var QN = JN, eD = "\\ud800-\\udfff", tD = "\\u0300-\\u036f", rD = "\\ufe20-\\ufe2f", nD = "\\u20d0-\\u20ff", iD = tD + rD + nD, aD = "\\ufe0e\\ufe0f", oD = "\\u200d", uD = RegExp("[" + oD + eD + iD + aD + "]");
function sD(e) {
  return uD.test(e);
}
var w_ = sD;
function cD(e) {
  return e.split("");
}
var lD = cD, __ = "\\ud800-\\udfff", fD = "\\u0300-\\u036f", dD = "\\ufe20-\\ufe2f", hD = "\\u20d0-\\u20ff", pD = fD + dD + hD, vD = "\\ufe0e\\ufe0f", gD = "[" + __ + "]", Fh = "[" + pD + "]", Wh = "\\ud83c[\\udffb-\\udfff]", yD = "(?:" + Fh + "|" + Wh + ")", O_ = "[^" + __ + "]", A_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", S_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", mD = "\\u200d", P_ = yD + "?", E_ = "[" + vD + "]?", bD = "(?:" + mD + "(?:" + [O_, A_, S_].join("|") + ")" + E_ + P_ + ")*", xD = E_ + P_ + bD, wD = "(?:" + [O_ + Fh + "?", Fh, A_, S_, gD].join("|") + ")", _D = RegExp(Wh + "(?=" + Wh + ")|" + wD + xD, "g");
function OD(e) {
  return e.match(_D) || [];
}
var AD = OD, SD = lD, PD = w_, ED = AD;
function TD(e) {
  return PD(e) ? ED(e) : SD(e);
}
var $D = TD, CD = QN, MD = w_, ID = $D, kD = g_;
function jD(e) {
  return function(t) {
    t = kD(t);
    var r = MD(t) ? ID(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? CD(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var RD = jD, ND = RD, DD = ND("toUpperCase"), LD = DD;
const Bl = /* @__PURE__ */ Ze(LD);
function nt(e) {
  return function() {
    return e;
  };
}
const T_ = Math.cos, Ic = Math.sin, rn = Math.sqrt, kc = Math.PI, Fl = 2 * kc, zh = Math.PI, Uh = 2 * zh, Bi = 1e-6, BD = Uh - Bi;
function $_(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function FD(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return $_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class WD {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? $_ : FD(t);
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
    else if (v > Bi) if (!(Math.abs(h * l - f * d) > Bi) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - u, b = i - s, y = l * l + f * f, w = g * g + b * b, A = Math.sqrt(y), O = Math.sqrt(v), S = a * Math.tan((zh - Math.acos((y + v - w) / (2 * A * O))) / 2), _ = S / O, x = S / A;
      Math.abs(_ - 1) > Bi && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * b)},${this._x1 = t + x * l},${this._y1 = r + x * f}`;
    }
  }
  arc(t, r, n, i, a, u) {
    if (t = +t, r = +r, n = +n, u = !!u, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), f = t + s, d = r + l, h = 1 ^ u, v = u ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > Bi || Math.abs(this._y1 - d) > Bi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % Uh + Uh), v > BD ? this._append`A${n},${n},0,1,${h},${t - s},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > Bi && this._append`A${n},${n},0,${+(v >= zh)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function $v(e) {
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
  }, () => new WD(t);
}
function Cv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function C_(e) {
  this._context = e;
}
C_.prototype = {
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
function Wl(e) {
  return new C_(e);
}
function M_(e) {
  return e[0];
}
function I_(e) {
  return e[1];
}
function k_(e, t) {
  var r = nt(!0), n = null, i = Wl, a = null, u = $v(s);
  e = typeof e == "function" ? e : e === void 0 ? M_ : nt(e), t = typeof t == "function" ? t : t === void 0 ? I_ : nt(t);
  function s(l) {
    var f, d = (l = Cv(l)).length, h, v = !1, g;
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
function fc(e, t, r) {
  var n = null, i = nt(!0), a = null, u = Wl, s = null, l = $v(f);
  e = typeof e == "function" ? e : e === void 0 ? M_ : nt(+e), t = typeof t == "function" ? t : nt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? I_ : nt(+r);
  function f(h) {
    var v, g, b, y = (h = Cv(h)).length, w, A = !1, O, S = new Array(y), _ = new Array(y);
    for (a == null && (s = u(O = l())), v = 0; v <= y; ++v) {
      if (!(v < y && i(w = h[v], v, h)) === A)
        if (A = !A)
          g = v, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), b = v - 1; b >= g; --b)
            s.point(S[b], _[b]);
          s.lineEnd(), s.areaEnd();
        }
      A && (S[v] = +e(w, v, h), _[v] = +t(w, v, h), s.point(n ? +n(w, v, h) : S[v], r ? +r(w, v, h) : _[v]));
    }
    if (O) return s = null, O + "" || null;
  }
  function d() {
    return k_().defined(i).curve(u).context(a);
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
class j_ {
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
function zD(e) {
  return new j_(e, !0);
}
function UD(e) {
  return new j_(e, !1);
}
const Mv = {
  draw(e, t) {
    const r = rn(t / kc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Fl);
  }
}, HD = {
  draw(e, t) {
    const r = rn(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, R_ = rn(1 / 3), GD = R_ * 2, KD = {
  draw(e, t) {
    const r = rn(t / GD), n = r * R_;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, qD = {
  draw(e, t) {
    const r = rn(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, VD = 0.8908130915292852, N_ = Ic(kc / 10) / Ic(7 * kc / 10), YD = Ic(Fl / 10) * N_, XD = -T_(Fl / 10) * N_, ZD = {
  draw(e, t) {
    const r = rn(t * VD), n = YD * r, i = XD * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const u = Fl * a / 5, s = T_(u), l = Ic(u);
      e.lineTo(l * r, -s * r), e.lineTo(s * n - l * i, l * n + s * i);
    }
    e.closePath();
  }
}, qd = rn(3), JD = {
  draw(e, t) {
    const r = -rn(t / (qd * 3));
    e.moveTo(0, r * 2), e.lineTo(-qd * r, -r), e.lineTo(qd * r, -r), e.closePath();
  }
}, Er = -0.5, Tr = rn(3) / 2, Hh = 1 / rn(12), QD = (Hh / 2 + 1) * 3, e8 = {
  draw(e, t) {
    const r = rn(t / QD), n = r / 2, i = r * Hh, a = n, u = r * Hh + r, s = -a, l = u;
    e.moveTo(n, i), e.lineTo(a, u), e.lineTo(s, l), e.lineTo(Er * n - Tr * i, Tr * n + Er * i), e.lineTo(Er * a - Tr * u, Tr * a + Er * u), e.lineTo(Er * s - Tr * l, Tr * s + Er * l), e.lineTo(Er * n + Tr * i, Er * i - Tr * n), e.lineTo(Er * a + Tr * u, Er * u - Tr * a), e.lineTo(Er * s + Tr * l, Er * l - Tr * s), e.closePath();
  }
};
function t8(e, t) {
  let r = null, n = $v(i);
  e = typeof e == "function" ? e : nt(e || Mv), t = typeof t == "function" ? t : nt(t === void 0 ? 64 : +t);
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
function jc() {
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
function D_(e) {
  this._context = e;
}
D_.prototype = {
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
        Rc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function r8(e) {
  return new D_(e);
}
function L_(e) {
  this._context = e;
}
L_.prototype = {
  areaStart: jc,
  areaEnd: jc,
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
function n8(e) {
  return new L_(e);
}
function B_(e) {
  this._context = e;
}
B_.prototype = {
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
        Rc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function i8(e) {
  return new B_(e);
}
function F_(e) {
  this._context = e;
}
F_.prototype = {
  areaStart: jc,
  areaEnd: jc,
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
function a8(e) {
  return new F_(e);
}
function Bb(e) {
  return e < 0 ? -1 : 1;
}
function Fb(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), u = (r - e._y1) / (i || n < 0 && -0), s = (a * i + u * n) / (n + i);
  return (Bb(a) + Bb(u)) * Math.min(Math.abs(a), Math.abs(u), 0.5 * Math.abs(s)) || 0;
}
function Wb(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Vd(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, u = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, u - s * r, a, u);
}
function Nc(e) {
  this._context = e;
}
Nc.prototype = {
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
        Vd(this, this._t0, Wb(this, this._t0));
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
          this._point = 3, Vd(this, Wb(this, r = Fb(this, e, t)), r);
          break;
        default:
          Vd(this, this._t0, r = Fb(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function W_(e) {
  this._context = new z_(e);
}
(W_.prototype = Object.create(Nc.prototype)).point = function(e, t) {
  Nc.prototype.point.call(this, t, e);
};
function z_(e) {
  this._context = e;
}
z_.prototype = {
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
function o8(e) {
  return new Nc(e);
}
function u8(e) {
  return new W_(e);
}
function U_(e) {
  this._context = e;
}
U_.prototype = {
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
        for (var n = zb(e), i = zb(t), a = 0, u = 1; u < r; ++a, ++u)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[u], t[u]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function zb(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), u = new Array(r);
  for (i[0] = 0, a[0] = 2, u[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, u[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, u[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, u[t] -= n * u[t - 1];
  for (i[r - 1] = u[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (u[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function s8(e) {
  return new U_(e);
}
function zl(e, t) {
  this._context = e, this._t = t;
}
zl.prototype = {
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
function c8(e) {
  return new zl(e, 0.5);
}
function l8(e) {
  return new zl(e, 0);
}
function f8(e) {
  return new zl(e, 1);
}
function Fa(e, t) {
  if ((u = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], u, s = a.length; r < u; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Gh(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function d8(e, t) {
  return e[t];
}
function h8(e) {
  const t = [];
  return t.key = e, t;
}
function p8() {
  var e = nt([]), t = Gh, r = Fa, n = d8;
  function i(a) {
    var u = Array.from(e.apply(this, arguments), h8), s, l = u.length, f = -1, d;
    for (const h of a)
      for (s = 0, ++f; s < l; ++s)
        (u[s][f] = [0, +n(h, u[s].key, f, a)]).data = h;
    for (s = 0, d = Cv(t(u)); s < l; ++s)
      u[d[s]].index = s;
    return r(u, d), u;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : nt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : nt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Gh : typeof a == "function" ? a : nt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Fa, i) : r;
  }, i;
}
function v8(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, u; i < a; ++i) {
      for (u = r = 0; r < n; ++r) u += e[r][i][1] || 0;
      if (u) for (r = 0; r < n; ++r) e[r][i][1] /= u;
    }
    Fa(e, t);
  }
}
function g8(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var u = 0, s = 0; u < i; ++u) s += e[u][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Fa(e, t);
  }
}
function y8(e, t) {
  if (!(!((u = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, u; n < a; ++n) {
      for (var s = 0, l = 0, f = 0; s < u; ++s) {
        for (var d = e[t[s]], h = d[n][1] || 0, v = d[n - 1][1] || 0, g = (h - v) / 2, b = 0; b < s; ++b) {
          var y = e[t[b]], w = y[n][1] || 0, A = y[n - 1][1] || 0;
          g += w - A;
        }
        l += h, f += g * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Fa(e, t);
  }
}
function xu(e) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xu(e);
}
var m8 = ["type", "size", "sizeType"];
function Kh() {
  return Kh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kh.apply(this, arguments);
}
function Ub(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ub(Object(r), !0).forEach(function(n) {
      b8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b8(e, t, r) {
  return t = x8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x8(e) {
  var t = w8(e, "string");
  return xu(t) == "symbol" ? t : String(t);
}
function w8(e, t) {
  if (xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _8(e, t) {
  if (e == null) return {};
  var r = O8(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O8(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var H_ = {
  symbolCircle: Mv,
  symbolCross: HD,
  symbolDiamond: KD,
  symbolSquare: qD,
  symbolStar: ZD,
  symbolTriangle: JD,
  symbolWye: e8
}, A8 = Math.PI / 180, S8 = function(t) {
  var r = "symbol".concat(Bl(t));
  return H_[r] || Mv;
}, P8 = function(t, r, n) {
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
      var i = 18 * A8;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, E8 = function(t, r) {
  H_["symbol".concat(Bl(t))] = r;
}, Iv = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, u = t.sizeType, s = u === void 0 ? "area" : u, l = _8(t, m8), f = Hb(Hb({}, l), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var w = S8(n), A = t8().type(w).size(P8(a, s, n));
    return A();
  }, h = f.className, v = f.cx, g = f.cy, b = me(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ k.createElement("path", Kh({}, b, {
    className: Me("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Iv.registerSymbol = E8;
function Wa(e) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e);
}
function qh() {
  return qh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qh.apply(this, arguments);
}
function Gb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function T8(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gb(Object(r), !0).forEach(function(n) {
      wu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, K_(n.key), n);
  }
}
function M8(e, t, r) {
  return t && C8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function I8(e, t, r) {
  return t = Dc(t), k8(e, G_() ? Reflect.construct(t, r || [], Dc(e).constructor) : t.apply(e, r));
}
function k8(e, t) {
  if (t && (Wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j8(e);
}
function j8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function G_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (G_ = function() {
    return !!e;
  })();
}
function Dc(e) {
  return Dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dc(e);
}
function R8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vh(e, t);
}
function Vh(e, t) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vh(e, t);
}
function wu(e, t, r) {
  return t = K_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K_(e) {
  var t = N8(e, "string");
  return Wa(t) == "symbol" ? t : String(t);
}
function N8(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = 32, kv = /* @__PURE__ */ function(e) {
  R8(t, e);
  function t() {
    return $8(this, t), I8(this, t, arguments);
  }
  return M8(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = $r / 2, u = $r / 6, s = $r / 3, l = n.inactive ? i : n.color;
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
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat($r, "M").concat(2 * s, ",").concat(a, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(s, ",").concat(a),
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
          var f = T8({}, n);
          return delete f.legendIcon, /* @__PURE__ */ k.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ k.createElement(Iv, {
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
      var n = this, i = this.props, a = i.payload, u = i.iconSize, s = i.layout, l = i.formatter, f = i.inactiveColor, d = {
        x: 0,
        y: 0,
        width: $r,
        height: $r
      }, h = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, b) {
        var y = g.formatter || l, w = Me(wu(wu({
          "recharts-legend-item": !0
        }, "legend-item-".concat(b), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var A = Pe(g.value) ? null : g.value;
        Xr(
          !Pe(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = g.inactive ? f : g.color;
        return /* @__PURE__ */ k.createElement("li", qh({
          className: w,
          style: h,
          key: "legend-item-".concat(b)
        }, Qi(n.props, g, b)), /* @__PURE__ */ k.createElement(Lh, {
          width: u,
          height: u,
          viewBox: d,
          style: v
        }, n.renderIcon(g)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, y ? y(A, g, b) : A));
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
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]), t;
}(Lr);
wu(kv, "displayName", "Legend");
wu(kv, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var D8 = Nl;
function L8() {
  this.__data__ = new D8(), this.size = 0;
}
var B8 = L8;
function F8(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var W8 = F8;
function z8(e) {
  return this.__data__.get(e);
}
var U8 = z8;
function H8(e) {
  return this.__data__.has(e);
}
var G8 = H8, K8 = Nl, q8 = _v, V8 = Ov, Y8 = 200;
function X8(e, t) {
  var r = this.__data__;
  if (r instanceof K8) {
    var n = r.__data__;
    if (!q8 || n.length < Y8 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new V8(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Z8 = X8, J8 = Nl, Q8 = B8, eL = W8, tL = U8, rL = G8, nL = Z8;
function xo(e) {
  var t = this.__data__ = new J8(e);
  this.size = t.size;
}
xo.prototype.clear = Q8;
xo.prototype.delete = eL;
xo.prototype.get = tL;
xo.prototype.has = rL;
xo.prototype.set = nL;
var q_ = xo, iL = "__lodash_hash_undefined__";
function aL(e) {
  return this.__data__.set(e, iL), this;
}
var oL = aL;
function uL(e) {
  return this.__data__.has(e);
}
var sL = uL, cL = Ov, lL = oL, fL = sL;
function Lc(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new cL(); ++t < r; )
    this.add(e[t]);
}
Lc.prototype.add = Lc.prototype.push = lL;
Lc.prototype.has = fL;
var V_ = Lc;
function dL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Y_ = dL;
function hL(e, t) {
  return e.has(t);
}
var X_ = hL, pL = V_, vL = Y_, gL = X_, yL = 1, mL = 2;
function bL(e, t, r, n, i, a) {
  var u = r & yL, s = e.length, l = t.length;
  if (s != l && !(u && l > s))
    return !1;
  var f = a.get(e), d = a.get(t);
  if (f && d)
    return f == t && d == e;
  var h = -1, v = !0, g = r & mL ? new pL() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < s; ) {
    var b = e[h], y = t[h];
    if (n)
      var w = u ? n(y, b, h, t, e, a) : n(b, y, h, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!vL(t, function(A, O) {
        if (!gL(g, O) && (b === A || i(b, A, r, n, a)))
          return g.push(O);
      })) {
        v = !1;
        break;
      }
    } else if (!(b === y || i(b, y, r, n, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var Z_ = bL, xL = vn, wL = xL.Uint8Array, _L = wL;
function OL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var AL = OL;
function SL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var jv = SL, Kb = as, qb = _L, PL = wv, EL = Z_, TL = AL, $L = jv, CL = 1, ML = 2, IL = "[object Boolean]", kL = "[object Date]", jL = "[object Error]", RL = "[object Map]", NL = "[object Number]", DL = "[object RegExp]", LL = "[object Set]", BL = "[object String]", FL = "[object Symbol]", WL = "[object ArrayBuffer]", zL = "[object DataView]", Vb = Kb ? Kb.prototype : void 0, Yd = Vb ? Vb.valueOf : void 0;
function UL(e, t, r, n, i, a, u) {
  switch (r) {
    case zL:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case WL:
      return !(e.byteLength != t.byteLength || !a(new qb(e), new qb(t)));
    case IL:
    case kL:
    case NL:
      return PL(+e, +t);
    case jL:
      return e.name == t.name && e.message == t.message;
    case DL:
    case BL:
      return e == t + "";
    case RL:
      var s = TL;
    case LL:
      var l = n & CL;
      if (s || (s = $L), e.size != t.size && !l)
        return !1;
      var f = u.get(e);
      if (f)
        return f == t;
      n |= ML, u.set(e, t);
      var d = EL(s(e), s(t), n, i, a, u);
      return u.delete(e), d;
    case FL:
      if (Yd)
        return Yd.call(e) == Yd.call(t);
  }
  return !1;
}
var HL = UL;
function GL(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var J_ = GL, KL = J_, qL = rr;
function VL(e, t, r) {
  var n = t(e);
  return qL(e) ? n : KL(n, r(e));
}
var YL = VL;
function XL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var u = e[r];
    t(u, r, e) && (a[i++] = u);
  }
  return a;
}
var ZL = XL;
function JL() {
  return [];
}
var QL = JL, e6 = ZL, t6 = QL, r6 = Object.prototype, n6 = r6.propertyIsEnumerable, Yb = Object.getOwnPropertySymbols, i6 = Yb ? function(e) {
  return e == null ? [] : (e = Object(e), e6(Yb(e), function(t) {
    return n6.call(e, t);
  }));
} : t6, a6 = i6;
function o6(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var u6 = o6, s6 = zn, c6 = Un, l6 = "[object Arguments]";
function f6(e) {
  return c6(e) && s6(e) == l6;
}
var d6 = f6, Xb = d6, h6 = Un, Q_ = Object.prototype, p6 = Q_.hasOwnProperty, v6 = Q_.propertyIsEnumerable, g6 = Xb(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xb : function(e) {
  return h6(e) && p6.call(e, "callee") && !v6.call(e, "callee");
}, Rv = g6, Bc = { exports: {} };
function y6() {
  return !1;
}
var m6 = y6;
Bc.exports;
(function(e, t) {
  var r = vn, n = m6, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, u = a && a.exports === i, s = u ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || n;
  e.exports = f;
})(Bc, Bc.exports);
var eO = Bc.exports, b6 = 9007199254740991, x6 = /^(?:0|[1-9]\d*)$/;
function w6(e, t) {
  var r = typeof e;
  return t = t ?? b6, !!t && (r == "number" || r != "symbol" && x6.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Nv = w6, _6 = 9007199254740991;
function O6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _6;
}
var Dv = O6, A6 = zn, S6 = Dv, P6 = Un, E6 = "[object Arguments]", T6 = "[object Array]", $6 = "[object Boolean]", C6 = "[object Date]", M6 = "[object Error]", I6 = "[object Function]", k6 = "[object Map]", j6 = "[object Number]", R6 = "[object Object]", N6 = "[object RegExp]", D6 = "[object Set]", L6 = "[object String]", B6 = "[object WeakMap]", F6 = "[object ArrayBuffer]", W6 = "[object DataView]", z6 = "[object Float32Array]", U6 = "[object Float64Array]", H6 = "[object Int8Array]", G6 = "[object Int16Array]", K6 = "[object Int32Array]", q6 = "[object Uint8Array]", V6 = "[object Uint8ClampedArray]", Y6 = "[object Uint16Array]", X6 = "[object Uint32Array]", st = {};
st[z6] = st[U6] = st[H6] = st[G6] = st[K6] = st[q6] = st[V6] = st[Y6] = st[X6] = !0;
st[E6] = st[T6] = st[F6] = st[$6] = st[W6] = st[C6] = st[M6] = st[I6] = st[k6] = st[j6] = st[R6] = st[N6] = st[D6] = st[L6] = st[B6] = !1;
function Z6(e) {
  return P6(e) && S6(e.length) && !!st[A6(e)];
}
var J6 = Z6;
function Q6(e) {
  return function(t) {
    return e(t);
  };
}
var tO = Q6, Fc = { exports: {} };
Fc.exports;
(function(e, t) {
  var r = l_, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, u = a && r.process, s = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Fc, Fc.exports);
var eB = Fc.exports, tB = J6, rB = tO, Zb = eB, Jb = Zb && Zb.isTypedArray, nB = Jb ? rB(Jb) : tB, rO = nB, iB = u6, aB = Rv, oB = rr, uB = eO, sB = Nv, cB = rO, lB = Object.prototype, fB = lB.hasOwnProperty;
function dB(e, t) {
  var r = oB(e), n = !r && aB(e), i = !r && !n && uB(e), a = !r && !n && !i && cB(e), u = r || n || i || a, s = u ? iB(e.length, String) : [], l = s.length;
  for (var f in e)
    (t || fB.call(e, f)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    sB(f, l))) && s.push(f);
  return s;
}
var hB = dB, pB = Object.prototype;
function vB(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || pB;
  return e === r;
}
var gB = vB;
function yB(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var nO = yB, mB = nO, bB = mB(Object.keys, Object), xB = bB, wB = gB, _B = xB, OB = Object.prototype, AB = OB.hasOwnProperty;
function SB(e) {
  if (!wB(e))
    return _B(e);
  var t = [];
  for (var r in Object(e))
    AB.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var PB = SB, EB = xv, TB = Dv;
function $B(e) {
  return e != null && TB(e.length) && !EB(e);
}
var us = $B, CB = hB, MB = PB, IB = us;
function kB(e) {
  return IB(e) ? CB(e) : MB(e);
}
var Ul = kB, jB = YL, RB = a6, NB = Ul;
function DB(e) {
  return jB(e, NB, RB);
}
var LB = DB, Qb = LB, BB = 1, FB = Object.prototype, WB = FB.hasOwnProperty;
function zB(e, t, r, n, i, a) {
  var u = r & BB, s = Qb(e), l = s.length, f = Qb(t), d = f.length;
  if (l != d && !u)
    return !1;
  for (var h = l; h--; ) {
    var v = s[h];
    if (!(u ? v in t : WB.call(t, v)))
      return !1;
  }
  var g = a.get(e), b = a.get(t);
  if (g && b)
    return g == t && b == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var w = u; ++h < l; ) {
    v = s[h];
    var A = e[v], O = t[v];
    if (n)
      var S = u ? n(O, A, v, t, e, a) : n(A, O, v, e, t, a);
    if (!(S === void 0 ? A === O || i(A, O, r, n, a) : S)) {
      y = !1;
      break;
    }
    w || (w = v == "constructor");
  }
  if (y && !w) {
    var _ = e.constructor, x = t.constructor;
    _ != x && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var UB = zB, HB = aa, GB = vn, KB = HB(GB, "DataView"), qB = KB, VB = aa, YB = vn, XB = VB(YB, "Promise"), ZB = XB, JB = aa, QB = vn, eF = JB(QB, "Set"), iO = eF, tF = aa, rF = vn, nF = tF(rF, "WeakMap"), iF = nF, Yh = qB, Xh = _v, Zh = ZB, Jh = iO, Qh = iF, aO = zn, wo = d_, e0 = "[object Map]", aF = "[object Object]", t0 = "[object Promise]", r0 = "[object Set]", n0 = "[object WeakMap]", i0 = "[object DataView]", oF = wo(Yh), uF = wo(Xh), sF = wo(Zh), cF = wo(Jh), lF = wo(Qh), Fi = aO;
(Yh && Fi(new Yh(new ArrayBuffer(1))) != i0 || Xh && Fi(new Xh()) != e0 || Zh && Fi(Zh.resolve()) != t0 || Jh && Fi(new Jh()) != r0 || Qh && Fi(new Qh()) != n0) && (Fi = function(e) {
  var t = aO(e), r = t == aF ? e.constructor : void 0, n = r ? wo(r) : "";
  if (n)
    switch (n) {
      case oF:
        return i0;
      case uF:
        return e0;
      case sF:
        return t0;
      case cF:
        return r0;
      case lF:
        return n0;
    }
  return t;
});
var fF = Fi, Xd = q_, dF = Z_, hF = HL, pF = UB, a0 = fF, o0 = rr, u0 = eO, vF = rO, gF = 1, s0 = "[object Arguments]", c0 = "[object Array]", dc = "[object Object]", yF = Object.prototype, l0 = yF.hasOwnProperty;
function mF(e, t, r, n, i, a) {
  var u = o0(e), s = o0(t), l = u ? c0 : a0(e), f = s ? c0 : a0(t);
  l = l == s0 ? dc : l, f = f == s0 ? dc : f;
  var d = l == dc, h = f == dc, v = l == f;
  if (v && u0(e)) {
    if (!u0(t))
      return !1;
    u = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new Xd()), u || vF(e) ? dF(e, t, r, n, i, a) : hF(e, t, l, r, n, i, a);
  if (!(r & gF)) {
    var g = d && l0.call(e, "__wrapped__"), b = h && l0.call(t, "__wrapped__");
    if (g || b) {
      var y = g ? e.value() : e, w = b ? t.value() : t;
      return a || (a = new Xd()), i(y, w, r, n, a);
    }
  }
  return v ? (a || (a = new Xd()), pF(e, t, r, n, i, a)) : !1;
}
var bF = mF, xF = bF, f0 = Un;
function oO(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !f0(e) && !f0(t) ? e !== e && t !== t : xF(e, t, r, n, oO, i);
}
var Lv = oO, wF = q_, _F = Lv, OF = 1, AF = 2;
function SF(e, t, r, n) {
  var i = r.length, a = i, u = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], f = e[l], d = s[1];
    if (u && s[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var h = new wF();
      if (n)
        var v = n(f, d, l, e, t, h);
      if (!(v === void 0 ? _F(d, f, OF | AF, n, h) : v))
        return !1;
    }
  }
  return !0;
}
var PF = SF, EF = wi;
function TF(e) {
  return e === e && !EF(e);
}
var uO = TF, $F = uO, CF = Ul;
function MF(e) {
  for (var t = CF(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, $F(i)];
  }
  return t;
}
var IF = MF;
function kF(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var sO = kF, jF = PF, RF = IF, NF = sO;
function DF(e) {
  var t = RF(e);
  return t.length == 1 && t[0][2] ? NF(t[0][0], t[0][1]) : function(r) {
    return r === e || jF(r, e, t);
  };
}
var LF = DF;
function BF(e, t) {
  return e != null && t in Object(e);
}
var FF = BF, WF = y_, zF = Rv, UF = rr, HF = Nv, GF = Dv, KF = Ll;
function qF(e, t, r) {
  t = WF(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var u = KF(t[n]);
    if (!(a = e != null && r(e, u)))
      break;
    e = e[u];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && GF(i) && HF(u, i) && (UF(e) || zF(e)));
}
var VF = qF, YF = FF, XF = VF;
function ZF(e, t) {
  return e != null && XF(e, t, YF);
}
var JF = ZF, QF = Lv, eW = m_, tW = JF, rW = bv, nW = uO, iW = sO, aW = Ll, oW = 1, uW = 2;
function sW(e, t) {
  return rW(e) && nW(t) ? iW(aW(e), t) : function(r) {
    var n = eW(r, e);
    return n === void 0 && n === t ? tW(r, e) : QF(t, n, oW | uW);
  };
}
var cW = sW;
function lW(e) {
  return e;
}
var _o = lW;
function fW(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var dW = fW, hW = Pv;
function pW(e) {
  return function(t) {
    return hW(t, e);
  };
}
var vW = pW, gW = dW, yW = vW, mW = bv, bW = Ll;
function xW(e) {
  return mW(e) ? gW(bW(e)) : yW(e);
}
var wW = xW, _W = LF, OW = cW, AW = _o, SW = rr, PW = wW;
function EW(e) {
  return typeof e == "function" ? e : e == null ? AW : typeof e == "object" ? SW(e) ? OW(e[0], e[1]) : _W(e) : PW(e);
}
var gn = EW;
function TW(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var cO = TW;
function $W(e) {
  return e !== e;
}
var CW = $W;
function MW(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var IW = MW, kW = cO, jW = CW, RW = IW;
function NW(e, t, r) {
  return t === t ? RW(e, t, r) : kW(e, jW, r);
}
var DW = NW, LW = DW;
function BW(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && LW(e, t, 0) > -1;
}
var FW = BW;
function WW(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var zW = WW;
function UW() {
}
var HW = UW, Zd = iO, GW = HW, KW = jv, qW = 1 / 0, VW = Zd && 1 / KW(new Zd([, -0]))[1] == qW ? function(e) {
  return new Zd(e);
} : GW, YW = VW, XW = V_, ZW = FW, JW = zW, QW = X_, ez = YW, tz = jv, rz = 200;
function nz(e, t, r) {
  var n = -1, i = ZW, a = e.length, u = !0, s = [], l = s;
  if (r)
    u = !1, i = JW;
  else if (a >= rz) {
    var f = t ? null : ez(e);
    if (f)
      return tz(f);
    u = !1, i = QW, l = new XW();
  } else
    l = t ? [] : s;
  e:
    for (; ++n < a; ) {
      var d = e[n], h = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, u && h === h) {
        for (var v = l.length; v--; )
          if (l[v] === h)
            continue e;
        t && l.push(h), s.push(d);
      } else i(l, h, r) || (l !== s && l.push(h), s.push(d));
    }
  return s;
}
var iz = nz, az = gn, oz = iz;
function uz(e, t) {
  return e && e.length ? oz(e, az(t)) : [];
}
var sz = uz;
const d0 = /* @__PURE__ */ Ze(sz);
function lO(e, t, r) {
  return t === !0 ? d0(e, r) : Pe(t) ? d0(e, t) : e;
}
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
var cz = ["ref"];
function h0(e, t) {
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
    t % 2 ? h0(Object(r), !0).forEach(function(n) {
      Hl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function p0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hO(n.key), n);
  }
}
function fz(e, t, r) {
  return t && p0(e.prototype, t), r && p0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dz(e, t, r) {
  return t = Wc(t), hz(e, fO() ? Reflect.construct(t, r || [], Wc(e).constructor) : t.apply(e, r));
}
function hz(e, t) {
  if (t && (za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dO(e);
}
function fO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fO = function() {
    return !!e;
  })();
}
function Wc(e) {
  return Wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wc(e);
}
function dO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ep(e, t);
}
function ep(e, t) {
  return ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ep(e, t);
}
function Hl(e, t, r) {
  return t = hO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hO(e) {
  var t = vz(e, "string");
  return za(t) == "symbol" ? t : String(t);
}
function vz(e, t) {
  if (za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gz(e, t) {
  if (e == null) return {};
  var r = yz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yz(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function mz(e) {
  return e.value;
}
function bz(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var r = gz(t, cz);
  return /* @__PURE__ */ k.createElement(kv, r);
}
var v0 = 1, Ua = /* @__PURE__ */ function(e) {
  pz(t, e);
  function t() {
    var r;
    lz(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = dz(this, t, [].concat(i)), Hl(dO(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return fz(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > v0 || Math.abs(i.height - this.lastBoundingBox.height) > v0) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      return Ni(Ni({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, u = i.width, s = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = Ni(Ni({
        position: "absolute",
        width: u || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, bz(a, Ni(Ni({}, this.props), {}, {
        payload: lO(d, f, mz)
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
}(Lr);
Hl(Ua, "displayName", "Legend");
Hl(Ua, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var g0 = as, xz = Rv, wz = rr, y0 = g0 ? g0.isConcatSpreadable : void 0;
function _z(e) {
  return wz(e) || xz(e) || !!(y0 && e && e[y0]);
}
var Oz = _z, Az = J_, Sz = Oz;
function pO(e, t, r, n, i) {
  var a = -1, u = e.length;
  for (r || (r = Sz), i || (i = []); ++a < u; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? pO(s, t - 1, r, n, i) : Az(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var vO = pO;
function Pz(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), u = n(t), s = u.length; s--; ) {
      var l = u[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Ez = Pz, Tz = Ez, $z = Tz(), Cz = $z, Mz = Cz, Iz = Ul;
function kz(e, t) {
  return e && Mz(e, t, Iz);
}
var gO = kz, jz = us;
function Rz(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!jz(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, u = Object(r); (t ? a-- : ++a < i) && n(u[a], a, u) !== !1; )
      ;
    return r;
  };
}
var Nz = Rz, Dz = gO, Lz = Nz, Bz = Lz(Dz), Bv = Bz, Fz = Bv, Wz = us;
function zz(e, t) {
  var r = -1, n = Wz(e) ? Array(e.length) : [];
  return Fz(e, function(i, a, u) {
    n[++r] = t(i, a, u);
  }), n;
}
var yO = zz;
function Uz(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var Hz = Uz, m0 = po;
function Gz(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = m0(e), u = t !== void 0, s = t === null, l = t === t, f = m0(t);
    if (!s && !f && !a && e > t || a && u && l && !s && !f || n && u && l || !r && l || !i)
      return 1;
    if (!n && !a && !f && e < t || f && r && i && !n && !a || s && r && i || !u && i || !l)
      return -1;
  }
  return 0;
}
var Kz = Gz, qz = Kz;
function Vz(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, u = i.length, s = r.length; ++n < u; ) {
    var l = qz(i[n], a[n]);
    if (l) {
      if (n >= s)
        return l;
      var f = r[n];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Yz = Vz, Jd = Sv, Xz = Pv, Zz = gn, Jz = yO, Qz = Hz, e4 = tO, t4 = Yz, r4 = _o, n4 = rr;
function i4(e, t, r) {
  t.length ? t = Jd(t, function(a) {
    return n4(a) ? function(u) {
      return Xz(u, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [r4];
  var n = -1;
  t = Jd(t, e4(Zz));
  var i = Jz(e, function(a, u, s) {
    var l = Jd(t, function(f) {
      return f(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return Qz(i, function(a, u) {
    return t4(a, u, r);
  });
}
var a4 = i4;
function o4(e, t, r) {
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
var u4 = o4, s4 = u4, b0 = Math.max;
function c4(e, t, r) {
  return t = b0(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = b0(n.length - t, 0), u = Array(a); ++i < a; )
      u[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(u), s4(e, this, s);
  };
}
var l4 = c4;
function f4(e) {
  return function() {
    return e;
  };
}
var d4 = f4, h4 = aa, p4 = function() {
  try {
    var e = h4(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), mO = p4, v4 = d4, x0 = mO, g4 = _o, y4 = x0 ? function(e, t) {
  return x0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: v4(t),
    writable: !0
  });
} : g4, m4 = y4, b4 = 800, x4 = 16, w4 = Date.now;
function _4(e) {
  var t = 0, r = 0;
  return function() {
    var n = w4(), i = x4 - (n - r);
    if (r = n, i > 0) {
      if (++t >= b4)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var O4 = _4, A4 = m4, S4 = O4, P4 = S4(A4), E4 = P4, T4 = _o, $4 = l4, C4 = E4;
function M4(e, t) {
  return C4($4(e, t, T4), e + "");
}
var I4 = M4, k4 = wv, j4 = us, R4 = Nv, N4 = wi;
function D4(e, t, r) {
  if (!N4(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? j4(r) && R4(t, r.length) : n == "string" && t in r) ? k4(r[t], e) : !1;
}
var Gl = D4, L4 = vO, B4 = a4, F4 = I4, w0 = Gl, W4 = F4(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && w0(e, t[0], t[1]) ? t = [] : r > 2 && w0(t[0], t[1], t[2]) && (t = [t[0]]), B4(e, L4(t, 1), []);
}), z4 = W4;
const Fv = /* @__PURE__ */ Ze(z4);
function _u(e) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _u(e);
}
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
function U4(e, t) {
  return q4(e) || K4(e, t) || G4(e, t) || H4();
}
function H4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G4(e, t) {
  if (e) {
    if (typeof e == "string") return _0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _0(e, t);
  }
}
function _0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function K4(e, t) {
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
function q4(e) {
  if (Array.isArray(e)) return e;
}
function O0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? O0(Object(r), !0).forEach(function(n) {
      V4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V4(e, t, r) {
  return t = Y4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y4(e) {
  var t = X4(e, "string");
  return _u(t) == "symbol" ? t : String(t);
}
function X4(e, t) {
  if (_u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z4(e) {
  return Array.isArray(e) && Et(e[0]) && Et(e[1]) ? e.join(" ~ ") : e;
}
var J4 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, u = t.itemStyle, s = u === void 0 ? {} : u, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, b = t.labelClassName, y = t.label, w = t.labelFormatter, A = t.accessibilityLayer, O = A === void 0 ? !1 : A, S = function() {
    if (d && d.length) {
      var N = {
        padding: 0,
        margin: 0
      }, U = (v ? Fv(d, v) : d).map(function(z, J) {
        if (z.type === "none")
          return null;
        var H = Qd({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: z.color || "#000"
        }, s), Z = z.formatter || h || Z4, K = z.value, ue = z.name, G = K, X = ue;
        if (Z && G != null && X != null) {
          var ae = Z(K, ue, z, J, d);
          if (Array.isArray(ae)) {
            var ce = U4(ae, 2);
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
          }, Et(X) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Et(X) ? /* @__PURE__ */ k.createElement("span", {
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
  }, _ = Qd({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), x = Qd({
    margin: 0
  }, f), E = !Te(y), $ = E ? y : "", M = Me("recharts-default-tooltip", g), F = Me("recharts-tooltip-label", b);
  E && w && d !== void 0 && d !== null && ($ = w(y, d));
  var D = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", tp({
    className: M,
    style: _
  }, D), /* @__PURE__ */ k.createElement("p", {
    className: F,
    style: x
  }, /* @__PURE__ */ k.isValidElement($) ? $ : "".concat($)), S());
};
function Ou(e) {
  "@babel/helpers - typeof";
  return Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ou(e);
}
function hc(e, t, r) {
  return t = Q4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q4(e) {
  var t = eU(e, "string");
  return Ou(t) == "symbol" ? t : String(t);
}
function eU(e, t) {
  if (Ou(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ou(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eu = "recharts-tooltip-wrapper", tU = {
  visibility: "hidden"
};
function rU(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Me(eu, hc(hc(hc(hc({}, "".concat(eu, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(eu, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(eu, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(eu, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function A0(e) {
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
  var b = h + s, y = l[n] + f;
  return b > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function nU(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function iU(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, u = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, f, d, h;
  return u.height > 0 && u.width > 0 && r ? (d = A0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = A0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = nU({
    translateX: d,
    translateY: h,
    useTranslate3d: s
  })) : f = tU, {
    cssProperties: f,
    cssClasses: rU({
      translateX: d,
      translateY: h,
      coordinate: r
    })
  };
}
function Ha(e) {
  "@babel/helpers - typeof";
  return Ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ha(e);
}
function S0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? S0(Object(r), !0).forEach(function(n) {
      ip(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oU(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xO(n.key), n);
  }
}
function uU(e, t, r) {
  return t && oU(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sU(e, t, r) {
  return t = zc(t), cU(e, bO() ? Reflect.construct(t, r || [], zc(e).constructor) : t.apply(e, r));
}
function cU(e, t) {
  if (t && (Ha(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rp(e);
}
function bO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bO = function() {
    return !!e;
  })();
}
function zc(e) {
  return zc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zc(e);
}
function rp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && np(e, t);
}
function np(e, t) {
  return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, np(e, t);
}
function ip(e, t, r) {
  return t = xO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xO(e) {
  var t = fU(e, "string");
  return Ha(t) == "symbol" ? t : String(t);
}
function fU(e, t) {
  if (Ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var E0 = 1, dU = /* @__PURE__ */ function(e) {
  lU(t, e);
  function t() {
    var r;
    aU(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = sU(this, t, [].concat(i)), ip(rp(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ip(rp(r), "handleKeyDown", function(u) {
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
  return uU(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > E0 || Math.abs(n.height - this.state.lastBoundingBox.height) > E0) && this.setState({
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
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, b = i.position, y = i.reverseDirection, w = i.useTranslate3d, A = i.viewBox, O = i.wrapperStyle, S = iU({
        allowEscapeViewBox: u,
        coordinate: d,
        offsetTopLeft: g,
        position: b,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: w,
        viewBox: A
      }), _ = S.cssClasses, x = S.cssProperties, E = P0(P0({
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
}(Lr), hU = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Zr = {
  isSsr: hU(),
  get: function(t) {
    return Zr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Zr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Zr[i] = t[i];
      });
    }
  }
};
function Ga(e) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e);
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
function $0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T0(Object(r), !0).forEach(function(n) {
      Wv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vU(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _O(n.key), n);
  }
}
function gU(e, t, r) {
  return t && vU(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yU(e, t, r) {
  return t = Uc(t), mU(e, wO() ? Reflect.construct(t, r || [], Uc(e).constructor) : t.apply(e, r));
}
function mU(e, t) {
  if (t && (Ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bU(e);
}
function bU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wO = function() {
    return !!e;
  })();
}
function Uc(e) {
  return Uc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Uc(e);
}
function xU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ap(e, t);
}
function ap(e, t) {
  return ap = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ap(e, t);
}
function Wv(e, t, r) {
  return t = _O(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _O(e) {
  var t = wU(e, "string");
  return Ga(t) == "symbol" ? t : String(t);
}
function wU(e, t) {
  if (Ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _U(e) {
  return e.dataKey;
}
function OU(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(J4, t);
}
var sn = /* @__PURE__ */ function(e) {
  xU(t, e);
  function t() {
    return pU(this, t), yU(this, t, arguments);
  }
  return gU(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, b = i.payload, y = i.payloadUniqBy, w = i.position, A = i.reverseDirection, O = i.useTranslate3d, S = i.viewBox, _ = i.wrapperStyle, x = b ?? [];
      h && x.length && (x = lO(b.filter(function($) {
        return $.value != null && ($.hide !== !0 || n.props.includeHidden);
      }), y, _U));
      var E = x.length > 0;
      return /* @__PURE__ */ k.createElement(dU, {
        allowEscapeViewBox: u,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: g,
        position: w,
        reverseDirection: A,
        useTranslate3d: O,
        viewBox: S,
        wrapperStyle: _
      }, OU(f, $0($0({}, this.props), {}, {
        payload: x
      })));
    }
  }]), t;
}(Lr);
Wv(sn, "displayName", "Tooltip");
Wv(sn, "defaultProps", {
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
  isAnimationActive: !Zr.isSsr,
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
var AU = vn, SU = function() {
  return AU.Date.now();
}, PU = SU, EU = /\s/;
function TU(e) {
  for (var t = e.length; t-- && EU.test(e.charAt(t)); )
    ;
  return t;
}
var $U = TU, CU = $U, MU = /^\s+/;
function IU(e) {
  return e && e.slice(0, CU(e) + 1).replace(MU, "");
}
var kU = IU, jU = kU, C0 = wi, RU = po, M0 = NaN, NU = /^[-+]0x[0-9a-f]+$/i, DU = /^0b[01]+$/i, LU = /^0o[0-7]+$/i, BU = parseInt;
function FU(e) {
  if (typeof e == "number")
    return e;
  if (RU(e))
    return M0;
  if (C0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = C0(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jU(e);
  var r = DU.test(e);
  return r || LU.test(e) ? BU(e.slice(2), r ? 2 : 8) : NU.test(e) ? M0 : +e;
}
var OO = FU, WU = wi, eh = PU, I0 = OO, zU = "Expected a function", UU = Math.max, HU = Math.min;
function GU(e, t, r) {
  var n, i, a, u, s, l, f = 0, d = !1, h = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(zU);
  t = I0(t) || 0, WU(r) && (d = !!r.leading, h = "maxWait" in r, a = h ? UU(I0(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);
  function g(E) {
    var $ = n, M = i;
    return n = i = void 0, f = E, u = e.apply(M, $), u;
  }
  function b(E) {
    return f = E, s = setTimeout(A, t), d ? g(E) : u;
  }
  function y(E) {
    var $ = E - l, M = E - f, F = t - $;
    return h ? HU(F, a - M) : F;
  }
  function w(E) {
    var $ = E - l, M = E - f;
    return l === void 0 || $ >= t || $ < 0 || h && M >= a;
  }
  function A() {
    var E = eh();
    if (w(E))
      return O(E);
    s = setTimeout(A, y(E));
  }
  function O(E) {
    return s = void 0, v && n ? g(E) : (n = i = void 0, u);
  }
  function S() {
    s !== void 0 && clearTimeout(s), f = 0, n = l = i = s = void 0;
  }
  function _() {
    return s === void 0 ? u : O(eh());
  }
  function x() {
    var E = eh(), $ = w(E);
    if (n = arguments, i = this, l = E, $) {
      if (s === void 0)
        return b(l);
      if (h)
        return clearTimeout(s), s = setTimeout(A, t), g(l);
    }
    return s === void 0 && (s = setTimeout(A, t)), u;
  }
  return x.cancel = S, x.flush = _, x;
}
var KU = GU, qU = KU, VU = wi, YU = "Expected a function";
function XU(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(YU);
  return VU(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), qU(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var ZU = XU;
const AO = /* @__PURE__ */ Ze(ZU);
function Au(e) {
  "@babel/helpers - typeof";
  return Au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Au(e);
}
function k0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? k0(Object(r), !0).forEach(function(n) {
      JU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JU(e, t, r) {
  return t = QU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QU(e) {
  var t = e5(e, "string");
  return Au(t) == "symbol" ? t : String(t);
}
function e5(e, t) {
  if (Au(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Au(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t5(e, t) {
  return a5(e) || i5(e, t) || n5(e, t) || r5();
}
function r5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n5(e, t) {
  if (e) {
    if (typeof e == "string") return j0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j0(e, t);
  }
}
function j0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i5(e, t) {
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
function a5(e) {
  if (Array.isArray(e)) return e;
}
var o5 = /* @__PURE__ */ pi(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, u = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, b = e.debounce, y = b === void 0 ? 0 : b, w = e.id, A = e.className, O = e.onResize, S = e.style, _ = S === void 0 ? {} : S, x = Jr(null), E = Jr();
  E.current = O, q1(t, function() {
    return Object.defineProperty(x.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), x.current;
      },
      configurable: !0
    });
  });
  var $ = jr({
    containerWidth: i.width,
    containerHeight: i.height
  }), M = t5($, 2), F = M[0], D = M[1], B = Vi(function(U, z) {
    D(function(J) {
      var H = Math.round(U), Z = Math.round(z);
      return J.containerWidth === H && J.containerHeight === Z ? J : {
        containerWidth: H,
        containerHeight: Z
      };
    });
  }, []);
  Rr(function() {
    var U = function(ue) {
      var G, X = ue[0].contentRect, ae = X.width, ce = X.height;
      B(ae, ce), (G = E.current) === null || G === void 0 || G.call(E, ae, ce);
    };
    y > 0 && (U = AO(U, y, {
      trailing: !0,
      leading: !1
    }));
    var z = new ResizeObserver(U), J = x.current.getBoundingClientRect(), H = J.width, Z = J.height;
    return B(H, Z), z.observe(x.current), function() {
      z.disconnect();
    };
  }, [B, y]);
  var N = fo(function() {
    var U = F.containerWidth, z = F.containerHeight;
    if (U < 0 || z < 0)
      return null;
    Xr(Ui(u) || Ui(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, u, l), Xr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var J = Ui(u) ? U : u, H = Ui(l) ? z : l;
    r && r > 0 && (J ? H = J / r : H && (J = H * r), v && H > v && (H = v)), Xr(J > 0 || H > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, J, H, u, l, d, h, r);
    var Z = !Array.isArray(g) && kh.isElement(g) && jn(g.type).endsWith("Chart");
    return k.Children.map(g, function(K) {
      return kh.isElement(K) ? /* @__PURE__ */ At(K, pc({
        width: J,
        height: H
      }, Z ? {
        style: pc({
          height: "100%",
          width: "100%",
          maxHeight: H,
          maxWidth: J
        }, K.props.style)
      } : {})) : K;
    });
  }, [r, g, l, v, h, d, F, u]);
  return /* @__PURE__ */ k.createElement("div", {
    id: w ? "".concat(w) : void 0,
    className: Me("recharts-responsive-container", A),
    style: pc(pc({}, _), {}, {
      width: u,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: x
  }, N);
}), zv = function(t) {
  return null;
};
zv.displayName = "Cell";
function Su(e) {
  "@babel/helpers - typeof";
  return Su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Su(e);
}
function R0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R0(Object(r), !0).forEach(function(n) {
      u5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u5(e, t, r) {
  return t = s5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s5(e) {
  var t = c5(e, "string");
  return Su(t) == "symbol" ? t : String(t);
}
function c5(e, t) {
  if (Su(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Su(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sa = {
  widthCache: {},
  cacheCount: 0
}, l5 = 2e3, f5 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, N0 = "recharts_measurement_span";
function d5(e) {
  var t = op({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var du = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Zr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = d5(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById(N0);
    a || (a = document.createElement("span"), a.setAttribute("id", N0), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var u = op(op({}, f5), n);
    Object.assign(a.style, u), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = {
      width: s.width,
      height: s.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > l5 && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, h5 = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Pu(e) {
  "@babel/helpers - typeof";
  return Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pu(e);
}
function Hc(e, t) {
  return y5(e) || g5(e, t) || v5(e, t) || p5();
}
function p5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v5(e, t) {
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
function g5(e, t) {
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
function y5(e) {
  if (Array.isArray(e)) return e;
}
function m5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, x5(n.key), n);
  }
}
function b5(e, t, r) {
  return t && L0(e.prototype, t), r && L0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function x5(e) {
  var t = w5(e, "string");
  return Pu(t) == "symbol" ? t : String(t);
}
function w5(e, t) {
  if (Pu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var B0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, F0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, _5 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, O5 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, SO = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, A5 = Object.keys(SO), Ca = "NaN";
function S5(e, t) {
  return e * SO[t];
}
var vc = /* @__PURE__ */ function() {
  function e(t, r) {
    m5(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !_5.test(r) && (this.num = NaN, this.unit = ""), A5.includes(r) && (this.num = S5(t, r), this.unit = "px");
  }
  return b5(e, [{
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
      var n, i = (n = O5.exec(r)) !== null && n !== void 0 ? n : [], a = Hc(i, 3), u = a[1], s = a[2];
      return new e(parseFloat(u), s ?? "");
    }
  }]), e;
}();
function PO(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = B0.exec(t)) !== null && r !== void 0 ? r : [], i = Hc(n, 4), a = i[1], u = i[2], s = i[3], l = vc.parse(a ?? ""), f = vc.parse(s ?? ""), d = u === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(B0, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = F0.exec(t)) !== null && h !== void 0 ? h : [], g = Hc(v, 4), b = g[1], y = g[2], w = g[3], A = vc.parse(b ?? ""), O = vc.parse(w ?? ""), S = y === "+" ? A.add(O) : A.subtract(O);
    if (S.isNaN())
      return Ca;
    t = t.replace(F0, S.toString());
  }
  return t;
}
var W0 = /\(([^()]*)\)/;
function P5(e) {
  for (var t = e; t.includes("("); ) {
    var r = W0.exec(t), n = Hc(r, 2), i = n[1];
    t = t.replace(W0, PO(i));
  }
  return t;
}
function E5(e) {
  var t = e.replace(/\s+/g, "");
  return t = P5(t), t = PO(t), t;
}
function T5(e) {
  try {
    return E5(e);
  } catch {
    return Ca;
  }
}
function th(e) {
  var t = T5(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var $5 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], C5 = ["dx", "dy", "angle", "className", "breakAll"];
function up() {
  return up = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, up.apply(this, arguments);
}
function z0(e, t) {
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
function U0(e, t) {
  return R5(e) || j5(e, t) || k5(e, t) || I5();
}
function I5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k5(e, t) {
  if (e) {
    if (typeof e == "string") return H0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H0(e, t);
  }
}
function H0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function j5(e, t) {
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
function R5(e) {
  if (Array.isArray(e)) return e;
}
var EO = /[ \f\n\r\t\v\u2028\u2029]+/, TO = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(EO));
    var u = a.map(function(l) {
      return {
        word: l,
        width: du(l, i).width
      };
    }), s = n ? 0 : du(" ", i).width;
    return {
      wordsWithComputedWidth: u,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, N5 = function(t, r, n, i, a) {
  var u = t.maxLines, s = t.children, l = t.style, f = t.breakAll, d = oe(u), h = s, v = function() {
    var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return J.reduce(function(H, Z) {
      var K = Z.word, ue = Z.width, G = H[H.length - 1];
      if (G && (i == null || a || G.width + ue + n < Number(i)))
        G.words.push(K), G.width += ue + n;
      else {
        var X = {
          words: [K],
          width: ue
        };
        H.push(X);
      }
      return H;
    }, []);
  }, g = v(r), b = function(J) {
    return J.reduce(function(H, Z) {
      return H.width > Z.width ? H : Z;
    });
  };
  if (!d)
    return g;
  for (var y = "…", w = function(J) {
    var H = h.slice(0, J), Z = TO({
      breakAll: f,
      style: l,
      children: H + y
    }).wordsWithComputedWidth, K = v(Z), ue = K.length > u || b(K).width > Number(i);
    return [ue, K];
  }, A = 0, O = h.length - 1, S = 0, _; A <= O && S <= h.length - 1; ) {
    var x = Math.floor((A + O) / 2), E = x - 1, $ = w(E), M = U0($, 2), F = M[0], D = M[1], B = w(x), N = U0(B, 1), U = N[0];
    if (!F && !U && (A = x + 1), F && U && (O = x - 1), !F && U) {
      _ = D;
      break;
    }
    S++;
  }
  return _ || g;
}, G0 = function(t) {
  var r = Te(t) ? [] : t.toString().split(EO);
  return [{
    words: r
  }];
}, D5 = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, u = t.breakAll, s = t.maxLines;
  if ((r || n) && !Zr.isSsr) {
    var l, f, d = TO({
      breakAll: u,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return G0(i);
    return N5({
      breakAll: u,
      children: i,
      maxLines: s,
      style: a
    }, l, f, r, n);
  }
  return G0(i);
}, K0 = "#808080", vi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.lineHeight, s = u === void 0 ? "1em" : u, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, b = t.verticalAnchor, y = b === void 0 ? "end" : b, w = t.fill, A = w === void 0 ? K0 : w, O = z0(t, $5), S = fo(function() {
    return D5({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, x = O.dy, E = O.angle, $ = O.className, M = O.breakAll, F = z0(O, C5);
  if (!Et(n) || !Et(a))
    return null;
  var D = n + (oe(_) ? _ : 0), B = a + (oe(x) ? x : 0), N;
  switch (y) {
    case "start":
      N = th("calc(".concat(f, ")"));
      break;
    case "middle":
      N = th("calc(".concat((S.length - 1) / 2, " * -").concat(s, " + (").concat(f, " / 2))"));
      break;
    default:
      N = th("calc(".concat(S.length - 1, " * -").concat(s, ")"));
      break;
  }
  var U = [];
  if (h) {
    var z = S[0].width, J = O.width;
    U.push("scale(".concat((oe(J) ? J / z : 1) / z, ")"));
  }
  return E && U.push("rotate(".concat(E, ", ").concat(D, ", ").concat(B, ")")), U.length && (F.transform = U.join(" ")), /* @__PURE__ */ k.createElement("text", up({}, me(F, !0), {
    x: D,
    y: B,
    className: Me("recharts-text", $),
    textAnchor: g,
    fill: A.includes("url") ? K0 : A
  }), S.map(function(H, Z) {
    var K = H.words.join(M ? "" : " ");
    return /* @__PURE__ */ k.createElement("tspan", {
      x: D,
      dy: Z === 0 ? N : s,
      key: K
    }, K);
  }));
};
function hi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function L5(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Uv(e) {
  let t, r, n;
  e.length !== 2 ? (t = hi, r = (s, l) => hi(e(s), l), n = (s, l) => e(s) - l) : (t = e === hi || e === L5 ? e : B5, r = e, n = e);
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
function B5() {
  return 0;
}
function $O(e) {
  return e === null ? NaN : +e;
}
function* F5(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const W5 = Uv(hi), ss = W5.right;
Uv($O).center;
class q0 extends Map {
  constructor(t, r = H5) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(V0(this, t));
  }
  has(t) {
    return super.has(V0(this, t));
  }
  set(t, r) {
    return super.set(z5(this, t), r);
  }
  delete(t) {
    return super.delete(U5(this, t));
  }
}
function V0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function z5({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function U5({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function H5(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function G5(e = hi) {
  if (e === hi) return CO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function CO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const K5 = Math.sqrt(50), q5 = Math.sqrt(10), V5 = Math.sqrt(2);
function Gc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), u = a >= K5 ? 10 : a >= q5 ? 5 : a >= V5 ? 2 : 1;
  let s, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / u, s = Math.round(e * f), l = Math.round(t * f), s / f < e && ++s, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * u, s = Math.round(e / f), l = Math.round(t / f), s * f < e && ++s, l * f > t && --l), l < s && 0.5 <= r && r < 2 ? Gc(e, t, r * 2) : [s, l, f];
}
function sp(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, u] = n ? Gc(t, e, r) : Gc(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n)
    if (u < 0) for (let f = 0; f < s; ++f) l[f] = (a - f) / -u;
    else for (let f = 0; f < s; ++f) l[f] = (a - f) * u;
  else if (u < 0) for (let f = 0; f < s; ++f) l[f] = (i + f) / -u;
  else for (let f = 0; f < s; ++f) l[f] = (i + f) * u;
  return l;
}
function cp(e, t, r) {
  return t = +t, e = +e, r = +r, Gc(e, t, r)[2];
}
function lp(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? cp(t, e, r) : cp(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Y0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function X0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function MO(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? CO : G5(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), b = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      MO(e, t, g, b, i);
    }
    const a = e[t];
    let u = r, s = n;
    for (tu(e, r, t), i(e[n], a) > 0 && tu(e, r, n); u < s; ) {
      for (tu(e, u, s), ++u, --s; i(e[u], a) < 0; ) ++u;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? tu(e, r, s) : (++s, tu(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function tu(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Y5(e, t, r) {
  if (e = Float64Array.from(F5(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return X0(e);
    if (t >= 1) return Y0(e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = Y0(MO(e, a).subarray(0, a + 1)), s = X0(e.subarray(a + 1));
    return u + (s - u) * (i - a);
  }
}
function X5(e, t, r = $O) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return u + (s - u) * (i - a);
  }
}
function Z5(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Br(e, t) {
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
const fp = Symbol("implicit");
function Hv() {
  var e = new q0(), t = [], r = [], n = fp;
  function i(a) {
    let u = e.get(a);
    if (u === void 0) {
      if (n !== fp) return n;
      e.set(a, u = t.push(a) - 1);
    }
    return r[u % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new q0();
    for (const u of a)
      e.has(u) || e.set(u, t.push(u) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Hv(t, r).unknown(n);
  }, Br.apply(i, arguments), i;
}
function Eu() {
  var e = Hv().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, u, s = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, b = g ? i : n, y = g ? n : i;
    a = (y - b) / Math.max(1, v - l + f * 2), s && (a = Math.floor(a)), b += (y - b - a * (v - l)) * d, u = a * (1 - l), s && (b = Math.round(b), u = Math.round(u));
    var w = Z5(v).map(function(A) {
      return b + a * A;
    });
    return r(g ? w.reverse() : w);
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
    return Eu(t(), [n, i]).round(s).paddingInner(l).paddingOuter(f).align(d);
  }, Br.apply(h(), arguments);
}
function IO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return IO(t());
  }, e;
}
function hu() {
  return IO(Eu.apply(null, arguments).paddingInner(1));
}
function Gv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function kO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function cs() {
}
var Tu = 0.7, Kc = 1 / Tu, Da = "\\s*([+-]?\\d+)\\s*", $u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", J5 = /^#([0-9a-f]{3,8})$/, Q5 = new RegExp(`^rgb\\(${Da},${Da},${Da}\\)$`), e7 = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`), t7 = new RegExp(`^rgba\\(${Da},${Da},${Da},${$u}\\)$`), r7 = new RegExp(`^rgba\\(${fn},${fn},${fn},${$u}\\)$`), n7 = new RegExp(`^hsl\\(${$u},${fn},${fn}\\)$`), i7 = new RegExp(`^hsla\\(${$u},${fn},${fn},${$u}\\)$`), Z0 = {
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
Gv(cs, Cu, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: J0,
  // Deprecated! Use color.formatHex.
  formatHex: J0,
  formatHex8: a7,
  formatHsl: o7,
  formatRgb: Q0,
  toString: Q0
});
function J0() {
  return this.rgb().formatHex();
}
function a7() {
  return this.rgb().formatHex8();
}
function o7() {
  return jO(this).formatHsl();
}
function Q0() {
  return this.rgb().formatRgb();
}
function Cu(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = J5.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ex(t) : r === 3 ? new Qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? gc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? gc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Q5.exec(e)) ? new Qt(t[1], t[2], t[3], 1) : (t = e7.exec(e)) ? new Qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = t7.exec(e)) ? gc(t[1], t[2], t[3], t[4]) : (t = r7.exec(e)) ? gc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = n7.exec(e)) ? nx(t[1], t[2] / 100, t[3] / 100, 1) : (t = i7.exec(e)) ? nx(t[1], t[2] / 100, t[3] / 100, t[4]) : Z0.hasOwnProperty(e) ? ex(Z0[e]) : e === "transparent" ? new Qt(NaN, NaN, NaN, 0) : null;
}
function ex(e) {
  return new Qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qt(e, t, r, n);
}
function u7(e) {
  return e instanceof cs || (e = Cu(e)), e ? (e = e.rgb(), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt();
}
function dp(e, t, r, n) {
  return arguments.length === 1 ? u7(e) : new Qt(e, t, r, n ?? 1);
}
function Qt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Gv(Qt, dp, kO(cs, {
  brighter(e) {
    return e = e == null ? Kc : Math.pow(Kc, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tu : Math.pow(Tu, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qt(Xi(this.r), Xi(this.g), Xi(this.b), qc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tx,
  // Deprecated! Use color.formatHex.
  formatHex: tx,
  formatHex8: s7,
  formatRgb: rx,
  toString: rx
}));
function tx() {
  return `#${Hi(this.r)}${Hi(this.g)}${Hi(this.b)}`;
}
function s7() {
  return `#${Hi(this.r)}${Hi(this.g)}${Hi(this.b)}${Hi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rx() {
  const e = qc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xi(this.r)}, ${Xi(this.g)}, ${Xi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function qc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Hi(e) {
  return e = Xi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function nx(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vr(e, t, r, n);
}
function jO(e) {
  if (e instanceof Vr) return new Vr(e.h, e.s, e.l, e.opacity);
  if (e instanceof cs || (e = Cu(e)), !e) return new Vr();
  if (e instanceof Vr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), u = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? u = (r - n) / s + (r < n) * 6 : r === a ? u = (n - t) / s + 2 : u = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, u *= 60) : s = l > 0 && l < 1 ? 0 : u, new Vr(u, s, l, e.opacity);
}
function c7(e, t, r, n) {
  return arguments.length === 1 ? jO(e) : new Vr(e, t, r, n ?? 1);
}
function Vr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Gv(Vr, c7, kO(cs, {
  brighter(e) {
    return e = e == null ? Kc : Math.pow(Kc, e), new Vr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tu : Math.pow(Tu, e), new Vr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Qt(
      rh(e >= 240 ? e - 240 : e + 120, i, n),
      rh(e, i, n),
      rh(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Vr(ix(this.h), yc(this.s), yc(this.l), qc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = qc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ix(this.h)}, ${yc(this.s) * 100}%, ${yc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ix(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rh(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Kv = (e) => () => e;
function l7(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function f7(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function d7(e) {
  return (e = +e) == 1 ? RO : function(t, r) {
    return r - t ? f7(t, r, e) : Kv(isNaN(t) ? r : t);
  };
}
function RO(e, t) {
  var r = t - e;
  return r ? l7(e, r) : Kv(isNaN(e) ? t : e);
}
const ax = function e(t) {
  var r = d7(t);
  function n(i, a) {
    var u = r((i = dp(i)).r, (a = dp(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), f = RO(i.opacity, a.opacity);
    return function(d) {
      return i.r = u(d), i.g = s(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function h7(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function p7(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function v7(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), u;
  for (u = 0; u < n; ++u) i[u] = Oo(e[u], t[u]);
  for (; u < r; ++u) a[u] = t[u];
  return function(s) {
    for (u = 0; u < n; ++u) a[u] = i[u](s);
    return a;
  };
}
function g7(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Vc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function y7(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Oo(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var hp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nh = new RegExp(hp.source, "g");
function m7(e) {
  return function() {
    return e;
  };
}
function b7(e) {
  return function(t) {
    return e(t) + "";
  };
}
function x7(e, t) {
  var r = hp.lastIndex = nh.lastIndex = 0, n, i, a, u = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (n = hp.exec(e)) && (i = nh.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[u] ? s[u] += a : s[++u] = a), (n = n[0]) === (i = i[0]) ? s[u] ? s[u] += i : s[++u] = i : (s[++u] = null, l.push({ i: u, x: Vc(n, i) })), r = nh.lastIndex;
  return r < t.length && (a = t.slice(r), s[u] ? s[u] += a : s[++u] = a), s.length < 2 ? l[0] ? b7(l[0].x) : m7(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) s[(h = l[d]).i] = h.x(f);
    return s.join("");
  });
}
function Oo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Kv(t) : (r === "number" ? Vc : r === "string" ? (n = Cu(t)) ? (t = n, ax) : x7 : t instanceof Cu ? ax : t instanceof Date ? g7 : p7(t) ? h7 : Array.isArray(t) ? v7 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? y7 : Vc)(e, t);
}
function qv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function w7(e, t) {
  t === void 0 && (t = e, e = Oo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(u) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(u *= n)));
    return a[s](u - s);
  };
}
function _7(e) {
  return function() {
    return e;
  };
}
function Yc(e) {
  return +e;
}
var ox = [0, 1];
function qt(e) {
  return e;
}
function pp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : _7(isNaN(t) ? NaN : 0.5);
}
function O7(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function A7(e, t, r) {
  var n = e[0], i = e[1], a = t[0], u = t[1];
  return i < n ? (n = pp(i, n), a = r(u, a)) : (n = pp(n, i), a = r(a, u)), function(s) {
    return a(n(s));
  };
}
function S7(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), u = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < n; )
    i[u] = pp(e[u], e[u + 1]), a[u] = r(t[u], t[u + 1]);
  return function(s) {
    var l = ss(e, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function ls(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Kl() {
  var e = ox, t = ox, r = Oo, n, i, a, u = qt, s, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return u !== qt && (u = O7(e[0], e[v - 1])), s = v > 2 ? S7 : A7, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = s(e.map(n), t, r)))(n(u(v)));
  }
  return h.invert = function(v) {
    return u(i((f || (f = s(t, e.map(n), Vc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, Yc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = qv, d();
  }, h.clamp = function(v) {
    return arguments.length ? (u = v ? !0 : qt, d()) : u !== qt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, g) {
    return n = v, i = g, d();
  };
}
function Vv() {
  return Kl()(qt, qt);
}
function P7(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Xc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Ka(e) {
  return e = Xc(Math.abs(e)), e ? e[1] : NaN;
}
function E7(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], u = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); )
      s = e[u = (u + 1) % e.length];
    return a.reverse().join(t);
  };
}
function T7(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var $7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mu(e) {
  if (!(t = $7.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Yv({
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
Mu.prototype = Yv.prototype;
function Yv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Yv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function C7(e) {
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
var NO;
function M7(e, t) {
  var r = Xc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (NO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, u = n.length;
  return a === u ? n : a > u ? n + new Array(a - u + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Xc(e, Math.max(0, t + a - 1))[0];
}
function ux(e, t) {
  var r = Xc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const sx = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: P7,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ux(e * 100, t),
  r: ux,
  s: M7,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function cx(e) {
  return e;
}
var lx = Array.prototype.map, fx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function I7(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? cx : E7(lx.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? cx : T7(lx.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = Mu(h);
    var v = h.fill, g = h.align, b = h.sign, y = h.symbol, w = h.zero, A = h.width, O = h.comma, S = h.precision, _ = h.trim, x = h.type;
    x === "n" ? (O = !0, x = "g") : sx[x] || (S === void 0 && (S = 12), _ = !0, x = "g"), (w || v === "0" && g === "=") && (w = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", $ = y === "$" ? n : /[%p]/.test(x) ? u : "", M = sx[x], F = /[defgprs%]/.test(x);
    S = S === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function D(B) {
      var N = E, U = $, z, J, H;
      if (x === "c")
        U = M(B) + U, B = "";
      else {
        B = +B;
        var Z = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? l : M(Math.abs(B), S), _ && (B = C7(B)), Z && +B == 0 && b !== "+" && (Z = !1), N = (Z ? b === "(" ? b : s : b === "-" || b === "(" ? "" : b) + N, U = (x === "s" ? fx[8 + NO / 3] : "") + U + (Z && b === "(" ? ")" : ""), F) {
          for (z = -1, J = B.length; ++z < J; )
            if (H = B.charCodeAt(z), 48 > H || H > 57) {
              U = (H === 46 ? i + B.slice(z + 1) : B.slice(z)) + U, B = B.slice(0, z);
              break;
            }
        }
      }
      O && !w && (B = t(B, 1 / 0));
      var K = N.length + B.length + U.length, ue = K < A ? new Array(A - K + 1).join(v) : "";
      switch (O && w && (B = t(ue + B, ue.length ? A - U.length : 1 / 0), ue = ""), g) {
        case "<":
          B = N + B + U + ue;
          break;
        case "=":
          B = N + ue + B + U;
          break;
        case "^":
          B = ue.slice(0, K = ue.length >> 1) + N + B + U + ue.slice(K);
          break;
        default:
          B = ue + N + B + U;
          break;
      }
      return a(B);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function d(h, v) {
    var g = f((h = Mu(h), h.type = "f", h)), b = Math.max(-8, Math.min(8, Math.floor(Ka(v) / 3))) * 3, y = Math.pow(10, -b), w = fx[8 + b / 3];
    return function(A) {
      return g(y * A) + w;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var mc, Xv, DO;
k7({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function k7(e) {
  return mc = I7(e), Xv = mc.format, DO = mc.formatPrefix, mc;
}
function j7(e) {
  return Math.max(0, -Ka(Math.abs(e)));
}
function R7(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ka(t) / 3))) * 3 - Ka(Math.abs(e)));
}
function N7(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ka(t) - Ka(e)) + 1;
}
function LO(e, t, r, n) {
  var i = lp(e, t, r), a;
  switch (n = Mu(n ?? ",f"), n.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = R7(i, u)) && (n.precision = a), DO(n, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = N7(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = j7(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Xv(n);
}
function _i(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return sp(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return LO(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, u = n[i], s = n[a], l, f, d = 10;
    for (s < u && (f = u, u = s, s = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = cp(u, s, r), f === l)
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
function Zc() {
  var e = Vv();
  return e.copy = function() {
    return ls(e, Zc());
  }, Br.apply(e, arguments), _i(e);
}
function BO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Yc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return BO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Yc) : [0, 1], _i(r);
}
function FO(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], u;
  return a < i && (u = r, r = n, n = u, u = i, i = a, a = u), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function dx(e) {
  return Math.log(e);
}
function hx(e) {
  return Math.exp(e);
}
function D7(e) {
  return -Math.log(-e);
}
function L7(e) {
  return -Math.exp(-e);
}
function B7(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function F7(e) {
  return e === 10 ? B7 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function W7(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function px(e) {
  return (t, r) => -e(-t, r);
}
function Zv(e) {
  const t = e(dx, hx), r = t.domain;
  let n = 10, i, a;
  function u() {
    return i = W7(n), a = F7(n), r()[0] < 0 ? (i = px(i), a = px(a), e(D7, L7)) : e(dx, hx), t;
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
    let v = i(f), g = i(d), b, y;
    const w = s == null ? 10 : +s;
    let A = [];
    if (!(n % 1) && g - v < w) {
      if (v = Math.floor(v), g = Math.ceil(g), f > 0) {
        for (; v <= g; ++v)
          for (b = 1; b < n; ++b)
            if (y = v < 0 ? b / a(-v) : b * a(v), !(y < f)) {
              if (y > d) break;
              A.push(y);
            }
      } else for (; v <= g; ++v)
        for (b = n - 1; b >= 1; --b)
          if (y = v > 0 ? b / a(-v) : b * a(v), !(y < f)) {
            if (y > d) break;
            A.push(y);
          }
      A.length * 2 < w && (A = sp(f, d, w));
    } else
      A = sp(v, g, Math.min(g - v, w)).map(a);
    return h ? A.reverse() : A;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Mu(l)).precision == null && (l.trim = !0), l = Xv(l)), s === 1 / 0) return l;
    const f = Math.max(1, n * s / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(FO(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function WO() {
  const e = Zv(Kl()).domain([1, 10]);
  return e.copy = () => ls(e, WO()).base(e.base()), Br.apply(e, arguments), e;
}
function vx(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function gx(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Jv(e) {
  var t = 1, r = e(vx(t), gx(t));
  return r.constant = function(n) {
    return arguments.length ? e(vx(t = +n), gx(t)) : t;
  }, _i(r);
}
function zO() {
  var e = Jv(Kl());
  return e.copy = function() {
    return ls(e, zO()).constant(e.constant());
  }, Br.apply(e, arguments);
}
function yx(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function z7(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function U7(e) {
  return e < 0 ? -e * e : e * e;
}
function Qv(e) {
  var t = e(qt, qt), r = 1;
  function n() {
    return r === 1 ? e(qt, qt) : r === 0.5 ? e(z7, U7) : e(yx(r), yx(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, _i(t);
}
function eg() {
  var e = Qv(Kl());
  return e.copy = function() {
    return ls(e, eg()).exponent(e.exponent());
  }, Br.apply(e, arguments), e;
}
function H7() {
  return eg.apply(null, arguments).exponent(0.5);
}
function mx(e) {
  return Math.sign(e) * e * e;
}
function G7(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function UO() {
  var e = Vv(), t = [0, 1], r = !1, n;
  function i(a) {
    var u = G7(e(a));
    return isNaN(u) ? n : r ? Math.round(u) : u;
  }
  return i.invert = function(a) {
    return e.invert(mx(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Yc)).map(mx)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return UO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Br.apply(i, arguments), _i(i);
}
function HO() {
  var e = [], t = [], r = [], n;
  function i() {
    var u = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++u < s; ) r[u - 1] = X5(e, u / s);
    return a;
  }
  function a(u) {
    return u == null || isNaN(u = +u) ? n : t[ss(r, u)];
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
    return e.sort(hi), i();
  }, a.range = function(u) {
    return arguments.length ? (t = Array.from(u), i()) : t.slice();
  }, a.unknown = function(u) {
    return arguments.length ? (n = u, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return HO().domain(e).range(t).unknown(n);
  }, Br.apply(a, arguments);
}
function GO() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function u(l) {
    return l != null && l <= l ? i[ss(n, l, 0, r)] : a;
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
    return GO().domain([e, t]).range(i).unknown(a);
  }, Br.apply(_i(u), arguments);
}
function KO() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[ss(e, a, 0, n)] : r;
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
    return KO().domain(e).range(t).unknown(r);
  }, Br.apply(i, arguments);
}
const ih = /* @__PURE__ */ new Date(), ah = /* @__PURE__ */ new Date();
function Tt(e, t, r, n) {
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
  }, i.filter = (a) => Tt((u) => {
    if (u >= u) for (; e(u), !a(u); ) u.setTime(u - 1);
  }, (u, s) => {
    if (u >= u)
      if (s < 0) for (; ++s <= 0; )
        for (; t(u, -1), !a(u); )
          ;
      else for (; --s >= 0; )
        for (; t(u, 1), !a(u); )
          ;
  }), r && (i.count = (a, u) => (ih.setTime(+a), ah.setTime(+u), e(ih), e(ah), Math.floor(r(ih, ah))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (u) => n(u) % a === 0 : (u) => i.count(0, u) % a === 0) : i)), i;
}
const Jc = Tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Jc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Jc);
Jc.range;
const Mn = 1e3, Ir = Mn * 60, In = Ir * 60, Dn = In * 24, tg = Dn * 7, bx = Dn * 30, oh = Dn * 365, Gi = Tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Mn);
}, (e, t) => (t - e) / Mn, (e) => e.getUTCSeconds());
Gi.range;
const rg = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mn);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
rg.range;
const ng = Tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
ng.range;
const ig = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mn - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getHours());
ig.range;
const ag = Tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * In);
}, (e, t) => (t - e) / In, (e) => e.getUTCHours());
ag.range;
const fs = Tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ir) / Dn,
  (e) => e.getDate() - 1
);
fs.range;
const ql = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => e.getUTCDate() - 1);
ql.range;
const qO = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => Math.floor(e / Dn));
qO.range;
function ua(e) {
  return Tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / tg);
}
const Vl = ua(0), Qc = ua(1), K7 = ua(2), q7 = ua(3), qa = ua(4), V7 = ua(5), Y7 = ua(6);
Vl.range;
Qc.range;
K7.range;
q7.range;
qa.range;
V7.range;
Y7.range;
function sa(e) {
  return Tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / tg);
}
const Yl = sa(0), el = sa(1), X7 = sa(2), Z7 = sa(3), Va = sa(4), J7 = sa(5), Q7 = sa(6);
Yl.range;
el.range;
X7.range;
Z7.range;
Va.range;
J7.range;
Q7.range;
const og = Tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
og.range;
const ug = Tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ug.range;
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
const Bn = Tt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Bn.range;
function VO(e, t, r, n, i, a) {
  const u = [
    [Gi, 1, Mn],
    [Gi, 5, 5 * Mn],
    [Gi, 15, 15 * Mn],
    [Gi, 30, 30 * Mn],
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
    [r, 1, tg],
    [t, 1, bx],
    [t, 3, 3 * bx],
    [e, 1, oh]
  ];
  function s(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), b = g ? g.range(f, +d + 1) : [];
    return v ? b.reverse() : b;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Uv(([, , w]) => w).right(u, v);
    if (g === u.length) return e.every(lp(f / oh, d / oh, h));
    if (g === 0) return Jc.every(Math.max(lp(f, d, h), 1));
    const [b, y] = u[v / u[g - 1][2] < u[g][2] / v ? g - 1 : g];
    return b.every(y);
  }
  return [s, l];
}
const [e9, t9] = VO(Bn, ug, Yl, qO, ag, ng), [r9, n9] = VO(Ln, og, Vl, fs, ig, rg);
function uh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function sh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ru(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function i9(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, u = e.shortDays, s = e.months, l = e.shortMonths, f = nu(i), d = iu(i), h = nu(a), v = iu(a), g = nu(u), b = iu(u), y = nu(s), w = iu(s), A = nu(l), O = iu(l), S = {
    a: Z,
    A: K,
    b: ue,
    B: G,
    c: null,
    d: Sx,
    e: Sx,
    f: E9,
    g: D9,
    G: B9,
    H: A9,
    I: S9,
    j: P9,
    L: YO,
    m: T9,
    M: $9,
    p: X,
    q: ae,
    Q: Tx,
    s: $x,
    S: C9,
    u: M9,
    U: I9,
    V: k9,
    w: j9,
    W: R9,
    x: null,
    X: null,
    y: N9,
    Y: L9,
    Z: F9,
    "%": Ex
  }, _ = {
    a: ce,
    A: he,
    b: ge,
    B: xe,
    c: null,
    d: Px,
    e: Px,
    f: H9,
    g: eH,
    G: rH,
    H: W9,
    I: z9,
    j: U9,
    L: ZO,
    m: G9,
    M: K9,
    p: ye,
    q: we,
    Q: Tx,
    s: $x,
    S: q9,
    u: V9,
    U: Y9,
    V: X9,
    w: Z9,
    W: J9,
    x: null,
    X: null,
    y: Q9,
    Y: tH,
    Z: nH,
    "%": Ex
  }, x = {
    a: D,
    A: B,
    b: N,
    B: U,
    c: z,
    d: Ox,
    e: Ox,
    f: x9,
    g: _x,
    G: wx,
    H: Ax,
    I: Ax,
    j: g9,
    L: b9,
    m: v9,
    M: y9,
    p: F,
    q: p9,
    Q: _9,
    s: O9,
    S: m9,
    u: c9,
    U: l9,
    V: f9,
    w: s9,
    W: d9,
    x: J,
    X: H,
    y: _x,
    Y: wx,
    Z: h9,
    "%": w9
  };
  S.x = E(r, S), S.X = E(n, S), S.c = E(t, S), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(ne, se) {
    return function(pe) {
      var j = [], Ee = -1, be = 0, We = ne.length, lt, at, Vt;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++Ee < We; )
        ne.charCodeAt(Ee) === 37 && (j.push(ne.slice(be, Ee)), (at = xx[lt = ne.charAt(++Ee)]) != null ? lt = ne.charAt(++Ee) : at = lt === "e" ? " " : "0", (Vt = se[lt]) && (lt = Vt(pe, at)), j.push(lt), be = Ee + 1);
      return j.push(ne.slice(be, Ee)), j.join("");
    };
  }
  function $(ne, se) {
    return function(pe) {
      var j = ru(1900, void 0, 1), Ee = M(j, ne, pe += "", 0), be, We;
      if (Ee != pe.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (se && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (be = sh(ru(j.y, 0, 1)), We = be.getUTCDay(), be = We > 4 || We === 0 ? el.ceil(be) : el(be), be = ql.offset(be, (j.V - 1) * 7), j.y = be.getUTCFullYear(), j.m = be.getUTCMonth(), j.d = be.getUTCDate() + (j.w + 6) % 7) : (be = uh(ru(j.y, 0, 1)), We = be.getDay(), be = We > 4 || We === 0 ? Qc.ceil(be) : Qc(be), be = fs.offset(be, (j.V - 1) * 7), j.y = be.getFullYear(), j.m = be.getMonth(), j.d = be.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), We = "Z" in j ? sh(ru(j.y, 0, 1)).getUTCDay() : uh(ru(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (We + 5) % 7 : j.w + j.U * 7 - (We + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, sh(j)) : uh(j);
    };
  }
  function M(ne, se, pe, j) {
    for (var Ee = 0, be = se.length, We = pe.length, lt, at; Ee < be; ) {
      if (j >= We) return -1;
      if (lt = se.charCodeAt(Ee++), lt === 37) {
        if (lt = se.charAt(Ee++), at = x[lt in xx ? se.charAt(Ee++) : lt], !at || (j = at(ne, pe, j)) < 0) return -1;
      } else if (lt != pe.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function F(ne, se, pe) {
    var j = f.exec(se.slice(pe));
    return j ? (ne.p = d.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function D(ne, se, pe) {
    var j = g.exec(se.slice(pe));
    return j ? (ne.w = b.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function B(ne, se, pe) {
    var j = h.exec(se.slice(pe));
    return j ? (ne.w = v.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function N(ne, se, pe) {
    var j = A.exec(se.slice(pe));
    return j ? (ne.m = O.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function U(ne, se, pe) {
    var j = y.exec(se.slice(pe));
    return j ? (ne.m = w.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function z(ne, se, pe) {
    return M(ne, t, se, pe);
  }
  function J(ne, se, pe) {
    return M(ne, r, se, pe);
  }
  function H(ne, se, pe) {
    return M(ne, n, se, pe);
  }
  function Z(ne) {
    return u[ne.getDay()];
  }
  function K(ne) {
    return a[ne.getDay()];
  }
  function ue(ne) {
    return l[ne.getMonth()];
  }
  function G(ne) {
    return s[ne.getMonth()];
  }
  function X(ne) {
    return i[+(ne.getHours() >= 12)];
  }
  function ae(ne) {
    return 1 + ~~(ne.getMonth() / 3);
  }
  function ce(ne) {
    return u[ne.getUTCDay()];
  }
  function he(ne) {
    return a[ne.getUTCDay()];
  }
  function ge(ne) {
    return l[ne.getUTCMonth()];
  }
  function xe(ne) {
    return s[ne.getUTCMonth()];
  }
  function ye(ne) {
    return i[+(ne.getUTCHours() >= 12)];
  }
  function we(ne) {
    return 1 + ~~(ne.getUTCMonth() / 3);
  }
  return {
    format: function(ne) {
      var se = E(ne += "", S);
      return se.toString = function() {
        return ne;
      }, se;
    },
    parse: function(ne) {
      var se = $(ne += "", !1);
      return se.toString = function() {
        return ne;
      }, se;
    },
    utcFormat: function(ne) {
      var se = E(ne += "", _);
      return se.toString = function() {
        return ne;
      }, se;
    },
    utcParse: function(ne) {
      var se = $(ne += "", !0);
      return se.toString = function() {
        return ne;
      }, se;
    }
  };
}
var xx = { "-": "", _: " ", 0: "0" }, It = /^\s*\d+/, a9 = /^%/, o9 = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function u9(e) {
  return e.replace(o9, "\\$&");
}
function nu(e) {
  return new RegExp("^(?:" + e.map(u9).join("|") + ")", "i");
}
function iu(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function s9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function c9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function l9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function f9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function d9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = It.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function _x(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function h9(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function p9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function v9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Ox(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function g9(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Ax(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function y9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function m9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function b9(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function x9(e, t, r) {
  var n = It.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function w9(e, t, r) {
  var n = a9.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function _9(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function O9(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Sx(e, t) {
  return Ue(e.getDate(), t, 2);
}
function A9(e, t) {
  return Ue(e.getHours(), t, 2);
}
function S9(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function P9(e, t) {
  return Ue(1 + fs.count(Ln(e), e), t, 3);
}
function YO(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function E9(e, t) {
  return YO(e, t) + "000";
}
function T9(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function $9(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function C9(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function M9(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function I9(e, t) {
  return Ue(Vl.count(Ln(e) - 1, e), t, 2);
}
function XO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? qa(e) : qa.ceil(e);
}
function k9(e, t) {
  return e = XO(e), Ue(qa.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function j9(e) {
  return e.getDay();
}
function R9(e, t) {
  return Ue(Qc.count(Ln(e) - 1, e), t, 2);
}
function N9(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function D9(e, t) {
  return e = XO(e), Ue(e.getFullYear() % 100, t, 2);
}
function L9(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function B9(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? qa(e) : qa.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function F9(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function Px(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function W9(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function z9(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function U9(e, t) {
  return Ue(1 + ql.count(Bn(e), e), t, 3);
}
function ZO(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function H9(e, t) {
  return ZO(e, t) + "000";
}
function G9(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function K9(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function q9(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function V9(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Y9(e, t) {
  return Ue(Yl.count(Bn(e) - 1, e), t, 2);
}
function JO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Va(e) : Va.ceil(e);
}
function X9(e, t) {
  return e = JO(e), Ue(Va.count(Bn(e), e) + (Bn(e).getUTCDay() === 4), t, 2);
}
function Z9(e) {
  return e.getUTCDay();
}
function J9(e, t) {
  return Ue(el.count(Bn(e) - 1, e), t, 2);
}
function Q9(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function eH(e, t) {
  return e = JO(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function tH(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function rH(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Va(e) : Va.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function nH() {
  return "+0000";
}
function Ex() {
  return "%";
}
function Tx(e) {
  return +e;
}
function $x(e) {
  return Math.floor(+e / 1e3);
}
var Pa, QO, eA;
iH({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function iH(e) {
  return Pa = i9(e), QO = Pa.format, Pa.parse, eA = Pa.utcFormat, Pa.utcParse, Pa;
}
function aH(e) {
  return new Date(e);
}
function oH(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function sg(e, t, r, n, i, a, u, s, l, f) {
  var d = Vv(), h = d.invert, v = d.domain, g = f(".%L"), b = f(":%S"), y = f("%I:%M"), w = f("%I %p"), A = f("%a %d"), O = f("%b %d"), S = f("%B"), _ = f("%Y");
  function x(E) {
    return (l(E) < E ? g : s(E) < E ? b : u(E) < E ? y : a(E) < E ? w : n(E) < E ? i(E) < E ? A : O : r(E) < E ? S : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, oH)) : v().map(aH);
  }, d.ticks = function(E) {
    var $ = v();
    return e($[0], $[$.length - 1], E ?? 10);
  }, d.tickFormat = function(E, $) {
    return $ == null ? x : f($);
  }, d.nice = function(E) {
    var $ = v();
    return (!E || typeof E.range != "function") && (E = t($[0], $[$.length - 1], E ?? 10)), E ? v(FO($, E)) : d;
  }, d.copy = function() {
    return ls(d, sg(e, t, r, n, i, a, u, s, l, f));
  }, d;
}
function uH() {
  return Br.apply(sg(r9, n9, Ln, og, Vl, fs, ig, rg, Gi, QO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function sH() {
  return Br.apply(sg(e9, t9, Bn, ug, Yl, ql, ag, ng, Gi, eA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Xl() {
  var e = 0, t = 1, r, n, i, a, u = qt, s = !1, l;
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
      var g, b;
      return arguments.length ? ([g, b] = v, u = h(g, b), f) : [u(0), u(1)];
    };
  }
  return f.range = d(Oo), f.rangeRound = d(qv), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function Oi(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function tA() {
  var e = _i(Xl()(qt));
  return e.copy = function() {
    return Oi(e, tA());
  }, Hn.apply(e, arguments);
}
function rA() {
  var e = Zv(Xl()).domain([1, 10]);
  return e.copy = function() {
    return Oi(e, rA()).base(e.base());
  }, Hn.apply(e, arguments);
}
function nA() {
  var e = Jv(Xl());
  return e.copy = function() {
    return Oi(e, nA()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function cg() {
  var e = Qv(Xl());
  return e.copy = function() {
    return Oi(e, cg()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function cH() {
  return cg.apply(null, arguments).exponent(0.5);
}
function iA() {
  var e = [], t = qt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((ss(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (i, a) => Y5(e, a / n));
  }, r.copy = function() {
    return iA(t).domain(e);
  }, Hn.apply(r, arguments);
}
function Zl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, u, s, l, f = qt, d, h = !1, v;
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
  function b(y) {
    return function(w) {
      var A, O, S;
      return arguments.length ? ([A, O, S] = w, f = w7(y, [A, O, S]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = b(Oo), g.rangeRound = b(qv), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), u = y(r), s = i === a ? 0 : 0.5 / (a - i), l = a === u ? 0 : 0.5 / (u - a), n = a < i ? -1 : 1, g;
  };
}
function aA() {
  var e = _i(Zl()(qt));
  return e.copy = function() {
    return Oi(e, aA());
  }, Hn.apply(e, arguments);
}
function oA() {
  var e = Zv(Zl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Oi(e, oA()).base(e.base());
  }, Hn.apply(e, arguments);
}
function uA() {
  var e = Jv(Zl());
  return e.copy = function() {
    return Oi(e, uA()).constant(e.constant());
  }, Hn.apply(e, arguments);
}
function lg() {
  var e = Qv(Zl());
  return e.copy = function() {
    return Oi(e, lg()).exponent(e.exponent());
  }, Hn.apply(e, arguments);
}
function lH() {
  return lg.apply(null, arguments).exponent(0.5);
}
const Cx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Eu,
  scaleDiverging: aA,
  scaleDivergingLog: oA,
  scaleDivergingPow: lg,
  scaleDivergingSqrt: lH,
  scaleDivergingSymlog: uA,
  scaleIdentity: BO,
  scaleImplicit: fp,
  scaleLinear: Zc,
  scaleLog: WO,
  scaleOrdinal: Hv,
  scalePoint: hu,
  scalePow: eg,
  scaleQuantile: HO,
  scaleQuantize: GO,
  scaleRadial: UO,
  scaleSequential: tA,
  scaleSequentialLog: rA,
  scaleSequentialPow: cg,
  scaleSequentialQuantile: iA,
  scaleSequentialSqrt: cH,
  scaleSequentialSymlog: nA,
  scaleSqrt: H7,
  scaleSymlog: zO,
  scaleThreshold: KO,
  scaleTime: uH,
  scaleUtc: sH,
  tickFormat: LO
}, Symbol.toStringTag, { value: "Module" }));
var fH = po;
function dH(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], u = t(a);
    if (u != null && (s === void 0 ? u === u && !fH(u) : r(u, s)))
      var s = u, l = a;
  }
  return l;
}
var Jl = dH;
function hH(e, t) {
  return e > t;
}
var sA = hH, pH = Jl, vH = sA, gH = _o;
function yH(e) {
  return e && e.length ? pH(e, gH, vH) : void 0;
}
var mH = yH;
const fi = /* @__PURE__ */ Ze(mH);
function bH(e, t) {
  return e < t;
}
var cA = bH, xH = Jl, wH = cA, _H = _o;
function OH(e) {
  return e && e.length ? xH(e, _H, wH) : void 0;
}
var AH = OH;
const Ql = /* @__PURE__ */ Ze(AH);
var SH = Sv, PH = gn, EH = yO, TH = rr;
function $H(e, t) {
  var r = TH(e) ? SH : EH;
  return r(e, PH(t));
}
var CH = $H, MH = vO, IH = CH;
function kH(e, t) {
  return MH(IH(e, t), 1);
}
var jH = kH;
const RH = /* @__PURE__ */ Ze(jH);
var NH = Lv;
function DH(e, t) {
  return NH(e, t);
}
var LH = DH;
const ea = /* @__PURE__ */ Ze(LH);
var Ao = 1e9, BH = {
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
}, dg, ht = !0, Nr = "[DecimalError] ", Zi = Nr + "Invalid argument: ", fg = Nr + "Exponent out of range: ", So = Math.floor, Wi = Math.pow, FH = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vr, Mt = 1e7, ct = 7, lA = 9007199254740991, tl = So(lA / ct), de = {};
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
  return Rn(this, new this.constructor(e));
};
de.dividedToIntegerBy = de.idiv = function(e) {
  var t = this, r = t.constructor;
  return tt(Rn(t, new r(e), 0, 1), r.precision);
};
de.equals = de.eq = function(e) {
  return !this.cmp(e);
};
de.exponent = function() {
  return xt(this);
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
  else if (e = new n(e), e.s < 1 || e.eq(vr)) throw Error(Nr + "NaN");
  if (r.s < 1) throw Error(Nr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(vr) ? new n(0) : (ht = !1, t = Rn(Iu(r, a), Iu(e, a), a), ht = !0, tt(t, i));
};
de.minus = de.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? hA(t, e) : fA(t, (e.s = -e.s, e));
};
de.modulo = de.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Nr + "NaN");
  return r.s ? (ht = !1, t = Rn(r, e, 0, 1).times(e), ht = !0, r.minus(t)) : tt(new n(r), i);
};
de.naturalExponential = de.exp = function() {
  return dA(this);
};
de.naturalLogarithm = de.ln = function() {
  return Iu(this);
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
de.plus = de.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? fA(t, e) : hA(t, (e.s = -e.s, e));
};
de.precision = de.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Zi + e);
  if (t = xt(i) + 1, n = i.d.length - 1, r = n * ct + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
de.squareRoot = de.sqrt = function() {
  var e, t, r, n, i, a, u, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(Nr + "NaN");
  }
  for (e = xt(s), ht = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = cn(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = So((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = u = r + 3; ; )
    if (a = n, n = a.plus(Rn(s, a, u + 2)).times(0.5), cn(a.d).slice(0, u) === (t = cn(n.d)).slice(0, u)) {
      if (t = t.slice(u - 3, u + 1), i == u && t == "4999") {
        if (tt(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      u += 4;
    }
  return ht = !0, tt(n, r);
};
de.times = de.mul = function(e) {
  var t, r, n, i, a, u, s, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, u = l, l = f, f = u), a = [], u = l + f, n = u; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      s = a[i] + g[n] * v[i - n - 1] + t, a[i--] = s % Mt | 0, t = s / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--u]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ht ? tt(e, h.precision) : e;
};
de.toDecimalPlaces = de.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (hn(e, 0, Ao), t === void 0 ? t = n.rounding : hn(t, 0, 8), tt(r, e + xt(r) + 1, t));
};
de.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ta(n, !0) : (hn(e, 0, Ao), t === void 0 ? t = i.rounding : hn(t, 0, 8), n = tt(new i(n), e + 1, t), r = ta(n, !0, e + 1)), r;
};
de.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ta(i) : (hn(e, 0, Ao), t === void 0 ? t = a.rounding : hn(t, 0, 8), n = tt(new a(i), e + xt(i) + 1, t), r = ta(n.abs(), !1, e + xt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
de.toInteger = de.toint = function() {
  var e = this, t = e.constructor;
  return tt(new t(e), xt(e) + 1, t.rounding);
};
de.toNumber = function() {
  return +this;
};
de.toPower = de.pow = function(e) {
  var t, r, n, i, a, u, s = this, l = s.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(vr);
  if (s = new l(s), !s.s) {
    if (e.s < 1) throw Error(Nr + "Infinity");
    return s;
  }
  if (s.eq(vr)) return s;
  if (n = l.precision, e.eq(vr)) return tt(s, n);
  if (t = e.e, r = e.d.length - 1, u = t >= r, a = s.s, u) {
    if ((r = d < 0 ? -d : d) <= lA) {
      for (i = new l(vr), t = Math.ceil(n / ct + 4), ht = !1; r % 2 && (i = i.times(s), Ix(i.d, t)), r = So(r / 2), r !== 0; )
        s = s.times(s), Ix(s.d, t);
      return ht = !0, e.s < 0 ? new l(vr).div(i) : tt(i, n);
    }
  } else if (a < 0) throw Error(Nr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, ht = !1, i = e.times(Iu(s, n + f)), ht = !0, i = dA(i), i.s = a, i;
};
de.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = xt(i), n = ta(i, r <= a.toExpNeg || r >= a.toExpPos)) : (hn(e, 1, Ao), t === void 0 ? t = a.rounding : hn(t, 0, 8), i = tt(new a(i), e, t), r = xt(i), n = ta(i, e <= r || r <= a.toExpNeg, e)), n;
};
de.toSignificantDigits = de.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (hn(e, 1, Ao), t === void 0 ? t = n.rounding : hn(t, 0, 8)), tt(new n(r), e, t);
};
de.toString = de.valueOf = de.val = de.toJSON = de[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = xt(e), r = e.constructor;
  return ta(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function fA(e, t) {
  var r, n, i, a, u, s, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), ht ? tt(t, h) : t;
  if (l = e.d, f = t.d, u = e.e, i = t.e, l = l.slice(), a = u - i, a) {
    for (a < 0 ? (n = l, a = -a, s = f.length) : (n = f, i = u, s = l.length), u = Math.ceil(h / ct), s = u > s ? u + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = f.length, s - a < 0 && (a = s, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, ht ? tt(t, h) : t;
}
function hn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Zi + e);
}
function cn(e) {
  var t, r, n, i = e.length - 1, a = "", u = e[0];
  if (i > 0) {
    for (a += u, t = 1; t < i; t++)
      n = e[t] + "", r = ct - n.length, r && (a += ci(r)), a += n;
    u = e[t], n = u + "", r = ct - n.length, r && (a += ci(r));
  } else if (u === 0)
    return "0";
  for (; u % 10 === 0; ) u /= 10;
  return a + u;
}
var Rn = /* @__PURE__ */ function() {
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
    var s, l, f, d, h, v, g, b, y, w, A, O, S, _, x, E, $, M, F = n.constructor, D = n.s == i.s ? 1 : -1, B = n.d, N = i.d;
    if (!n.s) return new F(n);
    if (!i.s) throw Error(Nr + "Division by zero");
    for (l = n.e - i.e, $ = N.length, x = B.length, g = new F(D), b = g.d = [], f = 0; N[f] == (B[f] || 0); ) ++f;
    if (N[f] > (B[f] || 0) && --l, a == null ? O = a = F.precision : u ? O = a + (xt(n) - xt(i)) + 1 : O = a, O < 0) return new F(0);
    if (O = O / ct + 2 | 0, f = 0, $ == 1)
      for (d = 0, N = N[0], O++; (f < x || d) && O--; f++)
        S = d * Mt + (B[f] || 0), b[f] = S / N | 0, d = S % N | 0;
    else {
      for (d = Mt / (N[0] + 1) | 0, d > 1 && (N = e(N, d), B = e(B, d), $ = N.length, x = B.length), _ = $, y = B.slice(0, $), w = y.length; w < $; ) y[w++] = 0;
      M = N.slice(), M.unshift(0), E = N[0], N[1] >= Mt / 2 && ++E;
      do
        d = 0, s = t(N, y, $, w), s < 0 ? (A = y[0], $ != w && (A = A * Mt + (y[1] || 0)), d = A / E | 0, d > 1 ? (d >= Mt && (d = Mt - 1), h = e(N, d), v = h.length, w = y.length, s = t(h, y, v, w), s == 1 && (d--, r(h, $ < v ? M : N, v))) : (d == 0 && (s = d = 1), h = N.slice()), v = h.length, v < w && h.unshift(0), r(y, h, w), s == -1 && (w = y.length, s = t(N, y, $, w), s < 1 && (d++, r(y, $ < w ? M : N, w))), w = y.length) : s === 0 && (d++, y = [0]), b[f++] = d, s && y[0] ? y[w++] = B[_] || 0 : (y = [B[_]], w = 1);
      while ((_++ < x || y[0] !== void 0) && O--);
    }
    return b[0] || b.shift(), g.e = l, tt(g, u ? a + xt(g) + 1 : a);
  };
}();
function dA(e, t) {
  var r, n, i, a, u, s, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (xt(e) > 16) throw Error(fg + xt(e));
  if (!e.s) return new d(vr);
  for (t == null ? (ht = !1, s = h) : s = t, u = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(u), f += 5;
  for (n = Math.log(Wi(2, f)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new d(vr), d.precision = s; ; ) {
    if (i = tt(i.times(e), s), r = r.times(++l), u = a.plus(Rn(i, r, s)), cn(u.d).slice(0, s) === cn(a.d).slice(0, s)) {
      for (; f--; ) a = tt(a.times(a), s);
      return d.precision = h, t == null ? (ht = !0, tt(a, h)) : a;
    }
    a = u;
  }
}
function xt(e) {
  for (var t = e.e * ct, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ch(e, t, r) {
  if (t > e.LN10.sd())
    throw ht = !0, r && (e.precision = r), Error(Nr + "LN10 precision limit exceeded");
  return tt(new e(e.LN10), t);
}
function ci(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Iu(e, t) {
  var r, n, i, a, u, s, l, f, d, h = 1, v = 10, g = e, b = g.d, y = g.constructor, w = y.precision;
  if (g.s < 1) throw Error(Nr + (g.s ? "NaN" : "-Infinity"));
  if (g.eq(vr)) return new y(0);
  if (t == null ? (ht = !1, f = w) : f = t, g.eq(10))
    return t == null && (ht = !0), ch(y, f);
  if (f += v, y.precision = f, r = cn(b), n = r.charAt(0), a = xt(g), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = cn(g.d), n = r.charAt(0), h++;
    a = xt(g), n > 1 ? (g = new y("0." + r), a++) : g = new y(n + "." + r.slice(1));
  } else
    return l = ch(y, f + 2, w).times(a + ""), g = Iu(new y(n + "." + r.slice(1)), f - v).plus(l), y.precision = w, t == null ? (ht = !0, tt(g, w)) : g;
  for (s = u = g = Rn(g.minus(vr), g.plus(vr), f), d = tt(g.times(g), f), i = 3; ; ) {
    if (u = tt(u.times(d), f), l = s.plus(Rn(u, new y(i), f)), cn(l.d).slice(0, f) === cn(s.d).slice(0, f))
      return s = s.times(2), a !== 0 && (s = s.plus(ch(y, f + 2, w).times(a + ""))), s = Rn(s, new y(h), f), y.precision = w, t == null ? (ht = !0, tt(s, w)) : s;
    s = l, i += 2;
  }
}
function Mx(e, t) {
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
    if (e.d.push(+t), ht && (e.e > tl || e.e < -tl)) throw Error(fg + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function tt(e, t, r) {
  var n, i, a, u, s, l, f, d, h = e.d;
  for (u = 1, a = h[0]; a >= 10; a /= 10) u++;
  if (n = t - u, n < 0)
    n += ct, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / ct), a = h.length, d >= a) return e;
    for (f = a = h[d], u = 1; a >= 10; a /= 10) u++;
    n %= ct, i = n - ct + u;
  }
  if (r !== void 0 && (a = Wi(10, u - i - 1), s = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Wi(10, u - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = xt(e), h.length = 1, t = t - a - 1, h[0] = Wi(10, (ct - t % ct) % ct), e.e = So(-t / ct) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Wi(10, ct - n), h[d] = i > 0 ? (f / Wi(10, u - i) % Wi(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == Mt && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != Mt) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (ht && (e.e > tl || e.e < -tl))
    throw Error(fg + xt(e));
  return e;
}
function hA(e, t) {
  var r, n, i, a, u, s, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), ht ? tt(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), u = f - n, u) {
    for (d = u < 0, d ? (r = l, u = -u, s = h.length) : (r = h, n = f, s = l.length), i = Math.max(Math.ceil(g / ct), s) + 2, u > i && (u = i, r.length = 1), r.reverse(), i = u; i--; ) r.push(0);
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
  return l[0] ? (t.d = l, t.e = n, ht ? tt(t, g) : t) : new v(0);
}
function ta(e, t, r) {
  var n, i = xt(e), a = cn(e.d), u = a.length;
  return t ? (r && (n = r - u) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ci(n) : u > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + ci(-i - 1) + a, r && (n = r - u) > 0 && (a += ci(n))) : i >= u ? (a += ci(i + 1 - u), r && (n = r - i - 1) > 0 && (a = a + "." + ci(n))) : ((n = i + 1) < u && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - u) > 0 && (i + 1 === u && (a += "."), a += ci(n))), e.s < 0 ? "-" + a : a;
}
function Ix(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function pA(e) {
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
        throw Error(Zi + a);
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
      return Mx(u, a.toString());
    } else if (typeof a != "string")
      throw Error(Zi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), u.s = -1) : u.s = 1, FH.test(a)) Mx(u, a);
    else throw Error(Zi + a);
  }
  if (i.prototype = de, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = pA, i.config = i.set = WH, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function WH(e) {
  if (!e || typeof e != "object")
    throw Error(Nr + "Object expected");
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
      else throw Error(Zi + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Zi + r + ": " + n);
  return this;
}
var dg = pA(BH);
vr = new dg(1);
const Je = dg;
function zH(e) {
  return KH(e) || GH(e) || HH(e) || UH();
}
function UH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HH(e, t) {
  if (e) {
    if (typeof e == "string") return vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vp(e, t);
  }
}
function GH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function KH(e) {
  if (Array.isArray(e)) return vp(e);
}
function vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qH = function(t) {
  return t;
}, vA = {
  "@@functional/placeholder": !0
}, gA = function(t) {
  return t === vA;
}, kx = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && gA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, VH = function e(t, r) {
  return t === 1 ? r : kx(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var u = i.filter(function(s) {
      return s !== vA;
    }).length;
    return u >= t ? r.apply(void 0, i) : e(t - u, kx(function() {
      for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return gA(h) ? l.shift() : h;
      });
      return r.apply(void 0, zH(d).concat(l));
    }));
  });
}, ef = function(t) {
  return VH(t.length, t);
}, gp = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, YH = ef(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), XH = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return qH;
  var i = r.reverse(), a = i[0], u = i.slice(1);
  return function() {
    return u.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, yp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, yA = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function ZH(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Je(e).abs().log(10).toNumber()) + 1, t;
}
function JH(e, t, r) {
  for (var n = new Je(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var QH = ef(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), eG = ef(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), tG = ef(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const tf = {
  rangeStep: JH,
  getDigitCount: ZH,
  interpolateNumber: QH,
  uninterpolateNumber: eG,
  uninterpolateTruncation: tG
};
function mp(e) {
  return iG(e) || nG(e) || mA(e) || rG();
}
function rG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nG(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function iG(e) {
  if (Array.isArray(e)) return bp(e);
}
function ku(e, t) {
  return uG(e) || oG(e, t) || mA(e, t) || aG();
}
function aG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mA(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function oG(e, t) {
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
function uG(e) {
  if (Array.isArray(e)) return e;
}
function bA(e) {
  var t = ku(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function xA(e, t, r) {
  if (e.lte(0))
    return new Je(0);
  var n = tf.getDigitCount(e.toNumber()), i = new Je(10).pow(n), a = e.div(i), u = n !== 1 ? 0.05 : 0.1, s = new Je(Math.ceil(a.div(u).toNumber())).add(r).mul(u), l = s.mul(i);
  return t ? l : new Je(Math.ceil(l));
}
function sG(e, t, r) {
  var n = 1, i = new Je(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Je(10).pow(tf.getDigitCount(e) - 1), i = new Je(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Je(Math.floor(e)));
  } else e === 0 ? i = new Je(Math.floor((t - 1) / 2)) : r || (i = new Je(Math.floor(e)));
  var u = Math.floor((t - 1) / 2), s = XH(YH(function(l) {
    return i.add(new Je(l - u).mul(n)).toNumber();
  }), gp);
  return s(0, t);
}
function wA(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Je(0),
      tickMin: new Je(0),
      tickMax: new Je(0)
    };
  var a = xA(new Je(t).sub(e).div(r - 1), n, i), u;
  e <= 0 && t >= 0 ? u = new Je(0) : (u = new Je(e).add(t).div(2), u = u.sub(new Je(u).mod(a)));
  var s = Math.ceil(u.sub(e).div(a).toNumber()), l = Math.ceil(new Je(t).sub(u).div(a).toNumber()), f = s + l + 1;
  return f > r ? wA(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, s = t > 0 ? s : s + (r - f)), {
    step: a,
    tickMin: u.sub(new Je(s).mul(a)),
    tickMax: u.add(new Je(l).mul(a))
  });
}
function cG(e) {
  var t = ku(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = Math.max(i, 2), s = bA([r, n]), l = ku(s, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(mp(gp(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(mp(gp(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? yp(h) : h;
  }
  if (f === d)
    return sG(f, i, a);
  var v = wA(f, d, u, a), g = v.step, b = v.tickMin, y = v.tickMax, w = tf.rangeStep(b, y.add(new Je(0.1).mul(g)), g);
  return r > n ? yp(w) : w;
}
function lG(e, t) {
  var r = ku(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = bA([n, i]), s = ku(u, 2), l = s[0], f = s[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = xA(new Je(f).sub(l).div(d - 1), a, 0), v = [].concat(mp(tf.rangeStep(new Je(l), new Je(f).sub(new Je(0.99).mul(h)), h)), [f]);
  return n > i ? yp(v) : v;
}
var fG = yA(cG), dG = yA(lG), hG = process.env.NODE_ENV === "production", lh = "Invariant failed";
function er(e, t) {
  if (hG)
    throw new Error(lh);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(lh, ": ").concat(r) : lh;
  throw new Error(n);
}
var pG = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
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
function vG(e, t) {
  return bG(e) || mG(e, t) || yG(e, t) || gG();
}
function gG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yG(e, t) {
  if (e) {
    if (typeof e == "string") return jx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jx(e, t);
  }
}
function jx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mG(e, t) {
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
function bG(e) {
  if (Array.isArray(e)) return e;
}
function xG(e, t) {
  if (e == null) return {};
  var r = wG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wG(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ds(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, u = e.dataPointFormatter, s = e.xAxis, l = e.yAxis, f = xG(e, pG), d = me(f, !1);
  e.direction === "x" && s.type !== "number" && (process.env.NODE_ENV !== "production" ? er(!1, 'ErrorBar requires Axis type property to be "number".') : er());
  var h = a.map(function(v) {
    var g = u(v, i), b = g.x, y = g.y, w = g.value, A = g.errorVal;
    if (!A)
      return null;
    var O = [], S, _;
    if (Array.isArray(A)) {
      var x = vG(A, 2);
      S = x[0], _ = x[1];
    } else
      S = _ = A;
    if (r === "vertical") {
      var E = s.scale, $ = y + t, M = $ + n, F = $ - n, D = E(w - S), B = E(w + _);
      O.push({
        x1: B,
        y1: M,
        x2: B,
        y2: F
      }), O.push({
        x1: D,
        y1: $,
        x2: B,
        y2: $
      }), O.push({
        x1: D,
        y1: M,
        x2: D,
        y2: F
      });
    } else if (r === "horizontal") {
      var N = l.scale, U = b + t, z = U - n, J = U + n, H = N(w - S), Z = N(w + _);
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
    return /* @__PURE__ */ k.createElement(Le, rl({
      className: "recharts-errorBar",
      key: "bar-".concat(O.map(function(K) {
        return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
      }))
    }, d), O.map(function(K) {
      return /* @__PURE__ */ k.createElement("line", rl({}, K, {
        key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2)
      }));
    }));
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-errorBars"
  }, h);
}
ds.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
ds.displayName = "ErrorBar";
function ju(e) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ju(e);
}
function Rx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rx(Object(r), !0).forEach(function(n) {
      _G(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _G(e, t, r) {
  return t = OG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OG(e) {
  var t = AG(e, "string");
  return ju(t) == "symbol" ? t : String(t);
}
function AG(e, t) {
  if (ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _A = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, u = dr(r, Ua);
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
    var f = l.item, d = f.props, h = d.dataKey, v = d.name, g = d.legendType, b = d.hide;
    return {
      inactive: b,
      dataKey: h,
      type: u.props.iconType || g || "square",
      color: hg(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), fh(fh(fh({}, u.props), Ua.getWithHeight(u, i)), {}, {
    payload: s,
    item: u
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
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nx(Object(r), !0).forEach(function(n) {
      La(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function La(e, t, r) {
  return t = SG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SG(e) {
  var t = PG(e, "string");
  return Ru(t) == "symbol" ? t : String(t);
}
function PG(e, t) {
  if (Ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dx(e) {
  return CG(e) || $G(e) || TG(e) || EG();
}
function EG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TG(e, t) {
  if (e) {
    if (typeof e == "string") return xp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xp(e, t);
  }
}
function $G(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function CG(e) {
  if (Array.isArray(e)) return xp(e);
}
function xp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bt(e, t, r) {
  return Te(e) || Te(t) ? r : Et(t) ? gr(e, t, r) : Pe(t) ? t(e) : r;
}
function pu(e, t, r, n) {
  var i = RH(e, function(s) {
    return bt(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return oe(s) || parseFloat(s);
    });
    return a.length ? [Ql(a), fi(a)] : [1 / 0, -1 / 0];
  }
  var u = n ? i.filter(function(s) {
    return !Te(s);
  }) : i;
  return u.map(function(s) {
    return Et(s) || s instanceof Date ? s : "";
  });
}
var MG = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, u = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < s; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[s - 1].coordinate, h = i[f].coordinate, v = f >= s - 1 ? i[0].coordinate : i[f + 1].coordinate, g = void 0;
      if (Gt(h - d) !== Gt(v - h)) {
        var b = [];
        if (Gt(v - h) === Gt(l[1] - l[0])) {
          g = v;
          var y = h + l[1] - l[0];
          b[0] = Math.min(y, (y + d) / 2), b[1] = Math.max(y, (y + d) / 2);
        } else {
          g = d;
          var w = v + l[1] - l[0];
          b[0] = Math.min(h, (w + h) / 2), b[1] = Math.max(h, (w + h) / 2);
        }
        var A = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
        if (t > A[0] && t <= A[1] || t >= b[0] && t <= b[1]) {
          u = i[f].index;
          break;
        }
      } else {
        var O = Math.min(d, v), S = Math.max(d, v);
        if (t > (O + h) / 2 && t <= (S + h) / 2) {
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
}, hg = function(t) {
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
}, IG = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var u = {}, s = Object.keys(a), l = 0, f = s.length; l < f; l++)
    for (var d = a[s[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var b = d[h[v]], y = b.items, w = b.cateAxisId, A = y.filter(function(x) {
        return jn(x.type).indexOf("Bar") >= 0;
      });
      if (A && A.length) {
        var O = A[0].props.barSize, S = A[0].props[w];
        u[S] || (u[S] = []);
        var _ = Te(O) ? r : O;
        u[S].push({
          item: A[0],
          stackList: A.slice(1),
          barSize: Te(_) ? void 0 : Kt(_, n, 0)
        });
      }
    }
  return u;
}, kG = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, u = a === void 0 ? [] : a, s = t.maxBarSize, l = u.length;
  if (l < 1) return null;
  var f = Kt(r, i, 0, !0), d, h = [];
  if (u[0].barSize === +u[0].barSize) {
    var v = !1, g = i / l, b = u.reduce(function(_, x) {
      return _ + x.barSize || 0;
    }, 0);
    b += (l - 1) * f, b >= i && (b -= (l - 1) * f, f = 0), b >= i && g > 0 && (v = !0, g *= 0.9, b = l * g);
    var y = (i - b) / 2 >> 0, w = {
      offset: y - f,
      size: 0
    };
    d = u.reduce(function(_, x) {
      var E = {
        item: x.item,
        position: {
          offset: w.offset + w.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : x.barSize
        }
      }, $ = [].concat(Dx(_), [E]);
      return w = $[$.length - 1].position, x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        $.push({
          item: M,
          position: w
        });
      }), $;
    }, h);
  } else {
    var A = Kt(n, i, 0, !0);
    i - 2 * A - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * A - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var S = s === +s ? Math.min(O, s) : O;
    d = u.reduce(function(_, x, E) {
      var $ = [].concat(Dx(_), [{
        item: x.item,
        position: {
          offset: A + (O + f) * E + (O - S) / 2,
          size: S
        }
      }]);
      return x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        $.push({
          item: M,
          position: $[$.length - 1].position
        });
      }), $;
    }, h);
  }
  return d;
}, jG = function(t, r, n, i) {
  var a = n.children, u = n.width, s = n.margin, l = u - (s.left || 0) - (s.right || 0), f = _A({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, g = f.align, b = f.verticalAlign, y = f.layout;
    if ((y === "vertical" || y === "horizontal" && b === "middle") && g !== "center" && oe(t[g]))
      return Cr(Cr({}, t), {}, La({}, g, t[g] + (h || 0)));
    if ((y === "horizontal" || y === "vertical" && g === "center") && b !== "middle" && oe(t[b]))
      return Cr(Cr({}, t), {}, La({}, b, t[b] + (v || 0)));
  }
  return t;
}, RG = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, OA = function(t, r, n, i, a) {
  var u = r.props.children, s = yr(u, ds).filter(function(f) {
    return RG(i, a, f.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = bt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Ql(h), fi(h)] : [h, h], g = l.reduce(function(b, y) {
        var w = bt(d, y, 0), A = v[0] - Math.abs(Array.isArray(w) ? w[0] : w), O = v[1] + Math.abs(Array.isArray(w) ? w[1] : w);
        return [Math.min(A, b[0]), Math.max(O, b[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, NG = function(t, r, n, i, a) {
  var u = r.map(function(s) {
    return OA(t, s, n, a, i);
  }).filter(function(s) {
    return !Te(s);
  });
  return u && u.length ? u.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, AA = function(t, r, n, i, a) {
  var u = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && OA(t, l, f, i) || pu(t, f, n, a);
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
}, SA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, PA = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, u, s = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (u = !0), l.coordinate;
  });
  return a || s.push(r), u || s.push(n), s;
}, kn = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, u = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && u === "category" && i.bandwidth ? i.bandwidth() / l : 0;
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
      return !bo(h.coordinate);
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
}, dh = /* @__PURE__ */ new WeakMap(), bc = function(t, r) {
  if (typeof r != "function")
    return t;
  dh.has(t) || dh.set(t, /* @__PURE__ */ new WeakMap());
  var n = dh.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, EA = function(t, r, n) {
  var i = t.scale, a = t.type, u = t.layout, s = t.axisType;
  if (i === "auto")
    return u === "radial" && s === "radiusAxis" ? {
      scale: Eu(),
      realScaleType: "band"
    } : u === "radial" && s === "angleAxis" ? {
      scale: Zc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: hu(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Eu(),
      realScaleType: "band"
    } : {
      scale: Zc(),
      realScaleType: "linear"
    };
  if (os(i)) {
    var l = "scale".concat(Bl(i));
    return {
      scale: (Cx[l] || hu)(),
      realScaleType: Cx[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: hu(),
    realScaleType: "point"
  };
}, Lx = 1e-4, TA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Lx, u = Math.max(i[0], i[1]) + Lx, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > u || l < a || l > u) && t.domain([r[0], r[n - 1]]);
  }
}, DG = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, LG = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, BG = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0, s = 0; s < r; ++s) {
        var l = bo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = u, t[s][n][1] = u + l, u = t[s][n][1]);
      }
}, FG = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0; u < r; ++u) {
        var s = bo(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = 0, t[u][n][1] = 0);
      }
}, WG = {
  sign: BG,
  // @ts-expect-error definitelytyped types are incorrect
  expand: v8,
  // @ts-expect-error definitelytyped types are incorrect
  none: Fa,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: g8,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: y8,
  positive: FG
}, zG = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = WG[n], u = p8().keys(i).value(function(s, l) {
    return +bt(s, l, 0);
  }).order(Gh).offset(a);
  return u(t);
}, UG = function(t, r, n, i, a, u) {
  if (!t)
    return null;
  var s = u ? r.reverse() : r, l = {}, f = s.reduce(function(h, v) {
    var g = v.props, b = g.stackId, y = g.hide;
    if (y)
      return h;
    var w = v.props[n], A = h[w] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Et(b)) {
      var O = A.stackGroups[b] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(v), A.hasStack = !0, A.stackGroups[b] = O;
    } else
      A.stackGroups[oa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Cr(Cr({}, h), {}, La({}, w, A));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var g = f[v];
    if (g.hasStack) {
      var b = {};
      g.stackGroups = Object.keys(g.stackGroups).reduce(function(y, w) {
        var A = g.stackGroups[w];
        return Cr(Cr({}, y), {}, La({}, w, {
          numericAxisId: n,
          cateAxisId: i,
          items: A.items,
          stackedData: zG(t, A.items, a)
        }));
      }, b);
    }
    return Cr(Cr({}, h), {}, La({}, v, g));
  }, d);
}, $A = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, u = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && u && (u[0] === "auto" || u[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = fG(f, a, s);
    return t.domain([Ql(d), fi(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = dG(h, a, s);
    return {
      niceTicks: v
    };
  }
  return null;
};
function nl(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, u = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var s = Cc(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = bt(i, Te(u) ? t.dataKey : u);
  return Te(l) ? null : t.scale(l);
}
var Bx = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, u = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var l = bt(u, r.dataKey, r.domain[s]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, HG = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, GG = function(t, r) {
  var n = t.props.stackId;
  if (Et(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, KG = function(t) {
  return t.reduce(function(r, n) {
    return [Ql(n.concat([r[0]]).filter(oe)), fi(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, CA = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var u = t[a], s = u.stackedData, l = s.reduce(function(f, d) {
      var h = KG(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Fx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Wx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wp = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Fx.test(t[0])) {
    var a = +Fx.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Wx.test(t[1])) {
    var u = +Wx.exec(t[1])[1];
    i[1] = r[1] + u;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, il = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Fv(r, function(h) {
      return h.coordinate;
    }), u = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var f = a[s], d = a[s - 1];
      u = Math.min((f.coordinate || 0) - (d.coordinate || 0), u);
    }
    return u === 1 / 0 ? 0 : u;
  }
  return n ? void 0 : 0;
}, zx = function(t, r, n) {
  return !t || !t.length || ea(t, gr(n, "type.defaultProps.domain")) ? r : t;
}, MA = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, u = n.unit, s = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Cr(Cr({}, me(t, !1)), {}, {
    dataKey: i,
    unit: u,
    formatter: s,
    name: a || i,
    color: hg(t),
    value: bt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function Nu(e) {
  "@babel/helpers - typeof";
  return Nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nu(e);
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
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ux(Object(r), !0).forEach(function(n) {
      IA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IA(e, t, r) {
  return t = qG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qG(e) {
  var t = VG(e, "string");
  return Nu(t) == "symbol" ? t : String(t);
}
function VG(e, t) {
  if (Nu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function YG(e, t) {
  return QG(e) || JG(e, t) || ZG(e, t) || XG();
}
function XG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZG(e, t) {
  if (e) {
    if (typeof e == "string") return Hx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hx(e, t);
  }
}
function Hx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JG(e, t) {
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
function QG(e) {
  if (Array.isArray(e)) return e;
}
var al = Math.PI / 180, eK = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-al * i) * n,
    y: r + Math.sin(-al * i) * n
  };
}, kA = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, tK = function(t, r, n, i, a) {
  var u = t.width, s = t.height, l = t.startAngle, f = t.endAngle, d = Kt(t.cx, u, u / 2), h = Kt(t.cy, s, s / 2), v = kA(u, s, n), g = Kt(t.innerRadius, v, 0), b = Kt(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(w, A) {
    var O = r[A], S = O.domain, _ = O.reversed, x;
    if (Te(O.range))
      i === "angleAxis" ? x = [l, f] : i === "radiusAxis" && (x = [g, b]), _ && (x = [x[1], x[0]]);
    else {
      x = O.range;
      var E = x, $ = YG(E, 2);
      l = $[0], f = $[1];
    }
    var M = EA(O, a), F = M.realScaleType, D = M.scale;
    D.domain(S).range(x), TA(D);
    var B = $A(D, $n($n({}, O), {}, {
      realScaleType: F
    })), N = $n($n($n({}, O), B), {}, {
      range: x,
      radius: b,
      realScaleType: F,
      scale: D,
      cx: d,
      cy: h,
      innerRadius: g,
      outerRadius: b,
      startAngle: l,
      endAngle: f
    });
    return $n($n({}, w), {}, IA({}, A, N));
  }, {});
}, rK = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - u, 2));
}, nK = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, u = r.cy, s = rK({
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
    angle: eK(f),
    angleInRadian: f
  };
}, iK = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), u = Math.min(i, a);
  return {
    startAngle: r - u * 360,
    endAngle: n - u * 360
  };
}, aK = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), u = Math.floor(i / 360), s = Math.min(a, u);
  return t + s * 360;
}, Gx = function(t, r) {
  var n = t.x, i = t.y, a = nK({
    x: n,
    y: i
  }, r), u = a.radius, s = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (u < l || u > f)
    return !1;
  if (u === 0)
    return !0;
  var d = iK(r), h = d.startAngle, v = d.endAngle, g = s, b;
  if (h <= v) {
    for (; g > v; )
      g -= 360;
    for (; g < h; )
      g += 360;
    b = g >= h && g <= v;
  } else {
    for (; g > h; )
      g -= 360;
    for (; g < v; )
      g += 360;
    b = g >= v && g <= h;
  }
  return b ? $n($n({}, r), {}, {
    radius: u,
    angle: aK(g, r)
  }) : null;
}, jA = function(t) {
  return !/* @__PURE__ */ Yr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function Du(e) {
  "@babel/helpers - typeof";
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Du(e);
}
var oK = ["offset"];
function uK(e) {
  return fK(e) || lK(e) || cK(e) || sK();
}
function sK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cK(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function lK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fK(e) {
  if (Array.isArray(e)) return _p(e);
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dK(e, t) {
  if (e == null) return {};
  var r = hK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Kx(e, t) {
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
    t % 2 ? Kx(Object(r), !0).forEach(function(n) {
      pK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pK(e, t, r) {
  return t = vK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vK(e) {
  var t = gK(e, "string");
  return Du(t) == "symbol" ? t : String(t);
}
function gK(e, t) {
  if (Du(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Du(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lu() {
  return Lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lu.apply(this, arguments);
}
var yK = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, mK = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, bK = function(t, r, n) {
  var i = t.position, a = t.viewBox, u = t.offset, s = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, b = l.endAngle, y = l.clockWise, w = (h + v) / 2, A = mK(g, b), O = A >= 0 ? 1 : -1, S, _;
  i === "insideStart" ? (S = g + O * u, _ = y) : i === "insideEnd" ? (S = b - O * u, _ = !y) : i === "end" && (S = b + O * u, _ = y), _ = A <= 0 ? _ : !_;
  var x = it(f, d, w, S), E = it(f, d, w, S + (_ ? 1 : -1) * 359), $ = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(w, ",").concat(w, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), M = Te(t.id) ? oa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Lu({}, n, {
    dominantBaseline: "central",
    className: Me("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: M,
    d: $
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(M)
  }, r));
}, xK = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, u = a.cx, s = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(u, s, f + n, v), b = g.x, y = g.y;
    return {
      x: b,
      y,
      textAnchor: b >= u ? "start" : "end",
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
  var w = (l + f) / 2, A = it(u, s, w, v), O = A.x, S = A.y;
  return {
    x: O,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, wK = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, u = r, s = u.x, l = u.y, f = u.width, d = u.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", b = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, w = y * i, A = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
  if (a === "top") {
    var S = {
      x: s + f / 2,
      y: l - h * i,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return Ot(Ot({}, S), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: s + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: b
    };
    return Ot(Ot({}, _), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var x = {
      x: s - w,
      y: l + d / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, x), n ? {
      width: Math.max(x.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var E = {
      x: s + f + w,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, E), n ? {
      width: Math.max(n.x + n.width - E.x, 0),
      height: d
    } : {});
  }
  var $ = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? Ot({
    x: s + w,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, $) : a === "insideRight" ? Ot({
    x: s + f - w,
    y: l + d / 2,
    textAnchor: A,
    verticalAnchor: "middle"
  }, $) : a === "insideTop" ? Ot({
    x: s + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: b
  }, $) : a === "insideBottom" ? Ot({
    x: s + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: g
  }, $) : a === "insideTopLeft" ? Ot({
    x: s + w,
    y: l + v,
    textAnchor: O,
    verticalAnchor: b
  }, $) : a === "insideTopRight" ? Ot({
    x: s + f - w,
    y: l + v,
    textAnchor: A,
    verticalAnchor: b
  }, $) : a === "insideBottomLeft" ? Ot({
    x: s + w,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: g
  }, $) : a === "insideBottomRight" ? Ot({
    x: s + f - w,
    y: l + d - v,
    textAnchor: A,
    verticalAnchor: g
  }, $) : vo(a) && (oe(a.x) || Ui(a.x)) && (oe(a.y) || Ui(a.y)) ? Ot({
    x: s + Kt(a.x, f),
    y: l + Kt(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, $) : Ot({
    x: s + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, $);
}, _K = function(t) {
  return "cx" in t && oe(t.cx);
};
function Pt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = dK(e, oK), i = Ot({
    offset: r
  }, n), a = i.viewBox, u = i.position, s = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(s) && Te(l) && !/* @__PURE__ */ Yr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ Yr(f))
    return /* @__PURE__ */ At(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ V1(f, i), /* @__PURE__ */ Yr(g))
      return g;
  } else
    g = yK(i);
  var b = _K(a), y = me(i, !0);
  if (b && (u === "insideStart" || u === "insideEnd" || u === "end"))
    return bK(i, g, y);
  var w = b ? xK(i) : wK(i);
  return /* @__PURE__ */ k.createElement(vi, Lu({
    className: Me("recharts-label", h)
  }, y, w, {
    breakAll: v
  }), g);
}
Pt.displayName = "Label";
var RA = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, u = t.endAngle, s = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, b = t.left, y = t.width, w = t.height, A = t.clockWise, O = t.labelViewBox;
  if (O)
    return O;
  if (oe(y) && oe(w)) {
    if (oe(h) && oe(v))
      return {
        x: h,
        y: v,
        width: y,
        height: w
      };
    if (oe(g) && oe(b))
      return {
        x: g,
        y: b,
        width: y,
        height: w
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
    clockWise: A
  } : t.viewBox ? t.viewBox : {};
}, OK = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r
  }) : Et(t) ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Yr(t) ? t.type === Pt ? /* @__PURE__ */ At(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : vo(t) ? /* @__PURE__ */ k.createElement(Pt, Lu({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, AK = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = RA(t), u = yr(i, Pt).map(function(l, f) {
    return /* @__PURE__ */ At(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return u;
  var s = OK(t.label, r || a);
  return [s].concat(uK(u));
};
Pt.parseViewBox = RA;
Pt.renderCallByParent = AK;
function SK(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var PK = SK;
const EK = /* @__PURE__ */ Ze(PK);
function Bu(e) {
  "@babel/helpers - typeof";
  return Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bu(e);
}
var TK = ["valueAccessor"], $K = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function CK(e) {
  return jK(e) || kK(e) || IK(e) || MK();
}
function MK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IK(e, t) {
  if (e) {
    if (typeof e == "string") return Op(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Op(e, t);
  }
}
function kK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jK(e) {
  if (Array.isArray(e)) return Op(e);
}
function Op(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ol() {
  return ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ol.apply(this, arguments);
}
function qx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qx(Object(r), !0).forEach(function(n) {
      RK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RK(e, t, r) {
  return t = NK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NK(e) {
  var t = DK(e, "string");
  return Bu(t) == "symbol" ? t : String(t);
}
function DK(e, t) {
  if (Bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yx(e, t) {
  if (e == null) return {};
  var r = LK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var BK = function(t) {
  return Array.isArray(t.value) ? EK(t.value) : t.value;
};
function kr(e) {
  var t = e.valueAccessor, r = t === void 0 ? BK : t, n = Yx(e, TK), i = n.data, a = n.dataKey, u = n.clockWise, s = n.id, l = n.textBreakAll, f = Yx(n, $K);
  return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Te(a) ? r(d, h) : bt(d && d.payload, a), g = Te(s) ? {} : {
      id: "".concat(s, "-").concat(h)
    };
    return /* @__PURE__ */ k.createElement(Pt, ol({}, me(d, !0), f, g, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Pt.parseViewBox(Te(u) ? d : Vx(Vx({}, d), {}, {
        clockWise: u
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
kr.displayName = "LabelList";
function FK(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Pe(e) ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : vo(e) ? /* @__PURE__ */ k.createElement(kr, ol({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function WK(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = yr(n, kr).map(function(u, s) {
    return /* @__PURE__ */ At(u, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = FK(e.label, t);
  return [a].concat(CK(i));
}
kr.renderCallByParent = WK;
function Fu(e) {
  "@babel/helpers - typeof";
  return Fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fu(e);
}
function Ap() {
  return Ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ap.apply(this, arguments);
}
function Xx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xx(Object(r), !0).forEach(function(n) {
      zK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zK(e, t, r) {
  return t = UK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UK(e) {
  var t = HK(e, "string");
  return Fu(t) == "symbol" ? t : String(t);
}
function HK(e, t) {
  if (Fu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GK = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, xc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, u = t.sign, s = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (s ? 1 : -1) + i, h = Math.asin(l / d) / al, v = f ? a : a + u * h, g = it(r, n, d, v), b = it(r, n, i, v), y = f ? a - u * h : a, w = it(r, n, d * Math.cos(h * al), y);
  return {
    center: g,
    circleTangency: b,
    lineTangency: w,
    theta: h
  };
}, NA = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.startAngle, s = t.endAngle, l = GK(u, s), f = u + l, d = it(r, n, a, u), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(u > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var g = it(r, n, i, u), b = it(r, n, i, f);
    v += "L ".concat(b.x, ",").concat(b.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(u <= f), `,
            `).concat(g.x, ",").concat(g.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, KK = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Gt(d - f), v = xc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: u,
    cornerIsExternal: l
  }), g = v.circleTangency, b = v.lineTangency, y = v.theta, w = xc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: u,
    cornerIsExternal: l
  }), A = w.circleTangency, O = w.lineTangency, S = w.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - S;
  if (_ < 0)
    return s ? "M ".concat(b.x, ",").concat(b.y, `
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(u * 2, `,0
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(-u * 2, `,0
      `) : NA({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var x = "M ".concat(b.x, ",").concat(b.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = xc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: u,
      cornerIsExternal: l
    }), $ = E.circleTangency, M = E.lineTangency, F = E.theta, D = xc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: u,
      cornerIsExternal: l
    }), B = D.circleTangency, N = D.lineTangency, U = D.theta, z = l ? Math.abs(f - d) : Math.abs(f - d) - F - U;
    if (z < 0 && u === 0)
      return "".concat(x, "L").concat(r, ",").concat(n, "Z");
    x += "L".concat(N.x, ",").concat(N.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(B.x, ",").concat(B.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(z > 180), ",").concat(+(h > 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(M.x, ",").concat(M.y, "Z");
  } else
    x += "L".concat(r, ",").concat(n, "Z");
  return x;
}, qK = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, DA = function(t) {
  var r = Zx(Zx({}, qK), t), n = r.cx, i = r.cy, a = r.innerRadius, u = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (u < a || d === h)
    return null;
  var g = Me("recharts-sector", v), b = u - a, y = Kt(s, b, 0, !0), w;
  return y > 0 && Math.abs(d - h) < 360 ? w = KK({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    cornerRadius: Math.min(y, b / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : w = NA({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ k.createElement("path", Ap({}, me(r, !0), {
    className: g,
    d: w,
    role: "img"
  }));
};
function Wu(e) {
  "@babel/helpers - typeof";
  return Wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wu(e);
}
function Sp() {
  return Sp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sp.apply(this, arguments);
}
function Jx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jx(Object(r), !0).forEach(function(n) {
      VK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VK(e, t, r) {
  return t = YK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YK(e) {
  var t = XK(e, "string");
  return Wu(t) == "symbol" ? t : String(t);
}
function XK(e, t) {
  if (Wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ew = {
  curveBasisClosed: n8,
  curveBasisOpen: i8,
  curveBasis: r8,
  curveBumpX: zD,
  curveBumpY: UD,
  curveLinearClosed: a8,
  curveLinear: Wl,
  curveMonotoneX: o8,
  curveMonotoneY: u8,
  curveNatural: s8,
  curveStep: c8,
  curveStepAfter: f8,
  curveStepBefore: l8
}, wc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, au = function(t) {
  return t.x;
}, ou = function(t) {
  return t.y;
}, ZK = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Bl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? ew["".concat(n).concat(r === "vertical" ? "Y" : "X")] : ew[n] || Wl;
}, JK = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, u = t.baseLine, s = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = ZK(n, s), h = f ? a.filter(function(y) {
    return wc(y);
  }) : a, v;
  if (Array.isArray(u)) {
    var g = f ? u.filter(function(y) {
      return wc(y);
    }) : u, b = h.map(function(y, w) {
      return Qx(Qx({}, y), {}, {
        base: g[w]
      });
    });
    return s === "vertical" ? v = fc().y(ou).x1(au).x0(function(y) {
      return y.base.x;
    }) : v = fc().x(au).y1(ou).y0(function(y) {
      return y.base.y;
    }), v.defined(wc).curve(d), v(b);
  }
  return s === "vertical" && oe(u) ? v = fc().y(ou).x1(au).x0(u) : oe(u) ? v = fc().x(au).y1(ou).y0(u) : v = k_().x(au).y(ou), v.defined(wc).curve(d), v(h);
}, Ji = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var u = n && n.length ? JK(t) : i;
  return /* @__PURE__ */ k.createElement("path", Sp({}, me(t, !1), Mc(t), {
    className: Me("recharts-curve", r),
    d: u,
    ref: a
  }));
}, Pp = { exports: {} }, _c = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tw;
function QK() {
  if (tw) return Ve;
  tw = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
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
                case s:
                case d:
                case b:
                case g:
                case u:
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
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = s, Ve.ContextProvider = u, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = b, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(x) {
    return _(x) || S(x) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(x) {
    return S(x) === s;
  }, Ve.isContextProvider = function(x) {
    return S(x) === u;
  }, Ve.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ve.isForwardRef = function(x) {
    return S(x) === d;
  }, Ve.isFragment = function(x) {
    return S(x) === n;
  }, Ve.isLazy = function(x) {
    return S(x) === b;
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
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === h || x === v || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === g || x.$$typeof === u || x.$$typeof === s || x.$$typeof === d || x.$$typeof === w || x.$$typeof === A || x.$$typeof === O || x.$$typeof === y);
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
var rw;
function eq() {
  return rw || (rw = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === g || j.$$typeof === u || j.$$typeof === s || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
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
                  case s:
                  case d:
                  case b:
                  case g:
                  case u:
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
    var x = l, E = f, $ = s, M = u, F = t, D = d, B = n, N = b, U = g, z = r, J = a, H = i, Z = h, K = !1;
    function ue(j) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === s;
    }
    function ae(j) {
      return _(j) === u;
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
      return _(j) === b;
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
    function se(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    Ye.AsyncMode = x, Ye.ConcurrentMode = E, Ye.ContextConsumer = $, Ye.ContextProvider = M, Ye.Element = F, Ye.ForwardRef = D, Ye.Fragment = B, Ye.Lazy = N, Ye.Memo = U, Ye.Portal = z, Ye.Profiler = J, Ye.StrictMode = H, Ye.Suspense = Z, Ye.isAsyncMode = ue, Ye.isConcurrentMode = G, Ye.isContextConsumer = X, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ge, Ye.isLazy = xe, Ye.isMemo = ye, Ye.isPortal = we, Ye.isProfiler = ne, Ye.isStrictMode = se, Ye.isSuspense = pe, Ye.isValidElementType = S, Ye.typeOf = _;
  }()), Ye;
}
var nw;
function LA() {
  return nw || (nw = 1, process.env.NODE_ENV === "production" ? _c.exports = QK() : _c.exports = eq()), _c.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hh, iw;
function tq() {
  if (iw) return hh;
  iw = 1;
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
  return hh = i() ? Object.assign : function(a, u) {
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
  }, hh;
}
var ph, aw;
function pg() {
  if (aw) return ph;
  aw = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ph = e, ph;
}
var vh, ow;
function BA() {
  return ow || (ow = 1, vh = Function.call.bind(Object.prototype.hasOwnProperty)), vh;
}
var gh, uw;
function rq() {
  if (uw) return gh;
  uw = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = pg(), r = {}, n = BA();
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
          } catch (b) {
            h = b;
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
  }, gh = i, gh;
}
var yh, sw;
function nq() {
  if (sw) return yh;
  sw = 1;
  var e = LA(), t = tq(), r = pg(), n = BA(), i = rq(), a = function() {
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
  return yh = function(s, l) {
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
      oneOf: $,
      oneOfType: F,
      shape: N,
      exact: U
    };
    function b(G, X) {
      return G === X ? G !== 0 || 1 / G === 1 / X : G !== G && X !== X;
    }
    function y(G, X) {
      this.message = G, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function w(G) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, ae = 0;
      function ce(ge, xe, ye, we, ne, se, pe) {
        if (we = we || v, se = se || ye, pe !== r) {
          if (l) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = we + ":" + ye;
            !X[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + se + "` prop on `" + we + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[Ee] = !0, ae++);
          }
        }
        return xe[ye] == null ? ge ? xe[ye] === null ? new y("The " + ne + " `" + se + "` is marked as required " + ("in `" + we + "`, but its value is `null`.")) : new y("The " + ne + " `" + se + "` is marked as required in " + ("`" + we + "`, but its value is `undefined`.")) : null : G(xe, ye, we, ne, se);
      }
      var he = ce.bind(null, !1);
      return he.isRequired = ce.bind(null, !0), he;
    }
    function A(G) {
      function X(ae, ce, he, ge, xe, ye) {
        var we = ae[ce], ne = H(we);
        if (ne !== G) {
          var se = Z(we);
          return new y(
            "Invalid " + ge + " `" + xe + "` of type " + ("`" + se + "` supplied to `" + he + "`, expected ") + ("`" + G + "`."),
            { expectedType: G }
          );
        }
        return null;
      }
      return w(X);
    }
    function O() {
      return w(u);
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
          var se = G(ye, ne, he, ge, xe + "[" + ne + "]", r);
          if (se instanceof Error)
            return se;
        }
        return null;
      }
      return w(X);
    }
    function _() {
      function G(X, ae, ce, he, ge) {
        var xe = X[ae];
        if (!s(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(G);
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
      return w(G);
    }
    function E(G) {
      function X(ae, ce, he, ge, xe) {
        if (!(ae[ce] instanceof G)) {
          var ye = G.name || v, we = ue(ae[ce]);
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected ") + ("instance of `" + ye + "`."));
        }
        return null;
      }
      return w(X);
    }
    function $(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), u;
      function X(ae, ce, he, ge, xe) {
        for (var ye = ae[ce], we = 0; we < G.length; we++)
          if (b(ye, G[we]))
            return null;
        var ne = JSON.stringify(G, function(pe, j) {
          var Ee = Z(j);
          return Ee === "symbol" ? String(j) : j;
        });
        return new y("Invalid " + ge + " `" + xe + "` of value `" + String(ye) + "` " + ("supplied to `" + he + "`, expected one of " + ne + "."));
      }
      return w(X);
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
            var se = G(ye, ne, he, ge, xe + "." + ne, r);
            if (se instanceof Error)
              return se;
          }
        return null;
      }
      return w(X);
    }
    function F(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var X = 0; X < G.length; X++) {
        var ae = G[X];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(ae) + " at index " + X + "."
          ), u;
      }
      function ce(he, ge, xe, ye, we) {
        for (var ne = [], se = 0; se < G.length; se++) {
          var pe = G[se], j = pe(he, ge, xe, ye, we, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && ne.push(j.data.expectedType);
        }
        var Ee = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new y("Invalid " + ye + " `" + we + "` supplied to " + ("`" + xe + "`" + Ee + "."));
      }
      return w(ce);
    }
    function D() {
      function G(X, ae, ce, he, ge) {
        return z(X[ae]) ? null : new y("Invalid " + he + " `" + ge + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
      }
      return w(G);
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
          var se = G[ne];
          if (typeof se != "function")
            return B(he, ge, xe, ne, Z(se));
          var pe = se(ye, ne, he, ge, xe + "." + ne, r);
          if (pe)
            return pe;
        }
        return null;
      }
      return w(X);
    }
    function U(G) {
      function X(ae, ce, he, ge, xe) {
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type `" + we + "` " + ("supplied to `" + he + "`, expected `object`."));
        var ne = t({}, ae[ce], G);
        for (var se in ne) {
          var pe = G[se];
          if (n(G, se) && typeof pe != "function")
            return B(he, ge, xe, se, Z(pe));
          if (!pe)
            return new y(
              "Invalid " + ge + " `" + xe + "` key `" + se + "` supplied to `" + he + "`.\nBad object: " + JSON.stringify(ae[ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(G), null, "  ")
            );
          var j = pe(ye, se, he, ge, xe + "." + se, r);
          if (j)
            return j;
        }
        return null;
      }
      return w(X);
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
          if (G === null || s(G))
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
    function K(G) {
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
    function ue(G) {
      return !G.constructor || !G.constructor.name ? v : G.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, yh;
}
var mh, cw;
function iq() {
  if (cw) return mh;
  cw = 1;
  var e = pg();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, mh = function() {
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
  }, mh;
}
if (process.env.NODE_ENV !== "production") {
  var aq = LA(), oq = !0;
  Pp.exports = nq()(aq.isElement, oq);
} else
  Pp.exports = iq()();
var uq = Pp.exports;
const je = /* @__PURE__ */ Ze(uq);
var sq = Object.getOwnPropertyNames, cq = Object.getOwnPropertySymbols, lq = Object.prototype.hasOwnProperty;
function lw(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Oc(e) {
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
function fw(e) {
  return sq(e).concat(cq(e));
}
var FA = Object.hasOwn || function(e, t) {
  return lq.call(e, t);
};
function Po(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var WA = "_owner", dw = Object.getOwnPropertyDescriptor, hw = Object.keys;
function fq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function dq(e, t) {
  return Po(e.getTime(), t.getTime());
}
function pw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, u, s; (u = i.next()) && !u.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (s = l.next()) && !s.done; ) {
      var h = u.value, v = h[0], g = h[1], b = s.value, y = b[0], w = b[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, w, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function hq(e, t, r) {
  var n = hw(e), i = n.length;
  if (hw(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === WA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !FA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function uu(e, t, r) {
  var n = fw(e), i = n.length;
  if (fw(t).length !== i)
    return !1;
  for (var a, u, s; i-- > 0; )
    if (a = n[i], a === WA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !FA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (u = dw(e, a), s = dw(t, a), (u || s) && (!u || !s || u.configurable !== s.configurable || u.enumerable !== s.enumerable || u.writable !== s.writable)))
      return !1;
  return !0;
}
function pq(e, t) {
  return Po(e.valueOf(), t.valueOf());
}
function vq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function vw(e, t, r) {
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
function gq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var yq = "[object Arguments]", mq = "[object Boolean]", bq = "[object Date]", xq = "[object Map]", wq = "[object Number]", _q = "[object Object]", Oq = "[object RegExp]", Aq = "[object Set]", Sq = "[object String]", Pq = Array.isArray, gw = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, yw = Object.assign, Eq = Object.prototype.toString.call.bind(Object.prototype.toString);
function Tq(e) {
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
    if (Pq(d))
      return t(d, h, v);
    if (gw != null && gw(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return u(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return s(d, h, v);
    var b = Eq(d);
    return b === bq ? r(d, h, v) : b === Oq ? u(d, h, v) : b === xq ? n(d, h, v) : b === Aq ? s(d, h, v) : b === _q ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : b === yq ? i(d, h, v) : b === mq || b === wq || b === Sq ? a(d, h, v) : !1;
  };
}
function $q(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? uu : fq,
    areDatesEqual: dq,
    areMapsEqual: n ? lw(pw, uu) : pw,
    areObjectsEqual: n ? uu : hq,
    arePrimitiveWrappersEqual: pq,
    areRegExpsEqual: vq,
    areSetsEqual: n ? lw(vw, uu) : vw,
    areTypedArraysEqual: n ? uu : gq
  };
  if (r && (i = yw({}, i, r(i))), t) {
    var a = Oc(i.areArraysEqual), u = Oc(i.areMapsEqual), s = Oc(i.areObjectsEqual), l = Oc(i.areSetsEqual);
    i = yw({}, i, {
      areArraysEqual: a,
      areMapsEqual: u,
      areObjectsEqual: s,
      areSetsEqual: l
    });
  }
  return i;
}
function Cq(e) {
  return function(t, r, n, i, a, u, s) {
    return e(t, r, s);
  };
}
function Mq(e) {
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
var Iq = Ai();
Ai({ strict: !0 });
Ai({ circular: !0 });
Ai({
  circular: !0,
  strict: !0
});
Ai({
  createInternalComparator: function() {
    return Po;
  }
});
Ai({
  strict: !0,
  createInternalComparator: function() {
    return Po;
  }
});
Ai({
  circular: !0,
  createInternalComparator: function() {
    return Po;
  }
});
Ai({
  circular: !0,
  createInternalComparator: function() {
    return Po;
  },
  strict: !0
});
function Ai(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, u = a === void 0 ? !1 : a, s = $q(e), l = Tq(s), f = n ? n(l) : Cq(l);
  return Mq({ circular: r, comparator: l, createState: i, equals: f, strict: u });
}
function kq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function mw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : kq(i);
  };
  requestAnimationFrame(n);
}
function Ep(e) {
  "@babel/helpers - typeof";
  return Ep = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ep(e);
}
function jq(e) {
  return Lq(e) || Dq(e) || Nq(e) || Rq();
}
function Rq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nq(e, t) {
  if (e) {
    if (typeof e == "string") return bw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bw(e, t);
  }
}
function bw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Dq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lq(e) {
  if (Array.isArray(e)) return e;
}
function Bq() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var u = a, s = jq(u), l = s[0], f = s.slice(1);
        if (typeof l == "number") {
          mw(i.bind(null, f), l);
          return;
        }
        i(l), mw(i.bind(null, f));
        return;
      }
      Ep(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function zu(e) {
  "@babel/helpers - typeof";
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
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
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      zA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zA(e, t, r) {
  return t = Fq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fq(e) {
  var t = Wq(e, "string");
  return zu(t) === "symbol" ? t : String(t);
}
function Wq(e, t) {
  if (zu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zq = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Uq = function(t) {
  return t;
}, Hq = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, vu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return ww(ww({}, n), {}, zA({}, i, t(i, r[i])));
  }, {});
}, _w = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Hq(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, Gq = process.env.NODE_ENV !== "production", ul = function(t, r, n, i, a, u, s, l) {
  if (Gq && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, u, s, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function Kq(e, t) {
  return Yq(e) || Vq(e, t) || UA(e, t) || qq();
}
function qq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vq(e, t) {
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
function Yq(e) {
  if (Array.isArray(e)) return e;
}
function Xq(e) {
  return Qq(e) || Jq(e) || UA(e) || Zq();
}
function Zq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UA(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tp(e, t);
  }
}
function Jq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qq(e) {
  if (Array.isArray(e)) return Tp(e);
}
function Tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var sl = 1e-4, HA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, GA = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Ow = function(t, r) {
  return function(n) {
    var i = HA(t, r);
    return GA(i, n);
  };
}, eV = function(t, r) {
  return function(n) {
    var i = HA(t, r), a = [].concat(Xq(i.map(function(u, s) {
      return u * s;
    }).slice(1)), [0]);
    return GA(a, n);
  };
}, Aw = function() {
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
          var f = l[1].split(")")[0].split(",").map(function(w) {
            return parseFloat(w);
          }), d = Kq(f, 4);
          i = d[0], a = d[1], u = d[2], s = d[3];
        } else
          ul(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  ul([i, u, a, s].every(function(w) {
    return typeof w == "number" && w >= 0 && w <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = Ow(i, u), v = Ow(a, s), g = eV(i, u), b = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, y = function(A) {
    for (var O = A > 1 ? 1 : A, S = O, _ = 0; _ < 8; ++_) {
      var x = h(S) - O, E = g(S);
      if (Math.abs(x - O) < sl || E < sl)
        return v(S);
      S = b(S - x / E);
    }
    return v(S);
  };
  return y.isStepper = !1, y;
}, tV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, u = t.dt, s = u === void 0 ? 17 : u, l = function(d, h, v) {
    var g = -(d - h) * n, b = v * a, y = v + (g - b) * s / 1e3, w = v * s / 1e3 + d;
    return Math.abs(w - h) < sl && Math.abs(y) < sl ? [h, 0] : [w, y];
  };
  return l.isStepper = !0, l.dt = s, l;
}, rV = function() {
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
        return Aw(i);
      case "spring":
        return tV();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Aw(i);
        ul(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (ul(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Uu(e) {
  "@babel/helpers - typeof";
  return Uu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uu(e);
}
function Sw(e) {
  return aV(e) || iV(e) || KA(e) || nV();
}
function nV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function aV(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Pw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      $p(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $p(e, t, r) {
  return t = oV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oV(e) {
  var t = uV(e, "string");
  return Uu(t) === "symbol" ? t : String(t);
}
function uV(e, t) {
  if (Uu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Uu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sV(e, t) {
  return fV(e) || lV(e, t) || KA(e, t) || cV();
}
function cV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KA(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lV(e, t) {
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
function fV(e) {
  if (Array.isArray(e)) return e;
}
var cl = function(t, r, n) {
  return t + (r - t) * n;
}, Mp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, dV = function e(t, r, n) {
  var i = vu(function(a, u) {
    if (Mp(u)) {
      var s = t(u.from, u.to, u.velocity), l = sV(s, 2), f = l[0], d = l[1];
      return Rt(Rt({}, u), {}, {
        from: f,
        velocity: d
      });
    }
    return u;
  }, r);
  return n < 1 ? vu(function(a, u) {
    return Mp(u) ? Rt(Rt({}, u), {}, {
      velocity: cl(u.velocity, i[a].velocity, n),
      from: cl(u.from, i[a].from, n)
    }) : u;
  }, r) : e(t, i, n - 1);
};
const hV = function(e, t, r, n, i) {
  var a = zq(e, t), u = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, $p({}, A, [e[A], t[A]]));
  }, {}), s = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, $p({}, A, {
      from: e[A],
      velocity: 0,
      to: t[A]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return vu(function(A, O) {
      return O.from;
    }, s);
  }, g = function() {
    return !Object.values(s).filter(Mp).length;
  }, b = function(A) {
    f || (f = A);
    var O = A - f, S = O / r.dt;
    s = dV(r, s, S), i(Rt(Rt(Rt({}, e), t), v())), f = A, g() || (l = requestAnimationFrame(h));
  }, y = function(A) {
    d || (d = A);
    var O = (A - d) / n, S = vu(function(x, E) {
      return cl.apply(void 0, Sw(E).concat([r(O)]));
    }, u);
    if (i(Rt(Rt(Rt({}, e), t), S)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = vu(function(x, E) {
        return cl.apply(void 0, Sw(E).concat([r(1)]));
      }, u);
      i(Rt(Rt(Rt({}, e), t), _));
    }
  };
  return h = r.isStepper ? b : y, function() {
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
var pV = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function vV(e, t) {
  if (e == null) return {};
  var r = gV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function bh(e) {
  return xV(e) || bV(e) || mV(e) || yV();
}
function yV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mV(e, t) {
  if (e) {
    if (typeof e == "string") return Ip(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ip(e, t);
  }
}
function bV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xV(e) {
  if (Array.isArray(e)) return Ip(e);
}
function Ip(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ew(Object(r), !0).forEach(function(n) {
      cu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cu(e, t, r) {
  return t = qA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _V(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qA(n.key), n);
  }
}
function OV(e, t, r) {
  return t && _V(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qA(e) {
  var t = AV(e, "string");
  return Ya(t) === "symbol" ? t : String(t);
}
function AV(e, t) {
  if (Ya(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ya(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function SV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kp(e, t);
}
function PV(e) {
  var t = EV();
  return function() {
    var n = ll(e), i;
    if (t) {
      var a = ll(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return jp(this, i);
  };
}
function jp(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Rp(e);
}
function Rp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function EV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
var Qr = /* @__PURE__ */ function(e) {
  SV(r, e);
  var t = PV(r);
  function r(n, i) {
    var a;
    wV(this, r), a = t.call(this, n, i);
    var u = a.props, s = u.isActive, l = u.attributeName, f = u.from, d = u.to, h = u.steps, v = u.children, g = u.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Rp(a)), a.changeStyle = a.changeStyle.bind(Rp(a)), !s || g <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), jp(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, jp(a);
      a.state = {
        style: l ? cu({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return OV(r, [{
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
            style: l ? cu({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!(Iq(i.to, d) && i.canBegin && i.isActive)) {
          var b = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = b || f ? h : i.to;
          if (this.state && v) {
            var w = {
              style: l ? cu({}, l, y) : y
            };
            (l && v[l] !== y || !l && v !== y) && this.setState(w);
          }
          this.runAnimation(Gr(Gr({}, this.props), {}, {
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
      var a = this, u = i.from, s = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = hV(u, s, rV(f), l, this.changeStyle), b = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, b, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, u = i.steps, s = i.begin, l = i.onAnimationStart, f = u[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, w, A) {
        if (A === 0)
          return y;
        var O = w.duration, S = w.easing, _ = S === void 0 ? "ease" : S, x = w.style, E = w.properties, $ = w.onAnimationEnd, M = A > 0 ? u[A - 1] : w, F = E || Object.keys(x);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(bh(y), [a.runJSAnimation.bind(a, {
            from: M.style,
            to: x,
            duration: O,
            easing: _
          }), O]);
        var D = _w(F, O, _), B = Gr(Gr(Gr({}, M.style), x), {}, {
          transition: D
        });
        return [].concat(bh(y), [B, O, $]).filter(Uq);
      };
      return this.manager.start([l].concat(bh(u.reduce(g, [d, Math.max(v, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = Bq());
      var a = i.begin, u = i.duration, s = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, b = this.manager;
      if (this.unSubscribe = b.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = s ? cu({}, s, l) : l, w = _w(Object.keys(y), u, f);
      b.start([d, a, Gr(Gr({}, y), {}, {
        transition: w
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
      var l = vV(i, pV), f = Yi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!s || f === 0 || u <= 0)
        return a;
      var h = function(g) {
        var b = g.props, y = b.style, w = y === void 0 ? {} : y, A = b.className, O = /* @__PURE__ */ At(g, Gr(Gr({}, l), {}, {
          style: Gr(Gr({}, w), d),
          className: A
        }));
        return O;
      };
      return f === 1 ? h(Yi.only(a)) : /* @__PURE__ */ k.createElement("div", null, Yi.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Lr);
Qr.displayName = "Animate";
Qr.defaultProps = {
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
Qr.propTypes = {
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
function Hu(e) {
  "@babel/helpers - typeof";
  return Hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hu(e);
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
function TV(e, t) {
  return IV(e) || MV(e, t) || CV(e, t) || $V();
}
function $V() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CV(e, t) {
  if (e) {
    if (typeof e == "string") return Tw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tw(e, t);
  }
}
function Tw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MV(e, t) {
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
function IV(e) {
  if (Array.isArray(e)) return e;
}
function $w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $w(Object(r), !0).forEach(function(n) {
      kV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kV(e, t, r) {
  return t = jV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jV(e) {
  var t = RV(e, "string");
  return Hu(t) == "symbol" ? t : String(t);
}
function RV(e, t) {
  if (Hu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mw = function(t, r, n, i, a) {
  var u = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (u > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > u ? u : a[v];
    d = "M".concat(t, ",").concat(r + s * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + s * h[1])), d += "L ".concat(t + n, ",").concat(r + i - s * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - s * h[3])), d += "Z";
  } else if (u > 0 && a === +a && a > 0) {
    var b = Math.min(u, a);
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
}, NV = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, u = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + s), d = Math.max(a, a + s), h = Math.min(u, u + l), v = Math.max(u, u + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, DV = {
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
}, vg = function(t) {
  var r = Cw(Cw({}, DV), t), n = Jr(), i = jr(-1), a = TV(i, 2), u = a[0], s = a[1];
  Rr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && s(_);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, g = r.className, b = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var S = Me("recharts-rectangle", g);
  return O ? /* @__PURE__ */ k.createElement(Qr, {
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
    animationEasing: b,
    isActive: O
  }, function(_) {
    var x = _.width, E = _.height, $ = _.x, M = _.y;
    return /* @__PURE__ */ k.createElement(Qr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      isActive: A,
      easing: b
    }, /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
      className: S,
      d: Mw($, M, x, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
    className: S,
    d: Mw(l, f, d, h, v)
  }));
}, LV = ["points", "className", "baseLinePoints", "connectNulls"];
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
function BV(e, t) {
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
function Iw(e) {
  return HV(e) || UV(e) || zV(e) || WV();
}
function WV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zV(e, t) {
  if (e) {
    if (typeof e == "string") return Np(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Np(e, t);
  }
}
function UV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function HV(e) {
  if (Array.isArray(e)) return Np(e);
}
function Np(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var kw = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, GV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    kw(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), kw(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, gu = function(t, r) {
  var n = GV(t);
  r && (n = [n.reduce(function(a, u) {
    return [].concat(Iw(a), Iw(u));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(u, s, l) {
      return "".concat(u).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, KV = function(t, r, n) {
  var i = gu(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(gu(r.reverse(), n).slice(1));
}, qV = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, u = BV(t, LV);
  if (!r || !r.length)
    return null;
  var s = Me("recharts-polygon", n);
  if (i && i.length) {
    var l = u.stroke && u.stroke !== "none", f = KV(r, i, a);
    return /* @__PURE__ */ k.createElement("g", {
      className: s
    }, /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: f.slice(-1) === "Z" ? u.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: "none",
      d: gu(r, a)
    })) : null, l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: "none",
      d: gu(i, a)
    })) : null);
  }
  var d = gu(r, a);
  return /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
    fill: d.slice(-1) === "Z" ? u.fill : "none",
    className: s,
    d
  }));
};
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
var hs = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, u = Me("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ k.createElement("circle", Dp({}, me(t, !1), Mc(t), {
    className: u,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Gu(e) {
  "@babel/helpers - typeof";
  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gu(e);
}
var VV = ["x", "y", "top", "left", "width", "height", "className"];
function Lp() {
  return Lp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lp.apply(this, arguments);
}
function jw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function YV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jw(Object(r), !0).forEach(function(n) {
      XV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach(function(n) {
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
  return Gu(t) == "symbol" ? t : String(t);
}
function JV(e, t) {
  if (Gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QV(e, t) {
  if (e == null) return {};
  var r = eY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var tY = function(t, r, n, i, a, u) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(u, ",").concat(r, "h").concat(n);
}, rY = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.top, s = u === void 0 ? 0 : u, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, b = t.className, y = QV(t, VV), w = YV({
    x: n,
    y: a,
    top: s,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(s) || !oe(f) ? null : /* @__PURE__ */ k.createElement("path", Lp({}, me(w, !0), {
    className: Me("recharts-cross", b),
    d: tY(n, a, h, g, s, f)
  }));
}, nY = Jl, iY = sA, aY = gn;
function oY(e, t) {
  return e && e.length ? nY(e, aY(t), iY) : void 0;
}
var uY = oY;
const sY = /* @__PURE__ */ Ze(uY);
var cY = Jl, lY = gn, fY = cA;
function dY(e, t) {
  return e && e.length ? cY(e, lY(t), fY) : void 0;
}
var hY = dY;
const pY = /* @__PURE__ */ Ze(hY);
var vY = ["cx", "cy", "angle", "ticks", "axisLine"], gY = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
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
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rw(Object(r), !0).forEach(function(n) {
      rf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nw(e, t) {
  if (e == null) return {};
  var r = yY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function mY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, YA(n.key), n);
  }
}
function bY(e, t, r) {
  return t && Dw(e.prototype, t), r && Dw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xY(e, t, r) {
  return t = dl(t), wY(e, VA() ? Reflect.construct(t, r || [], dl(e).constructor) : t.apply(e, r));
}
function wY(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _Y(e);
}
function _Y(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (VA = function() {
    return !!e;
  })();
}
function dl(e) {
  return dl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dl(e);
}
function OY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bp(e, t);
}
function rf(e, t, r) {
  return t = YA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YA(e) {
  var t = AY(e, "string");
  return Xa(t) == "symbol" ? t : String(t);
}
function AY(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nf = /* @__PURE__ */ function(e) {
  OY(t, e);
  function t() {
    return mY(this, t), xY(this, t, arguments);
  }
  return bY(t, [{
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
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, s = n.ticks, l = sY(s, function(d) {
        return d.coordinate || 0;
      }), f = pY(s, function(d) {
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
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, s = n.ticks, l = n.axisLine, f = Nw(n, vY), d = s.reduce(function(b, y) {
        return [Math.min(b[0], y.coordinate), Math.max(b[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], u), v = it(i, a, d[1], u), g = Di(Di(Di({}, me(f, !1)), {}, {
        fill: "none"
      }, me(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ k.createElement("line", yu({
        className: "recharts-polar-radius-axis-line"
      }, g));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, s = i.angle, l = i.tickFormatter, f = i.stroke, d = Nw(i, gY), h = this.getTickTextAnchor(), v = me(d, !1), g = me(u, !1), b = a.map(function(y, w) {
        var A = n.getTickValueCoord(y), O = Di(Di(Di(Di({
          textAnchor: h,
          transform: "rotate(".concat(90 - s, ", ").concat(A.x, ", ").concat(A.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, g), {}, {
          index: w
        }, A), {}, {
          payload: y
        });
        return /* @__PURE__ */ k.createElement(Le, yu({
          className: Me("recharts-polar-radius-axis-tick", jA(u)),
          key: "tick-".concat(y.coordinate)
        }, Qi(n.props, y, w)), t.renderTickItem(u, O, l ? l(y.value, w) : y.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, b);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, u = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), u && this.renderTicks(), Pt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(vi, yu({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Lr);
rf(nf, "displayName", "PolarRadiusAxis");
rf(nf, "axisType", "radiusAxis");
rf(nf, "defaultProps", {
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
function Li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lw(Object(r), !0).forEach(function(n) {
      af(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ZA(n.key), n);
  }
}
function PY(e, t, r) {
  return t && Bw(e.prototype, t), r && Bw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function EY(e, t, r) {
  return t = hl(t), TY(e, XA() ? Reflect.construct(t, r || [], hl(e).constructor) : t.apply(e, r));
}
function TY(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $Y(e);
}
function $Y(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XA = function() {
    return !!e;
  })();
}
function hl(e) {
  return hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hl(e);
}
function CY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fp(e, t);
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fp(e, t);
}
function af(e, t, r) {
  return t = ZA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZA(e) {
  var t = MY(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function MY(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IY = Math.PI / 180, Fw = 1e-5, of = /* @__PURE__ */ function(e) {
  CY(t, e);
  function t() {
    return SY(this, t), EY(this, t, arguments);
  }
  return PY(t, [{
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
      var i = this.props.orientation, a = Math.cos(-n.coordinate * IY), u;
      return a > Fw ? u = i === "outer" ? "start" : "end" : a < -Fw ? u = i === "outer" ? "end" : "start" : u = "middle", u;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, u = n.radius, s = n.axisLine, l = n.axisLineType, f = Li(Li({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(s, !1));
      if (l === "circle")
        return /* @__PURE__ */ k.createElement(hs, zi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: u
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, u, v.coordinate);
      });
      return /* @__PURE__ */ k.createElement(qV, zi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, s = i.tickLine, l = i.tickFormatter, f = i.stroke, d = me(this.props, !1), h = me(u, !1), v = Li(Li({}, d), {}, {
        fill: "none"
      }, me(s, !1)), g = a.map(function(b, y) {
        var w = n.getTickLineCoord(b), A = n.getTickTextAnchor(b), O = Li(Li(Li({
          textAnchor: A
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: y,
          payload: b,
          x: w.x2,
          y: w.y2
        });
        return /* @__PURE__ */ k.createElement(Le, zi({
          className: Me("recharts-polar-angle-axis-tick", jA(u)),
          key: "tick-".concat(b.coordinate)
        }, Qi(n.props, b, y)), s && /* @__PURE__ */ k.createElement("line", zi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, w)), u && t.renderTickItem(u, O, l ? l(b.value, y) : b.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-angle-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, u = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-angle-axis", this.props.className)
      }, u && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(vi, zi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Lr);
af(of, "displayName", "PolarAngleAxis");
af(of, "axisType", "angleAxis");
af(of, "defaultProps", {
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
var kY = nO, jY = kY(Object.getPrototypeOf, Object), RY = jY, NY = zn, DY = RY, LY = Un, BY = "[object Object]", FY = Function.prototype, WY = Object.prototype, JA = FY.toString, zY = WY.hasOwnProperty, UY = JA.call(Object);
function HY(e) {
  if (!LY(e) || NY(e) != BY)
    return !1;
  var t = DY(e);
  if (t === null)
    return !0;
  var r = zY.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && JA.call(r) == UY;
}
var GY = HY;
const KY = /* @__PURE__ */ Ze(GY);
var qY = zn, VY = Un, YY = "[object Boolean]";
function XY(e) {
  return e === !0 || e === !1 || VY(e) && qY(e) == YY;
}
var ZY = XY;
const JY = /* @__PURE__ */ Ze(ZY);
function Ku(e) {
  "@babel/helpers - typeof";
  return Ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ku(e);
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
function QY(e, t) {
  return nX(e) || rX(e, t) || tX(e, t) || eX();
}
function eX() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tX(e, t) {
  if (e) {
    if (typeof e == "string") return Ww(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ww(e, t);
  }
}
function Ww(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rX(e, t) {
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
function nX(e) {
  if (Array.isArray(e)) return e;
}
function zw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zw(Object(r), !0).forEach(function(n) {
      iX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iX(e, t, r) {
  return t = aX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aX(e) {
  var t = oX(e, "string");
  return Ku(t) == "symbol" ? t : String(t);
}
function oX(e, t) {
  if (Ku(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ku(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hw = function(t, r, n, i, a) {
  var u = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - u / 2, ",").concat(r + a), s += "L ".concat(t + n - u / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, uX = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, sX = function(t) {
  var r = Uw(Uw({}, uX), t), n = Jr(), i = jr(-1), a = QY(i, 2), u = a[0], s = a[1];
  Rr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && s(S);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, g = r.className, b = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Me("recharts-trapezoid", g);
  return A ? /* @__PURE__ */ k.createElement(Qr, {
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
    animationEasing: b,
    isActive: A
  }, function(S) {
    var _ = S.upperWidth, x = S.lowerWidth, E = S.height, $ = S.x, M = S.y;
    return /* @__PURE__ */ k.createElement(Qr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      easing: b
    }, /* @__PURE__ */ k.createElement("path", pl({}, me(r, !0), {
      className: O,
      d: Hw($, M, _, x, E),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", pl({}, me(r, !0), {
    className: O,
    d: Hw(l, f, d, h, v)
  })));
}, cX = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function qu(e) {
  "@babel/helpers - typeof";
  return qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qu(e);
}
function lX(e, t) {
  if (e == null) return {};
  var r = fX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fX(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
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
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gw(Object(r), !0).forEach(function(n) {
      dX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dX(e, t, r) {
  return t = hX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hX(e) {
  var t = pX(e, "string");
  return qu(t) == "symbol" ? t : String(t);
}
function pX(e, t) {
  if (qu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vX(e, t) {
  return vl(vl({}, t), e);
}
function gX(e, t) {
  return e === "symbols";
}
function Kw(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(vg, r);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(sX, r);
    case "sector":
      return /* @__PURE__ */ k.createElement(DA, r);
    case "symbols":
      if (gX(t))
        return /* @__PURE__ */ k.createElement(Iv, r);
      break;
    default:
      return null;
  }
}
function yX(e) {
  return /* @__PURE__ */ Yr(e) ? e.props : e;
}
function QA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? vX : n, a = e.activeClassName, u = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = lX(e, cX), f;
  if (/* @__PURE__ */ Yr(t))
    f = /* @__PURE__ */ At(t, vl(vl({}, l), yX(t)));
  else if (Pe(t))
    f = t(l);
  else if (KY(t) && !JY(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ k.createElement(Kw, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ k.createElement(Kw, {
      shapeType: r,
      elementProps: h
    });
  }
  return s ? /* @__PURE__ */ k.createElement(Le, {
    className: u
  }, f) : f;
}
function uf(e, t) {
  return t != null && "trapezoids" in e.props;
}
function sf(e, t) {
  return t != null && "sectors" in e.props;
}
function Vu(e, t) {
  return t != null && "points" in e.props;
}
function mX(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function bX(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function xX(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function wX(e, t) {
  var r;
  return uf(e, t) ? r = mX : sf(e, t) ? r = bX : Vu(e, t) && (r = xX), r;
}
function _X(e, t) {
  var r;
  return uf(e, t) ? r = "trapezoids" : sf(e, t) ? r = "sectors" : Vu(e, t) && (r = "points"), r;
}
function OX(e, t) {
  if (uf(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (sf(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Vu(e, t) ? t.payload : {};
}
function AX(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = _X(r, t), a = OX(r, t), u = n.filter(function(l, f) {
    var d = ea(a, l), h = r.props[i].filter(function(b) {
      var y = wX(r, t);
      return y(b, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), s = n.indexOf(u[u.length - 1]);
  return s;
}
var Tc;
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
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
function qw(e, t) {
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
    t % 2 ? qw(Object(r), !0).forEach(function(n) {
      Mr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tS(n.key), n);
  }
}
function PX(e, t, r) {
  return t && Vw(e.prototype, t), r && Vw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function EX(e, t, r) {
  return t = gl(t), TX(e, eS() ? Reflect.construct(t, r || [], gl(e).constructor) : t.apply(e, r));
}
function TX(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $a(e);
}
function eS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eS = function() {
    return !!e;
  })();
}
function gl(e) {
  return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gl(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $X(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wp(e, t);
}
function Wp(e, t) {
  return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wp(e, t);
}
function Mr(e, t, r) {
  return t = tS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tS(e) {
  var t = CX(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function CX(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gn = /* @__PURE__ */ function(e) {
  $X(t, e);
  function t(r) {
    var n;
    return SX(this, t), n = EX(this, t, [r]), Mr($a(n), "pieRef", null), Mr($a(n), "sectorRefs", []), Mr($a(n), "id", oa("recharts-pie-")), Mr($a(n), "handleAnimationEnd", function() {
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
  return PX(t, [{
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
      var a = this.props, u = a.label, s = a.labelLine, l = a.dataKey, f = a.valueKey, d = me(this.props, !1), h = me(u, !1), v = me(s, !1), g = u && u.offsetRadius || 20, b = n.map(function(y, w) {
        var A = (y.startAngle + y.endAngle) / 2, O = it(y.cx, y.cy, y.outerRadius + g, A), S = dt(dt(dt(dt({}, d), y), {}, {
          stroke: "none"
        }, h), {}, {
          index: w,
          textAnchor: t.getTextAnchor(O.x, y.cx)
        }, O), _ = dt(dt(dt(dt({}, d), y), {}, {
          fill: "none",
          stroke: y.fill
        }, v), {}, {
          index: w,
          points: [it(y.cx, y.cy, y.outerRadius, A), O],
          key: "line"
        }), x = l;
        return Te(l) && Te(f) ? x = "value" : Te(l) && (x = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Le, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(w)
        }, s && t.renderLabelLineItem(s, _), t.renderLabelItem(u, S, bt(y, x)));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-pie-labels"
      }, b);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? u : v, b = dt(dt({}, f), {}, {
          stroke: s ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ k.createElement(Le, Ia({
          ref: function(w) {
            w && !i.sectorRefs.includes(w) && i.sectorRefs.push(w);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Qi(i.props, f, d), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(d)
        }), /* @__PURE__ */ k.createElement(QA, Ia({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, b)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, u = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(Qr, {
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
      }, function(b) {
        var y = b.t, w = [], A = a && a[0], O = A.startAngle;
        return a.forEach(function(S, _) {
          var x = v && v[_], E = _ > 0 ? gr(S, "paddingAngle", 0) : 0;
          if (x) {
            var $ = St(x.endAngle - x.startAngle, S.endAngle - S.startAngle), M = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + $(y) + E
            });
            w.push(M), O = M.endAngle;
          } else {
            var F = S.endAngle, D = S.startAngle, B = St(0, F - D), N = B(y), U = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + N + E
            });
            w.push(U), O = U.endAngle;
          }
        }), /* @__PURE__ */ k.createElement(Le, null, n.renderSectorsStatically(w));
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
      return a && i && i.length && (!u || !ea(u, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, u = i.sectors, s = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, b = this.state.isAnimationFinished;
      if (a || !u || !u.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Me("recharts-pie", s);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(A) {
          n.pieRef = A;
        }
      }, this.renderSectors(), l && this.renderLabels(u), Pt.renderCallByParent(this.props, null, !1), (!g || b) && kr.renderCallByParent(this.props, u, !1));
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
      return /* @__PURE__ */ k.createElement(Ji, Ia({}, i, {
        type: "linear",
        className: a
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      var u = a;
      if (Pe(n) && (u = n(i), /* @__PURE__ */ k.isValidElement(u)))
        return u;
      var s = Me("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ k.createElement(vi, Ia({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), u);
    }
  }]), t;
}(Lr);
Tc = Gn;
Mr(Gn, "displayName", "Pie");
Mr(Gn, "defaultProps", {
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
  isAnimationActive: !Zr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Mr(Gn, "parseDeltaAngle", function(e, t) {
  var r = Gt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Mr(Gn, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = me(e.props, !1), a = yr(n, zv);
  return r && r.length ? r.map(function(u, s) {
    return dt(dt(dt({
      payload: u
    }, i), u), a && a[s] && a[s].props);
  }) : a && a.length ? a.map(function(u) {
    return dt(dt({}, i), u.props);
  }) : [];
});
Mr(Gn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, u = kA(i, a), s = n + Kt(e.props.cx, i, i / 2), l = r + Kt(e.props.cy, a, a / 2), f = Kt(e.props.innerRadius, u, 0), d = Kt(e.props.outerRadius, u, u * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Mr(Gn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Tc.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, u = i.startAngle, s = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), b = Tc.parseCoordinateOfPie(t, r), y = Tc.parseDeltaAngle(u, s), w = Math.abs(y), A = f;
  Te(f) && Te(h) ? (Xr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = "value") : Te(f) && (Xr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = h);
  var O = n.filter(function(M) {
    return bt(M, A, 0) !== 0;
  }).length, S = (w >= 360 ? O : O - 1) * l, _ = w - O * g - S, x = n.reduce(function(M, F) {
    var D = bt(F, A, 0);
    return M + (oe(D) ? D : 0);
  }, 0), E;
  if (x > 0) {
    var $;
    E = n.map(function(M, F) {
      var D = bt(M, A, 0), B = bt(M, d, F), N = (oe(D) ? D : 0) / x, U;
      F ? U = $.endAngle + Gt(y) * l * (D !== 0 ? 1 : 0) : U = u;
      var z = U + Gt(y) * ((D !== 0 ? g : 0) + N * _), J = (U + z) / 2, H = (b.innerRadius + b.outerRadius) / 2, Z = [{
        name: B,
        value: D,
        payload: M,
        dataKey: A,
        type: v
      }], K = it(b.cx, b.cy, H, J);
      return $ = dt(dt(dt({
        percent: N,
        cornerRadius: a,
        name: B,
        tooltipPayload: Z,
        midAngle: J,
        middleRadius: H,
        tooltipPosition: K
      }, M), b), {}, {
        value: bt(M, A),
        startAngle: U,
        endAngle: z,
        payload: M,
        paddingAngle: Gt(y) * l
      }), $;
    });
  }
  return dt(dt({}, b), {}, {
    sectors: E,
    data: n
  });
});
var MX = Math.ceil, IX = Math.max;
function kX(e, t, r, n) {
  for (var i = -1, a = IX(MX((t - e) / (r || 1)), 0), u = Array(a); a--; )
    u[n ? a : ++i] = e, e += r;
  return u;
}
var jX = kX, RX = OO, Yw = 1 / 0, NX = 17976931348623157e292;
function DX(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = RX(e), e === Yw || e === -Yw) {
    var t = e < 0 ? -1 : 1;
    return t * NX;
  }
  return e === e ? e : 0;
}
var rS = DX, LX = jX, BX = Gl, xh = rS;
function FX(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && BX(t, r, n) && (r = n = void 0), t = xh(t), r === void 0 ? (r = t, t = 0) : r = xh(r), n = n === void 0 ? t < r ? 1 : -1 : xh(n), LX(t, r, n, e);
  };
}
var WX = FX, zX = WX, UX = zX(), HX = UX;
const yl = /* @__PURE__ */ Ze(HX);
function Yu(e) {
  "@babel/helpers - typeof";
  return Yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yu(e);
}
function Xw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xw(Object(r), !0).forEach(function(n) {
      nS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nS(e, t, r) {
  return t = GX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GX(e) {
  var t = KX(e, "string");
  return Yu(t) == "symbol" ? t : String(t);
}
function KX(e, t) {
  if (Yu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qX = ["Webkit", "Moz", "O", "ms"], VX = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = qX.reduce(function(a, u) {
    return Zw(Zw({}, a), {}, nS({}, u + n, r));
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
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ml.apply(this, arguments);
}
function Jw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jw(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aS(n.key), n);
  }
}
function XX(e, t, r) {
  return t && Qw(e.prototype, t), r && Qw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZX(e, t, r) {
  return t = bl(t), JX(e, iS() ? Reflect.construct(t, r || [], bl(e).constructor) : t.apply(e, r));
}
function JX(e, t) {
  if (t && (Qa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return un(e);
}
function iS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iS = function() {
    return !!e;
  })();
}
function bl(e) {
  return bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bl(e);
}
function un(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function QX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zp(e, t);
}
function fr(e, t, r) {
  return t = aS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aS(e) {
  var t = eZ(e, "string");
  return Qa(t) == "symbol" ? t : String(t);
}
function eZ(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tZ = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, u = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = hu().domain(yl(0, l)).range([a, a + u - s]), d = f.domain().map(function(h) {
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
}, e1 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, eo = /* @__PURE__ */ function(e) {
  QX(t, e);
  function t(r) {
    var n;
    return YX(this, t), n = ZX(this, t, [r]), fr(un(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), fr(un(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), fr(un(n), "handleDragEnd", function() {
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
    }), fr(un(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), fr(un(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), fr(un(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), fr(un(n), "handleSlideDragStart", function(i) {
      var a = e1(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(un(n), "startX"),
      endX: n.handleTravellerDragStart.bind(un(n), "endX")
    }, n.state = {}, n;
  }
  return XX(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, u = this.state.scaleValues, s = this.props, l = s.gap, f = s.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(u, h), b = t.getIndexInRange(u, v);
      return {
        startIndex: g - g % l,
        endIndex: b === d ? d : b - b % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, u = i.tickFormatter, s = i.dataKey, l = bt(a[n], s, n);
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
      var i = this.state, a = i.slideMoveStartX, u = i.startX, s = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, b = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - s, f + d - h - u) : y < 0 && (y = Math.max(y, f - u, f - s));
      var w = this.getIndex({
        startX: u + y,
        endX: s + y
      });
      (w.startIndex !== v || w.endIndex !== g) && b && b(w), this.setState({
        startX: u + y,
        endX: s + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = e1(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, u = i.movingTravellerId, s = i.endX, l = i.startX, f = this.state[u], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, b = d.onChange, y = d.gap, w = d.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), A[u] = f + O;
      var S = this.getIndex(A), _ = S.startIndex, x = S.endIndex, E = function() {
        var M = w.length - 1;
        return u === "startX" && (s > l ? _ % y === 0 : x % y === 0) || s < l && x === M || u === "endX" && (s > l ? x % y === 0 : _ % y === 0) || s > l && x === M;
      };
      this.setState(fr(fr({}, u, f + O), "brushMoveStartX", n.pageX), function() {
        b && E() && b(S);
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
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
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
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.data, f = n.children, d = n.padding, h = Yi.only(f);
      return h ? /* @__PURE__ */ k.cloneElement(h, {
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
      var a, u, s = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, b = l.data, y = l.startIndex, w = l.endIndex, A = Math.max(n, this.props.x), O = wh(wh({}, me(this.props, !1)), {}, {
        x: A,
        y: f,
        width: d,
        height: h
      }), S = g || "Min value: ".concat((a = b[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((u = b[w]) === null || u === void 0 ? void 0 : u.name);
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
      var a = this.props, u = a.y, s = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
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
        y: u,
        width: h,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, u = n.y, s = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, b = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(vi, ml({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: u + s / 2
      }, b), this.getTextOfTick(i)), /* @__PURE__ */ k.createElement(vi, ml({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: u + s / 2
      }, b), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, u = n.children, s = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, b = v.endX, y = v.isTextActive, w = v.isSlideMoving, A = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(s) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var S = Me("recharts-brush", a), _ = k.Children.count(u) === 1, x = VX("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Le, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: x
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(g, b), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(b, "endX"), (y || w || A || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, u = n.width, s = n.height, l = n.stroke, f = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: i,
        y: a,
        width: u,
        height: s,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + u - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ k.createElement("line", {
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
      return /* @__PURE__ */ k.isValidElement(n) ? a = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, u = n.width, s = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return wh({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: u
        }, a && a.length ? tZ({
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
}(Lr);
fr(eo, "displayName", "Brush");
fr(eo, "defaultProps", {
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
var rZ = Bv;
function nZ(e, t) {
  var r;
  return rZ(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var iZ = nZ, aZ = Y_, oZ = gn, uZ = iZ, sZ = rr, cZ = Gl;
function lZ(e, t, r) {
  var n = sZ(e) ? aZ : uZ;
  return r && cZ(e, t, r) && (t = void 0), n(e, oZ(t));
}
var fZ = lZ;
const dZ = /* @__PURE__ */ Ze(fZ);
var dn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, t1 = mO;
function hZ(e, t, r) {
  t == "__proto__" && t1 ? t1(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var pZ = hZ, vZ = pZ, gZ = gO, yZ = gn;
function mZ(e, t) {
  var r = {};
  return t = yZ(t), gZ(e, function(n, i, a) {
    vZ(r, i, t(n, i, a));
  }), r;
}
var bZ = mZ;
const xZ = /* @__PURE__ */ Ze(bZ);
function wZ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var _Z = wZ, OZ = Bv;
function AZ(e, t) {
  var r = !0;
  return OZ(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var SZ = AZ, PZ = _Z, EZ = SZ, TZ = gn, $Z = rr, CZ = Gl;
function MZ(e, t, r) {
  var n = $Z(e) ? PZ : EZ;
  return r && CZ(e, t, r) && (t = void 0), n(e, TZ(t));
}
var IZ = MZ;
const oS = /* @__PURE__ */ Ze(IZ);
var kZ = ["x", "y"];
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function Up() {
  return Up = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Up.apply(this, arguments);
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
function su(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? r1(Object(r), !0).forEach(function(n) {
      jZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : r1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jZ(e, t, r) {
  return t = RZ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RZ(e) {
  var t = NZ(e, "string");
  return to(t) == "symbol" ? t : String(t);
}
function NZ(e, t) {
  if (to(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DZ(e, t) {
  if (e == null) return {};
  var r = LZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function BZ(e, t) {
  var r = e.x, n = e.y, i = DZ(e, kZ), a = "".concat(r), u = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return su(su(su(su(su({}, t), i), u ? {
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
function n1(e) {
  return /* @__PURE__ */ k.createElement(QA, Up({
    shapeType: "rectangle",
    propTransformer: BZ,
    activeClassName: "recharts-active-bar"
  }, e));
}
var FZ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? er(!1, "minPointSize callback function received a value with type of ".concat(to(n), ". Currently only numbers are supported.")) : er()), r);
  };
}, WZ = ["value", "background"], uS;
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function zZ(e, t) {
  if (e == null) return {};
  var r = UZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function UZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function xl() {
  return xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xl.apply(this, arguments);
}
function i1(e, t) {
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
    t % 2 ? i1(Object(r), !0).forEach(function(n) {
      di(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cS(n.key), n);
  }
}
function GZ(e, t, r) {
  return t && a1(e.prototype, t), r && a1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KZ(e, t, r) {
  return t = wl(t), qZ(e, sS() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function qZ(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lu(e);
}
function sS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sS = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function lu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hp(e, t);
}
function di(e, t, r) {
  return t = cS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cS(e) {
  var t = YZ(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function YZ(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Si = /* @__PURE__ */ function(e) {
  VZ(t, e);
  function t() {
    var r;
    HZ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = KZ(this, t, [].concat(i)), di(lu(r), "state", {
      isAnimationFinished: !1
    }), di(lu(r), "id", oa("recharts-bar-")), di(lu(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), u && u();
    }), di(lu(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), u && u();
    }), r;
  }
  return GZ(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.shape, s = a.dataKey, l = a.activeIndex, f = a.activeBar, d = me(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, b = g ? f : u, y = Ct(Ct(Ct({}, d), h), {}, {
          isActive: g,
          option: b,
          index: v,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Le, xl({
          className: "recharts-bar-rectangle"
        }, Qi(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ k.createElement(n1, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, u = i.layout, s = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Qr, {
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
        var b = g.t, y = a.map(function(w, A) {
          var O = v && v[A];
          if (O) {
            var S = St(O.x, w.x), _ = St(O.y, w.y), x = St(O.width, w.width), E = St(O.height, w.height);
            return Ct(Ct({}, w), {}, {
              x: S(b),
              y: _(b),
              width: x(b),
              height: E(b)
            });
          }
          if (u === "horizontal") {
            var $ = St(0, w.height), M = $(b);
            return Ct(Ct({}, w), {}, {
              y: w.y + w.height - M,
              height: M
            });
          }
          var F = St(0, w.width), D = F(b);
          return Ct(Ct({}, w), {}, {
            width: D
          });
        });
        return /* @__PURE__ */ k.createElement(Le, null, n.renderRectanglesStatically(y));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, u = this.state.prevData;
      return a && i && i.length && (!u || !ea(u, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, u = i.dataKey, s = i.activeIndex, l = me(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = zZ(f, WZ);
        if (!h)
          return null;
        var g = Ct(Ct(Ct(Ct(Ct({}, v), {}, {
          fill: "#eee"
        }, h), l), Qi(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: u,
          index: d,
          key: "background-bar-".concat(d),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ k.createElement(n1, xl({
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
      var a = this.props, u = a.data, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, ds);
      if (!h)
        return null;
      var v = f === "vertical" ? u[0].height / 2 : u[0].width / 2, g = function(w, A) {
        var O = Array.isArray(w.value) ? w.value[1] : w.value;
        return {
          x: w.x,
          y: w.y,
          value: O,
          errorVal: bt(w, A)
        };
      }, b = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, b, h.map(function(y) {
        return /* @__PURE__ */ k.cloneElement(y, {
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
      var n = this.props, i = n.hide, a = n.data, u = n.className, s = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, b = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var w = this.state.isAnimationFinished, A = Me("recharts-bar", u), O = s && s.allowDataOverflow, S = l && l.allowDataOverflow, _ = O || S, x = Te(y) ? this.id : y;
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
      }, b ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, x), (!g || w) && kr.renderCallByParent(this.props, a));
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
}(Lr);
uS = Si;
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
  isAnimationActive: !Zr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
di(Si, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, u = e.yAxis, s = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = DG(n, r);
  if (!g)
    return null;
  var b = t.layout, y = r.props, w = y.dataKey, A = y.children, O = y.minPointSize, S = b === "horizontal" ? u : a, _ = f ? S.scale.domain() : null, x = HG({
    numericAxis: S
  }), E = yr(A, zv), $ = h.map(function(M, F) {
    var D, B, N, U, z, J;
    f ? D = LG(f[d + F], _) : (D = bt(M, w), Array.isArray(D) || (D = [x, D]));
    var H = FZ(O, uS.defaultProps.minPointSize)(D[1], F);
    if (b === "horizontal") {
      var Z, K = [u.scale(D[0]), u.scale(D[1])], ue = K[0], G = K[1];
      B = Bx({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: g.offset,
        entry: M,
        index: F
      }), N = (Z = G ?? ue) !== null && Z !== void 0 ? Z : void 0, U = g.size;
      var X = ue - G;
      if (z = Number.isNaN(X) ? 0 : X, J = {
        x: B,
        y: u.y,
        width: U,
        height: u.height
      }, Math.abs(H) > 0 && Math.abs(z) < Math.abs(H)) {
        var ae = Gt(z || H) * (Math.abs(H) - Math.abs(z));
        N -= ae, z += ae;
      }
    } else {
      var ce = [a.scale(D[0]), a.scale(D[1])], he = ce[0], ge = ce[1];
      if (B = he, N = Bx({
        axis: u,
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
    return Ct(Ct(Ct({}, M), {}, {
      x: B,
      y: N,
      width: U,
      height: z,
      value: f ? D : D[1],
      payload: M,
      background: J
    }, E && E[F] && E[F].props), {}, {
      tooltipPayload: [MA(r, M)],
      tooltipPosition: {
        x: B + U / 2,
        y: N + z / 2
      }
    });
  });
  return Ct({
    data: $,
    layout: b
  }, v);
});
function Xu(e) {
  "@babel/helpers - typeof";
  return Xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xu(e);
}
function XZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lS(n.key), n);
  }
}
function ZZ(e, t, r) {
  return t && o1(e.prototype, t), r && o1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? u1(Object(r), !0).forEach(function(n) {
      cf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cf(e, t, r) {
  return t = lS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lS(e) {
  var t = JZ(e, "string");
  return Xu(t) == "symbol" ? t : String(t);
}
function JZ(e, t) {
  if (Xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gg = function(t, r, n, i, a) {
  var u = t.width, s = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: u - n.right,
    rightMirror: u - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, v = !!dr(f, Si);
  return d.reduce(function(g, b) {
    var y = r[b], w = y.orientation, A = y.domain, O = y.padding, S = O === void 0 ? {} : O, _ = y.mirror, x = y.reversed, E = "".concat(w).concat(_ ? "Mirror" : ""), $, M, F, D, B;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var N = A[1] - A[0], U = 1 / 0, z = y.categoricalDomain.sort();
      if (z.forEach(function(he, ge) {
        ge > 0 && (U = Math.min((he || 0) - (z[ge - 1] || 0), U));
      }), Number.isFinite(U)) {
        var J = U / N, H = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && ($ = J * H / 2), y.padding === "no-gap") {
          var Z = Kt(t.barCategoryGap, J * H), K = J * H / 2;
          $ = K - Z - (K - Z) / H * Z;
        }
      }
    }
    i === "xAxis" ? M = [n.left + (S.left || 0) + ($ || 0), n.left + n.width - (S.right || 0) - ($ || 0)] : i === "yAxis" ? M = l === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + ($ || 0), n.top + n.height - (S.bottom || 0) - ($ || 0)] : M = y.range, x && (M = [M[1], M[0]]);
    var ue = EA(y, a, v), G = ue.scale, X = ue.realScaleType;
    G.domain(A).range(M), TA(G);
    var ae = $A(G, Kr(Kr({}, y), {}, {
      realScaleType: X
    }));
    i === "xAxis" ? (B = w === "top" && !_ || w === "bottom" && _, F = n.left, D = h[E] - B * y.height) : i === "yAxis" && (B = w === "left" && !_ || w === "right" && _, F = h[E] - B * y.width, D = n.top);
    var ce = Kr(Kr(Kr({}, y), ae), {}, {
      realScaleType: X,
      x: F,
      y: D,
      scale: G,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = il(ce, ae), !y.hide && i === "xAxis" ? h[E] += (B ? -1 : 1) * ce.height : y.hide || (h[E] += (B ? -1 : 1) * ce.width), Kr(Kr({}, g), {}, cf({}, b, ce));
  }, {});
}, fS = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, u),
    width: Math.abs(a - n),
    height: Math.abs(u - i)
  };
}, QZ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return fS({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, dS = /* @__PURE__ */ function() {
  function e(t) {
    XZ(this, e), this.scale = t;
  }
  return ZZ(e, [{
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
cf(dS, "EPS", 1e-4);
var yg = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Kr(Kr({}, n), {}, cf({}, i, dS.create(t[i])));
  }, {});
  return Kr(Kr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = a.bandAware, s = a.position;
      return xZ(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: u,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return oS(i, function(a, u) {
        return r[u].isInRange(a);
      });
    }
  });
};
function eJ(e) {
  return (e % 180 + 180) % 180;
}
var tJ = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = eJ(i), u = a * Math.PI / 180, s = Math.atan(n / r), l = u > s && u < Math.PI - s ? n / Math.sin(u) : r / Math.cos(u);
  return Math.abs(l);
}, rJ = gn, nJ = us, iJ = Ul;
function aJ(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!nJ(t)) {
      var a = rJ(r);
      t = iJ(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var u = e(t, r, n);
    return u > -1 ? i[a ? t[u] : u] : void 0;
  };
}
var oJ = aJ, uJ = rS;
function sJ(e) {
  var t = uJ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var cJ = sJ, lJ = cO, fJ = gn, dJ = cJ, hJ = Math.max;
function pJ(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dJ(r);
  return i < 0 && (i = hJ(n + i, 0)), lJ(e, fJ(t), i);
}
var vJ = pJ, gJ = oJ, yJ = vJ, mJ = gJ(yJ), bJ = mJ;
const xJ = /* @__PURE__ */ Ze(bJ);
var wJ = j3(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function _l(e) {
  "@babel/helpers - typeof";
  return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _l(e);
}
var mg = /* @__PURE__ */ Dr(void 0), bg = /* @__PURE__ */ Dr(void 0), hS = /* @__PURE__ */ Dr(void 0), pS = /* @__PURE__ */ Dr({}), vS = /* @__PURE__ */ Dr(void 0), gS = /* @__PURE__ */ Dr(0), yS = /* @__PURE__ */ Dr(0), s1 = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, u = t.clipPathId, s = t.children, l = t.width, f = t.height, d = wJ(a);
  return /* @__PURE__ */ k.createElement(mg.Provider, {
    value: n
  }, /* @__PURE__ */ k.createElement(bg.Provider, {
    value: i
  }, /* @__PURE__ */ k.createElement(pS.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(hS.Provider, {
    value: d
  }, /* @__PURE__ */ k.createElement(vS.Provider, {
    value: u
  }, /* @__PURE__ */ k.createElement(gS.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement(yS.Provider, {
    value: l
  }, s)))))));
}, _J = function() {
  return tr(vS);
};
function mS(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var bS = function(t) {
  var r = tr(mg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(_l(t), "]. ").concat(mS(r))) : er()), n;
}, OJ = function() {
  var t = tr(mg);
  return li(t);
}, AJ = function() {
  var t = tr(bg), r = xJ(t, function(n) {
    return oS(n.domain, Number.isFinite);
  });
  return r || li(t);
}, xS = function(t) {
  var r = tr(bg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(_l(t), "]. ").concat(mS(r))) : er()), n;
}, SJ = function() {
  var t = tr(hS);
  return t;
}, PJ = function() {
  return tr(pS);
}, xg = function() {
  return tr(yS);
}, wg = function() {
  return tr(gS);
};
function Zu(e) {
  "@babel/helpers - typeof";
  return Zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zu(e);
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
function l1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? c1(Object(r), !0).forEach(function(n) {
      EJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EJ(e, t, r) {
  return t = TJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TJ(e) {
  var t = $J(e, "string");
  return Zu(t) == "symbol" ? t : String(t);
}
function $J(e, t) {
  if (Zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CJ(e, t) {
  return jJ(e) || kJ(e, t) || IJ(e, t) || MJ();
}
function MJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IJ(e, t) {
  if (e) {
    if (typeof e == "string") return f1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f1(e, t);
  }
}
function f1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kJ(e, t) {
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
function jJ(e) {
  if (Array.isArray(e)) return e;
}
function Gp() {
  return Gp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gp.apply(this, arguments);
}
var RJ = function(t, r) {
  var n;
  return /* @__PURE__ */ k.isValidElement(t) ? n = /* @__PURE__ */ k.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ k.createElement("line", Gp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, NJ = function(t, r, n, i, a, u, s, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var b = f.y, y = t.y.apply(b, {
      position: u
    });
    if (dn(f, "discard") && !t.y.isInRange(y))
      return null;
    var w = [{
      x: d + v,
      y
    }, {
      x: d,
      y
    }];
    return l === "left" ? w.reverse() : w;
  }
  if (r) {
    var A = f.x, O = t.x.apply(A, {
      position: u
    });
    if (dn(f, "discard") && !t.x.isInRange(O))
      return null;
    var S = [{
      x: O,
      y: h + g
    }, {
      x: O,
      y: h
    }];
    return s === "top" ? S.reverse() : S;
  }
  if (i) {
    var _ = f.segment, x = _.map(function(E) {
      return t.apply(E, {
        position: u
      });
    });
    return dn(f, "discard") && dZ(x, function(E) {
      return !t.isInRange(E);
    }) ? null : x;
  }
  return null;
};
function _g(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, u = e.shape, s = e.className, l = e.alwaysShow, f = _J(), d = bS(i), h = xS(a), v = SJ();
  if (!f || !v)
    return null;
  Xr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = yg({
    x: d.scale,
    y: h.scale
  }), b = Et(t), y = Et(r), w = n && n.length === 2, A = NJ(g, b, y, w, v, e.position, d.orientation, h.orientation, e);
  if (!A)
    return null;
  var O = CJ(A, 2), S = O[0], _ = S.x, x = S.y, E = O[1], $ = E.x, M = E.y, F = dn(e, "hidden") ? "url(#".concat(f, ")") : void 0, D = l1(l1({
    clipPath: F
  }, me(e, !0)), {}, {
    x1: _,
    y1: x,
    x2: $,
    y2: M
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-line", s)
  }, RJ(u, D), Pt.renderCallByParent(e, QZ({
    x1: _,
    y1: x,
    x2: $,
    y2: M
  })));
}
_g.displayName = "ReferenceLine";
_g.defaultProps = {
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
function Ju(e) {
  "@babel/helpers - typeof";
  return Ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ju(e);
}
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
function h1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? d1(Object(r), !0).forEach(function(n) {
      DJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DJ(e, t, r) {
  return t = LJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LJ(e) {
  var t = BJ(e, "string");
  return Ju(t) == "symbol" ? t : String(t);
}
function BJ(e, t) {
  if (Ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FJ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, u = yg({
    x: i.scale,
    y: a.scale
  }), s = u.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return dn(t, "discard") && !u.isInRange(s) ? null : s;
};
function ps(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, u = Et(t), s = Et(r);
  if (Xr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !s)
    return null;
  var l = FJ(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = dn(e, "hidden") ? "url(#".concat(a, ")") : void 0, b = h1(h1({
    clipPath: g
  }, me(e, !0)), {}, {
    cx: f,
    cy: d
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-dot", v)
  }, ps.renderDot(h, b), Pt.renderCallByParent(e, {
    x: f - n,
    y: d - n,
    width: 2 * n,
    height: 2 * n
  }));
}
ps.displayName = "ReferenceDot";
ps.defaultProps = {
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
ps.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(hs, Kp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Qu(e) {
  "@babel/helpers - typeof";
  return Qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qu(e);
}
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
function v1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p1(Object(r), !0).forEach(function(n) {
      WJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WJ(e, t, r) {
  return t = zJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zJ(e) {
  var t = UJ(e, "string");
  return Qu(t) == "symbol" ? t : String(t);
}
function UJ(e, t) {
  if (Qu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HJ = function(t, r, n, i, a) {
  var u = a.x1, s = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = yg({
    x: d.scale,
    y: h.scale
  }), g = {
    x: t ? v.x.apply(u, {
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
  return dn(a, "discard") && (!v.isInRange(g) || !v.isInRange(b)) ? null : fS(g, b);
};
function vs(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, u = e.alwaysShow, s = e.clipPathId;
  Xr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Et(t), f = Et(r), d = Et(n), h = Et(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = HJ(l, f, d, h, e);
  if (!g && !v)
    return null;
  var b = dn(e, "hidden") ? "url(#".concat(s, ")") : void 0;
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-area", a)
  }, vs.renderRect(v, v1(v1({
    clipPath: b
  }, me(e, !0)), g)), Pt.renderCallByParent(e, g));
}
vs.displayName = "ReferenceArea";
vs.defaultProps = {
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
vs.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(vg, qp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function wS(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function GJ(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return tJ(n, r);
}
function KJ(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, u = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + u : a + s
  } : {
    start: n ? i + u : a + s,
    end: n ? i : a
  };
}
function Ol(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function qJ(e, t) {
  return wS(e, t + 1);
}
function VJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = t.start, s = t.end, l = 0, f = 1, d = u, h = function() {
    var b = n == null ? void 0 : n[l];
    if (b === void 0)
      return {
        v: wS(n, f)
      };
    var y = l, w, A = function() {
      return w === void 0 && (w = r(b, y)), w;
    }, O = b.coordinate, S = l === 0 || Ol(e, O, A, d, s);
    S || (l = 0, d = u, f += 1), S && (d = O + e * (A() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function es(e) {
  "@babel/helpers - typeof";
  return es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, es(e);
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
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g1(Object(r), !0).forEach(function(n) {
      YJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YJ(e, t, r) {
  return t = XJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XJ(e) {
  var t = ZJ(e, "string");
  return es(t) == "symbol" ? t : String(t);
}
function ZJ(e, t) {
  if (es(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (es(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = a.length, s = t.start, l = t.end, f = function(v) {
    var g = a[v], b, y = function() {
      return b === void 0 && (b = r(g, v)), b;
    };
    if (v === u - 1) {
      var w = e * (g.coordinate + e * y() / 2 - l);
      a[v] = g = Lt(Lt({}, g), {}, {
        tickCoord: w > 0 ? g.coordinate - w * e : g.coordinate
      });
    } else
      a[v] = g = Lt(Lt({}, g), {}, {
        tickCoord: g.coordinate
      });
    var A = Ol(e, g.tickCoord, y, s, l);
    A && (l = g.tickCoord - e * (y() / 2 + i), a[v] = Lt(Lt({}, g), {}, {
      isShow: !0
    }));
  }, d = u - 1; d >= 0; d--)
    f(d);
  return a;
}
function QJ(e, t, r, n, i, a) {
  var u = (n || []).slice(), s = u.length, l = t.start, f = t.end;
  if (a) {
    var d = n[s - 1], h = r(d, s - 1), v = e * (d.coordinate + e * h / 2 - f);
    u[s - 1] = d = Lt(Lt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = Ol(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), u[s - 1] = Lt(Lt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var b = a ? s - 1 : s, y = function(O) {
    var S = u[O], _, x = function() {
      return _ === void 0 && (_ = r(S, O)), _;
    };
    if (O === 0) {
      var E = e * (S.coordinate - e * x() / 2 - l);
      u[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: E < 0 ? S.coordinate - E * e : S.coordinate
      });
    } else
      u[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: S.coordinate
      });
    var $ = Ol(e, S.tickCoord, x, l, f);
    $ && (l = S.tickCoord + e * (x() / 2 + i), u[O] = Lt(Lt({}, S), {}, {
      isShow: !0
    }));
  }, w = 0; w < b; w++)
    y(w);
  return u;
}
function Og(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, u = e.minTickGap, s = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Zr.isSsr)
    return qJ(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = s === "top" || s === "bottom" ? "width" : "height", b = d && g === "width" ? du(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(S, _) {
    var x = Pe(f) ? f(S.value, _) : S.value;
    return g === "width" ? GJ(du(x, {
      fontSize: t,
      letterSpacing: r
    }), b, h) : du(x, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, w = i.length >= 2 ? Gt(i[1].coordinate - i[0].coordinate) : 1, A = KJ(a, w, g);
  return l === "equidistantPreserveStart" ? VJ(w, A, y, i, u) : (l === "preserveStart" || l === "preserveStartEnd" ? v = QJ(w, A, y, i, u, l === "preserveStartEnd") : v = JJ(w, A, y, i, u), v.filter(function(O) {
    return O.isShow;
  }));
}
var eQ = ["viewBox"], tQ = ["viewBox"], rQ = ["ticks"];
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
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
function y1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? y1(Object(r), !0).forEach(function(n) {
      Ag(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _h(e, t) {
  if (e == null) return {};
  var r = nQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function iQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, OS(n.key), n);
  }
}
function aQ(e, t, r) {
  return t && m1(e.prototype, t), r && m1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function oQ(e, t, r) {
  return t = Al(t), uQ(e, _S() ? Reflect.construct(t, r || [], Al(e).constructor) : t.apply(e, r));
}
function uQ(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sQ(e);
}
function sQ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
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
function cQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vp(e, t);
}
function Vp(e, t) {
  return Vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vp(e, t);
}
function Ag(e, t, r) {
  return t = OS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OS(e) {
  var t = lQ(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function lQ(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Eo = /* @__PURE__ */ function(e) {
  cQ(t, e);
  function t(r) {
    var n;
    return iQ(this, t), n = oQ(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return aQ(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, u = _h(n, eQ), s = this.props, l = s.viewBox, f = _h(s, tQ);
      return !Na(a, l) || !Na(u, f) || !Na(i, this.state);
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
      var i = this.props, a = i.x, u = i.y, s = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, b, y, w, A, O, S = h ? -1 : 1, _ = n.tickSize || d, x = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = b = n.coordinate, w = u + +!h * l, y = w - S * _, O = y - S * v, A = x;
          break;
        case "left":
          y = w = n.coordinate, b = a + +!h * s, g = b - S * _, A = g - S * v, O = x;
          break;
        case "right":
          y = w = n.coordinate, b = a + +h * s, g = b + S * _, A = g + S * v, O = x;
          break;
        default:
          g = b = n.coordinate, w = u + +h * l, y = w + S * _, O = y + S * v, A = x;
          break;
      }
      return {
        line: {
          x1: g,
          y1: y,
          x2: b,
          y2: w
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
      var n = this.props, i = n.x, a = n.y, u = n.width, s = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Ut(Ut(Ut({}, me(this.props, !1)), me(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i,
          y1: a + v * s,
          x2: i + u,
          y2: a + v * s
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i + g * u,
          y1: a,
          x2: i + g * u,
          y2: a + s
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
        var u = this, s = this.props, l = s.tickLine, f = s.stroke, d = s.tick, h = s.tickFormatter, v = s.unit, g = Og(Ut(Ut({}, this.props), {}, {
          ticks: n
        }), i, a), b = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), w = me(this.props, !1), A = me(d, !1), O = Ut(Ut({}, w), {}, {
          fill: "none"
        }, me(l, !1)), S = g.map(function(_, x) {
          var E = u.getTickLineCoord(_), $ = E.line, M = E.tick, F = Ut(Ut(Ut(Ut({
            textAnchor: b,
            verticalAnchor: y
          }, w), {}, {
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
          }, Qi(u.props, _, x)), l && /* @__PURE__ */ k.createElement("line", ka({}, O, $, {
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
      var n = this, i = this.props, a = i.axisLine, u = i.width, s = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = _h(h, rQ), b = v;
      return Pe(l) && (b = v && v.length > 0 ? l(this.props) : l(g)), u <= 0 || s <= 0 || !b || !b.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-cartesian-axis", f),
        ref: function(w) {
          n.layerReference = w;
        }
      }, a && this.renderAxisLine(), this.renderTicks(b, this.state.fontSize, this.state.letterSpacing), Pt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(vi, ka({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Y1);
Ag(Eo, "displayName", "CartesianAxis");
Ag(Eo, "defaultProps", {
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
var fQ = ["x1", "y1", "x2", "y2", "key"], dQ = ["offset"];
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
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
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? b1(Object(r), !0).forEach(function(n) {
      hQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hQ(e, t, r) {
  return t = pQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pQ(e) {
  var t = vQ(e, "string");
  return ra(t) == "symbol" ? t : String(t);
}
function vQ(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
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
function x1(e, t) {
  if (e == null) return {};
  var r = gQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var yQ = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, u = t.width, s = t.height;
  return /* @__PURE__ */ k.createElement("rect", {
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
function AS(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, u = t.y2, s = t.key, l = x1(t, fQ), f = me(l, !1);
    f.offset;
    var d = x1(f, dQ);
    r = /* @__PURE__ */ k.createElement("line", Ki({}, d, {
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
function mQ(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(s, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(l),
      index: l
    });
    return AS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, u);
}
function bQ(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(s, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return AS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, u);
}
function xQ(e) {
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
    var b = !d[g + 1], y = b ? i + u - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var w = g % t.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(g),
      y: v,
      x: n,
      height: y,
      width: a,
      stroke: "none",
      fill: t[w],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function wQ(e) {
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
    var b = !d[g + 1], y = b ? a + s - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var w = g % n.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(g),
      x: v,
      y: u,
      width: y,
      height: l,
      stroke: "none",
      fill: n[w],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var _Q = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, u = t.offset;
  return PA(Og(Bt(Bt(Bt({}, Eo.defaultProps), n), {}, {
    ticks: kn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), u.left, u.left + u.width, r);
}, OQ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, u = t.offset;
  return PA(Og(Bt(Bt(Bt({}, Eo.defaultProps), n), {}, {
    ticks: kn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), u.top, u.top + u.height, r);
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
function gs(e) {
  var t, r, n, i, a, u, s = xg(), l = wg(), f = PJ(), d = Bt(Bt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Ea.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Ea.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Ea.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Ea.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Ea.vertical,
    verticalFill: (u = e.verticalFill) !== null && u !== void 0 ? u : Ea.verticalFill,
    x: oe(e.x) ? e.x : f.left,
    y: oe(e.y) ? e.y : f.top,
    width: oe(e.width) ? e.width : f.width,
    height: oe(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, g = d.width, b = d.height, y = d.syncWithTicks, w = d.horizontalValues, A = d.verticalValues, O = OJ(), S = AJ();
  if (!oe(g) || g <= 0 || !oe(b) || b <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || _Q, x = d.horizontalCoordinatesGenerator || OQ, E = d.horizontalPoints, $ = d.verticalPoints;
  if ((!E || !E.length) && Pe(x)) {
    var M = w && w.length, F = x({
      yAxis: S ? Bt(Bt({}, S), {}, {
        ticks: M ? w : S.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, M ? !0 : y);
    Xr(Array.isArray(F), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ra(F), "]")), Array.isArray(F) && (E = F);
  }
  if ((!$ || !$.length) && Pe(_)) {
    var D = A && A.length, B = _({
      xAxis: O ? Bt(Bt({}, O), {}, {
        ticks: D ? A : O.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, D ? !0 : y);
    Xr(Array.isArray(B), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ra(B), "]")), Array.isArray(B) && ($ = B);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(yQ, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ k.createElement(mQ, Ki({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(bQ, Ki({}, d, {
    offset: f,
    verticalPoints: $,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(xQ, Ki({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ k.createElement(wQ, Ki({}, d, {
    verticalPoints: $
  })));
}
gs.displayName = "CartesianGrid";
var AQ = ["type", "layout", "connectNulls", "ref"];
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function SQ(e, t) {
  if (e == null) return {};
  var r = PQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function mu() {
  return mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mu.apply(this, arguments);
}
function w1(e, t) {
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
    t % 2 ? w1(Object(r), !0).forEach(function(n) {
      qr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ta(e) {
  return CQ(e) || $Q(e) || TQ(e) || EQ();
}
function EQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TQ(e, t) {
  if (e) {
    if (typeof e == "string") return Yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yp(e, t);
  }
}
function $Q(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function CQ(e) {
  if (Array.isArray(e)) return Yp(e);
}
function Yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, PS(n.key), n);
  }
}
function IQ(e, t, r) {
  return t && _1(e.prototype, t), r && _1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kQ(e, t, r) {
  return t = Sl(t), jQ(e, SS() ? Reflect.construct(t, r || [], Sl(e).constructor) : t.apply(e, r));
}
function jQ(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ui(e);
}
function SS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (SS = function() {
    return !!e;
  })();
}
function Sl(e) {
  return Sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sl(e);
}
function ui(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function RQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xp(e, t);
}
function qr(e, t, r) {
  return t = PS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PS(e) {
  var t = NQ(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function NQ(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ys = /* @__PURE__ */ function(e) {
  RQ(t, e);
  function t() {
    var r;
    MQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = kQ(this, t, [].concat(i)), qr(ui(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), qr(ui(r), "generateSimpleStrokeDasharray", function(u, s) {
      return "".concat(s, "px ").concat(u - s, "px");
    }), qr(ui(r), "getStrokeDasharray", function(u, s, l) {
      var f = l.reduce(function(A, O) {
        return A + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(s, u);
      for (var d = Math.floor(u / f), h = u % f, v = s - u, g = [], b = 0, y = 0; b < l.length; y += l[b], ++b)
        if (y + l[b] > h) {
          g = [].concat(Ta(l.slice(0, b)), [h - y]);
          break;
        }
      var w = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ta(t.repeat(l, d)), Ta(g), w).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), qr(ui(r), "id", oa("recharts-line-")), qr(ui(r), "pathRef", function(u) {
      r.mainCurve = u;
    }), qr(ui(r), "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), qr(ui(r), "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return IQ(t, [{
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
      var a = this.props, u = a.points, s = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, ds);
      if (!h)
        return null;
      var v = function(y, w) {
        return {
          x: y.x,
          y: y.y,
          value: y.value,
          errorVal: bt(y.payload, w)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, g, h.map(function(b) {
        return /* @__PURE__ */ k.cloneElement(b, {
          key: "bar-".concat(b.props.dataKey),
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
      var s = this.props, l = s.dot, f = s.points, d = s.dataKey, h = me(this.props, !1), v = me(l, !0), g = f.map(function(y, w) {
        var A = lr(lr(lr({
          key: "dot-".concat(w),
          r: 3
        }, h), v), {}, {
          value: y.value,
          dataKey: d,
          cx: y.x,
          cy: y.y,
          index: w,
          payload: y.payload
        });
        return t.renderDotItem(l, A);
      }), b = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, mu({
        className: "recharts-line-dots",
        key: "dots"
      }, b), g);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, u) {
      var s = this.props, l = s.type, f = s.layout, d = s.connectNulls;
      s.ref;
      var h = SQ(s, AQ), v = lr(lr(lr({}, me(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, u), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ k.createElement(Ji, mu({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, u = this.props, s = u.points, l = u.strokeDasharray, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, b = u.animateNewValues, y = u.width, w = u.height, A = this.state, O = A.prevPoints, S = A.totalLength;
      return /* @__PURE__ */ k.createElement(Qr, {
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
          var E = O.length / s.length, $ = s.map(function(N, U) {
            var z = Math.floor(U * E);
            if (O[z]) {
              var J = O[z], H = St(J.x, N.x), Z = St(J.y, N.y);
              return lr(lr({}, N), {}, {
                x: H(x),
                y: Z(x)
              });
            }
            if (b) {
              var K = St(y * 2, N.x), ue = St(w / 2, N.y);
              return lr(lr({}, N), {}, {
                x: K(x),
                y: ue(x)
              });
            }
            return lr(lr({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return a.renderCurveStatically($, n, i);
        }
        var M = St(0, S), F = M(x), D;
        if (l) {
          var B = "".concat(l).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          D = a.getStrokeDasharray(F, S, B);
        } else
          D = a.generateSimpleStrokeDasharray(S, F);
        return a.renderCurveStatically(s, n, i, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, u = a.points, s = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return s && u && u.length && (!f && d > 0 || !ea(f, u)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(u, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, s = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, b = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !s || !s.length)
        return null;
      var A = this.state.isAnimationFinished, O = s.length === 1, S = Me("recharts-line", l), _ = f && f.allowDataOverflow, x = d && d.allowDataOverflow, E = _ || x, $ = Te(w) ? this.id : w, M = (n = me(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = x_(u) ? u : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat($)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? v : v - g / 2,
        y: x ? h : h - b / 2,
        width: _ ? g : g * 2,
        height: x ? b : b * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat($)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: v - H / 2,
        y: h - H / 2,
        width: g + H,
        height: b + H
      }))) : null, !O && this.renderCurve(E, $), this.renderErrorBar(E, $), (O || u) && this.renderDots(E, J, $), (!y || A) && kr.renderCallByParent(this.props, s));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Ta(n), [0]) : n, u = [], s = 0; s < i; ++s)
        u = [].concat(Ta(u), Ta(a));
      return u;
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
        var u = Me("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ k.createElement(hs, mu({}, i, {
          className: u
        }));
      }
      return a;
    }
  }]), t;
}(Lr);
qr(ys, "displayName", "Line");
qr(ys, "defaultProps", {
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
  isAnimationActive: !Zr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
qr(ys, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, u = e.dataKey, s = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var b = bt(v, u);
    return d === "horizontal" ? {
      x: nl({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: v,
        index: g
      }),
      y: Te(b) ? null : n.scale(b),
      value: b,
      payload: v
    } : {
      x: Te(b) ? null : r.scale(b),
      y: nl({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: v,
        index: g
      }),
      value: b,
      payload: v
    };
  });
  return lr({
    points: h,
    layout: d
  }, f);
});
var DQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], ES;
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function LQ(e, t) {
  if (e == null) return {};
  var r = BQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BQ(e, t) {
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
function O1(e, t) {
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
    t % 2 ? O1(Object(r), !0).forEach(function(n) {
      ln(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $S(n.key), n);
  }
}
function WQ(e, t, r) {
  return t && A1(e.prototype, t), r && A1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zQ(e, t, r) {
  return t = Pl(t), UQ(e, TS() ? Reflect.construct(t, r || [], Pl(e).constructor) : t.apply(e, r));
}
function UQ(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fu(e);
}
function TS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (TS = function() {
    return !!e;
  })();
}
function Pl(e) {
  return Pl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pl(e);
}
function fu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zp(e, t);
}
function Zp(e, t) {
  return Zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zp(e, t);
}
function ln(e, t, r) {
  return t = $S(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $S(e) {
  var t = GQ(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function GQ(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pi = /* @__PURE__ */ function(e) {
  HQ(t, e);
  function t() {
    var r;
    FQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = zQ(this, t, [].concat(i)), ln(fu(r), "state", {
      isAnimationFinished: !0
    }), ln(fu(r), "id", oa("recharts-area-")), ln(fu(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(u) && u();
    }), ln(fu(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(u) && u();
    }), r;
  }
  return WQ(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var u = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (u && !s)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = me(this.props, !1), g = me(f, !0), b = d.map(function(w, A) {
        var O = si(si(si({
          key: "dot-".concat(A),
          r: 3
        }, v), g), {}, {
          index: A,
          cx: w.x,
          cy: w.y,
          dataKey: h,
          value: w.value,
          payload: w.payload,
          points: d
        });
        return t.renderDotItem(f, O);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, qi({
        className: "recharts-area-dots"
      }, y), b);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, s = i.strokeWidth, l = u[0].x, f = u[u.length - 1].x, d = n * Math.abs(l - f), h = fi(u.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
        return v.y || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: l < f ? l : l - d,
        y: 0,
        width: d,
        height: Math.floor(h + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, s = i.strokeWidth, l = u[0].y, f = u[u.length - 1].y, d = n * Math.abs(l - f), h = fi(u.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(fi(a.map(function(v) {
        return v.x || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
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
      var g = LQ(s, DQ);
      return /* @__PURE__ */ k.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(u, ")") : null
      }, /* @__PURE__ */ k.createElement(Ji, qi({}, me(g, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ k.createElement(Ji, qi({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ k.createElement(Ji, qi({}, me(this.props, !1), {
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
      var a = this, u = this.props, s = u.points, l = u.baseLine, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, b = this.state, y = b.prevPoints, w = b.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Qr, {
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
          var S = y.length / s.length, _ = s.map(function(M, F) {
            var D = Math.floor(F * S);
            if (y[D]) {
              var B = y[D], N = St(B.x, M.x), U = St(B.y, M.y);
              return si(si({}, M), {}, {
                x: N(O),
                y: U(O)
              });
            }
            return M;
          }), x;
          if (oe(l) && typeof l == "number") {
            var E = St(w, l);
            x = E(O);
          } else if (Te(l) || bo(l)) {
            var $ = St(w, 0);
            x = $(O);
          } else
            x = l.map(function(M, F) {
              var D = Math.floor(F * S);
              if (w[D]) {
                var B = w[D], N = St(B.x, M.x), U = St(B.y, M.y);
                return si(si({}, M), {}, {
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
        }, a.renderAreaStatically(s, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, u = a.points, s = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && u && u.length && (!d && v > 0 || !ea(d, u) || !ea(h, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(u, s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, s = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, b = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !s || !s.length)
        return null;
      var A = this.state.isAnimationFinished, O = s.length === 1, S = Me("recharts-area", l), _ = h && h.allowDataOverflow, x = v && v.allowDataOverflow, E = _ || x, $ = Te(w) ? this.id : w, M = (n = me(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = x_(u) ? u : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat($)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? d : d - g / 2,
        y: x ? f : f - b / 2,
        width: _ ? g : g * 2,
        height: x ? b : b * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat($)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: d - H / 2,
        y: f - H / 2,
        width: g + H,
        height: b + H
      }))) : null, O ? null : this.renderArea(E, $), (u || O) && this.renderDots(E, J, $), (!y || A) && kr.renderCallByParent(this.props, s));
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
}(Lr);
ES = Pi;
ln(Pi, "displayName", "Area");
ln(Pi, "defaultProps", {
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
  isAnimationActive: !Zr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
ln(Pi, "getBaseValue", function(e, t, r, n) {
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
ln(Pi, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, u = e.yAxisTicks, s = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, b = f && f.length, y = ES.getBaseValue(t, r, n, i), w = g === "horizontal", A = !1, O = h.map(function(_, x) {
    var E;
    b ? E = f[d + x] : (E = bt(_, l), Array.isArray(E) ? A = !0 : E = [y, E]);
    var $ = E[1] == null || b && bt(_, l) == null;
    return w ? {
      x: nl({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: _,
        index: x
      }),
      y: $ ? null : i.scale(E[1]),
      value: E,
      payload: _
    } : {
      x: $ ? null : n.scale(E[1]),
      y: nl({
        axis: i,
        ticks: u,
        bandSize: s,
        entry: _,
        index: x
      }),
      value: E,
      payload: _
    };
  }), S;
  return b || A ? S = O.map(function(_) {
    var x = Array.isArray(_.value) ? _.value[0] : null;
    return w ? {
      x: _.x,
      y: x != null && _.y != null ? i.scale(x) : null
    } : {
      x: x != null ? n.scale(x) : null,
      y: _.y
    };
  }) : S = w ? i.scale(y) : n.scale(y), si({
    points: O,
    baseLine: S,
    layout: g,
    isRange: A
  }, v);
});
ln(Pi, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Me("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ k.createElement(hs, qi({}, t, {
      className: n
    }));
  }
  return r;
});
function Jp() {
  return Jp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jp.apply(this, arguments);
}
var Kn = function(t) {
  var r = t.xAxisId, n = xg(), i = wg(), a = bS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Eo, Jp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return kn(s, !0);
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
function Qp() {
  return Qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qp.apply(this, arguments);
}
var qn = function(t) {
  var r = t.yAxisId, n = xg(), i = wg(), a = xS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Eo, Qp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return kn(s, !0);
      }
    }))
  );
};
qn.displayName = "YAxis";
qn.defaultProps = {
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
function S1(e) {
  return YQ(e) || VQ(e) || qQ(e) || KQ();
}
function KQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qQ(e, t) {
  if (e) {
    if (typeof e == "string") return ev(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ev(e, t);
  }
}
function VQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function YQ(e) {
  if (Array.isArray(e)) return ev(e);
}
function ev(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var tv = function(t, r, n, i, a) {
  var u = yr(t, _g), s = yr(t, ps), l = [].concat(S1(u), S1(s)), f = yr(t, vs), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(y, w) {
    if (w.props[d] === n && dn(w.props, "extendDomain") && oe(w.props[h])) {
      var A = w.props[h];
      return [Math.min(y[0], A), Math.max(y[1], A)];
    }
    return y;
  }, v)), f.length) {
    var g = "".concat(h, "1"), b = "".concat(h, "2");
    v = f.reduce(function(y, w) {
      if (w.props[d] === n && dn(w.props, "extendDomain") && oe(w.props[g]) && oe(w.props[b])) {
        var A = w.props[g], O = w.props[b];
        return [Math.min(y[0], A, O), Math.max(y[1], A, O)];
      }
      return y;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(y, w) {
    return oe(w) ? [Math.min(y[0], w), Math.max(y[1], w)] : y;
  }, v)), v;
}, CS = { exports: {} };
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
    var g = new i(d, h || l, v), b = r ? r + f : f;
    return l._events[b] ? l._events[b].fn ? l._events[b] = [l._events[b], g] : l._events[b].push(g) : (l._events[b] = g, l._eventsCount++), l;
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
    for (var v = 0, g = h.length, b = new Array(g); v < g; v++)
      b[v] = h[v].fn;
    return b;
  }, s.prototype.listenerCount = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    return h ? h.fn ? 1 : h.length : 0;
  }, s.prototype.emit = function(f, d, h, v, g, b) {
    var y = r ? r + f : f;
    if (!this._events[y]) return !1;
    var w = this._events[y], A = arguments.length, O, S;
    if (w.fn) {
      switch (w.once && this.removeListener(f, w.fn, void 0, !0), A) {
        case 1:
          return w.fn.call(w.context), !0;
        case 2:
          return w.fn.call(w.context, d), !0;
        case 3:
          return w.fn.call(w.context, d, h), !0;
        case 4:
          return w.fn.call(w.context, d, h, v), !0;
        case 5:
          return w.fn.call(w.context, d, h, v, g), !0;
        case 6:
          return w.fn.call(w.context, d, h, v, g, b), !0;
      }
      for (S = 1, O = new Array(A - 1); S < A; S++)
        O[S - 1] = arguments[S];
      w.fn.apply(w.context, O);
    } else {
      var _ = w.length, x;
      for (S = 0; S < _; S++)
        switch (w[S].once && this.removeListener(f, w[S].fn, void 0, !0), A) {
          case 1:
            w[S].fn.call(w[S].context);
            break;
          case 2:
            w[S].fn.call(w[S].context, d);
            break;
          case 3:
            w[S].fn.call(w[S].context, d, h);
            break;
          case 4:
            w[S].fn.call(w[S].context, d, h, v);
            break;
          default:
            if (!O) for (x = 1, O = new Array(A - 1); x < A; x++)
              O[x - 1] = arguments[x];
            w[S].fn.apply(w[S].context, O);
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
    var b = this._events[g];
    if (b.fn)
      b.fn === d && (!v || b.once) && (!h || b.context === h) && u(this, g);
    else {
      for (var y = 0, w = [], A = b.length; y < A; y++)
        (b[y].fn !== d || v && !b[y].once || h && b[y].context !== h) && w.push(b[y]);
      w.length ? this._events[g] = w.length === 1 ? w[0] : w : u(this, g);
    }
    return this;
  }, s.prototype.removeAllListeners = function(f) {
    var d;
    return f ? (d = r ? r + f : f, this._events[d] && u(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(CS);
var XQ = CS.exports;
const ZQ = /* @__PURE__ */ Ze(XQ);
var Oh = new ZQ(), Ah = "recharts.syncMouseEvents";
function ts(e) {
  "@babel/helpers - typeof";
  return ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ts(e);
}
function JQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QQ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MS(n.key), n);
  }
}
function eee(e, t, r) {
  return t && QQ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sh(e, t, r) {
  return t = MS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MS(e) {
  var t = tee(e, "string");
  return ts(t) == "symbol" ? t : String(t);
}
function tee(e, t) {
  if (ts(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ts(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ree = /* @__PURE__ */ function() {
  function e() {
    JQ(this, e), Sh(this, "activeIndex", 0), Sh(this, "coordinateList", []), Sh(this, "layout", "horizontal");
  }
  return eee(e, [{
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
function nee(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function iee(e, t, r, n) {
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
function IS(e) {
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
function aee(e, t, r) {
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
      return IS(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: u
  }];
}
function rs(e) {
  "@babel/helpers - typeof";
  return rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rs(e);
}
function P1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P1(Object(r), !0).forEach(function(n) {
      oee(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oee(e, t, r) {
  return t = uee(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uee(e) {
  var t = see(e, "string");
  return rs(t) == "symbol" ? t : String(t);
}
function see(e, t) {
  if (rs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cee(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, u = e.offset, s = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Ji;
  if (d === "ScatterChart")
    h = i, v = rY;
  else if (d === "BarChart")
    h = iee(f, i, u, l), v = vg;
  else if (f === "radial") {
    var g = IS(i), b = g.cx, y = g.cy, w = g.radius, A = g.startAngle, O = g.endAngle;
    h = {
      cx: b,
      cy: y,
      startAngle: A,
      endAngle: O,
      innerRadius: w,
      outerRadius: w
    }, v = DA;
  } else
    h = {
      points: aee(f, i, u)
    }, v = Ji;
  var S = Ac(Ac(Ac(Ac({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), h), me(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: s,
    className: Me("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ Yr(t.props.cursor) ? /* @__PURE__ */ At(t.props.cursor, S) : /* @__PURE__ */ V1(v, S);
}
var lee = ["item"], fee = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
function bu() {
  return bu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bu.apply(this, arguments);
}
function E1(e, t) {
  return pee(e) || hee(e, t) || jS(e, t) || dee();
}
function dee() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hee(e, t) {
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
function pee(e) {
  if (Array.isArray(e)) return e;
}
function T1(e, t) {
  if (e == null) return {};
  var r = vee(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vee(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gee(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yee(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, RS(n.key), n);
  }
}
function mee(e, t, r) {
  return t && yee(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bee(e, t, r) {
  return t = El(t), xee(e, kS() ? Reflect.construct(t, r || [], El(e).constructor) : t.apply(e, r));
}
function xee(e, t) {
  if (t && (oo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ze(e);
}
function kS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kS = function() {
    return !!e;
  })();
}
function El(e) {
  return El = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, El(e);
}
function ze(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rv(e, t);
}
function rv(e, t) {
  return rv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, rv(e, t);
}
function uo(e) {
  return Aee(e) || Oee(e) || jS(e) || _ee();
}
function _ee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jS(e, t) {
  if (e) {
    if (typeof e == "string") return nv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nv(e, t);
  }
}
function Oee(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Aee(e) {
  if (Array.isArray(e)) return nv(e);
}
function nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $1(e, t) {
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
    t % 2 ? $1(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t, r) {
  return t = RS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RS(e) {
  var t = See(e, "string");
  return oo(t) == "symbol" ? t : String(t);
}
function See(e, t) {
  if (oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pee = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Eee = {
  width: "100%",
  height: "100%"
}, NS = {
  x: 0,
  y: 0
};
function Sc(e) {
  return e;
}
var Tee = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, $ee = function(t, r, n, i) {
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
      return re(re(re({}, i), it(i.cx, i.cy, s, u)), {}, {
        angle: u,
        radius: s
      });
    }
    var l = a.coordinate, f = i.angle;
    return re(re(re({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return NS;
}, lf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, u = (n ?? []).reduce(function(s, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(uo(s), uo(f)) : s;
  }, []);
  return u.length > 0 ? u : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function DS(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var iv = function(t, r, n, i) {
  var a = t.graphicalItems, u = t.tooltipAxis, s = lf(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (u.dataKey && !u.allowDuplicatedCategory) {
      var g = h === void 0 ? s : h;
      v = Cc(g, u.dataKey, i);
    } else
      v = h && h[n] || s[n];
    return v ? [].concat(uo(l), [MA(f, v)]) : l;
  }, []);
}, C1 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, u = Tee(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = MG(u, s, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = iv(t, r, d, h), g = $ee(n, s, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, Cee = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, u = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = SA(d, a);
  return n.reduce(function(b, y) {
    var w, A = y.props, O = A.type, S = A.dataKey, _ = A.allowDataOverflow, x = A.allowDuplicatedCategory, E = A.scale, $ = A.ticks, M = A.includeHidden, F = y.props[u];
    if (b[F])
      return b;
    var D = lf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[u] === F;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), B = D.length, N, U, z;
    nee(y.props.domain, _, O) && (N = wp(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (z = pu(D, S, "category")));
    var J = DS(O);
    if (!N || N.length === 0) {
      var H, Z = (H = y.props.domain) !== null && H !== void 0 ? H : J;
      if (S) {
        if (N = pu(D, S, O), O === "category" && g) {
          var K = CN(N);
          x && K ? (U = N, N = yl(0, B)) : x || (N = zx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(uo(ae), [ce]);
          }, []));
        } else if (O === "category")
          x ? N = N.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : N = zx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(uo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var ue = NG(D, i.filter(function(ae) {
            return ae.props[u] === F && (M || !ae.props.hide);
          }), S, a, d);
          ue && (N = ue);
        }
        g && (O === "number" || E !== "auto") && (z = pu(D, S, "category"));
      } else g ? N = yl(0, B) : s && s[F] && s[F].hasStack && O === "number" ? N = v === "expand" ? [0, 1] : CA(s[F].stackGroups, l, f) : N = AA(D, i.filter(function(ae) {
        return ae.props[u] === F && (M || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        N = tv(h, N, F, a, $), Z && (N = wp(Z, N, _));
      else if (O === "category" && Z) {
        var G = Z, X = N.every(function(ae) {
          return G.indexOf(ae) >= 0;
        });
        X && (N = G);
      }
    }
    return re(re({}, b), {}, Se({}, F, re(re({}, y.props), {}, {
      axisType: a,
      domain: N,
      categoricalDomain: z,
      duplicateDomain: U,
      originalDomain: (w = y.props.domain) !== null && w !== void 0 ? w : J,
      isCategorical: g,
      layout: d
    })));
  }, {});
}, Mee = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, u = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = lf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, b = SA(d, a), y = -1;
  return n.reduce(function(w, A) {
    var O = A.props[u], S = DS("number");
    if (!w[O]) {
      y++;
      var _;
      return b ? _ = yl(0, g) : s && s[O] && s[O].hasStack ? (_ = CA(s[O].stackGroups, l, f), _ = tv(h, _, O, a)) : (_ = wp(S, AA(v, n.filter(function(x) {
        return x.props[u] === O && !x.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = tv(h, _, O, a)), re(re({}, w), {}, Se({}, O, re(re({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: gr(Pee, "".concat(a, ".").concat(y % 2), null),
        domain: _,
        originalDomain: S,
        isCategorical: b,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return w;
  }, {});
}, Iee = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, u = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = yr(d, a), g = {};
  return v && v.length ? g = Cee(t, {
    axes: v,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  }) : u && u.length && (g = Mee(t, {
    Axis: a,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, kee = function(t) {
  var r = li(t), n = kn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Fv(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: il(r, n)
  };
}, M1 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = dr(r, eo), a = 0, u = 0;
  return t.data && t.data.length !== 0 && (u = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (u = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: u,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, jee = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = jn(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, I1 = function(t) {
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
}, Ree = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, u = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = dr(h, eo), b = dr(h, Ua), y = Object.keys(l).reduce(function(x, E) {
    var $ = l[E], M = $.orientation;
    return !$.mirror && !$.hide ? re(re({}, x), {}, Se({}, M, x[M] + $.width)) : x;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), w = Object.keys(u).reduce(function(x, E) {
    var $ = u[E], M = $.orientation;
    return !$.mirror && !$.hide ? re(re({}, x), {}, Se({}, M, gr(x, "".concat(M)) + $.height)) : x;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), A = re(re({}, w), y), O = A.bottom;
  g && (A.bottom += g.props.height || eo.defaultProps.height), b && r && (A = jG(A, i, n, r));
  var S = f - A.left - A.right, _ = d - A.top - A.bottom;
  return re(re({
    brushBottom: O
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(_, 0)
  });
}, Nee = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, ff = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, u = a === void 0 ? "axis" : a, s = t.validateTooltipEventTypes, l = s === void 0 ? ["axis"] : s, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(w, A) {
    var O = A.graphicalItems, S = A.stackGroups, _ = A.offset, x = A.updateId, E = A.dataStartIndex, $ = A.dataEndIndex, M = w.barSize, F = w.layout, D = w.barGap, B = w.barCategoryGap, N = w.maxBarSize, U = I1(F), z = U.numericAxisName, J = U.cateAxisName, H = jee(O), Z = [];
    return O.forEach(function(K, ue) {
      var G = lf(w.data, {
        graphicalItems: [K],
        dataStartIndex: E,
        dataEndIndex: $
      }), X = K.props, ae = X.dataKey, ce = X.maxBarSize, he = K.props["".concat(z, "Id")], ge = K.props["".concat(J, "Id")], xe = {}, ye = f.reduce(function(nr, gt) {
        var mn, Vn, jo = A["".concat(gt.axisType, "Map")], Yn = K.props["".concat(gt.axisType, "Id")];
        jo && jo[Yn] || gt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? er(!1, "Specifying a(n) ".concat(gt.axisType, "Id requires a corresponding ").concat(
          gt.axisType,
          "Id on the targeted graphical component "
        ).concat((mn = K == null || (Vn = K.type) === null || Vn === void 0 ? void 0 : Vn.displayName) !== null && mn !== void 0 ? mn : "")) : er());
        var ws = jo[Yn];
        return re(re({}, nr), {}, Se(Se({}, gt.axisType, ws), "".concat(gt.axisType, "Ticks"), kn(ws)));
      }, xe), we = ye[J], ne = ye["".concat(J, "Ticks")], se = S && S[he] && S[he].hasStack && GG(K, S[he].stackGroups), pe = jn(K.type).indexOf("Bar") >= 0, j = il(we, ne), Ee = [], be = H && IG({
        barSize: M,
        stackGroups: S,
        totalSize: Nee(ye, J)
      });
      if (pe) {
        var We, lt, at = Te(ce) ? N : ce, Vt = (We = (lt = il(we, ne, !0)) !== null && lt !== void 0 ? lt : at) !== null && We !== void 0 ? We : 0;
        Ee = kG({
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
      var Fr = K && K.type && K.type.getComposedData;
      Fr && Z.push({
        props: re(re({}, Fr(re(re({}, ye), {}, {
          displayedData: G,
          props: w,
          dataKey: ae,
          item: K,
          bandSize: j,
          barPosition: Ee,
          offset: _,
          stackedData: se,
          layout: F,
          dataStartIndex: E,
          dataEndIndex: $
        }))), {}, Se(Se(Se({
          key: K.key || "item-".concat(ue)
        }, z, ye[z]), J, ye[J]), "animationId", x)),
        childIndex: WN(K, w.children),
        item: K
      });
    }), Z;
  }, b = function(w, A) {
    var O = w.props, S = w.dataStartIndex, _ = w.dataEndIndex, x = w.updateId;
    if (!Nb({
      props: O
    }))
      return null;
    var E = O.children, $ = O.layout, M = O.stackOffset, F = O.data, D = O.reverseStackOrder, B = I1($), N = B.numericAxisName, U = B.cateAxisName, z = yr(E, i), J = UG(F, z, "".concat(N, "Id"), "".concat(U, "Id"), M, D), H = f.reduce(function(X, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return re(re({}, X), {}, Se({}, ce, Iee(O, re(re({}, ae), {}, {
        graphicalItems: z,
        stackGroups: ae.axisType === N && J,
        dataStartIndex: S,
        dataEndIndex: _
      }))));
    }, {}), Z = Ree(re(re({}, H), {}, {
      props: O,
      graphicalItems: z
    }), A == null ? void 0 : A.legendBBox);
    Object.keys(H).forEach(function(X) {
      H[X] = h(O, H[X], Z, X.replace("Map", ""), n);
    });
    var K = H["".concat(U, "Map")], ue = kee(K), G = g(O, re(re({}, H), {}, {
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
    }, ue), H);
  };
  return r = /* @__PURE__ */ function(y) {
    wee(w, y);
    function w(A) {
      var O, S, _;
      return gee(this, w), _ = bee(this, w, [A]), Se(ze(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(ze(_), "accessibilityManager", new ree()), Se(ze(_), "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var E = _.state, $ = E.dataStartIndex, M = E.dataEndIndex, F = E.updateId;
          _.setState(re({
            legendBBox: x
          }, b({
            props: _.props,
            dataStartIndex: $,
            dataEndIndex: M,
            updateId: F
          }, re(re({}, _.state), {}, {
            legendBBox: x
          }))));
        }
      }), Se(ze(_), "handleReceiveSyncEvent", function(x, E, $) {
        if (_.props.syncId === x) {
          if ($ === _.eventEmitterSymbol && typeof _.props.syncMethod != "function")
            return;
          _.applySyncEvent(E);
        }
      }), Se(ze(_), "handleBrushChange", function(x) {
        var E = x.startIndex, $ = x.endIndex;
        if (E !== _.state.dataStartIndex || $ !== _.state.dataEndIndex) {
          var M = _.state.updateId;
          _.setState(function() {
            return re({
              dataStartIndex: E,
              dataEndIndex: $
            }, b({
              props: _.props,
              dataStartIndex: E,
              dataEndIndex: $,
              updateId: M
            }, _.state));
          }), _.triggerSyncEvent({
            dataStartIndex: E,
            dataEndIndex: $
          });
        }
      }), Se(ze(_), "handleMouseEnter", function(x) {
        var E = _.getMouseInfo(x);
        if (E) {
          var $ = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState($), _.triggerSyncEvent($);
          var M = _.props.onMouseEnter;
          Pe(M) && M($, x);
        }
      }), Se(ze(_), "triggeredAfterMouseMove", function(x) {
        var E = _.getMouseInfo(x), $ = E ? re(re({}, E), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        _.setState($), _.triggerSyncEvent($);
        var M = _.props.onMouseMove;
        Pe(M) && M($, x);
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
        var $ = _.props.onMouseLeave;
        Pe($) && $(E, x);
      }), Se(ze(_), "handleOuterEvent", function(x) {
        var E = FN(x), $ = gr(_.props, "".concat(E));
        if (E && Pe($)) {
          var M, F;
          /.*touch.*/i.test(E) ? F = _.getMouseInfo(x.changedTouches[0]) : F = _.getMouseInfo(x), $((M = F) !== null && M !== void 0 ? M : {}, x);
        }
      }), Se(ze(_), "handleClick", function(x) {
        var E = _.getMouseInfo(x);
        if (E) {
          var $ = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState($), _.triggerSyncEvent($);
          var M = _.props.onClick;
          Pe(M) && M($, x);
        }
      }), Se(ze(_), "handleMouseDown", function(x) {
        var E = _.props.onMouseDown;
        if (Pe(E)) {
          var $ = _.getMouseInfo(x);
          E($, x);
        }
      }), Se(ze(_), "handleMouseUp", function(x) {
        var E = _.props.onMouseUp;
        if (Pe(E)) {
          var $ = _.getMouseInfo(x);
          E($, x);
        }
      }), Se(ze(_), "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), Se(ze(_), "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.handleMouseDown(x.changedTouches[0]);
      }), Se(ze(_), "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && _.handleMouseUp(x.changedTouches[0]);
      }), Se(ze(_), "triggerSyncEvent", function(x) {
        _.props.syncId !== void 0 && Oh.emit(Ah, _.props.syncId, x, _.eventEmitterSymbol);
      }), Se(ze(_), "applySyncEvent", function(x) {
        var E = _.props, $ = E.layout, M = E.syncMethod, F = _.state.updateId, D = x.dataStartIndex, B = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          _.setState(re({
            dataStartIndex: D,
            dataEndIndex: B
          }, b({
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
            for (var K = 0; K < Z.length; K++)
              if (Z[K].value === x.activeLabel) {
                z = K;
                break;
              }
          }
          var ue = re(re({}, H), {}, {
            x: H.left,
            y: H.top
          }), G = Math.min(N, ue.x + ue.width), X = Math.min(U, ue.y + ue.height), ae = Z[z] && Z[z].value, ce = iv(_.state, _.props.data, z), he = Z[z] ? {
            x: $ === "horizontal" ? Z[z].coordinate : G,
            y: $ === "horizontal" ? X : Z[z].coordinate
          } : NS;
          _.setState(re(re({}, x), {}, {
            activeLabel: ae,
            activeCoordinate: he,
            activePayload: ce,
            activeTooltipIndex: z
          }));
        } else
          _.setState(x);
      }), Se(ze(_), "renderCursor", function(x) {
        var E, $ = _.state, M = $.isTooltipActive, F = $.activeCoordinate, D = $.activePayload, B = $.offset, N = $.activeTooltipIndex, U = $.tooltipAxisBandSize, z = _.getTooltipEventType(), J = (E = x.props.active) !== null && E !== void 0 ? E : M, H = _.props.layout, Z = x.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(cee, {
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
      }), Se(ze(_), "renderPolarAxis", function(x, E, $) {
        var M = gr(x, "type.axisType"), F = gr(_.state, "".concat(M, "Map")), D = F && F[x.props["".concat(M, "Id")]];
        return /* @__PURE__ */ At(x, re(re({}, D), {}, {
          className: Me(M, D.className),
          key: x.key || "".concat(E, "-").concat($),
          ticks: kn(D, !0)
        }));
      }), Se(ze(_), "renderPolarGrid", function(x) {
        var E = x.props, $ = E.radialLines, M = E.polarAngles, F = E.polarRadius, D = _.state, B = D.radiusAxisMap, N = D.angleAxisMap, U = li(B), z = li(N), J = z.cx, H = z.cy, Z = z.innerRadius, K = z.outerRadius;
        return /* @__PURE__ */ At(x, {
          polarAngles: Array.isArray(M) ? M : kn(z, !0).map(function(ue) {
            return ue.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : kn(U, !0).map(function(ue) {
            return ue.coordinate;
          }),
          cx: J,
          cy: H,
          innerRadius: Z,
          outerRadius: K,
          key: x.key || "polar-grid",
          radialLines: $
        });
      }), Se(ze(_), "renderLegend", function() {
        var x = _.state.formattedGraphicalItems, E = _.props, $ = E.children, M = E.width, F = E.height, D = _.props.margin || {}, B = M - (D.left || 0) - (D.right || 0), N = _A({
          children: $,
          formattedGraphicalItems: x,
          legendWidth: B,
          legendContent: d
        });
        if (!N)
          return null;
        var U = N.item, z = T1(N, lee);
        return /* @__PURE__ */ At(U, re(re({}, z), {}, {
          chartWidth: M,
          chartHeight: F,
          margin: D,
          onBBoxUpdate: _.handleLegendBBoxUpdate
        }));
      }), Se(ze(_), "renderTooltip", function() {
        var x, E = _.props, $ = E.children, M = E.accessibilityLayer, F = dr($, sn);
        if (!F)
          return null;
        var D = _.state, B = D.isTooltipActive, N = D.activeCoordinate, U = D.activePayload, z = D.activeLabel, J = D.offset, H = (x = F.props.active) !== null && x !== void 0 ? x : B;
        return /* @__PURE__ */ At(F, {
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
        var E = _.props, $ = E.margin, M = E.data, F = _.state, D = F.offset, B = F.dataStartIndex, N = F.dataEndIndex, U = F.updateId;
        return /* @__PURE__ */ At(x, {
          key: x.key || "_recharts-brush",
          onChange: bc(_.handleBrushChange, x.props.onChange),
          data: M,
          x: oe(x.props.x) ? x.props.x : D.left,
          y: oe(x.props.y) ? x.props.y : D.top + D.height + D.brushBottom - ($.bottom || 0),
          width: oe(x.props.width) ? x.props.width : D.width,
          startIndex: B,
          endIndex: N,
          updateId: "brush-".concat(U)
        });
      }), Se(ze(_), "renderReferenceElement", function(x, E, $) {
        if (!x)
          return null;
        var M = ze(_), F = M.clipPathId, D = _.state, B = D.xAxisMap, N = D.yAxisMap, U = D.offset, z = x.props, J = z.xAxisId, H = z.yAxisId;
        return /* @__PURE__ */ At(x, {
          key: x.key || "".concat(E, "-").concat($),
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
        var E = x.item, $ = x.activePoint, M = x.basePoint, F = x.childIndex, D = x.isRange, B = [], N = E.props.key, U = E.item.props, z = U.activeDot, J = U.dataKey, H = re(re({
          index: F,
          dataKey: J,
          cx: $.x,
          cy: $.y,
          r: 4,
          fill: hg(E.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: $.payload,
          value: $.value,
          key: "".concat(N, "-activePoint-").concat(F)
        }, me(z, !1)), Mc(z));
        return B.push(w.renderActiveDot(z, H)), M ? B.push(w.renderActiveDot(z, re(re({}, H), {}, {
          cx: M.x,
          cy: M.y,
          key: "".concat(N, "-basePoint-").concat(F)
        }))) : D && B.push(null), B;
      }), Se(ze(_), "renderGraphicChild", function(x, E, $) {
        var M = _.filterFormatItem(x, E, $);
        if (!M)
          return null;
        var F = _.getTooltipEventType(), D = _.state, B = D.isTooltipActive, N = D.tooltipAxis, U = D.activeTooltipIndex, z = D.activeLabel, J = _.props.children, H = dr(J, sn), Z = M.props, K = Z.points, ue = Z.isRange, G = Z.baseLine, X = M.item.props, ae = X.activeDot, ce = X.hide, he = X.activeBar, ge = X.activeShape, xe = !!(!ce && B && H && (ae || he || ge)), ye = {};
        F !== "axis" && H && H.props.trigger === "click" ? ye = {
          onClick: bc(_.handleItemMouseEnter, x.props.onClick)
        } : F !== "axis" && (ye = {
          onMouseLeave: bc(_.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: bc(_.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var we = /* @__PURE__ */ At(x, re(re({}, M.props), ye));
        function ne(gt) {
          return typeof N.dataKey == "function" ? N.dataKey(gt.payload) : null;
        }
        if (xe)
          if (U >= 0) {
            var se, pe;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var j = typeof N.dataKey == "function" ? ne : "payload.".concat(N.dataKey.toString());
              se = Cc(K, j, z), pe = ue && G && Cc(G, j, z);
            } else
              se = K == null ? void 0 : K[U], pe = ue && G && G[U];
            if (ge || he) {
              var Ee = x.props.activeIndex !== void 0 ? x.props.activeIndex : U;
              return [/* @__PURE__ */ At(x, re(re(re({}, M.props), ye), {}, {
                activeIndex: Ee
              })), null, null];
            }
            if (!Te(se))
              return [we].concat(uo(_.renderActivePoints({
                item: M,
                activePoint: se,
                basePoint: pe,
                childIndex: U,
                isRange: ue
              })));
          } else {
            var be, We = (be = _.getItemByXY(_.state.activeCoordinate)) !== null && be !== void 0 ? be : {
              graphicalItem: we
            }, lt = We.graphicalItem, at = lt.item, Vt = at === void 0 ? x : at, Fr = lt.childIndex, nr = re(re(re({}, M.props), ye), {}, {
              activeIndex: Fr
            });
            return [/* @__PURE__ */ At(Vt, nr), null, null];
          }
        return ue ? [we, null, null] : [we, null];
      }), Se(ze(_), "renderCustomized", function(x, E, $) {
        return /* @__PURE__ */ At(x, re(re({
          key: "recharts-customized-".concat($)
        }, _.props), _.state));
      }), Se(ze(_), "renderMap", {
        CartesianGrid: {
          handler: Sc,
          once: !0
        },
        ReferenceArea: {
          handler: _.renderReferenceElement
        },
        ReferenceLine: {
          handler: Sc
        },
        ReferenceDot: {
          handler: _.renderReferenceElement
        },
        XAxis: {
          handler: Sc
        },
        YAxis: {
          handler: Sc
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
      }), _.clipPathId = "".concat((O = A.id) !== null && O !== void 0 ? O : oa("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = AO(_.triggeredAfterMouseMove, (S = A.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), _.state = {}, _;
    }
    return mee(w, [{
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
        var O = this.props, S = O.children, _ = O.data, x = O.height, E = O.layout, $ = dr(S, sn);
        if ($) {
          var M = $.props.defaultIndex;
          if (!(typeof M != "number" || M < 0 || M > this.state.tooltipTicks.length)) {
            var F = this.state.tooltipTicks[M] && this.state.tooltipTicks[M].value, D = iv(this.state, _, M, F), B = this.state.tooltipTicks[M].coordinate, N = (this.state.offset.top + x) / 2, U = E === "horizontal", z = U ? {
              x: B,
              y: N
            } : {
              y: B,
              x: N
            }, J = this.state.formattedGraphicalItems.find(function(Z) {
              var K = Z.item;
              return K.type.name === "Scatter";
            });
            J && (z = re(re({}, z), J.props.points[M].tooltipPosition), D = J.props.points[M].tooltipPayload);
            var H = {
              activeTooltipIndex: M,
              isTooltipActive: !0,
              activeLabel: F,
              activePayload: D,
              activeCoordinate: z
            };
            this.setState(H), this.renderCursor($), this.accessibilityManager.setIndex(M);
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
        Nh([dr(O.children, sn)], [dr(this.props.children, sn)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = dr(this.props.children, sn);
        if (O && typeof O.props.shared == "boolean") {
          var S = O.props.shared ? "axis" : "item";
          return l.indexOf(S) >= 0 ? S : u;
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
        var S = this.container, _ = S.getBoundingClientRect(), x = h5(_), E = {
          chartX: Math.round(O.pageX - x.left),
          chartY: Math.round(O.pageY - x.top)
        }, $ = _.width / S.offsetWidth || 1, M = this.inRange(E.chartX, E.chartY, $);
        if (!M)
          return null;
        var F = this.state, D = F.xAxisMap, B = F.yAxisMap, N = this.getTooltipEventType();
        if (N !== "axis" && D && B) {
          var U = li(D).scale, z = li(B).scale, J = U && U.invert ? U.invert(E.chartX) : null, H = z && z.invert ? z.invert(E.chartY) : null;
          return re(re({}, E), {}, {
            xValue: J,
            yValue: H
          });
        }
        var Z = C1(this.state, this.props.data, this.props.layout, M);
        return Z ? re(re({}, E), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(O, S) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, E = O / _, $ = S / _;
        if (x === "horizontal" || x === "vertical") {
          var M = this.state.offset, F = E >= M.left && E <= M.left + M.width && $ >= M.top && $ <= M.top + M.height;
          return F ? {
            x: E,
            y: $
          } : null;
        }
        var D = this.state, B = D.angleAxisMap, N = D.radiusAxisMap;
        if (B && N) {
          var U = li(B);
          return Gx({
            x: E,
            y: $
          }, U);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, S = this.getTooltipEventType(), _ = dr(O, sn), x = {};
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
        var E = Mc(this.props, this.handleOuterEvent);
        return re(re({}, E), x);
      }
    }, {
      key: "addListener",
      value: function() {
        Oh.on(Ah, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Oh.removeListener(Ah, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, S, _) {
        for (var x = this.state.formattedGraphicalItems, E = 0, $ = x.length; E < $; E++) {
          var M = x[E];
          if (M.item === O || M.props.key === O.key || S === jn(M.item.type) && _ === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, S = this.state.offset, _ = S.left, x = S.top, E = S.height, $ = S.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ k.createElement("rect", {
          x: _,
          y: x,
          height: E,
          width: $
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var x = E1(_, 2), E = x[0], $ = x[1];
          return re(re({}, S), {}, Se({}, E, $.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var x = E1(_, 2), E = x[0], $ = x[1];
          return re(re({}, S), {}, Se({}, E, $.scale));
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
          for (var E = 0, $ = _.length; E < $; E++) {
            var M = _[E], F = M.props, D = M.item, B = jn(D.type);
            if (B === "Bar") {
              var N = (F.data || []).find(function(H) {
                return NV(O, H);
              });
              if (N)
                return {
                  graphicalItem: M,
                  payload: N
                };
            } else if (B === "RadialBar") {
              var U = (F.data || []).find(function(H) {
                return Gx(O, H);
              });
              if (U)
                return {
                  graphicalItem: M,
                  payload: U
                };
            } else if (uf(M, x) || sf(M, x) || Vu(M, x)) {
              var z = AX({
                graphicalItem: M,
                activeTooltipItem: x,
                itemData: D.props.data
              }), J = D.props.activeIndex === void 0 ? z : D.props.activeIndex;
              return {
                graphicalItem: re(re({}, M), {}, {
                  childIndex: J
                }),
                payload: Vu(M, x) ? D.props.data[z] : M.props.data[z]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!Nb(this))
          return null;
        var S = this.props, _ = S.children, x = S.className, E = S.width, $ = S.height, M = S.style, F = S.compact, D = S.title, B = S.desc, N = T1(S, fee), U = me(N, !1);
        if (F)
          return /* @__PURE__ */ k.createElement(s1, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(Lh, bu({}, U, {
            width: E,
            height: $,
            title: D,
            desc: B
          }), this.renderClipPath(), Lb(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var z, J;
          U.tabIndex = (z = this.props.tabIndex) !== null && z !== void 0 ? z : 0, U.role = (J = this.props.role) !== null && J !== void 0 ? J : "application", U.onKeyDown = function(Z) {
            O.accessibilityManager.keyboardEvent(Z);
          }, U.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var H = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(s1, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", bu({
          className: Me("recharts-wrapper", x),
          style: re({
            position: "relative",
            cursor: "default",
            width: E,
            height: $
          }, M)
        }, H, {
          ref: function(K) {
            O.container = K;
          }
        }), /* @__PURE__ */ k.createElement(Lh, bu({}, U, {
          width: E,
          height: $,
          title: D,
          desc: B,
          style: Eee
        }), this.renderClipPath(), Lb(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), w;
  }(Y1), Se(r, "displayName", n), Se(r, "defaultProps", re({
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
  }, v)), Se(r, "getDerivedStateFromProps", function(y, w) {
    var A = y.dataKey, O = y.data, S = y.children, _ = y.width, x = y.height, E = y.layout, $ = y.stackOffset, M = y.margin, F = w.dataStartIndex, D = w.dataEndIndex;
    if (w.updateId === void 0) {
      var B = M1(y);
      return re(re(re({}, B), {}, {
        updateId: 0
      }, b(re(re({
        props: y
      }, B), {}, {
        updateId: 0
      }), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: x,
        prevLayout: E,
        prevStackOffset: $,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (A !== w.prevDataKey || O !== w.prevData || _ !== w.prevWidth || x !== w.prevHeight || E !== w.prevLayout || $ !== w.prevStackOffset || !Na(M, w.prevMargin)) {
      var N = M1(y), U = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: w.chartX,
        chartY: w.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: w.isTooltipActive
      }, z = re(re({}, C1(w, O, E)), {}, {
        updateId: w.updateId + 1
      }), J = re(re(re({}, N), U), z);
      return re(re(re({}, J), b(re({
        props: y
      }, J), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: x,
        prevLayout: E,
        prevStackOffset: $,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (!Nh(S, w.prevChildren)) {
      var H, Z, K, ue, G = dr(S, eo), X = G && (H = (Z = G.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && H !== void 0 ? H : F, ae = G && (K = (ue = G.props) === null || ue === void 0 ? void 0 : ue.endIndex) !== null && K !== void 0 ? K : D, ce = X !== F || ae !== D, he = !Te(O), ge = he && !ce ? w.updateId : w.updateId + 1;
      return re(re({
        updateId: ge
      }, b(re(re({
        props: y
      }, w), {}, {
        updateId: ge,
        dataStartIndex: X,
        dataEndIndex: ae
      }), w)), {}, {
        prevChildren: S,
        dataStartIndex: X,
        dataEndIndex: ae
      });
    }
    return null;
  }), Se(r, "renderActiveDot", function(y, w) {
    var A;
    return /* @__PURE__ */ Yr(y) ? A = /* @__PURE__ */ At(y, w) : Pe(y) ? A = y(w) : A = /* @__PURE__ */ k.createElement(hs, w), /* @__PURE__ */ k.createElement(Le, {
      className: "recharts-active-dot",
      key: w.key
    }, A);
  }), r;
}, Dee = ff({
  chartName: "LineChart",
  GraphicalChild: ys,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: gg
}), LS = ff({
  chartName: "BarChart",
  GraphicalChild: Si,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: gg
}), Lee = ff({
  chartName: "PieChart",
  GraphicalChild: Gn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: of
  }, {
    axisType: "radiusAxis",
    AxisComp: nf
  }],
  formatAxisMap: tK,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Bee = ff({
  chartName: "AreaChart",
  GraphicalChild: Pi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: gg
});
const Fee = xi("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), Wee = { light: "", dark: ".dark" }, BS = V.createContext(null);
function FS() {
  const e = V.useContext(BS);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const zee = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, u) => {
  const s = V.useId(), l = `chart-${e || s.replace(/:/g, "")}`, f = V.useRef(null), [d, h] = jr(), v = fo(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return pv(() => {
    const g = u && "current" in u ? u.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, u, f]), /* @__PURE__ */ Y(BS.Provider, { value: { config: i }, children: /* @__PURE__ */ Qe(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: u || f,
      className: Ht(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? Fee({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ Y(Uee, { id: l, config: i }),
        /* @__PURE__ */ Y(
          o5,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, To = V.forwardRef(zee);
To.displayName = "Chart";
const Uee = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ Y(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Wee).map(
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
}, ms = sn, $o = V.forwardRef(
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
  }, b) => {
    const { config: y } = FS(), w = V.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, S = `${g || O.dataKey || O.name || "value"}`, _ = av(y, O, S), x = !g && typeof u == "string" ? ((E = y[u]) == null ? void 0 : E.label) || u : _ == null ? void 0 : _.label;
      return s ? /* @__PURE__ */ Y("div", { className: Ht("font-medium", l), children: s(x, t) }) : x ? /* @__PURE__ */ Y("div", { className: Ht("font-medium", l), children: x }) : null;
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
    const A = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Qe(
      "div",
      {
        ref: b,
        className: Ht(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          A ? null : w,
          /* @__PURE__ */ Y("div", { className: "grid gap-2", children: t.map((O, S) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, x = av(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ Y(
              "div",
              {
                className: Ht(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, S, O.payload) : /* @__PURE__ */ Qe(ja, { children: [
                  x != null && x.icon ? /* @__PURE__ */ Y(x.icon, {}) : !a && /* @__PURE__ */ Y(
                    "div",
                    {
                      className: Ht(
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
                  /* @__PURE__ */ Qe(
                    "div",
                    {
                      className: Ht(
                        "flex flex-1 justify-between leading-none",
                        A ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Qe("div", { className: "grid gap-2", children: [
                          A ? w : null,
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
$o.displayName = "ChartTooltip";
const Sg = Ua, df = V.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: u = 0
  }, s) => {
    const { config: l } = FS();
    return r != null && r.length ? /* @__PURE__ */ Y(
      "div",
      {
        ref: s,
        className: Ht(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: u },
        children: r.map((f) => {
          const d = `${i || f.dataKey || "value"}`, h = av(
            l,
            f,
            d,
            a
          );
          return /* @__PURE__ */ Qe(
            "div",
            {
              className: Ht(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                h != null && h.icon && !t ? /* @__PURE__ */ Y(h.icon, {}) : h && /* @__PURE__ */ Y(
                  "div",
                  {
                    className: "h-2.5 w-2.5 shrink-0 rounded-full",
                    style: {
                      backgroundColor: f.color
                    }
                  }
                ),
                /* @__PURE__ */ Y("span", { className: "text font-medium tracking-wide text-f1-foreground", children: h == null ? void 0 : h.label })
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
function av(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const Hee = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Gee = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += Hee[r[e] & 63];
  return t;
};
const Kee = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, Nn = (e) => {
  const t = Object.values(Kee);
  return t[e % t.length];
};
function hf(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Pg = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Eg = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), pf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function Co(e) {
  return pi(e);
}
function Tg(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const qee = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, u = e === t - 1;
  return /* @__PURE__ */ Y(vi, { ...i, textAnchor: a ? "start" : u ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, Vee = ({
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
  const { enabled: d } = Zk(), h = Object.keys(t), v = Gee(12), g = Tg(e), b = Math.max(
    ...g.flatMap(
      (S) => h.map(
        (_) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${S[_]}`) : `${S[_]}`
        )
      )
    )
  ), y = (n == null ? void 0 : n.width) ?? b + 20, w = !(n != null && n.hide), A = !(r != null && r.hide), O = !i || !d;
  return /* @__PURE__ */ Y(To, { config: t, ref: f, aspect: s, children: /* @__PURE__ */ Qe(
    Bee,
    {
      accessibilityLayer: !0,
      data: g,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: l
      },
      children: [
        /* @__PURE__ */ Qe("defs", { children: [
          /* @__PURE__ */ Qe(
            "linearGradient",
            {
              id: `${v}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${w ? y : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ Qe(ja, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ Y("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ Qe(ja, { children: [
                  /* @__PURE__ */ Y("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ Y("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ Y("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ Qe(ja, { children: [
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
          h.map((S, _) => /* @__PURE__ */ Qe(
            "linearGradient",
            {
              id: `fill${String(S)}-${v}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[S].color || Nn(_),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[S].color || Nn(_),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            _
          ))
        ] }),
        /* @__PURE__ */ Y(
          gs,
          {
            ...pf(),
            mask: `url(#${v}-transparent-edges)`
          }
        ),
        A && /* @__PURE__ */ Y(
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
            tick: qee
          }
        ),
        w && /* @__PURE__ */ Y(
          qn,
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
          ms,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(
              $o,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        h.map((S, _) => /* @__PURE__ */ Y(
          Pi,
          {
            isAnimationActive: !1,
            dataKey: S,
            type: u,
            mask: `url(#${v}-transparent-edges)`,
            fill: `url(#fill${S}-${v})`,
            fillOpacity: t[S].dashed ? 0 : 0.4,
            stroke: t[S].color || Nn(_),
            strokeWidth: 1.5,
            strokeDasharray: t[S].dashed ? "4 4" : void 0
          },
          S
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ Y(
          Sg,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ Y(df, {})
          }
        )
      ]
    }
  ) });
}, qne = Co(Vee), Yee = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: u,
  legend: s
}, l) => {
  const f = Object.keys(e), d = Tg(t), h = Math.max(
    ...d.flatMap(
      (v) => f.map(
        (g) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${v[g]}`) : `${v[g]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(To, { config: e, ref: l, aspect: u, children: /* @__PURE__ */ Qe(
    LS,
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
          ms,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y($o, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(gs, { ...pf() }),
        /* @__PURE__ */ Y(
          qn,
          {
            ...Eg(n),
            tick: !0,
            width: n.width ?? h + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ Y(Kn, { ...Pg(r), hide: r == null ? void 0 : r.hide }),
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
              kr,
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
          Sg,
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
}, Vne = Co(Yee);
function Cn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Yne(e, t) {
  const r = V.createContext(t);
  function n(a) {
    const { children: u, ...s } = a, l = V.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ Y(r.Provider, { value: l, children: u });
  }
  function i(a) {
    const u = V.useContext(r);
    if (u) return u;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return n.displayName = e + "Provider", [n, i];
}
function WS(e, t = []) {
  let r = [];
  function n(a, u) {
    const s = V.createContext(u), l = r.length;
    r = [...r, u];
    function f(h) {
      const { scope: v, children: g, ...b } = h, y = (v == null ? void 0 : v[e][l]) || s, w = V.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ Y(y.Provider, { value: w, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || s, b = V.useContext(g);
      if (b) return b;
      if (u !== void 0) return u;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((u) => V.createContext(u));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return V.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return i.scopeName = e, [n, Xee(i, ...t)];
}
function Xee(...e) {
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
      return V.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Zee = [
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
], ca = Zee.reduce((e, t) => {
  const r = V.forwardRef((n, i) => {
    const { asChild: a, ...u } = n, s = a ? mv : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Y(s, { ...u, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Jee(e, t) {
  e && vv.flushSync(() => e.dispatchEvent(t));
}
function Mo(e) {
  const t = V.useRef(e);
  return V.useEffect(() => {
    t.current = e;
  }), V.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Qee(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e);
  V.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var ete = "DismissableLayer", ov = "dismissableLayer.update", tte = "dismissableLayer.pointerDownOutside", rte = "dismissableLayer.focusOutside", k1, zS = V.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), US = V.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: u,
      onDismiss: s,
      ...l
    } = e, f = V.useContext(zS), [d, h] = V.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = V.useState({}), b = ia(t, ($) => h($)), y = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), A = y.indexOf(w), O = d ? y.indexOf(d) : -1, S = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= A, x = ate(($) => {
      const M = $.target, F = [...f.branches].some((D) => D.contains(M));
      !_ || F || (i == null || i($), u == null || u($), $.defaultPrevented || s == null || s());
    }, v), E = ote(($) => {
      const M = $.target;
      [...f.branches].some((D) => D.contains(M)) || (a == null || a($), u == null || u($), $.defaultPrevented || s == null || s());
    }, v);
    return Qee(($) => {
      O === f.layers.size - 1 && (n == null || n($), !$.defaultPrevented && s && ($.preventDefault(), s()));
    }, v), V.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (k1 = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), j1(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = k1);
        };
    }, [d, v, r, f]), V.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), j1());
    }, [d, f]), V.useEffect(() => {
      const $ = () => g({});
      return document.addEventListener(ov, $), () => document.removeEventListener(ov, $);
    }, []), /* @__PURE__ */ Y(
      ca.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Cn(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Cn(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Cn(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
US.displayName = ete;
var nte = "DismissableLayerBranch", ite = V.forwardRef((e, t) => {
  const r = V.useContext(zS), n = V.useRef(null), i = ia(t, n);
  return V.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ Y(ca.div, { ...e, ref: i });
});
ite.displayName = nte;
function ate(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e), n = V.useRef(!1), i = V.useRef(() => {
  });
  return V.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          HS(
            tte,
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
function ote(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Mo(e), n = V.useRef(!1);
  return V.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && HS(rte, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function j1() {
  const e = new CustomEvent(ov);
  document.dispatchEvent(e);
}
function HS(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? Jee(i, a) : i.dispatchEvent(a);
}
var so = globalThis != null && globalThis.document ? V.useLayoutEffect : () => {
}, ute = V.useId || (() => {
}), ste = 0;
function cte(e) {
  const [t, r] = V.useState(ute());
  return so(() => {
    r((n) => n ?? String(ste++));
  }, [e]), t ? `radix-${t}` : "";
}
const lte = ["top", "right", "bottom", "left"], gi = Math.min, hr = Math.max, Tl = Math.round, Pc = Math.floor, yi = (e) => ({
  x: e,
  y: e
}), fte = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dte = {
  start: "end",
  end: "start"
};
function uv(e, t, r) {
  return hr(e, gi(t, r));
}
function Fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function Io(e) {
  return e.split("-")[1];
}
function $g(e) {
  return e === "x" ? "y" : "x";
}
function Cg(e) {
  return e === "y" ? "height" : "width";
}
function mi(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function Mg(e) {
  return $g(mi(e));
}
function hte(e, t, r) {
  r === void 0 && (r = !1);
  const n = Io(e), i = Mg(e), a = Cg(i);
  let u = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (u = $l(u)), [u, $l(u)];
}
function pte(e) {
  const t = $l(e);
  return [sv(e), t, sv(t)];
}
function sv(e) {
  return e.replace(/start|end/g, (t) => dte[t]);
}
function vte(e, t, r) {
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
function gte(e, t, r, n) {
  const i = Io(e);
  let a = vte(Wn(e), r === "start", n);
  return i && (a = a.map((u) => u + "-" + i), t && (a = a.concat(a.map(sv)))), a;
}
function $l(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fte[t]);
}
function yte(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function GS(e) {
  return typeof e != "number" ? yte(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Cl(e) {
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
function R1(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = mi(t), u = Mg(t), s = Cg(u), l = Wn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[s] / 2 - i[s] / 2;
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
  switch (Io(t)) {
    case "start":
      g[u] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[u] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const mte = async (e, t, r) => {
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
  } = R1(f, n, l), v = n, g = {}, b = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: w,
      fn: A
    } = s[y], {
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
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, h = S ?? h, g = {
      ...g,
      [w]: {
        ...g[w],
        ..._
      }
    }, x && b <= 50 && (b++, typeof x == "object" && (x.placement && (v = x.placement), x.rects && (f = x.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: d,
      y: h
    } = R1(f, v, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: g
  };
};
async function ns(e, t) {
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
  } = Fn(t, e), b = GS(g), w = s[v ? h === "floating" ? "reference" : "floating" : h], A = Cl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(w))) == null || r ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Cl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: O,
    offsetParent: S,
    strategy: l
  }) : O);
  return {
    top: (A.top - x.top + b.top) / _.y,
    bottom: (x.bottom - A.bottom + b.bottom) / _.y,
    left: (A.left - x.left + b.left) / _.x,
    right: (x.right - A.right + b.right) / _.x
  };
}
const bte = (e) => ({
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
    } = Fn(e, t) || {};
    if (f == null)
      return {};
    const h = GS(d), v = {
      x: r,
      y: n
    }, g = Mg(i), b = Cg(g), y = await u.getDimensions(f), w = g === "y", A = w ? "top" : "left", O = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = a.reference[b] + a.reference[g] - v[g] - a.floating[b], x = v[g] - a.reference[g], E = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f));
    let $ = E ? E[S] : 0;
    (!$ || !await (u.isElement == null ? void 0 : u.isElement(E))) && ($ = s.floating[S] || a.floating[b]);
    const M = _ / 2 - x / 2, F = $ / 2 - y[b] / 2 - 1, D = gi(h[A], F), B = gi(h[O], F), N = D, U = $ - y[b] - B, z = $ / 2 - y[b] / 2 + M, J = uv(N, z, U), H = !l.arrow && Io(i) != null && z !== J && a.reference[b] / 2 - (z < N ? D : B) - y[b] / 2 < 0, Z = H ? z < N ? z - N : z - U : 0;
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
}), xte = function(e) {
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
        fallbackAxisSideDirection: b = "none",
        flipAlignment: y = !0,
        ...w
      } = Fn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const A = Wn(i), O = mi(s), S = Wn(s) === s, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), x = v || (S || !y ? [$l(s)] : pte(s)), E = b !== "none";
      !v && E && x.push(...gte(s, y, b, _));
      const $ = [s, ...x], M = await ns(t, w), F = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && F.push(M[A]), h) {
        const z = hte(i, u, _);
        F.push(M[z[0]], M[z[1]]);
      }
      if (D = [...D, {
        placement: i,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var B, N;
        const z = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, J = $[z];
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
        let H = (N = D.filter((Z) => Z.overflows[0] <= 0).sort((Z, K) => Z.overflows[1] - K.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var U;
              const Z = (U = D.filter((K) => {
                if (E) {
                  const ue = mi(K.placement);
                  return ue === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((ue) => ue > 0).reduce((ue, G) => ue + G, 0)]).sort((K, ue) => K[1] - ue[1])[0]) == null ? void 0 : U[0];
              Z && (H = Z);
              break;
            }
            case "initialPlacement":
              H = s;
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
function N1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function D1(e) {
  return lte.some((t) => e[t] >= 0);
}
const wte = function(e) {
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
          const a = await ns(t, {
            ...i,
            elementContext: "reference"
          }), u = N1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: D1(u)
            }
          };
        }
        case "escaped": {
          const a = await ns(t, {
            ...i,
            altBoundary: !0
          }), u = N1(a, r.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: D1(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function _te(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), u = Wn(r), s = Io(r), l = mi(r) === "y", f = ["left", "top"].includes(u) ? -1 : 1, d = a && l ? -1 : 1, h = Fn(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
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
  return s && typeof b == "number" && (g = s === "end" ? b * -1 : b), l ? {
    x: g * d,
    y: v * f
  } : {
    x: v * f,
    y: g * d
  };
}
const Ote = function(e) {
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
      } = t, l = await _te(t, e);
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
}, Ate = function(e) {
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
          fn: (w) => {
            let {
              x: A,
              y: O
            } = w;
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
      }, d = await ns(t, l), h = mi(Wn(i)), v = $g(h);
      let g = f[v], b = f[h];
      if (a) {
        const w = v === "y" ? "top" : "left", A = v === "y" ? "bottom" : "right", O = g + d[w], S = g - d[A];
        g = uv(O, g, S);
      }
      if (u) {
        const w = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", O = b + d[w], S = b - d[A];
        b = uv(O, b, S);
      }
      const y = s.fn({
        ...t,
        [v]: g,
        [h]: b
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
}, Ste = function(e) {
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
      } = Fn(e, t), d = {
        x: r,
        y: n
      }, h = mi(i), v = $g(h);
      let g = d[v], b = d[h];
      const y = Fn(s, t), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = v === "y" ? "height" : "width", _ = a.reference[v] - a.floating[S] + w.mainAxis, x = a.reference[v] + a.reference[S] - w.mainAxis;
        g < _ ? g = _ : g > x && (g = x);
      }
      if (f) {
        var A, O;
        const S = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Wn(i)), x = a.reference[h] - a.floating[S] + (_ && ((A = u.offset) == null ? void 0 : A[h]) || 0) + (_ ? 0 : w.crossAxis), E = a.reference[h] + a.reference[S] + (_ ? 0 : ((O = u.offset) == null ? void 0 : O[h]) || 0) - (_ ? w.crossAxis : 0);
        b < x ? b = x : b > E && (b = E);
      }
      return {
        [v]: g,
        [h]: b
      };
    }
  };
}, Pte = function(e) {
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
      } = Fn(e, t), d = await ns(t, f), h = Wn(i), v = Io(i), g = mi(i) === "y", {
        width: b,
        height: y
      } = a.floating;
      let w, A;
      h === "top" || h === "bottom" ? (w = h, A = v === (await (u.isRTL == null ? void 0 : u.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (A = h, w = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, S = b - d.left - d.right, _ = gi(y - d[w], O), x = gi(b - d[A], S), E = !t.middlewareData.shift;
      let $ = _, M = x;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (M = S), (n = t.middlewareData.shift) != null && n.enabled.y && ($ = O), E && !v) {
        const D = hr(d.left, 0), B = hr(d.right, 0), N = hr(d.top, 0), U = hr(d.bottom, 0);
        g ? M = b - 2 * (D !== 0 || B !== 0 ? D + B : hr(d.left, d.right)) : $ = y - 2 * (N !== 0 || U !== 0 ? N + U : hr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: $
      });
      const F = await u.getDimensions(s.floating);
      return b !== F.width || y !== F.height ? {
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
function ko(e) {
  return KS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yn(e) {
  var t;
  return (t = (KS(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function KS(e) {
  return vf() ? e instanceof Node || e instanceof mr(e).Node : !1;
}
function en(e) {
  return vf() ? e instanceof Element || e instanceof mr(e).Element : !1;
}
function pn(e) {
  return vf() ? e instanceof HTMLElement || e instanceof mr(e).HTMLElement : !1;
}
function L1(e) {
  return !vf() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mr(e).ShadowRoot;
}
function bs(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = tn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function Ete(e) {
  return ["table", "td", "th"].includes(ko(e));
}
function gf(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ig(e) {
  const t = kg(), r = en(e) ? tn(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Tte(e) {
  let t = bi(e);
  for (; pn(t) && !co(t); ) {
    if (Ig(t))
      return t;
    if (gf(t))
      return null;
    t = bi(t);
  }
  return null;
}
function kg() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function co(e) {
  return ["html", "body", "#document"].includes(ko(e));
}
function tn(e) {
  return mr(e).getComputedStyle(e);
}
function yf(e) {
  return en(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function bi(e) {
  if (ko(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    L1(e) && e.host || // Fallback.
    yn(e)
  );
  return L1(t) ? t.host : t;
}
function qS(e) {
  const t = bi(e);
  return co(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && bs(t) ? t : qS(t);
}
function is(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = qS(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), u = mr(i);
  if (a) {
    const s = cv(u);
    return t.concat(u, u.visualViewport || [], bs(i) ? i : [], s && r ? is(s) : []);
  }
  return t.concat(i, is(i, [], r));
}
function cv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function VS(e) {
  const t = tn(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = pn(e), a = i ? e.offsetWidth : r, u = i ? e.offsetHeight : n, s = Tl(r) !== a || Tl(n) !== u;
  return s && (r = a, n = u), {
    width: r,
    height: n,
    $: s
  };
}
function jg(e) {
  return en(e) ? e : e.contextElement;
}
function Ba(e) {
  const t = jg(e);
  if (!pn(t))
    return yi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = VS(t);
  let u = (a ? Tl(r.width) : r.width) / n, s = (a ? Tl(r.height) : r.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: u,
    y: s
  };
}
const $te = /* @__PURE__ */ yi(0);
function YS(e) {
  const t = mr(e);
  return !kg() || !t.visualViewport ? $te : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cte(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mr(e) ? !1 : t;
}
function na(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = jg(e);
  let u = yi(1);
  t && (n ? en(n) && (u = Ba(n)) : u = Ba(e));
  const s = Cte(a, r, n) ? YS(a) : yi(0);
  let l = (i.left + s.x) / u.x, f = (i.top + s.y) / u.y, d = i.width / u.x, h = i.height / u.y;
  if (a) {
    const v = mr(a), g = n && en(n) ? mr(n) : n;
    let b = v, y = cv(b);
    for (; y && n && g !== b; ) {
      const w = Ba(y), A = y.getBoundingClientRect(), O = tn(y), S = A.left + (y.clientLeft + parseFloat(O.paddingLeft)) * w.x, _ = A.top + (y.clientTop + parseFloat(O.paddingTop)) * w.y;
      l *= w.x, f *= w.y, d *= w.x, h *= w.y, l += S, f += _, b = mr(y), y = cv(b);
    }
  }
  return Cl({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function Mte(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", u = yn(n), s = t ? gf(t.floating) : !1;
  if (n === u || s && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = yi(1);
  const d = yi(0), h = pn(n);
  if ((h || !h && !a) && ((ko(n) !== "body" || bs(u)) && (l = yf(n)), pn(n))) {
    const v = na(n);
    f = Ba(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y
  };
}
function Ite(e) {
  return Array.from(e.getClientRects());
}
function lv(e, t) {
  const r = yf(e).scrollLeft;
  return t ? t.left + r : na(yn(e)).left + r;
}
function kte(e) {
  const t = yn(e), r = yf(e), n = e.ownerDocument.body, i = hr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = hr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let u = -r.scrollLeft + lv(e);
  const s = -r.scrollTop;
  return tn(n).direction === "rtl" && (u += hr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: u,
    y: s
  };
}
function jte(e, t) {
  const r = mr(e), n = yn(e), i = r.visualViewport;
  let a = n.clientWidth, u = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, u = i.height;
    const f = kg();
    (!f || f && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: u,
    x: s,
    y: l
  };
}
function Rte(e, t) {
  const r = na(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = pn(e) ? Ba(e) : yi(1), u = e.clientWidth * a.x, s = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: u,
    height: s,
    x: l,
    y: f
  };
}
function B1(e, t, r) {
  let n;
  if (t === "viewport")
    n = jte(e, r);
  else if (t === "document")
    n = kte(yn(e));
  else if (en(t))
    n = Rte(t, r);
  else {
    const i = YS(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Cl(n);
}
function XS(e, t) {
  const r = bi(e);
  return r === t || !en(r) || co(r) ? !1 : tn(r).position === "fixed" || XS(r, t);
}
function Nte(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = is(e, [], !1).filter((s) => en(s) && ko(s) !== "body"), i = null;
  const a = tn(e).position === "fixed";
  let u = a ? bi(e) : e;
  for (; en(u) && !co(u); ) {
    const s = tn(u), l = Ig(u);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || bs(u) && !l && XS(e, u)) ? n = n.filter((d) => d !== u) : i = s, u = bi(u);
  }
  return t.set(e, n), n;
}
function Dte(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const u = [...r === "clippingAncestors" ? gf(t) ? [] : Nte(t, this._c) : [].concat(r), n], s = u[0], l = u.reduce((f, d) => {
    const h = B1(t, d, i);
    return f.top = hr(h.top, f.top), f.right = gi(h.right, f.right), f.bottom = gi(h.bottom, f.bottom), f.left = hr(h.left, f.left), f;
  }, B1(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Lte(e) {
  const {
    width: t,
    height: r
  } = VS(e);
  return {
    width: t,
    height: r
  };
}
function Bte(e, t, r) {
  const n = pn(t), i = yn(t), a = r === "fixed", u = na(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yi(0);
  if (n || !n && !a)
    if ((ko(t) !== "body" || bs(i)) && (s = yf(t)), n) {
      const g = na(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else i && (l.x = lv(i));
  let f = 0, d = 0;
  if (i && !n && !a) {
    const g = i.getBoundingClientRect();
    d = g.top + s.scrollTop, f = g.left + s.scrollLeft - // RTL <body> scrollbar.
    lv(i, g);
  }
  const h = u.left + s.scrollLeft - l.x - f, v = u.top + s.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: u.width,
    height: u.height
  };
}
function Ph(e) {
  return tn(e).position === "static";
}
function F1(e, t) {
  if (!pn(e) || tn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return yn(e) === r && (r = r.ownerDocument.body), r;
}
function ZS(e, t) {
  const r = mr(e);
  if (gf(e))
    return r;
  if (!pn(e)) {
    let i = bi(e);
    for (; i && !co(i); ) {
      if (en(i) && !Ph(i))
        return i;
      i = bi(i);
    }
    return r;
  }
  let n = F1(e, t);
  for (; n && Ete(n) && Ph(n); )
    n = F1(n, t);
  return n && co(n) && Ph(n) && !Ig(n) ? r : n || Tte(e) || r;
}
const Fte = async function(e) {
  const t = this.getOffsetParent || ZS, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Bte(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Wte(e) {
  return tn(e).direction === "rtl";
}
const zte = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mte,
  getDocumentElement: yn,
  getClippingRect: Dte,
  getOffsetParent: ZS,
  getElementRects: Fte,
  getClientRects: Ite,
  getDimensions: Lte,
  getScale: Ba,
  isElement: en,
  isRTL: Wte
};
function Ute(e, t) {
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
    const g = Pc(d), b = Pc(i.clientWidth - (f + h)), y = Pc(i.clientHeight - (d + v)), w = Pc(f), O = {
      rootMargin: -g + "px " + -b + "px " + -y + "px " + -w + "px",
      threshold: hr(0, gi(1, l)) || 1
    };
    let S = !0;
    function _(x) {
      const E = x[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return u();
        E ? u(!1, E) : n = setTimeout(() => {
          u(!1, 1e-7);
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
  return u(!0), a;
}
function Hte(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = jg(e), d = i || a ? [...f ? is(f) : [], ...is(t)] : [];
  d.forEach((A) => {
    i && A.addEventListener("scroll", r, {
      passive: !0
    }), a && A.addEventListener("resize", r);
  });
  const h = f && s ? Ute(f, r) : null;
  let v = -1, g = null;
  u && (g = new ResizeObserver((A) => {
    let [O] = A;
    O && O.target === f && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), r();
  }), f && !l && g.observe(f), g.observe(t));
  let b, y = l ? na(e) : null;
  l && w();
  function w() {
    const A = na(e);
    y && (A.x !== y.x || A.y !== y.y || A.width !== y.width || A.height !== y.height) && r(), y = A, b = requestAnimationFrame(w);
  }
  return r(), () => {
    var A;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (A = g) == null || A.disconnect(), g = null, l && cancelAnimationFrame(b);
  };
}
const Gte = Ote, Kte = Ate, qte = xte, Vte = Pte, Yte = wte, W1 = bte, Xte = Ste, Zte = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: zte,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return mte(e, t, {
    ...i,
    platform: a
  });
};
var $c = typeof document < "u" ? pv : Rr;
function Ml(e, t) {
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
        if (!Ml(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ml(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function JS(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function z1(e, t) {
  const r = JS(e);
  return Math.round(t * r) / r;
}
function Eh(e) {
  const t = V.useRef(e);
  return $c(() => {
    t.current = e;
  }), t;
}
function Jte(e) {
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
  } = e, [d, h] = V.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, g] = V.useState(n);
  Ml(v, n) || g(n);
  const [b, y] = V.useState(null), [w, A] = V.useState(null), O = V.useCallback((K) => {
    K !== E.current && (E.current = K, y(K));
  }, []), S = V.useCallback((K) => {
    K !== $.current && ($.current = K, A(K));
  }, []), _ = a || b, x = u || w, E = V.useRef(null), $ = V.useRef(null), M = V.useRef(d), F = l != null, D = Eh(l), B = Eh(i), N = Eh(f), U = V.useCallback(() => {
    if (!E.current || !$.current)
      return;
    const K = {
      placement: t,
      strategy: r,
      middleware: v
    };
    B.current && (K.platform = B.current), Zte(E.current, $.current, K).then((ue) => {
      const G = {
        ...ue,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      z.current && !Ml(M.current, G) && (M.current = G, vv.flushSync(() => {
        h(G);
      }));
    });
  }, [v, t, r, B, N]);
  $c(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, h((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [f]);
  const z = V.useRef(!1);
  $c(() => (z.current = !0, () => {
    z.current = !1;
  }), []), $c(() => {
    if (_ && (E.current = _), x && ($.current = x), _ && x) {
      if (D.current)
        return D.current(_, x, U);
      U();
    }
  }, [_, x, U, D, F]);
  const J = V.useMemo(() => ({
    reference: E,
    floating: $,
    setReference: O,
    setFloating: S
  }), [O, S]), H = V.useMemo(() => ({
    reference: _,
    floating: x
  }), [_, x]), Z = V.useMemo(() => {
    const K = {
      position: r,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const ue = z1(H.floating, d.x), G = z1(H.floating, d.y);
    return s ? {
      ...K,
      transform: "translate(" + ue + "px, " + G + "px)",
      ...JS(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ue,
      top: G
    };
  }, [r, s, H.floating, d.x, d.y]);
  return V.useMemo(() => ({
    ...d,
    update: U,
    refs: J,
    elements: H,
    floatingStyles: Z
  }), [d, U, J, H, Z]);
}
const Qte = (e) => {
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
      return n && t(n) ? n.current != null ? W1({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? W1({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, ere = (e, t) => ({
  ...Gte(e),
  options: [e, t]
}), tre = (e, t) => ({
  ...Kte(e),
  options: [e, t]
}), rre = (e, t) => ({
  ...Xte(e),
  options: [e, t]
}), nre = (e, t) => ({
  ...qte(e),
  options: [e, t]
}), ire = (e, t) => ({
  ...Vte(e),
  options: [e, t]
}), are = (e, t) => ({
  ...Yte(e),
  options: [e, t]
}), ore = (e, t) => ({
  ...Qte(e),
  options: [e, t]
});
var ure = "Arrow", QS = V.forwardRef((e, t) => {
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
QS.displayName = ure;
var sre = QS;
function cre(e) {
  const [t, r] = V.useState(void 0);
  return so(() => {
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
var Rg = "Popper", [eP, tP] = WS(Rg), [lre, rP] = eP(Rg), nP = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = V.useState(null);
  return /* @__PURE__ */ Y(lre, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
nP.displayName = Rg;
var iP = "PopperAnchor", aP = V.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = rP(iP, r), u = V.useRef(null), s = ia(t, u);
    return V.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || u.current);
    }), n ? null : /* @__PURE__ */ Y(ca.div, { ...i, ref: s });
  }
);
aP.displayName = iP;
var Ng = "PopperContent", [fre, dre] = eP(Ng), oP = V.forwardRef(
  (e, t) => {
    var ye, we, ne, se, pe, j;
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
      onPlaced: b,
      ...y
    } = e, w = rP(Ng, r), [A, O] = V.useState(null), S = ia(t, (Ee) => O(Ee)), [_, x] = V.useState(null), E = cre(_), $ = (E == null ? void 0 : E.width) ?? 0, M = (E == null ? void 0 : E.height) ?? 0, F = n + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(f) ? f : [f], N = B.length > 0, U = {
      padding: D,
      boundary: B.filter(pre),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: z, floatingStyles: J, placement: H, isPositioned: Z, middlewareData: K } = Jte({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...Ee) => Hte(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        ere({ mainAxis: i + M, alignmentAxis: u }),
        l && tre({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? rre() : void 0,
          ...U
        }),
        l && nre({ ...U }),
        ire({
          ...U,
          apply: ({ elements: Ee, rects: be, availableWidth: We, availableHeight: lt }) => {
            const { width: at, height: Vt } = be.reference, Fr = Ee.floating.style;
            Fr.setProperty("--radix-popper-available-width", `${We}px`), Fr.setProperty("--radix-popper-available-height", `${lt}px`), Fr.setProperty("--radix-popper-anchor-width", `${at}px`), Fr.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        _ && ore({ element: _, padding: s }),
        vre({ arrowWidth: $, arrowHeight: M }),
        v && are({ strategy: "referenceHidden", ...U })
      ]
    }), [ue, G] = cP(H), X = Mo(b);
    so(() => {
      Z && (X == null || X());
    }, [Z, X]);
    const ae = (ye = K.arrow) == null ? void 0 : ye.x, ce = (we = K.arrow) == null ? void 0 : we.y, he = ((ne = K.arrow) == null ? void 0 : ne.centerOffset) !== 0, [ge, xe] = V.useState();
    return so(() => {
      A && xe(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ Y(
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
            (se = K.transformOrigin) == null ? void 0 : se.x,
            (pe = K.transformOrigin) == null ? void 0 : pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = K.hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ Y(
          fre,
          {
            scope: r,
            placedSide: ue,
            onArrowChange: x,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: he,
            children: /* @__PURE__ */ Y(
              ca.div,
              {
                "data-side": ue,
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
oP.displayName = Ng;
var uP = "PopperArrow", hre = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, sP = V.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = dre(uP, n), u = hre[a.placedSide];
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
          sre,
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
sP.displayName = uP;
function pre(e) {
  return e !== null;
}
var vre = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, A, O;
    const { placement: r, rects: n, middlewareData: i } = t, u = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, s = u ? 0 : e.arrowWidth, l = u ? 0 : e.arrowHeight, [f, d] = cP(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((A = i.arrow) == null ? void 0 : A.x) ?? 0) + s / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let b = "", y = "";
    return f === "bottom" ? (b = u ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (b = u ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (b = `${-l}px`, y = u ? h : `${g}px`) : f === "left" && (b = `${n.floating.width + l}px`, y = u ? h : `${g}px`), { data: { x: b, y } };
  }
});
function cP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var gre = nP, yre = aP, mre = oP, bre = sP;
function xre(e, t) {
  return V.useReducer((r, n) => t[r][n] ?? r, e);
}
var lP = (e) => {
  const { present: t, children: r } = e, n = wre(t), i = typeof r == "function" ? r({ present: n.isPresent }) : V.Children.only(r), a = ia(n.ref, _re(i));
  return typeof r == "function" || n.isPresent ? V.cloneElement(i, { ref: a }) : null;
};
lP.displayName = "Presence";
function wre(e) {
  const [t, r] = V.useState(), n = V.useRef({}), i = V.useRef(e), a = V.useRef("none"), u = e ? "mounted" : "unmounted", [s, l] = xre(u, {
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
  return V.useEffect(() => {
    const f = Ec(n.current);
    a.current = s === "mounted" ? f : "none";
  }, [s]), so(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, g = Ec(f);
      e ? l("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), so(() => {
    if (t) {
      const f = (h) => {
        const g = Ec(n.current).includes(h.animationName);
        h.target === t && g && vv.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Ec(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: V.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Ec(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function _re(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Ore({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = Are({ defaultProp: t, onChange: r }), a = e !== void 0, u = a ? e : n, s = Mo(r), l = V.useCallback(
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
function Are({
  defaultProp: e,
  onChange: t
}) {
  const r = V.useState(e), [n] = r, i = V.useRef(n), a = Mo(t);
  return V.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var Sre = "VisuallyHidden", fP = V.forwardRef(
  (e, t) => /* @__PURE__ */ Y(
    ca.span,
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
fP.displayName = Sre;
var Pre = fP, [mf, Xne] = WS("Tooltip", [
  tP
]), bf = tP(), dP = "TooltipProvider", Ere = 700, fv = "tooltip.open", [Tre, Dg] = mf(dP), hP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Ere,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [u, s] = V.useState(!0), l = V.useRef(!1), f = V.useRef(0);
  return V.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ Y(
    Tre,
    {
      scope: t,
      isOpenDelayed: u,
      delayDuration: r,
      onOpen: V.useCallback(() => {
        window.clearTimeout(f.current), s(!1);
      }, []),
      onClose: V.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: V.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
hP.displayName = dP;
var xf = "Tooltip", [$re, wf] = mf(xf), pP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: u,
    delayDuration: s
  } = e, l = Dg(xf, e.__scopeTooltip), f = bf(t), [d, h] = V.useState(null), v = cte(), g = V.useRef(0), b = u ?? l.disableHoverableContent, y = s ?? l.delayDuration, w = V.useRef(!1), [A = !1, O] = Ore({
    prop: n,
    defaultProp: i,
    onChange: ($) => {
      $ ? (l.onOpen(), document.dispatchEvent(new CustomEvent(fv))) : l.onClose(), a == null || a($);
    }
  }), S = V.useMemo(() => A ? w.current ? "delayed-open" : "instant-open" : "closed", [A]), _ = V.useCallback(() => {
    window.clearTimeout(g.current), w.current = !1, O(!0);
  }, [O]), x = V.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = V.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      w.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return V.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ Y(gre, { ...f, children: /* @__PURE__ */ Y(
    $re,
    {
      scope: t,
      contentId: v,
      open: A,
      stateAttribute: S,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: V.useCallback(() => {
        l.isOpenDelayed ? E() : _();
      }, [l.isOpenDelayed, E, _]),
      onTriggerLeave: V.useCallback(() => {
        b ? x() : window.clearTimeout(g.current);
      }, [x, b]),
      onOpen: _,
      onClose: x,
      disableHoverableContent: b,
      children: r
    }
  ) });
};
pP.displayName = xf;
var dv = "TooltipTrigger", vP = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = wf(dv, r), a = Dg(dv, r), u = bf(r), s = V.useRef(null), l = ia(t, s, i.onTriggerChange), f = V.useRef(!1), d = V.useRef(!1), h = V.useCallback(() => f.current = !1, []);
    return V.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ Y(yre, { asChild: !0, ...u, children: /* @__PURE__ */ Y(
      ca.button,
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
vP.displayName = dv;
var Cre = "TooltipPortal", [Zne, Mre] = mf(Cre, {
  forceMount: void 0
}), lo = "TooltipContent", gP = V.forwardRef(
  (e, t) => {
    const r = Mre(lo, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, u = wf(lo, e.__scopeTooltip);
    return /* @__PURE__ */ Y(lP, { present: n || u.open, children: u.disableHoverableContent ? /* @__PURE__ */ Y(yP, { side: i, ...a, ref: t }) : /* @__PURE__ */ Y(Ire, { side: i, ...a, ref: t }) });
  }
), Ire = V.forwardRef((e, t) => {
  const r = wf(lo, e.__scopeTooltip), n = Dg(lo, e.__scopeTooltip), i = V.useRef(null), a = ia(t, i), [u, s] = V.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = V.useCallback(() => {
    s(null), h(!1);
  }, [h]), g = V.useCallback(
    (b, y) => {
      const w = b.currentTarget, A = { x: b.clientX, y: b.clientY }, O = Nre(A, w.getBoundingClientRect()), S = Dre(A, O), _ = Lre(y.getBoundingClientRect()), x = Fre([...S, ..._]);
      s(x), h(!0);
    },
    [h]
  );
  return V.useEffect(() => () => v(), [v]), V.useEffect(() => {
    if (l && d) {
      const b = (w) => g(w, d), y = (w) => g(w, l);
      return l.addEventListener("pointerleave", b), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), V.useEffect(() => {
    if (u) {
      const b = (y) => {
        const w = y.target, A = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)), S = !Bre(A, u);
        O ? v() : S && (v(), f());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, d, u, f, v]), /* @__PURE__ */ Y(yP, { ...e, ref: a });
}), [kre, jre] = mf(xf, { isInside: !1 }), yP = V.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      ...s
    } = e, l = wf(lo, r), f = bf(r), { onClose: d } = l;
    return V.useEffect(() => (document.addEventListener(fv, d), () => document.removeEventListener(fv, d)), [d]), V.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ Y(
      US,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: u,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ Qe(
          mre,
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
              /* @__PURE__ */ Y(u_, { children: n }),
              /* @__PURE__ */ Y(kre, { scope: r, isInside: !0, children: /* @__PURE__ */ Y(Pre, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
gP.displayName = lo;
var mP = "TooltipArrow", Rre = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = bf(r);
    return jre(
      mP,
      r
    ).isInside ? null : /* @__PURE__ */ Y(bre, { ...i, ...n, ref: t });
  }
);
Rre.displayName = mP;
function Nre(e, t) {
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
function Dre(e, t, r = 5) {
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
function Lre(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function Bre(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, u = t.length - 1; a < t.length; u = a++) {
    const s = t[a].x, l = t[a].y, f = t[u].x, d = t[u].y;
    l > n != d > n && r < (f - s) * (n - l) / (d - l) + s && (i = !i);
  }
  return i;
}
function Fre(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Wre(t);
}
function Wre(e) {
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
var zre = hP, Ure = pP, Hre = vP, bP = gP;
const Gre = zre, Kre = Ure, qre = Hre, xP = V.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ Y(
  bP,
  {
    ref: n,
    sideOffset: t,
    className: Ht(
      "z-50 overflow-hidden rounded bg-f1-background-bold px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
xP.displayName = bP.displayName;
const Vre = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ Qe(Gre, { children: [
    /* @__PURE__ */ Y("div", { className: "w-full", ref: r, children: /* @__PURE__ */ Y("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const u = i.value / n * 100, s = i.color || Nn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ Qe(Kre, { children: [
        /* @__PURE__ */ Y(
          qre,
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
        /* @__PURE__ */ Qe(xP, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ Y(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: s }
            }
          ),
          /* @__PURE__ */ Y("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ Qe("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
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
          return /* @__PURE__ */ Qe(
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
                /* @__PURE__ */ Y("span", { className: "text text-sm font-medium tracking-wide text-f1-foreground", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, Jne = Co(Vre), Yre = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, u) => {
  const s = Object.keys(t), l = Tg(e), f = Math.max(
    ...l.flatMap(
      (d) => s.map(
        (h) => hf(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(To, { config: t, ref: u, aspect: a, children: /* @__PURE__ */ Qe(
    Dee,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ Y(gs, { ...pf() }),
        !(r != null && r.hide) && /* @__PURE__ */ Y(Kn, { ...Pg(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ Y(
          qn,
          {
            ...Eg(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ Y(
          ms,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y($o, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        s.map((d, h) => /* @__PURE__ */ Y(
          ys,
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
}, Qne = Co(Yre), Xre = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
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
    To,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Qe(Lee, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        l !== 0 && /* @__PURE__ */ Y(
          ms,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y($o, { yAxisFormatter: i })
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
              Pt,
              {
                content: ({ viewBox: f }) => {
                  if (f && "cx" in f && "cy" in f)
                    return /* @__PURE__ */ Qe(
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
          Sg,
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
}, eie = Co(Xre);
var Il = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Il.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", s = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, b = 1, y = 2, w = 1, A = 2, O = 4, S = 8, _ = 16, x = 32, E = 64, $ = 128, M = 256, F = 512, D = 30, B = "...", N = 800, U = 16, z = 1, J = 2, H = 3, Z = 1 / 0, K = 9007199254740991, ue = 17976931348623157e292, G = NaN, X = 4294967295, ae = X - 1, ce = X >>> 1, he = [
      ["ary", $],
      ["bind", w],
      ["bindKey", A],
      ["curry", S],
      ["curryRight", _],
      ["flip", F],
      ["partial", x],
      ["partialRight", E],
      ["rearg", M]
    ], ge = "[object Arguments]", xe = "[object Array]", ye = "[object AsyncFunction]", we = "[object Boolean]", ne = "[object Date]", se = "[object DOMException]", pe = "[object Error]", j = "[object Function]", Ee = "[object GeneratorFunction]", be = "[object Map]", We = "[object Number]", lt = "[object Null]", at = "[object Object]", Vt = "[object Promise]", Fr = "[object Proxy]", nr = "[object RegExp]", gt = "[object Set]", mn = "[object String]", Vn = "[object Symbol]", jo = "[object Undefined]", Yn = "[object WeakMap]", ws = "[object WeakSet]", Ro = "[object ArrayBuffer]", la = "[object DataView]", _f = "[object Float32Array]", Of = "[object Float64Array]", Af = "[object Int8Array]", Sf = "[object Int16Array]", Pf = "[object Int32Array]", Ef = "[object Uint8Array]", Tf = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Cf = "[object Uint32Array]", SP = /\b__p \+= '';/g, PP = /\b(__p \+=) '' \+/g, EP = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Fg = /&(?:amp|lt|gt|quot|#39);/g, Wg = /[&<>"']/g, TP = RegExp(Fg.source), $P = RegExp(Wg.source), CP = /<%-([\s\S]+?)%>/g, MP = /<%([\s\S]+?)%>/g, zg = /<%=([\s\S]+?)%>/g, IP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kP = /^\w*$/, jP = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mf = /[\\^$.*+?()[\]{}|]/g, RP = RegExp(Mf.source), If = /^\s+/, NP = /\s/, DP = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, LP = /\{\n\/\* \[wrapped with (.+)\] \*/, BP = /,? & /, FP = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, WP = /[()=,{}\[\]\/\s]/, zP = /\\(\\)?/g, UP = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ug = /\w*$/, HP = /^[-+]0x[0-9a-f]+$/i, GP = /^0b[01]+$/i, KP = /^\[object .+?Constructor\]$/, qP = /^0o[0-7]+$/i, VP = /^(?:0|[1-9]\d*)$/, YP = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _s = /($^)/, XP = /['\n\r\u2028\u2029\\]/g, Os = "\\ud800-\\udfff", ZP = "\\u0300-\\u036f", JP = "\\ufe20-\\ufe2f", QP = "\\u20d0-\\u20ff", Hg = ZP + JP + QP, Gg = "\\u2700-\\u27bf", Kg = "a-z\\xdf-\\xf6\\xf8-\\xff", eE = "\\xac\\xb1\\xd7\\xf7", tE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rE = "\\u2000-\\u206f", nE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Vg = "\\ufe0e\\ufe0f", Yg = eE + tE + rE + nE, kf = "['’]", iE = "[" + Os + "]", Xg = "[" + Yg + "]", As = "[" + Hg + "]", Zg = "\\d+", aE = "[" + Gg + "]", Jg = "[" + Kg + "]", Qg = "[^" + Os + Yg + Zg + Gg + Kg + qg + "]", jf = "\\ud83c[\\udffb-\\udfff]", oE = "(?:" + As + "|" + jf + ")", ey = "[^" + Os + "]", Rf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Nf = "[\\ud800-\\udbff][\\udc00-\\udfff]", fa = "[" + qg + "]", ty = "\\u200d", ry = "(?:" + Jg + "|" + Qg + ")", uE = "(?:" + fa + "|" + Qg + ")", ny = "(?:" + kf + "(?:d|ll|m|re|s|t|ve))?", iy = "(?:" + kf + "(?:D|LL|M|RE|S|T|VE))?", ay = oE + "?", oy = "[" + Vg + "]?", sE = "(?:" + ty + "(?:" + [ey, Rf, Nf].join("|") + ")" + oy + ay + ")*", cE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", lE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", uy = oy + ay + sE, fE = "(?:" + [aE, Rf, Nf].join("|") + ")" + uy, dE = "(?:" + [ey + As + "?", As, Rf, Nf, iE].join("|") + ")", hE = RegExp(kf, "g"), pE = RegExp(As, "g"), Df = RegExp(jf + "(?=" + jf + ")|" + dE + uy, "g"), vE = RegExp([
      fa + "?" + Jg + "+" + ny + "(?=" + [Xg, fa, "$"].join("|") + ")",
      uE + "+" + iy + "(?=" + [Xg, fa + ry, "$"].join("|") + ")",
      fa + "?" + ry + "+" + ny,
      fa + "+" + iy,
      lE,
      cE,
      Zg,
      fE
    ].join("|"), "g"), gE = RegExp("[" + ty + Os + Hg + Vg + "]"), yE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, mE = [
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
    ], bE = -1, ot = {};
    ot[_f] = ot[Of] = ot[Af] = ot[Sf] = ot[Pf] = ot[Ef] = ot[Tf] = ot[$f] = ot[Cf] = !0, ot[ge] = ot[xe] = ot[Ro] = ot[we] = ot[la] = ot[ne] = ot[pe] = ot[j] = ot[be] = ot[We] = ot[at] = ot[nr] = ot[gt] = ot[mn] = ot[Yn] = !1;
    var rt = {};
    rt[ge] = rt[xe] = rt[Ro] = rt[la] = rt[we] = rt[ne] = rt[_f] = rt[Of] = rt[Af] = rt[Sf] = rt[Pf] = rt[be] = rt[We] = rt[at] = rt[nr] = rt[gt] = rt[mn] = rt[Vn] = rt[Ef] = rt[Tf] = rt[$f] = rt[Cf] = !0, rt[pe] = rt[j] = rt[Yn] = !1;
    var xE = {
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
    }, wE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, _E = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, OE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, AE = parseFloat, SE = parseInt, sy = typeof pr == "object" && pr && pr.Object === Object && pr, PE = typeof self == "object" && self && self.Object === Object && self, kt = sy || PE || Function("return this")(), Lf = t && !t.nodeType && t, Ei = Lf && !0 && e && !e.nodeType && e, cy = Ei && Ei.exports === Lf, Bf = cy && sy.process, br = function() {
      try {
        var L = Ei && Ei.require && Ei.require("util").types;
        return L || Bf && Bf.binding && Bf.binding("util");
      } catch {
      }
    }(), ly = br && br.isArrayBuffer, fy = br && br.isDate, dy = br && br.isMap, hy = br && br.isRegExp, py = br && br.isSet, vy = br && br.isTypedArray;
    function ir(L, Q, q) {
      switch (q.length) {
        case 0:
          return L.call(Q);
        case 1:
          return L.call(Q, q[0]);
        case 2:
          return L.call(Q, q[0], q[1]);
        case 3:
          return L.call(Q, q[0], q[1], q[2]);
      }
      return L.apply(Q, q);
    }
    function EE(L, Q, q, fe) {
      for (var $e = -1, He = L == null ? 0 : L.length; ++$e < He; ) {
        var wt = L[$e];
        Q(fe, wt, q(wt), L);
      }
      return fe;
    }
    function xr(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length; ++q < fe && Q(L[q], q, L) !== !1; )
        ;
      return L;
    }
    function TE(L, Q) {
      for (var q = L == null ? 0 : L.length; q-- && Q(L[q], q, L) !== !1; )
        ;
      return L;
    }
    function gy(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length; ++q < fe; )
        if (!Q(L[q], q, L))
          return !1;
      return !0;
    }
    function Xn(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length, $e = 0, He = []; ++q < fe; ) {
        var wt = L[q];
        Q(wt, q, L) && (He[$e++] = wt);
      }
      return He;
    }
    function Ss(L, Q) {
      var q = L == null ? 0 : L.length;
      return !!q && da(L, Q, 0) > -1;
    }
    function Ff(L, Q, q) {
      for (var fe = -1, $e = L == null ? 0 : L.length; ++fe < $e; )
        if (q(Q, L[fe]))
          return !0;
      return !1;
    }
    function ft(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length, $e = Array(fe); ++q < fe; )
        $e[q] = Q(L[q], q, L);
      return $e;
    }
    function Zn(L, Q) {
      for (var q = -1, fe = Q.length, $e = L.length; ++q < fe; )
        L[$e + q] = Q[q];
      return L;
    }
    function Wf(L, Q, q, fe) {
      var $e = -1, He = L == null ? 0 : L.length;
      for (fe && He && (q = L[++$e]); ++$e < He; )
        q = Q(q, L[$e], $e, L);
      return q;
    }
    function $E(L, Q, q, fe) {
      var $e = L == null ? 0 : L.length;
      for (fe && $e && (q = L[--$e]); $e--; )
        q = Q(q, L[$e], $e, L);
      return q;
    }
    function zf(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length; ++q < fe; )
        if (Q(L[q], q, L))
          return !0;
      return !1;
    }
    var CE = Uf("length");
    function ME(L) {
      return L.split("");
    }
    function IE(L) {
      return L.match(FP) || [];
    }
    function yy(L, Q, q) {
      var fe;
      return q(L, function($e, He, wt) {
        if (Q($e, He, wt))
          return fe = He, !1;
      }), fe;
    }
    function Ps(L, Q, q, fe) {
      for (var $e = L.length, He = q + (fe ? 1 : -1); fe ? He-- : ++He < $e; )
        if (Q(L[He], He, L))
          return He;
      return -1;
    }
    function da(L, Q, q) {
      return Q === Q ? HE(L, Q, q) : Ps(L, my, q);
    }
    function kE(L, Q, q, fe) {
      for (var $e = q - 1, He = L.length; ++$e < He; )
        if (fe(L[$e], Q))
          return $e;
      return -1;
    }
    function my(L) {
      return L !== L;
    }
    function by(L, Q) {
      var q = L == null ? 0 : L.length;
      return q ? Gf(L, Q) / q : G;
    }
    function Uf(L) {
      return function(Q) {
        return Q == null ? r : Q[L];
      };
    }
    function Hf(L) {
      return function(Q) {
        return L == null ? r : L[Q];
      };
    }
    function xy(L, Q, q, fe, $e) {
      return $e(L, function(He, wt, et) {
        q = fe ? (fe = !1, He) : Q(q, He, wt, et);
      }), q;
    }
    function jE(L, Q) {
      var q = L.length;
      for (L.sort(Q); q--; )
        L[q] = L[q].value;
      return L;
    }
    function Gf(L, Q) {
      for (var q, fe = -1, $e = L.length; ++fe < $e; ) {
        var He = Q(L[fe]);
        He !== r && (q = q === r ? He : q + He);
      }
      return q;
    }
    function Kf(L, Q) {
      for (var q = -1, fe = Array(L); ++q < L; )
        fe[q] = Q(q);
      return fe;
    }
    function RE(L, Q) {
      return ft(Q, function(q) {
        return [q, L[q]];
      });
    }
    function wy(L) {
      return L && L.slice(0, Sy(L) + 1).replace(If, "");
    }
    function ar(L) {
      return function(Q) {
        return L(Q);
      };
    }
    function qf(L, Q) {
      return ft(Q, function(q) {
        return L[q];
      });
    }
    function No(L, Q) {
      return L.has(Q);
    }
    function _y(L, Q) {
      for (var q = -1, fe = L.length; ++q < fe && da(Q, L[q], 0) > -1; )
        ;
      return q;
    }
    function Oy(L, Q) {
      for (var q = L.length; q-- && da(Q, L[q], 0) > -1; )
        ;
      return q;
    }
    function NE(L, Q) {
      for (var q = L.length, fe = 0; q--; )
        L[q] === Q && ++fe;
      return fe;
    }
    var DE = Hf(xE), LE = Hf(wE);
    function BE(L) {
      return "\\" + OE[L];
    }
    function FE(L, Q) {
      return L == null ? r : L[Q];
    }
    function ha(L) {
      return gE.test(L);
    }
    function WE(L) {
      return yE.test(L);
    }
    function zE(L) {
      for (var Q, q = []; !(Q = L.next()).done; )
        q.push(Q.value);
      return q;
    }
    function Vf(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe, $e) {
        q[++Q] = [$e, fe];
      }), q;
    }
    function Ay(L, Q) {
      return function(q) {
        return L(Q(q));
      };
    }
    function Jn(L, Q) {
      for (var q = -1, fe = L.length, $e = 0, He = []; ++q < fe; ) {
        var wt = L[q];
        (wt === Q || wt === d) && (L[q] = d, He[$e++] = q);
      }
      return He;
    }
    function Es(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe) {
        q[++Q] = fe;
      }), q;
    }
    function UE(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe) {
        q[++Q] = [fe, fe];
      }), q;
    }
    function HE(L, Q, q) {
      for (var fe = q - 1, $e = L.length; ++fe < $e; )
        if (L[fe] === Q)
          return fe;
      return -1;
    }
    function GE(L, Q, q) {
      for (var fe = q + 1; fe--; )
        if (L[fe] === Q)
          return fe;
      return fe;
    }
    function pa(L) {
      return ha(L) ? qE(L) : CE(L);
    }
    function Wr(L) {
      return ha(L) ? VE(L) : ME(L);
    }
    function Sy(L) {
      for (var Q = L.length; Q-- && NP.test(L.charAt(Q)); )
        ;
      return Q;
    }
    var KE = Hf(_E);
    function qE(L) {
      for (var Q = Df.lastIndex = 0; Df.test(L); )
        ++Q;
      return Q;
    }
    function VE(L) {
      return L.match(Df) || [];
    }
    function YE(L) {
      return L.match(vE) || [];
    }
    var XE = function L(Q) {
      Q = Q == null ? kt : va.defaults(kt.Object(), Q, va.pick(kt, mE));
      var q = Q.Array, fe = Q.Date, $e = Q.Error, He = Q.Function, wt = Q.Math, et = Q.Object, Yf = Q.RegExp, ZE = Q.String, wr = Q.TypeError, Ts = q.prototype, JE = He.prototype, ga = et.prototype, $s = Q["__core-js_shared__"], Cs = JE.toString, Xe = ga.hasOwnProperty, QE = 0, Py = function() {
        var o = /[^.]+$/.exec($s && $s.keys && $s.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), Ms = ga.toString, eT = Cs.call(et), tT = kt._, rT = Yf(
        "^" + Cs.call(Xe).replace(Mf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Is = cy ? Q.Buffer : r, Qn = Q.Symbol, ks = Q.Uint8Array, Ey = Is ? Is.allocUnsafe : r, js = Ay(et.getPrototypeOf, et), Ty = et.create, $y = ga.propertyIsEnumerable, Rs = Ts.splice, Cy = Qn ? Qn.isConcatSpreadable : r, Do = Qn ? Qn.iterator : r, Ti = Qn ? Qn.toStringTag : r, Ns = function() {
        try {
          var o = ki(et, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), nT = Q.clearTimeout !== kt.clearTimeout && Q.clearTimeout, iT = fe && fe.now !== kt.Date.now && fe.now, aT = Q.setTimeout !== kt.setTimeout && Q.setTimeout, Ds = wt.ceil, Ls = wt.floor, Xf = et.getOwnPropertySymbols, oT = Is ? Is.isBuffer : r, My = Q.isFinite, uT = Ts.join, sT = Ay(et.keys, et), _t = wt.max, Nt = wt.min, cT = fe.now, lT = Q.parseInt, Iy = wt.random, fT = Ts.reverse, Zf = ki(Q, "DataView"), Lo = ki(Q, "Map"), Jf = ki(Q, "Promise"), ya = ki(Q, "Set"), Bo = ki(Q, "WeakMap"), Fo = ki(et, "create"), Bs = Bo && new Bo(), ma = {}, dT = ji(Zf), hT = ji(Lo), pT = ji(Jf), vT = ji(ya), gT = ji(Bo), Fs = Qn ? Qn.prototype : r, Wo = Fs ? Fs.valueOf : r, ky = Fs ? Fs.toString : r;
      function T(o) {
        if (vt(o) && !Ce(o) && !(o instanceof Be)) {
          if (o instanceof _r)
            return o;
          if (Xe.call(o, "__wrapped__"))
            return jm(o);
        }
        return new _r(o);
      }
      var ba = /* @__PURE__ */ function() {
        function o() {
        }
        return function(c) {
          if (!pt(c))
            return {};
          if (Ty)
            return Ty(c);
          o.prototype = c;
          var p = new o();
          return o.prototype = r, p;
        };
      }();
      function Ws() {
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
        escape: CP,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: MP,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: zg,
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
      }, T.prototype = Ws.prototype, T.prototype.constructor = T, _r.prototype = ba(Ws.prototype), _r.prototype.constructor = _r;
      function Be(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
      }
      function yT() {
        var o = new Be(this.__wrapped__);
        return o.__actions__ = Yt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Yt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Yt(this.__views__), o;
      }
      function mT() {
        if (this.__filtered__) {
          var o = new Be(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function bT() {
        var o = this.__wrapped__.value(), c = this.__dir__, p = Ce(o), m = c < 0, P = p ? o.length : 0, C = M$(0, P, this.__views__), I = C.start, R = C.end, W = R - I, ee = m ? R : I - 1, te = this.__iteratees__, ie = te.length, le = 0, ve = Nt(W, this.__takeCount__);
        if (!p || !m && P == W && ve == W)
          return nm(o, this.__actions__);
        var Oe = [];
        e:
          for (; W-- && le < ve; ) {
            ee += c;
            for (var Re = -1, Ae = o[ee]; ++Re < ie; ) {
              var De = te[Re], Fe = De.iteratee, sr = De.type, zt = Fe(Ae);
              if (sr == J)
                Ae = zt;
              else if (!zt) {
                if (sr == z)
                  continue e;
                break e;
              }
            }
            Oe[le++] = Ae;
          }
        return Oe;
      }
      Be.prototype = ba(Ws.prototype), Be.prototype.constructor = Be;
      function $i(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function xT() {
        this.__data__ = Fo ? Fo(null) : {}, this.size = 0;
      }
      function wT(o) {
        var c = this.has(o) && delete this.__data__[o];
        return this.size -= c ? 1 : 0, c;
      }
      function _T(o) {
        var c = this.__data__;
        if (Fo) {
          var p = c[o];
          return p === l ? r : p;
        }
        return Xe.call(c, o) ? c[o] : r;
      }
      function OT(o) {
        var c = this.__data__;
        return Fo ? c[o] !== r : Xe.call(c, o);
      }
      function AT(o, c) {
        var p = this.__data__;
        return this.size += this.has(o) ? 0 : 1, p[o] = Fo && c === r ? l : c, this;
      }
      $i.prototype.clear = xT, $i.prototype.delete = wT, $i.prototype.get = _T, $i.prototype.has = OT, $i.prototype.set = AT;
      function bn(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function ST() {
        this.__data__ = [], this.size = 0;
      }
      function PT(o) {
        var c = this.__data__, p = zs(c, o);
        if (p < 0)
          return !1;
        var m = c.length - 1;
        return p == m ? c.pop() : Rs.call(c, p, 1), --this.size, !0;
      }
      function ET(o) {
        var c = this.__data__, p = zs(c, o);
        return p < 0 ? r : c[p][1];
      }
      function TT(o) {
        return zs(this.__data__, o) > -1;
      }
      function $T(o, c) {
        var p = this.__data__, m = zs(p, o);
        return m < 0 ? (++this.size, p.push([o, c])) : p[m][1] = c, this;
      }
      bn.prototype.clear = ST, bn.prototype.delete = PT, bn.prototype.get = ET, bn.prototype.has = TT, bn.prototype.set = $T;
      function xn(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++c < p; ) {
          var m = o[c];
          this.set(m[0], m[1]);
        }
      }
      function CT() {
        this.size = 0, this.__data__ = {
          hash: new $i(),
          map: new (Lo || bn)(),
          string: new $i()
        };
      }
      function MT(o) {
        var c = ec(this, o).delete(o);
        return this.size -= c ? 1 : 0, c;
      }
      function IT(o) {
        return ec(this, o).get(o);
      }
      function kT(o) {
        return ec(this, o).has(o);
      }
      function jT(o, c) {
        var p = ec(this, o), m = p.size;
        return p.set(o, c), this.size += p.size == m ? 0 : 1, this;
      }
      xn.prototype.clear = CT, xn.prototype.delete = MT, xn.prototype.get = IT, xn.prototype.has = kT, xn.prototype.set = jT;
      function Ci(o) {
        var c = -1, p = o == null ? 0 : o.length;
        for (this.__data__ = new xn(); ++c < p; )
          this.add(o[c]);
      }
      function RT(o) {
        return this.__data__.set(o, l), this;
      }
      function NT(o) {
        return this.__data__.has(o);
      }
      Ci.prototype.add = Ci.prototype.push = RT, Ci.prototype.has = NT;
      function zr(o) {
        var c = this.__data__ = new bn(o);
        this.size = c.size;
      }
      function DT() {
        this.__data__ = new bn(), this.size = 0;
      }
      function LT(o) {
        var c = this.__data__, p = c.delete(o);
        return this.size = c.size, p;
      }
      function BT(o) {
        return this.__data__.get(o);
      }
      function FT(o) {
        return this.__data__.has(o);
      }
      function WT(o, c) {
        var p = this.__data__;
        if (p instanceof bn) {
          var m = p.__data__;
          if (!Lo || m.length < i - 1)
            return m.push([o, c]), this.size = ++p.size, this;
          p = this.__data__ = new xn(m);
        }
        return p.set(o, c), this.size = p.size, this;
      }
      zr.prototype.clear = DT, zr.prototype.delete = LT, zr.prototype.get = BT, zr.prototype.has = FT, zr.prototype.set = WT;
      function jy(o, c) {
        var p = Ce(o), m = !p && Ri(o), P = !p && !m && ii(o), C = !p && !m && !P && Oa(o), I = p || m || P || C, R = I ? Kf(o.length, ZE) : [], W = R.length;
        for (var ee in o)
          (c || Xe.call(o, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          C && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          An(ee, W))) && R.push(ee);
        return R;
      }
      function Ry(o) {
        var c = o.length;
        return c ? o[cd(0, c - 1)] : r;
      }
      function zT(o, c) {
        return tc(Yt(o), Mi(c, 0, o.length));
      }
      function UT(o) {
        return tc(Yt(o));
      }
      function Qf(o, c, p) {
        (p !== r && !Ur(o[c], p) || p === r && !(c in o)) && wn(o, c, p);
      }
      function zo(o, c, p) {
        var m = o[c];
        (!(Xe.call(o, c) && Ur(m, p)) || p === r && !(c in o)) && wn(o, c, p);
      }
      function zs(o, c) {
        for (var p = o.length; p--; )
          if (Ur(o[p][0], c))
            return p;
        return -1;
      }
      function HT(o, c, p, m) {
        return ei(o, function(P, C, I) {
          c(m, P, p(P), I);
        }), m;
      }
      function Ny(o, c) {
        return o && an(c, $t(c), o);
      }
      function GT(o, c) {
        return o && an(c, Zt(c), o);
      }
      function wn(o, c, p) {
        c == "__proto__" && Ns ? Ns(o, c, {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        }) : o[c] = p;
      }
      function ed(o, c) {
        for (var p = -1, m = c.length, P = q(m), C = o == null; ++p < m; )
          P[p] = C ? r : jd(o, c[p]);
        return P;
      }
      function Mi(o, c, p) {
        return o === o && (p !== r && (o = o <= p ? o : p), c !== r && (o = o >= c ? o : c)), o;
      }
      function Or(o, c, p, m, P, C) {
        var I, R = c & h, W = c & v, ee = c & g;
        if (p && (I = P ? p(o, m, P, C) : p(o)), I !== r)
          return I;
        if (!pt(o))
          return o;
        var te = Ce(o);
        if (te) {
          if (I = k$(o), !R)
            return Yt(o, I);
        } else {
          var ie = Dt(o), le = ie == j || ie == Ee;
          if (ii(o))
            return om(o, R);
          if (ie == at || ie == ge || le && !P) {
            if (I = W || le ? {} : Sm(o), !R)
              return W ? _$(o, GT(I, o)) : w$(o, Ny(I, o));
          } else {
            if (!rt[ie])
              return P ? o : {};
            I = j$(o, ie, R);
          }
        }
        C || (C = new zr());
        var ve = C.get(o);
        if (ve)
          return ve;
        C.set(o, I), eb(o) ? o.forEach(function(Ae) {
          I.add(Or(Ae, c, p, Ae, o, C));
        }) : Jm(o) && o.forEach(function(Ae, De) {
          I.set(De, Or(Ae, c, p, De, o, C));
        });
        var Oe = ee ? W ? xd : bd : W ? Zt : $t, Re = te ? r : Oe(o);
        return xr(Re || o, function(Ae, De) {
          Re && (De = Ae, Ae = o[De]), zo(I, De, Or(Ae, c, p, De, o, C));
        }), I;
      }
      function KT(o) {
        var c = $t(o);
        return function(p) {
          return Dy(p, o, c);
        };
      }
      function Dy(o, c, p) {
        var m = p.length;
        if (o == null)
          return !m;
        for (o = et(o); m--; ) {
          var P = p[m], C = c[P], I = o[P];
          if (I === r && !(P in o) || !C(I))
            return !1;
        }
        return !0;
      }
      function Ly(o, c, p) {
        if (typeof o != "function")
          throw new wr(u);
        return Yo(function() {
          o.apply(r, p);
        }, c);
      }
      function Uo(o, c, p, m) {
        var P = -1, C = Ss, I = !0, R = o.length, W = [], ee = c.length;
        if (!R)
          return W;
        p && (c = ft(c, ar(p))), m ? (C = Ff, I = !1) : c.length >= i && (C = No, I = !1, c = new Ci(c));
        e:
          for (; ++P < R; ) {
            var te = o[P], ie = p == null ? te : p(te);
            if (te = m || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = ee; le--; )
                if (c[le] === ie)
                  continue e;
              W.push(te);
            } else C(c, ie, m) || W.push(te);
          }
        return W;
      }
      var ei = fm(nn), By = fm(rd, !0);
      function qT(o, c) {
        var p = !0;
        return ei(o, function(m, P, C) {
          return p = !!c(m, P, C), p;
        }), p;
      }
      function Us(o, c, p) {
        for (var m = -1, P = o.length; ++m < P; ) {
          var C = o[m], I = c(C);
          if (I != null && (R === r ? I === I && !ur(I) : p(I, R)))
            var R = I, W = C;
        }
        return W;
      }
      function VT(o, c, p, m) {
        var P = o.length;
        for (p = Ie(p), p < 0 && (p = -p > P ? 0 : P + p), m = m === r || m > P ? P : Ie(m), m < 0 && (m += P), m = p > m ? 0 : rb(m); p < m; )
          o[p++] = c;
        return o;
      }
      function Fy(o, c) {
        var p = [];
        return ei(o, function(m, P, C) {
          c(m, P, C) && p.push(m);
        }), p;
      }
      function jt(o, c, p, m, P) {
        var C = -1, I = o.length;
        for (p || (p = N$), P || (P = []); ++C < I; ) {
          var R = o[C];
          c > 0 && p(R) ? c > 1 ? jt(R, c - 1, p, m, P) : Zn(P, R) : m || (P[P.length] = R);
        }
        return P;
      }
      var td = dm(), Wy = dm(!0);
      function nn(o, c) {
        return o && td(o, c, $t);
      }
      function rd(o, c) {
        return o && Wy(o, c, $t);
      }
      function Hs(o, c) {
        return Xn(c, function(p) {
          return Sn(o[p]);
        });
      }
      function Ii(o, c) {
        c = ri(c, o);
        for (var p = 0, m = c.length; o != null && p < m; )
          o = o[on(c[p++])];
        return p && p == m ? o : r;
      }
      function zy(o, c, p) {
        var m = c(o);
        return Ce(o) ? m : Zn(m, p(o));
      }
      function Ft(o) {
        return o == null ? o === r ? jo : lt : Ti && Ti in et(o) ? C$(o) : U$(o);
      }
      function nd(o, c) {
        return o > c;
      }
      function YT(o, c) {
        return o != null && Xe.call(o, c);
      }
      function XT(o, c) {
        return o != null && c in et(o);
      }
      function ZT(o, c, p) {
        return o >= Nt(c, p) && o < _t(c, p);
      }
      function id(o, c, p) {
        for (var m = p ? Ff : Ss, P = o[0].length, C = o.length, I = C, R = q(C), W = 1 / 0, ee = []; I--; ) {
          var te = o[I];
          I && c && (te = ft(te, ar(c))), W = Nt(te.length, W), R[I] = !p && (c || P >= 120 && te.length >= 120) ? new Ci(I && te) : r;
        }
        te = o[0];
        var ie = -1, le = R[0];
        e:
          for (; ++ie < P && ee.length < W; ) {
            var ve = te[ie], Oe = c ? c(ve) : ve;
            if (ve = p || ve !== 0 ? ve : 0, !(le ? No(le, Oe) : m(ee, Oe, p))) {
              for (I = C; --I; ) {
                var Re = R[I];
                if (!(Re ? No(Re, Oe) : m(o[I], Oe, p)))
                  continue e;
              }
              le && le.push(Oe), ee.push(ve);
            }
          }
        return ee;
      }
      function JT(o, c, p, m) {
        return nn(o, function(P, C, I) {
          c(m, p(P), C, I);
        }), m;
      }
      function Ho(o, c, p) {
        c = ri(c, o), o = $m(o, c);
        var m = o == null ? o : o[on(Sr(c))];
        return m == null ? r : ir(m, o, p);
      }
      function Uy(o) {
        return vt(o) && Ft(o) == ge;
      }
      function QT(o) {
        return vt(o) && Ft(o) == Ro;
      }
      function e$(o) {
        return vt(o) && Ft(o) == ne;
      }
      function Go(o, c, p, m, P) {
        return o === c ? !0 : o == null || c == null || !vt(o) && !vt(c) ? o !== o && c !== c : t$(o, c, p, m, Go, P);
      }
      function t$(o, c, p, m, P, C) {
        var I = Ce(o), R = Ce(c), W = I ? xe : Dt(o), ee = R ? xe : Dt(c);
        W = W == ge ? at : W, ee = ee == ge ? at : ee;
        var te = W == at, ie = ee == at, le = W == ee;
        if (le && ii(o)) {
          if (!ii(c))
            return !1;
          I = !0, te = !1;
        }
        if (le && !te)
          return C || (C = new zr()), I || Oa(o) ? _m(o, c, p, m, P, C) : T$(o, c, W, p, m, P, C);
        if (!(p & b)) {
          var ve = te && Xe.call(o, "__wrapped__"), Oe = ie && Xe.call(c, "__wrapped__");
          if (ve || Oe) {
            var Re = ve ? o.value() : o, Ae = Oe ? c.value() : c;
            return C || (C = new zr()), P(Re, Ae, p, m, C);
          }
        }
        return le ? (C || (C = new zr()), $$(o, c, p, m, P, C)) : !1;
      }
      function r$(o) {
        return vt(o) && Dt(o) == be;
      }
      function ad(o, c, p, m) {
        var P = p.length, C = P, I = !m;
        if (o == null)
          return !C;
        for (o = et(o); P--; ) {
          var R = p[P];
          if (I && R[2] ? R[1] !== o[R[0]] : !(R[0] in o))
            return !1;
        }
        for (; ++P < C; ) {
          R = p[P];
          var W = R[0], ee = o[W], te = R[1];
          if (I && R[2]) {
            if (ee === r && !(W in o))
              return !1;
          } else {
            var ie = new zr();
            if (m)
              var le = m(ee, te, W, o, c, ie);
            if (!(le === r ? Go(te, ee, b | y, m, ie) : le))
              return !1;
          }
        }
        return !0;
      }
      function Hy(o) {
        if (!pt(o) || L$(o))
          return !1;
        var c = Sn(o) ? rT : KP;
        return c.test(ji(o));
      }
      function n$(o) {
        return vt(o) && Ft(o) == nr;
      }
      function i$(o) {
        return vt(o) && Dt(o) == gt;
      }
      function a$(o) {
        return vt(o) && uc(o.length) && !!ot[Ft(o)];
      }
      function Gy(o) {
        return typeof o == "function" ? o : o == null ? Jt : typeof o == "object" ? Ce(o) ? Vy(o[0], o[1]) : qy(o) : hb(o);
      }
      function od(o) {
        if (!Vo(o))
          return sT(o);
        var c = [];
        for (var p in et(o))
          Xe.call(o, p) && p != "constructor" && c.push(p);
        return c;
      }
      function o$(o) {
        if (!pt(o))
          return z$(o);
        var c = Vo(o), p = [];
        for (var m in o)
          m == "constructor" && (c || !Xe.call(o, m)) || p.push(m);
        return p;
      }
      function ud(o, c) {
        return o < c;
      }
      function Ky(o, c) {
        var p = -1, m = Xt(o) ? q(o.length) : [];
        return ei(o, function(P, C, I) {
          m[++p] = c(P, C, I);
        }), m;
      }
      function qy(o) {
        var c = _d(o);
        return c.length == 1 && c[0][2] ? Em(c[0][0], c[0][1]) : function(p) {
          return p === o || ad(p, o, c);
        };
      }
      function Vy(o, c) {
        return Ad(o) && Pm(c) ? Em(on(o), c) : function(p) {
          var m = jd(p, o);
          return m === r && m === c ? Rd(p, o) : Go(c, m, b | y);
        };
      }
      function Gs(o, c, p, m, P) {
        o !== c && td(c, function(C, I) {
          if (P || (P = new zr()), pt(C))
            u$(o, c, I, p, Gs, m, P);
          else {
            var R = m ? m(Pd(o, I), C, I + "", o, c, P) : r;
            R === r && (R = C), Qf(o, I, R);
          }
        }, Zt);
      }
      function u$(o, c, p, m, P, C, I) {
        var R = Pd(o, p), W = Pd(c, p), ee = I.get(W);
        if (ee) {
          Qf(o, p, ee);
          return;
        }
        var te = C ? C(R, W, p + "", o, c, I) : r, ie = te === r;
        if (ie) {
          var le = Ce(W), ve = !le && ii(W), Oe = !le && !ve && Oa(W);
          te = W, le || ve || Oe ? Ce(R) ? te = R : yt(R) ? te = Yt(R) : ve ? (ie = !1, te = om(W, !0)) : Oe ? (ie = !1, te = um(W, !0)) : te = [] : Xo(W) || Ri(W) ? (te = R, Ri(R) ? te = nb(R) : (!pt(R) || Sn(R)) && (te = Sm(W))) : ie = !1;
        }
        ie && (I.set(W, te), P(te, W, m, C, I), I.delete(W)), Qf(o, p, te);
      }
      function Yy(o, c) {
        var p = o.length;
        if (p)
          return c += c < 0 ? p : 0, An(c, p) ? o[c] : r;
      }
      function Xy(o, c, p) {
        c.length ? c = ft(c, function(C) {
          return Ce(C) ? function(I) {
            return Ii(I, C.length === 1 ? C[0] : C);
          } : C;
        }) : c = [Jt];
        var m = -1;
        c = ft(c, ar(_e()));
        var P = Ky(o, function(C, I, R) {
          var W = ft(c, function(ee) {
            return ee(C);
          });
          return { criteria: W, index: ++m, value: C };
        });
        return jE(P, function(C, I) {
          return x$(C, I, p);
        });
      }
      function s$(o, c) {
        return Zy(o, c, function(p, m) {
          return Rd(o, m);
        });
      }
      function Zy(o, c, p) {
        for (var m = -1, P = c.length, C = {}; ++m < P; ) {
          var I = c[m], R = Ii(o, I);
          p(R, I) && Ko(C, ri(I, o), R);
        }
        return C;
      }
      function c$(o) {
        return function(c) {
          return Ii(c, o);
        };
      }
      function sd(o, c, p, m) {
        var P = m ? kE : da, C = -1, I = c.length, R = o;
        for (o === c && (c = Yt(c)), p && (R = ft(o, ar(p))); ++C < I; )
          for (var W = 0, ee = c[C], te = p ? p(ee) : ee; (W = P(R, te, W, m)) > -1; )
            R !== o && Rs.call(R, W, 1), Rs.call(o, W, 1);
        return o;
      }
      function Jy(o, c) {
        for (var p = o ? c.length : 0, m = p - 1; p--; ) {
          var P = c[p];
          if (p == m || P !== C) {
            var C = P;
            An(P) ? Rs.call(o, P, 1) : dd(o, P);
          }
        }
        return o;
      }
      function cd(o, c) {
        return o + Ls(Iy() * (c - o + 1));
      }
      function l$(o, c, p, m) {
        for (var P = -1, C = _t(Ds((c - o) / (p || 1)), 0), I = q(C); C--; )
          I[m ? C : ++P] = o, o += p;
        return I;
      }
      function ld(o, c) {
        var p = "";
        if (!o || c < 1 || c > K)
          return p;
        do
          c % 2 && (p += o), c = Ls(c / 2), c && (o += o);
        while (c);
        return p;
      }
      function Ne(o, c) {
        return Ed(Tm(o, c, Jt), o + "");
      }
      function f$(o) {
        return Ry(Aa(o));
      }
      function d$(o, c) {
        var p = Aa(o);
        return tc(p, Mi(c, 0, p.length));
      }
      function Ko(o, c, p, m) {
        if (!pt(o))
          return o;
        c = ri(c, o);
        for (var P = -1, C = c.length, I = C - 1, R = o; R != null && ++P < C; ) {
          var W = on(c[P]), ee = p;
          if (W === "__proto__" || W === "constructor" || W === "prototype")
            return o;
          if (P != I) {
            var te = R[W];
            ee = m ? m(te, W, R) : r, ee === r && (ee = pt(te) ? te : An(c[P + 1]) ? [] : {});
          }
          zo(R, W, ee), R = R[W];
        }
        return o;
      }
      var Qy = Bs ? function(o, c) {
        return Bs.set(o, c), o;
      } : Jt, h$ = Ns ? function(o, c) {
        return Ns(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Dd(c),
          writable: !0
        });
      } : Jt;
      function p$(o) {
        return tc(Aa(o));
      }
      function Ar(o, c, p) {
        var m = -1, P = o.length;
        c < 0 && (c = -c > P ? 0 : P + c), p = p > P ? P : p, p < 0 && (p += P), P = c > p ? 0 : p - c >>> 0, c >>>= 0;
        for (var C = q(P); ++m < P; )
          C[m] = o[m + c];
        return C;
      }
      function v$(o, c) {
        var p;
        return ei(o, function(m, P, C) {
          return p = c(m, P, C), !p;
        }), !!p;
      }
      function Ks(o, c, p) {
        var m = 0, P = o == null ? m : o.length;
        if (typeof c == "number" && c === c && P <= ce) {
          for (; m < P; ) {
            var C = m + P >>> 1, I = o[C];
            I !== null && !ur(I) && (p ? I <= c : I < c) ? m = C + 1 : P = C;
          }
          return P;
        }
        return fd(o, c, Jt, p);
      }
      function fd(o, c, p, m) {
        var P = 0, C = o == null ? 0 : o.length;
        if (C === 0)
          return 0;
        c = p(c);
        for (var I = c !== c, R = c === null, W = ur(c), ee = c === r; P < C; ) {
          var te = Ls((P + C) / 2), ie = p(o[te]), le = ie !== r, ve = ie === null, Oe = ie === ie, Re = ur(ie);
          if (I)
            var Ae = m || Oe;
          else ee ? Ae = Oe && (m || le) : R ? Ae = Oe && le && (m || !ve) : W ? Ae = Oe && le && !ve && (m || !Re) : ve || Re ? Ae = !1 : Ae = m ? ie <= c : ie < c;
          Ae ? P = te + 1 : C = te;
        }
        return Nt(C, ae);
      }
      function em(o, c) {
        for (var p = -1, m = o.length, P = 0, C = []; ++p < m; ) {
          var I = o[p], R = c ? c(I) : I;
          if (!p || !Ur(R, W)) {
            var W = R;
            C[P++] = I === 0 ? 0 : I;
          }
        }
        return C;
      }
      function tm(o) {
        return typeof o == "number" ? o : ur(o) ? G : +o;
      }
      function or(o) {
        if (typeof o == "string")
          return o;
        if (Ce(o))
          return ft(o, or) + "";
        if (ur(o))
          return ky ? ky.call(o) : "";
        var c = o + "";
        return c == "0" && 1 / o == -Z ? "-0" : c;
      }
      function ti(o, c, p) {
        var m = -1, P = Ss, C = o.length, I = !0, R = [], W = R;
        if (p)
          I = !1, P = Ff;
        else if (C >= i) {
          var ee = c ? null : P$(o);
          if (ee)
            return Es(ee);
          I = !1, P = No, W = new Ci();
        } else
          W = c ? [] : R;
        e:
          for (; ++m < C; ) {
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
      function dd(o, c) {
        return c = ri(c, o), o = $m(o, c), o == null || delete o[on(Sr(c))];
      }
      function rm(o, c, p, m) {
        return Ko(o, c, p(Ii(o, c)), m);
      }
      function qs(o, c, p, m) {
        for (var P = o.length, C = m ? P : -1; (m ? C-- : ++C < P) && c(o[C], C, o); )
          ;
        return p ? Ar(o, m ? 0 : C, m ? C + 1 : P) : Ar(o, m ? C + 1 : 0, m ? P : C);
      }
      function nm(o, c) {
        var p = o;
        return p instanceof Be && (p = p.value()), Wf(c, function(m, P) {
          return P.func.apply(P.thisArg, Zn([m], P.args));
        }, p);
      }
      function hd(o, c, p) {
        var m = o.length;
        if (m < 2)
          return m ? ti(o[0]) : [];
        for (var P = -1, C = q(m); ++P < m; )
          for (var I = o[P], R = -1; ++R < m; )
            R != P && (C[P] = Uo(C[P] || I, o[R], c, p));
        return ti(jt(C, 1), c, p);
      }
      function im(o, c, p) {
        for (var m = -1, P = o.length, C = c.length, I = {}; ++m < P; ) {
          var R = m < C ? c[m] : r;
          p(I, o[m], R);
        }
        return I;
      }
      function pd(o) {
        return yt(o) ? o : [];
      }
      function vd(o) {
        return typeof o == "function" ? o : Jt;
      }
      function ri(o, c) {
        return Ce(o) ? o : Ad(o, c) ? [o] : km(Ge(o));
      }
      var g$ = Ne;
      function ni(o, c, p) {
        var m = o.length;
        return p = p === r ? m : p, !c && p >= m ? o : Ar(o, c, p);
      }
      var am = nT || function(o) {
        return kt.clearTimeout(o);
      };
      function om(o, c) {
        if (c)
          return o.slice();
        var p = o.length, m = Ey ? Ey(p) : new o.constructor(p);
        return o.copy(m), m;
      }
      function gd(o) {
        var c = new o.constructor(o.byteLength);
        return new ks(c).set(new ks(o)), c;
      }
      function y$(o, c) {
        var p = c ? gd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.byteLength);
      }
      function m$(o) {
        var c = new o.constructor(o.source, Ug.exec(o));
        return c.lastIndex = o.lastIndex, c;
      }
      function b$(o) {
        return Wo ? et(Wo.call(o)) : {};
      }
      function um(o, c) {
        var p = c ? gd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.length);
      }
      function sm(o, c) {
        if (o !== c) {
          var p = o !== r, m = o === null, P = o === o, C = ur(o), I = c !== r, R = c === null, W = c === c, ee = ur(c);
          if (!R && !ee && !C && o > c || C && I && W && !R && !ee || m && I && W || !p && W || !P)
            return 1;
          if (!m && !C && !ee && o < c || ee && p && P && !m && !C || R && p && P || !I && P || !W)
            return -1;
        }
        return 0;
      }
      function x$(o, c, p) {
        for (var m = -1, P = o.criteria, C = c.criteria, I = P.length, R = p.length; ++m < I; ) {
          var W = sm(P[m], C[m]);
          if (W) {
            if (m >= R)
              return W;
            var ee = p[m];
            return W * (ee == "desc" ? -1 : 1);
          }
        }
        return o.index - c.index;
      }
      function cm(o, c, p, m) {
        for (var P = -1, C = o.length, I = p.length, R = -1, W = c.length, ee = _t(C - I, 0), te = q(W + ee), ie = !m; ++R < W; )
          te[R] = c[R];
        for (; ++P < I; )
          (ie || P < C) && (te[p[P]] = o[P]);
        for (; ee--; )
          te[R++] = o[P++];
        return te;
      }
      function lm(o, c, p, m) {
        for (var P = -1, C = o.length, I = -1, R = p.length, W = -1, ee = c.length, te = _t(C - R, 0), ie = q(te + ee), le = !m; ++P < te; )
          ie[P] = o[P];
        for (var ve = P; ++W < ee; )
          ie[ve + W] = c[W];
        for (; ++I < R; )
          (le || P < C) && (ie[ve + p[I]] = o[P++]);
        return ie;
      }
      function Yt(o, c) {
        var p = -1, m = o.length;
        for (c || (c = q(m)); ++p < m; )
          c[p] = o[p];
        return c;
      }
      function an(o, c, p, m) {
        var P = !p;
        p || (p = {});
        for (var C = -1, I = c.length; ++C < I; ) {
          var R = c[C], W = m ? m(p[R], o[R], R, p, o) : r;
          W === r && (W = o[R]), P ? wn(p, R, W) : zo(p, R, W);
        }
        return p;
      }
      function w$(o, c) {
        return an(o, Od(o), c);
      }
      function _$(o, c) {
        return an(o, Om(o), c);
      }
      function Vs(o, c) {
        return function(p, m) {
          var P = Ce(p) ? EE : HT, C = c ? c() : {};
          return P(p, o, _e(m, 2), C);
        };
      }
      function xa(o) {
        return Ne(function(c, p) {
          var m = -1, P = p.length, C = P > 1 ? p[P - 1] : r, I = P > 2 ? p[2] : r;
          for (C = o.length > 3 && typeof C == "function" ? (P--, C) : r, I && Wt(p[0], p[1], I) && (C = P < 3 ? r : C, P = 1), c = et(c); ++m < P; ) {
            var R = p[m];
            R && o(c, R, m, C);
          }
          return c;
        });
      }
      function fm(o, c) {
        return function(p, m) {
          if (p == null)
            return p;
          if (!Xt(p))
            return o(p, m);
          for (var P = p.length, C = c ? P : -1, I = et(p); (c ? C-- : ++C < P) && m(I[C], C, I) !== !1; )
            ;
          return p;
        };
      }
      function dm(o) {
        return function(c, p, m) {
          for (var P = -1, C = et(c), I = m(c), R = I.length; R--; ) {
            var W = I[o ? R : ++P];
            if (p(C[W], W, C) === !1)
              break;
          }
          return c;
        };
      }
      function O$(o, c, p) {
        var m = c & w, P = qo(o);
        function C() {
          var I = this && this !== kt && this instanceof C ? P : o;
          return I.apply(m ? p : this, arguments);
        }
        return C;
      }
      function hm(o) {
        return function(c) {
          c = Ge(c);
          var p = ha(c) ? Wr(c) : r, m = p ? p[0] : c.charAt(0), P = p ? ni(p, 1).join("") : c.slice(1);
          return m[o]() + P;
        };
      }
      function wa(o) {
        return function(c) {
          return Wf(fb(lb(c).replace(hE, "")), o, "");
        };
      }
      function qo(o) {
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
      function A$(o, c, p) {
        var m = qo(o);
        function P() {
          for (var C = arguments.length, I = q(C), R = C, W = _a(P); R--; )
            I[R] = arguments[R];
          var ee = C < 3 && I[0] !== W && I[C - 1] !== W ? [] : Jn(I, W);
          if (C -= ee.length, C < p)
            return mm(
              o,
              c,
              Ys,
              P.placeholder,
              r,
              I,
              ee,
              r,
              r,
              p - C
            );
          var te = this && this !== kt && this instanceof P ? m : o;
          return ir(te, this, I);
        }
        return P;
      }
      function pm(o) {
        return function(c, p, m) {
          var P = et(c);
          if (!Xt(c)) {
            var C = _e(p, 3);
            c = $t(c), p = function(R) {
              return C(P[R], R, P);
            };
          }
          var I = o(c, p, m);
          return I > -1 ? P[C ? c[I] : I] : r;
        };
      }
      function vm(o) {
        return On(function(c) {
          var p = c.length, m = p, P = _r.prototype.thru;
          for (o && c.reverse(); m--; ) {
            var C = c[m];
            if (typeof C != "function")
              throw new wr(u);
            if (P && !I && Qs(C) == "wrapper")
              var I = new _r([], !0);
          }
          for (m = I ? m : p; ++m < p; ) {
            C = c[m];
            var R = Qs(C), W = R == "wrapper" ? wd(C) : r;
            W && Sd(W[0]) && W[1] == ($ | S | x | M) && !W[4].length && W[9] == 1 ? I = I[Qs(W[0])].apply(I, W[3]) : I = C.length == 1 && Sd(C) ? I[R]() : I.thru(C);
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
      function Ys(o, c, p, m, P, C, I, R, W, ee) {
        var te = c & $, ie = c & w, le = c & A, ve = c & (S | _), Oe = c & F, Re = le ? r : qo(o);
        function Ae() {
          for (var De = arguments.length, Fe = q(De), sr = De; sr--; )
            Fe[sr] = arguments[sr];
          if (ve)
            var zt = _a(Ae), cr = NE(Fe, zt);
          if (m && (Fe = cm(Fe, m, P, ve)), C && (Fe = lm(Fe, C, I, ve)), De -= cr, ve && De < ee) {
            var mt = Jn(Fe, zt);
            return mm(
              o,
              c,
              Ys,
              Ae.placeholder,
              p,
              Fe,
              mt,
              R,
              W,
              ee - De
            );
          }
          var Hr = ie ? p : this, En = le ? Hr[o] : o;
          return De = Fe.length, R ? Fe = H$(Fe, R) : Oe && De > 1 && Fe.reverse(), te && W < De && (Fe.length = W), this && this !== kt && this instanceof Ae && (En = Re || qo(En)), En.apply(Hr, Fe);
        }
        return Ae;
      }
      function gm(o, c) {
        return function(p, m) {
          return JT(p, o, c(m), {});
        };
      }
      function Xs(o, c) {
        return function(p, m) {
          var P;
          if (p === r && m === r)
            return c;
          if (p !== r && (P = p), m !== r) {
            if (P === r)
              return m;
            typeof p == "string" || typeof m == "string" ? (p = or(p), m = or(m)) : (p = tm(p), m = tm(m)), P = o(p, m);
          }
          return P;
        };
      }
      function yd(o) {
        return On(function(c) {
          return c = ft(c, ar(_e())), Ne(function(p) {
            var m = this;
            return o(c, function(P) {
              return ir(P, m, p);
            });
          });
        });
      }
      function Zs(o, c) {
        c = c === r ? " " : or(c);
        var p = c.length;
        if (p < 2)
          return p ? ld(c, o) : c;
        var m = ld(c, Ds(o / pa(c)));
        return ha(c) ? ni(Wr(m), 0, o).join("") : m.slice(0, o);
      }
      function S$(o, c, p, m) {
        var P = c & w, C = qo(o);
        function I() {
          for (var R = -1, W = arguments.length, ee = -1, te = m.length, ie = q(te + W), le = this && this !== kt && this instanceof I ? C : o; ++ee < te; )
            ie[ee] = m[ee];
          for (; W--; )
            ie[ee++] = arguments[++R];
          return ir(le, P ? p : this, ie);
        }
        return I;
      }
      function ym(o) {
        return function(c, p, m) {
          return m && typeof m != "number" && Wt(c, p, m) && (p = m = r), c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), m = m === r ? c < p ? 1 : -1 : Pn(m), l$(c, p, m, o);
        };
      }
      function Js(o) {
        return function(c, p) {
          return typeof c == "string" && typeof p == "string" || (c = Pr(c), p = Pr(p)), o(c, p);
        };
      }
      function mm(o, c, p, m, P, C, I, R, W, ee) {
        var te = c & S, ie = te ? I : r, le = te ? r : I, ve = te ? C : r, Oe = te ? r : C;
        c |= te ? x : E, c &= ~(te ? E : x), c & O || (c &= ~(w | A));
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
        return Sd(o) && Cm(Ae, Re), Ae.placeholder = m, Mm(Ae, o, c);
      }
      function md(o) {
        var c = wt[o];
        return function(p, m) {
          if (p = Pr(p), m = m == null ? 0 : Nt(Ie(m), 292), m && My(p)) {
            var P = (Ge(p) + "e").split("e"), C = c(P[0] + "e" + (+P[1] + m));
            return P = (Ge(C) + "e").split("e"), +(P[0] + "e" + (+P[1] - m));
          }
          return c(p);
        };
      }
      var P$ = ya && 1 / Es(new ya([, -0]))[1] == Z ? function(o) {
        return new ya(o);
      } : Fd;
      function bm(o) {
        return function(c) {
          var p = Dt(c);
          return p == be ? Vf(c) : p == gt ? UE(c) : RE(c, o(c));
        };
      }
      function _n(o, c, p, m, P, C, I, R) {
        var W = c & A;
        if (!W && typeof o != "function")
          throw new wr(u);
        var ee = m ? m.length : 0;
        if (ee || (c &= ~(x | E), m = P = r), I = I === r ? I : _t(Ie(I), 0), R = R === r ? R : Ie(R), ee -= P ? P.length : 0, c & E) {
          var te = m, ie = P;
          m = P = r;
        }
        var le = W ? r : wd(o), ve = [
          o,
          c,
          p,
          m,
          P,
          te,
          ie,
          C,
          I,
          R
        ];
        if (le && W$(ve, le), o = ve[0], c = ve[1], p = ve[2], m = ve[3], P = ve[4], R = ve[9] = ve[9] === r ? W ? 0 : o.length : _t(ve[9] - ee, 0), !R && c & (S | _) && (c &= ~(S | _)), !c || c == w)
          var Oe = O$(o, c, p);
        else c == S || c == _ ? Oe = A$(o, c, R) : (c == x || c == (w | x)) && !P.length ? Oe = S$(o, c, p, m) : Oe = Ys.apply(r, ve);
        var Re = le ? Qy : Cm;
        return Mm(Re(Oe, ve), o, c);
      }
      function xm(o, c, p, m) {
        return o === r || Ur(o, ga[p]) && !Xe.call(m, p) ? c : o;
      }
      function wm(o, c, p, m, P, C) {
        return pt(o) && pt(c) && (C.set(c, o), Gs(o, c, r, wm, C), C.delete(c)), o;
      }
      function E$(o) {
        return Xo(o) ? r : o;
      }
      function _m(o, c, p, m, P, C) {
        var I = p & b, R = o.length, W = c.length;
        if (R != W && !(I && W > R))
          return !1;
        var ee = C.get(o), te = C.get(c);
        if (ee && te)
          return ee == c && te == o;
        var ie = -1, le = !0, ve = p & y ? new Ci() : r;
        for (C.set(o, c), C.set(c, o); ++ie < R; ) {
          var Oe = o[ie], Re = c[ie];
          if (m)
            var Ae = I ? m(Re, Oe, ie, c, o, C) : m(Oe, Re, ie, o, c, C);
          if (Ae !== r) {
            if (Ae)
              continue;
            le = !1;
            break;
          }
          if (ve) {
            if (!zf(c, function(De, Fe) {
              if (!No(ve, Fe) && (Oe === De || P(Oe, De, p, m, C)))
                return ve.push(Fe);
            })) {
              le = !1;
              break;
            }
          } else if (!(Oe === Re || P(Oe, Re, p, m, C))) {
            le = !1;
            break;
          }
        }
        return C.delete(o), C.delete(c), le;
      }
      function T$(o, c, p, m, P, C, I) {
        switch (p) {
          case la:
            if (o.byteLength != c.byteLength || o.byteOffset != c.byteOffset)
              return !1;
            o = o.buffer, c = c.buffer;
          case Ro:
            return !(o.byteLength != c.byteLength || !C(new ks(o), new ks(c)));
          case we:
          case ne:
          case We:
            return Ur(+o, +c);
          case pe:
            return o.name == c.name && o.message == c.message;
          case nr:
          case mn:
            return o == c + "";
          case be:
            var R = Vf;
          case gt:
            var W = m & b;
            if (R || (R = Es), o.size != c.size && !W)
              return !1;
            var ee = I.get(o);
            if (ee)
              return ee == c;
            m |= y, I.set(o, c);
            var te = _m(R(o), R(c), m, P, C, I);
            return I.delete(o), te;
          case Vn:
            if (Wo)
              return Wo.call(o) == Wo.call(c);
        }
        return !1;
      }
      function $$(o, c, p, m, P, C) {
        var I = p & b, R = bd(o), W = R.length, ee = bd(c), te = ee.length;
        if (W != te && !I)
          return !1;
        for (var ie = W; ie--; ) {
          var le = R[ie];
          if (!(I ? le in c : Xe.call(c, le)))
            return !1;
        }
        var ve = C.get(o), Oe = C.get(c);
        if (ve && Oe)
          return ve == c && Oe == o;
        var Re = !0;
        C.set(o, c), C.set(c, o);
        for (var Ae = I; ++ie < W; ) {
          le = R[ie];
          var De = o[le], Fe = c[le];
          if (m)
            var sr = I ? m(Fe, De, le, c, o, C) : m(De, Fe, le, o, c, C);
          if (!(sr === r ? De === Fe || P(De, Fe, p, m, C) : sr)) {
            Re = !1;
            break;
          }
          Ae || (Ae = le == "constructor");
        }
        if (Re && !Ae) {
          var zt = o.constructor, cr = c.constructor;
          zt != cr && "constructor" in o && "constructor" in c && !(typeof zt == "function" && zt instanceof zt && typeof cr == "function" && cr instanceof cr) && (Re = !1);
        }
        return C.delete(o), C.delete(c), Re;
      }
      function On(o) {
        return Ed(Tm(o, r, Dm), o + "");
      }
      function bd(o) {
        return zy(o, $t, Od);
      }
      function xd(o) {
        return zy(o, Zt, Om);
      }
      var wd = Bs ? function(o) {
        return Bs.get(o);
      } : Fd;
      function Qs(o) {
        for (var c = o.name + "", p = ma[c], m = Xe.call(ma, c) ? p.length : 0; m--; ) {
          var P = p[m], C = P.func;
          if (C == null || C == o)
            return P.name;
        }
        return c;
      }
      function _a(o) {
        var c = Xe.call(T, "placeholder") ? T : o;
        return c.placeholder;
      }
      function _e() {
        var o = T.iteratee || Ld;
        return o = o === Ld ? Gy : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function ec(o, c) {
        var p = o.__data__;
        return D$(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
      }
      function _d(o) {
        for (var c = $t(o), p = c.length; p--; ) {
          var m = c[p], P = o[m];
          c[p] = [m, P, Pm(P)];
        }
        return c;
      }
      function ki(o, c) {
        var p = FE(o, c);
        return Hy(p) ? p : r;
      }
      function C$(o) {
        var c = Xe.call(o, Ti), p = o[Ti];
        try {
          o[Ti] = r;
          var m = !0;
        } catch {
        }
        var P = Ms.call(o);
        return m && (c ? o[Ti] = p : delete o[Ti]), P;
      }
      var Od = Xf ? function(o) {
        return o == null ? [] : (o = et(o), Xn(Xf(o), function(c) {
          return $y.call(o, c);
        }));
      } : Wd, Om = Xf ? function(o) {
        for (var c = []; o; )
          Zn(c, Od(o)), o = js(o);
        return c;
      } : Wd, Dt = Ft;
      (Zf && Dt(new Zf(new ArrayBuffer(1))) != la || Lo && Dt(new Lo()) != be || Jf && Dt(Jf.resolve()) != Vt || ya && Dt(new ya()) != gt || Bo && Dt(new Bo()) != Yn) && (Dt = function(o) {
        var c = Ft(o), p = c == at ? o.constructor : r, m = p ? ji(p) : "";
        if (m)
          switch (m) {
            case dT:
              return la;
            case hT:
              return be;
            case pT:
              return Vt;
            case vT:
              return gt;
            case gT:
              return Yn;
          }
        return c;
      });
      function M$(o, c, p) {
        for (var m = -1, P = p.length; ++m < P; ) {
          var C = p[m], I = C.size;
          switch (C.type) {
            case "drop":
              o += I;
              break;
            case "dropRight":
              c -= I;
              break;
            case "take":
              c = Nt(c, o + I);
              break;
            case "takeRight":
              o = _t(o, c - I);
              break;
          }
        }
        return { start: o, end: c };
      }
      function I$(o) {
        var c = o.match(LP);
        return c ? c[1].split(BP) : [];
      }
      function Am(o, c, p) {
        c = ri(c, o);
        for (var m = -1, P = c.length, C = !1; ++m < P; ) {
          var I = on(c[m]);
          if (!(C = o != null && p(o, I)))
            break;
          o = o[I];
        }
        return C || ++m != P ? C : (P = o == null ? 0 : o.length, !!P && uc(P) && An(I, P) && (Ce(o) || Ri(o)));
      }
      function k$(o) {
        var c = o.length, p = new o.constructor(c);
        return c && typeof o[0] == "string" && Xe.call(o, "index") && (p.index = o.index, p.input = o.input), p;
      }
      function Sm(o) {
        return typeof o.constructor == "function" && !Vo(o) ? ba(js(o)) : {};
      }
      function j$(o, c, p) {
        var m = o.constructor;
        switch (c) {
          case Ro:
            return gd(o);
          case we:
          case ne:
            return new m(+o);
          case la:
            return y$(o, p);
          case _f:
          case Of:
          case Af:
          case Sf:
          case Pf:
          case Ef:
          case Tf:
          case $f:
          case Cf:
            return um(o, p);
          case be:
            return new m();
          case We:
          case mn:
            return new m(o);
          case nr:
            return m$(o);
          case gt:
            return new m();
          case Vn:
            return b$(o);
        }
      }
      function R$(o, c) {
        var p = c.length;
        if (!p)
          return o;
        var m = p - 1;
        return c[m] = (p > 1 ? "& " : "") + c[m], c = c.join(p > 2 ? ", " : " "), o.replace(DP, `{
/* [wrapped with ` + c + `] */
`);
      }
      function N$(o) {
        return Ce(o) || Ri(o) || !!(Cy && o && o[Cy]);
      }
      function An(o, c) {
        var p = typeof o;
        return c = c ?? K, !!c && (p == "number" || p != "symbol" && VP.test(o)) && o > -1 && o % 1 == 0 && o < c;
      }
      function Wt(o, c, p) {
        if (!pt(p))
          return !1;
        var m = typeof c;
        return (m == "number" ? Xt(p) && An(c, p.length) : m == "string" && c in p) ? Ur(p[c], o) : !1;
      }
      function Ad(o, c) {
        if (Ce(o))
          return !1;
        var p = typeof o;
        return p == "number" || p == "symbol" || p == "boolean" || o == null || ur(o) ? !0 : kP.test(o) || !IP.test(o) || c != null && o in et(c);
      }
      function D$(o) {
        var c = typeof o;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? o !== "__proto__" : o === null;
      }
      function Sd(o) {
        var c = Qs(o), p = T[c];
        if (typeof p != "function" || !(c in Be.prototype))
          return !1;
        if (o === p)
          return !0;
        var m = wd(p);
        return !!m && o === m[0];
      }
      function L$(o) {
        return !!Py && Py in o;
      }
      var B$ = $s ? Sn : zd;
      function Vo(o) {
        var c = o && o.constructor, p = typeof c == "function" && c.prototype || ga;
        return o === p;
      }
      function Pm(o) {
        return o === o && !pt(o);
      }
      function Em(o, c) {
        return function(p) {
          return p == null ? !1 : p[o] === c && (c !== r || o in et(p));
        };
      }
      function F$(o) {
        var c = ac(o, function(m) {
          return p.size === f && p.clear(), m;
        }), p = c.cache;
        return c;
      }
      function W$(o, c) {
        var p = o[1], m = c[1], P = p | m, C = P < (w | A | $), I = m == $ && p == S || m == $ && p == M && o[7].length <= c[8] || m == ($ | M) && c[7].length <= c[8] && p == S;
        if (!(C || I))
          return o;
        m & w && (o[2] = c[2], P |= p & w ? 0 : O);
        var R = c[3];
        if (R) {
          var W = o[3];
          o[3] = W ? cm(W, R, c[4]) : R, o[4] = W ? Jn(o[3], d) : c[4];
        }
        return R = c[5], R && (W = o[5], o[5] = W ? lm(W, R, c[6]) : R, o[6] = W ? Jn(o[5], d) : c[6]), R = c[7], R && (o[7] = R), m & $ && (o[8] = o[8] == null ? c[8] : Nt(o[8], c[8])), o[9] == null && (o[9] = c[9]), o[0] = c[0], o[1] = P, o;
      }
      function z$(o) {
        var c = [];
        if (o != null)
          for (var p in et(o))
            c.push(p);
        return c;
      }
      function U$(o) {
        return Ms.call(o);
      }
      function Tm(o, c, p) {
        return c = _t(c === r ? o.length - 1 : c, 0), function() {
          for (var m = arguments, P = -1, C = _t(m.length - c, 0), I = q(C); ++P < C; )
            I[P] = m[c + P];
          P = -1;
          for (var R = q(c + 1); ++P < c; )
            R[P] = m[P];
          return R[c] = p(I), ir(o, this, R);
        };
      }
      function $m(o, c) {
        return c.length < 2 ? o : Ii(o, Ar(c, 0, -1));
      }
      function H$(o, c) {
        for (var p = o.length, m = Nt(c.length, p), P = Yt(o); m--; ) {
          var C = c[m];
          o[m] = An(C, p) ? P[C] : r;
        }
        return o;
      }
      function Pd(o, c) {
        if (!(c === "constructor" && typeof o[c] == "function") && c != "__proto__")
          return o[c];
      }
      var Cm = Im(Qy), Yo = aT || function(o, c) {
        return kt.setTimeout(o, c);
      }, Ed = Im(h$);
      function Mm(o, c, p) {
        var m = c + "";
        return Ed(o, R$(m, G$(I$(m), p)));
      }
      function Im(o) {
        var c = 0, p = 0;
        return function() {
          var m = cT(), P = U - (m - p);
          if (p = m, P > 0) {
            if (++c >= N)
              return arguments[0];
          } else
            c = 0;
          return o.apply(r, arguments);
        };
      }
      function tc(o, c) {
        var p = -1, m = o.length, P = m - 1;
        for (c = c === r ? m : c; ++p < c; ) {
          var C = cd(p, P), I = o[C];
          o[C] = o[p], o[p] = I;
        }
        return o.length = c, o;
      }
      var km = F$(function(o) {
        var c = [];
        return o.charCodeAt(0) === 46 && c.push(""), o.replace(jP, function(p, m, P, C) {
          c.push(P ? C.replace(zP, "$1") : m || p);
        }), c;
      });
      function on(o) {
        if (typeof o == "string" || ur(o))
          return o;
        var c = o + "";
        return c == "0" && 1 / o == -Z ? "-0" : c;
      }
      function ji(o) {
        if (o != null) {
          try {
            return Cs.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function G$(o, c) {
        return xr(he, function(p) {
          var m = "_." + p[0];
          c & p[1] && !Ss(o, m) && o.push(m);
        }), o.sort();
      }
      function jm(o) {
        if (o instanceof Be)
          return o.clone();
        var c = new _r(o.__wrapped__, o.__chain__);
        return c.__actions__ = Yt(o.__actions__), c.__index__ = o.__index__, c.__values__ = o.__values__, c;
      }
      function K$(o, c, p) {
        (p ? Wt(o, c, p) : c === r) ? c = 1 : c = _t(Ie(c), 0);
        var m = o == null ? 0 : o.length;
        if (!m || c < 1)
          return [];
        for (var P = 0, C = 0, I = q(Ds(m / c)); P < m; )
          I[C++] = Ar(o, P, P += c);
        return I;
      }
      function q$(o) {
        for (var c = -1, p = o == null ? 0 : o.length, m = 0, P = []; ++c < p; ) {
          var C = o[c];
          C && (P[m++] = C);
        }
        return P;
      }
      function V$() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var c = q(o - 1), p = arguments[0], m = o; m--; )
          c[m - 1] = arguments[m];
        return Zn(Ce(p) ? Yt(p) : [p], jt(c, 1));
      }
      var Y$ = Ne(function(o, c) {
        return yt(o) ? Uo(o, jt(c, 1, yt, !0)) : [];
      }), X$ = Ne(function(o, c) {
        var p = Sr(c);
        return yt(p) && (p = r), yt(o) ? Uo(o, jt(c, 1, yt, !0), _e(p, 2)) : [];
      }), Z$ = Ne(function(o, c) {
        var p = Sr(c);
        return yt(p) && (p = r), yt(o) ? Uo(o, jt(c, 1, yt, !0), r, p) : [];
      });
      function J$(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), Ar(o, c < 0 ? 0 : c, m)) : [];
      }
      function Q$(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), c = m - c, Ar(o, 0, c < 0 ? 0 : c)) : [];
      }
      function e2(o, c) {
        return o && o.length ? qs(o, _e(c, 3), !0, !0) : [];
      }
      function t2(o, c) {
        return o && o.length ? qs(o, _e(c, 3), !0) : [];
      }
      function r2(o, c, p, m) {
        var P = o == null ? 0 : o.length;
        return P ? (p && typeof p != "number" && Wt(o, c, p) && (p = 0, m = P), VT(o, c, p, m)) : [];
      }
      function Rm(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), Ps(o, _e(c, 3), P);
      }
      function Nm(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m - 1;
        return p !== r && (P = Ie(p), P = p < 0 ? _t(m + P, 0) : Nt(P, m - 1)), Ps(o, _e(c, 3), P, !0);
      }
      function Dm(o) {
        var c = o == null ? 0 : o.length;
        return c ? jt(o, 1) : [];
      }
      function n2(o) {
        var c = o == null ? 0 : o.length;
        return c ? jt(o, Z) : [];
      }
      function i2(o, c) {
        var p = o == null ? 0 : o.length;
        return p ? (c = c === r ? 1 : Ie(c), jt(o, c)) : [];
      }
      function a2(o) {
        for (var c = -1, p = o == null ? 0 : o.length, m = {}; ++c < p; ) {
          var P = o[c];
          m[P[0]] = P[1];
        }
        return m;
      }
      function Lm(o) {
        return o && o.length ? o[0] : r;
      }
      function o2(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), da(o, c, P);
      }
      function u2(o) {
        var c = o == null ? 0 : o.length;
        return c ? Ar(o, 0, -1) : [];
      }
      var s2 = Ne(function(o) {
        var c = ft(o, pd);
        return c.length && c[0] === o[0] ? id(c) : [];
      }), c2 = Ne(function(o) {
        var c = Sr(o), p = ft(o, pd);
        return c === Sr(p) ? c = r : p.pop(), p.length && p[0] === o[0] ? id(p, _e(c, 2)) : [];
      }), l2 = Ne(function(o) {
        var c = Sr(o), p = ft(o, pd);
        return c = typeof c == "function" ? c : r, c && p.pop(), p.length && p[0] === o[0] ? id(p, r, c) : [];
      });
      function f2(o, c) {
        return o == null ? "" : uT.call(o, c);
      }
      function Sr(o) {
        var c = o == null ? 0 : o.length;
        return c ? o[c - 1] : r;
      }
      function d2(o, c, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m;
        return p !== r && (P = Ie(p), P = P < 0 ? _t(m + P, 0) : Nt(P, m - 1)), c === c ? GE(o, c, P) : Ps(o, my, P, !0);
      }
      function h2(o, c) {
        return o && o.length ? Yy(o, Ie(c)) : r;
      }
      var p2 = Ne(Bm);
      function Bm(o, c) {
        return o && o.length && c && c.length ? sd(o, c) : o;
      }
      function v2(o, c, p) {
        return o && o.length && c && c.length ? sd(o, c, _e(p, 2)) : o;
      }
      function g2(o, c, p) {
        return o && o.length && c && c.length ? sd(o, c, r, p) : o;
      }
      var y2 = On(function(o, c) {
        var p = o == null ? 0 : o.length, m = ed(o, c);
        return Jy(o, ft(c, function(P) {
          return An(P, p) ? +P : P;
        }).sort(sm)), m;
      });
      function m2(o, c) {
        var p = [];
        if (!(o && o.length))
          return p;
        var m = -1, P = [], C = o.length;
        for (c = _e(c, 3); ++m < C; ) {
          var I = o[m];
          c(I, m, o) && (p.push(I), P.push(m));
        }
        return Jy(o, P), p;
      }
      function Td(o) {
        return o == null ? o : fT.call(o);
      }
      function b2(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (p && typeof p != "number" && Wt(o, c, p) ? (c = 0, p = m) : (c = c == null ? 0 : Ie(c), p = p === r ? m : Ie(p)), Ar(o, c, p)) : [];
      }
      function x2(o, c) {
        return Ks(o, c);
      }
      function w2(o, c, p) {
        return fd(o, c, _e(p, 2));
      }
      function _2(o, c) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Ks(o, c);
          if (m < p && Ur(o[m], c))
            return m;
        }
        return -1;
      }
      function O2(o, c) {
        return Ks(o, c, !0);
      }
      function A2(o, c, p) {
        return fd(o, c, _e(p, 2), !0);
      }
      function S2(o, c) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Ks(o, c, !0) - 1;
          if (Ur(o[m], c))
            return m;
        }
        return -1;
      }
      function P2(o) {
        return o && o.length ? em(o) : [];
      }
      function E2(o, c) {
        return o && o.length ? em(o, _e(c, 2)) : [];
      }
      function T2(o) {
        var c = o == null ? 0 : o.length;
        return c ? Ar(o, 1, c) : [];
      }
      function $2(o, c, p) {
        return o && o.length ? (c = p || c === r ? 1 : Ie(c), Ar(o, 0, c < 0 ? 0 : c)) : [];
      }
      function C2(o, c, p) {
        var m = o == null ? 0 : o.length;
        return m ? (c = p || c === r ? 1 : Ie(c), c = m - c, Ar(o, c < 0 ? 0 : c, m)) : [];
      }
      function M2(o, c) {
        return o && o.length ? qs(o, _e(c, 3), !1, !0) : [];
      }
      function I2(o, c) {
        return o && o.length ? qs(o, _e(c, 3)) : [];
      }
      var k2 = Ne(function(o) {
        return ti(jt(o, 1, yt, !0));
      }), j2 = Ne(function(o) {
        var c = Sr(o);
        return yt(c) && (c = r), ti(jt(o, 1, yt, !0), _e(c, 2));
      }), R2 = Ne(function(o) {
        var c = Sr(o);
        return c = typeof c == "function" ? c : r, ti(jt(o, 1, yt, !0), r, c);
      });
      function N2(o) {
        return o && o.length ? ti(o) : [];
      }
      function D2(o, c) {
        return o && o.length ? ti(o, _e(c, 2)) : [];
      }
      function L2(o, c) {
        return c = typeof c == "function" ? c : r, o && o.length ? ti(o, r, c) : [];
      }
      function $d(o) {
        if (!(o && o.length))
          return [];
        var c = 0;
        return o = Xn(o, function(p) {
          if (yt(p))
            return c = _t(p.length, c), !0;
        }), Kf(c, function(p) {
          return ft(o, Uf(p));
        });
      }
      function Fm(o, c) {
        if (!(o && o.length))
          return [];
        var p = $d(o);
        return c == null ? p : ft(p, function(m) {
          return ir(c, r, m);
        });
      }
      var B2 = Ne(function(o, c) {
        return yt(o) ? Uo(o, c) : [];
      }), F2 = Ne(function(o) {
        return hd(Xn(o, yt));
      }), W2 = Ne(function(o) {
        var c = Sr(o);
        return yt(c) && (c = r), hd(Xn(o, yt), _e(c, 2));
      }), z2 = Ne(function(o) {
        var c = Sr(o);
        return c = typeof c == "function" ? c : r, hd(Xn(o, yt), r, c);
      }), U2 = Ne($d);
      function H2(o, c) {
        return im(o || [], c || [], zo);
      }
      function G2(o, c) {
        return im(o || [], c || [], Ko);
      }
      var K2 = Ne(function(o) {
        var c = o.length, p = c > 1 ? o[c - 1] : r;
        return p = typeof p == "function" ? (o.pop(), p) : r, Fm(o, p);
      });
      function Wm(o) {
        var c = T(o);
        return c.__chain__ = !0, c;
      }
      function q2(o, c) {
        return c(o), o;
      }
      function rc(o, c) {
        return c(o);
      }
      var V2 = On(function(o) {
        var c = o.length, p = c ? o[0] : 0, m = this.__wrapped__, P = function(C) {
          return ed(C, o);
        };
        return c > 1 || this.__actions__.length || !(m instanceof Be) || !An(p) ? this.thru(P) : (m = m.slice(p, +p + (c ? 1 : 0)), m.__actions__.push({
          func: rc,
          args: [P],
          thisArg: r
        }), new _r(m, this.__chain__).thru(function(C) {
          return c && !C.length && C.push(r), C;
        }));
      });
      function Y2() {
        return Wm(this);
      }
      function X2() {
        return new _r(this.value(), this.__chain__);
      }
      function Z2() {
        this.__values__ === r && (this.__values__ = tb(this.value()));
        var o = this.__index__ >= this.__values__.length, c = o ? r : this.__values__[this.__index__++];
        return { done: o, value: c };
      }
      function J2() {
        return this;
      }
      function Q2(o) {
        for (var c, p = this; p instanceof Ws; ) {
          var m = jm(p);
          m.__index__ = 0, m.__values__ = r, c ? P.__wrapped__ = m : c = m;
          var P = m;
          p = p.__wrapped__;
        }
        return P.__wrapped__ = o, c;
      }
      function eC() {
        var o = this.__wrapped__;
        if (o instanceof Be) {
          var c = o;
          return this.__actions__.length && (c = new Be(this)), c = c.reverse(), c.__actions__.push({
            func: rc,
            args: [Td],
            thisArg: r
          }), new _r(c, this.__chain__);
        }
        return this.thru(Td);
      }
      function tC() {
        return nm(this.__wrapped__, this.__actions__);
      }
      var rC = Vs(function(o, c, p) {
        Xe.call(o, p) ? ++o[p] : wn(o, p, 1);
      });
      function nC(o, c, p) {
        var m = Ce(o) ? gy : qT;
        return p && Wt(o, c, p) && (c = r), m(o, _e(c, 3));
      }
      function iC(o, c) {
        var p = Ce(o) ? Xn : Fy;
        return p(o, _e(c, 3));
      }
      var aC = pm(Rm), oC = pm(Nm);
      function uC(o, c) {
        return jt(nc(o, c), 1);
      }
      function sC(o, c) {
        return jt(nc(o, c), Z);
      }
      function cC(o, c, p) {
        return p = p === r ? 1 : Ie(p), jt(nc(o, c), p);
      }
      function zm(o, c) {
        var p = Ce(o) ? xr : ei;
        return p(o, _e(c, 3));
      }
      function Um(o, c) {
        var p = Ce(o) ? TE : By;
        return p(o, _e(c, 3));
      }
      var lC = Vs(function(o, c, p) {
        Xe.call(o, p) ? o[p].push(c) : wn(o, p, [c]);
      });
      function fC(o, c, p, m) {
        o = Xt(o) ? o : Aa(o), p = p && !m ? Ie(p) : 0;
        var P = o.length;
        return p < 0 && (p = _t(P + p, 0)), sc(o) ? p <= P && o.indexOf(c, p) > -1 : !!P && da(o, c, p) > -1;
      }
      var dC = Ne(function(o, c, p) {
        var m = -1, P = typeof c == "function", C = Xt(o) ? q(o.length) : [];
        return ei(o, function(I) {
          C[++m] = P ? ir(c, I, p) : Ho(I, c, p);
        }), C;
      }), hC = Vs(function(o, c, p) {
        wn(o, p, c);
      });
      function nc(o, c) {
        var p = Ce(o) ? ft : Ky;
        return p(o, _e(c, 3));
      }
      function pC(o, c, p, m) {
        return o == null ? [] : (Ce(c) || (c = c == null ? [] : [c]), p = m ? r : p, Ce(p) || (p = p == null ? [] : [p]), Xy(o, c, p));
      }
      var vC = Vs(function(o, c, p) {
        o[p ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function gC(o, c, p) {
        var m = Ce(o) ? Wf : xy, P = arguments.length < 3;
        return m(o, _e(c, 4), p, P, ei);
      }
      function yC(o, c, p) {
        var m = Ce(o) ? $E : xy, P = arguments.length < 3;
        return m(o, _e(c, 4), p, P, By);
      }
      function mC(o, c) {
        var p = Ce(o) ? Xn : Fy;
        return p(o, oc(_e(c, 3)));
      }
      function bC(o) {
        var c = Ce(o) ? Ry : f$;
        return c(o);
      }
      function xC(o, c, p) {
        (p ? Wt(o, c, p) : c === r) ? c = 1 : c = Ie(c);
        var m = Ce(o) ? zT : d$;
        return m(o, c);
      }
      function wC(o) {
        var c = Ce(o) ? UT : p$;
        return c(o);
      }
      function _C(o) {
        if (o == null)
          return 0;
        if (Xt(o))
          return sc(o) ? pa(o) : o.length;
        var c = Dt(o);
        return c == be || c == gt ? o.size : od(o).length;
      }
      function OC(o, c, p) {
        var m = Ce(o) ? zf : v$;
        return p && Wt(o, c, p) && (c = r), m(o, _e(c, 3));
      }
      var AC = Ne(function(o, c) {
        if (o == null)
          return [];
        var p = c.length;
        return p > 1 && Wt(o, c[0], c[1]) ? c = [] : p > 2 && Wt(c[0], c[1], c[2]) && (c = [c[0]]), Xy(o, jt(c, 1), []);
      }), ic = iT || function() {
        return kt.Date.now();
      };
      function SC(o, c) {
        if (typeof c != "function")
          throw new wr(u);
        return o = Ie(o), function() {
          if (--o < 1)
            return c.apply(this, arguments);
        };
      }
      function Hm(o, c, p) {
        return c = p ? r : c, c = o && c == null ? o.length : c, _n(o, $, r, r, r, r, c);
      }
      function Gm(o, c) {
        var p;
        if (typeof c != "function")
          throw new wr(u);
        return o = Ie(o), function() {
          return --o > 0 && (p = c.apply(this, arguments)), o <= 1 && (c = r), p;
        };
      }
      var Cd = Ne(function(o, c, p) {
        var m = w;
        if (p.length) {
          var P = Jn(p, _a(Cd));
          m |= x;
        }
        return _n(o, m, c, p, P);
      }), Km = Ne(function(o, c, p) {
        var m = w | A;
        if (p.length) {
          var P = Jn(p, _a(Km));
          m |= x;
        }
        return _n(c, m, o, p, P);
      });
      function qm(o, c, p) {
        c = p ? r : c;
        var m = _n(o, S, r, r, r, r, r, c);
        return m.placeholder = qm.placeholder, m;
      }
      function Vm(o, c, p) {
        c = p ? r : c;
        var m = _n(o, _, r, r, r, r, r, c);
        return m.placeholder = Vm.placeholder, m;
      }
      function Ym(o, c, p) {
        var m, P, C, I, R, W, ee = 0, te = !1, ie = !1, le = !0;
        if (typeof o != "function")
          throw new wr(u);
        c = Pr(c) || 0, pt(p) && (te = !!p.leading, ie = "maxWait" in p, C = ie ? _t(Pr(p.maxWait) || 0, c) : C, le = "trailing" in p ? !!p.trailing : le);
        function ve(mt) {
          var Hr = m, En = P;
          return m = P = r, ee = mt, I = o.apply(En, Hr), I;
        }
        function Oe(mt) {
          return ee = mt, R = Yo(De, c), te ? ve(mt) : I;
        }
        function Re(mt) {
          var Hr = mt - W, En = mt - ee, pb = c - Hr;
          return ie ? Nt(pb, C - En) : pb;
        }
        function Ae(mt) {
          var Hr = mt - W, En = mt - ee;
          return W === r || Hr >= c || Hr < 0 || ie && En >= C;
        }
        function De() {
          var mt = ic();
          if (Ae(mt))
            return Fe(mt);
          R = Yo(De, Re(mt));
        }
        function Fe(mt) {
          return R = r, le && m ? ve(mt) : (m = P = r, I);
        }
        function sr() {
          R !== r && am(R), ee = 0, m = W = P = R = r;
        }
        function zt() {
          return R === r ? I : Fe(ic());
        }
        function cr() {
          var mt = ic(), Hr = Ae(mt);
          if (m = arguments, P = this, W = mt, Hr) {
            if (R === r)
              return Oe(W);
            if (ie)
              return am(R), R = Yo(De, c), ve(W);
          }
          return R === r && (R = Yo(De, c)), I;
        }
        return cr.cancel = sr, cr.flush = zt, cr;
      }
      var PC = Ne(function(o, c) {
        return Ly(o, 1, c);
      }), EC = Ne(function(o, c, p) {
        return Ly(o, Pr(c) || 0, p);
      });
      function TC(o) {
        return _n(o, F);
      }
      function ac(o, c) {
        if (typeof o != "function" || c != null && typeof c != "function")
          throw new wr(u);
        var p = function() {
          var m = arguments, P = c ? c.apply(this, m) : m[0], C = p.cache;
          if (C.has(P))
            return C.get(P);
          var I = o.apply(this, m);
          return p.cache = C.set(P, I) || C, I;
        };
        return p.cache = new (ac.Cache || xn)(), p;
      }
      ac.Cache = xn;
      function oc(o) {
        if (typeof o != "function")
          throw new wr(u);
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
      function $C(o) {
        return Gm(2, o);
      }
      var CC = g$(function(o, c) {
        c = c.length == 1 && Ce(c[0]) ? ft(c[0], ar(_e())) : ft(jt(c, 1), ar(_e()));
        var p = c.length;
        return Ne(function(m) {
          for (var P = -1, C = Nt(m.length, p); ++P < C; )
            m[P] = c[P].call(this, m[P]);
          return ir(o, this, m);
        });
      }), Md = Ne(function(o, c) {
        var p = Jn(c, _a(Md));
        return _n(o, x, r, c, p);
      }), Xm = Ne(function(o, c) {
        var p = Jn(c, _a(Xm));
        return _n(o, E, r, c, p);
      }), MC = On(function(o, c) {
        return _n(o, M, r, r, r, c);
      });
      function IC(o, c) {
        if (typeof o != "function")
          throw new wr(u);
        return c = c === r ? c : Ie(c), Ne(o, c);
      }
      function kC(o, c) {
        if (typeof o != "function")
          throw new wr(u);
        return c = c == null ? 0 : _t(Ie(c), 0), Ne(function(p) {
          var m = p[c], P = ni(p, 0, c);
          return m && Zn(P, m), ir(o, this, P);
        });
      }
      function jC(o, c, p) {
        var m = !0, P = !0;
        if (typeof o != "function")
          throw new wr(u);
        return pt(p) && (m = "leading" in p ? !!p.leading : m, P = "trailing" in p ? !!p.trailing : P), Ym(o, c, {
          leading: m,
          maxWait: c,
          trailing: P
        });
      }
      function RC(o) {
        return Hm(o, 1);
      }
      function NC(o, c) {
        return Md(vd(c), o);
      }
      function DC() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return Ce(o) ? o : [o];
      }
      function LC(o) {
        return Or(o, g);
      }
      function BC(o, c) {
        return c = typeof c == "function" ? c : r, Or(o, g, c);
      }
      function FC(o) {
        return Or(o, h | g);
      }
      function WC(o, c) {
        return c = typeof c == "function" ? c : r, Or(o, h | g, c);
      }
      function zC(o, c) {
        return c == null || Dy(o, c, $t(c));
      }
      function Ur(o, c) {
        return o === c || o !== o && c !== c;
      }
      var UC = Js(nd), HC = Js(function(o, c) {
        return o >= c;
      }), Ri = Uy(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Uy : function(o) {
        return vt(o) && Xe.call(o, "callee") && !$y.call(o, "callee");
      }, Ce = q.isArray, GC = ly ? ar(ly) : QT;
      function Xt(o) {
        return o != null && uc(o.length) && !Sn(o);
      }
      function yt(o) {
        return vt(o) && Xt(o);
      }
      function KC(o) {
        return o === !0 || o === !1 || vt(o) && Ft(o) == we;
      }
      var ii = oT || zd, qC = fy ? ar(fy) : e$;
      function VC(o) {
        return vt(o) && o.nodeType === 1 && !Xo(o);
      }
      function YC(o) {
        if (o == null)
          return !0;
        if (Xt(o) && (Ce(o) || typeof o == "string" || typeof o.splice == "function" || ii(o) || Oa(o) || Ri(o)))
          return !o.length;
        var c = Dt(o);
        if (c == be || c == gt)
          return !o.size;
        if (Vo(o))
          return !od(o).length;
        for (var p in o)
          if (Xe.call(o, p))
            return !1;
        return !0;
      }
      function XC(o, c) {
        return Go(o, c);
      }
      function ZC(o, c, p) {
        p = typeof p == "function" ? p : r;
        var m = p ? p(o, c) : r;
        return m === r ? Go(o, c, r, p) : !!m;
      }
      function Id(o) {
        if (!vt(o))
          return !1;
        var c = Ft(o);
        return c == pe || c == se || typeof o.message == "string" && typeof o.name == "string" && !Xo(o);
      }
      function JC(o) {
        return typeof o == "number" && My(o);
      }
      function Sn(o) {
        if (!pt(o))
          return !1;
        var c = Ft(o);
        return c == j || c == Ee || c == ye || c == Fr;
      }
      function Zm(o) {
        return typeof o == "number" && o == Ie(o);
      }
      function uc(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= K;
      }
      function pt(o) {
        var c = typeof o;
        return o != null && (c == "object" || c == "function");
      }
      function vt(o) {
        return o != null && typeof o == "object";
      }
      var Jm = dy ? ar(dy) : r$;
      function QC(o, c) {
        return o === c || ad(o, c, _d(c));
      }
      function eM(o, c, p) {
        return p = typeof p == "function" ? p : r, ad(o, c, _d(c), p);
      }
      function tM(o) {
        return Qm(o) && o != +o;
      }
      function rM(o) {
        if (B$(o))
          throw new $e(a);
        return Hy(o);
      }
      function nM(o) {
        return o === null;
      }
      function iM(o) {
        return o == null;
      }
      function Qm(o) {
        return typeof o == "number" || vt(o) && Ft(o) == We;
      }
      function Xo(o) {
        if (!vt(o) || Ft(o) != at)
          return !1;
        var c = js(o);
        if (c === null)
          return !0;
        var p = Xe.call(c, "constructor") && c.constructor;
        return typeof p == "function" && p instanceof p && Cs.call(p) == eT;
      }
      var kd = hy ? ar(hy) : n$;
      function aM(o) {
        return Zm(o) && o >= -K && o <= K;
      }
      var eb = py ? ar(py) : i$;
      function sc(o) {
        return typeof o == "string" || !Ce(o) && vt(o) && Ft(o) == mn;
      }
      function ur(o) {
        return typeof o == "symbol" || vt(o) && Ft(o) == Vn;
      }
      var Oa = vy ? ar(vy) : a$;
      function oM(o) {
        return o === r;
      }
      function uM(o) {
        return vt(o) && Dt(o) == Yn;
      }
      function sM(o) {
        return vt(o) && Ft(o) == ws;
      }
      var cM = Js(ud), lM = Js(function(o, c) {
        return o <= c;
      });
      function tb(o) {
        if (!o)
          return [];
        if (Xt(o))
          return sc(o) ? Wr(o) : Yt(o);
        if (Do && o[Do])
          return zE(o[Do]());
        var c = Dt(o), p = c == be ? Vf : c == gt ? Es : Aa;
        return p(o);
      }
      function Pn(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Pr(o), o === Z || o === -Z) {
          var c = o < 0 ? -1 : 1;
          return c * ue;
        }
        return o === o ? o : 0;
      }
      function Ie(o) {
        var c = Pn(o), p = c % 1;
        return c === c ? p ? c - p : c : 0;
      }
      function rb(o) {
        return o ? Mi(Ie(o), 0, X) : 0;
      }
      function Pr(o) {
        if (typeof o == "number")
          return o;
        if (ur(o))
          return G;
        if (pt(o)) {
          var c = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = pt(c) ? c + "" : c;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = wy(o);
        var p = GP.test(o);
        return p || qP.test(o) ? SE(o.slice(2), p ? 2 : 8) : HP.test(o) ? G : +o;
      }
      function nb(o) {
        return an(o, Zt(o));
      }
      function fM(o) {
        return o ? Mi(Ie(o), -K, K) : o === 0 ? o : 0;
      }
      function Ge(o) {
        return o == null ? "" : or(o);
      }
      var dM = xa(function(o, c) {
        if (Vo(c) || Xt(c)) {
          an(c, $t(c), o);
          return;
        }
        for (var p in c)
          Xe.call(c, p) && zo(o, p, c[p]);
      }), ib = xa(function(o, c) {
        an(c, Zt(c), o);
      }), cc = xa(function(o, c, p, m) {
        an(c, Zt(c), o, m);
      }), hM = xa(function(o, c, p, m) {
        an(c, $t(c), o, m);
      }), pM = On(ed);
      function vM(o, c) {
        var p = ba(o);
        return c == null ? p : Ny(p, c);
      }
      var gM = Ne(function(o, c) {
        o = et(o);
        var p = -1, m = c.length, P = m > 2 ? c[2] : r;
        for (P && Wt(c[0], c[1], P) && (m = 1); ++p < m; )
          for (var C = c[p], I = Zt(C), R = -1, W = I.length; ++R < W; ) {
            var ee = I[R], te = o[ee];
            (te === r || Ur(te, ga[ee]) && !Xe.call(o, ee)) && (o[ee] = C[ee]);
          }
        return o;
      }), yM = Ne(function(o) {
        return o.push(r, wm), ir(ab, r, o);
      });
      function mM(o, c) {
        return yy(o, _e(c, 3), nn);
      }
      function bM(o, c) {
        return yy(o, _e(c, 3), rd);
      }
      function xM(o, c) {
        return o == null ? o : td(o, _e(c, 3), Zt);
      }
      function wM(o, c) {
        return o == null ? o : Wy(o, _e(c, 3), Zt);
      }
      function _M(o, c) {
        return o && nn(o, _e(c, 3));
      }
      function OM(o, c) {
        return o && rd(o, _e(c, 3));
      }
      function AM(o) {
        return o == null ? [] : Hs(o, $t(o));
      }
      function SM(o) {
        return o == null ? [] : Hs(o, Zt(o));
      }
      function jd(o, c, p) {
        var m = o == null ? r : Ii(o, c);
        return m === r ? p : m;
      }
      function PM(o, c) {
        return o != null && Am(o, c, YT);
      }
      function Rd(o, c) {
        return o != null && Am(o, c, XT);
      }
      var EM = gm(function(o, c, p) {
        c != null && typeof c.toString != "function" && (c = Ms.call(c)), o[c] = p;
      }, Dd(Jt)), TM = gm(function(o, c, p) {
        c != null && typeof c.toString != "function" && (c = Ms.call(c)), Xe.call(o, c) ? o[c].push(p) : o[c] = [p];
      }, _e), $M = Ne(Ho);
      function $t(o) {
        return Xt(o) ? jy(o) : od(o);
      }
      function Zt(o) {
        return Xt(o) ? jy(o, !0) : o$(o);
      }
      function CM(o, c) {
        var p = {};
        return c = _e(c, 3), nn(o, function(m, P, C) {
          wn(p, c(m, P, C), m);
        }), p;
      }
      function MM(o, c) {
        var p = {};
        return c = _e(c, 3), nn(o, function(m, P, C) {
          wn(p, P, c(m, P, C));
        }), p;
      }
      var IM = xa(function(o, c, p) {
        Gs(o, c, p);
      }), ab = xa(function(o, c, p, m) {
        Gs(o, c, p, m);
      }), kM = On(function(o, c) {
        var p = {};
        if (o == null)
          return p;
        var m = !1;
        c = ft(c, function(C) {
          return C = ri(C, o), m || (m = C.length > 1), C;
        }), an(o, xd(o), p), m && (p = Or(p, h | v | g, E$));
        for (var P = c.length; P--; )
          dd(p, c[P]);
        return p;
      });
      function jM(o, c) {
        return ob(o, oc(_e(c)));
      }
      var RM = On(function(o, c) {
        return o == null ? {} : s$(o, c);
      });
      function ob(o, c) {
        if (o == null)
          return {};
        var p = ft(xd(o), function(m) {
          return [m];
        });
        return c = _e(c), Zy(o, p, function(m, P) {
          return c(m, P[0]);
        });
      }
      function NM(o, c, p) {
        c = ri(c, o);
        var m = -1, P = c.length;
        for (P || (P = 1, o = r); ++m < P; ) {
          var C = o == null ? r : o[on(c[m])];
          C === r && (m = P, C = p), o = Sn(C) ? C.call(o) : C;
        }
        return o;
      }
      function DM(o, c, p) {
        return o == null ? o : Ko(o, c, p);
      }
      function LM(o, c, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Ko(o, c, p, m);
      }
      var ub = bm($t), sb = bm(Zt);
      function BM(o, c, p) {
        var m = Ce(o), P = m || ii(o) || Oa(o);
        if (c = _e(c, 4), p == null) {
          var C = o && o.constructor;
          P ? p = m ? new C() : [] : pt(o) ? p = Sn(C) ? ba(js(o)) : {} : p = {};
        }
        return (P ? xr : nn)(o, function(I, R, W) {
          return c(p, I, R, W);
        }), p;
      }
      function FM(o, c) {
        return o == null ? !0 : dd(o, c);
      }
      function WM(o, c, p) {
        return o == null ? o : rm(o, c, vd(p));
      }
      function zM(o, c, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : rm(o, c, vd(p), m);
      }
      function Aa(o) {
        return o == null ? [] : qf(o, $t(o));
      }
      function UM(o) {
        return o == null ? [] : qf(o, Zt(o));
      }
      function HM(o, c, p) {
        return p === r && (p = c, c = r), p !== r && (p = Pr(p), p = p === p ? p : 0), c !== r && (c = Pr(c), c = c === c ? c : 0), Mi(Pr(o), c, p);
      }
      function GM(o, c, p) {
        return c = Pn(c), p === r ? (p = c, c = 0) : p = Pn(p), o = Pr(o), ZT(o, c, p);
      }
      function KM(o, c, p) {
        if (p && typeof p != "boolean" && Wt(o, c, p) && (c = p = r), p === r && (typeof c == "boolean" ? (p = c, c = r) : typeof o == "boolean" && (p = o, o = r)), o === r && c === r ? (o = 0, c = 1) : (o = Pn(o), c === r ? (c = o, o = 0) : c = Pn(c)), o > c) {
          var m = o;
          o = c, c = m;
        }
        if (p || o % 1 || c % 1) {
          var P = Iy();
          return Nt(o + P * (c - o + AE("1e-" + ((P + "").length - 1))), c);
        }
        return cd(o, c);
      }
      var qM = wa(function(o, c, p) {
        return c = c.toLowerCase(), o + (p ? cb(c) : c);
      });
      function cb(o) {
        return Nd(Ge(o).toLowerCase());
      }
      function lb(o) {
        return o = Ge(o), o && o.replace(YP, DE).replace(pE, "");
      }
      function VM(o, c, p) {
        o = Ge(o), c = or(c);
        var m = o.length;
        p = p === r ? m : Mi(Ie(p), 0, m);
        var P = p;
        return p -= c.length, p >= 0 && o.slice(p, P) == c;
      }
      function YM(o) {
        return o = Ge(o), o && $P.test(o) ? o.replace(Wg, LE) : o;
      }
      function XM(o) {
        return o = Ge(o), o && RP.test(o) ? o.replace(Mf, "\\$&") : o;
      }
      var ZM = wa(function(o, c, p) {
        return o + (p ? "-" : "") + c.toLowerCase();
      }), JM = wa(function(o, c, p) {
        return o + (p ? " " : "") + c.toLowerCase();
      }), QM = hm("toLowerCase");
      function eI(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        if (!c || m >= c)
          return o;
        var P = (c - m) / 2;
        return Zs(Ls(P), p) + o + Zs(Ds(P), p);
      }
      function tI(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        return c && m < c ? o + Zs(c - m, p) : o;
      }
      function rI(o, c, p) {
        o = Ge(o), c = Ie(c);
        var m = c ? pa(o) : 0;
        return c && m < c ? Zs(c - m, p) + o : o;
      }
      function nI(o, c, p) {
        return p || c == null ? c = 0 : c && (c = +c), lT(Ge(o).replace(If, ""), c || 0);
      }
      function iI(o, c, p) {
        return (p ? Wt(o, c, p) : c === r) ? c = 1 : c = Ie(c), ld(Ge(o), c);
      }
      function aI() {
        var o = arguments, c = Ge(o[0]);
        return o.length < 3 ? c : c.replace(o[1], o[2]);
      }
      var oI = wa(function(o, c, p) {
        return o + (p ? "_" : "") + c.toLowerCase();
      });
      function uI(o, c, p) {
        return p && typeof p != "number" && Wt(o, c, p) && (c = p = r), p = p === r ? X : p >>> 0, p ? (o = Ge(o), o && (typeof c == "string" || c != null && !kd(c)) && (c = or(c), !c && ha(o)) ? ni(Wr(o), 0, p) : o.split(c, p)) : [];
      }
      var sI = wa(function(o, c, p) {
        return o + (p ? " " : "") + Nd(c);
      });
      function cI(o, c, p) {
        return o = Ge(o), p = p == null ? 0 : Mi(Ie(p), 0, o.length), c = or(c), o.slice(p, p + c.length) == c;
      }
      function lI(o, c, p) {
        var m = T.templateSettings;
        p && Wt(o, c, p) && (c = r), o = Ge(o), c = cc({}, c, m, xm);
        var P = cc({}, c.imports, m.imports, xm), C = $t(P), I = qf(P, C), R, W, ee = 0, te = c.interpolate || _s, ie = "__p += '", le = Yf(
          (c.escape || _s).source + "|" + te.source + "|" + (te === zg ? UP : _s).source + "|" + (c.evaluate || _s).source + "|$",
          "g"
        ), ve = "//# sourceURL=" + (Xe.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++bE + "]") + `
`;
        o.replace(le, function(Ae, De, Fe, sr, zt, cr) {
          return Fe || (Fe = sr), ie += o.slice(ee, cr).replace(XP, BE), De && (R = !0, ie += `' +
__e(` + De + `) +
'`), zt && (W = !0, ie += `';
` + zt + `;
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
        else if (WP.test(Oe))
          throw new $e(s);
        ie = (W ? ie.replace(SP, "") : ie).replace(PP, "$1").replace(EP, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (W ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
        var Re = db(function() {
          return He(C, ve + "return " + ie).apply(r, I);
        });
        if (Re.source = ie, Id(Re))
          throw Re;
        return Re;
      }
      function fI(o) {
        return Ge(o).toLowerCase();
      }
      function dI(o) {
        return Ge(o).toUpperCase();
      }
      function hI(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return wy(o);
        if (!o || !(c = or(c)))
          return o;
        var m = Wr(o), P = Wr(c), C = _y(m, P), I = Oy(m, P) + 1;
        return ni(m, C, I).join("");
      }
      function pI(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return o.slice(0, Sy(o) + 1);
        if (!o || !(c = or(c)))
          return o;
        var m = Wr(o), P = Oy(m, Wr(c)) + 1;
        return ni(m, 0, P).join("");
      }
      function vI(o, c, p) {
        if (o = Ge(o), o && (p || c === r))
          return o.replace(If, "");
        if (!o || !(c = or(c)))
          return o;
        var m = Wr(o), P = _y(m, Wr(c));
        return ni(m, P).join("");
      }
      function gI(o, c) {
        var p = D, m = B;
        if (pt(c)) {
          var P = "separator" in c ? c.separator : P;
          p = "length" in c ? Ie(c.length) : p, m = "omission" in c ? or(c.omission) : m;
        }
        o = Ge(o);
        var C = o.length;
        if (ha(o)) {
          var I = Wr(o);
          C = I.length;
        }
        if (p >= C)
          return o;
        var R = p - pa(m);
        if (R < 1)
          return m;
        var W = I ? ni(I, 0, R).join("") : o.slice(0, R);
        if (P === r)
          return W + m;
        if (I && (R += W.length - R), kd(P)) {
          if (o.slice(R).search(P)) {
            var ee, te = W;
            for (P.global || (P = Yf(P.source, Ge(Ug.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(te); )
              var ie = ee.index;
            W = W.slice(0, ie === r ? R : ie);
          }
        } else if (o.indexOf(or(P), R) != R) {
          var le = W.lastIndexOf(P);
          le > -1 && (W = W.slice(0, le));
        }
        return W + m;
      }
      function yI(o) {
        return o = Ge(o), o && TP.test(o) ? o.replace(Fg, KE) : o;
      }
      var mI = wa(function(o, c, p) {
        return o + (p ? " " : "") + c.toUpperCase();
      }), Nd = hm("toUpperCase");
      function fb(o, c, p) {
        return o = Ge(o), c = p ? r : c, c === r ? WE(o) ? YE(o) : IE(o) : o.match(c) || [];
      }
      var db = Ne(function(o, c) {
        try {
          return ir(o, r, c);
        } catch (p) {
          return Id(p) ? p : new $e(p);
        }
      }), bI = On(function(o, c) {
        return xr(c, function(p) {
          p = on(p), wn(o, p, Cd(o[p], o));
        }), o;
      });
      function xI(o) {
        var c = o == null ? 0 : o.length, p = _e();
        return o = c ? ft(o, function(m) {
          if (typeof m[1] != "function")
            throw new wr(u);
          return [p(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var P = -1; ++P < c; ) {
            var C = o[P];
            if (ir(C[0], this, m))
              return ir(C[1], this, m);
          }
        });
      }
      function wI(o) {
        return KT(Or(o, h));
      }
      function Dd(o) {
        return function() {
          return o;
        };
      }
      function _I(o, c) {
        return o == null || o !== o ? c : o;
      }
      var OI = vm(), AI = vm(!0);
      function Jt(o) {
        return o;
      }
      function Ld(o) {
        return Gy(typeof o == "function" ? o : Or(o, h));
      }
      function SI(o) {
        return qy(Or(o, h));
      }
      function PI(o, c) {
        return Vy(o, Or(c, h));
      }
      var EI = Ne(function(o, c) {
        return function(p) {
          return Ho(p, o, c);
        };
      }), TI = Ne(function(o, c) {
        return function(p) {
          return Ho(o, p, c);
        };
      });
      function Bd(o, c, p) {
        var m = $t(c), P = Hs(c, m);
        p == null && !(pt(c) && (P.length || !m.length)) && (p = c, c = o, o = this, P = Hs(c, $t(c)));
        var C = !(pt(p) && "chain" in p) || !!p.chain, I = Sn(o);
        return xr(P, function(R) {
          var W = c[R];
          o[R] = W, I && (o.prototype[R] = function() {
            var ee = this.__chain__;
            if (C || ee) {
              var te = o(this.__wrapped__), ie = te.__actions__ = Yt(this.__actions__);
              return ie.push({ func: W, args: arguments, thisArg: o }), te.__chain__ = ee, te;
            }
            return W.apply(o, Zn([this.value()], arguments));
          });
        }), o;
      }
      function $I() {
        return kt._ === this && (kt._ = tT), this;
      }
      function Fd() {
      }
      function CI(o) {
        return o = Ie(o), Ne(function(c) {
          return Yy(c, o);
        });
      }
      var MI = yd(ft), II = yd(gy), kI = yd(zf);
      function hb(o) {
        return Ad(o) ? Uf(on(o)) : c$(o);
      }
      function jI(o) {
        return function(c) {
          return o == null ? r : Ii(o, c);
        };
      }
      var RI = ym(), NI = ym(!0);
      function Wd() {
        return [];
      }
      function zd() {
        return !1;
      }
      function DI() {
        return {};
      }
      function LI() {
        return "";
      }
      function BI() {
        return !0;
      }
      function FI(o, c) {
        if (o = Ie(o), o < 1 || o > K)
          return [];
        var p = X, m = Nt(o, X);
        c = _e(c), o -= X;
        for (var P = Kf(m, c); ++p < o; )
          c(p);
        return P;
      }
      function WI(o) {
        return Ce(o) ? ft(o, on) : ur(o) ? [o] : Yt(km(Ge(o)));
      }
      function zI(o) {
        var c = ++QE;
        return Ge(o) + c;
      }
      var UI = Xs(function(o, c) {
        return o + c;
      }, 0), HI = md("ceil"), GI = Xs(function(o, c) {
        return o / c;
      }, 1), KI = md("floor");
      function qI(o) {
        return o && o.length ? Us(o, Jt, nd) : r;
      }
      function VI(o, c) {
        return o && o.length ? Us(o, _e(c, 2), nd) : r;
      }
      function YI(o) {
        return by(o, Jt);
      }
      function XI(o, c) {
        return by(o, _e(c, 2));
      }
      function ZI(o) {
        return o && o.length ? Us(o, Jt, ud) : r;
      }
      function JI(o, c) {
        return o && o.length ? Us(o, _e(c, 2), ud) : r;
      }
      var QI = Xs(function(o, c) {
        return o * c;
      }, 1), ek = md("round"), tk = Xs(function(o, c) {
        return o - c;
      }, 0);
      function rk(o) {
        return o && o.length ? Gf(o, Jt) : 0;
      }
      function nk(o, c) {
        return o && o.length ? Gf(o, _e(c, 2)) : 0;
      }
      return T.after = SC, T.ary = Hm, T.assign = dM, T.assignIn = ib, T.assignInWith = cc, T.assignWith = hM, T.at = pM, T.before = Gm, T.bind = Cd, T.bindAll = bI, T.bindKey = Km, T.castArray = DC, T.chain = Wm, T.chunk = K$, T.compact = q$, T.concat = V$, T.cond = xI, T.conforms = wI, T.constant = Dd, T.countBy = rC, T.create = vM, T.curry = qm, T.curryRight = Vm, T.debounce = Ym, T.defaults = gM, T.defaultsDeep = yM, T.defer = PC, T.delay = EC, T.difference = Y$, T.differenceBy = X$, T.differenceWith = Z$, T.drop = J$, T.dropRight = Q$, T.dropRightWhile = e2, T.dropWhile = t2, T.fill = r2, T.filter = iC, T.flatMap = uC, T.flatMapDeep = sC, T.flatMapDepth = cC, T.flatten = Dm, T.flattenDeep = n2, T.flattenDepth = i2, T.flip = TC, T.flow = OI, T.flowRight = AI, T.fromPairs = a2, T.functions = AM, T.functionsIn = SM, T.groupBy = lC, T.initial = u2, T.intersection = s2, T.intersectionBy = c2, T.intersectionWith = l2, T.invert = EM, T.invertBy = TM, T.invokeMap = dC, T.iteratee = Ld, T.keyBy = hC, T.keys = $t, T.keysIn = Zt, T.map = nc, T.mapKeys = CM, T.mapValues = MM, T.matches = SI, T.matchesProperty = PI, T.memoize = ac, T.merge = IM, T.mergeWith = ab, T.method = EI, T.methodOf = TI, T.mixin = Bd, T.negate = oc, T.nthArg = CI, T.omit = kM, T.omitBy = jM, T.once = $C, T.orderBy = pC, T.over = MI, T.overArgs = CC, T.overEvery = II, T.overSome = kI, T.partial = Md, T.partialRight = Xm, T.partition = vC, T.pick = RM, T.pickBy = ob, T.property = hb, T.propertyOf = jI, T.pull = p2, T.pullAll = Bm, T.pullAllBy = v2, T.pullAllWith = g2, T.pullAt = y2, T.range = RI, T.rangeRight = NI, T.rearg = MC, T.reject = mC, T.remove = m2, T.rest = IC, T.reverse = Td, T.sampleSize = xC, T.set = DM, T.setWith = LM, T.shuffle = wC, T.slice = b2, T.sortBy = AC, T.sortedUniq = P2, T.sortedUniqBy = E2, T.split = uI, T.spread = kC, T.tail = T2, T.take = $2, T.takeRight = C2, T.takeRightWhile = M2, T.takeWhile = I2, T.tap = q2, T.throttle = jC, T.thru = rc, T.toArray = tb, T.toPairs = ub, T.toPairsIn = sb, T.toPath = WI, T.toPlainObject = nb, T.transform = BM, T.unary = RC, T.union = k2, T.unionBy = j2, T.unionWith = R2, T.uniq = N2, T.uniqBy = D2, T.uniqWith = L2, T.unset = FM, T.unzip = $d, T.unzipWith = Fm, T.update = WM, T.updateWith = zM, T.values = Aa, T.valuesIn = UM, T.without = B2, T.words = fb, T.wrap = NC, T.xor = F2, T.xorBy = W2, T.xorWith = z2, T.zip = U2, T.zipObject = H2, T.zipObjectDeep = G2, T.zipWith = K2, T.entries = ub, T.entriesIn = sb, T.extend = ib, T.extendWith = cc, Bd(T, T), T.add = UI, T.attempt = db, T.camelCase = qM, T.capitalize = cb, T.ceil = HI, T.clamp = HM, T.clone = LC, T.cloneDeep = FC, T.cloneDeepWith = WC, T.cloneWith = BC, T.conformsTo = zC, T.deburr = lb, T.defaultTo = _I, T.divide = GI, T.endsWith = VM, T.eq = Ur, T.escape = YM, T.escapeRegExp = XM, T.every = nC, T.find = aC, T.findIndex = Rm, T.findKey = mM, T.findLast = oC, T.findLastIndex = Nm, T.findLastKey = bM, T.floor = KI, T.forEach = zm, T.forEachRight = Um, T.forIn = xM, T.forInRight = wM, T.forOwn = _M, T.forOwnRight = OM, T.get = jd, T.gt = UC, T.gte = HC, T.has = PM, T.hasIn = Rd, T.head = Lm, T.identity = Jt, T.includes = fC, T.indexOf = o2, T.inRange = GM, T.invoke = $M, T.isArguments = Ri, T.isArray = Ce, T.isArrayBuffer = GC, T.isArrayLike = Xt, T.isArrayLikeObject = yt, T.isBoolean = KC, T.isBuffer = ii, T.isDate = qC, T.isElement = VC, T.isEmpty = YC, T.isEqual = XC, T.isEqualWith = ZC, T.isError = Id, T.isFinite = JC, T.isFunction = Sn, T.isInteger = Zm, T.isLength = uc, T.isMap = Jm, T.isMatch = QC, T.isMatchWith = eM, T.isNaN = tM, T.isNative = rM, T.isNil = iM, T.isNull = nM, T.isNumber = Qm, T.isObject = pt, T.isObjectLike = vt, T.isPlainObject = Xo, T.isRegExp = kd, T.isSafeInteger = aM, T.isSet = eb, T.isString = sc, T.isSymbol = ur, T.isTypedArray = Oa, T.isUndefined = oM, T.isWeakMap = uM, T.isWeakSet = sM, T.join = f2, T.kebabCase = ZM, T.last = Sr, T.lastIndexOf = d2, T.lowerCase = JM, T.lowerFirst = QM, T.lt = cM, T.lte = lM, T.max = qI, T.maxBy = VI, T.mean = YI, T.meanBy = XI, T.min = ZI, T.minBy = JI, T.stubArray = Wd, T.stubFalse = zd, T.stubObject = DI, T.stubString = LI, T.stubTrue = BI, T.multiply = QI, T.nth = h2, T.noConflict = $I, T.noop = Fd, T.now = ic, T.pad = eI, T.padEnd = tI, T.padStart = rI, T.parseInt = nI, T.random = KM, T.reduce = gC, T.reduceRight = yC, T.repeat = iI, T.replace = aI, T.result = NM, T.round = ek, T.runInContext = L, T.sample = bC, T.size = _C, T.snakeCase = oI, T.some = OC, T.sortedIndex = x2, T.sortedIndexBy = w2, T.sortedIndexOf = _2, T.sortedLastIndex = O2, T.sortedLastIndexBy = A2, T.sortedLastIndexOf = S2, T.startCase = sI, T.startsWith = cI, T.subtract = tk, T.sum = rk, T.sumBy = nk, T.template = lI, T.times = FI, T.toFinite = Pn, T.toInteger = Ie, T.toLength = rb, T.toLower = fI, T.toNumber = Pr, T.toSafeInteger = fM, T.toString = Ge, T.toUpper = dI, T.trim = hI, T.trimEnd = pI, T.trimStart = vI, T.truncate = gI, T.unescape = yI, T.uniqueId = zI, T.upperCase = mI, T.upperFirst = Nd, T.each = zm, T.eachRight = Um, T.first = Lm, Bd(T, function() {
        var o = {};
        return nn(T, function(c, p) {
          Xe.call(T.prototype, p) || (o[p] = c);
        }), o;
      }(), { chain: !1 }), T.VERSION = n, xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        T[o].placeholder = T;
      }), xr(["drop", "take"], function(o, c) {
        Be.prototype[o] = function(p) {
          p = p === r ? 1 : _t(Ie(p), 0);
          var m = this.__filtered__ && !c ? new Be(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Nt(p, m.__takeCount__) : m.__views__.push({
            size: Nt(p, X),
            type: o + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Be.prototype[o + "Right"] = function(p) {
          return this.reverse()[o](p).reverse();
        };
      }), xr(["filter", "map", "takeWhile"], function(o, c) {
        var p = c + 1, m = p == z || p == H;
        Be.prototype[o] = function(P) {
          var C = this.clone();
          return C.__iteratees__.push({
            iteratee: _e(P, 3),
            type: p
          }), C.__filtered__ = C.__filtered__ || m, C;
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
          return Ho(p, o, c);
        });
      }), Be.prototype.reject = function(o) {
        return this.filter(oc(_e(o)));
      }, Be.prototype.slice = function(o, c) {
        o = Ie(o);
        var p = this;
        return p.__filtered__ && (o > 0 || c < 0) ? new Be(p) : (o < 0 ? p = p.takeRight(-o) : o && (p = p.drop(o)), c !== r && (c = Ie(c), p = c < 0 ? p.dropRight(-c) : p.take(c - o)), p);
      }, Be.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Be.prototype.toArray = function() {
        return this.take(X);
      }, nn(Be.prototype, function(o, c) {
        var p = /^(?:filter|find|map|reject)|While$/.test(c), m = /^(?:head|last)$/.test(c), P = T[m ? "take" + (c == "last" ? "Right" : "") : c], C = m || /^find/.test(c);
        P && (T.prototype[c] = function() {
          var I = this.__wrapped__, R = m ? [1] : arguments, W = I instanceof Be, ee = R[0], te = W || Ce(I), ie = function(De) {
            var Fe = P.apply(T, Zn([De], R));
            return m && le ? Fe[0] : Fe;
          };
          te && p && typeof ee == "function" && ee.length != 1 && (W = te = !1);
          var le = this.__chain__, ve = !!this.__actions__.length, Oe = C && !le, Re = W && !ve;
          if (!C && te) {
            I = Re ? I : new Be(this);
            var Ae = o.apply(I, R);
            return Ae.__actions__.push({ func: rc, args: [ie], thisArg: r }), new _r(Ae, le);
          }
          return Oe && Re ? o.apply(this, R) : (Ae = this.thru(ie), Oe ? m ? Ae.value()[0] : Ae.value() : Ae);
        });
      }), xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var c = Ts[o], p = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(o);
        T.prototype[o] = function() {
          var P = arguments;
          if (m && !this.__chain__) {
            var C = this.value();
            return c.apply(Ce(C) ? C : [], P);
          }
          return this[p](function(I) {
            return c.apply(Ce(I) ? I : [], P);
          });
        };
      }), nn(Be.prototype, function(o, c) {
        var p = T[c];
        if (p) {
          var m = p.name + "";
          Xe.call(ma, m) || (ma[m] = []), ma[m].push({ name: c, func: p });
        }
      }), ma[Ys(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Be.prototype.clone = yT, Be.prototype.reverse = mT, Be.prototype.value = bT, T.prototype.at = V2, T.prototype.chain = Y2, T.prototype.commit = X2, T.prototype.next = Z2, T.prototype.plant = Q2, T.prototype.reverse = eC, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = tC, T.prototype.first = T.prototype.head, Do && (T.prototype[Do] = J2), T;
    }, va = XE();
    Ei ? ((Ei.exports = va)._ = va, Lf._ = va) : kt._ = va;
  }).call(pr);
})(Il, Il.exports);
var Zre = Il.exports;
function Jre(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Qre = (e) => {
  const t = Zre.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, u]) => {
        n < u && (n = u, r = a);
      }
    );
  }), r;
}, ene = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, u) => {
  const s = Object.keys(e), l = Jre(t), f = Math.max(
    ...l.map((v) => hf(`${v.x}`))
  ), d = {
    ...Pg(r),
    type: "number",
    dataKey: Qre(l)
  }, h = {
    ...Eg(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ Y(To, { config: e, ref: u, aspect: a, children: /* @__PURE__ */ Qe(
    LS,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ Y(
          ms,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y($o, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(
          gs,
          {
            ...pf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ Y(Kn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ Y(
          qn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        s.map((v, g) => /* @__PURE__ */ Y(ja, { children: /* @__PURE__ */ Y(
          Si,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || Nn(g),
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
}, tie = Co(ene), rie = ck(
  {
    name: "Icon",
    type: "info"
  },
  n_
);
var tne = "Expected a function", U1 = NaN, rne = "[object Symbol]", nne = /^\s+|\s+$/g, ine = /^[-+]0x[0-9a-f]+$/i, ane = /^0b[01]+$/i, one = /^0o[0-7]+$/i, une = parseInt, sne = typeof pr == "object" && pr && pr.Object === Object && pr, cne = typeof self == "object" && self && self.Object === Object && self, lne = sne || cne || Function("return this")(), fne = Object.prototype, dne = fne.toString, hne = Math.max, pne = Math.min, Th = function() {
  return lne.Date.now();
};
function vne(e, t, r) {
  var n, i, a, u, s, l, f = 0, d = !1, h = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(tne);
  t = H1(t) || 0, hv(r) && (d = !!r.leading, h = "maxWait" in r, a = h ? hne(H1(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);
  function g(E) {
    var $ = n, M = i;
    return n = i = void 0, f = E, u = e.apply(M, $), u;
  }
  function b(E) {
    return f = E, s = setTimeout(A, t), d ? g(E) : u;
  }
  function y(E) {
    var $ = E - l, M = E - f, F = t - $;
    return h ? pne(F, a - M) : F;
  }
  function w(E) {
    var $ = E - l, M = E - f;
    return l === void 0 || $ >= t || $ < 0 || h && M >= a;
  }
  function A() {
    var E = Th();
    if (w(E))
      return O(E);
    s = setTimeout(A, y(E));
  }
  function O(E) {
    return s = void 0, v && n ? g(E) : (n = i = void 0, u);
  }
  function S() {
    s !== void 0 && clearTimeout(s), f = 0, n = l = i = s = void 0;
  }
  function _() {
    return s === void 0 ? u : O(Th());
  }
  function x() {
    var E = Th(), $ = w(E);
    if (n = arguments, i = this, l = E, $) {
      if (s === void 0)
        return b(l);
      if (h)
        return s = setTimeout(A, t), g(l);
    }
    return s === void 0 && (s = setTimeout(A, t)), u;
  }
  return x.cancel = S, x.flush = _, x;
}
function hv(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function gne(e) {
  return !!e && typeof e == "object";
}
function yne(e) {
  return typeof e == "symbol" || gne(e) && dne.call(e) == rne;
}
function H1(e) {
  if (typeof e == "number")
    return e;
  if (yne(e))
    return U1;
  if (hv(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hv(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(nne, "");
  var r = ane.test(e);
  return r || one.test(e) ? une(e.slice(2), r ? 2 : 8) : ine.test(e) ? U1 : +e;
}
var mne = vne;
const G1 = /* @__PURE__ */ Ze(mne);
var Lg = typeof window < "u" ? pv : Rr;
function bne(e, t, r, n) {
  const i = Jr(t);
  Lg(() => {
    i.current = t;
  }, [t]), Rr(() => {
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
var xne = typeof window > "u";
function wne(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (s) => xne ? t : window.matchMedia(s).matches, [i, a] = jr(() => r ? n(e) : t);
  function u() {
    a(n(e));
  }
  return Lg(() => {
    const s = window.matchMedia(e);
    return u(), s.addListener ? s.addListener(u) : s.addEventListener("change", u), () => {
      s.removeListener ? s.removeListener(u) : s.removeEventListener("change", u);
    };
  }, [e]), i;
}
function _ne(e) {
  const t = Jr(e);
  t.current = e, Rr(
    () => () => {
      t.current();
    },
    []
  );
}
function One(e, t = 500, r) {
  const n = Jr();
  _ne(() => {
    n.current && n.current.cancel();
  });
  const i = fo(() => {
    const a = G1(e, t, r), u = (...s) => a(...s);
    return u.cancel = () => {
      a.cancel();
    }, u.isPending = () => !!n.current, u.flush = () => a.flush(), u;
  }, [e, t, r]);
  return Rr(() => {
    n.current = G1(e, t, r);
  }, [e, t, r]), i;
}
function nie({
  threshold: e = 0,
  root: t = null,
  rootMargin: r = "0%",
  freezeOnceVisible: n = !1,
  initialIsIntersecting: i = !1,
  onChange: a
} = {}) {
  var u;
  const [s, l] = jr(null), [f, d] = jr(() => ({
    isIntersecting: i,
    entry: void 0
  })), h = Jr();
  h.current = a;
  const v = ((u = f.entry) == null ? void 0 : u.isIntersecting) && n;
  Rr(() => {
    if (!s || !("IntersectionObserver" in window) || v)
      return;
    let y;
    const w = new IntersectionObserver(
      (A) => {
        const O = Array.isArray(w.thresholds) ? w.thresholds : [w.thresholds];
        A.forEach((S) => {
          const _ = S.isIntersecting && O.some((x) => S.intersectionRatio >= x);
          d({ isIntersecting: _, entry: S }), h.current && h.current(_, S), _ && n && y && (y(), y = void 0);
        });
      },
      { threshold: e, root: t, rootMargin: r }
    );
    return w.observe(s), () => {
      w.disconnect();
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
  const g = Jr(null);
  Rr(() => {
    var y;
    !s && ((y = f.entry) != null && y.target) && !n && !v && g.current !== f.entry.target && (g.current = f.entry.target, d({ isIntersecting: i, entry: void 0 }));
  }, [s, f.entry, n, v, i]);
  const b = [
    l,
    !!f.isIntersecting,
    f.entry
  ];
  return b.ref = b[0], b.isIntersecting = b[1], b.entry = b[2], b;
}
var Ane = typeof window > "u";
function iie(e = {}) {
  let { initializeWithValue: t = !0 } = e;
  Ane && (t = !1);
  const [r, n] = jr(() => t ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {
    width: void 0,
    height: void 0
  }), i = One(
    n,
    e.debounceDelay
  );
  function a() {
    (e.debounceDelay ? i : n)({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  return bne("resize", a), Lg(() => {
    a();
  }, []), r;
}
const aie = () => wne(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
);
var xs = {}, Bg = {};
Object.defineProperty(Bg, "__esModule", {
  value: !0
});
Bg.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
Object.defineProperty(xs, "__esModule", {
  value: !0
});
xs.TypeName = void 0;
var Sne = xs.parse = $ne;
xs.toCodePoints = wP;
var Pne = Bg, $h = Ene(Pne);
function Ene(e) {
  return e && e.__esModule ? e : { default: e };
}
var Tne = xs.TypeName = "emoji";
function $ne(e, t) {
  var r = t && t.assetType ? t.assetType : "svg", n = t && t.buildUrl ? t.buildUrl : function(l, f) {
    return f === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + l + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + l + ".svg";
  }, i = [];
  for ($h.default.lastIndex = 0; ; ) {
    var a = $h.default.exec(e);
    if (!a)
      break;
    var u = a[0], s = wP(Ine(u)).join("-");
    i.push({
      url: s ? n(s, r) : "",
      indices: [a.index, $h.default.lastIndex],
      text: u,
      type: Tne
    });
  }
  return i;
}
var Cne = /\uFE0F/g, Mne = "‍", Ine = function(t) {
  return t.indexOf(Mne) < 0 ? t.replace(Cne, "") : t;
};
function wP(e) {
  for (var t = [], r = 0, n = 0, i = 0; i < e.length; )
    r = e.charCodeAt(i++), n ? (t.push((65536 + (n - 55296 << 10) + (r - 56320)).toString(16)), n = 0) : r > 55296 && r <= 56319 ? n = r : t.push(r.toString(16));
  return t;
}
const kne = xi("", {
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
function oie({ emoji: e, size: t }) {
  const r = jne(e);
  return r ? /* @__PURE__ */ Y(
    "img",
    {
      src: r.url,
      alt: e,
      className: kne({ size: t }),
      draggable: !1
    }
  ) : /* @__PURE__ */ Y("span", { children: e });
}
const jne = (e) => {
  const [t] = Sne(e, {
    buildUrl: (r) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${r}.svg`
  });
  return t || null;
};
function uie(e) {
  return `${e} emoji`;
}
const K1 = Dr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Rne(e) {
  const t = Jr(null);
  return t.current === null && (t.current = e()), t.current;
}
const Nne = /* @__PURE__ */ new Set([
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
function kl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Nne.has(e);
}
let _P = (e) => !kl(e);
function OP(e) {
  e && (_P = (t) => t.startsWith("on") ? !kl(t) : e(t));
}
try {
  OP(require("@emotion/is-prop-valid").default);
} catch {
}
function sie(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (_P(i) || r === !0 && kl(i) || !t && !kl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function cie({ children: e, isValidProp: t, ...r }) {
  t && OP(t), r = { ...tr(K1), ...r }, r.isStatic = Rne(() => r.isStatic);
  const n = fo(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return Y(K1.Provider, { value: n, children: e });
}
const AP = Dr(void 0), lie = ({ children: e, ...t }) => /* @__PURE__ */ Y(AP.Provider, { value: t, children: e }), Dne = () => ({
  ...tr(AP)
}), fie = pi(
  function(t, r) {
    const { src: n } = Dne();
    if (!n) return /* @__PURE__ */ Y("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ Y("img", { ref: r, ...t, ...i });
  }
);
export {
  ia as $,
  qne as A,
  Vne as B,
  ck as C,
  hs as D,
  oie as E,
  Qr as F,
  St as G,
  ea as H,
  n_ as I,
  kr as J,
  Zr as K,
  Hne as L,
  cie as M,
  bt as N,
  EK as O,
  ca as P,
  Te as Q,
  ff as R,
  of as S,
  nf as T,
  tK as U,
  tie as V,
  so as W,
  Wne as X,
  K1 as Y,
  Rne as Z,
  sie as _,
  xi as a,
  lP as a0,
  Cn as a1,
  Mo as a2,
  To as a3,
  ms as a4,
  $o as a5,
  Sg as a6,
  df as a7,
  Vk as a8,
  zk as a9,
  fie as aa,
  mv as ab,
  tP as ac,
  yre as ad,
  US as ae,
  mre as af,
  cte as ag,
  bre as ah,
  fP as ai,
  Ore as aj,
  gre as ak,
  s_ as al,
  wne as am,
  o_ as an,
  Jee as ao,
  Gre as ap,
  Kre as aq,
  qre as ar,
  xP as as,
  nie as at,
  Pre as au,
  Yne as av,
  iie as aw,
  WS as b,
  Ht as c,
  Nn as d,
  Jne as e,
  Co as f,
  Qne as g,
  eie as h,
  Une as i,
  Kne as j,
  lie as k,
  Lg as l,
  Gne as m,
  rie as n,
  Zk as o,
  zne as p,
  aie as q,
  uie as r,
  me as s,
  it as t,
  Uk as u,
  Me as v,
  Ze as w,
  Pe as x,
  Le as y,
  qV as z
};
